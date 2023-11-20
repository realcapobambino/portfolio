import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'

//
AOS.init()
//
const app = createApp(App).use(router).mount('#app')
