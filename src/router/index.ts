import {createRouter,createWebHashHistory} from "vue-router"
import TextFieldView from "@/Views/TextFieldView.vue"
import IconView from "@/Views/IconView.vue"
import LoadingView from "@/Views/LoadingView.vue"
import DrawerView from "@/Views/DrawerView.vue"
import DrawerModelView from "@/Views/DrawerModelView.vue"
import TooltipView from "@/Views/TooltipView.vue"
const routes = [
    { path: '/textfield', component: TextFieldView },
    { path: '/icon', component: IconView },
    { path: '/loading', component: LoadingView },
    { path: '/drawer', component: DrawerView },
    { path: '/drawermodel', component: DrawerModelView },
    { path: '/tooltip', component: TooltipView },
  ]
export const router = createRouter({
    // history: createWebHashHistory('/pine/'),
    history: createWebHashHistory(),
    routes,
  })
  