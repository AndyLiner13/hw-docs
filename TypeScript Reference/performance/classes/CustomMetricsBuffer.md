# CustomMetricsBuffer Class

A list that contains a buffer of HorizonTraceEvents to send to the event aggregation pipeline for processing.

## Signature

```typescript
export declare class CustomMetricsBuffer
```

## Methods

| Method | Description |
| --- | --- |
| getBufferContents() static | Gets the trace events that are in the trace event buffer.<br/>**Signature:** `static getBufferContents(): Array<HzTraceEventsBySampler>;`<br/>**Returns:** `Array<HzTraceEventsBySampler>` - An array that contains the elements in the trace event buffer. |