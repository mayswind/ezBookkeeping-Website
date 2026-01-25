<template>
    <div class="home-footer-sitemap" v-if="frontmatter['sitemap'] && frontmatter['sitemap'].length">
        <div class="home-footer-sitemap-container">
            <div class="home-footer-sitemap-col" :key="groupIndex"
                 v-for="(linkGroup, groupIndex) in frontmatter['sitemap']">
                <h4>{{ linkGroup['name'] }}</h4>
                <ul>
                    <li :key="linkIndex" v-for="(link, linkIndex) in linkGroup['links']">
                        <a class="VPLink link"
                           :class="{ 'vp-external-link-icon': !!link['external'] }"
                           :href="link['url']" :target="link['external'] ? '_blank' : undefined"
                        >{{ link['name'] }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<style scoped>
.home-footer-sitemap {
    margin-top: 96px;
    padding: 42px 32px 42px 32px;
    background-color: var(--ebk-docs-footer-background-color);

    h4 {
        font-weight: 600;
        margin-bottom: 0.25em;
    }

    ul > li {
        font-size: 0.9em;
        opacity: 0.8;
    }

    > .home-footer-sitemap-container {
        max-width: 900px;
        margin: 0 auto;

        .home-footer-sitemap-col {
            margin-bottom: 2rem;
            break-inside: avoid;
        }
    }

    @media (min-width: 768px) {
        > .home-footer-sitemap-container {
            columns: 2;
        }
    }

    @media (min-width: 1024px) {
        > .home-footer-sitemap-container {
            columns: 3;
        }
    }
}
</style>
