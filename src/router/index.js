import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const routes = [
  {
    path: '/',
    name: 'App',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(from)
    if (savedPosition){
      return savedPosition
    }
    else if (to.hash){
      return {
        el: to.hash,
        behavior: "smooth",
      }
    }
    else{
      return {x: 0, y: 200};
    }
  }
});

export default router
