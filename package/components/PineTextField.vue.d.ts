import { IIcons } from "../types/icons";
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    type: {
        type: import("vue").PropType<string>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconRight: {
        type: import("vue").PropType<IIcons>;
    };
    "onClick:icon": {
        type: import("vue").PropType<() => void>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    "click:icon": () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    readonly: {
        type: import("vue").PropType<boolean>;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    type: {
        type: import("vue").PropType<string>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    iconRight: {
        type: import("vue").PropType<IIcons>;
    };
    "onClick:icon": {
        type: import("vue").PropType<() => void>;
    };
}>> & {
    "onClick:icon"?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {
    color: string;
    width: string | number;
    type: string;
    backgroundColor: string;
}, {}>;
export default _default;
