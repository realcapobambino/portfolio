<template>
    <div class="px-6 py-12 text-center md:px-12 lg:text-left">
        <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
            <div class="grid items-center gap-12 lg:grid-cols-2">
                <div class="mt-12 lg:mt-0">
                    <h1
                        class="text-neutral-900 dark:text-neutral-100 mt-2 mb-6 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                        Hello<span class="text-primary">.</span> <br /><span class="text-primary font-RussoOne">I am
                            {{ developerName }}</span>
                    </h1>
                    <VueWriter :array="roles"
                        class="mt-2 mb-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-ShortStack" />
                    <div class="tracking-tight font-serif text-neutral-900 dark:text-neutral-100 text-left">
                        Architecting virtual adventures through code chronicles. Crafting scalable and evergreen software,
                        infusing the web with artistry, pixel by pixel.
                    </div>
                    <div class="mt-4">
                        <a href="mailto:charleswkariuki007@gmail.com" type="button" data-te-ripple-init
                            data-te-ripple-color="light"
                            class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                            Hire Me
                        </a>
                    </div>
                </div>
                <div class="hidden lg:block mb-12 lg:mb-0">
                    <Vue3Lottie :animation-data="LottieJSON" :height="500" :width="500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import LottieJSON from '@/assets/lottie/lottiejson.json'

import VueWriter from 'vue-writer'



const developerName = 'Charles Wahome';
let roles = ["Full Stack Developer", "Linux Enthusiast", "Gaming Enthusiast"]
</script>

<style scoped>
/*  */

/*  */
</style>
