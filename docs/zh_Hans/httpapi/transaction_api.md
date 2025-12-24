---
title: 交易 API
---

# 交易 API

## 公共数据结构

**TransactionType**

| 值 | 类型 | 描述 |
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

## 获取交易列表

**API 路径**

`transactions/list.json`

**HTTP 方法**

`GET`

**请求 Header**

| Header | 描述 |
| --- | --- |
| `X-Timezone-Offset` | 时区偏移（分钟） |
| `X-Timezone-Name` | IANA 时区名称 |

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `type` | `integer` | 可选 | 根据交易类型（`1`：修改余额，`2`：收入，`3`：支出，`4`：转账）过滤交易 |
| `category_ids` | `string` | 可选 | 根据交易分类IDs（使用 `,` 分隔）过滤交易 |
| `account_ids` | `string` | 可选 | 根据账户IDs（使用 `,` 分隔）过滤交易 |
| `tag_filter` | `string` | 可选 | 根据交易标签过滤交易（支持多个标签组，每组间使用 `;` 分隔。每个标签组格式为 `type:tag_id1,tag_id2,...`，其中 `type` 表示 交易标签过滤模式，`0`：交易包含本组所有标签，`1`：交易包含本组任意标签，`2`：交易不包含本组所有标签，`3`：交易不包含本组任意标签） |
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

`TransactionInfoPageWrapperResponse`

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `items` | `TransactionInfoResponse[]` | 交易列表 |
| `nextTimeSequenceId` | `integer` | 请求更旧数据时的下一个游标（`max_time` 参数） |
| `totalCount` | `integer` | 交易总数量 |

## 获取全部交易列表

**API 路径**

`transactions/list/all.json`

**HTTP 方法**

`GET`

**请求 Header**

| Header | 描述 |
| --- | --- |
| `X-Timezone-Offset` | 时区偏移（分钟） |
| `X-Timezone-Name` | IANA 时区名称 |

**请求参数**

| 字段 | 类型 | 必选 | 描述 |
| --- | --- | --- | --- |
| `type` | `integer` | 可选 | 根据交易类型（`1`：修改余额，`2`：收入，`3`：支出，`4`：转账）过滤交易 |
| `category_ids` | `string` | 可选 | 根据交易分类IDs（使用 `,` 分隔）过滤交易 |
| `account_ids` | `string` | 可选 | 根据账户IDs（使用 `,` 分隔）过滤交易 |
| `tag_filter` | `string` | 可选 | 根据交易标签过滤交易（支持多个标签组，每组间使用 `;` 分隔。每个标签组格式为 `type:tag_id1,tag_id2,...`，其中 `type` 表示 交易标签过滤模式，`0`：交易包含本组所有标签，`1`：交易包含本组任意标签，`2`：交易不包含本组所有标签，`3`：交易不包含本组任意标签） |
| `amount_filter` | `string` | 可选 | 根据余额过滤交易（大于金额：`gt:{amount}`，小于金额：`lt:{amount}`，等于金额：`eq:{amount}`，不等于金额：`ne:{amount}`，在两个金额之间：`bt:{min_amount}:{max_amount}`，不在两个金额之间：`ne:{min_amount}:{max_amount}`） |
| `keyword` | `string` | 可选 | 根据关键词过滤交易 |
| `start_time` | `integer` | 可选 | 交易列表开始时间（Unix Time） |
| `end_time` | `integer` | 可选 | 交易列表结束时间（Unix Time） |
| `with_pictures` | `boolean` | 可选 | 是否获取图片IDs |
| `trim_account` | `boolean` | 可选 | 是否获取账户ID而不是账户对象 |
| `trim_category` | `boolean` | 可选 | 是否获取交易分类ID而不是交易分类对象 |
| `trim_tag` | `boolean` | 可选 | 是否获取交易标签ID而不是交易标签对象 |

**返回数据结构**

`TransactionInfoResponse[]`

## 添加交易

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
