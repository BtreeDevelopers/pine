import btn from "./components/p-btn.vue";

declare module "@vue/runtime-core" {
  export interface Pine {
    usePine: {
      color: string;
    };
  }

  export interface GlobalComponents {
    pinebtn: typeof btn;
  }
}
