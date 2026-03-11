---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricsbuffer
---

# [CustomMetricsBuffer Class](#custommetricsbuffer-class)

A list that contains a buffer of HorizonTraceEvents to send to the event aggregation pipeline for processing.

## [Signature](#signature)

```ts
export declare class CustomMetricsBuffer 
```

## [Methods](#methods)

### [getBufferContents() static](#getbuffercontents-static)

Gets the trace events that are in the trace event buffer.

**Signature**

```ts
static getBufferContents(): Array<HzTraceEventsBySampler>;
```

**Returns**

Array\<HzTraceEventsBySampler>

An array that contains the elements in the trace event buffer.

