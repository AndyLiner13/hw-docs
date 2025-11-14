Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_serializablestate

# SerializableState type

The entity state to transfer when entity ownership changes.

## Signature

```
export declare type SerializableState = {
    [key: string]: SerializableState;
} | SerializableState[] | PersistentSerializableStateNode | TransientSerializableStateNode;
```

## References

[SerializableState](/hw-docs/Reference/core/Type%20Aliases/SerializableState.md)

## Remarks

This type is used to transfer the state of an entity when its ownership changes from one player to another. The state of an entity isn't automatically transferred when its ownership changes. To transfer the state, you can pass it to the new owner using SerializableState through the [Component.transferOwnership()](/hw-docs/Reference/core/Abstract%20Classes/Component.md) and [Component.receiveOwnership()](/hw-docs/Reference/core/Abstract%20Classes/Component.md) methods.
For more information, see [Maintaining local state on ownership change](/hw-docs/Scripting/Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md).