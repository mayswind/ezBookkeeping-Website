<template>
    <div class="home-hero-screenshots" v-if="frontmatter['screenshots'] && frontmatter['screenshots'].length">
        <a class="home-hero-screenshot" target="_blank"
           :key="screenshot['src']"
           :href="screenshot['src']"
           v-for="screenshot in frontmatter['screenshots']">
            <img :src="screenshot['src']" :alt="screenshot['alt']" />
        </a>
    </div>
</template>

<script setup>
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<style>
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
