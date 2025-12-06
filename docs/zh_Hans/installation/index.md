---
title: "快速上手"
---

# 介绍

ezBookkeeping 是一款轻量、自托管 (self-hosted) 的个人记账应用，拥有用户友好的界面和强大的记账功能。它部署简单，借助 Docker 只需一行命令即可启动。同时对系统资源占用低、可扩展性高，既可运行在树莓派等轻量设备上，也能扩展到 NAS、MicroServer 甚至集群环境。

ezBookkeeping 为移动端和桌面端提供了各自原生的界面设计。借助 PWA (渐进式网页应用) 技术，您还可以将它 [添加到手机主屏幕](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif)，像原生 App 一样使用。

## 使用 Docker 部署
访问 [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) 查看所有镜像和标签。

**最新发布版本：**

```shell
$ docker run -p8080:8080 mayswind/ezbookkeeping
```

**最新每日构建：**

```shell
$ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot
```

## 从二进制包安装
下载最新发布版本：[https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

**Linux / macOS**

```shell
$ ./ezbookkeeping server run
```

**Windows**

```shell
> .\ezbookkeeping.exe server run
```

默认 ezBookkeeping 将会监听 8080 端口。您可以访问 `http://{YOUR_HOST_ADDRESS}:8080/` 。

## 从源代码构建
请确保您已经安装 [Golang](https://golang.org/), [GCC](https://gcc.gnu.org/), [Node.js](https://nodejs.org/) 和 [NPM](https://www.npmjs.com/)。然后下载源代码并执行以下步骤：

**Linux / macOS**

```shell
$ ./build.sh package -o ezbookkeeping.tar.gz
```

所有的文件将被打包到 `ezbookkeeping.tar.gz`.

**Windows**

```shell
> .\build.bat package -o ezbookkeeping.zip
```

或

```powershell
PS > .\build.ps1 package -Output ezbookkeeping.zip
```

所有的文件将被打包到 `ezbookkeeping.zip`.

您还可以构建 Docker 镜像，确保您已经安装 [Docker](https://www.docker.com/)，然后执行以下步骤：

**Linux**

```shell
$ ./build.sh docker
```
