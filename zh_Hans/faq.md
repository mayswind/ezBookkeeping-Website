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

## 定时交易没有自动创建新的交易

ezBookkeeping 的定时交易当到达预定日期时会自动创建一笔交易，这笔生成的交易与用户自己创建的交易完全相同。在预定日期到达之前，没有交易会被创建。你需要保持 ezBookkeeping 的服务端一直运行。

## 为什么上传的用户头像和交易图片无法显示

请确保配置中的 `domain` 设置正确，如果你使用了 Nginx 等反向代理，并且访问协议或端口号与 ezBookkeeping 服务端提供的不同，还需要修改 `root_url`，具体请参考 [配置-服务器](/zh_Hans/configuration#服务器)。ezBookkeeping 中用户上传的用户头像、交易图片的地址均依赖上述地址。

如果完成了上述设置，但图片依然无法显示，你可以通过浏览器的开发者工具检查图片的地址是否与设置的地址相同。如果不同请检查 ezBookkeeping 启动时输出的配置文件的内容是否与预期的一致，如果不同请检查设置或重新启动 ezBookkeeping。

## 为什么总金额时不包含特定货币的金额

ezBookkeeping 计算不同货币的总金额时依赖汇率数据，你需要确保当前用户的默认货币和所有参与计算总金额的货币均包含在当前汇率数据中。你可以参考 [汇率](/zh_Hans/exchange_rates) 设置汇率数据源。

## 为什么删除交易后数据库里的记录没有删除

为了尽可能减少误删除后数据恢复的难度，ezBookkeeping 中交易、账户、分类和标签的删除操作都是逻辑删除，删除后只会在数据库中标记为删除，并不会真实从数据库物理删除这条记录。

## 为什么删除交易图片后对象存储里的图片文件没有删除

为了尽可能减少误删除后数据恢复的难度，ezBookkeeping 中交易图片的删除操作都是逻辑删除，只会对数据库中的交易图片记录标记为删除，并不会从数据库中物理删除交易图片记录，也不会物理删除对象存储中的图片。

## 为什么无法添加交易

ezBookkeeping 中的每一笔交易都需要包含账户和交易分类，并且交易分类是按交易类型分为支出分类、收入分类和转账份额里，每一笔交易都需要设置一个分类的二级分类。如果你还没有创建账户和对应交易类型的二级分类，则无法创建新的交易。

## 如何记录退款

你可以创建一笔支出交易，交易金额为负数。

## 如何使用交易模板创建交易

1. 在移动版中，长按主界面底部导航栏的创建交易按钮，弹出的列表中包含用户创建的交易模板，轻触即可使用该模板创建交易
2. 在桌面版中，将鼠标移动到交易列表页的添加交易按钮，下拉列表中包含用户创建的交易模板，点击即可使用该模板创建交易

## 如何使用AI识图创建交易

首先，需要设置大语言模型（LLM）设置。在 `llm` 节中启用 `transaction_from_ai_image_recognition` 以允许AI识图创建交易。然后在 `llm_image_recognition` 节中设置 `llm_provider` 以及对应大语言模型提供者的 API Key、模型ID等设置。请确保指定的模型支持图片识别。更多信息见 [配置-大语言模型 (LLM)](/zh_Hans/configuration#大语言模型-llm)。

在完成设置大语言模型的配置后，

1. 在移动版中，长按主界面底部导航栏的创建交易按钮，轻触弹出列表中的 “AI识图” 即可
2. 在桌面版中，将鼠标移动到交易列表页的添加交易按钮，点击下拉列表中的 “AI识图” 即可