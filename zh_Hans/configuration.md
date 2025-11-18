---
layout: default
locale: zh-Hans
title: 配置
nav_order: 3
parent: 中文 (简体)
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

1. 如果你想直接通过环境变量设置配置项并覆盖配置文件中的配置项，你可以使用如下的环境变量名（环境变量名需要为大写）：`EBK_{SECTION_NAME}_{OPTION_NAME}`。例如，将数据库类型设置为 `mysql`，你可以定义环境变量 `EBK_DATABASE_TYPE=mysql`
2. 如果你想通过环境变量设置从指定文件中加载配置项的内容并覆盖配置文件中的配置项，你可以使用如下的环境变量名（环境变量名需要为大写）：`EBKCFP_{SECTION_NAME}_{OPTION_NAME}`。例如，将数据库密码从指定文件中加载，你可以定义环境变量 `EBKCFP_DATABASE_PASSWD=/run/secrets/database_password`，然后将数据库密码放在 `/run/secrets/database_password` 文件中

注意，如果同一个配置项同时配置了上述两种方式，优先使用文件中的内容。

## 可用选项

### 全局

> 配置节名称为 `global`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `app_name` | `ezBookkeeping` | 应用实例名称，在两步验证中使用。 |
| `mode` | `production` | 应用运行模式，影响服务器调试及日志记录。该值可以设置为 `production` 或 `development`。 |

### Web 服务器

> 配置节名称为 `server`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `protocol` | `http` | Web 服务器提供的协议，支持 `http`、`https` 或 `socket`。 |
| `http_addr` | `0.0.0.0` | `http` 或 `https` 协议下绑定的 IP 地址。 `0.0.0.0` 表示绑定到所有网卡设备。 |
| `http_port` | `8080` | `http` 或 `https` 协议下绑定的 Http 端口。 |
| `domain` | `localhost` | 访问 ezBookkeeping 使用的域名（例如 `ezbookkeeping-demo.mayswind.net`）。 |
| `root_url` | `%(protocol)s://%(domain)s:%(http_port)s/` | 在浏览器中访问 ezBookkeeping 的完整路径（例如 `https://ezbookkeeping-demo.mayswind.net/`）。如果用户在浏览器访问时的协议和端口号与上述设置（`protocol` 和 `http_port`）相同，该项可以使用默认值。 |
| `cert_file` |  | `https` 协议使用的证书文件路径。 |
| `cert_key_file` |  | `https` 协议使用的证书私钥文件路径。 |
| `unix_socket` |  | `unix` 协议使用的 Unix Socket 路径。 |
| `static_root_path` | `public` | 静态文件根目录。该值可以设置为相对或绝对路径。 |
| `enable_gzip` | `false` | 是否开启 gzip 压缩。 |
| `log_request` | `true` | 是否开启日志记录请求和执行时间。 |
| `request_id_header` | `true` | 是否开启添加 `X-Request-Id` 响应头以追踪用户请求或错误。 |

### MCP (Model Context Protocol)

> 配置节名称为 `mcp`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_mcp` | `false` | 是否启用 MCP（Model Context Protocol）服务器（通过 http / https Web 服务器）用于 AI/LLM 访问。 |
| `mcp_allowed_remote_ips` |  | MCP 服务器允许的远程 IP，使用逗号分隔的允许远程 IP 列表（星号 * 表示任何地址，例如 192.168.1.* 表示 192.168.1.x 子网中的任何 IP），留空则允许所有远程 IP。 |

### 数据库

> 配置节名称为 `database`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `type` | `sqlite3` | 数据库类型，支持 `mysql`、`postgres` 和 `sqlite3`。 |
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
| `smtp_skip_tls_verify` | `false` | 是否跳过 SMTP 服务器证书链和主机名称的校验。 |
| `from_address` |  | 邮件发件人。可以设置为邮件地址，或按 `"发件人" <user@domain.com>` 格式设置。 |

### 日志

> 配置节名称为 `log`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `mode` | `console file` | 日志输出类型，支持 `console` 和 `file`。使用空格分隔多个模式，例如 `console file`。 |
| `level` | `info` | 一般日志级别。该值可以设置为 `debug`、`info`、`warn` 或 `error`。 |
| `log_path` | `log/ezbookkeeping.log` | 日志文件路径。该值可以设置为相对或绝对路径。 |
| `request_log_path` |  | 请求日志文件路径。该值可以设置为相对或绝对路径。如果您想将请求日志记录到默认日志文件中，留空即可。 |
| `query_log_path` |  | 数据库查询日志文件路径。该值可以设置为相对或绝对路径。如果您想将查询日志记录到默认日志文件中，留空即可。 |
| `log_file_rotate` | `false` | 是否启用轮转日志文件。 |
| `log_file_max_size` | `104857600` | 日志文件轮转之前最大的大小（1 - 4294967295 字节）。 |
| `log_file_max_days` | `7` | 保留最早旧日志文件的天数。设置为 `0` 则保留所有日志。 |

### 对象存储

> 配置节名称为 `storage`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `type` | `local_filesystem` | 对象存储类型，当前支持 `local_filesystem`、`minio` 和 `webdav`。 |
| `local_filesystem_path` | `storage/` | 使用 `local_filesystem` 对象存储时，对象文件的根目录。该值可以设置为相对或绝对路径。 |
| `minio_endpoint` | `127.0.0.1:9000` | 使用 `minio` 对象存储时，MinIO 端点地址。 |
| `minio_location` |  | 使用 `minio` 对象存储时，MinIO 区域。 |
| `minio_access_key_id` |  | 使用 `minio` 对象存储时，MinIO Access Key ID。 |
| `minio_secret_access_key` |  | 使用 `minio` 对象存储时，MinIO Secret Access Key。 |
| `minio_use_ssl` | `false` | 使用 `minio` 对象存储时，连接是否启用 SSL。 |
| `minio_skip_tls_verify` | `false` | 使用 `minio` 对象存储时，是否校验 MinIO 服务器的证书链和主机名称。 |
| `minio_bucket` | `ezbookkeeping` | 使用 `minio` 对象存储时，MinIO Bucket 名称。 |
| `minio_root_path` | `/` | 使用 `minio` 对象存储时，Bucket 中存储对象文件的根目录。 |
| `webdav_url` |  | 使用 `webdav` 对象存储时，WebDAV URL 地址。 |
| `webdav_username` |  | 使用 `webdav` 对象存储时，WebDAV 用户名。 |
| `webdav_password` |  | 使用 `webdav` 对象存储时，WebDAV 密码。 |
| `webdav_root_path` | `/` | 使用 `webdav` 对象存储时，对象文件的根目录。 |
| `webdav_request_timeout` | `10000` | 请求 WebDAV 地址的超时时间（0 - 4294967295 毫秒）。设置为 `0` 时禁用请求 WebDAV 地址超时。 |
| `webdav_proxy` | `system` | 请求 WebDAV 地址使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址。 |
| `webdav_skip_tls_verify` | `false` | 请求 WebDAV 地址时是否跳过服务器证书链和主机名称的校验。 |

### 大语言模型 (LLM)

> 配置节名称为 `llm`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `transaction_from_ai_image_recognition` | `false` | 是否启用 AI 识图创建交易，需要在 `llm_image_recognition` 配置节中正确配置 `llm_provider` 及其相关的模型ID。 |
| `max_ai_recognition_picture_size` | `10485760` | 最大允许的 AI 识图的文件大小（1 - 4294967295 字节）。 |

### 收据图片识别的大语言模型 (LLM)

> 配置节名称为 `llm_image_recognition`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `llm_provider` |  | 用于收据图片识别的大语言模型 (LLM) 提供方，支持 `openai`、`openai_compatible`、`openrouter`、`ollama` 和 `google_ai`。使用第三方大语言模型提供方时，请注意潜在的隐私风险，具体参考 [FAQ-ezBookkeeping 使用了哪些第三方服务，以及是否会使用我的个人数据](/zh_Hans/faq#ezbookkeeping-使用了哪些第三方服务以及是否会使用我的个人数据)。 |
| `openai_api_key` |  | 使用 `openai` 大语言模型提供方时，OpenAI 的 API Secret Key，请访问 [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys) 获取更多信息。 |
| `openai_model_id` |  | 使用 `openai` 大语言模型提供方时，用于识别收据图片并创建交易的模型ID。 |
| `openai_compatible_base_url` |  | 使用 `openai_compatible` 大语言模型提供方时，OpenAI 兼容 API 的基础地址，例如 `https://api.openai.com/v1/`。 |
| `openai_compatible_api_key` |  | 使用 `openai_compatible` 大语言模型提供方时，OpenAI 兼容 API 的 API Key。 |
| `openai_compatible_model_id` |  | 使用 `openai_compatible` 大语言模型提供方时，用于识别收据图片并创建交易的模型ID。 |
| `openrouter_api_key` |  | 使用 `openrouter` 大语言模型提供方时，OpenRouter 的 API Key，请访问 [https://openrouter.ai/settings/keys](https://openrouter.ai/settings/keys) 获取更多信息。 |
| `openrouter_model_id` |  | 使用 `openrouter` 大语言模型提供方时，用于识别收据图片并创建交易的模型ID。 |
| `ollama_server_url` |  | 使用 `ollama` 大语言模型提供方时，Ollama 的服务器地址，例如 `http://127.0.0.1:11434/`。 |
| `ollama_model_id` |  | 使用 `ollama` 大语言模型提供方时，用于识别收据图片并创建交易的模型ID。 |
| `google_ai_api_key` |  | 使用 `google_ai` 大语言模型提供方时，Google AI 的 API Key，请访问 [https://aistudio.google.com/apikey](https://aistudio.google.com/apikey) 获取更多信息。 |
| `google_ai_model_id` |  | 使用 `google_ai` 大语言模型提供方时，用于识别收据图片并创建交易的模型ID。 |
| `request_timeout` | `60000` | 请求大语言模型 API 的超时时间（0 - 4294967295 毫秒）。设置为 `0` 时禁用请求大语言模型 API 超时。 |
| `proxy` | `system` | 请求大语言模型 API 使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址。 |
| `skip_tls_verify` | `false` | 请求大语言模型 API 时是否跳过服务器证书链和主机名称的校验。 |

### Uuid

> 配置节名称为 `uuid`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `generator_type` | `internal` | Uuid 生成器类型，当前支持 `internal`。 |
| `server_id` | `0` | 使用 `internal` Uuid 生成器时，服务器唯一的实例ID。该值需要设置为 `0`-`255`。 |

### 重复检查器

> 配置节名称为 `duplicate_checker`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `checker_type` | `in_memory` | 重复检查器类型，当前支持 `in_memory`。 |
| `cleanup_interval` | `60` | 使用 `in_memory` 重复检查器时，清除过期数据的间隔时间（1 - 4294967295 秒）。 |
| `duplicate_submissions_interval` | `300` | 同一个页面上重复提交的最小间隔时间（0 - 4294967295 秒）（退出并重新进入编辑页面/对话框时被视为一次新的会话）。设置为 `0` 时禁用新数据提交的重复检查器。 |

### 定时任务

> 配置节名称为 `cron`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_remove_expired_tokens` | `true` | 是否启用定期清理过期的令牌。 |
| `enable_create_scheduled_transaction` | `true` | 是否启用根据用户的模板创建定时交易。 |

### 安全

> 配置节名称为 `security`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `secret_key` |  | 作为密钥使用，**为了保证您的数据安全，请在第一次运行 ezBookkeeping 前修改该值**。你可以通过执行 `ezbookkeeping security gen-secret-key` 获取一个随机密钥。 |
| `token_expired_time` | `2592000` | 令牌过期时间（60 - 4294967295 秒）。 |
| `token_min_refresh_interval` | `86400` | 令牌最小刷新间隔（0 - 4294967295 秒)，该值应当小于令牌过期时间。设置为 `0` 时则每次刷新前端时都会刷新令牌。 |
| `temporary_token_expired_time` | `300` | 临时令牌过期时间（60 - 4294967295 秒）。 |
| `email_verify_token_expired_time` | `3600` | 邮箱验证令牌过期时间（60 - 4294967295 秒）。 |
| `password_reset_token_expired_time` | `3600` | 密码重置令牌过期时间（60 - 4294967295 秒）。 |
| `enable_api_token` | `false` | 是否开启 API 令牌。 |
| `max_failures_per_ip_per_minute` | `5` | 每分钟每个 IP 密码/令牌检查失败的最大次数（0 - 4294967295）（使用上述重复检查器），默认为 `5`，设置为 `0` 时禁用。 |
| `max_failures_per_user_per_minute` | `5` | 每分钟每个用户密码/令牌检查失败的最大次数（0 - 4294967295）（使用上述重复检查器），默认为 `5`，设置为 `0` 时禁用。 |

### 身份验证

> 配置节名称为 `auth`

> 使用第三方 OIDC 提供者时，可以参考如下文档：
> - Authelia：[https://www.authelia.com/integration/openid-connect/clients/ezbookkeeping/](https://www.authelia.com/integration/openid-connect/clients/ezbookkeeping/)  
> - authentik：[https://integrations.goauthentik.io/miscellaneous/ezbookkeeping/](https://integrations.goauthentik.io/miscellaneous/ezbookkeeping/)

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_internal_auth` | `true` | 是否开启用户名、密码登录（`internal`）。 |
| `enable_oauth2_auth` | `false` | 是否开启使用外部 OAuth 2.0 登录。ezBookkeeping 的 OAuth 2.0 回调路径为 `/oauth/callback`，例如你的 ezBookkeeping 地址为 [`https://ezbookkeeping-demo.mayswind.net/`](https://ezbookkeeping-demo.mayswind.net/)，则回调地址为 [`https://ezbookkeeping-demo.mayswind.net/oauth2/callback`](https://ezbookkeeping-demo.mayswind.net/oauth2/callback)。 |
| `enable_two_factor` | `true` | 使用 `internal` 身份验证时，是否开启两步验证。 |
| `enable_forget_password` | `true` | 使用 `internal` 身份验证时，是否启用用户密码重置。（SMTP 服务器必须配置） |
| `forget_password_require_email_verify` | `false` | 使用 `internal` 身份验证时，用户使用密码重置时是否要求邮箱必须验证。 |
| `oauth2_provider` |  | 使用 `oauth2` 身份验证时，OAuth 2.0 提供方，支持 `oidc`、`nextcloud`、`gitea` 和 `github`。 |
| `oauth2_client_id` |  | 使用 `oauth2` 身份验证时，OAuth 2.0 客户端 ID。 |
| `oauth2_client_secret` |  | 使用 `oauth2` 身份验证时，OAuth 2.0 客户端密钥。 |
| `oauth2_user_identifier` | `email` | 使用 `oauth2` 身份验证时，用于将 OAuth 2.0 返回的用户与 ezBookkeeping 中现有用户进行匹配的字段，支持 `email` 和 `username`。 |
| `oauth2_use_pkce` | `false` | 使用 `oauth2` 身份验证时，是否启用 PKCE。 |
| `oauth2_auto_register` | `true` | 使用 `oauth2` 身份验证时，当 OAuth 2.0 返回的用户没有注册时自动创建新用户。（需要 `enable_register` 设置为 `true`） |
| `oauth2_state_expired_time` | `300` | 使用 `oauth2` 身份验证时，OAuth 2.0 认证过程的超时时间（60 - 4294967295 秒）。 |
| `oauth2_request_timeout` | `10000` | 请求 OAuth 2.0 API 的超时时间（0 - 4294967295 毫秒）。设置为 `0` 时禁用请求 OAuth 2.0 API 超时。 |
| `oauth2_proxy` | `system` | 请求 OAuth 2.0 API 使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址。 |
| `oauth2_skip_tls_verify` | `false` | 请求 OAuth 2.0 API 时是否跳过服务器证书链和主机名称的校验。 |
| `oidc_provider_base_url` |  | 使用 `oauth2` 身份验证和 `oidc` OAuth 2.0 提供方时，OIDC 提供方的 Issuer URL。请确保 `.well-known` 目录在这个地址下。例如，如果设置为 `https://auth.example.com`，发现地址应该是 `https://auth.example.com/.well-known/openid-configuration`。 |
| `oidc_provider_check_issuer_url`| `true` | 使用 `oauth2` 身份验证和 `oidc` OAuth 2.0 提供方时，是否检查发现结果中的 Issuer URL 与上述 `oidc_provider_base_url` 一致。 |
| `enable_oidc_display_name` | `false` | 使用 `oauth2` 身份验证和 `oidc` OAuth 2.0 提供方时，是否使用下列自定义提供者名称替换 `使用 Connect ID 登录` 按钮中的 `Connect ID` 文字。 |
| `oidc_custom_display_name` |  | 使用 `oauth2` 身份验证和 `oidc` OAuth 2.0 提供方时，用于替换 `使用 Connect ID 登录` 按钮中的文字的自定义提供方名称，支持多语言。在设置项后增加下划线和语言标签，可配置在那个语言下的文字。例如, `oidc_custom_display_name_zh_hans` 表示在中文（简体）下的显示名称。 |
| `nextcloud_base_url` |  | 使用 `oauth2` 身份验证和 `nextcloud` OAuth 2.0 提供方时，Nextcloud 的基础地址，例如 `https://cloud.example.org/` 或 `https://cloud.example.org/index.php`。更多信息见 [Nextcloud Administration Manual](https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/oauth2.html)。 |
| `gitea_base_url` |  | 使用 `oauth2` 身份验证和 `gitea` OAuth 2.0 提供方时，Gitea 的基础地址，例如 `https://git.example.com/`。更多信息见 [Gitea 文档](https://docs.gitea.com/zh-cn/development/oauth2-provider)。 |

### 用户

> 配置节名称为 `user`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_register` | `true` | 是否启用用户注册。 |
| `enable_email_verify` | `false` | 是否启用用户邮箱验证。 |
| `enable_force_email_verify` | `false` | 用户登录时是否要求邮箱必须验证。 |
| `enable_transaction_picture` | `true` | 是否启用交易图片。 |
| `max_transaction_picture_size` | `10485760` | 最大允许的交易图片文件大小（1 - 4294967295 字节）。 |
| `enable_scheduled_transaction` | `true` | 是否启用定时交易。 |
| `avatar_provider` | `internal` | 用户头像提供方，支持 [`internal`](#对象存储)（使用内部对象存储保存用户头像，支持用户自行更新头像） 和 [`gravatar`](https://gravatar.com)（在该提供方网站上传头像，根据用户邮箱地址匹配）。如果您想禁用用户头像，留空即可。 |
| `max_user_avatar_size` | `1048576` | 使用 `internal` 用户头像提供方时，最大允许的用户头像文件大小（1 - 4294967295 字节）。 |
| `default_feature_restrictions` |  | 用户注册后默认的功能限制（功能类型使用逗号分隔），留空表示无限制。<br/>支持以下功能类型：<br/>`1`: 更新密码<br/>`2`: 更新邮箱<br/>`3`: 更新个人基本信息<br/>`4`: 更新头像<br/>`5`: 退出登录其他会话<br/>`6`: 启用两步验证<br/>`7`: 禁用两步验证<br/>`8`: 忘记密码<br/>`9`: 导入交易<br/>`10`: 导出交易<br/>`11`: 清除所有数据<br/>`12`: 同步应用设置<br/>`13`: MCP (Model Context Protocol) 访问<br/>`14`: AI 识图创建交易<br/>`15`：OAuth 2.0 登录<br/>`16`：取消关联第三方登录<br/>`17`：生成 API 令牌 |

### 数据

> 配置节名称为 `data`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_export` | `true` | 是否启用用户数据导出。 |
| `enable_import` | `true` | 是否启用用户数据导入。 |
| `max_import_file_size` | `10485760` | 最大允许的导入文件大小（1 - 4294967295 字节）。 |

### 提示

> 配置节名称为 `tip`

> 如果配置项支持多语言，可以在配置项的键名后添加下划线和语言标签，来配置该语言下的提示内容。  
> 例如，`login_page_tips_content_zh_hans` 表示简体中文的提示内容。

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_tips_in_login_page` | `false` | 是否启用登录页面显示的自定义提示内容。 |
| `login_page_tips_content` |  | 登录页面显示的自定义提示内容，支持多语言配置。 |

### 通知

> 配置节名称为 `notification`

> 如果配置项支持多语言，可以在配置项的键名后添加下划线和语言标签，来配置该语言下的通知内容。  
> 例如，`after_login_notification_content_zh_hans` 表示简体中文的通知内容。

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `enable_notification_after_register` | `false` | 是否启用用户每次注册时在主页上显示自定义通知。 |
| `after_register_notification_content` |  | 用户每次注册时显示的自定义通知内容，支持多语言配置。 |
| `enable_notification_after_login` | `false` | 是否启用用户每次登录时在主页上显示自定义通知。 |
| `after_login_notification_content` |  | 用户每次登录时显示的自定义通知内容，支持多语言配置。 |
| `enable_notification_after_open` | `false` | 是否启用用户每次打开应用时在主页上显示自定义通知。 |
| `after_open_notification_content` |  | 用户每次打开应用时显示的自定义通知内容，支持多语言配置。 |

### 地图

> 配置节名称为 `map`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `map_provider` | `openstreetmap` | 地图提供方，支持 [`openstreetmap`](https://www.openstreetmap.org)、[`openstreetmap_humanitarian`](http://map.hotosm.org)、[`opentopomap`](https://opentopomap.org)、[`opnvkarte`](https://publictransportmap.org)、[`cyclosm`](https://www.cyclosm.org)、[`cartodb`](https://carto.com/basemaps)、[`tomtom`](https://www.tomtom.com)、[`tianditu`](https://www.tianditu.gov.cn)、[`googlemap`](https://map.google.com)、[`baidumap`](https://map.baidu.com)、[`amap`](https://amap.com) 和 `custom`。如果您想禁用地图，留空即可。 |
| `map_data_fetch_proxy` | `false` | 使用 `openstreetmap`、`openstreetmap_humanitarian`、`opentopomap`、`opnvkarte`、`cyclosm`、`cartodb`、`tomtom`、`tianditu` 或 `custom` 地图提供方时，是否使用 ezbookkeeping 服务端转发地图数据请求。 |
| `proxy` | `system` | 当 `map_data_fetch_proxy` 设置为 `true` 时 ezbookkeeping 服务端请求原始地图数据使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址。 |
| `tomtom_map_api_key` |  | 使用 `tomtom` 地图提供方时，TomTom 地图的 API Key，请访问 [https://developer.tomtom.com/how-to-get-tomtom-api-key](https://developer.tomtom.com/how-to-get-tomtom-api-key) 获取更多信息。 |
| `tianditu_map_app_key` |  | 使用 `tianditu` 地图提供方时，天地图的应用 Key，请访问 [https://console.tianditu.gov.cn/api/register](https://console.tianditu.gov.cn/api/register) 获取更多信息。 |
| `google_map_api_key` |  | 使用 `googlemap` 地图提供方时，Google 地图的 JavaScript API Key，请访问 [https://developers.google.com/maps/get-started](https://developers.google.com/maps/get-started) 获取更多信息。 |
| `baidu_map_ak` |  | 使用 `baidumap` 地图提供方时，百度地图的 JavaScript API 访问应用（AK），请访问 [https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey](https://lbsyun.baidu.com/index.php?title=jspopular3.0/guide/getkey) 获取更多信息。 |
| `amap_application_key` |  | 使用 `amap` 地图提供方时，高德地图的 JavaScript API 应用 Key，请访问 [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) 获取更多信息。 |
| `amap_security_verification_method` | `internal_proxy` | 使用 `amap` 地图提供方时，高德地图的 JavaScript API 安全验证方法， 支持 `internal_proxy` （使用内建代理附加高德应用安全密钥请求高德地图 API）, `external_proxy` （使用外部代理请求高德地图 API，高德应用安全密钥需要被外部代理设置）, `plain_text` （直接将高德应用安全密钥添加到前端请求中，公网使用不安全），请访问 [https://developer.amap.com/api/jsapi-v2/guide/abc/load](https://developer.amap.com/api/jsapi-v2/guide/abc/load) 获取更多信息。 |
| `amap_application_secret` |  | 使用 `amap` 地图提供方时，高德地图的 JavaScript API 应用安全密钥，`amap_security_verification_method` 设置为 `internal_proxy` 或 `plain_text` 时该选项必须设置，请访问 [https://lbs.amap.com/api/javascript-api/guide/abc/prepare](https://lbs.amap.com/api/javascript-api/guide/abc/prepare) 获取更多信息。 |
| `amap_api_external_proxy_url` |  | 使用 `amap` 地图提供方时，高德地图的 JavaScript API 外部代理地址，`amap_security_verification_method` 设置为 `external_proxy` 时该选项必须设置。 |
| `custom_map_tile_server_url` |  | 自定义地图瓦片服务器的瓦片图层 Url，支持 {x}、{y}（坐标）、{z}（缩放等级）占位符，例如 `https://tile.openstreetmap.org/{z}/{x}/{y}.png`。 |
| `custom_map_tile_server_annotation_url` |  | 自定义地图瓦片服务器的标注图层 Url（可选），支持 {x}、{y}（坐标）、{z}（缩放等级）占位符。 |
| `custom_map_tile_server_min_zoom_level` | `1` | 自定义地图贴图服务器最小缩放等级（0 - 255）。 |
| `custom_map_tile_server_max_zoom_level` | `18` | 自定义地图贴图服务器最大缩放等级（0 - 255）。 |
| `custom_map_tile_server_default_zoom_level` | `14` | 自定义地图贴图服务器默认缩放等级（0 - 255）。 |

### 汇率

> 配置节名称为 `exchange_rates`

| 选项名 | 默认值 | 描述 |
| --- | --- | --- |
| `data_source` | `euro_central_bank` | 汇率数据源，支持 `reserve_bank_of_australia`、`bank_of_canada`、`czech_national_bank`、`danmarks_national_bank`、`euro_central_bank`、`national_bank_of_georgia`、`central_bank_of_hungary`、`bank_of_israel`、`central_bank_of_myanmar`、`norges_bank`、`national_bank_of_poland`、`national_bank_of_romania`、`bank_of_russia`、`swiss_national_bank`、`national_bank_of_ukraine`、`central_bank_of_uzbekistan`、`international_monetary_fund` 或 `user_custom`。如果设置为 `user_custom`，每个用户的汇率数据需要自行设置。更多信息，请访问 [汇率](/zh_Hans/exchange_rates)。 |
| `request_timeout` | `10000` | 请求汇率数据的超时时间（0 - 4294967295 毫秒）。设置为 `0` 时禁用请求汇率数据超时。 |
| `proxy` | `system` | ezbookkeeping 服务端请求汇率数据使用的代理，支持 `system`（使用系统代理） `none`（不使用代理），或以 `http://`、`https://` 或 `socks5://` 开头的代理服务器地址。 |
| `skip_tls_verify` | `false` | 请求汇率数据时是否跳过服务器证书链和主机名称的校验。 |
