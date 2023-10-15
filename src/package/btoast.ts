import { createApp, nextTick, reactive } from "vue";
import ToastContainer from "@/package/toast/ToastContainer.vue";
const getId = (
  (i) => () =>
    i++
)(0);

export const TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};

export function createToastInterface(vueApp: any, options: any) {
  const toastInterface = reactive({
    toasts: [] as any[],
    show: (content: string, options: any) => {
      const props = Object.assign(
        {},
        {
          id: getId(),
          type: TYPE.SUCCESS,
          duration: 5000,
        },
        options,
        {
          content,
        }
      );
      toastInterface.toasts.push(props);
      return props.id;
    },
    clear: () => {
      toastInterface.toasts = [];
    },
    dismiss: (id: number) => {
      const index = toastInterface.toasts.findIndex((t) => t.id === id);
      if (index !== -1) {
        toastInterface.toasts.splice(index, 1);
      }
    },
  });
  nextTick(() => {
    const app = createApp(ToastContainer, {
      // ...containerProps,
      ...toastInterface,
      ...options,
    });
    const userApp = vueApp;
    app._context.components = userApp._context.components;
    app._context.directives = userApp._context.directives;
    app._context.mixins = userApp._context.mixins;
    app._context.provides = userApp._context.provides;
    app.config.globalProperties = userApp.config.globalProperties;
    app.mount(document.createElement("div"));
  });
  return toastInterface;
}
