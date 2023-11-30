<template>
    <div class="bg-neutral-100 dark:bg-neutral-900 scroll-smooth">

        <div v-if="loading" class="h-screen overflow-hidden">
            <Vue3Lottie :animation-data="ProcessingLoader" :height="500" :width="500" />
        </div>


        <div v-else class="">
            <NavBar></NavBar>


            <!--  -->
            <slot></slot>

            <DarkModeSwitch />
            <!-- <BackToTop /> -->



            <FooterBar></FooterBar>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import ProcessingLoader from '@/assets/lottie/processing.json'
import NavBar from './NavBar.vue'
import DarkModeSwitch from '@/App/Components/Buttons/DarkModeSwitch.vue'
// import BackToTop from "../Buttons/BackToTop.vue";
import FooterBar from './FooterBar.vue'
import { ref } from "vue";
let loading = ref(true);

function setLoadingToFalse() {
    loading.value = false;
}

setTimeout(setLoadingToFalse, 1000); //

</script>

<style scoped></style>