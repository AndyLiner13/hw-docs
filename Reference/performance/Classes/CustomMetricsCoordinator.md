---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricscoordinator
---

# [CustomMetricsCoordinator Class](#custommetricscoordinator-class)

Coordinates custom performance metrics behaviors including listening for events from the aggregation pipeline, returning event data, and clearing the event buffer.

## [Signature](#signature)

```
export
 declare 
class
 
CustomMetricsCoordinator
 
```

## [Methods](#methods)

|                                            |                                                                                                                                                                                                           |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \*\*activateMetric(metricConfig)\*\*static | Adds a metric to the active metrics list if there isn't already a metric with the provided name. Also, adds any samplers that contribute to the metric so they can be accessed at runtime.Signature\`\`\` |
| static                                     |                                                                                                                                                                                                           |
| activateMetric                             |                                                                                                                                                                                                           |
| (                                          |                                                                                                                                                                                                           |
| metricConfig                               |                                                                                                                                                                                                           |
| :                                          |                                                                                                                                                                                                           |

HorizonPerformanceMetricConfig
):

void
;

````ParametersmetricConfig: [HorizonPerformanceMetricConfig](HorizonPerformanceMetricConfig.md)The configuration for new metric to activate.Returnsvoid |
| **getActiveMetrics()**static           | Gets the metrics that are currently being aggregated.Signature```
static
 getActiveMetrics
():
 
Array
<
HorizonPerformanceMetricConfig
>;
```ReturnsArray<[HorizonPerformanceMetricConfig](HorizonPerformanceMetricConfig.md)>An array that contains configurations of the active metrics.                                                                                                                                                        |
| **getActiveSamplers()**static          | Gets the trace samplers that are running.Signature```
static
 getActiveSamplers
():
 
Array
<string>
;
```ReturnsArray\<string>An array that contains the active trace samplers.                                                                                                                                                                                                                                                                   |
| **isTracingActive()**static            | Indicates whether the trace is running.Signature```
static
 isTracingActive
():
 
boolean
;
```Returnsboolean`true` if tracing is in progress; false otherwise.                                                                                                                                                                                                                                                                                    |
````

