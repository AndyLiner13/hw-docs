Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizondurationsampler

API reference

# HorizonDurationSampler Class

A trace sampler that tracks the duration of function calls.

## Signature

```
export declare class HorizonDurationSampler
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(samplerName)** | Constructs a new instance of the `HorizonDurationSampler` class.  ---  Signature  ``` constructor(samplerName: string); ```  Parameters  samplerName: string  The name of the `HorizonDurationSampler` instance. |

## Methods

|  |  |
| --- | --- |
| **trace(fn)** | Tracks the duration of the given function call.      Signature  ``` trace(fn: () => void): void; ```  Parameters  fn: () => void  The function call to track.  Returns  void |