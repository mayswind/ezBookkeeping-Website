---
title: "Installation"
---

# Introduction

ezBookkeeping is a lightweight, self-hosted personal finance app with a user-friendly interface and powerful bookkeeping features. It helps you record daily transactions, import data from various sources, and quickly search and filter your bills. You can analyze historical data using built-in charts or perform custom queries with your own chart dimensions to better understand spending patterns and financial trends. ezBookkeeping is easy to deploy, and you can start it with just one single Docker command. Designed to be resource-efficient, it runs smoothly on devices such as Raspberry Pi, NAS, and MicroServers.

ezBookkeeping offers tailored interfaces for both mobile and desktop devices. With support for PWA (Progressive Web Apps), you can even [add it to your mobile home screen](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif) and use it like a native app.

## Run with Docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

**Latest Release:**

```shell
$ docker run -p8080:8080 mayswind/ezbookkeeping
```

**Latest Daily Build:**

```shell
$ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot
```

## Install from Binary
Download the latest release: [https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

**Linux / macOS**

```shell
$ ./ezbookkeeping server run
```

**Windows**

```shell
> .\ezbookkeeping.exe server run
```

By default, ezBookkeeping listens on port 8080. You can then visit `http://{YOUR_HOST_ADDRESS}:8080/` .

## Build from Source
Make sure you have [Golang](https://golang.org/), [GCC](https://gcc.gnu.org/), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Then download the source code, and follow these steps:

**Linux / macOS**

```shell
$ ./build.sh package -o ezbookkeeping.tar.gz
```

All the files will be packaged in `ezbookkeeping.tar.gz`.

**Windows**

```shell
> .\build.bat package -o ezbookkeeping.zip
```

or

```powershell
PS > .\build.ps1 package -Output ezbookkeeping.zip
```

All the files will be packaged in `ezbookkeeping.zip`.

You can also build a Docker image. Make sure you have [Docker](https://www.docker.com/) installed, then follow these steps:

**Linux**

```shell
$ ./build.sh docker
```
