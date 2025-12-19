Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-spawn-point-gizmo

# Spawn point gizmo

In Meta Horizon Worlds, a spawn point refers to a designated location within a virtual environment where [entities](../Reference/core/Classes/Entity.md) such as players, enemies, and NPCs appear or spawn when they enter the world. These spawn points are important for managing entities’ entry and movement within the game.

The spawn point [gizmo](About%20gizmos.md), is a helper tool that you can use to enhance the creation and interactivity of worlds. In the desktop editor, it is a visual representation of a spawn point with editable options for adjusting properties such as position, rotation, and scale. You can also use the [SpawnPointGizmo API](../Reference/core/Classes/SpawnPointGizmo.md) to facilitate the management of spawn points such as [respawn](../MHCP%20program/Community%20guides/CodeBlocks%20to%20TypeScript.md#simplerespawnscriptts). Additionally, when developing for mobile and web platforms, the spawn point gizmo can be configured to control [player camera’s point of view](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-4-camera-manager#spawnpoint-camera-control).

**Note:** While you can access and use spawn point gizmo in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this introductory topic to spawn point gizmo focuses on the creator experience in the [desktop editor](../Get%20started/Install%20the%20desktop%20editor.md).

## Limitations

When the entity is teleported to another location, a transition scene may be included. The use of this gizmo may also affect camera view, player gravity, and speed.

## Access and use the spawn point gizmo

In the Meta Horizon Worlds desktop editor, do the following to access the spawn point gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “spawn point” in the search field.
- Select the spawn point gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Spawn point properties

The spawn point gizmo properties can be configured in the [Properties panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane) of the desktop editor or through [scripting](../Scripting/Get%20started%20with%20TypeScript/Using%20TypeScript%20in%20Meta%20Horizon%20Worlds.md).

### Mobile camera options

The spawn point gizmo includes enhanced camera options for mobile and web platforms. These options enable fine-tuning of the camera behavior based on how players will be viewing the world, ensuring optimal visual presentation regardless of device orientation.

* **Mobile Camera**: A mobile-specific setting which allows you to configure camera behavior. This can greatly improve the accessibility to your world for mobile users.

  <details>
  <summary>Screenshot shows the desktop editor</summary>
  
  <p></p>
  
  [Screenshot shows the desktop editor](../image_data/0e4f75d49c4c7b4b8d0782b215327849e0fb9db1235dbbd4d6e9256d19b01579.md)
  
  ### Overview
  This image depicts a user interface element showing a dropdown menu with camera options under the "Landscape" section of a mobile camera settings interface. The dropdown is open, revealing several camera modes.
  
  ### Key Elements
  - **Visual description**: The dropdown menu has a dark background with white text.
  - **Location**: The dropdown menu is located in the upper right area of the image.
  - **Contents**: The text within the dropdown includes "Third Person," "First Person," "Orbit," "Pan," and "Follow." The "Follow" option is highlighted with a checkmark next to it.
  - **Visual styling**: The dropdown has a dark gray background with white text. There are no borders around the dropdown itself, but there is a subtle shadow effect underneath the dropdown, giving it a slight elevation.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The "Follow" option with the checkmark is the most prominent due to its highlighted status.
  - **Arrows, lines, connectors**: There are no arrows, lines, or connectors visible in the image.
  - **Spatial relationships**: The dropdown menu is positioned to the right of the "Landscape" section heading, which is located in the top-left corner of the image.
  
  </details>
  
  <p></p>
  
  
* **Portrait/Landscape separation**: You can define different visual parameters for each orientation to optimize the player experience across different device orientations

  <details>
  <summary>Screenshot shows the desktop editor</summary>
  
  <p></p>
  
  [Screenshot shows the desktop editor](../image_data/f40773e5897ae70f7ad97fdf598c643ea12207bf97c68d8350159b3dcf4c2cf3.md)
  
  ### Overview
  This image displays a settings interface with adjustable parameters for camera settings in both landscape and portrait modes. The layout is structured with two expandable sections, each containing multiple configuration options.
  
  ### Key Elements
  - **Landscape Section**:
    - **Camera Auto Follow Delay**: Located in the top-left area, the value is set to `2`.
    - **Enable Continuous Rotation**: Positioned to the right of the delay setting, this option has a toggle switch that is currently off.
    - **Camera Distance**: Found below the continuous rotation toggle, its value is `5`.
    - **Allow Horizon Levelling**: Below the camera distance, this option also has a toggle switch, which is off.
    - **Rotation Rate**: Positioned below the horizon levelling toggle, its value is `1`.
    - **Camera Vertical Offset**: At the bottom of the landscape section, its value is `0`.
  
  - **Portrait Section**:
    - **Camera Auto Follow Delay**: Located in the top-left area, the value is set to `2`.
    - **Enable Continuous Rotation**: Positioned to the right of the delay setting, this option has a toggle switch that is currently off.
    - **Camera Distance**: Below the continuous rotation toggle, its value is `6.5`.
    - **Allow Horizon Levelling**: Below the camera distance, this option has a toggle switch that is currently on.
    - **Rotation Rate**: Positioned below the horizon levelling toggle, its value is `1`.
    - **Camera Vertical Offset**: At the bottom of the portrait section, its value is `0.5`.
  
  ### Visual Flow / Relationships
  The interface is organized into two main sections, each with its own set of parameters. The parameters within each section are arranged vertically, with the most prominent elements being the toggle switches for enabling features. The visual hierarchy is clear due to the distinct separation of the two sections.
  
  </details>
  
  <p></p>
  
  

## Preview and publishing configuration

### Preview orientation simulation

When testing your world in the desktop editor, you can simulate different device orientations:

- In [**Preview Configuration**](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) options, locate the **Preview orientation** setting under **Mobile and Web device simulations**.
- Change the setting to **Portrait** to simulate how the world appears in portrait orientation.
- This allows you to test and validate your spawn point camera configurations before publishing.

### World orientation publishing

When publishing your world, you can specify the target orientation:

- In the [**Publish World**](../Desktop%20editor/Settings/World%20Settings%20Modification.md#changing-world-settings) panel, navigate to the **Advanced** section.
- Set the **World Orientation** option to **Portrait** to mark your world for portrait orientation.
- Use **Save for later** to prepare your world configuration without immediately publishing.

**Note:** Setting the world orientation to **Portrait** will automatically expand the Portrait orientation options in the **Spawn point Gizmo** properties by default.

## Scripting

To govern entity lifecycles throughout the game and implement more complex and dynamic behaviors, use Meta Horizon Worlds [SpawnPointGizmo API](../Reference/core/Classes/SpawnPointGizmo.md). See [tutorial worlds](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Tutorial%20Prerequisites.md) for complete code samples and follow the [companion documentation](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md#in-the-desktop-editor) for an in-depth explanation of the implementation details.

### Portrait camera API

For advanced orientation-based camera control, you can use the experimental Portrait Camera API through scripting:

- In **Script Settings**, access the `horizon/portrait_camera` API module.
- The `PortraitCamera` class extends the standard `Camera` class with a `currentOrientation` property.
- This property returns either **PORTRAIT** or **LANDSCAPE** based on the current simulation settings.

**Note:** This is an experimental module that will be merged into the core Camera API when fully released.

#### Example usage

```
import * as hz from 'horizon/core';
import {CameraOrientation, PortraitCamera} from 'horizon/portrait_camera';

class OrientationChecker extends hz.Component<typeof OrientationChecker> {
  static propsDefinition = {};

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.entity.owner.set(player);
      },
    );

    if (this.entity.owner.get().id != this.world.getServerPlayer().id) {
      this.setUpCamera();
    }
  }

  setUpCamera() {
    let cam = new PortraitCamera();
    if (cam.currentOrientation.get().toString() == 'PORTRAIT') {
      // Configure portrait-specific camera behavior
      console.log('Portrait Options');
    } else {
      // Configure landscape-specific camera behavior
      console.log('Landscape Options');
    }
  }
}
hz.Component.register(OrientationChecker);
```

**Important:** Scripts using this API must be set to Local execution mode and owned by the target player, similar to existing camera checks.

## What’s next?

Now you’ve been introduced to the spawn point gizmo, further your learning with hands-on tutorials, tutorial worlds with completed samples, and developer guides:

* [Create your first world tutorial: designate a spawn point](../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%201.md#section-2-place-assets-in-the-scene)
* [Simple respawn script](../MHCP%20program/Community%20guides/CodeBlocks%20to%20TypeScript.md#simplerespawnscriptts)
* [Multiplayer lobby entering the match](../Tutorials/Feature%20samples/Multiplayer%20lobby%20tutorial/Module%205%20-%20Entering%20the%20Match.md)
* [Chop’N pop](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup)
* [Rooftop racer](../Tutorials/Genre%20samples/Horizon%20traversal%20sample%20world/Module%201%20-%20Setup.md)
* [Set initial PlayerCamera point of view](../Tutorials/Feature%20samples/Camera%20api%20examples%20tutorial/Module%202%20-%20PlayerCamera%20Overview.md#set-initial-playercamera-point-of-view)
* [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#spawn-point-gizmo)
* [Object spawning](../Tutorials/Feature%20samples/Spawning%20and%20pooling%20in%20typescript/Module%201%20-%20Setup.md)