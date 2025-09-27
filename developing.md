---
layout: default
title: Developing
nav_order: 9
permalink: /developing
---

# Developing
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Preparation

ezBookkeeping is written in Golang and TypeScript. You should install [Git](https://git-scm.com/), [Golang](https://golang.org/), [GCC](http://gcc.gnu.org/), [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) before you start to develop. The release package and docker image of ezBookkeeping is compiled in Golang 1.24 and Node.js 22.x.

## Download the source code

You can use `git clone` to obtain the latest source code.

    $ git clone https://github.com/mayswind/ezbookkeeping.git

## Develop and debug

The `main` function of backend is in file `/ezbookkeeping.go`. You can specifiy this file to build and run, then ezbookkeeping will listen on port `8080` by default. The other backend files are mostly in the directory `pkg`.

The entry of frontend page is `/src/index-main.ts`, and the homepage will redirect to the desktop or mobile page depending on the visitor's device type. The desktop frontend entry is `/src/desktop-main.ts`, and the mobile frontend entry is `/src/mobile-main.ts`. Almost all frontend files are in the same directory `src`. You can use `npm run serve` to compile frontend files and start a web server which listens on port `8081` and proxy backend request to port `8080`.

After doing the above steps, you can open the url `http://127.0.0.1:8081/` in your browser, and then you can develop and debug your code.

## Building

You can use `build.sh` / `build.bat` script to build frontend files, backend file, full package or docker image.

### Building frontend files

**Linux / macOS**

    $ ./build.sh frontend

**Windows**

    > .\build.bat frontend

or

    PS > .\build.ps1 frontend

The frontend files will be built and be placed in the `dist` directory.

### Building backend file

**Linux / macOS**

    $ ./build.sh backend

**Windows**

    > .\build.bat backend

or

    PS > .\build.ps1 backend

The backend file will be built and be placed in the project directory and the file name is `ezbookkeeping`.

### Building full package

**Linux / macOS**

    $ ./build.sh package -o ezbookkeeping.tar.gz

All the files will be built and be packaged in `ezbookkeeping.tar.gz`.

**Windows**

    > .\build.bat package -o ezbookkeeping.zip

or

    PS > .\build.ps1 package -Output ezbookkeeping.zip

All the files will be packaged in `ezbookkeeping.zip`.

### Building docker image

**Linux**

    $ ./build.sh docker -t ezbookkeeping:release

The docker image will be built and be tagged with `ezbookkeeping:release`.