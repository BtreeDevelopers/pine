import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/Views/HomeView.vue";
import TextFieldView from "@/Views/TextFieldView.vue";
import IconView from "@/Views/IconView.vue";
import LoadingView from "@/Views/LoadingView.vue";
import DrawerView from "@/Views/DrawerView.vue";
import DrawerModelView from "@/Views/DrawerModelView.vue";
import TooltipView from "@/Views/TooltipView.vue";
import MenuView from "@/Views/MenuView.vue";
import SelectView from "@/Views/SelectView.vue";
import CardView from "@/Views/CardView.vue";
import SwitchView from "@/Views/SwitchView.vue";
import SwitchThemeView from "@/Views/SwitchThemeView.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/textfield", component: TextFieldView },
  { path: "/icon", component: IconView },
  { path: "/loading", component: LoadingView },
  { path: "/drawer", component: DrawerView },
  { path: "/drawermodel", component: DrawerModelView },
  { path: "/tooltip", component: TooltipView },
  { path: "/menu", component: MenuView },
  { path: "/select", component: SelectView },
  { path: "/card", component: CardView },
  { path: "/switch", component: SwitchView },
  { path: "/switchtheme", component: SwitchThemeView },
];
export const router = createRouter({
  // history: createWebHashHistory('/pine/'),
  history: createWebHashHistory(),
  routes,
});
