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
| Duration | `0` | Produced by [HorizonCountSampler](/hw-mcp-tools/documentation/hw-docs/Reference/performance/Classes/HorizonCountSampler.md). |
| Marker | `1` | Produced by [HorizonMarkerSampler](/hw-mcp-tools/documentation/hw-docs/Reference/performance/Classes/HorizonMarkerSampler.md). |