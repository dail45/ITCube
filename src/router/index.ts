import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from "@/views/MainView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/news/:refId',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsView.vue'),
      props: true
    },
    {
      path: '/directions/:refId',
      name: 'directions',
      component: () => import('../views/DirectionView.vue'),
      props: true
    },
    {
      path: '/news',
      name: 'allnews',
      component: () => import('../views/AllNewsView.vue'),
    },
    {
      path: '/contacts',
      name: 'allnews',
      component: () => import('../views/Contacts.vue'),
    }
  ],
})

export default router
