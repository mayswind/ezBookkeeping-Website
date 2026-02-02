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

## API 工具脚本

ezBookkeeping 提供了一个名为 **ezBookkeeping API Tools** 的工具脚本，方便用户或 AI Agent 使用 **sh** 或 **Powershell** 命令行调用 API 接口，您只需要配置 ezBookkeeping 服务器的地址和 API 令牌两个环境变量即可使用。

**Linux / macOS**

您需要确保系统中已经安装了 `grep`、`sed`、`awk`、`date`、`curl` 和 `jq` 命令行工具，然后您可以通过以下命令下载该脚本：

```shell
$ curl https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.sh -o ebktools.sh
$ chmod +x ebktools.sh
```

参考如下命令配置环境变量：

```shell
$ export EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
$ export EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
````

然后就可以运行脚本：

```shell
$ ./ebktools.sh
```

**Windows**

你可以通过以下 Powershell 命令下载该脚本：

```powershell
PS > Invoke-WebRequest -Uri https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.ps1 -OutFile .\ebktools.ps1
```

参考如下命令配置环境变量：

```powershell
PS > $env:EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
PS > $env:EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

然后就可以运行脚本：

```powershell
PS > .\ebktools.ps1
```
