Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/creating-a-custom-ui-panel

# Create a custom UI panel

This topic shows you how to create a custom UI panel. To create one, you need a Custom UI gizmo and a [`UIComponent` script](Custom%20UI%20Styles.md#uicomponent).

## Before you begin

Before you begin building custom UIs in the desktop editor, enable auto-start and auto-stop of the simulation when previewing.

<details>
<summary>Preview Configuration panel</summary>

<p></p>

[Preview Configuration panel](../../image_data/e7cd02808020de80d9fea8ae315373bf83fb3475fc6b2c5c87a0265643daea25.md)

### Overview
This image depicts a settings menu within a Unity development environment, specifically the "Preview Configuration" section. It is a rectangular dialog box with a dark background and light text, designed for configuring preview settings during development.

### Key Elements
- **Title**: "Preview Configuration" located at the top-center of the dialog box.
- **Toggle Switches**: Two toggle switches labeled "Auto-start simulation on Preview entry" and "Auto-stop simulation on Preview exit," both currently in the 'on' position as indicated by the blue indicator.
- **Dropdown Menu**: A dropdown menu labeled "Preview device" with the option "None" selected.
- **Checkbox**: A checkbox labeled "UI safe zone overlay," which is unchecked.
- **Preview Actions**: At the bottom right, there are three circular icons representing different preview actions: a refresh icon, a globe icon, and another icon that appears to be related to sharing or linking the preview.

### Visual Flow / Relationships
The most prominent elements are the toggle switches due to their size and placement. The dropdown menu and checkbox are secondary but still noticeable. The preview actions at the bottom are less prominent but clearly defined. There is no explicit visual flow direction, but the layout suggests a linear progression from top to bottom.

</details>

<p></p>



Unlike other physical entities in the world, a custom UI is entirely generated from TypeScript code. If auto-start is disabled when you begin the preview, then no code is executed when you enter the preview. Your custom UIs are not initialized, and are therefore invisible.

## Step 1: Create a Custom UI gizmo

On the menu bar, find the **Custom UI** gizmo in the **Build** dropdown menu > **Gizmos** and drag it into the **Scene** pane. Like other entities, you can control the position, scale, rotation, and visibility of the Custom UI gizmos, both from the **Properties** panel and from scripts.

The **Gizmos** panel is where you’d find the **Custom UI** gizmo.

<details>
<summary>Select the Custom UI gizmo</summary>

<p></p>

[Select the Custom UI gizmo](../../image_data/ce8a2fb185877ac98b4119a65443253a3d38fb9c6bd9e0a6e048f7f6b2761939.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu labeled "Gizmos." The menu contains various icons representing different functionalities, with one particular icon highlighted.

### Key Elements
- **Visual description**: A dropdown menu with rounded corners and a dark background.
- **Location**: Top-left corner of the screen.
- **Contents**: Contains multiple icons with labels underneath them.
    - **World Leaderboard**: Orange icon with a white trophy.
    - **Projectile Launcher**: Blue icon with a white hand holding a wrench.
    - **Snap Destination**: Teal icon with a white gear.
    - **Raycast**: Purple icon with a white target.
    - **Debug Console**: Purple icon with a white code snippet.
    - **Scheduled Video Player**: Red icon with a white play button.
    - **Custom UI**: Brown icon with a white trash can.
    - **Avatar Playback**: Light blue icon with a white circular arrow.
- **Visual styling**: Dark gray background, light gray borders, and white text.

### Visual Flow / Relationships
- **Most prominent visually**: The "Custom UI" icon, as it is highlighted with a red bounding box.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: Icons are arranged in a grid-like pattern, with labels underneath each icon.

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

[Create a UI script](../../image_data/cc46101c47b57b5c168b91a780ecd5fb50824613d0c9e3bb119476827e716515.md)

### Overview
This image depicts a settings interface titled "Script Settings." It is a modal window with a dark theme, featuring a sidebar menu and a content area displaying API options. The interface includes toggle switches next to each API option, with one switch highlighted in blue, indicating it is active.

### Key Elements
- **Sidebar Menu**: Located on the left side, with three options: "Script editing," "API," and "Console." The "API" tab is currently selected, as indicated by the blue highlight.
- **API List**: On the right side, a list of APIs is displayed vertically. Each API has a toggle switch to its right.
    - **API Options**: 
        - horizon/navmesh
        - horizon/test_bridge
        - horizon/ui
        - horizon/unity_asset_bundles
        - horizon/camera
        - horizon/world_streaming
        - horizon/genai_conversation
    - **Toggle Switches**: Each API has a toggle switch next to it. One of the switches is highlighted in blue, indicating it is active.
- **Buttons**: At the bottom of the interface, there are two buttons labeled "Cancel" and "Apply."

### Visual Flow / Relationships
The most prominent visual element is the active toggle switch, which is highlighted in blue. The toggle switches are arranged vertically under each API option. The "API" tab is the most prominent element in the sidebar menu. The "Apply" button is the most prominent interactive element at the bottom of the interface.

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

[Attach the HelloWorld script to the Custom UI entity close up](../../image_data/5e200cdf5e8de7a3106cdc0d140d2b52d4f1ebbb15fe59ee7131844a6daa7e4d.md)

### Overview
This image depicts a user interface from a software application, likely related to game development or asset management. The interface includes a preview area on the left and a properties panel on the right. The properties panel contains various settings and data related to an entity or asset being viewed.

### Key Elements
- **Preview Area**: Located on the left side, displaying a gradient blue background.
- **Properties Panel**: On the right, with a dark theme background.
  - **Header**: "Properties" at the top.
  - **CustomUI Section**: Contains a label "[CustomUI]".
  - **Debug Data**: Includes "Generic Entity Data" and "Script Instance Data".
    - "Entity Id: 100001"
    - "Raycast distance: 3"
  - **Visual & Interaction Section**: Contains options like "Display mode" set to "Spatial", "Raycast" toggle switch, and "Mipmap" toggle switch.
  - **Web and Mobile Section**: A collapsed section indicated by a chevron.
  - **Behavior Section**: Another collapsed section.
  - **Attributes Section**: A collapsed section.
  - **GameplayTags Section**: A collapsed section.
  - **More Section**: A collapsed section.
  - **Script Section**: Contains a dropdown labeled "Attached Script" showing "HelloWorld:HelloWorld".

### Visual Flow / Relationships
The most prominent visual element is the preview area on the left, which serves as the main focus. The properties panel on the right provides additional information and settings related to the previewed content. The layout follows a typical UI design with a sidebar and a content area, where the content area is the preview and the sidebar contains the properties.

</details>

<p></p>



After you attach the `HelloWorld` script to the **Custom UI** entity, click Play to enter the preview mode. If you haven’t already, ensure you have turned on **Auto-start simulation on Preview entry** and **Auto-stop simulation on Preview exit** in [**Preview Configuration**](../Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#preview-configuration) to successfully complete this tutorial.

While in preview, you will be prompted to press the “E” key when your avatar is within a certain distance from the UI panel. Press “E” to see the “Hello World” panel.

**Note**: You can choose the display mode based on your preference in the **Properties** panel > **Visual & Interaction** > **Display mode**. The following image shows the “Hello World” panel in the **Spatial** display mode. Additionally, you can [resize the panel](UIComponent%20class.md#properties-panelheight-and-panelwidth) and place it wherever you like.

<details>
<summary>Hello World custom UI panel</summary>

<p></p>

[Hello World custom UI panel](../../image_data/cf4cab682865dd9e9833bc93f790b2cc7dae56bb9d770e916786abc438e2cc47.md)

### Overview
The image depicts a user interface element, specifically a search bar integrated into a webpage or application. The layout includes a menu icon, a search bar, and a microphone icon, suggesting voice search functionality, along with a clear exit or close button.

### Key Elements
- **Menu Icon**: Located in the top-left corner, it consists of three horizontal lines stacked vertically.
- **Search Bar**: Positioned centrally at the top, it contains the placeholder text "Hello World." The search bar has a white rectangular shape with rounded corners.
- **Microphone Icon**: Situated to the right of the search bar, it is a stylized microphone symbol.
- **Close Button**: Found to the far right, it is represented by an 'X' symbol.

### Visual Flow / Relationships
The most prominent visual element is the search bar, as it occupies the central area of the interface. The menu icon and microphone icon are secondary elements, placed symmetrically around the search bar. The close button acts as a tertiary element, providing a clear way to exit the current view.

</details>

<p></p>

