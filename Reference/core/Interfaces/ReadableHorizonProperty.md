Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_readablehorizonproperty

API reference

# ReadableHorizonProperty Interface

Represents a readable property.

## Signature

```
export interface ReadableHorizonProperty<T>
```

## Remarks

You cannot get the property value directly; you must call the `get` method. Using `get` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md).

## Methods

|  |  |
| --- | --- |
| **get()** | Gets the property value.      Signature  ``` get(): T; ```  Returns  T  the property value |