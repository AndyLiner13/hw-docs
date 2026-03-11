---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_readablehorizonproperty
---

# [ReadableHorizonProperty Interface](#readablehorizonproperty-interface)

Represents a readable property.

## [Signature](#signature)

```ts
export interface ReadableHorizonProperty<T> 
```

## [Remarks](#remarks)

You cannot get the property value directly; you must call the `get` method. Using `get` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](../../../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md).

## [Methods](#methods)

### [get()](#get)

Gets the property value.

**Signature**

```ts
get(): T;
```

**Returns**

T

the property value

