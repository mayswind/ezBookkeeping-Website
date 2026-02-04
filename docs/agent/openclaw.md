---
title: Integration with OpenClaw
---

# Integration with OpenClaw

[OpenClaw](https://openclaw.ai/) is a personal AI assistant you run on your own devices. It supports integration with multiple common channels (such as WhatsApp, Telegram, Slack, etc.) and major large language model providers (such as OpenAI, Anthropic, Google AI, etc.), allowing users to use natural language to have AI agents perform various tasks locally.

ezBookkeeping provides data operations through an HTTP API, and also offers **ezBookkeeping API Tools** to simplify API calls by AI agents. These operations are further packaged into skills via **SKILL.md**, which OpenClaw can invoke to perform tasks such as bookkeeping and data queries.

## Install OpenClaw

Please refer to [Install - OpenClaw](https://docs.openclaw.ai/install) for installation instructions.

> [!CAUTION] Warning
> Use third-party large language model services with caution, as your private data will be sent to external model providers.

## Install ezBookkeeping SKILL

The OpenClaw-compatible **SKILL.md** for ezBookkeeping is available on [ClawHub](https://www.clawhub.ai/).

1. You can install it directly using the ClawHub CLI:

```bash
npx clawhub@latest install ezbookkeeping
```

2. Or download it from the following page:

[https://www.clawhub.ai/mayswind/ezbookkeeping](https://www.clawhub.ai/mayswind/ezbookkeeping)

## Configure ezBookkeeping API Tools

Unlike MCP (Model Context Protocol), ezBookkeeping API Tools use an API token. You must first create an API token in ezBookkeeping. For details, see [API - Usage](/httpapi/#usage).

It is recommended that you proactively configure the environment variables required by ezBookkeeping API Tools, including the ezBookkeeping server base URL and API token. For details, see [API - API Tool Script](/httpapi/#api-tool-script). If you do not configure these environment variables in advance, OpenClaw will prompt you to enter them during conversation.
