import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import Vue3Lottie from 'vue3-lottie'
import posthog from "posthog-js";

const app = createApp(App)
app.provide("posthog", posthog)
    .use(router)
    .use(Vue3Lottie)
    .mount('#app')

posthog.init("<ph_project_api_key>", {
    api_host: "<ph_instance_addressT>",
});

