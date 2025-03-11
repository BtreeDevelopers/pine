declare const _default: import("vue").DefineComponent<{
    value: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (value: number) => void;
    change: (value: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    value: {
        type: import("vue").PropType<number>;
        required: true;
        default: number;
    };
}>> & {
    onChange?: ((value: number) => any) | undefined;
    onInput?: ((value: number) => any) | undefined;
}, {
    value: number;
}, {}>;
export default _default;
