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

## Get latest exchange rates

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
