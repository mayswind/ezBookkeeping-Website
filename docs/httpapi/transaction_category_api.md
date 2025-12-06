---
title: Transaction Category API
---

# Transaction Category API

## Common Data Structure

**TransactionCategoryType**

| Value | Type | Description |
| --- | --- | --- |
| `1` | `integer` | Income |
| `2` | `integer` | Expense |
| `3` | `integer` | Transfer |

**TransactionCategoryInfoResponse**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Transaction category ID |
| `name` | `string` | Transaction category name |
| `parentId` | `string` | Parent transaction category ID |
| `type` | `TransactionCategoryType` | Transaction category type |
| `icon` | `string` | Transaction category icon ID |
| `color` | `string` | Transaction category icon color (Hex color code `RRGGBB`) |
| `comment` | `string` | Transaction category description |
| `displayOrder` | `integer` | The display order of the transaction category |
| `hidden` | `boolean` | Whether the transaction category is hidden |
| `subCategories` | `TransactionCategoryInfoResponse[]` | The sub transaction categories list |

## Get all transaction categories

**API Path**

`transaction/categories/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`Map<TransactionCategoryType, TransactionCategoryInfoResponse[]>`

## Add transaction category

**API Path**

`transaction/categories/add.json`

**HTTP Method**

`POST`

**Request Body Content-Type**

`application/json`

**Request Data Structure**

`TransactionCategoryCreateRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | Transaction category name |
| `type` | `TransactionCategoryType` | Required | Transaction category type |
| `parentId` | `string` | Optional | Parent transaction category ID (`"0"` for the primary transaction category) |
| `icon` | `string` | Required | Transaction category icon ID |
| `color` | `string` | Required | Transaction category icon color (Hex color code `RRGGBB`) |
| `comment` | `string` | Optional | Transaction category description |

**Response Data Structure**

`TransactionCategoryInfoResponse`
