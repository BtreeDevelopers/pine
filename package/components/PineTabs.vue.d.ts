declare const _default: import("vue").DefineComponent<{
    tabs: {
        type: import("vue").PropType<string[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tabs: {
        type: import("vue").PropType<string[]>;
        required: true;
    };
    modelValue: {
        type: import("vue").PropType<string>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
