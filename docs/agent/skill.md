---
title: Agent Skill
---

# Agent Skill

[Agent Skills](https://agentskills.io) are a lightweight, open format for extending AI agent capabilities with specialized knowledge and workflows.

Since AI agents are well suited to using command line tools, ezBookkeeping provides **ezBookkeeping API Tools**, which wrap the HTTP API as a command line interface to simplify how AI agents interact with ezBookkeeping APIs. The default output of ezBookkeeping API Tools is designed to be as compact as possible while preserving semantics, in order to reduce token consumption when used with large language models.

In addition, ezBookkeeping provides a [SKILL.md](https://github.com/mayswind/ezbookkeeping/blob/main/SKILL.md) file for using ezBookkeeping API Tools. AI agents can directly use this skill to perform tasks such as recording transactions and querying data.

## Install Skill

The ezBookkeeping skill consists of two parts: the [SKILL.md](https://github.com/mayswind/ezbookkeeping/blob/main/SKILL.md) file and the corresponding ezBookkeeping API Tools command line utility. You can download both components directly from the GitHub repository.

1. SKILL.md: https://github.com/mayswind/ezbookkeeping/blob/main/SKILL.md
2. ezBookkeeping API Tools: https://github.com/mayswind/ezbookkeeping/tree/main/scripts

The directory structure after downloading is as follows:

```
.
├── ezbookkeeping-skill
│   ├── SKILL.md
│   └── scripts
│       ├── ebktools.ps1
│       └── ebktools.sh
```

You can then install the `ezbookkeeping-skill` directory into the appropriate skills directory of the platform where your AI agent.

> [!CAUTION] Warning
> Use third-party large language model services with caution, as your private data will be sent to external model providers.

## Configure ezBookkeeping API Tools

Unlike MCP (Model Context Protocol), ezBookkeeping API Tools use an API token. You must first create an API token in ezBookkeeping. For details, see [API - Usage](/httpapi/#usage).

You can create a `.env` file in the `scripts` directory mentioned above, in the ezBookkeeping skill directory, or in your user home directory that defines the two environment variables `EBKTOOL_SERVER_BASEURL` for the ezBookkeeping server address and `EBKTOOL_TOKEN` for the API token, for example:

```
EBKTOOL_SERVER_BASEURL="https://{YOUR_HOST_ADDRESS}"
EBKTOOL_TOKEN="{YOUR-API-TOKEN}"
```

After completing the configuration, the AI agent can call the ezBookkeeping API through the skill described above. For more details on how to use ezBookkeeping API Tools, refer to the [API - API Tool Script](/httpapi/#api-tool-script) documentation.
