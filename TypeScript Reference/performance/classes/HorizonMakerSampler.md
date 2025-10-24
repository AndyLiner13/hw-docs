# HorizonMarkerSampler Class

A trace sampler that flags events.

## Signature

```typescript
export declare class HorizonMarkerSampler
```

## Remarks

Events flagged by this sampler aggregate to 1 if invoked and 0 if not.

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(samplerName) | Constructs a new instance of the HorizonMarkerSampler class.<br/>**Signature:** `constructor(samplerName: string);`<br/>**Parameters:** `samplerName: string` - The name of the HorizonMarkerSampler instance. |

## Methods

| Method | Description |
| --- | --- |
| mark() | Flags an event, which aggregates to 1 if the event is called and 0 if it's not called.<br/>**Signature:** `mark(): void;`<br/>**Returns:** `void` |