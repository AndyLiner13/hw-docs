Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_writablehorizonproperty

API reference

# WritableHorizonProperty Interface

Represents a writable property.

## Signature

```
export interface WritableHorizonProperty<T, U = never>
```

## Remarks

You cannot set the property value directly; you must use the `set` method. Using `set` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md).

## Methods

|  |  |
| --- | --- |
| **set(value, values)** | Sets the value(s) of the property      Signature  ``` set(value: T, ...values: [U?]): void; ```  Parameters  value: T  the new property value  values: [U?]  the new property values  Returns  void |