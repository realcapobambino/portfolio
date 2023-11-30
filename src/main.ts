import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
    .use(router)
    .use(Vue3Lottie)
    .mount('#app')
