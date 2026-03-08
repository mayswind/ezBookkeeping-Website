---
title: Integration with OpenClaw
---

# Integration with OpenClaw

[OpenClaw](https://openclaw.ai/) is a personal AI assistant you run on your own devices. It supports integration with multiple common channels (such as WhatsApp, Telegram, Slack, etc.) and major large language model providers (such as OpenAI, Anthropic, Google AI, etc.), allowing users to use natural language to have AI agents perform various tasks locally.

ezBookkeeping provides an [Agent Skill](/agent/skill) that allows AI agents to operate ezBookkeeping through the HTTP API. This skill is also compatible with OpenClaw, which can invoke to perform tasks such as recording transactions and querying data in ezBookkeeping.

## Install OpenClaw

Please refer to [Install - OpenClaw](https://docs.openclaw.ai/install) for installation instructions.

> [!CAUTION] Warning
> Use third-party large language model services with caution, as your private data will be sent to external model providers.

## Install ezBookkeeping SKILL

The OpenClaw-compatible **SKILL.md** for ezBookkeeping is available on [ClawHub](https://clawhub.ai).

1. You can install it directly using the ClawHub CLI:

```shell
npx clawhub@latest install ezbookkeeping
```

2. Or download it from the following page:

[https://clawhub.ai/mayswind/ezbookkeeping](https://clawhub.ai/mayswind/ezbookkeeping)

## Configure ezBookkeeping API Tools

Unlike MCP (Model Context Protocol), ezBookkeeping API Tools use an API token. You must first create an API token in ezBookkeeping. For details, see [API - Usage](/httpapi/#usage).

You can create a `.env` file in your home directory that defines the two environment variables `EBKTOOL_SERVER_BASEURL` for the ezBookkeeping server address and `EBKTOOL_TOKEN` for the API token, for example:

```
EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

If you do not configure these environment variables in advance, OpenClaw will prompt you to enter them during the conversation. For more details on using the ezBookkeeping API Tools, refer to the [API - API Tool Script](/httpapi/#api-tool-script) documentation.

> [!NOTE] TIP
> Since ClawHub does not currently support packaging PowerShell scripts as part of a SKILL, when using OpenClaw on Windows, you need to manually download the [ebktools.ps1](https://raw.githubusercontent.com/mayswind/ezbookkeeping/refs/heads/main/scripts/ebktools.ps1) script and place it in the scripts directory of the ezBookkeeping SKILL (e.g., `C:\Users\{YOUR_USERNAME}\.openclaw\skills\ezbookkeeping\scripts\`).
