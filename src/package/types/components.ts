import { FunctionDirective } from "@vue/runtime-core";
import PineApp from "../components/PineApp.vue";
import PineTextField from "../components/PineTextField.vue";
import PineIcon from "../components/PineIcon.vue";
import PineLoading from "../components/PineLoading.vue";
import PineDrawer from "../components/PineDrawer.vue";
import PineDrawerModel from "../components/PineDrawerModel.vue";
import PineMenu from "../components/PineMenu.vue";
import PineSelect from "../components/PineSelect.vue";
import PineCard from "../components/PineCard.vue";
import PineSwitch from "../components/PineSwitch.vue";
import PineSwitchTheme from "../components/PineSwitchTheme.vue";

import { TooltipOptions } from "../directives/tooltip";
import { ClickOutsideBindingArgs } from "../directives/clickOutside";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PineApp: typeof PineApp;
    PineTextField: typeof PineTextField;
    PineIcon: typeof PineIcon;
    PineLoading: typeof PineLoading;
    PineDrawer: typeof PineDrawer;
    PineDrawerModel: typeof PineDrawerModel;
    PineMenu: typeof PineMenu;
    PineSelect: typeof PineSelect;
    PineCard: typeof PineCard;
    PineSwitch: typeof PineSwitch;
    PineSwitchTheme: typeof PineSwitchTheme;
  }
  export interface ComponentCustomProperties {
    vTooltip: FunctionDirective<HTMLElement, string | TooltipOptions>;
    vClickOutside: FunctionDirective<HTMLElement, ClickOutsideBindingArgs>;
  }
}
