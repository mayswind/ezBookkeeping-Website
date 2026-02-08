---
title: "Basic Usage"
---

# Basic Usage

After deploying the ezBookkeeping server, you can access ezBookkeeping through a web browser. For details on supported browsers, please refer to [System Requirements](/installation/system_requirements).

## Register a New User

When ezBookkeeping runs for the first time, no users are created automatically. You need to register a new user through the registration page. After successful registration, you can log in to ezBookkeeping with that user account.

When registering a new user, ezBookkeeping only requires setting the user's language, default currency and the first day of the week. In fact, ezBookkeeping supports many additional localization settings, such as the first day of the fiscal year, date format, time format, number formatting, currency display format and expense / income amount colors. You can adjust these settings after logging in on the "User Profile" page.

## Create an Account

After your first login, you need to create an account to start recording your financial data. On the "Accounts" page, click the "Add" button to open the Add Account page / dialog, where you can set the account category, name, initial balance and other details to complete the setup. ezBookkeeping recommends mapping each account to a real-world account (for example, a bank account with its own account number).

ezBookkeeping supports multiple account categories, including cash, checking, credit cards and more. Credit card and debt accounts track outstanding balances (positive values indicate amounts owed, and are recorded as liabilities), while other account categories track balances (positive values indicate owned funds and are recorded as assets).

In addition, credit card accounts support setting a statement date. If a statement date is configured, you can directly filter transactions for the current billing cycle and the previous billing cycle from the transaction list page after selecting that account.

> [!NOTE] TIP
> If you need to modify an account later, you can hover over an account on the Accounts page in the desktop version and click the edit icon that appears to open the account edit dialog. Alternatively, in the mobile version, swipe left on the account on the Accounts page to reveal the Edit button, then tap Edit to enter the edit page.

## Create Transaction Categories

When registering a new user, you can choose whether to automatically create default transaction categories. If you choose not to create them at that time, you can still create and manage transaction categories on the "Transaction Categories" page.

ezBookkeeping supports a two-level category structure. You must first create a primary category, and then create secondary categories under it. When creating transactions whether expense, income or transfer, you are required to assign a secondary transaction category.

## Create Transactions

After creating accounts and transaction categories, you can start recording transactions. From the main screen or the "Transaction Details" page, click the "Add" button to open the Add Transaction page / dialog. There, you can set the transaction type (expense, income or transfer), amount, category, account, transaction time to create transaction. In addition to these required fields, ezBookkeeping also supports recording the transaction's geographic location, images, tags and descriptions.

ezBookkeeping allows you to assign multiple tags to each transaction. If you need to record information such as merchants, payers, payees or project, you can do so using tags. Tags support grouping, allowing you to organize different types of tags into separate tag groups.

## View Transactions

On the "Transaction Details" page, you can view transactions by timeline or calendar. You can filter transactions by date range, category, account, amount, tags, and descriptions to find specific records.

## Reconciliation Statements

On the "Accounts" page, select an account and choose the "Reconciliation Statement" feature. In the reconciliation statement page / dialog, you can set a date range to view the account balance after each transaction. You can also view balance trends for the selected period in chart form.

> [!NOTE] TIP
> For clarity and consistency, ezBookkeeping only allows users to set an initial balance when creating a new account. Therefore, if you need to adjust an account's balance later, you need to record an expense or income transaction. To simplify this process, the Reconciliation Statements page provides an Update Closing Balance feature. The system will automatically calculate the difference between the expected closing balance and the actual balance, then populate the amount for you on the new transaction page.

## View Charts

ezBookkeeping provides two features to view charts: "Statistics & Analysis" and "Insights Explorer". The former offers a variety of preset charts for quickly viewing commonly used financial data, while the latter allows you to customize chart types, data dimensions and filtering complex conditions to meet more advanced analysis needs.

> [!NOTE] TIP
> On the Statistics & Analytics and Insights Explorer page, ezBookkeeping converts all amounts into your default currency for calculation. If an account's currency is not included in your current exchange rate data, ezBookkeeping cannot convert those transactions and therefore excludes them from the result. You can choose an exchange rate data source that includes all the currencies used by your accounts, and refer to [Exchange Rates](/exchange_rates/) for details on configuring exchange rate sources.
