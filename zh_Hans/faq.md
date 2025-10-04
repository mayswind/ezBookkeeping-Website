---
layout: default
title: 常见问题
nav_order: 11
parent: 中文 (简体)
permalink: /zh_Hans/faq
---

# 常见问题
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

本页面列举了一些常见问题及答案。

如果页面中没有您要找的问题，您可以访问 [GitHub Discussions](https://github.com/mayswind/ezbookkeeping/discussions) 或 [GitHub Issues](https://github.com/mayswind/ezbookkeeping/issues) 查找更多内容。

## ezBookkeeping 文件存储的位置

### 数据库文件

如果你使用 SQLite 作为数据库，则数据库文件的默认位置为 ezBookkeeping 可执行文件目录下的 `data/ezbookkeeping.db`，如果你使用 Docker 镜像部署，则数据库文件的默认路径为容器内的 `/ezbookkeeping/data/ezbookkeeping.db`。你可以通过配置文件修改这个路径，更多信息见 [配置-数据库](/zh_Hans/configuration#数据库) 中的 `db_path`。

如果你使用 MySQL 或 PostgreSQL，数据库文件通过数据库系统进行管理。

### 对象存储文件

如果你使用 `local_filesystem` 对象存储类型，则对象存储文件的默认位置为 ezBookkeeping 可执行文件目录下的 `storage` 目录，如果你使用 Docker 镜像部署，则数据库文件的默认路径为容器内的 `/ezbookkeeping/storage/`。你可以通过配置文件修改这个路径，更多信息见 [配置-对象存储](/zh_Hans/configuration#对象存储) 中的 `local_filesystem_path`。

如果你使用 `minio` 或 `webdav` 对象存储类型，对象存储的文件通过对象存储系统进行管理。

## ezBookkeeping 启动时提示没有权限（"permission denied"）

ezBookkeeping 的 `data` 目录（使用 SQLite 数据库时）、`storage` 目录（使用 `local_filesystem` 对象存储类型时）、`log` 目录都需要有运行 ezBookkeeping 进程用户的读写权限。以及 `conf/ezbookkeeping.ini` 文件需要有运行 ezBookkeeping 进程用户的读权限。

如果你使用 Docker 镜像部署，运行 ezBookkeeping 进程的用户 UID 为 **1000**、组 GID 为 **1000**，如果你将外部目录挂载到 Docker 容器内，需要保证对应目录有该 UID/GID 的权限。

## 如何迁移 ezBookkeeping 的数据

### 迁移数据库

1. SQLite → SQLite：只需要复制数据库目录下（默认为 `data`）下的 `.db` 文件即可
2. 其他组合（例如 SQLite → MySQL / PostgreSQL，或相反）：请在使用 ezBookkeeping 初始化新的数据库后，使用第三方工具将之前数据库的数据迁移到新的数据库中

### 迁移对象存储

1.  `local_filesystem` → `local_filesystem`：只需要复制对象存储目录下（默认为 `storage`）下所有文件即可
2. 其他组合（例如 `local_filesystem` → `minio` / `webdav`，或相反），请在使用 ezBookkeeping 初始化新的对象存储目录后，使用第三方工具将存储的文件进行同步

## 添加交易时无法设置货币信息

ezBookkeeping 的货币信息不与每笔交易所关联，而是与账户所关联，每一个账户有且只能有一个货币。如果你现实中的账户支持多种货币，你可以将该账户的账户类型设置为 “多个子账户”，然后为每个货币设置一个子账户。
