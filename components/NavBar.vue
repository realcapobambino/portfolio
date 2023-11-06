<template>
    <div class="container">
        <nav class="flex p-4 m-2 justify-between">
            <NuxtLink to="/" class="text-black dark:text-white font-bold text-2xl dark:hover:text-violet-600">
                <span
                    class="before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-violet-600 relative inline-block">
                    <span class="relative text-white">Charles Wahome</span>
                </span>
            </NuxtLink>
            <div class="flex">
                <div class="hidden md:block space-x-4 xs:hidden gap-4">
                    <nuxt-link to="/blog"
                        class=" before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-violet-600 relative inline-block hover:bg-white">
                        <span class="relative text-white font-bold">Blog</span> </nuxt-link>
                    <nuxt-link to="/projects"
                        class=" before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-violet-600 relative inline-block hover:bg-white">
                        <span class="relative text-white font-bold">Projects</span> </nuxt-link>
                    <nuxt-link to="/about"
                        class=" before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-violet-600 relative inline-block hover:bg-white">
                        <span class="relative text-white font-bold">About</span> </nuxt-link>

                </div>
                <div class="md:hidden flex">
                    <!-- Display a responsive menu button on small screens (md and smaller screens) -->
                    <button @click="toggleMenu" class="text-black dark:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </button>
                </div>
                <div v-if="isMenuOpen" class="md:hidden absolute top-0 right-0 bg-gray-800 w-64 py-4 mt-14">
                    <nuxt-link to="/blog" class="block text-black dark:text-white text-lg mb-2">Blog</nuxt-link>
                    <nuxt-link to="/projects" class="block text-black dark:text-white text-lg mb-2">Projects</nuxt-link>
                    <nuxt-link to="/about" class="block text-black dark:text-white text-lg mb-2">About</nuxt-link>
                </div>
                <div class="mx-4">
                    <ColorModeButton class="" />
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<style  scoped></style>