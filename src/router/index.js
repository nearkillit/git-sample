import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import todoAdd from '../views/todoAdd.vue'
import todoViews from '../views/todoViews.vue'
import Board from '../views/Board.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },{
    path:"/todoviews",
    name:"todoViews",
    component: todoViews
  },{
    path:"/todoadd",
    name:"todoAdd",
    component: todoAdd
  },{
    path:"/board",
    name:"Board",
    component: Board
  },
<<<<<<< HEAD
=======
    {path:"/todoadd",
    name:"todoAdd",
    component: todoAdd},
>>>>>>> 6524ee4775f77bf6d7e3affd5d2b0d5cd0ac66b0
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
