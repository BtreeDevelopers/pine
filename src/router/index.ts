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
import BtnView from "@/Views/BtnView.vue";
import ContainerView from "@/Views/ContainerView.vue";
import DialogView from "@/Views/DialogView.vue";
import ToastView from "@/Views/ToastView.vue";
import CheckboxView from "@/Views/CheckboxView.vue";
import FooterView from "@/Views/FooterView.vue";
import HeaderView from "@/Views/HeaderView.vue";
import AvatarView from "@/Views/AvatarView.vue";
import PickColorView from "@/Views/PickColorView.vue";
import CalendarView from "@/Views/CalendarView.vue";
import UploadView from "@/Views/UploadView.vue";
import StyleView from "@/Views/StyleView.vue";

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
  { path: "/btn", component: BtnView },
  { path: "/container", component: ContainerView },
  { path: "/dialog", component: DialogView },
  { path: "/toast", component: ToastView },
  { path: "/checkbox", component: CheckboxView },
  { path: "/footer", component: FooterView },
  { path: "/header", component: HeaderView },
  { path: "/pickcolor", component: PickColorView },
  { path: "/avatar", component: AvatarView },
  { path: "/calendar", component: CalendarView },
  { path: "/upload", component: UploadView },
  { path: "/style", component: StyleView },
];
export const router = createRouter({
  // history: createWebHashHistory('/pine/'),
  history: createWebHashHistory(),
  routes,
});
