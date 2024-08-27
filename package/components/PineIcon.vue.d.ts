import { IIcons } from '../../package/types/icons';
declare const _default: import("vue").DefineComponent<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"outline" | "solid">;
        default: string;
    };
    name: {
        type: import("vue").PropType<IIcons>;
        required: true;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: import("vue").PropType<string>;
        default: string;
    };
    type: {
        type: import("vue").PropType<"outline" | "solid">;
        default: string;
    };
    name: {
        type: import("vue").PropType<IIcons>;
        required: true;
    };
    size: {
        type: import("vue").PropType<number>;
        default: number;
    };
}>>, {
    color: string;
    type: "outline" | "solid";
    size: number;
}, {}>;
export default _default;
