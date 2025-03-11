declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    value: {
        type: import("vue").PropType<string | number>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}, {
    color: string;
    backgroundColor: string;
}, {}>;
export default _default;
