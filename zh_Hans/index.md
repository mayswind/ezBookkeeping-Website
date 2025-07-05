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
ezBookkeeping 是一款轻量、自托管 (self-hosted) 的个人记账应用，拥有简洁美观的用户界面与强大的记账功能。它以“简单易用、易于部署”为设计理念，对系统资源的需求极低，非常适合部署在 MicroServer、NAS 设备，甚至树莓派上使用。

本应用支持多平台多设备，您可以无缝地在 **手机、平板、桌面电脑** 上使用。同时借助 PWA (渐进式网页应用) 技术，您还可以将它 [添加到手机主屏幕](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif)上，像原生 App 一样使用。

项目地址：[https://github.com/mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)  
在线演示：[https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## 特性
- **开源 & 自托管**
    - 专为隐私与数据自主而设计
- **轻量 & 快速**
    - 为性能优化，即便在资源有限的设备上也运行流畅
- **安装简单**
    - 支持 Docker
    - 支持 SQLite、MySQL、PostgreSQL 多种数据库
    - 跨平台运行 (Windows, macOS, Linux)
    - 支持 x86, amd64, ARM 架构
- **友好的用户界面**
    - 针对手机与桌面优化的 UI
    - 支持 PWA，带来接近原生 App 的使用体验
    - 深色模式
- **AI驱动的功能**
    - 支持 MCP (Model Context Protocol) 用于 AI 集成
- **强大的记账功能**
    - 二级账户与分类结构
    - 支持为交易添加图片附件
    - 记录交易地理位置并在地图上展示
    - 支持周期性交易
    - 高级筛选、搜索、数据可视化与分析功能
- **本地化与国际化支持**
    - 多语言与多币种支持
    - 自动汇率更新
    - 多时区感知
    - 自定义日期、数字与货币格式
- **安全可靠**
    - 两步认证 (2FA)
    - 登录频次限制
    - 应用锁 (PIN 码 / WebAuthn)
- **Data Import/Export**
    - 支持 CSV、OFX、QFX、QIF、IIF、Camt.053、MT940、GnuCash、FireFly III、Beancount、随手记、支付宝以及微信账单 等多种格式

## 截图
### 桌面版
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/zh_Hans.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/zh_Hans.png)

### 移动版
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/zh_Hans.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/zh_Hans.png)

## 安装
### 使用 Docker 部署
访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

**最新发布版本：**

    $ docker run -p8080:8080 mayswind/ezbookkeeping

**最新每日构建：**

    $ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot

### 从二进制包安装
下载最新发布版本：[https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

**Linux / macOS**

    $ ./ezbookkeeping server run

**Windows**

    > .\ezbookkeeping.exe server run

默认 ezBookkeeping 将会监听 8080 端口。您可以访问 `http://{YOUR_HOST_ADDRESS}:8080/` 。

### 从源代码构建
请确保您已经安装 [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) 和 [NPM](https://www.npmjs.com/)。然后下载源代码并执行以下步骤：

**Linux / macOS**

    $ ./build.sh package -o ezbookkeeping.tar.gz

所有的文件将被打包到 `ezbookkeeping.tar.gz`.

**Windows**

    > .\build.bat package -o ezbookkeeping.zip

所有的文件将被打包到 `ezbookkeeping.zip`.

您还可以构建 Docker 镜像，确保您已经安装 [Docker](https://www.docker.com/)，然后执行以下步骤：

**Linux**

    $ ./build.sh docker

关于安装 ezBookkeeping 的更多信息，您可以访问我们的[文档](/zh_Hans/installation)。

## 协议
[MIT](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
