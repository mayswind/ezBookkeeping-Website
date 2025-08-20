---
layout: default
title: Translating
nav_order: 10
permalink: /translating
---

# Translating
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Introduction

ezBookkeeping supports multiple languages and localization settings, with separate language files for the frontend and backend. The frontend language files are located in `/src/locales/`, and the backend language files are in `/pkg/locales/`. All language files should be named using language tags (either a single language subtag or a language subtag with a script subtag, such as `en`, `fr`, `zh-Hans` or `zh-Hant`).

For more information about language tags, please refer to [RFC5646](https://www.rfc-editor.org/rfc/rfc5646.html). All available language tags can be found in [IANA registry language-subtag-registry](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry).

### Add new language for frontend

1. Copy `/src/locales/en.json` and create a new file named with the language tag
2. Add a key-value pair to the `allLanguages` object in `/src/locales/index.ts`. The key should be the language tag, and the value should be an object with the following fields:
    1. `name` field is the language name in English
    2. `displayName` field is the language name in its own language
    3. `alternativeLanguageTag` field is the language tag in the `language-region` format (e.g. `zh-CN`), used for compatibility with some third-party services that don't support language tags in the `language-script` format
    4. `textDirection` field is the text direction, supports `ltr` (left-to-right) or `rtl` (right-to-left)
    5. `content` field is the dictionary object for this language
3. Translate each text item

### Add new language for backend

1. Copy `/pkg/locales/en.go` and create a new file named with the language tag
2. Add a key-value pair to the `AllLanguages` map in `/pkg/locales/all_locales.go`. The key should be the language tag, and the `Content` field in the value object should be the new language object
3. Translate each text item

## Internationalization

ezBookkeeping allows users to change multiple regional settings, such as date, time, numeral, and currency formats. If the user does not change these settings, the default values configured in the language files will be used. These default values are in the `default` object of the language file.

Here are all the settings that require default values and their descriptions:

| Item | All Available Options | Description |
| --- | --- | --- |
| `currency` | `ALL_CURRENCIES` in [`/src/consts/currency.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/consts/currency.ts) | The default currency |
| `firstDayOfWeek` | `WeekDay` in [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) | The default first day of the week, supports `Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday` and `Saturday` |
| `fiscalYearFormat` | `FiscalYearFormat` in [`/src/core/fiscalyear.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/fiscalyear.ts) | The default fiscal year format, supports `StartYYYY_EndYYYY`, `StartYYYY_EndYY`, `StartYY_EndYY`, `EndYYYY` and `EndYY` |
| `longDateFormat` | `LongDateFormat` in [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) | The default long date format, supports `YYYYMMDD` (Year Month Day), `MMDDYYYY` (Month Day Year) and `DDMMYYYY` (Day Month Year) |
| `shortDateFormat` | `ShortDateFormat` in [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) | The default short date format, supports `YYYYMMDD` (Year Month Day), `MMDDYYYY` (Month Day Year) and `DDMMYYYY` (Day Month Year) |
| `longTimeFormat` | `LongTimeFormat` in [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) | The default long time format, supports `HHMMSS` (24-hour time format), `AHHMMSS` (12-hour time format, AM/PM before the time) and `HHMMSSA` (12-hour time format, AM/PM after the time) |
| `shortTimeFormat` | `ShortTimeFormat` in [`/src/core/datetime.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/datetime.ts) | The default short time format, supports `HHMMSS` (24-hour time format), `AHHMMSS` (12-hour time format, AM/PM before the time) and `HHMMSSA` (12-hour time format, AM/PM after the time) |
| `currencyDisplayType` | `CurrencyDisplayType` in [`/src/core/currency.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/currency.ts) | The default currency display type, supports `None`, `SymbolBeforeAmount`, `SymbolAfterAmount`, `SymbolBeforeAmountWithoutSpace`, `SymbolAfterAmountWithoutSpace`, `CodeBeforeAmount`, `CodeAfterAmount`, `UnitBeforeAmount`, `UnitAfterAmount`, `NameBeforeAmount` and `NameAfterAmount` |
| `numeralSystem` | `NumeralSystem` in [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) | The default numeral system, supports `WesternArabicNumerals`, `EasternArabicNumerals`, `PersianDigits`, `BurmeseNumerals` and `DevanagariNumerals` |
| `decimalSeparator` | `DecimalSeparator` in [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) | The default decimal separator, supports `Dot` and `Comma` |
| `digitGroupingSymbol` | `DigitGroupingSymbol` in [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) | The default digit grouping symbol, supports `Dot`, `Comma`, `Space` and `Apostrophe` |
| `digitGrouping` | `DigitGroupingType` in [`/src/core/numeral.ts`](https://github.com/mayswind/ezbookkeeping/blob/main/src/core/numeral.ts) | The default digit grouping type, supports `None` and `ThousandsSeparator` |

In addition, the `format` object in the language files contains options for date and time formats for each language. These formats can be configured according to the Moment.js [documentation](https://momentjs.com/docs/#/displaying/). The specific usage scenarios for these formats are as follows:

| Item | Usage Scenarios |
| --- | --- |
| `longDate` | Multiple scenarios |
| `shortDate` | Multiple scenarios |
| `longYear` | Used in the overview data on the homepage |
| `shortYear` | Used in the time filters on the transaction and statistics analysis pages |
| `longYearMonth` | Used when displaying months in the transaction list |
| `shortYearMonth` | Used in the time filters on the transaction and statistics analysis pages |
| `longMonthDay` | Used in the overview data on the homepage |
| `shortMonthDay` | Used in the time filters on the transaction and statistics analysis pages. It will be displayed next to the `shortDate` and should have a similar format. |
| `longTime` | Multiple scenarios |
| `shortTime` | Multiple scenarios |

In addition, the timezone data is sourced from [nodatime](https://github.com/nodatime/nodatime/tree/main/data/cldr), and the localized timezone names are taken from [TimeZoneNames](https://github.com/mattjohnsonpint/TimeZoneNames/blob/main/src/TimeZoneNames.DataBuilder/data/windows-displaynames.json)

