---
layout: default
title: 命令行
nav_order: 5
parent: 简体中文
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
* `user-delete`：删除指定用户。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-2fa-disable`：禁用指定用户两步认证。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-session-list`：列出指定用户所有会话。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `user-session-clear`：清除指定用户所有会话。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `transaction-check`：检查指定用户所有交易和账户数据是否都正确。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
* `transaction-export`：导出指定用户所有交易到 `.csv` 文件。
    * 选项：
    * `--username value`, `-n value`：用户名。必填。
    * `--file value`, `-f value`：目标文件路径（例如 `transaction.csv`）。必填。

### security

ezBookkeeping 安全工具。

* `gen-secret-key`：生成随机安全 Key。
    * 选项：
    * `--length value`, `-l value`:安全 Key 的长度。可选。（默认是 `32`）