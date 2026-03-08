---
title: 与 OpenClaw 集成
---

# 与 OpenClaw 集成

[OpenClaw](https://openclaw.ai/) 是一个在你自己设备上运行的个人 AI 助手，其支持对接多种常见的通道（如 WhatsApp、Telegram、Slack 等）以及对接常见的大语言模型提供方（如 OpenAI、Anthropic、Google AI 等），实现用户通过自然语言让 AI Agent 在自己的设备上完成各项任务。

ezBookkeeping 为 AI Agent 提供了通过 HTTP API 操作 ezBookkeeping 的 [Agent 技能](/zh_Hans/agent/skill)，这个技能也适用于 OpenClaw，OpenClaw 可以调用这个技能在 ezBookkeeping 执行记账、查询等任务。

## 安装 OpenClaw

请参考 [安装 - OpenClaw](https://docs.openclaw.ai/install) 进行安装。

> [!CAUTION] 警告
> 请谨慎使用第三方的大语言模型服务，因为你的隐私数据会发送给第三方大模型提供方。

## 安装 ezBookkeeping SKILL

ezBookkeeping 适配 OpenClaw 的 SKILL.md 已经发布在 [ClawHub](https://clawhub.ai)。

1. 您可以直接通过 ClawHub 的命令行工具安装：

```shell
npx clawhub@latest install ezbookkeeping
```

2. 或者可以访问如下地址下载：

[https://clawhub.ai/mayswind/ezbookkeeping](https://clawhub.ai/mayswind/ezbookkeeping)

## 配置 ezBookkeeping API Tools

与 MCP (Model Context Protocol) 不同，ezBookkeeping API Tools 使用的是 API 令牌，您需要先在 ezBookkeeping 中创建一个 API 令牌，具体请参考 [API - 使用](/zh_Hans/httpapi/#使用)。

然后您可以在您的用户主目录下创建一个 `.env` 文件，包含 `EBKTOOL_SERVER_BASEURL` ezBookkeeping 服务器地址和 `EBKTOOL_TOKEN` API 令牌两个环境变量，例如：

```
EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

如果您没有主动配置这些环境变量，与 OpenClaw 对话时，OpenClaw 也会提示您输入这些信息。ezBookkeeping API Tools 使用的更多说明，请参考 [API - API 工具脚本](/zh_Hans/httpapi/#api-工具脚本) 文档。

> [!NOTE] 提示
> 由于当前 ClawHub 不支持将 Powershell 脚本打包为 SKILL 的一部分，因此在 Windows 上使用 OpenClaw 时，您需要手动下载 [ebktools.ps1](https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.ps1) 脚本并放置在 ezBookkeeping SKILL 的 `scripts` 目录下（例如 `C:\Users\{YOUR_USERNAME}\.openclaw\skills\ezbookkeeping\scripts\`）。
