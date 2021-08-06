import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import todoAdd from '../views/todoAdd.vue'
import todoViews from '../views/todoViews.vue'
import Board from '../views/Board.vue'
import todoEdit from '../views/todoEdit.vue'

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
    // {path:"/todoadd",
    // name:"todoAdd",
    // component: todoAdd},
=======
    {
      path:'/todoEdit',
      name:"todoEdit",
      component:todoEdit
    }
>>>>>>> 583007018fb00071a5ffe027e40f046c4ff17ead
  
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
