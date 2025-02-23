---
layout: default
title: 开发
nav_order: 8
parent: 简体中文
permalink: /zh_Hans/developing
---

# 开发
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## 准备

ezBookkeeping 使用 Golang 和 JavaScript 编写。在您开始开发前，你需要安装 [Git](https://git-scm.com/)、[Golang](https://golang.org/)、[GCC](http://gcc.gnu.org/)、[Node.js](https://nodejs.org/) 和 [NPM](https://www.npmjs.com/)。ezBookkeeping 的发布包和 Docker 镜像使用 Golang 1.23 和 Node.js 20.x 进行编译。

## 下载源代码

您可以使用 `git clone` 获取最近源代码。

    $ git clone https://github.com/mayswind/ezbookkeeping.git

## 开发和调试

后端的 `main` 函数在文件 `/ezbookkeeping.go` 中。你可以指定该文件进行编译和运行，然后 ezbookkeeping 默认会监听端口 `8080`。后端其他的文件大部分在目录 `pkg` 中。

前端页面的入口是 `/src/index-main.js`，首页将会根据访问者设备的类型跳转到桌面版或移动版的网页。桌面版的前端入口是 `/src/desktop-main.js`，移动版的前端入口是 `/src/mobile-main.js`。几乎所有前端文件都在相同的目录 `src` 下。你可以使用 `npm run serve` 编译前端文件并启动一个 Web 服务器，监听端口 `8081`，并将后端请求代理到端口 `8080`。

做完上述步骤后，你可以在你的浏览器中打开网址 `http://127.0.0.1:8081/`，然后你就可以开发并调试你的代码了。

## 编译

您可以使用 `build.sh` / `build.bat` 脚本构建前端文件、后端文件、完整包以及 Docker 镜像。

### 构建前端文件

**Linux / macOS**

    $ ./build.sh frontend

**Windows**

    > .\build.bat frontend

前端文件将会构建并放置到 `dist` 目录中。

### 构建后端文件

**Linux / macOS**

    $ ./build.sh backend

**Windows**

    > .\build.bat backend

后端文件将会构建并放置到项目目录中，文件名为 `ezbookkeeping`。

### 构建完整包

**Linux / macOS**

    $ ./build.sh package -o ezbookkeeping.tar.gz

所有文件将会构建并打包到 `ezbookkeeping.tar.gz`。

**Windows**

    > .\build.bat package -o ezbookkeeping.zip

所有文件将会构建并打包到 `ezbookkeeping.zip`。

### 构建 Docker 镜像

**Linux**

    $ ./build.sh docker -t ezbookkeeping:release

Docker 镜像将会构建并设置标签为 `ezbookkeeping:release`。