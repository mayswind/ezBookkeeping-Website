---
layout: default
title: Command Line
nav_order: 5
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
* `user-delete`: Delete specified user.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-2fa-disable`: Disable specified user two factor authentication.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-session-list`: List specified user all sessions.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `user-session-clear`: Clear specified user all sessions.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `transaction-check`: Check whether specified user all transactions and accounts are correct.
    * Options:
    * `--username value`, `-n value`: User name. Required.
* `transaction-export`: Export specified user all transactions to `.csv` file.
    * Options:
    * `--username value`, `-n value`: User name. Required.
    * `--file value`, `-f value`: Target file path (e.g. `transaction.csv`). Required.

### security

ezBookkeeping security utilities.

* `gen-secret-key`: Generate a random secret key.
    * Options:
    * `--length value`, `-l value`: The length of secret key. Optional. (default is `32`)