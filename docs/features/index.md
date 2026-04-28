---
title: Feature List
---

# Feature List

ezBookkeeping is an open source, lightweight personal finance app built with Golang and Vue.js. The server program can run on multiple operating systems including Windows, macOS, and Linux, and supports various hardware architectures such as x86, amd64, and ARM. It has minimal resource usage, requiring only tens of megabytes of disk space and memory for smooth operation, and can start in about one second even on a Raspberry Pi 4. For a comparison with similar software, see [Feature Comparison](/comparison/).

ezBookkeeping uses a lightweight tech stack and an efficient architecture to keep the application minimal, while still providing powerful features. Below is the complete list of features in ezBookkeeping.

## User Interface

| Item | Supported Version |
| --- | --- |
| Desktop interface | ≥ 0.4.0 |
| Mobile interface | ≥ 0.1.0 |
| Dark mode | ≥ 0.1.0 |
| Multi-user support | ≥ 0.1.0 |
| HTTP API support | ≥ 0.1.0 |
| CLI support | ≥ 0.1.0 |

## Transaction Data

| Item | Supported Version |
| --- | --- |
| Date | ≥ 0.1.0 |
| Time | ≥ 0.1.0 |
| Time zone | ≥ 0.1.0 |
| Categories | ≥ 0.1.0 |
| Tags | ≥ 0.1.0 |
| Geographic location | ≥ 0.3.0 |
| Images | ≥ 0.6.0 |
| Notes / Description | ≥ 0.1.0 |

## Transaction Capabilities

| Item | Supported Version |
| --- | --- |
| Batch modify transactions | ≥ 1.5.0 |
| Scheduled transactions | ≥ 0.6.0 |
| Transaction templates | ≥ 0.5.0 |
| Auto-save transaction drafts | ≥ 0.6.0 |

## Transaction Category Data

| Item | Supported Version |
| --- | --- |
| Two-level categories | ≥ 0.1.0 |
| Expense categories | ≥ 0.1.0 |
| Income categories | ≥ 0.1.0 |
| Transfer categories | ≥ 0.1.0 |
| Category name | ≥ 0.1.0 |
| Category icon (built in) | ≥ 0.1.0 |
| Category color | ≥ 0.1.0 |
| Category display order | ≥ 0.1.0 |
| Category notes / description | ≥ 0.1.0 |

## Transaction Tag Data

| Item | Supported Version |
| --- | --- |
| Tag name | ≥ 0.1.0 |
| Tag display order | ≥ 0.1.0 |
| Tag group | ≥ 1.3.0 |

## Account Data

| Item | Supported Version |
| --- | --- |
| Account name | ≥ 0.1.0 |
| Account types | ≥ 0.1.0 |
| Sub-accounts | ≥ 0.1.0 |
| Preset global currencies | ≥ 0.1.0 |
| Account icon (built in) | ≥ 0.1.0 |
| Account color | ≥ 0.1.0 |
| Credit card statement date | ≥ 0.7.0 |
| Account archiving (hidden accounts) | ≥ 0.1.0 |
| Account display order | ≥ 0.1.0 |
| Account notes / description | ≥ 0.1.0 |

## Transaction Query Features

| Item | Supported Version |
| --- | --- |
| Transaction list view | ≥ 0.1.0 |
| Transaction calendar view | ≥ 0.9.0 |
| Filter by category | ≥ 0.1.0 |
| Filter by account | ≥ 0.1.0 |
| Filter by tags | ≥ 0.5.0 |
| Filter by amount | ≥ 0.5.0 |
| Filter by notes / description | ≥ 0.1.0 |
| Sort by date | ≥ 0.1.0 |
| Sort by amount | ≥ 1.3.0 (Insights Explorer feature) |
| Advanced queries | ≥ 1.3.0 (Insights Explorer feature) |

## Statistics & Analysis

| Item | Supported Version |
| --- | --- |
| Category income / expense proportion charts | ≥ 0.1.0 |
| Account income / expense proportion charts | ≥ 0.1.0 |
| Asset proportion charts | ≥ 0.1.0 |
| Category income / expense trend charts | ≥ 0.5.0 |
| Account income / expense trend charts | ≥ 0.5.0 |
| Asset trend charts | ≥ 1.2.0 |
| Trend aggregation by time range | ≥ 0.7.0 |
| Tag charts | ≥ 1.3.0 (Insights Explorer feature) |
| Custom charts | ≥ 1.3.0 (Insights Explorer feature) |
| Export chart data to CSV, TSV or Markdown | ≥ 0.10.0 |
| Export chart data to Mermaid | ≥ 1.4.0 |
| Category charts (Pie) | ≥ 0.1.0 |
| Category charts (Bar / Column) | ≥ 0.1.0 |
| Category charts (Radar) | ≥ 1.2.0 |
| Category charts (Sankey) | ≥ 1.2.0 |
| Trend charts (Area / Line) | ≥ 0.5.0 |
| Trend charts (Bar / Column) | ≥ 0.5.0 |
| Trend charts (Bubble) | ≥ 1.2.0 |
| Trend charts display year-over-year and period-over-period comparisons | ≥ 1.4.0 |
| Account reconciliation statements | ≥ 1.0.0 |
| Export account reconciliation statements | ≥ 1.0.0 |
| Account balance trend charts (Area / Line) | ≥ 1.0.0 |
| Account balance trend charts (Bar) | ≥ 1.0.0 |
| Account balance trend charts (Boxplot) | ≥ 1.4.0 |
| Account balance trend charts (Candlestick) | ≥ 1.0.0 |
| Account balance trend charts display year-over-year and period-over-period comparisons | ≥ 1.5.0 |

## Insights Explorer

> Insights Explorer is an advanced query and analysis tool that allows users to combine multiple conditions with logical operators. It supports displaying results as tables or various charts, with customizable axis, categories, and values across multiple dimensions, and allows exporting results to CSV, TSV, or Markdown files.

| Item | Supported Version |
| --- | --- |
| Use AND or OR to combine multiple filter conditions | ≥ 1.3.0 |
| Support sub filter conditions | ≥ 1.4.0 |
| Display statistics for filtered results | ≥ 1.4.0 |
| Charts with a date based horizontal axis display year-over-year and period-over-period comparisons | ≥ 1.5.0 |
| Export filtered results | ≥ 1.3.0 |
| Export chart data | ≥ 1.3.0 |

### Supported Charts in Insights Explorer

| Item | Supported Version |
| --- | --- |
| Pie Chart | ≥ 1.3.0 |
| Radar Chart | ≥ 1.3.0 |
| Column Chart (Stacked) | ≥ 1.3.0 |
| Column Chart (100% Stacked) | ≥ 1.3.0 |
| Column Chart (Grouped) | ≥ 1.3.0 |
| Line Chart (Grouped) | ≥ 1.3.0 |
| Area Chart (Stacked) | ≥ 1.3.0 |
| Area Chart (100% Stacked) | ≥ 1.3.0 |
| Bubble Chart (Grouped) | ≥ 1.3.0 |
| Treemap Chart | ≥ 1.5.0 |
| Sunburst Chart | ≥ 1.5.0 |
| Heatmap Chart | ≥ 1.5.0 |
| Calendar Heatmap Chart | ≥ 1.5.0 |

### Supported Axis / Category / Series in Insights Explorer

| Item | Supported Version |
| --- | --- |
| Query | ≥ 1.3.0 |
| Transaction Time | ≥ 1.3.0 |
| Transaction Date | ≥ 1.3.0 |
| Transaction Year-Month | ≥ 1.3.0 |
| Transaction Year-Quarter | ≥ 1.3.0 |
| Transaction Year | ≥ 1.3.0 |
| Transaction Fiscal Year | ≥ 1.3.0 |
| Transaction Day of Week | ≥ 1.3.0 |
| Transaction Day of Month | ≥ 1.3.0 |
| Transaction Month of Year | ≥ 1.3.0 |
| Transaction Quarter of Year | ≥ 1.3.0 |
| Transaction Hour of Day | ≥ 1.4.0 |
| Transaction Timezone | ≥ 1.4.0 |
| Transaction Type | ≥ 1.3.0 |
| Source Account | ≥ 1.3.0 |
| Source Account Category | ≥ 1.3.0 |
| Source Account Currency | ≥ 1.3.0 |
| Destination Account | ≥ 1.3.0 |
| Destination Account Category | ≥ 1.3.0 |
| Destination Account Currency | ≥ 1.3.0 |
| Primary Category | ≥ 1.3.0 |
| Secondary Category | ≥ 1.3.0 |
| Amount | ≥ 1.3.0 |
| Transfer In Amount | ≥ 1.3.0 |
| Amount Range (Equal Frequency) | ≥ 1.5.0 |
| Amount Range (Equal Width) | ≥ 1.5.0 |
| Amount Range (Log Scale) | ≥ 1.5.0 |
| Amount Range (Standard Deviation) | ≥ 1.5.0 |
| Amount Range (Natural Breaks) | ≥ 1.5.0 |
| Transfer In Amount Range (Equal Frequency) | ≥ 1.5.0 |
| Transfer In Amount Range (Equal Width) | ≥ 1.5.0 |
| Transfer In Amount Range (Log Scale) | ≥ 1.5.0 |
| Transfer In Amount Range (Standard Deviation) | ≥ 1.5.0 |
| Transfer In Amount Range (Natural Breaks) | ≥ 1.5.0 |

### Supported Value Metric in Insights Explorer

| Item | Supported Version |
| --- | --- |
| Transaction Count | ≥ 1.3.0 |
| Active Transaction Days | ≥ 1.5.0 |
| Transactions per Active Day | ≥ 1.5.0 |
| Total Amount | ≥ 1.3.0 |
| Total Income | ≥ 1.5.0 |
| Total Expense | ≥ 1.5.0 |
| Net Income | ≥ 1.5.0 |
| Expense / Income Ratio | ≥ 1.5.0 |
| Savings Rate | ≥ 1.5.0 |
| Average Amount | ≥ 1.3.0 |
| Median Amount | ≥ 1.3.0 |
| Minimum Amount | ≥ 1.3.0 |
| Maximum Amount | ≥ 1.3.0 |
| Q1 Amount (First Quartile) | ≥ 1.5.0 |
| Q3 Amount (Third Quartile) | ≥ 1.5.0 |
| 10th Percentile Amount | ≥ 1.5.0 |
| 90th Percentile Amount | ≥ 1.4.0 |
| 95th Percentile Amount | ≥ 1.5.0 |
| 99th Percentile Amount | ≥ 1.5.0 |
| Range (Max - Min) | ≥ 1.4.0 |
| Interquartile Range (Q3 - Q1) | ≥ 1.4.0 |
| Mean Absolute Deviation | ≥ 1.5.0 |
| Median Absolute Deviation | ≥ 1.5.0 |
| Maximum Amount Share | ≥ 1.5.0 |
| Top 5 Amount Sum | ≥ 1.5.0 |
| Top 5 Amount Share | ≥ 1.5.0 |
| Transactions for 80% of Amount | ≥ 1.5.0 |
| Variance | ≥ 1.4.0 |
| Standard Deviation | ≥ 1.4.0 |
| Coefficient of Variation | ≥ 1.4.0 |
| Skewness | ≥ 1.5.0 |
| Kurtosis | ≥ 1.5.0 |

## Import Features

> For details on the data types that can be imported for each file, please refer to [Import Transactions](/export_and_import/#import-transactions-from-desktop-user-interface).

| Item | Supported Version |
| --- | --- |
| CSV | ≥ 0.6.0 |
| Excel (.xls or .xlsx) | ≥ 1.4.0 |
| CSV / Excel column-mapping import | ≥ 0.8.0 |
| CSV / Excel custom script import | ≥ 1.1.0 |
| Automatic CSV file encoding detection | ≥ 1.3.0 |
| Automatically detect common column names and transaction types in CSV files | ≥ 1.4.0 |
| Map imported data using custom rules | ≥ 1.0.0 |
| OFX | ≥ 0.6.0 |
| QFX | ≥ 0.6.0 |
| QIF | ≥ 0.6.0 |
| IIF | ≥ 0.6.0 |
| Camt.052 | ≥ 1.3.2 |
| Camt.053 | ≥ 0.10.0 |
| MT940 | ≥ 0.10.0 |
| GnuCash | ≥ 0.6.0 |
| Firefly III | ≥ 0.6.0 |
| Beancount | ≥ 0.9.0 |
| Feidee MyMoney | ≥ 0.6.0 |
| Alipay statement file | ≥ 0.6.0 |
| WeChat Pay statement file | ≥ 0.6.0 |
| JD.com Finance statement file | ≥ 1.1.0 |

## Export Features

| Item | Supported Version |
| --- | --- |
| CSV | ≥ 0.1.0 |
| Export based on filters | ≥ 0.10.0 |

## Data Management

| Item | Supported Version |
| --- | --- |
| Clear account transactions | ≥ 1.1.0 |
| Clear all data | ≥ 0.1.0 |

## Security

| Item | Supported Version |
| --- | --- |
| Two-factor authentication (2FA) | ≥ 0.1.0 |
| OIDC login | ≥ 1.2.0 |
| Nextcloud login | ≥ 1.2.0 |
| Gitea login | ≥ 1.2.0 |
| GitHub login | ≥ 1.2.0 |
| App lock (PIN) | ≥ 0.1.0 |
| App lock (WebAuthn) | ≥ 0.1.0 |
| Email verification | ≥ 0.4.0 |
| Password recovery via email | ≥ 0.4.0 |
| Session management | ≥ 0.1.0 |
| Login rate limiting | ≥ 0.8.0 |
| User feature restrictions | ≥ 0.7.0 |
| API token IP allowlist | ≥ 1.4.0 |

## Artificial Intelligence

> For more information about MCP, please refer to [MCP (Model Context Protocol)](/mcp/).

| Item | Supported Version |
| --- | --- |
| Model Context Protocol (MCP) | ≥ 0.10.0 |
| Add transaction via MCP | ≥ 0.10.0 |
| Query transactions via MCP | ≥ 0.10.0 |
| Query all account names via MCP | ≥ 0.10.0 |
| Query all account balances via MCP | ≥ 1.2.0 |
| Query all transaction category names via MCP | ≥ 0.10.0 |
| Query all transaction tag names via MCP | ≥ 0.10.0 |
| Query latest exchange rates via MCP | ≥ 0.10.0 |
| MCP access IP whitelist | ≥ 0.10.0 |
| AI image recognition | ≥ 1.1.0 |
| AI image recognition via Web Share Target API Level 2 | ≥ 1.4.0 |
| Agent Skill | ≥ 1.4.0 |

## Large Language Model Provider

| Item | Supported Version |
| --- | --- |
| OpenAI | ≥ 1.1.0 |
| OpenAI Compatible API | ≥ 1.1.0 |
| OpenRouter | ≥ 1.1.0 |
| Anthropic | ≥ 1.4.0 |
| Anthropic Compatible API | ≥ 1.4.0 |
| Ollama | ≥ 1.1.0 |
| LM Studio | ≥ 1.4.0 |
| Google AI | ≥ 1.1.0 |

## Object Storage Provider

| Item | Supported Version |
| --- | --- |
| Local File System | ≥ 0.5.0 |
| S3 Compatible / MinIO | ≥ 0.5.0 |
| WebDAV | ≥ 1.0.0 |

## Map Provider

| Item | Supported Version |
| --- | --- |
| OpenStreetMap | ≥ 0.3.0 |
| OpenStreetMap(Humanitarian) | ≥ 0.4.0 |
| OpenTopoMap | ≥ 0.4.0 |
| OPNVKarte | ≥ 0.4.0 |
| CyclOSM | ≥ 0.4.0 |
| CartoDB | ≥ 0.5.0 |
| TomTom | ≥ 0.4.0 |
| TianDiTu | ≥ 0.5.0 |
| Google Maps | ≥ 0.4.0 |
| Baidu Map | ≥ 0.4.0 |
| AMap | ≥ 0.4.0 |
| User custom tile data sources | ≥ 0.5.0 |

## Exchange Rates Data Source

> For more information about exchange rate data sources, please refer to [Exchange Rates](/exchange_rates/).

| Item | Supported Version |
| --- | --- |
| Bank of Canada | ≥ 0.1.0 |
| Czech National Bank | ≥ 0.1.0 |
| Danmarks Nationalbank | ≥ 0.7.0 |
| European Central Bank | ≥ 0.1.0 |
| National Bank of Georgia | ≥ 0.7.0 |
| Central Bank of Hungary | ≥ 0.7.0 |
| Bank of Israel | ≥ 0.7.0 |
| National bank of Kazakhstan | ≥ 1.5.0 |
| Central Bank of Myanmar | ≥ 0.7.0 |
| Norges Bank | ≥ 0.7.0 |
| National Bank of Poland | ≥ 0.1.0 |
| National Bank of Romania | ≥ 0.7.0 |
| Bank of Russia | ≥ 0.7.0 |
| Swiss National Bank | ≥ 0.7.0 |
| National Bank of Ukraine | ≥ 0.9.0 |
| Central Bank of the Republic of Uzbekistan | ≥ 0.7.0 |
| Manual exchange rate input | ≥ 1.1.0 |

## Personalization

| Item | Supported Version |
| --- | --- |
| Font size settings | ≥ 0.4.0 |
| User avatars | ≥ 0.5.0 |
| Multi-device settings sync | ≥ 0.10.0 |

## Supported languages

| Item | Supported Version |
| --- | --- |
| German | ≥ 0.8.0 |
| English | ≥ 0.1.0 |
| Spanish | ≥ 0.8.0 |
| French | ≥ 1.1.0 |
| Italian | ≥ 0.9.0 |
| Japanese | ≥ 0.8.0 |
| Kannada | ≥ 1.3.0 |
| Korean | ≥ 1.2.0 |
| Dutch | ≥ 1.0.0 |
| Portuguese (Brazil) | ≥ 0.10.0 |
| Russian | ≥ 0.8.0 |
| Slovenian | ≥ 1.3.0 |
| Tamil | ≥ 1.3.1 |
| Thai | ≥ 1.1.0 |
| Turkish | ≥ 1.3.0 |
| Ukrainian | ≥ 0.9.0 |
| Vietnamese | ≥ 0.7.0 |
| Chinese (Simplified) | ≥ 0.1.0 |
| Chinese (Traditional) | ≥ 0.9.0 |

## Internationalization & Localization

| Item | Supported Version |
| --- | --- |
| RTL language support | ≥ 1.0.0 |
| Localized date formats | ≥ 0.3.0 |
| Localized time formats | ≥ 0.3.0 |
| Custom time zone | ≥ 0.1.0 |
| Custom first day of week | ≥ 0.1.0 |
| Custom fiscal year start | ≥ 0.10.0 |
| Localized digit grouping symbols | ≥ 0.5.0 |
| Localized digit grouping formats | ≥ 0.5.0 |
| Localized decimal separators | ≥ 0.5.0 |
| Currency display format | ≥ 0.1.0 |
| Multiple calendar support | ≥ 1.0.0 |
| Localized numerals | ≥ 1.0.0 |
| Custom expense / income colors | ≥ 0.5.0 |
