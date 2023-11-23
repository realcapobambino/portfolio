<template>
    <!-- Main navigation container -->
    <nav class=" flex w-full flex-wrap items-center justify-between py-6 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 lg:py-8"
        data-te-navbar-ref>
        <div class="flex w-full flex-wrap items-center justify-between px-3">
            <div>
                <router-link
                    class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                    :to="{ name: 'Home' }">
                    <h1 class="text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-LuckiestGuy">capo.io</h1>
                </router-link>
            </div>

            <!-- Hamburger button for mobile view -->
            <div class="flex">
                <button
                    class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                    type="button" data-te-collapse-init data-te-target="#navbarSupportedContent4"
                    aria-controls="navbarSupportedContent4" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- Hamburger icon -->
                    <span class="[&>svg]:w-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                            <path fill-rule="evenodd"
                                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>

            </div>
            <!-- Collapsible navbar container -->
            <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-4 lg:!flex lg:basis-auto"
                id="navbarSupportedContent4" data-te-collapse-item>
                <!-- Left links -->
                <ul class="list-style-none mr-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                    <!-- Home link -->
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1 hidden" data-te-nav-item-ref>
                        <a class="text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" href="#" data-te-nav-link-ref>Dashboard</a>
                    </li>
                </ul>

                <div class="flex items-center">
                    <a href="#about" type="button" data-te-ripple-init data-te-ripple-color="light"
                        class="cursor-pointer mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-bold font-LuckiestGuy uppercase leading-normal text-neutral-900 dark:text-neutral-100 transition duration-150 ease-in-out dark:hover:text-primary-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 motion-reduce:transition-none">
                        About
                    </a>
                    <router-link :to="{ name: 'Blog' }" data-te-ripple-init data-te-ripple-color="light"
                        class="mr-3 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-bold font-LuckiestGuy uppercase leading-normal text-neutral-900 dark:text-neutral-100 transition duration-150 ease-in-out dark:hover:text-primary-600 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 ">
                        Blog
                    </router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import {
    Collapse,
    initTE,
} from "tw-elements";
import { onMounted } from "vue";


onMounted(() => {
    initTE({ Collapse });
})





</script>

<style scoped></style>