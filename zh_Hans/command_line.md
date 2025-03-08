---
layout: default
title: 命令行
nav_order: 6
parent: 中文 (简体)
permalink: /zh_Hans/command_line
---

# 命令行
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 使用方法

    ezbookkeeping [全局选项] 命令 [命令选项] [参数...]

## 全局选项

* `--help`, `-h`：显示帮助。可选。
* `--version`, `-v`：显示版本。可选。
* `--conf-path FILE`：指定自定义配置路径。可选。（默认是 `%WORKING_DIR%/conf/ezbookkeeping.ini`）

## 命令

### server

ezBookkeeping Web 服务器操作。

* `run`：启动 ezBookkeeping Web 服务器。

### database

ezBookkeeping 数据维护操作。

* `update`：更新数据库结构。

### userdata

ezBookkeeping 用户数据维护操作。

* `user-add`：添加新用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--email value`, `-m value`：用户邮箱。必填。
    * `--nickname value`, `-i value`：用户昵称。必填。
    * `--password value`, `-p value`：用户密码。必填。
    * `--default-currency value`, `-c value`：用户默认货币代码。必填。
* `user-get`：显示指定用户信息。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-modify-password`：修改指定用户密码。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--password value`, `-p value`：用户密码。必填。
* `user-enable`：启用指定用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-disable`：禁用指定用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-set-restrict-features`: 设置用户指定功能限制。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--features value`, `-t value`: 指定功能类型（功能类型使用逗号分隔）。必填。访问 [配置](/zh_Hans/configuration#用户) 中的 `default_feature_restrictions` 查看更多信息。
* `user-add-restrict-features`: 添加用户指定功能限制。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--features value`, `-t value`: 指定功能类型（功能类型使用逗号分隔）。必填。访问 [配置](/zh_Hans/configuration#用户) 中的 `default_feature_restrictions` 查看更多信息。
* `user-remove-restrict-features`: 移除用户指定功能限制。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--features value`, `-t value`: 指定功能类型（功能类型使用逗号分隔）。必填。访问 [配置](/zh_Hans/configuration#用户) 中的 `default_feature_restrictions` 查看更多信息。
* `user-resend-verify-email`：重新发送用户验证邮件。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-set-email-verified`：设置指定用户邮件地址为已验证。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-set-email-unverified`：设置指定用户邮件地址为未验证。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-delete`：删除指定用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-2fa-disable`：禁用指定用户两步认证。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-session-list`：列出指定用户所有会话。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-session-new`：为用户创建新会话。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-session-clear`：清除指定用户所有会话。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `send-password-reset-mail`：发送密码重置邮件。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `transaction-check`：检查指定用户所有交易和账户数据是否都正确。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `transaction-tag-index-fix-transaction-time`：修复不包含交易时间的交易标签索引数据（v0.5.0 之前的 bug）。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `transaction-import`：导入交易到指定用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--file value`, `-f value`：导入文件路径（例如 `transaction.csv`）。必填。
    * `--type value`, `-t value`: 导入文件类型，支持 `ezbookkeeping_csv` 或 `ezbookkeeping_tsv`。必填。
* `transaction-export`：导出指定用户所有交易到 `.csv` 文件。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--file value`, `-f value`：目标文件路径（例如 `transaction.csv`）。必填。
    * `--type value`, `-t value`: 导出文件类型，支持 `csv` 或 `tsv`，默认为 `csv`。

### cron

ezBookkeeping 定时任务工具。

* `list`: 显示所有已启用的定时任务。
* `run`: 执行指定的定时任务。
    * 选项：
    * `--name name`, `-n name`: 定时任务名称。

### security

ezBookkeeping 安全工具。

* `gen-secret-key`：生成随机安全 Key。
    * 选项：
    * `--length value`, `-l value`:安全 Key 的长度。可选。（默认是 `32`）

### utility

ezBookkeeping 通用工具。

* `parse-default-request-id`：解析使用默认请求ID生成器生成的请求ID，并显示详情。
    * 选项：
    * `--id`：请求ID。
* `send-test-mail`：向指定邮件地址发送测试邮件。
    * 选项：
    * `--to`：收件人电子邮件地址。