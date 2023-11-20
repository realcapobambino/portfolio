LandingPage.vue
<template>
    <!-- <div class="min-h-screen flex items-center justify-center relative overflow-hidden" -->
    <div class="mx-auto h-screen overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat shadow-lg flex items-center justify-center"
        :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="text-center">
            <div class="text-6xl text-">{{ developerName }}</div>
            <div class="font-bold text-4xl text-">{{ jobTitle }}</div>
        </div>
        <div>

        </div>
    </div>
</template>

<script setup lang="ts">
import backgroundImage from '@/assets/images/landingpage.jpg'; // Adjust the path accordingly
const developerName = 'CHARLES WAHOME';
const jobTitle = 'Full Stack Developer';
</script>

<style scoped></style>
