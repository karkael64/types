"use strict";
exports.__esModule = true;
var types_1 = require("./types");
function toTypeString(item) {
    var _a, _b;
    if (types_1.isNumber(item)) {
        if (Number.isNaN(item))
            return "NaN";
        if (!Number.isFinite(item))
            return item > 0 ? "Infinity" : "-Infinity";
        return JSON.stringify(item);
    }
    if (types_1.isFunction(item)) {
        var name_1 = (_a = item === null || item === void 0 ? void 0 : item.name) === null || _a === void 0 ? void 0 : _a.trim();
        return "[function " + ((name_1 === null || name_1 === void 0 ? void 0 : name_1.length) ? name_1 : "(anonymous)") + "]";
    }
    if (types_1.isArray(item)) {
        return "[array]";
    }
    if (types_1.isObject(item)) {
        return "[object " + item.constructor.name + "]";
    }
    if (types_1.isSymbol(item)) {
        return "[symbol]";
    }
    return (_b = JSON.stringify(item)) !== null && _b !== void 0 ? _b : "" + item;
}
exports["default"] = toTypeString;
//# sourceMappingURL=toTypeString.js.map