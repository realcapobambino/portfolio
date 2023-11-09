<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.toggle()
}


</script>

<template>
    <div class="">
        <select v-model="colorMode.preference"
            class="  text-gray-600 h-10 pl-5 pr-10 bg-white  focus:outline-none appearance-none dark:bg-gray-900 dark:text-white dark:border-gray-700 border-0">
            <option value="">Theme</option>
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</template>

<style lang="postcss">
body {
    @apply min-h-screen bg-white dark:bg-gray-800 dark:text-gray-200;
}
</style>