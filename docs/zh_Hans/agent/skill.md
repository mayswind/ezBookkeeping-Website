---
title: Agent 技能
---

# Agent 技能

[Agent 技能 (Agent Skills)](https://agentskills.io) 是一种轻量的、开放的格式，通过专业知识和工作流程扩展 AI Agent 的能力。

由于 AI Agent 非常擅长使用命令行工具，ezBookkeeping 将 HTTP API 封装成命令行工具 **ezBookkeeping API Tools**，从而简化 AI Agent 对 ezBookkeeping API 接口的调用。ezBookkeeping API Tools 在设计时，让默认输出的结果在保证语义的情况下尽可能压缩，以减少大语言模型的 Token 消耗。

同时，ezBookkeeping 也提供了使用 ezBookkeeping API Tools 的 [Agent 技能](https://github.com/mayswind/ezbookkeeping/tree/main/skills/ezbookkeeping)，AI Agent 可以直接通过该技能来完成记账、查询等任务。

## 安装技能

1. 您可以直接通过 [Skills](https://skills.sh/) 命令行工具安装：

```shell
npx skills add mayswind/ezbookkeeping@ezbookkeeping
```

2. 或者可以访问如下地址下载：

ezBookkeeping 的技能包括两部分，分别是 SKILL.md 和对应的 ezBookkeeping API Tools 命令行工具，您可以直接从 GitHub 仓库下载这两部分内容。

[https://github.com/mayswind/ezbookkeeping/blob/main/skills/ezbookkeeping](https://github.com/mayswind/ezbookkeeping/blob/main/skills/ezbookkeeping)

下载完成后的目录结构如下：

```
.
├── ezbookkeeping
│   ├── SKILL.md
│   └── scripts
│       ├── ebktools.ps1
│       └── ebktools.sh
```

然后你就可以将 `ezbookkeeping` 目录安装到你的 AI Agent 所在平台对应的技能目录下。

> [!CAUTION] 警告
> 请谨慎使用第三方的大语言模型服务，因为你的隐私数据会发送给第三方大模型提供方。

## 配置 ezBookkeeping API Tools

与 MCP (Model Context Protocol) 不同，ezBookkeeping API Tools 使用的是 API 令牌，您需要先在 ezBookkeeping 中创建一个 API 令牌，具体请参考 [API - 使用](/zh_Hans/httpapi/#使用)。

然后您可以在上述的 `scripts` 目录、ezBookkeeping 技能目录或您的用户主目录下创建一个 `.env` 文件，包含 `EBKTOOL_SERVER_BASEURL` ezBookkeeping 服务器地址和 `EBKTOOL_TOKEN` API 令牌两个环境变量，例如：

```
EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

完成配置后，AI Agent 就可以通过上述技能来调用 ezBookkeeping 的 API 接口了，更多关于 ezBookkeeping API Tools 的使用说明，请参考 [API - API 工具脚本](/zh_Hans/httpapi/#api-工具脚本) 文档。
