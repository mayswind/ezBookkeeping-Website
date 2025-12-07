---
title: FAQ
---

# FAQ

This page lists some frequently asked questions and their answers.

If you don't find what you're looking for here, you can check out [GitHub Discussions](https://github.com/mayswind/ezbookkeeping/discussions) or [GitHub Issues](https://github.com/mayswind/ezbookkeeping/issues) for more information.

## Which operating systems does ezBookkeeping support

The operating systems that can run the ezBookkeeping server are the same as those supported by Golang. The table below lists the Golang versions required by each ezBookkeeping release, along with the minimum supported OS versions.

| ezBookkeeping Version | Golang Version | Minimum Supported OS |
| --- | --- | --- |
| v1.1.x and later | 1.25 | ≥ Linux Kernel 3.2 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.8.x ~ v1.0.x | 1.24 | ≥ Linux Kernel 3.2 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.7.x | 1.23 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.6.x | 1.22 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 10.15 Catalina |
| v0.5.x | 1.21 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 10.15 Catalina |
| v0.2.x ~ v0.4.x | 1.20 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 7 / Windows Server 2008 R2 <br/> ≥ macOS 10.13 High Sierra |
| v0.1.x | 1.16 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 7 / Windows Server 2008 R2 <br/> ≥ macOS 10.12 Sierra |

The Linux versions listed above apply only to the amd64, arm64, and armv6/v7 architectures. For other architectures, please refer to the official Golang documentation. For more details on supported operating systems, please visit the official Golang documentation: [https://go.dev/wiki/MinimumRequirements](https://go.dev/wiki/MinimumRequirements).

If you've already deployed the ezBookkeeping server program, you can access ezBookkeeping directly through your web browser. The table below lists the minimum browser versions required for each ezBookkeeping release.

| ezBookkeeping Version | Minimum Chrome Version | Minimum Edge Version | Minimum Firefox Version | Minimum Safari Version |
| --- | --- | --- | --- | --- |
| v1.1.x and later | ≥ 91 | ≥ 91 | ≥ 91 | ≥ 15.4 |
| v0.3.x ~ v1.0.x | ≥ 87 | ≥ 88 | ≥ 78 | ≥ 14.0 |

## How much system resources does ezBookkeeping use

ezBookkeeping is a lightweight software written in Golang that needs very few resources. The ezBookkeeping binary file and its dependent static files take up about 50 MB of disk space, and it only requires about 30MB of memory when running on Linux/amd64 platform.

## Why double-clicking `ezbookkeeping.exe` on Windows doesn't launch the application

ezBookkeeping is not a desktop application, and its's a self-hosted server program. You can start the server program by following the steps in the [Installation](/installation/) Guide. Once the server is running, you can access ezBookkeeping through any web browsers on any of your devices.

Of course, if you prefer, you can also run the ezBookkeeping server program on your personal computer and access it locally through your web browser.

## What configuration settings are required for ezBookkeeping

ezBookkeeping is ready to use out of the box, so it can run without any additional configuration. However, for production use, you should properly configure the following key settings:

1. `secret_key` in `security` section (environment variable `EBK_SECURITY_SECRET_KEY`): Set this to a random string. You can generate one using the ezBookkeeping CLI command `ezbookkeeping security gen-secret-key`
2. `domain` in `server` section (environment variable `EBK_SERVER_DOMAIN`): Set this to the domain name or IP address users will use to access (e.g. `ezbookkeeping-demo.mayswind.net` or `192.168.1.2`). If this setting is incorrect, user avatars and transaction pictures may fail to display, and links in ezBookkeeping's outgoing emails may be incorrect

If you plan to use a reverse proxy such as Nginx, and the protocol or port exposed to users differs from the ezBookkeeping web server's settings, also configure `root_url` in `server` section (environment variable `EBK_SERVER_ROOT_URL`), e.g. `https://ezbookkeeping-demo.mayswind.net/`.

If you plan to use MySQL as the database, set `type` in `database` section (environment variable `EBK_DATABASE_TYPE`) to `mysql`, and set database host `host` (e.g. `mysql.domain:3306` or `/var/run/mysqld/mysqld.sock`), database name `name`, database user `user` and user password `passwd`.

If you plan to use PostgreSQL as the database, set `type` in `database` section (environment variable `EBK_DATABASE_TYPE`) to `postgres`, and set database host `host` (e.g. `pg.domain:5432` or `/var/run/postgresql`), database name `name`, database user `user` and user password `passwd`.

If you plan to store user avatars or transaction pictures, make sure to configure the settings under [Configuration - Object Storage](/configuration/#object-storage). Additionally, ezBookkeeping allows customization of the exchange rate source, map provider, and LLM (Large Language Model) provider. For more details, see [Configuration](/configuration/).

## ezBookkeeping reports "permission denied" on startup

The `data` directory (when using the SQLite database), the `storage` directory (when using the `local_filesystem` object storage type), and the `log` directory must all be readable and writable by the user running the ezBookkeeping process. Additionally, the `conf/ezbookkeeping.ini` file must be readable by that same user.

When running via a Docker image, the ezBookkeeping process inside the container runs as a user with UID **1000** and GID **1000**. When mounting external directories into the container, make sure those directories grant access permissions to this UID/GID.

## Where ezBookkeeping stores its files

Most of ezBookkeeping's data is stored in the database, while user avatars and transaction pictures are stored in object storage.

### Database Files

If you're using SQLite as the database, the default database file is located at `data/ezbookkeeping.db` in the same directory as the ezBookkeeping executable file. When running via a Docker image, the default database path inside the container is `/ezbookkeeping/data/ezbookkeeping.db`. You can change this path in the configuration file. For details, see `db_path` in [Configuration - Database](/configuration/#database).

If you're using MySQL or PostgreSQL, database files are managed by the database system itself.

### Object Storage Files

If you're using `local_filesystem` object storage type, object storage files are stored by default in the `storage` directory next to the ezBookkeeping executable file. When running via a Docker image, the default path inside the container is `/ezbookkeeping/storage/`. You can change this path in the configuration file. For details, see `local_filesystem_path` in [Configuration - Object Storage](/configuration/#object-storage).

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

## What is the default user in ezBookkeeping

When you launch ezBookkeeping server for the first time, the database of ezBookkeeping is empty, and you'll need to register a new user. ezBookkeeping does not have a default user.

## How assets and liabilities are calculated in ezBookkeeping

In ezBookkeeping, asset and liability accounts are categorized based on their account categories. Cash, Checking Account, Savings Account, Virtual Account, Receivables, Certificate of Deposit, and Investment Account are treated as asset accounts, with their balances counted as assets. Credit Card and Debt Account are treated as liability accounts, with their outstanding balances counted as liabilities.

## What do "Balance" and "Outstanding Balance" mean when creating an account?

When creating an asset account, you can set its balance, which represents the amount of assets available in that account (a positive number indicates funds you own).

When creating a liability account, you can set its outstanding balance, which represents the amount of debt associated with that account (a positive number indicates money you owe).

## What is the purpose of the "Balance Time" when creating an account?

In ezBookkeeping, every transaction must have a transaction time. If you set an balance or outstanding balance when creating an account, you also need to specify the time of that balance modification transaction. Any future transactions added to the account cannot have a transaction time earlier than this time.

## What is the purpose of the "Statement Date" when creating a credit card account?

If a statement date is set for a credit card account, you can filter transactions for that account by selecting either the current billing cycle or previous billing cycle date range in the transaction list.

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

## How to paste the transaction amount from the clipboard when editing a transaction on mobile version

In iOS, the "Paste" action must be triggered by the system control. When you tap the amount on the amount number pad in ezBookkeeping, the system's "Paste" button (as shown below) will appear, just tap it to paste. In other operating systems, you can open the menu in the transaction edit page to tap the paste option.

[![How to paste an amount](/images/en/number_pad_paste.png)](/images/en/number_pad_paste.png){target=_blank}

## How to change the default account when adding a transaction

Go to the User Profile page, where you can update the default account used when creating new transactions.

## How to change the color of amounts

Go to the User Profile page, where you can change the color of expense and income amounts.

## What does the "+" sign after the monthly expense and income amounts mean in the mobile transaction list?

In the mobile version, the transaction list loads data on demand by default. The monthly expense and income amounts displayed after each month are calculated based on the transactions that have been loaded so far. When the data for that month hasn't been fully loaded, a "+" sign appears to indicate that the displayed totals are incomplete. If you want to view the full monthly total expense and income amounts, you can select a full month in the date filter. When filter a full month in transaction list, ezBookkeeping always loads all transactions data for that month.

## How to view transaction time in the default time zone

In ezBookkeeping, both the transaction list and the transaction detail page display transaction times in the transaction's time zone by default.

In the mobile version, you can tap the transaction time on the transaction detail page to switch between the transaction's time zone and the default time zone.

In the desktop version, you can hover over the transaction time on the transaction list page to view it in the default time zone.

## How to edit or delete transactions and accounts on mobile version

In the mobile version of ezBookkeeping, you can swipe left on any item in the transaction or account list page to reveal the "Edit" and "Delete" buttons. Tap "Edit" to open the editing page.

[![How to edit transaction](/images/en/how_to_edit_transaction.png)](/images/en/how_to_edit_transaction.png){target=_blank}

## How to quickly hide accounts, categories, or tags on mobile version

In the mobile version of ezBookkeeping, you can long-press on any item in the account, category or tag list page, and swipe right on this item to quickly toggle the hidden status.

## How to create a transaction using a template

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page. A list of your saved transaction templates will appear, and you can tap a template to create a transaction based on it.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page. A dropdown menu with your saved templates will appear, and you can click a template to create a transaction based on it.

## How to create a transaction using AI image recognition

First, you need to configure the large language model (LLM) settings. In the `llm` section, enable `transaction_from_ai_image_recognition` to allow creating transactions via AI image recognition. Then, in the `llm_image_recognition` section, set the `llm_provider`, along with the corresponding provider's API key, model ID, and other required settings. Make sure the specified model supports image recognition. For details, see [Configuration - Large Language Model](/configuration/#large-language-model).

After setting up the large language model configuration:

1. Mobile version: Long-press the create transaction button on the bottom navigation bar in the main page, then tap "AI Image Recognition" from the list that appears.
2. Desktop version: Hover over the "Add" transaction button on the transaction list page, then click "AI Image Recognition" from the dropdown menu.

## How "Outflows By Account", "Expense By Account", "Inflows By Account", "Income By Account", "Net Cash Flow", "Net Income" and "Net Income" are calculated in statistics & analysis

1. Outflows By Account (in categorical analysis and trend analysis): Includes expense and transfers out transactions from the selected accounts
2. Expense By Account (in categorical analysis and trend analysis): Includes expense transactions from the selected accounts
3. Inflows By Account (in categorical analysis and trend analysis): Includes income and transfers in transactions from the selected accounts
4. Income By Account (in categorical analysis and trend analysis): Includes income transactions from the selected accounts
5. Net Cash Flow (in trend analysis): Includes expenses, transfers out, income and transfers in transactions for the selected accounts
6. Net Income (in trend analysis): Includes income and expense transactions from the selected accounts
7. Net Worth (in asset trends): The balance of the selected asset accounts minus the outstanding balance of the liability accounts

## Scheduled transaction does not create transaction automatically

In ezBookkeeping, a scheduled transaction will automatically create a new transaction when its scheduled date arrives. The generated transaction is identical to the one created by the user. No transaction is created before the scheduled date. To ensure this works properly, make sure the ezBookkeeping server is running continuously.

## Why can't display the uploaded user avatar or transaction picture

Make sure the `domain` setting in your configuration is correct. If you're using a reverse proxy such as Nginx, and the access protocol or port number differs from what the ezBookkeeping server provides, you also need to update the `root_url` setting. For details, see [Configuration - Web Server](/configuration/#web-server). ezBookkeeping uses these settings to generate URLs for uploaded user avatars and transaction images.

If the images still don't appear after verifying these settings, you can use the developer tool in your browser to check whether the image URLs match the configured addresses. If they don't, review the configuration values shown in ezBookkeeping's startup logs to ensure they match your expected settings. If not, adjust the configuration or restart ezBookkeeping.

## Why doesn't the total amount include the amount in a specific currency

When calculating the total amount across different currencies, ezBookkeeping relies on exchange rate data. Make sure that the user's default currency and all currencies involved in the calculation are included in the current exchange rate data. For details on configuring exchange rate sources, see [Exchange Rates](/exchange_rates/).

## Why amounts in certain currencies are missing from Statistics & Analytics

On the Statistics & Analytics page, ezBookkeeping converts all amounts into your default currency for calculation. If an account's currency is not included in your current exchange rate data, ezBookkeeping cannot convert those transactions and therefore excludes them from the result. You can choose an exchange rate data source that includes all the currencies used by your accounts, and refer to [Exchange Rates](/exchange_rates/) for details on configuring exchange rate sources.

## Why isn't the record removed from the database after deleting a transaction

To make it easier to recover from accidental deletions, ezBookkeeping uses logical deletion for transactions, accounts, categories, and tags. When an item is deleted, it's only marked as deleted in the database, and the record itself is not physically removed.

## Why isn't the picture file removed from object storage after deleting a transaction picture

To make it easier to recover from accidental deletions, ezBookkeeping uses logical deletion for transaction pictures. When a transaction picture is deleted, its record in the database is only marked as deleted, and the record itself is not physically removed. Additionally, the transaction picture file in object storage is also retained.

## How to modify the content of verification or password reset emails

You can directly edit the `.tmpl` files located in the `templates/email/` directory of the ezBookkeeping. If you're deploying ezBookkeeping with Docker, you can mount your modified files to this directory instead. Make sure the files are readable by the user running the ezBookkeeping process. Changes will take effect after restarting ezBookkeeping server program.

## How to modify prompts of AI image recognition and other LLM (Large Language Model) requests

You can directly edit the `.tmpl` files located in the `templates/prompt/` directory of the ezBookkeeping. If you're deploying ezBookkeeping with Docker, you can mount your modified files to this directory instead. Make sure the files are readable by the user running the ezBookkeeping process. Changes will take effect after restarting ezBookkeeping server program.

## What third-party services does ezBookkeeping use, and does it access my personal data

ezBookkeeping relies on third-party services for features such as exchange rates, maps and LLM (Large Language Model) service. Details are as follows:

1. Exchange rate data: When user uses exchange rate data in ezBookkeeping, the ezBookkeeping server program retrieves data from the exchange rate data provider you've configured. This process does not include any information about the current user, user's device or user's browser
2. Maps: When user uses the map feature in ezBookkeeping to view transaction locations, user's browser or ezBookkeeping server program will retrieves map data from the third-party provider. During this process, the User-Agent of user's browser is included, which contains information about user's device and browser, but does not include specific location or any ezBookkeeping user data. If your map provider is set to Google Map, Baidu Map or Amap, ezBookkeeping uses the provider's official JavaScript SDK. While ezBookkeeping itself does not share any user information with these services, the map providers may collect data about user's browser, device and location. For details, please refer to the map provider's privacy policy
3. Large Language Model - AI Image Recognition: When user uses AI image recognition feature in ezBookkeeping, ezBookkeeping sends the uploaded receipt image along with all the user's transaction category names, account names and transaction tag names to the LLM provider. By default, the AI image recognition feature in ezBookkeeping is disabled, and ezBookkeeping recommends using a self-hosted LLM service. If you choose to use a third-party LLM provider, please be aware of potential privacy risks and take steps to minimize data exposure (e.g. by removing sensitive information from receipt images before uploading and avoiding storing sensitive data in transaction category names, account names or transaction tag names)
