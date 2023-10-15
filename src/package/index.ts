import PineApp from "./components/PineApp.vue";
import PineTextField from "./components/PineTextField.vue";
import PineIcon from "./components/PineIcon.vue";
import PineLoading from "./components/PineLoading.vue";
import PineDrawer from "./components/PineDrawer.vue";
import PineDrawerModel from "./components/PineDrawerModel.vue";
import PineMenu from "./components/PineMenu.vue";
import PineSelect from "./components/PineSelect.vue";
import PineCard from "./components/PineCard.vue";
import PineSwitch from "./components/PineSwitch.vue";
import PineSwitchTheme from "./components/PineSwitchTheme.vue";
import PineBtn from "./components/PineBtn.vue";
import PineContainer from "./components/PineContainer.vue";
import PineDialog from "./components/PineDialog.vue";
import { App, inject, reactive } from "vue";
export * from "./types/components";
import { PineApi, PinePlugin } from "./types/models";
import { TooltipDirective } from "./directives/tooltip.ts";
import { ClickOutsideDirective } from "./directives/clickOutside.ts";
import { createToastInterface } from "./btoast.ts";

const PineSymbol = Symbol.for("pine:pine");
const ToastSymbol = Symbol.for("pine:toast");

export function pinePlugin(app: App, options?: PinePlugin) {
  if ((pinePlugin as any).installed) return;
  (pinePlugin as any).installed = true;
  app.component("PineApp", PineApp);
  app.component("PineTextField", PineTextField);
  app.component("PineIcon", PineIcon);
  app.component("PineLoading", PineLoading);
  app.component("PineDrawer", PineDrawer);
  app.component("PineDrawerModel", PineDrawerModel);
  app.component("PineMenu", PineMenu);
  app.component("PineSelect", PineSelect);
  app.component("PineCard", PineCard);
  app.component("PineSwitch", PineSwitch);
  app.component("PineSwitchTheme", PineSwitchTheme);
  app.component("PineBtn", PineBtn);
  app.component("PineContainer", PineContainer);
  app.component("PineDialog", PineDialog);

  app.directive("tooltip", TooltipDirective);
  app.directive("clickOutside", ClickOutsideDirective);
  const pineApp = reactive({
    theme: options?.theme || "dark", //'light'
    colors: {
      light: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FF8A00",
        background: "#F1F1F1",
        highlight: "#E5E6E8",
        neutral100: "#000000",
        neutral80: "#6C6C6C",
        neutral70: "#757575",
        neutral60: "#7F7F7F",
        neutral30: "#B5B5B5",
        neutral0: "#FFFFFF",
        ...options?.colors?.light,
      },
      dark: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FF8A00",
        background: "#161922",
        highlight: "#252831",
        neutral100: "#000000",
        neutral80: "#6C6C6C",
        neutral70: "#757575",
        neutral60: "#7F7F7F",
        neutral30: "#B5B5B5",
        neutral0: "#FFFFFF",
        ...options?.colors?.dark,
      },
    },
  });
  const toastInterface = createToastInterface(app, options);
  app.provide(PineSymbol, pineApp);
  app.provide(ToastSymbol, toastInterface);
  const r = document.querySelector<HTMLElement>(":root")!;
  r.style.setProperty("--p-light-primary", pineApp.colors.light.primary);
  r.style.setProperty("--p-light-secondary", pineApp.colors.light.secondary);
  r.style.setProperty("--p-light-error", pineApp.colors.light.error);
  r.style.setProperty("--p-light-warning", pineApp.colors.light.warning);
  r.style.setProperty("--p-light-background", pineApp.colors.light.background);
  r.style.setProperty("--p-light-highlight", pineApp.colors.light.highlight);
  r.style.setProperty("--p-dark-primary", pineApp.colors.dark.primary);
  r.style.setProperty("--p-dark-secondary", pineApp.colors.dark.secondary);
  r.style.setProperty("--p-dark-error", pineApp.colors.dark.error);
  r.style.setProperty("--p-dark-warning", pineApp.colors.dark.warning);
  r.style.setProperty("--p-dark-background", pineApp.colors.dark.background);
  r.style.setProperty("--p-dark-highlight", pineApp.colors.dark.highlight);
}

export function usePine(): PineApi {
  const pine = inject<PineApi>(PineSymbol);

  if (!pine) throw new Error("Erro ao procura a instância do Pine");

  return pine;
}
export function useToast(): any {
  const toast = inject<any>(ToastSymbol);

  if (!toast) throw new Error("Erro ao procura a instância do Toast");

  return toast;
}
export type { PineApi, PinePlugin } from "./types/models";

export default {
  install: pinePlugin,
};
