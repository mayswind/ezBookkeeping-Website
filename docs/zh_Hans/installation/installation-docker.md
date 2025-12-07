---
title: "通过 Docker 运行"
---

# 通过 Docker 运行

访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

**最近发布镜像**

[![最近发布镜像](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

`mayswind/ezbookkeeping:latest`

**指定版本的发布镜像**

`mayswind/ezbookkeeping:{version}`

**最近每日构建镜像**

`mayswind/ezbookkeeping:latest-snapshot`

## 启动 Docker 镜像

示例：

```shell
$ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping
```

执行完该命令后，ezBookkeeping 将会使用默认的配置在后台启动，并监听端口 `8080`。

容器中的默认路径：

* **配置文件**：`/ezbookkeeping/conf/ezbookkeeping.ini`
* **数据库文件（使用 `sqlite3` 数据库）**：`/ezbookkeeping/data/ezbookkeeping.db`
* **日志文件**：`/ezbookkeeping/log/ezbookkeeping.log`
* **对象存储根路径（使用 `local_filesystem` 对象存储）**: `/ezbookkeeping/storage/`

## 持久化存储数据

默认数据库类型是 `sqlite3`，数据库文件存储在容器中的 `/ezbookkeeping/data/ezbookkeeping.db`。
如果你想继续使用 `sqlite3` 作为数据库，并持久化保存这些数据，你需要使用 Docker 持久化数据卷或挂载宿主机的路径到容器内。
此外，默认对象存储使用本地文件系统，默认路径是 `/ezbookkeeping/storage/`，如果你使用本地文件系统存储对象数据（例如用户上传的图片），你也需要使用 Docker 持久化数据卷或挂载宿主机的路径到容器内。

### 使用持久化数据卷运行容器

```shell
# 创建持久化数据卷
$ docker volume create ezbookkeeping-data
$ docker volume create ezbookkeeping-storage

# 使用持久化数据卷运行容器
$ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data -v ezbookkeeping-storage:/ezbookkeeping/storage mayswind/ezbookkeeping
```

### 挂载宿主机路径运行容器

```shell
# 在宿主机创建数据路径并修改 UID/GID
$ mkdir -p /var/lib/ezbookkeeping/data
$ mkdir -p /var/lib/ezbookkeeping/storage
$ chown 1000:1000 /var/lib/ezbookkeeping/data
$ chown 1000:1000 /var/lib/ezbookkeeping/storage

# 挂载宿主机路径运行容器
$ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping/data:/ezbookkeeping/data -v /var/lib/ezbookkeeping/storage:/ezbookkeeping/storage mayswind/ezbookkeeping
```

运行 ezBookkeeping 的 用户ID（UID）和 分组ID（GID）都是 `1000`，所以你需要保证当你想修改路径或挂载数据卷时，ezBookkeeping 使用的目录有权限被 UID/GID `1000` 读/写。

## 自定义配置

如果你想替换配置文件，你可以挂载自定义的配置文件到 `/ezbookkeeping/conf/ezbookkeeping.ini`，或通过环境变量 `EBK_CONF_PATH` 修改配置文件的路径。

如果你只是想修改部分选项，你只要使用环境变量就可以设置这些值。
配置文件中所有的选项都可以通过如下的环境变量名被覆盖：`EBK_{SECTION_NAME}_{OPTION_NAME}`。除此之外，ezBookkeeping 还支持通过环境变量从指定文件中加载指定配置项的值，具体参考 [配置](/zh_Hans/configuration/)。

**注意**：
在部署到生产环境之前，您必须生成一个随机值并将其设置到 `secret_key` 配置中以保证您数据的安全。你可以通过执行 `ezbookkeeping security gen-secret-key` 获取一个随机密钥。

除此之外，您还需要将设置中的 `domain` 设置为实际访问的域名，否则邮件中的链接地址，以及用户头像、交易图片等地址将会不正确。如果你实际访问的协议或端口与 ezBookkeping 配置的不同，还需要将 `root_url` 修改为实际的访问地址（例如使用 Nginx 作为反向代理）。

更多信息，请访问 [配置](/zh_Hans/configuration/)。

## 使用 docker-compose

一个完整的生产部署示例（使用 `mysql` 作为数据库）：

```yaml:line-numbers
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

如果你感兴趣，你可以查看 [https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net) 背后的 [docker-compose 文件](/configurations/demo/docker-compose.yml){target=_blank} 与 [nginx 的 conf 文件](/configurations/demo/ezbookkeeping.demo.conf){target=_blank}。
