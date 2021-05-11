export function isUndefined(el) {
    return el === undefined;
}
export function isNull(el) {
    return el === null;
}
export function isBoolean(el) {
    return typeof el === "boolean";
}
export function isNumber(el) {
    return typeof el === "number";
}
export function isString(el) {
    return typeof el === "string";
}
export function isSymbol(el) {
    return typeof el === "symbol";
}
export function isArray(el) {
    return Array.isArray(el);
}
export function isObject(el) {
    return typeof el === "object" && !isArray(el) && el !== null;
}
export function isFunction(el) {
    return typeof el === "function";
}
//# sourceMappingURL=types.js.map