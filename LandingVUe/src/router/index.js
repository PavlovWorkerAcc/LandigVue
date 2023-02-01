import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/pages/Home.vue'
import Reg from '../../src/pages/Login_Reg/Reg.vue'
import Login from "../../src/pages/Login_Reg/Login.vue";
const router = createRouter({
  history:createWebHistory(),
  routes: [
    {
      path:'',
      name:Home,
      component:Home
    },
    {
      path: '/Reg',
      name: 'Register',
      component: Reg
    },
    {
      path:'/Login',
      name:"Login",
      component:Login
    }
  ]
})

export default router
