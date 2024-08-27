declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<File | null>;
        default: null;
    };
    types: {
        type: import("vue").PropType<string[]>;
    };
    maxSize: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: File | null) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<File | null>;
        default: null;
    };
    types: {
        type: import("vue").PropType<string[]>;
    };
    maxSize: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: File | null) => any) | undefined;
}, {
    modelValue: File | null;
    maxSize: number;
}, {}>;
export default _default;
