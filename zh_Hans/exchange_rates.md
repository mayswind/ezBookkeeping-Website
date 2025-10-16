---
layout: default
locale: zh-Hans
title: 汇率
nav_order: 4
parent: 中文 (简体)
permalink: /zh_Hans/exchange_rates
---

# 汇率
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping 支持自动更新汇率以及支持多个不同数据源。您可以根据需要选择数据源。本页中的信息可能不是最新的，请以参考链接或实际数据为准。

## 可用数据源

### 澳大利亚储备银行

> 参考：[https://www.rba.gov.au/statistics/frequency/exchange-rates.html](https://www.rba.gov.au/statistics/frequency/exchange-rates.html)

基准货币是澳大利亚元（`AUD`）。每日汇率通常在工作日的 16:00（澳大利亚东部标准时间 AEST）左右更新。

该数据源支持 18 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 印度卢比 | INR | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 新台币 | TWD | 每日 |
| 美元 | USD | 每日 |
| 越南盾 | VND | 每日 |

配置选项 `data_source` 的值是 `reserve_bank_of_australia`

### 加拿大中央银行

> 参考：[https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/)

基准货币是加拿大元（`CAD`）。每日汇率通常在工作日的 16:30（东部时间 ET）更新。

该数据源支持 26 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 印度卢比 | INR | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 非每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 秘鲁新索尔 | PEN | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 非每日 |
| 土耳其里拉 | TRY | 每日 |
| 新台币 | TWD | 每日 |
| 美元 | USD | 每日 |
| 越南盾 | VND | 非每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `bank_of_canada`

### 捷克国家银行

> 参考：[https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/)

基准货币是捷克克朗（`CZK`）。每日汇率通常在工作日的 14:30（欧洲中部时间 CET）后更新。每月汇率通常在每个月最后一个工作日更新。

该数据源支持 151 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每月 |
| 阿富汗尼 | AFN | 每月 |
| 阿尔巴尼亚列克 | ALL | 每月 |
| 亚美尼亚德拉姆 | AMD | 每月 |
| 安哥拉宽扎 | AOA | 每月 |
| 阿根廷比索 | ARS | 每月 |
| 澳大利亚元 | AUD | 每日 |
| 阿鲁巴弗罗林 | AWG | 每月 |
| 阿塞拜疆马纳特 | AZN | 每月 |
| 波斯尼亚和黑塞哥维那可兑换马克 | BAM | 每月 |
| 巴巴多斯元 | BBD | 每月 |
| 孟加拉塔卡 | BDT | 每月 |
| 保加利亚列弗 | BGN | 每日 |
| 巴林第纳尔 | BHD | 每月 |
| 布隆迪法郎 | BIF | 每月 |
| 百慕大元 | BMD | 每月 |
| 文莱元 | BND | 每月 |
| 玻利维亚诺 | BOB | 每月 |
| 巴西雷亚尔 | BRL | 每日 |
| 巴哈马元 | BSD | 每月 |
| 不丹努扎姆 | BTN | 每月 |
| 博茨瓦纳普拉 | BWP | 每月 |
| 白俄罗斯卢布 | BYN | 每月 |
| 伯利兹元 | BZD | 每月 |
| 加拿大元 | CAD | 每日 |
| 刚果民主共和国刚果法郎 | CDF | 每月 |
| 瑞士法郎 | CHF | 每日 |
| 智利比索 | CLP | 每月 |
| 人民币 | CNY | 每日 |
| 哥伦比亚比索 | COP | 每月 |
| 哥斯达黎加科朗 | CRC | 每月 |
| 古巴比索 | CUP | 每月 |
| 佛得角埃斯库多 | CVE | 每月 |
| 吉布提法郎 | DJF | 每月 |
| 丹麦克朗 | DKK | 每日 |
| 多米尼加比索 | DOP | 每月 |
| 阿尔及利亚第纳尔 | DZD | 每月 |
| 埃及镑 | EGP | 每月 |
| 厄立特里亚纳克法 | ERN | 每月 |
| 埃塞俄比亚比尔 | ETB | 每月 |
| 欧元 | EUR | 每日 |
| 斐济元 | FJD | 每月 |
| 福克兰镑 | FKP | 每月 |
| 英镑 | GBP | 每日 |
| 格鲁吉亚拉里 | GEL | 每月 |
| 加纳塞地 | GHS | 每月 |
| 直布罗陀镑 | GIP | 每月 |
| 冈比亚达拉西 | GMD | 每月 |
| 几内亚法郎 | GNF | 每月 |
| 危地马拉格查尔 | GTQ | 每月 |
| 圭亚那元 | GYD | 每月 |
| 港元 | HKD | 每日 |
| 洪都拉斯伦皮拉 | HNL | 每月 |
| 海地古德 | HTG | 每月 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 伊拉克第纳尔 | IQD | 每月 |
| 伊朗里亚尔 | IRR | 每月 |
| 冰岛克朗 | ISK | 每日 |
| 牙买加元 | JMD | 每月 |
| 约旦第纳尔 | JOD | 每月 |
| 日元 | JPY | 每日 |
| 肯尼亚先令 | KES | 每月 |
| 吉尔吉斯斯坦索姆 | KGS | 每月 |
| 柬埔寨瑞尔 | KHR | 每月 |
| 科摩罗法郎 | KMF | 每月 |
| 朝鲜圆 | KPW | 每月 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每月 |
| 开曼群岛元 | KYD | 每月 |
| 哈萨克斯坦坚戈 | KZT | 每月 |
| 老挝基普 | LAK | 每月 |
| 黎巴嫩镑 | LBP | 每月 |
| 斯里兰卡卢比 | LKR | 每月 |
| 利比里亚元 | LRD | 每月 |
| 莱索托洛蒂 | LSL | 每月 |
| 利比亚第纳尔 | LYD | 每月 |
| 摩洛哥迪拉姆 | MAD | 每月 |
| 摩尔多瓦列伊 | MDL | 每月 |
| 马达加斯加阿里亚里 | MGA | 每月 |
| 北马其顿代纳尔 | MKD | 每月 |
| 缅甸元 | MMK | 每月 |
| 蒙古图格里克 | MNT | 每月 |
| 澳门元 | MOP | 每月 |
| 毛里塔尼亚乌吉亚 | MRU | 每月 |
| 毛里求斯卢比 | MUR | 每月 |
| 马尔代夫拉菲亚 | MVR | 每月 |
| 马拉维克瓦查 | MWK | 每月 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 莫桑比克梅蒂卡尔 | MZN | 每月 |
| 纳米比亚元 | NAD | 每月 |
| 尼日利亚奈拉 | NGN | 每月 |
| 尼加拉瓜科多巴 | NIO | 每月 |
| 挪威克朗 | NOK | 每日 |
| 尼泊尔卢比 | NPR | 每月 |
| 新西兰元 | NZD | 每日 |
| 阿曼里亚尔 | OMR | 每月 |
| 巴拿马巴波亚 | PAB | 每月 |
| 秘鲁新索尔 | PEN | 每月 |
| 巴布亚新几内亚基那 | PGK | 每月 |
| 菲律宾比索 | PHP | 每日 |
| 巴基斯坦卢比 | PKR | 每月 |
| 波兰兹罗提 | PLN | 每日 |
| 巴拉圭瓜拉尼 | PYG | 每月 |
| 卡塔尔里亚尔 | QAR | 每月 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每月 |
| 俄罗斯卢布 | RUB | 每日 |
| 卢旺达法郎 | RWF | 每月 |
| 沙特里亚尔 | SAR | 每月 |
| 所罗门群岛元 | SBD | 每月 |
| 塞舌尔卢比 | SCR | 每月 |
| 苏丹镑 | SDG | 每月 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 圣赫勒拿镑 | SHP | 每月 |
| 塞拉利昂利昂 | SLE | 每月 |
| 索马里先令 | SOS | 每月 |
| 苏里南元 | SRD | 每月 |
| 南苏丹镑 | SSP | 每月 |
| 圣多美和普林西比多布拉 | STN | 每月 |
| 萨尔瓦多科朗 | SVC | 每月 |
| 叙利亚镑 | SYP | 每月 |
| 斯威士兰里兰吉尼 | SZL | 每月 |
| 泰铢 | THB | 每日 |
| 塔吉克斯坦索莫尼 | TJS | 每月 |
| 土库曼斯坦马纳特 | TMT | 每月 |
| 突尼斯第纳尔 | TND | 每月 |
| 汤加潘加 | TOP | 每月 |
| 土耳其里拉 | TRY | 每日 |
| 特立尼达和多巴哥元 | TTD | 每月 |
| 新台币 | TWD | 每月 |
| 坦桑尼亚先令 | TZS | 每月 |
| 乌克兰格里夫尼亚 | UAH | 每月 |
| 乌干达先令 | UGX | 每月 |
| 美元 | USD | 每日 |
| 乌拉圭比索 | UYU | 每月 |
| 乌兹别克斯坦苏姆 | UZS | 每月 |
| 越南盾 | VND | 每月 |
| 瓦努阿图瓦图 | VUV | 每月 |
| 萨摩亚塔拉 | WST | 每月 |
| 中非法郎 | XAF | 每月 |
| 东加勒比元 | XCD | 每月 |
| 西非法郎 | XOF | 每月 |
| 太平洋法郎 | XPF | 每月 |
| 也门里亚尔 | YER | 每月 |
| 南非兰特 | ZAR | 每日 |
| 赞比亚克瓦查 | ZMW | 每月 |

配置选项 `data_source` 的值是 `czech_national_bank`

### 丹麦国家银行

> 参考：[https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/exchange-rates](https://www.nationalbanken.dk/en/what-we-do/stable-prices-monetary-policy-and-the-danish-economy/exchange-rates)

基准货币是丹麦克朗（`DKK`）。每日汇率通常在工作日的 16:00（欧洲中部时间 CET）的稍晚更新。

该数据源支持 30 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 美元 | USD | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `danmarks_national_bank`

### 欧洲中央银行

> 参考：[https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)

基准货币是欧元（`EUR`）。每日汇率通常在工作日的 16:00（欧洲中部时间 CET）左右更新。

该数据源支持 30 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 美元 | USD | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `euro_central_bank`

### 格鲁吉亚国家银行

> 参考：[https://nbg.gov.ge/en/monetary-policy/currency](https://nbg.gov.ge/en/monetary-policy/currency)

基准货币是格鲁吉亚拉里（`GEL`）。每日汇率通常不晚于工作日的 17:00（格鲁吉亚标准时间 GET）更新。

该数据源支持 43 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 亚美尼亚德拉姆 | AMD | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 阿塞拜疆马纳特 | AZN | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 白俄罗斯卢布 | BYN | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 伊朗里亚尔 | IRR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 吉尔吉斯斯坦索姆 | KGS | 每日 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每日 |
| 哈萨克斯坦坚戈 | KZT | 每日 |
| 摩尔多瓦列伊 | MDL | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 卡塔尔里亚尔 | QAR | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 塔吉克斯坦索莫尼 | TJS | 每日 |
| 土库曼斯坦马纳特 | TMT | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 美元 | USD | 每日 |
| 乌兹别克斯坦苏姆 | UZS | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `national_bank_of_georgia`

### 匈牙利中央银行

> 参考：[https://www.mnb.hu/en/arfolyamok](https://www.mnb.hu/en/arfolyamok)

基准货币是匈牙利福林（`HUF`）。每日汇率通常在工作日的 11:00（欧洲中部时间 CET）左右更新。

该数据源支持 33 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 美元 | USD | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `central_bank_of_hungary`

### 以色列银行

> 参考：[https://www.boi.org.il/en/economic-roles/financial-markets/exchange-rates/](https://www.boi.org.il/en/economic-roles/financial-markets/exchange-rates/)

基准货币是以色列新谢克尔（`ILS`）。每日汇率通常在工作日的 15:45（以色列标准时间 IST）左右更新。

该数据源支持 15 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 约旦第纳尔 | JOD | 每日 |
| 日元 | JPY | 每日 |
| 黎巴嫩镑 | LBP | 每日 |
| 挪威克朗 | NOK | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 美元 | USD | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `bank_of_israel`

### 缅甸中央银行

> 参考：[https://forex.cbm.gov.mm/index.php/fxrate](https://forex.cbm.gov.mm/index.php/fxrate)

基准货币是缅甸元（`MMK`）。

该数据源支持 38 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 孟加拉塔卡 | BDT | 每日 |
| 文莱元 | BND | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 日元 | JPY | 每日 |
| 肯尼亚先令 | KES | 每日 |
| 柬埔寨瑞尔 | KHR | 每日 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每日 |
| 老挝基普 | LAK | 每日 |
| 斯里兰卡卢比 | LKR | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 尼泊尔卢比 | NPR | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 巴基斯坦卢比 | PKR | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 美元 | USD | 每日 |
| 越南盾 | VND | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `central_bank_of_myanmar`

### 挪威银行

> 参考：[https://www.norges-bank.no/en/topics/Statistics/exchange_rates/](https://www.norges-bank.no/en/topics/Statistics/exchange_rates/)

基准货币是挪威克朗（`NOK`）。每日汇率大约在工作日 16:00（欧洲中部时间 CET）更新。

该数据源支持 37 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 澳大利亚元 | AUD | 每日 |
| 孟加拉塔卡 | BDT | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 白俄罗斯卢布 | BYN | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 缅甸元 | MMK | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 巴基斯坦卢比 | PKR | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 新台币 | TWD | 每日 |
| 美元 | USD | 每日 |
| 越南盾 | VND | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `norges_bank`

### 波兰国家银行

> 参考：[https://nbp.pl/en/statistic-and-financial-reporting/rates/](https://nbp.pl/en/statistic-and-financial-reporting/rates/)

基准货币是波兰兹罗提（`PLN`）。每日汇率通常在工作日的 11:45（欧洲中部时间 CET） 到 12:15（欧洲中部时间 CET） 间更新。每周汇率通常在周三更新。

该数据源支持 147 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每周 |
| 阿富汗尼 | AFN | 每周 |
| 阿尔巴尼亚列克 | ALL | 每周 |
| 亚美尼亚德拉姆 | AMD | 每周 |
| 安哥拉宽扎 | AOA | 每周 |
| 阿根廷比索 | ARS | 每周 |
| 澳大利亚元 | AUD | 每日 |
| 阿鲁巴弗罗林 | AWG | 每周 |
| 阿塞拜疆马纳特 | AZN | 每周 |
| 波斯尼亚和黑塞哥维那可兑换马克 | BAM | 每周 |
| 巴巴多斯元 | BBD | 每周 |
| 孟加拉塔卡 | BDT | 每周 |
| 保加利亚列弗 | BGN | 每日 |
| 巴林第纳尔 | BHD | 每周 |
| 布隆迪法郎 | BIF | 每周 |
| 文莱元 | BND | 每周 |
| 玻利维亚诺 | BOB | 每周 |
| 巴西雷亚尔 | BRL | 每日 |
| 巴哈马元 | BSD | 每周 |
| 博茨瓦纳普拉 | BWP | 每周 |
| 白俄罗斯卢布 | BYN | 每周 |
| 伯利兹元 | BZD | 每周 |
| 加拿大元 | CAD | 每日 |
| 刚果民主共和国刚果法郎 | CDF | 每周 |
| 瑞士法郎 | CHF | 每日 |
| 智利比索 | CLP | 每日 |
| 人民币 | CNY | 每日 |
| 哥伦比亚比索 | COP | 每周 |
| 哥斯达黎加科朗 | CRC | 每周 |
| 古巴比索 | CUP | 每周 |
| 佛得角埃斯库多 | CVE | 每周 |
| 捷克克朗 | CZK | 每日 |
| 吉布提法郎 | DJF | 每周 |
| 丹麦克朗 | DKK | 每日 |
| 多米尼加比索 | DOP | 每周 |
| 阿尔及利亚第纳尔 | DZD | 每周 |
| 埃及镑 | EGP | 每周 |
| 厄立特里亚纳克法 | ERN | 每周 |
| 埃塞俄比亚比尔 | ETB | 每周 |
| 欧元 | EUR | 每日 |
| 斐济元 | FJD | 每周 |
| 英镑 | GBP | 每日 |
| 格鲁吉亚拉里 | GEL | 每周 |
| 加纳塞地 | GHS | 每周 |
| 直布罗陀镑 | GIP | 每周 |
| 冈比亚达拉西 | GMD | 每周 |
| 几内亚法郎 | GNF | 每周 |
| 危地马拉格查尔 | GTQ | 每周 |
| 圭亚那元 | GYD | 每周 |
| 港元 | HKD | 每日 |
| 洪都拉斯伦皮拉 | HNL | 每周 |
| 海地古德 | HTG | 每周 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 伊拉克第纳尔 | IQD | 每周 |
| 伊朗里亚尔 | IRR | 每周 |
| 冰岛克朗 | ISK | 每日 |
| 牙买加元 | JMD | 每周 |
| 约旦第纳尔 | JOD | 每周 |
| 日元 | JPY | 每日 |
| 肯尼亚先令 | KES | 每周 |
| 吉尔吉斯斯坦索姆 | KGS | 每周 |
| 柬埔寨瑞尔 | KHR | 每周 |
| 科摩罗法郎 | KMF | 每周 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每周 |
| 哈萨克斯坦坚戈 | KZT | 每周 |
| 老挝基普 | LAK | 每周 |
| 黎巴嫩镑 | LBP | 每周 |
| 斯里兰卡卢比 | LKR | 每周 |
| 利比里亚元 | LRD | 每周 |
| 莱索托洛蒂 | LSL | 每周 |
| 利比亚第纳尔 | LYD | 每周 |
| 摩洛哥迪拉姆 | MAD | 每周 |
| 摩尔多瓦列伊 | MDL | 每周 |
| 马达加斯加阿里亚里 | MGA | 每周 |
| 北马其顿代纳尔 | MKD | 每周 |
| 缅甸元 | MMK | 每周 |
| 蒙古图格里克 | MNT | 每周 |
| 澳门元 | MOP | 每周 |
| 毛里塔尼亚乌吉亚 | MRU | 每周 |
| 毛里求斯卢比 | MUR | 每周 |
| 马尔代夫拉菲亚 | MVR | 每周 |
| 马拉维克瓦查 | MWK | 每周 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 莫桑比克梅蒂卡尔 | MZN | 每周 |
| 纳米比亚元 | NAD | 每周 |
| 尼日利亚奈拉 | NGN | 每周 |
| 尼加拉瓜科多巴 | NIO | 每周 |
| 挪威克朗 | NOK | 每日 |
| 尼泊尔卢比 | NPR | 每周 |
| 新西兰元 | NZD | 每日 |
| 阿曼里亚尔 | OMR | 每周 |
| 巴拿马巴波亚 | PAB | 每周 |
| 秘鲁新索尔 | PEN | 每周 |
| 巴布亚新几内亚基那 | PGK | 每周 |
| 菲律宾比索 | PHP | 每日 |
| 巴基斯坦卢比 | PKR | 每周 |
| 巴拉圭瓜拉尼 | PYG | 每周 |
| 卡塔尔里亚尔 | QAR | 每周 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每周 |
| 俄罗斯卢布 | RUB | 每日 |
| 卢旺达法郎 | RWF | 每周 |
| 沙特里亚尔 | SAR | 每周 |
| 所罗门群岛元 | SBD | 每周 |
| 塞舌尔卢比 | SCR | 每周 |
| 苏丹镑 | SDG | 每周 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 塞拉利昂利昂 | SLE | 每周 |
| 索马里先令 | SOS | 每周 |
| 苏里南元 | SRD | 每周 |
| 南苏丹镑 | SSP | 每周 |
| 圣多美和普林西比多布拉 | STN | 每周 |
| 萨尔瓦多科朗 | SVC | 每周 |
| 叙利亚镑 | SYP | 每周 |
| 斯威士兰里兰吉尼 | SZL | 每周 |
| 泰铢 | THB | 每日 |
| 塔吉克斯坦索莫尼 | TJS | 每周 |
| 土库曼斯坦马纳特 | TMT | 每周 |
| 突尼斯第纳尔 | TND | 每周 |
| 汤加潘加 | TOP | 每周 |
| 土耳其里拉 | TRY | 每日 |
| 特立尼达和多巴哥元 | TTD | 每周 |
| 新台币 | TWD | 每周 |
| 坦桑尼亚先令 | TZS | 每周 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 乌干达先令 | UGX | 每周 |
| 美元 | USD | 每日 |
| 乌拉圭比索 | UYU | 每周 |
| 乌兹别克斯坦苏姆 | UZS | 每周 |
| 委内瑞拉玻利瓦尔 | VES | 每周 |
| 越南盾 | VND | 每周 |
| 瓦努阿图瓦图 | VUV | 每周 |
| 萨摩亚塔拉 | WST | 每周 |
| 中非法郎 | XAF | 每周 |
| 东加勒比元 | XCD | 每周 |
| 西非法郎 | XOF | 每周 |
| 太平洋法郎 | XPF | 每周 |
| 也门里亚尔 | YER | 每周 |
| 南非兰特 | ZAR | 每日 |
| 赞比亚克瓦查 | ZMW | 每周 |
| 津巴布韦金 | ZWG | 每周 |

配置选项 `data_source` 的值是 `national_bank_of_poland`

### 罗马尼亚国家银行

> 参考：[https://bnro.ro/Exchange-rates-1224.aspx](https://bnro.ro/Exchange-rates-1224.aspx)

基准货币是罗马尼亚列伊（`RON`）。每日汇率通常在工作日的 13:00（欧洲东部时间 EET）的稍晚更新。

该数据源支持 36 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 摩尔多瓦列伊 | MDL | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 美元 | USD | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `national_bank_of_romania`

### 俄罗斯银行

> 参考：[https://www.cbr.ru/eng/currency_base/daily/](https://www.cbr.ru/eng/currency_base/daily/)

基准货币是俄罗斯卢布（`RUB`）。每日汇率通常在工作日的 15:30（莫斯科时间 MCK）左右更新。

该数据源支持 54 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 亚美尼亚德拉姆 | AMD | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 阿塞拜疆马纳特 | AZN | 每日 |
| 孟加拉塔卡 | BDT | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴林第纳尔 | BHD | 每日 |
| 玻利维亚诺 | BOB | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 白俄罗斯卢布 | BYN | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 古巴比索 | CUP | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 阿尔及利亚第纳尔 | DZD | 每日 |
| 埃及镑 | EGP | 每日 |
| 埃塞俄比亚比尔 | ETB | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 格鲁吉亚拉里 | GEL | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 印度卢比 | INR | 每日 |
| 伊朗里亚尔 | IRR | 每日 |
| 日元 | JPY | 每日 |
| 吉尔吉斯斯坦索姆 | KGS | 每日 |
| 韩元 | KRW | 每日 |
| 哈萨克斯坦坚戈 | KZT | 每日 |
| 摩尔多瓦列伊 | MDL | 每日 |
| 缅甸元 | MMK | 每日 |
| 蒙古图格里克 | MNT | 每日 |
| 尼日利亚奈拉 | NGN | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 阿曼里亚尔 | OMR | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 卡塔尔里亚尔 | QAR | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 塔吉克斯坦索莫尼 | TJS | 每日 |
| 土库曼斯坦马纳特 | TMT | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 美元 | USD | 每日 |
| 乌兹别克斯坦苏姆 | UZS | 每日 |
| 越南盾 | VND | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `bank_of_russia`

### 瑞士国家银行

> 参考：[https://www.snb.ch/en/the-snb/mandates-goals/statistics/statistics-pub/current_interest_exchange_rates](https://www.snb.ch/en/the-snb/mandates-goals/statistics/statistics-pub/current_interest_exchange_rates)

基准货币是瑞士法郎（`CHF`）。每日汇率通常在工作日的 11:00（格林尼治标准时间 GMT）左右更新。

该数据源支持 4 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 日元 | JPY | 每日 |
| 美元 | USD | 每日 |

配置选项 `data_source` 的值是 `swiss_national_bank`

### 乌克兰国家银行

> 参考：[https://bank.gov.ua/en/markets/exchangerates](https://bank.gov.ua/en/markets/exchangerates)

基准货币是乌克兰格里夫尼亚（`UAH`）。

该数据源支持 41 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 阿塞拜疆马纳特 | AZN | 每日 |
| 孟加拉塔卡 | BDT | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 阿尔及利亚第纳尔 | DZD | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 格鲁吉亚拉里 | GEL | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 哈萨克斯坦坚戈 | KZT | 每日 |
| 黎巴嫩镑 | LBP | 每日 |
| 摩尔多瓦列伊 | MDL | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 突尼斯第纳尔 | TND | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 美元 | USD | 每日 |
| 越南盾 | VND | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `national_bank_of_ukraine`

### 乌兹别克斯坦共和国中央银行

> 参考：[https://cbu.uz/en/arkhiv-kursov-valyut/](https://cbu.uz/en/arkhiv-kursov-valyut/)

基准货币是乌兹别克斯坦苏姆（`UZS`）。

该数据源支持 74 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 阿富汗尼 | AFN | 每日 |
| 亚美尼亚德拉姆 | AMD | 每日 |
| 阿根廷比索 | ARS | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 阿塞拜疆马纳特 | AZN | 每日 |
| 孟加拉塔卡 | BDT | 每日 |
| 保加利亚列弗 | BGN | 每日 |
| 巴林第纳尔 | BHD | 每日 |
| 文莱元 | BND | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 白俄罗斯卢布 | BYN | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 人民币 | CNY | 每日 |
| 古巴比索 | CUP | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 阿尔及利亚第纳尔 | DZD | 每日 |
| 埃及镑 | EGP | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 格鲁吉亚拉里 | GEL | 每日 |
| 港元 | HKD | 每日 |
| 匈牙利福林 | HUF | 每日 |
| 印度尼西亚卢比 | IDR | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 伊拉克第纳尔 | IQD | 每日 |
| 伊朗里亚尔 | IRR | 每日 |
| 冰岛克朗 | ISK | 每日 |
| 约旦第纳尔 | JOD | 每日 |
| 日元 | JPY | 每日 |
| 吉尔吉斯斯坦索姆 | KGS | 每日 |
| 柬埔寨瑞尔 | KHR | 每日 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每日 |
| 哈萨克斯坦坚戈 | KZT | 每日 |
| 老挝基普 | LAK | 每日 |
| 黎巴嫩镑 | LBP | 每日 |
| 利比亚第纳尔 | LYD | 每日 |
| 摩洛哥迪拉姆 | MAD | 每日 |
| 摩尔多瓦列伊 | MDL | 每日 |
| 缅甸元 | MMK | 每日 |
| 蒙古图格里克 | MNT | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 阿曼里亚尔 | OMR | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 巴基斯坦卢比 | PKR | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 卡塔尔里亚尔 | QAR | 每日 |
| 罗马尼亚列伊 | RON | 每日 |
| 塞尔维亚第纳尔 | RSD | 每日 |
| 俄罗斯卢布 | RUB | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 苏丹镑 | SDG | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 叙利亚镑 | SYP | 每日 |
| 泰铢 | THB | 每日 |
| 塔吉克斯坦索莫尼 | TJS | 每日 |
| 土库曼斯坦马纳特 | TMT | 每日 |
| 突尼斯第纳尔 | TND | 每日 |
| 土耳其里拉 | TRY | 每日 |
| 乌克兰格里夫尼亚 | UAH | 每日 |
| 美元 | USD | 每日 |
| 乌拉圭比索 | UYU | 每日 |
| 委内瑞拉玻利瓦尔 | VES | 每日 |
| 越南盾 | VND | 每日 |
| 也门里亚尔 | YER | 每日 |
| 南非兰特 | ZAR | 每日 |

配置选项 `data_source` 的值是 `central_bank_of_uzbekistan`

### 国际货币基金组织

> 参考：[https://www.imf.org/external/np/fin/data/param_rms_mth.aspx](https://www.imf.org/external/np/fin/data/param_rms_mth.aspx)

基准货币是美元（`USD`）。每日汇率通常在工作日的 11:00 至 18:00（美国东部时间 EST）间更新。

该数据源支持 35 种货币，所有货币如下：

| 货币 | 货币代码 | 更新频率 |
| --- | --- | --- |
| 阿联酋迪拉姆 | AED | 每日 |
| 澳大利亚元 | AUD | 每日 |
| 文莱元 | BND | 每日 |
| 巴西雷亚尔 | BRL | 每日 |
| 博茨瓦纳普拉 | BWP | 每日 |
| 加拿大元 | CAD | 每日 |
| 瑞士法郎 | CHF | 每日 |
| 智利比索 | CLP | 每日 |
| 人民币 | CNY | 每日 |
| 捷克克朗 | CZK | 每日 |
| 丹麦克朗 | DKK | 每日 |
| 阿尔及利亚第纳尔 | DZD | 每日 |
| 欧元 | EUR | 每日 |
| 英镑 | GBP | 每日 |
| 以色列新谢克尔 | ILS | 每日 |
| 印度卢比 | INR | 每日 |
| 日元 | JPY | 每日 |
| 韩元 | KRW | 每日 |
| 科威特第纳尔 | KWD | 每日 |
| 毛里求斯卢比 | MUR | 每日 |
| 墨西哥比索 | MXN | 每日 |
| 马来西亚林吉特 | MYR | 每日 |
| 挪威克朗 | NOK | 每日 |
| 新西兰元 | NZD | 每日 |
| 阿曼里亚尔 | OMR | 每日 |
| 秘鲁新索尔 | PEN | 每日 |
| 菲律宾比索 | PHP | 每日 |
| 波兰兹罗提 | PLN | 每日 |
| 卡塔尔里亚尔 | QAR | 每日 |
| 沙特里亚尔 | SAR | 每日 |
| 瑞典克朗 | SEK | 每日 |
| 新加坡元 | SGD | 每日 |
| 泰铢 | THB | 每日 |
| 特立尼达和多巴哥元 | TTD | 每日 |
| 乌拉圭比索 | UYU | 每日 |

配置选项 `data_source` 的值是 `international_monetary_fund`
