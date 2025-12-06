---
title: 交易标签 API
---

# 交易标签 API

## 公共数据结构

**TransactionTagInfoResponse**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `id` | `string` | 交易标签 ID |
| `name` | `string` | 交易标签名 |
| `displayOrder` | `integer` | 交易标签显示顺序 |
| `hidden` | `boolean` | 交易标签是否隐藏 |

## 获取所有交易标签列表

**API 路径**

`transaction/tags/list.json`

**HTTP 方法**

`GET`

**请求参数**

无

**返回数据结构**

`TransactionTagInfoResponse[]`

## 添加交易标签

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
