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

![The world with the performance panel opened.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/468449886_597918836079405_7058027029312242437_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=rsbb6OkBCWgQ7kNvwE6M-y3&_nc_oc=AdknmaLYrS4jlFEF9xFnpPi-k3KiMl66vqJgEqLKzEH_oYVcA9IFKPaHYoJeO_36RrM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfjW3ptafndgoj7EVx5AXXAIGsV0xpOqiVDhntZ8rU0otg&oe=692C0807)

In mobile, you open the Performance dialog but pressing the **Settings** button (gear and wrench) in the top right corner of the screen.

![The Performance dialog in a mobile world.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490967887_697726326098655_5633090691600198677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Xc1NLEOQn0Q7kNvwFnOCS9&_nc_oc=AdmjSO64x8wg2_3Dp3N_yUTypZusf-qmgfPRHRlU6rq9krqjQ5c7i13JC8rx0b_bAJU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfhpaZ824gYo3lySJ3aHYfUXh-2-UM5_a_B5csqlJsr2vQ&oe=692C060C)

## Displaying real-time metrics

You can select which real-time metrics to display in the Performance panel by clicking the **Gear** icon to open the Display Settings. From there,simply check the box next to each metric you’d like to see in the Performance panel. Unselected metrics will not be shown.

You can also set a **Target** number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.

![The Display Settings window open in the world. The gear icon used to open the window is highlighted.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468436141_597918822746073_6104268589954704877_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=DeLcdEfxMM0Q7kNvwHctyjf&_nc_oc=Adn_hP-jeyXwHxJ6TGSom7mm9Juk2LkLMLl7ZwozaxaYD0RCtntDFUj6V6en40M2ubw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfjwyLz4QTe2oaZ5boICVWsyGPBUJhbkExRJ2pZxcKxwnA&oe=692BEE3E)

In mobile, once the Performance dialog is open, click the check box for **Show real-time metrics (RTM) overlay** to see the FPS and CPU metrics.

![The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490752050_697726319431989_1096614501547904137_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=vrL_6H5z6_IQ7kNvwEw3Cm9&_nc_oc=AdmdgBKFXWmrGVnCvEXQ2ACQ1U9phaAZU9wUg1Vw7c3S68RJNli6NH7V2JxY3XPzSDo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfgfQUpMyivstsSKea_-Yapx3bztGZ7xEX_slNMKpKBvyw&oe=692BDC9D)

### Scrubbing (web only)

With Scrubbing, you can review data that has recently appeared on the Performance panel (approximately 30 seconds of data) in detail. Click the **Inspect** button to open the Scrubbing view.

Click and drag the blue box at the top of the panel to the data you would like to review. This box represents a range, measured in frames. You can resize the box by clicking and dragging the handles on the sides of the box.

Below the Frame Time scrubber, a “zoomed-in,” detailed view is shown for each metric, spanning the frames covered by the blue box. By changing the range, you can choose whether to focus on a short span of time, or a broader view over a longer period.

![The world with the detailed view of the Frame Time scrubber opened and a span selected.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468536945_597918829412739_6965456918375424809_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=4saAD6ESoUcQ7kNvwFzBNKP&_nc_oc=AdmnzVsT913Bu3LJ2Uf4goGZ8XQ4CQ_pz21_QwM0wjGcsg2n6Th-adPnEb7uMIHJQRw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_Afj2m6fIU0UgkXKYCYMESXqj1HgtqrQB3GFowT7Klw37gg&oe=692BF800)

Click the **Back** button to return to the Performance panel.

## Tracing

With Tracing, you can capture performance data from your world to [view in Perfetto](/hw-docs/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto). You can choose between three trace types:

* **Overview** - An overview trace can help set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, and GPU. Additionally, overview provides a high-level capture of metrics like physics, rendering, and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.
* **Deep** - A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area. Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations.
* **Playtest** - Playtest capture allows for up to 2 hours of gameplay to be recorded across multiple worlds without needing to be plugged in or running any special software. This type of trace can be taken on any build, anytime, anywhere. Playtest capture generates a report similar to the ones we use internally to track the performance of our hottest worlds and the performance of Horizon itself. Unlike other types of traces, which are viewable in Perfetto, the results of this trace are viewable on the [Horizon website](https://horizon.meta.com/creator/performance/reports). In general, playtest traces are best used for initial testing.

### Starting a trace

In the web browser, click the **Trace** button (red dot with white corner brackets) to open the Start a Trace window.

![The world with the performance panel open, and the trace button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468468286_597918839412738_2933779466601780685_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6jhlC7jplhMQ7kNvwH4NwDa&_nc_oc=AdnbNWNMc7q7TOpmm7gf5HiHRDugK-xe5XbwPxMu55vuZZ7G0_XEN6YfoMNGksu08Y8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfgQKyVQ8vLysPmPrG1dDeOoVJ_TyCnp736yT8Y5IFW8gw&oe=692C0EA6)

Then click **Start capture** to begin a trace. While the trace is running, the Performance panel closes and a “Tracing in progress” panel appears in the lower left corner of the screen, showing the trace’s current status. You can add flags to a trace by clicking the **Flag** button on the panel while the trace is running.

![The world with the Start a Trace window opened and the types of traces displayed.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468431908_597918826079406_8202001262270154656_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=zum0zXMEQYIQ7kNvwELd944&_nc_oc=AdnN7qy_YCbvUlSkqGr66KOvZInsVAI1ECNxrMKuh9CiCHLUuMvXPNECzi-zaFI3H0U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_Afj76PonenSnFOWraZZOxltWCYA6zO5bvF8fYJW_VqnqGA&oe=692BE1E1)

In mobile, click the drop-down menu next to the **Start trace** button to select the type of trace you want to run. Click the **Start trace** button to begin a trace.

![The Performance dialog showing the three trace types](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490711616_697726316098656_6022198852499889232_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=mqZ8GjlURjYQ7kNvwGTxFdG&_nc_oc=AdnDCX5ZfOGhOwZgadSCcy5vtUYP9--F7HgD1bKHtVBgZObsaa0faC9t-zwFC9emGYE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfgSehPI_PZ-xOsBae1egMpj4zahnglCCedqAIeF-jU9YQ&oe=692BED8F)

### Stopping a trace

In the web browser, to end a trace early, click the **Stop** button at the top of the panel.

![A zoomed-in view of the tracing screen, with the stop button highlighted.](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/468496139_597918832746072_314632089191930808_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=9F4zhvYsuHoQ7kNvwFSEZ8g&_nc_oc=AdkR0rT9vc1A0IkQ8TJN3dKEs0X-j6MxX1wSZ5Q73FA2GRa-D9kSZsSzvjZM5ri4zUI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfjKh-rD7hEmBRKdDRUKQe_ECUfpimGXA0e87j0Zla_Xfw&oe=692BEF79)

In mobile, to end a trace early, open the Performance dialog and click the **Stop trace** button.

![The Stop trace button on the Performance panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/491696845_697726312765323_5619417363942537487_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=L6GTedqfcd0Q7kNvwF_OWfB&_nc_oc=Adk0GX3mnGyp1zedrh5DBhb95M7cs1XB3Vx1lbvAQyqBd-XUm5dM97cVasQbsfAiPcQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AwGaQ81BiNYpnirnQyvUyA&oh=00_AfhTsA7Md3ztk66TWJh6pv7oNzeScv8Bf4nLKLICJQhcnw&oe=692BDB5F)

When a trace is completed in mobile or web, the results are uploaded to the [Developer Dashboard](https://developers.meta.com/horizon/manage/) in the Performance section.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](/hw-docs/get-started/create-your-first-world/) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](/hw-docs/desktop-editor/help-and-reference/troubleshooting/)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](/hw-docs/desktop-editor/getting-started/introduction-to-desktop-editor/).
- Learn about the other tools available by reading our [Tools Overview](/hw-docs/get-started/tools-overview/).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.