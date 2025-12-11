Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceevent

# HorizonTraceEvent Class

A trace event in Horizon Worlds.

## Signature

```
export declare class HorizonTraceEvent
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(samplerName, type, value)** | Constructs a `HorizonTraceEvent` object.  ---  Signature  ``` constructor(samplerName: string, type: HorizonTraceEventType, value: number); ```  Parameters  samplerName: string  The name of the `HorizonTraceEvent` object.  type: [HorizonTraceEventType](../Enumerations/HorizonTraceEventType.md)  The type of the sampler.  value: number  The value of the trace. |

## Properties

|  |  |
| --- | --- |
| **samplerName**  [readonly] | The name of the trace sampler for the event.      Signature  ``` readonly samplerName: string; ``` |
| **timeStamp**  [readonly] | The timestamp of event.      Signature  ``` readonly timeStamp: number; ``` |
| **type**  [readonly] | The trace event type.      Signature  ``` readonly type: HorizonTraceEventType; ``` |
| **value**  [readonly] | The value of the metric.      Signature  ``` readonly value: number; ``` |