# HorizonCountSampler Class

A trace sampler that tracks the frequency of events.

## Signature

```typescript
export declare class HorizonCountSampler
```

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(samplerName) | Constructs a new instance of the HorizonCountSampler class.<br/>**Signature:** `constructor(samplerName: string);`<br/>**Parameters:** `samplerName: string` - The name of the HorizonCountSampler instance. |

## Methods

| Method | Description |
| --- | --- |
| count(amount) | Tracks the number of trace events that occured.<br/>**Signature:** `count(amount: number): void;`<br/>**Parameters:** `amount: number` - The type of trace event to track.<br/>**Returns:** `void` |