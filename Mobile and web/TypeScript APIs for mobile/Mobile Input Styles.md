Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/mobile-input-styles

# Mobile Input Styles

Joystick step-input replaces traditional analog controls with discrete speed bands. This movement control system provides predictable, intentional, and responsive control for mobile players in Horizon Worlds.

<details>
<summary>Comparison of Analog input (linear speed curve) versus Step Based input (discrete speed bands)</summary>

<p></p>

[Comparison of Analog input (linear speed curve) versus Step Based input (discrete speed bands)](../../image_data/d61c992da682db77ff49b583bc00d99c3d0c01f51d9530af12d7c2474d3fad62.md)

### Overview
The image presents a comparison between two types of control systems: Analog and Step Based. It uses line graphs to illustrate the relationship between input and speed for each system.

### Key Elements
#### Left Panel - Analog
- **Graph Title**: "Analog"
- **X-Axis Label**: "Input"
- **Y-Axis Label**: "Speed"
- **Line**: A single, continuous green line starting at the origin (0,0) and increasing linearly as it moves rightward.
- **Control Knobs**: Two identical gray knobs with white centers located at the bottom corners of the graph.

#### Right Panel - Step Based
- **Graph Title**: "Step Based"
- **X-Axis Label**: "Input"
- **Y-Axis Label**: "Speed"
- **Line**: A series of horizontal steps starting at the origin (0,0) and increasing in height as it moves rightward.
- **Control Knobs**: Two identical gray knobs with white centers located at the bottom corners of the graph.

### Visual Flow / Relationships
- The most prominent visual elements are the two graphs side-by-side.
- Arrows or lines connecting the knobs to the respective graphs are not present.
- The graphs are arranged horizontally, with the "Analog" graph on the left and the "Step Based" graph on the right.
- The control knobs are positioned symmetrically below each graph.

</details>

<p></p>



## Why Step-Input is Important for Mobile Worlds

Mobile experiences in Horizon Worlds face latency challenges that make traditional analog controls feel unresponsive. Step-input addresses these issues:

**Latency Mitigation:**

* Streaming and network latency make traditional analog movement difficult to control at your target speed.
* Step-input provides near-immediate feedback that feels snappy and predictable, even with variable network conditions.

## Step-by-Step Implementation Guide

Add step-input controls to your Horizon World:

### Step 1: Create a Local Player script

- Open the **Scripts** tab.
- Press **+** to create a new script named **Local Player**.
- Click the 3 dots to open the menu.
- Hover over **Execution Mode >**.
- Select **Local**.

<details>
<summary>Setting script execution mode to Local</summary>

<p></p>

[Setting script execution mode to Local](../../image_data/aa8460ba06df68a1eafcdefc576c08ae7d6dd5143d534de083a895c5fea46452.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a script file named "LocalPlayer." The interface includes various options related to managing scripts, such as recompiling, opening, and setting execution modes.

### Key Elements
- **Dropdown Menu**: Located in the center-right area of the image, it is a black rectangular box with white text listing options.
  - **Recompile**: Text in white, located at the top of the dropdown.
  - **Open**: Text in white, positioned below "Recompile."
  - **Open With**: Text in white, situated beneath "Open."
  - **Set Default Editor**: Text in white, further down.
  - **Spawn New Gizmo**: Text in white, appearing next.
  - **Duplicate**: Text in white, followed by a line separator.
  - **Execution Mode**: Text in white, with a right arrow indicating a submenu.
    - **Default**: Text in white, highlighted with a checkmark.
    - **Local**: Text in white, also checked.
    - **Shared**: Text in white, unselected.
- **Search Bar**: Located at the top-left of the interface, it is a dark rectangular box with a magnifying glass icon on the left side.
- **Play Mode Scripts Dropdown**: Positioned above the search bar, it is a smaller dropdown menu with a label "Play Mode Scripts" and a downward-pointing arrow.
- **Script File Icon**: A small icon resembling a square with a circle in the bottom-left corner is displayed next to the "LocalPlayer" text.
- **Background**: The background is a gradient of blue shades, transitioning from darker blue at the top to lighter blue at the bottom-right corner.
- **Toolbars**: At the very top of the interface, there are several toolbars with icons and text, including "Scripts in this world," "Toggle TypeScript debugger," and others partially visible.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu, which is the focal point of the interaction. The search bar and the "Play Mode Scripts" dropdown are secondary elements that provide additional functionality. The icons and toolbars at the top offer contextual tools and settings. The spatial relationship is hierarchical, with the dropdown menu being the primary interactive element, followed by the search bar and the "Play Mode Scripts" dropdown.

</details>

<p></p>



### Step 2: Setup an Asset Pool

- Navigate to the **Build** tab.
- Select **Other** to open the **Other tools** menu.
- Search for **Asset Pool**.
- Drag **Asset Pool** into your scene.
- In the **Asset Pool** properties, disable **Auto Pool Size**.
- Create an **Empty Object** named **Local Player**.
- Assign the **Local Player** script to this object.
- Move **Local Player** as a child of **Asset Pool**.
- Duplicate **Local Player** for the maximum number of players in your scene.

<details>
<summary>Asset Pool setup with Local Player objects</summary>

<p></p>

[Asset Pool setup with Local Player objects](../../image_data/77667ae5891ad7b2d7b1a5f36b08fba572c6d8bc4bfa04e633877aca057031eb.md)

### Overview
This image depicts a user interface from a game development environment, specifically showing a Hierarchy panel, a Properties panel, and a central workspace area. The layout suggests a scene editor or asset management tool within a game engine.

### Key Elements
- **Hierarchy Panel**: Located on the left side, it displays a tree-like structure of assets and objects. The currently selected node is `[AssetPool]`, highlighted in blue. Below it, there are two child nodes labeled `Local Player` and `Local Player (1)`.
- **Properties Panel**: Positioned on the right side, it contains various attributes and settings related to the selected `[AssetPool]`. It includes sections for `Debug Data`, `Attributes`, `Behavior`, and `Gameplay Tags`.
- **Workspace Area**: The central area of the interface is a light blue gradient, likely representing the game world or a viewport where assets can be placed or interacted with.
- **Search Bar**: At the top of the Hierarchy panel, there is a search bar labeled "Search hierarchy" with a magnifying glass icon.
- **Tool Buttons**: Above the search bar, there are several tool buttons, possibly for actions like creating new assets, managing layers, or viewing different views of the hierarchy.
- **Selection Tool**: A hand cursor icon is visible at the top, indicating that the user can select elements within the hierarchy.

### Visual Flow / Relationships
The most prominent visual element is the `[AssetPool]` node in the Hierarchy panel, as it is highlighted and expanded. The workspace area serves as the backdrop for the entire interface, providing context for the assets being managed. The Properties panel is closely aligned with the Hierarchy panel, offering real-time information about the selected asset. The search bar and tool buttons are positioned at the top, providing quick access to functionality.

</details>

<p></p>



Note

The Asset Pool assigns Local Player objects to players as they join.

### Step 3: Update the Local Player script

- Edit the **Local Player** script.
- Replace with the following code:

```
import * as hz from 'horizon/core';

class LocalPlayer extends hz.Component<typeof LocalPlayer> {
  static propsDefinition = {};

  // Called on world start and when entity ownership changes
  start() {
    // Make sure we are running on a local player
    if (this.entity.owner.get().id == this.world.getServerPlayer().id) {
      // This is the server player, so we don't need to do anything
      return;
    }

    var player = new Player(this.entity.owner.get().id);
    // Set the mobile input style to comfortable
    player?.setMobileInputStyleComfortable();
  }
}
hz.Component.register(LocalPlayer);
```

Your world now sets all mobile players to use the Comfortable sprint style of Mobile Input.

## Configuration and Customization Options

Customize Mobile Input Styles using these API calls:

| Method | Description |
| --- | --- |
| `setMobileInputStyleDefault` | Returns the player to the default analog style. |
| `setMobileInputStyleComfortable` | Sets the step-input style with default thresholds. Thresholds can be overridden to allow fine tuning for the world. |
| `setMobileInputStyleAlwaysSprint` | Makes the player sprint with very small input values. |

## Best Practices

### Customization

* The default thresholds do not generally need to be changed.
* If you change thresholds, keep a dead-zone of at least 0.05 for threshold1.
* Use the `AlwaysSprint` style for fast paced action games (like Super Strike).

### Optimize for Your Game Type and Play Space

* Horizon’s default `locomotionSpeed` value is best for medium to large play spaces (e.g., Horizon Central).
* Use a lower locomotion speed if your game mostly navigates smaller spaces (e.g., Pizza Kitchen; Fire & Rescue).
  + For smaller worlds, consider disabling sprint by setting `Player.SprintMultiplier` to 1.
* If you want to use only one speed (like Super Strike), make all moveSpeeds equal.

### Platform Considerations

* Step-input **only benefits mobile** players streaming your world.
* **VR players** retain standard movement controls.
* Use the **Preview** tab to set a mobile device type and preview changes with an on-screen virtual joystick.