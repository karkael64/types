export declare function isUndefined(el: unknown): el is void;
export declare function isNull(el: unknown): el is null;
export declare function isBoolean(el: unknown): el is boolean;
export declare function isNumber(el: unknown): el is number;
export declare function isString(el: unknown): el is string;
export declare function isSymbol(el: unknown): el is symbol;
export declare function isArray<T>(el: unknown): el is T[];
export declare function isObject<K extends string | number | symbol = string | number | symbol, V extends any = any>(el: unknown): el is Record<K, V>;
export declare function isFunction<T extends () => {} = () => {}>(el: unknown): el is T;
