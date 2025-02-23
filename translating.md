---
layout: default
title: Translating
nav_order: 9
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
2. Add a key-value pair to the `allLanguages` object in `/src/locales/index.ts`. The key should be the language tag, the `name` field in the value object should be the language name in English, the `displayName` field should be the language name in that language, and the `content` field should be the imported new language object. In addition, to be compatible with some third-party services that don't support language tags in the `language-script` format, a language tag in the `language-region` format needs to be set in the `alternativeLanguageTag` field (e.g. `zh-CN`)
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
| `currency` | `ALL_CURRENCIES` in `/src/consts/currency.ts` | The default currency |
| `firstDayOfWeek` | `WeekDay` in `/src/core/datetime.ts` | The default first day of the week |
| `longDateFormat` | `LongDateFormat` in `/src/core/datetime.ts` | The default long date format |
| `shortDateFormat` | `ShortDateFormat` in `/src/core/datetime.ts` | The default short date format |
| `longTimeFormat` | `LongTimeFormat` in `/src/core/datetime.ts` | The default long time format |
| `shortTimeFormat` | `ShortTimeFormat` in `/src/core/datetime.ts` | The default short time format |
| `decimalSeparator` | `DecimalSeparator` in `/src/core/numeral.ts` | The default decimal separator |
| `digitGroupingSymbol` | `DigitGroupingSymbol` in `/src/core/numeral.ts` | The default digit grouping symbol |
| `digitGrouping` | `DigitGroupingType` in `/src/core/numeral.ts` | The default digit grouping type |
| `currencyDisplayType` | `CurrencyDisplayType` in `/src/core/currency.ts` | The default currency display type |

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
