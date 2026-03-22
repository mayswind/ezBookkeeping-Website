---
layout: home

hero:
    name: "ezBookkeeping"
    tagline: "开源、轻量、自托管 (self-hosted) 的个人记账应用"
    actions:
        - theme: brand
          text: 快速开始
          link: /zh_Hans/installation
        - theme: alt
          text: 在 GitHub 上查看
          link: https://github.com/mayswind/ezbookkeeping
        - theme: alt
          text: 在线演示
          link: https://ezbookkeeping-demo.mayswind.net

screenshots:
    - light: /images/zh_Hans/desktop_screenshot_light.png
      dark: /images/zh_Hans/desktop_screenshot_dark.png
      alt: 桌面版
    - light: /images/zh_Hans/mobile_screenshot_light.png
      dark: /images/zh_Hans/mobile_screenshot_dark.png
      alt: 移动版

features:
    - title: 开源 & 自托管
      icon: 🛠️
      details:
          专为隐私与数据自主而设计
    - title: 轻量 & 快速
      icon: ⚡
      details:
          资源占用极少，即便在资源有限的设备上也运行流畅
    - title: 安装简单
      icon: 📦
      details:
          支持 Docker <br/>
          支持 SQLite、MySQL、PostgreSQL 多种数据库 <br/>
          跨平台运行 (Windows, macOS, Linux) <br/>
          支持 x86, amd64, ARM 架构
    - title: 友好的用户界面
      icon: 🎨
      details:
          针对手机与桌面优化的 UI <br/>
          支持 PWA，带来接近原生 App 的使用体验 <br/>
          深色模式
    - title: AI 驱动的功能
      icon: 🤖
      details:
          收据图片识别 <br/>
          支持 MCP (Model Context Protocol) 用于 AI 集成 <br/>
          支持 Agent Skill 和 API 命令行脚本工具用于 AI 集成
    - title: 强大的记账功能
      icon: 📘
      details:
          两级账户与两级分类 <br/>
          支持交易图片附件 <br/>
          记录交易地理位置并在地图上展示 <br/>
          支持定时交易 <br/>
          高级筛选、搜索、数据可视化与分析功能
    - title: 本地化与国际化支持
      icon: 🌍
      details:
          多语言与多币种支持 <br/>
          多汇率数据源及汇率自动更新 <br/>
          多时区支持 <br/>
          自定义日期、数字与货币格式
    - title: 安全可靠
      icon: 🔐
      details:
          两步认证 (2FA) <br/>
          OIDC 外部认证<br/>
          登录频次限制 <br/>
          应用锁 (PIN 码 / WebAuthn)
    - title: 数据导入 & 导出
      icon: 📑
      details:
          支持 CSV、OFX、QFX、QIF、IIF、Camt.052、Camt.053、MT940、GnuCash、Firefly III、Beancount、随手记，以及支付宝、微信支付及京东金融的对账单 等多种格式

sitemap:
    - name: 文档
      links:
        - name: 安装指南
          url: /zh_Hans/installation/
        - name: 基础使用
          url: /zh_Hans/basic_usage/
        - name: 导出 & 导入
          url: /zh_Hans/export_and_import/
        - name: 与 OpenClaw 集成
          url: /zh_Hans/agent/openclaw
    - name: 资源
      links:
        - name: 更新日志
          url: https://github.com/mayswind/ezbookkeeping/releases
          external: true
        - name: Docker 仓库
          url: https://hub.docker.com/r/mayswind/ezbookkeeping
          external: true
    - name: 帮助
      links:
        - name: 常见问题
          url: /zh_Hans/faq/
        - name: 功能对比
          url: /zh_Hans/comparison/
        - name: GitHub 讨论区
          url: https://github.com/mayswind/ezbookkeeping/discussions
          external: true
---
