---
layout: default
title: 中文 (简体)
nav_order: 100
has_children: true
has_toc: false
permalink: /zh_Hans
---

# ezBookkeeping
{: .no_toc }

1. TOC
{:toc}

---

## 介绍
ezBookkeeping 是一个自托管 (self-hosted) 的轻量个人账本应用。它可以部署在几乎所有平台上，包括 x86、x64 以及 ARM 架构的 Windows、macOS 和 Linux。您甚至可以将它部署在树莓派 (Raspberry) 设备中。此外，它支持多种不同数据库，包括 SQLite、MySQL 和 PostgreSQL 等。借助 Docker，您甚至只需要一条命令即可将其部署，而无需复杂的配置。

项目地址：[https://github.com/mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)  
在线演示：[https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## 特性
1. 开源 & 自托管 (self-hosted)
2. 轻量 & 快速
3. 安装简单
    * 支持 Docker
    * 支持多种数据库 (SQLite、MySQL、PostgreSQL 等)
    * 支持多种操作系统和硬件 (Windows、macOS、Linux & x86、amd64、ARM)
4. 用户友好的界面
    * 桌面版和移动版UI
    * 接近原生应用的体验 (针对移动设备)
    * 支持两级账户及两级分类
    * 丰富的预设分类
    * 支持地理位置及地图
    * 查找、过滤历史记录
    * 数据统计
    * 深色主题
5. 多货币支持 & 自动更新汇率
6. 多时区支持
7. 多语言支持
8. 两步认证
9. 应用锁 (PIN 码 / WebAuthn)
10. 数据导出 & 导入 (CSV、OFX、QFX、QIF、IIF、GnuCash、FireFly III、Beancount、随手记、支付宝及微信账单等)

## 截图
### 桌面版
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/zh_Hans.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/zh_Hans.png)

### 移动版
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/zh_Hans.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/zh_Hans.png)

## 安装
### 使用 Docker 部署
访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

最新发布版本：[![最新发布版本](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

    $ docker run -p8080:8080 mayswind/ezbookkeeping

最新每日构建：

    $ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot

### 从二进制包安装
最新发布版本：[![最新发布版本](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

**Linux / macOS**

    $ ./ezbookkeeping server run

**Windows**

    > .\ezbookkeeping.exe server run

ezBookkeeping 默认将会监听 8080 端口。您可以访问 `http://{YOUR_HOST_ADDRESS}:8080/` 。

### 从源代码构建
请确保您已经安装 [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) 和 [NPM](https://www.npmjs.com/)。然后下载源代码并执行以下步骤：

**Linux / macOS**

    $ ./build.sh package -o ezbookkeeping.tar.gz

所有的文件将被打包到 `ezbookkeeping.tar.gz`.

**Windows**

    > .\build.bat package -o ezbookkeeping.zip

所有的文件将被打包到 `ezbookkeeping.zip`.

您还可以构建 Docker 镜像，确保您已经安装 [docker](https://www.docker.com/)，然后执行以下步骤：

**Linux**

    $ ./build.sh docker

关于安装 ezBookkeeping 的更多信息，您可以访问我们的[文档](/zh_Hans/installation)。

## 协议
[MIT](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
