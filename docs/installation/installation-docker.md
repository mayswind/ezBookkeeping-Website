---
title: "Run with Docker"
---

# Run with Docker

Visit [Docker Hub](https://hub.docker.com/r/mayswind/ezbookkeeping) to see all images and tags.

**Latest release image**

[![Latest release image](https://img.shields.io/docker/v/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://hub.docker.com/r/mayswind/ezbookkeeping)

`mayswind/ezbookkeeping:latest`

**Release image with specific version**

`mayswind/ezbookkeeping:{version}`

**Latest daily build (snapshot) image**

`mayswind/ezbookkeeping:latest-snapshot`

## Run docker image

Example:

```shell
$ docker run -d -p8080:8080 --name ezbookkeeping mayswind/ezbookkeeping
```

After executing this command, ezBookkeeping will use the default configuration to run in backend, and listen on port `8080`.

The default paths in container:

* **Configuration File**: `/ezbookkeeping/conf/ezbookkeeping.ini`
* **Database File (for `sqlite3` database)**: `/ezbookkeeping/data/ezbookkeeping.db`
* **Log File**: `/ezbookkeeping/log/ezbookkeeping.log`
* **Object Storage Root Path (for `local_filesystem` object storage)**: `/ezbookkeeping/storage/`

## Store data persistently

The default database type is `sqlite3`, and the database file is stored in `/ezbookkeeping/data/ezbookkeeping.db` in container.
If you want to continue to use `sqlite3` as database and store these data persistently, you can use Docker persistent volume or mount a host path to container.
In addition, the default object storage uses the local file system, and the default path is `/ezbookkeeping/storage/`. If you use the local file system to store object data (e.g. pictures uploaded by users), you also need to use Docker persistent volume or mount a host path to container.

### Run container with persistent volume

```shell
# Create persistent volume
$ docker volume create ezbookkeeping-data
$ docker volume create ezbookkeeping-storage

# Run container with persistent volume
$ docker run -d -p8080:8080 --name ezbookkeeping -v ezbookkeeping-data:/ezbookkeeping/data -v ezbookkeeping-storage:/ezbookkeeping/storage mayswind/ezbookkeeping
```

### Run container with mounting host path

```shell
# Create data directory and modify UID/GID in host
$ mkdir -p /var/lib/ezbookkeeping/data
$ mkdir -p /var/lib/ezbookkeeping/storage
$ chown 1000:1000 /var/lib/ezbookkeeping/data
$ chown 1000:1000 /var/lib/ezbookkeeping/storage

# Run container with mounting host path
$ docker run -d -p8080:8080 --name ezbookkeeping -v /var/lib/ezbookkeeping/data:/ezbookkeeping/data -v /var/lib/ezbookkeeping/storage:/ezbookkeeping/storage mayswind/ezbookkeeping
```

The user id (UID) and group id (GID) used for running ezBookkeeping is both `1000`, so you should make sure the directories ezBookkeeping use can be read or write by UID/GID `1000` when you want to change directories or mount volumes.

## Customize configuration

If you want to replace the configuration file, you can mount the custom configuration file to `/ezbookkeeping/conf/ezbookkeeping.ini`, or change the configuration path by environment variable `EBK_CONF_PATH`.

If you just want to modify some options, you can just use environment variable to set these value.
All options in the configuration file can be overridden using environment variables with the following name: `EBK_{SECTION_NAME}_{OPTION_NAME}`. In addition, ezBookkeeping supports loading specific configuration values from designated files via environment variables. For more details, see [Configuration](/configuration/).

**ATTENTION**:
Before you deploy to production, you must generate a random string and set it to `secret_key` to keep your user data safe. You can get a random secret key by executing `ezbookkeeping security gen-secret-key`.

In addition, you also need to set the `domain` in the settings to the domain name you actually access, otherwise the url in the email, as well as the user avatar, transaction picture and other url will be incorrect. If the protocol or port you actually access is different from the ezBookkeping configuration, you also need to modify `root_url` to the actual access address (for example, using Nginx as the reverse proxy).

For more information, please visit [Configuration](/configuration/).

## Use docker-compose

A full production deployment example (using `mysql` as database):

```yaml:line-numbers
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
      - "/var/lib/ezbookkeeping/storage:/ezbookkeeping/storage" # make sure the UID:GID is 1000:1000
      - "/var/log/ezbookkeeping:/ezbookkeeping/log" # make sure the UID:GID is 1000:1000
```

If you're interested, you can take a look at the [docker-compose file](/configurations/demo/docker-compose.yml){target=_blank} and [nginx configuration file](/configurations/demo/ezbookkeeping.demo.conf){target=_blank} behind [https://ezbookkeeping-demo.mayswind.net](https://ezbookkeeping-demo.mayswind.net).
