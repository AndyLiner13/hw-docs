Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/performance-scrubbing

# Performance Scrubbing

Horizon’s scrubbing feature enables you to analyze performance events in your world. This testing procedure will help you identify events that are causing slowdowns and will provide important clues on what to do. Scrubbing can help you solve performance problems by making it possible to selectively step through and analyze graphical data displayed in the Performance Metrics panel. This data includes metrics for frame time (FPS), GPU time, scripting, physics workload, other users building in Horizon, and more. These graphs are compiled from the last several thousand frames, about 30 seconds while playing at target FPS. Scrubbing adds the ability to inspect the graphs and test the data in the following ways:

* Select a range of frames from the total recorded.
* Move and resize the selected range.
* For all metrics, select an individual frame to see the value at that frame.
* Determine which metrics are above their target value, including when that happened.
* Expand metrics to see metadata, such as the average, minimum, maximum, and target values.

This scrubbing procedure can be done from within Virtual Reality (VR). You don’t have to take off your VR headset, and you don’t have to use passthrough. This will allow you to analyze and test performance and regressions easier and more efficiently.

## Use case

You’re testing a new weapon in your world, so you have the real time metrics panel open. When you fire the weapon, you notice that your frame time graph spikes, revealing a slow down in your world’s performance. To find out why this may have happened, you click “inspect” and open the scrubbing panel. You look for the spike in frame time, adjusting the scrubber to highlight the frame where it occurred. You scroll through other metrics, noticing that there is a spike in the scripting metric. Scrubbing has given you a clue that you should check the scripts for the new weapon and work on their performance to fix the spike.

## How to perform a scrubbing test

Follow this procedure to perform a scrubbing test to analyze the data provided in the **Real-time Performance Metrics** panel:

- Open the **Personal UI** (PUI).
- Click **Settings**.
- Select the **Utilities** menu if it’s not already on.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/7b8e19c98809c2504c1a256bd4e445823bbb6cc2805c086eed4b5813017d2066.md)
  
  ### Overview
  This image depicts a user interface from a virtual environment, likely a social or gaming platform. It includes a settings menu, profile information, and a party creation feature. The layout suggests a mix of interactive elements and informational panels.
  
  ### Key Elements
  - **Profile Panel (Left)**: 
    - **Visual description**: A rectangular panel with rounded corners.
    - **Location**: Left side of the image.
    - **Contents**: Displays a character avatar labeled "bertogonz3000," with a message "Today I am..." partially visible. Below the avatar, there are options labeled "My items" and "Profile."
    - **Visual styling**: The background is white with a subtle shadow effect, and the text is black with a slight glow.
  
  - **Settings Menu (Center)**: 
    - **Visual description**: A large rectangular panel with rounded corners.
    - **Location**: Center of the image.
    - **Contents**: Contains a title "Settings" with a gear icon. Below the title, there are tabs labeled "General," "Gameplay," "Sound," "Safety & wellbeing," "Legal," and "Utilities." The "Utilities" tab is highlighted, indicating it is currently active. There is also a toggle switch for enabling the utilities menu.
    - **Visual styling**: The background is white, and the text is black with a slight glow. The tabs have a blue outline when hovered over.
  
  - **Party Creation Panel (Right)**: 
    - **Visual description**: A rectangular panel with rounded corners.
    - **Location**: Right side of the image.
    - **Contents**: Displays a list of users with their names and status ("Active"). At the top, there is a button labeled "Create a party."
    - **Visual styling**: The background is white with a subtle shadow effect, and the text is black with a slight glow.
  
  - **Bottom Navigation Bar**: 
    - **Visual description**: A horizontal bar with icons and a gear icon.
    - **Location**: Bottom center of the image.
    - **Contents**: Contains icons for location, star, group, and settings, with a notification badge showing "2" next to the group icon.
    - **Visual styling**: The background is a gradient of dark purple shades, and the icons are white with a slight glow.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The central settings menu.
  - **Arrows, lines, connectors**: None.
  - **Spatial relationships**: The panels are arranged horizontally, with the profile panel on the left, the settings menu in the center, and the party creation panel on the right. The bottom navigation bar spans the width of the screen below the panels.
  
  </details>
  
  <p></p>
  
  
- Travel to a world that you can use as a test, such as Super Rumble or Arena Clash.
- After it loads, look at your avatar’s wrist. Turn your wrist to make the wearable appear. This  wearable is a hands-free tablet-like device that displays the **Utilities** menu.
- On the **Utilities** menu, select **Real-time metrics**. The **Real-time Performance Metrics** panel will then open.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cd4c881ed4c91e43e2f2578028a4ee1cdba729892e4172a40672ab8c35caa548.md)
  
  ### Overview
  The image displays a user interface overlaying a game environment. It includes performance metrics, utility options, and a notification card. The performance metrics show FPS, CPU, and GPU statistics. Utility options include "Real-time metrics" and "Tracing." A notification card for "Arena Clash" is also visible.
  
  ### Key Elements
  - **Performance Metrics Panel**: Located on the left side, showing various performance metrics such as FPS, CPU, and GPU. The FPS value is highlighted in red.
  - **Utilities Menu**: Positioned centrally, offering options like "Real-time metrics" and "Tracing."
  - **Notification Card**: On the right, displaying "Arena Clash," the time "1:22 PM," and a "New" badge with a red dot indicating unread notifications.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the performance metrics panel and the utilities menu. The notification card is less prominent but still noticeable due to its bright blue color and the "New" badge. There are no arrows or lines connecting these elements, suggesting a flat layout without a specific reading order.
  
  </details>
  
  <p></p>
  
  
- Perform an action to start compiling metrics that you can analyze. For example, you could pick up a weapon and shoot it, use your Super Power, or shoot a drone. As a result, you might see spikes in some of the real-time graphs or other details indicating activity.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/4f338b98824f3c1d327d02b1c9631f64ab658ceaba608aac633d4cc592355662.md)
  
  ### Overview
  This image depicts a first-person view of a player holding a futuristic-looking weapon, likely in a video game environment. The weapon emits bright green laser beams, and the scene includes a dark, possibly alien or underwater setting with glowing elements.
  
  ### Key Elements
  - **Weapon**: A handheld device with a digital display showing the number "9". The device has a rectangular shape with a small screen and a few buttons or dials.
  - **Laser Beams**: Bright green laser beams extend outward from the weapon, creating a starburst effect.
  - **Background**: A dark, textured surface resembling a cave or underwater environment. There are faint, glowing structures or creatures in the background.
  - **Player's Hands**: Partially visible at the bottom of the frame, suggesting the perspective is from the player's viewpoint.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the weapon and its laser beams, which draw attention due to their brightness and dynamic nature. The background elements provide context but are less distinct. The laser beams create a sense of action and movement, implying the player is actively engaging with the environment.
  
  </details>
  
  <p></p>
  
  
- After you’ve put some data into the **Performance Metrics** panel, select the **Inspect** button, and scroll down to see the available metrics. Notice that spikes from the real-time graph  also appear here.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/af68aa2aa905a25c7b6fc1cee32ea8b45c9f9689009c888c221f560c3d98bb50.md)
  
  ### Overview
  This image displays a performance metrics window overlaid on a game environment. The window contains various performance indicators such as FPS, CPU usage, GPU usage, and wait times for GPU operations. The layout is structured with each metric having its own section, accompanied by graphs and numerical data.
  
  ### Key Elements
  - **FPS Section**: Located at the top left, this section shows the current FPS value (60) against a target of 72 and a maximum of 60. It includes a red graph line representing the FPS over time.
  - **CPU Section**: Positioned below the FPS section, this area displays the average CPU usage (16.8 ms) along with a target of 13.9 ms and a maximum of 20.58 ms. A blue graph line illustrates the CPU usage over time.
  - **GPU Section**: Situated beneath the CPU section, this part shows the average GPU usage (9.7 ms) alongside a target of 13.9 ms and a maximum of 10.03 ms. A purple graph line tracks the GPU usage.
  - **Wait for GPU Section**: At the bottom, this section indicates the average wait time for GPU operations (0.4 ms) with a target of 1.0 ms and a maximum of 1.48 ms. A cyan graph line visualizes the wait times.
  - **Graphs**: Each metric has a corresponding graph line that fluctuates over time, represented by a series of peaks and troughs.
  - **Inspect Button**: Located at the bottom right corner, this button is labeled "Inspect" and likely allows users to delve deeper into specific metrics.
  - **Settings Icon**: Found at the top right, this icon suggests the ability to adjust settings related to the performance metrics display.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the graph lines, which are the focal points of each metric section. The graphs are arranged vertically, with each one corresponding to a specific performance metric. The FPS section is the first to be read, followed by CPU, GPU, and then Wait for GPU. There are no arrows or lines connecting the sections, but the order of presentation implies a logical progression from general performance (FPS) to more specific components (CPU, GPU).
  
  </details>
  
  <p></p>
  
  
- Now you can use scrubbing to evaluate the data to identify where the performance problems are coming from. Here’s how to use scrubbing to test performance issues:

  - Adjust the viewing range by clicking and dragging the sides of the blue range selector in the **Frame Time** header graph. This will change the data displayed in the graph.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/14799c0526bb3a34627670a672dd29e2d81ff7ac6ba7509af4b19a95a3d5680d.md)
    
    ### Overview
    This image depicts a performance metrics interface, likely from a development tool or game engine, showing frame time data and scripting and audio metrics. The interface includes graphs, numerical data, and interactive elements.
    
    ### Key Elements
    - **Performance Metrics Section**: Located at the top, this area displays frame time metrics with a green line graph representing frame times over time. The graph has numerical markers along the x-axis indicating frame numbers. The y-axis shows frame times in milliseconds.
      - **Visual description**: Green line graph.
      - **Location**: Top section of the interface.
      - **Contents**: Frame Time, target: 14.0, max: 251.67, min: 9.72.
      - **Visual styling**: Dark background with light green graph line, white numerical markers.
    
    - **Scripting Metrics Section**: Located below the Performance Metrics section, this area shows scripting metrics with a yellow line graph.
      - **Visual description**: Yellow line graph.
      - **Location**: Below the Performance Metrics section.
      - **Contents**: Scripting metrics include average, target, maximum, and minimum values.
      - **Visual styling**: Dark background with light yellow graph line, white numerical markers.
    
    - **Audio Metrics Section**: Located at the bottom, this area shows audio metrics with a line graph.
      - **Visual description**: Line graph.
      - **Location**: Bottom section of the interface.
      - **Contents**: Audio metrics include average, target, maximum, and minimum values.
      - **Visual styling**: Dark background with light gray graph line, white numerical markers.
    
    - **Interactive Elements**: There are buttons and controls for navigating through the data.
      - **Visual description**: Buttons and controls.
      - **Location**: Center of the interface.
      - **Contents**: Buttons labeled with symbols (play, pause, rewind, fast forward).
      - **Visual styling**: White buttons with black symbols.
    
    - **Icons**: Small warning icons appear next to the scripting and audio metrics sections.
      - **Visual description**: Warning icons.
      - **Location**: Next to the scripting and audio metrics sections.
      - **Contents**: Triangle warning icons.
      - **Visual styling**: White triangle on a red background.
    
    ### Visual Flow / Relationships
    The interface is organized into distinct sections, each with its own graph and metrics. The graphs are horizontally aligned, and the numerical markers provide a reference for the timeline. The interactive elements are centrally located, facilitating navigation through the data. The warning icons draw attention to potential issues within the metrics.
    
    </details>
    
    <p></p>
    
    
  - Move the range selection without changing its size by hovering over the middle of the blue range selector and grabbing and dragging it. This will change how the data is displayed in the graph.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/b63b10560b5b2f18526b65da6e45be00f568705c7fa1222bc248deae41c85889.md)
    
    ### Overview
    The image displays a graphical user interface (GUI) window with a timeline and various data visualizations. The timeline is marked with numerical timestamps along the x-axis, and there are multiple lines representing different data series. A cursor is pointing at a specific point on the graph, indicating a particular frame number and latency value.
    
    ### Key Elements
    - **Timeline**: Located horizontally across the middle of the GUI. Contains numerical timestamps such as 21533, 21742, 22160, etc.
    - **Data Series**: Two main lines are visible, one green and one orange, representing different metrics over time.
    - **Cursor**: A white arrow points to a specific frame number (22565) and latency value (0.616 ms) on the orange line.
    - **Frame Counter**: Below the timeline, labeled "frames," with numbers like 22336, 22394, etc.
    - **Latency Values**: Small text boxes showing latency times (e.g., 0.616 ms, 0.624 ms) near the cursor.
    - **Play Controls**: A small set of icons at the bottom left, including play, pause, and step controls.
    - **Background**: A blurred scene with indistinct shapes and colors, suggesting a virtual environment or game setting.
    
    ### Visual Flow / Relationships
    - **Most Prominent Element**: The cursor and the highlighted frame number and latency value.
    - **Arrows/Connections**: The cursor arrow points directly to the specific frame and latency value.
    - **Spatial Relationships**: The timeline spans the width of the GUI, with the data series and frame counter below it. The play controls are positioned at the bottom left.
    
    </details>
    
    <p></p>
    
    
  - Reduce the vertical height of the graphs to allow for more graphs in one view by clicking on the metric metadata next to the graphs.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/da30667b5ba53d88ef76c8303344872f41f1b02ab4a494a0b7e0e8b6083e19b0.md)
    
    ### Overview
    This image depicts a performance metrics overlay within a game interface. It displays various metrics related to frame time, scripting, audio, and avatar performance. The overlay includes graphs, numerical data, and interactive elements such as buttons and dropdowns.
    
    ### Key Elements
    - **Performance Metrics Header**: Located at the top, labeled "Performance Metrics."
    - **Frame Time Graph**: A horizontal line graph showing frame times over a timeline. The graph has a green line representing the frame time, with a blue highlighted area indicating a specific segment.
    - **Timeline**: A horizontal axis labeled with numerical values representing frames.
    - **Metric Exceeds Target Value Tooltip**: A tooltip appears near the timeline, stating "Metric exceeds target value," pointing to a specific point on the graph.
    - **Scripting Section**: Contains numerical data under the heading "Scripting," including average, target, max, and min values.
    - **Audio Section**: Similar to the Scripting section, contains numerical data under the heading "Audio."
    - **Avatar Section**: Contains numerical data under the heading "Avatar."
    - **Back Button**: Located at the bottom right corner, labeled "Back."
    
    ### Visual Flow / Relationships
    The most prominent visual element is the Frame Time graph, which spans across the entire width of the overlay. The timeline below the graph provides context for the frame numbers. The Metric Exceeds Target Value tooltip draws attention to a specific issue in the frame time data. The sections for Scripting, Audio, and Avatar are stacked vertically beneath the Frame Time graph, each containing numerical data relevant to those metrics.
    
    </details>
    
    <p></p>
    
    
  - View the value of all metrics at that frame by clicking a frame in the graphs in the metrics list.
  - To move forward and backward by a set number of frames, use the **Forward** and **Backward** buttons above the graphs.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/44266abcd5af7682eef3fef5e6a3314450d17b0b18fb7e5cb778c2da18513374.md)
    
    ### Overview
    This image depicts a performance metrics overlay within a video game interface. It includes graphs and data related to frame time, scripting, and audio performance metrics. The layout is structured with multiple sections, each containing specific performance data and visual indicators.
    
    ### Key Elements
    - **Frame Time Graph**: Located at the top, this graph shows a timeline with a green line representing frame times over time. A blue highlighted area indicates a specific segment of interest.
    - **Scripting Metrics**: Below the Frame Time graph, there’s a section labeled "Scripting" with numerical values indicating average, target, max, and min frame times.
    - **Audio Metrics**: Further down, there’s another section labeled "Audio," similar to the Scripting section, displaying numerical values for audio performance metrics.
    - **Timeline**: A horizontal timeline runs across the middle of the interface, marked with frames and specific timestamps.
    - **Play Controls**: Positioned above the timeline, there are play controls (play, pause, step forward, step backward) indicating interactive functionality.
    - **Performance Data Points**: Specific performance data points are shown as tooltips on the timeline, such as "0.171 ms" and "1.161 ms."
    
    ### Visual Flow / Relationships
    The most prominent visual elements are the Frame Time graph and the timeline. The timeline serves as a reference for the play controls and performance data points. The play controls imply a sequential reading order, moving from left to right along the timeline.
    
    </details>
    
    <p></p>
    
    
  - Move a graph around your view by grabbing the white bar beneath the panel.
- When you’ve finished analyzing the data, you can return to the **Performance Metrics** panel again by clicking the **Back** button, or you can close the performance tools entirely by clicking **X**.