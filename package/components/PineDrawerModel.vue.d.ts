import { IIcons } from "../types/icons";
interface IItemDrawer {
    icon?: IIcons;
    disabled?: boolean;
    title: string;
    color?: string;
}
interface IItemLastDrawer {
    icon?: IIcons;
    title: string;
    color?: string;
}
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<number | null>;
        default: null;
    };
    itens: {
        type: import("vue").PropType<IItemDrawer[]>;
    };
    selectedColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    showIcons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    iconDirection: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    lastOption: {
        type: import("vue").PropType<IItemLastDrawer>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    clickOnClose: () => void;
    clickOnItem: (value: number) => void;
    clickOnLastItem: () => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<number | null>;
        default: null;
    };
    itens: {
        type: import("vue").PropType<IItemDrawer[]>;
    };
    selectedColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    showIcons: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    iconDirection: {
        type: import("vue").PropType<"left" | "right">;
        default: string;
    };
    lastOption: {
        type: import("vue").PropType<IItemLastDrawer>;
    };
}>> & {
    onClickOnClose?: (() => any) | undefined;
    onClickOnItem?: ((value: number) => any) | undefined;
    onClickOnLastItem?: (() => any) | undefined;
}, {
    modelValue: number | null;
    selectedColor: string;
    showIcons: boolean;
    iconDirection: "left" | "right";
}, {}>, {
    title?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
