---
layout: default
title: HTTP API
nav_order: 7
permalink: /webapi
---

# HTTP API
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping provides HTTP API for the frontend interface, and these API can also be used directly by users to implement more automation functions. Please note that the ezBookkeeping Web API is not intended for regular users, and the information in this document may not be comprehensive. For more information, please refer to the source code.

## Usage

The API of ezBookkeeping verifies user identity by tokens. You can execute the following command to generate a new token, for more information you can refer to [Command Line](command_line#userdata).

    $ TOKEN=$(./ezbookkeeping userdata user-session-new -n ${USER_NAME} | grep 'NewToken' | awk -F ' ' '{print $2}')

Then you can use the token to access the API.

    $ curl -H "Authorization: Bearer ${TOKEN}" "http://${YOUR_HOST_ADDRESS}/api/v1/${API_PATH}"

The response of API is JSON object like the following:

**Successful response**

```javascript
{
    "result": ..., // The acutal data
    "success": true
}
```

**Failed response**

```javascript
{
    "errorCode": xxxxxx, // The error code
    "errorMessage": "xxx", // The error message
    "path": "/api/v1/{API_PATH}", // The API full path
    "success": false
}
```

## Token API

### Get available sessions information

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
| `tokenType` | `integer` | Token type (`1`: Normal Token, `2`: Token for two-step verification, `3`: Token to verify the email address, `4`: Token to reset password) |
| `userAgent` | `string` | The User Agent when the session created |
| `lastSeen` | `integer` | Last refresh time of the session |
| `isCurrent` | `boolean` | Whether the session is current |

### Revoke token

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

## Account API

### Common data structure

**AccountCategory**

| Value | Type | Description |
| --- | --- | --- |
| `1` | `integer` | Cash |
| `2` | `integer` | Checking Account |
| `3` | `integer` | Credit Card |
| `4` | `integer` | Virtual Account |
| `5` | `integer` | Debt Account |
| `6` | `integer` | Receivables |
| `7` | `integer` | Investment Account |
| `8` | `integer` | Savings Account |
| `9` | `integer` | Certificate of Deposit |

**AccountType**

| Value | Type | Description |
| --- | --- | --- |
| `1` | `integer` | Single Account |
| `2` | `integer` | Multiple Sub-accounts |

**AccountInfoResponse**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Account ID |
| `name` | `string` | Account name |
| `parentId` | `string` | Parent account ID |
| `category` | `AccountCategory` | Account category |
| `type` | `AccountType` | Account type |
| `icon` | `string` | Account icon ID |
| `color` | `string` | Account icon color (Hex color code `RRGGBB`) |
| `currency` | `string` | Account currency code |
| `balance` | `integer` | Account balance |
| `comment` | `string` | Account description |
| `creditCardStatementDate` | `integer` | The statement date of the credit card account |
| `displayOrder` | `integer` | The display order of the account |
| `isAsset` | `boolean` | Whether the account is an asset account |
| `isLiability` | `boolean` | Whether the account is a liability account |
| `hidden` | `boolean` | Whether the account is hidden |
| `subAccounts` | `AccountInfoResponse[]` | The sub accounts list |

### Get all accounts list

**API Path**

`accounts/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`AccountInfoResponse[]`

### Add account

**API Path**

`accounts/add.json`

**HTTP Method**

`POST`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Offset` | Time zone offset (minutes) |

**Request Body Content-Type**

`application/json`

**Request Data Structure**

`AccountCreateRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Required | Account name |
| `category` | `AccountCategory` | Required | Account category |
| `type` | `AccountType` | Required | Account type |
| `icon` | `string` | Required | Account icon ID |
| `color` | `string` | Required | Account icon color (Hex color code `RRGGBB`) |
| `currency` | `string` | Required | Account currency code (ISO 4217 code, `"---"` for the parent account) |
| `balance` | `integer` | Optional | Account balance (Liability account should set to negative amount) |
| `balanceTime` | `integer` | Optional | The date time when the account balance is the set value (This field is required when balance is set) |
| `comment` | `string` | Optional | Account description |
| `creditCardStatementDate` | `integer` | Optional | The statement date of the credit card account |
| `subAccounts` | `AccountCreateRequest[]` | Optional | The sub accounts list |

**Response Data Structure**

`AccountInfoResponse`

## Transaction Category API

### Common Data Structure

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

### Get all transaction categories

**API Path**

`transaction/categories/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`Map<TransactionCategoryType, TransactionCategoryInfoResponse[]>`

### Add transaction category

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

## Transaction Tag API

### Common Data Structure

**TransactionTagInfoResponse**

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Transaction tag ID |
| `name` | `string` | Transaction tag name |
| `displayOrder` | `integer` | The display order of the transaction tag |
| `hidden` | `boolean` | Whether the transaction tag is hidden |

### Get all transaction tags list

**API Path**

`transaction/tags/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`TransactionTagInfoResponse[]`

### Add transaction tag

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

## Transaction API

### Common Data Structure

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

### Get transactions list

**API Path**

`transactions/list.json`

**HTTP Method**

`GET`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Offset` | Time zone offset (minutes) |

**Request Parameters**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `type` | `integer` | Optional | Filter transaction by transaction type (`1`: Balance modification, `2`: Income, `3`: Expense, `4`: Transafer) |
| `category_ids` | `string` | Optional | Filter transaction by transaction category IDs (separated by `,`) |
| `account_ids` | `string` | Optional | Filter transaction by account IDs (separated by `,`) |
| `tag_ids` | `string` | Optional | Filter transaction by tag IDs (separated by `,`) |
| `tag_filter_type` | `integer` | Optional | Transaction tag filter type (`0`: Transaction has all specified tags, `1`: Transaction has any specified tags, `2`: Transaction does not have all specified tags, `3`: Transaction does not have any specified tags) |
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

`TransactionInfoPageWrapperResponse[]`

| Field | Type | Description |
| --- | --- | --- |
| `items` | `TransactionInfoResponse[]` | The transaction list |
| `nextTimeSequenceId` | `integer` | The next cursor (`max_time` parameter) when requesting older data |
| `totalCount` | `integer` | The total count of transactions |

### Add transaction

**API Path**

`transactions/add.json`

**HTTP Method**

`POST`

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
