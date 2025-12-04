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
| **getWorldCounter(key)** | Signature  ``` getWorldCounter(key: string): number; ```  Parameters  key: string  Returns  number |
| **getWorldVariable(key)** | Signature  ``` getWorldVariable<T extends PersistentSerializableState>(key: string): T | null; ```  Parameters  key: string  Returns  T | null |
| **incrementWorldCounterAsync(key, amount)** | Signature  ``` incrementWorldCounterAsync(key: string, amount: number): Promise<number>; ```  Parameters  key: string  amount: number  Returns  Promise<number> |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature  ``` setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride?: true): Promise<T>; ```  Parameters  key: string  value: T  allowConcurrentOverride: true  *(Optional)*  Returns  Promise<T> |
| **setWorldVariableAcrossAllInstancesAsync(key, value, allowConcurrentOverride)** | Signature  ``` setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T, allowConcurrentOverride: false): Promise<WorldVariableUpdateResult<T>>; ```  Parameters  key: string  value: T  allowConcurrentOverride: false  Returns  Promise<[WorldVariableUpdateResult](/hw-mcp-tools/documentation/hw-docs/Reference/core/Interfaces/WorldVariableUpdateResult.md)<T>> |