import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/pages/HomeView.vue'
import AdminLayout from "@/Layouts/AdminLayout.vue";
import IndexAdmin from '@/pages/admin/IndexAdmin.vue'
import IndexUser from '@/pages/admin/users/IndexUser.vue'
import AddUser from '@/pages/admin/users/AddUser.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminLayout,
      children:[
        {
          path:"",
          component:IndexAdmin,
        },
        {
          path:"users",
          component:IndexUser
        },
        {
          path:"users/add",
          name:"addUser",
          component:AddUser
        }
      ]

    }
  ],
})

export default router
