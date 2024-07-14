import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import './assets/tailwind.css'
import router from './config/routes'

const app = createApp(App)
app.use(router)
app.mount('#app')