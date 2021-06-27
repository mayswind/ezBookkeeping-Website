---
layout: default
title: Installation
nav_order: 2
permalink: /installation
---

# Installation
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Ship with docker
Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

**Latest release image**

[![Latest release image](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

    mayswind/ezbookkeeping:latest

**Release image with specific version**

    mayswind/ezbookkeeping:{version}  

**Latest snapshot image**

    mayswind/ezbookkeeping:latest-snapshot

### Run docker image

Example:

    $ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping

After executing this command, ezBookkeeping will use the default configuration to run in backend, and listen on port `8080`. 

The default paths in container:

* **Configuration File**: `/ezbookkeeping/conf/ezbookkeeping.ini`
* **Database File (for `sqlite3`)**: `/ezbookkeeping/data/ezbookkeeping.db`
* **Log File**: `/ezbookkeeping/log/ezbookkeeping.log`

### Store data persistently

The default database type is `sqlite3`, and the database file is stored in `/ezbookkeeping/data/ezbookkeeping.db` in container.
If you want to continue to use `sqlite3` as database and store these data persistently, you can use docker persistent volume or mount a host path to container.

#### Run container with persistent volume

    # Create persistend volume
    $ docker volume create ezbookkeeping-data

    # Run container with persistent volume
    $ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data mayswind/ezbookkeeping

#### Run container with mounting host path

    # Create data directory and modify UID/GID in host
    $ mkdir -p /var/lib/ezbookkeeping
    $ chown 1000:1000 /var/lib/ezbookkeeping

    # Run container with mounting host path
    $ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping:/ezbookkeeping/data mayswind/ezbookkeeping

The user id (UID) and group id (GID) used for running ezBookkeeping is both `1000`, so you should make sure the directories ezBookkeeping use can be read or write by UID/GID `1000` when you want to change directories or mount volumes.

### Customize configuration

If you want to replace the configuration file, you can mount the custom configuration file to `/ezbookkeeping/conf/ezbookkeeping.ini`, or change the configuration path by environment variable `EBK_CONF_PATH`.

If you just want to modify some options, you can just use environment variable to set these value.
All options in the configuration file can be overridden using environment variables with the following name:
`EBK_{SECTION_NAME}_{OPTION_NAME}`.

**ATTENTION**:  
Before you deploy to production, you must generate a random string and set it to `secret_key` to keep your user data safe.

For more information, please visit [Configuration](/configuration).

### Use docker-compose

A full production deployment example (using `mysql` as database):

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
Latest release: 

[![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

Download and extract the package, and execute the following command:

    $ ./ezbookkeeping server run

After executing this command, ezBookkeeping will startup with the default configuration, and listen on port `8080`. If you want to modify configurations, you can use `--conf-path` parameter to specify a custom configuration path or you can modify `conf/config.ini` file directly. For more information, please visit [Configuration](/configuration).

If you have `systemd` and you want to use `systemd` to manage ezBookkeeping, you can create a service unit configuration in `/lib/systemd/system` (Debian/Ubuntu) or `/usr/lib/systemd/system` (CentOS). For example, you can download the [Sample Configuration](https://github.com/mayswind/ezbookkeeping/blob/main/etc/systemd/ezbookkeeping.service) to `/lib/systemd/system/ezbookkeeping.service`, and create a user and a group named `ezbookkeeping`, and modify the path in the configuration according to the actual path.

Then you can start ezBookkeeping by following command:

    $ systemctl start ezbookkeeping

And make ezBookkeeping automatically starts on boot:

    $ systemctl enable ezbookkeeping