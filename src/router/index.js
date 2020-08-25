import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Shop = () => import('../views/shop/Shop')
const User = () => import('../views/user/User')
const Detail = () => import('../views/detail/Detail')

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
  },
  {
    path: '/Detail/:iid',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//解决vue-router在3.0版本以上重复点菜单报错的问题
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default router
