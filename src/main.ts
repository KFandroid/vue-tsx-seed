import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App'
console.log(import.meta.env.VITE_BASE_URL)
createApp(App).use(ElementPlus).mount('#app')
