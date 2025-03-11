import { IToast } from "../types/toast";
declare const _default: import("vue").DefineComponent<{
    toasts: {
        type: import("vue").PropType<IToast[]>;
    };
    dismiss: {
        type: import("vue").PropType<(id: number) => void>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    toasts: {
        type: import("vue").PropType<IToast[]>;
    };
    dismiss: {
        type: import("vue").PropType<(id: number) => void>;
        required: true;
    };
}>>, {}, {}>;
export default _default;
