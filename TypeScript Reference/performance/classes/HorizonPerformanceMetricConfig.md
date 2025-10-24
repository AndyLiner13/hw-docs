# HorizonPerformanceMetricConfig Class

A configuration for a custom metric used to capture performance data about scripts at runtime. You can view this data with the [Performance Scrubbing](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing) tool or in [Perfetto](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto).

## Signature

```typescript
export declare class HorizonPerformanceMetricConfig
```

## Examples

```typescript
const hitCounterMetric = new HorizonPerformanceMetricConfig(
  "totalHitCounterMetric",
  ["normalHit", "glancingHit", "criticalHit"],
  HorizonTraceEventType.Counter,
  "50",
);
```

## Remarks

For more information about using custom metrics, see the [Custom Metrics API](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/custom-metrics-api) guide.

## Constructors

| Constructor | Description |
| --- | --- |
| (constructor)(metricName, samplersList, intendedTraceEventType, targetValue) | Constructs a new HorizonPerformanceMetricConfig object.<br/>**Signature:** `constructor(metricName: string, samplersList: Array<string>, intendedTraceEventType: HorizonTraceEventType, targetValue: string);`<br/>**Parameters:**<br/>- `metricName: string` - The name of the metric.<br/>- `samplersList: Array<string>` - The list of samplers for the metric.<br/>- `intendedTraceEventType: HorizonTraceEventType` - The type of trace event for the metric.<br/>- `targetValue: string` - The desired metric value per frame. In performance tools, this value is compared to average, minimum, and maximum values. |

## Properties

| Property | Description |
| --- | --- |
| intendedTraceEventType [readonly] | The type of trace event for the metric. This value corresponds to the sampler type in the samplersList parameter. This value determines the suffix applied to the metric such as "milliseconds" or "none," and how it's processed.<br/>**Signature:** `readonly intendedTraceEventType: HorizonTraceEventType;` |
| metricName [readonly] | The name of the metric.<br/>**Signature:** `readonly metricName: string;` |
| samplersList [readonly] | The list of samplers that is aggregated to provide the final metric value. Samplers are objects you define in your script that record individual types of metric data.<br/>**Signature:** `readonly samplersList: Array<string>;`<br/>**Remarks:** The available sampler types are HorizonDurationSampler, HorizonMarkerSampler, and HorizonCountSampler. You should only use one type of sampler in each HorizonPerformanceMetricConfig object, but you can include multiple samplers of the same type. For example, if you include multiple HorizonCountSampler objects in a configuration, you shouldn't include other types in the same configuration, such as a HorizonMarkerSampler object. |
| targetValue [readonly] | The desired metric value per frame. In performance tools, this value is compared to average, minimum, and maximum values.<br/>**Signature:** `readonly targetValue: string;` |