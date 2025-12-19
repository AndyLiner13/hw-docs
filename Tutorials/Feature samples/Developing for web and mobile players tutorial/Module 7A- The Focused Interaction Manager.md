Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/developing-for-web-and-mobile-players-tutorial/module-7a-the-focused-interaction-manager

# Module 7A: The Focused Interaction Manager

The primary development objective for this module is to build a Focused Interaction Manager, which interacts with the Focused Interaction API. Like the Camera API, the Focused Interaction API also needs to be executed locally, so we need one Focused Interaction Manager per player.

## Focused Interaction events

We start by defining the events we are going to use. Open the sysEvents script to see the events related to Focused Interaction.

In the script, we have defined several events that are directly related to the functionalities offered by the API:

| **Event Name** | **Description** |
| --- | --- |
| OnStartFocusMode | Used to enter Focus mode. |
| OnExitFocusMode | Used to exit Focus mode and to perform cleanup. |
| OnFocusedInteractionInput events | Used to receive the player’s inputs and process them. |
| OnEntityTapped | Used during implementation of the keypad (later in the module). |

```
// Focused Interaction events
OnStartFocusMode: new hz.NetworkEvent<{exampleController: hz.Entity, cameraPosition: hz.Vec3, cameraRotation: hz.Quaternion}>("OnStartFocusMode"),
OnExitFocusMode: new hz.NetworkEvent<{player: hz.Player}>("OnPlayerExitedExample"),
OnPlayerExitedFocusMode: new hz.NetworkEvent<{player: hz.Player}>("OnPlayerExitedFocusMode"),
OnFocusedInteractionInputStarted: new hz.NetworkEvent<{interactionInfo: hz.InteractionInfo}>("OnFocusedInteractionInputStarted"),
OnFocusedInteractionInputMoved: new hz.NetworkEvent<{interactionInfo: hz.InteractionInfo}>("OnFocusedInteractionInputMoved"),
OnFocusedInteractionInputEnded: new hz.NetworkEvent<{interactionInfo: hz.InteractionInfo}>("OnFocusedInteractionInputEnded"),
OnEntityTapped: new hz.NetworkEvent("OnEntityTapped"),
```

## sysFocusedInteractionManagerServer script

Before implementing the manager of each player, we must implement a small script executed on the server to manage sending the OnPlayerExitedFocusedInteraction event to all clients.

Open the sysFocusedInteractionManagerServer script and import the events at the beginning of the file:

```
import {sysEvents} from 'sysEvents';
```

Search for the following TODO:

```
// TODO: Send the OnPlayerExitedFocusedInteraction event to the local managers to notify that a player exited Focused Interaction and perform any cleanup code (for example, resetting the player's camera)
```

Replace the above with the following code:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitedFocusedInteraction,
  (player: hz.Player) => {
    this.sendNetworkBroadcastEvent(sysEvents.OnPlayerExitedFocusMode, {
      player: player,
    });
  },
);
```

Now, the local managers for individual players are able to receive this event and can perform cleanup (like resetting the camera) when a player exits Focus mode.

After this change, your sysFocusedInteractionManagerServer script should look like the following:

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';

class sysFocusedInteractionManagerServer extends hz.Component<
  typeof sysFocusedInteractionManagerServer
> {
  static propsDefinition = {};

  start() {
    // Send the OnPlayerExitedFocusedInteraction event to the local managers to notify that a player exited Focused Interaction and perform any cleanup code (for example, resetting the player's camera)
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitedFocusedInteraction,
      (player: hz.Player) => {
        this.sendNetworkBroadcastEvent(sysEvents.OnPlayerExitedFocusMode, {
          player: player,
        });
      },
    );
  }
}
hz.Component.register(sysFocusedInteractionManagerServer);
```

## Build sysFocusedInteractionManagerLocal

Let’s start building the Focused Interaction Manager for each player now. This API must be executed locally. In the Scripts panel, please verify that the sysFocusedInteractionManagerLocal script is configured to be executed in local mode:

<details>
<summary>Screenshot of Properties panel for sysFocusedInteractionManagerLocal script being set to execute in Local mode</summary>

<p></p>

[Screenshot of Properties panel for sysFocusedInteractionManagerLocal script being set to execute in Local mode](../../../image_data/3ce9b38d1e40249e0778bbc8a9210926edbdad27f37696be8f960e4b9f39e4cd.md)

### Overview
This image depicts a user interface element, specifically a settings or configuration panel within a software application. The panel includes a header, a property field, and a script execution mode selector.

### Key Elements
- **Header**: Located at the top, labeled "Properties". It has a dark background with white text.
- **Property Field**: Below the header, containing the text `sysFocusedInteractionManagerLocal`. This field has a dark background with white text and a light gray border.
- **Script Section**: Below the property field, labeled "Script". It includes a dropdown menu titled "Script Execution Mode" with the option "Local" selected.
- **Dropdown Menu**: Positioned to the right of the "Script Execution Mode" label, with a dark background and white text.

### Visual Flow / Relationships
The most prominent visual element is the property field due to its larger size and central placement. The dropdown menu is secondary but still noticeable due to its distinct label and selection indicator.

</details>

<p></p>



#### Focus mode:

Now, we can program the Focused Interaction Manager, starting with one of the most fundamental events: entering Focus mode.

In Focus mode, the standard on-screen controls are hidden, and the player’s avatar controls such as movement, camera or jumping are disabled. Instead, the player’s interactions are focused on the contents of the screen.

While the player is in this mode, we have access to the user touch data. The manager is responsible for receiving the input data and forwarding it to the entity that is interested in processing it. In the script, this entity is activeFocusedInteractionExample.

#### OnStartFocusMode event listener:

When the OnStartFocusMode event is received, we store a reference to that entity, enter Focus mode, and position the camera in a fixed position. The latter is not required for the Focused Interaction API. However, the user loses control of the camera, and we want to interact with a specific object. So, positioning the camera in a specific place comes in handy to provide the desired user experience.

Find the following TODO in the sysFocusedInteractionManagerLocal script:

```
// TODO: When the `OnStartFocusMode` event is received, the player will enter Focused Interaction mode and start using an example controller to send inputs to
```

Replace the above with this code:

```
this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnStartFocusMode,
  data => {
    this.activeFocusedInteractionExample = data.exampleController;
    this.owningPlayer.enterFocusedInteractionMode();
    this.sendNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeFixed, {
      position: data.cameraPosition,
      rotation: data.cameraRotation,
    });
  },
);
```

#### OnPlayerExitedFocusMode event listener:

Now, we must listen for when a player exits Focus mode. Actions take include:

* Get out of the fixed camera
* Switch it back to third person
* Notify the activeFocusedInteractionExample entity that the player has stopped interacting.

Find the relevant TODO in the script:

```
// TODO: When the player exits Focused Interaction mode, reset camera to third person and notify the example controller
```

Replace the above with this code:

```
this.connectNetworkBroadcastEvent(sysEvents.OnPlayerExitedFocusMode, data => {
  if (data.player !== this.owningPlayer) return;
  this.sendNetworkEvent(
    this.owningPlayer,
    sysEvents.OnSetCameraModeThirdPerson,
    null,
  );

  if (this.activeFocusedInteractionExample) {
    this.sendNetworkEvent(
      this.activeFocusedInteractionExample,
      sysEvents.OnExitFocusMode,
      {player: this.owningPlayer},
    );
    this.activeFocusedInteractionExample = undefined;
  }
});
```

Now the manager is able to put a player in Focus mode, change the camera to a fixed position and reset to third-person camera when the player leaves Focus mode. However, we are not yet processing user inputs during Focus mode.

#### Process inputs in Focus mode:

We must listen for the following events:

* onFocusedInteractionInputStarted
* onFocusedInteractionInputMoved
* onFocusedInteractionInputEnded

Send them to the activeFocusedInteractionExample entity for processing and generating the desired action, whether it’s rotating an object, pressing a key, or anything else.

Find the next TODO in the sysFocusedInteractionManagerLocal script:

```
// TODO: Tracking Focused Interaction inputs and sending the interaction data to the active example controller
```

Replace the above with the following code:

```
this.connectLocalBroadcastEvent(
  hz.PlayerControls.onFocusedInteractionInputStarted,
  data => {
    const firstInteraction = data.interactionInfo[0];
    if (firstInteraction.interactionIndex !== 0) return;

    if (this.activeFocusedInteractionExample?.exists()) {
      this.sendNetworkEvent(
        this.activeFocusedInteractionExample,
        sysEvents.OnFocusedInteractionInputStarted,
        {interactionInfo: firstInteraction},
      );
    }
  },
);

this.connectLocalBroadcastEvent(
  hz.PlayerControls.onFocusedInteractionInputMoved,
  data => {
    const firstInteraction = data.interactionInfo[0];
    if (firstInteraction.interactionIndex !== 0) return;

    if (this.activeFocusedInteractionExample?.exists()) {
      this.sendNetworkEvent(
        this.activeFocusedInteractionExample,
        sysEvents.OnFocusedInteractionInputMoved,
        {interactionInfo: firstInteraction},
      );
    }
  },
);

this.connectLocalBroadcastEvent(
  hz.PlayerControls.onFocusedInteractionInputEnded,
  data => {
    const firstInteraction = data.interactionInfo[0];
    if (firstInteraction.interactionIndex !== 0) return;

    if (this.activeFocusedInteractionExample?.exists()) {
      this.sendNetworkEvent(
        this.activeFocusedInteractionExample,
        sysEvents.OnFocusedInteractionInputEnded,
        {interactionInfo: firstInteraction},
      );
    }
  },
);
```

**Note**: The interactionInfo parameter in these events is an array of interactions. Currently, this parameter contains a single item, as multi-touch is not supported at this time. To future proof our code for multi-touch support, we must check the interactionIndex to ensure we are only handling the touches that are applicable.

Your sysFocusedInteractionManagerLocal script should now look like the following:

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';

class sysFocusedInteractionManagerLocal extends hz.Component<
  typeof sysFocusedInteractionManagerLocal
> {
  static propsDefinition = {};

  private ownedByServer: boolean = true;
  private owningPlayer!: hz.Player;

  private activeFocusedInteractionExample?: hz.Entity;

  private currentTapOptions: hz.FocusedInteractionTapOptions =
    hz.DefaultFocusedInteractionTapOptions;
  private currentTrailOptions: hz.FocusedInteractionTrailOptions =
    hz.DefaultFocusedInteractionTrailOptions;

  start() {
    this.owningPlayer = this.entity.owner.get();
    this.ownedByServer = this.owningPlayer === this.world.getServerPlayer();

    // Only the local clients can use Focused Interaction
    if (this.ownedByServer) return;

    // When the `OnStartFocusMode` event is received, the player will enter Focused Interaction mode and start using an example controller to send inputs to
    this.connectNetworkEvent(
      this.owningPlayer,
      sysEvents.OnStartFocusMode,
      data => {
        this.activeFocusedInteractionExample = data.exampleController;
        this.owningPlayer.enterFocusedInteractionMode();
        this.sendNetworkEvent(
          this.owningPlayer,
          sysEvents.OnSetCameraModeFixed,
          {position: data.cameraPosition, rotation: data.cameraRotation},
        );
      },
    );

    // When the player exits Focused Interaction mode, reset camera to third person and notify the example controller
    this.connectNetworkBroadcastEvent(
      sysEvents.OnPlayerExitedFocusMode,
      data => {
        if (data.player !== this.owningPlayer) return;

        this.sendNetworkEvent(
          this.owningPlayer,
          sysEvents.OnSetCameraModeThirdPerson,
          null,
        );

        if (this.activeFocusedInteractionExample) {
          this.sendNetworkEvent(
            this.activeFocusedInteractionExample,
            sysEvents.OnExitFocusMode,
            {player: this.owningPlayer},
          );
          this.activeFocusedInteractionExample = undefined;
        }
      },
    );

    // Tracking Focused Interaction inputs and sending the interaction data to the active example controller
    this.connectLocalBroadcastEvent(
      hz.PlayerControls.onFocusedInteractionInputStarted,
      data => {
        const firstInteraction = data.interactionInfo[0];
        if (firstInteraction.interactionIndex !== 0) return;

        if (this.activeFocusedInteractionExample) {
          this.sendNetworkEvent(
            this.activeFocusedInteractionExample,
            sysEvents.OnFocusedInteractionInputStarted,
            {interactionInfo: firstInteraction},
          );
        }
      },
    );

    this.connectLocalBroadcastEvent(
      hz.PlayerControls.onFocusedInteractionInputMoved,
      data => {
        const firstInteraction = data.interactionInfo[0];
        if (firstInteraction.interactionIndex !== 0) return;

        if (this.activeFocusedInteractionExample) {
          this.sendNetworkEvent(
            this.activeFocusedInteractionExample,
            sysEvents.OnFocusedInteractionInputMoved,
            {interactionInfo: firstInteraction},
          );
        }
      },
    );

    this.connectLocalBroadcastEvent(
      hz.PlayerControls.onFocusedInteractionInputEnded,
      data => {
        const firstInteraction = data.interactionInfo[0];
        if (firstInteraction.interactionIndex !== 0) return;

        if (this.activeFocusedInteractionExample) {
          this.sendNetworkEvent(
            this.activeFocusedInteractionExample,
            sysEvents.OnFocusedInteractionInputEnded,
            {interactionInfo: firstInteraction},
          );
        }
      },
    );

    // Customize taps when the `OnSetFocusedInteractionTapOptions` is received
    this.connectNetworkEvent(
      this.owningPlayer,
      sysEvents.OnSetFocusedInteractionTapOptions,
      data => {
        this.currentTapOptions = {
          ...this.currentTapOptions,
          ...data.tapOptions,
        };
        this.owningPlayer.focusedInteraction.setTapOptions(
          data.enabled,
          this.currentTapOptions,
        );
      },
    );

    // Customize trails when the `OnSetFocusedInteractionTrailOptions` is received
    this.connectNetworkEvent(
      this.owningPlayer,
      sysEvents.OnSetFocusedInteractionTrailOptions,
      data => {
        this.currentTrailOptions = {
          ...this.currentTrailOptions,
          ...data.trailOptions,
        };
        this.owningPlayer.focusedInteraction.setTrailOptions(
          data.enabled,
          this.currentTrailOptions,
        );
      },
    );
  }
}
hz.Component.register(sysFocusedInteractionManagerLocal);
```

## Assign Focused Interaction Managers to players

We now have a local manager through which we can use the Focused Interaction API. We must transfer the ownership of each manager to each player. As we did with the Camera Manager, we use the Player Manager to transfer ownership.

#### Count Focused Interaction Managers:

Please verify that you have as many Focused Interaction local managers (with the sysFocusedInteractionManagerLocal script attached) as the maximum number of players in your world.

We need one manager per player, and we need one Focused Interaction Manager for the server, with the sysFocusedInteractionManagerServer script attached:

<details>
<summary>Screenshot of Hierarchy panel showing the collection of FocusedInteractionManager entities</summary>

<p></p>

[Screenshot of Hierarchy panel showing the collection of FocusedInteractionManager entities](../../../image_data/ad3026ce9d8ff53a2ff18645d08052ae344fd8669b8c7ed4562f68f7871c86da.md)

### Overview
The image displays a hierarchical menu or tree view interface, likely part of a software application or documentation tool. The interface is structured with nested categories and items, indicated by expandable/collapsible icons next to each item.

### Key Elements
- **Expandable/Collapsible Icon**: A small square with a plus sign inside, located to the left of each category and item name.
- **Category Name**: 
  - `_GUIDE`
  - `_DOCUMENTATION`
  - `Environment`
  - `Managers`
- **Item Names**: 
  - `PlayerManager`
  - `HintHUDManager`
  - `CameraManagerLocalPlayer0`
  - `CameraManagerLocalPlayer1`
  - `CameraManagerLocalPlayer2`
  - `CameraManagerLocalPlayer3`
  - `FocusedInteractionManagerServer`
  - `FocusedInteractionManagerLocalPlayer0`
  - `FocusedInteractionManagerLocalPlayer1`
  - `FocusedInteractionManagerLocalPlayer2`
  - `FocusedInteractionManagerLocalPlayer3`
- **Highlighted Item**: `FocusedInteractionManagerLocalPlayer3` is highlighted in blue, indicating selection or focus.

### Visual Flow / Relationships
- **Most Prominent Element**: The highlighted item (`FocusedInteractionManagerLocalPlayer3`) is the most prominent due to its blue background.
- **Arrows/Connectors**: There are no explicit arrows or connectors visible in the image.
- **Spatial Relationships**: Items under `Managers` are nested under the `Managers` category, and `FocusedInteractionManagerLocalPlayer3` is nested under `FocusedInteractionManager`.

</details>

<p></p>



## Modify the Player Manager

To assign a Focused Interaction Manager to each player, we follow the same logic for the Camera Manager by utilizing the Player Manager created in Module 2.

#### Tag managers:

First, verify that all Focused Interaction Managers set to local have the gameplay tag that is expected by the Player Manager.

A **gameplay tag** allows you to identify entities that are related and should have the same actions performed on them.

<details>
<summary>Screenshot of local version of focused interaction manager with the FIManager gameplay tag applied to it</summary>

<p></p>

[Screenshot of local version of focused interaction manager with the FIManager gameplay tag applied to it](../../../image_data/e352748308765a8687740bbec95051f4bff138ef13aec3766fbbb779794efb4d.md)

### Overview
The image displays a user interface element that appears to be part of a game development tool or editor. It shows a properties panel with various categories and data entries related to a game entity. The interface has a dark theme with light text and some interactive elements.

### Key Elements
- **Focused Interaction Manager Local Play**: A black rectangular box at the top containing the text "FocusedInteractionManagerLocalPlay...".
- **Debug Data**: A collapsed section labeled "Debug Data" under which "Generic Entity Data" and "Script Instance Data" are listed.
- **Entity Id**: Displays "Entity Id: 100199".
- **Behavior**: A collapsed section labeled "Behavior".
- **Attributes**: A collapsed section labeled "Attributes".
- **GameplayTags**: A collapsed section labeled "GameplayTags" with a search bar and a tag labeled "FIManager" highlighted with a yellow bounding box.
- **Physics**: A collapsed section labeled "Physics".
- **More**: A collapsed section labeled "More".
- **Interactivity**: A collapsed section labeled "Interactivity".
- **Navigation**: A collapsed section labeled "Navigation".
- **Navigation Locomotion**: A collapsed section labeled "Navigation Locomotion".
- **sysFocusedInteractionManager**: A collapsed section labeled "sysFocusedInteractionManager...".
- **Attach script**: A button at the bottom labeled "Attach script".

### Visual Flow / Relationships
The interface is structured hierarchically with expandable sections. The most prominent visual element is the "Focused Interaction Manager Local Play" header at the top. The "GameplayTags" section contains a search bar and a tag labeled "FIManager". The layout suggests a focus on managing game properties and tags.

</details>

<p></p>



#### Acquire list of managers:

Open the sysPlayerManager script and look for the following TODO:

```
// TODO: Get all Focused Interaction Managers
```

Replace it with the following line to search for all Focused Interaction Managers by their tag (FIManager):

```
this.focusedInteractionManagers = this.world.getEntitiesWithTags(["FIManager"]);
```

#### Assign and unassign managers on player entry/exit

We must assign and unassign Focused Interaction Managers when a player enters or leaves the world, as we did for the Camera Managers. To assign a Focused Interaction Manager to a player, locate the following TODO:

```
// TODO: Assign a Focused Interaction Manager to the player
```

Replace the above with the following code:

```
if (playerIndex < this.focusedInteractionManagers.length) {
  this.focusedInteractionManagers[playerIndex].owner.set(player);
} else {
  console.error("Not enough Focused Interaction Managers in the world");
}
```

To unassign a Focused Interaction Manager from a player, find the following TODO:

```
// TODO: Release the Focused Interaction Manager from the player
```

Replace the above with:

```
if (playerIndex < this.focusedInteractionManagers.length) {
  this.focusedInteractionManagers[playerIndex].owner.set(
    this.world.getServerPlayer(),
  );
}
```

Your sysPlayerManager script can now assign a Camera Manager and a Focused Interaction Manager to each player and remove assignment when the player exits.

The script should look like the following:

```
import * as hz from 'horizon/core';

class sysPlayerManager extends hz.Component<typeof sysPlayerManager> {
  static propsDefinition = {};

  private cameraManagers: hz.Entity[] = [];
  private focusedInteractionManagers: hz.Entity[] = [];

  preStart() {
    // Get all camera managers
    this.cameraManagers = this.world.getEntitiesWithTags(["CameraManager"]);
    // Get all Focused Interaction Managers
    this.focusedInteractionManagers = this.world.getEntitiesWithTags(["FIManager"]);
  }

  start() {
    // When a player enters the world assign them a Camera Manager and a Focused Interaction Manager
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.RegisterPlayer(player);
      },
    );

    // When a player exits the world release their Camera Manager and Focused Interaction Manager
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => {
        this.DeregisterPlayer(player);
      },
    );
  }

  private RegisterPlayer(player: hz.Player) {
    let playerIndex = player.index.get();

    // Assign a Camera Manager to the player
    if (playerIndex < this.cameraManagers.length) {
      this.cameraManagers[playerIndex].owner.set(player);
    } else {
      console.error("Not enough Camera Managers in the world");
    }

    // Assign a Focused Interaction Manager to the player
    if (playerIndex < this.focusedInteractionManagers.length) {
      this.focusedInteractionManagers[playerIndex].owner.set(player);
    } else {
      console.error("Not enough Focused Interaction Managers in the world");
    }
  }

  private DeregisterPlayer(player: hz.Player) {
    let playerIndex = player.index.get();

    // Release the Camera Manager from the player
    if (playerIndex < this.cameraManagers.length) {
      this.cameraManagers[playerIndex].owner.set(this.world.getServerPlayer());
    }

    // Release the Focused Interaction Manager from the player
    if (playerIndex < this.focusedInteractionManagers.length) {
      this.focusedInteractionManagers[playerIndex].owner.set(
        this.world.getServerPlayer(),
      );
    }
  }
}
hz.Component.register(sysPlayerManager);
```

## Checkpoint

Now, each player joining the world is assigned its own Focused Interaction Manager, and we can use it to interact with the Focused Interaction API to do many things in the game!

In the following sections, we use the Focused Interaction API to rotate objects using drag inputs on a 2D screen, tap on the buttons of a keypad to enter a code, and even use a slingshot to hit a target.

#### Test:

To double check if you have correctly implemented the Focused Interaction Manager, jump into Preview Mode, teleport to the Features Lab, and try out the Focused Interaction related features there, which uses this system:

* Focused Interaction - Tapping
* Focused Interaction - Dragging
* Focused Interaction - Flicking
* Focused Interaction - Plane Raycasting

## Additional Documentation and APIs

#### Additional documentation:

* [How to Use Focused Interaction](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Focused%20Interaction.md)
* [Local Scripting for Mobile and Web](../../../Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md)

#### API docs:

* [FocusedInteraction](https://horizon.meta.com/resources/scripting-api/core.focusedinteraction.md/?api_version=2.0.0)