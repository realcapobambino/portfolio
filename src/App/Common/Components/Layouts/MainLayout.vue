<template>
    <div class="bg-gray-50">
        <NavBar></NavBar>

        <!--  -->
        <div class="min-h-screen bg-gray-50">

            <!--  -->
            <slot></slot>


        </div>

    </div>
</template>

<script setup lang="ts">
import NavBar from './NavBar.vue'

</script>

<style scoped></style>