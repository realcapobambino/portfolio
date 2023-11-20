<script setup lang="ts">
import { ref } from "vue";

const darkMode = ref(false);

const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    document.documentElement.classList.toggle('dark', darkMode.value);
};
</script>


<template>
    <button @click="toggleDarkMode" class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded">
        {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>
