Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/analyzing-trace-data-with-perfetto

# Analyzing trace data with Perfetto

In another article, you learned [how to capture a trace](Tracing.md) using the Utilities menu found on your wearable. Taking it one step further, this guide will help you understand where to find those traces and how to get the most out of the information you’ve captured. We’ve also include a handy guide to [Perfetto Tool Keyboard shortcuts](Analyzing%20trace%20data%20with%20Perfetto.md#perfetto-tool-keyboard-shortcuts) that you can reference while working within [Perfetto](https://ui.perfetto.dev/).

By the end of this user guide, you’ll know how to:

* Download a trace file
* View a trace file
* Control how you see traces
* Examine the main thread
* Examine common counters

As you get more familiar with Perfetto and the Real-time Metrics menu, reference this checklist to better understand the cause and effect of performance issues. For a more in-depth explanation and step-by-step tutorial on how to use this checklist, go watch the [Connect ‘23 Horizon World Performance Optimization Best Practices talk](../Connect%20'23%20Video%20Series-%20World%20Optimization%20Best%20Practices.md).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e40808d1c5ff691d720774a87a063818f22b6f316aaf7d31c87903d5110992b0.md)

### Overview
This image depicts a checklist with two columns labeled "Checklist" and "Status." The checklist contains a series of tasks, some of which have checkboxes next to them. The status column has checkboxes that appear to be in a default state, indicating no action has been taken yet.

### Key Elements
- **Checklist Column**: Contains a list of tasks written in a bullet-point format.
  - **Visual description**: Text-based list.
  - **Location**: Left side of the image.
  - **Contents**: Tasks include "Is there a performance problem?", "Make a base capture," "Get Real-time performance metrics data," "(Depends) Get a Perfetto capture," "Add in or remove a feature(s) to World," "Compare data against base capture," "Consider trade-offs," and "Fix."
  - **Visual styling**: Black text on a white background.
- **Status Column**: Contains checkboxes next to each task in the checklist.
  - **Visual description**: Checkbox elements.
  - **Location**: Right side of the image.
  - **Contents**: Checkboxes are blue with a white checkmark.
  - **Visual styling**: Blue background with white checkmark, black border.

### Visual Flow / Relationships
- **Most prominent visually**: The checklist tasks.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: Tasks are listed vertically under the "Checklist" heading, with corresponding checkboxes in the "Status" column to the right. There is no implied reading order beyond the vertical listing of tasks.

</details>

<p></p>



The first step in analyzing traces is downloading them once they’ve been captured.

## Downloading a trace file

- Open your browser and navigate to the [Developer Dashboard](https://developers.meta.com/horizon/manage/worlds/).
- Select your world.
- From the left-side navigation select **Performance** > **Traces**.

## Viewing a trace file

To view a trace file directly from the Developer Dashboard, select **Perfetto** from the **Actions** menu for your trace.

### Tool controls

* Use **CTRL + mouse wheel** or the **w/s** keys on the keyboard to zoom in and zoom out on the specific thread and event. Use the **a/d** keys to pan left and right, respectively.
* Use the **Search** input box at the top of the Prefetto UI tool to find a thread or process.

  <details>
  <summary>Perfetto UI search box</summary>
  
  <p></p>
  
  [Perfetto UI search box](../../image_data/6ce44cc588b6f3db009df4f56329ce591ff3be3e31af3e77d366088ef046e17b.md)
  
  ### Overview
  This image depicts a search bar interface element commonly found in software applications or web interfaces. The search bar contains a placeholder text and some navigation controls.
  
  ### Key Elements
  - **Search Bar Placeholder Text**: Located centrally within the search bar. Contains the text: `UpdateRunner::Update`.
  - **Navigation Controls**: Positioned at the far right of the search bar. Includes a forward arrow (`<`) and a backward arrow (`>`).
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar itself. The navigation controls are secondary but clearly positioned as interactive elements to navigate through results.
  
  </details>
  
  <p></p>
  
  
* If the search function finds a match, it will highlight the counter in yellow.

  <details>
  <summary>Using the Search bar to find a call inside a call graph</summary>
  
  <p></p>
  
  [Using the Search bar to find a call inside a call graph](../../image_data/2c17490ffb669dc095e7d759c7bd41655ef7de91c7b97b22e539163f109da878.md)
  
  ### Overview
  This image depicts a screenshot of a profiling tool interface, specifically Perfetto, which is used for performance analysis of applications. The main area of the interface displays a timeline with various events and processes, indicating the performance of a specific trace file named "thinkpad-web-deep-3.ptrace".
  
  ### Key Elements
  - **Navigation Panel**: Located on the left side, contains options such as "Open trace file," "Record new trace," "Show timeline," "Download," "Query (SQL)," "Viz," "Metrics," "Info and stats," "Convert trace," "Example Traces," and "Support." The current trace file is highlighted as "thinkpad-web-deep-3.ptrace (8 MB)."
  - **Timeline**: The central area of the interface shows a timeline with time stamps ranging from 00:00:00 to 00:00:10. Events are represented as colored bars and labels, such as "PlayerLoop:Update," "UpdateRunner:Update," and "FinishFrameRendering:PostLateUpdate."
  - **Thread Information**: Below the timeline, there are threads listed, such as "IL2CPP Threadpool worker 660," "IL2CPP Threadpool worker 664," etc.
  - **Slice Details**: At the bottom, there is a section labeled "Slice UpdateRunner:Update" showing details like Name, Category, Start time, Duration, Thread ID, Process ID, and SQL ID.
  
  ### Visual Flow / Relationships
  The timeline is the most prominent visual element, with events arranged horizontally along the timeline. Threads are listed vertically below the timeline. The slice details at the bottom provide additional information about the selected event.
  
  </details>
  
  <p></p>
  
  
* Select an event on the thread to get more information, such as:

  + Name
  + Category
  + Start time
  + Duration
  + Process ID

  <details>
  <summary>Selecting a counter on the main thread, revealing the Current Selection tab</summary>
  
  <p></p>
  
  [Selecting a counter on the main thread, revealing the Current Selection tab](../../image_data/cd33224a4ad852a97efc13a5e995a4fb7eeb8c62670442cca0790e51f13509dd.md)
  
  ### Overview
  This image depicts a user interface element showing details of a specific event or operation within a profiling tool. The layout includes a header, a collapsible section labeled "Details," and various data fields such as Name, Category, Start time, Duration, Thread ID, Process ID, and SQL ID.
  
  ### Key Elements
  - **Header**: Located at the top, it reads "Current Selection" and "Slice ScriptingRuntime::HandleEvent." This is a title bar indicating the current focus of the interface.
  - **Details Section**: Below the header, this section contains several data fields:
    - **Name**: Displays "ScriptingRuntime::HandleEvent."
    - **Category**: Shows "None."
    - **Start time**: Displays "00:00:05.017 977 100."
    - **Duration**: Indicates "399us 300ns."
    - **Thread**: Lists "160."
    - **Process**: Shows "156."
    - **SQL ID**: Contains "slice[83835]..." with a clickable element next to it.
  
  ### Visual Flow / Relationships
  The visual hierarchy is clear, with the header providing context and the "Details" section offering specific information. The data fields are arranged vertically, with each field having its own label and value. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom.
  
  </details>
  
  <p></p>
  
  

### Perfetto Tool keyboard shortcuts

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/41f06ff378c1791403a03f136cba67f0f258ed331bb1fc00ab9e178d0ba1a105.md)

### Overview
The image displays a help menu for a software application named "Perfetto." It provides keyboard shortcuts and mouse controls for navigating and interacting with the application. The layout is structured into sections for navigation, Dvorak keyboard mapping, mouse controls, SQL query execution, and miscellaneous commands.

### Key Elements
- **Navigation Section**: Located at the top-left, contains keyboard shortcuts for zooming in/out (`w/s`) and panning left/right (`a/d`). The text is black on a white background.
- **Dvorak Navigation Section**: Below the Navigation section, similar layout but with Dvorak-specific keys (`,/o`, `a/e`). The text is also black on a white background.
- **Mouse Controls Section**: Positioned below the Dvorak section, includes actions like clicking, using the Ctrl + Scroll wheel, Click + Drag, and Shift + Click + Drag. The text is black on a white background.
- **SQL Queries Section**: Divided into two parts: "Making SQL queries from the viewer page" and "Making SQL queries from the query page." Each part has specific keyboard shortcuts for executing queries and pinning outputs. The text is black on a white background.
- **Other Section**: At the bottom, contains additional keyboard shortcuts for various functions such as scrolling, selecting slices, switching focus, marking areas, selecting all, toggling the sidebar, and showing help. The text is black on a white background.

### Visual Flow / Relationships
The content is organized in a vertical list format, with each section clearly delineated. The most prominent elements are the headings ("Navigation," "Dvorak Navigation," "Mouse Controls," etc.), which are larger and bolder than the rest of the text. There are no arrows or lines connecting elements, so the flow is linear, moving from top to bottom.

</details>

<p></p>



## Examining the main thread

Depending on how you record a trace, the process name and main thread name will vary. It might be called Process followed by a number, or TogetherServer, or com.facebook.horizon. The main thread will be called UnityMain, or Thread followed by a number. In any case, it should be the first process and thread you see in the Perfetto UI.

You can zoom into the thread to see the different calls being made on the main thread. By default, press `W` on your keyboard to zoom in, and `S` to zoom out. Use `A` and `D` to pan left and right, respectively.

If you use your left mouse button to drag across a frame in the main thread, you can get more information from the **Area Selection** dialog at the bottom of the screen. If you select **Slices**, you can see the frame time under “Wall duration (ms)”. You can scroll down for a list of all the calls made during the selected time. The next column, “Avg Wall duration (ms)” will show you the average frame time across the whole trace. A trace taken with the Deep setting will give more inflated CPU times (around 5%) but you will have access to more detailed markers. A trace taken with the Overview setting will have more accurate CPU times but fewer markers will be captured. Here is an example selection:

<details>
<summary>Selecting a frame to view the slice durations</summary>

<p></p>

[Selecting a frame to view the slice durations](../../image_data/7bf2c467fa0c0e45d12fc75cffad208006c96c8a4a576a5d70a84cd964b62354.md)

### Overview
The image depicts a user interface of a profiling tool named Perfetto, specifically showing a timeline view of a trace file. The interface includes a timeline at the top, a list of processes and threads in the middle, and a table of performance metrics at the bottom. The timeline highlights specific events and their durations, while the table provides detailed statistics for each event.

### Key Elements
- **Navigation Panel**: Located on the left side, contains options such as "Open trace file," "Record new trace," "Show timeline," "Download," "Query (SQL)," "Viz," "Info and stats," "Convert trace," "Example Traces," "Support," and "Plugins." The panel has a dark theme with white text.
- **Current Trace**: Displays the name of the current trace file ("thinkpad-web-deep-3.ptrace") and its size (8 MB).
- **Timeline**: At the top, spans horizontally across the screen, showing a timeline with time markers ranging from 00:00:00 to 00:00:08. Events are represented as colored bars indicating their duration and occurrence.
- **Process List**: Below the timeline, a list of processes and threads is displayed. The highlighted process is labeled "Process 156."
- **Thread List**: Underneath the process list, a list of threads is shown, with Thread 160 being highlighted.
- **Performance Table**: At the bottom, a table titled "Area Selection" lists various events along with their wall duration, average wall duration, and occurrences. Examples include "Frame," "PlayerLoop.Frame," and "UpdateRunner.Update."

### Visual Flow / Relationships
- **Most Prominent Element**: The timeline at the top is the most prominent due to its large size and central placement.
- **Arrows and Lines**: There are no arrows or lines connecting elements, but the timeline suggests a sequential flow of events.
- **Spatial Relationships**: Elements are arranged in a grid-like structure, with the navigation panel on the left, the timeline at the top, and the performance table at the bottom. Threads and processes are listed vertically under the timeline.

</details>

<p></p>



When you zoom into a single frame on the thread, you can get a better understanding of how the time is being spent. For example, while the `PlayerLoop::Update` call seems very large, it is made up of a lot of calls that vary in size. Even if a single marker is large, that may not be an area of concern. For example, it is normal for `HorizonAvatarManagerUpdateRunner::Update` to take 1.5ms.

### Common CPU Concerns

#### GPU bound or CPU bound?

It is possible for a world to appear CPU bound because it is waiting on the GPU. If you see consistantly high wait times in `EarlyUpdate::XRUpdate` or `PlayerLoop::WaitForGFX` that could be from waiting on the GPU. It can also be caused by other reasons, such as Particles or Additional Players. To find out, check the GPU usage where this issue is occurring - if the GPU usage does appear high, addressing that issue could relieve the CPU bottleneck.

#### Rendering

Rendering CPU usage appears as `FinishFrameRendering::PostLateUpdate` and varies depending on what is in the camera’s view. It is normal for this call to be expensive - 2-3 milliseconds - but exceptionally high usage may mean you need to reduce the number of Draw calls in your world.

#### Physics

The Physics CPU time is tracked by `UpdateRunner:PrePhysicsUpdate`, `UpdateRunner::Physics.Simulate`, and `UpdateRunner::PostPhysicsUpdate`. Physics simulation is relatively expensive, and it is common for these sections to total 1ms of CPU time per frame. Physics costs go up when you use complex colliders, trigger zones, and moving objects with physics. Spikes can occur when especially complex objects collide. Physics objects outside of the play space also contribute to this calculation time, so we recommend you disable objects that aren’t currently in use.

#### Audio

Audio CPU time is tracked by `FMODBootstrapperService::Update` and `AudioRuntimeIntegration::Update`. If Audio CPU usage is especially high, it may mean there are too many audio-related gizmos in the world. Typically, the Sound Recorder and Audio Graph gizmos are more expensive than Sound Effects.

#### Particles

Built-in particle updates are tracked by `ParticleSystemBeginUpdateAll::PreLateUpdate` and `ParticleSystemEndUpdateAll::PreLateUpdate`. Custom particle updates are tracked by `ParticleFxService::LateUpdate`. Use of custom particles can also create spikes in `PlayerLoop::WaitForGFX`, which will get worse when you have more particles playing at the same time. The CPU usage is not affected by the particle effect being offscreen. To reduce CPU usage and spikes in these areas, you may need to reduce the complexity of particle systems or the number of systems playing at the same time in your world.

#### Animations

Animation update time is tracked by `Animation::PreLateUpdate`. Especially high CPU usage in this area can mean that the world needs to reduce the number of animations playing at once, possibly by manually turning them on and off or by setting them to cull when offscreen. You should run some tests at the world’s maximum capacity to determine how much additional time is required to support your intended number of players. The `EarlyUpdate::XRUpdate` marker can be helpful with this - when a world is exceeding the target framerate, CPU time in this area will increase to keep the framerate steady and decrease again if more CPU time is needed elsewhere. In this way, this marker can be used to keep track of how much unused time the world has in single-player to accommodate additional players.

#### Scripting

Scripting can impact CPU usage in a variety of ways. The `TsWorldUpdater::Update` marker covers TypeScript connected to `World.onUpdate`, the `TsWorldUpdater::PrePhysicsUpdate` marker covers TypeScript connected to `World.onPrePhysicsUpdate`, and the `ScriptingRuntimeIntegration::Update` marker covers other TypeScript calls, including networked events and async intervals. The `Verts::Update` marker can also be relevant to this area, as many bridge calls covered in other scripting markers will increase time in one of the `Verts::Update` sub-markers as well. Bridge calls on the server can also affect the client in this area, so it is important to look at both when optimizing scripting.

In most cases, the best place to start with scripting optimization is to reduce bridge calls. Bridge calls are relatively expensive calls required to access or change entity properties, including for example setting a visibility, playing a sound, or checking a position. These calls will only appear in a Deep trace, and it is recommended to use this setting when profiling scripts. We recommend the following:

* Don’t run code that isn’t needed - a player’s inventory menu doesn’t need to update UI when it’s closed, for example, and an unspawned enemy doesn’t need to search for the player. Disconnect functions in situations like these, or exit them early if needed conditions aren’t met.
* Don’t update entities that haven’t changed - a scoreboard UI may only change when a player scores, for example, and a targeting reticle’s color may only change when the target changes. Use events instead of `World.onUpdate` in situations like these, or store the relevant property in a variable and only apply it to the entity when the variable doesn’t match the new state.
* Don’t access entity states that haven’t changed - an entity’s owner does not need to be retrieved every frame, for example, and a UI popup’s visibility may change only rarely. In cases like these, update a variable whenever the entity property gets changed and access that variable wherever the property is needed instead.

#### Additional players

Additional players in a world can add to CPU time in a number of ways. The CPU increase for additional avatars is most notable in `HorizonAvatarManagerUpdateRunner::Update`. Additional players can also impact CPU time in areas such as rendering, physics, and scripting, depending on what the players are doing.

## Examining counters

In Perfetto, beneath the main thread is a series of counters captured in the trace. These counters cover multiple subsystems including CPU, GPU, network, scripting, and more. Some of these counters are numbers, and a few will be call graphs similar to what you can see in the main thread. Here you will find brief descriptions of those counters.

### CPU

These counters are related to CPU usage:

| Counter | Description |
| --- | --- |
| Process *or* UnityMain | The main thread for the world. |
| Thread *or* Thread Pool Wor | A worker thread for the main thread. |
| IL2CPP Thread Pool worker | Call graph for a function that converts .NET script to native. |
| TaskManager::BackgroundThread | Call graph for main background thread. |
| AppSpaceWarp | [Frame Budget Boost](../../Save,%20optimize,%20and%20publish/Learn%20about%20Frame%20Budget%20Boost.md) must be enabled for ASW to adaptively turn on. A value of 0 means ASW is off, a value of 1 means AWS is on. When ASW is on, the number of milliseconds of work your world can do per-frame is nearly doubled. |
| ClientSpawn | Call graph of a new client asset being spawned. |
| ClientDespawn | Call graph of a client asset being despawned. |
| ServerSpawn | Call graph of server spawns. |
| PerfThrottle | Call graph of performance throttling, which prevents headlock (freezes and stutters). |
| PlayerLoop::FrameExcludePhaseSync | Call graph and frame duration excluding the player loop update. |
| PlayerLoop::PhaseSync | Call graph and duration when the player loop is updated. Phase sync time is a buffer that shrinks or expands to accommodate CPU load. As CPU time gets longer and closer to the target time to hit 72 FPS (13.8 milliseconds by default, higher if Application Space Warp is on), phase sync time gets shorter. A consistent and long phase sync time means your world is performing well and is able to generate frames faster than the device’s FPS. A phase sync time of 0 ms may indicate your world is running below 72 FPS. |
| Hardware::Cpu::UtilizationAverage | CPU average utilization, as a percentage. |
| Hardware::Mem::AndroidPSS | Memory used, in bytes (proportional set size). |

### GPU

These counters are related to raw GPU rendering:

| Counter | Description |
| --- | --- |
| FPS | Frames per second on the client. |
| Hardware::GPU::Time | GPU time spent, in nanoseconds |
| Hardware::GPU::Utilization | GPU utilization as a percentage |
| Hardware::GPU::DrawCalls | Number of GPU draw calls. |
| Hardware::GPU::SetPass | Number of GPU shader passes. |
| Hardware::GPU::Vertices | Number of vertices processed in draw calls. |

These counters are related to the World Builder:

| Counter | Description |
| --- | --- |
| WBSceneGraphSnapshotDeserializer::DeserializeFromBinary | Call graph when scenes are deserialized into World Builder. |
| WBStandaloneAssetService::LoadedMeshCount | Number of loaded meshes in the World Builder. |
| WBStandaloneAssetService::LoadedMeshLODCount | Number of level-of-detail settings in each mesh times number of loaded meshes. |
| WBStandaloneAssetService::LoadedMeshSize | Size of loaded meshes, in bytes. |
| WBStandaloneAssetService::LoadedMeshTriangleCount | Number of triangles in loaded meshes |
| WBStandaloneAssetService::LoadedMeshVertexCount | Number of vertices in loaded meshes. |
| WBStandaloneAssetService::LoadedSkydomeCount | Number of loaded skydome assets. |
| WBStandaloneAssetService::LoadedTextureCount | Number of loaded textures in the World Builder. |
| WBStandaloneAssetService::LoadedTextureSize | Size of loaded textures, in bytes. |

These counters are related to RenderToolkit, the Horizon Worlds lighting solution:

| Counter | Description |
| --- | --- |
| RTK::TotalChunkMemoryKB | Total memory allocated for emitters and receivers, in kilobytes. |
| RTK::TotalEmitterChunkCount | Number of emitter chunks allocated. |
| RTK::TotalReceiverChunkCount | Number of receiver chunks allocated. |
| RTK::UsedChunkMemoryKB | Memory used by emitters and receivers, in kilobytes. |
| RTK::UsedEmitterChunkCount | Number of emitter chunks used. |
| RTK::UsedReceiverChunkCount | Number of reciever chunks used. |

This counter is related to particle simulation:

| Counter | Description |
| --- | --- |
| PKFxSimulationUpdate | Call graph of particle simulation updates |

### UI

These counters are related to [Custom UI elements](../../Desktop%20editor/Custom%20UI/Performance%20Metrics%20for%20Custom%20UI.md) in the world:

| Counter | Description |
| --- | --- |
| CustomUI::TotalBinding::Count | Number of UI bindings. |
| CustomUI::TotalBinding::KB | Memory used by UI bindings, in kilobytes. |
| CustomUI::TotalUI::Count | Number of visible UI objects. |
| CustomUI::UpdateBinding::Count | Number of UI updates per frame. |

These counters are related to ReactVR, the UI library for Horizon Worlds:

| Counter | Description |
| --- | --- |
| ReactVR::JsVMHeapNumCollections | The number of garbage collections in the JavaScript virtual machine heap. |
| ReactVR::JsVMHeapSize | The size of the JavaScript virtual machine heap. |
| ReactVR::JsVMHeapTotalSize | The size of the JavaScript virtual machine heap, including uncollected objects. |
| ReactVR::Panel::Render:: CustomUIMainPanelWithoutInteraction | CPU cost for rendering CustomUIMainPanelWithoutInteraction. |
| ReactVR::Panel::Render:: DrawCalls::CustomUIMainPanelWithoutInteraction | Number of draw calls for CustomUIMainPanelWithoutInteraction. |
| ReactVR::Panel::Render:: DrawCalls::HorizonXScreenCreationToolsRootUI | Number of draw calls for HorizonXScreenCreationToolsRootUI. |
| ReactVR::Panel::Render:: DrawCalls::XScreenTravelPanel | Number of draw calls for XScreenTravelPanel. |
| ReactVR::Panel::Render:: HorizonXScreenCreationToolsRootUI | CPU cost for rendering HorizonXScreenCreationToolsRootUI. |
| ReactVR::Panel::Render::Redraws:: CustomUIMainPanelWithoutInteraction | Number of redraws for CustomUIMainPanelWithoutInteraction. |
| ReactVR::Panel::Render::Redraws:: HorizonXScreenCreationToolsRootUI | Number of redraws for HorizonXScreenCreationToolsRootUI. |
| ReactVR::Panel::Render::Redraws:: XScreenTravelPanel | Number of redraws for XScreenTravelPanel. |
| ReactVR::Panel::Render:: XScreenTravelPanel | CPU cost for rendering XScreenTravelPanel. |
| ReactVR::RedrawsPerSec | The rendered frame rate for ReactVR. |
| ReactVR::TotalRedraws | Total number of redraws. |

### Audio

These counters are related to the [audio](../../Scripting/API%20references%20and%20examples/Audio%20APIs.md) runtime:

| Counter | Description |
| --- | --- |
| AudioRuntime::FMODAllocatedKB | The amount of memory used by the audio runtime, by 1000 bytes. |
| AudioRuntime::GetMicSamples | The number of samples in the microphone buffer. |

These counters are related to Voice-over-IP:

| Counter | Description |
| --- | --- |
| VoipServiceUpdate | Call graph for VoipServiceUpdate thread. |
| VoipThreadedMic | Microphone input events |
| Voip::Playback::BufferDepth | Number of seconds remaining in the buffer. |
| Voip::Playback::BufferOverflow | Number of samples that arrived in a burst, overflowing the buffer. |
| Voip::Playback::Energy | Audio energy in the output buffer. |
| Voip::Playback::Starvation | Calls dropped due to resource or network issues. |

### Networking

These counters are related to network traffic:

| Counter | Description |
| --- | --- |
| NuVerts::NumBytesReceived | Number of bytes received over the network. |
| NuVerts::NumBytesSent | Number of bytes sent over the network. |
| NuVerts::RttEstimate | Network latency in milliseconds. |
| NuVerts::StateSyncRttEstimate | Estimated round-trip time to sync network state, in milliseconds. |
| VertsPollDriver | Call graph for function that updates entites based on network traffic. |

### Player

These counters are related to the [Avatar](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs) SDK:

| Counter | Description |
| --- | --- |
| AvatarSDK::LocalAvatarAnimDelayTicks | Local avatar update delay, in ticks. |
| AvatarSDK::LocalAvatarAnimMaxDelayTicks | Local avatar maximum update delay, in ticks. |
| AvatarSDK::LocalAvatarAverageLodSelected\_x10 | Average local avatar level of detail selected, times 10. |
| AvatarSDK::NumActiveLocalAvatars | Count of active local (player) avatars. |
| AvatarSDK::NumActiveRemoteAvatars | Count of active remote (player) avatars. |

These counters are related to avatar locomotion. They are all binary, 1 or 0.

| Counter | Description |
| --- | --- |
| CharacterMovementSpeedStateFast\_Activations | 1 if the character is moving fast. |
| CharacterStateEmpty\_Activations | 1 if the character state is empty. |
| CharacterStateGrounded\_Activations | 1 if the character is touching the ground. |
| CharacterStateMotionless\_Activations | 1 if the character is motionless. |
| CharacterStateMoving\_Activations | 1 if the character is moving. |
| CharacterStateReady\_Activations | 1 if the character is ready. |
| CharacterStateRelaxed\_Activations | 1 if the character is relaxed. |
| CharacterStateSprintCooldown\_Activations | 1 if the character is in a sprint cooldown. |
| CharacterStateUseEquippedItem\_Activations | 1 if the character is using an equipped item. |
| OnlyLeftFootDown | 1 if the player’s left foot is down. |
| OnlyRightFootDown | 1 if the player’s right foot is down. |

These counters measure the performance of the LocalPlayerGroundSurfaceService:

| Counter | Description |
| --- | --- |
| LocalPlayerGroundSurfaceService::CacheHit | Number of times the player position relative to ground was within the cache time. |
| LocalPlayerGroundSurfaceService::CacheMiss | Number of times the player position relative to ground was recomputed. |

### Scripting

These counters are related to the [Typescript](../../Scripting/Scripting%20using%20TypeScript.md) scripts in the world:

| Counter | Description |
| --- | --- |
| RuntimePerfLogging::SnapshotSamplerCount | Number of snapshot samplers processed. |
| ScriptMessage::Actions | Number of TypeScript actions processed. |
| ScriptMessage::Events | Number of TypeScript events processed. |
| ScriptingUsageLoggingService::LogSnapshot | Time spent logging snapshots of Typescript activity. |

### Tracing

These counters are telemetry for the tracing system itself:

| Counter | Description |
| --- | --- |
| Tracing::EventCount | Number of active tracing events. |
| Tracing::NativeFlushingTask | Call graph showing time spent flushing a native API call. |
| Tracing::SamplerAvgOverheadNs | Average sampler overhead, in nanoseconds. |
| Tracing::SamplerCount | Number of counters running this frame. |

### Unity

These counters are related to the Unity engine:

| Counter | Description |
| --- | --- |
| UnityAssetBundle::InstantiateFromBundle | Call graph when assets are instantiated. |
| UnityAssetBundle::PendingInstantiateCount | Number of pending instantiations of Unity assets. |
| UnityRuntimeInstantiator::AddSceneEntityAsync | Call graph when entities are added to a scene. |

### Miscellaneous

These counters are related to troubleshooting multiple subsystems:

| Counter | Description |
| --- | --- |
| batch\_memory\_alloc\_kb | Total size of allocated SubD BatchManager GPU buffers (in kb). |
| batch\_updates | Number of SubD batch updates consumed by the main thread. |
| gi\_full\_calc\_duration\_ms | Duration of full GI calculations (i.e., on world load or static geo edit). |
| gi\_full\_calc\_millisec\_per\_sample | Cost per sample point of full GI calculations (i.e., on world load or static geo edit). |
| gi\_init\_calc\_duration\_ms | Duration of the initial GI calculation, upon world load. |
| gi\_partial\_calc\_duration\_ms | Duration of partial GI calculations (i.e., due to finer tessellation). |
| gi\_partial\_calc\_microsec\_per\_sample | Cost per sample point of partial GI calculations (i.e., due to finer tessellation). |
| gi\_thread\_updates | Number of GI thread mesh updates (i.e., due to solves/tessellation) per sec. |
| gi\_to\_main\_queue | Number of elements in GI thread to main thread queue. |
| input\_mesh\_quads | Number of quads in the input meshes. |
| input\_positions\_vertices | Number of vertices for input meshes. |
| main\_to\_gi\_queue | Number of elements in main thread to GI thread queue. |
| num\_active\_particles | Number of active (playing/looping) particles scene. |
| num\_batches\_rendering | Number of SubD batches currently rendering. |
| num\_groups | Number of groups managed by the batching system. |
| num\_invisible\_groups | Number of groups managed by the batching system containing 0 visible primatives. |
| num\_light\_probes | Total number of light probes. |
| num\_particles | Number of particles in the scene. |
| num\_rendertoolkit\_mem\_errors | Number of RenderToolkit memory errors. |
| num\_texture\_arrays | Total number of texture arrays. |
| num\_texture\_slices | Total number of texture slices. |
| pct\_batches\_group | Percentage of rendering batches containing groups of objects that move together. |
| pct\_batches\_group\_ppp | Percentage of rendering batches containing groups of objects that move together in per-primitive props mode. |
| pct\_batches\_ppp | Percentage of rendering batches in per-primitive props mode. |
| pct\_batches\_standard | Percentage of rendering batches without per-prim props or groups; most performant. |
| subd\_global\_mem\_kb | Subdivision Surfaces Global Memory (in kb). |
| subd\_tess\_vertices\_k | Subdivision Surfaces Tessellated Vertices (in K). |
| surface\_count | Static and dynamic Subdivision Surfaces input mesh count. |
| tess\_verts\_per\_sec | Tessellation rate in vertices per second. |
| textures\_mem\_mb | Total size of allocated textures (in mb). |