---
layout: default
title: Configuration
nav_order: 3
permalink: /configuration
---

# Configuration
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping uses a ini file as configuration file.
The default configuration file path is `%WORKING_DIR%/conf/ezbookkeeping.ini`.
You can use `--conf-path` parameter to specify a custom configuration path when use ezBookkeeping command line.

In addition, ezBookkeeping also supports setting configuration via environment variables.
All options in the configuration file can be overridden using environment variables with the following name: `EBK_{SECTION_NAME}_{OPTION_NAME}`.  

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
| `max_idle_conn` | `2` | Maximum number of connections in the idle connection pool (0 - 65535). If value is below than or equals to `0`, no idle connections are retained. |
| `max_open_conn` | `0` | Maximum number of open connections to the database (0 - 65535). The value `0` means unlimited. |
| `conn_max_lifetime` | `1440` | Maximum amount of time a connection may be reused (0 - 4294967295 seconds). If value is below than or equals to `0`, connections are not closed due to a connection's age. |
| `log_query` | `false` | Whether enable logging each sql statement and execution time. |
| `auto_update_database` | `true` | Whether enable updating database structure automatically when starting web server. |

### Mail

> Section name is `mail`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_smtp` | `false` | Whether enable sending mail by SMTP server. |
| `smtp_host` | `127.0.0.1:25` | SMTP host address and port. |
| `smtp_user` |  | SMTP server user name. |
| `smtp_passwd` |  | SMTP server user password. |
| `smtp_skip_tls_verify` | `false` | Whether verify the SMTP server's certificate chain and host name. |
| `from_address` |  | Mail from address. This can be just an email address, or the `"Name" <user@domain.com>` format. |

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
| `server_id` | `0` | Unique uuid server instance id, for `internal` uuid generator. The value should be `0`-`255`. |

### Duplicate Checker

> Section name is `duplicate_checker`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `checker_type` | `in_memory` | Duplicate checker type, supports `in_memory` currently. |
| `cleanup_interval` | `60` | Cleanup expired data interval (0 - 4294967295 seconds), for `in_memory` duplicate checker. |
| `duplicate_submissions_interval` | `300` | The minimum interval (0 - 4294967295 seconds) between duplicate submissions on the same page (exiting and re-entering the page is considered as a new session). Set to `0` to disable duplicate checker for new data submissions. |

### Security

> Section name is `security`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `secret_key` |  | Used for encryption key, **you must change it to keep your user data safe before you first run ezBookkeeping**. You can get a random secret key by executing `ezbookkeeping security gen-secret-key`. |
| `enable_two_factor` | `true` | Whether enable two factor authorization. |
| `token_expired_time` | `2592000` | Token expired time (0 - 4294967295 seconds). |
| `temporary_token_expired_time` | `300` | Temporary token expired time (0 - 4294967295 seconds). |
| `email_verify_token_expired_time` | `3600` | Email verify token expired time (0 - 4294967295 seconds). |
| `password_reset_token_expired_time` | `3600` | Password reset token expired time (0 - 4294967295 seconds). |
| `request_id_header` | `true` | Whether enable adding `X-Request-Id` header to response to track user request or error. |

### User

> Section name is `user`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_register` | `true` | Whether enable user registration. |
| `enable_email_verify` | `false` | Whether enable user email validation. |
| `enable_force_email_verify` | `false` | Whether require user email must be verified when login. |
| `enable_forget_password` | `true` | Whether enable user password reset. (SMTP server must be configured) |
| `forget_password_require_email_verify` | `false` | Whether require user email must be verified when use forget password.  |
| `avatar_provider` |  | User avatar provider, supports [`gravatar`](https://gravatar.com). Leave blank if you want to disable user avatar. |

### Data

> Section name is `data`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_export` | `true` | Whether enable exporting user data. |

### Map

> Section name is `map`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `map_provider` | `openstreetmap` | Map provider, supports [`openstreetmap`](https://www.openstreetmap.org), [`openstreetmap_humanitarian`](http://map.hotosm.org), [`opentopomap`](https://opentopomap.org), [`opnvkarte`](https://publictransportmap.org), [`cyclosm`](https://www.cyclosm.org), [`cartodb`](https://carto.com/basemaps), [`tomtom`](https://www.tomtom.com), [`googlemap`](https://map.google.com), [`baidumap`](https://map.baidu.com), [`amap`](https://amap.com) and `custom`. Leave blank if you want to disable map. |
| `map_data_fetch_proxy` | `false` | Whether use the ezbookkeeping server to proxy map data requests for `openstreetmap`, `openstreetmap_humanitarian`, `opentopomap`, `opnvkarte`, `cyclosm`, `cartodb`, `tomtom` or `custom`. |
| `proxy` | `system` | Proxy to request original map data when `map_data_fetch_proxy` is set to `true`, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`, default is `system`. |
| `tomtom_map_api_key` |  | TomTom map API key for `tomtom`, please visit [https://developer.tomtom.com/how-to-get-tomtom-api-key](https://developer.tomtom.com/how-to-get-tomtom-api-key) for more information. |
| `google_map_api_key` |  | Google map JavaScript API key for `googlemap`, please visit [https://developers.google.com/maps/get-started](https://developers.google.com/maps/get-started) for more information. |
| `baidu_map_ak` |  | Baidu map JavaScript API application key for `baidumap`, please visit [https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey) for more information. |
| `amap_application_key` |  | Amap JavaScript API application key for `amap`, please visit [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) for more information. |
| `amap_security_verification_method` | `internal_proxy` | Amap JavaScript API security verification method for `amap`, supports `internal_proxy` (use the internal proxy to request amap api with amap application secret), `external_proxy` (use an external proxy to request amap api, amap application secret should be set by external proxy), `plain_text` (append amap application secret to frontend request directly, insecurity for public network), please visit [https://developer.amap.com/api/jsapi-v2/guide/abc/load](https://developer.amap.com/api/jsapi-v2/guide/abc/load) for more information. |
| `amap_application_secret` |  | Amap JavaScript API application secret for `amap`, this setting must be provided when `amap_security_verification_method` is set to `internal_proxy` or `plain_text`, please visit [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) for more information. |
| `amap_api_external_proxy_url` |  | Amap JavaScript API external proxy url for `amap`, this setting must be provided when `amap_security_verification_method` is set to `external_proxy`. |
| `custom_map_tile_server_url` |  | Custom map tile server url, supports {x}, {y} (coordinates) and {z} (zoom level) placeholders, like `https://tile.openstreetmap.org/{z}/{x}/{y}.png`. |
| `custom_map_tile_server_min_zoom_level` | `1` | Custom map tile server min zoom level (0 - 255). |
| `custom_map_tile_server_max_zoom_level` | `18` | Custom map tile server max zoom level (0 - 255). |
| `custom_map_tile_server_default_zoom_level` | `14` | Custom map tile server default zoom level (0 - 255). |

### Exchange Rates

> Section name is `exchange_rates`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `data_source` | `euro_central_bank` | Exchange rates data source, supports `euro_central_bank`, `bank_of_canada`, `reserve_bank_of_australia`, `czech_national_bank`, `national_bank_of_poland`, `monetary_authority_of_singapore`. For more information, please visit [Exchange Rates](/exchange_rates). |
| `proxy` | `system` | Proxy to request exchange rates data, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`, default is `system`. |
| `request_timeout` | `10000` | Request timeout for exchange rates data (0 - 4294967295 milliseconds). |
| `skip_tls_verify` | `false` | Whether verify the server's certificate chain and host name when request exchange rates data. |
