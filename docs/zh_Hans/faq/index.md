---
title: 常见问题
---

# 常见问题

本页面列举了一些常见问题及答案。

如果页面中没有您要找的问题，您可以访问 [GitHub Discussions](https://github.com/mayswind/ezbookkeeping/discussions) 或 [GitHub Issues](https://github.com/mayswind/ezbookkeeping/issues) 查找更多内容。

## ezBookkeeping 支持哪些操作系统

运行 ezBookkeeping 服务端的操作系统与 Golang 支持的操作系统相同，下表列出了 ezBookkeeping 各个版本依赖的 Golang 的版本以及支持操作系统的最低版本。

| ezBookkeeping 版本 | Golang 版本 | 最低支持的操作系统 |
| --- | --- | --- |
| v1.1.x 及更新 | 1.25 | ≥ Linux Kernel 3.2 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.8.x ~ v1.0.x | 1.24 | ≥ Linux Kernel 3.2 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.7.x | 1.23 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 11 Big Sur |
| v0.6.x | 1.22 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 10.15 Catalina |
| v0.5.x | 1.21 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 10 / Windows Server 2016 <br/> ≥ macOS 10.15 Catalina |
| v0.2.x ~ v0.4.x | 1.20 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 7 / Windows Server 2008 R2 <br/> ≥ macOS 10.13 High Sierra |
| v0.1.x | 1.16 | ≥ Linux Kernel 2.6.32 <br/> ≥ Windows 7 / Windows Server 2008 R2 <br/> ≥ macOS 10.12 Sierra |

上述 Linux 版本仅表示 amd64、arm64 和 armv6/v7 架构下的版本，其他架构下支持的版本请参考 Golang 官方文档。更多 Golang 支持的操作系统的信息，请访问 Golang 官方文档：[https://go.dev/wiki/MinimumRequirements](https://go.dev/wiki/MinimumRequirements)。

如果你已经部署了 ezBookkeeping 的服务端程序，你可以直接使用你的浏览器访问 ezBookkeeping，下表列出了 ezBookkeeping 各个版本支持的浏览器的最低版本。

| ezBookkeeping 版本 | Chrome 最低版本 | Edge 最低版本 | Firefox 最低版本 | Safari 最低版本 |
| --- | --- | --- | --- | --- |
| v1.1.x 及更新 | ≥ 91 | ≥ 91 | ≥ 91 | ≥ 15.4 |
| v0.3.x ~ v1.0.x | ≥ 87 | ≥ 88 | ≥ 78 | ≥ 14.0 |

## ezBookkeeping 需要使用多少系统资源

ezBookkeeping 是基于 Golang 编写的轻量软件，需要资源非常少。ezBookkeeping 的二进制文件及依赖的静态文件大约占用 50MB 左右的磁盘空间，在 Linux/amd64 平台运行时只需要使用约 30MB 左右内存。

## 为什么在 Windows 系统上双击 `ezbookkeeping.exe` 无法打开应用程序

ezBookkeeping 并不是一个桌面应用，而是一个自托管的服务端程序，你可以参考 [安装](/zh_Hans/installation/) 文档中的步骤启动该服务端程序。当服务端程序运行后，你就可以使用你各种设备上的各种浏览器访问 ezBookkeeping。

当然，如果你愿意，你也可以在个人电脑上运行 ezBookkeeping 的服务端程序，并使用本机的浏览器访问它。

## ezBookkeeping 有哪些必须要设置的设置项

ezBookkeeping 是开箱即用的，无需设置任何额外的设置项即可启动运行。但是如果你正式使用它，还需要正确配置以下几个配置项：

1. `security` 节中的 `secret_key`（环境变量 `EBK_SECURITY_SECRET_KEY`）：需要设置为一个随机字符串，随机字符串也可以使用 ezBookkeeping 命令行工具生成 `ezbookkeeping security gen-secret-key`
2. `server` 节中的 `domain`（环境变量 `EBK_SERVER_DOMAIN`）：需要设置为用户访问的域名或者 IP 地址（例如 `ezbookkeeping-demo.mayswind.net` 或 `192.168.1.2`）。如果设置错误将会导致用户头像或交易图片无法显示，以及 ezBookkeeping 发送的邮件中的链接地址错误

如果你想使用 Nginx 等反向代理，并且暴露给用户的协议、端口号与 ezBookkeeping 的 Web 服务器设置不同，还需要设置 `server` 节中的 `root_url`（环境变量 `EBK_SERVER_ROOT_URL`），例如 `https://ezbookkeeping-demo.mayswind.net/`。

如果你想使用 MySQL 作为数据库，需要设置 `database` 节中的 `type`（环境变量 `EBK_DATABASE_TYPE`） 为 `mysql`，同时设置数据库主机 `host`（例如 `mysql.domain:3306` 或 `/var/run/mysqld/mysqld.sock`）、数据库名 `name`、数据库访问用户 `user`、数据库访问密码 `passwd`。

如果你想使用 PostgreSQL 作为数据库，需要设置 `database` 节中的 `type`（环境变量 `EBK_DATABASE_TYPE`） 为 `postgres`，同时设置数据库主机 `host`（例如 `pg.domain:5432`，或 `/var/run/postgresql`）、数据库名 `name`、数据库访问用户 `user`、数据库访问密码 `passwd`。

如果你想存储用户头像或交易图片，请检查或设置 [配置 - 对象存储](/zh_Hans/configuration/#对象存储) 中的设置。此外，ezBookkeeping 的汇率数据源、地图提供者、大语言模型（LLM）提供者等都可以自定义，具体请参考 [配置](/zh_Hans/configuration/)。

## ezBookkeeping 启动时提示没有权限（“permission denied”）

ezBookkeeping 的 `data` 目录（使用 SQLite 数据库时）、`storage` 目录（使用 `local_filesystem` 对象存储类型时）、`log` 目录都需要有运行 ezBookkeeping 进程用户的读写权限。以及 `conf/ezbookkeeping.ini` 文件需要有运行 ezBookkeeping 进程用户的读权限。

如果你使用 Docker 镜像部署，运行 ezBookkeeping 进程的用户 UID 为 **1000**、组 GID 为 **1000**，如果你将外部目录挂载到 Docker 容器内，需要保证对应目录有该 UID/GID 的权限。

## ezBookkeeping 文件存储的位置

ezBookkeeping 大部分数据都存储在数据库中，用户的头像、交易的图片文件存储在对象存储中。

### 数据库文件

如果你使用 SQLite 作为数据库，则数据库文件的默认位置为 ezBookkeeping 可执行文件目录下的 `data/ezbookkeeping.db`，如果你使用 Docker 镜像部署，则数据库文件的默认路径为容器内的 `/ezbookkeeping/data/ezbookkeeping.db`。你可以通过配置文件修改这个路径，更多信息见 [配置 - 数据库](/zh_Hans/configuration/#数据库) 中的 `db_path`。

如果你使用 MySQL 或 PostgreSQL，数据库文件通过数据库系统进行管理。

### 对象存储文件

如果你使用 `local_filesystem` 对象存储类型，则对象存储文件的默认位置为 ezBookkeeping 可执行文件目录下的 `storage` 目录，如果你使用 Docker 镜像部署，则数据库文件的默认路径为容器内的 `/ezbookkeeping/storage/`。你可以通过配置文件修改这个路径，更多信息见 [配置 - 对象存储](/zh_Hans/configuration/#对象存储) 中的 `local_filesystem_path`。

如果你使用 `minio` 或 `webdav` 对象存储类型，对象存储的文件通过对象存储系统进行管理。

## 如何迁移 ezBookkeeping 的数据

若您使用 MySQL 或 PostgreSQL 作为数据库，同时使用 `minio` 或 `webdav` 对象存储类型（或不存储用户头像或交易图片文件），则 ezBookkeeping 本身是无状态的，不需要迁移任何数据。

### 迁移数据库

1. SQLite → SQLite：只需要复制数据库目录下（默认为 `data`）下的 `.db` 文件即可
2. 其他组合（例如 SQLite → MySQL / PostgreSQL，或相反）：请在使用 ezBookkeeping 初始化新的数据库后，使用第三方工具将之前数据库的数据迁移到新的数据库中

ezBookkeeping 建议仅测试时使用 SQLite 数据库。如果您确定使用 ezBookkeeping，最好使用 MySQL 或 PostgreSQL 数据库，以避免后续迁移的成本。

> 示例：如何使用 DBeaver 迁移 SQLite 数据库到 MySQL
>
> 1. 首先使用 ezBookkeeping 配置新的 MySQL 数据库，并启动一次 ezBookkeeping 以便对 MySQL 数据库进行初始化
> 2. 在 DBeaver 里创建两个连接，分别连接之前的 SQLite 数据库和新的 MySQL 数据库
> 3. 在 DBeaver 中展开 SQLite 数据库，全选所有表，右键单击并在上下文菜单中选择 “导出数据”。在 “数据传送” 对话框中，设置 “导出目标” 为 “数据库”。点击 “下一步” 后，在 “目标容器” 选择 MySQL 数据库，继续点击 “下一步” 直到导入完成

### 迁移对象存储

1.  `local_filesystem` → `local_filesystem`：只需要复制对象存储目录下（默认为 `storage`）下所有文件即可
2. 其他组合（例如 `local_filesystem` → `minio` / `webdav`，或相反），请在使用 ezBookkeeping 初始化新的对象存储目录后，使用第三方工具将存储的文件进行同步

## ezBookkeeping 是否提供电脑桌面应用或手机 App

ezBookkeeping 是一个自托管的软件，通过你的浏览器进行访问，并不提供独立的桌面应用或手机 App。ezBookkeeping 为移动设备和电脑桌面提供了两套原生的用户界面，在手机上你可以将 ezBookkeeping 添加到主屏幕，使用体验如同手机原生应用。

## 如何将 ezBookkeeping 添加到手机主屏幕

ezBookkeeping 支持 PWA（Progressive Web Apps），你可以使用系统浏览器将其添加到手机屏幕，系统会自动缓存必须的静态文件。从手机主屏幕直接打开 ezBookkeeping 时会像手机原生应用一样。

详细步骤，参考 [教程](https://raw.githubusercontent.com/wiki/mayswind/ezbookkeeping/img/mobile/add_to_home_screen.gif)。

## ezBookkeeping 的默认用户是什么

在你第一次启动 ezBookkeeping 服务端后，ezBookkeeping 的数据库是空的，你需要新注册一个账号。ezBookkeeping 没有默认账号。

## ezBookkeeping 中如何计算资产和负债

ezBookkeeping 中资产账户与负债账户根据账户分类进行划分，其中 现金、借记账户、储蓄账户、虚拟账户、应收款项、定期存款、投资账户 为资产账户，余额记入资产。信用卡、负债账户 为负债账户，未清余额记入负债。

## 创建账户时的余额和未清余额分别是什么含义

创建资产账户时，您可以设置余额，该余额表示该账户中可用的资产数量（正数表示您拥有的资金）。

创建负债账户时，您可以设置未清余额，该余额表示该账户关联的负债金额（正数表示您的欠款）。

## 创建账户时的余额时间的用途是什么

ezBookkeeping 中的每一笔交易都需要有交易的时间。如果创建账户时设置了余额或未清余额，需要设置这笔余额设置交易的时间。后续添加交易到该账户时，交易时间不能早于该时间。

## 创建信用卡账户时设置的账单日的用途是什么

如果信用卡账户设置了账单日，你在交易列表筛选该账户的交易时可以选择当前账单周期或上个账单周期的日期范围。

## 为什么无法添加交易

ezBookkeeping 中的每一笔交易都需要包含账户和交易分类，并且交易分类是按交易类型分为支出分类、收入分类和转账分类，每一笔交易都需要设置一个分类的二级分类。如果你还没有创建账户和对应交易类型的二级分类，则无法创建新的交易。

## 如何记录退款

你可以创建一笔支出交易，交易金额为负数。

## 转账交易如何记录手续费

你可以创建一笔单独的支出交易，交易金额为手续费的金额。

## 如何记录别人借我的钱

你可以创建一个账户分类为 “应收款项” 的账户，然后创建一笔从你支出账户到该应收款项账户的转账交易。如果你在 ezBookkeeping 创建了默认的交易分类，你可以选择 “贷款债务 > 借出” 交易类型。

## 如何记录商户、付款人、收款人等信息

ezBookkeeping 采用交易标签来记录商户、付款人、收款人等信息。你可以为每笔交易添加一个或多个标签来记录这些信息。同时，ezBookkeeping 支持标签组，你可以创建不同的标签组来区分不同类型的标签。

## 为什么添加新交易时提示 “不能添加早于修改余额的交易”

出于语义清晰的原因，ezBookkeeping 对于每个账户只允许一个 “修改余额” 交易，同时这个交易必须是这个账户的第一笔交易，所以不能在 “修改余额” 交易之前创建交易。

## 如何修改账户余额

ezBookkeeping 只允许用户创建新账户时设置期初余额。在账户创建后，用户不能直接修改其余额。如果需要调整账户的余额，你需要记录一笔支出或收入交易。

当然，你可以在对账单页面中更新期末余额，系统会自动计算预期期末余额与实际余额的差异，并将金额填写到创建新交易的页面中。

## 添加交易时无法设置货币信息

ezBookkeeping 的货币信息不与每笔交易所关联，而是与账户所关联，每一个账户有且只能有一个货币。如果你现实中的账户支持多种货币，你可以将该账户的账户类型设置为 “多个子账户”，然后为每个货币设置一个子账户。

## 移动版编辑交易时如何从剪贴板中粘贴交易金额

在 ezBookkeeping 的金额输入框中轻触金额，即可弹出粘贴按钮（如下图），点击即可粘贴。此外，非 iOS 系统在交易编辑页面的菜单中也可以轻触粘贴项进行粘贴。

[![如何粘贴金额](/images/zh_Hans/number_pad_paste.png)](/images/zh_Hans/number_pad_paste.png){target=_blank}

## 如何修改添加交易时默认的账户

进入用户信息修改页面，可以修改创建新交易时默认使用的账户。

## 如何更改金额的颜色

进入用户信息修改页面，可以更改支出与收入金额的颜色。

## 移动版交易列表月份后的支出、收入金额后边的 “+” 是什么含义

在移动版中，交易列表默认是按需加载的，月份后的月度支出、收入金额使用已加载的数据进行计算。当该月交易数据加载不完全时，会显示 “+” 表示计算的数据不完整。如果需要查询月度总支出和收入金额，可以在日期筛选中选择一个完整月。在交易列表中查询一个完整月的数据时，ezBookkeeping 总是会加载该月的所有交易数据。

另外，不论在桌面版还是移动版中，如果汇率数据中缺少你账户的货币与你的默认货币的汇率数据，该账户的金额也无法合并到总金额中，也会显示 “+”。

## 如何按默认时区查看交易的时间

ezBookkeeping 的交易列表和交易详情页默认都是按交易时区显示交易时间。

在移动版中，你可以轻触交易详情页中的交易时间，在交易时区和默认时区间切换。

在桌面版中，你可以将鼠标移动到交易列表页的交易时间上，即可按默认时区显示交易时间。

## 移动版如何编辑、删除交易、账户

在 ezBookkeeping 移动版中，你可以在交易、账户的列表页面的每项内容左滑，即会出现 “编辑”、“删除” 按钮，轻触 “编辑” 即可进入编辑页面。

[![如何修改交易](/images/zh_Hans/how_to_edit_transaction.png)](/images/zh_Hans/how_to_edit_transaction.png){target=_blank}

## 移动版如何快速隐藏账户、分类、标签

在 ezBookkeeping 移动版中，你可以在账户、分类、标签的列表页面的每项长按，然后在该项右滑即可快速切换隐藏状态。

## 如何使用交易模板创建交易

1. 在移动版中，长按主界面底部导航栏的创建交易按钮，弹出的列表中包含用户创建的交易模板，轻触即可使用该模板创建交易
2. 在桌面版中，将鼠标移动到交易列表页的添加交易按钮，下拉列表中包含用户创建的交易模板，点击即可使用该模板创建交易

## 如何使用AI识图创建交易

首先，需要设置大语言模型（LLM）设置。在 `llm` 节中启用 `transaction_from_ai_image_recognition` 以允许AI识图创建交易。然后在 `llm_image_recognition` 节中设置 `llm_provider` 以及对应大语言模型提供者的 API Key、模型ID等设置。请确保指定的模型支持图片识别。更多信息见 [配置 - 大语言模型 (LLM)](/zh_Hans/configuration/#大语言模型-llm)。

在完成设置大语言模型的配置后，

1. 在移动版中，长按主界面底部导航栏的创建交易按钮，轻触弹出列表中的 “AI识图” 即可
2. 在桌面版中，将鼠标移动到交易列表页的添加交易按钮，点击下拉列表中的 “AI识图” 即可

## 统计分析中的 “账户流出”、“账户支出”、“账户流入”、“账户收入”、“净现金流”、“净收入”、“净资产” 如何计算

1. 账户流出（分类分析、趋势分析）：包含选中账户中支出和转出的交易
2. 账户支出（分类分析、趋势分析）：包含选中账户中支出的交易
3. 账户流入（分类分析、趋势分析）：包含选中账户中收入和转入的交易
4. 账户收入（分类分析、趋势分析）：包含选中账户中收入的交易
5. 净现金流（趋势分析）：包含选中账户中支出、转出、收入和转入的交易
6. 净收入（趋势分析）：包含选中账户中支出和收入的交易
7. 净资产（资产趋势）：选中资产账户的余额减负债账户未清余额

## 如何显示按标签分类的图表

由于每个交易可以包含零个到多个标签，所以标签本身并没有统计学上的意义。ezBookkeeping 提供了洞察探索功能，允许用户自由地构建不同条件的查询，并以此构建可视化的图表。你可以创建一个新的探索，并使用不同标签创建多个查询，然后即可以将 “查询” 作为 “轴 / 分类” 创建图表。

## 定时交易没有自动创建新的交易

ezBookkeeping 的定时交易当到达预定日期时会自动创建一笔交易，这笔生成的交易与用户自己创建的交易完全相同。在预定日期到达之前，没有交易会被创建。你需要保持 ezBookkeeping 的服务端一直运行。

## 为什么上传的用户头像和交易图片无法显示

请确保配置中的 `domain` 设置正确，如果你使用了 Nginx 等反向代理，并且访问协议或端口号与 ezBookkeeping 服务端提供的不同，还需要修改 `root_url`，具体请参考 [配置 - Web 服务器](/zh_Hans/configuration/#web-服务器)。ezBookkeeping 中用户上传的用户头像、交易图片的地址均依赖上述地址。

如果完成了上述设置，但图片依然无法显示，你可以通过浏览器的开发者工具检查图片的地址是否与设置的地址相同。如果不同请检查 ezBookkeeping 启动时输出的配置文件的内容是否与预期的一致，如果不同请检查设置或重新启动 ezBookkeeping。

## 为什么总金额时不包含特定货币的金额

ezBookkeeping 计算不同货币的总金额时依赖汇率数据，你需要确保当前用户的默认货币和所有参与计算总金额的货币均包含在当前汇率数据中。你可以参考 [汇率](/zh_Hans/exchange_rates/) 设置汇率数据源。

## 为什么统计分析中缺少特定货币的金额

在统计分析页面中，ezBookkeeping 将所有金额转换为你默认的货币进行计算。如果你账户的货币不在当前的汇率数据中，ezBookkeeping 无法转换这些交易，因此会将它们从结果中移除。你可以选择包含你所有账户货币的汇率数据源，参考 [汇率](/zh_Hans/exchange_rates/) 设置汇率数据源。

## 为什么删除交易后数据库里的记录没有删除

为了尽可能减少误删除后数据恢复的难度，ezBookkeeping 中交易、账户、分类和标签的删除操作都是逻辑删除，删除后只会在数据库中标记为删除，并不会真实从数据库物理删除这条记录。

## 为什么删除交易图片后对象存储里的图片文件没有删除

为了尽可能减少误删除后数据恢复的难度，ezBookkeeping 中交易图片的删除操作都是逻辑删除，只会对数据库中的交易图片记录标记为删除，并不会从数据库中物理删除交易图片记录，也不会物理删除对象存储中的图片文件。

## 如何修改验证邮件或密码重置邮件中的内容

你可以直接修改 ezBookkeeping 目录中 `templates/email/` 目录下的 `.tmpl` 文件。如果使用 Docker 部署 ezBookkeeping，也可以直接将修改后的文件挂载到该目录下。需要保证该文件有权限被 ezBookkeeping 的进程启动用户读取。修改后需要重新启动 ezBookkeeping 服务端程序生效。

## 如何修改AI识图等请求大语言模型（LLM）的提示词

你可以直接修改 ezBookkeeping 目录中 `templates/prompt/` 目录下的 `.tmpl` 文件。如果使用 Docker 部署 ezBookkeeping，也可以直接将修改后的文件挂载到该目录下。需要保证该文件有权限被 ezBookkeeping 的进程启动用户读取。修改后需要重新启动 ezBookkeeping 服务端程序生效。

## ezBookkeeping 使用了哪些第三方服务，以及是否会使用我的个人数据

ezBookkeeping 中的汇率数据、头像、地图以及大语言模型（LLM）服务依赖第三方服务，具体如下：

1. 汇率数据：当用户使用 ezBookkeeping 的汇率数据时，会通过 ezBookkeeping 的服务端程序获取你指定的汇率数据源数据，获取过程不包含当前用户或用户使用 ezBookkeeping 的设备和浏览器的任何信息
2. 头像：当用户使用 `gravatar` 类型的头像提供方时，用户的浏览器会将用户的邮箱地址的 MD5 哈希值发送给 Gravatar 服务端以获取用户头像，获取过程中包含用户浏览器的 User-Agent，即会包含用户的设备和浏览器信息，详情请参考 Gravatar 的隐私策略。使用 `internal` 类型的头像提供方或禁用用户头像时，不会依赖第三方服务
3. 地图：当用户使用 ezBookkeeping 中的地图功能查看交易位置时，用户的浏览器或 ezBookkeeping 的服务端程序会获取第三方的地图数据，获取过程中包含用户浏览器的 User-Agent，即会包含用户的设备和浏览器信息，但不包含具体的位置及 ezBookkeeping 用户信息。如果你的地图提供者设置为 Google 地图、百度地图或高德地图，ezBookkeeping 使用地图提供者的官方 JavaScript SDK，虽然 ezBookkeeping 本身不会与这些服务共享任何用户信息，但地图提供者可能会收集用户的浏览器、设备及位置数据，详情请参考地图提供方的隐私策略
4. 大语言模型-AI识图：当用户使用 ezBookkeeping 的AI识图功能时，ezBookkeeping 会将上传的收据图片以及用户所有的交易分类名称、账户名称和交易标签名称数据发送给大语言模型提供者。ezBookkeeping 默认不启用AI识图功能，同时 ezBookkeeping 建议使用自托管的大语言模型服务。如果你使用第三方的大语言模型服务，请注意潜在的隐私风险，并采取措施减少数据的泄露（例如，上传收据图片前去除敏感信息，以及避免在交易分类名、账户名、交易标签名中存储敏感信息等）
