declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, {
    modelValue: string;
}, {}>;
export default _default;
