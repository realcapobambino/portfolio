<template>
    <div class="container mx-auto my-24 md:px-6">

        <section class="mb-32 text-center">
            <h2 class="mb-12 text-3xl font-bold">
                My <u class="text-primary dark:text-primary-400">Skills</u>
            </h2>

            <div class="grid lg:gap-xl-12 gap-x-6 md:grid-cols-3 xl:grid-cols-4">
                <div class="mb-12" v-for="skill in skills">
                    <img :src="src" class="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20" alt=""
                        style="max-width: 100px" />
                    <p class="mb-2 font-bold">{{ skills.title }}</p>
                    <!-- <p class="text-neutral-500 dark:text-neutral-300">Co-founder</p> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const skills = ref([
    { id: 0, title: 'Javascript' },
    { id: 1, title: 'VueJs' },
    { id: 2, title: 'NodeJs' },
    { id: 3, title: 'PHP', src: 'https://img.icons8.com/nolan/64/php-logo.png' },
    { id: 4, title: 'SQL' },
    { id: 5, title: 'TailwindCSS' },
    { id: 6, title: 'Bootstrap' },
    { id: 7, title: 'Linux' },
])
</script>

<style scoped></style>