import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import './custom.css';

import HomeHeroScreenshots from './components/HomeHeroScreenshots.vue';
import HomeSitemap from './components/HomeSitemap.vue';

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            "home-hero-actions-after": () => h(HomeHeroScreenshots),
            "home-features-after": () => h(HomeSitemap)
        });
    }
} satisfies Theme;
