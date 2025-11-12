Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonmarkersampler

API reference

# HorizonMarkerSampler Class

A trace sampler that flags events.

## Signature

```
export declare class HorizonMarkerSampler
```

## Remarks

Events flagged by this sampler aggregate to 1 if invoked and 0 if not.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(samplerName)** | Constructs a new instance of the `HorizonMarkerSampler` class.  ---  Signature  ``` constructor(samplerName: string); ```  Parameters  samplerName: string  The name of the `HorizonMarkerSampler` instance. |

## Methods

|  |  |
| --- | --- |
| **mark()** | Flags an event, which aggregates to 1 if the event is called and 0 if it's not called.      Signature  ``` mark(): void; ```  Returns  void |