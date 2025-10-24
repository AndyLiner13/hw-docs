# ReadableHorizonProperty Interface

Represents a readable property.

## Signature

```typescript
export interface ReadableHorizonProperty<T>
```

## Remarks

You cannot get the property value directly; you must call the `get` method. Using `get` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices).

## Methods

| Method | Description |
| --- | --- |
| `get()` | Gets the property value<br/>**Signature:** `get(): T;`<br/>**Returns:** `T` - the property value |