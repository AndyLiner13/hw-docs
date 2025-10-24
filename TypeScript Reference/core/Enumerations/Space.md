# Space enum

Indicates whether a method or object operates in local or global scope.

## Signature

```typescript
export declare enum Space
```

## Enumeration Members

| Member | Value | Description |
|--------|-------|-------------|
| `World` | `0` | The method operates in a global scope. |
| `Local` | `1` | The method operates in a local scope. |

## Remarks

This enumeration is used to specify the coordinate space for various operations, determining whether they should be performed relative to the world origin or to a local coordinate system.