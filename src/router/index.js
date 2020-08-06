import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Classify = () => import('../views/Classify')
const Shop = () => import('../views/Shop')
const User = () => import('../views/User')

Vue.use(VueRouter)
  const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/user',
      component: User
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
