<template>
    <!-- Main navigation container -->
    <nav class="flex flex-wrap items-center justify-between w-full px-4 py-2 mx-auto lg:container text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-8"
        data-te-navbar-ref>
        <div class="flex flex-wrap items-center justify-between w-full px-3">
            <div>
                <router-link
                    class="flex items-center gap-1 mx-2 my-1 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                    :to="{ name: 'Home' }">
                    <Component class="w-16 h-16 text-blue-500" />
                    <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-LuckiestGuy">
                        capo
                    </h1>
                </router-link>
            </div>

            <!-- Hamburger button for mobile view -->
            <div class="flex">
                <button
                    class="block px-2 bg-transparent border-0 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button" data-te-collapse-init data-te-target="#navbarSupportedContent4"
                    aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- Hamburger icon -->
                    <AlignJustify />
                </button>
            </div>
            <!-- Collapsible navbar container -->
            <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-4 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4" data-te-collapse-item>
                <!-- Left links -->
                <ul class="flex flex-col pl-0 mr-auto list-style-none lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                    <!-- Home link -->
                    <li class="hidden pl-2 my-4 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <a class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" href="#" data-te-nav-link-ref>Dashboard</a>
                    </li>
                </ul>

                <div class="flex items-center">
                    <a href="#about" type="button" data-te-ripple-init data-te-ripple-color="light"
                        data-te-smooth-scroll-init
                        class="cursor-pointer mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xl flex-col-reverseont-bold font-LuckiestGuy uppercase leading-normal text-neutral-900 dark:text-neutral-100 transition duration-150 ease-in-out dark:hover:text-primary-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        About
                    </a>
                    <!-- <router-link :to="{ name: 'Blog' }" data-te-ripple-init data-te-ripple-color="light"
                        class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-bold font-LuckiestGuy uppercase leading-normal text-neutral-900 dark:text-neutral-100 transition duration-150 ease-in-out dark:hover:text-primary-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 ">
                        Blog
                    </router-link> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {
    SmoothScroll,
    Collapse,
    initTE,
} from "tw-elements";
import { AlignJustify, Component } from 'lucide-vue-next';

import { onMounted } from "vue";


onMounted(() => {
    initTE({ Collapse, SmoothScroll });
})
</script>

<style scoped></style>