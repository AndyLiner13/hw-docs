Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/developing-for-web-and-mobile-players-tutorial/module-2-the-hud-system

# Module 2 - The HUD System

## Systems Overview

In this module, we begin building the systems to support the mechanics of our puzzle game. These systems apply to all rooms (puzzles) of the game:

| **System** | **Description** |
| --- | --- |
| HUD system | Provides guidance and tips to help the player solve the challenges |
| Puzzle Manager | - Monitors how long a player has been trying to complete a room; triggers clues.  - Determines when a puzzle is complete, and the player can advance. |
| Camera Manager | Controls the camera based on room environment and device type for optimal experience. |
| Player Manager | Manages players entering and leaving the game. |

Let’s start with the HUD first!

## Overview of the HUD

To build the HUD, we add in objects and attach them to the player’s screen. In the tutorial world, we have used a small cube textured with a pattern to which we have added a text gizmo. You can find these objects under the name HintHUDPlayer in the tutorial world. Feel free to modify the HUD to your liking, using other shapes, textures or fonts to make your game more attractive!

<details>
<summary>Screenshot of one of the HUD entities in the world</summary>

<p></p>

[Screenshot of one of the HUD entities in the world](../../../image_data/43d75a6b9914020cfcf780c7a5bcdcfb0a1a1c52b5e9f620c971375950a1c908.md)

### Overview
This image depicts a user interface from a game development environment, likely a scene editor or level designer. The central area shows a grid layout with objects placed within it, and a floating text box providing instructions. On the right side, there is a properties panel displaying various settings related to the selected object.

### Key Elements
- **Central Scene Area**: A grid layout with several objects placed within it. The objects appear to be simple geometric shapes, possibly representing game assets.
- **Floating Text Box**: Located centrally, containing the instruction: > "Find the exit code digits under the objects in the room, and look at the wall to know their order."
- **Properties Panel**: Positioned on the right side, showing properties such as "Visible," "Collidable," "Collision Layer," "Motion," "Animation," "Loop," "Play on Start," "Speed," and "Enable client smoothing." There are also fields for "Position," "Rotation," "Scale," "Tint Color," "Tint Strength," "Brightness," and a "Texture Asset" dropdown.
- **Scene Navigation Controls**: Located at the top left, with options for "Local," "Center," and a rotation angle indicator set to 10°.

### Visual Flow / Relationships
The most prominent visual element is the floating text box, which draws attention due to its central placement and larger font size compared to the rest of the interface. The grid layout in the central scene area serves as the backdrop for the objects. The properties panel on the right provides contextual information about the selected object, while the scene navigation controls offer tools for manipulating the view within the scene.

</details>

<p></p>



### Web and mobile compatibility for the HUD

To make the HUD object compatible with web and mobile, you must change a few options in the Properties panel of the object:

| **Property** | **Change setting to** |
| --- | --- |
| Avatar Attachable | Anchor |
| Attachable By | Everyone |
| Anchor To | Torso |
| Attach to 2D Camera | Enable it. |

Additional 2D Screen properties appear in the panel to enable you to position the object in the screen, rotate it, and/or scale it.

<details>
<summary>Screenshot of the Properties panel for the HUD object</summary>

<p></p>

[Screenshot of the Properties panel for the HUD object](../../../image_data/fb113bb3af04efa4778f91f701bcd83bbe833c8ef7d4a2f4fe1bb8521db7946f.md)

### Overview
This image depicts a settings interface with various configuration options for a specific feature, likely related to character interaction or animation in a game or application. The layout is structured with labels on the left and corresponding input fields or dropdown menus on the right.

### Key Elements
- **Animate Group**: A toggle switch located at the top right, indicating whether the group should animate.
- **Collision Events From**: A dropdown menu labeled "Nothing," allowing selection of collision events.
- **Who Can Grab?**: A dropdown menu labeled "Anyone," specifying who can interact with the object.
- **Avatar Attachable**: A dropdown menu labeled "Anchor," determining the attachment point.
- **Attachable By**: A dropdown menu labeled "Everyone," setting permissions for attachment.
- **Anchor To**: A dropdown menu labeled "Torso," defining the anchor point for attachment.
- **Anchor Position**: Three input fields for X, Y, and Z coordinates, currently set to 0.
- **Anchor Rotation**: Similar to the anchor position, with three input fields for X, Y, and Z rotations, also set to 0.
- **Attach to 2D Screen**: A toggle switch on the right side, indicating whether the object should be attached to the screen.
- **2D Screen Position**: Three input fields for X, Y, and Z coordinates, with values set to 0, 0.65, and 1 respectively.
- **Keep Ownership On Collision**: A toggle switch at the bottom right, controlling behavior during collisions.

### Visual Flow / Relationships
The interface is organized in a grid-like structure, with labels on the left and corresponding controls on the right. The toggle switches and dropdown menus are arranged vertically, while the input fields are grouped together under their respective labels. The visual hierarchy is clear, with the toggle switches being the most prominent due to their placement and distinct color.

</details>

<p></p>



You can use the 2D Screen properties to position as needed. These coordinates are in screen space. The X and Y coordinates control the position of the object in the screen, where [0, 0] is the center of the screen, [-1, -1] is the bottom left corner of the screen, and [1, 1] is the top right corner of the screen. The Z coordinates control how far away from the camera the object is.

Remember that the Meta Horizon Worlds UI is rendered on top of the game display on Web and Mobile. This overlap includes images for buttons to open a menu, different buttons to control the player and grabbable objects, and more.

<details>
<summary>Screenshot of the desktop editor screen with web and mobile gameplay buttons overlaid on the screen</summary>

<p></p>

[Screenshot of the desktop editor screen with web and mobile gameplay buttons overlaid on the screen](../../../image_data/f7faf0ead171341388da0d0f3a102835bcb016db2cd75d7aab7643ae9c8df07e.md)

### Overview
The image depicts a virtual environment resembling a room with tiled walls and floors. A character is standing in the center, facing away from the viewer. The room contains various objects and interfaces, suggesting a game or simulation setting.

### Key Elements
- **Character**: A bald figure wearing a dark gray T-shirt and blue jeans stands in the center of the room. The character is facing away from the viewer.
- **Target**: A circular target with concentric rings is mounted on the wall above the character.
- **Room Layout**: The room has tiled walls and floors, with a grid pattern. There are platforms and structures on both sides of the room.
- **Signage**: On the right side of the room, there is a sign that reads "Cannon (VR Players Only)".
- **Control Panel**: On the left side, there is a control panel with a lever and a ball. Above the control panel, there are icons labeled "TAB" and "ESC".
- **Interface Elements**: Icons for mute, volume, and settings are located at the top right corner of the screen.
- **Floor Target**: A red and white target is placed on the floor in front of the character.

### Visual Flow / Relationships
- **Most Prominent Element**: The character is the focal point of the image.
- **Arrows/Connections**: There are no explicit arrows or connections between elements.
- **Spatial Relationships**: The elements are arranged in a symmetrical layout around the character. The target is above the character, and the control panel is to the left. The interface elements are at the top right.

</details>

<p></p>



**Tip**: Try to keep your UI in the center and left side of the screen, which is usually not obstructed by platform-managed UI elements. Test your world on different devices to verify that the UI is visible on all platforms. This step should be a regular part of your web and mobile testing cycles.

## Attach Script to HUD

To get the HUD working, the HUD object must be attached to the player via script.

Our HUD manager script contains a list of HUD entities, one of which is attached to the players when they enter the world.

We will have a HUD manager that will have a list of HUD entities, and it will attach one of the objects to the players when they enter the world.

#### sysHintHUDEntity:

Search for the HintHUDPlayer objects and make sure that the sysHintHUDEntity script is attached and that it has a reference to the text gizmo of the entity:

<details>
<summary>Screenshot of Properties panel of sysHintHUDEntity with HintHUDText selected for the Text property</summary>

<p></p>

[Screenshot of Properties panel of sysHintHUDEntity with HintHUDText selected for the Text property](../../../image_data/82b8efcae52ac409b1bc7d1072a46cb7d47aa8fdc038289646008ada65b63e54.md)

### Overview
This image depicts a user interface element, specifically a settings or configuration panel within a software application. The panel includes a dropdown menu, a text input field, and a button labeled "HintHUDText."

### Key Elements
- **Dropdown Menu**: Located at the top-left, it has a downward arrow indicating a dropdown functionality. The text inside the dropdown reads `sysHintHUDEntity:sysHint...`.
- **Text Input Field**: Positioned below the dropdown, it is labeled "Text" and contains no visible text.
- **Button**: Situated to the right of the text input field, it is labeled "HintHUDText" with a small icon resembling a camera lens next to it.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu due to its placement and the downward arrow indicating interaction. The text input field and button are secondary elements, arranged horizontally beneath the dropdown. There are no arrows or lines connecting these elements, suggesting a linear reading order from left to right.

</details>

<p></p>



We will use events to communicate between the HUD entities, the HUD manager and any other system that requires displaying a hint.

### HUD events

#### Specify events:

Open the sysEvents script and check the following events:

* OnRegisterHintHUDEntity: we use this event to populate the list of HUD entities in the HUD manager.
* OnDisplayHintHUD: we use this event to communicate to the HUD manager that we want to display a hint with a specified text for some duration to specified players.

```
// Hint HUD events
OnRegisterHintHUDEntity: new hz.LocalEvent<{hudentity: hz.Entity, HUDComponent: hz.Component}>("OnRegisterHintHUDEntity"),
OnDisplayHintHUD: new hz.NetworkEvent<{players: hz.Player[], text: string, duration: number}>("OnDisplayHintHUD"),
```

#### Import events:

Next, open the sysHintHUDEntity script and import these events at the top of the file in order to use them:

```
import {sysEvents} from 'sysEvents';
```

#### Send local event:

On startup, we must send the OnRegisterHintHUDEntity events to notify the HUD manager to add this HUD entity to the list of available HUD entities. This way, the HUD manager will be able to use the HUD entities when needed. Find the following TODO in the script:

```
// TODO: Notify the HintHUDManager to register this entity and this component
```

Replace the above with the following code to send the OnRegisterHintHUDEntity event:

```
this.sendLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, {
  HUDEntity: this.entity,
  HUDComponent: this,
});
```

Notice that this event sends 2 parameters:

* HUDEntity: A reference to the entity, which is used to attach the entity to the players when they enter the world.
* HUDComponent: A reference to the component, which is used by the HUD manager to call the public function UpdateHintHUDText from within this script.

### Control HUD visibility

Finally, we want to control the visibility of the HUD entities so that only the player that owns the HUD entity can see it, and no other player can see it.

To begin, we disable the visibility of the entity at start. Find the following TODO in the script:

```
// TODO: Hide the entity by default
```

Replace the above with this line of code to set its visibility to no players:

```
this.entity.setVisibilityForPlayers([], hz.PlayerVisibilityMode.VisibleTo);
```

The HUD manager is responsible for updating the visibility of the entity after it’s attached to a player.

### Finished sysHintHUDEntity script

After these modifications, your sysHintHUDEntity script should look like the following:

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';

export class sysHintHUDEntity extends hz.Component {
  static propsDefinition = {
    Text: {type: hz.PropTypes.Entity},
  };

  start() {
    // Hide the entity by default
    this.entity.setVisibilityForPlayers([], hz.PlayerVisibilityMode.VisibleTo);

    // Notify the HintHUDManager to register this entity and this component
    this.sendLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, {
      HUDEntity: this.entity,
      HUDComponent: this,
    });
  }

  // Public function to update the text of this entity
  // This is called by the HintHUDManager
  public UpdateHintHUDText(text: string) {
    this.props.Text?.as(hz.TextGizmo)?.text.set(text);
  }
}
hz.Component.register(sysHintHUDEntity);
```

That’s it! Our HUD entities are ready to be used by the HUD manager.

### One HUD per Player

But before that, please verify that you have one HUD entity for each possible player in your world. One HUD entity is attached to each incoming player:

<details>
<summary>Screenshot of HUD entities in the Hierarchy panel, one for each possible player</summary>

<p></p>

[Screenshot of HUD entities in the Hierarchy panel, one for each possible player](../../../image_data/f679d744e32797f03c8f8d5455ad34afd9cbb10e8e326afc218dfbcc9dc5c7f8.md)

### Overview
This image displays a list of items in a vertical arrangement against a dark background. Each item has a small icon and text next to it.

### Key Elements
- **Visual description**: The items are represented as bullet points with icons and text.
- **Location**: The elements are arranged vertically down the left side of the image.
- **Contents**: 
    - **Icon**: A small hexagon with a circle inside.
    - **Text**: The text reads "HintHUDPlayer0", "HintHUDPlayer1", "HintHUDPlayer2", and "HintHUDPlayer3".
- **Visual styling**: The background is dark gray, the icons are white, and the text is light gray.

### Visual Flow / Relationships
- The most prominent visual element is the list of items.
- There are no arrows, lines, or connectors, so the reading order is implied by the vertical arrangement.
- Elements are aligned vertically, with each item having the same width and spacing.

</details>

<p></p>



### sysHintHUDManager

Let’s modify the sysHintHUDManager script now. First, import the events and the sysHintHUDEntity script:

```
import {sysEvents} from 'sysEvents';
import {sysHintHUDEntity} from 'sysHintHUDEntity';
```

The above import declarations pull in the class definitions from each of the from files.

#### Create event listener

The first thing to do is listen to the OnRegisterHintHUDEntity event to add the HUD entities to the list of available HUD entities. Find the following TODO in the script:

```
// TODO: Register all hint HUDs to keep track of their entities and components
```

Replace the above with the following code, which adds the entities and its components to the hintHUDEntities and hintHUDComponents lists, respectively:

```
this.connectLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, data => {
  this.hintHUDEntities.push(data.HUDEntity);
  this.hintHUDComponents.push(data.HUDComponent as sysHintHUDEntity);
});
```

Notice that the HUD entities are sending the OnRegisterHintHUDEntity event in the start() method, while the HUD manager starts listening to this event on PreStart(). This is intentional to preserve the following order:

| **Sequence** | **Method** | **Action** |
| --- | --- | --- |
| 1 | PreStart() | HUD Manager starts listening for the OnRegisterHintHUDEntity event |
| 2 | start() | HUD entities send the OnRegisterHintHUDEntity event, notifying the HUD manager of existence after it has started listening. |

We now have a list of all HUD entities in the world. Each player is assigned a different HUD entity, and we use the player index to identify the entity that belongs to each player.

The next step is to display the HUDs when needed:

* Listen to the OnDisplayHintHUD event.
* Update the text of the HUDs by using their component reference and calling the UpdateHintHUDText() function.
* Attach the player’s HUD to the player’s avatar, and set its visibility so the player can see its own HUD.
* Set a timeout to hide the HUD after some time.

Find the following TODO in the script:

```
// TODO: Display the hint HUD of each player when a broadcast event is received
```

Replace the above with the following:

```
this.connectNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, data => {
  // Reset timeout
  this.async.clearTimeout(this.timeoutID);

  // Update all hint HUDs texts via their components
  this.hintHUDComponents.forEach(hudComponent => {
    hudComponent.UpdateHintHUDText(data.text);
  });

  // Show the hint HUD of each player
  data.players.forEach(player => {
    // Display a popup instead of the hint HUD for VR players
    if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
      this.world.ui.showPopupForPlayer(player, data.text, data.duration);
    } else {
      let playerIndex = player.index.get();

      // Display the hint HUD
      if (playerIndex < this.hintHUDEntities.length) {
        let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
        playerHintHUDEntity
          .as(hz.AttachableEntity)
          ?.attachToPlayer(player, hz.AttachablePlayerAnchor.Torso);
        playerHintHUDEntity.setVisibilityForPlayers(
          [player],
          hz.PlayerVisibilityMode.VisibleTo,
        );
      }

      // Set timeout to hide the hint HUD after a certain amount of time
      this.timeoutID = this.async.setTimeout(
        () => this.HideHintHUD(),
        data.duration * 1000,
      );
    }
  });
});
```

To hide the HUD after a time period, we must detach it and set its visibility to be not visible. Find the following TODO in the script:

```
// TODO: Detach and hide a hint HUD for all players
```

Replace the above with this function:

```
private HideHintHUD() {
  let players = this.world.getPlayers();
  players.forEach(player => {
    let playerIndex = player.index.get();
    if (playerIndex < this.hintHUDEntities.length) {
      let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
      playerHintHUDEntity.as(hz.AttachableEntity)?.detach();
      playerHintHUDEntity.setVisibilityForPlayers([], hz.PlayerVisibilityMode.VisibleTo);
    }
  });
}
```

### Finished sysHintHUDManager script

After you have completed the previous changes, your sysHintHUDManager script should look like the following:

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';
import {sysHintHUDEntity} from 'sysHintHUDEntity';

class sysHintHUDManager extends hz.Component<typeof sysHintHUDManager> {
  static propsDefinition = {};

  private hintHUDEntities = new Array<hz.Entity>();
  private hintHUDComponents = new Array<sysHintHUDEntity>();

  private timeoutID = -1;

  preStart() {
    // Register all hint HUDs to keep track of their entities and components
    this.connectLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, data => {
      this.hintHUDEntities.push(data.HUDEntity);
      this.hintHUDComponents.push(data.HUDComponent as sysHintHUDEntity);
    });
  }

  start() {
    // Display the hint HUD of each player when a broadcast event is received
    this.connectNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, data => {
      // Reset timeout
      this.async.clearTimeout(this.timeoutID);

      // Update all hint HUDs texts via their components
      this.hintHUDComponents.forEach(hudComponent => {
        hudComponent.UpdateHintHUDText(data.text);
      });

      // Show the hint HUD of each player
      data.players.forEach(player => {
        // Display a popup instead of the hint HUD for VR players
        if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
          this.world.ui.showPopupForPlayer(player, data.text, data.duration);
        } else {
          let playerIndex = player.index.get();

          // Display the hint HUD
          if (playerIndex < this.hintHUDEntities.length) {
            let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
            playerHintHUDEntity
              .as(hz.AttachableEntity)
              ?.attachToPlayer(player, hz.AttachablePlayerAnchor.Torso);
            playerHintHUDEntity.setVisibilityForPlayers(
              [player],
              hz.PlayerVisibilityMode.VisibleTo,
            );
          }

          // Set timeout to hide the hint HUD after a certain amount of time
          this.timeoutID = this.async.setTimeout(
            () => this.HideHintHUD(),
            data.duration * 1000,
          );
        }
      });
    });
  }

  // Detach and hide a hint HUD for all players
  private HideHintHUD() {
    let players = this.world.getPlayers();
    players.forEach(player => {
      let playerIndex = player.index.get();
      if (playerIndex < this.hintHUDEntities.length) {
        let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
        playerHintHUDEntity.as(hz.AttachableEntity)?.detach();
        playerHintHUDEntity.setVisibilityForPlayers(
          [],
          hz.PlayerVisibilityMode.VisibleTo,
        );
      }
    });
  }
}
hz.Component.register(sysHintHUDManager);
```

## Checkpoint

We’re done with the HUD system!

#### Test:

Now, you can use the OnDisplayHintHUD event to display a hint to 1 or more players, with a specified text and duration (in seconds). You can add the following in the start() method of a test script:

```
this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
  players: [player],
  text: "This is an example",
  duration: 5,
});
```

This system is used throughout the puzzle game to teach players how to use objects or help them resolve the puzzles.

## Additional Documentation and APIs

#### Additional Documentation:

* [2D UI for Web and Mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/2d-ui-for-web-and-mobile)
* [Safe Placement of UI Controls](../../../Mobile%20and%20web/Designing%20worlds%20for%20mobile%20and%20web/Safe%20Placement%20of%20UI%20Controls.md)
* [Events](../../../Scripting/Events/Local%20Events.md)

#### API docs:

* [CodeBlockEvent](https://horizon.meta.com/resources/scripting-api/core.codeblockevent.md/?api_version=2.0.0)
* [LocalEvent](https://horizon.meta.com/resources/scripting-api/core.localevent.md/?api_version=2.0.0)
* [NetworkEvent](https://horizon.meta.com/resources/scripting-api/core.networkevent.md/?api_version=2.0.0)
* [Player.DeviceType](https://horizon.meta.com/resources/scripting-api/core.player.devicetype.md/?api_version=2.0.0)