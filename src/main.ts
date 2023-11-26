import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'
import Vue3Lottie from 'vue3-lottie'
// import VueWriter from 'vue-writer'
import { inject } from '@vercel/analytics';


// vercel analytics
inject();
//
AOS.init()
//
const app = createApp(App)
    .use(router)
    .use(Vue3Lottie)
    // .use(VueWriter)
    .mount('#app')
