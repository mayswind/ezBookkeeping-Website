---
layout: home

hero:
    name: "ezBookkeeping"
    tagline: "A open source, lightweight, self-hosted personal finance app"
    actions:
        - theme: brand
          text: Get Started
          link: /installation
        - theme: alt
          text: View on GitHub
          link: https://github.com/mayswind/ezbookkeeping
        - theme: alt
          text: Live Demo
          link: https://ezbookkeeping-demo.mayswind.net

screenshots:
    - light: /images/en/desktop_screenshot_light.png
      dark: /images/en/desktop_screenshot_dark.png
      alt: Desktop Version
    - light: /images/en/mobile_screenshot_light.png
      dark: /images/en/mobile_screenshot_dark.png
      alt: Mobile Version

features:
    - title: Open Source & Self-Hosted
      icon: 🛠️
      details: Built for privacy and control
    - title: Lightweight & Fast
      icon: ⚡
      details: Optimized for performance, runs smoothly even on low-resource environments
    - title: Easy Installation
      icon: 📦
      details: Docker-ready <br/>
          Supports SQLite, MySQL, PostgreSQL <br/>
          Cross-platform (Windows, macOS, Linux) <br/>
          Works on x86, amd64, ARM architectures
    - title: User-Friendly Interface
      icon: 🎨
      details: UI optimized for both mobile and desktop <br/>
          PWA support for native-like mobile experience <br/>
          Dark mode
    - title: AI-Powered Features
      icon: 🤖
      details: Receipt image recognition <br/>
          Supports MCP (Model Context Protocol) for AI integration
    - title: Powerful Bookkeeping
      icon: 📘
      details: Two-level accounts and categories <br/>
          Attach images to transactions <br/>
          Location tracking with maps <br/>
          Recurring transactions <br/>
          Advanced filtering, search, visualization, and analysis
    - title: Localization & Globalization
      icon: 🌍
      details: Multi-language and multi-currency support <br/>
          Automatic exchange rates <br/>
          Multi-timezone awareness <br/>
          Custom formats for dates, numbers, and currencies
    - title: Security
      icon: 🔐
      details: Two-factor authentication (2FA) <br/>
          Login rate limiting <br/>
          Application lock (PIN code / WebAuthn)
    - title: Data Import/Export
      icon: 📑
      details: Supports CSV, OFX, QFX, QIF, IIF, Camt.052, Camt.053, MT940, GnuCash, Firefly III, Beancount, and more

sitemap:
    - name: Docs
      links:
        - name: Installation
          url: /installation/
        - name: Basic Usage
          url: /basic_usage/
        - name: Export & Import
          url: /export_and_import/
        - name: Command Line
          url: /command_line/
    - name: Resources
      links:
        - name: Release Notes
          url: https://github.com/mayswind/ezbookkeeping/releases
          external: true
        - name: Docker Repository
          url: https://hub.docker.com/r/mayswind/ezbookkeeping
          external: true
    - name: Help
      links:
        - name: FAQ
          url: /faq/
        - name: Comparison
          url: /comparison/
        - name: GitHub Discussions
          url: https://github.com/mayswind/ezbookkeeping/discussions
          external: true
---
