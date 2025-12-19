Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/custom-ui-examples-tutorial/station-0-setup

# Station 0 - Setup

<details>
<summary>Custom UI Examples thumbnail</summary>

<p></p>

[Custom UI Examples thumbnail](../../../image_data/b3407a20728be3ef71eef18ac8551f20f9c8a6024c306e6159bb5c85678d410d.md)

### Overview
The image displays a user interface element showcasing various buttons arranged in a grid-like layout. The main heading "BUTTONS" is prominently displayed at the top. Below the heading, there are two sections: one labeled "Disabled Buttons" and another labeled "Custom Color Buttons."

### Key Elements
- **Top Section - Disabled Buttons**: 
  - **Visual description**: Rectangular buttons with rounded corners.
  - **Location**: Top section of the grid.
  - **Contents**: Text labels indicating the color of the button ("Red," "Blue," "Green," etc.).
  - **Visual styling**: Buttons have a gradient fill transitioning from darker to lighter shades, with a white border.
  
- **Bottom Section - Custom Color Buttons**: 
  - **Visual description**: Rectangular buttons with rounded corners.
  - **Location**: Bottom section of the grid.
  - **Contents**: Text labels indicating custom color names ("Custom1," "Custom2," "Custom3").
  - **Visual styling**: Buttons have a gradient fill transitioning from darker to lighter shades, with a white border.

- **Main Heading**: 
  - **Visual description**: A rectangular banner with rounded corners.
  - **Location**: At the very top of the grid.
  - **Contents**: The word "BUTTONS" in white text.
  - **Visual styling**: Banner has a blue gradient fill with a white border.

### Visual Flow / Relationships
- **Most Prominent Element**: The main heading "BUTTONS" is the most prominent due to its placement at the top and larger font size.
- **Arrows/Connectors**: There are no arrows or connectors in this image.
- **Spatial Relationships**: Elements are arranged in a grid layout, with the "Disabled Buttons" section above the "Custom Color Buttons" section. Each button within these sections is aligned horizontally and vertically within its respective row and column.

</details>

<p></p>



Important

 This content is intended as a companion to the tutorial world of the same name, which you can access through the desktop editor. When you open the tutorial world, a copy is created for you to explore, and this page is opened so that you can follow along. For more information, see [Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

In this example world, we explore the core capabilities of custom UIs, which enable you to build custom 2D interfaces in your worlds.

Example worlds are intended to provide simple, clear, and well-documented examples of platform features. Also included is relevant information about TypeScript and coding in general. Feedback is welcome.

This doc is intended to be a companion to the example world listed below.

For platform documentation on custom UIs, see [Custom UI](../../../Desktop%20editor/Custom%20UI/Video%20presentation%20of%20creating%20performant%20custom%20UIs%20in%20Meta%20Horizon%20Worlds.md).

## Before You Begin

Before you begin exploring this world, please verify that you have reviewed and met the prerequisites for access. See [Getting Started with Tutorials](../../Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md).

### Enable Auto-start of the simulation

Custom UIs are generated entirely from TypeScript code. If Auto-start the simulation is disabled when you preview your world in desktop editor, no TypeScript code is executed, and all of your custom UIs are not visible.

In the desktop editor, click the three-dot menu in the toolbar. Enable the following settings:

* Auto-start simulation on Preview entry
* Auto-stop simulation on Preview exit

<details>
<summary>Preview Configuration panel</summary>

<p></p>

[Preview Configuration panel](../../../image_data/e7cd02808020de80d9fea8ae315373bf83fb3475fc6b2c5c87a0265643daea25.md)

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



## Overview

This world is set up as a sequence of stations, each of which explore a different type of custom user interface (CustomUI). From each station, you can learn:

* Elements of custom UIs
* How to initialize custom UIs of different types
* How to explore the APIs
* How to organize your code

### Usage

In your world, you may need to display custom messaging to your visitors or to provide kiosk-style interactivity for selecting things from a screen. For example, you may need to deploy a custom UI to assist Players in outfitting themselves for exploring your world.

#### Performance considerations

* Try to keep the main thread CPU cost for a customUI:
  + Local client: below 0.5ms per frame
  + Server: below 1.5ms per frame
* Minimize binding set calls.
  + Binding `set()` method causes a ReactVR refresh.
  + `set()` calls and callbacks are networked RPC events between client and server. Total time for each async operation is bound by network latency on the viewer.

### Elements

A custom interface is composed of:

* An instance of the Custom UI gizmo
  + By default, this object has no visual appearance at runtime. All of its visual characteristics are defined through TypeScript.
* An associated TypeScript script
  + This defines the 2D panel, its elements, their styles, and any interactivity in the UI.
* Any related assets, such as referenced objects, textures, audio, etc.
  + The custom UI may reference or have effects on other elements in the world.

### General Tips

There have been reported issues with performance of custom UI’s. The following tips have been provided to help with performance of your custom UI’s:

* Avoid using or updating custom UIs in conjunction with the world.onUpdate event.
* Avoid making updates to the display of the panel using for/next loops.
* Each time that a panel is updated requires a network call.
* Split multiple custom UIs across multiple Custom UI gizmos.
* Try to make custom UIs as flat as possible.
  + Every layer in a visible custom UI is rendered, even if it is not seen.
  + Set panels that are not being shown to users to be invisible, which stops them from being rendered.

## How to Use This World

To explore the TypeScript of this Examples Tutorial, you should use the desktop editor, which allows you to use your integrated development environment and to explore all world scripts locally. You can also preview results on your desktop.

### Create a copy

Create a copy of this Examples Tutorial first. Then, you can modify the scripts as needed.

You can create your own copy from the desktop editor or from the headset. For more information on this workflow, see
[Access Tutorial Worlds](../../Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md).

### Start at Station 1

These examples are separated into different stations. Station 1 represents the simplest example (font display), with each subsequent station adding more complexity or new customUI features.

**Tip**: When you land in the world, Station 1 is to your left.

### Review the Code

Comments in the code provide additional information on how to use it. If you’ve created a clone of the source world, you can modify the code to explore it further.

### Use in Your World

For more information on how to apply assets or scripts from this world to yours, see [Use Assets from Tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/use-assets-from-tutorials).