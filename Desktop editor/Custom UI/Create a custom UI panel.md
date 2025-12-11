Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel

# Create a custom UI panel

This topic shows you how to create a custom UI panel. To create one, you need a Custom UI gizmo and a [`UIComponent` script](Custom%20UI%20Styles.md#uicomponent).

## Before you begin

Before you begin building custom UIs in the desktop editor, enable auto-start and auto-stop of the simulation when previewing.

<details>
<summary>Preview Configuration panel</summary>

<p></p>

[Preview Configuration panel](../../../../images/output/img_20251211_025305_20251211_025305.md)

### Overview
This image depicts a settings interface within a Unity development environment, specifically the "Preview Configuration" section. It includes toggle switches, dropdown menus, and action buttons related to preview settings.

### Key Elements
- **Toggle Switches**: Two toggle switches labeled "Auto-start simulation on Preview entry" and "Auto-stop simulation on Preview exit." Both are in the 'on' position, indicated by the blue color and checked state.
- **Dropdown Menu**: A dropdown menu labeled "Preview device" with the current selection set to "None."
- **Checkbox**: A checkbox labeled "UI safe zone overlay," which is unchecked.
- **Action Buttons**: Three circular buttons at the bottom right labeled with icons representing actions such as refresh, reset, and possibly a save or apply action.
- **Title Bar**: At the top, a title bar reads "[dev-only] Unity View."

### Visual Flow / Relationships
The most prominent elements are the toggle switches due to their size and placement. The dropdown menu and checkbox are secondary but still noticeable. The action buttons at the bottom are less prominent but clearly defined. There is no explicit visual flow direction, but the layout suggests a linear progression from top to bottom.

</details>

<p></p>



Unlike other physical entities in the world, a custom UI is entirely generated from TypeScript code. If auto-start is disabled when you begin the preview, then no code is executed when you enter the preview. Your custom UIs are not initialized, and are therefore invisible.

## Step 1: Create a Custom UI gizmo

On the menu bar, find the **Custom UI** gizmo in the **Build** dropdown menu > **Gizmos** and drag it into the **Scene** pane. Like other entities, you can control the position, scale, rotation, and visibility of the Custom UI gizmos, both from the **Properties** panel and from scripts.

The **Gizmos** panel is where you’d find the **Custom UI** gizmo.

<details>
<summary>Select the Custom UI gizmo</summary>

<p></p>

[Select the Custom UI gizmo](../../../../images/output/img_20251211_025402_20251211_025402.md)

### Overview
This image depicts a user interface element within a software application, specifically a window titled "Gizmos." The window contains a grid layout of icons representing various functionalities, with one particular icon highlighted in red.

### Key Elements
- **Title Bar**: Located at the top of the window, labeled "Gizmos."
- **Search Bar**: Positioned below the title bar, featuring a magnifying glass icon and a placeholder text field.
- **Icon Grid**: A 2x3 grid of icons, each with a distinct color and iconography. The icons represent different features such as "World Leaderboard," "Projectile Launcher," "Snap Destination," "Raycast," "Debug Console," "Scheduled Video Player," "Custom UI," and "Avatar Playback."
- **Highlighted Icon**: The "Custom UI" icon is highlighted with a red bounding box, indicating selection or focus.
- **Menu Bar**: At the very top of the screen, there are several icons and dropdown menus, likely for navigation and settings.

### Visual Flow / Relationships
The most prominent visual element is the "Custom UI" icon due to its red highlighting. The grid layout organizes the icons in a structured manner, with each icon having a consistent size and spacing. There are no arrows or lines connecting the elements, but the arrangement suggests a logical flow from top to bottom and left to right.

</details>

<p></p>



On the far right of the desktop editor, you’d find the Custom UI’s **Properties** panel.

A custom UI panel is represented by a Custom UI gizmo, which controls where and how the panel is placed in the world. You can place multiple Custom UI gizmos in the world.

In the past, creators often placed duplicate Custom UI gizmos in the world and controlled the visibility for each to create custom UI panels that displayed different content for each player. In most cases, you do not need to duplicate Custom UI gizmos. The Custom UI feature allows you to display different content to different players within the same Custom UI gizmo. See [Player-specific custom UI](Player-Specific%20Custom%20UI.md) for details.

## Step 2: Create a UI script

The Custom UI gizmo does nothing unless you attach a script to it. The script controls the content of the panel. Next, [create a TypeScript script using the desktop editor](../../Scripting/Get%20started%20with%20TypeScript/Adding%20an%20IDE%20to%20the%20desktop%20editor.md#create-a-new-meta-horizon-worlds-script-in-the-desktop-editor). To use the Custom UI functionalities, include `horizon/ui` module for TypeScript API v2.0.0 from the **Scripts** dropdown menu > **Settings** (the gear button on the top right of Scripts menu). The examples here are for TypeScript API v2.0.0.

<details>
<summary>Create a UI script</summary>

<p></p>

[Create a UI script](../../../../images/output/img_20251211_025521_20251211_025521.md)

### Overview
This image depicts a settings interface titled "Script Settings." It has a sidebar with options such as "Script editing," "API," and "Console." The main content area displays a list of API endpoints under the "API" tab. There are toggle switches next to each API endpoint, indicating whether they are enabled or disabled. At the bottom, there are two buttons labeled "Cancel" and "Apply."

### Key Elements
- **Sidebar (Left Panel)**: Located on the left side of the interface.
  - **Visual description**: Dark gray background with white text.
  - **Contents**: Contains three options: "Script editing," "API," and "Console."
  - **Visual styling**: Text is in a sans-serif font, with "API" highlighted in blue.
  
- **Main Content Area (Right Panel)**: Occupies the right side of the interface.
  - **Visual description**: Dark gray background with white text.
  - **Contents**: Lists API endpoints with toggle switches next to them.
    - Examples include "horizon/navmesh," "horizon/test_bridge," "horizon/ui," etc.
  - **Visual styling**: Text is in a sans-serif font, and toggle switches are white with blue backgrounds when enabled.
  
- **Toggle Switches**: Located to the right of each API endpoint.
  - **Visual description**: White switch with a blue background.
  - **Location**: Adjacent to each API endpoint.
  - **Contents**: Indicate whether the API is enabled or disabled.
  - **Visual styling**: Simple toggle design with a white switch and blue background.
  
- **Buttons at the Bottom**:
  - **"Cancel" Button**: Located at the bottom left.
    - **Visual description**: Dark gray background with white text.
    - **Contents**: "Cancel" written in white.
    - **Visual styling**: Standard button design with rounded corners.
  - **"Apply" Button**: Located at the bottom right.
    - **Visual description**: Blue background with white text.
    - **Contents**: "Apply" written in white.
    - **Visual styling**: Standard button design with rounded corners.

### Visual Flow / Relationships
- **Most Prominent Element**: The "API" tab is the most prominent due to its highlighted blue color.
- **Arrows/Lines/Connectors**: None.
- **Spatial Relationships**: Toggle switches are aligned vertically next to their respective API endpoints. Buttons at the bottom are aligned horizontally.

</details>

<p></p>



In your Custom UI script, you can add `preStart()` and `start()` methods in addition to the `initializeUI()` method. These methods are called in the following order:

# `initializeUI()`

# `preStart()`

# `start()`

For more information, see [TypeScript Script Lifecycle](../../Scripting/TypeScript%20Script%20Lifecycle.md).

## Step 3: Create a Hello World template

Write the following code in your script. Notice that the component extends the `UIComponent` class, instead of a regular `Component`. [UIComponent Class](UIComponent%20class.md) describes what each line means in more detail, but this template is a good starting point for now.

```
import 'horizon/core';
import {UIComponent, View, Text} from 'horizon/ui';

class HelloWorld extends UIComponent {
  initializeUI() {
    return View({
      children: Text({text: 'Hello World', style: {color: 'black'}}),
      style: {backgroundColor: 'white'},
    });
  }
}

UIComponent.register(HelloWorld);
```

## Step 4: Attach the script to the gizmo

Like all script components, the same `UIComponent` can be attached to more than one Custom UI gizmo. Those Custom UI gizmos will then display the same content.

To achieve [player-specific custom UIs](Player-Specific%20Custom%20UI.md) and heads-up display (HUDs), you do not need to duplicate Custom UI gizmos or scripts in most cases. The framework provides tools for you to build custom UI panels that display different content for different players.

You can find the registered `HelloWorld` component in the **Script** section of the **Properties** panel.

<details>
<summary>Attach the HelloWorld script to the Custom UI entity close up</summary>

<p></p>

[Attach the HelloWorld script to the Custom UI entity close up](../../../../images/output/img_20251211_025622_20251211_025622.md)

### Overview
The image displays a user interface from a software application, likely related to game development or 3D modeling, given the presence of terms like "World Sim Off," "Switch to VR," and "Attached Script." The interface includes a preview area on the left and various settings and options on the right.

### Key Elements
- **Preview Area**: Located on the left side, showing a gradient blue background.
- **Top Bar**: Contains several icons and buttons, including a green checkmark, a globe icon labeled "World Sim Off," a back arrow, a character icon with a dropdown menu, a pencil icon, a "Switch to VR" button, and a "Publish" button.
- **Camera Settings**: Below the top bar, there are camera settings with a camera icon and dropdown menus labeled "1.0" and "0.0."
- **Properties Panel**: On the right side, it displays various properties and settings. It includes sections like "Debug Data," "Script Instance Data," "Visual & Interaction," and "Attached Script."
- **Attached Script**: Highlighted at the bottom of the properties panel with a red bounding box, showing "Attached Script HelloWorld:HelloWorld."

### Visual Flow / Relationships
The layout is structured with the preview area on the left and the properties panel on the right. The properties panel is divided into sections with expandable headers. The "Attached Script" section is particularly emphasized with a red bounding box.

</details>

<p></p>



After you attach the `HelloWorld` script to the **Custom UI** entity, click Play to enter the preview mode. If you haven’t already, ensure you have turned on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview exit** in [**Preview Configuration**](../Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-configuration) to successfully complete this tutorial.

While in preview, you will be prompted to press the “E” key when your avatar is within a certain distance from the UI panel. Press “E” to see the “Hello World” panel.

**Note**: You can choose the display mode based on your preference in the **Properties** panel > **Visual & Interaction** > **Display mode**. The following image shows the “Hello World” panel in the **Spatial** display mode. Additionally, you can [resize the panel](UIComponent%20class.md#properties-panelheight-and-panelwidth) and place it wherever you like.

<details>
<summary>Hello World custom UI panel</summary>

<p></p>

[Hello World custom UI panel](../../../../images/output/img_20251211_025718_20251211_025718.md)

### Overview
The image displays a user interface element that appears to be part of a web page or application. It features a search bar at the top, a menu icon on the left, and a microphone icon along with a close button on the right. The background is a gradient of blue shades, transitioning from a lighter blue at the top to a darker blue at the bottom.

### Key Elements
- **Search Bar**: Located centrally at the top, spanning horizontally across the width of the screen. Contains the text "> Hello World".
- **Menu Icon**: Positioned on the far left, consisting of three horizontal lines stacked vertically.
- **Microphone Icon**: Situated to the right of the search bar, depicted as a stylized microphone.
- **Close Button**: Found on the far right, represented by an 'X' symbol.

### Visual Flow / Relationships
The most prominent visual element is the search bar, which draws attention due to its central placement and the text within it. The menu icon and close button are secondary elements, providing additional functionality and allowing users to interact with the interface. There are no arrows or lines connecting elements, suggesting a flat design without a specific directional flow.

</details>

<p></p>

