---
title: API
---

# API

ezBookkeeping provides HTTP API for the frontend interface, and these API can also be used directly by users to implement more automation functions.

## Usage

The API of ezBookkeeping verifies user identity by tokens. You can enable the option to generate API tokens by updating `enable_api_token` in the configuration file or by setting the environment variable. For details, see [Configuration - Security](/configuration/#security). After enabled, the "Generate Token" button will appear on "User Settings" -> "Security" page in the desktop version, and you can also generate the token by the `user-session-new` command in ezBookkeeping's CLI, for more details, see the [Command Line](/command_line/#userdata).

Then you can use the token to access the API.

```shell
$ curl -H "Authorization: Bearer ${TOKEN}" "http://${YOUR_HOST_ADDRESS}/api/v1/${API_PATH}"
```

The response of API is JSON object like the following:

**Successful response**

```json
{
    "result": ..., // The acutal data
    "success": true
}
```

**Failed response**

```json
{
    "errorCode": xxxxxx, // The error code
    "errorMessage": "xxx", // The error message
    "path": "/api/v1/{API_PATH}", // The API full path
    "success": false
}
```

## Timezone

Some APIs require `X-Timezone-Offset` or `X-Timezone-Name` request headers to specify timezone information. The value of `X-Timezone-Offset` is the offset in minutes of the current timezone from UTC. For example, for Beijing Time which is UTC+8, the value is `480`; the value of `X-Timezone-Name` is the IANA timezone name, for example, for Beijing Time it is `Asia/Shanghai`. If both headers are provided, `X-Timezone-Name` takes precedence.
