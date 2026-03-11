---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorageworld
---

# [IPersistentStorageWorld Interface](#ipersistentstorageworld-interface)

A persistent storage object, which contains a set of functions that interact with persistent variables.

## [Signature](#signature)

```ts
export interface IPersistentStorageWorld 
```

## [Methods](#methods)

### [fetchWorldVariableAsync(key)](#fetchworldvariableasynckey)

**Signature**

```ts
fetchWorldVariableAsync<T extends PersistentSerializableState>(key: string): Promise<T | null>;
```

**Parameters**

key: string

**Returns**

Promise\<T | null>

### [getWorldCounter(key)](#getworldcounterkey)

Get a world counter value for current world from the persistent storage.

**Signature**

```ts
getWorldCounter(key: string): number;
```

**Parameters**

key: string

The name of the world counter.

**Returns**

number

\- The value of the world counter.

### [getWorldVariable(key)](#getworldvariablekey)

Get a world persistent variable value for current world from the persistent storage.

**Signature**

```ts
getWorldVariable<T extends PersistentSerializableState>(key: string): T | null;
```

**Parameters**

key: string

The name of the world persistent variable.

**Returns**

T | null

\- The value of the world persistent variable.

### [incrementWorldCounterAsync(key, amount)](#incrementworldcounterasynckey-amount)

Increment a world counter value for current world from the persistent storage.

**Signature**

```ts
incrementWorldCounterAsync(key: string, amount: number): Promise<number>;
```

**Parameters**

key: string

The name of the world counter.

amount: number

(optional) The amount to increment the world counter by. If not specified, the default value is 1. Can take a negative value for decrementing.

**Returns**

Promise\<number>

\- A promise which resolves to the updated value of the world counter.

### [setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)](#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride)

**Signature**

```ts
setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride?: true): Promise<T>;
```

**Parameters**

key: string

value: T

allowConcurrentOverride: true

*(Optional)*

**Returns**

Promise\<T>

### [setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)](#setworldvariableacrossallinstancesasynckey-value-allowconcurrentoverride-1)

**Signature**

```ts
setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride: false): Promise<WorldVariableUpdateResult<T>>;
```

**Parameters**

key: string

value: T

allowConcurrentOverride: false

**Returns**

Promise<[WorldVariableUpdateResult](WorldVariableUpdateResult.md)\<T>>

