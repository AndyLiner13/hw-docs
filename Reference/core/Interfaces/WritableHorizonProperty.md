---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_writablehorizonproperty
---

# [WritableHorizonProperty Interface](#writablehorizonproperty-interface)

Represents a writable property.

## [Signature](#signature)

```ts
export interface WritableHorizonProperty<T, U = never> 
```

## [Remarks](#remarks)

You cannot set the property value directly; you must use the `set` method. Using `set` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](../../../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md).

## [Methods](#methods)

### [set(value, values)](#setvalue-values)

Sets the value(s) of the property

**Signature**

```ts
set(value: T, ...values: [U?]): void;
```

**Parameters**

value: T

the new property value

values: \[U?]

the new property values

**Returns**

void

