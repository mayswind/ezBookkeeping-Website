---
title: Transaction API
---

# Transaction API

## Common Data Structure

**TransactionType**

| Value | Type | Description |
| --- | --- | --- |
| `1` | `integer` | Balance Modification |
| `2` | `integer` | Income |
| `3` | `integer` | Expense |
| `4` | `integer` | Transfer |

**TransactionInfoResponse**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Transaction ID |
| `timeSequenceId` | `string` | Transaction time sequence ID |
| `type` | `TransactionType` | Transaction type |
| `categoryId` | `string` | Transaction category ID |
| `category` | `TransactionCategoryInfoResponse` | Transaction category object |
| `time` | `integer` | Transaction unix time |
| `utcOffset` | `integer` | Transaction time zone offset (minutes) |
| `sourceAccountId` | `string` | Source account ID |
| `sourceAccount` | `AccountInfoResponse` | Source account object |
| `destinationAccountId` | `string` | Destination account ID |
| `destinationAccount` | `AccountInfoResponse` | Destination account object |
| `sourceAmount` | `integer` | Source amount |
| `destinationAmount` | `integer` | Destination amount |
| `hideAmount` | `boolean` | Whether to hide the amount |
| `tagIds` | `string[]` | Transaction tag IDs |
| `tags` | `TransactionTagInfoResponse[]` | Transaction tag objects |
| `pictures` | `TransactionPictureInfoBasicResponse[]` | Transaction picture list |
| `comment` | `string` | Transaction description |
| `geoLocation` | `TransactionGeoLocationResponse` | Transaction geographic location |
| `editable` | `boolean` | Whether the transaction is editable |

**TransactionPictureInfoBasicResponse**

| Field | Type | Description |
| --- | --- | --- |
| `pictureId` | `string` | Transaction picture ID |
| `originalUrl` | `string` | Transaction picture URL |

**TransactionGeoLocationRequest**

| Field | Type | Description |
| --- | --- | --- |
| `latitude` | `float` | Latitude |
| `longitude` | `float` | Longitude |

**TransactionGeoLocationResponse**

| Field | Type | Description |
| --- | --- | --- |
| `latitude` | `float` | Latitude |
| `longitude` | `float` | Longitude |

## Get transactions list

**API Path**

`transactions/list.json`

**HTTP Method**

`GET`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Offset` | Time zone offset (minutes) |
| `X-Timezone-Name` | IANA time zone name |

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `integer` | Optional | Filter transaction by transaction type (`1`: Balance modification, `2`: Income, `3`: Expense, `4`: Transafer) |
| `category_ids` | `string` | Optional | Filter transaction by transaction category IDs (separated by `,`) |
| `account_ids` | `string` | Optional | Filter transaction by account IDs (separated by `,`) |
| `tag_filter` | `string` | Optional | Filter transactions by tags (multiple tag groups are supported, separate groups with `;`. Each tag group uses the format `type:tag_id1,tag_id2,...` where `type` defines the filter mode, `0`: transaction contains all tags in the group, `1`: transaction contains any tag in the group, `2`: transaction does not contain all tags in the group, `3`: transaction does not contain any tag in the group) |
| `amount_filter` | `string` | Optional | Filter transaction by amount (Greater than amount: `gt:{amount}`, Less than amount: `lt:{amount}`, Equal amount: `eq:{amount}`, Not equal amount: `ne:{amount}`, Between two amounts: `bt:{min_amount}:{max_amount}`, Not between two amounts: `ne:{min_amount}:{max_amount}`) |
| `keyword` | `string` | Optional | Filter transaction by keyword |
| `max_time` | `integer` | Optional | The maximum time sequence ID (Set to `0` if you want to get the latest transactions) |
| `min_time` | `integer` | Optional | The minimum time sequence ID |
| `page` | `integer` | Optional | Speicifed page number |
| `count` | `integer` | Required | The count of transactions per page (maximum is `50`) |
| `with_count` | `boolean` | Optional | Whether to get the total count of all transactions |
| `with_pictures` | `boolean` | Optional | Whether to get the picture IDs |
| `trim_account` | `boolean` | Optional | Whether to get the account ID instead of account object |
| `trim_category` | `boolean` | Optional | Whether to get the transaction category ID instead of category object |
| `trim_tag` | `boolean` | Optional | Whether to get the tag IDs instead of tag object |

**Response Data Structure**

`TransactionInfoPageWrapperResponse`

| Field | Type | Description |
| --- | --- | --- |
| `items` | `TransactionInfoResponse[]` | The transaction list |
| `nextTimeSequenceId` | `integer` | The next cursor (`max_time` parameter) when requesting older data |
| `totalCount` | `integer` | The total count of transactions |

## Get all transactions list

**API Path**

`transactions/list/all.json`

**HTTP Method**

`GET`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Offset` | Time zone offset (minutes) |
| `X-Timezone-Name` | IANA time zone name |

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `integer` | Optional | Filter transaction by transaction type (`1`: Balance modification, `2`: Income, `3`: Expense, `4`: Transafer) |
| `category_ids` | `string` | Optional | Filter transaction by transaction category IDs (separated by `,`) |
| `account_ids` | `string` | Optional | Filter transaction by account IDs (separated by `,`) |
| `tag_filter` | `string` | Optional | Filter transactions by tags (multiple tag groups are supported, separate groups with `;`. Each tag group uses the format `type:tag_id1,tag_id2,...` where `type` defines the filter mode, `0`: transaction contains all tags in the group, `1`: transaction contains any tag in the group, `2`: transaction does not contain all tags in the group, `3`: transaction does not contain any tag in the group) |
| `amount_filter` | `string` | Optional | Filter transaction by amount (Greater than amount: `gt:{amount}`, Less than amount: `lt:{amount}`, Equal amount: `eq:{amount}`, Not equal amount: `ne:{amount}`, Between two amounts: `bt:{min_amount}:{max_amount}`, Not between two amounts: `ne:{min_amount}:{max_amount}`) |
| `keyword` | `string` | Optional | Filter transaction by keyword |
| `start_time` | `integer` | Optional | Transaction list start time (unix time) |
| `end_time` | `integer` | Optional | Transaction list end time (unix time) |
| `with_pictures` | `boolean` | Optional | Whether to get the picture IDs |
| `trim_account` | `boolean` | Optional | Whether to get the account ID instead of account object |
| `trim_category` | `boolean` | Optional | Whether to get the transaction category ID instead of category object |
| `trim_tag` | `boolean` | Optional | Whether to get the tag IDs instead of tag object |

**Response Data Structure**

`TransactionInfoResponse[]`

## Add transaction

**API Path**

`transactions/add.json`

**HTTP Method**

`POST`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Offset` | Time zone offset (minutes) |
| `X-Timezone-Name` | IANA time zone name |

**Request Body Content-Type**

`application/json`

**Request Data Structure**

`TransactionCreateRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `TransactionType` | Required | Transaction type |
| `categoryId` | `string` | Required | Transaction category ID |
| `time` | `integer` | Required | Transaction unix time |
| `utcOffset` | `integer` | Required | Transaction time zone offset (minutes) |
| `sourceAccountId` | `string` | Required | Source account ID |
| `destinationAccountId` | `string` | Optional | Destination account ID |
| `sourceAmount` | `integer` | Required | Source amount |
| `destinationAmount` | `integer` | Optional | Destination amount |
| `hideAmount` | `boolean` | Optional | Whether to hide the amount |
| `tagIds` | `string[]` | Optional | Transaction tag IDs |
| `pictureIds` | `string[]` | Optional | Transaction picture IDs |
| `comment` | `string` | Optional | Transaction description |
| `geoLocation` | `TransactionGeoLocationRequest` | Optional | Transaction geographic location |
