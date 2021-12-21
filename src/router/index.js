import { createRouter, createWebHistory } from 'vue-router';
import Home   from '../components/Home.vue';
import SignIn from '../components/SignIn.vue' ;
import SignUp from '../components/SignUp.vue';
import About  from '../components/About.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/signin',
    component: SignIn 
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
