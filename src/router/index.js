import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import todoAdd from '../views/todoAdd.vue'
import todoViews from '../views/todoViews.vue'
import todoEdit from '../views/todoEdit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path:"/todoviews",
    name:"todoViews",
    component: todoViews
  },
    // {path:"/todoadd",
    // name:"todoAdd",
    // component: todoAdd},
    {
      path:'/todoEdit',
      name:"todoEdit",
      component:todoEdit
    }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
