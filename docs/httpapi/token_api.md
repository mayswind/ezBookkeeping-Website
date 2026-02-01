---
title: Token API
---

# Token API

## Get available sessions information

**API Path**

`tokens/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`TokenInfoResponse[]`

| Field | Type | Description |
| --- | --- | --- |
| `tokenId` | `string` | Token ID |
| `tokenType` | `integer` | Token type (`1`: Normal Token, `5`: MCP Token, `8`: API Token) |
| `userAgent` | `string` | The User Agent when the session created |
| `lastSeen` | `integer` | Last refresh unix time of the session |
| `isCurrent` | `boolean` | Whether the session is current |

## Revoke token

**API Path**

`tokens/revoke.json`

**HTTP Method**

`POST`

**Request Body Content-Type**

`application/json`

**Request Data Structure**

`TokenRevokeRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `tokenId` | `string` | Required | Token ID |

**Response Data Structure**

`boolean` (Whether the token is revoked successfully)
