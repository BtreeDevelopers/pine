
import { FunctionDirective } from "@vue/runtime-core";
import PineApp from "../components/PineApp.vue";
import PineTextField from "../components/PineTextField.vue"
import PineIcon from "../components/PineIcon.vue"
import PineLoading from "../components/PineLoading.vue"
import PineDrawer from "../components/PineDrawer.vue"
import PineDrawerModel from "../components/PineDrawerModel.vue"

import {TooltipOptions} from "../directives/tooltip"
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PineApp: typeof PineApp;
    PineTextField: typeof PineTextField;
    PineIcon: typeof PineIcon;
    PineLoading: typeof PineLoading;
    PineDrawer: typeof PineDrawer;
    PineDrawerModel: typeof PineDrawerModel;
  }
  export interface ComponentCustomProperties {
    vTooltip: FunctionDirective<HTMLElement,string|TooltipOptions>;
}

}
