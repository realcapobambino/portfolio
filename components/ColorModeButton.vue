<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.toggle()
}


</script>

<template>
    <div>
        <!-- <button @click="toggleColorMode" class="btn">Toggle {{ colorMode.preference }}</button> -->
        <select v-model="colorMode.preference"
            class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
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