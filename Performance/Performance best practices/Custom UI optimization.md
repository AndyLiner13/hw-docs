Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/custom-ui-optimization

# Custom UI optimization

Custom UI allows for maximum developer flexibility but misuse of the feature can significantly degrade performance. Since UIs are built using a TypeScript API, several observations follow from the TypeScript Optimization section, above. For what follows, the reader is assumed to have a good understanding of the Custom UI TypeScript API. See [Custom UI](../../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md) docs.

* We suggest keeping main thread CPU cost under 0.5ms per frame on the local client, and 1.5ms per frame on the server (See Profiling UI section below).
* Reduce binding set calls.
* Binding set calls and callbacks are networked RPC events between the local client and server, so the total time of each async operation is bound by the network latency of the viewer.

## Architecture

Here is a diagram to give more context to the performance guidance below.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9a3490015c845f9cd74bcfa773e8ee5f4581be375fbfd9feb981d31b80cc5fc7.md)

### Overview
The image depicts a diagram illustrating a server-client interaction flow involving TypeScript Runtime, CustomUIStateService, ReactVR, and Redux store components. The diagram uses arrows to indicate the direction of data flow between the server and client.

### Key Elements
- **Server Section**:
  - **Visual description**: A brown rectangular box labeled "Server" at the top.
  - **Location**: Top section of the image.
  - **Contents**: Contains two smaller rectangles within the brown box labeled "TypeScript Runtime" and "CustomUIStateService".
  - **Visual styling**: Dark teal background with white text, bordered edges.

- **Client Section**:
  - **Visual description**: A green rectangular box labeled "Client" at the bottom.
  - **Location**: Bottom section of the image.
  - **Contents**: Contains two smaller rectangles within the green box labeled "ReactVR (Redux store, Custom UI DOM)" and "CustomUIStateService".
  - **Visual styling**: Dark teal background with white text, bordered edges.

- **Arrows**:
  - **Network RPC**: A downward arrow pointing from the server to the client.
  - **initialize()**: A downward arrow pointing from the server to the client.
  - **Binding.set()**: A downward arrow pointing from the server to the client.
  - **Callback**: An upward arrow pointing from the client back to the server.

### Visual Flow / Relationships
- **Most prominent visually**: The server and client sections are the most prominent due to their larger size and central placement.
- **Arrows indicate**: The direction of data flow between the server and client.
- **Spatial relationships**: The server section is above the client section, indicating that the server initiates communication. Arrows show the sequence of actions: network RPC, initialize(), Binding.set(), and then a callback from the client to the server.

</details>

<p></p>



## Profiling UI

It will be helpful to review the [Deep profiling](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization) section of the [CPU and TypeScript Optimization Best Practices doc](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md). There is a bridge call and a network RPC event associated with every UI binding set and callback. These actions make up for all main thread synchronous costs associated with UI. Target a CPU total cost for all UI in the world of less than 0.5ms per frame on the local client, and 1.5ms per frame on the server.

From a Deep trace pulled into Perfetto, watch the synchronous cost of these markers:

* For binding sets, look at these traces:
  + Client:
    - Verts::PollDriver::PreFrame
    - Verts::PollDriver::Rpc
    - CustomUI::UpdateBinding
  + Server:
    - ScriptingRuntime::Bridge::SetUIBindings
    - CustomUI::UpdateBinding::Send
* For callbacks, look at these traces:
  + Client:
    - Verts::Update
  + Server:
    - ScriptingRuntime::HandleEvent::customuicallbackinternal
* Other useful traces:
  + CustomUI::UpdateImage::Send (server)
  + CustomUI::UpdateImage (client)
  + CustomUI::InitializeState::Send (server)
  + CustomUI::InitializeState (client)

One useful method to make sense of this in aggregate is to drag a 5 second block across the main thread and look at the total wall time for that marker, divided by 360. For Verts::PollDriver::Rpc in the screengrab below, that is 0.25 ms (90.03099 wall duration in seconds divided by 360 frames).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/b5facf5eb1e2a4bfbdd8f1ce825e29683183a1fc91ccbd198aa8f56c3b8a0739.md)

### Overview
This image depicts a user interface of a profiling tool, likely for analyzing performance data of a software application. The layout includes a navigation pane on the left, a timeline visualization in the center, and a table of performance metrics at the bottom.

### Key Elements
- **Navigation Pane (Left)**:
  - **Visual description**: A vertical sidebar with a dark theme.
  - **Location**: Left side of the image.
  - **Contents**: Contains options such as "Open trace file," "Record new trace," "Show timeline," "Download," "Query (SQL)," "Viz," "Metrics," "Info and stats," "Switch to legacy UI," "Convert to .json," "Convert to .sysrace," "Open Android example," and "Open Chrome example."
  - **Visual styling**: Dark background with white text and icons.

- **Timeline Visualization (Center)**:
  - **Visual description**: A horizontal timeline with colored bars representing different events or processes over time.
  - **Location**: Center of the image.
  - **Contents**: The timeline spans from 00:00:00 to 00:00:09, with timestamps marked every second.
  - **Visual styling**: White background with colored bars, some with labels indicating specific events.

- **Tree View (Center)**:
  - **Visual description**: A hierarchical tree view showing trace events and kernel threads.
  - **Location**: Center of the image, above the timeline.
  - **Contents**: Includes nodes labeled "Trace Events," "Misc Global Tracks," and "Kernel threads," with expandable/collapsible sections.
  - **Visual styling**: Dark background with white text and checkboxes next to each node.

- **Performance Table (Bottom)**:
  - **Visual description**: A table listing performance metrics.
  - **Location**: Bottom of the image.
  - **Contents**: Columns include "Name," "Wall duration (ms)," "Avg Wall duration (ms)," and "Occurrences." Rows show various functions and their respective durations and occurrences.
  - **Visual styling**: Light gray background with black text, bordered by a thin line.

### Visual Flow / Relationships
- **Most prominent visually**: The timeline visualization in the center.
- **Arrows/lines/connectors**: None explicitly shown.
- **Spatial relationships**: The timeline is below the tree view, and the performance table is at the bottom. The tree view branches out from the timeline, suggesting a relationship between the timeline events and the tree nodes.

</details>

<p></p>



## Binding set and callback frequency limits

The following table shows the limit we have found for binding sets and callbacks. Exceeding this will likely exceed the 1 ms per frame cost limit outlined above.

| Custom UI operation | Server | Local client (one user) |
| --- | --- | --- |
| Binding set | <= 20 per frame (for all users) | <= 10 per frame |
| Callback | <= 1 per 2 frames (for all users) | <= 1 per 2 frames |

## Network latency limitations

The communication loop between a UI panel rendered on a client, and the associated TypeScript engine on the server, is limited by the network latency of the viewer. Common situations in which this should be factored in:

* Style changes based on raycast/mouse interaction events like OnHover
* Animations driven from TypeScript by a sequence of binding set updates over a period

Even working within the binding and callback limits above, viewers may notice UI delays associated with the network call round-trip.

## Memory usage

Textures by far outweigh any other memory cost associated with a UI entity. This includes a mandatory ~40 MB ReactVR panel render texture, as well as a copy of any texture asset referenced by a UI image component (once per UI entity that contains a reference to that asset, no matter how many times).

Setting the visibility of a UI entity to **false** frees all textures to garbage collection. As such, everything in the [Spawning objects](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#spawning-objects) section of the [CPU and TypeScript Optimization Best Practices doc](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) applies here, and toggling visibility can be a costly operation (especially on the server). Where possible, set the visibility of the UI entity to **true** at initialization, and leave it that way.

## ReactVR

In testing, we have found bridge calls and RPC costs to be the bottleneck setting the limit for binding/callback frequency, and not ReactVR. That isn’t to say a sufficiently complex virtual DOM could present limits on the ReactVR side, too. If you suspect issues with this due to the UI being laggy or slow to refresh, we recommend using the [Meta Quest Developer Hub](https://developer.oculus.com/meta-quest-developer-hub/?intern_source=devblog&intern_content=meta-quest-developer-hub-mqdh-30) (MQDH) desktop software to study deeper.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/7cd5bb892c2b74bfe4c38d74108493e21d48fe5d1f9ade7344b0af5e72161f3c.md)

### Overview
The image depicts a user interface of a performance analyzer tool, specifically for the Oculus Quest 2. The layout includes a sidebar with various menu options, a central performance analysis area, and a right-side panel with trace analysis settings.

### Key Elements
- **Sidebar Menu**: Located on the left side, with options such as "Device Manager," "Performance Analyzer," "File Manager," "App Distribution," "Downloads," "Meta Quest News," "Code Samples," "Settings," and "Firmware Update." The "Performance Analyzer" option is highlighted with a red circle.
- **Central Performance Analysis Area**: Occupies the middle portion of the screen, displaying a timeline with time intervals marked at the top. Below the timeline, there is a list of modules under "Performance Analyzer," including "VRCs," "CPU," and "GPU," each with expandable sections showing specific metrics like "System CPU Utilization," "App CPU Utilization," and "GPU Utilization."
- **Trace Analysis Panel**: Positioned on the right side, featuring a section labeled "Trace Analysis by Perfetto" with an "Idle" status indicator. There is a "Record" button next to it, and a dropdown menu labeled "Flags."

### Visual Flow / Relationships
- **Most Prominent Element**: The "Performance Analyzer" option in the sidebar is the most prominent due to its highlighted status.
- **Arrows and Lines**: There are no explicit arrows or lines connecting elements, but the layout suggests a sequential navigation through the menu options.
- **Spatial Relationships**: Elements are arranged in a grid-like structure, with the sidebar on the left, the performance analysis area in the center, and the trace analysis panel on the right.

</details>

<p></p>



Here, a Perfetto trace can be pulled in the Performance section, similar to the in-app trace that was described before. The difference is that this trace shows activity in the Hermes thread, which holds work done by the ReactVR runtime engine.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/87fa8e67ef52a0080fd98c397b3d2d4f59a2ad05ab21eb05ebe2d55cbadbefb1.md)

### Overview
The image displays a screenshot of a performance profiling tool interface, specifically Perfetto. It shows a timeline view with various threads and processes, along with a table at the bottom detailing thread states, process IDs, thread IDs, wall duration, average wall duration, and occurrences.

### Key Elements
- **Left Panel**: Contains navigation options such as "Open trace file," "Record new trace," and "Convert trace." The current trace is labeled as "2023-10-13-troubleshoot_local_trace.pftrace (63 MB)".
- **Timeline View**: The main area of the interface shows a timeline with multiple threads represented by vertical bars. Threads are labeled with names like "Thread-4110 23476," "Hermes 23497," and others. Some threads have checkboxes next to them.
- **Highlighted Thread**: The thread labeled "Hermes 23497" is highlighted in yellow, indicating its selection or focus.
- **Table at Bottom**: Displays detailed information about the selected thread, including process name ("com.facebook.together.staging"), PID, TID, state ("Sleeping," "Running," "Runnable"), wall duration, average wall duration, and occurrences.
- **Status Bar**: At the top right, there is a notification bar stating that Perfetto has been updated to version v37.0-83e544f6e and is ready for offline use.

### Visual Flow / Relationships
- **Most Prominent Element**: The timeline view is the most prominent feature, with the highlighted thread drawing attention.
- **Arrows and Lines**: There are no explicit arrows or lines connecting elements, but the timeline view suggests a sequential flow of events over time.
- **Spatial Relationships**: Threads are arranged vertically, with their corresponding states and durations listed in a table below. The timeline view provides a horizontal axis for time progression.

</details>

<p></p>



In the screenshot above, running time (the green square) of the Hermes thread, across a 5 second segment, is around 1%. Try to keep this less than 50%, to leave room for other Horizon system UI.

## Gotchas and anti-patterns

Some constructs may seem benign, but are not a good fit for Custom UI (at this time), so we call out to them below.

- Do not define bindings without a concrete purpose. This may happen by writing a custom abstract API layer wrapping the base UI components (View, Image, Pressable, etc.), and defining bindings for every prop as a convenience to consumers. On the local client, a binding set operation passes the entire key-value store to ReactVR. So the bigger this gets, the greater the CPU cost to perform a single binding set.
- Animations, by way of periodic binding updates, should be implemented with care or not at all. This is due to the twofold nature of (a) bridge call frequency limits, and (b) network latency and droughts/bursts associated with that.