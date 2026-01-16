Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceeventtype

# HorizonTraceEventType Enum

The types for Horizon trace events, based on the sampler that produces them.

## Signature

```
export declare enum HorizonTraceEventType
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Counter | `2` | Produced by . |
| Duration | `0` | Produced by [HorizonCountSampler](https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizoncountsampler). |
| Marker | `1` | Produced by [HorizonMarkerSampler](https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonmarkersampler). |