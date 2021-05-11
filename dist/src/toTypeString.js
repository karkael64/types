import { isArray, isFunction, isNumber, isObject, isSymbol } from "./types";
export default function toTypeString(item) {
    var _a, _b;
    if (isNumber(item)) {
        if (Number.isNaN(item))
            return "NaN";
        if (!Number.isFinite(item))
            return item > 0 ? "Infinity" : "-Infinity";
        return JSON.stringify(item);
    }
    if (isFunction(item)) {
        const name = (_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.trim();
        return `[function ${(name === null || name === void 0 ? void 0 : name.length) ? name : "(anonymous)"}]`;
    }
    if (isArray(item)) {
        return `[array]`;
    }
    if (isObject(item)) {
        return `[object ${item.constructor.name}]`;
    }
    if (isSymbol(item)) {
        return `[symbol]`;
    }
    return (_b = JSON.stringify(item)) !== null && _b !== void 0 ? _b : `${item}`;
}
//# sourceMappingURL=toTypeString.js.map