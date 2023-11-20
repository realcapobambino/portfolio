<template>
    <div class="">
        <!-- <NavBar></NavBar> -->

        <!--  -->
        <div class="bg-gray-100 dark:bg-gray-700">

            <!--  -->
            <slot></slot>

            <DarkModeSwitch />



        </div>
        <!-- <FooterBar></FooterBar> -->
    </div>
</template>

<script setup lang="ts">
// import NavBar from './NavBar.vue'

import DarkModeSwitch from '@/App/Common/Components/Buttons/DarkModeSwitch.vue'

// import FooterBar from './FooterBar.vue'

</script>

<style scoped></style>