---
title: API
---

# API

ezBookkeeping 为前端界面提供 HTTP API 接口，同时这些接口也可以被用户直接使用以实现更多自动化的功能。但请注意，ezBookkeeping 的 HTTP API 并不是面向普通用户的，本文档中的内容也可能不够详细，更多内容请参考源代码。

## 使用

ezBookkeeping 的 API 通过令牌来验证用户身份，您可以修改配置文件中的 `enable_api_token` 或修改环境变量开启生成 API 令牌的功能，具体可以参考 [配置](/zh_Hans/configuration/#安全)。开启后在桌面版的 “用户设置” -> “安全” 页面中会出现 “生成令牌” 按钮，也可以通过 ezBookkeeping 的命令行工具 `user-session-new` 进行生成，具体可以参考 [命令行](/zh_Hans/command_line/#userdata)。

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
