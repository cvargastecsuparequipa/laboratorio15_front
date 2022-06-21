import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path:'/inicio',
    name:'inicio',
    component:Inicio
  }
]

const router = new VueRouter({
  routes
})

export default router
