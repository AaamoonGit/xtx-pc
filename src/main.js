import './assets/main.css'
import '@/styles/common.scss'
import { createApp } from 'vue'
import pinia from './stores/pinia'
import App from './App.vue'
import router from './router'
import { lazyPlugin } from '@/directives/LazyImg'

const app = createApp(App)

app.use(router)
app.use(lazyPlugin)
app.use(pinia).mount('#app')
