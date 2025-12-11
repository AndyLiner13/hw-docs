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

![The world with the performance panel opened.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468449886_597918836079405_7058027029312242437_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=gsf6DTcevHUQ7kNvwHrQ-jw&_nc_oc=AdnMCygKReoLaCrjU4O336YHsSDTztV9bRIK6aDz6rC0ut-dImLsPrLDduOvZn7NjQVJQDW-qpBkejZnMlKtK-MZ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfnCQqHPnlRC2CyliDX5CgGFKr_37u-P7j4ho28LwZ5QLg&oe=69558F47)

In mobile, you open the Performance dialog but pressing the **Settings** button (gear and wrench) in the top right corner of the screen.

![The Performance dialog in a mobile world.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490967887_697726326098655_5633090691600198677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ep9np_Cw9sEQ7kNvwF_OHsr&_nc_oc=Adn8Dcnl3KKGrt9bmiXKAT0e3YoRSZoj5vSVjIwbY2LYVQHQ2QqxUVI4aMxNVzeC4cD394s5GiQLZu6ngcPUXt4T&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfkPOadsuHSLd9JOmh9_pR2_IDDH2oMTtoYjEPu071_7Ag&oe=69558D4C)

## Displaying real-time metrics

You can select which real-time metrics to display in the Performance panel by clicking the **Gear** icon to open the Display Settings. From there,simply check the box next to each metric you’d like to see in the Performance panel. Unselected metrics will not be shown.

You can also set a **Target** number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.

![The Display Settings window open in the world. The gear icon used to open the window is highlighted.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468436141_597918822746073_6104268589954704877_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Oug7zxzS1EAQ7kNvwEX4RKL&_nc_oc=Adkk0M2f1UNRNJ-H2Nx4vbbFz2T1yKbRZA2FMrxrhRg9GFH21MhtixmiKL1PBqASs_B0jFCxs_aPMA4vuoZTkAu8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfmILzLKzuU2hN-A9s5gd4gDzzF7mc0fC4PBQ5v1wsB1Zw&oe=6955757E)

In mobile, once the Performance dialog is open, click the check box for **Show real-time metrics (RTM) overlay** to see the FPS and CPU metrics.

![The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490752050_697726319431989_1096614501547904137_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=1jRYfjYHRFsQ7kNvwFnOevx&_nc_oc=AdmjiK6v3_9jVJahXUkqVQshFZ5rURxu93QHgyQ563LdiNyBwkrnEA9-RquVQ5MLCOtxkKI8EZMaPbrSONoYLowJ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AflJkXC4SAh1tjpHqEUqNro1ZgkHgmbhIiqIAjYJb9w3GQ&oe=69559C1D)

### Scrubbing (web only)

With Scrubbing, you can review data that has recently appeared on the Performance panel (approximately 30 seconds of data) in detail. Click the **Inspect** button to open the Scrubbing view.

Click and drag the blue box at the top of the panel to the data you would like to review. This box represents a range, measured in frames. You can resize the box by clicking and dragging the handles on the sides of the box.

Below the Frame Time scrubber, a “zoomed-in,” detailed view is shown for each metric, spanning the frames covered by the blue box. By changing the range, you can choose whether to focus on a short span of time, or a broader view over a longer period.

![The world with the detailed view of the Frame Time scrubber opened and a span selected.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468536945_597918829412739_6965456918375424809_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WwUACdeQioEQ7kNvwHtaMs6&_nc_oc=AdmqIFnHMnhtULfCebWhwr-D6ib7WvI0zX3qCCHkBr9BIFxutjEJEK8KZchwcA2oc3rYGtv3cJ16cg-JsDDfZgDe&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_Afl3-Bv7pDaI_6_urSzcks8kWWgBtXjEFzwUkzunkkmSHQ&oe=69557F40)

Click the **Back** button to return to the Performance panel.

## Tracing

With Tracing, you can capture performance data from your world to [view in Perfetto](Analyzing%20trace%20data%20with%20Perfetto.md). You can choose between three trace types:

* **Overview** - An overview trace can help set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, and GPU. Additionally, overview provides a high-level capture of metrics like physics, rendering, and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.
* **Deep** - A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area. Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations.
* **Playtest** - Playtest capture allows for up to 2 hours of gameplay to be recorded across multiple worlds without needing to be plugged in or running any special software. This type of trace can be taken on any build, anytime, anywhere. Playtest capture generates a report similar to the ones we use internally to track the performance of our hottest worlds and the performance of Horizon itself. Unlike other types of traces, which are viewable in Perfetto, the results of this trace are viewable on the [Horizon website](https://horizon.meta.com/creator/performance/reports). In general, playtest traces are best used for initial testing.

### Starting a trace

In the web browser, click the **Trace** button (red dot with white corner brackets) to open the Start a Trace window.

![The world with the performance panel open, and the trace button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468468286_597918839412738_2933779466601780685_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nqFLCFI1eyQQ7kNvwE1WS8B&_nc_oc=AdlBIJAJojv9_t03Lsj9ncgv0kYgIvxfQnuJRGtNHyvEfoTjHQAsUV_dLlnEcFx2aj7BShmyKvnSCK0BGw-zNamx&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_Afl0WNAPXD-ZWA3u51034dYpAuFfbBX2izQJFaCsohe6Pg&oe=695595E6)

Then click **Start capture** to begin a trace. While the trace is running, the Performance panel closes and a “Tracing in progress” panel appears in the lower left corner of the screen, showing the trace’s current status. You can add flags to a trace by clicking the **Flag** button on the panel while the trace is running.

![The world with the Start a Trace window opened and the types of traces displayed.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468431908_597918826079406_8202001262270154656_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=8Jx7z_nI9JQQ7kNvwHhO2jA&_nc_oc=AdlpOgmRg0MitNbIoxFqs6kAcSwy24Ab9rKJ8lsc3_q3l6ltvlK6f1CwGfPIgCSspeRAyrTsmWTO8lkk8QvWgXtq&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfmYfSS6OMY4al6Lq00tkItgPQFBJUykgYg_feoPOCARnw&oe=6955A161)

In mobile, click the drop-down menu next to the **Start trace** button to select the type of trace you want to run. Click the **Start trace** button to begin a trace.

![The Performance dialog showing the three trace types](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490711616_697726316098656_6022198852499889232_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=bODtzoZYFD0Q7kNvwFFHgeZ&_nc_oc=AdnimRNGFmrj_PVAvqkKjDBwrxRBpQo1w3Eoa7ZfAASb6-TacjFJ1-FFlk_9mLqXRUczA7Ek3Ap5uw85gFYcWXYg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfkKVcpATJQTO-Bz5S46nmrdZZtiX3ybhWFsj4AqoDVXHA&oe=695574CF)

### Stopping a trace

In the web browser, to end a trace early, click the **Stop** button at the top of the panel.

![A zoomed-in view of the tracing screen, with the stop button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468496139_597918832746072_314632089191930808_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=OCGfnF6XnSoQ7kNvwHaDppK&_nc_oc=AdmQv9ID5AJku8Ce4M2Ntu6FqsYObdpwcvUb-HIRp_tgZ-dnMiv-RLGHsUmRrckmT4SiIqOXpFnXapgcgX1A3b1X&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AflHON1hIbJ4ydse9jnCJJNwMojJUGYZx4dtmYandkQvdA&oe=695576B9)

In mobile, to end a trace early, open the Performance dialog and click the **Stop trace** button.

![The Stop trace button on the Performance panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/491696845_697726312765323_5619417363942537487_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=nInJ3XDeUyQQ7kNvwEIu0jj&_nc_oc=Adn2yAg4JI8EqrWqe-vJdhBtBpGV7Lo7D7pTeZUoEU8QLNMyj9MlEJnB39HA0cFnTQvKDmX69yfdOqtOQGLCPUJu&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Udfg2HvzsM9H8FHarw5jRA&oh=00_AfnsZsAzziJ6byJlG3fyLYJnZ8OkGsnsoFTFsvZ4tFvQIQ&oe=69559ADF)

When a trace is completed in mobile or web, the results are uploaded to the [Developer Dashboard](https://developers.meta.com/horizon/manage/) in the Performance section.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world/) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.