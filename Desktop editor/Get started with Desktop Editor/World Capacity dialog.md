Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/world-capacity

# World Capacity dialog

## Viewing the World capacity guidelines dialog

The World capacity guidelines dialog shows you how close your world is to meeting or exceeding the capacity limits of a World. To access the World Capacity dialog, open the **Main Menu** and select **World Capacity**.

<details>
<summary>World Capacity menu item</summary>

<p></p>

[World Capacity menu item](../../image_data/33accbd5c4e75e1ab065f3bcdb1d11fc6a10143d338c0e7a0c45cc2e56d6afbb.md)

### Overview
This image depicts a menu interface with a list of options. The options are presented as clickable items with varying background colors and text alignment. The highlighted option, "World Capacity," stands out due to its darker background compared to the others.

### Key Elements
- **Visual description**: The menu items are rectangular blocks with rounded corners.
- **Location**: The items are arranged vertically.
- **Contents**: 
    - "Keyboard Shortcuts"
    - "Player Settings"
    - "World Capacity" (highlighted)
    - "Report a Problem"
- **Visual styling**: The background colors vary, with "World Capacity" having a darker shade compared to the others. The text is white across all items.

### Visual Flow / Relationships
- **Most prominent visually**: "World Capacity" is highlighted, drawing attention.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: Items are stacked vertically, with no overlapping or connecting lines.

</details>

<p></p>



The World capacity guidelines dialog shows you the used capacity, as a percentage, of four major categories: Objects, Simulation and animation, World vertex count, and Sounds. If you at more than 75% of the capacity limit for any of these categories, you will see a yellow bar for the category. If you are at more than 100% of the capacity limit for any of these categories, you will see a red bar and an error message.

Note

 The World vertex count category is incorrectly named in the dialog as world tricount. This will be fixed soon.

<details>
<summary>World capacity dialog</summary>

<p></p>

[World capacity dialog](../../image_data/2b3cbd091d1d047c6951a7acb311c650c535fdfe84bdb7f88f0b75d493a2054a.md)

### Overview
This image displays a user interface section titled "World capacity guidelines." It presents various metrics related to world performance, with progress bars indicating the usage percentage for each category. There is also a notification at the top providing advice on testing methods for accurate performance measurements.

### Key Elements
- **Title**: "World capacity guidelines"
- **Notification Bar**: Located at the top, it contains an informational icon and text advising users to test their world live and use real-time metrics. The text includes a clickable "Documentation" link.
- **Progress Bars**: Multiple horizontal progress bars are displayed below the title, each representing a different metric.
    - **Objects**: A blue progress bar showing 4% usage.
    - **Simulation and animation**: A blue progress bar showing 7% usage.
    - **Dynamics**: Two progress bars side-by-side labeled "Physics" and "Triggers," both showing 0% usage.
    - **VFX**: Two progress bars side-by-side labeled "Texts" and "Players," both showing 0% usage.
    - **World vertex count**: A blue progress bar showing 39% usage.
    - **Sounds**: A progress bar showing 0% usage.

### Visual Flow / Relationships
The layout is structured with the title at the top, followed by the notification bar, and then the progress bars arranged vertically. Each progress bar has its corresponding label and percentage next to it. The visual hierarchy is clear, with the title being the most prominent element, followed by the notification, and then the individual progress bars.

</details>

<p></p>


*World capacity dialog*

<details>
<summary>World capacity with Sounds at yellow</summary>

<p></p>

[World capacity with Sounds at yellow](../../image_data/fc1d10ac0065733d3ca162d0e26759802c3dd754f8e46dad2c370950eb44f157.md)

### Overview
This image displays a user interface section titled "World capacity guidelines." It presents various performance metrics related to a game or simulation environment, with progress bars indicating the usage percentage for each category. The interface includes a notification at the top providing guidance on accurate performance measurement.

### Key Elements
- **Title**: "World capacity guidelines"
- **Notification Bar**: Located at the top, contains an informational icon and text advising users to test live and use real-time metrics. The text includes a clickable "Documentation" link.
- **Progress Bars**: Multiple horizontal progress bars, each labeled with a category and its corresponding usage percentage.
    - **Objects**: 4% usage
    - **Simulation and animation**: 7% usage
        - **Dynamics**: 0% usage
        - **Triggers**: 0% usage
        - **VFX**: 0% usage
    - **World vertex count**: 39% usage
    - **Sounds**: 81% usage

### Visual Flow / Relationships
The layout is structured with a clear hierarchy:
- The title is prominently displayed at the top.
- Below the title, a notification bar provides important information.
- The progress bars are arranged vertically, each representing a different metric.
- The percentages next to each category indicate the current usage level.

</details>

<p></p>


*World capacity dialog with Sounds at yellow*

<details>
<summary>World capacity with vertex count at 407% and error message</summary>

<p></p>

[World capacity with vertex count at 407% and error message](../../image_data/39c8aa9109e7b1f9a29e6778efd8ffc7c19176a4bf0ab6471a60d013756220b6.md)

### Overview
This image is a screenshot of a user interface displaying world capacity guidelines. It includes various performance metrics and a warning message indicating that the scene exceeds the vertex capacity.

### Key Elements
- **Title**: "World capacity guidelines" at the top.
- **Warning Message**: A red-bordered box with a red minus sign and text stating, "You can no longer spawn objects. Your scene exceeds the vertex capacity."
- **Performance Metrics**:
  - **Objects**: A progress bar showing 4% completion.
  - **Simulation and animation**: A progress bar showing 7% completion.
    - **Dynamics**: 0% Physics.
    - **Triggers**: 0% Texts.
    - **VFX**: 0% Players.
  - **World vertex count**: Displays 407%, highlighted in red.
- **Sounds**: A progress bar showing 0% completion.

### Visual Flow / Relationships
The layout is structured with a clear hierarchy:
- The title is at the top.
- Below the title, there is a warning message.
- Performance metrics are listed below the warning, grouped into categories.
- The world vertex count is prominently displayed with a red highlight.
- The sounds metric is at the bottom.

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