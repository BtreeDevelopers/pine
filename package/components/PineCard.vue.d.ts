declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    onClick: {
        type: import("vue").PropType<() => void>;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    onClick: {
        type: import("vue").PropType<() => void>;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
}>> & {
    onClick?: (() => any) | undefined;
}, {
    width: string | number;
    backgroundColor: string;
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
