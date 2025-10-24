# CustomMetricsCoordinator Class

Coordinates custom performance metrics behaviors including listening for events from the aggregation pipeline, returning event data, and clearing the event buffer.

## Signature

```typescript
export declare class CustomMetricsCoordinator
```

## Methods

| Method | Description |
| --- | --- |
| activateMetric(metricConfig) static | Adds a metric to the active metrics list if there isn't already a metric with the provided name. Also, adds any samplers that contribute to the metric so they can be accessed at runtime.<br/>**Signature:** `static activateMetric(metricConfig: HorizonPerformanceMetricConfig): void;`<br/>**Parameters:** `metricConfig: HorizonPerformanceMetricConfig` - The configuration for new metric to activate.<br/>**Returns:** `void` |
| getActiveMetrics() static | Gets the metrics that are currently being aggregated.<br/>**Signature:** `static getActiveMetrics(): Array<HorizonPerformanceMetricConfig>;`<br/>**Returns:** `Array<HorizonPerformanceMetricConfig>` - An array that contains configurations of the active metrics. |
| getActiveSamplers() static | Gets the trace samplers that are running.<br/>**Signature:** `static getActiveSamplers(): Array<string>;`<br/>**Returns:** `Array<string>` - An array that contains the active trace samplers. |
| isTracingActive() static | Indicates whether the trace is running.<br/>**Signature:** `static isTracingActive(): boolean;`<br/>**Returns:** `boolean` - true if tracing is in progress; false otherwise. |