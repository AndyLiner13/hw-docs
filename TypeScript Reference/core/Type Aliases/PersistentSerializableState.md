# PersistentSerializableState type

A state that can persist across sessions within persistent variables for each player. Used with the [getPlayerVariable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#persistentstorage) and [setPlayerVariable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#persistentstorage) methods.

## Signature

```typescript
export declare type PersistentSerializableState = {
    [key: string]: PersistentSerializableState;
} | PersistentSerializableState[] | PersistentSerializableStateNode;
```

## References

PersistentSerializableState