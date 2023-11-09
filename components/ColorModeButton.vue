<template>
    <div></div>
    <Toggle v-model="darkMode" off-label="Light" on-label="Dark" />
</template>

<script setup lang="ts">
import Toggle from '@vueform/toggle'
import { useState } from '#app'
import { onMounted, watch } from '@vue/runtime-core'

type Theme = 'light' | 'dark'

const LOCAL_STORAGE_THEME_KEY = 'theme'

const darkMode = useState('theme', () => false)

const setTheme = (newTheme: Theme) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    darkMode.value = newTheme === 'dark'
}

onMounted(() => {
    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches

    const themeFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

    if (themeFromLocalStorage) {
        setTheme(themeFromLocalStorage)
    } else {
        setTheme(isDarkModePreferred ? 'dark' : 'light')
    }
})

watch(darkMode, (selected) => {
    setTheme(selected ? 'dark' : 'light')
})
</script>

<style src="@vueform/toggle/themes/default.css"></style>
