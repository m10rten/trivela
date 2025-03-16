export type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

export type Pretty<T> = {
  [K in keyof T]: T[K];
} & {};
