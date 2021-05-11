import toTypeString from "../src/toTypeString";

describe("toTypeString", () => {
  it("should return expected output", () => {
    const fn1 = () => {};
    function fn2(a: number) {
      return a * a;
    }

    const manyTests = {
      undefined: undefined,
      null: null,
      true: true,
      false: false,
      "0": -0,
      "123": 123,
      "-12.34": -12.34,
      "999": Number(999),
      "-3.141592653589793": -Math.PI,
      Infinity: Infinity,
      "-Infinity": -Infinity,
      NaN: NaN,
      '""': "",
      '"Hello, you"': "Hello, you",
      '"Catch 🐯 by the tail"': "Catch 🐯 by the tail",
      '"Hey"': String("Hey"),
      "[symbol]": Symbol("client"),
      "[array]": ["Hello", true, Math.E],
      "[object Set]": new Set(),
      "[object Map]": new Map(),
      "[object WeakMap]": new WeakMap(),
      "[object Date]": new Date(),
      "[object Object]": { name: "you" },
      "[function fn1]": fn1,
      "[function fn2]": fn2,
    } as const;

    Object.entries(manyTests).forEach(([key, value]) =>
      expect(toTypeString(value)).toBe(key)
    );
  });
});
