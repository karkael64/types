# Types

Helps to check variable type. For Typescript, helps to set type of variable.

## Types checked

1. `undefined`
2. `null`
3. `boolean`
4. `number` or `Number` instance
5. `string` or `String` instance
6. `symbol`
7. `array`
8. `object`, exclude `null` & `array`
9. `function`

## Type to string

There is a bonus function: `toTypeString`. It helps to translate any variable to understandable string :

1. `undefined` ➜ `"undefined"`,
2. `null` ➜ `"null"`,
3. `boolean`, ie:
   - `false` ➜ `"false"`,
   - `true` ➜ `"true"`.
4. `number` or `Number` instance, ie:
   - `123` ➜ `"123"`,
   - `NaN` ➜ `"NaN"`,
   - `-Infinity` ➜ `"-Infinity"`.
5. `string` or `String` instance, ie:
   - `"Hello, you!"` ➜ `"\"Hello, you!\""`,
6. `symbol` ➜ `"[symbol]"`,
7. `array` ➜ `"[array]"`
8. `object`, ie:
   - `new Date` ➜ `"[object Date]"`,
9. `function`, ie:
   - `JSON.parse` ➜ `"[function parse]"`
