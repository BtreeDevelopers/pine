
import PineApp from "../components/PineApp.vue";
import PineTextField from "../components/PineTextField.vue"

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PineApp: typeof PineApp;
    PineTextField: typeof PineTextField;
  }
}
