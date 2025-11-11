Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/custom-metrics-api

# Custom Metrics API

Custom metrics are a way for creators to capture data about their TypeScript scripts while they run. This data shows when your scripts run and how long they take, which you can use to optimize world performance. You can view this data with the [Performance Scrubbing](/hw-docs/performance-best-practices-and-tooling/performance-tools/performance-scrubbing/) tool or in [Perfetto](/hw-docs/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto/).

To use custom metrics:

- Define and configure your own metrics in TypeScript.
- Activate the defined metrics to ensure they appear in the scrubbing tool.
- Create samplers to collect data.
- Call the samplers’ collection functions in your scripts wherever you want to record data.

## Create custom metrics and add to your scripts

To collect data about how your scripts run, you must define and configure the metrics you want to collect, create samplers, then call them in your scripts.

### Define and activate custom metrics

First, define and configure your custom metrics by creating a new [`HorizonPerformanceMetricConfig`](https://horizon.meta.com/resources/scripting-api/performance.horizonperformancemetricconfig.md/?api_version=2.0.0) object.

```vs
const testCounterMetric = new HorizonPerformanceMetricConfig(
  "counterMetric",
  ["helloThere", "helloThere2", "helloThere3"],
  HorizonTraceEventType.Counter,
  "100",
);
```

To create a metric, include the following parameters:

* metricName : The metric name as a string. “counterMetric” in the example.
* samplersList : A list of the names of the samplers that will provide data to this metric, as an array of strings. These samplers can be defined in any script file. [“helloThere”, “helloThere2”, “helloThere3”] in the example.
* intendedTraceEventType : The [HorizonTraceEvent](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0) type that corresponds to the sampler type for this metric. This determines the suffix (“milliseconds” or “none”) for the metric and the way it will be processed. “HorizonTraceEventType.Counter” in the example. The options are:
  + Duration, which measures a length of time, such as how long a function took to run. Measured in milliseconds with microsecond precision.
  + Marker, which measures an occurrence, such as whether code ran.
  + Counter, which measures an arbitrary number, like how many times a block of code ran.
* targetValue : The target value per frame as a string. This data will appear in the scrubbing tool. “100” in the example.

Once you’ve defined your custom metrics, activate the metrics you wish to see data for.

**Note:** If you don’t activate a metric its data won’t appear in the scrubbing tool.

```vs
CustomMetricsCoordinator.activateMetric(testCounterMetric);
```

### Create samplers

Once you’ve defined custom metrics, you must create samplers to provide data for those metrics.

Samplers are objects that record data of different types. They feed data into your defined metrics.

The types of samplers correspond to the [HorizonTraceEvent](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0) types:

* [HorizonDurationSampler](https://horizon.meta.com/resources/scripting-api/performance.horizondurationsampler.md/?api_version=2.0.0)
* [HorizonMarkerSampler](https://horizon.meta.com/resources/scripting-api/performance.horizonmarkersampler.md/?api_version=2.0.0)
* [HorizonCountSampler](https://horizon.meta.com/resources/scripting-api/performance.horizoncountsampler.md/?api_version=2.0.0)

We recommend using only one type of sampler per metric, but you can use any number of samplers of that type.

To create a sampler, pass in a name for the sampler as a string. This name must match one of the strings in the samplersList array passed into HorizonPerformanceMetricConfig.

```vs
// Create a count sampler
const testCountSampler = new HorizonCountSampler("helloThere");
```

You can use samplers from multiple script files in the same metric, since their names are defined by passing in a basic string.

### Measure custom metrics in your code

Once you’ve defined your custom metrics and created samplers for them, choose the right places in your scripts to measure these metrics by calling the samplers’ collection functions.

For example, to measure how many times a function ran with our testSampler:

```vs
var numRuns = 0;

function testFunc(): void {
  // do stuff
  numRuns++;
}

testCountSampler.count(numRuns);
```

To use a duration sampler to measure the length of a function, set up your custom metric, activate it, create a HorizonDurationSampler and call it’s trace() method on the function you want to measure:

```vs
function funcToBeTraced(): void {
  // do stuff
}

// Define a duration custom metric
const testDurationMetric = new HorizonPerformanceMetricConfig(
  "durationMetric",
  ["durationHello"],
  HorizonTraceEventType.Duration,
  "10",
);

// Activate the metric
CustomMetricsCoordinator.activateMetric(testDurationMetric);

// Create a duration sampler
const testDurationSampler = new HorizonDurationSampler("helloThere");

// Call it's trace() method on the function to measure
durationSamplerEx.trace(funcToBeTraced);
```

For a marker sampler, call `markerSamplerEx.mark()`.

## Analyze custom metric data

### Viewing Data in VR

**Note:** Only data from client-side scripts are available in the VR scrubbing tool.

To view data from the custom metrics you added to your client-side scripts, open the [real-time metrics panel](/hw-docs/performance-best-practices-and-tooling/performance-tools/enabling-and-modifying-the-realtime-metrics-panel/) and use the [scrubbing tool](/hw-docs/performance-best-practices-and-tooling/performance-tools/performance-scrubbing/). Performance data is collected by profiling your scripts whenever the real-time metrics panel is open. Click **Inspect** to look at the profile data and scroll to the bottom of the pane to see your metrics data. A buffer of the last 30 seconds of data is available to view.

### Viewing Data in Perfetto

You can use [Perfetto](/hw-docs/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto/) to view data from the custom metrics you added to your client and server side scripts.

- Create a trace using the instructions in the [Tracing](/hw-docs/performance-best-practices-and-tooling/performance-tools/tracing/) docs.
- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side navigation, select **Performance** > **Traces** to find the trace. The name of the trace file should include “custom\_metrics”.
- Click **Open in Perfetto** to open the trace.

Now, you can analyze your custom metrics data from the trace in [Perfetto](/hw-docs/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto).