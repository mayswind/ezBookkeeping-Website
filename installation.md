---
layout: default
title: Installation
nav_order: 2
permalink: /installation
---

# Installation
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Ship with docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

### Latest release image

> mayswind/ezbookkeeping:latest

### Release image with specific version

> mayswind/ezbookkeeping:{version}  

### Latest snapshot image

> mayswind/ezbookkeeping:latest-snapshot

### Run docker image via docker command line

Example:

    $ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping

After executing this command, ezBookkeeping will use the default configuration to run in backend, and listen on port 8080. The user id (UID) and group id (GID) used for running ezBookkeeping is both 1000, so you should make sure the directories ezBookkeeping use can be read or write by UID/GID 1000 when you want to change directories or mount volumes. 

The default path in container:

* **Configuration File**: `/ezbookkeeping/conf/ezbookkeeping.ini`
* **Data (for sqlite3 database)**: `/ezbookkeeping/data`
* **Log**: `/ezbookkeeping/log`

If you want to replace the configuration file, you can mount the custom configuration file to `/ezbookkeeping/conf/ezbookkeeping.ini`, or change the configuration path by environment variable `EBK_CONF_PATH`.

If you just want to modify some options, you can just use environment variable to set these value.

For more information, please visit [Configuration](/configuration).

### Run docker images via docker-compose

A Full Example (using mysql as database):

```
version: "2"
services:
  ezbookkeeping:
    image: mayswind/ezbookkeeping
    container_name: ezbookkeeping
    hostname: "ezbookkeeping"
    ports:
      - "8080:8080"
    environment:
      - "EBK_SERVER_DOMAIN=ezbookkeeping.yourdomain"
      - "EBK_SERVER_ENABLE_GZIP=true"
      - "EBK_DATABASE_TYPE=mysql"
      - "EBK_DATABASE_HOST=mysql:3306"
      - "EBK_DATABASE_NAME=ezbookkeeping"
      - "EBK_DATABASE_USER=ezbookkeeping"
      - "EBK_DATABASE_PASSWD=ezbookkeeping"
      - "EBK_LOG_MODE=file"
      - "EBK_SECURITY_SECRET_KEY=its_should_be_a_random_string"
    volumes:
      - "/etc/localtime:/etc/localtime:ro"
      - "/var/log/ezbookkeeping:/var/log/ezbookkeeping" # make sure the UID:GID is 1000:1000
```

## Install from binary
Latest release: [https://github.com/mayswind/ezbookkeeping/releases](https://github.com/mayswind/ezbookkeeping/releases)

    $ ./ezbookkeeping server run
