---
title: 交易分类 API
---

# 交易分类 API

## 公共数据结构

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

## 获取所有交易分类列表

**API 路径**

`transaction/categories/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`Map<TransactionCategoryType, TransactionCategoryInfoResponse[]>`

## 添加交易分类

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
