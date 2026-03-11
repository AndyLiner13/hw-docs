---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable
---

# [Comparable Interface](#comparable-interface)

The Comparable interface defines a set of methods for comparing values of the same type, including [equals()](Comparable.md#equals) and [equalsApprox()](Comparable.md#equalsapprox) methods.

## [Signature](#signature)

```ts
export interface Comparable<T> 
```

## [Methods](#methods)

### [equals(val)](#equalsval)

Indicates whether the two values are equal. True if the values are equal; false otherwise.

**Signature**

```ts
equals(val: T): boolean;
```

**Parameters**

val: T

The value to compare to the current value.

**Returns**

boolean

### [equalsApprox(val, epsilon)](#equalsapproxval-epsilon)

Indicates two values are within epsilon of each other. True if the values are within epsilon, false otherwise.

**Signature**

```ts
equalsApprox(val: T, epsilon?: number): boolean;
```

**Parameters**

val: T

The value to compare to the current value.

epsilon: number

*(Optional)* The difference between the two values when they are equal.

**Returns**

boolean

