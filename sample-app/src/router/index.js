import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Oya from '../views/Oya.vue'
import Addresses from '../views/Addresses.vue'
import AddressForm from '../views/AddressForm.vue'
// import About  from '../views/About.vue'

Vue.use(VueRouter)

//画面の表示を制御対象を登録している
const routes = [
  {
    path:'/addresses/:address_id?/edit',
    name:'Address_edit',
    component: AddressForm
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/addresses',
    name:'Addresses',
    component: Addresses,
  },
  {
    path:'/',
    name:'Oya',
    component:Oya
  },
  {
    path: '/about',
    name: 'About',
    // component:About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//routerのデータを外部に公開している
export default router
