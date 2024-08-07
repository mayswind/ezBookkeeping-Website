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

[![最近发布镜像](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

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
* **数据库文件（使用 `sqlite3` 数据库）**：`/ezbookkeeping/data/ezbookkeeping.db`
* **日志文件**：`/ezbookkeeping/log/ezbookkeeping.log`
* **对象存储根路径（使用 `local_filesystem` 对象存储）**: `/ezbookkeeping/storage/`

### 持久化存储数据

默认数据库类型是 `sqlite3`，数据库文件存储在容器中的 `/ezbookkeeping/data/ezbookkeeping.db`。  
如果你想继续使用 `sqlite3` 作为数据库，并持久化保存这些数据，你需要使用 Docker 持久化数据卷或挂载宿主机的路径到容器内。  
此外，默认对象存储使用本地文件系统，默认路径是 `/ezbookkeeping/storage/`，如果你使用本地文件系统存储对象数据（例如用户上传的图片），你也需要使用 Docker 持久化数据卷或挂载宿主机的路径到容器内。  

#### 使用持久化数据卷运行容器

    # 创建持久化数据卷
    $ docker volume create ezbookkeeping-data
    $ docker volume create ezbookkeeping-storage

    # 使用持久化数据卷运行容器
    $ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data -v ezbookkeeping-storage:/ezbookkeeping/storage mayswind/ezbookkeeping

#### 挂载宿主机路径运行容器

    # 在宿主机创建数据路径并修改 UID/GID
    $ mkdir -p /var/lib/ezbookkeeping/data
    $ mkdir -p /var/lib/ezbookkeeping/storage
    $ chown 1000:1000 /var/lib/ezbookkeeping/data
    $ chown 1000:1000 /var/lib/ezbookkeeping/storage

    # 挂载宿主机路径运行容器
    $ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping/data:/ezbookkeeping/data -v /var/lib/ezbookkeeping/storage:/ezbookkeeping/storage mayswind/ezbookkeeping

运行 ezBookkeeping 的 用户ID（UID）和 分组ID（GID）都是 `1000`，所以你需要保证当你想修改路径或挂载数据卷时，ezBookkeeping 使用的目录有权限被 UID/GID `1000` 读/写。

### 自定义配置

如果你想替换配置文件，你可以挂载自定义的配置文件到 `/ezbookkeeping/conf/ezbookkeeping.ini`，或通过环境变量 `EBK_CONF_PATH` 修改配置文件的路径。

如果你只是想修改部分选项，你只要使用环境变量就可以设置这些值。
配置文件中所有的选项都可以通过如下的环境变量名被覆盖：
`EBK_{SECTION_NAME}_{OPTION_NAME}`。

**注意**：
在部署到生产环境之前，您必须生成一个随机值并将其设置到 `secret_key` 配置中以保证您数据的安全。你可以通过执行 `ezbookkeeping security gen-secret-key` 获取一个随机密钥。

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
      - "/var/lib/ezbookkeeping/storage:/ezbookkeeping/storage" # 请确保 UID:GID 是 1000:1000
      - "/var/log/ezbookkeeping:/ezbookkeeping/log" # 请确保 UID:GID 是 1000:1000
```

## 从二进制包安装
最新发布版本：

[![最新发布版本](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

下载并解压缩压缩包，然后执行下列命令：

    $ ./ezbookkeeping server run

执行完该命令后，ezBookkeeping 将会以默认的配置启动，并监听端口 `8080`。 如果你想修改配置，你可以使用 `--conf-path` 参数指定自定义配置路径或你可以直接修改 `conf/config.ini` 文件。更多信息，请访问 [配置](/zh_Hans/configuration)。

如果你有 `systemd` 并且你想使用 `systemd` 管理 ezBookkeeping，你可以在 `/lib/systemd/system`（Debian/Ubuntu）或 `/usr/lib/systemd/system`（CentOS）下创建一个服务单元配置。例如，你可以下载 [示例配置](https://github.com/mayswind/ezbookkeeping/blob/main/etc/systemd/ezbookkeeping.service) 到 `/lib/systemd/system/ezbookkeeping.service`，创建名为 `ezbookkeeping` 的用户和分组并根据实际路径修改配置文件中的路径。

然后你就可以通过下列的命令启动 ezBookkeeping：

    $ systemctl start ezbookkeeping

还可以让 ezBookkeeping 在系统启动时自动运行：

    $ systemctl enable ezbookkeeping