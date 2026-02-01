---
title: Account API
---

# Account API

## Common data structure

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
| `balance` | `integer` | Account balance (Supports up to two decimals. For example, a value of `1234` represents an amount of `12.34`) |
| `comment` | `string` | Account description |
| `creditCardStatementDate` | `integer` | The statement date of the credit card account |
| `displayOrder` | `integer` | The display order of the account |
| `isAsset` | `boolean` | Whether the account is an asset account |
| `isLiability` | `boolean` | Whether the account is a liability account |
| `hidden` | `boolean` | Whether the account is hidden |
| `subAccounts` | `AccountInfoResponse[]` | The sub accounts list |

## Get all accounts list

**API Path**

`accounts/list.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`AccountInfoResponse[]`

## Add account

**API Path**

`accounts/add.json`

**HTTP Method**

`POST`

**Request Header**

| Header | Description |
| --- | --- |
| `X-Timezone-Name` | IANA time zone name |
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
| `balance` | `integer` | Optional | Account balance (Supports up to two decimals. For example, a value of `1234` represents an amount of `12.34`. Liability account should set to negative amount) |
| `balanceTime` | `integer` | Optional | The date time when the account balance is the set value (This field is required when balance is set) |
| `comment` | `string` | Optional | Account description |
| `creditCardStatementDate` | `integer` | Optional | The statement date of the credit card account |
| `subAccounts` | `AccountCreateRequest[]` | Optional | The sub accounts list |

**Response Data Structure**

`AccountInfoResponse`
