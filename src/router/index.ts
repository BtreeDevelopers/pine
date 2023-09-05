import {createRouter,createWebHashHistory} from "vue-router"
import TextFieldView from "@/Views/TextFieldView.vue"
const routes = [
    { path: '/textfield', component: TextFieldView },
  ]
export const router = createRouter({
    // history: createWebHashHistory('/pine/'),
    history: createWebHashHistory(),
    routes,
  })
  