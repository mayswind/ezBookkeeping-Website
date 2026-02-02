import { type HeadConfig, defineConfig, resolveSiteDataByRoute } from 'vitepress';

const websiteName: string = 'ezBookkeeping';
const websiteUrlRootUrl: string = 'https://ezbookkeeping.mayswind.net';
const demoWebsiteRootUrl: string = 'https://ezbookkeeping-demo.mayswind.net/';
const titleEn: string = 'ezBookkeeping - a open source, lightweight, self-hosted personal finance app';
const titleZhHans: string = 'ezBookkeeping - 开源、轻量、自托管 (self-hosted) 的个人记账应用';
const descriptionEn: string = 'ezBookkeeping is a open source, lightweight, self-hosted personal finance app with a user-friendly interface and powerful bookkeeping features.';
const descriptionZhHans: string = 'ezBookkeeping 是一款开源、轻量、自托管 (self-hosted) 的个人记账应用，拥有用户友好的界面和强大的记账功能。';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: titleEn,
    description: descriptionEn,
    srcDir: './docs',
    cleanUrls: true,
    metaChunk: true,
    lastUpdated: true,
    head: [
        ['meta', { name: 'baidu-site-verification', content: 'codeva-4I959p5AcD' }],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-742M0QP5YJ' }
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-742M0QP5YJ');`
        ],
        [
            'script',
            {},
            `var _hmt = _hmt || [];
            (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?4333fa5f143611a9ca52b3d861f37f34";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],
    sitemap: {
        hostname: websiteUrlRootUrl,
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: websiteName,
        logo: '/images/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mayswind/ezbookkeeping' }
        ],
        footer: {
            message: 'Released under the <a href="https://github.com/mayswind/ezBookkeeping/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2020-2026 MaysWind.'
        },
        editLink: {
            pattern: 'https://github.com/mayswind/ezBookkeeping-Website/edit/main/docs/:path'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh_Hans: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                displayDetails: '显示详情',
                                resetButtonTitle: '清除查询条件',
                                backButtonTitle: '返回',
                                noResultsText: '无法找到相关结果',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换',
                                    closeText: '关闭'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    locales: {
        root: {
            lang: 'en',
            label: 'English',
            themeConfig: {
                nav: [
                    { text: 'Installation', link: '/installation/' },
                    { text: 'Configuration', link: '/configuration/' },
                    { text: 'Usage', link: '/basic_usage/' },
                    { text: 'API', link: '/httpapi/' },
                    { text: 'MCP', link: '/mcp/' },
                    { text: 'Demo', link: demoWebsiteRootUrl },
                    {
                        text: 'Download',
                        items: [
                            { text: 'Packaged Files', link: 'https://github.com/mayswind/ezbookkeeping/releases' },
                            { text: 'Docker Images', link: 'https://hub.docker.com/r/mayswind/ezbookkeeping' }
                        ]
                    },
                    { text: 'FAQ', link: '/faq/' }
                ],
                sidebar: [
                    {
                        text: 'Installation',
                        collapsed: false,
                        items: [
                            { text: 'Get Started', link: '/installation/' },
                            { text: 'Run with Docker', link: '/installation/installation-docker' },
                            { text: 'Run on Kubernetes', link: '/installation/installation-kubernetes' },
                            { text: 'Install from binary', link: '/installation/installation-binary' },
                            { text: 'Install with 1Panel (Community Supported)', link: '/installation/installation-1panel' },
                            { text: 'Reverse proxy configuration', link: '/installation/reverse-proxy-configuration' }
                        ]
                    },
                    {
                        text: 'Administration',
                        collapsed: false,
                        items: [
                            { text: 'Configuration', link: '/configuration/' },
                            { text: 'Exchange Rates', link: '/exchange_rates/' }
                        ]
                    },
                    {
                        text: 'Usage',
                        collapsed: false,
                        items: [
                            { text: 'Basic Usage', link: '/basic_usage/' },
                            { text: 'Export & Import', link: '/export_and_import/' },
                            { text: 'Model Context Protocol', link: '/mcp/' },
                            { text: 'Command Line', link: '/command_line/' }
                        ]
                    },
                    {
                        text: 'API',
                        collapsed: false,
                        items: [
                            { text: 'Introduction', link: '/httpapi/' },
                            { text: 'Token API', link: '/httpapi/token_api' },
                            { text: 'Account API', link: '/httpapi/account_api' },
                            { text: 'Transaction Category API', link: '/httpapi/transaction_category_api' },
                            { text: 'Transaction Tag API', link: '/httpapi/transaction_tag_api' },
                            { text: 'Transaction API', link: '/httpapi/transaction_api' },
                            { text: 'Exchange Rates API', link: '/httpapi/exchange_rate_api' }
                        ]
                    },
                    {
                        text: 'Contributing',
                        collapsed: false,
                        items: [
                            { text: 'Developing', link: '/developing/' },
                            { text: 'Translating', link: '/translating/' }
                        ]
                    },
                    {
                        text: 'Help',
                        collapsed: false,
                        items: [
                            { text: 'FAQ', link: '/faq/' }
                        ]
                    }
                ],
                outline: {
                    level: [2, 3]
                }
            }
        },
        zh_Hans: {
            lang: 'zh-Hans',
            label: '中文 (简体)',
            link: '/zh_Hans',
            title: titleZhHans,
            description: descriptionZhHans,
            themeConfig: {
                nav: [
                    { text: '安装', link: '/zh_Hans/installation/' },
                    { text: '配置', link: '/zh_Hans/configuration/' },
                    { text: '使用', link: '/zh_Hans/basic_usage/' },
                    { text: 'API', link: '/zh_Hans/httpapi/' },
                    { text: 'MCP', link: '/zh_Hans/mcp/' },
                    { text: '演示', link: demoWebsiteRootUrl },
                    {
                        text: '下载',
                        items: [
                            { text: '打包文件', link: 'https://github.com/mayswind/ezbookkeeping/releases' },
                            { text: 'Docker 镜像', link: 'https://hub.docker.com/r/mayswind/ezbookkeeping' }
                        ]
                    },
                    { text: '常见问题', link: '/zh_Hans/faq/' }
                ],
                sidebar: [
                    {
                        text: '安装',
                        collapsed: false,
                        items: [
                            { text: '快速开始', link: '/zh_Hans/installation/' },
                            { text: '通过 Docker 运行', link: '/zh_Hans/installation/installation-docker' },
                            { text: '在 Kubernetes 上运行', link: '/zh_Hans/installation/installation-kubernetes' },
                            { text: '从二进制包安装', link: '/zh_Hans/installation/installation-binary' },
                            { text: '使用 1Panel 安装（社区支持）', link: '/zh_Hans/installation/installation-1panel' },
                            { text: '反向代理的配置', link: '/zh_Hans/installation/reverse-proxy-configuration' }
                        ]
                    },
                    {
                        text: '管理',
                        collapsed: false,
                        items: [
                            { text: '配置', link: '/zh_Hans/configuration/' },
                            { text: '汇率', link: '/zh_Hans/exchange_rates/' }
                        ]
                    },
                    {
                        text: '使用',
                        collapsed: false,
                        items: [
                            { text: '基础使用', link: '/zh_Hans/basic_usage/' },
                            { text: '导出 & 导入', link: '/zh_Hans/export_and_import/' },
                            { text: 'Model Context Protocol', link: '/zh_Hans/mcp/' },
                            { text: '命令行', link: '/zh_Hans/command_line/' }
                        ]
                    },
                    {
                        text: 'API',
                        collapsed: false,
                        items: [
                            { text: '介绍', link: '/zh_Hans/httpapi/' },
                            { text: '令牌 API', link: '/zh_Hans/httpapi/token_api' },
                            { text: '账户 API', link: '/zh_Hans/httpapi/account_api' },
                            { text: '交易分类 API', link: '/zh_Hans/httpapi/transaction_category_api' },
                            { text: '交易标签 API', link: '/zh_Hans/httpapi/transaction_tag_api' },
                            { text: '交易 API', link: '/zh_Hans/httpapi/transaction_api' },
                            { text: '汇率 API', link: '/zh_Hans/httpapi/exchange_rate_api' }
                        ]
                    },
                    {
                        text: '贡献',
                        collapsed: false,
                        items: [
                            { text: '开发', link: '/zh_Hans/developing/' },
                            { text: '翻译', link: '/zh_Hans/translating/' }
                        ]
                    },
                    {
                        text: '帮助',
                        collapsed: false,
                        items: [
                            { text: '常见问题', link: '/zh_Hans/faq/' }
                        ]
                    }
                ],
                outline: {
                    label: '页面导航',
                    level: [2, 3]
                },
                editLink: {
                    text: '在 GitHub 上编辑此页面'
                },
                lastUpdated: {
                    text: '最后更新于'
                },
                docFooter: {
                    prev: '上一页',
                    next: '下一页'
                },
                darkModeSwitchLabel: '主题',
                lightModeSwitchTitle: '切换到浅色模式',
                darkModeSwitchTitle: '切换到深色模式',
                sidebarMenuLabel: '菜单',
                returnToTopLabel: '返回顶部',
                langMenuLabel: '选择语言'
            }
        }
    },
    transformPageData: (pageData, ctx) => {
        const site = resolveSiteDataByRoute(
            ctx.siteConfig.site,
            pageData.relativePath
        );

        const title: string = pageData.title ? `${pageData.title} | ${site.title}` : `${site.title}`;
        const description: string = `${pageData.description || site.description}`;
        const relativePath: string = pageData.relativePath
            .replace(/index\.md$/, '')
            .replace(/\.md$/, '');
        const pureDocumentRelativePath: string = relativePath
            .replace(/^zh_Hans\//i, '');

        const currentUrl: string = `${websiteUrlRootUrl}/${relativePath}`;
        const alternateEnglishUrl: string = `${websiteUrlRootUrl}/${pureDocumentRelativePath}`;
        const alternateChineseSimplifiedUrl: string = `${websiteUrlRootUrl}/zh_Hans/${pureDocumentRelativePath}`;

        const image: string = websiteUrlRootUrl + '/images/og-image.png';

        ((pageData.frontmatter.head ??= []) as HeadConfig[]).push(
            ['link', { rel: 'canonical', href: currentUrl }],
            ['link', { rel: 'alternate', hreflang: 'x-default', href: alternateEnglishUrl }],
            ['link', { rel: 'alternate', hreflang: 'en', href: alternateEnglishUrl }],
            ['link', { rel: 'alternate', hreflang: 'zh-Hans', href: alternateChineseSimplifiedUrl }],
            ['meta', { property: 'og:url', content: currentUrl }],
            ['meta', { property: 'og:title', content: title }],
            ['meta', { property: 'og:description', content: description }],
            ['meta', { property: 'og:image', content: image }],
            ['meta', { property: 'og:type', content: 'website' }],
            ['meta', { property: 'og:locale', content: site.lang }],
            ['meta', { property: 'og:site_name', content: websiteName }],
            ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
            ['meta', { property: 'twitter:title', content: title }],
            ['meta', { property: 'twitter:site_name', content: description }],
            ['meta', { property: 'twitter:image', content: image }],
            [
                'script',
                { type: 'application/ld+json' },
                `{ "@context": "https://schema.org", "@type": "WebSite", "name": "${websiteName}", "headline": "${title}", "description": "${description}", "url": "${currentUrl}" }`
            ]
        );
    }
});
