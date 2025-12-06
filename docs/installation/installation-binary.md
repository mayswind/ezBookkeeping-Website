---
title: "Install from binary"
---

# Install from binary

Latest release:

[![Latest Release](https://img.shields.io/github/release/mayswind/ezbookkeeping?sort=semver&style=flat-square)](https://github.com/mayswind/ezbookkeeping/releases)

Download and extract the package, and execute the following command:

```shell
$ ./ezbookkeeping server run
```

After executing this command, ezBookkeeping will startup with the default configuration, and listen on port `8080`. If you want to modify configurations, you can use `--conf-path` parameter to specify a custom configuration path or you can modify `conf/config.ini` file directly. For more information, please visit [Configuration](/configuration/).

If you have `systemd` and you want to use `systemd` to manage ezBookkeeping, you can create a service unit configuration in `/lib/systemd/system` (Debian/Ubuntu) or `/usr/lib/systemd/system` (CentOS). For example, you can download the [Sample Configuration](https://github.com/mayswind/ezbookkeeping/blob/main/etc/systemd/ezbookkeeping.service) to `/lib/systemd/system/ezbookkeeping.service`, and create a user and a group named `ezbookkeeping`, and modify the path in the configuration according to the actual path.

Then you can start ezBookkeeping by following command:

```shell
$ systemctl start ezbookkeeping
```

And make ezBookkeeping automatically starts on boot:

```shell
$ systemctl enable ezbookkeeping
```
