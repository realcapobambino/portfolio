<template>
    <nav class="flex p-4 justify-between">
        <NuxtLink to="/" class="text-white font-bold text-xl">Charles Wahome</NuxtLink>
        <div class="flex">
            <div class="hidden md:block space-x-4 xs:hidden gap-4">
                <nuxt-link to="/blog"
                    class="text-white text-lg hover:font-bold hover:bg-blue-600  hover:rounded-lg">Blog</nuxt-link>
                <nuxt-link to="/projects"
                    class="text-white text-lg hover:font-bold hover:bg-blue-600  hover:rounded-lg">Projects</nuxt-link>
                <nuxt-link to="/about"
                    class="text-white text-lg hover:font-bold hover:bg-blue-600  hover:rounded-lg">About</nuxt-link>

            </div>
            <div class="md:hidden flex">
                <!-- Display a responsive menu button on small screens (md and smaller screens) -->
                <button @click="toggleMenu" class="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </button>
            </div>
            <div v-if="isMenuOpen" class="md:hidden absolute top-0 right-0 bg-gray-800 w-64 py-4 mt-14">
                <nuxt-link to="/blog" class="block text-white text-lg mb-2">Blog</nuxt-link>
                <nuxt-link to="/projects" class="block text-white text-lg mb-2">Projects</nuxt-link>
                <nuxt-link to="/about" class="block text-white text-lg mb-2">About</nuxt-link>
            </div>
            <div>
                <ColorModeButton class="m-2  p-2" />
            </div>
        </div>
    </nav>
</template>

<script setup>

const isMenuOpen = ref(false)
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}


</script>

<style  scoped></style>