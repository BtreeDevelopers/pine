declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeOnClickOutside: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    app: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeOnClickOutside: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    app: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    modelValue: boolean;
    backgroundColor: string;
    closeOnClickOutside: boolean;
    app: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
