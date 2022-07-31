import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import VButton from '../dist/index.mjs'
import './index.scss'

createApp(App).use(VButton).mount('#app')
