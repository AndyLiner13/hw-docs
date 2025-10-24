# IPersistentStorage interface

A persistent storage object, which contains a set of functions that interact with player variables. For information about using player variables, see the [Persistent Variables](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/object-type-persistent-variables) guide.

## Signature

```typescript
export interface IPersistentStorage
```

## Methods

| Method | Description |
|--------|-------------|
| `getPlayerVariable(player, key)` | Gets the value of a persistent player variable. **Signature:** `getPlayerVariable<T extends PersistentSerializableState = number>(player: Player, key: string): T extends number ? T : T \| null` **Parameters:** `player: Player` - The player for whom to get the value. `key: string` - The name of the variable to get. **Returns:** `T extends number ? T : T \| null` - The value of the variable as some PersistentSerializableState, defaulting to number. |
| `setPlayerVariable(player, key, value)` | Sets a persistent player variable. **Signature:** `setPlayerVariable<T extends PersistentSerializableState>(player: Player, key: string, value: T): void` **Parameters:** `player: Player` - The player for whom to set the value. `key: string` - The name of the variable to set. `value: T` - The value to assign to the variable. **Returns:** `void` |

## References

[Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player), [PersistentSerializableState](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_persistentserializablestate)

## Remarks

This interface provides persistent storage capabilities for player-specific data that persists across game sessions.