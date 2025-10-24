# clamp() function

Clamps a value between a minimum value and a maximum value.

## Signature

```typescript
export declare function clamp(value: number, min: number, max: number): number;
```

## Parameters

- `value: number` - The value to clamp.
- `min: number` - The minimum value.
- `max: number` - The maximum value.

## Returns

`number` - The clamped value.

## Remarks

This utility function ensures that a numeric value stays within specified bounds. If the value is less than the minimum, it returns the minimum. If the value is greater than the maximum, it returns the maximum. Otherwise, it returns the original value.