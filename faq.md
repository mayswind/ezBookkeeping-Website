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

## Which operating systems does ezBookkeeping support

The operating systems that can run the ezBookkeeping server are the same as those supported by Golang. The table below lists the Golang versions required by each ezBookkeeping release, along with the minimum supported OS versions.

| ezBookkeeping Version | Golang Version | Minimum Supported OS |
| --- | --- | --- |
| v1.1.x ~ v1.2.x | 1.25 | >= Linux Kernel 3.2 <br/> >= Windows 10 / Windows Server 2016 <br/> >= macOS 11 Big Sur |
| v0.8.x ~ v1.0.x | 1.24 | >= Linux Kernel 3.2 <br/> >= Windows 10 / Windows Server 2016 <br/> >= macOS 11 Big Sur |
| v0.7.x | 1.23 | >= Linux Kernel 2.6.32 <br/> >= Windows 10 / Windows Server 2016 <br/> >= macOS 11 Big Sur |
| v0.6.x | 1.22 | >= Linux Kernel 2.6.32 <br/> >= Windows 10 / Windows Server 2016 <br/> >= macOS 10.15 Catalina |
| v0.5.x | 1.21 | >= Linux Kernel 2.6.32 <br/> >= Windows 10 / Windows Server 2016 <br/> >= macOS 10.15 Catalina |
| v0.2.x ~ v0.4.x | 1.20 | >= Linux Kernel 2.6.32 <br/> >= Windows 7 / Windows Server 2008 R2 <br/> >= macOS 10.13 High Sierra |
| v0.1.x | 1.16 | >= Linux Kernel 2.6.32 <br/> >= Windows 7 / Windows Server 2008 R2 <br/> >= macOS 10.12 Sierra |

The Linux versions listed above apply only to the amd64, arm64, and armv6/v7 architectures. For other architectures, please refer to the official Golang documentation. For more details on supported operating systems, please visit the official Golang documentation: [https://go.dev/wiki/MinimumRequirements](https://go.dev/wiki/MinimumRequirements).

## How much system resources does ezBookkeeping use?

ezBookkeeping is a lightweight software written in Golang that needs very few resources. The ezBookkeeping binary file and its dependent static files take up about 40 MB of disk space, and it only requires about 30MB of memory when running on Linux/amd64 platform.

## Why double-clicking `ezbookkeeping.exe` on Windows doesn't launch the application

ezBookkeeping is not a desktop application, and its's a self-hosted server program. You can start the server program by following the steps in the [Installation](/installation) Guide. Once the server is running, you can access ezBookkeeping through any web browsers on any of your devices.

Of course, if you prefer, you can also run the ezBookkeeping server program on your personal computer and access it locally through your web browser.

## ezBookkeeping reports "permission denied" on startup

The `data` directory (when using the SQLite database), the `storage` directory (when using the `local_filesystem` object storage type), and the `log` directory must all be readable and writable by the user running the ezBookkeeping process. Additionally, the `conf/ezbookkeeping.ini` file must be readable by that same user.

When running via a Docker image, the ezBookkeeping process inside the container runs as a user with UID **1000** and GID **1000**. When mounting external directories into the container, make sure those directories grant access permissions to this UID/GID.

## Where ezBookkeeping stores its files

Most of ezBookkeeping's data is stored in the database, while user avatars and transaction pictures are stored in object storage.

### Database Files

If you're using SQLite as the database, the default database file is located at `data/ezbookkeeping.db` in the same directory as the ezBookkeeping executable file. When running via a Docker image, the default database path inside the container is `/ezbookkeeping/data/ezbookkeeping.db`. You can change this path in the configuration file. For details, see `db_path` in [Configuration - Database](/configuration#database).

If you're using MySQL or PostgreSQL, database files are managed by the database system itself.

### Object Storage Files

If you're using `local_filesystem` object storage type, object storage files are stored by default in the `storage` directory next to the ezBookkeeping executable file. When running via a Docker image, the default path inside the container is `/ezbookkeeping/storage/`. You can change this path in the configuration file. For details, see `local_filesystem_path` in [Configuration - Object Storage](/configuration#object-storage).

If you're using `minio` or `webdav` object storage type, files are managed by the object storage system.

## How to migrate ezBookkeeping data

If you're using MySQL or PostgreSQL as database along with either the `minio` or `webdav` object storage type (or if you're not storing user avatars or transaction pictures), then ezBookkeeping itself is stateless and requires no data migration.

### Migrating the Database

1. SQLite → SQLite: Simply copy the `.db` file from the database directory (default: `data`) to the new location.
2. Other combinations (e.g. SQLite → MySQL / PostgreSQL or vice versa): After initializing a new database with ezBookkeeping, use third-party tools to migrate the data from the old database to the new one.

ezBookkeeping recommends using the SQLite database only for testing purposes. If you decide to use ezBookkeeping, it's best to use a MySQL or PostgreSQL database to avoid potential migration costs later.

### Migrating Object Storage

1. `local_filesystem` → `local_filesystem`: Simply copy all files from the object storage directory (default: `storage`) to the new location.
2. Other combinations (e.g. `local_filesystem` → `minio` / `webdav` or vice versa): After initializing the new object storage with ezBookkeeping, use third-party tools to synchronize the stored files.

## Does ezBookkeeping provide a desktop or mobile app

ezBookkeeping is a self-hosted software, accessed entirely through your browser. It doesn't offer a standalone desktop or mobile app. ezBookkeeping offers tailored user interfaces for mobile and desktop devices. On your phone, you can add ezBookkeeping to your home screen, and it works and feels just like a native mobile app.

## How to add ezBookkeeping to home screen of mobile phone

ezBookkeeping supports PWA (Progressive Web Apps). You can add it to your phone's screen using your system browser. The system will automatically cache the necessary static files. When you open ezBookkeeping directly from your phone's home screen, it will behave like a native app.

For detailed steps, see the [guide](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif).

## Why can't add a transaction

In ezBookkeeping, every transaction must set an account and a transaction category. Transaction categories are organized by transaction type, including expense category, income category and transfer category, and each transaction must be assigned a secondary category under one of these types. If you haven't yet created any accounts or secondary categories for the relevant transaction type, you won't be able to create a new transaction.

## How to record a refund

You can create an expense transaction with a negative amount.

## How to record transfer fees

You can create a separate expense transaction with the amount equal to the transfer fee.

## How to record money lent to others

You can create an account which account category is "Receivables", then create a transfer transaction from your expense account to this receivables account. If you've created the default transaction categories in ezBookkeeping, you can select the transaction type "Loan & Debt > Lending Money".

## How to modify an account balance

ezBookkeeping only allows users to set an initial balance when creating a new account. Once the account is created, users cannot directly modify its balance. To adjust an account's balance, you need to record an expense or income transaction.

Alternatively, you can update the ending balance in the Reconciliation Statement page. The system will automatically calculate the difference between the expected ending balance and the actual balance, then populate the amount for you on the new transaction page.

## Unable to set currency when adding a transaction

In ezBookkeeping, currency is associated with accounts, not with individual transactions. Each account has exactly one currency. If your account in the real-world supports multiple currencies, you can set its account type to "Multiple Sub-accounts", and create a separate sub-account for each currency.

## How to change the default account when adding a transaction

Go to the User Profile page, where you can update the default account used when creating new transactions.

## How to create a transaction using a template

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page. A list of your saved transaction templates will appear, and you can tap a template to create a transaction based on it.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page. A dropdown menu with your saved templates will appear, and you can click a template to create a transaction based on it.

## How to create a transaction using AI image recognition

First, you need to configure the large language model (LLM) settings. In the `llm` section, enable `transaction_from_ai_image_recognition` to allow creating transactions via AI image recognition. Then, in the `llm_image_recognition` section, set the `llm_provider`, along with the corresponding provider's API key, model ID, and other required settings. Make sure the specified model supports image recognition. For details, see [Configuration - Large Language Model](/configuration#large-language-model).

After setting up the large language model configuration:

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page, then tap "AI Image Recognition" from the list that appears.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page, then click "AI Image Recognition" from the dropdown menu.

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

## How to modify the content of verification or password reset emails

You can directly edit the `.tmpl` files located in the `templates/email/` directory of the ezBookkeeping. If you're deploying ezBookkeeping with Docker, you can mount your modified files to this directory instead. Make sure the files are readable by the user running the ezBookkeeping process.

## How to modify prompts of AI image recognition and other LLM (Large Language Model) requests

You can directly edit the `.tmpl` files located in the `templates/prompt/` directory of the ezBookkeeping. If you're deploying ezBookkeeping with Docker, you can mount your modified files to this directory instead. Make sure the files are readable by the user running the ezBookkeeping process.
