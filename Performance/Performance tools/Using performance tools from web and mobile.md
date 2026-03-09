---
source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/using-performance-tools-from-web-and-mobile
---

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

![The world with the performance panel opened.](../../_assets/images/fb2da5cfbacd491b41fbc2397c53023af81f1430b285ac785ea21fe1d537cc68.png)

In mobile, you open the Performance dialog but pressing the **Settings** button (gear and wrench) in the top right corner of the screen.

![The Performance dialog in a mobile world.](../../_assets/images/a4e852223b78af5de13e814a4fbb9b9179900a041057bf973f9412bb1261dcdc.png)

## Displaying real-time metrics

You can select which real-time metrics to display in the Performance panel by clicking the **Gear** icon to open the Display Settings. From there,simply check the box next to each metric you’d like to see in the Performance panel. Unselected metrics will not be shown.

You can also set a **Target** number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.

![The Display Settings window open in the world. The gear icon used to open the window is highlighted.](../../_assets/images/e2865f32e25057377af3bd3fffbbbaa7b1e3aa0270463fe883e362867c35d8d2.png)

In mobile, once the Performance dialog is open, click the check box for **Show real-time metrics (RTM) overlay** to see the FPS and CPU metrics.

![The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.](../../_assets/images/65343c517db0ab2093e112ce461df69ed03ce92d55f49715c1ec1a6a17abbd8f.png)

### Scrubbing (web only)

With Scrubbing, you can review data that has recently appeared on the Performance panel (approximately 30 seconds of data) in detail. Click the **Inspect** button to open the Scrubbing view.

Click and drag the blue box at the top of the panel to the data you would like to review. This box represents a range, measured in frames. You can resize the box by clicking and dragging the handles on the sides of the box.

Below the Frame Time scrubber, a “zoomed-in,” detailed view is shown for each metric, spanning the frames covered by the blue box. By changing the range, you can choose whether to focus on a short span of time, or a broader view over a longer period.

![The world with the detailed view of the Frame Time scrubber opened and a span selected.](../../_assets/images/fe1dfbe5a97c8821367b7207e5251d0fc572cfe2141aee26ccd29a00abbdc32c.png)

Click the **Back** button to return to the Performance panel.

## Tracing

With Tracing, you can capture performance data from your world to [view in Perfetto](Analyzing%20trace%20data%20with%20Perfetto.md). You can choose between three trace types:

* **Overview** - An overview trace can help set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, and GPU. Additionally, overview provides a high-level capture of metrics like physics, rendering, and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.
* **Deep** - A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area. Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations.
* **Playtest** - Playtest capture allows for up to 2 hours of gameplay to be recorded across multiple worlds without needing to be plugged in or running any special software. This type of trace can be taken on any build, anytime, anywhere. Playtest capture generates a report similar to the ones we use internally to track the performance of our hottest worlds and the performance of Horizon itself. Unlike other types of traces, which are viewable in Perfetto, the results of this trace are viewable on the [Horizon website](https://horizon.meta.com/creator/performance/reports). In general, playtest traces are best used for initial testing.

### Starting a trace

In the web browser, click the **Trace** button (red dot with white corner brackets) to open the Start a Trace window.

![The world with the performance panel open, and the trace button highlighted.](../../_assets/images/e1a3afe8084da63685d1ad4f84e90fd9b82776441f8e61dcf1fb61ab655a1b4f.png)

Then click **Start capture** to begin a trace. While the trace is running, the Performance panel closes and a “Tracing in progress” panel appears in the lower left corner of the screen, showing the trace’s current status. You can add flags to a trace by clicking the **Flag** button on the panel while the trace is running.

![The world with the Start a Trace window opened and the types of traces displayed.](../../_assets/images/6f7bfa223ed32b839bf01f8fd231c1e874b36d3149d4ff1d219189ecf122f042.png)

In mobile, click the drop-down menu next to the **Start trace** button to select the type of trace you want to run. Click the **Start trace** button to begin a trace.

![The Performance dialog showing the three trace types](../../_assets/images/892777ae7729248119a922654bbf0841a4aeb1f3ca278eddddcf4f8631939010.png)

### Stopping a trace

In the web browser, to end a trace early, click the **Stop** button at the top of the panel.

![A zoomed-in view of the tracing screen, with the stop button highlighted.](../../_assets/images/9e489be62ecb93a052957189c7a0ecb679b0f0ebcdc571f07f3c8309db76b53f.png)

In mobile, to end a trace early, open the Performance dialog and click the **Stop trace** button.

![The Stop trace button on the Performance panel](../../_assets/images/a586305ece462c41eb6d38830d1652d6448c10efad585ea672f149a0830d32d6.png)

When a trace is completed in mobile or web, the results are uploaded to the [Developer Dashboard](https://developers.meta.com/horizon/manage/) in the Performance section.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](../../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%201.md) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.