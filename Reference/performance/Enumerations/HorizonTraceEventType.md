---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizontraceeventtype
---

# [HorizonTraceEventType Enum](#horizontraceeventtype-enum)

The types for Horizon trace events, based on the sampler that produces them.

## [Signature](#signature)

```ts
export declare enum HorizonTraceEventType 
```

## [Enumeration Members](#enumeration-members)

| Member   | Value | Description                                                             |
| -------- | ----- | ----------------------------------------------------------------------- |
| Counter  | `2`   | Produced by .                                                           |
| Duration | `0`   | Produced by [HorizonCountSampler](../Classes/HorizonCountSampler.md).   |
| Marker   | `1`   | Produced by [HorizonMarkerSampler](../Classes/HorizonMarkerSampler.md). |

