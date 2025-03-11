declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: number | undefined) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<number>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    totalPages: {
        type: import("vue").PropType<number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: number | undefined) => any) | undefined;
}, {
    color: string;
    backgroundColor: string;
}, {}>;
export default _default;
