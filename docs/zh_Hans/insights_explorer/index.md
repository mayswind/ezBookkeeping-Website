---
title: "洞察探索"
---

# 洞察探索

洞察探索是一个允许用户使用多种条件进行逻辑组合查询的高级查询和分析工具，支持将查询结果以表格或多种图表的形式进行展示，图表的横轴、分类和数值可以从多个维度自定义进行选择，并且支持将查询结果导出为 CSV / TSV / Markdown 等格式的文件。

## 查询

进入洞察探索页面后，点击 “新的探索” 可以创建一个新的空探索。在 “查询” 选项卡中，可以添加一个或多个查询，每个查询可以在 “数据表格” 选项卡中作为数据源显示所有命中这个查询条件的交易列表，也可以在 “图表” 选项卡中作为将查询作为图表的横轴或者分类。每个查询可以添加多个查询条件，每个查询条件可以设置字段、匹配类型和匹配的内容，不同查询条件之间可以设置与、或关系，同时还可以在条件上方从 “编辑器” 切换到 “表达式” 模式，显示类似 SQL 的语句。

> 对于交易描述字段，有三种类型可以选择，分别是精确匹配、忽略大小写以及规范化匹配。
> 1. 精确匹配会完全按照原始字符进行匹配。
> 2. 忽略大小写则会将原始交易描述和查询内容转换为小写字母，再进行字符匹配。
> 3. 规范化匹配则在忽略大小写的基础上，增加了 Unicode NFKD (Normalization Form Compatibility Decomposition)、Unicode Case Folding、去除重音等。例如，使用规范化匹配时，`cafe` 可以匹配 `Café`，`strasse` 可以匹配 `Straße`，`ひらかな` 可以匹配 `ヒラカナ`。

### 导入 / 导出查询

ezBookkeeping 可以以 JSON 格式导入 / 导出洞察探索的查询条件，方便通过编写代码等自动生成符合要求的查询。你可以点击右上角的三个点，选择导入查询或导出查询。查询格式具体如下

```json
[
    {
        "id": "", // [选填] 每个查询的唯一 UUID 标识，必须为 UUID 格式，并且在同一个探索中必须唯一。如果不填写，系统会自动生成一个 UUID
        "name": "", // [必填] 查询名称
        "conditions": [
            {
                "condition": { // [选填] relation 字段为 ")" 时，condition 字段不填，其他情况必须填写
                    "field": "", // [必填] 查询字段名
                    "operator": "", // [必填] 匹配类型
                    "value": "" // [必填] 匹配内容（根据匹配类型可能为 字符串、字符串数组或数字数组）
                },
                "relation": "" // [必填] 与上一个查询条件的逻辑关系
            }
            // 其他查询条件
        ]
    }
]
```

`conditions` 中包含多个查询条件时，使用中缀表达式的顺序进行存储。

其中第一个查询条件的 `relation` 字段必须为 `first`，表示这是第一个查询条件，后续的查询条件可以使用 `and` 或 `or` 来表示与上一个查询条件的逻辑关系。

ezBookkeeping 也支持括号来控制运算符的优先级，括号分组内的第一个查询条件的 `relation` 字段必须为 `and(` 或 `or(`，同时表示与上一个查询条件的逻辑关系以及括号内表达式的开始，同时在分组最后需要插入一个特殊的条件，仅包含 `relation` 字段，且为 `)`，表示这是一个括号的结束。

示例：

查询所有交易类型为支出，或交易类型为转账且目标账户为 `xxx` 的交易（等价于公式：`type IN (Expense) OR (type IN (Transfer) AND destination_account IN ('xxx'))`），可以使用如下查询：

```json
[
    {
        "name": "所有支出及还款交易",
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

不同字段类型支持的匹配类型和 `value` 格式不同，下面列出了所有支持的查询字段、匹配类型以及 `value` 字段需要的格式和内容。

#### 交易周内日 `transactionTimeDayOfWeek`

- 字段名：`transactionTimeDayOfWeek`
- 字段说明：交易周内日
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：数字数组，包含一个或多个整数，表示需要匹配的交易周内日（`1` ~ `7` 表示周一 ~ 周日），如 `[1, 2, 3]` 表示匹配周一、周二和周三的交易。

#### 交易月内日 `transactionTimeDayOfMonth`

- 字段名：`transactionTimeDayOfMonth`
- 字段说明：交易月内日
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：数字数组，包含一个或多个整数，表示需要匹配的交易月内日（`1` ~ `31` 或负数表示从月末倒数），如 `[1, 15, -1]` 表示匹配每月的1日、15日和最后一天的交易。

#### 交易月份 `transactionTimeMonthOfYear`

- 字段名：`transactionTimeMonthOfYear`
- 字段说明：交易月份
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：数字数组，包含一个或多个整数，表示需要匹配的交易月份（`1` ~ `12` 表示一月 ~ 十二月），如 `[1, 6, 12]` 表示匹配1月、6月和12月的交易。

#### 交易小时 `transactionTimeHourOfDay`

- 字段名：`transactionTimeHourOfDay`
- 字段说明：交易小时
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：数字数组，包含一个或多个整数，表示需要匹配的交易小时（`0` ~ `23`），如 `[9, 12, 18]` 表示匹配9点、12点和18点的交易。

#### 交易时区 `transactionTimezone`

- 字段名：`transactionTimezone`
- 字段说明：交易时区
- 支持的匹配类型：分钟偏移量介于（`minuteOffsetBetween`）、分钟偏移量不介于（`minuteOffsetNotBetween`）
- `value` 格式及内容：两个元素的整数数组 `[minMinuteOffset, maxMinuteOffset]`，单位为分钟（如 UTC+8 为 `480`，UTC-5 为 `-300`）。

#### 交易类型 `transactionType`

- 字段名：`transactionType`
- 字段说明：交易类型
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：数字数组，包含一个或多个整数，表示需要匹配的交易类型（`2` 表示收入、`3` 表示支出、`4` 表示转账），如 `[2, 3]` 表示匹配收入和支出的交易。

#### 交易分类 `transactionCategory`

- 字段名：`transactionCategory`
- 字段说明：交易分类
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：交易分类 ID 的字符串数组，如 `["category1"]`。

#### 交易账户 `sourceAccount` / `destinationAccount`

- 字段名：`sourceAccount` / `destinationAccount`
- 字段说明：来源账户 / 目标账户
- 支持的匹配类型：在范围内（`in`）、不在范围内（`notIn`）
- `value` 格式及内容：账户 ID 的字符串数组，如 `["account1"]`。

#### 交易金额 `sourceAmount` / `destinationAmount`

- 字段名：`sourceAmount` / `destinationAmount`
- 字段说明：来源金额 / 转入金额
- 支持的匹配类型：等于（`equals`）、不等于（`notEquals`）、大于（`greaterThan`）、小于（`lessThan`)、介于（`between`）、不介于（`notBetween`）
  - `value` 格式及内容：两个元素的整数数组，表示金额的100倍（即以分表示金额）。对于 `equals`、`notEquals`、`greaterThan`、`lessThan`，两个元素必须相同，如 `[10000, 10000]` 表示等于 100.00。`between`、`notBetween` 为 `[min, max]`，如 `[10000, 50000]` 表示介于 100.00 和 500.00 之间。

#### 交易地理位置 `geoLocation`

- 字段名：`geoLocation`
- 字段说明：交易地理位置
- 支持的匹配类型：为空（`isEmpty`）、不为空（`isNotEmpty`）、纬度介于（`latitudeBetween`）、纬度不介于（`latitudeNotBetween`）、经度介于（`longitudeBetween`）、经度不介于（`longitudeNotBetween`）
- `value` 格式及内容：
  - `isEmpty` / `isNotEmpty`：固定为空数组 `[]`。
  - `latitudeBetween` / `latitudeNotBetween`：两个元素的数字数组，单位为度（范围：-90.0~90.0），如 `[30.0, 40.0]` 表示纬度介于 30.0° 和 40.0° 之间。
  - `longitudeBetween` / `longitudeNotBetween`：两个元素的数字数组，单位为度（范围：-180.0~180.0），如 `[100.0, 120.0]` 表示经度介于 100.0° 和 120.0° 之间

#### 交易标签 `transactionTag`

- 字段名：`transactionTag`
- 字段说明：交易标签
- 支持的匹配类型：为空（`isEmpty`）、不为空（`isNotEmpty`）、等于（`equals`）、不等于（`notEquals`）、包含任意（`hasAny`）、包含全部（`hasAll`）、不包含任意（`notHasAny`）、不包含全部（`notHasAll`）
- `value` 格式及内容：
  - `isEmpty` / `isNotEmpty`：固定为空数组 `[]`。
  - `equals` / `notEquals`：字符串数组，表示交易必须拥有的完全相同的交易标签 ID 集合，如 `["tag1", "tag2"]`。
  - `hasAny` / `hasAll` / `notHasAny` / `notHasAll`：交易标签 ID 的字符串数组，表示交易必须拥有的标签集合，如 `["tag1", "tag2"]`。

#### 交易图片 `pictures`

- 字段名：`pictures`
- 字段说明：交易图片
- 支持的匹配类型：为空（`isEmpty`）、不为空（`isNotEmpty`）
- `value` 格式及内容：固定为空数组 `[]`。

#### 交易描述 `description` / `descriptionCaseInsensitive` / `descriptionNormalized`

- 字段名：`description` / `descriptionCaseInsensitive` / `descriptionNormalized`
- 字段说明：交易描述（精确匹配 / 忽略大小写 / 规范化匹配）
- 支持的匹配类型：为空（`isEmpty`)、不为空（`isNotEmpty`）、等于（`equals`）、不等于（`notEquals`）、包含（`contains`）、不包含（`notContains`）、开头是（`startsWith`）、开头不是（`notStartsWith`）、结尾是（`endsWith`）、结尾不是（`notEndsWith`）、正则匹配（`regexMatch`）、不匹配正则（`notRegexMatch`）
- `value` 格式及内容：
  - `isEmpty` / `isNotEmpty`：固定为空数组 `[]`。
  - `equals` / `notEquals` / `contains` / `notContains` / `startsWith` / `notStartsWith` / `endsWith` / `notEndsWith`：字符串，表示交易描述的匹配内容。
  - `regexMatch` / `notRegexMatch`：字符串，表示正则表达式模式。

## 数据表格

在 “数据表格” 选项卡中，默认显示的是命中任意查询的交易列表，你也可以在 “数据源” 下拉框中选择指定查询作为数据源来显示命中该查询的交易列表。

此外，你可以点击各列的标题栏对表格进行排序，或将鼠标悬停在表格上方的总交易数上，查看当前显示的交易的统计概要，包括总金额、最小金额、最大金额、平均金额、中位数金额、标准差等。

### 批量编辑

点击右上角的三个点，选择 “进入编辑模式” 即可启用批量编辑模式。

你可以点击最左侧的复选框选择需要编辑的交易，或使用表格标题栏上的复选框选择所有交易。交易选择后即可点击表格标题栏上的 “操作” 选择要执行的批量操作，包括更新交易分类、更新交易账户、更新交易标签及删除交易等操作。

## 图表

ezBookkeeping 支持多种图表类型，你可以将交易数据中的不同字段或查询作为图表的横轴或分类，并对交易金额或数量应用各种聚合函数生成图表的数值。

以下是 ezBookkeeping 支持的值类型及计算方式：

> 在下列公式中，`n` 表示交易数量，`d` 表示活跃交易日数（至少有一笔交易的天数）。`I` 表示总收入，`E` 表示总支出。`x₁, x₂, …, xₙ` 表示各笔交易的金额（均已转换为默认货币）。`x₍₁₎ ≤ x₍₂₎ ≤ … ≤ x₍ₙ₎` 表示按升序排列的金额。`Q1` 和 `Q3` 分别表示第一和第三四分位数，`IQR = Q3 − Q1`。

| 值类型 | 计算公式 |
| --- | --- |
| 交易数量 | `n` |
| 活跃交易日 | `d` |
| 每活跃日交易数量 | `n / d` |
| 总金额 | `∑xᵢ` |
| 总收入 | `I` |
| 总支出 | `E` |
| 净收入 | `I − E` |
| 支出/收入比 | `100% × E / I` |
| 储蓄率 | `100% × (I − E) / I` |
| 平均金额 | `⌊∑xᵢ / n⌋` |
| 中位数金额 | 见 [中位数](#中位数) |
| 最小金额 | `min(x₁, x₂, …, xₙ)` |
| 最大金额 | `max(x₁, x₂, …, xₙ)` |
| Q1 金额（第一四分位数） | 见 [百分位数](#百分位数)，`p = 0.25` |
| Q3 金额（第三四分位数） | 见 [百分位数](#百分位数)，`p = 0.75` |
| 10百分位金额 | 见 [百分位数](#百分位数)，`p = 0.10` |
| 90百分位金额 | 见 [百分位数](#百分位数)，`p = 0.90` |
| 95百分位金额 | 见 [百分位数](#百分位数)，`p = 0.95` |
| 99百分位金额 | 见 [百分位数](#百分位数)，`p = 0.99` |
| 极差 (最大值 - 最小值) | `max(x₁, …, xₙ) − min(x₁, …, xₙ)` |
| 四分位距 (Q3 - Q1) | `Q3 − Q1` |
| 平均绝对差 | `∑\|xᵢ − x̄\| / n` |
| 绝对中位差 | `median(\|xᵢ − median(x)\|)` |
| 中位数/均值比 | `median(x) / x̄` |
| 最大金额占比 | `100% × max(x₁, …, xₙ) / ∑xᵢ` |
| 前5大金额总和 | `最大的5个值之和` |
| 前5大金额占比 | `100% × (最大的5个值之和) / ∑xᵢ` |
| 贡献80%金额的交易占比 | 见 [累积百分比](#累积百分比)，`阈值 = 80%` |
| 异常值数量 | 见 [异常值检测](#异常值检测) |
| 异常值比例 | `100% × 异常值数量 / n` |
| 方差 | `∑(xᵢ − x̄)² / n` |
| 标准差 | `√(∑(xᵢ − x̄)² / n)` |
| 变异系数 | `σ / x̄` |
| 偏度 | `∑(xᵢ − x̄)³ / (n · σ³)` |
| 峰度 | `∑(xᵢ − x̄)⁴ / (n · σ⁴)` |
| 基尼系数 | 见 [基尼系数](#基尼系数) |
| 赫芬达尔-赫希曼指数 | `∑(xᵢ / ∑xⱼ)²` |

#### 中位数

若 `n` 为奇数，中位数为中间值 `x₍₍ₙ₊₁₎/₂₎`；若 `n` 为偶数，中位数为两个中间值的平均值：`(x₍ₙ/₂₎ + x₍ₙ/₂₊₁₎) / 2`。

#### 百分位数

第 `p` 百分位数使用线性插值法计算。令 `k = (n − 1) × p + 1`：

- 若 `k` 为整数，结果为 `x₍ₖ₎`。
- 否则，令 `f = ⌊k⌋`，`c = ⌈k⌉`，结果为 `x₍f₎ + (k − f) × (x₍c₎ − x₍f₎)`。

#### 累积百分比

将金额按降序排列并从最大值开始累加，结果为 `100 × k / n`，其中 `k` 是累计金额达到或超过总金额 80% 所需的最小交易笔数。

#### 异常值检测

使用 IQR（四分位距）法识别异常值。若某笔交易金额 `xᵢ` 低于 `Q1 − 1.5 × IQR` 或高于 `Q3 + 1.5 × IQR`，则被视为异常值。异常值数量即为满足该条件的交易笔数，异常值比例为 `100% × 异常值数量 / n`。

#### 基尼系数

基尼系数衡量金额分布的不平等程度。将金额按升序排列 `x₍₁₎ ≤ x₍₂₎ ≤ … ≤ x₍ₙ₎`：

`G = (2 × ∑ᵢ₌₁ⁿ i · x₍ᵢ₎) / (n × ∑xⱼ) − (n + 1) / n`

值为 0 表示完全平等（所有金额相同），值趋近于 1 表示高度集中（单笔交易占总额的绝大部分）。
