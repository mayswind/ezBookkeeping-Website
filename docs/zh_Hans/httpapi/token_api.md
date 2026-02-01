---
title: 令牌 API
---

# 令牌 API

## 获取可用会话信息

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
| `tokenType` | `integer` | 令牌类型（`1`：普通令牌，`5`：MCP 令牌，`8`：API 令牌） |
| `userAgent` | `string` | 创建会话时的 User Agent |
| `lastSeen` | `integer` | 会话的最后刷新时间（Unix Time） |
| `isCurrent` | `boolean` | 是否是当前会话 |

## 注销令牌

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
