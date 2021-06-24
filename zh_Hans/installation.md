---
layout: default
title: 安装
nav_order: 2
parent: 简体中文
permalink: /zh_Hans/installation
---

# 安装
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 使用 Docker 部署
访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

**最近发布镜像**

    mayswind/ezbookkeeping:latest

**指定版本的发布镜像**

    mayswind/ezbookkeeping:{version}  

**最近每日构建镜像**

    mayswind/ezbookkeeping:latest-snapshot

### 启动 Docker 镜像

示例：

    $ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping

执行完该命令后，ezBookkeeping 将会使用默认的配置在后台启动，并监听端口 `8080`。 

容器中的默认路径：

* **配置文件**：`/ezbookkeeping/conf/ezbookkeeping.ini`
* **数据库文件（使用 `sqlite3`）**：`/ezbookkeeping/data/ezbookkeeping.db`
* **日志文件**：`/ezbookkeeping/log/ezbookkeeping.log`

### 持久化存储数据

默认数据库类型是 `sqlite3`，数据库文件存储在容器中的 `/ezbookkeeping/data/ezbookkeeping.db`。
如果你想继续使用 `sqlite3` 作为数据库，并持久化保存这些数据，你需要使用 Docker 持久化数据卷或挂载宿主机的路径到容器内。

#### 使用持久化数据卷运行容器

    # 创建持久化数据卷
    $ docker volume create ezbookkeeping-data

    # 使用持久化数据卷运行容器
    $ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data mayswind/ezbookkeeping

#### 挂载宿主机路径运行容器

    # 在宿主机创建数据路径并修改 UID/GID
    $ mkdir -p /var/lib/ezbookkeeping
    $ chown 1000:1000 /var/lib/ezbookkeeping

    # 挂载宿主机路径运行容器
    $ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping:/ezbookkeeping/data mayswind/ezbookkeeping

运行 ezBookkeeping 的 用户ID（UID）和 分组ID（GID）都是 `1000`，所以你需要保证当你想修改路径或挂载数据卷时，ezBookkeeping 使用的目录有权限被 UID/GID `1000` 读/写。

### 自定义配置

如果你想替换配置文件，你可以挂载自定义的配置文件到 `/ezbookkeeping/conf/ezbookkeeping.ini`，或通过环境变量 `EBK_CONF_PATH` 修改配置文件的路径。

如果你只是想修改部分选项，你只要使用环境变量就可以设置这些值。
配置文件中所有的选项都可以通过如下的环境变量名被覆盖：
`EBK_{SECTION_NAME}_{OPTION_NAME}`。

**注意**：
在部署到生产环境之前，您必须生成一个随机值并将其设置到 `secret_key` 配置中以保证您数据的安全。

更多信息，请访问 [配置](/zh_Hans/configuration)。

### 使用 docker-compose

一个完整的生产部署示例（使用 `mysql` 作为数据库）：

```
version: "2"
services:
  ezbookkeeping:
    image: mayswind/ezbookkeeping
    container_name: ezbookkeeping
    hostname: "ezbookkeeping"
    ports:
      - "8080:8080"
    environment:
      - "EBK_SERVER_DOMAIN=ezbookkeeping.yourdomain"
      - "EBK_SERVER_ENABLE_GZIP=true"
      - "EBK_DATABASE_TYPE=mysql"
      - "EBK_DATABASE_HOST=mysql:3306"
      - "EBK_DATABASE_NAME=ezbookkeeping"
      - "EBK_DATABASE_USER=ezbookkeeping"
      - "EBK_DATABASE_PASSWD=ezbookkeeping"
      - "EBK_LOG_MODE=file"
      - "EBK_SECURITY_SECRET_KEY=its_should_be_a_random_string"
    volumes:
      - "/etc/localtime:/etc/localtime:ro"
      - "/var/log/ezbookkeeping:/var/log/ezbookkeeping" # 请确保 UID:GID 是 1000:1000
```

## 从二进制包安装
最新发布版本：[https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

    $ ./ezbookkeeping server run
