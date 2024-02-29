import { IIcons } from "../types/icons";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    iconRight: {
        type: import("vue").PropType<IIcons>;
    };
    iconLeft: {
        type: import("vue").PropType<IIcons>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    iconRight: {
        type: import("vue").PropType<IIcons>;
    };
    iconLeft: {
        type: import("vue").PropType<IIcons>;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    color: string;
}, {}>;
export default _default;
