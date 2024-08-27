declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"text" | "outline" | "solid">;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    width: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"text" | "outline" | "solid">;
        default: string;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
}>> & {
    onClick?: (() => any) | undefined;
}, {
    color: string;
    width: string | number;
    type: "text" | "outline" | "solid";
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
