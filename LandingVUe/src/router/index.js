import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../src/pages/Home.vue'
import Reg from '../../src/pages/Login_Reg/Reg.vue'
import Login from "../../src/pages/Login_Reg/Login.vue";
import NotFound from "../pages/404.vue";
import Awards from "../pages/Awards.vue";
const router = createRouter({

  history:createWebHistory(),
  routes: [
    {
      path:'',
      name:'Home',
      component:Home ,
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
    },
    {
      path:'/Awards',
      name:"Awards",
      component:Awards
    },
    {
      path: "/:pathMatch(.*)*",
      name:'NotFound',
      component:NotFound,
    }
  ]
})

export default router
