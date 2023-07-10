import btn from "./components/p-btn.vue";
import { App, inject } from "vue";
const PineSymbol = Symbol.for("pine:pine");

export function pinePlugin(app: App, options: Record<string, any>) {
  if ((pinePlugin as any).installed) return;
  (pinePlugin as any).installed = true;
  console.log("opt", options);
  app.component("p-btn", btn);
  app.provide(PineSymbol, {
    color: "#ffff11",
  });
}
export function usePine() {
  const pine = inject(PineSymbol);

  if (!pine) throw new Error("Could not find Vuetify pine injection");

  return pine;
}

export default {
  install: pinePlugin,
};
