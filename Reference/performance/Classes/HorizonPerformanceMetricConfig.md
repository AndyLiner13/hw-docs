Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_horizonperformancemetricconfig

API reference

# HorizonPerformanceMetricConfig Class

A configuration for a custom metric used to capture performance data about scripts at runtime. You can view this data with the [Performance Scrubbing](/hw-docs/Performance/Performance%20tools/Performance%20Scrubbing.md) tool or in [Perfetto](/hw-docs/Performance/Performance%20tools/Analyzing%20trace%20data%20with%20Perfetto.md).

## Signature

```
export declare class HorizonPerformanceMetricConfig
```

## Examples

```
const hitCounterMetric = new HorizonPerformanceMetricConfig(
 "totalHitCounterMetric",
 ["normalHit", "glancingHit", "criticalHit"],
 HorizonTraceEventType.Counter,
 "50",
);
```

## Remarks

For more information about using custom metrics, see the [Custom Metrics API](/hw-docs/Performance/Performance%20tools/Custom%20Metrics%20API.md) guide.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(metricName, samplersList, intendedTraceEventType, targetValue)** | Constructs a new `HorizonPerformanceMetricConfig` object.  ---  Signature  ``` constructor(metricName: string, samplersList: Array<string>, intendedTraceEventType: HorizonTraceEventType, targetValue: string); ```  Parameters  metricName: string  The name of the metric.  samplersList: Array<string>  The list of samplers for the metric.  intendedTraceEventType: [HorizonTraceEventType](/hw-docs/Reference/performance/Enumerations/HorizonTraceEventType.md)  The type of trace event for the metric.  targetValue: string  The desired metric value per frame. In performance tools, this value is compared to average, minimum, and maximum values. |

## Properties

|  |  |
| --- | --- |
| **intendedTraceEventType**  [readonly] | The type of trace event for the metric. This value corresponds to the sampler type in the `samplersList` parameter. This value determines the suffix applied to the metric such as "milliseconds" or "none," and how it's processed.      Signature  ``` readonly intendedTraceEventType: HorizonTraceEventType; ``` |
| **metricName**  [readonly] | The name of the metric.      Signature  ``` readonly metricName: string; ``` |
| **samplersList**  [readonly] | The list of samplers that is aggregated to provide the final metric value. Samplers are objects you define in your script that record individual types of metric data.      Signature  ``` readonly samplersList: Array<string>; ```  Remarks  The available sampler types are [HorizonDurationSampler](/hw-docs/Reference/performance/Classes/HorizonDurationSampler.md), [HorizonMarkerSampler](/hw-docs/Reference/performance/Classes/HorizonMarkerSampler.md), and [HorizonCountSampler](/hw-docs/Reference/performance/Classes/HorizonCountSampler.md). You should only use one type of sampler in each `HorizonPerformanceMetricConfig` object, but you can include multiple samplers of the same type. For example, if you include multiple [HorizonCountSampler](/hw-docs/Reference/performance/Classes/HorizonCountSampler.md) objects in a configuration, you shouldn't include other types in the same configuration, such as a [HorizonMarkerSampler](/hw-docs/Reference/performance/Classes/HorizonMarkerSampler.md) object. |
| **targetValue**  [readonly] | The desired metric value per frame. In performance tools, this value is compared to average, minimum, and maximum values.      Signature  ``` readonly targetValue: string; ``` |