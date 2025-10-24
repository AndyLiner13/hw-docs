# WritableHorizonProperty Interface

Represents a writable property.

## Signature

```typescript
export interface WritableHorizonProperty<T, U = never>
```

## Remarks

You cannot set the property value directly; you must use the `set` method. Using `set` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices).

## Methods

| Method | Description |
| --- | --- |
| `set(value, values)` | Sets the value(s) of the property<br/>**Signature:** `set(value: T, ...values: [U?]): void;`<br/>**Parameters:** `value: T` - the new property value, `values: [U?]` - the new property values<br/>**Returns:** `void` |