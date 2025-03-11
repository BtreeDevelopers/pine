declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    totalItems: {
        type: import("vue").PropType<number>;
        required: true;
    };
    cycle: {
        type: import("vue").PropType<number | boolean>;
        default: boolean;
    };
    continuous: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideArrows: {
        type: import("vue").PropType<boolean>;
    };
    transitionDuration: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxWidth: {
        type: import("vue").PropType<string>;
        default: string;
    };
    dotButton: {
        type: import("vue").PropType<string>;
        default: string;
    };
    dotButtonActive: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideDots: {
        type: import("vue").PropType<boolean>;
    };
    overlayDots: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideCounter: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    autofocus: {
        type: import("vue").PropType<boolean>;
    };
    totalItems: {
        type: import("vue").PropType<number>;
        required: true;
    };
    cycle: {
        type: import("vue").PropType<number | boolean>;
        default: boolean;
    };
    continuous: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideArrows: {
        type: import("vue").PropType<boolean>;
    };
    transitionDuration: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxWidth: {
        type: import("vue").PropType<string>;
        default: string;
    };
    dotButton: {
        type: import("vue").PropType<string>;
        default: string;
    };
    dotButtonActive: {
        type: import("vue").PropType<string>;
        default: string;
    };
    hideDots: {
        type: import("vue").PropType<boolean>;
    };
    overlayDots: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideCounter: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    cycle: number | boolean;
    continuous: boolean;
    transitionDuration: string;
    maxWidth: string;
    dotButton: string;
    dotButtonActive: string;
    overlayDots: boolean;
    hideCounter: boolean;
}, {}>, {
    default?(_: {
        current: any;
    }): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
