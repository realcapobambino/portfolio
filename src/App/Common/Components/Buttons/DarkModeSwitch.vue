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
    <div @click="toggleDarkMode" class="fixed bottom-4 right-4 px-4 py-2 rounded border-2 border-double border-red-400">
        <Sun v-if="darkMode" />
        <Moon v-else />
    </div>
</template>
