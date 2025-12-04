Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/introduction-to-performance

# Introduction to performance optimization

When you experience a world in Meta Horizon Worlds, you may experience times when the gameplay feels slow, or ‘hitches’. This occurs when the world is asking too much of the CPU or GPU and, as a result, isn’t rendering a frame fast enough to keep the action smooth. In these situations, you as the creator can take steps to identify the problem and explore possible fixes. Meta Horizon Worlds includes profiling tools to help you identify what is happening.

### Designing your world for performance

When you start designing your world, our topic [Designing a performant world](/hw-mcp-tools/documentation/hw-docs/Performance/Designing%20a%20performant%20world.md) is a guide for how to remove unnecessary rendering from your world through thoughtful design.

You will also want to familiarize yourself with the [Performance limits for a World](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20limits%20for%20a%20World.md). Here are a few key metrics to keep in mind:

* The memory limit for Quest 2 and Quest 3 worlds is **6GB**.
* For VR, the worlds should run at 72hz (frames per second), giving you a frame budget of **13.9ms** per frame.
* For best performance, you should render only **600,000 vertices** per frame, with a maximum of 1 million vertices.

For more detail, check out our best practices topics:

* [CPU and TypeScript optimization and best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md)
* [GPU best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/GPU%20best%20practices.md)
* [Memory best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/Memory%20best%20practices.md)
* [Physics best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/Physics%20best%20practices.md)
* [Network best practices](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/Network%20best%20practices.md)
* [Custom UI optimization](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/Custom%20UI%20optimization.md)

### Diagnosing performance issues

Before you can do any profiling, it’s critical that you understand what the experience is attempting to accomplish, and how a user is expected to experience it.

Performance work is about reproducible, consistent testing. The larger an experience, the harder it is to have a generic description of performance, and to discuss what improvements need to be made. To help accomplish this, you can segment the world into logical pieces and focus on each piece in isolation. For example, a multiplayer lobby might be a single segment. If you have sub-worlds, each of those is a logical segment.

Once you have your segments, layer the experience detailing the actions and number of people in the world, where each layer generally builds upon the last. For example:

- Just you, alone in the world, not moving or touching anything.
- Shoot/hit the buttons, moving around and interacting with the world.
- Add avatars (actual people avatars!)
- MASH BUTTONS ALL TOGETHER.

The first one is the baseline - it’s the *very best the world can perform at*! You can even do #2 on your own as well: playing the game, hitting buttons, and interacting with major parts of the world (killing enemies, etc). Most of the optimizations are going to be at these first two layers - tuning them up such that the baseline, with just you, will pay dividends with other people added.

However, it’s critical that you have the max’d out layer as well. This comes by adding players, having multiple things happening at once. This not only gives you a good worst-case performance, but is also useful as a measuring stick for progress and regression tracking.

### Fixing performance issues

Once you have a performance issue that you can reproduce, you can use profiling to investigate the problem and determine how to fix it.

Profiling a performance issue goes through a familiar set of steps:

- Make a base capture, illustrating the performance issue.
- Analyze the capture for hints about where it’s coming from (memory, GPU, CPU, etc).
- Add or remove features and make a new capture.
- Compare the two captures, see what changes, and repeat if necessary using other parts of the world.
- Decide on a potential fix for the performance issue, and implement the fix.
- Profile the fixed world and compare it to your base capture to see if you have fixed the issue.

To capture performance profiles, you will take traces from your world using [VR](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/Tracing.md) capture or [web and mobile](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/Using%20performance%20tools%20from%20web%20and%20mobile.md) capture. Those traces are stored in the [Performance](https://horizon.meta.com/creator/performance/traces/) tab under [My Creations](https://horizon.meta.com/creator/worlds_all/) so you can access them online or download them. You will then analyze the traces using [Perfetto](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/Analyzing%20trace%20data%20with%20Perfetto.md). Perfetto uses files that end in `.ptrace`.

Watch [Connect ‘23 Video Series: World Optimization Best Practices](/hw-mcp-tools/documentation/hw-docs/Performance/Connect%20'23%20Video%20Series-%20World%20Optimization%20Best%20Practices.md) to see profiling in action.

World content traces are a special type of trace that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. If you take a world content trace you can find the trace in the same [Performance](https://horizon.meta.com/creator/performance/traces/) tab but it will have a `.json` extension. You can find instructions on how to take and analyze a world content trace [here](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20tools/World%20Content%20Traces.md).

[A/B tests](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/thumbnail-ab-testing-tool) allow developers to publish two versions of their app’s thumbnail on the product page.

### Analyzing your world

Once your world is online, you’ll want to familiarize yourself with the [World Analytics](/hw-mcp-tools/documentation/hw-docs/Performance/Analytics/World%20Analytics.md). That will give you a wealth of useful information, including average FPS and hitch rates. You will add analytics to your world using the techniques outlined in [Using in-world analytics](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/analytics/using-in-world-analytics).