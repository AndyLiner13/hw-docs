Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_readablehorizonproperty

# ReadableHorizonProperty Interface

Represents a readable property.

## Signature

```
export interface ReadableHorizonProperty<T>
```

## Remarks

You cannot get the property value directly; you must call the `get` method. Using `get` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices).

## Methods

|  |  |
| --- | --- |
| **get()** | Gets the property value.      Signature  ``` get(): T; ```  Returns  T  the property value |