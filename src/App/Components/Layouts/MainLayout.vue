<template>
    <div class="bg-neutral-50 dark:bg-neutral-900">

        <div v-if="loading" class="h-screen overflow-hidden">
            <Vue3Lottie :animation-data="ProcessingLoader" :height="500" :width="500" />
        </div>


        <div v-else class="">
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
import NavBar from './NavBar.vue'
import DarkModeSwitch from '@/App/Components/Buttons/DarkModeSwitch.vue'
import FooterBar from './FooterBar.vue'

import { ref } from "vue";

let loading = ref(true);

function setLoadingToFalse() {
    loading.value = false;
}

setTimeout(setLoadingToFalse, 1000); //

</script>

<style scoped></style>