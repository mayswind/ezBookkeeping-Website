---
layout: default
title: 简体中文
nav_order: 2
has_children: true
has_toc: false
permalink: /zh_Hans
---

# ezBookkeeping
{: .no_toc }

[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
[![Latest Build](https://img.shields.io/github/workflow/status/mayswind/ezbookkeeping/Docker%20Release?style=flat)](https://github.com/mayswind/ezbookkeeping/actions)
[![Go Report](https://goreportcard.com/badge/github.com/mayswind/ezbookkeeping)](https://goreportcard.com/report/github.com/mayswind/ezbookkeeping)
[![Latest Docker Image Size](https://img.shields.io/docker/image-size/mayswind/ezbookkeeping.svg?style=flat)](https://hub.docker.com/r/mayswind/ezbookkeeping)
[![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping.svg?style=flat)](https://github.com/mayswind/ezbookkeeping/releases)

<details open markdown="block">
  <summary>
    目录
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## 介绍
ezBookkeeping 是一个自托管 (self-hosted) 的轻量个人账本应用。它可以部署在几乎所有平台上，包括 x86、x64 以及 ARM 架构的 Windows、macOS 和 Linux。您甚至可以将它部署在树莓派 (Raspberry) 设备中。此外，它支持多种不同数据库，包括 Sqlite 和 Mysql 等。借助 Docker，您甚至只需要一条命令即可将其部署，而无需复杂的配置。

## 特性
1. 开源 & 自托管 (self-hosted)
2. 轻量 & 快速
3. 安装简单
    * 支持 Docker
    * 支持多种数据库 (sqlite、mysql 等)
    * 支持多种操作系统和架构 (Windows、macOS、Linux & x86、amd64、ARM)
4. 用户友好的界面
    * 接近原生应用的体验 (针对移动设备)
    * 支持两级账户及两级分类
    * 丰富的预设分类
    * 查找、过滤历史记录
    * 数据统计
    * 深色主题
5. 多货币支持 & 自动更新汇率
6. 多时区支持
7. 多语言支持
8. 两步认证
9. 应用锁 (支持 WebAuthn)
10. 数据导出

## 截图
### 移动设备
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/zh_Hans.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/zh_Hans.png)

## 安装
### 使用 Docker 部署
访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

最新发布版本:

    $ docker run -p8080:8080 mayswind/ezbookkeeping

最新每日构建:

    $ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot

### 从二进制包安装
最新发布版本: [https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

    $ ./ezbookkeeping server run

ezBookkeeping 默认将会监听 8080 端口。您可以访问 http://{YOUR_HOST_ADDRESS}:8080/ 。

### 从源代码构建
请确保您已经安装 [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) 和 [NPM](https://www.npmjs.com/)。然后下载源代码并执行以下步骤：

    $ ./build.sh package -f ezbookkeeping.tar.gz

所有的文件将被打包到 `ezbookkeeping.tar.gz`.

您还可以构建 Docker 镜像，确保您已经安装 [docker](https://www.docker.com/)，然后执行以下步骤：

    $ ./build.sh docker

关于安装 ezBookkeeping 的更多信息，您可以访问我们的文档。

## 协议
[MIT](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
