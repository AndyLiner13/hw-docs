Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnstate

# SpawnState Enum

The available spawn states for the asset of an entity.

## Signature

```
export declare enum SpawnState
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Active | `5` | The spawn is complete and the asset and ready for use. |
| Disposed | `7` | The spawn controller is disposed and is not longer available for use. |
| Loaded | `4` | The load is complete and ready to be enabled, but does not yet count towards capacity. |
| Loading | `2` | The asset data is being loaded. |
| NotReady | `0` | The asset data is not yet available. |
| Paused | `3` | The asset spawn operition is paused. |
| Unloaded | `1` | The asset data is available, but not loaded. |
| Unloading | `6` | The spawned asset is in the process of unloading. |