Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/using-performance-tools-from-web-and-mobile

# Using performance tools from web and mobile

Important

 Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs)! As a member, you gain:

* Access to monetization opportunities including monthly bonuses, in-world purchases and competition cash prizes.
* Helpful resources including educational content, technical support and a collaborative creator community.

Important

 To report bugs, go to the main menu and select **Report a problem**. To give us feedback, select **Help us improve** from the main menu.

Real-time performance metrics and server-side tracing can help creators find and address performance issues in their worlds. In this article, you will learn how to access the performance tools via browser while visiting your world, alleviating the need to put on a VR headset to get performance data about your world.

Let’s begin with opening the Performance panel.

## Opening the Performance panel

In the web browser, the Performance panel displays a real-time view of all currently selected metrics. While visiting a world, press **P** to open the Performance panel. The panel appears at the bottom of the screen, and the world viewport shrinks to accommodate it. Pressing **P** again closes the Performance panel and expands the viewport back to full size.

![The world with the performance panel opened.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468449886_597918836079405_7058027029312242437_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=bQwneKwZp5gQ7kNvwEc70Sn&_nc_oc=AdnHP4dTzoxPJGda6kyQOZSwupCdcOt8wefzpIK4sPA4kamSdHA3AhUCIkLnfCzC36I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfnxnXmYFTOeRnNBCmiiiZIsz0chDKnioihqkjFhlVKpNw&oe=694BE447)

In mobile, you open the Performance dialog but pressing the **Settings** button (gear and wrench) in the top right corner of the screen.

![The Performance dialog in a mobile world.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490967887_697726326098655_5633090691600198677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=QBVLc_Jln8wQ7kNvwEV7kdL&_nc_oc=Adkup7RI5fy4IAxXpQV3Y3D4kdCn7oqEIt_GuIocm5-yZ2TOPlb7-_qfAroTEymYW3s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfmLzd7y8QfhR3HezkVPwL9B3tJiSjYT96n2BY5ZPBeHeA&oe=694BE24C)

## Displaying real-time metrics

You can select which real-time metrics to display in the Performance panel by clicking the **Gear** icon to open the Display Settings. From there,simply check the box next to each metric you’d like to see in the Performance panel. Unselected metrics will not be shown.

You can also set a **Target** number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.

![The Display Settings window open in the world. The gear icon used to open the window is highlighted.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468436141_597918822746073_6104268589954704877_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=1Mf2b1MNxQQQ7kNvwHK_7sJ&_nc_oc=AdmhOx7-6qAoJpuDNmke8y9PkznkBYaTyrNp1eSyhG0AwpW1Tt2iv4PBW_B1Lgpwdpc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AflAJ4OvSW05aeuaQrcsXqlyV1dB9lNFA4SMdSQ_2E6WVQ&oe=694BCA7E)

In mobile, once the Performance dialog is open, click the check box for **Show real-time metrics (RTM) overlay** to see the FPS and CPU metrics.

![The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490752050_697726319431989_1096614501547904137_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=8YKAmTh1kasQ7kNvwFGgXbU&_nc_oc=AdnzLOQEamY9PSP1bGmMhBspI9xONJCpQeQ1dkieJZKalf4vbKwZDJAeZ6yXZ3H1SOk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfkqaDkp73oqaowgbYKVxydwe6x1U0X77u0kMcBgnFN6rw&oe=694BB8DD)

### Scrubbing (web only)

With Scrubbing, you can review data that has recently appeared on the Performance panel (approximately 30 seconds of data) in detail. Click the **Inspect** button to open the Scrubbing view.

Click and drag the blue box at the top of the panel to the data you would like to review. This box represents a range, measured in frames. You can resize the box by clicking and dragging the handles on the sides of the box.

Below the Frame Time scrubber, a “zoomed-in,” detailed view is shown for each metric, spanning the frames covered by the blue box. By changing the range, you can choose whether to focus on a short span of time, or a broader view over a longer period.

![The world with the detailed view of the Frame Time scrubber opened and a span selected.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468536945_597918829412739_6965456918375424809_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=NFZTJdPLnhYQ7kNvwHy0NNq&_nc_oc=AdmfgBq4246KA9ANXAYRB8GGa9fmYplW6gamCudHa91ssMZFL-Ydv2K_X8rFp8A9PMM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfnsQ5xbh93u2sAOAO0Qn81XYq5lD39BwHFlhUwix5UvNA&oe=694BD440)

Click the **Back** button to return to the Performance panel.

## Tracing

With Tracing, you can capture performance data from your world to [view in Perfetto](Analyzing%20trace%20data%20with%20Perfetto.md). You can choose between three trace types:

* **Overview** - An overview trace can help set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, and GPU. Additionally, overview provides a high-level capture of metrics like physics, rendering, and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.
* **Deep** - A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area. Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations.
* **Playtest** - Playtest capture allows for up to 2 hours of gameplay to be recorded across multiple worlds without needing to be plugged in or running any special software. This type of trace can be taken on any build, anytime, anywhere. Playtest capture generates a report similar to the ones we use internally to track the performance of our hottest worlds and the performance of Horizon itself. Unlike other types of traces, which are viewable in Perfetto, the results of this trace are viewable on the [Horizon website](https://horizon.meta.com/creator/performance/reports). In general, playtest traces are best used for initial testing.

### Starting a trace

In the web browser, click the **Trace** button (red dot with white corner brackets) to open the Start a Trace window.

![The world with the performance panel open, and the trace button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468468286_597918839412738_2933779466601780685_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=sjRRsle9izIQ7kNvwG_fqef&_nc_oc=AdkrUNQEf2rTlvvSvypwpxwYhlxuB9i0136ZuSgt4eGfHwOsYdYUbzQbqRilp-lms0E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfkfB5kqxgN5ScrVM-G2actEncjU8xNCqKb7lImNnNXNfg&oe=694BEAE6)

Then click **Start capture** to begin a trace. While the trace is running, the Performance panel closes and a “Tracing in progress” panel appears in the lower left corner of the screen, showing the trace’s current status. You can add flags to a trace by clicking the **Flag** button on the panel while the trace is running.

![The world with the Start a Trace window opened and the types of traces displayed.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468431908_597918826079406_8202001262270154656_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=izSM4U17O0wQ7kNvwFpXnIq&_nc_oc=Adl5RARosJ2a4bGEssFxfgU3jik46N9RH6O0AguNPQrrKrX85xIzyIW89MPb0u47TCw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_Afm8ENqCSzE2hOiU_wmTtk4wT5M8a5nf16EF-tg1z35mdg&oe=694BBE21)

In mobile, click the drop-down menu next to the **Start trace** button to select the type of trace you want to run. Click the **Start trace** button to begin a trace.

![The Performance dialog showing the three trace types](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490711616_697726316098656_6022198852499889232_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jq7OBHGC4JYQ7kNvwEQcFQg&_nc_oc=AdmAbQlZcqaInfoB6D_rvIkvxFt6cBW6KuyTyfMKWECV8DYclBFe5AgSl-MNnyqcue0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfmAwiGkYIOTjVCaN1y_PK_Ot-qJNz09Xen4eptuRAnZzQ&oe=694BC9CF)

### Stopping a trace

In the web browser, to end a trace early, click the **Stop** button at the top of the panel.

![A zoomed-in view of the tracing screen, with the stop button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468496139_597918832746072_314632089191930808_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=QT_KPiHGEv8Q7kNvwGW3e3S&_nc_oc=Adn9No-KTCcGjjeEOhCzMib9CJ6T-8hgbF7w_jE4SLpLRjkRNdl8pwar98A2Ofhxzd4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_Afl7IoCso1cs5Xs60iGbDQwbkMVrw6ovrdgRKjjqqTrmuQ&oe=694BCBB9)

In mobile, to end a trace early, open the Performance dialog and click the **Stop trace** button.

![The Stop trace button on the Performance panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/491696845_697726312765323_5619417363942537487_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=hnw395f0zN4Q7kNvwEr-SY5&_nc_oc=AdlHud3jhux03H5WFrJWGPAq0s3Tnj9dafygeQNH7hmOg41q60jPEWEtMTCd1b1mFjo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1XokUNsNZBnDMxGzb2RNog&oh=00_AfkUKCy4vy1p6lpPqZTV9y4OfW-drib5-n1KJXSGAADXbQ&oe=694BB79F)

When a trace is completed in mobile or web, the results are uploaded to the [Developer Dashboard](https://developers.meta.com/horizon/manage/) in the Performance section.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](../../Get%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.