declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    class: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    class: {
        type: import("vue").PropType<string>;
    };
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>>, {
    color: string;
    height: string | number;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
