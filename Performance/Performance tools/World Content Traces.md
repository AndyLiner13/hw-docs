Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-tools/world-content-traces

# World Content Traces

World content traces are a special type of [trace](Tracing.md) that allows you to get frame-by-frame details on your world’s performance and understand how the assets in your world might contribute to it. World content traces include data on:

* 3D models
* Textures
* Audio assets
* Colliders
* Lights

Unlike other types of trace data, you’ll use the Desktop Editor to view and analyze world content traces.

## Prerequisites

* [Enable the Utilities Menu](Enable%20the%20Utilities%20menu.md)

## Start a world content trace

- Look at your left wrist to bring up the wrist wearable.
- Select **Tracing**, then select **World Content**.
- Select **Start tracing** to start the trace.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/340f8a287f060d13e8daee586e865785f66a7b277b34555233d68702a098c7cf.md)
  
  ### Overview
  The image depicts a first-person view of a virtual environment, likely from a video game or simulation. The perspective suggests the viewer is standing on a tiled floor, looking out towards a horizon under a clear blue sky. The scene is minimalistic, with no significant objects or characters present.
  
  ### Key Elements
  - **Visual Description**: The image features a tiled floor with a grid pattern, rendered in shades of gray.
  - **Location**: The tiled floor occupies the lower portion of the image, extending towards the horizon.
  - **Contents**: The floor tiles are uniform in size and shape, forming a flat surface that meets a curved horizon line.
  - **Visual Styling**: The tiles have a subtle texture, suggesting a slightly rough or worn surface. The horizon line transitions smoothly into a gradient of blue, representing the sky.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The tiled floor is the most prominent feature, occupying the foreground.
  - **Spatial Relationships**: There are no arrows, lines, or connectors. The horizon line acts as a natural boundary, separating the ground from the sky.
  - **Reading Order**: The image does not suggest a specific reading order due to its static nature.
  
  </details>
  
  <p></p>
  
  
- Select **Stop trace** to stop the trace. After stopping the trace, a toast notification will appear to let you know that a data file has been uploaded.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b721663d1cfd962e572eed045d2d1c6c3e95f078a7653fbac136ff601dc2972f.md)
  
  ### Overview
  The image depicts a first-person view of a virtual environment, likely from a video game or simulation. The perspective suggests the viewer is standing on a tiled floor, looking out towards a vast open sky. The horizon is curved, giving a sense of depth and immersion.
  
  ### Key Elements
  - **Visual Description**: The image features a tiled floor with a grid pattern, suggesting a virtual space.
  - **Location**: The tiled floor occupies the lower portion of the image, extending towards the horizon.
  - **Contents**: The floor tiles are light gray with darker grays forming the grid lines.
  - **Visual Styling**: The tiles have a slightly reflective surface, as indicated by subtle highlights.
  
  - **Visual Description**: The sky occupies the upper portion of the image.
  - **Location**: The sky spans the entire width of the image above the horizon.
  - **Contents**: The sky is a gradient of blue, transitioning from a lighter shade at the horizon to a deeper blue higher up.
  - **Visual Styling**: The sky has a smooth gradient effect without any clouds or additional elements.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The tiled floor and the expansive sky dominate the scene.
  - **Arrows, Lines, Connectors**: There are no arrows, lines, or connectors in the image.
  - **Spatial Relationships**: The tiled floor is positioned below the horizon, which separates the floor from the sky. The horizon line curves gently, creating a sense of depth.
  
  </details>
  
  <p></p>
  
  

## View world content trace data

## Analyze world content trace data

### How to read a trace

- Use the **Frame Time** graph at the top to navigate between frames. You can drag the blue handles to adjust how many frames are covered in the metric graphs below.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/099b81ad1d5c692a17a1cff4ac5f91950aedf58316c274625e66ed079f65bb79.md)
  
  ### Overview
  The image depicts a user interface from a development environment, likely a game engine or similar software, showing performance metrics and asset management. The layout includes a sidebar with object hierarchies, a central performance monitoring area, and a properties panel on the right.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **SpawnPoint**
    - **SmoothCylinder**
    - **Cube**
    - **Cube**
  
  - **Central Performance Monitoring Area**:
    - **Time Graph**: A waveform graph labeled "Time" with a target value of 14.0 and a max value of 19.60. The graph spans frames from 5736 to 7771.
    - **GPU Graph**: Below the Time graph, another waveform graph labeled "GPU" with a target value of 13.9 and a max value of 19.44.
    - **Physics Graph**: Below the GPU graph, a waveform graph labeled "Physics" with a target value of 1.0 and a max value of 1.40.
    - **Scripting Graph**: Below the Physics graph, a waveform graph labeled "Scripting" with a target value of 1.5 and a max value of 2.10.
    - **Audio Graph**: Below the Scripting graph, a waveform graph labeled "Audio" with a target value of 1.5 and a max value of 2.10.
    - **Avatar Graph**: Below the Audio graph, a waveform graph labeled "Avatar" with a target value of 1.5 and a max value of 2.10.
    - **Calls Graph**: Below the Avatar graph, a waveform graph labeled "Calls" with a target value of 125.0 and a max value of 1000.0.
    - **Vertices Graph**: Below the Calls graph, a waveform graph labeled "Vertices" with a target value of 1000.0 and a max value of 1000.0.
  
  - **Properties Panel (Right Panel)**:
    - **Assets Tab**: Displays a list of mesh assets with columns for NAME, USED BY MEMORY, FORMAT, TRIANGLES COUNT, VERTEX COUNT, and MESH ASSET ID.
    - **Memory Tab**: Partially visible, likely related to memory usage statistics.
  
  - **Top Bar**:
    - Contains various icons and options such as play, pause, settings, and publish buttons.
    - Indicates the project name "Horizon Worlds - Blank World 2 (RC)".
    - Shows a timestamp of "5:59:45 PM".
  
  ### Visual Flow / Relationships
  - The most prominent visual elements are the waveform graphs in the central performance monitoring area.
  - There are no arrows or lines connecting elements, but the layout suggests a sequential reading order moving from left to right and then down the panels.
  - Elements are arranged in a grid-like structure within the panels, with the sidebar on the left, the performance monitoring area in the center, and the properties panel on the right.
  
  </details>
  
  <p></p>
  
  
- Read the performance metrics on the left of the trace to find frames with spikes or that don’t hit the performance targets. These are frames where the world might be encountering performance bottlenecks.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/693d3a4b29ce5e4c95cbae424260e7483f67675476c772e30d9667d6e384debe.md)
  
  ### Overview
  This image depicts a user interface from a development environment, likely a game engine or similar software, showing performance metrics and asset management. The layout includes a sidebar, a central performance graph, and a properties panel on the right.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a tree-like structure labeled "Hierarchy" with nodes such as "SpawnPoint," "SmoothCylinder," and "Cube." There’s also a search bar at the bottom.
  - **Performance Graph (Center)**: A large area displaying performance metrics over time. It has a timeline at the top with frame numbers and a graph showing various performance categories like "GPU," "Physics," "Scripting," "Audio," "Avatar," "Calls," "Vertices," and "Animation." Each category has a line representing its performance, with specific target and max values noted.
  - **Properties Panel (Right)**: Displays a list of mesh assets under the "Assets" tab. Columns include "NAME," "USED BY MEMORY," "FORMAT," "TRIANGLES," "VERTICES," and "COUNT." The "Mesh Assets" are listed with varying memory usage and geometry details.
  - **Top Bar**: Contains various icons and options such as "View," "Switch to VR," "Publish," and others related to project management and viewing modes.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the performance graph and the properties panel. The graph is centrally located, drawing attention due to its size and the highlighted section indicating a specific timeframe. The properties panel on the right provides detailed information about the assets, while the sidebar offers navigation through the project structure. The top bar provides quick access to different functionalities within the application.
  
  </details>
  
  <p></p>
  
  
- Select a specific frame by clicking on it on the performance graph.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/592ac78741989cfaad80356ca728a181e905ca7dc2f991f669ce067b363d4d75.md)
  
  ### Overview
  The image depicts a user interface of a performance monitoring tool within a development environment, likely for a game or application. The interface includes a timeline graph, a list of assets, and various performance metrics.
  
  ### Key Elements
  - **Timeline Graph**: Located centrally, showing a timeline with a highlighted segment marked by a blue rectangle. The timeline has a grid of frames (5736, 5817, etc.) and performance metrics such as "target" and "max" values.
  - **Performance Metrics**: Below the timeline, there are categories like GPU, Physics, Scripting, Audio, Avatar, Calls, and more, each with target and max performance values.
  - **Asset List**: On the right side, a list titled "Assets" displays mesh assets with columns for NAME, USED BY MEMORY, FORMAT, TRIANGLES, VERTICES COUNT, and VERTEX COUNT.
  - **Properties Panel**: On the far right, labeled "Properties," it prompts users to select an object to view its properties.
  - **Hierarchy Pane**: On the left, labeled "Hierarchy," it shows a tree structure with nodes like SpawnPoint, SmoothCylinder, Cube, etc.
  - **Top Bar**: Contains navigation options, a search bar, and various tool icons.
  
  ### Visual Flow / Relationships
  - The timeline graph is the most prominent visual element, drawing attention due to its highlighted segment.
  - The performance metrics and asset list are secondary but provide detailed information related to the timeline.
  - The hierarchy pane on the left provides context for the objects being monitored.
  - The properties panel on the right is designed for interaction, suggesting that users can click on specific assets to view detailed properties.
  
  </details>
  
  <p></p>
  
  
- Once you’ve selected a frame, the panel on the right will display a table of the objects or assets present in that frame.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/bcba437b919a2936ddd8a1c3bf2aeb55d8f73d5384d4d4fd581eef4365c702e7.md)
  
  ### Overview
  This image depicts a user interface from a development environment, likely related to game development or 3D modeling, showing performance metrics and asset management. The layout includes a sidebar, a performance graph, and a table listing assets.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a list of objects named "SpawnPoint," "SmoothCylinder," and "Cube." These appear to be nodes or entities within the project.
  - **Performance Graph (Center)**: A large area displaying performance metrics over time. It includes categories like "GPU," "Physics," "Scripting," "Audio," "Avatar," "Calls," and "Animations." Each category has a corresponding line graph showing performance targets and maximum values.
  - **Table (Right Panel)**: Titled "Assets," it lists mesh assets with columns for "NAME," "USED BY MEMORY," "FORMAT TRIANGLES," "VERTICES COUNT," and "COUNT." Each row represents a mesh asset with specific numerical values.
  - **Header Bar (Top)**: Contains various icons and options such as "Hierarchy," "Local Pivot," "View," "Switch to VR," and "Publish."
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the performance graph and the asset table. The graph is centrally located, while the asset table is positioned to the right. The sidebar on the left provides context for the assets listed in the table. There are no explicit arrows or lines connecting elements, but the layout suggests a logical flow from the sidebar to the performance graph and then to the asset table.
  
  </details>
  
  <p></p>
  
  
- Use the dropdown to navigate between asset categories.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/9e22bf81c802b6f8d3ca4444d9cbf548fd6722856a8c0b085e90a2e2331c6cd9.md)
  
  ### Overview
  The image depicts a user interface from a development environment, likely related to game development or 3D modeling, showing performance metrics and asset management. The layout includes a sidebar, a timeline graph, and a list of assets.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a list of objects named "SpawnPoint," "SmoothCylinder," and "Cube." These appear to be nodes or entities within the project.
  - **Timeline Graph (Center)**: Displays performance metrics over time, segmented into categories like GPU, Physics, Scripting, Audio, Avatar, Calls, Vehicles, and Animation. Each category has a corresponding graph line with peaks and troughs indicating performance targets and maximums.
  - **Performance Metrics (Bottom Left)**: Lists specific metrics such as target and max values for each category, e.g., "GPU target: 13.9," "max: 19.44."
  - **Asset List (Right Panel)**: Shows a list of mesh assets with columns for BYMEMORY, FORMAT, TRIANGLES, VERTICES, COUNT, and others. The list is filtered under "Mesh" and includes entries like "Mesh Asset 1 object..." with varying numbers of objects, triangles, vertices, and counts.
  - **Search Bar (Right Panel)**: Located above the asset list, labeled "Search 44 mesh assets."
  - **Tabs (Top Center)**: Includes tabs labeled "Assets," "Console," "Tests," and "Performance."
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The performance timeline graph in the center.
  - **Arrows/Connectors**: None visible.
  - **Reading Order**: The timeline graph is read from left to right, with the asset list on the right side providing additional information about the assets.
  
  </details>
  
  <p></p>
  
  
- Select the **Memory** tab to view how assets impact memory usage.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/6b3cfa1ba83f07f7facc74ec32b1f85379cfa5eeac2e573fbfdd7b132a6aedae.md)
  
  ### Overview
  This image depicts a user interface from a development environment, likely related to game development or 3D modeling, showing performance metrics and asset management. The layout includes a sidebar, a central performance graph, and a properties panel on the right.
  
  ### Key Elements
  - **Sidebar (Left Panel)**: Contains a list of objects or entities labeled as "SpawnPoint," "SmoothCylinder," "Cube," and others.
  - **Performance Graph (Center)**: A large area displaying performance metrics over time, segmented into categories like "GPU," "Physics," "Scripting," "Audio," "Avatar," "Calls," and "Animation." Each category has a line graph representing performance data.
  - **Properties Panel (Right Panel)**: Divided into two tabs: "Assets" and "Memory." The "Assets" tab lists assets with columns for "NAME," "USED BY," "ASSET TYPE," and "MEMORY STATUS." The "Memory" tab is currently active but empty.
  - **Search Bar**: Located at the top of the properties panel, allowing users to search through assets.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the performance graphs in the center, which guide the viewer's attention horizontally across the timeline. The sidebar on the left provides context for the assets being analyzed. The properties panel on the right offers detailed information about the assets, with the "Assets" tab currently in focus.
  
  </details>
  
  <p></p>
  
  
- Using the information in each table, you can identify assets to optimize or remove to increase performance.

#### Example 1: Memory

Let’s say you see a spike in memory for a particular frame.

- Using the **Performance** panel, navigate to the target frame and select the **Memory** tab on the right. In the **Memory** tab, you will see a list of assets that contributed to the frame’s memory usage, sorted by their size.
- Use this table to identify which textures, audio, or 3D models to optimize to reduce the memory load on your target device(s).

#### Example 2: Rendering

Let’s say you see a spike in the draw calls and verts metrics for a particular frame.

- Using the **Performance** panel, navigate to the target frame. The panel on the right will display a list of 3D models that present in the selected frame, sorted by number of vertices. You can also use the dropdown to view other asset categories like textures and lights that may have contributed to the frame’s high draw call values.
- Use these tables to identify which assets to optimize to reduce the rendering load on your target device(s).

### Other tips

* Some assets have long names that don’t fit in the table’s cell. Hovering over an asset shows the full asset name.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/0c01aadd5dd546ad89e2301bb67ef31631c48a6057e84080f5ca680c532fd7cd.md)
  
  ### Overview
  This image depicts a screenshot of a Unity Editor interface, specifically showing a performance analysis tool within the editor. The main focus is on a timeline graph displaying various metrics such as time, frames, audio, and calls. There are also panels for assets and memory usage on the right side, and a 3D scene preview at the top.
  
  ### Key Elements
  - **Timeline Graph**: Located centrally, with multiple horizontal bars representing different metrics over time. The bars are labeled with metrics like "Time," "Frames," "Audio," and "Calls." Each bar has a target value indicated above it.
  - **3D Scene Preview**: At the top, showing a simple 3D environment with a blue sky and a flat ground plane.
  - **Asset Panel**: On the right, under the "Assets" tab, listing audio assets with names, used by objects, memory usage, and audio type length.
  - **Memory Tab**: Next to the Asset tab, showing similar information but for memory usage.
  - **Search Bar**: Above the asset list, allowing users to search for specific assets.
  - **Navigation Pane**: On the left, showing a hierarchical view of the project with nodes like "SpawnPoint," "SmoothCylinder," and "Cube."
  
  ### Visual Flow / Relationships
  The most prominent visual element is the timeline graph, which draws attention due to its central placement and the highlighted area indicating a specific segment of interest. The 3D scene preview is less interactive but serves as a visual reference for the environment being analyzed. The asset panel and memory tab provide supplementary information related to the performance data shown in the timeline.
  
  </details>
  
  <p></p>
  
  
* The table allows you to see which objects use a particular asset. Hovering over a cell in the “Used by” column shows which objects use that asset.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/0b086034e215c589af67da624513e7f08500c1aecbe924cdfaff482ad2a7e166.md)
  
  ### Overview
  This image depicts a screenshot of a Unity Editor interface, specifically showing the Performance tab within the Unity Editor window. The interface includes a 3D scene preview at the top, a timeline graph in the middle, and various panels displaying performance metrics and asset information on the right side.
  
  ### Key Elements
  - **Top Section**: 
    - **Scene Preview**: A 3D scene with a blue sky and a flat ground plane is displayed in the center. The scene is rendered in a wireframe style.
    - **Tabs**: Below the scene preview, there are tabs labeled "Assets," "Console," "Tests," and "Performance." The "Performance" tab is currently active.
    - **Timeline Graph**: A timeline graph is shown below the tabs, with a highlighted section in blue indicating a specific time range. The graph displays performance metrics over time, with labels such as "target," "max," and "frames."
  
  - **Left Panel**: 
    - **Hierarchy**: On the left, there is a hierarchical list of objects in the scene, including "SpawnPoint," "SmoothCylinder," and "Cube."
  
  - **Right Panel**: 
    - **Assets Tab**: This tab is divided into "Audio" and "Memory" sections. The "Audio" section contains a list of audio assets with columns for "NAME," "USED BY," "MEMORY," and "AUDIO TYPE LENGTH." The highlighted row shows an audio asset named "ui_MagicalCI" being used by one object with a memory usage of 100834 bytes.
    - **Search Bar**: There is a search bar within the "Assets" tab for searching audio assets.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The timeline graph in the middle of the screen is the most prominent element due to its size and the highlighted section.
  - **Arrows/Connectors**: There are no arrows or connectors visible in the image.
  - **Spatial Relationships**: The elements are arranged in a grid-like structure with the scene preview at the top, the timeline graph in the middle, and the asset information on the right. The left panel is a sidebar containing the hierarchy list.
  
  </details>
  
  <p></p>
  
  
* You can select the header of a column to sort the table by that column. For example, selecting the **Triangles** column sorts the table by the number of triangles.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/a7d5591dc422e565e2ee6f63730ec6bfabbb2dcb43540b7ec7128af8e40ab05c.md)
  
  ### Overview
  This image depicts a user interface from a software application, likely a development environment for creating or editing 3D models or animations. The interface includes a timeline view showing performance metrics over time, a list of mesh assets, and a preview window displaying a 3D scene.
  
  ### Key Elements
  - **Timeline View**: Located centrally, showing performance metrics such as time, frames, and calls. The timeline has a blue highlighted area indicating a specific segment of interest.
  - **Mesh Asset List**: Positioned to the right of the timeline, listing mesh assets with columns for name, used by, memory format, triangle vertices count, and vertex count.
  - **3D Scene Preview**: At the top, showing a 3D environment with a sky and terrain.
  - **Hierarchy Panel**: On the left side, displaying a list of objects or nodes named "SpawnPoint," "SmoothCylinder," and others.
  - **Properties Panel**: On the right side, currently empty but labeled for selecting an object to view its properties.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the timeline view, which draws attention due to its central placement and the highlighted area. The mesh asset list is secondary but important for understanding the performance data. The 3D scene preview provides context for the project being worked on. The hierarchy panel offers navigation through the project structure, while the properties panel is designed for inspecting individual elements.
  
  </details>
  
  <p></p>
  
  
* Use the search feature to find assets or filter through certain characteristics by name. For example, typing “box” shows rows that contain cells with the string “box”.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/f7d8832e00130c0fa0a54415390f15cdc2ea20dba50ffcc7398646dded4a0695.md)
  
  ### Overview
  This image depicts a user interface from a development environment, likely a game engine such as Unity, showing a performance analysis tool. The interface includes a 3D view window, performance metrics, and a list of assets related to colliders.
  
  ### Key Elements
  - **3D View Window**: Located at the top-center, displaying a simple 3D scene with a blue sky and a flat ground plane.
  - **Performance Metrics**: Below the 3D view, there are multiple performance graphs labeled with categories like "Time," "Frames," "Audio," "Calls," and "On." Each graph has a target value indicated above it.
  - **Search Bar**: Positioned near the bottom-left, containing a search query "box" and a dropdown menu labeled "Collider."
  - **Asset List**: On the right side, under the "Assets" tab, a list of "Box collider" entries is displayed, indicating the number of objects using each collider and whether it is dynamic.
  - **Properties Panel**: On the far right, currently empty, suggesting no object is selected for property viewing.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the 3D view window, which draws attention due to its central placement. The performance metrics are arranged vertically below the view window, providing a clear hierarchy of information. The asset list and properties panel are secondary elements, placed on the right side of the interface.
  
  </details>
  
  <p></p>
  
  