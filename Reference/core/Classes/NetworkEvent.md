---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_networkevent
---

# [NetworkEvent Class](#networkevent-class)

Represents an event sent over a network. These events support any type of data that can be serialized through JSON.stringify().

## [Signature](#signature)

```ts
export declare class NetworkEvent<TPayload extends NetworkEventData = Record<string, never>> 
```

## [Remarks](#remarks)

When sent over the network, NetworkEvent outperforms [CodeBlockEvent](CodeBlockEvent.md) because it doesn't use the legacy messaging system used by Code Block scripting.\
For events sent between event listeners on the same client (locally), you can use [LocalEvent](LocalEvent.md).

## [Constructors](#constructors)

### [(constructor)(name)](#constructorname)

Creates a NetworkEvent with the specified name.

**Signature**

```ts
constructor(name: string);
```

**Parameters**

name: string

The name of the event.

## [Properties](#properties)

### [name](#name)

The name of the event.

**Signature**

```ts
name: string;
```

