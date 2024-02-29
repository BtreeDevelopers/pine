type IItem = string | {
    text: string;
    value: string;
};
declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    items: {
        type: import("vue").PropType<IItem[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    items: {
        type: import("vue").PropType<IItem[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    color: string;
}, {}>;
export default _default;
