Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnerror

API reference

# SpawnError Enum

The possible errors encounted during asset spawning.

## Signature

```
export declare enum SpawnError
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Cancelled | `2` | The spawn was cancelled by the user. |
| ExceedsCapacity | `1` | The spawn failed due to capacity limitations. |
| InvalidAsset | `3` | The specified asset ID was invalid or that type of asset cannot be spawned. |
| InvalidParams | `5` | One of more of the request parameters is not valid. |
| None | `0` | No error since the last attempt to spawn. |
| UnauthorizedContent | `4` | The asset contains content which is not approved for spawning in this world. |
| Unknown | `6` | An unexpected error. |