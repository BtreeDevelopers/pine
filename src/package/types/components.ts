
import PineBtn from "../components/PineBtn.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PineBtn: typeof PineBtn;
  }
}
