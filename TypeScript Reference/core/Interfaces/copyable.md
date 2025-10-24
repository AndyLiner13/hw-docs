# Copyable interface

The Copyable interface provides 'copy' and 'clone' methods for copying data from an existing reference.

## Signature

```typescript
export interface Copyable<T>
```

## Methods

| Method | Description |
|--------|-------------|
| `clone()` | Creates a new reference with the source reference data copied to the new reference. **Signature:** `clone(): T` **Returns:** `T` |
| `copy(val)` | Copies data from another reference. **Signature:** `copy(val: T): void` **Parameters:** `val: T` - The value to copy data from. **Returns:** `void` |

## Remarks

This interface provides a standard way to copy and clone objects in the Meta Horizon Worlds API.