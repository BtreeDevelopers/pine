import { DirectiveBinding } from "vue";
export type TooltipOptions = {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right';
};
export declare function TooltipDirective(el: HTMLElement, binding: DirectiveBinding<TooltipOptions | string>): void;
