# DurationSampler Class

> Warning: This API is now obsolete. Use [HorizonDurationSampler](https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizondurationsampler) instead! This class is deprecated.

## Signature

```typescript
export declare class DurationSampler
```

## Remarks

Creates a sampler that can be used to record an event that has a duration.

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(name) | Constructs a new instance of the DurationSampler class<br/>**Signature:** `constructor(name: string);`<br/>**Parameters:** `name: string` |

## Methods

| Method | Description |
| --- | --- |
| trace(fn) | **Signature:** `trace(fn: () => void): void;`<br/>**Parameters:** `fn: () => void`<br/>**Returns:** `void` |