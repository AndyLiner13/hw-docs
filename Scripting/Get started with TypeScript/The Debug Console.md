Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/getting-started/the-debug-console

# The Debug Console

The Debug Console Gizmo provides access to debug console logs. It allows you to start, stop, and reset worlds while you are in edit mode or visit mode.

## Features

The Debug Console gizmo enables you to view the debug logs in a world while in preview or visit mode. This can be helpful when debugging in-world behavior because you can stop, start, and reset the world from this gizmo. Details include:

* Stopping the world stops all currently executing scripts.
* Starting continues these scripts.
* Resetting restarts all scripts and resets dynamic objects to their original state.
* In visit mode, the Debug Console is only visible to world collaborators.
  + This provides an effective way for developers to view world behavior while others enjoy the world.
  + Multiple Debug Consoles can be placed in a world, and all of them will receive the same logs.
  + Logs can be cleared by pressing the **Clear** button or searched by entering search terms in the search field.

<details>
<summary>The debug console as appears in VR</summary>

<p></p>

[The debug console as appears in VR](../../image_data/d032292972eb365a4eca2f662afc0462ef7e592d0b18e1b6f9420b61c10cb1d7.md)

### Overview
The image depicts a user interface element labeled as a "Debug Console." It features a dark-themed design with a few interactive buttons and a search bar. The console area is currently empty, indicated by the text "Console is empty."

### Key Elements
- **Title**: "Debug Console" located at the top-left corner.
- **Buttons**: Three purple buttons labeled "Start world," "Stop world," and "Reset world" are aligned horizontally near the top-center.
- **Search Bar**: A rectangular search bar with a magnifying glass icon is positioned below the buttons.
- **Clear Button**: A black button labeled "Clear" is situated to the right of the search bar.
- **Message**: Below the search bar, the text "Console is empty." is displayed.

### Visual Flow / Relationships
- **Most Prominent Element**: The title "Debug Console" is the most prominent visually due to its placement at the top.
- **Arrows/Connections**: There are no arrows or lines connecting elements.
- **Spatial Relationships**: The elements are arranged in a grid-like structure with the title at the top, buttons in the middle, search bar below them, and the clear button to the far right.

</details>

<p></p>



## Controlling Visibility of the Debug Console

**Setting Visibility**

In the Properties panel for a Debug Console, you can set the visibility of the console in the Visibility dropdown. Options are:

* **Edit Mode Only**
* Not visible in preview mode or the published world
* **Edit and Preview Mode**
* Not visible in the published world
* **In Published World**
* Visible in edit mode, preview mode, and published mode

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bdc4ec24644002a9b416ee4457fab9eebb25e6b44a4fb93a76d441e57700aa73.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu under the "Behavior" section of a settings panel. The dropdown contains options related to visibility settings.

### Key Elements
- **Dropdown Menu**: A black dropdown menu with white text options.
  - **Visual description**: The dropdown has a rectangular shape with rounded corners.
  - **Location**: Positioned below the "Visibility" label.
  - **Contents**: Contains three options:
    > "Edit Mode Only"
    > "Edit And Preview Mode"
    > "In Published World"
  - **Visual styling**: The background is dark gray, and the text is white. There are no borders around the dropdown itself.
- **Background Panel**: The surrounding panel is dark gray with lighter gray headers.
  - **Visual description**: The panel has a rectangular shape with rounded corners.
  - **Location**: Surrounding the dropdown menu.
  - **Contents**: Includes labels such as "Properties" and "Behavior," along with a small icon next to "CreatorDebugGizmo."
  - **Visual styling**: The background is dark gray, and the text is white. There are no borders around the panel itself.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu is the most prominent element due to its central placement and larger size compared to the surrounding text.
- **Arrows/Connectors**: There are no arrows or connectors visible in the image.
- **Spatial relationships**: The dropdown menu is nested within the larger panel, which is part of a larger interface layout.

</details>

<p></p>



The Visibility setting applies to the world owner, editors, and testers. If you configure a Debug Console with the “In Published World” setting, all collaborators will be able to see it. As a result, at no time will a regular world visitor see the console.

**NOTE:** It’s possible to hide the console using the visibility code block, but the code block can’t force the Debug Console to appear if it would otherwise be hidden by the console’s Properties or the user’s role.

## Known Issues / Limitations

* The server is often started several seconds before any clients join, so logs from start() methods in scripts might not show up for these clients.