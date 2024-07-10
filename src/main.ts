import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './assets/tailwind.css'
import { createMemoryHistory, createRouter } from 'vue-router'
import User from './components/pages/User.vue'
import Todo from './components/pages/Todo.vue'
import Settings from './components/pages/Settings.vue'
import Dashboard from './components/pages/Dashboard.vue'

const routes = [
  { path: '/', component: Dashboard },

    { path: '/users', component: User },
    { path: '/todo', component: Todo },
    { path: '/settings', component: Settings },

  ]
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })


const app = createApp(App)
app.use(router)
app.mount('#app')