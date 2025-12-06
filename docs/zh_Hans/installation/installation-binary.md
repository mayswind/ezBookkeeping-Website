---
title: "从二进制包安装"
---

# 从二进制包安装

最新发布版本：

[![最新发布版本](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

下载并解压缩压缩包，然后执行下列命令：

```shell
$ ./ezbookkeeping server run
```

执行完该命令后，ezBookkeeping 将会以默认的配置启动，并监听端口 `8080`。 如果你想修改配置，你可以使用 `--conf-path` 参数指定自定义配置路径或你可以直接修改 `conf/config.ini` 文件。更多信息，请访问 [配置](/zh_Hans/configuration/)。

如果你有 `systemd` 并且你想使用 `systemd` 管理 ezBookkeeping，你可以在 `/lib/systemd/system`（Debian/Ubuntu）或 `/usr/lib/systemd/system`（CentOS）下创建一个服务单元配置。例如，你可以下载 [示例配置](https://github.com/mayswind/ezbookkeeping/blob/main/etc/systemd/ezbookkeeping.service) 到 `/lib/systemd/system/ezbookkeeping.service`，创建名为 `ezbookkeeping` 的用户和分组并根据实际路径修改配置文件中的路径。

然后你就可以通过下列的命令启动 ezBookkeeping：

```shell
$ systemctl start ezbookkeeping
```

还可以让 ezBookkeeping 在系统启动时自动运行：

```shell
$ systemctl enable ezbookkeeping
```
