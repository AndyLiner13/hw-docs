# HorizonTraceEventType Enum

The types for Horizon trace events, based on the sampler that produces them.

## Signature

```typescript
export declare enum HorizonTraceEventType
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Counter | 2 | Produced by HorizonCountSampler. |
| Duration | 0 | Produced by HorizonDurationSampler. |
| Marker | 1 | Produced by HorizonMarkerSampler. |