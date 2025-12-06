import { defineConfig } from 'vitepress';

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
        ['meta', { property: 'og:url', content: websiteUrlRootUrl }],
        ['meta', { property: 'og:title', content: titleEn }],
        ['meta', { property: 'og:description', content: descriptionEn }],
        ['meta', { property: 'og:image', content: websiteUrlRootUrl + '/images/og-image.png' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'en_US' }],
        ['meta', { property: 'og:site_name', content: 'ezBookkeeping' }],
        ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
        ['meta', { name: 'twitter:title', content: titleEn }],
        ['meta', { name: 'twitter:description', content: descriptionEn }],
        ['meta', { name: 'twitter:image', content: websiteUrlRootUrl + '/images/og-image.png' }],
        ['meta', { name: 'canonical', content: websiteUrlRootUrl }],
        ['meta', { name: 'baidu-site-verification', content: 'codeva-4I959p5AcD' }],
        // alternate links
        ['link', { rel: 'alternate', hreflang: 'x-default', href: websiteUrlRootUrl }],
        ['link', { rel: 'alternate', hreflang: 'en-US', href: websiteUrlRootUrl }],
        ['link', { rel: 'alternate', hreflang: 'zh-CN', href: websiteUrlRootUrl + '/zh_Hans' }],
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-742M0QP5YJ' }
        ],
        [
            'script',
            { type: 'application/ld+json' },
            `{ "@context": "https://schema.org", "@type": "WebSite", "name": "ezBookkeeping", "headline": "${titleEn}", "description": "${descriptionEn}", "url": "${websiteUrlRootUrl}" }`
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
        siteTitle: 'ezBookkeeping',
        logo: '/images/logo.png',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/mayswind/ezbookkeeping' }
        ],
        footer: {
            message: 'Released under the <a href="https://github.com/mayswind/ezBookkeeping/blob/main/LICENSE">MIT License</a>.',
            copyright: 'Copyright © 2020-2025 MaysWind.'
        },
        editLink: {
            pattern: 'https://github.com/mayswind/ezBookkeeping-Website/edit/main/:path'
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
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
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
                    { text: 'API', link: '/httpapi/' },
                    { text: 'MCP', link: '/mcp/' },
                    { text: 'Demo', link: demoWebsiteRootUrl },
                    { text: 'FAQ', link: '/faq/' }
                ],
                sidebar: [
                    {
                        text: 'Installation',
                        items: [
                            { text: 'Run with Docker', link: '/installation/installation-docker' },
                            { text: 'Run on Kubernetes', link: '/installation/installation-kubernetes' },
                            { text: 'Install from binary', link: '/installation/installation-binary' },
                            { text: 'Installing with 1Panel', link: '/installation/installation-1panel' },
                            { text: 'Reverse proxy configuration', link: '/installation/reverse-proxy-configuration' }
                        ]
                    },
                    {
                        text: 'Administration',
                        items: [
                            { text: 'Configuration', link: '/configuration/' },
                            { text: 'Exchange Rates', link: '/exchange_rates/' }
                        ]
                    },
                    {
                        text: 'Usage',
                        items: [
                            { text: 'Export & Import', link: '/export_and_import/' },
                            { text: 'MCP', link: '/mcp/' },
                            { text: 'Command Line', link: '/command_line/' }
                        ]
                    },
                    {
                        text: 'API',
                        items: [
                            { text: 'Token API', link: '/httpapi/token_api' },
                            { text: 'Account API', link: '/httpapi/account_api' },
                            { text: 'Transaction Category API', link: '/httpapi/transaction_category_api' },
                            { text: 'Transaction Tag API', link: '/httpapi/transaction_tag_api' },
                            { text: 'Transaction API', link: '/httpapi/transaction_api' }
                        ]
                    },
                    {
                        text: 'Contributing',
                        items: [
                            { text: 'Developing', link: '/developing/' },
                            { text: 'Translating', link: '/translating/' }
                        ]
                    },
                    {
                        text: 'Help',
                        items: [
                            { text: 'FAQ', link: '/faq/' }
                        ]
                    }
                ]
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
                    { text: 'API', link: '/zh_Hans/httpapi/' },
                    { text: 'MCP', link: '/zh_Hans/mcp/' },
                    { text: '演示', link: demoWebsiteRootUrl },
                    { text: '常见问题', link: '/zh_Hans/faq/' }
                ],
                sidebar: [
                    {
                        text: '安装',
                        items: [
                            { text: '通过 Docker 运行', link: '/zh_Hans/installation/installation-docker' },
                            { text: '在 Kubernetes 上运行', link: '/zh_Hans/installation/installation-kubernetes' },
                            { text: '从二进制包安装', link: '/zh_Hans/installation/installation-binary' },
                            { text: '使用 1Panel 安装', link: '/zh_Hans/installation/installation-1panel' },
                            { text: '反向代理的配置', link: '/zh_Hans/installation/reverse-proxy-configuration' }
                        ]
                    },
                    {
                        text: '管理',
                        items: [
                            { text: '配置', link: '/zh_Hans/configuration/' },
                            { text: '汇率', link: '/zh_Hans/exchange_rates/' }
                        ]
                    },
                    {
                        text: '使用',
                        items: [
                            { text: '导出 & 导入', link: '/zh_Hans/export_and_import/' },
                            { text: 'MCP', link: '/zh_Hans/mcp/' },
                            { text: '命令行', link: '/zh_Hans/command_line/' }
                        ]
                    },
                    {
                        text: 'API',
                        items: [
                            { text: '令牌 API', link: '/zh_Hans/httpapi/token_api' },
                            { text: '账户 API', link: '/zh_Hans/httpapi/account_api' },
                            { text: '交易分类 API', link: '/zh_Hans/httpapi/transaction_category_api' },
                            { text: '交易标签 API', link: '/zh_Hans/httpapi/transaction_tag_api' },
                            { text: '交易 API', link: '/zh_Hans/httpapi/transaction_api' }
                        ]
                    },
                    {
                        text: '贡献',
                        items: [
                            { text: '开发', link: '/zh_Hans/developing/' },
                            { text: '翻译', link: '/zh_Hans/translating/' }
                        ]
                    },
                    {
                        text: '帮助',
                        items: [
                            { text: '常见问题', link: '/zh_Hans/faq/' }
                        ]
                    }
                ],
                outline: {
                    label: '页面导航'
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
                lightModeSwitchTitle: '切换到浅色模式',
                darkModeSwitchTitle: '切换到深色模式',
                sidebarMenuLabel: '菜单',
                returnToTopLabel: '返回顶部',
                langMenuLabel: '选择语言'
            }
        }
    }
});
