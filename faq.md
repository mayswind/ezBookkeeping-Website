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

## Scheduled transaction does not create transaction automatically

In ezBookkeeping, a scheduled transaction will automatically create a new transaction when its scheduled date arrives. The generated transaction is identical to the one created by the user. No transaction is created before the scheduled date. To ensure this works properly, make sure the ezBookkeeping server is running continuously.

## Why can't display the uploaded user avatar or transaction picture

Make sure the `domain` setting in your configuration is correct. If you're using a reverse proxy such as Nginx, and the access protocol or port number differs from what the ezBookkeeping server provides, you also need to update the `root_url` setting. For details, see [Configuration - Web Server](/configuration#web-server). ezBookkeeping uses these settings to generate URLs for uploaded user avatars and transaction images.

If the images still don't appear after verifying these settings, you can use the developer tool in your browser to check whether the image URLs match the configured addresses. If they don't, review the configuration values shown in ezBookkeeping's startup logs to ensure they match your expected settings. If not, adjust the configuration or restart ezBookkeeping.

## Why doesn't the total amount include the amount in a specific currency

When calculating the total amount across different currencies, ezBookkeeping relies on exchange rate data. Make sure that the user's default currency and all currencies involved in the calculation are included in the current exchange rate data. For details on configuring exchange rate sources, see [Exchange Rates](/exchange_rates).

## Why isn't the record removed from the database after deleting a transaction

To make it easier to recover from accidental deletions, ezBookkeeping uses logical deletion for transactions, accounts, categories, and tags. When an item is deleted, it's only marked as deleted in the database, and the record itself is not physically removed.

## Why isn't the picture file removed from object storage after deleting a transaction picture

To make it easier to recover from accidental deletions, ezBookkeeping uses logical deletion for transaction pictures. When a transaction picture is deleted, its record in the database is only marked as deleted, and the record itself is not physically removed. Additionally, the transaction picture file in object storage is also retained.

## Why can't add a transaction

In ezBookkeeping, every transaction must set an account and a transaction category. Transaction categories are organized by transaction type, including expense category, income category and transfer category, and each transaction must be assigned a secondary category under one of these types. If you haven't yet created any accounts or secondary categories for the relevant transaction type, you won't be able to create a new transaction.

## How to record a refund

You can create an expense transaction with a negative amount.

## How to create a transaction using a template

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page. A list of your saved transaction templates will appear, and you can tap a template to create a transaction based on it.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page. A dropdown menu with your saved templates will appear, and you can click a template to create a transaction based on it.

## How to create a transaction using AI image recognition

First, you need to configure the large language model (LLM) settings. In the `llm` section, enable `transaction_from_ai_image_recognition` to allow creating transactions via AI image recognition. Then, in the `llm_image_recognition` section, set the `llm_provider`, along with the corresponding provider's API key, model ID, and other required settings. Make sure the specified model supports image recognition. For details, see [Configuration - Large Language Model](/configuration#large-language-model).

After setting up the large language model configuration:

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page, then tap "AI Image Recognition" from the list that appears.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page, then click "AI Image Recognition" from the dropdown menu.