---
title: 账户 API
---

# 账户 API

## 公共数据结构

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
| `balance` | `integer` | 账户余额（最多支持两位小数，例如该字段为 `1234` 时表示金额为 `12.34`） |
| `comment` | `string` | 账户描述 |
| `creditCardStatementDate` | `integer` | 信用卡账单日 |
| `displayOrder` | `integer` | 账户显示顺序 |
| `isAsset` | `boolean` | 是否是资产账户 |
| `isLiability` | `boolean` | 是否是负债账户 |
| `hidden` | `boolean` | 是否隐藏 |
| `subAccounts` | `AccountInfoResponse[]` | 子账户列表 |

## 获取所有账户列表

**API 路径**

`accounts/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`AccountInfoResponse[]`

## 添加账户

**API 路径**

`accounts/add.json`

**HTTP 方法**

`POST`

**请求 Header**

| Header | 描述 |
| --- | --- |
| `X-Timezone-Name` | IANA 时区名称 |
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
| `balance` | `integer` | 可选 | 账户余额（最多支持两位小数，例如该字段为 `1234` 时表示金额为 `12.34`。负债账户设置为负数） |
| `balanceTime` | `integer` | 可选 | 账户余额为设定值的时间（若设置了余额则该字段为必选） |
| `comment` | `string` | 可选 | 账户描述 |
| `creditCardStatementDate` | `integer` | 可选 | 信用卡账单日 |
| `subAccounts` | `AccountCreateRequest[]` | 可选 | 子账户列表 |

**返回数据结构**

`AccountInfoResponse`
