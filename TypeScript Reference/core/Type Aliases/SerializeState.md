# SerializableState type

The entity state to transfer when entity ownership changes.

## Signature

```typescript
export declare type SerializableState = {
    [key: string]: SerializableState;
} | SerializableState[] | PersistentSerializableStateNode | TransientSerializableStateNode;
```

## References

SerializableState

## Remarks

This type is used to transfer the state of an entity when its ownership changes from one player to another. The state of an entity isn't automatically transferred when its ownership changes. To transfer the state, you can pass it to the new owner using SerializableState through the [Component.transferOwnership()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#transferownership) and [Component.receiveOwnership()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_component#receiveownership) methods.

For more information, see [Maintaining local state on ownership change](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/maintaining-local-state-on-ownership-change).