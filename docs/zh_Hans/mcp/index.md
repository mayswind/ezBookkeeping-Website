---
title: MCP (Model Context Protocol)
---

# MCP (Model Context Protocol)

[Model Context Protocol](https://modelcontextprotocol.io) (MCP) 是由 Anthropic 开发的开放协议，使 AI 模型能够安全地连接到外部数据源和工具。它为 AI 工具提供了一种标准化的方式，可以在保证安全性和用户控制权的同时访问信息并执行操作。

通过 MCP 协议，您可以使用您喜爱的 AI 工具添加交易（例如，使用自然语言创建交易、批量导入不同格式的交易）、查询交易数据（例如，使用您的AI工具对历史交易数据进行分析）等。

> [!CAUTION] 警告
> 如果你使用第三方的大语言模型服务，请谨慎使用 MCP 功能，因为你的隐私数据会发送给第三方大模型服务。

## 配置

ezBookkeeping 默认没有启用 MCP 服务器，你可以修改配置文件中的 `enable_mcp` 或修改环境变量开启 MCP 功能，具体可以参考 [配置 - MCP](/zh_Hans/configuration/#mcp-model-context-protocol)，开启后在桌面版的 “用户设置” -> “安全” 页面中会出现 “生成令牌” 按钮。

## 与 AI 工具集成

ezBookkeeping 的 MCP 服务需要通过特殊的令牌进行访问，您可以在 ezBookkeeping 桌面版的 “用户设置” -> “安全” 页面中点击 “生成令牌” 按钮，输入当前用户密码即可。也可以通过 ezBookkeeping 的命令行工具 `user-session-new` 进行生成，具体可以参考 [命令行](/zh_Hans/command_line/#userdata)。

> [!NOTE] 提示
> 如果访问 MCP 服务器的 IP 地址固定（例如家庭内部网络），可以设置允许请求 MCP 服务器的 IP 地址，具体可以参考 [配置 - MCP](/zh_Hans/configuration/#mcp-model-context-protocol)。

然后，您可以将以下代码复制到您的 AI 工具的 MCP 服务器配置中，即可让您的 AI 工具访问与操作 ezBookkeeping 的数据。

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

## 支持的 MCP 工具

### 添加交易

**MCP Tool 名称**

`add_transaction`

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `type` | `string` | 必选 | 交易类型（income、expense、transfer） |
| `time` | `string` | 必选 | RFC 3339 格式的交易时间（例如 2023-01-01T12:00:00Z） |
| `category_name` | `string` | 必选 | 交易的二级分类名 |
| `account_name` | `string` | 必选 | 交易的账户名 |
| `amount` | `string` | 必选 | 交易金额 |
| `destination_account_name` | `string` | 可选 | 转账交易的目标账户名 |
| `destination_amount` | `string` | 可选 | 转账交易的目标金额 |
| `tags` | `string[]` | 可选 | 交易标签的列表（最多允许10个标签） |
| `comment` | `string` | 可选 | 交易备注 |
| `dry_run` | `boolean` | 可选 | 如果设置为 `true`，交易不会被保存，仅进行验证 |

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `success` | `boolean` | 必选 | 本次处理是否成功 |
| `dry_run` | `boolean` | 可选 | 本次处理是否仅为验证（交易未实际添加） |
| `account_balance` | `number` | 可选 | 交易添加后的账户余额（对于负债账户为未清余额） |
| `destination_account_balance` | `number` | 可选 | 交易（仅转账交易）添加后的目标账户余额（对于负债账户为未清余额） |

### 查询交易

**MCP Tool 名称**

`query_transactions`

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `start_time` | `string` | 必选 | RFC 3339 格式的查询开始时间（例如 2023-01-01T12:00:00Z） |
| `end_time` | `string` | 必选 | RFC 3339 格式的查询结束时间（例如 2023-01-01T12:00:00Z） |
| `type` | `string` | 可选 | 用于筛选的交易类型（income、expense、transfer） |
| `category_name` | `string` | 可选 | 用于筛选交易的一级或二级分类名称 |
| `account_name` | `string` | 可选 | 用于筛选交易的账户名 |
| `comment` | `string` | 可选 | 在交易描述中搜索的关键词 |
| `count` | `number` | 可选 | 返回结果最大的数量（默认：100） |
| `page` | `number` | 可选 | 用于分页的页码（默认：1） |
| `response_fields` | `string` | 可选 | 结果中包含的可选字段列表，使用逗号分隔（留空表示所有字段，可选字段：time, currency, category_name, account_name, comment） |

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `total_count` | `number` | 必选 | 符合查询的所有交易数量 |
| `current_page` | `number` | 必选 | 结果当前页码 |
| `total_page` | `number` | 必选 | 查询所有可用的页码数，根据 total_count 和 count 计算 |
| `transactions` | `MCPTransactionInfo[]` | 必选 | 符合查询的交易列表 |

**MCPTransactionInfo**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `time` | `string` | 可选 | RFC 3339 格式的交易时间（例如 2023-01-01T12:00:00Z） |
| `type` | `string` | 必选 | 交易类型（income、expense、transfer） |
| `amount` | `string` | 必选 | 指定货币下的交易金额 |
| `currency` | `string` | 可选 | 交易的货币代码（例如 USD、EUR） |
| `category_name` | `string` | 可选 | 交易的二级分类名 |
| `account_name` | `string` | 可选 | 交易的账户名 |
| `destination_amount` | `string` | 可选 | 转账交易的目标金额 |
| `destination_currency` | `string` | 可选 | 转账交易目标金额的货币代码 |
| `destination_account_name` | `string` | 可选 | 转账交易的目标账户名 |
| `comment` | `string` | 可选 | 交易备注 |

### 查询所有账户名

**MCP Tool 名称**

`query_all_accounts`

**请求参数**

无

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `cashAccounts` | `string[]` | 可选 | 现金账户名称列表 |
| `checkingAccounts` | `string[]` | 可选 | 借记账户名称列表 |
| `savingsAccounts` | `string[]` | 可选 | 储蓄账户名称列表 |
| `creditCardAccounts` | `string[]` | 可选 | 信用卡账户名称列表 |
| `virtualAccounts` | `string[]` | 可选 | 虚拟账户名称列表 |
| `debtAccounts` | `string[]` | 可选 | 负债账户名称列表 |
| `receivableAccounts` | `string[]` | 可选 | 应收款项账户名称列表 |
| `certificateOfDepositAccounts` | `string[]` | 可选 | 定期存款账户名称列表 |
| `investmentAccounts` | `string[]` | 可选 | 投资账户名称列表 |

### 查询所有账户余额

**MCP Tool 名称**

`query_all_accounts_balance`

**请求参数**

无

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `cashAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 现金账户余额列表 |
| `checkingAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 借记账户余额列表 |
| `savingsAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 储蓄账户余额列表 |
| `creditCardAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 信用卡账户未清余额列表 |
| `virtualAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 虚拟账户余额列表 |
| `debtAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 负债账户未清余额列表 |
| `receivableAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 应收款项账户余额列表 |
| `certificateOfDepositAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 定期存款账户余额列表 |
| `investmentAccounts` | `MCPAccountBalanceInfo[]` | 可选 | 投资账户余额列表 |

**MCPAccountBalanceInfo**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | 必选 | 账户名称 |
| `type` | `string` | 必选 | 账户类型（asset、liability） |
| `balance` | `string` | 可选 | 账户当前余额 |
| `outstandingBalance` | `string` | 可选 | 账户当前未清余额（正数表示欠款金额） |
| `currency` | `string` | 必选 | 账户货币代码（例如 USD、EUR） |

### 查询所有交易分类名

**MCP Tool 名称**

`query_all_transaction_categories`

**请求参数**

无

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `incomeCategories` | `Map<string, string[]>` | 必选 | 收入分类列表，字段名为一级分类名，字段值为二级字段名列表 |
| `expenseCategories` | `Map<string, string[]>` | 必选 | 支出分类列表，字段名为一级分类名，字段值为二级字段名列表 |
| `transferCategories` | `Map<string, string[]>` | 必选 | 转账分类列表，字段名为一级分类名，字段值为二级字段名列表 |

### 查询所有交易标签名

**MCP Tool 名称**

`query_all_transaction_tags`

**请求参数**

无

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `tags` | `string[]` | 必选 | 交易标签列表 |

### 查询最新的汇率

**MCP Tool 名称**

`query_latest_exchange_rates`

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `currencies` | `string` | 必选 | 用于查询汇率的货币列表，使用逗号分隔（例如 USD,CNY,EUR） |

**返回参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `base_currency` | `string` | 必选 | 基准货币代码（例如 USD） |
| `update_time` | `string` | 必选 | 汇率的最后更新时间（RFC 3339 格式，例如 "2023-01-01T12:00:00Z"） |
| `rates` | `MCPQueryExchangeRateInfo[]` | 必选 | 指定货币的汇率 |

**MCPQueryExchangeRateInfo**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `currency` | `string` | 必选 | 货币代码（例如 USD） |
| `rate_to_base` | `string` | 必选 | 该货币1元可兑换的基础货币数量 |
