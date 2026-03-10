---
source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing
---

# [Tracing](#tracing)

**Note:** You must [enable the Utilities menu](Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](../../_assets/images/1b5ff6ba68e6d35efb579b2e4add7ef420a055ab0c71ef1777943f0fafc2f42d.png) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](../../_assets/images/89b23d810bbe11d0a0d0185941c73f628763be6558924c1e7f381eca0495cd63.png)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](../../_assets/images/14bfad0b254b214c090d89a84ccdd530f5bd216d3cf05050f0aeec92213021fe.png)

## [Trace types](#trace-types)

There are 2 types of traces you can run at this time: **Overview** and **Deep**. Both will save a file that can be viewed in Perfetto.

### [Overview](#overview)

An overview trace can help you set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, GPU as well as a high-level capture of metrics like physics, rendering and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.

### [Deep](#deep)

Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations. A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area.

### [How trace types relate to old config options](#how-trace-types-relate-to-old-config-options)

The overview and deep trace types correspond to the previous trace configuration options listed in the table below.

| Trace type | Old config options                    |
| ---------- | ------------------------------------- |
| Overview   | - Application - Debug - Client/Server |
| Deep       | - Application - Deep - Client/Server  |

## [Start a new trace using the wrist wearable](#start-a-new-trace-using-the-wrist-wearable)

To start a new trace from the wrist wearable:

1. Look at your left wrist to bring up the wrist wearable.
2. Select **Tracing.**![Utilities menu](../../_assets/images/844258c58c76c9649b10fc6048feefc43286adde6b982349d4b406686141663f.png)
3. Use the radio buttons to select the **Overview** or **Deep** tracing scope.
4. Select **Start tracing** to start the trace.

![Tracing dialog](../../_assets/images/c3c4a51acb383e90fb3e6ec6e06d89c7f02510f19077661a3bc5d20f9a29832c.png)

## [Start a new trace from the Real Time Metrics Panel](#start-a-new-trace-from-the-real-time-metrics-panel)

To start a new trace from the Performance Metrics panel:

1. On the Performance Metrics panel, select the **tracing** icon. ![Tracing icon targeted on Performance Metrics panel](../../_assets/images/8957560b176c1747b77481ca50316d26cfb5b7804816c223dd798214d686d425.png)
2. On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
3. Select **Start capture**.

![Start a trace dialog](../../_assets/images/14bfad0b254b214c090d89a84ccdd530f5bd216d3cf05050f0aeec92213021fe.png)\*\*

## [Download the trace file](#download-the-trace-file)

1. Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
2. Select your world.
3. From the left-side, navigation select **Performance** > **Traces**.
4. The most recent trace is always at the top of the page.
5. Select the trace file to download.

## [Tracing Scope](#tracing-scope)

The scope of the trace is used to filter various levels of data points.

- **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](../../_assets/images/645f5d4911f453a1c6d611751b4f813d6f60b3745f7349c9cc573903b8166709.png)
- **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](../../_assets/images/be0adff64874715bbda59083217515b28e2c18e79387473a0dd0057101cf6903.png)

## [Tracing Options](#tracing-options)

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

- **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](../../_assets/images/be0adff64874715bbda59083217515b28e2c18e79387473a0dd0057101cf6903.png)
- **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](../../_assets/images/6f022b0372db9deba53544ea6b954047cf6f87f85c160048684528279a85d6b8.png)
- **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## [Deep Script Profiling Analysis](#deep-script-profiling-analysis)

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](../../_assets/images/f53e71af8b758de6a05a20481b4bd8b248c50e80780f4554cab8e867e8107e86.png)

