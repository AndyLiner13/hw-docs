# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Define and activate custom metrics

 First, define and configure your custom metrics by creating a new [HorizonPerformanceMetricConfig](https://horizon.meta.com/resources/scripting-api/performance.horizonperformancemetricconfig.md/?api_version=2.0.0) object.  
```
const testCounterMetric = new HorizonPerformanceMetricConfig(
  "counterMetric",
  ["helloThere", "helloThere2", "helloThere3"],
  HorizonTraceEventType.Counter,
  "100",
);
```
 To create a metric, include the following parameters:
• metricName : The metric name as a string. “counterMetric” in the example.
• samplersList : A list of the names of the samplers that will provide data to
this metric, as an array of strings. These samplers can be defined in any script
file. [“helloThere”, “helloThere2”, “helloThere3”] in the example.
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Define and activate custom metrics
...
• intendedTraceEventType : The [HorizonTraceEvent](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0) type that corresponds to the sampler type for this metric. This determines the
suffix (“milliseconds” or “none”) for the metric and the way it will be
processed. “HorizonTraceEventType.Counter” in the example. The options are:
  • Duration, which measures a length of time, such as how long a function took to
run. Measured in milliseconds with microsecond precision.
  • Marker, which measures an occurrence, such as whether code ran.
  • Counter, which measures an arbitrary number, like how many times a block of code
ran.
• targetValue : The target value per frame as a string. This data will appear in
the scrubbing tool. “100” in the example.
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Define and activate custom metrics
...
 Once you’ve defined your custom metrics, activate the metrics you wish to see
data for. Note: If you don’t activate a metric its data won’t appear in the scrubbing tool.  `CustomMetricsCoordinator`.`activateMetric`(`testCounterMetric`);`  
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Create samplers

 Once you’ve defined custom metrics, you must create samplers to provide data for
those metrics. Samplers are objects that record data of different types. They feed data into
your defined metrics. The types of samplers correspond to the [HorizonTraceEvent](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0) types:
• [HorizonDurationSampler](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0)
• [HorizonMarkerSampler](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0)
• [HorizonCountSampler](https://horizon.meta.com/resources/scripting-api/performance.horizontraceevent.md/?api_version=2.0.0)
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Create samplers
...
 We recommend using only one type of sampler per metric, but you can use any
number of samplers of that type. To create a sampler, pass in a name for the sampler as a string. This name must
match one of the strings in the samplersList array passed into
HorizonPerformanceMetricConfig.  
```
// Create a count sampler
const testCountSampler = new HorizonCountSampler("helloThere");
```
 You can use samplers from multiple script files in the same metric, since their
names are defined by passing in a basic string.  
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Measure custom metrics in your code

 Once you’ve defined your custom metrics and created samplers for them, choose
the right places in your scripts to measure these metrics by calling the samplers’
collection functions. For example, to measure how many times a function ran with our testSampler:  
```
var numRuns = 0;

function testFunc(): void {
  // do stuff
  numRuns++;
}

testCountSampler.count(numRuns);
```
 To use a duration sampler to measure the length of a function, set up your
custom metric, activate it, create a HorizonDurationSampler and call it’s trace()
method on the function you want to measure:  
```
function funcToBeTraced(): void {
  // do stuff
}

// Define a duration custom metric
const testDurationMetric = new HorizonPerformanceMetricConfig(
  "durationMetric",
  ["durationHello"],
  HorizonTraceEventType.Duration,
  "10",
);
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts
...
### Measure custom metrics in your code
...
// Activate the metric
CustomMetricsCoordinator.activateMetric(testDurationMetric);

// Create a duration sampler
const testDurationSampler = new HorizonDurationSampler("helloThere");

// Call it's trace() method on the function to measure
durationSamplerEx.trace(funcToBeTraced);
```
 For a marker sampler, call `markerSamplerEx.mark()`.  
...
...
# Custom Metrics API
...
## Create custom metrics and add to your scripts

 To collect data about how your scripts run, you must define and configure the
metrics you want to collect, create samplers, then call them in your scripts.  
### Define and activate custom metrics
...
### Create samplers
...
### Measure custom metrics in your code
...
...
# Custom Metrics API
...
## Analyze custom metric data

  
### Viewing Data in VR

 Note: Only data from client-side scripts are available in the VR scrubbing tool. To view data from the custom metrics you added to your client-side scripts, open
the [real-time metrics panel](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/enabling-and-modifying-the-realtime-metrics-panel/) and use the [scrubbing tool](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing/). Performance data is collected by profiling your scripts whenever the real-time
metrics panel is open. Click Inspect to look at the profile data and scroll to the bottom of the pane to see your
metrics data. A buffer of the last 30 seconds of data is available to view.  
...
...
# Custom Metrics API
...
## Analyze custom metric data
...
### Viewing Data in Perfetto

 You can use [Perfetto](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto/) to view data from the custom metrics you added to your client and server side
scripts.
1. Create a trace using the instructions in the [Tracing](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing/) docs.
2. Open the [Horizon Creator portal](https://horizon.meta.com/creator/performance/traces/) and find the trace. The name of the trace file should include “custom_metrics”.
...
...
# Custom Metrics API
...
## Analyze custom metric data
...
### Viewing Data in Perfetto
...
3. Click Open in Perfetto to open the trace. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452863125_512500244621265_2569838356508375566_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=QiDDtK7ar28Q7kNvwFqSuyZ&_nc_oc=Adk5p744JZLd4WlUzylM0uzvGgEiBIswxLs71Blbwf_L9iCJRfeNclZKgAJe2iNEh8c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_BoNDhVY2vIxrQkxO-_tWg&oh...
...
# Custom Metrics API
...
## Analyze custom metric data
...
### Viewing Data in Perfetto
...
 Now, you can analyze your custom metrics data from the trace in [Perfetto](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto).    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Custom Metrics API
...
## Analyze custom metric data
...
### Viewing Data in Perfetto
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Custom Metrics API
...
## Analyze custom metric data

  
### Viewing Data in VR
...
### Viewing Data in Perfetto
...
...
# Custom Metrics API
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fperformance-best-practices-and-tooling%2Fperformance-tools%2Fcustom-metrics-api%2F)
...
# Custom Metrics API

 Custom metrics are a way for creators to capture data about their TypeScript
scripts while they run. This data shows when your scripts run and how long they
take, which you can use to optimize world performance. You can view this data with
the [Performance Scrubbing](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing/) tool or in [Perfetto](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto/). To use custom metrics:
1. Define and configure your own metrics in TypeScript.
2. Activate the defined metrics to ensure they appear in the scrubbing tool.
3. Create samplers to collect data.
4. Call the samplers’ collection functions in your scripts wherever you want to
record data.

  
## Create custom metrics and add to your scripts
...
## Analyze custom metric data
...
...
# Custom Metrics API
...
## Additional Links
...
      Learn
# Custom Metrics API
