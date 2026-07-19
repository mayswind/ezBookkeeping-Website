---
title: Exchange Rates API
---

# Exchange Rates API

## Common Data Structure

**LatestExchangeRate**

| Field | Type | Description |
| --- | --- | --- |
| `currency` | `string` | Currency code |
| `rate` | `string` | Exchange rate, 1 unit of base currency equals to how many units of this currency |

## Retrieve the latest exchange rate data

**API Path**

`exchange_rates/latest.json`

**HTTP Method**

`GET`

**Request Parameters**

None

**Response Data Structure**

`LatestExchangeRateResponse`

| Field | Type | Description |
| --- | --- | --- |
| `dataSource` | `string` | Exchange rate data source name |
| `referenceUrl` | `string` | Exchange rate data reference URL |
| `updateTime` | `integer` | Exchange rate data update unix time |
| `baseCurrency` | `string` | Base currency code |
| `exchangeRates` | `LatestExchangeRate[]` | List of exchange rates |

## Update user custom exchange rate data

**API Path**

`exchange_rates/user_custom/update.json`

**HTTP Method**

`POST`

**Request Parameters**

`UserCustomExchangeRateUpdateRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currency` | `string` | Required | Currency code |
| `rate` | `string` | Required | Exchange rate, 1 unit of user's default currency equals to how many units of this currency |

**Response Data Structure**

`UserCustomExchangeRateUpdateResponse`

| Field | Type | Description |
| --- | --- | --- |
| `currency` | `string` | Currency code |
| `rate` | `string` | Exchange rate, 1 unit of user's default currency equals to how many units of this currency |
| `updateTime` | `integer` | Exchange rate data update unix time |

## Delete user custom exchange rate data

**API Path**

`exchange_rates/user_custom/delete.json`

**HTTP Method**

`POST`

**Request Parameters**

`UserCustomExchangeRateDeleteRequest`

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `currency` | `string` | Currency code |

**Response Data Structure**

`boolean` (Whether the deletion was successful)
