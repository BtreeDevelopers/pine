declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<{
            r: number;
            g: number;
            b: number;
            a: number;
        }>;
        default: () => {
            r: number;
            g: number;
            b: number;
            a: number;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: {
        r: number;
        g: number;
        b: number;
        a: number;
    }) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<{
            r: number;
            g: number;
            b: number;
            a: number;
        }>;
        default: () => {
            r: number;
            g: number;
            b: number;
            a: number;
        };
    };
    backgroundColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: {
        r: number;
        g: number;
        b: number;
        a: number;
    }) => any) | undefined;
}, {
    modelValue: {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    backgroundColor: string;
    size: number;
}, {}>;
export default _default;
