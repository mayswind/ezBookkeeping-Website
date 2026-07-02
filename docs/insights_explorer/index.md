---
title: "Insights Explorer"
---

# Insights Explorer

Insights Explorer is an advanced query and analysis tool that allows users to combine multiple conditions with logical operators. It supports displaying results as tables or various charts, with customizable axis, categories, and values across multiple dimensions, and allows exporting results to CSV, TSV, or Markdown files.

## Query

After opening the Insights Explorer page, click "New Exploration" to create a new empty exploration. On the "Query" tab, you can add one or more queries. Each query can be used as a data source on the "Data Table" tab to display all transactions that match its criteria, or on the "Chart" tab as either the chart's horizontal axis or a grouping category. Each query can contain multiple conditions. For every condition, you can specify the field, matching method, and matching value. Conditions can be combined using "AND" or "OR" logic. You can also switch from "Editor" mode to "Expression" mode, which displays the query as a SQL like expression.

> For the transaction description field, three matching methods are available: Exact, Ignore Case and Normalized.
> 1. Exact compares the original text exactly as entered.
> 2. Ignore Case converts both the transaction description and the search text to lowercase before performing the comparison.
> 3. Normalized builds on case insensitive matching by additionally applying Unicode NFKD (Normalization Form Compatibility Decomposition), Unicode Case Folding, accent removal and more. For example, with Normalized Match, `cafe` matches `Café`, `strasse` matches `Straße`, and `ひらかな` matches `ヒラカナ`.

### Import / Export Query

ezBookkeeping supports importing and exporting Insights Explorer queries in JSON format, making it easy to generate queries programmatically. You can click the three dot menu in the upper right corner, then select Import Queries or Export Queries. The query format is as follows:

```json
[
    {
        "id": "", // [Optional] Unique UUID for the query. Must be a valid UUID and unique within the same exploration. If omitted, a UUID is generated automatically.
        "name": "", // [Required] Query name
        "conditions": [
            {
                "condition": { // [Optional] Omit this field when relation is ")", otherwise it is required
                    "field": "", // [Required] Query field name
                    "operator": "", // [Required] Match type
                    "value": "" // [Required] Match value(s). Depending on the match type, this may be a string, an array of strings, or an array of numbers
                },
                "relation": "" // [Required] Logical relationship with the previous condition
            }
            // Additional query conditions
        ]
    }
]
```

When `conditions` contains multiple query conditions, they are stored in infix expression order.

The `relation` field of the first condition must be `first`, indicating that it is the first condition in the query. Each subsequent condition uses either `and` or `or` to define its logical relationship with the preceding condition.

ezBookkeeping also supports parentheses to control operator precedence. For the first condition inside a parenthesized group, the `relation` field must be `and(` or `or(`, indicating both the logical relationship with the previous condition and the start of a parenthesized expression. At the end of the group, insert a special condition that contains only the `relation` field with the value `)`, indicating the closing parenthesis.

Example:

To query all transactions that are either expense transactions, or transfer transactions with the destination account set to `xxx` (Equivalent to the expression: `type IN (Expense) OR (type IN (Transfer) AND destination_account IN ('xxx'))`), use the following query:

```json
[
    {
        "name": "All Expense and Repayment Transactions",
        "conditions": [
            {
                "condition": {
                    "field": "transactionType",
                    "operator": "in",
                    "value": [3]
                },
                "relation": "first"
            },
            {
                "condition": {
                    "field": "transactionType",
                    "operator": "in",
                    "value": [4]
                },
                "relation": "or("
            },
            {
                "condition": {
                    "field": "destinationAccount",
                    "operator": "in",
                    "value": ["xxx"]
                },
                "relation": "and"
            },
            {
                "relation": ")"
            }
        ]
    }
]
```

Different query fields support different match types and `value` formats. The following sections describe all supported query fields, their available match types, and the required format and contents of the `value` field.

#### Transaction Day of Week `transactionTimeDayOfWeek`

- Field Name: `transactionTimeDayOfWeek`
- Description: Transaction day of the week
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of one or more integers representing the days of the week (`1` ~ `7` for Monday ~ Sunday). For example, `[1, 2, 3]` matches transactions that occurred on Monday, Tuesday, or Wednesday.

#### Transaction Day of Month `transactionTimeDayOfMonth`

- Field Name: `transactionTimeDayOfMonth`
- Description: Transaction day of the month
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of one or more integers representing the day of the month (`1` ~ `31`), or negative values counting backward from the end of the month. For example, `[1, 15, -1]` matches transactions on the 1st, 15th, and last day of each month.

#### Transaction Month `transactionTimeMonthOfYear`

- Field Name: `transactionTimeMonthOfYear`
- Description: Transaction month
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of one or more integers representing months (`1` ~ `12` for January ~ December). For example, `[1, 6, 12]` matches transactions in January, June, and December.

#### Transaction Hour `transactionTimeHourOfDay`

- Field Name: `transactionTimeHourOfDay`
- Description: Transaction hour
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of one or more integers representing hours (`0` ~ `23`). For example, `[9, 12, 18]` matches transactions at 09:00, 12:00, and 18:00.

#### Transaction Time Zone `transactionTimezone`

- Field Name: `transactionTimezone`
- Description: Transaction time zone
- Supported Match Types: Minute offset is between (`minuteOffsetBetween`), Minute offset is not between (`minuteOffsetNotBetween`)
- `value` Format And Content: A two element integer array `[minMinuteOffset, maxMinuteOffset]`, where the offset is in minutes (for example, UTC+8 is `480` and UTC-5 is `-300`).

#### Transaction Type `transactionType`

- Field Name: `transactionType`
- Description: Transaction type
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of one or more integers representing transaction types (`2` = Income, `3` = Expense, `4` = Transfer). For example, `[2, 3]` matches income and expense transactions.

#### Transaction Category `transactionCategory`

- Field Name: `transactionCategory`
- Description: Transaction category
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of strings representing transaction category IDs, for example `["category1"]`.

#### Transaction Account `sourceAccount` / `destinationAccount`

- Field Name: `sourceAccount` / `destinationAccount`
- Description: Source account / Destination account
- Supported Match Types: In (`in`), Not in (`notIn`)
- `value` Format And Content: An array of strings representing account IDs, for example `["account1"]`.

#### Transaction Amount `sourceAmount` / `destinationAmount`

- Field Name: `sourceAmount` / `destinationAmount`
- Description: Source amount / Destination amount
- Supported Match Types: Equal to (`equals`), Not equal to (`notEquals`), Greater than (`greaterThan`), Less than (`lessThan`), Between (`between`), Not between (`notBetween`)
- `value` Format And Content: A two element integer array representing the amount multiplied by 100 (that is, expressing the amount in cent). For `equals`, `notEquals`, `greaterThan`, and `lessThan`, both elements must be identical. For example, `[10000, 10000]` represents 100.00. For `between` and `notBetween`, the format is `[min, max]`, for example `[10000, 50000]` matches amounts between 100.00 and 500.00.

#### Transaction Location `geoLocation`

- Field Name: `geoLocation`
- Description: Transaction location
- Supported Match Types: Is empty (`isEmpty`), Is not empty (`isNotEmpty`), Latitude is between (`latitudeBetween`), Latitude is not between (`latitudeNotBetween`), Longitude is between (`longitudeBetween`), Longitude is not between (`longitudeNotBetween`)
- `value` Format And Content:
    - `isEmpty` / `isNotEmpty`: A four element numeric array `[0, 0, 0, 0]`.
    - `latitudeBetween` / `latitudeNotBetween`: An array of four numeric elements in degrees (`-90.0` to `90.0`). The first two represent the min latitude and max latitude, and the last two can be set to `0`, for example `[30.0, 40.0, 0, 0]`.
    - `longitudeBetween` / `longitudeNotBetween`: An array of four numeric elements in degrees (`-180.0` to `180.0`). The last two represent the min longitude and max longitude, and the first two can be set to `0`, for example `[0, 0, 100.0, 120.0]`.

#### Transaction Tags `transactionTag`

- Field Name: `transactionTag`
- Description: Transaction tags
  - Supported Match Types: Is empty (`isEmpty`), Is not empty (`isNotEmpty`), Equal to (`equals`), Not equal to (`notEquals`), Has any (`hasAny`), Has all (`hasAll`), Does not have any (`notHasAny`), Does not have all (`notHasAll`)
- `value` Format And Content:
    - `isEmpty` / `isNotEmpty`: Always an empty array `[]`.
    - `equals` / `notEquals`: An array of strings representing the exact set of transaction tag IDs that the transaction must have, for example `["tag1", "tag2"]`.
    - `hasAny` / `hasAll` / `notHasAny` / `notHasAll`: An array of strings representing transaction tag IDs, indicating the set of tags the transaction must have, for example `["tag1", "tag2"]`.

#### Transaction Pictures `pictures`

- Field Name: `pictures`
- Description: Transaction pictures
- Supported Match Types: Is empty (`isEmpty`), Is not empty (`isNotEmpty`)
- `value` Format And Content: Always an empty array `[]`.

#### Transaction Description `description` / `descriptionCaseInsensitive` / `descriptionNormalized`

- Field Name: `description` / `descriptionCaseInsensitive` / `descriptionNormalized`
- Description: Transaction description (Exact Match / Case Insensitive / Normalized Match)
- Supported Match Types: Is empty (`isEmpty`), Is not empty (`isNotEmpty`), Equal to (`equals`), Not equal to (`notEquals`), Contains (`contains`), Does not contain (`notContains`), Starts with (`startsWith`), Does not start with (`notStartsWith`), Ends with (`endsWith`), Does not end with (`notEndsWith`), Matches regex (`regexMatch`), Does not match regex (`notRegexMatch`)
- `value` Format And Content:
    - `isEmpty` / `isNotEmpty`: Always an empty string `""`.
    - `equals` / `notEquals` / `contains` / `notContains` / `startsWith` / `notStartsWith` / `endsWith` / `notEndsWith`: A string containing the text to match.
    - `regexMatch` / `notRegexMatch`: A string containing the regular expression pattern.

## Data Table

On the "Data Table" tab, the default data source displays all transactions that match any query. You can also select a specific query from the "Data Source" dropdown to display only the transactions that match that query.

In addition, you can sort the table by clicking any column header. Hover over the total transaction count above the table to view summary statistics for the currently displayed transactions, including the total amount, minimum amount, maximum amount, average amount, median amount, standard deviation, and more.

### Batch Edit

Click the three dot menu in the upper right corner and select "Enter Edit Mode" to enable batch editing.

You can select individual transactions using the checkboxes in the leftmost column, or select all transactions using the checkbox in the table header. Once transactions are selected, click "Operation" in the table header to perform batch operations, such as updating categories, updating accounts, updating tags or deleting transactions.

## Chart

ezBookkeeping supports various chart types. You can use different fields from your transaction data or query as the horizontal axis or categories, and apply various aggregation functions to transaction amounts or counts to generate the chart values.

The following value metrics and their calculation formulas are supported by ezBookkeeping:

> In the formulas below, let `n` be the number of transactions and `d` be the number of active days (days with at least one transaction). Let `I` denote the total income and `E` denote the total expense. Let `x₁, x₂, …, xₙ` denote the individual transaction amounts (all converted to the default currency). Let `x₍₁₎ ≤ x₍₂₎ ≤ … ≤ x₍ₙ₎` denote the amounts in ascending order. Let `Q1` and `Q3` denote the first and third quartiles, and `IQR = Q3 − Q1`.

| Value Metric | Calculation Formula |
| --- | --- |
| Transaction Count | `n` |
| Active Transaction Days | `d` |
| Transactions per Active Day | `n / d` |
| Total Amount | `∑xᵢ` |
| Total Income | `I` |
| Total Expense | `E` |
| Net Income | `I − E` |
| Expense / Income Ratio | `100% × E / I` |
| Savings Rate | `100% × (I − E) / I` |
| Average Amount | `⌊∑xᵢ / n⌋` |
| Median Amount | see [Median](#median) |
| Minimum Amount | `min(x₁, x₂, …, xₙ)` |
| Maximum Amount | `max(x₁, x₂, …, xₙ)` |
| Q1 Amount (First Quartile) | see [Percentile](#percentile), `p = 0.25` |
| Q3 Amount (Third Quartile) | see [Percentile](#percentile), `p = 0.75` |
| 10th Percentile Amount | see [Percentile](#percentile), `p = 0.10` |
| 90th Percentile Amount | see [Percentile](#percentile), `p = 0.90` |
| 95th Percentile Amount | see [Percentile](#percentile), `p = 0.95` |
| 99th Percentile Amount | see [Percentile](#percentile), `p = 0.99` |
| Range (Max - Min) | `max(x₁, …, xₙ) − min(x₁, …, xₙ)` |
| Interquartile Range (Q3 - Q1) | `Q3 − Q1` |
| Mean Absolute Deviation | `∑\|xᵢ − x̄\| / n` |
| Median Absolute Deviation | `median(\|xᵢ − median(x)\|)` |
| Median-to-Mean Ratio | `median(x) / x̄` |
| Maximum Amount Share | `100% × max(x₁, …, xₙ) / ∑xᵢ` |
| Top 5 Amount Sum | `sum of the 5 largest values` |
| Top 5 Amount Share | `100% × (sum of 5 largest) / ∑xᵢ` |
| Transactions for 80% of Amount | see [Cumulative Percentage](#cumulative-percentage), `threshold = 80%` |
| Outlier Count | see [Outlier Detection](#outlier-detection) |
| Outlier Ratio | `100% × (outlier count) / n` |
| Variance | `∑(xᵢ − x̄)² / n` |
| Standard Deviation | `√(∑(xᵢ − x̄)² / n)` |
| Coefficient of Variation | `σ / x̄` |
| Skewness | `∑(xᵢ − x̄)³ / (n · σ³)` |
| Kurtosis | `∑(xᵢ − x̄)⁴ / (n · σ⁴)` |
| Gini Coefficient | see [Gini Coefficient](#gini-coefficient) |
| Herfindahl-Hirschman Index | `∑(xᵢ / ∑xⱼ)²` |

#### Median

If `n` is odd, the median is the middle value `x₍₍ₙ₊₁₎/₂₎`. If `n` is even, the median is the average of the two middle values: `(x₍ₙ/₂₎ + x₍ₙ/₂₊₁₎) / 2`.

#### Percentile

The `p`-th percentile is computed using linear interpolation. Let `k = (n − 1) × p + 1`:

- If `k` is an integer, the result is `x₍ₖ₎`.
- Otherwise, let `f = ⌊k⌋` and `c = ⌈k⌉`, the result is `x₍f₎ + (k − f) × (x₍c₎ − x₍f₎)`.

#### Cumulative Percentage

Sort amounts in descending order and accumulate from the largest. The result is `100 × k / n`, where `k` is the smallest number of top transactions whose cumulative sum reaches or exceeds 80% of the total amount.

#### Outlier Detection

Outliers are identified using the IQR (Interquartile Range) method. A transaction amount `xᵢ` is considered an outlier if it falls below `Q1 − 1.5 × IQR` or above `Q3 + 1.5 × IQR`. The outlier count is the number of such transactions, and the outlier ratio is `100% × (outlier count) / n`.

#### Gini Coefficient

The Gini coefficient measures the inequality of the amount distribution. With amounts sorted in ascending order `x₍₁₎ ≤ x₍₂₎ ≤ … ≤ x₍ₙ₎`:

`G = (2 × ∑ᵢ₌₁ⁿ i · x₍ᵢ₎) / (n × ∑xⱼ) − (n + 1) / n`

A value of 0 indicates perfect equality (all amounts are identical), while a value approaching 1 indicates maximum concentration (one transaction dominates the total).
