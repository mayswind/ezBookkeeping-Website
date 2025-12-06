---
title: Transaction Tag API
---

# Transaction Tag API

## Common Data Structure

**TransactionTagInfoResponse**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Transaction tag ID |
| `name` | `string` | Transaction tag name |
| `displayOrder` | `integer` | The display order of the transaction tag |
| `hidden` | `boolean` | Whether the transaction tag is hidden |

## Get all transaction tags list

**API Path**

`transaction/tags/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`TransactionTagInfoResponse[]`

## Add transaction tag

**API Path**

`transaction/tags/add.json`

**HTTP Method**

`POST`

**Request Body Content-Type**

`application/json`

**Request Data Structure**

`TransactionTagCreateRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | Transaction tag name |

**Response Data Structure**

`TransactionTagInfoResponse`
