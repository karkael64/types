import {
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isArray,
  isObject,
  isFunction,
} from "../src/types";

describe("Types", () => {
  describe("Scalars", () => {
    const manyTests = [
      undefined,
      null,
      true,
      false,
      0,
      -0,
      123,
      -12.34,
      Number(999),
      -Math.PI,
      Infinity,
      -Infinity,
      NaN,
      "",
      "Hello, you",
      "Catch 🐯 by the tail",
      String("Hey"),
      Symbol(),
      Symbol("client"),
      [],
      ["Hello", true, Math.E],
      new Set(),
      new Map(),
      new WeakMap(),
      new Date(),
      {},
      { name: "you" },
      () => {},
      (a: number) => a * a,
    ] as const;

    it("isUndefined", () => {
      const truthies = [undefined];
      const falsies = manyTests.filter((item) => !truthies.includes(item));

      truthies.forEach((item) => expect(isUndefined(item)).toBeTruthy());
      falsies.forEach((item) => expect(isUndefined(item)).toBeFalsy());
    });

    it("isNull", () => {
      const truthies = [null];
      const falsies = manyTests.filter((item) => !truthies.includes(item));

      truthies.forEach((item) => expect(isNull(item)).toBeTruthy());
      falsies.forEach((item) => expect(isNull(item)).toBeFalsy());
    });

    it("isBoolean", () => {
      const truthies = [true, false];
      const falsies = manyTests.filter((item) => !truthies.includes(item));

      truthies.forEach((item) => expect(isBoolean(item)).toBeTruthy());
      falsies.forEach((item) => expect(isBoolean(item)).toBeFalsy());
    });

    it("isNumber", () => {
      const truthies = [
        0,
        -0,
        123,
        -12.34,
        Number(999),
        -Math.PI,
        Infinity,
        -Infinity,
        NaN,
      ];
      const falsies = manyTests.filter((item) => !truthies.includes(item));

      truthies.forEach((item) => expect(isNumber(item)).toBeTruthy());
      falsies.forEach((item) => expect(isNumber(item)).toBeFalsy());
    });

    it("isString", () => {
      const truthies = [
        "",
        "Hello, you",
        "Catch 🐯 by the tail",
        String("Hey"),
      ];
      const falsies = manyTests.filter((item) => !truthies.includes(item));

      truthies.forEach((item) => expect(isString(item)).toBeTruthy());
      falsies.forEach((item) => expect(isString(item)).toBeFalsy());
    });
  });

  describe("Pointers", () => {
    it("isSymbol", () => {
      const truthies = [Symbol(), Symbol("client")];
      const falsies = [
        undefined,
        null,
        true,
        false,
        0,
        -0,
        123,
        -12.34,
        Number(999),
        -Math.PI,
        Infinity,
        -Infinity,
        NaN,
        "",
        "Hello, you",
        "Catch 🐯 by the tail",
        String("Hey"),
        // Symbol(),
        // Symbol("client"),
        [],
        ["Hello", true, Math.E],
        new Set(),
        new Map(),
        new WeakMap(),
        new Date(),
        {},
        { name: "you" },
        () => {},
        (a: number) => a * a,
      ];

      truthies.forEach((item) => expect(isSymbol(item)).toBeTruthy());
      falsies.forEach((item) => expect(isSymbol(item)).toBeFalsy());
    });

    it("isArray", () => {
      const truthies = [[], ["Hello", true, Math.E]];
      const falsies = [
        undefined,
        null,
        true,
        false,
        0,
        -0,
        123,
        -12.34,
        Number(999),
        -Math.PI,
        Infinity,
        -Infinity,
        NaN,
        "",
        "Hello, you",
        "Catch 🐯 by the tail",
        String("Hey"),
        Symbol(),
        Symbol("client"),
        // [],
        // ["Hello", true, Math.E],
        new Set(),
        new Map(),
        new WeakMap(),
        new Date(),
        {},
        { name: "you" },
        () => {},
        (a: number) => a * a,
      ];

      truthies.forEach((item) => expect(isArray(item)).toBeTruthy());
      falsies.forEach((item) => expect(isArray(item)).toBeFalsy());
    });

    it("isObject", () => {
      const truthies = [
        new Set(),
        new Map(),
        new WeakMap(),
        new Date(),
        {},
        { name: "you" },
      ];
      const falsies = [
        undefined,
        null,
        true,
        false,
        0,
        -0,
        123,
        -12.34,
        Number(999),
        -Math.PI,
        Infinity,
        -Infinity,
        NaN,
        "",
        "Hello, you",
        "Catch 🐯 by the tail",
        String("Hey"),
        Symbol(),
        Symbol("client"),
        [],
        ["Hello", true, Math.E],
        // new Set(),
        // new Map(),
        // new WeakMap(),
        // new Date(),
        // {},
        // { name: "you" },
        () => {},
        (a: number) => a * a,
      ];

      truthies.forEach((item) => expect(isObject(item)).toBeTruthy());
      falsies.forEach((item) => expect(isObject(item)).toBeFalsy());
    });

    it("isFunction", () => {
      const truthies = [() => {}, (a: number) => a * a];
      const falsies = [
        undefined,
        null,
        true,
        false,
        0,
        -0,
        123,
        -12.34,
        Number(999),
        -Math.PI,
        Infinity,
        -Infinity,
        NaN,
        "",
        "Hello, you",
        "Catch 🐯 by the tail",
        String("Hey"),
        Symbol(),
        Symbol("client"),
        [],
        ["Hello", true, Math.E],
        new Set(),
        new Map(),
        new WeakMap(),
        new Date(),
        {},
        { name: "you" },
        // () => {},
        // (a: number) => a * a,
      ];

      truthies.forEach((item) => expect(isFunction(item)).toBeTruthy());
      falsies.forEach((item) => expect(isFunction(item)).toBeFalsy());
    });
  });
});
