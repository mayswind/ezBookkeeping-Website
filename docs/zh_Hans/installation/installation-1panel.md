---
title: "使用 1Panel 安装（社区支持）"
---

# 使用 1Panel 安装（社区支持）

> 对于 1Panel 的安装说明，请参阅 [https://1panel.cn/docs/v2/installation/online_installation/](https://1panel.cn/docs/v2/installation/online_installation/)。

## 安装 ezBookkeeping

登录 1Panel，进入“应用商店”，搜索“ezBookkeeping”，点击“安装”即可。

[![如何在 1Panel 中安装 ezBookkeeping](/images/zh_Hans/how_to_install_ezBookkeeping_in_1Panel.png)](/images/zh_Hans/how_to_install_ezBookkeeping_in_1Panel.png){target=_blank}

安装时请根据实际需求配置以下参数：

- “版本号”：选择最新的稳定版本
- “HTTP 端口”：默认为 `8080`，可按需修改
- “高级设置”：可选 “端口外部访问”

保持“默认配置”也可以完成安装，可根据实际需求调整。

[![如何填写安装 ezBookkeeping 在 1Panel 中的参数](/images/zh_Hans/how_to_fill_in_parameters_when_installing_ezBookkeeping_in_1Panel.png)](/images/zh_Hans/how_to_fill_in_parameters_when_installing_ezBookkeeping_in_1Panel.png){target=_blank}

1Panel 安装的 ezBookkeeping 使用 `sqlite3` 作为数据库，并完全使用 `ezbookkeeping.ini` 配置文件进行配置。

配置文件位于应用安装目录中 `conf` 文件夹下，更多信息，请访问 [配置](/zh_Hans/configuration/)。

## 使用 ezBookkeeping

安装完成后，进入“已安装”页面，点击“跳转”即可进入 ezBookkeeping 的“WebUI”页面。

> [!NOTE] 提示
> 使用前建议在“面板设置”页面设置好“默认访问地址”。
