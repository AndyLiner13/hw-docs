---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_easing
---

# [Easing Class](#easing-class)

A set of easing functions for configuring [timing animations](../Type%20Aliases/TimingAnimationConfig.md). Easing functions provide physical motion animations.

## [Signature](#signature)

```ts
export declare class Easing 
```

## [Properties](#properties)

### [back static \[readonly\]](#back-static-readonly)

A back easing.

**Signature**

```ts
static get back(): Easing;
```

### [bounce static \[readonly\]](#bounce-static-readonly)

An easing that provides a bouncing animation.

**Signature**

```ts
static get bounce(): Easing;
```

### [circle static \[readonly\]](#circle-static-readonly)

A circular easing.

**Signature**

```ts
static get circle(): Easing;
```

### [cubic static \[readonly\]](#cubic-static-readonly)

A cubic easing.

**Signature**

```ts
static get cubic(): Easing;
```

### [ease static \[readonly\]](#ease-static-readonly)

An easing that starts slow, accelerates quickly, and then gradually slows down until stopping.

**Signature**

```ts
static get ease(): Easing;
```

### [exp static \[readonly\]](#exp-static-readonly)

An exponential easing.

**Signature**

```ts
static get exp(): Easing;
```

### [linear static \[readonly\]](#linear-static-readonly)

A linear easing.

**Signature**

```ts
static get linear(): Easing;
```

### [quad static \[readonly\]](#quad-static-readonly)

A quadratic easing.

**Signature**

```ts
static get quad(): Easing;
```

### [sin static \[readonly\]](#sin-static-readonly)

A sin easing.

**Signature**

```ts
static get sin(): Easing;
```

## [Methods](#methods)

### [bezier(x1, y1, x2, y2) static](#bezierx1-y1-x2-y2-static)

Returns an easing that uses a cubic bezier curve.

**Signature**

```ts
static bezier(x1: number, y1: number, x2: number, y2: number): Easing;
```

**Parameters**

x1: number

The x coordinate of the first control point of the curve.

y1: number

The y coordinate of the first control point of the curve.

x2: number

The x coordinate of the second control point of the curve.

y2: number

The y coordinate of the second control point of the curve.

**Returns**

[Easing](Easing.md)

### [elastic(bounciness) static](#elasticbounciness-static)

Returns and elastic easing.

**Signature**

```ts
static elastic(bounciness: number): Easing;
```

**Parameters**

bounciness: number

**Returns**

[Easing](Easing.md)

The updated easing.

### [in(easing) static](#ineasing-static)

Returns an easing that runs forwards.

**Signature**

```ts
static in(easing: Easing): Easing;
```

**Parameters**

easing: [Easing](Easing.md)

The easing to update.

**Returns**

[Easing](Easing.md)

The updated easing.

### [inOut(easing) static](#inouteasing-static)

Returns an easing that runs forwards and then backwards.

**Signature**

```ts
static inOut(easing: Easing): Easing;
```

**Parameters**

easing: [Easing](Easing.md)

The easing to update.

**Returns**

[Easing](Easing.md)

The updated easing.

### [out(easing) static](#outeasing-static)

Returns an easing that runs backwards.

**Signature**

```ts
static out(easing: Easing): Easing;
```

**Parameters**

easing: [Easing](Easing.md)

The easing to update.

**Returns**

[Easing](Easing.md)

The updated easing.

### [poly(n) static](#polyn-static)

Returns a power easing.

**Signature**

```ts
static poly(n: number): Easing;
```

**Parameters**

n: number

**Returns**

[Easing](Easing.md)

The updated easing.

