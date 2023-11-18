<template>
    <!-- implement a loader -->
    <!-- <div v-if="loading"
        class="absolute top-0 left-0 z-30 w-full h-screen bg-white bg-opacity-25 flex items-center justify-center">
        <OrbitLoader></OrbitLoader>
    </div> -->

    <nav class="py-8 px-2 lg:px-32 sticky top-0 z-10 bg-gray-50 shadow-2xl">
        <div class="flex mx-2 justify-between items-center">
            <div>
                <!-- Logo Here -->
                <!-- <logo></logo> -->
                <router-link :to="{ name: 'Home' }" class="font-bold text-xl lg:text-2xl">Charles Wahome
                    <span class="font-bold text-5xl text-red-500">+</span></router-link>
            </div>

            <!--  -->
            <div class="flex space-x-4 items-center">
                <router-link :to="{ name: 'Blog' }">Blog</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
// import OrbitLoader from "../Loaders/OrbitLoader.vue"

// const loading = false

</script>


<style scoped></style>