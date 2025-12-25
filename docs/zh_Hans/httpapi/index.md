---
title: API
---

# API

ezBookkeeping 为前端界面提供 HTTP API 接口，同时这些接口也可以被用户直接使用以实现更多自动化的功能。

## 使用

ezBookkeeping 的 API 通过令牌来验证用户身份，您可以修改配置文件中的 `enable_api_token` 或修改环境变量开启生成 API 令牌的功能，具体可以参考 [配置 - 安全](/zh_Hans/configuration/#安全)。开启后在桌面版的 “用户设置” -> “安全” 页面中会出现 “生成令牌” 按钮，也可以通过 ezBookkeeping 的命令行工具 `user-session-new` 进行生成，具体可以参考 [命令行](/zh_Hans/command_line/#userdata)。

然后您就可以使用该令牌访问 API。

```shell
$ curl -H "Authorization: Bearer ${TOKEN}" "http://${YOUR_HOST_ADDRESS}/api/v1/${API_PATH}"
```

API 接口的返回结果是 JSON 对象，如下：

**成功返回**

```json
{
    "result": ..., // 实际数据
    "success": true
}
```

**失败返回**

```json
{
    "errorCode": xxxxxx, // 错误码
    "errorMessage": "xxx", // 错误信息
    "path": "/api/v1/{API_PATH}", // API 完整路径
    "success": false
}
```

## 时区

部分接口需要 `X-Timezone-Name` 或 `X-Timezone-Offset` 请求头来指定时区信息。

- `X-Timezone-Name` 的值为 IANA 时区名称，例如北京时间为 `Asia/Shanghai`。
- `X-Timezone-Offset` 的值为当前时区相对于 UTC 的偏移分钟数，例如北京时间为 UTC+8，则该值为 `480`。

如果同时提供了这两个请求头，则以 `X-Timezone-Name` 为准。
