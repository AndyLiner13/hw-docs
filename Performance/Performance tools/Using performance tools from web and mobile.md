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

<details>
<summary>The world with the performance panel opened.</summary>

<p></p>

[The world with the performance panel opened.](../../image_data/94979deb2db54081ed89ebcfc5cb39b35f082e72908ab9bcd56fb0ebbeead051.md)

### Overview
The image displays a split-screen view. The upper portion shows a virtual environment with a character standing near a futuristic-looking platform, while the lower portion presents performance metrics data.

### Key Elements
- **Upper Screen (Virtual Environment)**:
  - **Visual description**: A 3D-rendered scene featuring a character in a sci-fi setting.
  - **Location**: Top half of the image.
  - **Contents**: The character is wearing a black outfit and is positioned near a platform with a circular opening. There are colorful structures resembling power cells or terminals in the background.
  - **Visual styling**: The environment has a mix of metallic and organic textures, with a gradient sky suggesting either dawn or dusk.

- **Lower Screen (Performance Metrics)**:
  - **Visual description**: A dark-themed interface displaying performance metrics.
  - **Location**: Bottom half of the image.
  - **Contents**: Three graphs showing app frame time, physics, and audio metrics. Each graph has a line representing the average value over time.
  - **Visual styling**: The interface uses a dark theme with light-colored lines and text for contrast.

### Visual Flow / Relationships
- **Most prominent visually**: The upper screen is more prominent as it occupies a larger area and contains a character.
- **Arrows/lines/connectors**: No arrows or lines connect the two screens.
- **Spatial relationships**: The two screens are side-by-side, with the performance metrics displayed below the virtual environment.

</details>

<p></p>



In mobile, you open the Performance dialog but pressing the **Settings** button (gear and wrench) in the top right corner of the screen.

<details>
<summary>The Performance dialog in a mobile world.</summary>

<p></p>

[The Performance dialog in a mobile world.](../../image_data/8b59fd140fb731dc10b7c2447b5488bbc1874bec1e13e6ed1f1085afa4bf8fe8.md)

### Overview
The image displays a user interface element within a game or simulation environment. The foreground features a modal window titled "Performance," which contains options related to performance metrics and trace capture. The background shows a stylized outdoor scene with a building, trees, and decorative lights.

### Key Elements
- **Modal Window Title**: "Performance"
- **Visual Description**: A dark blue rectangular window with rounded corners.
- **Location**: Center of the image.
- **Contents**: 
  - Text: "Show real-time metrics (RTM) overlay" and "Trace Capture."
  - Sub-text: "Shows performance metrics like FPS and more" and "Capture in-depth performance data."
  - Buttons: "Overview" and "Start trace."
- **Visual Styling**: Dark blue background, white text, and a light blue button for "Start trace."

### Visual Flow / Relationships
- **Most Prominent Element**: The "Performance" modal window.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The modal window is centered, with the background scene slightly blurred behind it.

</details>

<p></p>



## Displaying real-time metrics

You can select which real-time metrics to display in the Performance panel by clicking the **Gear** icon to open the Display Settings. From there,simply check the box next to each metric you’d like to see in the Performance panel. Unselected metrics will not be shown.

You can also set a **Target** number for each metric. When a metric exceeds the defined target, a red dot appears next to that metric as an alert.

<details>
<summary>The Display Settings window open in the world. The gear icon used to open the window is highlighted.</summary>

<p></p>

[The Display Settings window open in the world. The gear icon used to open the window is highlighted.](../../image_data/045db97d793c908f96fb5f41baa32f54fb5fb61cd9a55fbdbef36ddc029152f7.md)

### Overview
The image depicts a user interface within a video game, showing performance metrics and display settings. The main focus is on a floating window titled "Display Settings," which contains various performance metrics and checkboxes for selecting which metrics to display.

### Key Elements
- **Floating Window ("Display Settings")**:
  - **Visual description**: A rectangular window with rounded corners.
  - **Location**: Top-center of the screen.
  - **Contents**: Contains checkboxes labeled "CPU," "GPU," "Physics," and "Scripting," each with a corresponding target value next to them.
  - **Visual styling**: Dark gray background with white text and blue checkboxes.

- **Performance Metrics**:
  - **Visual description**: A series of graphs and numerical data displayed below the "Display Settings" window.
  - **Location**: Bottom-left quadrant of the screen.
  - **Contents**: Includes metrics such as "App Frame Time," "Physics," and "Audio," each with average values and targets shown.
  - **Visual styling**: Dark gray background with white text and colored lines representing the metrics.

- **Background**:
  - **Visual description**: A futuristic, sci-fi environment with a character in the foreground and a cockpit-like setting in the background.
  - **Location**: Behind the "Display Settings" window.
  - **Contents**: The environment includes a character model, a cockpit interior, and a small TV screen displaying a character.

- **Interactive Elements**:
  - **"Inspect" Button**:
    - **Element type and label**: A button labeled "Inspect."
    - **Visual state**: Blue background with white text.
    - **Position**: Bottom-right corner of the screen.
    - **Styling details**: Rounded corners, solid blue background.

- **Other Elements**:
  - **"Open text-only overlay" Button**:
    - **Element type and label**: A button labeled "Open text-only overlay."
    - **Visual state**: White background with black text.
    - **Position**: Bottom-right corner of the screen, adjacent to the "Inspect" button.
    - **Styling details**: Rounded corners, solid white background.

### Visual Flow / Relationships
- **Most prominent visually**: The "Display Settings" window.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: The "Display Settings" window is the focal point, with the performance metrics and interactive elements surrounding it.

</details>

<p></p>



In mobile, once the Performance dialog is open, click the check box for **Show real-time metrics (RTM) overlay** to see the FPS and CPU metrics.

<details>
<summary>The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.</summary>

<p></p>

[The Performance dialog in a mobile world with Show real-time metrics (RTM) overlay selected.](../../image_data/d340da146f8867814b2df695013360ed0c8c4f06747daf1e944510ae7b25fa8b.md)

### Overview
The image displays a performance monitoring interface overlaid on a game environment. The interface includes metrics such as FPS and CPU usage, and options for real-time metrics display and trace capture. The game environment in the background features a nighttime setting with a red-roofed building, string lights, and a character control interface.

### Key Elements
- **Performance Overlay**: Located centrally, this is a dark blue rectangular box with rounded corners. Contains text and interactive elements.
  - **Title**: "Performance"
  - **Metrics Display**: "Show real-time metrics (RTM) overlay" with a checkbox next to it, which is checked.
  - **Trace Capture**: "Trace Capture" option with a dropdown menu labeled "Overview" and a "Start trace" button.
  - **Background**: Dark blue with white text and light blue accents.
- **Game Environment**: The background shows a nighttime scene with a red-roofed building, string lights, and a character control interface with a circular joystick on the left side.
- **Metrics Display**: Top bar showing "FPS 60" and "CPU 8.5" in white text on a black background.
- **Control Interface**: On the left, a circular joystick with a white circle in the center. On the right, a circular icon with a running figure and a paperclip symbol above it.

### Visual Flow / Relationships
- **Most Prominent Element**: The performance overlay is the focal point.
- **Spatial Relationships**: The overlay is centered over the game environment. The metrics display at the top acts as a header for the overlay. The control interface elements are positioned on either side of the screen, with the joystick on the left and the icon on the right.

</details>

<p></p>



### Scrubbing (web only)

With Scrubbing, you can review data that has recently appeared on the Performance panel (approximately 30 seconds of data) in detail. Click the **Inspect** button to open the Scrubbing view.

Click and drag the blue box at the top of the panel to the data you would like to review. This box represents a range, measured in frames. You can resize the box by clicking and dragging the handles on the sides of the box.

Below the Frame Time scrubber, a “zoomed-in,” detailed view is shown for each metric, spanning the frames covered by the blue box. By changing the range, you can choose whether to focus on a short span of time, or a broader view over a longer period.

<details>
<summary>The world with the detailed view of the Frame Time scrubber opened and a span selected.</summary>

<p></p>

[The world with the detailed view of the Frame Time scrubber opened and a span selected.](../../image_data/96f263c0512ef7efe5a14fd74116a6d72d5c557aecbb00239e4be5af99b19429.md)

### Overview
The image depicts a split-screen view. The upper portion shows a first-person perspective within a game environment, while the lower portion displays performance metrics and graphs related to frame time, CPU usage, physics, and scripting.

### Key Elements
- **Top Section (Game Environment)**:
  - **Visual description**: A first-person view of a character standing on a circular platform with a futuristic design.
  - **Location**: Top half of the image.
  - **Contents**: The character has dark hair tied back, wearing a black top and a skirt. The background features a rocky, alien landscape under a twilight sky.
  - **Visual styling**: The environment has a muted color palette with earthy tones and a soft glow from the horizon.

- **Bottom Section (Performance Metrics)**:
  - **Visual description**: A graphical interface showing various performance metrics.
  - **Location**: Bottom half of the image.
  - **Contents**: 
    - **Frame Time**: A green line graph labeled "Frame Time" with a target value of 14.0 ms, max of 23.88 ms, and min of 12.39 ms.
    - **CPU**: A blue line graph labeled "CPU" with a target value of 15.9% and max of 23.83%.
    - **Physics**: An orange line graph labeled "Physics" with a target value of 1.0 and max of 3.65.
    - **Scripting**: A yellow line graph labeled "Scripting".
  - **Visual styling**: The interface has a dark theme with light-colored text and lines for contrast.

### Visual Flow / Relationships
- **Most prominent visually**: The game environment in the top section.
- **Arrows/lines/connectors**: Horizontal lines connecting the metrics in the bottom section.
- **Spatial relationships**: The game environment is above the performance metrics, indicating a comparison between gameplay and performance data.

</details>

<p></p>



Click the **Back** button to return to the Performance panel.

## Tracing

With Tracing, you can capture performance data from your world to [view in Perfetto](Analyzing%20trace%20data%20with%20Perfetto.md). You can choose between three trace types:

* **Overview** - An overview trace can help set a baseline for how your world is performing in visit mode. It captures high-level data like FPS, CPU, and GPU. Additionally, overview provides a high-level capture of metrics like physics, rendering, and lighting to identify possible sources of performance impact and provide a direction for deeper investigation.
* **Deep** - A deep trace provides scripting information and metrics like draw calls. It’s best used for identifying specific performance improvements like optimizing physics, colliders, and tri/poly count of certain meshes as well as reducing draw calls in a particular area. Deep traces are the most commonly run because they can give more specific, actionable information when it comes to performance optimizations.
* **Playtest** - Playtest capture allows for up to 2 hours of gameplay to be recorded across multiple worlds without needing to be plugged in or running any special software. This type of trace can be taken on any build, anytime, anywhere. Playtest capture generates a report similar to the ones we use internally to track the performance of our hottest worlds and the performance of Horizon itself. Unlike other types of traces, which are viewable in Perfetto, the results of this trace are viewable on the [Horizon website](https://horizon.meta.com/creator/performance/reports). In general, playtest traces are best used for initial testing.

### Starting a trace

In the web browser, click the **Trace** button (red dot with white corner brackets) to open the Start a Trace window.

<details>
<summary>The world with the performance panel open, and the trace button highlighted.</summary>

<p></p>

[The world with the performance panel open, and the trace button highlighted.](../../image_data/51da81102d63c82041459f9869bdf55a32373d7447b867425192d26d192528ce.md)

### Overview
The image displays a performance monitoring interface overlaid on a virtual environment. The background features a scenic view with palm trees, rocks, and a sunset sky. The foreground contains a performance metrics dashboard with graphs and numerical data.

### Key Elements
- **Background Scene**: A virtual environment with palm trees, rocks, and a sunset sky. The scene includes a character standing on a platform.
- **Performance Dashboard**: Located at the bottom of the image, displaying performance metrics such as App Frame Time, Physics, and Audio.
- **Metrics Graphs**: Three line graphs showing fluctuations over time for App Frame Time, Physics, and Audio.
- **Performance Metrics Text**: 
  - **App Frame Time**: "16.5 avg (0.5s)" with a red dot indicating a target of 18.11ms.
  - **Physics**: "1.0 avg (0.5s)" with a target of 1.11ms.
  - **Audio**: "1.5 avg (0.5s)" with a target of 2.01ms.
- **Performance Overlay Button**: A small button with a camera icon located near the center of the dashboard.
- **Open Text-only Overlay Button**: Located on the right side of the dashboard.
- **Inspect Button**: Positioned next to the Open Text-only Overlay button.
- **Close Button**: A small 'X' icon in the top-right corner of the performance overlay.

### Visual Flow / Relationships
The most prominent visual element is the performance dashboard, which is centrally located at the bottom of the image. The background scene is static and serves as a backdrop. The performance metrics are arranged vertically, with the graphs stacked above the text metrics. The camera icon button is positioned centrally within the dashboard area, drawing attention to it. The spatial relationship is linear, with the metrics and graphs flowing from top to bottom.

</details>

<p></p>



Then click **Start capture** to begin a trace. While the trace is running, the Performance panel closes and a “Tracing in progress” panel appears in the lower left corner of the screen, showing the trace’s current status. You can add flags to a trace by clicking the **Flag** button on the panel while the trace is running.

<details>
<summary>The world with the Start a Trace window opened and the types of traces displayed.</summary>

<p></p>

[The world with the Start a Trace window opened and the types of traces displayed.](../../image_data/1ce399ada91e0787642ae230c83b2626bc9e1c778b40195487bb4610c5639ed9.md)

### Overview
The image displays a performance monitoring interface overlaid on a video game environment. The game scene shows a character standing on a boat in a serene, natural setting with water and rocks in the background. A floating dialog box titled "Start a trace" is prominently displayed in the foreground, offering options for different types of traces to run.

### Key Elements
- **Game Scene**: A character stands on a boat with a calm body of water and rocky terrain in the background. The boat has a modern design with wooden and metallic elements.
- **Dialog Box**: Positioned centrally, it has a dark background with white text and blue accents. It asks, "What type of trace do you want to run?" with three options listed:
  - **Overview**: Selected option, described as setting a baseline for world performance in visit mode.
  - **Deep**: Described as uncovering optimization opportunities.
  - **Playtest**: Best for initial testing, viewable only with Horizon tools.
- **Performance Metrics**: Located at the bottom left, showing real-time FPS, CPU usage, and audio latency metrics.
- **Navigation Bar**: At the bottom right, includes options like "Open text-only overlay" and "Inspect."

### Visual Flow / Relationships
The most prominent visual element is the dialog box, which draws attention due to its central placement and contrasting color scheme. The game scene serves as the backdrop, providing context. The performance metrics at the bottom offer additional information but are less visually dominant. The navigation bar at the bottom right suggests interactive elements within the interface.

</details>

<p></p>



In mobile, click the drop-down menu next to the **Start trace** button to select the type of trace you want to run. Click the **Start trace** button to begin a trace.

<details>
<summary>The Performance dialog showing the three trace types</summary>

<p></p>

[The Performance dialog showing the three trace types](../../image_data/47cb536321261bc678dc545956a495625e22aa68b3625b9d36e4f7a451ba6a62.md)

### Overview
The image depicts a user interface within a virtual environment, likely a game or simulation. The central focus is a modal dialog box providing information about different modes of operation. The background shows a stylized, cartoonish scene with a red barn, string lights, and a character in a running pose.

### Key Elements
- **Modal Dialog Box**: Located centrally, with a dark blue background and white text. Contains options labeled "Overview," "Deep," and "Playtest."
- **Text Content**: 
  - **Overview**: "Set a baseline for how your world performs in visit mode. Viewable in Perfetto."
  - **Deep**: "Uncover possible ways to optimize parts of your world. Viewable in Perfetto."
  - **Playtest**: "Best used for initial testing. Viewable only with Horizon tools."
- **Buttons**: 
  - A dropdown menu currently set to "Overview."
  - A blue button labeled "Start trace."
- **Background Scene**: A cartoon-style farm setting with a red barn, string lights, and a character in a running pose.
- **User Interface Elements**: Icons at the top left corner include a settings gear, a microphone with a slash through it, a smiley face, and a document icon. There's also a circular control element resembling a game controller on the left side.

### Visual Flow / Relationships
The most prominent visual element is the modal dialog box. The text content is arranged vertically within the box. The "Start trace" button is positioned to the right of the dropdown menu. The background scene is static and serves as a backdrop for the dialog box. The circular control element on the left suggests interactive functionality, possibly for camera movement or other controls.

</details>

<p></p>



### Stopping a trace

In the web browser, to end a trace early, click the **Stop** button at the top of the panel.

<details>
<summary>A zoomed-in view of the tracing screen, with the stop button highlighted.</summary>

<p></p>

[A zoomed-in view of the tracing screen, with the stop button highlighted.](../../image_data/0e3daf024f706e64735d7b2d27e71646c7e6cd00e58c4249af95096158c97bf9.md)

### Overview
This image depicts a user interface element showing progress and performance metrics during a tracing operation. The layout includes a status bar at the top, a progress indicator, and performance data displayed at the bottom.

### Key Elements
- **Status Bar**: Located at the top, it displays "Tracing in progress" in white text against a dark background.
- **Progress Indicator**: A small yellow square with a red dot indicating the current progress level ("11% full").
- **Progress Details**: Below the status bar, it states "Time on trace: 5.21 s" in white text.
- **Performance Metrics**: At the bottom, there are three numerical values labeled as FPS (frames per second): 58.0, 72.0, and 58.0.
- **UI Controls**: On the right side of the status bar, there are two icons: a circular play button and a flag with a downward arrow.

### Visual Flow / Relationships
The most prominent visual element is the status bar at the top. The progress indicator and its details are positioned directly beneath the status bar. The performance metrics are aligned horizontally at the bottom. The UI controls are placed to the far right of the status bar.

</details>

<p></p>



In mobile, to end a trace early, open the Performance dialog and click the **Stop trace** button.

<details>
<summary>The Stop trace button on the Performance panel</summary>

<p></p>

[The Stop trace button on the Performance panel](../../image_data/ff53dc703d9646eeae83f8f28a8a42d8476769d146710d47645cc96fbc62c8bc.md)

### Overview
The image depicts a user interface overlay titled "Performance" within a virtual environment. The overlay contains options related to performance metrics and data capture. The background shows a stylized, cartoonish outdoor setting with a house, trees, and a fence.

### Key Elements
- **Performance Overlay**: A dark blue rectangular box with rounded corners, located centrally in the foreground.
  - **Title**: "Performance" at the top.
  - **Options**:
    - **Show real-time metrics (RTM) overlay**: A checkbox option with the description "Shows performance metrics like FPS and more."
    - **Trace Capture**: Another option with the description "Capture in-depth performance data." Below this, there is a dropdown menu set to "Deep" and a red button labeled "Stop trace-5%."
  - **Close Button**: A small 'X' icon in the top-right corner of the overlay.

- **Background Scene**: A stylized outdoor scene with a house, trees, and a fence. The house has a red roof and yellow windows. There are decorative lights strung across the scene, and a character is depicted in a circular icon on the right side of the screen.

- **User Interface Controls**: At the top of the image, there are several icons representing different functions such as settings, pause, and others. On the left side, there is a circular control with a white dot in the center, likely for movement or interaction.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Performance" overlay is the most prominent visual element due to its central placement and larger size compared to the background.
- **Arrows and Lines**: No arrows or lines are present in the image.
- **Spatial Relationships**: The overlay is positioned over the background scene, which serves as the context for the performance metrics being displayed. The controls at the top are separate and do not interact with the overlay.

</details>

<p></p>



When a trace is completed in mobile or web, the results are uploaded to the [Developer Dashboard](https://developers.meta.com/horizon/manage/) in the Performance section.

## What’s next?

To learn more about Meta Horizon Worlds, try the following:

- [Create your first world](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-world/) using our step-by-step tutorial.
- If you have issues when running the desktop editor, see [Desktop Editor Troubleshooting](../../Desktop%20editor/Help%20and%20reference/Desktop%20editor%20troubleshooting.md)
- Learn about the desktop editor with the [Introduction to the Desktop Editor](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- Learn about the other tools available by reading our [Tools Overview](../../Get%20started/Tools%20overview.md).
- Join the [Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/) to learn about our program benefits.