Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_persistentserializablestate

# PersistentSerializableState type

A state that can persist across sessions within persistent variables for each player. Used with the [getPlayerVariable](../Classes/World.md#persistentstorage) and [setPlayerVariable](../Classes/World.md#persistentstorage) methods.

## Signature

```
export declare type PersistentSerializableState = {
    [key: string]: PersistentSerializableState;
} | PersistentSerializableState[] | PersistentSerializableStateNode;
```

## References

[PersistentSerializableState](PersistentSerializableState.md)