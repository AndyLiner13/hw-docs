Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_persistentserializablestate

API reference

# PersistentSerializableState type

A state that can persist across sessions within persistent variables for each player. Used with the [getPlayerVariable](/hw-docs/Reference/core/Classes/World.md#persistentstorage) and [setPlayerVariable](/hw-docs/Reference/core/Classes/World.md#persistentstorage) methods.

## Signature

```
export declare type PersistentSerializableState = {
    [key: string]: PersistentSerializableState;
} | PersistentSerializableState[] | PersistentSerializableStateNode;
```

## References

[PersistentSerializableState](/hw-docs/Reference/core/Type%20Aliases/PersistentSerializableState.md)