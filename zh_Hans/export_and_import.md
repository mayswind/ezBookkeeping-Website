---
layout: default
title: 导出 & 导入
nav_order: 6
parent: 简体中文
permalink: /zh_Hans/export_and_import
---

# 导出 & 导入
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 导出交易

ezbookkeeping 支持使用命令行或从用户界面中导出交易数据为 CSV（Comma-separated values）或 TSV（Tab-separated values）格式的文件。

### 通过命令行导出交易

详见 [transaction-export](/command_line#userdata)

### 从桌面版用户界面导出交易

1. 在 `用户设置` 页面中点击 `数据管理`
2. 点击 `导出数据` 按钮，选择文件类型即可导出所有交易到指定类型的文件中

### 从移动版用户界面导出交易

1. 在 `设置` 页面中轻触 `数据管理`
2. 轻触 `导出数据` 按钮，选择文件类型即可导出所有交易到指定类型的文件中

## 导入交易

ezbookkeeping 支持使用命令行导入 ezbookkeeping 导出的文件，或从桌面版用户界面中导入多种类型的交易数据文件，同时桌面版提供的交易数据导入工具支持预览导入的数据以及批量对导入的数据进行修改。

### 通过命令行导入交易

详见 [transaction-import](/command_line#userdata)

### 从桌面版用户界面导入交易

1. 在 `交易详情` 页面中点击 `导入` 按钮
2. 选择要导入文件的类型和文件，然后点击 `下一步` 按钮
3. 检查导入的交易是否映射到已经创建的分类、账户和标签，无效的数据将会标红显示。您可以点击每条记录左侧的笔形状的图标修改这条交易的分类、账户或标签。您还可以点击右上角的菜单，批量替换分类、账户或标签。最后点击交易左侧的复选框，选择最终要导入的交易，然后点击 `导入` 按钮即可

### 如何获取金蝶随手记（App）数据导出文件

[![](images/how_to_export_feidee_mymoney_app.png)](images/how_to_export_feidee_mymoney_app.png)

1. 在随手记App中点击 `设置` -> `高级功能` -> `备份与同步` -> `本地备份与恢复` -> `导出Excel文件(CSV)`

> 注意：随手记 iPhone App 导出的交易数据没有正确处理交易备注中的换行符，如果交易备注中包含换行符，导入 ezbookkeeping 将会失败。如果存在该问题，可以使用随手记 Android App 导出交易数据，然后再导入到 ezbookkeeping。

### 如何获取金蝶随手记（Web版）数据导出文件

[![](images/how_to_export_feidee_mymoney_web.png)](images/how_to_export_feidee_mymoney_web.png)

1. 在随手记网页版点击 `新功能` 中的 `导入导出`
2. 点击 `数据导出` 中的 `随手记 web版`，即可导出为 Excel（.xls）格式的文件

> 注意：随手记（Web版）导出的转账交易没有处理多币种的转账交易数据，跨币种的转账金额为相同。如果您要导入的数据中包含跨币种的转账交易，请使用金蝶随手记手机App进行导出交易数据。
