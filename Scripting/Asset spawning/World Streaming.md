Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/world-streaming

# World Streaming

World streaming is a Meta Horizon Worlds feature that provides an efficient approach to building and running large worlds. It lets you divide a large world (a parent world) into a set of smaller worlds (sublevels). At runtime, you don’t have to load the world all at once. Instead, you can stream each subworld into the parent world programmatically.

This approach provides tooling that lets you preview sublevels and configure them correctly within a parent world. It allows a team of world creators to work independently, where each developer works on a different sublevel. Sublevels are integrated into the parent world as they’re completed.

From a runtime perspective, this approach gives better load times than streaming in parts of the world using asset spawning. Sublevels can load two to three times faster due to leveraging cached global illumination (GI) information, and removing the cost of dynamically computing lighting during load.

This document details the procedure for dividing large Meta Horizon Worlds into multiple sub-levels.

## Benefits and limitations

The following section lists the benefits and limitations of the World Streaming feature.

### Benefits

**Divide a world into smaller sublevels**

Sublevels are separate worlds, which can each contain meshes, gizmos, scripts. You can preview and organize sublevels during world creation, and at runtime. You can dynamically stream sublevels in and out.

**Faster load time**

You’ll experience a two to three times improvement in world load time, versus regular asset spawning for worlds containing only imported meshes. Cached global illumination is leveraged to precompute mesh lighting in the cloud. This speeds up loading at runtime.

**Note** : Meshes are lit based on the environment settings defined in the sublevel world.

**Typescript APIs for setting and retrieving the state of sublevels at runtime**

This allows you to create worlds in which sublevels load and unload according to the player’s actions.

**Improved collaboration for groups of creators**

Groups of creators can work independently on different sublevels, which may then be stitched together into a single large coherent experience.

### Limitations

**Per-player world streaming is not supported**

World streaming is client independent. Loading a sublevel loads it for every player simultaneously.

**Multiple sublevels loaded at the same time will negatively impact performance**

You should be wary of performance considerations when spawning in multiple sublevels at the same time.

**Automated streaming based on player movement is not supported**

You must use Typescript APIs to manually stream sublevels.

## World streaming vs asset spawning

World Streaming or [Asset Spawning](Introduction%20to%20Asset%20Spawning.md) are two approaches that you can use to spawn content into your world at runtime. Which approach you use depends on the following considerations.

**Use world streaming if**

* You want to spawn large chunks of static content.
* The content always spawns in the same location.
* You want to optimize the load time and improve the lighting quality for your content.

**Use asset spawning if**

* You want to spawn smaller chunks of content.
* The content is dynamic, or it spawns at different locations each time.

Meta encourages you to consider these factors when choosing which approach to implement. In many cases, it’s likely that you might want to use both strategies in the same world to spawn different kinds of content. For example, you might use world streaming to spawn static parts of the world as the player traverses it, and then use asset spawning to spawn dynamic content on top of the sublevel.

## Example: Create a world with sublevels

You can learn about the workflow involved in creating a world with sublevels by following the steps in this example scenario.

### Create sublevel worlds.

- In the Horizon Desktop Editor, create two new worlds called Sublevel1 and Sublevel2. Under **Choose how you’ll create**, select **Custom model imports**.
  <details>
  <summary>Image shows the world creation window with the 'custom model imports' option selected.</summary>
  
  <p></p>
  
  [Image shows the world creation window with the 'custom model imports' option selected.](../../image_data/b977f703c6d47e13b22913afaed55bcc33f345e5ee1e046eb9ed06a18173aae5.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Create a World." It contains options for creating a world within a software application, specifically for importing assets into a 3D environment called Horizon Worlds.
  
  ### Key Elements
  - **Title Bar**: Located at the top, the title bar displays the text "Create a World" with a close button ("X") on the right side.
  - **Name Input Field**: Positioned below the title bar, it has a placeholder text "Blank World" indicating the current name of the world being created.
  - **Instructional Text**: Below the name field, there is a section explaining how to choose the method of creation. The text reads: "Choose how you'll create. Primitive assets: Use shapes, templates and a library of assets in Horizon Worlds. If you've created in Horizon before, you've used this method. Custom model import: Import all your worlds' assets from your favorite 3D creation tool. You won't be able to use assets previously created in Horizon Worlds."
  - **Radio Buttons**: Two radio buttons are present under the instructional text. One is labeled "Use shapes, templates and a library of assets in Horizon Worlds," and the other is labeled "Import all your worlds' assets from your favorite 3D creation tool." The second option is selected, as indicated by the blue dot next to it.
  - **Buttons**: At the bottom of the dialog box, there are two buttons: "Cancel" and "Create World." The "Create World" button is highlighted in blue, suggesting it is the primary action button.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Create World" button, which is located at the bottom right. The radio buttons are arranged vertically beneath the instructional text, with the selected option highlighted. The name input field is positioned above the instructional text, and the "Cancel" button is placed to the left of the "Create World" button.
  
  </details>
  
  <p></p>
  
  
- Place several pieces of recognizable geometry inside each world. For example, you could use green objects in Sublevel1, and red objects in Sublevel2.
  <details>
  <summary>Image shows an example of two worlds, one with green furniture and one with red furniture.</summary>
  
  <p></p>
  
  [Image shows an example of two worlds, one with green furniture and one with red furniture.](../../image_data/9bc62519053063cf7b51b7c06d53b3ce20685e00ebd15ae9315d0534bea76125.md)
  
  ### Overview
  This image displays two side-by-side panels, each containing a 3D model and a title indicating the level name and edit timestamp.
  
  ### Key Elements
  1. **Left Panel**
     - **Visual description**: A green 3D model resembling a box or container.
     - **Location**: Left side of the image.
     - **Contents**: The model is centered within a grid background.
     - **Visual styling**: The model has a solid green color with sharp edges and no additional textures or highlights.
     
  2. **Right Panel**
     - **Visual description**: A red 3D model resembling a shelf or stand.
     - **Location**: Right side of the image.
     - **Contents**: The model is also centered within a grid background.
     - **Visual styling**: The model has a solid red color with sharp edges and no additional textures or highlights.
  
  3. **Title and Timestamp**
     - **Left Panel**: Title reads "Sublevel 2" and timestamp says "Edited 2 hours ago."
     - **Right Panel**: Title reads "Sublevel 1" and timestamp says "Edited 2 hours ago."
  
  4. **Panel Border**
     - **Visual description**: Each panel has a dark blue border.
     - **Location**: Surrounding the content of each panel.
     - **Contents**: Contains the title and timestamp information.
     - **Visual styling**: The border is solid and matches the color of the panel's background.
  
  5. **Three-Dots Icon**
     - **Visual description**: A small three-dot icon located at the bottom right of each panel.
     - **Location**: Bottom right corner of each panel.
     - **Contents**: Likely indicates more options or settings related to the panel.
     - **Visual styling**: Small, white, and circular.
  
  ### Visual Flow / Relationships
  - **Most Prominent Visually**: The 3D models are the most prominent elements due to their size and distinct colors.
  - **Arrows/Connectors**: There are no arrows or connectors between the panels.
  - **Spatial Relationships**: The panels are arranged side by side, with the left panel showing a green model and the right panel showing a red model. Both panels share the same layout and design elements.
  
  </details>
  
  <p></p>
  
  
- In each world, create a new sublevel entity.
  <details>
  <summary>Image shows a dropdown menu with the 'Sublevel' option selected.</summary>
  
  <p></p>
  
  [Image shows a dropdown menu with the 'Sublevel' option selected.](../../image_data/d1b2a42387113f7ff1d582640a7fddaa0735b94c3f91b0f67e0ccba353905f61.md)
  
  ### Overview
  This image depicts a dropdown menu interface, likely from a software application, showing a list of options under a header labeled "Shapes." The menu items are arranged vertically, with some items partially obscured by the dropdown arrow.
  
  ### Key Elements
  - **Dropdown Header**: "Shapes"
    - **Location**: Top of the dropdown menu
    - **Contents**: "Shapes"
    - **Visual styling**: Dark gray text on a black background
  - **Menu Items**
    - **Gizmos**: Located below "Shapes"
      - **Location**: Second item in the list
      - **Contents**: "Gizmos"
      - **Visual styling**: Dark gray text on a black background
    - **Sounds**: Located below "Gizmos"
      - **Location**: Third item in the list
      - **Contents**: "Sounds"
      - **Visual styling**: Dark gray text on a black background
    - **Colliders**: Located below "Sounds"
      - **Location**: Fourth item in the list
      - **Contents**: "Colliders"
      - **Visual styling**: Dark gray text on a black background
    - **Empty Object**: Located below "Colliders"
      - **Location**: Fifth item in the list
      - **Contents**: "Empty Object"
      - **Visual styling**: Dark gray text on a black background
    - **Sublevel**: Located below "Empty Object"
      - **Location**: Sixth item in the list
      - **Contents**: "Sublevel"
      - **Visual styling**: Dark gray text on a black background
  - **Launch Button**: "Launch My Horizon Creations..."
    - **Location**: Bottom of the dropdown menu
    - **Contents**: "Launch My Horizon Creations..."
    - **Visual styling**: Dark gray text on a black background
  
  ### Visual Flow / Relationships
  The dropdown menu is organized in a vertical list, with each item clearly separated by a thin horizontal line. The items are aligned to the left, and the dropdown arrow is positioned at the top-left corner of the dropdown area. The "Launch My Horizon Creations..." button is the last item in the list, indicating it might be a secondary action or a call-to-action.
  
  </details>
  
  <p></p>
  
  
- Set the type of the sublevels to **Exclude**, and rename it to “Testing Only”.

  This informs the world that any entities that are children to this sublevel should be ignored when loading it into the parent world. Note that they still exist when you load the sublevel world directly. This allows you to add content that you can use to test sublevels in isolation, without worrying about it being included in the integrated version.
  <details>
  <summary>Image shows a Properties menu with the type set to Exclude.</summary>
  
  <p></p>
  
  [Image shows a Properties menu with the type set to Exclude.](../../image_data/7df5732e5dc872fa0f1c3b31cbdad04f29c9458a2db8e98a49a87b8db16f3123.md)
  
  ### Overview
  This image depicts a user interface element showing settings for a sublevel within a larger configuration interface. The layout includes a header, a dropdown menu, and a toggle switch.
  
  ### Key Elements
  - **Header**: Located at the top, labeled "Properties". Contains a small icon resembling a user profile and a text field with placeholder text "Testing Only".
  - **Sublevel Settings Section**: Below the header, with a collapsed arrow indicating expandable content.
  - **Sublevel Type Dropdown**: Positioned next to "Sublevel Type", offering options "Deeplink" and "Exclude".
  - **Toggle Switch**: A switch labeled "Exclude" with a downward-facing arrow, indicating a dropdown menu is available when interacted with.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the "Exclude" toggle switch, as it is the focal point due to its placement and the downward arrow suggesting interactivity. The dropdown menu is nested under the "Sublevel Type" label, and the header provides contextual information about the settings being displayed.
  
  </details>
  
  <p></p>
  
  
- Drag the default spawn point under this new sublevel entity in the hierarchy so it won’t be included when you load this sublevel into the parent world.
- Publish both worlds, and be sure to turn off the setting **Visible to the public**.

### Create a parent world.

* Create a new world called “Overworld”. Under **Choose how you’ll create**, select **Custom model imports**.

<details>
<summary>Image shows the 'Create a World' window with the 'Custom Model Import' option selected.</summary>

<p></p>

[Image shows the 'Create a World' window with the 'Custom Model Import' option selected.](../../image_data/b977f703c6d47e13b22913afaed55bcc33f345e5ee1e046eb9ed06a18173aae5.md)

### Overview
This image depicts a user interface dialog box titled "Create a World." It contains options for creating a world within a software application, specifically for importing assets into a 3D environment called Horizon Worlds.

### Key Elements
- **Title Bar**: Located at the top, the title bar displays the text "Create a World" with a close button ("X") on the right side.
- **Name Input Field**: Positioned below the title bar, it has a placeholder text "Blank World" indicating the current name of the world being created.
- **Instructional Text**: Below the name field, there is a section explaining how to choose the method of creation. The text reads: "Choose how you'll create. Primitive assets: Use shapes, templates and a library of assets in Horizon Worlds. If you've created in Horizon before, you've used this method. Custom model import: Import all your worlds' assets from your favorite 3D creation tool. You won't be able to use assets previously created in Horizon Worlds."
- **Radio Buttons**: Two radio buttons are present under the instructional text. One is labeled "Use shapes, templates and a library of assets in Horizon Worlds," and the other is labeled "Import all your worlds' assets from your favorite 3D creation tool." The second option is selected, as indicated by the blue dot next to it.
- **Buttons**: At the bottom of the dialog box, there are two buttons: "Cancel" and "Create World." The "Create World" button is highlighted in blue, suggesting it is the primary action button.

### Visual Flow / Relationships
The most prominent visual element is the "Create World" button, which is located at the bottom right. The radio buttons are arranged vertically beneath the instructional text, with the selected option highlighted. The name input field is positioned above the instructional text, and the "Cancel" button is placed to the left of the "Create World" button.

</details>

<p></p>



### Add the sublevels.

* Using the drop-down list, add the two sublevel worlds to the overworld.

<details>
<summary>Image shows a drop-down menu with the 'Sublevel' option selected.</summary>

<p></p>

[Image shows a drop-down menu with the 'Sublevel' option selected.](../../image_data/94d8a11be9c48e09d60b9e7321da709fa1b19769b4a6450399c93c407a7eead6.md)

### Overview
This image depicts a dropdown menu within a user interface, likely from a game development tool or similar software. The menu is open, revealing several options related to object creation and management.

### Key Elements
- **Dropdown Menu**: A rectangular dropdown menu with a dark background and light text, located in the upper right area of the interface.
  - **Visual description**: The menu has a dark gray background with white text.
  - **Location**: Positioned above and to the right of the "Hierarchy" panel.
  - **Contents**: Contains the following items:
    - Shapes
    - Gizmos
    - Sounds
    - Colliders
    - Empty Object
    - Sublevel
    - Launch My Horizon Creations...
  - **Visual styling**: The menu has a simple, clean design with no additional borders or highlights.

### Visual Flow / Relationships
- **Most prominent visually**: The open dropdown menu is the focal point of the image.
- **Arrows, lines, connectors**: There are no arrows or lines connecting elements.
- **Spatial relationships**: The menu is stacked vertically beneath the "Hierarchy" panel, with the "Sublevel" option highlighted, indicating it is currently selected.

</details>

<p></p>



### Link the sublevels.

* Select a sublevel object from the hierarchy.
* In the property panel, ensure that the **Sublevel Type** is set to Deeplink.

<details>
<summary>Image shows the 'Properties' menu with the 'Sublevel Type' set to Deeplink.</summary>

<p></p>

[Image shows the 'Properties' menu with the 'Sublevel Type' set to Deeplink.](../../image_data/a031d0801fc5a8200ea2d2d281f3a95be62725c7e08d762d31739389803074a3.md)

### Overview
This image depicts a user interface element showing settings for a sublevel within a larger interface. The layout includes a header, a settings section, and a preview area.

### Key Elements
- **Header**: Located at the top, it displays the title "Properties" and a subtitle "[Sublevel]" with a small icon resembling a lock and key.
- **Sublevel Settings Section**: Below the header, this section has a header labeled "Sublevel Settings" with a downward-facing arrow indicating a dropdown or expandable menu.
- **Sublevel Type**: A label followed by a dropdown menu set to "Deeplink".
- **Sublevel Initial State**: Another label followed by a dropdown menu set to "Loaded".
- **Preview Area**: A large rectangular area below the settings section displaying a gradient background transitioning from blue to purple, with a white circular icon resembling a chain or links.
- **World Id**: At the bottom, there is a label "World Id" next to a field containing the number "0".

### Visual Flow / Relationships
The most prominent visual element is the preview area due to its size and central placement. The settings section is secondary but important as it contains interactive elements. The preview area is below the settings section, suggesting that the settings influence the preview content.

</details>

<p></p>



* Click on the thumbnail square.
* Select one of the sublevels from the world picker dialog box.

<details>
<summary>Image shows an example window where sublevels may be chosen.</summary>

<p></p>

[Image shows an example window where sublevels may be chosen.](../../image_data/1f10017712f77d5c5c65f88b48b880bdb3f21a8cc734daa4f74d7487f93cc819.md)

### Overview
This image depicts a user interface for selecting a world deeplink within a game or application. The interface includes a search bar at the top, a list of worlds with their names, owners, and dates added, and a header indicating the purpose of the screen.

### Key Elements
- **Header**: "Select World Deeplink" located at the top-left corner.
- **Search Bar**: Positioned at the top-right, with a magnifying glass icon indicating its function as a search tool.
- **My Worlds Section**: A tab labeled "My Worlds" with a blue underline, suggesting it is currently active.
- **World List**: Below the header, a table-like structure displays four rows of world information:
  - **World Name**: "Sublevel 2," "Sublevel 1," "SUBLEVEL TEST 2...," and "Mysterious Jungle."
  - **Owner**: All entries show "doctorbron" as the owner.
  - **Date Added**: Dates range from February 7, 2024, to September 18, 2023.

### Visual Flow / Relationships
The most prominent visual element is the list of worlds, which is arranged in a grid-like structure. There are no arrows or lines connecting elements, but the layout implies a sequential reading order from top to bottom and left to right. The search bar is positioned above the world list, suggesting it should be used before interacting with the list.

</details>

<p></p>



### Position the sublevels.

* Select a sublevel in the scene hierarchy.
* Using the transform handles, position the sublevel so you can easily see it turn on and off.

<details>
<summary>Image shows a sublevel being placed into a scene.</summary>

<p></p>

[Image shows a sublevel being placed into a scene.](../../image_data/ad3810466f27a07343ba83a6fb3d6f3868534ca34e72736a908835e7c4e944a9.md)

### Overview
The image depicts a 3D modeling environment within a software interface, likely a game development tool. The central focus is on two geometric shapes, one green and one red, which appear to be part of a larger structure. The interface includes panels for navigation, properties, and asset management.

### Key Elements
- **Central 3D Scene**: Two geometric shapes are prominently displayed. The green shape has a rectangular base with a smaller rectangular extension, while the red shape is a cube with a smaller rectangular cutout on its side.
- **Grid Background**: A light gray grid serves as the backdrop for the 3D scene, indicating a workspace for modeling.
- **Navigation Panel**: Located on the left, it contains a tree-like structure labeled "Hierarchy," showing nodes such as "[Sublevel]" and "[Spawn Point]."
- **Properties Panel**: On the right, it displays settings for the currently selected object, labeled "[Sublevel]." It includes fields for Sublevel Type, Sublevel Initial State, World ID, Position, Rotation, Scale, and Script.
- **Toolbars**: At the top, various icons and options are visible, suggesting functions like play, pause, and publish.

### Visual Flow / Relationships
- **Most Prominent Element**: The two geometric shapes in the center.
- **Arrows and Lines**: No arrows or lines are present in the image.
- **Spatial Relationships**: The green shape is positioned above and slightly behind the red shape, creating a layered effect. The grid provides a sense of depth and perspective.

</details>

<p></p>



* Repeat the preceding two steps for the other sublevel.

### Set the initial state on the sublevels.

* In the **Properties** dialog, under **Sublevel Initial State** , try setting each of the initial sublevel states.

  + Select **Active**, and the entities are loaded and become active.
  + Select **Loaded**, and the entities are loaded, but are neither active nor visible.
  + Select **Unloaded**, and no entities are loaded.

As you change the states, you’ll see the sublevel load and become active, and unload.

<details>
<summary>Image shows the properties menu with the 'Sublevel Initial State' field highlighted.</summary>

<p></p>

[Image shows the properties menu with the 'Sublevel Initial State' field highlighted.](../../image_data/b9dd70bf17b9342e21e048963ebf7872cb6532d5e41c9c9596e7c0f1fc0fcb0e.md)

### Overview
This image depicts a user interface element within a software application, specifically a settings panel for configuring a sublevel in a game development environment. The interface includes dropdown menus, text fields, and a selection of attributes related to the sublevel.

### Key Elements
- **Sublevel Settings Section**: Located at the top of the interface.
  - **Sublevel Type**: A dropdown menu labeled "Deeplink" indicating the type of sublevel.
  - **Sublevel Initial State**: Another dropdown menu labeled "Active," which is currently selected.
  - **Unloaded**: A menu option listed but not selected.
  - **Loaded**: A menu option listed but not selected.
  - **Active**: A menu option highlighted in blue, indicating it is the current selection.

- **Attributes Section**: Below the Sublevel Settings.
  - **World ID**: Displays a numerical identifier "10163264775" with a copy icon next to it.
  - **Position**: Contains three text fields labeled X, Y, Z with values "0", "0", "-2.37" respectively.
  - **Rotation**: Contains three text fields labeled X, Y, Z with values "0", "0", "0" respectively.
  - **Scale**: Contains three text fields labeled X, Y, Z with values "1", "1", "1" respectively.

- **Script Section**: At the bottom of the interface.
  - **Attached Script**: Displays "None" with a dropdown arrow indicating no script is attached.

### Visual Flow / Relationships
The interface follows a vertical layout with clear sections for different settings. The Sublevel Settings section is the most prominent due to its larger size and the active selection of the "Active" option. The Attributes section is secondary, providing specific parameters for the sublevel. The Script section is the least prominent, placed at the very bottom.

</details>

<p></p>



## Programmatically spawn and despawn the sublevels

Follow this procedure to configure the Desktop Editor to run the sample script. You can run the script to see the SublevelEntity API in action. The sample code demonstrates how to:

* Get the current state of the sublevel (for example, loading).
* Get the target state of the sublevel (for example, loaded).
* Set the target state of the sublevel by using the following functions:

[activate()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.activate.md/?api_version=2.0.0) Make the sublevel visible to users and start running scripts.

[hide()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.hide.md/?api_version=2.0.0) Return an active sublevel back to the loaded state.

[load()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.load.md/?api_version=2.0.0) Begin the process of loading a sublevel into memory, but don’t activate it yet.

[pause()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.pause.md/?api_version=2.0.0) Temporarily pause the load of a sublevel. Loading a sublevel has an impact on performance, so you might want to temporarily pause a load at performance-critical times. Resume the load by calling load() again.

[unload()](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.unload.md/?api_version=2.0.0) Completely remove a sublevel from memory.

You can find the SublevelEntity class API in the [v2.0.0 world\_streaming package](https://horizon.meta.com/resources/scripting-api/world_streaming.sublevelentity.md/?api_version=2.0.0). This API is not supported in v1.0.0 of the Meta Horizon Worlds API.

### Preconditions

Follow these steps to configure the Desktop Editor for running the example script.

- In the Desktop Editor, click the Scripts panel dropdown.
  <details>
  <summary>Image shows the icon for the dropdown menu.</summary>
  
  <p></p>
  
  [Image shows the icon for the dropdown menu.](../../image_data/30c4136990ef7abe790143961bbb9e069dd490d1334afe102e4cdcc46615c586.md)
  
  ### Overview
  This image depicts a simple interface element consisting of a blue rectangular button with a white code snippet icon on the left side and a downward-pointing arrow on the right side.
  
  ### Key Elements
  - **Visual description**: The button has a rounded rectangle shape with a solid blue fill.
  - **Location**: The button occupies the entire frame.
  - **Contents**: 
    - On the left side, there is a white code snippet icon represented as `<code></code>`.
    - On the right side, there is a white downward-pointing arrow.
  - **Visual styling**: The button has a uniform blue color with no gradients or additional shading. There are no borders or shadows around the button.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the blue button itself. The code snippet icon and the downward arrow are secondary elements placed within the button. There are no arrows or lines connecting these elements, suggesting that they are part of a single interactive element rather than separate components.
  
  </details>
  
  <p></p>
  
  
- When the Scripts panel appears, select the **Settings** icon.
  <details>
  <summary>Image shows a close-up of the settings icon.</summary>
  
  <p></p>
  
  [Image shows a close-up of the settings icon.](../../image_data/f7d7dfd39b1f8dd8b33be5e803102036a47eca02ce4cecb52afc02a2e1557c67.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a settings or configuration panel related to scripts. The layout includes a search bar, a plus sign for adding new items, a settings gear icon, and a menu icon.
  
  ### Key Elements
  - **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text "> Search for scripts".
  - **Plus Sign**: Positioned next to the search bar, indicating the option to add new scripts.
  - **Settings Gear Icon**: Situated to the right of the plus sign, representing the settings for scripts.
  - **Menu Icon**: A vertical ellipsis icon located to the far right, likely for additional options or a dropdown menu.
  - **Settings Button**: A black button labeled "Settings" at the bottom-right, suggesting access to more detailed settings.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the search bar, as it is the largest and most central. The settings gear icon is secondary but still important, as it suggests configuration options. The menu icon is less prominent but still noticeable due to its distinct shape. The settings button at the bottom-right acts as a call-to-action for accessing detailed settings.
  
  </details>
  
  <p></p>
  
  
- Enable the **horizon/world\_streaming** module.
  <details>
  <summary>Image shows the script settings menu with the 'horizon/world streaming' option enabled.</summary>
  
  <p></p>
  
  [Image shows the script settings menu with the 'horizon/world streaming' option enabled.](../../image_data/fbba3e22b57130d35f87523e8c780cf1875fbbb51e1ec19eb61dbcf1b8788193.md)
  
  ### Overview
  This image depicts a settings dialog box titled "Script Settings." It contains a list of API versions with toggle switches next to them, along with buttons at the bottom for canceling or applying changes.
  
  ### Key Elements
  - **API Version Label**: Located at the top left, reads "API Version."
  - **Version Selection Box**: Positioned to the right of the API Version label, showing "2.0.0" with a downward arrow indicating a dropdown menu.
  - **Toggle Switches**: A series of toggle switches listed vertically under the "horizon/experimental" label. Each switch has a white square with a small white circle on the left side, indicating the current state.
  - **List Items**: The items listed include "horizon/experimental," "horizon/testing," "horizon/2p," "horizon/navmesh," "horizon/test_bridge," "horizon/ui," "horizon/camera," and "horizon/world_streaming."
  - **Apply Button**: A blue rectangular button labeled "Apply" located at the bottom right.
  - **Cancel Button**: A gray rectangular button labeled "Cancel" located at the bottom left.
  - **Close Button**: A small "X" icon located at the top right corner of the dialog box.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the list of API versions with toggle switches. The Apply and Cancel buttons are positioned at the bottom, with the Apply button being more prominent due to its blue color compared to the gray Cancel button. The toggle switches are arranged vertically under each API version label, and the API version selection box is to the right of the label.
  
  </details>
  
  <p></p>
  
  

**Note** : You must have at least one script to enable a module.

### Example script

The following code demonstrates how to spawn and despawn sublevels at runtime.

```
import { Component, PropTypes, Entity, CodeBlockEvents } from 'horizon/core';
import { SublevelEntity } from 'horizon/world_streaming';

class TestSublevelAPI extends Component {
  static propsDefinition = {
    sublevel: {type: PropTypes.Entity},
    state: {type: 'number', default: 0}, // States 0 to 4 are:
                                         // Unloaded, Loaded, Active,
                                         // Pause, and Hide (Loaded).
  };

  start() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, async (player) => {
      var sublevel = this.props.sublevel?.as(SublevelEntity);
      var state = this.props.state;

      if (sublevel == null \|\| sublevel == undefined) {
        console.log("The sublevel entity was either null or invalid.")
        return;
      }

      console.log("Sublevel Trigger entered. Trying to set sublevel " + sublevel.toString() + " to " + state + ", current sublevel state is " + sublevel.currentState.get() + ", previous target sublevel state is " + sublevel.targetState.get());
      switch(state) {
        case 0: {
          sublevel.unload().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now unloaded!");
          });
          break;
        }
        case 1: {
          sublevel.load().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now loaded!");
          });
          break;
        }
        case 2: {
          sublevel.activate().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now activated!");
          });
          break;
        }
        case 3: {
          sublevel.pause().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now paused!");
          });
          break;
        }
        case 4: {
          sublevel.hide().then(() => {
            console.log("Sublevel " + sublevel?.toString() + " is now hidden!");
          });
          break;
        }
        default: {
          console.log("Invalid/Unexpected sublevel state # given: " + state);
          // unexpected state
          break;
        }
      }
    });
  }
}
Component.register(TestSublevelAPI);
```