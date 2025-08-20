---
layout: default
title: 翻译
nav_order: 10
parent: 中文 (简体)
permalink: /zh_Hans/translating
---

# 翻译
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 介绍

ezBookkeeping 支持多语言和本地化设置，前端和后端分别有自己的多语言文件。前端多语言文件在 `/src/locales/`，后端多语言文件在 `/pkg/locales/`。所有语言文件需要以语言标签（单一语言子标签 或 语言子标签加书写体子标签，例如 `en`、`fr`、`zh-Hans`、`zh-Hant`）命名。

> 有关语言标签的更多信息，请参考 [RFC56​​46](https://www.rfc-editor.org/rfc/rfc5646.html)。所有可用语言标签可从这里 [IANA registry language-subtag-registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) 找到。

### 为前端增加新语言

1. 复制 `/src/locales/en.json` 并创建一个以语言标签命名的新文件
2. 在 `/src/locales/index.ts` 中的 `allLanguages` 对象中添加键值对，其中键名应当为语言标签，值对象里字段说明如下：
    1. `name` 为英文的语言名称
    2. `displayName` 为该语言下的语言名称
    3. `alternativeLanguageTag` 为 `language-region` 格式的语言标签（例如 `zh-CN`），为了兼容一些不支持 `language-script` 格式语言标签的第三方服务
    4. `textDirection` 为文字方向，支持 `ltr`（从左到右）及 `rtl`（从右到左）
    5. `content` 字段为该语言的字典对象
3. 翻译每个文字条目

### 为后端增加新语言

1. 复制 `/pkg/locales/en.go` 并创建一个以语言标签命名的新文件
2. 在 `/pkg/locales/all_locales.go` 中的 `AllLanguages` map 中添加键值对，其中键名应当为语言标签，值对象里的 `Content` 字段应当为新的语言对象
3. 翻译每个文字条目

## 国际化

ezBookkeeping 允许用户更改多项区域设置，如日期、时间、数字和货币格式。当用户没有修改时，这些区域设置将使用语言文件中配置的默认值。这些默认值都在语言文件的 `default` 对象中。

这里是所有需要配置默认值的设置和说明：

| 项目 | 所有可用选项 | 描述 |
| --- | --- | --- |
| `currency` | [`/src/consts/currency.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/consts/currency.ts) 中的 `ALL_CURRENCIES` | 默认货币 |
| `firstDayOfWeek` | [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) 中的 `WeekDay` | 默认每周第一天，支持 `Sunday`、`Monday`、`Tuesday`、`Wednesday`、`Thursday`、`Friday` 和 `Saturday` |
| `fiscalYearFormat` | `FiscalYearFormat` in [`/src/core/fiscalyear.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/fiscalyear.ts) | 默认财年格式，支持 `StartYYYY_EndYYYY`、`StartYYYY_EndYY`、`StartYY_EndYY`、`EndYYYY` 和 `EndYY` |
| `longDateFormat` | [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) 中的 `LongDateFormat` | 默认长日期格式，支持 `YYYYMMDD`（年月日）、`MMDDYYYY`（月日年） 和 `DDMMYYYY`（日月年） |
| `shortDateFormat` | [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) 中的 `ShortDateFormat` | 默认短日期格式，支持 `YYYYMMDD`（年月日）、`MMDDYYYY`（月日年） 和 `DDMMYYYY`（日月年） |
| `longTimeFormat` | [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) 中的 `LongTimeFormat` | 默认长时间格式，支持 `HHMMSS`（24小时制）、`AHHMMSS`（12小时制，上午/下午标识在前） 和 `HHMMSSA`（12小时制，上午/下午标识在后） |
| `shortTimeFormat` | [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) 中的 `ShortTimeFormat` | 默认短时间格式，支持 `HHMMSS`（24小时制）、`AHHMMSS`（12小时制，上午/下午标识在前） 和 `HHMMSSA`（12小时制，上午/下午标识在后） |
| `currencyDisplayType` | [`/src/core/currency.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/currency.ts) 中的 `CurrencyDisplayType` | 默认货币显示类型，支持 `None`、`SymbolBeforeAmount`、`SymbolAfterAmount`、`SymbolBeforeAmountWithoutSpace`、`SymbolAfterAmountWithoutSpace`、`CodeBeforeAmount`、`CodeAfterAmount`、`UnitBeforeAmount`、`UnitAfterAmount`、`NameBeforeAmount` 和 `NameAfterAmount` |
| `numeralSystem` | [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) 中的 `NumeralSystem` | 默认数字系统，支持 `WesternArabicNumerals`、`EasternArabicNumerals`、`PersianDigits`、`BurmeseNumerals` 和 `DevanagariNumerals` |
| `decimalSeparator` | [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) 中的 `DecimalSeparator` | 默认小数点，支持 `Dot` 和 `Comma` |
| `digitGroupingSymbol` | [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) 中的 `DigitGroupingSymbol` | 默认数字分组符号，支持 `Dot`、`Comma`、`Space` 和 `Apostrophe` |
| `digitGrouping` | [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) 中的 `DigitGroupingType` | 默认数字分组类型，支持 `None` 和 `ThousandsSeparator` |

另外，各语言文件的 `format` 对象中有各个语言下日期和时间格式的可选项，这些格式可参考 Moment.js 的 [文档](https://momentjs.com/docs/#/displaying/) 设置，具体这些格式的使用场景如下

| 项目 | 使用场景 |
| --- | --- |
| `longDate` | 多个场景 |
| `shortDate` | 多个场景 |
| `longYear` | 首页总览数据中使用 |
| `shortYear` | 交易和统计分析页面的时间筛选中使用 |
| `longYearMonth` | 交易列表显示月份时使用 |
| `shortYearMonth` | 交易和统计分析页面的时间筛选中使用 |
| `longMonthDay` | 首页总览数据中使用 |
| `shortMonthDay` | 交易和统计分析页面的时间筛选中使用，显示在 `shortDate` 旁边，格式应该类似于 `shortDate` |
| `longTime` | 多个场景 |
| `shortTime` | 多个场景 |

此外，时区的数据来自 [nodatime](https://github.com/nodatime/nodatime/tree/main/data/cldr) ，时区本地化的名称来自 [TimeZoneNames](https://github.com/mattjohnsonpint/TimeZoneNames/blob/main/src/TimeZoneNames.DataBuilder/data/windows-displaynames.json)
