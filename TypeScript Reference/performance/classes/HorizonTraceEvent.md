# HorizonTraceEvent Class

A trace event in Horizon Worlds.

## Signature

```typescript
export declare class HorizonTraceEvent
```

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(samplerName, type, value) | Constructs a HorizonTraceEvent object.<br/>**Signature:** `constructor(samplerName: string, type: HorizonTraceEventType, value: number);`<br/>**Parameters:**<br/>- `samplerName: string` - The name of the HorizonTraceEvent object.<br/>- `type: HorizonTraceEventType` - The type of the sampler.<br/>- `value: number` - The value of the trace. |

## Properties

| Property | Description |
| --- | --- |
| samplerName [readonly] | The name of the trace sampler for the event.<br/>**Signature:** `readonly samplerName: string;` |
| timeStamp [readonly] | The timestamp of event.<br/>**Signature:** `readonly timeStamp: number;` |
| type [readonly] | The trace event type.<br/>**Signature:** `readonly type: HorizonTraceEventType;` |
| value [readonly] | The value of the metric.<br/>**Signature:** `readonly value: number;` |