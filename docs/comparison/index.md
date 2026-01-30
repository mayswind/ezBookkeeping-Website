---
title: Feature Comparison (ezBookkeeping vs. Firefly III vs. Actual Budget)
---

# Feature Comparison

Below is a feature comparison between ezBookkeeping and the open-source, self-hosted personal finance software Firefly III and Actual Budget, based on information as of January 2026.

ezBookkeeping does not cover every possible need, so you can choose the software that best aligns with your top priorities.

## Basic Information

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Compared Version | v1.3.2 | v6.4.16 | v26.1.0 |
| Development Period | 2020–present | 2014–present | 2022–present |
| License | MIT License | GNU Affero General Public License v3.0 | MIT License |
| Programming Languages | Go + TypeScript | PHP + JavaScript | TypeScript |
| Frontend UI frameworks | Vuetify v3.11.3 (released Dec 2025) <br/> Framework7 v9.0.2 (released Dec 2025) | Bootstrap v3.3.7 (released Jul 2016) | React Aria v1.14.0 (released Dec 2025) |
| Official Docker Image Platforms | `linux/amd64` <br/> `linux/arm64` <br/> `linux/armv6` <br/> `linux/armv7` | `linux/amd64` <br/> `linux/arm64` | `linux/amd64` <br/> `linux/arm64` <br/> `linux/armv6` <br/> `linux/armv7` |
| Supported Databases | SQLite, MySQL, PostgreSQL | MySQL, PostgreSQL | SQLite |
| Supported Object Storage | Local filesystem, MinIO (S3-compatible), WebDAV | Local filesystem | – |
| Supported LLM providers | OpenAI, OpenAI-compatible APIs, OpenRouter, Ollama, Google AI | - | - |
| Supported map providers | OpenStreetMap, CartoDB, TomTom, Google Maps, Baidu Map, Amap, and 11 other providers plus custom tile providers | - | - |
| Supported exchange rate sources | 16 central banks or user-defined | Firefly III official site or user-defined | - |

## Performance

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Docker Image Tag | `1.3.2` | `version-6.4.16` | `26.1.0-alpine` |
| Docker Image Size (`linux/amd64`) | 57.7 MiB | 795 MiB | 188 MiB |
| Docker Image Size (`linux/arm64`) | 55.5 MiB | 805 MiB | 184 MiB |
| Time to Accept Requests on First Start | 1.36 s | 44.48 s | 8.73 s |
| Time to Accept Requests on Second Start | 0.93 s | 35.46 s | 8.69 s |
| Idle Memory Usage After First Start | 25.17 MiB | 71.43 MiB | 117.36 MiB |
| Memory Usage After First Login | 28.78 MiB | 164.66 MiB | 117.13 MiB |

> The above time and memory usage were measured on a Raspberry Pi 4 (4 GiB RAM, system running on a Samsung SSD 980 connected via USB) with Debian 11 (Linux kernel 6.1.21-v8+). All images used were official minimal images that support the `linux/arm64` platform, and all configurations were set to their default values.
>
> Each metric was tested five times. The highest and lowest values were discarded, and the average of the remaining three measurements was used.

## User Interface

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Desktop interface | ✅ Supported | ✅ Supported | ✅ Supported |
| Mobile interface | ✅ Native mobile pages with app-like experience | ⚠️ Provided via responsive desktop UI | ⚠️ Mobile-oriented web pages |
| Dark mode | ✅ Supported | ✅ Supported | ✅ Supported |
| Multi-user support | ✅ Supported | ✅ Supported | ✅ Supported |
| HTTP API support | ✅ Supported | ✅ Supported | ❌ Not supported |
| CLI support | ✅ Supported | ✅ Supported | ✅ Supported |
| Offline usage | ❌ Not supported | ❌ Not supported | ✅ Supported |

## Transaction Capabilities

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Date | ✅ Supported | ✅ Supported | ✅ Supported |
| Time | ✅ Supported (to the second) | ✅ Supported (to the minute) | ❌ Not supported |
| Time zone | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Multiple date / time fields | ❌ Not supported | ✅ Supported (interest date, book date, processing date, due date, payment date, invoice date) | ❌ Not supported |
| Categories | ✅ Two-level categories | ⚠️ Single-level categories | ⚠️ Single-level categories |
| Payee | ✅ Via tags | ✅ Via tags | ✅ Supported |
| Tags | ✅ Up to 10 tags | ✅ Supported | ✅ Supported |
| Geographic location | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Images | ✅ Up to 9 images | ❌ Not supported | ❌ Not supported |
| Attachments | ❌ Not supported | ✅ Supported | ❌ Not supported |
| Cleared status | ✅ Via tags | ✅ Via tags | ✅ Supported |
| Notes / Description | ✅ Supported | ✅ Supported | ✅ Supported |
| Split transactions | ❌ Not supported | ✅ Supported | ✅ Supported |
| Scheduled transactions | ✅ Supported | ✅ Supported | ✅ Supported |
| Transaction templates | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Auto-save transaction drafts | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Automatically update transactions by rules | ❌ Not supported | ✅ Supported | ✅ Supported |

## Transaction Category Capabilities

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Two-level categories | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Expense categories | ✅ Supported | ⚠️ Not distinguished | ⚠️ Not distinguished |
| Income categories | ✅ Supported | ⚠️ Not distinguished | ⚠️ Not distinguished |
| Transfer categories | ✅ Supported | ⚠️ Not distinguished | ⚠️ Not distinguished |
| Category name | ✅ Supported | ✅ Supported | ✅ Supported |
| Category icon | ✅ Built-in icons supported | ❌ Not supported | ❌ Not supported |
| Category color | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Category notes / description | ✅ Supported | ✅ Supported | ❌ Not supported |

## Account Capabilities

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Account name | ✅ Supported | ✅ Supported | ✅ Supported |
| Account types | ✅ Multiple types supported | ✅ Multiple types supported | ❌ Not supported |
| Sub-accounts | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Currency | ✅ Preset global currencies | ✅ Custom currencies supported | ❌ Not supported |
| Account icon | ✅ Built-in icons supported | ❌ Not supported | ❌ Not supported |
| Account color | ✅ Supported | ❌ Not supported | ❌ Not supported |
| IBAN / account number | ❌ Not supported | ✅ Supports IBAN, BIC and account number | ❌ Not supported |
| Account archiving | ✅ Via hidden accounts | ❌ Not supported | ❌ Not supported |
| Account display order | ✅ Supported | ✅ Supported | ✅ Supported |
| Account notes / description | ✅ Supported | ✅ Supported | ❌ Not supported |

## Budgeting Features

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Budgeting feature | ❌ Not supported | ✅ Supported | ✅ Supported |

## Transaction Query Features

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Transaction list view | ✅ Supported | ✅ Supported | ✅ Supported |
| Transaction calendar view | ✅ Supported | ❌ Not supported | ✅ Supported |
| Filter by category | ✅ Supported | ✅ Supported | ✅ Supported |
| Filter by account | ✅ Supported | ✅ Supported | ✅ Supported |
| Filter by tags | ✅ Supported | ✅ Supported | ✅ Supported |
| Filter by amount | ✅ Supported | ✅ Supported | ✅ Supported |
| Filter by notes / description | ✅ Supported | ✅ Supported | ✅ Supported |
| Sort by date | ✅ Supported | ✅ Supported | ✅ Supported |
| Sort by amount | ✅ Supported in Insights Explorer | ❌ Not supported | ✅ Supported |
| Advanced queries | ✅ Supported in Insights Explorer | ⚠️ Multiple conditions support AND only | ⚠️ Multiple conditions support AND only |

## Statistics & Analysis

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Category income / expense proportion charts | ✅ Supported | ✅ Supported | ✅ Supported |
| Account income / expense proportion charts | ✅ Supported | ❌ Not supported | ✅ Supported |
| Asset proportion charts | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Category income / expense trend charts | ✅ Supported | ✅ Supported | ✅ Supported |
| Account income / expense trend charts | ✅ Supported | ❌ Not supported | ✅ Supported |
| Asset trend charts | ✅ Supported | ✅ Supported | ✅ Supported |
| Trend aggregation by time range | ✅ Supported (month, quarter, year, fiscal year, and day in Insights Explorer) | ⚠️ No customization | ✅ Supported (day, week, month, year) |
| Tag charts | ✅ Supported in Insights Explorer | ✅ Supported | ❌ Not supported |
| Custom charts | ✅ Supported | ❌ Not supported | ✅ Supported |
| Export chart data | ✅ Export CSV / TSV / Markdown | ❌ Not supported | ❌ Not supported |
| Category charts (Pie) | ✅ Supported | ✅ Supported | ✅ Supported |
| Category charts (Bar / Column) | ✅ Supported | ❌ Not supported | ✅ Supported |
| Category charts (Radar) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Category charts (Sankey) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Trend charts (Area / Line) | ✅ Supported | ✅ Supported | ✅ Supported |
| Trend charts (Bar / Column) | ✅ Supported | ✅ Supported | ✅ Supported |
| Trend charts (Bubble) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Account reconciliation statements | ✅ Supported | ❌ Not supported | ✅ Supported |
| Export account reconciliation statements | ✅ Export CSV / TSV | ❌ Not supported | ❌ Not supported |
| Account balance trend charts (Area / Line) | ✅ Supported | ✅ Supported | ⚠️ Monthly only |
| Account balance trend charts (Bar) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Account balance trend charts (Candlestick) | ✅ Supported | ❌ Not supported | ❌ Not supported |

## Import Features

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| CSV | ✅ Built-in support | ✅ Via Data Importer | ✅ Built-in support |
| CSV column-mapping import | ✅ Supports import / export rules, shareable via community | ✅ Data Importer has built-in preset rules | ⚠️ Mapping rules must be set each time |
| CSV custom script import | ✅ Supports custom JavaScript scripts | ❌ Not supported | ❌ Not supported |
| CSV file encoding | ✅ Supports 52 encodings (24 with auto-detection) | ⚠️ UTF-8 only | ⚠️ UTF-8 only |
| OFX | ✅ Built-in support | ❌ Not supported | ✅ Built-in support |
| QFX | ✅ Built-in support | ❌ Not supported | ✅ Built-in support |
| QIF | ✅ Built-in support | ❌ Not supported | ✅ Built-in support |
| IIF | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| Camt.052 | ✅ Built-in support | ✅ Via Data Importer | ❌ Not supported |
| Camt.053 | ✅ Built-in support | ✅ Via Data Importer | ✅ Built-in support |
| MT940 | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| GnuCash | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| Firefly III | ✅ Built-in support | - | ❌ Not supported |
| Beancount | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| Feidee MyMoney | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| Alipay statement file | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| WeChat Pay statement file | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| JD.com Finance statement file | ✅ Built-in support | ❌ Not supported | ❌ Not supported |
| YNAB4 | ❌ Not supported | ❌ Not supported | ✅ Built-in support |
| nYNAB | ❌ Not supported | ❌ Not supported | ✅ Built-in support |
| Direct bank connections | ❌ Not supported | ✅ Via Data Importer (GoCardless, Lunch Flow, SimpleFIN, Sophtron, Salt Edge) | ✅ Built-in SimpleFIN, GoCardless, Pluggy.ai |

## Export Features

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| CSV | ✅ Supported | ✅ Supported | ✅ Supported |
| Export based on filters | ✅ Supported | ❌ Not supported | ✅ Supported |

## Data Management

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Clear account transactions | ✅ Supported | ✅ Supported | ❌ Not supported |
| Clear all data | ✅ Supported | ✅ Supported | ❌ Not supported |

## Security

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Two-factor authentication (2FA) | ✅ Supported | ✅ Supported | ❌ Not supported |
| OIDC login | ✅ Supported | ❌ Not supported | ✅ Supported |
| Nextcloud login | ✅ Supported | ❌ Not supported | ⚠️ Via third-party plugin in Nextcloud |
| Gitea login | ✅ Supported | ❌ Not supported | ✅ Via custom OIDC configuration |
| GitHub login | ✅ Supported | ❌ Not supported | ✅ Supported |
| App lock (PIN) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| App lock (WebAuthn) | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Email verification | ✅ Supported | ✅ Supported | ❌ Not supported |
| Password recovery via email | ✅ Supported | ✅ Supported | ❌ Not supported |
| Session management | ✅ Supported (web access, API, CLI, MCP) | ⚠️ Only supports personal access token management and logging out from all devices | ❌ Not supported |
| Login rate limiting | ✅ Supported | ❌ Not supported | ❌ Not supported |
| End-to-end encryption | ❌ Not supported | ❌ Not supported | ✅ Supported |

## Artificial Intelligence

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Model Context Protocol (MCP) | ✅ Built-in support | ⚠️ Via third-party software | ⚠️ Via third-party software |
| MCP access IP whitelist | ✅ Supported | ❌ Not supported | ❌ Not supported |
| AI image recognition | ✅ Supported | ❌ Not supported | ❌ Not supported |

## Exchange Rate Data

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Built-in exchange rate sources | ✅ Synced from official services of 16 central banks (up to 150 currencies) | ⚠️ Synced from Firefly III website (30 currencies) | ❌ Not supported |
| Manual exchange rate input | ✅ Supported | ✅ Supported | ❌ Not supported |

## Personalization

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Font size settings | ✅ Supported on mobile version | ❌ Not supported | ❌ Not supported |
| User avatars | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Multi-device settings sync | ✅ Supported | ❌ Not supported | ❌ Not supported |

## Internationalization & Localization

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Multi-language support | ✅ Supported | ✅ Supported | ✅ Supported |
| Number of supported languages | ✅ 19 languages | ✅ 34 languages | ✅ 15 languages |
| Number of languages with translation progress ≥ 70% | ✅ 19 languages | ✅ 22 languages | ✅ 8 languages |
| Localized date formats | ✅ Customizable | ⚠️ Controlled by the system | ✅ Customizable |
| Localized time formats | ✅ Customizable | ⚠️ Controlled by the system | ❌ Not supported |
| Custom time zone | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Custom first day of week | ✅ Supported | ❌ Not supported | ✅ Supported |
| Custom fiscal year start | ✅ Supported | ✅ Supported | ❌ Not supported |
| Localized digit grouping symbols | ✅ Customizable | ⚠️ Controlled by the system | ✅ Customizable |
| Localized digit grouping formats | ✅ Customizable | ⚠️ Controlled by the system | ✅ Customizable |
| Localized decimal separators | ✅ Customizable | ⚠️ Controlled by the system | ✅ Customizable |
| Currency display format | ✅ Customizable (Symbol, Code, Name, Unit) | ⚠️ Controlled by the system | ✅ Customizable (Symbol) |
| Multiple calendar support | ✅ Customizable (Gregorian, Buddhist, Gregorian + Chinese Calendar, Gregorian + Persian Calendar) | ❌ Not supported | ❌ Not supported |
| Localized numerals | ✅ Customizable | ⚠️ Controlled by the system | ❌ Not supported |
| Custom expense / income colors | ✅ Supported | ❌ Not supported | ❌ Not supported |
