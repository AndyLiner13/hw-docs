Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing

# Tracing

**Note:** You must [enable the Utilities menu](Enable%20the%20Utilities%20menu.md) before continuing.

Tracing allows you to capture performance data from your world for viewing in Perfetto. Access trace settings and controls by selecting the trace icon <details>
                                                                                                                                                       <summary>Trace icon</summary>
                                                                                                                                                       
                                                                                                                                                       <p></p>
                                                                                                                                                       
                                                                                                                                                       [Trace icon](../../image_data/7a63bb9f9e6c514ac875152b88ccf27232468825ef8590ba780016e50983bb52.md)
                                                                                                                                                       
                                                                                                                                                       ### Overview
                                                                                                                                                       This image depicts a simple icon with a geometric design. It consists of a square containing another smaller square within it, with a circular element at the center of the inner square.
                                                                                                                                                       
                                                                                                                                                       ### Key Elements
                                                                                                                                                       - **Visual description**: The icon features a square shape with rounded corners.
                                                                                                                                                       - **Location**: The square is centered in the image.
                                                                                                                                                       - **Contents**: Inside the square, there is a smaller square with rounded corners, and a red circle is positioned at the center of the smaller square.
                                                                                                                                                       - **Visual styling**: The squares have a light gray background, and the red circle has a darker red outline.
                                                                                                                                                       
                                                                                                                                                       ### Visual Flow / Relationships
                                                                                                                                                       The icon is symmetrical and balanced, with no arrows or lines connecting elements. The red circle is the focal point, drawing attention due to its contrasting color against the lighter gray squares.
                                                                                                                                                       
                                                                                                                                                       </details>
                                                                                                                                                       
                                                                                                                                                       <p></p>
                                                                                                                                                       
                                                                                                                                                        from the wrist wearable or the real-time metrics panel (shown below highlighted in red).

<details>
<summary>Trace icon on the real-time metrics panel</summary>

<p></p>

[Trace icon on the real-time metrics panel](../../image_data/973999cb0b6b9afd9e21197e634b38e0dc76311b5cca766ecf6b37528b69b9e2.md)

### Overview
This image displays a performance metrics overlay on a game interface. It includes real-time data on FPS, CPU usage, GPU usage, and wait times for GPU operations. The overlay has a dark theme with a semi-transparent background that allows the game's environment to be partially visible behind it.

### Key Elements
- **FPS Section**: Located at the top left, showing "60 current" with a target of "72" and a maximum of "60". A red dot indicates the current value.
- **CPU Usage Section**: Below the FPS section, displaying "16.8 avg (0.5s)" with a target of "13.9" and a maximum of "20.58". A red dot marks the average value.
- **GPU Usage Section**: Positioned below the CPU section, showing "9.7 avg (0.5s)" with a target of "13.9" and a maximum of "10.03". Another red dot highlights the average.
- **Wait for GPU Section**: At the bottom, indicating "0.4 avg (0.5s)" with a target of "1.0" and a maximum of "1.48". A red dot marks the average.
- **Graphs**: Each metric has a corresponding graph above its respective section, showing fluctuations over time.
- **Inspect Button**: Located at the bottom right, labeled "Inspect".

### Visual Flow / Relationships
The overlay is designed to be easily readable against the game's background. The graphs provide a visual representation of the data trends, while the red dots draw attention to the current values. The layout is structured to prioritize the most critical information first, with the FPS being the most prominent due to its central placement and larger font size.

</details>

<p></p>



Selecting the tracing icon opens the **Start a trace** modal where you can select the type of trace you want to capture and start the trace.

<details>
<summary>Start a trace dialog</summary>

<p></p>

[Start a trace dialog](../../image_data/d1c14ae95b4c67acad44d1dae4b503d308c151c5c717af72ecbe28addb41a135.md)

### Overview
This image depicts a dialog box with two radio button options for selecting a trace type. The box is set against a hexagonal tiled floor background with pink confetti scattered around. The dialog box has a dark gray background with white text and blue accents.

### Key Elements
- **Title**: "Start a trace" displayed at the top of the dialog box.
- **Question**: "What type of trace do you want to run?" located below the title.
- **Options**:
  - **Overview**: A radio button option labeled "Overview" with a description underneath stating, "Set a baseline for how your world performs in visit mode. Viewable in Perfetto."
  - **Deep**: Another radio button option labeled "Deep" with a description underneath stating, "Uncover possible ways to optimize parts of your world. Viewable in Perfetto."
- **Buttons**:
  - **Start capture**: A blue button with white text that says "Start capture" located on the right side of the dialog box.
  - **Cancel**: A gray button with white text that says "Cancel" located at the bottom left of the dialog box.
- **Close Button**: A small white "X" icon located at the top right corner of the dialog box.

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself. The radio buttons are arranged vertically under the question, with the "Deep" option currently selected as indicated by the blue dot next to it. The "Start capture" button is positioned to the right of the dialog box, while the "Cancel" button is at the bottom left. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving from the question, through the options, and ending with the buttons.

</details>

<p></p>



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
- Select **Tracing.**<details>
                     <summary>Utilities menu</summary>
                     
                     <p></p>
                     
                     [Utilities menu](../../image_data/2a9e52cfaade4ae718cc77190b34c3d5959b9d2e7f9bc5f89fd4d8184cb83f52.md)
                     
                     ### Overview
                     The image depicts a user interface element resembling a smartphone screen within a virtual environment. The screen displays a "Personal Space" interface with a time indicator, menu options, and various interactive icons. Adjacent to the phone screen is a floating card labeled "Utilities," containing two options: "Real-time metrics" and "Tracing."
                     
                     ### Key Elements
                     - **Phone Screen**:
                       - **Visual description**: A rectangular screen with rounded corners.
                       - **Location**: Right side of the image.
                       - **Contents**: 
                         - Top-left corner: "Personal Space" text with a globe icon.
                         - Center-top: Time display showing "5:02 PM."
                         - Bottom-center: Three horizontal lines indicating a menu or settings option.
                         - Right side: Four circular icons representing different functions: pause/play, microphone, camera, and a location pin.
                       - **Visual styling**: Gradient background transitioning from blue at the top to purple at the bottom. White icons and text for contrast.
                     
                     - **Floating Card**:
                       - **Visual description**: A white card with rounded corners.
                       - **Location**: Left side of the image.
                       - **Contents**: 
                         - Top-left corner: "Utilities" text.
                         - Below: Two oval-shaped buttons labeled "Real-time metrics" and "Tracing."
                       - **Visual styling**: Light gray background with white text and buttons.
                     
                     - **Background**:
                       - **Visual description**: A blurred virtual environment with green and brown tones, suggesting a landscape or outdoor setting.
                     
                     ### Visual Flow / Relationships
                     - **Most prominent visually**: The phone screen due to its larger size and central placement.
                     - **Arrows, lines, connectors**: None visible.
                     - **Spatial relationships**: The phone screen is positioned to the right of the floating card, creating a clear distinction between the two elements. The floating card is slightly above the phone screen, suggesting a layered effect.
                     
                     </details>
                     
                     <p></p>
                     
                     
- Use the radio buttons to select the **Overview** or **Deep** tracing scope.
- Select **Start tracing** to start the trace.

<details>
<summary>Tracing dialog</summary>

<p></p>

[Tracing dialog](../../image_data/dc0080c5bfd2805afb6f9752f683af7b473c4106afb67394dc4247d85bee386c.md)

### Overview
The image displays a user interface element that appears to be part of a mobile application or software tool. It features a card-like design with rounded corners and a shadow effect, suggesting a floating or modal window. The content is related to tracing and optimization settings.

### Key Elements
- **Title**: "Tracing" located at the top of the card.
- **Overview Section**: 
  - **Visual description**: A small circle with a checkmark inside, indicating selection.
  - **Location**: Top-left area of the card.
  - **Contents**: "Overview\nSet a baseline"
  - **Visual styling**: Gray background with white text.
- **Deep Section**: 
  - **Visual description**: A larger circle with a checkmark inside, indicating selection.
  - **Location**: Below the Overview section.
  - **Contents**: "Deep\nUncover optimizations"
  - **Visual styling**: Purple background with white text.
- **Start Tracing Button**: 
  - **Visual description**: A large, elongated button with a play icon on the left side.
  - **Location**: Below the Deep section.
  - **Contents**: "Start tracing"
  - **Visual styling**: Blue background with white text and a white play icon.

### Visual Flow / Relationships
- **Most prominent visually**: The "Deep" section due to its larger size and distinct purple background.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The elements are arranged vertically, with the "Overview" section above the "Deep" section, and the "Start tracing" button below them.

</details>

<p></p>



## Start a new trace from the Real Time Metrics Panel

To start a new trace from the Performance Metrics panel:

- On the Performance Metrics panel, select the **tracing** icon.
  <details>
  <summary>Tracing icon targeted on Performance Metrics panel</summary>
  
  <p></p>
  
  [Tracing icon targeted on Performance Metrics panel](../../image_data/d063e9c1be59df45ad4e51105dc8e638a6de6e25b1828c561809a351c419a129.md)
  
  ### Overview
  This image displays a performance metrics overlay, likely from a gaming or software application, showing real-time performance data such as FPS, CPU usage, and GPU usage. The interface is dark-themed with a focus on the metrics presented in a grid-like layout.
  
  ### Key Elements
  - **Title**: "Performance Metrics" located at the top-center of the overlay.
  - **FPS Section**:
    - **Visual description**: A red waveform graph.
    - **Location**: Top row, left column.
    - **Contents**: "72 current", "72 target • 72 max".
    - **Visual styling**: Red waveform, white background for the graph area.
  - **CPU (ms) Section**:
    - **Visual description**: A blue waveform graph.
    - **Location**: Second row, left column.
    - **Contents**: "13.8 avg (0.5s)", "13.9 target • 17.37 max".
    - **Visual styling**: Blue waveform, white background for the graph area.
  - **GPU (ms) Section**:
    - **Visual description**: A purple waveform graph.
    - **Location**: Third row, left column.
    - **Contents**: "3.3 avg (0.5s)", "13.9 target • 3.37 max".
    - **Visual styling**: Purple waveform, white background for the graph area.
  - **Buttons**:
    - **Visual description**: A small icon resembling a camera and a flag.
    - **Location**: Bottom-left corner.
    - **Contents**: The camera icon has a red dot indicating active recording or inspection mode.
    - **Visual styling**: White icon with a red dot, gray background.
  - **Inspect Button**:
    - **Visual description**: A blue button labeled "Inspect".
    - **Location**: Bottom-right corner.
    - **Contents**: "Inspect" text in white.
    - **Visual styling**: Blue button with white text.
  - **Close Button**:
    - **Visual description**: An "X" icon.
    - **Location**: Top-right corner.
    - **Contents**: "X" symbol.
    - **Visual styling**: White "X" on a transparent background.
  
  ### Visual Flow / Relationships
  The overlay is structured in a grid format with three rows and two columns. The most prominent visual elements are the waveform graphs, which are centrally placed within each cell. The camera and flag icons are positioned at the bottom-left corner, while the "Inspect" button is at the bottom-right corner. The "X" close button is located at the top-right corner, providing a clear visual hierarchy for user interaction.
  
  </details>
  
  <p></p>
  
  
- On the **Start a trace** panel, use the radio buttons to select your trace type (**Overview** or **Deep**).
- Select **Start capture**.

<details>
<summary>Start a trace dialog</summary>

<p></p>

[Start a trace dialog](../../image_data/d1c14ae95b4c67acad44d1dae4b503d308c151c5c717af72ecbe28addb41a135.md)

### Overview
This image depicts a dialog box with two radio button options for selecting a trace type. The box is set against a hexagonal tiled floor background with pink confetti scattered around. The dialog box has a dark gray background with white text and blue accents.

### Key Elements
- **Title**: "Start a trace" displayed at the top of the dialog box.
- **Question**: "What type of trace do you want to run?" located below the title.
- **Options**:
  - **Overview**: A radio button option labeled "Overview" with a description underneath stating, "Set a baseline for how your world performs in visit mode. Viewable in Perfetto."
  - **Deep**: Another radio button option labeled "Deep" with a description underneath stating, "Uncover possible ways to optimize parts of your world. Viewable in Perfetto."
- **Buttons**:
  - **Start capture**: A blue button with white text that says "Start capture" located on the right side of the dialog box.
  - **Cancel**: A gray button with white text that says "Cancel" located at the bottom left of the dialog box.
- **Close Button**: A small white "X" icon located at the top right corner of the dialog box.

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself. The radio buttons are arranged vertically under the question, with the "Deep" option currently selected as indicated by the blue dot next to it. The "Start capture" button is positioned to the right of the dialog box, while the "Cancel" button is at the bottom left. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving from the question, through the options, and ending with the buttons.

</details>

<p></p>

\*\*

## Download the trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side, navigation select **Performance** > **Traces**.
- The most recent trace is always at the top of the page.
- Select the trace file to download.

## Tracing Scope

The scope of the trace is used to filter various levels of data points.

* **World:** This option enables capturing only high level performance data relevant to world performance. World data is a subset of application traces such as Hardware/GPU time and Main Thread information. <details>
                                                                                                                                                                                                               <summary>World traces</summary>
                                                                                                                                                                                                               
                                                                                                                                                                                                               <p></p>
                                                                                                                                                                                                               
                                                                                                                                                                                                               [World traces](../../image_data/9b68e08240c2a39724496ded652b97636d14448a65791893e5a6ece4988043da.md)
                                                                                                                                                                                                               
                                                                                                                                                                                                               ### Overview
                                                                                                                                                                                                               This image depicts a timeline or profiling tool interface, likely used for debugging or analyzing performance metrics of a software application. The interface includes multiple timelines, processes, and various data points represented as colored bars and text labels.
                                                                                                                                                                                                               
                                                                                                                                                                                                               ### Key Elements
                                                                                                                                                                                                               - **Timeline**: A horizontal axis representing time, marked at intervals such as 0 s, 2 s, 4 s, etc.
                                                                                                                                                                                                               - **Processes**: Labeled as "Process 1586" and "Process 404040," indicating separate threads or processes being monitored.
                                                                                                                                                                                                               - **Threads**: Within each process, labeled as "Main Thread 1" and "Thread 1," showing nested timelines.
                                                                                                                                                                                                               - **Bars**: Colored bars represent different events or metrics, such as "ScriptEvent::followhbar," "ScriptAction::move," and "Hardware::Gpu::Time."
                                                                                                                                                                                                               - **Text Labels**: Descriptive labels such as "PlayerLoop::Frame," "UpdateRunner::Update," and "Hardware::Gpu::Time" appear above some bars.
                                                                                                                                                                                                               - **Search Bar**: Located at the top, with placeholder text "Search."
                                                                                                                                                                                                               
                                                                                                                                                                                                               ### Visual Flow / Relationships
                                                                                                                                                                                                               - **Most Prominent**: The timeline and its associated bars and labels.
                                                                                                                                                                                                               - **Arrows/Connections**: No explicit arrows or connections are visible.
                                                                                                                                                                                                               - **Reading Order**: The timeline progresses from left to right, with processes and threads stacked vertically.
                                                                                                                                                                                                               
                                                                                                                                                                                                               </details>
                                                                                                                                                                                                               
                                                                                                                                                                                                               <p></p>
                                                                                                                                                                                                               
                                                                                                                                                                                                               
* **Application:** This option enables capturing more granular performance data from the entire application. Application traces will provide an in-depth trace, such as ​​Main Thread, Hardware/GPU, Audio, Rendering Metrics, and UI/React VR. <details>
                                                                                                                                                                                                                                                <summary>Application traces</summary>
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                <p></p>
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                [Application traces](../../image_data/6ed7436ea684b8ac6036f4f4cb4cae216e9bc27a2f689f1d6570c5a6f20a69c3.md)
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                ### Overview
                                                                                                                                                                                                                                                The image depicts a graphical user interface (GUI) that appears to be a timeline or activity log viewer, likely used for monitoring processes or threads. The interface includes multiple timelines, each representing different processes or threads, with various events and metrics displayed alongside them.
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                ### Key Elements
                                                                                                                                                                                                                                                - **Timeline Headers**: Located at the top of each timeline, these headers indicate the process or thread being monitored. Examples include "Process 0467," "Thread 1," and "Process 101010."
                                                                                                                                                                                                                                                - **Event Bars**: These are horizontal bars that represent specific events or actions within the timeline. They vary in color and length, indicating different types of events or durations.
                                                                                                                                                                                                                                                - **Metrics**: Below each timeline header, there are lists of metrics or parameters associated with the process/thread. These include numerical values and labels such as "batch_memory_alloc," "batch_updates," and "input_mesh_quad."
                                                                                                                                                                                                                                                - **Search Bar**: Positioned at the top right, this bar allows users to search through the timeline data.
                                                                                                                                                                                                                                                - **Scrollbar**: Located on the right side of the interface, this scrollbar enables users to navigate through the timeline if it extends beyond the visible area.
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                ### Visual Flow / Relationships
                                                                                                                                                                                                                                                - **Most Prominent Element**: The timelines are the most prominent visual elements due to their size and detail.
                                                                                                                                                                                                                                                - **Arrows/Connectors**: There are no arrows or connectors visible in the image.
                                                                                                                                                                                                                                                - **Spatial Relationships**: The timelines are arranged vertically, with each one stacked above the next. Metrics are listed beneath each timeline header, and the search bar is positioned at the top right corner.
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                </details>
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                <p></p>
                                                                                                                                                                                                                                                
                                                                                                                                                                                                                                                

## Tracing Options

Trace options allow you to set the traces you want to see, client, server or both. The default is set to “client.”

* **Client:** This option enables capturing only client-side world performance. Client traces provide detailed performance metrics for ​​the main thread, hardware/GPU, audio, rendering metrics, and UI/React VR. <details>
                                                                                                                                                                                                                   <summary>Client options</summary>
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   <p></p>
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   [Client options](../../image_data/6ed7436ea684b8ac6036f4f4cb4cae216e9bc27a2f689f1d6570c5a6f20a69c3.md)
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   ### Overview
                                                                                                                                                                                                                   The image depicts a timeline-based visualization tool, likely used for performance analysis or debugging. It shows multiple processes and threads with various metrics and events represented as horizontal bars and text labels. The interface includes a search bar at the top and a sidebar with process identifiers and thread names.
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   ### Key Elements
                                                                                                                                                                                                                   - **Timeline**: Horizontal bars representing time intervals, colored differently for various processes and threads.
                                                                                                                                                                                                                   - **Process Identifiers**: Labels such as "Process 0467," "Process 8404040," and others appear vertically on the left side.
                                                                                                                                                                                                                   - **Thread Names**: Threads within processes are listed under their respective identifiers, e.g., "Thread 1," "Thread 2."
                                                                                                                                                                                                                   - **Metrics**: Text labels such as "ScriptMessage:Actions #," "ScriptMessage:Events #," and "Hardware Gpu Utilization #" are shown next to the processes and threads.
                                                                                                                                                                                                                   - **Event Descriptions**: Short descriptions like "PlayerLoopFrame," "Played app:/title/update," and "UpdateRunner:LenUpdate" are displayed alongside the timeline bars.
                                                                                                                                                                                                                   - **Search Bar**: Located at the top, with placeholder text "Search."
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   ### Visual Flow / Relationships
                                                                                                                                                                                                                   - **Most Prominent Element**: The timeline bars are the most prominent, visually spanning across the width of the interface.
                                                                                                                                                                                                                   - **Arrows/Connectors**: None visible.
                                                                                                                                                                                                                   - **Reading Order**: The timeline progresses horizontally from left to right, with vertical elements (processes and threads) stacked on the left side.
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   </details>
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   <p></p>
                                                                                                                                                                                                                   
                                                                                                                                                                                                                   
* **Server:** This option enables capturing only server-side world performance, which includes network calls and script updates. <details>
                                                                                                                                 <summary>Server options</summary>
                                                                                                                                 
                                                                                                                                 <p></p>
                                                                                                                                 
                                                                                                                                 [Server options](../../image_data/7f3a89caf1324f2554a880c0e151080c96d630c4f46664b2cd63314185731b1f.md)
                                                                                                                                 
                                                                                                                                 ### Overview
                                                                                                                                 The image depicts a timeline interface, likely from a software tool used for debugging or profiling applications. The timeline is segmented into time intervals, and various events and processes are marked within these segments. The interface includes a search bar at the top and a hierarchical breakdown of processes and threads.
                                                                                                                                 
                                                                                                                                 ### Key Elements
                                                                                                                                 - **Timeline**: A horizontal bar divided into time intervals labeled with seconds (e.g., 0 s, 5 s, 10 s).
                                                                                                                                 - **Process 73**: A dark-colored section labeled "Process 73" that spans across multiple time intervals.
                                                                                                                                 - **Main Thread 1**: A lighter-colored section labeled "Main Thread 1" that also spans across multiple time intervals.
                                                                                                                                 - **ScriptEvent::update**: A series of green rectangular blocks labeled "ScriptEvent::update" indicating script events.
                                                                                                                                 - **UpdateRunner::Update**: A larger orange rectangular block labeled "UpdateRunner::Update," which appears to be a significant event or process.
                                                                                                                                 - **Search Bar**: Located at the top, with a magnifying glass icon and placeholder text "Search."
                                                                                                                                 
                                                                                                                                 ### Visual Flow / Relationships
                                                                                                                                 - **Most Prominent Element**: The "UpdateRunner::Update" block due to its size and placement.
                                                                                                                                 - **Arrows/Connectors**: None visible.
                                                                                                                                 - **Reading Order**: The timeline progresses from left to right, with events and processes occurring sequentially over time.
                                                                                                                                 
                                                                                                                                 </details>
                                                                                                                                 
                                                                                                                                 <p></p>
                                                                                                                                 
                                                                                                                                 
* **Client and Server:** This option enables capturing world performance for both client-side and server-side.

## Deep Script Profiling Analysis

This feature enables creative studios to better understand performance bottlenecks by providing detailed information about API calls and event handling in TypeScript.

To enable deep tracing, select “Deep” in the list of trace levels.

<details>
<summary>Deep tracing</summary>

<p></p>

[Deep tracing](../../image_data/ca87a826ccb433379aeb77de12d5556eff0f15075f1a90f9834b73732931bbdb.md)

### Overview
The image displays a timeline-based profiling tool interface, likely from a software development environment. It shows a series of events and processes over time, with a focus on a specific slice of code execution. The interface includes a timeline at the top, a breakdown of processes in the middle, and detailed information about a selected slice at the bottom.

### Key Elements
- **Timeline**: Located at the top, spans from 0 seconds to approximately 13 seconds. It has a grid of time intervals marked every second.
- **Process Breakdown**: Below the timeline, there are horizontal bars representing different processes. These bars are color-coded and labeled with process names such as "Frame," "PlayerLoop::Frame," "UpdateRunner::Update," and others.
- **Selected Slice**: A highlighted section in the timeline and process breakdown indicates a specific event named "ScriptingRuntime::Bridge::RotateRelativeToPlayer." This slice is shown in more detail in the lower part of the interface.
- **Slice Details**: At the bottom, there is a table providing detailed information about the selected slice, including its name ("ScriptingRuntime::Bridge::RotateRelativeToPlayer"), category ("Scripting"), start time ("3s 840ms"), duration ("40us 100ns"), thread ("Main Thread 1"), process ("4432"), and slice ID ("45141").

### Visual Flow / Relationships
- **Most Prominent Element**: The timeline at the top is the most prominent feature, as it provides the temporal context for the processes.
- **Arrows/Connectors**: There are no explicit arrows or connectors between elements.
- **Reading Order**: The timeline is read from left to right, indicating the sequence of events over time. The processes are read from top to bottom within the timeline.

</details>

<p></p>

