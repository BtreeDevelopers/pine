
import PineApp from "../components/PineApp.vue";
import PineTextField from "../components/PineTextField.vue"
import PineIcon from "../components/PineIcon.vue"
import PineLoading from "../components/PineLoading.vue"
import PineDrawer from "../components/PineDrawer.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PineApp: typeof PineApp;
    PineTextField: typeof PineTextField;
    PineIcon: typeof PineIcon;
    PineLoading: typeof PineLoading;
    PineDrawer: typeof PineDrawer;
  }
}
