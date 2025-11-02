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

1. If you want to set configuration options directly through environment variables and override the values in the configuration file, use the following format (environment variable names must be in uppercase): `EBK_{SECTION_NAME}_{OPTION_NAME}`. For example, to set the database type to `mysql`, you can define the environment variable `EBK_DATABASE_TYPE=mysql`
2. If you want to load a configuration option value from a specific file via environment variables and override the value in the configuration file, use the following format (environment variable names must be in uppercase): `EBKCFP_{SECTION_NAME}_{OPTION_NAME}`. For example, to load the database password from a file, you can define the environment variable: `EBKCFP_DATABASE_PASSWD=/run/secrets/database_password` and place the database password inside the `/run/secrets/database_password` file

Note that if both above methods are configured for the same configuration option, the value from the file will take priority.

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
| `domain` | `localhost` | The domain name used to access ezBookkeeping (e.g. `ezbookkeeping-demo.mayswind.net`). |
| `root_url` | `%(protocol)s://%(domain)s:%(http_port)s/` | The full url used to access ezBookkeeping in browser (e.g. `https://ezbookkeeping-demo.mayswind.net/`). If the protocol and port used to access ezBookkeeping in the browser are the same as the settings above (`protocol` and `http_port`), this option can remain at its default value. |
| `cert_file` |  | The cert file path used for `https` protocol. |
| `cert_key_file` |  | The cert key file path used for `https` protocol. |
| `unix_socket` |  | The unix socket path for `unix` protocol. |
| `static_root_path` | `public` | Static file root path. The value can be relative or absolute path. |
| `enable_gzip` | `false` | Whether to enable gzip compression. |
| `log_request` | `true` | Whether to enable logging each request and execution time. |
| `request_id_header` | `true` | Whether to enable adding `X-Request-Id` header to response to track user request or error. |

### MCP (Model Context Protocol)

> Section name is `mcp`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_mcp` | `false` | Whether to enable MCP (Model Context Protocol) server (via http / https web server) for AI/LLM access. |
| `mcp_allowed_remote_ips` |  | MCP server allowed remote IPs, a comma-separated list of allowed remote IPs (asterisk * for any addresses, e.g. 192.168.1.* means any IPs in the 192.168.1.x subnet), leave blank to allow all remote IPs. |

### Database

> Section name is `database`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `type` | `sqlite3` | Database type, supports `mysql`, `postgres` and `sqlite3`. |
| `host` | `127.0.0.1:3306` | Database host address and port or unix socket absolute path for `mysql` or `postgres`. |
| `name` | `ezbookkeeping` | Database name. |
| `user` | `root` | Database user name. |
| `passwd` |  | Database user password. |
| `ssl_mode` | `disable` | SSL/TLS encryption mode for connecting to the `postgres` database, supports `disable`, `require` or `verify-full`. |
| `db_path` | `data/ezbookkeeping.db` | Database file path for `sqlite3`. The value can be relative or absolute path. |
| `max_idle_conn` | `2` | Maximum number of connections in the idle connection pool (0 - 65535). If value is below than or equals to `0`, no idle connections are retained. |
| `max_open_conn` | `0` | Maximum number of open connections to the database (0 - 65535). The value `0` means unlimited. |
| `conn_max_lifetime` | `1440` | Maximum amount of time a connection may be reused (0 - 4294967295 seconds). If value is below than or equals to `0`, connections are not closed due to a connection's age. |
| `log_query` | `false` | Whether to enable logging each sql statement and execution time. |
| `auto_update_database` | `true` | Whether to enable updating database structure automatically when starting web server. |

### Mail

> Section name is `mail`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_smtp` | `false` | Whether to enable sending mail by SMTP server. |
| `smtp_host` | `127.0.0.1:25` | SMTP host address and port. |
| `smtp_user` |  | SMTP server user name. |
| `smtp_passwd` |  | SMTP server user password. |
| `smtp_skip_tls_verify` | `false` | Whether to skip the SMTP server's certificate chain and host name verification. |
| `from_address` |  | Mail from address. This can be just an email address, or the `"Name" <user@domain.com>` format. |

### Logging

> Section name is `log`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `mode` | `console file` | Logging output mode, supports `console` and `file`. Use space to separate multiple modes, e.g. `console file`. |
| `level` | `info` | General log level. This level can be set to `debug`, `info`, `warn` or `error`. |
| `log_path` | `log/ezbookkeeping.log` | Log file path. The value can be relative or absolute path. |
| `request_log_path` |  | Request log file path. The value can be relative or absolute path. Leave blank if you want to write request log in default log file. |
| `query_log_path` |  | Database query log file path. The value can be relative or absolute path. Leave blank if you want to write query log in default log file. |
| `log_file_rotate` | `false` | Whether to enable rotating log files. |
| `log_file_max_size` | `104857600` | The maximum size (1 - 4294967295 bytes) of the log file before it gets rotated. |
| `log_file_max_days` | `7` | The maximum number of days to retain old log files. Set to `0` to retain all logs. |

### Object Storage

> Section name is `storage`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `type` | `local_filesystem` | Object storage type, supports `local_filesystem`, `minio` and `webdav` currently. |
| `local_filesystem_path` | `storage/` | The root path of the object files, for `local_filesystem` object storage. The value can be relative or absolute path. |
| `minio_endpoint` | `127.0.0.1:9000` | MinIO endpoint address, for `minio` object storage. |
| `minio_location` |  | MinIO location, for `minio` object storage. |
| `minio_access_key_id` |  | MinIO Access Key ID, for `minio` object storage. |
| `minio_secret_access_key` |  | MinIO Secret Access Key, for `minio` object storage. |
| `minio_use_ssl` | `false` | Whether to enable SSL for connection, for `minio` object storage. |
| `minio_skip_tls_verify` | `false` | Whether to verify the MinIO server's certificate chain and host name, for `minio` object storage. |
| `minio_bucket` | `ezbookkeeping` | MinIO bucket name, for `minio` object storage. |
| `minio_root_path` | `/` | The root path of the object files in bucket, for `minio` object storage. |
| `webdav_url` |  | WebDAV URL, for `webdav` object storage. |
| `webdav_username` |  | WebDAV user name, for `webdav` object storage. |
| `webdav_password` |  | WebDAV password, for `webdav` object storage. |
| `webdav_root_path` | `/` | The root path of the object files, for `webdav` object storage. |
| `webdav_request_timeout` | `10000` | Request timeout for WebDAV url (0 - 4294967295 milliseconds). Set to `0` to disable timeout for requesting WebDAV url. |
| `webdav_proxy` | `system` | Proxy for requesting WebDAV url, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`. |
| `webdav_skip_tls_verify` | `false` | Whether to skip the server's certificate chain and host name verification when request WebDAV url. |

### Large Language Model

> Section name is `llm`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `transaction_from_ai_image_recognition` | `false` | Whether to enable creating transactions from AI image recognition results, requires `llm_provider` and its related model id to be configured properly in `llm_image_recognition` section. |
| `max_ai_recognition_picture_size` | `10485760` | Maximum allowed AI recognition picture file size (1 - 4294967295 bytes). |

### Large Language Model for receipt image recognition

> Section name is `llm_image_recognition`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `llm_provider` |  | Large Language Model (LLM) provider for receipt image recognition, supports `openai`, `openai_compatible`, `openrouter`, `ollama` and `google_ai`. When using a third-party LLM provider, please be aware of potential privacy risks. For more details, see [FAQ - What third-party services does ezBookkeeping use, and does it access my personal data](/faq#what-third-party-services-does-ezbookkeeping-use-and-does-it-access-my-personal-data). |
| `openai_api_key` |  | OpenAI API Secret Key for `openai` LLM provider, please visit [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) for more information. |
| `openai_model_id` |  | Model ID for the `openai` LLM provider, used for receipt image recognition and transaction creation. |
| `openai_compatible_base_url` |  | OpenAI compatible API base url for `openai_compatible` LLM provider, e.g. `https://api.openai.com/v1/`. |
| `openai_compatible_api_key` |  | OpenAI compatible API Key for `openai_compatible` LLM provider. |
| `openai_compatible_model_id` |  | Model ID for the `openai_compatible` LLM provider, used for receipt image recognition and transaction creation. |
| `openrouter_api_key` |  | OpenAI API secret key for `openrouter` LLM provider, please visit [https://openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) for more information. |
| `openrouter_model_id` |  | Model ID for the `openrouter` LLM provider, used for receipt image recognition and transaction creation. |
| `ollama_server_url` |  | Ollama server url for `openai_compatible` LLM provider, e.g. `http://127.0.0.1:11434/`. |
| `ollama_model_id` |  | Model ID for the `ollama` LLM provider, used for receipt image recognition and transaction creation. |
| `google_ai_api_key` |  | Google AI API Key for `google_ai` LLM provider, please visit [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey) for more information. |
| `google_ai_model_id` |  | Model ID for the `google_ai` LLM provider, used for receipt image recognition and transaction creation. |
| `request_timeout` | `60000` | Request timeout for LLM API (0 - 4294967295 milliseconds). Set to `0` to disable timeout for requesting LLM API. |
| `proxy` | `system` | Proxy for requesting LLM API, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`. |
| `skip_tls_verify` | `false` | Whether to skip the server's certificate chain and host name verification when request LLM API. |

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
| `cleanup_interval` | `60` | Cleanup expired data interval (1 - 4294967295 seconds), for `in_memory` duplicate checker. |
| `duplicate_submissions_interval` | `300` | The minimum interval (0 - 4294967295 seconds) between duplicate submissions on the same page (exiting and re-entering the edit page / edit dialog is considered as a new session). Set to `0` to disable duplicate checker for new data submissions. |

### Cron Job

> Section name is `cron`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_remove_expired_tokens` | `true` | Whether to enable periodic cleanup of expired tokens. |
| `enable_create_scheduled_transaction` | `true` | Whether to enable creating scheudled transactions based on the user's templates. |

### Security

> Section name is `security`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `secret_key` |  | Used for encryption key, **you must change it to keep your user data safe before you first run ezBookkeeping**. You can get a random secret key by executing `ezbookkeeping security gen-secret-key`. |
| `token_expired_time` | `2592000` | Token expired time (60 - 4294967295 seconds). |
| `token_min_refresh_interval` | `86400` | Token minimum refresh interval (0 - 4294967295 seconds), the value should be less than token expired time. Set to `0` to refresh the token every time when refreshing the front end. |
| `temporary_token_expired_time` | `300` | Temporary token expired time (60 - 4294967295 seconds). |
| `email_verify_token_expired_time` | `3600` | Email verify token expired time (60 - 4294967295 seconds). |
| `password_reset_token_expired_time` | `3600` | Password reset token expired time (60 - 4294967295 seconds). |
| `enable_generate_api_token`| `false` | Whether to enable API token generation. |
| `max_failures_per_ip_per_minute` | `5` | Maximum count of password / token check failures (0 - 4294967295) per IP per minute (use the above duplicate checker), default is `5`, set to `0` to disable. |
| `max_failures_per_user_per_minute` | `5` | Maximum count of password / token check failures (0 - 4294967295) per user per minute (use the above duplicate checker), default is `5`, set to `0` to disable. |

### Authentication

> Section name is `auth`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_internal_auth` | `true` | Whether to enable internal username and password login. |
| `enable_oauth2_auth` | `false` | Whether to enable external OAuth 2.0 login. The OAuth 2.0 callback path for ezBookkeeping is `/oauth2/callback`. For example, if your ezBookkeeping instance is hosted at [`https://ezbookkeeping-demo.mayswind.net/`](https://ezbookkeeping-demo.mayswind.net/), the callback URL would be [`https://ezbookkeeping-demo.mayswind.net/oauth2/callback`](https://ezbookkeeping-demo.mayswind.net/oauth2/callback). |
| `enable_two_factor` | `true` | Whether to enable two factor authorization for `internal` authentication. |
| `enable_forget_password` | `true` | Whether to enable user password reset for `internal` authentication. (SMTP server must be configured) |
| `forget_password_require_email_verify` | `false` | Whether to require user email must be verified when use forget password for `internal` authentication. |
| `oauth2_provider` |  | OAuth 2.0 provider for `oauth2` authentication, supports `oidc`, `nextcloud`, `gitea` and `github`. |
| `oauth2_client_id` |  | OAuth 2.0 client ID for `oauth2` authentication. |
| `oauth2_client_secret` |  | OAuth 2.0 client secret for `oauth2` authentication. |
| `oauth2_user_identifier` | `email` | For `oauth2` authentication, the field used to match the user returned by OAuth 2.0 with an existing user in ezBookkeeping, supports `email` and `username`. |
| `oauth2_use_pkce` | `false` | For `oauth2` authentication, whether to use PKCE. |
| `oauth2_auto_register` | `true` | For `oauth2` authentication, automatically create a new user if the user returned by OAuth 2.0 is not registered. (requires `enable_register` to be set to `true`) |
| `oauth2_state_expired_time` | `300` | For `oauth2` authentication, Timeout duration for the OAuth 2.0 authentication process (60 - 4294967295 seconds). |
| `oauth2_request_timeout` | `10000` | Request timeout for OAuth 2.0 API (0 - 4294967295 milliseconds). Set to `0` to disable timeout for requesting OAuth 2.0 API. |
| `oauth2_proxy` | `system` | Proxy for requesting OAuth 2.0 API, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`. |
| `oauth2_skip_tls_verify` | `false` | Whether to skip the server's certificate chain and host name verification when request OAuth 2.0 API. |
| `oidc_provider_base_url` |  | For `oauth2` authentication and `oidc` OAuth 2.0 provider, OIDC provider issuer url. Make sure the `.well-known` directory is available under this path. For example, if it's set to `https://auth.example.com`, the discovery URL should be `https://auth.example.com/.well-known/openid-configuration`. |
| `oidc_provider_check_issuer_url`| `true` | For `oauth2` authentication and `oidc` OAuth 2.0 provider, Whether to check whether the issuer url in the discovery response matches the above `oidc_provider_base_url`. |
| `enable_oidc_display_name` | `false` | For `oauth2` authentication and `oidc` OAuth 2.0 provider, whether to replace the text `Connect ID` in the `Log in with Connect ID` button with the below custom provider name. |
| `oidc_custom_display_name` |  | For `oauth2` authentication and `oidc` OAuth 2.0 provider, the custom provider name to replace the text in the `Log in with Connect ID` button, it supports multi-language configuration. Add an underscore and a language tag after the setting key to configure the display name in that language. For example, `oidc_custom_display_name_zh_hans` means the display name in Chinese (Simplified). |
| `nextcloud_base_url` |  | For `oauth2` authentication and `nextcloud` OAuth 2.0 provider, Nextcloud base url, e.g. `https://cloud.example.org/` or `https://cloud.example.org/index.php`. For more details, see [Nextcloud Administration Manual](https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/oauth2.html). |
| `gitea_base_url` |  | For `oauth2` authentication and `gitea` OAuth 2.0 provider, Gitea base url, e.g. `https://git.example.com/`. For more details, see [Gitea Documentation](https://docs.gitea.com/development/oauth2-provider). |

### User

> Section name is `user`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_register` | `true` | Whether to enable user registration. |
| `enable_email_verify` | `false` | Whether to enable user email validation. |
| `enable_force_email_verify` | `false` | Whether to require user email must be verified when login. |
| `enable_transaction_picture` | `true` | Whether to enable transaction picture. |
| `max_transaction_picture_size` | `10485760` | Maximum allowed transaction picture file size (1 - 4294967295 bytes). |
| `enable_scheduled_transaction` | `true` | Whether to enable scheduled transaction. |
| `avatar_provider` | `internal` | User avatar provider, supports [`internal`](#object-storage) (Use the internal object storage to store user avatar, supports updating avatar by user self) and [`gravatar`](https://gravatar.com) (updating avatar on the provider's website and match it by user's email address). Leave blank if you want to disable user avatar. |
| `max_user_avatar_size` | `1048576` | Maximum allowed user avatar file size (1 - 4294967295 bytes) for `internal` avatar provider. |
| `default_feature_restrictions` |  | The default feature restrictions after user registration (feature types separated by commas), leave blank for no restrictions.<br/>Supports the following feature types:<br/>`1`: Update Password<br/>`2`: Update Email<br/>`3`: Update Profile Basic Info<br/>`4`: Update Avatar<br/>`5`: Logout Other Session<br/>`6`: Enable Two-Factor Authentication<br/>`7`: Disable Enable Two-Factor Authentication<br/>`8`: Forget Password<br/>`9`: Import Transactions<br/>`10`: Export Transactions<br/>`11`: Clear All Data<br/>`12`: Sync Application Settings<br/>`13`: MCP (Model Context Protocol) Access<br/>`14`:  Create Transaction by AI Image Recognition<br/>`15`: OAuth 2.0 Login<br/>`16`: Unlink Third-party Login<br/>`17`: Generate API Token |

### Data

> Section name is `data`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_export` | `true` | Whether to enable exporting user data. |
| `enable_import` | `true` | Whether to enable importing user data. |
| `max_import_file_size` | `10485760` | Maximum allowed import file size (1 - 4294967295 bytes). |

### Tip

> Section name is `tip`

> If the setting supports multiple languages, you can add an underscore and a language tag after the setting key to configure the tips content in that language.  
> For example, `login_page_tips_content_zh_hans` means the tips content in Simplified Chinese.

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_tips_in_login_page` | `false` | Whether to enable displaying custom tips in login page. |
| `login_page_tips_content` |  | The custom tips content displayed in login page, supporting multi-language configuration. |

### Notification

> Section name is `notification`

> If the setting supports multiple languages, you can add an underscore and a language tag after the setting key to configure the notification content in that language.  
> For example, `after_login_notification_content_zh_hans` means the notification content in Simplified Chinese.

| Option Name | Default Value | Description |
| --- | --- | --- |
| `enable_notification_after_register` | `false` | Whether to enable displaying custom notification in home page every time users register. |
| `after_register_notification_content` |  | The custom notification content displayed each time users register, supporting multi-language configuration. |
| `enable_notification_after_login` | `false` | Whether to enable displaying custom notification in home page every time users login. |
| `after_login_notification_content` |  | The custom notification content displayed each time users login, supporting multi-language configuration. |
| `enable_notification_after_open` | `false` | Whether to enable displaying custom notification in home page every time users open the app. |
| `after_open_notification_content` |  | The custom notification content displayed each time users open the app, supporting multi-language configuration. |

### Map

> Section name is `map`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `map_provider` | `openstreetmap` | Map provider, supports [`openstreetmap`](https://www.openstreetmap.org), [`openstreetmap_humanitarian`](http://map.hotosm.org), [`opentopomap`](https://opentopomap.org), [`opnvkarte`](https://publictransportmap.org), [`cyclosm`](https://www.cyclosm.org), [`cartodb`](https://carto.com/basemaps), [`tomtom`](https://www.tomtom.com), [`tianditu`](https://www.tianditu.gov.cn), [`googlemap`](https://map.google.com), [`baidumap`](https://map.baidu.com), [`amap`](https://amap.com) and `custom`. Leave blank if you want to disable map. |
| `map_data_fetch_proxy` | `false` | Whether to use the ezbookkeeping server to forward map data requests for `openstreetmap`, `openstreetmap_humanitarian`, `opentopomap`, `opnvkarte`, `cyclosm`, `cartodb`, `tomtom`, `tianditu` or `custom` map provider. |
| `proxy` | `system` | Proxy for ezbookkeeping server requesting original map data when `map_data_fetch_proxy` is set to `true`, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`. |
| `tomtom_map_api_key` |  | TomTom map API key for `tomtom` map provider, please visit [https://developer.tomtom.com/how-to-get-tomtom-api-key](https://developer.tomtom.com/how-to-get-tomtom-api-key) for more information. |
| `tianditu_map_app_key` |  | TianDiTu map application key for `tianditu` map provider, please visit [https://console.tianditu.gov.cn/api/register](https://console.tianditu.gov.cn/api/register) for more information. |
| `google_map_api_key` |  | Google map JavaScript API key for `googlemap` map provider, please visit [https://developers.google.com/maps/get-started](https://developers.google.com/maps/get-started) for more information. |
| `baidu_map_ak` |  | Baidu map JavaScript API application key for `baidumap` map provider, please visit [https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey) for more information. |
| `amap_application_key` |  | Amap JavaScript API application key for `amap` map provider, please visit [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) for more information. |
| `amap_security_verification_method` | `internal_proxy` | Amap JavaScript API security verification method for `amap` map provider, supports `internal_proxy` (use the internal proxy to request amap api with amap application secret), `external_proxy` (use an external proxy to request amap api, amap application secret should be set by external proxy), `plain_text` (append amap application secret to frontend request directly, insecurity for public network), please visit [https://developer.amap.com/api/jsapi-v2/guide/abc/load](https://developer.amap.com/api/jsapi-v2/guide/abc/load) for more information. |
| `amap_application_secret` |  | Amap JavaScript API application secret for `amap` map provider, this setting must be provided when `amap_security_verification_method` is set to `internal_proxy` or `plain_text`, please visit [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) for more information. |
| `amap_api_external_proxy_url` |  | Amap JavaScript API external proxy url for `amap` map provider, this setting must be provided when `amap_security_verification_method` is set to `external_proxy`. |
| `custom_map_tile_server_url` |  | Tile layer url of custom map tile server, supports {x}, {y} (coordinates) and {z} (zoom level) placeholders, like `https://tile.openstreetmap.org/{z}/{x}/{y}.png`. |
| `custom_map_tile_server_annotation_url` |  | Annotation layer url of custom map tile server (optional), supports {x}, {y} (coordinates) and {z} (zoom level) placeholders. |
| `custom_map_tile_server_min_zoom_level` | `1` | Custom map tile server min zoom level (0 - 255). |
| `custom_map_tile_server_max_zoom_level` | `18` | Custom map tile server max zoom level (0 - 255). |
| `custom_map_tile_server_default_zoom_level` | `14` | Custom map tile server default zoom level (0 - 255). |

### Exchange Rates

> Section name is `exchange_rates`

| Option Name | Default Value | Description |
| --- | --- | --- |
| `data_source` | `euro_central_bank` | Exchange rates data source, supports `reserve_bank_of_australia`, `bank_of_canada`, `czech_national_bank`, `danmarks_national_bank`, `euro_central_bank`, `national_bank_of_georgia`, `central_bank_of_hungary`, `bank_of_israel`, `central_bank_of_myanmar`, `norges_bank`, `national_bank_of_poland`, `national_bank_of_romania`, `bank_of_russia`, `swiss_national_bank`, `national_bank_of_ukraine`, `central_bank_of_uzbekistan`, `international_monetary_fund` and `user_custom`. If set to `user_custom`, each user's exchange rate data should be set by themselves. For more information, please visit [Exchange Rates](/exchange_rates). |
| `request_timeout` | `10000` | Request timeout for exchange rates data (0 - 4294967295 milliseconds). Set to `0` to disable timeout for requesting exchange rates data. |
| `proxy` | `system` | Proxy for ezbookkeeping server requesting exchange rates data, supports `system` (use system proxy), `none` (do not use proxy), or proxy URL which starts with `http://`, `https://` or `socks5://`. |
| `skip_tls_verify` | `false` | Whether to skip the server's certificate chain and host name verification when request exchange rates data. |
