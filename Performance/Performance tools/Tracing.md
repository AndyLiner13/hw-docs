Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

# Tracing

**Note:** You must [enable the Utilities menu](/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482030104_666482412556380_2531346198919298275_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=7qldA-ki5gwQ7kNvwHaGLqE&_nc_oc=Adm41REDUzI0zhkPft0zzbhb8Emo7P-6ylinjTdn6i1anB582AJZ6Edp7gJkjyUG4tM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfjlKstroj1CPCFshqsGuNjvih92lNdqEOd3GkAEvCx77w&oe=6931213F) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452817263_512535204617769_564960638721355850_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=1LXspcTs1_AQ7kNvwExRzVc&_nc_oc=Adn8aPVvO3boQ0ClYSf6VWdfPSfiFUhwspquxIJPCOBzfsemwEKL_A-0yeoAHY-3M-M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_Afghim5c1bjKnQdZ7CubvCU7JLefELw26j1iWXhxHoQ0og&oe=69313E38)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819269_512535177951105_486835410582879203_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Sx3_JUwlF0IQ7kNvwEVS3kF&_nc_oc=AdlV7DwwUEZKCrZuw0KcdMjY8DW8ZH_K0d_mkMs8Zetc6pYothBsPXPMb8Agnw75Wm8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfhhcQIfayxKr6vilsh6STCg4zOkOqZbudbiP-ZoSbFU5A&oe=69312C69)

## Trace types

There are 2 types of traces you can run at this time: **Overview** and **Deep**. Both will save a file that can be viewed in Perfetto.

### Overview

An overview trace can help you set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, GPU as well as a high-level capture of metrics like physics, rendering and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.

### Deep

Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations. A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area.

### How trace types relate to old config options

The overview and deep trace types correspond to the previous trace configuration options listed in the table below.

| Trace type | Old config options |
| --- | --- |
| Overview | - Application  - Debug  - Client/Server |
| Deep | - Application  - Deep  - Client/Server |

## Start a new trace using the wrist wearable

To start a new trace from the wrist wearable:

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing.**![Utilities menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909242_512535254617764_3464900300897266132_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=sksz-n-qHaYQ7kNvwGbQlNk&_nc_oc=AdlWjdvNwwJikZHSbt6PWUtRy8YdkVDumWogWVZqYob97aFUH7imY4el3bEqli78X18&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfhEB05eKrA96_r-xCp8i06am8RDxHr7uKbyOKpoW8q9YQ&oe=693148CB)
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

![Tracing dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512535241284432_1956381104628956841_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=huc7hCW3tZUQ7kNvwGc43DY&_nc_oc=AdkKiooC0-2AJqfh7SvpwItIEniMFMYG7yDZZWCd07Vj0b0xcOBbT0RHWMThsSxgloM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_Afii185enQ0k0OKo-7k2c34NrkDazEC4Fl00X9hwjNIMMA&oe=693140E3)

## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  ![Tracing icon targeted on Performance Metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452457736_512535224617767_5197004322352436639_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=30IZtiGi-qQQ7kNvwElC9ZV&_nc_oc=AdmsoGqHPiSMvP_4t7n30LjiNBqcrawEel5sysbdY0R0VlYI8cwiaCKADemSAsV5vv8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_Afh6ScCbz2NoBB33xaxLQKFUNg6NZQ07CDwaZsJV9g47ZQ&oe=693143D3)
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533388_512535227951100_250312306465638715_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=QgyrSfsYGJgQ7kNvwEK3c6R&_nc_oc=Adm0m4bmQDUS4wouabHkz2POgazRpaMkzzAwcNGyNvFuEVBh_VGQ4LuCgOCr94fjiQU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfgobBmi_97LGFFc4TsfqYfarRWZjUe-io6CNd_Cj1NYJA&oe=69312F94)\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452830685_512535117951111_5669193774081795886_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=twmtYQEHW7AQ7kNvwFbYNN0&_nc_oc=Adn_7lSYP1P7asfmZ8j9woVgCt2_OyETr1Z0U-wDz1-wNCRoWO7xYCm6O5pbrjtVBdM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfjRKRqNNZni3flIBahIrrv9sDrjcwM50OT4Gv59aiT7Wg&oe=6931467B)
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522845_512535164617773_8431839052206306537_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OeFwNL1Tv5QQ7kNvwHZtn_h&_nc_oc=AdnqZXq62eUvzTJHB9CrJ88tQlbLJnRFP4I7XZfvH7R8P2jmm0N0OragXyP-WCLq7kI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfjNLie1Y6tWjo1inwWks1ZMoU5nFApgElLMo-nZ8qe1bg&oe=693130CC)

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588689_512535267951096_7012576616891124441_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=h4jDyAwK3MwQ7kNvwGRTkEA&_nc_oc=AdmDlVKtgMauw0VbFa-cEWoefDremsTFyDsDcXvnOVJL3wJ46JOXge8n7LvX_ksdiK8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_Afi8RE05rtGg40BqRkTaBhyc_x8DnfzVVigo5_-A-uzi1A&oe=69312CBF)
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934272_512535274617762_9070031289387483374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=mKrezJiw3CkQ7kNvwFNQqN2&_nc_oc=AdloDwfmObBUvwpNta7n1Y_68nG6KggcWQRFzJeRwef4yZqRrIzqYntchHn2HMXCAF8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfgU9gbO7P4Q8CVynwBEcn3BeWNFNcPlbV8ME_Vc6rv2JQ&oe=69311BFB)
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935529_512535264617763_3661555896485590188_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LhIqpzojIfoQ7kNvwGPznl8&_nc_oc=Admidmggi7VnPjDEScnHWQjSYYRkmZtldijhbS3b1xY0WGgtydprijtNX8NAnZnB0nw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6ssnXV-Zo0CZdXigpfZM2Q&oh=00_AfhfwMXSy1u168XgiZX9NxO9AHnXmgXPnD8kZHesswqQDw&oe=6931292E)