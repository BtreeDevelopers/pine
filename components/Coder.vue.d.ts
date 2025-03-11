declare const _default: import("vue").DefineComponent<{
    code: {
        type: import("vue").PropType<string>;
        required: true;
    };
    language: {
        type: import("vue").PropType<"vue" | "js" | "shell">;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    copy: (value: string) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    code: {
        type: import("vue").PropType<string>;
        required: true;
    };
    language: {
        type: import("vue").PropType<"vue" | "js" | "shell">;
    };
}>> & {
    onCopy?: ((value: string) => any) | undefined;
}, {}, {}>;
export default _default;
