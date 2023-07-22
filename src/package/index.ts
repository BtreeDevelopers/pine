import btn from "./components/PineBtn.vue";
import { App, inject } from "vue";
export * from './types/components'
import { PineApi, PinePlugin } from './types/models'


const PineSymbol = Symbol.for("pine:pine");

export function pinePlugin(app: App, options: PinePlugin) {
  if ((pinePlugin as any).installed) return;
  (pinePlugin as any).installed = true;
  console.log("opt", options);
  app.component("PineBtn", btn);
  app.provide(PineSymbol, {
    color: "#ffff11",
  });
}
export function usePine(): PineApi {
  const pine = inject<PineApi>(PineSymbol);

  if (!pine) throw new Error("Could not find Pine injection");

  return pine;
}
export type { PineApi, PinePlugin } from './types/models'

export default {
  install: pinePlugin,
};
