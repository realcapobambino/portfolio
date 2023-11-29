<template>
    <!-- Main navigation container -->
    <nav class="flex flex-wrap items-center justify-between px-4 py-2 lg:mx-auto lg:container text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-8"
        data-te-navbar-ref>
        <div class="flex flex-wrap items-center justify-between w-full px-3">
            <div>
                <router-link
                    class="flex items-center gap-1 mx-2 my-1 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                    :to="{ name: 'Home' }">
                    <svg class="w-[59px] h-[59px] fill-[#8e8e8e]" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">

                        <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32z">
                        </path>

                    </svg>
                    <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-ShortStack">
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
                        class="cursor-pointer mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xl flex-col-reverseont-bold font-bold font-ShortStack leading-normal text-neutral-900 dark:text-neutral-100 transition duration-150 ease-in-out dark:hover:text-primary-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        about
                    </a>
                    <!--                     
                        ADD LINK TO BLOG
                     -->
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