import { createMemoryHistory, createRouter } from "vue-router";
import User from ".././components/pages/User.vue";
import Todo from ".././components/pages/Todo.vue";
import Settings from ".././components/pages/Settings.vue";
import Dashboard from ".././components/pages/Dashboard.vue";
import Login from "../components/pages/Login.vue";
import Wrapper from "../components/Wrapper.vue";
import auth from '../service/Auth';
import { UserIcon, PencilIcon, CogIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

export const routes = [
  { path: "/", 
    component: Wrapper,
    children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
          icon: ChartBarIcon,
          auth: true
        },
        {
          path: 'users',
          name: 'Users',
          component: User,
          icon: UserIcon,

          auth: true
        },
        {
          path: 'todos',
          name: 'Todos',
          component: Todo,
          icon: PencilIcon,
          auth: true
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings,
          icon: CogIcon,
          auth: true
        }
      ]
    },
  { path: "/login", component: Login },
   
];
const router = createRouter({
  history: createMemoryHistory(),
  
  routes,
});
router.beforeEach((to, from, next) => {
    auth.checkAuth();
    const isAuthenticated = auth.user.authenticated;
    const isLoginPage = to.path === '/login' || to.path === 'login';
  
    console.log('beforeEach', `${to.path} - Auth: ${isAuthenticated}`);
  
    if (!isAuthenticated && !isLoginPage) {
      next({ path: '/login' });
    } else if (isAuthenticated && isLoginPage) {
      next({ path: '/' });
    } else {
      next();
    }
  });
export default router;
