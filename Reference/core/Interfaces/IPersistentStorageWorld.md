Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_ipersistentstorageworld

# IPersistentStorageWorld Interface

A persistent storage object, which contains a set of functions that interact with persistent variables.

## Signature

```
export interface IPersistentStorageWorld
```

## Methods

|  |  |
| --- | --- |
| **fetchWorldVariableAsync(key)** | Signature  ``` fetchWorldVariableAsync<T extends PersistentSerializableState>(key: string): Promise<T | null>; ```  Parameters  key: string  Returns  Promise<T | null> |
| **getWorldCounter(key)** | Get a world counter value for current world from the persistent storage.      Signature  ``` getWorldCounter(key: string): number; ```  Parameters  key: string  The name of the world counter.  Returns  number  - The value of the world counter. |
| **getWorldVariable(key)** | Get a world persistent variable value for current world from the persistent storage.      Signature  ``` getWorldVariable<T extends PersistentSerializableState>(key: string): T | null; ```  Parameters  key: string  The name of the world persistent variable.  Returns  T | null  - The value of the world persistent variable. |
| **incrementWorldCounterAsync(key, amount)** | Increment a world counter value for current world from the persistent storage.      Signature  ``` incrementWorldCounterAsync(key: string, amount: number): Promise<number>; ```  Parameters  key: string  The name of the world counter.  amount: number  (optional) The amount to increment the world counter by. If not specified, the default value is 1. Can take a negative value for decrementing.  Returns  Promise<number>  - A promise which resolves to the updated value of the world counter. |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature  ``` setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride?: true): Promise<T>; ```  Parameters  key: string  value: T  allowConcurrentOverride: true  *(Optional)*  Returns  Promise<T> |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature  ``` setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride: false): Promise<WorldVariableUpdateResult<T>>; ```  Parameters  key: string  value: T  allowConcurrentOverride: false  Returns  Promise<[WorldVariableUpdateResult](/hw-docs/Reference/core/Interfaces/WorldVariableUpdateResult.md)<T>> |