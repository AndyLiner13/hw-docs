# Comparable interface

The Comparable interface defines a set of methods for comparing values of the same type, including equals() and equalsApprox() methods.

## Signature

```typescript
export interface Comparable<T>
```

## Methods

| Method | Description |
|--------|-------------|
| `equals(val)` | Indicates whether the two values are equal. True if the values are equal; false otherwise. **Signature:** `equals(val: T): boolean` **Parameters:** `val: T` - The value to compare to the current value. **Returns:** `boolean` |
| `equalsApprox(val, epsilon)` | Indicates two values are within epsilon of each other. True if the values are within epsilon, false otherwise. **Signature:** `equalsApprox(val: T, epsilon?: number): boolean` **Parameters:** `val: T` - The value to compare to the current value. `epsilon: number` - (Optional) The difference between the two values when they are equal. **Returns:** `boolean` |

## Remarks

This interface provides a standard way to compare values with both exact equality and approximate equality (useful for floating-point comparisons).