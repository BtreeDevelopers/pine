import { attachedRoot } from "@/package/util/dom";

import type { DirectiveBinding } from "vue";

export interface ClickOutsideBindingArgs {
  handler: (e?: MouseEvent) => void;
  closeConditional?: (e: Event) => boolean;
  include?: () => HTMLElement[];
}

export type ClickOutsideDirectiveBinding =
  DirectiveBinding<ClickOutsideBindingArgs>;

function defaultConditional() {
  return true;
}

function checkEvent(
  e: MouseEvent,
  el: HTMLElement,
  binding: ClickOutsideDirectiveBinding
): boolean {
  if (!e || checkIsActive(e, binding) === false) return false;

  const root = attachedRoot(el);
  if (
    typeof ShadowRoot !== "undefined" &&
    root instanceof ShadowRoot &&
    root.host === e.target
  )
    return false;
  const elements = (
    (typeof binding.value === "object" && binding.value.include) ||
    (() => [])
  )();
  elements.push(el);
  return !elements.some((el) => el?.contains(e.target as Node));
}

function checkIsActive(
  e: MouseEvent,
  binding: ClickOutsideDirectiveBinding
): boolean | void {
  const isActive =
    (typeof binding.value === "object" && binding.value.closeConditional) ||
    defaultConditional;

  return isActive(e);
}

function directive(
  e: MouseEvent,
  el: HTMLElement & { _clickOutside: any },
  binding: ClickOutsideDirectiveBinding
) {
  const handler =
    typeof binding.value === "function" ? binding.value : binding.value.handler;

  el._clickOutside!.lastMousedownWasOutside &&
    checkEvent(e, el, binding) &&
    setTimeout(() => {
      checkIsActive(e, binding) && handler && handler(e);
    }, 0);
}

function handleShadow(el: HTMLElement, callback: Function): void {
  const root = attachedRoot(el);

  callback(document);

  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}

export const ClickOutsideDirective = {
  mounted(
    el: HTMLElement & { _clickOutside: any },
    binding: ClickOutsideDirectiveBinding
  ) {
    const onClick = (e: Event) => directive(e as MouseEvent, el, binding);
    const onMousedown = (e: Event) => {
      el._clickOutside!.lastMousedownWasOutside = checkEvent(
        e as MouseEvent,
        el,
        binding
      );
    };

    handleShadow(el, (app: HTMLElement) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });

    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false,
      };
    }

    el._clickOutside[binding.instance!.$.uid] = {
      onClick,
      onMousedown,
    };
  },

  unmounted(
    el: HTMLElement & { _clickOutside: any },
    binding: ClickOutsideDirectiveBinding
  ) {
    if (!el._clickOutside) return;

    handleShadow(el, (app: HTMLElement) => {
      if (!app || !el._clickOutside?.[binding.instance!.$.uid]) return;

      const { onClick, onMousedown } =
        el._clickOutside[binding.instance!.$.uid]!;

      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });

    delete el._clickOutside[binding.instance!.$.uid];
  },
};

export default ClickOutsideDirective;
