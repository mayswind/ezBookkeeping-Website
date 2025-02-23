---
layout: default
title: Command Line
nav_order: 6
permalink: /command_line
---

# Command Line
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Usage

    ezbookkeeping [global options] command [command options] [arguments...]

## Global Options

* `--help`, `-h`: Show help. Optional.
* `--version`, `-v`: Show version. Optional.
* `--conf-path FILE`: Specify custom config path. Optional. (default is `%WORKING_DIR%/conf/ezbookkeeping.ini`)

## Commands

### server

ezBookkeeping web server operation.

* `run`: Start ezBookkeeping web server.

### database

ezBookkeeping database maintenance operation.

* `update`: Update database structure.

### userdata

ezBookkeeping user data maintenance operation.

* `user-add`: Add a new user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--email value`, `-m value`: User email. Required.
    * `--nickname value`, `-i value`: User nickname. Required.
    * `--password value`, `-p value`: User password. Required.
    * `--default-currency value`, `-c value`: User default currency code. Required.
* `user-get`: Display specified user info.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-modify-password`: Modify specified user password.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--password value`, `-p value`: User password. Required.
* `user-enable`: Enable specified user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-disable`: Disable specified user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-set-restrict-features`: Set restrictions of user features.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--features value`, `-t value`: Specific feature types (feature types separated by commas). Required. See `default_feature_restrictions` in [Configuration](/configuration#user) for more information.
* `user-add-restrict-features`: Add restrictions of user features.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--features value`, `-t value`: Specific feature types (feature types separated by commas). Required. See `default_feature_restrictions` in [Configuration](/configuration#user) for more information.
* `user-remove-restrict-features`: Remove restrictions of user features.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--features value`, `-t value`: Specific feature types (feature types separated by commas). Required. See `default_feature_restrictions` in [Configuration](/configuration#user) for more information.
* `user-resend-verify-email`: Resend user verify email.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-set-email-verified`: Set specified user email address verified.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-set-email-unverified`: Set specified user email address unverified.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-delete`: Delete specified user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-2fa-disable`: Disable specified user two factor authentication.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-session-list`: List specified user all sessions.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-session-new`: Create new session for user
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-session-clear`: Clear specified user all sessions.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `send-password-reset-mail`: Send password reset mail.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `transaction-check`: Check whether specified user all transactions and accounts are correct.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `transaction-tag-index-fix-transaction-time`: Fix the transaction tag index data which does not have transaction time (bug before v0.5.0).
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `transaction-import`: Import transactions to specified user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--file value`, `-f value`: Import file path (e.g. `transaction.csv`). Required.
    * `--type value`, `-t value`: Import file type, support `ezbookkeeping_csv` or `ezbookkeeping_tsv`. Required.
* `transaction-export`: Export specified user all transactions to `.csv` file.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--file value`, `-f value`: Target file path (e.g. `transaction.csv`). Required.
    * `--type value`, `-t value`: Export file type, support `csv` or `tsv`, default is `csv`.

### cron

ezBookkeeping cron job utilities.

* `list`: List all enabled cron jobs.
* `run`: Run specified cron job.
    * Options:
    * `--name name`, `-n name`: Cron job name.

### security

ezBookkeeping security utilities.

* `gen-secret-key`: Generate a random secret key.
    * Options:
    * `--length value`, `-l value`: The length of secret key. Optional. (default is `32`)

### utility

ezBookkeeping general utilities.

* `parse-default-request-id`: Parse a request id which is generated by default request generator and show the details.
    * Options:
    * `--id`: The request ID.
* `send-test-mail`: Send a test email to specified e-mail address.
    * Options:
    * `--to`: To e-mail address.