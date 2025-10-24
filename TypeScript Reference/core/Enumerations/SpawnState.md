# SpawnState enum

The available spawn states for the asset of an entity.

## Signature

```typescript
export declare enum SpawnState
```

## Enumeration Members

| Member | Value | Description |
|--------|-------|-------------|
| `NotReady` | `0` | The asset data is not yet available. |
| `Unloaded` | `1` | The asset data is available, but not loaded. |
| `Loading` | `2` | The asset data is being loaded. |
| `Paused` | `3` | The asset spawn operation is paused. |
| `Loaded` | `4` | The load is complete and ready to be enabled, but does not yet count towards capacity. |
| `Active` | `5` | The spawn is complete and the asset is ready for use. |
| `Unloading` | `6` | The spawned asset is in the process of unloading. |
| `Disposed` | `7` | The spawn controller is disposed and is no longer available for use. |

## Remarks

This enumeration represents the lifecycle states of spawned assets, from initial loading through to disposal.