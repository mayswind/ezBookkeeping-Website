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
ezBookkeeping 是一个轻量、自托管 (self-hosted) 的个人财务应用，具有用户友好的界面和强大的记账功能。它支持 PWA，您可以[将应用首页添加到移动设备的主屏幕](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif)上，使用起来就像原生应用一样。它易于部署和配置，您只需通过 Docker 的一个命令即可部署它。它支持几乎所有平台，包括 Windows、macOS 和 Linux，以及兼容 x86、amd64 和 ARM 硬件架构。它仅需要很少的系统资源，您甚至可以在 Raspberry Pi 设备上运行它。

项目地址：[https://github.com/mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)  
在线演示：[https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## 特性
1. 开源 & 自托管 (Self-hosted)
2. 轻量 & 快速
3. 安装简单
    * 支持 Docker
    * 支持多种数据库 (SQLite、MySQL、PostgreSQL 等)
    * 支持多种操作系统和硬件架构 (Windows、macOS、Linux & x86、amd64、ARM)
4. 用户友好的界面
    * 为桌面和移动设备提供原生UI
    * 支持 PWA，移动设备体验接近原生应用
    * 深色主题
5. 强大的记账功能
    * 支持两级账户
    * 支持两级分类及预设分类
    * 支持交易图片
    * 支持地理位置记录及地图
    * 支持周期性交易
    * 查找、筛选交易记录
    * 数据可视化及统计分析
6. 本地化支持
    * 多语言支持
    * 多货币支持，支持多家金融机构的汇率自动更新
    * 多时区支持
    * 自定义日期、时间、数字、货币显示格式
7. 安全可靠
    * 两步认证 (2FA)
    * 登录频次限制
    * 应用锁 (PIN 码 / WebAuthn)
8. 数据导出 & 导入 (CSV、OFX、QFX、QIF、IIF、Camt.053、MT940、GnuCash、FireFly III、Beancount、随手记、支付宝及微信账单等)

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
