# IPersistentStorageWorld Interface

A persistent storage object, which contains a set of functions that interact with persistent variables.

## Signature

```typescript
export interface IPersistentStorageWorld
```

## Methods

| Method | Description |
| --- | --- |
| `fetchWorldVariableAsync(key)` | **Signature:** `fetchWorldVariableAsync<T extends PersistentSerializableState>(key: string): Promise<T \| null>;`<br/>**Parameters:** `key: string`<br/>**Returns:** `Promise<T \| null>` |
| `getWorldCounter(key)` | **Signature:** `getWorldCounter(key: string): number;`<br/>**Parameters:** `key: string`<br/>**Returns:** `number` |
| `getWorldVariable(key)` | **Signature:** `getWorldVariable<T extends PersistentSerializableState>(key: string): T \| null;`<br/>**Parameters:** `key: string`<br/>**Returns:** `T \| null` |
| `incrementWorldCounterAsync(key, amount)` | **Signature:** `incrementWorldCounterAsync(key: string, amount: number): Promise<number>;`<br/>**Parameters:** `key: string`, `amount: number`<br/>**Returns:** `Promise<number>` |
| `setWorldVariableAcrossAllInstancesAsync(key, value)` | **Signature:** `setWorldVariableAcrossAllInstancesAsync<T extends PersistentSerializableState>(key: string, value: T): Promise<T>;`<br/>**Parameters:** `key: string`, `value: T`<br/>**Returns:** `Promise<T>` |