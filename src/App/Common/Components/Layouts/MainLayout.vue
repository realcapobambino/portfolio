<template>
    <div class="bg-neutral-50 dark:bg-neutral-900">

        <div v-if="loading" class="h-screen">
            <Vue3Lottie :animation-data="ProcessingLoader" :height="500" :width="500" />
        </div>


        <div v-else class="md:container mx-auto md:px-12">
            <NavBar></NavBar>


            <!--  -->
            <slot></slot>

            <DarkModeSwitch />



            <FooterBar></FooterBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import ProcessingLoader from '@/assets/lottie/processing.json'
// import { forceLoader } from '@/App/Common/Composables/forceLoader'
import NavBar from './NavBar.vue'
import DarkModeSwitch from '@/App/Common/Components/Buttons/DarkModeSwitch.vue'
import FooterBar from './FooterBar.vue'

import { ref } from "vue";

let loading = ref(true);

function setLoadingToFalse() {
    loading.value = false; // Update the existing loading variable
}

setTimeout(setLoadingToFalse, 3000); // 3000 milliseconds (3 seconds)



</script>

<style scoped></style>