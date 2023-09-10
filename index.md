---
layout: default
title: Home
nav_order: 1
permalink: /
---

# ezBookkeeping
{: .no_toc }

1. TOC
{:toc}

---

## Introduction
ezBookkeeping is a lightweight personal bookkeeping app hosted by yourself. It can be deployed on almost all platforms, including Windows, macOS and Linux on x86, amd64 and ARM architectures. You can even deploy it on an raspberry device. It also supports many different databases, including sqlite and mysql. With docker, you can just deploy it via one command without complicated configuration.

Project url: [https://github.com/mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)

## Features
1. Open source & Self-hosted
2. Lightweight & Fast
3. Easy to install
    * Docker support
    * Multiple database support (SQLite, MySQL, PostgreSQL, etc.)
    * Multiple operation system & hardware support (Windows, macOS, Linux & x86, amd64, ARM)
4. User-friendly interface
    * Close to native app experience (for mobile device)
    * Two-level account & two-level category support
    * Plentiful preset categories
    * Geographic location and map support
    * Searching & filtering history records
    * Data statistics
    * Dark theme
5. Multiple currency support & automatically updating exchange rates
6. Multiple timezone support
7. Multi-language support
8. Two-factor authentication
9. Application lock (PIN code / WebAuthn)
10. Data export

## Screenshots
### Mobile Device
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/en.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/en.png)

## Installation
### Ship with docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

Latest Release: [![Latest Release](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

    $ docker run -p8080:8080 mayswind/ezbookkeeping

Latest Daily Build:

    $ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot

### Install from binary
Latest release: [![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

    $ ./ezbookkeeping server run

ezBookkeeping will listen at port 8080 as default. Then you can visit http://{YOUR_HOST_ADDRESS}:8080/ .

### Build from source
Make sure you have [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Then download the source code, and follow these steps:

    $ ./build.sh package -o ezbookkeeping.tar.gz

All the files will be packaged in `ezbookkeeping.tar.gz`.

You can also build docker image, make sure you have [docker](https://www.docker.com/) installed, then follow these steps:

    $ ./build.sh docker

For more information about how to install ezBookkeeping, please visit our [documentation](/installation).

## Documents
1. [English](/)
1. [简体中文 (Simplified Chinese)](/zh_Hans)

## License
[MIT](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
