declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    dir: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    closeOnClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    dir: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    modelValue: {
        type: import("vue").PropType<boolean>;
    };
    closeOnClick: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
}, {
    dir: "left" | "right";
    closeOnClick: boolean;
}, {}>, {
    default?(_: {}): any;
    menu?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
