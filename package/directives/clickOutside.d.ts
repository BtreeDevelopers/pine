import type { DirectiveBinding } from "vue";
export interface ClickOutsideBindingArgs {
    handler: (e?: MouseEvent) => void;
    closeConditional?: (e: Event) => boolean;
    include?: () => HTMLElement[];
}
export type ClickOutsideDirectiveBinding = DirectiveBinding<ClickOutsideBindingArgs>;
export declare const ClickOutsideDirective: {
    mounted(el: HTMLElement & {
        _clickOutside: any;
    }, binding: ClickOutsideDirectiveBinding): void;
    unmounted(el: HTMLElement & {
        _clickOutside: any;
    }, binding: ClickOutsideDirectiveBinding): void;
};
export default ClickOutsideDirective;
