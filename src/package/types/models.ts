import { ToastPlugin } from "./toast";

interface Colors extends Record<string, string> {
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  background: string;
  highlight: string;
  neutral100: string;
  neutral80: string;
  neutral70: string;
  neutral60: string;
  neutral30: string;
  neutral0: string;
}

export interface PineApi {
  colors: { light: Colors; dark: Colors };
  theme: "light" | "dark";
}

type Nullable<T> = {
  [K in keyof T]?: T[K];
};

// Criar a nova interface tornando os campos nuláveis
export type PinePlugin = Nullable<PineApi> & { toast?: ToastPlugin };
