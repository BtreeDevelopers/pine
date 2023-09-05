import PineApp from "./components/PineApp.vue";
import PineTextField from "./components/PineTextField.vue";
import PineIcon from "./components/PineIcon.vue";
import PineLoading from "./components/PineLoading.vue";
import { App, inject } from "vue";
export * from './types/components'
import { PineApi, PinePlugin } from './types/models'


const PineSymbol = Symbol.for("pine:pine");

export function pinePlugin(app: App, options: PinePlugin) {
  if ((pinePlugin as any).installed) return;
  (pinePlugin as any).installed = true;
  app.component("PineApp", PineApp);
  app.component("PineTextField", PineTextField);
  app.component("PineIcon", PineIcon);
  app.component("PineLoading", PineLoading);
  const pineApp = {
    theme: options?.theme || "dark", //'light'
    colors: {
      light: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FED050",
        background: "#F1F1F1",
        card: "#E5E6E8",
        ...options?.colors?.light,
      },
      dark: {
        primary: "#5093FE",
        secondary: "#00F391",
        error: "#FE5050",
        warning: "#FED050",
        background: "#1E1E1E",
        card: "#252831",
        ...options?.colors?.dark,
      },
    },
  }
  app.provide(PineSymbol,pineApp);
  const r = document.querySelector<HTMLElement>(":root")!;
  r.style.setProperty("--p-light-primary", pineApp.colors.light.primary);
  r.style.setProperty("--p-light-secondary", pineApp.colors.light.secondary);
  r.style.setProperty("--p-light-error", pineApp.colors.light.error);
  r.style.setProperty("--p-light-warning", pineApp.colors.light.warning);
  r.style.setProperty("--p-light-background", pineApp.colors.light.background);
  r.style.setProperty("--p-light-card", pineApp.colors.light.card);
  r.style.setProperty("--p-dark-primary", pineApp.colors.dark.primary);
  r.style.setProperty("--p-dark-secondary", pineApp.colors.dark.secondary);
  r.style.setProperty("--p-dark-error", pineApp.colors.dark.error);
  r.style.setProperty("--p-dark-warning", pineApp.colors.dark.warning);
  r.style.setProperty("--p-dark-background", pineApp.colors.dark.background);
  r.style.setProperty("--p-dark-card", pineApp.colors.dark.card);
}
export function usePine(): PineApi {
  const pine = inject<PineApi>(PineSymbol);

  if (!pine) throw new Error("Erro ao procura a instância do Pine");

  return pine;
}
export type { PineApi, PinePlugin } from './types/models'

export default {
  install: pinePlugin,
};
