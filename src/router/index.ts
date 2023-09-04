import {createRouter,createWebHistory} from "vue-router"
import TextFieldView from "@/Views/TextFieldView.vue"
const routes = [
    { path: '/textfield', component: TextFieldView },
  ]
export const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  