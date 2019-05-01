export declare type FnFactory<T, U> = (scheme?: string | string[]) => Fn<T, U>;
export declare type Fn<T, U> = (input: Iterable<T>) => U;
export declare const NL2000: string;
export declare const NL180: string;
export declare const NL100: string;
export declare const NL80: string;
export declare const NL60: string;
export declare const encoder: FnFactory<number, string>;
export declare const decoder: FnFactory<string, number[]>;
export declare const encode: Fn<number, string>;
export declare const decode: Fn<string, number[]>;
//# sourceMappingURL=index.d.ts.map