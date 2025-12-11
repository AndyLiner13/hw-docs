Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

# Tracing

**Note:** You must [enable the Utilities menu](Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482030104_666482412556380_2531346198919298275_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=oywvEGyaLLEQ7kNvwG0W1OG&_nc_oc=AdkMLTsu_k8QMc81ioBMxKTlD4BFjE-Hap5tA98l96f092g6S_GjAFImz2ffIuiaoXY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AflxbMHDUgCTwRl4zPpc-LA0mu8OkP9IavQglTXqFSwpNA&oe=694BB77F) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452817263_512535204617769_564960638721355850_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=dewB96mMk-EQ7kNvwHK9_f7&_nc_oc=AdmMePb1hym4zA-ipD5-QPkb2ULdLRIYpTLrf1sZMqG3aMW4FRfvdimEfMJwOXz_Neg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfnqIGgmRy4aWrYDiavMtw1i6VshiNkl6SXyWwDSVV1K7g&oe=694BD478)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819269_512535177951105_486835410582879203_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=cIdJSJTuM0cQ7kNvwFRNMRj&_nc_oc=Adno-1DjuycmKWwNG_xS2KZSUvK5R17wkvotE5XiWCtOUeZIL501aiTiruBr1qOnR7c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfkpYjbp5IUrrVvP65J48IzQKg3KellmvscTo-KV9qZBlA&oe=694BC2A9)

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
- Select **Tracing.**![Utilities menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909242_512535254617764_3464900300897266132_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=LhF97cRTgWAQ7kNvwHMte82&_nc_oc=Adlaz1urx8flhdoyssi0nbzjw91W5PR3CSLM1Wo17CfSukqcsjoW0WIso8mL3HOzeA4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_Afnw4Co_JvDTuVbE7_P2Ez830VzHTLRVgqKDV789yBWSKg&oe=694BDF0B)
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

![Tracing dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512535241284432_1956381104628956841_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=RyjCktp4bcoQ7kNvwFkW2iO&_nc_oc=Adm6MnPOaGoFZpkE9bE-q1VoXzw7qRG1EAWCJT8OW9R-X2IPlckNy60Hu1OKELoqRYc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfnmexShMR0NBSKQXLckc5qSfWbV62cXT2pBinZLNvZAPQ&oe=694BD723)

## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  ![Tracing icon targeted on Performance Metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452457736_512535224617767_5197004322352436639_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=RpU2fHRQplIQ7kNvwE2X4O4&_nc_oc=AdnZOmDdumx3OUWLeGSfLepY_7C_zwCyTO80vtV6CgnOqV3Im35MDoJjebzBqBtXw9U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfnZrakzh1k4CapmnG2YofpB3lyTGj1wrsmc9XmmXaLowg&oe=694BDA13)
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533388_512535227951100_250312306465638715_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6YfqXzXZXG0Q7kNvwF4q3XR&_nc_oc=AdmECLgwAr4EBmXh4vA00SombYd9kNUu28iFZXG8HsEFWbef5aN6M964AZ1RINMExSw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_Afn1-JxRciOWbEnIDxIMb23XYUCe6hgF6o1joS9z1aIMiA&oe=694BC5D4)\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452830685_512535117951111_5669193774081795886_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=3Uarm9mUXW4Q7kNvwGtuJc4&_nc_oc=Adlcdiao2Kp0DipXsyvIt9KGiRKZ5VQ83K8vtIs_uoDOhZU-MLkzuL4kRpcr6ZaoAc8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_Afn7VmAeNxhQSDRuj2jxjnlRQI9u6mHDQqxooCSjfFyzXQ&oe=694BDCBB)
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522845_512535164617773_8431839052206306537_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=q2RRNi5Vw3IQ7kNvwHUSmLA&_nc_oc=AdlAaGw1Ef5yioeib0BPevdBRdfWL_jnA48DH8Hv84WtdtrW5yJhknE7vz0mrhovRFs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfkAhEpeaRec_GhrGyQlRhW0PWsbukvIESS3NKPTqa9hFQ&oe=694BC70C)

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588689_512535267951096_7012576616891124441_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=l_FZ4-jM5t8Q7kNvwFUaBch&_nc_oc=AdnjSJZbWjQA83C8Yv-PoQP39KPLFK7PE7WjfDBd2QSREjN_ty1kr-JHgta7SgJn5Ow&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfneSV1jRscd8qiDWGRuybAmLIR9MtxZCIUBqGulVy2w4Q&oe=694BC2FF)
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934272_512535274617762_9070031289387483374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=W0Qgb-kCrrQQ7kNvwG7MEeO&_nc_oc=Adktpm2C_9DhuPiJlkpPX_Xzt_vtJ7j0xXqngm246HgO_o7tEXt50qOQpL11wmKZjbI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AflT-rFB9eR1ZHvI3f3xkemS2NXj6dC73NRAEpjBRHLDAg&oe=694BEA7B)
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935529_512535264617763_3661555896485590188_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=SrQQJMkTDswQ7kNvwHMJfS6&_nc_oc=AdkxoanTy85BoWmehcphp4Nbnl3AiZVlHzsSRcDDFxYIVttEqH09grttfVREhBHYa5w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rw1PDooCkHStMH0-9C5Zjg&oh=00_AfnC64T1NmplhKR0kV7hqamsWXU4THPaUZKxrALWNwh4ug&oe=694BBF6E)