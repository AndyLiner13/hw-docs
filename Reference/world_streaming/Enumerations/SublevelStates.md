Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/world_streaming_sublevelstates

# SublevelStates Enum

The possible states of a [sublevel](/hw-docs/Reference/world_streaming/Classes/SublevelEntity.md) in a world when using world streaming.

## Signature

```
export declare enum SublevelStates
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Active | `5` | The spawn is complete and the sublevel is ready for use. |
| Loaded | `4` | The sublevel's loading is complete and ready to be enabled, but does not yet count towards capacity. |
| Loading | `2` | The sublevel's asset data is loading. |
| NotReady | `0` | The sublevel's asset data is not yet available. |
| Paused | `3` | The sublevel's loading is paused. |
| Unloaded | `1` | The sublevel's asset data is available but not loaded. |
| Unloading | `6` | The sublevel is in the process of unloading. |

## Remarks

For more information about world streaming, see the [World Streaming](/hw-docs/Scripting/Asset%20spawning/World%20Streaming.md) guide.