---
layout: default
title: 配置
nav_order: 3
parent: 简体中文
permalink: /zh_Hans/configuration
---

# 配置
{: .no_toc }

## 目录
{: .no_toc .text-delta }

1. TOC
{:toc}

---

ezBookkeeping 使用 ini 文件作为配置文件。
默认的配置文件路径是 `%WORKING_DIR%/conf/ezbookkeeping.ini`。
使用 ezBookkeeping 命令行时，你可以使用 `--conf-path` 参数指定自定义的配置文件路径。

除此之外，ezBookkeeping 还支持通过环境变量设置配置。
配置文件中所有的选项都可以通过如下的环境变量名被覆盖：`EBK_{SECTION_NAME}_{OPTION_NAME}`。  

例如，如果你想将数据库类型设置为 `mysql`，你可以设置环境变量 `EBK_DATABASE_TYPE=mysql`。

## 可用选项

### 全局

> 配置节名称为 `global`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `app_name` | `ezBookkeeping` | 应用实例名称，在两步认证中使用。 |
| `mode` | `production` | 应用运行模式，影响服务器调试及日志记录。该值可以设置为 `production` 或 `development`。 |

### Web 服务器

> 配置节名称为 `server`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `protocol` | `http` | Web 服务器提供的协议，支持 `http`、`https` 或 `socket`。 |
| `http_addr` | `0.0.0.0` | `http` 或 `https` 协议下绑定的 IP 地址。 `0.0.0.0` 表示绑定到所有网卡设备。 |
| `http_port` | `8080` | `http` 或 `https` 协议下绑定的 Http 端口。 |
| `domain` | `localhost` | 访问 ezBookkeeping 使用的域名。 |
| `root_url` | `%(protocol)s://%(domain)s:%(http_port)s/` | 在浏览器中访问 ezBookkeeping 的完整路径。 |
| `cert_file` |  | `https` 协议使用的证书文件路径。 |
| `cert_key_file` |  | `https` 协议使用的证书私钥文件路径。 |
| `unix_socket` |  | `unix` 协议使用的 Unix Socket 路径。 |
| `static_root_path` | `public` | 静态文件根目录。该值可以设置为相对或绝对路径。 |
| `enable_gzip` | `false` | 是否开启 gzip 压缩。 |
| `log_request` | `true` | 是否开启日志记录请求和执行时间。 |

### 数据库

> 配置节名称为 `database`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `type` | `sqlite3`| 数据库类型，支持 `mysql`、`postgres` 和 `sqlite3`。 |
| `host` | `127.0.0.1:3306` | `mysql` 或 `postgres` 数据库的主机地址及端口或 Unix Socket 绝对路径。 |
| `name` | `ezbookkeeping` | 数据库名。 |
| `user` | `root` | 数据库用户名。 |
| `passwd` |  | 数据库用户密码。 |
| `ssl_mode` | `disable` | 连接 `postgres` 数据库使用的 SSL/TLS 加密模式，支持 `disable`、`require` 或 `verify-full`。 |
| `db_path` | `data/ezbookkeeping.db` | `sqlite3` 数据库的文件路径。该值可以设置为相对或绝对路径。 |
| `max_idle_conn` | `2` | 连接池最大空闲连接数（0 - 65535）。如果该值设置为小于等于 `0`，不会保留空闲连接。 |
| `max_open_conn` | `0` | 数据库可以打开的最大连接数（0 - 65535）。设置为 `0` 表示不限制。 |
| `conn_max_lifetime` | `1440` | 空闲连接最大存活时长（0 - 4294967295 秒）。如果该值设置为小于等于 `0`，连接不会因为时长而关闭。 |
| `log_query` | `false` | 是否开启日志记录每条 SQL 语句及执行时间。 |
| `auto_update_database` | `true` | 是否开启当启动 Web 服务器时自动更新数据库结构。 |

### 邮件

> 配置节名称为 `mail`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_smtp` | `false` | 是否启用通过 SMTP 服务器发送邮件。 |
| `smtp_host` | `127.0.0.1:25` | SMTP 主机地址和端口。 |
| `smtp_user` |  | SMTP 服务器用户名。 |
| `smtp_passwd` |  | SMTP 服务器用户密码。 |
| `smtp_skip_tls_verify` | `false` | 是否校验 SMTP 服务器的证书链和主机名称。 |
| `from_address` |  | 邮件发件人。可以设置为邮件地址，或按 `"发件人" <user@domain.com>` 格式设置。 |

### 日志

> 配置节名称为 `log`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `mode` | `console file` | 日志输出类型，支持 `console` 和 `file`。使用空格分隔多个模式，例如 `console file`。 |
| `level` | `info` | 一般日志级别。该值可以设置为 `debug`、`info`、`warn` 或 `error`。 |
| `log_path` | `log/ezbookkeeping.log` | 日志文件路径。该值可以设置为相对或绝对路径。 |

### Uuid

> 配置节名称为 `uuid`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `generator_type` | `internal` | Uuid 生成器类型，当前支持 `internal`。 |
| `server_id` | `0` | 使用 `internal` Uuid 生成器时，服务器唯一的实例ID。该值需要设置为 `0`-`255`。 |

### 安全

> 配置节名称为 `security`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `secret_key` |  | 作为密钥使用，**为了保证您的数据安全，请在第一次运行 ezBookkeeping 前修改该值**。你可以通过执行 `ezbookkeeping security gen-secret-key` 获取一个随机密钥。 |
| `enable_two_factor` | `true` | 是否开启两步认证。 |
| `token_expired_time` | `2592000` | 令牌过期时间（0 - 4294967295 秒）。 |
| `temporary_token_expired_time` | `300` | 临时令牌过期时间（0 - 4294967295 秒）。 |
| `email_verify_token_expired_time` | `3600` | 邮箱验证令牌过期时间（0 - 4294967295 秒）。 |
| `password_reset_token_expired_time` | `3600` | 密码重置令牌过期时间（0 - 4294967295 秒）。 |
| `request_id_header` | `true` | 是否开启添加 `X-Request-Id` 响应头以追踪用户请求或错误。 |

### 用户

> 配置节名称为 `user`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_register` | `true` | 是否启用用户注册。 |
| `enable_email_verify` | `false` | 是否启用用户邮箱验证。 |
| `enable_force_email_verify` | `false` | 用户登录时是否要求邮箱必须验证。 |
| `enable_forget_password` | `true` | 是否启用用户密码重置。（SMTP 服务器必须配置） |
| `forget_password_require_email_verify` | `false` | 用户使用密码重置时是否要求邮箱必须验证。 |
| `avatar_provider` |  | 用户头像提供方，支持 [`gravatar`](https://gravatar.com)。如果您想禁用用户头像，留空即可。 |

### 数据

> 配置节名称为 `data`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_export` | `true` | 是否启用用户数据导出。 |

### 地图

> 配置节名称为 `map`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `map_provider` | `openstreetmap` | 地图提供方，支持 [`openstreetmap`](https://www.openstreetmap.org)、[`openstreetmap_humanitarian`](http://map.hotosm.org)、[`opentopomap`](https://opentopomap.org)、[`opnvkarte`](https://publictransportmap.org)、[`cyclosm`](https://www.cyclosm.org)、[`cartodb`](https://carto.com/basemaps)、[`tomtom`](https://www.tomtom.com)、[`googlemap`](https://map.google.com)、[`baidumap`](https://map.baidu.com)、[`amap`](https://amap.com) 和 `custom`。如果您想禁用地图，留空即可。 |
| `map_data_fetch_proxy` | `false` | 针对 `openstreetmap`、`openstreetmap_humanitarian`、`opentopomap`、`opnvkarte`、`cyclosm`、`cartodb`、`tomtom` 或 `custom` 是否使用 ezbookkeeping 服务端代理地图数据请求。 |
| `proxy` | `system` | 当 `map_data_fetch_proxy` 设置为 `true` 时请求原始地图数据使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址，默认为 `system`。 |
| `tomtom_map_api_key` |  | 针对 `tomtom`，TomTom 地图 API Key，请访问 [https://developer.tomtom.com/how-to-get-tomtom-api-key](https://developer.tomtom.com/how-to-get-tomtom-api-key) 获取更多信息。 |
| `google_map_api_key` |  | 针对 `googlemap`，Google 地图 JavaScript API Key，请访问 [https://developers.google.com/maps/get-started](https://developers.google.com/maps/get-started) 获取更多信息。 |
| `baidu_map_ak` |  | 针对 `baidumap`，百度地图 JavaScript API 访问应用（AK），请访问 [https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey) 获取更多信息。 |
| `amap_application_key` |  | 针对 `amap`，高德地图 JavaScript API 应用 Key，请访问 [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) 获取更多信息。 |
| `amap_security_verification_method` | `internal_proxy` | 针对 `amap`，高德地图 JavaScript API 安全验证方法， 支持 `internal_proxy` （使用内建代理附加高德应用安全密钥请求高德地图 API）, `external_proxy` （使用外部代理请求高德地图 API，高德应用安全密钥需要被外部代理设置）, `plain_text` （直接将高德应用安全密钥添加到前端请求中，公网使用不安全），请访问 [https://developer.amap.com/api/jsapi-v2/guide/abc/load](https://developer.amap.com/api/jsapi-v2/guide/abc/load) 获取更多信息。 |
| `amap_application_secret` |  | 针对 `amap`，高德地图 JavaScript API 应用安全密钥，`amap_security_verification_method` 设置为 `internal_proxy` 或 `plain_text` 时该选项必须设置，请访问 [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) 获取更多信息。 |
| `amap_api_external_proxy_url` |  | 针对 `amap`，高德地图 JavaScript API 外部代理地址，`amap_security_verification_method` 设置为 `external_proxy` 时该选项必须设置。 |
| `custom_map_tile_server_url` |  | 自定义地图贴图服务器地址，支持 {x}、{y}（坐标）、{z}（缩放等级）占位符，例如 `https://tile.openstreetmap.org/{z}/{x}/{y}.png`。 |
| `custom_map_tile_server_min_zoom_level` | `1` | 自定义地图贴图服务器最小缩放等级（0 - 255）。 |
| `custom_map_tile_server_max_zoom_level` | `18` | 自定义地图贴图服务器最大缩放等级（0 - 255）。 |
| `custom_map_tile_server_default_zoom_level` | `14` | 自定义地图贴图服务器默认缩放等级（0 - 255）。 |

### 汇率

> 配置节名称为 `exchange_rates`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `data_source` | `euro_central_bank` | 汇率数据源，支持 `euro_central_bank`、`bank_of_canada`、`reserve_bank_of_australia`、`czech_national_bank`、`national_bank_of_poland`, `monetary_authority_of_singapore`。更多信息，请访问 [汇率](/zh_Hans/exchange_rates)。 |
| `proxy` | `system` | 请求汇率数据使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址，默认为 `system`。 |
| `request_timeout` | `10000` | 请求汇率数据的超时时间（0 - 4294967295 毫秒）。 |
| `skip_tls_verify` | `false` | 请求汇率数据时是否校验服务器的证书链和主机名称。 |
