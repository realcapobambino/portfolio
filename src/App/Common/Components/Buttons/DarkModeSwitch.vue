<script setup lang="ts">
import { Sun, Moon } from "lucide-vue-next";

import { ref } from "vue";


const darkMode = ref(false);

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle('dark', darkMode.value);
};
</script>


<template>
    <div @click="toggleDarkMode" class="fixed bottom-4 right-4 px-2 py-2 rounded-full border-2 bg-primary hover:"
        data-te-animation-init data-te-animation-start="onLoad" data-te-animation-reset="true"
        data-te-animation="[slide-right_1s_ease-in-out]">
        <Sun v-if="darkMode" />
        <Moon v-else />
    </div>
</template>