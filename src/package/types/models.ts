
interface Colors extends Record<string,string>{
  primary: string,
  secondary: string,
  error: string,
  warning: string,
  background: string,
  card: string,
  
}

export interface PineApi {
  colors: {light: Colors,dark: Colors};
  theme:'light'|'dark'
}

type Nullable<T> = {
  [K in keyof T]?: T[K];
};

// Criar a nova interface tornando os campos nuláveis
export type PinePlugin = Nullable<PineApi>;