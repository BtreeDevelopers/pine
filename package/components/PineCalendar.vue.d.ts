type IMode = "DAY" | "MONTH" | "YEAR";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    mode: {
        type: import("vue").PropType<IMode>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (val: string | string[]) => void;
    "update:mode": (val: IMode) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string | string[]>;
        default: string;
    };
    multiple: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    mode: {
        type: import("vue").PropType<IMode>;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: string | string[]) => any) | undefined;
    "onUpdate:mode"?: ((val: IMode) => any) | undefined;
}, {
    modelValue: string | string[];
    multiple: boolean;
    mode: IMode;
}, {}>;
export default _default;
