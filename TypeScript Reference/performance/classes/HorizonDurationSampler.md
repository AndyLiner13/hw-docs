# HorizonDurationSampler Class

A trace sampler that tracks the duration of function calls.

## Signature

```typescript
export declare class HorizonDurationSampler
```

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(samplerName) | Constructs a new instance of the HorizonDurationSampler class.<br/>**Signature:** `constructor(samplerName: string);`<br/>**Parameters:** `samplerName: string` - The name of the HorizonDurationSampler instance. |

## Methods

| Method | Description |
| --- | --- |
| trace(fn) | Tracks the duration of the given function call.<br/>**Signature:** `trace(fn: () => void): void;`<br/>**Parameters:** `fn: () => void` - The function call to track.<br/>**Returns:** `void` |