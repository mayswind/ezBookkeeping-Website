---
layout: default
title: Configuration
nav_order: 3
permalink: /configuration
---

# Configuration
{: .no_toc }

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

ezBookkeeping uses a ini file as configuration file. The default configuration file path is `%WORKING_DIR%/conf/ezbookkeeping.ini`. You can use `--conf-path` parameter to specify a custom configuration path when use ezBookkeeping command line.

In addition, ezBookkeeping also supports setting configuration via environment variables. All options in the configuration file can be overridden using environment variables with the following name:  
`EBK_{SECTION_NAME}_{OPTION_NAME}`  

For example, if you want to set database type to `mysql`, you can set environment variable `EBK_DATABASE_TYPE=mysql`.

## Available Options

### Global

> Section name is `global`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `app_name` | `ezBookkeeping` | Application instance name, used in the two factor authentication. |
| `mode` | `production` | Application run mode, affects web server debugging and logging. The value can be set to `production` or `development`. |

### Web Server

> Section name is `server`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `protocol` | `http` | The protocol that web server provides, supports `http`, `https` or `socket`. |
| `http_addr` | `0.0.0.0` | The ip address to bind to for `http` or `https` protocol. `0.0.0.0` will bind to all interfaces. |
| `http_port` | `8080` | The http port to bind to for `http` or `https` protocol. |
| `domain` | `localhost` | The domain name used to access ezBookkeeping. |
| `root_url` | `%(protocol)s://%(domain)s:%(http_port)s/` | The full url used to access ezBookkeeping in browser. |
| `cert_file` |  | The cert file path used for `https` protocol. |
| `cert_key_file` |  | The cert key file path used for `https` protocol. |
| `unix_socket` |  | The unix socket path for `unix` protocol. |
| `static_root_path` | `public` | Static file root path. The value can be relative or absolute path. |
| `enable_gzip` | `false` | Whether enable gzip compression. |
| `log_request` | `true` | Whether enable logging each request and execution time. |

### Database

> Section name is `database`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `type` | `sqlite3`| Database type, supports `mysql`, `postgres` and `sqlite3`. |
| `host` | `127.0.0.1:3306` | Database host address and port or unix socket absolute path for `mysql` or `postgres`. |
| `name` | `ezbookkeeping` | Database name. |
| `user` | `root` | Database user name. |
| `passwd` |  | Database user password. |
| `ssl_mode` | `disable` | SSL/TLS encryption mode for connecting to the `postgres` database, supports `disable`, `require` or `verify-full`. |
| `db_path` | `data/ezbookkeeping.db` | Database file path for `sqlite3`. The value can be relative or absolute path. |
| `max_idle_conn` | `2` | Maximum number of connections in the idle connection pool. If value is below than or equals to `0`, no idle connections are retained. |
| `max_open_conn` | `0` | Maximum number of open connections to the database. The value `0` means unlimited. |
| `conn_max_lifetime` | `1440` | Maximum amount of time a connection may be reused (seconds). If value is below than or equals to `0`, connections are not closed due to a connection's age. |
| `log_query` | `false` | Whether enable logging each sql statement and execution time. |
| `auto_update_database` | `true` | Whether enable updating database structure automatically when starting web server. |

### Logging

> Section name is `log`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `mode` | `console file` | Logging output mode, supports `console` and `file`. Use space to separate multiple modes, e.g. `console file`. |
| `level` | `info` | General log level. This level can be set to `debug`, `info`, `warn` or `error`. |
| `log_path` | `log/ezbookkeeping.log` | Log file path. The value can be relative or absolute path. |

### Uuid

> Section name is `uuid`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `generator_type` | `internal` | Uuid generator type, supports `internal` currently. |
| `server_id` | `0` | Unique uuid server instance id, for `internal` uuid generator. |

### Security

> Section name is `security`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `secret_key` |  | Used for signing, **you must change it to keep your user data safe before you first run ezBookkeeping**. |
| `enable_two_factor` | `true` | Whether enable two factor authorization. |
| `token_expired_time` | `2592000` | Token expired time (seconds). |
| `temporary_token_expired_time` | `300` | Temporary token expired time (seconds). |
| `request_id_header` | `true` | Whether enable adding `X-Request-Id` header to response to track user request or error. |

### User

> Section name is `user`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_register` | `true` | Whether enable user registration. |

### Data

> Section name is `data`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_export` | `true` | Whether enable exporting user data. |

### Exchange Rates

> Section name is `exchange_rates`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `data_source` | `euro_central_bank` | Exchange rates data source, supports [`euro_central_bank`](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html), [`bank_of_canada`](https://www.bankofcanada.ca/rates/exchange/daily-exchange-rates/), [`reserve_bank_of_australia`](https://www.rba.gov.au/statistics/frequency/exchange-rates.html), [`czech_national_bank`](https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/), [`national_bank_of_poland`](https://www.nbp.pl/homen.aspx?f=/kursy/kursyen.htm). |
| `request_timeout` | `10000` | Request timeout for exchange rates data (milliseconds). |
