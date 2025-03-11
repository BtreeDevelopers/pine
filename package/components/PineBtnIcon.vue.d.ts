import { IIcons } from "../types/icons";
declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"text" | "outline" | "solid">;
        default: string;
    };
    size: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<IIcons>;
        required: true;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
    sizeIcon: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"text" | "outline" | "solid">;
        default: string;
    };
    size: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    icon: {
        type: import("vue").PropType<IIcons>;
        required: true;
    };
    loading: {
        type: import("vue").PropType<boolean>;
    };
    sizeIcon: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    color: string;
    type: "text" | "outline" | "solid";
    size: string | number;
    sizeIcon: number;
}, {}>;
export default _default;
