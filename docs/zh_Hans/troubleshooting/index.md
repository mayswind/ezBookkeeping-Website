---
title: 问题排查
---

# 问题排查

ezBookkeeping 默认会将日志输出到 `log/ezbookkeeping.log` 文件中，您可以通过查看该日志文件来排查问题。

## 日志格式

ezBookkeeping 包括三种类型的日志：常规日志、请求日志（Request Log）和数据库查询日志（Query Log），每个日志在记录时都包含一个与当次请求或当次后台任务关联的 Trace ID，你可以通过该ID关联当次处理的所有日志。

### 常规日志

ezBookkeeping 的常规日志记录了系统运行时的各种事件和错误信息，帮助您诊断运行状态和排查问题。格式如下：

```
[YYYY-MM-DD HH:mm:ss] [日志级别] [Trace ID] [源代码文件名.代码函数名] 日志内容
```

### 请求日志（Request Log）

请求日志记录了每次 HTTP 请求的信息，包括请求方法、URL、状态码、响应时间等。格式如下：

```
[YYYY-MM-DD HH:mm:ss] [REQUEST] [Trace ID] HTTP状态码 ezBookkeeping错误代码 用户ID 客户端IP 请求方法 请求URL 响应时间ms
```

> 如果请求没有发生错误，则 ezBookkeeping 错误代码为 `0`。
>
> 如果请求为未登录用户产生的请求，则用户ID为 `-`。

### 数据库查询日志（Query Log）

数据库查询日志记录了每次数据库查询的详细信息，包括SQL语句、执行时间等。格式如下：

```
[YYYY-MM-DD HH:mm:ss] [SQLQUERY] [SQL] [Trace ID] SQL查询语句 [查询参数] 执行时间ms
```

## 常见问题排查

### 无法启动 ezBookkeeping

ezBookkeeping 无法启动时日志中通常会记录相关的错误信息，例如权限不足、配置错误、端口被占用、数据库连接失败等。请查看日志文件中的相关记录，以获取详细的错误信息和排查问题的线索。

如果启动 ezBookkeeping 时没有任何日志记录，请检查您使用的操作系统是否满足 ezBookkeeping 的最低系统要求，详见 [系统要求](/zh_Hans/installation/system_requirements)。

### 更新配置后不生效

ezBookkeeping 在启动时会加载配置文件或环境变量中的配置，如果您在运行过程中修改了配置项，需要重新启动 ezBookkeeping 以使新的配置生效。如果您修改了配置文件后没有重新启动 ezBookkeeping，新的配置将不会生效。

ezBookkeeping 在启动时会输出当前生效的配置项的值，您可以通过查看启动日志中的配置项值来确认是否正确加载了新的配置。

另外，前端界面中有些功能也依赖服务端的配置，ezBookkeeping 通过 `http://{YOUR_HOST_ADDRESS}/server_settings.js` 将服务端的配置传递给前端界面，请检查你的浏览器是否正确加载了该地址，如果浏览器缓存了该文件，请尝试清除浏览器缓存后重新加载页面。

### 内容显示异常

如果在使用 ezBookkeeping 的过程中遇到内容显示异常的问题，例如上传的用户头像和交易图片无法显示、验证邮箱和找回密码的邮件中包含的链接无法访问或者 OAuth 2.0 登录时无法正确跳转回 ezBookkeeping 等问题，可能是由于 ezBookkeeping 访问路径配置错误导致的。ezBookkeeping 在生成上述地址时会使用配置中的 `domain` 和 `root_url` 两个配置项。

请确保配置中的 `domain` 设置正确，如果你使用了 Nginx 等反向代理，并且访问协议或端口号与 ezBookkeeping 服务端提供的不同，还需要修改 `root_url`，具体请参考 [配置 - Web 服务器](/zh_Hans/configuration/#web-服务器)。ezBookkeeping 中用户上传的用户头像、交易图片的地址均依赖上述地址。

如果完成了上述设置，但图片依然无法显示，你可以通过浏览器的开发者工具检查图片的地址是否与设置的地址相同。如果不同请检查 ezBookkeeping 启动时输出的配置文件的内容是否与预期的一致，如果不同请检查设置或重新启动 ezBookkeeping。

### 导入数据报错

出于安全考虑，ezBookkeeping 并没有将导入数据时的详细错误信息展示在前端界面上，而是将这些错误信息记录在日志中。ezBookkeeping 在导入数据失败会记录出错的原因，以及受影响的行号或记录的索引。如果您在导入数据时遇到错误，请查看日志文件中的相关记录，以获取详细的错误信息和排查问题的线索。

### 其他问题

如果在使用 ezBookkeeping 的过程中遇到其他问题，可以参考 [常见问题](/zh_Hans/faq/) 页面，里面收集了一些常见问题及其解决方案。如果在常见问题中没有找到相关问题的解决方案，您可以通过以下方式获取社区帮助：

- 在 GitHub Discussions 中查找相关讨论：https://github.com/mayswind/ezbookkeeping/discussions
- 在 GitHub Issues 中查找相关问题：https://github.com/mayswind/ezbookkeeping/issues
- 如果上述方式都没有找到相关问题的解决方案，您可以在 GitHub Discussions 中提交一个新的讨论，描述您的问题并寻求社区的帮助
