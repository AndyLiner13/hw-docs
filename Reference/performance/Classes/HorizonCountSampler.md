Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizoncountsampler

# HorizonCountSampler Class

A trace sampler that tracks the frequency of events.

## Signature

```
export declare class HorizonCountSampler
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(samplerName)** | Constructs a new instance of the `HorizonCountSampler` class.  ---  Signature  ``` constructor(samplerName: string); ```  Parameters  samplerName: string  The name of the `HorizonCountSampler` instance. |

## Methods

|  |  |
| --- | --- |
| **count(amount)** | Tracks the number of trace events that occured.      Signature  ``` count(amount: number): void; ```  Parameters  amount: number  The type of trace event to track.  Returns  void |