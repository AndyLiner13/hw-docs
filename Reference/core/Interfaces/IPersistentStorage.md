Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorage

# IPersistentStorage Interface

A persistent storage object, which contains a set of functions that interact with player variables.
For information about using player variables, see the [Persistent Variables](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/object-type-persistent-variables) guide.

## Signature

```
export interface IPersistentStorage
```

## Methods

|  |  |
| --- | --- |
| **getPlayerVariable(player, key)** | Gets the value of a persistent player variable.      Signature  ``` getPlayerVariable<T extends PersistentSerializableState = number>(player: Player, key: string): T extends number ? T : T | null; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player for whom to get the value.  key: string  The name of the variable to get. If the value was stored using [compressAndEncode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_compressandencode), use [decodeAndInflate()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_decodeandinflate) to reverse the operation.  Returns  T extends number ? T : T | null  The value of the variable as some PersistentSerializableState, defaulting to number.  Examples  Retrieving a larger serializable object using the decodeAndInflate function.  ``` const storedWrapperObj: {data: string} = component.world.persistentStorage.getPlayerVariable(myPlayer, "ObjKey"); const storedObj: {key: string, key2: number, key3: boolean[]} = JSON.parse(decodeAndInflate(storedWrapperObj.data)); ``` |
| **setPlayerVariable(player, key, value)** | Sets a persistent player variable      Signature  ``` setPlayerVariable<T extends PersistentSerializableState>(player: Player, key: string, value: T): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player for whom to set the value.  key: string  The name of the variable to set.  value: T  The value to assign to the variable. Optionally, if using well structured data, consider using [compressAndEncode()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_compressandencode) to store data more efficiently.  Returns  void  Examples  Storing a larger serializable object using the compressAndEncode function.  ``` const objToStore = {data: compressAndEncode(JSON.stringify({key: "myValue", key2: 123, key3: [true, false, true]}))} component.world.persistentStorage.setPlayerVariable(myPlayer, "ObjKey", objToStore) ``` |