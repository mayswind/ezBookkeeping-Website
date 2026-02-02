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

Some APIs require `X-Timezone-Name` or `X-Timezone-Offset` request headers to specify timezone information.

- The value of `X-Timezone-Name` is the IANA timezone name, for example, for Beijing Time it is `Asia/Shanghai`.
- The value of `X-Timezone-Offset` is the offset in minutes of the current timezone from UTC. For example, for Beijing Time which is UTC+8, the value is `480`.

If both headers are provided, `X-Timezone-Name` takes precedence.

## API Tool Script

ezBookkeeping provides a tool script called **ezBookkeeping API Tools** that allows users or AI agents to conveniently call the API endpoints from the command line using **sh** or **PowerShell**. You only need to configure two environment variables: the ezBookkeeping server address and the API token.

**Linux / macOS**

Make sure the following command-line tools are installed on your system: `grep`, `sed`, `awk`, `date`, `curl`, and `jq`. Then download the script with the following commands:

```shell
$ curl https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.sh -o ebktools.sh
$ chmod +x ebktools.sh
```

Configure the environment variables as shown below:

```shell
$ export EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
$ export EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

Then run the script:

```shell
$ ./ebktools.sh
```

**Windows**

Download the script using the following PowerShell command:

```powershell
PS > Invoke-WebRequest -Uri https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.ps1 -OutFile .\ebktools.ps1
```

Configure the environment variables as shown below:

```powershell
PS > $env:EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
PS > $env:EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

Then run the script:

```powershell
PS > .\ebktools.ps1
```
