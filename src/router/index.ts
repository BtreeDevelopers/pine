import {createRouter,createWebHashHistory} from "vue-router"
import TextFieldView from "@/Views/TextFieldView.vue"
import IconView from "@/Views/IconView.vue"
import LoadingView from "@/Views/LoadingView.vue"
const routes = [
    { path: '/textfield', component: TextFieldView },
    { path: '/icon', component: IconView },
    { path: '/loading', component: LoadingView },
  ]
export const router = createRouter({
    // history: createWebHashHistory('/pine/'),
    history: createWebHashHistory(),
    routes,
  })
  