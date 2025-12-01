Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_durationsampler

# DurationSampler Class

> Warning: This API is now obsolete.
> Use [HorizonDurationSampler](/hw-mcp-tools/documentation/hw-docs/Reference/performance/Classes/HorizonDurationSampler.md) instead!

This class is deprecated.

## Signature

```
export declare class DurationSampler
```

## Remarks

Creates a sampler that can be used to record an event that has a duration.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(name)** | Constructs a new instance of the `DurationSampler` class  ---  Signature  ``` constructor(name: string); ```  Parameters  name: string |

## Methods

|  |  |
| --- | --- |
| **trace(fn)** | Signature  ``` trace(fn: () => void): void; ```  Parameters  fn: () => void  Returns  void |