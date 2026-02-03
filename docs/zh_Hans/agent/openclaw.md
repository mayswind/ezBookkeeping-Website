---
title: OpenClaw
---

# OpenClaw

[OpenClaw](https://openclaw.ai/) 是一个在你自己设备上运行的个人 AI 助手，其支持对接多种常见的通道（如 WhatsApp、Telegram、Slack 等）以及对接常见的大语言模型提供方（如 OpenAI、Anthropic、Google AI 等），实现用户通过自然语言让 AI Agent 在自己的设备上完成各项任务。

ezBookkeeping 通过 HTTP API 提供了对数据的操作，并提供了 **ezBookkeeping API Tools** 简化了 AI Agent 对 HTTP API 的调用，并通过 **SKILL.md** 将这些操作封装成技能，OpenClaw 可以调用这些技能来完成记账、查询等任务。

## 安装 OpenClaw

请参考 [安装 - OpenClaw](https://docs.openclaw.ai/install) 进行安装。

> [!CAUTION] 警告
> 请谨慎使用第三方的大语言模型服务，因为你的隐私数据会发送给第三方大模型提供方。

## 安装 ezBookkeeping SKILL

ezBookkeeping 适配 OpenClaw 的 SKILL.md 已经发布在 [ClawHub](https://www.clawhub.ai/)。

1. 您可以直接通过 ClawHub 的命令行工具安装：

```bash
npx clawhub@latest install ezbookkeeping
```

2. 或者可以访问如下地址下载：

[https://www.clawhub.ai/mayswind/ezbookkeeping](https://www.clawhub.ai/mayswind/ezbookkeeping)

## 配置 ezBookkeeping API Tools

与 MCP (Model Context Protocol) 不同，ezBookkeeping API Tools 使用的是 API 令牌，您需要先在 ezBookkeeping 中创建一个 API 令牌，具体请参考 [API - 使用](/zh_Hans/httpapi/#使用)。

然后建议您主动配置 ezBookkeeping API Tools 需要的环境变量，包括 ezBookkeeping 的服务器地址和 API 令牌，具体请参考 [API - API 工具脚本](/zh_Hans/httpapi/#api-工具脚本)。如果您没有主动配置这些环境变量，与 OpenClaw 对话时，OpenClaw 也会提示您输入这些信息。
