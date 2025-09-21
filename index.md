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
ezBookkeeping is a lightweight, self-hosted personal finance app with a user-friendly interface and powerful bookkeeping features. It's easy to deploy, and you can start it with just one single Docker command. Designed to be resource-efficient and highly scalable, it can run smoothly on devices as small as a Raspberry Pi, or scale up to NAS, MicroServers, and even large cluster environments.

ezBookkeeping offers tailored interfaces for both mobile and desktop devices. With support for PWA (Progressive Web Apps), you can even [add it to your mobile home screen](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif) and use it like a native app.

Project url: [https://github.com/mayswind/ezbookkeeping](https://github.com/mayswind/ezbookkeeping)  
Live Demo: [https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net)

## Features
- **Open Source & Self-Hosted**
    - Built for privacy and control
- **Lightweight & Fast**
    - Optimized for performance, runs smoothly even on low-resource environments
- **Easy Installation**
    - Docker-ready
    - Supports SQLite, MySQL, PostgreSQL
    - Cross-platform (Windows, macOS, Linux)
    - Works on x86, amd64, ARM architectures
- **User-Friendly Interface**
    - UI optimized for both mobile and desktop
    - PWA support for native-like mobile experience
    - Dark mode
- **AI-Powered Features**
    - Receipt image recognition
    - Supports MCP (Model Context Protocol) for AI integration
- **Powerful Bookkeeping**
    - Two-level accounts and categories
    - Attach images to transactions
    - Location tracking with maps
    - Recurring transactions
    - Advanced filtering, search, visualization, and analysis
- **Localization & Globalization**
    - Multi-language and multi-currency support
    - Automatic exchange rates
    - Multi-timezone awareness
    - Custom formats for dates, numbers, and currencies
- **Security**
    - Two-factor authentication (2FA)
    - Login rate limiting
    - Application lock (PIN code / WebAuthn)
- **Data Import/Export**
    - Supports CSV, OFX, QFX, QIF, IIF, Camt.053, MT940, GnuCash, Firefly III, Beancount, and more

## Screenshots
### Desktop Version
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/en.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/desktop/en.png)

### Mobile Version
[![ezBookkeeping](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/en.png)](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/en.png)

## Installation
### Run with Docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

**Latest Release:**

    $ docker run -p8080:8080 mayswind/ezbookkeeping

**Latest Daily Build:**

    $ docker run -p8080:8080 mayswind/ezbookkeeping:latest-snapshot

### Install from Binary
Download the latest release: [https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

**Linux / macOS**

    $ ./ezbookkeeping server run

**Windows**

    > .\ezbookkeeping.exe server run

By default, ezBookkeeping listens on port 8080. You can then visit `http://{YOUR_HOST_ADDRESS}:8080/` .

### Build from Source
Make sure you have [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) installed. Then download the source code, and follow these steps:

**Linux / macOS**

    $ ./build.sh package -o ezbookkeeping.tar.gz

All the files will be packaged in `ezbookkeeping.tar.gz`.

**Windows**

    > .\build.bat package -o ezbookkeeping.zip

All the files will be packaged in `ezbookkeeping.zip`.

You can also build a Docker image. Make sure you have [Docker](https://www.docker.com/) installed, then follow these steps:

**Linux**

    $ ./build.sh docker

For more information about how to install ezBookkeeping, please visit our [documentation](/installation).

## Documentation
1. [English](/)
1. [中文 (简体)](/zh_Hans)

## License
[MIT](https://github.com/mayswind/ezbookkeeping/blob/master/LICENSE)
