Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/world-capacity

# World Capacity dialog

## Viewing the World capacity guidelines dialog

The World capacity guidelines dialog shows you how close your world is to meeting or exceeding the capacity limits of a World. To access the World Capacity dialog, open the **Main Menu** and select **World Capacity**.

<details>
<summary>World Capacity menu item</summary>

<p></p>

[World Capacity menu item](../../../../images/output/img_20251211_052908_20251211_052908.md)

### Overview
This image depicts a menu interface with a list of options. The focus is on a highlighted option labeled "World Capacity," which is selected among other menu items.

### Key Elements
- **Visual description**: The menu has a dark background with light-colored text.
- **Location**: The "World Capacity" option is located in the center of the menu.
- **Contents**: The text reads "World Capacity."
- **Visual styling**: The text is white, and the background of the "World Capacity" option is highlighted with a yellow border.

### Visual Flow / Relationships
- **Most prominent visually**: The "World Capacity" option is highlighted with a yellow border, drawing attention to it.
- **Spatial relationships**: The highlighted option is surrounded by other menu items such as "Keyboard Shortcuts," "Player Settings," and "Report a Problem." There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving downward.

</details>

<p></p>



The World capacity guidelines dialog shows you the used capacity, as a percentage, of four major categories: Objects, Simulation and animation, World vertex count, and Sounds. If you at more than 75% of the capacity limit for any of these categories, you will see a yellow bar for the category. If you are at more than 100% of the capacity limit for any of these categories, you will see a red bar and an error message.

Note

 The World vertex count category is incorrectly named in the dialog as world tricount. This will be fixed soon.

<details>
<summary>World capacity dialog</summary>

<p></p>

[World capacity dialog](../../../../images/output/img_20251211_053006_20251211_053006.md)

### Overview
The image displays a user interface showing world capacity guidelines for a simulation environment. It includes various metrics such as object count, simulation and animation performance, dynamics, triggers, VFX, world vertex count, and sounds. Each metric has a progress bar indicating its current usage percentage.

### Key Elements
- **Title**: "World capacity guidelines" at the top.
- **Progress Bars**: Horizontal bars representing the usage of different categories.
    - **Objects**: Progress bar showing 4% usage.
    - **Simulation and animation**: Progress bar showing 7% usage.
    - **Dynamics**: Progress bar showing 0% usage.
    - **Triggers**: Progress bar showing 0% usage.
    - **VFX**: Progress bar showing 7% usage.
    - **World vertex count**: Progress bar showing 39% usage.
    - **Sounds**: Progress bar showing 0% usage.
- **Text**: Descriptions and percentages next to each category.
- **Information Box**: A message at the top suggesting testing live environments for accurate performance measurements.
- **Documentation Link**: A clickable link labeled "Documentation" within the information box.

### Visual Flow / Relationships
The layout is structured with clear headings and corresponding progress bars. The most prominent elements are the progress bars, which are arranged vertically. There are no arrows or lines connecting the elements, but the information box at the top provides additional context.

</details>

<p></p>


*World capacity dialog*

<details>
<summary>World capacity with Sounds at yellow</summary>

<p></p>

[World capacity with Sounds at yellow](../../../../images/output/img_20251211_053109_20251211_053109.md)

### Overview
This image is a screenshot of a user interface displaying world capacity guidelines. It includes various performance metrics and their respective percentages. The layout is structured with a header, a notification bar, and several progress bars indicating usage across different categories.

### Key Elements
- **Header**: "World capacity guidelines" at the top.
- **Notification Bar**: A light gray box with an informational icon and text stating, "For accurate performance measurements, test your world live and use real-time metrics." There is a clickable "Documentation" link next to the text.
- **Objects**: A progress bar showing 4% usage.
- **Simulation and animation**: A progress bar showing 7% usage.
- **Dynamics**: Two progress bars side-by-side, both showing 0% usage labeled as "Physics" and "Triggers."
- **VFX**: Two progress bars side-by-side, both showing 0% usage labeled as "Texts" and "Players."
- **World vertex count**: A progress bar showing 39% usage.
- **Sounds**: A progress bar showing 81% usage.

### Visual Flow / Relationships
The most prominent visual elements are the progress bars, which are arranged vertically. Each category has its own progress bar, and the percentages are displayed to the right. The notification bar is positioned above the categories, providing additional information.

</details>

<p></p>


*World capacity dialog with Sounds at yellow*

<details>
<summary>World capacity with vertex count at 407% and error message</summary>

<p></p>

[World capacity with vertex count at 407% and error message](../../../../images/output/img_20251211_053158_20251211_053158.md)

### Overview
This image displays a user interface window titled "World capacity guidelines." It provides performance metrics and warnings related to world object limits. The layout includes progress bars, percentages, and a warning message.

### Key Elements
- **Title bar**: "World capacity guidelines" at the top.
- **Progress Bar for Objects**: Located under the title, showing a blue progress bar with a percentage next to it (4%).
- **Progress Bar for Simulation and Animation**: Below the objects bar, also a blue progress bar with a percentage (7%).
- **Dynamics Section**: Includes "0%" for both Physics and Texts.
- **Triggers Section**: Displays "0%" for both Triggers and Players.
- **VFX Section**: Shows "0%" for both VFX and Players.
- **World vertex count**: Displays "407%" with a red progress bar indicating a high vertex count warning.
- **Warning Message**: A red box with a minus sign stating, "You can no longer spawn objects. Your scene exceeds the vertex capacity."

### Visual Flow / Relationships
The most prominent visual elements are the progress bars and the warning message. The layout follows a vertical progression, with each section clearly delineated and labeled. Arrows or lines are not present, but the order suggests a sequential reading from top to bottom.

</details>

<p></p>


*World capacity with vertex count at 407% and error message*

## Understanding capacity limits

The capacity limits shown in this dialog are a quick snapshot of the current capacity of your world. There are other factors related to world capacity that are not shown in this dialog. To understand world capacity in more detail, see [Performance limits for a world](../../Performance/Performance%20limits%20for%20a%20World.md).

### Objects

The objects category is the number of objects in your world that contain a mesh. The hard limit for these objects is 3000.

### Simulation and animation

The simulation and animation category is a shared bucket of objects related to simulation and animation. These objects are counted based on estimated simulation time, with a total limit of 4.2ms. They include:

* **Dynamics** - Each dynamics (moving) object counts as 0.0121ms.
* **Triggers** - Each trigger object counts as 0.002ms.
* **VFX** - Each VFX object has its own estimated simulation time, from 0.0059ms to 0.1ms.
* **Physics** - Each physics object counts as 0.008ms.
* **Texts** - Each text object counts as 0.0035ms.
* **Players** - The estimated simulation time for the [maximum allowed players](../Settings/Player%20Settings%20Modification.md) in the world, ranging from 0.0ms for 1-4 players up to 2.8ms for 20-32 players.

### World vertex count

The world vertex count is the number of vertices currently rendered in your world. This includes all the vertices in your world, even the ones that may be culled by being out of view. You can have at most 125,000 vertices in a world.

You can reduce vertices by using simpler meshes. See the section for “Highly detailed meshes” in [GPU best practices](../../Performance/Performance%20best%20practices/GPU%20best%20practices.md#highly-detailed-meshes).

### Sounds

The sounds category counts the memory used by sounds in your world. The hard limit for this category is 15,000 kilobytes.