import { App } from "vue";
import { OptionToast, TYPE, ToastPlugin } from "./types/toast";
export declare function createToastInterface(vueApp: App, opc?: ToastPlugin): {
    _toasts: {
        id: number;
        duration: number;
        theme?: "light" | "dark" | undefined;
        type: TYPE;
        content: string;
        title?: string | undefined;
    }[];
    show: (content: string, options: OptionToast) => number;
    clear: () => void;
    dismiss: (id: number) => void;
};
