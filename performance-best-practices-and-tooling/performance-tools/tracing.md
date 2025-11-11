Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

# Tracing

**Note:** You must [enable the Utilities menu](/hw-docs/performance-best-practices-and-tooling/performance-tools/enable-the-utilities-menu/) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon ![Trace icon](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/482030104_666482412556380_2531346198919298275_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=wd73VwZ7StkQ7kNvwH1o53i&_nc_oc=AdkCZYAb9auUeN3j4o7iObDqLwFYxxS5BGC3cJ2PcSVMUmYeDPYYb_kd5eqyAIJc2PE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfhJHwAiKxejN2BEZf61nPZWlaRa6wDpsReR8tV3lA-60A&oe=692BDB3F) from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

![Trace icon on the real-time metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452817263_512535204617769_564960638721355850_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=atuHmdoMoPUQ7kNvwEHsEgy&_nc_oc=Adlbrhs06w-9S5Eng_sGGEaLNORXmQ_BBtkI4XViamaVUJuZX7GLknW5ZCQ8n-V4K9E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfjNUOcwnSWREv7bxRAOANadjztxyWKoFTsI5NJrDLHuCg&oe=692BF838)

Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819269_512535177951105_486835410582879203_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=4b7YELOGeIUQ7kNvwGV56no&_nc_oc=Adnh0Hah9XayovAMPGJQaPh6TgAjDCz5K02970u4BDTZMrBVTXqBzYNodg9e81cgGzg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfiOFEti6z-qycAMi8pp9ENrjf3TUNY4ouG_wmsBppi4PA&oe=692BE669)

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
- Select **Tracing.**![Utilities menu](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452909242_512535254617764_3464900300897266132_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qitm-a45v5EQ7kNvwGm76Rq&_nc_oc=AdmjOubutsdpoXiidjgyN9shrSG7t5vqdBb1lvT0ExoM7r3REukpaeLaB0d1m4rIywk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afi79ulBu4XXe5GxfoPuKw2aP1qHlvbpW-HYd7xFHfQJ_A&oe=692C02CB)
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

![Tracing dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452665546_512535241284432_1956381104628956841_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=xFwxaKdNN3UQ7kNvwELquui&_nc_oc=AdkMUWg9PtlTqoMjfzX_uNpiojr0mVfFmOTG2IdF5syyL4kGYVevYcMwwXdQFZctjBQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afh5dTSRfIXYvr8KZyZFU5llfF9kW6i9g-XSBLro40gszg&oe=692BFAE3)

## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  ![Tracing icon targeted on Performance Metrics panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452457736_512535224617767_5197004322352436639_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=me-O74TDsiAQ7kNvwGrqQt7&_nc_oc=AdmEoofcU-SFrxs9qvMLOj64bl-EjNkgbj_xNmUobZ-B7bxOvOvLyFXNa2c14eDpH38&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afhul1-QoVi3C4Lw066arXH9yUsaUfAjb1S631__9gSMZQ&oe=692BFDD3)
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

![Start a trace dialog](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533388_512535227951100_250312306465638715_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=bOWDE4eG8ewQ7kNvwH2mpDu&_nc_oc=Adk_jVY_tCIY1Nryr2LUBX5KEVn3hnCbuZJuUJMnxmpFrsCbfZrp5wMgDHVWCgQ8ULw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afj_Cmval58cMF2Ma6a_sJZnYGce51E56fC02HQ5xdl0Mg&oe=692BE994)\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. ![World traces](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452830685_512535117951111_5669193774081795886_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=i9oAKcECvvIQ7kNvwFDeBDz&_nc_oc=Admw2EGBlReqmXJLni2sMBUJYW-i5hT541odpJtA2z-venXNJOuIWQX1Lok6TdGc8sY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfjBaOmKqj2jyNKAS7LSICpp3dh1_nuwE_YAftZnfDIQFA&oe=692C007B)
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. ![Application traces](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522845_512535164617773_8431839052206306537_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=sajhDIGrl4YQ7kNvwGwOU1J&_nc_oc=Adm81CKRQJT-wzQ1m19a42l1WWjU8XkSQQZMf0tB7w3XOCsoZw6WAnFokGaf_O134Js&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfgVJ5FladODs5Z98ShpOjiphlYtZXCtCTidu4gOaMBn_Q&oe=692BEACC)

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. ![Client options](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588689_512535267951096_7012576616891124441_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=o0KUWVHSjq0Q7kNvwHuw2xz&_nc_oc=Adk_glQ2r0MgxIfG6Yf-hRkJl93m8ajFVYXmkBJCKRsnHpcx8J3GDMG5OagMnkFlNME&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_AfiQi9pL20HrDVR96iFJwwOisyrt53NwglP6E3bAPqq8lQ&oe=692BE6BF)
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. ![Server options](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934272_512535274617762_9070031289387483374_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=sB81vgTRQOQQ7kNvwF0HyJ9&_nc_oc=Adn5iFgo_JbGBV9-304aE-D2Rkrsj1_ahETlHCnBxjiZ-8_12_c2ucy5C5HC6rE_Z74&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afiwb2QfV_ufmo8FL6qQkgN8rZyqq455ngf08jBYCoBrYA&oe=692C0E3B)
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

![Deep tracing](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935529_512535264617763_3661555896485590188_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=QnnUnN4gvTYQ7kNvwFIZFye&_nc_oc=AdmAaKOZTxEXBV--LwPwwtOFtww6GNC7WsfpGoZqkhaTA_tBHsZF-QEGfYR3jAZ7_QM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6uKZyBEWcYqPa3UhOwlpFQ&oh=00_Afj8skpn2enTG1J8Cvu0NZk9EZRKPMWDhDavGcuybqMH3A&oe=692BE32E)