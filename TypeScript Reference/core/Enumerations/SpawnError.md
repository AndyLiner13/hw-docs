# SpawnError enum

The possible errors encountered during asset spawning.

## Signature

```typescript
export declare enum SpawnError
```

## Enumeration Members

| Member | Value | Description |
|--------|-------|-------------|
| `None` | `0` | No error since the last attempt to spawn. |
| `ExceedsCapacity` | `1` | The spawn failed due to capacity limitations. |
| `Cancelled` | `2` | The spawn was cancelled by the user. |
| `InvalidAsset` | `3` | The specified asset ID was invalid or that type of asset cannot be spawned. |
| `UnauthorizedContent` | `4` | The asset contains content which is not approved for spawning in this world. |
| `InvalidParams` | `5` | One or more of the request parameters is not valid. |
| `Unknown` | `6` | An unexpected error. |

## Remarks

This enumeration provides specific error codes that can occur during the asset spawning process, helping developers diagnose spawn failures.