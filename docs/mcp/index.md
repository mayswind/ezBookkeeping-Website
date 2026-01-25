---
title: MCP (Model Context Protocol)
---

# MCP (Model Context Protocol)

[Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open protocol developed by Anthropic that enables AI models to securely connect to external data sources and tools. It provides a standardized way for AI tools to access information and perform actions while maintaining security and user control.

With the MCP protocol, you can use your preferred AI tools to add transactions (e.g. create transactions using natural language or import multiple transactions from different formats), query transaction data (e.g. use your AI  tools to analyze historical transaction records), and more.

> [!CAUTION] CAUTION
> When using a third-party large language model service, be cautious with the MCP feature, because your private data may be sent to the third-party provider.

## Configuration

By default, ezBookkeeping does not enable the MCP server. You can enable it by updating the `enable_mcp` setting in the configuration file or by setting the environment variable. For details, see the [Configuration - MCP](/configuration/#mcp-model-context-protocol). After enabled, the "Generate Token" button will appear on "User Settings" -> "Security" page in the desktop version.

## Integration with AI Tools

The MCP service of ezBookkeeping requires a special token to access. You can go to "User Settings" -> "Security" and click the "Generate Token" button in desktop version, and then enter your password. Alternatively, you can generate the token by the `user-session-new` command in ezBookkeeping's CLI, for more details, see the [Command Line](/command_line/#userdata).

> [!NOTE] TIP
> If the IP address used to access the MCP server is fixed (e.g., within a home network), you can restrict specific IP addresses that can access the MCP server. For details, see the [Configuration - MCP](/configuration/#mcp-model-context-protocol).

Then, copy the following code into your AI tool's MCP server configuration to enable it to access and interact with ezBookkeeping data.

```json
{
    "mcpServers": {
        "ezbookkeeping-mcp": {
            "type": "streamable-http",
            "url": "http://{domain}/mcp",
            "headers": {
                "Authorization": "Bearer {token}"
            }
        }
    }
}
```

## Supported MCP Tool

### Add transaction

**MCP Tool Name**

`add_transaction`

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `string` | Required | Transaction type (income, expense, transfer) |
| `time` | `string` | Required | Transaction time in RFC 3339 format (e.g. 2023-01-01T12:00:00Z) |
| `category_name` | `string` | Required | Secondary category name for the transaction |
| `account_name` | `string` | Required | Account name for the transaction |
| `amount` | `string` | Required | Transaction amount |
| `destination_account_name` | `string` | Optional | Destination account name for transfer transactions |
| `destination_amount` | `string` | Optional | Destination amount for transfer transactions |
| `tags` | `string[]` | Optional | List of tags associated with the transaction (maximum 10 tags allowed) |
| `comment` | `string` | Optional | Transaction description |
| `dry_run` | `boolean` | Optional | If `true`, the transaction will not be saved, only validated |

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `success` | `boolean` | Required | Indicates whether this operation is successful |
| `dry_run` | `boolean` | Optional | Indicates whether this operation is a dry run (transaction not added actually) |
| `account_balance` | `number` | Optional | Account balance (or outstanding balance for debt accounts) after the transaction |
| `destination_account_balance` | `number` | Optional | Destination account balance (or outstanding balance for debt accounts) after the transaction (only for transfer transactions) |

### Query transactions

**MCP Tool Name**

`query_transactions`

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `start_time` | `string` | Required | Start time for the query in RFC 3339 format (e.g. 2023-01-01T12:00:00Z) |
| `end_time` | `string` | Required | End time for the query in RFC 3339 format or (e.g. 2023-01-01T12:00:00Z) |
| `type` | `string` | Optional | Transaction type to filter by (income, expense, transfer) |
| `category_name` | `string` | Optional | Primary or secondary category name to filter transactions by |
| `account_name` | `string` | Optional | Account name to filter transactions by |
| `comment` | `string` | Optional | Keyword to search in transaction description |
| `count` | `number` | Optional | Maximum number of results to return (default: 100) |
| `page` | `number` | Optional | Page number for pagination (default: 1) |
| `response_fields` | `string` | Optional | Comma-separated list of optional fields to include in the response (leave empty for all fields, available fields: time, currency, category_name, account_name, comment) |

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `total_count` | `number` | Required | Total number of transactions matching the query |
| `current_page` | `number` | Required | Current page number of the results |
| `total_page` | `number` | Required | Total number of pages available for the query, calculated based on total_count and count |
| `transactions` | `MCPTransactionInfo[]` | Required | List of transactions matching the query |

**MCPTransactionInfo**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `time` | `string` | Optional | Time of the transaction in RFC 3339 format (e.g. 2023-01-01T12:00:00Z) |
| `type` | `string` | Required | Transaction type (income, expense, transfer) |
| `amount` | `string` | Required | Amount of the transaction in the specified currency |
| `currency` | `string` | Optional | Currency code of the transaction (e.g. USD, EUR) |
| `category_name` | `string` | Optional | Secondary category name for the transaction |
| `account_name` | `string` | Optional | Account name for the transaction |
| `destination_amount` | `string` | Optional | Destination amount for transfer transactions |
| `destination_currency` | `string` | Optional | Currency code of the destination amount for transfer transactions |
| `destination_account_name` | `string` | Optional | Destination account name for transfer transactions |
| `comment` | `string` | Optional | Description of the transaction |

### Query all account names

**MCP Tool Name**

`query_all_accounts`

**Request Parameters**

None

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cashAccounts` | `string[]` | Optional | List of cash account names |
| `checkingAccounts` | `string[]` | Optional | List of checking account names |
| `savingsAccounts` | `string[]` | Optional | List of savings account names |
| `creditCardAccounts` | `string[]` | Optional | List of credit card account names |
| `virtualAccounts` | `string[]` | Optional | List of virtual account names |
| `debtAccounts` | `string[]` | Optional | List of debt account names |
| `receivableAccounts` | `string[]` | Optional | List of receivable account names |
| `certificateOfDepositAccounts` | `string[]` | Optional | List of certificate of deposit account names |
| `investmentAccounts` | `string[]` | Optional | List of investment account names |

### Query all account balances

**MCP Tool Name**

`query_all_accounts_balance`

**Request Parameters**

None

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cashAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of cash account balances |
| `checkingAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of checking account balances |
| `savingsAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of savings account balances |
| `creditCardAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of credit card account outstanding balances |
| `virtualAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of virtual account balances |
| `debtAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of debt account outstanding balances |
| `receivableAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of receivable account balances |
| `certificateOfDepositAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of certificate of deposit account balances |
| `investmentAccounts` | `MCPAccountBalanceInfo[]` | Optional | List of investment account balances |

**MCPAccountBalanceInfo**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | Account name |
| `type` | `string` | Required | Account type (asset or liability) |
| `balance` | `string` | Optional | Current balance of the account |
| `outstandingBalance` | `string` | Optional | Current outstanding balance of the account (positive value indicates amount owed) |
| `currency` | `string` | Required | Currency code of the account (e.g. USD, EUR) |

### Query all transaction category names

**MCP Tool Name**

`query_all_transaction_categories`

**Request Parameters**

None

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `incomeCategories` | `Map<string, string[]>` | Required | List of income categories, field key is the primary category name, field value is the list of secondary category names |
| `expenseCategories` | `Map<string, string[]>` | Required | List of expense categories, field key is the primary category name, field value is the list of secondary category names |
| `transferCategories` | `Map<string, string[]>` | Required | List of transfer categories, field key is the primary category name, field value is the list of secondary category names |

### Query all transaction tag names

**MCP Tool Name**

`query_all_transaction_tags`

**Request Parameters**

None

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tags` | `string[]` | Required | List of transaction tags |

### Query latest exchange rates

**MCP Tool Name**

`query_latest_exchange_rates`

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencies` | `string` | Required | Comma-separated list of currencies to query exchange rates for (e.g. USD,CNY,EUR) |

**Response Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `base_currency` | `string` | Required | Base currency code (e.g. USD) |
| `update_time` | `string` | Required | Last update time of the exchange rates in RFC 3339 format (e.g. "2023-01-01T12:00:00Z") |
| `rates` | `MCPQueryExchangeRateInfo[]` | Required | Exchange rates for the specified currencies |

**MCPQueryExchangeRateInfo**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currency` | `string` | Required | Currency code (e.g. USD) |
| `rate_to_base` | `string` | Required | The amount of the base currency that can be obtained for 1 unit of this currency |
