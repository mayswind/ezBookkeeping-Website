<template>
    <div class="home-hero-screenshots" v-if="frontmatter['screenshots'] && frontmatter['screenshots'].length">
        <a class="home-hero-screenshot light" target="_blank"
           :key="screenshot['light']"
           :href="screenshot['light']"
           v-for="screenshot in frontmatter['screenshots']">
            <img :src="screenshot['light']" :alt="screenshot['alt']" />
        </a>
        <a class="home-hero-screenshot dark" target="_blank"
           :key="screenshot['dark']"
           :href="screenshot['dark']"
           v-for="screenshot in frontmatter['screenshots']">
            <img :src="screenshot['dark']" :alt="screenshot['alt']" />
        </a>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<style>
html:not(.dark) .home-hero-screenshots {
    > .home-hero-screenshot.dark {
        display: none;
    }
}

html.dark .home-hero-screenshots {
    > .home-hero-screenshot.light {
        display: none;
    }
}

.home-hero-screenshots {
    margin-top: 40px;

    > .home-hero-screenshot {
        + .home-hero-screenshot > img {
            margin-top: 32px;
        }

        > img {
            width: 100%;
            border-radius: 8px;
            box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;

            &:hover {
                transform: scale(1.01);
                transition: transform 0.3s ease;
                box-shadow: rgba(0, 0, 0, 0.2) 0 8px 24px;
            }
        }
    }
}
</style>
