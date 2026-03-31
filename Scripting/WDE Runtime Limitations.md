# WDE Runtime Limitations

This page documents JavaScript and TypeScript features that are restricted or unavailable in the Horizon Worlds Desktop Editor (WDE). The [official documentation](../Get%20started%20with%20TypeScript/About%20TypeScript.md) states that Meta Horizon Worlds supports all [ES2020](https://262.ecma-international.org/11.0/index.html) features, but empirical testing reveals the **WDE compiler targets ES5**, which blocks a significant number of ES2015+ features at compile time.

## WDE compiler configuration (empirically determined)

| Setting | Value | Evidence |
|---------|-------|----------|
| **TypeScript version** | 4.7.4 | [Official docs](../Get%20started%20with%20TypeScript/About%20TypeScript.md) |
| **Compile target** | **ES5** (or ES3) | Error messages reference "targeting 'ES3' or 'ES5'" |
| **downlevelIteration** | **Disabled** | Iteration on non-array iterables fails |
| **Strict mode** | **Enabled** | Class bodies are in strict mode |
| **Module system** | CommonJS | Static imports compile to `require()` |

This configuration creates three distinct failure categories:

1. **Not in lib** — The type/constructor is entirely absent from the WDE's type library
2. **downlevelIteration** — The feature exists in the lib but requires the iteration protocol, which the ES5 target does not support without `--downlevelIteration`
3. **Target too low** — The syntax or feature requires a higher compilation target

---

## Category 1: Not in the WDE type library

These constructors and globals produce `Cannot find name` errors. They are completely absent from the WDE's `.d.ts` definitions.

### Proxy

```ts
// ❌ Cannot find name 'Proxy'
const p = new Proxy(target, handler);
```

The [official docs](../Get%20started%20with%20TypeScript/About%20TypeScript.md) confirm Proxy is unsupported.

### Typed arrays and binary data

All typed array constructors are missing from the WDE lib:

```ts
// ❌ Cannot find name for ALL of these
new Int8Array(4);
new Uint8Array(4);
new Uint8ClampedArray(4);
new Int16Array(4);
new Uint16Array(4);
new Int32Array(4);
new Uint32Array(4);
new Float32Array(4);
new Float64Array(4);
```

`ArrayBuffer` and `DataView` are also absent. Use `number[]` instead.

The [official docs](../Get%20started%20with%20TypeScript/About%20TypeScript.md) confirm typed arrays are unsupported.

### ES2021+ library methods

These methods and constructors exist in newer ECMAScript versions but are not in the WDE's lib:

| Feature | Error | ES version |
|---------|-------|------------|
| `String.prototype.replaceAll()` | Property 'replaceAll' does not exist on type 'string' | ES2021 |
| `Promise.any()` | Property 'any' does not exist on type 'PromiseConstructor' | ES2021 |
| `Array.prototype.at()` | Property 'at' does not exist on type 'number[]' | ES2022 |
| `Object.hasOwn()` | Property 'hasOwn' does not exist on type 'ObjectConstructor' | ES2022 |
| `Error` cause option | Expected 0-1 arguments, but got 2 | ES2022 |

---

## Category 2: Iteration protocol blocked (downlevelIteration)

The WDE compiles to ES5 with `downlevelIteration` disabled. This means `for...of`, spread (`...`), `Array.from()`, and destructuring **only work on arrays**. When used on any other iterable (Map, Set, string, generator, custom iterator), the compiler produces:

> Type '...' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.

### What works ✅

```ts
// ✅ for-of on arrays — always works
for (const v of [1, 2, 3]) { }

// ✅ Spread on arrays — always works
const arr = [...[1, 2], ...[3, 4]];

// ✅ Array destructuring — always works
const [a, b, ...rest] = [1, 2, 3, 4];

// ✅ Generator .next() — works (no iteration protocol needed)
function* gen() { yield 1; yield 2; }
const it = gen();
it.next(); // { value: 1, done: false }
```

### What fails ❌

```ts
// ❌ for-of on Map
for (const [k, v] of myMap) { }

// ❌ for-of on Set
for (const v of mySet) { }

// ❌ for-of on string
for (const c of 'hello') { }

// ❌ for-of on generator
for (const v of myGenerator()) { }

// ❌ for-of on custom Symbol.iterator
for (const v of myCustomIterable) { }

// ❌ Spread on string
const chars = [...'hello'];

// ❌ Spread on Set
const vals = [...mySet];

// ❌ Spread on Map
const entries = [...myMap];

// ❌ Spread on matchAll result
const matches = [...str.matchAll(/pattern/g)];

// ❌ Destructuring from Map
const [[k, v]] = myMap;

// ❌ Destructuring from Set
const [first] = mySet;

// ❌ Destructuring from string
const [c1, c2] = 'xy';

// ❌ Array.from on Map/Set/string (when expression type is iterable)
Array.from(myMap);
Array.from(mySet);
```

### Workarounds

```ts
// Map iteration — use .forEach()
myMap.forEach((value, key) => { });

// Set iteration — use .forEach()
mySet.forEach((value) => { });

// String to char array — use .split('')
const chars = 'hello'.split('');

// Generator — use manual .next() loop
function* gen() { yield 1; yield 2; }
const it = gen();
const results: number[] = [];
let next = it.next();
while (!next.done) {
  results.push(next.value);
  next = it.next();
}

// Array.from on Set — use forEach + push
const arr: number[] = [];
mySet.forEach((v) => arr.push(v));

// matchAll — use regex exec loop
const matches: RegExpExecArray[] = [];
let m: RegExpExecArray | null;
while ((m = /pattern/g.exec(str)) !== null) {
  matches.push(m);
}
```

---

## Category 3: Syntax requires higher target

These features require the compilation target to be ES2015 or higher:

### Private class fields and methods (ES2022)

```ts
// ❌ Private identifiers are only available when targeting ECMAScript 2015 and higher
class MyClass {
  #secret = 42;         // Compile error
  #compute() { }        // Compile error
}

// ✅ Use TypeScript private keyword instead
class MyClass {
  private secret = 42;
  private compute() { }
}
```

### BigInt literals (ES2020)

```ts
// ❌ BigInt literals are not available when targeting lower than ES2020
const big = 123n;

// ✅ Use BigInt() constructor if the runtime supports it
const big = BigInt(123);
```

### Function declarations inside class method bodies

In strict mode with target ES5, function declarations inside blocks (like inside a method body's try/catch or if/else) are not allowed:

```ts
class MyComponent extends Component {
  start() {
    // ❌ Function declarations are not allowed inside blocks in strict mode
    //    when targeting 'ES3' or 'ES5'
    function helper() { return 42; }

    // ✅ Use arrow functions or const function expressions instead
    const helper = () => 42;
  }
}
```

This is the most common surprise for developers — **you cannot use `function` declarations directly inside class methods** when the target is ES5 with strict mode. Always use arrow functions or `const fn = function() {}` instead.

---

## Confirmed working features

These features compiled and ran without errors in the WDE:

| Feature | ES version | Notes |
|---------|------------|-------|
| Arrow functions | ES2015 | ✅ |
| Classes and inheritance | ES2015 | ✅ |
| Template literals (including tagged) | ES2015 | ✅ |
| Destructuring (arrays only) | ES2015 | ✅ Arrays only — Map/Set/string blocked |
| Default parameters | ES2015 | ✅ |
| Rest parameters | ES2015 | ✅ |
| Spread on arrays | ES2015 | ✅ Arrays only |
| Computed property names | ES2015 | ✅ |
| Object shorthand methods | ES2015 | ✅ |
| `Map`, `Set`, `WeakMap`, `WeakSet` | ES2015 | ✅ Constructors work, iteration blocked |
| `Symbol` | ES2015 | ✅ |
| `Promise` | ES2015 | ✅ |
| `for...of` on arrays | ES2015 | ✅ Arrays only |
| `**` exponentiation | ES2016 | ✅ |
| `Array.prototype.includes()` | ES2016 | ✅ |
| `async` / `await` | ES2017 | ✅ |
| `Object.entries()` / `Object.values()` | ES2017 | ✅ |
| `padStart()` / `padEnd()` | ES2017 | ✅ |
| Object rest/spread (`{...obj}`) | ES2018 | ✅ |
| `Promise.prototype.finally()` | ES2018 | ✅ |
| RegExp named groups, lookbehind, dotAll | ES2018 | ✅ |
| `Array.flat()` / `flatMap()` | ES2019 | ✅ |
| `Object.fromEntries()` | ES2019 | ✅ |
| `trimStart()` / `trimEnd()` | ES2019 | ✅ |
| Optional catch binding | ES2019 | ✅ |
| Optional chaining (`?.`) | ES2020 | ✅ |
| Nullish coalescing (`??`) | ES2020 | ✅ |
| `globalThis` | ES2020 | ✅ |
| `Promise.allSettled()` | ES2020 | ✅ |
| Logical assignment (`&&=`, `\|\|=`, `??=`) | ES2021 | ✅ |
| Numeric separators (`1_000`) | ES2021 | ✅ |
| Static class fields | ES2022 | ✅ (TypeScript handles via constructor) |
| Generator `function*` / `yield` (with `.next()`) | ES2015 | ✅ Only manual iteration |

---

## Needs runtime verification

These features compiled without error but need runtime testing to confirm they actually work in the Horizon Worlds JavaScript engine:

| Feature | Status | Notes |
|---------|--------|-------|
| `eval()` | Compiles but documented as unsupported | [Official docs](../Get%20started%20with%20TypeScript/About%20TypeScript.md) say no |
| `WeakRef` | Not in lib — runtime unknown | Use `(globalThis as any).WeakRef` to test |
| `FinalizationRegistry` | Not in lib — runtime unknown | Use `(globalThis as any).FinalizationRegistry` to test |
| `Reflect` API | Compiles (in ES2015 lib) — runtime unknown | May be stripped |
| `dynamic import()` | Compiles — runtime unknown | Module system may block |
| `BigInt()` constructor | Compiles — runtime unknown | Hermes support varies |
| `structuredClone` | Not in lib — runtime unknown | Web API |
| `fetch` / `URL` / `TextEncoder` | Not in lib — runtime unknown | Web APIs |

---

## Other known restrictions

### Global timers are not available

`setTimeout()`, `setInterval()`, `clearTimeout()`, and `clearInterval()` are not available as global functions. Use `this.async.setTimeout()` and `this.async.setInterval()` from within a Component instead. See the [TypeScript FAQ](../Get%20started%20with%20TypeScript/TypeScript%20FAQ.md) for examples.

### No external JavaScript libraries

External JavaScript libraries such as minified JS or output from a bundler (Webpack, Rollup, etc.) are not generally supported.

### Module system is CommonJS

The WDE uses CommonJS modules. All imports must be static `import` statements (which TypeScript compiles to `require()`). ES module features like top-level `await` are not available.

### Script size limit

Scripts are limited to 64KB unless the world uses [File-Backed Scripts](../File-Backed%20Scripts.md).

### TypeScript version locked to 4.7.4

The WDE requires TypeScript 4.7.4. Newer TypeScript features (satisfies operator, const type parameters, etc.) are not available.
