---
layout: default
title: MCP (Model Context Protocol)
nav_order: 8
permalink: /mcp
---

# MCP (Model Context Protocol)
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## What is MCP

[Model Context Protocol](https://modelcontextprotocol.io) (MCP) is an open protocol developed by Anthropic that enables AI models to securely connect to external data sources and tools. It provides a standardized way for AI tools to access information and perform actions while maintaining security and user control.

With the MCP protocol, you can use your preferred AI tools to add transactions (e.g. create transactions using natural language or import multiple transactions from different formats), query transaction data (e.g. use your AI  tools to analyze historical transaction records), and more.

## Configuration

By default, ezBookkeeping does not enable the MCP server. You can enable it by updating the `enable_mcp` setting in the configuration file or by setting the environment variable. For details, see the [Configuration](/configuration#mcp-model-context-protocol). After enabled, the “Generate MCP Token” button will appear on "User Settings" -> "Security" page in the desktop version.

## Integration with AI Tools

The MCP service of ezBookkeeping requires a special token to access. You can go to "User Settings" -> "Security" and click the "Generate MCP Token" button in desktop version, and then enter your password. Alternatively, you can generate the token by the `user-session-new` command in ezBookkeeping's CLI, for more details, see the [Command Line](/command_line#userdata).

> Note that the MCP token in ezBookkeeping is different from other types of tokens, that is MCP token does not have expiry time. If the IP address used to access the MCP server is fixed (e.g., within a home network), you can restrict specific IP addresses that can access the MCP server. For details, see the [Configuration](/configuration#mcp-model-context-protocol).

Then, copy the following code into your AI tool's MCP server configuration to enable it to access and interact with ezBookkeeping data.

```
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

### Query transactions

**MCP Tool Name**

`query_transactions`

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `start_time` | `string` | Required | Start time for the query in RFC 3339 format (e.g. 2023-01-01T12:00:00Z) |
| `end_time` | `string` | Required | End time for the query in RFC 3339 format or (e.g. 2023-01-01T12:00:00Z) |
| `type` | `string` | Optional | Transaction type to filter by (income, expense, transfer) |
| `category_name` | `string` | Optional | Secondary category name to filter transactions by |
| `account_name` | `string` | Optional | Account name to filter transactions by |
| `comment` | `string` | Optional | Keyword to search in transaction description |
| `count` | `number` | Optional | Maximum number of results to return (default: 100) |
| `page` | `number` | Optional | Page number for pagination (default: 1) |
| `response_fields` | `string` | Optional | Comma-separated list of fields to include in the response (leave empty for all fields, available fields: time, currency, category_name, account_name, comment) |

### Query all account names

**MCP Tool Name**

`query_all_accounts`

**Request Parameters**

None

### Query all transaction category names

**MCP Tool Name**

`query_all_transaction_categories`

**Request Parameters**

None

### Query all transaction tag names

**MCP Tool Name**

`query_all_transaction_tags`

**Request Parameters**

None

### Query latest exchange rates

**MCP Tool Name**

`query_latest_exchange_rates`

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currencies` | `string` | Required | Comma-separated list of currencies to query exchange rates for (e.g. USD,CNY,EUR) |
