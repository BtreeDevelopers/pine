type IItem = string | {
    text: string;
    value: string;
};
declare const _default: import("vue").DefineComponent<{
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<IItem[]>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    label: {
        type: import("vue").PropType<string>;
    };
    placeholder: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<string>;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<IItem[]>;
        required: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}, {
    color: string;
    backgroundColor: string;
}, {}>;
export default _default;
