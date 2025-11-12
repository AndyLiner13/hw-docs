Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricsbuffer

API reference

# CustomMetricsBuffer Class

A list that contains a buffer of HorizonTraceEvents to send to the event aggregation pipeline for processing.

## Signature

```
export declare class CustomMetricsBuffer
```

## Methods

|  |  |
| --- | --- |
| **getBufferContents()** static | Gets the trace events that are in the trace event buffer.      Signature  ``` static getBufferContents(): Array<HzTraceEventsBySampler>; ```  Returns  Array<HzTraceEventsBySampler>  An array that contains the elements in the trace event buffer. |