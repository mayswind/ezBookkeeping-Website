---
layout: default
title: FAQ
nav_order: 11
permalink: /faq
---

# FAQ
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

This page lists some frequently asked questions and their answers.

If you don't find what you're looking for here, you can check out [GitHub Discussions](https://github.com/mayswind/ezbookkeeping/discussions) or [GitHub Issues](https://github.com/mayswind/ezbookkeeping/issues) for more information.

## Where ezBookkeeping stores its files

### Database Files

If you're using SQLite as the database, the default database file is located at `data/ezbookkeeping.db` in the same directory as the ezBookkeeping executable file. When running via a Docker image, the default database path inside the container is `/ezbookkeeping/data/ezbookkeeping.db`. You can change this path in the configuration file. For details, see `db_path` in [Configuration - Database](/configuration#database).

If you're using MySQL or PostgreSQL, database files are managed by the database system itself.

### Object Storage Files

If you're using `local_filesystem` object storage type, object storage files are stored by default in the `storage` directory next to the ezBookkeeping executable file. When running via a Docker image, the default path inside the container is `/ezbookkeeping/storage/`. You can change this path in the configuration file. For details, see `local_filesystem_path` in [Configuration - Object Storage](/configuration#object-storage).

If you're using `minio` or `webdav` object storage type, files are managed by the object storage system.

## ezBookkeeping reports "Permission Denied" on startup

The `data` directory (when using the SQLite database), the `storage` directory (when using the `local_filesystem` object storage type), and the `log` directory must all be readable and writable by the user running the ezBookkeeping process. Additionally, the `conf/ezbookkeeping.ini` file must be readable by that same user.

When running via a Docker image, the ezBookkeeping process inside the container runs as a user with UID **1000** and GID **1000**. When mounting external directories into the container, make sure those directories grant access permissions to this UID/GID.

## How to migrate ezBookkeeping data

### Migrating the Database

1. SQLite → SQLite: Simply copy the `.db` file from the database directory (default: `data`) to the new location.
2. Other combinations (e.g. SQLite → MySQL / PostgreSQL or vice versa): After initializing a new database with ezBookkeeping, use third-party tools to migrate the data from the old database to the new one.

### Migrating Object Storage

1. `local_filesystem` → `local_filesystem`: Simply copy all files from the object storage directory (default: `storage`) to the new location.
2. Other combinations (e.g. `local_filesystem` → `minio` / `webdav` or vice versa): After initializing the new object storage with ezBookkeeping, use third-party tools to synchronize the stored files.

## Unable to set currency when adding a transaction

In ezBookkeeping, currency is associated with accounts, not with individual transactions. Each account has exactly one currency. If your account in the real-world supports multiple currencies, you can set its account type to "Multiple Sub-accounts", and create a separate sub-account for each currency.
