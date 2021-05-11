export function isUndefined(el: unknown): el is void {
  return el === undefined;
}

export function isNull(el: unknown): el is null {
  return el === null;
}

export function isBoolean(el: unknown): el is boolean {
  return typeof el === "boolean";
}

export function isNumber(el: unknown): el is number {
  return typeof el === "number";
}

export function isString(el: unknown): el is string {
  return typeof el === "string";
}

export function isSymbol(el: unknown): el is symbol {
  return typeof el === "symbol";
}

export function isArray<T>(el: unknown): el is T[] {
  return Array.isArray(el);
}

export function isObject<
  K extends string | number | symbol = string | number | symbol,
  V extends any = any
>(el: unknown): el is Record<K, V> {
  return typeof el === "object" && !isArray(el) && el !== null;
}

export function isFunction<T extends () => {} = () => {}>(
  el: unknown
): el is T {
  return typeof el === "function";
}
