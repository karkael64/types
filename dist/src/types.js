"use strict";
exports.__esModule = true;
exports.isFunction = exports.isObject = exports.isArray = exports.isSymbol = exports.isString = exports.isNumber = exports.isBoolean = exports.isNull = exports.isUndefined = void 0;
function isUndefined(el) {
    return el === undefined;
}
exports.isUndefined = isUndefined;
function isNull(el) {
    return el === null;
}
exports.isNull = isNull;
function isBoolean(el) {
    return typeof el === "boolean";
}
exports.isBoolean = isBoolean;
function isNumber(el) {
    return typeof el === "number";
}
exports.isNumber = isNumber;
function isString(el) {
    return typeof el === "string";
}
exports.isString = isString;
function isSymbol(el) {
    return typeof el === "symbol";
}
exports.isSymbol = isSymbol;
function isArray(el) {
    return Array.isArray(el);
}
exports.isArray = isArray;
function isObject(el) {
    return typeof el === "object" && !isArray(el) && el !== null;
}
exports.isObject = isObject;
function isFunction(el) {
    return typeof el === "function";
}
exports.isFunction = isFunction;
//# sourceMappingURL=types.js.map