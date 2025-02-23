---
layout: default
title: HTTP API
nav_order: 7
parent: 简体中文
permalink: /zh_Hans/webapi
---

# HTTP API
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping 为前端界面提供 HTTP API 接口，同时这些接口也可以被用户直接使用以实现更多自动化的功能。但请注意，ezBookkeeping 的 Web API 并不是面向普通用户的，本文档中的内容也可能不够详细，更多内容请参考源代码。

## 使用

ezBookkeeping 的 API 通过令牌来验证用户身份，您可以执行以下命令来生成新的令牌，更多信息可以参考 [命令行](command_line#userdata)。

    $ TOKEN=$(./ezbookkeeping userdata user-session-new -n ${USER_NAME} | grep 'NewToken' | awk -F ' ' '{print $2}')

然后您就可以使用该令牌访问 API。

    $ curl -H "Authorization: Bearer ${TOKEN}" "http://${YOUR_HOST_ADDRESS}/api/v1/${API_PATH}"

API 接口的返回结果是 JSON 对象，如下：

**成功返回**

```javascript
{
    "result": ..., // 实际数据
    "success": true
}
```

**失败返回**

```javascript
{
    "errorCode": xxxxxx, // 错误码
    "errorMessage": "xxx", // 错误信息
    "path": "/api/v1/{API_PATH}", // API 完整路径
    "success": false
}
```

## 令牌 API

### 获取可用会话信息

**API 路径**

`tokens/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`TokenInfoResponse[]`

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `tokenId` | `string` | 令牌 ID |
| `tokenType` | `integer` | 令牌类型（`1`：普通令牌，`2`：待两步验证的令牌，`3`：邮箱验证令牌，`4`：重置密码令牌） |
| `userAgent` | `string` | 创建会话时的 User Agent |
| `lastSeen` | `integer` | 会话的最后刷新时间 |
| `isCurrent` | `boolean` | 是否是当前会话 |

### 注销令牌

**API 路径**

`tokens/revoke.json`

**HTTP 方法**

`POST`

**请求体 Content-Type**

`application/json`

**请求数据结构**

`TokenRevokeRequest`

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `tokenId` | `string` | 必选 | 令牌 ID |

**返回数据结构**

`boolean`（是否成功注销）

## 账户 API

### 公共数据结构

**AccountCategory**

| 值 | 类型 | 描述 |
| --- | --- | --- |
| `1` | `integer` | 现金 |
| `2` | `integer` | 借记账户 |
| `3` | `integer` | 信用卡 |
| `4` | `integer` | 虚拟账户 |
| `5` | `integer` | 负债账户 |
| `6` | `integer` | 应收款项 |
| `7` | `integer` | 投资账户 |
| `8` | `integer` | 储蓄账户 |
| `9` | `integer` | 定期存款 |

**AccountType**

| 值 | 类型 | 描述 |
| --- | --- | --- |
| `1` | `integer` | 单一账户 |
| `2` | `integer` | 多个子账户 |

**AccountInfoResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `string` | 账户 ID |
| `name` | `string` | 账户名称 |
| `parentId` | `string` | 父账户 ID |
| `category` | `AccountCategory` | 账户类别 |
| `type` | `AccountType` | 账户类型 |
| `icon` | `string` | 账户图标 ID |
| `color` | `string` | 账户图标颜色（十六进制颜色代码 `RRGGBB`） |
| `currency` | `string` | 账户货币 |
| `balance` | `integer` | 账户余额 |
| `comment` | `string` | 账户描述 |
| `creditCardStatementDate` | `integer` | 信用卡账单日 |
| `displayOrder` | `integer` | 账户显示顺序 |
| `isAsset` | `boolean` | 是否是资产账户 |
| `isLiability` | `boolean` | 是否是负债账户 |
| `hidden` | `boolean` | 是否隐藏 |
| `subAccounts` | `AccountInfoResponse[]` | 子账户列表 |

### 获取所有账户列表

**API 路径**

`accounts/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`AccountInfoResponse[]`

### 添加账户

**API 路径**

`accounts/add.json`

**HTTP 方法**

`POST`

**请求 Header**

| Header | 描述 |
| --- | --- |
| `X-Timezone-Offset` | 时区偏移（分钟） |

**请求体 Content-Type**

`application/json`

**请求数据结构**

`AccountCreateRequest`

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | 必选 | 账户名称 |
| `category` | `AccountCategory` | 必选 | 账户类别 |
| `type` | `AccountType` | 必选 | 账户类型 |
| `icon` | `string` | 必选 | 账户图标 ID |
| `color` | `string` | 必选 | 账户图标颜色（十六进制颜色代码 `RRGGBB`） |
| `currency` | `string` | 必选 | 账户货币代码（ISO 4217 代码，父账户设置为 `"---"`） |
| `balance` | `integer` | 可选 | 账户余额（负债账户设置为负数） |
| `balanceTime` | `integer` | 可选 | 账户余额为设定值的时间（若设置了余额则该字段为必选） |
| `comment` | `string` | 可选 | 账户描述 |
| `creditCardStatementDate` | `integer` | 可选 | 信用卡账单日 |
| `subAccounts` | `AccountCreateRequest[]` | 可选 | 子账户列表 |

**返回数据结构**

`AccountInfoResponse`

## 交易分类 API

### 公共数据结构

**TransactionCategoryType**

| 值 | 类型 | 描述 |
| --- | --- | --- |
| `1` | `integer` | 收入 |
| `2` | `integer` | 支出 |
| `3` | `integer` | 转账 |

**TransactionCategoryInfoResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `string` | 交易分类 ID |
| `name` | `string` | 交易分类名称 |
| `parentId` | `string` | 父交易分类 ID |
| `type` | `TransactionCategoryType` | 交易分类类型 |
| `icon` | `string` | 交易分类图标 ID |
| `color` | `string` | 交易分类图标颜色（十六进制颜色代码 `RRGGBB`） |
| `comment` | `string` | 交易分类描述 |
| `displayOrder` | `integer` | 交易分类显示顺序 |
| `hidden` | `boolean` | 交易分类是否隐藏 |
| `subCategories` | `TransactionCategoryInfoResponse[]` | 子交易分类列表 |

### 获取所有交易分类列表

**API 路径**

`transaction/categories/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`Map<TransactionCategoryType, TransactionCategoryInfoResponse[]>`

### 添加交易分类

**API 路径**

`transaction/categories/add.json`

**HTTP 方法**

`POST`

**请求体 Content-Type**

`application/json`

**请求数据结构**

`TransactionCategoryCreateRequest`

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | 必选 | 交易分类名称 |
| `type` | `TransactionCategoryType` | 必选 | 交易分类类型 |
| `parentId` | `string` | 可选 | 父交易分类 ID（一级交易分类为 `"0"`） |
| `icon` | `string` | 必选 | 交易分类图标 ID |
| `color` | `string` | 必选 | 交易分类图标颜色（十六进制颜色代码 `RRGGBB`） |
| `comment` | `string` | 可选 | 交易分类描述 |

**返回数据结构**

`TransactionCategoryInfoResponse`

## 交易标签 API

### 公共数据结构

**TransactionTagInfoResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `string` | 交易标签 ID |
| `name` | `string` | 交易标签名 |
| `displayOrder` | `integer` | 交易标签显示顺序 |
| `hidden` | `boolean` | 交易标签是否隐藏 |

### 获取所有交易标签列表

**API 路径**

`transaction/tags/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`TransactionTagInfoResponse[]`

### 添加交易标签

**API 路径**

`transaction/tags/add.json`

**HTTP 方法**

`POST`

**请求体 Content-Type**

`application/json`

**请求数据结构**

`TransactionTagCreateRequest`

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `name` | `string` | 必选 | 交易标签名 |

**返回数据结构**

`TransactionTagInfoResponse`

## 交易 API

### 公共数据结构

**TransactionType**

| Value | Type | Description |
| --- | --- | --- |
| `1` | `integer` | 修改余额 |
| `2` | `integer` | 收入 |
| `3` | `integer` | 支出 |
| `4` | `integer` | 转账 |

**TransactionInfoResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `string` | 交易 ID |
| `timeSequenceId` | `string` | 交易时间序列 ID |
| `type` | `TransactionType` | 交易类型 |
| `categoryId` | `string` | 交易分类 ID |
| `category` | `TransactionCategoryInfoResponse` | 交易分类对象 |
| `time` | `integer` | 交易时间（Unix Time） |
| `utcOffset` | `integer` | 交易时区偏移（分钟） |
| `sourceAccountId` | `string` | 来源账户 ID |
| `sourceAccount` | `AccountInfoResponse` | 来源账户对象 |
| `destinationAccountId` | `string` | 目标账户 ID |
| `destinationAccount` | `AccountInfoResponse` | 目标账户对象 |
| `sourceAmount` | `integer` | 来源金额 |
| `destinationAmount` | `integer` | 目标金额 |
| `hideAmount` | `boolean` | 是否隐藏金额 |
| `tagIds` | `string[]` | 交易标签 IDs |
| `tags` | `TransactionTagInfoResponse[]` | 交易标签对象列表 |
| `pictures` | `TransactionPictureInfoBasicResponse[]` | 交易图片列表 |
| `comment` | `string` | 交易描述 |
| `geoLocation` | `TransactionGeoLocationResponse` | 交易地理位置 |
| `editable` | `boolean` | 交易是否可编辑 |

**TransactionPictureInfoBasicResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `pictureId` | `string` | 交易图片 ID |
| `originalUrl` | `string` | 交易图片 URL |

**TransactionGeoLocationRequest**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `latitude` | `float` | 纬度 |
| `longitude` | `float` | 经度 |

**TransactionGeoLocationResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `latitude` | `float` | 纬度 |
| `longitude` | `float` | 经度 |

### 获取交易列表

**API 路径**

`transactions/list.json`

**HTTP 方法**

`GET`

**请求 Header**

| Header | 描述 |
| --- | --- |
| `X-Timezone-Offset` | 时区偏移（分钟） |

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `type` | `integer` | 可选 | 根据交易类型（`1`：修改余额，`2`：收入，`3`：支出，`4`：转账）过滤交易 |
| `category_ids` | `string` | 可选 | 根据交易分类IDs（使用 `,` 分隔）过滤交易 |
| `account_ids` | `string` | 可选 | 根据账户IDs（使用 `,` 分隔）过滤交易 |
| `tag_ids` | `string` | 可选 | 根据交易标签IDs（使用 `,` 分隔）过滤交易 |
| `tag_filter_type` | `integer` | 可选 | 交易标签过滤器类型（`0`：交易包含所有标签，`1`：交易包含任意标签，`2`：交易不包含所有标签，`3`：交易不包含任意标签） |
| `amount_filter` | `string` | 可选 | 根据余额过滤交易（大于金额：`gt:{amount}`，小于金额：`lt:{amount}`，等于金额：`eq:{amount}`，不等于金额：`ne:{amount}`，在两个金额之间：`bt:{min_amount}:{max_amount}`，不在两个金额之间：`ne:{min_amount}:{max_amount}`） |
| `keyword` | `string` | 可选 | 根据关键词过滤交易 |
| `max_time` | `integer` | 可选 | 最大时间序列Id（若获取最新内容设置为 `0`） |
| `min_time` | `integer` | 可选 | 最小时间序列Id |
| `page` | `integer` | 可选 | 指定页码 |
| `count` | `integer` | 必选 | 每页交易的数量（最大为 `50`） |
| `with_count` | `boolean` | 可选 | 是否获取所有交易总数量 |
| `with_pictures` | `boolean` | 可选 | 是否获取图片IDs |
| `trim_account` | `boolean` | 可选 | 是否获取账户ID而不是账户对象 |
| `trim_category` | `boolean` | 可选 | 是否获取交易分类ID而不是交易分类对象 |
| `trim_tag` | `boolean` | 可选 | 是否获取交易标签ID而不是交易标签对象 |

**返回数据结构**

`TransactionInfoPageWrapperResponse[]`

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `items` | `TransactionInfoResponse[]` | 交易列表 |
| `nextTimeSequenceId` | `integer` | 请求更旧数据时的下一个游标（`max_time` 参数） |
| `totalCount` | `integer` | 交易总数量 |

### 添加交易

**API 路径**

`transactions/add.json`

**HTTP 方法**

`POST`

**请求体 Content-Type**

`application/json`

**请求数据结构**

`TransactionCreateRequest`

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `type` | `TransactionType` | 必选 | 交易类型 |
| `categoryId` | `string` | 必选 | 交易分类 ID |
| `time` | `integer` | 必选 | 交易时间（Unix Time） |
| `utcOffset` | `integer` | 必选 | 交易时区偏移（分钟） |
| `sourceAccountId` | `string` | 必选 | 来源账户 ID |
| `destinationAccountId` | `string` | 可选 | 目标账户 ID |
| `sourceAmount` | `integer` | 必选 | 来源金额 |
| `destinationAmount` | `integer` | 可选 | 目标金额 |
| `hideAmount` | `boolean` | 可选 | 是否隐藏金额 |
| `tagIds` | `string[]` | 可选 | 交易标签 IDs |
| `pictureIds` | `string[]` | 可选 | 交易图片 IDs |
| `comment` | `string` | 可选 | 交易描述 |
| `geoLocation` | `TransactionGeoLocationRequest` | 可选 | 交易地理位置 |
