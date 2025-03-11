import { IToast } from "../types/toast";
declare const _default: import("vue").DefineComponent<{
    toast: {
        type: import("vue").PropType<IToast>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "delete-toast": (id: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toast: {
        type: import("vue").PropType<IToast>;
        required: true;
    };
}>> & {
    "onDelete-toast"?: ((id: number) => any) | undefined;
}, {}, {}>;
export default _default;
