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
import PineBtn from "../components/PineBtn.vue";
import PineContainer from "../components/PineContainer.vue";
import PineDialog from "../components/PineDialog.vue";
import PineToast from "../components/PineToast.vue";
import PineCheckbox from "../components/PineCheckbox.vue";
import PineFooter from "../components/PineFooter.vue";
import PineHeader from "../components/PineHeader.vue";
import PineAvatar from "../components/PineAvatar.vue";
import PinePickColor from "../components/PinePickColor.vue";
import PineCalendar from "../components/PineCalendar.vue";
import PineUpload from "../components/PineUpload.vue";
import PineCarousel from "../components/PineCarousel.vue";
import PineCarouselItem from "../components/PineCarouselItem.vue";

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
    PineBtn: typeof PineBtn;
    PineContainer: typeof PineContainer;
    PineDialog: typeof PineDialog;
    PineToast: typeof PineToast;
    PineCheckbox: typeof PineCheckbox;
    PineFooter: typeof PineFooter;
    PineHeader: typeof PineHeader;
    PineAvatar: typeof PineAvatar;
    PinePickColor: typeof PinePickColor;
    PineCalendar: typeof PineCalendar;
    PineUpload: typeof PineUpload;
    PineCarousel: typeof PineCarousel;
    PineCarouselItem: typeof PineCarouselItem;
  }
  export interface ComponentCustomProperties {
    vTooltip: FunctionDirective<HTMLElement, string | TooltipOptions>;
    vClickOutside: FunctionDirective<HTMLElement, ClickOutsideBindingArgs>;
  }
}
