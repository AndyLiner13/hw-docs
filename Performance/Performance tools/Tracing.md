Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

Learn

# Tracing

**Note:** You must [enable the Utilities menu](/hw-docs/Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482030104_666482412556380_2531346198919298275_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=vXh3NyviyaoQ7kNvwHLxU30&_nc_oc=AdlqXj7H6-otFZ2kn8bG-5ms_aRorBjVRb9JHm0vxxSA0qKyq6PQExfGe3TyTVWe7pI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfgxAKI0RD_b0caWTLy4RLMznK9_Nh6p2iOetywH3FECOg&oe=692EB67F) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452817263_512535204617769_564960638721355850_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=atuHmdoMoPUQ7kNvwEHsEgy&_nc_oc=Adlbrhs06w-9S5Eng_sGGEaLNORXmQ_BBtkI4XViamaVUJuZX7GLknW5ZCQ8n-V4K9E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfgYkaxGabavrqWMCm-uVTqN5dfY8AG8dftAF0NLn6Efag&oe=692E9B38)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819269_512535177951105_486835410582879203_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4b7YELOGeIUQ7kNvwGV56no&_nc_oc=Adnh0Hah9XayovAMPGJQaPh6TgAjDCz5K02970u4BDTZMrBVTXqBzYNodg9e81cgGzg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfgHOVLA1oa6cbjepImkPG1raoC62VHzb5FzCxx7Sj0Kbg&oe=692EC1A9)

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
- Select **Tracing.**![Utilities menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909242_512535254617764_3464900300897266132_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=sksz-n-qHaYQ7kNvwGbQlNk&_nc_oc=AdlWjdvNwwJikZHSbt6PWUtRy8YdkVDumWogWVZqYob97aFUH7imY4el3bEqli78X18&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_Afh2-6mw2cLPMayJC5bI_7HtkW9aXuv_E92B3qk6HKEldQ&oe=692EA5CB)
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

![Tracing dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512535241284432_1956381104628956841_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=huc7hCW3tZUQ7kNvwGc43DY&_nc_oc=AdkKiooC0-2AJqfh7SvpwItIEniMFMYG7yDZZWCd07Vj0b0xcOBbT0RHWMThsSxgloM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfhXnfisUZhAdhQaAT_0QbvaDaSUIVkCbOLC5qx8Ke3BBQ&oe=692E9DE3)

## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  ![Tracing icon targeted on Performance Metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452457736_512535224617767_5197004322352436639_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=me-O74TDsiAQ7kNvwGrqQt7&_nc_oc=AdmEoofcU-SFrxs9qvMLOj64bl-EjNkgbj_xNmUobZ-B7bxOvOvLyFXNa2c14eDpH38&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfjeybSwKhuH4F2gypJX4vjCp3puEfI1IgkQ4whJ4Wa8NQ&oe=692EA0D3)
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533388_512535227951100_250312306465638715_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=bOWDE4eG8ewQ7kNvwH2mpDu&_nc_oc=Adk_jVY_tCIY1Nryr2LUBX5KEVn3hnCbuZJuUJMnxmpFrsCbfZrp5wMgDHVWCgQ8ULw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_Afjq-AIPbZFEmOutaLNwP6Ohh4LAnQVmAFd0uRfGrnnkng&oe=692EC4D4)\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452830685_512535117951111_5669193774081795886_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=vxwb2vocZygQ7kNvwEDzSG-&_nc_oc=AdkgUMb2M78Ox-aFTqn0Sx-JCUTDpFmZxOdWf9PO6kY-RJk9bZaQtvNfmqB6c6p1nps&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfioL-guF9YSnfdnlgaUOc9-K20f-wui338ftGkR3NINkQ&oe=692EA37B)
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522845_512535164617773_8431839052206306537_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OeFwNL1Tv5QQ7kNvwHZtn_h&_nc_oc=AdnqZXq62eUvzTJHB9CrJ88tQlbLJnRFP4I7XZfvH7R8P2jmm0N0OragXyP-WCLq7kI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfidtvvXws9NWmK6_GTMZ6MtRks2K8vF7ITl7kUgdMeriw&oe=692EC60C)

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588689_512535267951096_7012576616891124441_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=h4jDyAwK3MwQ7kNvwGRTkEA&_nc_oc=AdmDlVKtgMauw0VbFa-cEWoefDremsTFyDsDcXvnOVJL3wJ46JOXge8n7LvX_ksdiK8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfjYAnvbcilNJiPhlvBSn9AUI-vIgXi5iOvTQXevGHC4FA&oe=692EC1FF)
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934272_512535274617762_9070031289387483374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=aXczf34jn0oQ7kNvwETeKn_&_nc_oc=AdnTSF6HTmM0sEndC-oZFGYaSKK9ZvNj9Hsae1K7GXtbVL9BMnnUfC8f3RxW_fq1_gw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_AfjM_bWekf6g4iJYojDiBfwGgvWojtFMu6CIygNP9pz4Ig&oe=692EB13B)
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935529_512535264617763_3661555896485590188_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LhIqpzojIfoQ7kNvwGPznl8&_nc_oc=Admidmggi7VnPjDEScnHWQjSYYRkmZtldijhbS3b1xY0WGgtydprijtNX8NAnZnB0nw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KFiHHKs4NH1_wpECMNrYIg&oh=00_Afi75NDfyWFZhqVkgsr7duUP_QEwn1NPsWAB9KX8NvxZWQ&oe=692EBE6E)