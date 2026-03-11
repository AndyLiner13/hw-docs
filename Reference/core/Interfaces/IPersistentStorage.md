---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorage
---

# [IPersistentStorage Interface](#ipersistentstorage-interface)

A persistent storage object, which contains a set of functions that interact with player variables.\
For information about using player variables, see the [Persistent Variables](../../../Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md) guide.

## [Signature](#signature)

```ts
export interface IPersistentStorage 
```

## [Methods](#methods)

### [getPlayerVariable(player, key)](#getplayervariableplayer-key)

Gets the value of a persistent player variable.

**Signature**

```ts
getPlayerVariable<T extends PersistentSerializableState = number>(player: Player, key: string): T extends number ? T : T | null;
```

**Parameters**

player: [Player](../Classes/Player.md)

The player for whom to get the value.

key: string

The name of the variable to get. If the value was stored using [compressAndEncode()](../Functions/compressAndEncode.md), use [decodeAndInflate()](../Functions/decodeAndInflate.md) to reverse the operation.

**Returns**

T extends number ? T : T | null

The value of the variable as some PersistentSerializableState, defaulting to number.

**Examples**

Retrieving a larger serializable object using the decodeAndInflate function.

```ts
const storedWrapperObj: {data: string} = component.world.persistentStorage.getPlayerVariable(myPlayer, "ObjKey");
const storedObj: {key: string, key2: number, key3: boolean[]} = JSON.parse(decodeAndInflate(storedWrapperObj.data));
```

### [setPlayerVariable(player, key, value)](#setplayervariableplayer-key-value)

Sets a persistent player variable

**Signature**

```ts
setPlayerVariable<T extends PersistentSerializableState>(player: Player, key: string, value: T): void;
```

**Parameters**

player: [Player](../Classes/Player.md)

The player for whom to set the value.

key: string

The name of the variable to set.

value: T

The value to assign to the variable. Optionally, if using well structured data, consider using [compressAndEncode()](../Functions/compressAndEncode.md) to store data more efficiently.

**Returns**

void

**Examples**

Storing a larger serializable object using the compressAndEncode function.

```ts
const objToStore = {data: compressAndEncode(JSON.stringify({key: "myValue", key2: 123, key3: [true, false, true]}))}
component.world.persistentStorage.setPlayerVariable(myPlayer, "ObjKey", objToStore)
```

