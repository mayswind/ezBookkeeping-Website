---
title: 汇率 API
---

# 汇率 API

## 公共数据结构

**LatestExchangeRate**

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `currency` | `string` | 货币代码 |
| `rate` | `string` | 汇率，1 单位基础货币等于多少单位该货币 |

## 获取最新汇率

**API 路径**

`exchange_rates/latest.json`

**HTTP 方法**

`GET`

**请求参数**

None

**返回数据结构**

`LatestExchangeRateResponse`

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| `dataSource` | `string` | 汇率数据来源名称 |
| `referenceUrl` | `string` | 汇率数据参考网址 |
| `updateTime` | `integer` | 汇率数据更新时间（Unix Time） |
| `baseCurrency` | `string` | 基础货币代码 |
| `exchangeRates` | `LatestExchangeRate[]` | 汇率列表 |
