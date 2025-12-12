Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/debug-console-gizmo

# Debug console gizmo

When you create your world, there are helpful development tools for [debugging and optimization](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials). One such tool is the debug console [gizmo](About%20gizmos.md), which allows you to debug scripts in real time while you’re in the virtual environment with the headset on. This is often referred to as in-world debugging. It is designed to display script messages with an in-world interface for viewing debug information, making it more suitable for interactive and real-time debugging scenarios. You can see logs and debug information as you interact with the world. In comparison, the standard console displays similar information in the log viewer in the [desktop editor](../Desktop%20editor/Desktop%20Editor.md) under the tab **Console**.

The following image shows the [debug console](../Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md) gizmo while you have the headset on, providing an immersive debugging experience. As shown, the **Start world**, **Stop world**, and **Rest world** buttons control the executing states of the scripts.

<details>
<summary>Debug console gizmo showing debug messages in-world console</summary>

<p></p>

[Debug console gizmo showing debug messages in-world console](../image_data/4c1fa7eff63b3ccf9d7a2491137c896bc159288d26f743b1cb081be5b3cfc62f.md)

### Overview
The image displays a debug console interface overlaid on a game environment. The console has a dark background with light text and buttons, and it is situated in the foreground against a backdrop of a game world featuring a purple sky, a gate, and some trees.

### Key Elements
- **Title**: "Debug Console" located at the top-left corner.
- **Buttons**: Three blue buttons labeled "Start world," "Stop world," and "Reset world" are positioned near the top right.
- **Search Bar**: A search bar with a magnifying glass icon is centered below the buttons.
- **Clear Button**: A "Clear" button is located to the right of the search bar.
- **Message Box**: A message box contains a message that reads "Hello, World! at Shoot.start (Shoot.ts:55:16) (Shoot)" with "(2)" indicating the number of messages.
- **Message Label**: A label "MESSAGE" is placed next to the message box.
- **Background**: The game world behind the console features a purple sky, a gate, and some trees.

### Visual Flow / Relationships
The most prominent visual element is the debug console itself. The buttons are arranged horizontally above the search bar, which is centrally located. The message box is below the search bar, and the label is to its left. The game world forms the background, providing context but not interacting with the console.

</details>

<p></p>



The following image shows the debug console gizmo while you are using the desktop editor without the headset. The log messages are also displayed under the desktop editor **Console** tab.

<details>
<summary>Debug console gizmo showing debug messages in the desktop editor console</summary>

<p></p>

[Debug console gizmo showing debug messages in the desktop editor console](../image_data/d8012826b38fc46be6ddff2fe8811ef1f20db51ec0cde3e69037f20a31604f56.md)

### Overview
The image depicts a user interface from a development environment, likely a game or simulation editor. It includes a character model in a virtual environment, a debug console, and various interactive elements such as buttons and menus.

### Key Elements
- **Character Model**: A female character with blue hair, wearing a pink hoodie and jeans, is positioned in the center-right of the screen. She is facing away from the viewer.
- **Debug Console**: Located on the right side of the screen, it displays a message: "Hello, World!" along with some system information.
- **Control Panel**: On the left side, there is a circular control pad with a white center, likely for movement or interaction within the environment.
- **Menu Icons**: At the top-left corner, there are two icons resembling a menu and a pause button.
- **Simulation View**: At the bottom-left corner, there is a dropdown labeled "Simulation View" indicating different views available.
- **Console Tab**: At the bottom-center, there is a tab labeled "Console" which is currently active.
- **Performance Metrics**: Below the console tab, there are indicators for system performance metrics such as CPU, memory, and network usage.

### Visual Flow / Relationships
- The most prominent visual element is the character model, as she is the focal point of the scene.
- The debug console provides contextual information about the simulation environment.
- The control panel and menu icons provide interactive options for the user.
- The layout follows a typical user interface design with clear sections for different functionalities.

</details>

<p></p>



The following sections show you how to access and configure the gizmos so you can start debugging in VR.

## Access the debug console gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the debug console gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “debug console” in the search field.
- Select the debug console gizmo and drag it into the scene.
  You can now edit the new gizmo properties in the Properties panel.

## Properties

All objects in a world are represented by [entities](../Reference/core/Classes/Entity.md). Entities have their respective properties such as position, rotation, and scale. In the **Properties** panel, edit the debug console gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

The visibility of the debug console is configured under [**Visibility**](../Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md#controlling-visibility-of-the-debug-console). The options are **Edit Mode Only**, [**Edit and Preview Mode**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) , or [**In Published World**](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%201.md#section-4-play-in-your-world-on-mobile). Be aware that the gizmo is only visible in the Build mode when **Visibility** is in the default **Edit Mode Only**.

<details>
<summary>Debug console gizmo's visibility options</summary>

<p></p>

[Debug console gizmo's visibility options](../image_data/264e8b491a1dd4d70e69f093c89ba2a97de968025c1366dd5f2ae45df32a55be.md)

### Overview
This image depicts a user interface element showing a dropdown menu within a settings or configuration panel. The dropdown is part of a larger interface that includes a sidebar with expandable sections labeled "Behavior" and "Gameplay Tags."

### Key Elements
- **Dropdown Menu**: Located in the upper right area of the image. It contains options such as "In Published World," "Edit Mode Only," "Edit And Preview Mode," and "In Published World" again at the bottom.
  - **Visual description**: A rectangular dropdown with rounded corners.
  - **Location**: Top-right area of the image.
  - **Contents**: Contains text options listed vertically.
  - **Visual styling**: Dark background with white text, drop shadow effect for depth.

- **Sidebar Section**: Located on the left side of the image.
  - **Visual description**: A vertical panel with expandable sections.
  - **Location**: Left side of the image.
  - **Contents**: Includes "Behavior" and "Gameplay Tags" sections, both with a downward arrow indicating expandable content.
  - **Visual styling**: Dark background with light-colored text and a subtle highlight under the expanded section.

- **Search Bar**: Located at the bottom left.
  - **Visual description**: A rectangular search bar with a magnifying glass icon.
  - **Location**: Bottom-left corner of the image.
  - **Contents**: Displays the placeholder text "Search attacks" in a lighter font.
  - **Visual styling**: Dark background with white text and a blue magnifying glass icon.

### Visual Flow / Relationships
- **Most Prominent Element**: The dropdown menu is the most prominent due to its central placement and the drop shadow effect.
- **Arrows and Lines**: The downward arrow next to "Behavior" indicates an expandable section.
- **Reading Order**: The dropdown menu is accessed by clicking on the "In Published World" option in the "Behavior" section.

</details>

<p></p>



**Note**: The Edit Mode that the Properties panel refers to is also known as the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). See also the [Build mode](../VR%20tools/Getting%20started/Use%20your%20controllers%20in%20Build%20Mode%20of%20Meta%20Horizon%20Worlds.md) in VR.

## What’s next?

Now you’ve been introduced to the debug console gizmo, further your learning with tutorial worlds with completed samples, and developer guides:

* [Meta Horizon Creator Program creators manual on the debug console gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#debug-console-gizmo)
* [Developer tools for tutorials](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/getting-started-with-tutorials/developer-tools-for-tutorials)
* [The debug console](../Scripting/Get%20started%20with%20TypeScript/The%20Debug%20Console.md)
* [Roof top racer tutorial worlds on testing tools](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/horizon-traversal-sample-world/module-2-overall-game-manager-systems#testing-tools)
* [TypeScript Tutorial](../Scripting/Get%20started%20with%20TypeScript/TypeScript%20Tutorial.md)