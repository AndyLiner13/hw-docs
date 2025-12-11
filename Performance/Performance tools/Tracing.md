Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

# Tracing

**Note:** You must [enable the Utilities menu](Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482030104_666482412556380_2531346198919298275_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=jjFRG5v7N3AQ7kNvwFkD7OO&_nc_oc=Adkamom-F1uFFY5f1xA7d7PPtCYVOMOSdM0paeVzxZfT_Cl_uzcN7Knt_MUluik9z9WefPXDq59drfUCjdIoSwxZ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AflDXdZz4E_LMwrmVxJiSzi283zKCUkAc1JAsdh556aMdQ&oe=69559ABF) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452817263_512535204617769_564960638721355850_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=l_kppDhoREwQ7kNvwEqx_sE&_nc_oc=AdmbVwMXkSEns5im7rpCpoEqV4s2d2tebiFXl9NG9xZq8cfgY9V7bJ4QQoSpfCafedRfDYzeoG0xLIrd8YAPUtv2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfmpR8nhBV1O_yo-0fvJKEPyWPH7gjgkZnF-7FpaNZvgsQ&oe=69557F78)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819269_512535177951105_486835410582879203_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=u_wd-qMFAkEQ7kNvwG1jgx4&_nc_oc=AdlaECKz6o6Axag7x1I-K8Js0HugXuV8wJoQ31jQcLdBtW6jSd9bVC2TfL8oR-UcMGbhvpiy6QMQqDNK8ojUo29v&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfncDptxGA-by2yYmHaSkh1EHaG21MO8CbSKZJjjvY7C9Q&oe=69556DA9)

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
- Select **Tracing.**![Utilities menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909242_512535254617764_3464900300897266132_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Yswv16QTfksQ7kNvwF4W-ym&_nc_oc=AdnataNWB5fIB1E-HuLEiWtelkyA-gpKnzmucBW8eRSt-58UNfn0qAUvVhiQg51cmzjinDFWBLsSbfu6Ew_9BfSL&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_Afk6TW7x5_S2xuvid8es_13vzFV6l6vtDbzrVnQpKQChuw&oe=69558A0B)
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

![Tracing dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512535241284432_1956381104628956841_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=K8ontINTwyIQ7kNvwE2bVkV&_nc_oc=Adlp_Xr9lRKbMpssNUFmI5jOHLiLi4fGkm7UEdDeJIBPnV8DKUA2Nu9TyLMvZOcfDi1LA4AV_pdJE1ucb8e1qJ20&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfkfrjWV-rjPHzFMa5Ui_ApjoiwkpEXCmAnwDJ-vLoh_LA&oe=69558223)

## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  ![Tracing icon targeted on Performance Metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452457736_512535224617767_5197004322352436639_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=lvmhUyNtJugQ7kNvwF4R32f&_nc_oc=Adk0hZlNda1jAdcJ0JJlWfAChySoXiIJTggwIfVxK3w_TCDai4L854z931U10QiQ87AzGJE8F7k8WHVnXwsW7wOu&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_Afnk6Z3fom7oW4HO7RJmYMSTkW9eOCQ0Ib2hgBb7ixPtBw&oe=69558513)
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533388_512535227951100_250312306465638715_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=78NDKsRY2MoQ7kNvwG3KDQP&_nc_oc=AdkuNR1dak2fXHTxPpgmC-inhqLp47heFhC4V33SJmqS9ywezR8Ksgj1WXB_jWe7MCoQyNFMmz9Nt35hKrYxmyXs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfmXnX-_FejO52mve3yCBsNtVfDzyC54CorORBFZplSRuw&oe=695570D4)\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452830685_512535117951111_5669193774081795886_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=CAY-w-ZU0hsQ7kNvwF2ppal&_nc_oc=AdlhnS8zCoSO1gR9C2UBOPsnRJdo2Z0Fux21lce9RjpFlju3e9sDixQad-IwUUrjWvCb0j-wfuZNYswkjQjCU86A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfmkG1nG1ng3c-DZnGXYZKlz-qyzgQt2lgL5p2pObv1zSg&oe=695587BB)
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522845_512535164617773_8431839052206306537_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5IUZ6p6GhAcQ7kNvwE9nvso&_nc_oc=AdmPHooqXst_MxXpBf-kQSFrwQseXuyJNUY6PyTrvRBiCmAhUE8-L9r1S-jhyMxkvF3WlyXRm628wBD1k6Lu-9gn&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfngCcM9V1z2GgMoTqN4A6XeMkb7C5o8NvE6Zwz8kJbhvQ&oe=6955720C)

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588689_512535267951096_7012576616891124441_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=py-t1Pkc2eUQ7kNvwEgjXaR&_nc_oc=AdntIRsOT1uYykQZ8gl01SBp7Ct3VHLTACZpZ9IMiXJkjbBAa-vYA4LOYVMx1f8DgPeWWbiohFtpYFqteOhxVmHw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_Afmdq76dPQwmHJaQ4zTW6iIpNywqL2Lde8yl__XYdiir3A&oe=69556DFF)
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934272_512535274617762_9070031289387483374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=d_I6Pq3JVTQQ7kNvwG8t0d8&_nc_oc=AdnPDHiZ74m_MYufmOlX5wzfH6AljG4BpHWjrEu_RxXez7UUebuhfpezlezZjNzuPgrIoCXeh0ZPiOVXkbvmX1oJ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_AfkHUxN_OCXpbTis-HFsw_s8wqHuwqudS-9hJ47LHJbp0g&oe=6955957B)
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935529_512535264617763_3661555896485590188_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=oB6Fdhfc5xoQ7kNvwHSRiNE&_nc_oc=AdnaeYEhLA7e8MuQGoUN3b7i_po16Ydth3Dsd464AYj0gXOIQp9byyTEQ6JkQnGCib7-LH9Qzd4NTS4Ho3GKTuhB&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=WeXRy71-lykr0HWFdLiXBw&oh=00_Afloyu8Cewi9bRNOjC8Bv0HKIPiO44hrlAv0JkpDTTrmag&oe=6955A2AE)