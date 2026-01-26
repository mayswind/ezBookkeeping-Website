---
title: Comparison
---

# Comparison

Below is a feature comparison of ezBookkeeping with the open-source, self-hosted personal finance software Firefly III and Actual Budget, as of January 2026.

## Basic Information

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Compared Version | v1.3.1 | v6.4.16 | v26.1.0 |
| Development Period | 2020–present | 2014–present | 2022–present |
| License | MIT License | GNU Affero General Public License v3.0 | MIT License |
| Programming Languages | Go + TypeScript | PHP + JavaScript | TypeScript |
| Official Docker Image Platforms | amd64, arm64, armv6, armv7 | amd64, arm64 | amd64, arm64, armv6, armv7 |
| Supported Databases | SQLite, MySQL, PostgreSQL | MySQL, PostgreSQL | SQLite |
| Supported Object Storage | Local filesystem, MinIO (S3-compatible), WebDAV | Local filesystem | – |

## Performance

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Docker Image Tag | 1.3.1 | version-6.4.16 | 26.1.0-alpine |
| Docker Image Size (linux/amd64) | 57.7 MiB | 795 MiB | 188 MiB |
| Docker Image Size (linux/arm64) | 55.5 MiB | 805 MiB | 184 MiB |
| Time to Accept Requests on First Start (default config) | 1.53 s | 44.48 s | 8.73 s |
| Time to Accept Requests on Second Start (default config) | 1.06 s | 35.46 s | 8.69 s |
| Idle Memory Usage After First Start | 23.92 MiB | 71.43 MiB | 117.36 MiB |
| Memory Usage After First Login | 27.66 MiB | 164.66 MiB | 117.13 MiB |

> All timings and memory usage were measured on a Raspberry Pi 4 (4 GiB RAM, system running on a Samsung SSD 980 connected via USB). Official minimal images supporting the linux/arm64 platform were used.
>
> Each metric was tested five times. The highest and lowest values were discarded, and the average of the remaining three measurements was used.

## User Interface

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Desktop interface | ✅ Supported | ✅ Supported | ✅ Supported |
| Mobile interface | ✅ Native mobile pages with app-like experience | ⚠️ Provided via responsive desktop UI | ⚠️ Provided via responsive desktop UI |
| Dark mode | ✅ Supported | ✅ Supported | ✅ Supported |
| Multi-user support | ✅ Supported | ✅ Supported | ✅ Supported |
| API support | ✅ Supported | ✅ Supported | ✅ Supported |
| Offline usage | ❌ Not supported | ❌ Not supported | ✅ Supported |

## Supported Information in Transaction

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Date | ✅ Supported | ✅ Supported | ✅ Supported |
| Time | ✅ Supported (to the second) | ✅ Supported | ❌ Not supported |
| Time zone | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Multiple date/time fields | ❌ Not supported | ✅ Supported (interest date, book date, processing date, due date, payment date, invoice date) | ❌ Not supported |
| Categories | ✅ Two-level categories | ⚠️ Single-level categories | ⚠️ Single-level categories |
| Payee | ✅ Via tags | ✅ Via tags | ✅ Supported |
| Tags | ✅ Up to 10 tags | ✅ Supported | ✅ Supported |
| Geographic Location | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Images | ✅ Up to 9 images | ❌ Not supported | ❌ Not supported |
| Attachments | ❌ Not supported | ✅ Supported | ❌ Not supported |
| Cleared status | ✅ Via tags | ✅ Via tags | ✅ Supported |
| Notes / Description | ✅ Supported | ✅ Supported | ✅ Supported |

## Artificial Intelligence

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Model Context Protocol (MCP) | ✅ Built-in support | ⚠️ Via third-party software | ⚠️ Via third-party software |
| MCP access IP whitelist | ✅ Supported | ❌ Not supported | ❌ Not supported |
| AI image recognition | ✅ Supported | ❌ Not supported | ❌ Not supported |

## Exchange Rate Data

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Built-in exchange rate sources | ✅ 17 central banks and international financial institutions | ⚠️ Downloaded from Firefly III website | ❌ Not supported |
| Manual exchange rate input | ✅ Supported | ✅ Supported | ❌ Not supported |

## Personalization

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Font size settings | ✅ Supported | ❌ Not supported | ❌ Not supported |
| User avatars | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Multi-device settings sync | ✅ Supported | ❌ Not supported | ❌ Not supported |

## Internationalization & Localization

| Item | ezBookkeeping | Firefly III | Actual Budget |
| --- | --- | --- | --- |
| Multi-language support | ✅ Supported | ✅ Supported | ✅ Supported |
| Number of supported languages | ✅ 19 languages | ✅ 34 languages | ✅ 15 languages |
| Localized date formats | ✅ Native support | ⚠️ Controlled by the system | ✅ Native support |
| Localized time formats | ✅ Native support | ⚠️ Controlled by the system | ❌ Not supported |
| Custom time zone | ✅ Supported | ❌ Not supported | ❌ Not supported |
| Custom first day of week | ✅ Supported | ❌ Not supported | ✅ Supported |
| Custom fiscal year start | ✅ Supported | ✅ Supported | ❌ Not supported |
| Localized digit grouping symbols | ✅ Native support | ⚠️ Controlled by the system | ✅ Native support |
| Localized digit grouping formats | ✅ Native support | ⚠️ Controlled by the system | ✅ Native support |
| Localized decimal separators | ✅ Native support | ⚠️ Controlled by the system | ✅ Native support |
| Currency display format | ✅ Native support | ⚠️ Controlled by the system | ❌ Not supported |
| Multiple calendar support | ✅ Native support (Gregorian, Buddhist, Gregorian + Chinese Calendar, Gregorian + Persian Calendar) | ❌ Not supported | ❌ Not supported |
| Localized numerals | ✅ Native support | ⚠️ Controlled by the system | ❌ Not supported |
| Custom expense/income colors | ✅ Supported | ❌ Not supported | ❌ Not supported |
