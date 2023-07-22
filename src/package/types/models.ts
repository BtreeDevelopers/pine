export interface PineApi {
  color: string;
}


type Nullable<T> = {
  [K in keyof T]?: T[K];
};

// Criar a nova interface tornando os campos nuláveis
export type PinePlugin = Nullable<PineApi>;