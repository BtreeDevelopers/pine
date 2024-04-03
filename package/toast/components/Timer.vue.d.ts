declare const _default: import("vue").DefineComponent<{
    timer: {
        type: import("vue").PropType<number>;
        required: true;
    };
    id: {
        type: import("vue").PropType<number>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "close-toast": (id: number) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    timer: {
        type: import("vue").PropType<number>;
        required: true;
    };
    id: {
        type: import("vue").PropType<number>;
        required: true;
    };
}>> & {
    "onClose-toast"?: ((id: number) => any) | undefined;
}, {}, {}>;
export default _default;
