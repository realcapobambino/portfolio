<template>
    <!-- Main navigation container -->
    <nav class="mx-auto top-0 flex w-full flex-nowrap items-center justify-between bg-[#FBFBFB] py-4 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start"
        data-te-navbar-ref>
        <div class="container mx-auto flex w-full flex-wrap items-center justify-between px-3">
            <div class="ml-2">
                <a class="text-xl text-neutral-800 dark:text-neutral-200" href="/">capo.io</a>
            </div>
            <!-- Hamburger button for mobile view -->
            <button
                class="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent14"
                aria-controls="navbarSupportedContent14" aria-expanded="false" aria-label="Toggle navigation">
                <!-- Hamburger icon -->
                <span class="[&>svg]:w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>

            <!-- Collapsible navbar container -->
            <div class="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent14" data-te-collapse-item>
                <!-- Left links -->
                <ul class="list-style-none ml-auto flex flex-col pl-0 lg:mt-1 lg:flex-row" data-te-navbar-nav-ref>
                    <!-- Link -->
                    <li class="my-4 pl-2 lg:my-0 lg:pl-2 lg:pr-1" data-te-nav-item-ref>
                        <a class="active disabled:text-black/30 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            aria-current="page" href="#about" data-te-nav-link-ref>About</a>
                    </li>
                    <!-- Link -->
                    <li class="mb-4 pl-2 lg:mb-0 lg:pl-0 lg:pr-1" data-te-nav-item-ref>
                        <a class="p-0 text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                            href="/blog" data-te-nav-link-ref>Blog</a>
                    </li>
                    <!-- <li class="mb-2 pl-2 lg:mb-0 lg:pl-0 lg:pr-1">
                        <button @click="toggleDarkMode"
                            class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
                            {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
                        </button>
                    </li> -->
                </ul>
            </div>
            <div>
                <button @click="toggleDarkMode" class="bg-green-500 text-white px-4 py-2 rounded">
                    {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// Initialization for ES Users
import {
    Collapse,
    Dropdown,
    initTE,
} from "tw-elements";

initTE({ Collapse, Dropdown });





const darkMode = ref(false)

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    document.documentElement.classList.toggle('dark', darkMode.value)
}

</script>

<style scoped></style>