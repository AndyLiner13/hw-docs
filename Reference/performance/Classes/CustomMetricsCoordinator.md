---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/performance_custommetricscoordinator
---

# [CustomMetricsCoordinator Class](#custommetricscoordinator-class)

Coordinates custom performance metrics behaviors including listening for events from the aggregation pipeline, returning event data, and clearing the event buffer.

## [Signature](#signature)

```ts
export declare class CustomMetricsCoordinator 
```

## [Methods](#methods)

### [activateMetric(metricConfig) static](#activatemetricmetricconfig-static)

Adds a metric to the active metrics list if there isn't already a metric with the provided name. Also, adds any samplers that contribute to the metric so they can be accessed at runtime.

**Signature**

```ts
static activateMetric(metricConfig: HorizonPerformanceMetricConfig): void;
```

**Parameters**

metricConfig: [HorizonPerformanceMetricConfig](HorizonPerformanceMetricConfig.md)

The configuration for new metric to activate.

**Returns**

void

### [getActiveMetrics() static](#getactivemetrics-static)

Gets the metrics that are currently being aggregated.

**Signature**

```ts
static getActiveMetrics(): Array<HorizonPerformanceMetricConfig>;
```

**Returns**

Array<[HorizonPerformanceMetricConfig](HorizonPerformanceMetricConfig.md)>

An array that contains configurations of the active metrics.

### [getActiveSamplers() static](#getactivesamplers-static)

Gets the trace samplers that are running.

**Signature**

```ts
static getActiveSamplers(): Array<string>;
```

**Returns**

Array\<string>

An array that contains the active trace samplers.

### [isTracingActive() static](#istracingactive-static)

Indicates whether the trace is running.

**Signature**

```ts
static isTracingActive(): boolean;
```

**Returns**

boolean

`true` if tracing is in progress; false otherwise.

