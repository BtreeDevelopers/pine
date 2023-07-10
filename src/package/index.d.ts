import { Plugin } from "vue";
declare const PinePlugin: Plugin;

export interface PinePluginApi {
  color: string;
}

export function usePine(): PinePluginApi;

export default PinePlugin;

import pBtn from "./components/p-btn.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    pBtn: typeof pBtn;
  }
}
