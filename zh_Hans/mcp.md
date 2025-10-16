---
layout: default
locale: zh-Hans
title: MCP (Model Context Protocol)
nav_order: 8
parent: 中文 (简体)
permalink: /zh_Hans/mcp
---

# MCP (Model Context Protocol)
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## MCP 是什么

[Model Context Protocol](https://modelcontextprotocol.io) (MCP) 是由 Anthropic 开发的开放协议，使 AI 模型能够安全地连接到外部数据源和工具。它为 AI 工具提供了一种标准化的方式，可以在保证安全性和用户控制权的同时访问信息并执行操作。

通过 MCP 协议，您可以使用您喜爱的 AI 工具添加交易（例如，使用自然语言创建交易、批量导入不同格式的交易）、查询交易数据（例如，使用您的AI工具对历史交易数据进行分析）等。

> 请注意：如果你使用第三方的大语言模型服务，请谨慎使用 MCP 功能，因为你的隐私数据会发送给第三方大模型服务。

## 配置

ezBookkeeping 默认没有启用 MCP 服务器，你可以修改配置文件中的 `enable_mcp` 或修改环境变量开启 MCP 功能，具体可以参考 [配置](/zh_Hans/configuration#mcp-model-context-protocol)，开启后在桌面版的 “用户设置” -> “安全” 页面中会出现 “生成 MCP 令牌” 按钮。

## 与 AI 工具集成

ezBookkeeping 的 MCP 服务需要通过特殊的令牌进行访问，您可以在 ezBookkeeping 桌面版的 “用户设置” -> “安全” 页面中点击 “生成 MCP 令牌” 按钮，输入当前用户密码即可。也可以通过 ezBookkeeping 的命令行工具 `user-session-new` 进行生成，具体可以参考 [命令行](/zh_Hans/command_line#userdata)。

> 请注意，ezBookkeeping 的 MCP 令牌与其他类型的令牌不同，MCP 令牌没有过期时间，如果访问 MCP 服务器的 IP 地址固定（例如家庭内部网络），可以设置允许请求 MCP 服务器的 IP 地址，具体可以参考 [配置](/zh_Hans/configuration#mcp-model-context-protocol)。

然后，您可以将以下代码复制到您的 AI 工具的 MCP 服务器配置中，即可让您的 AI 工具访问与操作 ezBookkeeping 的数据。

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
| `response_fields` | `string` | 可选 | 结果中包含的字段列表，使用逗号分隔（留空表示所有字段，可选字段：time, currency, category_name, account_name, comment） |

### 查询所有账户名

**MCP Tool 名称**

`query_all_accounts`

**请求参数**

无

### 查询所有账户余额

**MCP Tool 名称**

`query_all_accounts_balance`

**请求参数**

无

### 查询所有交易分类名

**MCP Tool 名称**

`query_all_transaction_categories`

**请求参数**

无

### 查询所有交易标签名

**MCP Tool 名称**

`query_all_transaction_tags`

**请求参数**

无

### 查询最新的汇率

**MCP Tool 名称**

`query_latest_exchange_rates`

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `currencies` | `string` | 必选 | 用于查询汇率的货币列表，使用逗号分隔（例如 USD,CNY,EUR） |
