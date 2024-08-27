import { App } from "vue";
export * from "./types/components";
import { PineApi, PinePlugin } from "./types/models";
import { ToastApi } from "./types/toast.ts";
export declare function pinePlugin(app: App, options?: PinePlugin): void;
export declare function usePine(): PineApi;
export declare function useToast(): ToastApi;
export type { ToastApi, IToast, ToastPlugin, OptionToast, } from "./types/toast.ts";
export { TYPE as TYPE_TOAST } from "./types/toast.ts";
export type { PineApi, PinePlugin } from "./types/models";
declare const _default: {
    install: typeof pinePlugin;
};
export default _default;
