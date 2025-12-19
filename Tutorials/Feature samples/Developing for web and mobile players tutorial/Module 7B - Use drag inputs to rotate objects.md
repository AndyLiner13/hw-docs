Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/developing-for-web-and-mobile-players-tutorial/module-7b-use-drag-inputs-to-rotate-objects

# Module 7B - Use drag inputs to rotate objects

In the second room of the puzzle game, we have several objects which have a number. This number needs to be retrieved, but it is not initially visible. So, the player must interact with these objects to rotate them, revealing the single digit.

These objects have a trigger which is selectable in screen mode so that players can interact with them on web and mobile:

<details>
<summary>Screenshot of the desktop editor displaying an object that can be rotated using drag inputs</summary>

<p></p>

[Screenshot of the desktop editor displaying an object that can be rotated using drag inputs](../../../image_data/d04595ec0f576f5dae259416f60b9c2f3874e306a3ec6a128ec540f1c91fc6ad.md)

### Overview
This image depicts a 3D modeling interface within a game development environment. The central area shows a 3D scene with a cube highlighted, surrounded by a bounding box and axis indicators. The left panel displays a hierarchical list of objects, while the right panel contains properties and settings for the selected object.

### Key Elements
- **Left Panel (Hierarchy)**: Located on the left side, it shows a tree-like structure of objects named "RoomB_CylinderClue3," "RoomB_SphereClue4," among others. Each node has a small icon next to it, indicating different types of objects.
- **Central Scene**: The main area of the interface displays a 3D view of a scene with a cube highlighted. The cube is outlined with a white bounding box and has red, green, and blue axis indicators pointing outwards.
- **Right Panel (Properties)**: Positioned on the right, it contains various properties for the selected object "RoomB_CylinderClue3." These include toggles for visibility, collision, and interaction, as well as attributes such as position, rotation, scale, tint color, brightness, and texture asset selection.

### Visual Flow / Relationships
The most prominent visual element is the highlighted cube in the central scene. The hierarchy on the left provides context for the objects in the scene, while the properties on the right offer detailed settings for the selected object. There are no arrows or lines connecting elements, but the layout suggests a logical flow from object selection to property adjustment.

</details>

<p></p>



#### RoomB\_RotateClues script:

The trigger has a script attached to it, RoomB\_RotateClues. Open the script and let’s start modifying it!

First, we must prevent web and mobile players from being able to grab the object, as we only want them to be able to interact with the trigger to enter Focus mode.

Find the TODO:

```
// TODO: Set who can grab the object to none at first
```

Replace the above with the following line:

```
this.SetWhoCanGrabObject([]);
```

**Tip**: Feel free to review what SetWhoCanGrabObject function does.

Right now, web and mobile players cannot grab the object, which is what we want. However, VR players cannot do so either! As we are interested in offering a good experience on all platforms, we must allow VR players to pick up the object for inspection.

The script must be updated:

* Maintain a list of VR players in the world
* Detect when a player enters or leaves it
* Update who can grab the object to allow VR players to do so

#### Who can grab list:

Find the next TODO in the script:

```
// TODO: Set who can grab the object to VR players only. Web and Mobile players will use Focused Interactions instead of grabbing the object to interact with it
```

Replace the above with the following code to achieve our goal:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterWorld,
  (player: hz.Player) => {
    if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
      this.vrPlayers.push(player);
      this.SetWhoCanGrabObject(this.vrPlayers);
    }
  },
);
```

We must also update the VR players list when a VR player leaves the world. Locate the following TODO in the script:

```
// TODO: Updating who can grab the object when a player leaves the world
```

Replace the above with this code to delete players from the list:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerExitWorld,
  (player: hz.Player) => {
    if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
      let playerIndex = this.vrPlayers.indexOf(player);
      if (playerIndex > -1) {
        this.vrPlayers.splice(playerIndex, 1);
      }
      this.SetWhoCanGrabObject(this.vrPlayers);
    }
  },
);
```

Now VR players can grab and inspect the object while web and mobile players can interact with it through the Focused Interaction API. In a relatively short bit of code, we have enabled both experiences.

#### Enter Focus mode for web and mobile players:

Now, we must start Focus mode when a web or mobile player enters the trigger (i.e. interacts with the object). Locate the following TODO in the script:

```
// TODO: Enter Focused Interaction mode when a non-VR player interacts with the object
```

Replace the above with this code:

```
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterTrigger,
  (player: hz.Player) => {
    if (
      this.activePlayer === this.world.getServerPlayer() &&
      player.deviceType.get() !== hz.PlayerDeviceType.VR &&
      this.props.objectToDrag !== undefined
    ) {
      this.activePlayer = player;
      this.SetWhoCanGrabObject([]);
      this.sendNetworkEvent(player, sysEvents.OnStartFocusMode, {
        exampleController: this.entity,
        cameraPosition: cameraPos,
        cameraRotation: cameraRot,
      });
    }
  },
);
```

**Note**: The code tracks the active player and updates who can grab the object to no one, which enforces a single player being permitted to interact with the object at a time.

#### Exit Focus mode:

You can now interact with the object and start Focus mode, we must disable interaction when you exit Focus mode.

We must track when the player leaves Focus mode and update the active player and who can pick up the object. Find the following TODO in the script:

```
// TODO: Reset status after a player exits Focused Interaction mode
```

Replace the above with the following code:

```
this.connectNetworkEvent(this.entity, sysEvents.OnExitFocusMode, data => {
  if (this.activePlayer === data.player) {
    this.activePlayer = this.world.getServerPlayer();
    this.SetWhoCanGrabObject(this.vrPlayers);
  }
});
```

#### Set object actions:

Now, we can enter and exit Focus mode again and again, but the focused object does not react to our inputs yet. We must process the interactions by listening to the following events:

* OnFocusedInteractionInputStarted
* OnFocusedInteractionInputMoved
* OnFocusedInteractionInputEnded

In each rendered frame, the script checks for how much the user’s input position has moved, and the object’s X and Z axis are rotated accordingly. This code may be more complex and elaborated.

In the RoomB\_RotateClues script, locate the following TODO:

```
// TODO: Tracking Focused Interaction inputs to rotate the object
```

Replace the above with the following:

```
this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputStarted, (data) => {
  const interaction = data.interactionInfo;
  if (interaction != undefined && interaction.interactionIndex === 0) {
    this.dragLastPos = interaction.screenPosition;
  }
});

this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputMoved, (data) => {
  const interaction = data.interactionInfo;
  if (interaction !== undefined && interaction.interactionIndex === 0) {
    if (this.dragLastPos === undefined \|\| this.props.objectToDrag === undefined) {
      return;
    }

    let dragDelta = interaction.screenPosition.sub(this.dragLastPos);
    if (dragDelta.magnitude() > 0) {
      let newRotation = hz.Quaternion.fromEuler(new hz.Vec3(dragDelta.y * 1080, 0, -dragDelta.x * 1080));
        this.props.objectToDrag.rotation.set(newRotation.mul(this.props.objectToDrag.rotation.get()));
    }

    this.dragLastPos = interaction.screenPosition;
  }
});

this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputEnded, (data) => {
  const interaction = data.interactionInfo;
  if (interaction !== undefined && interaction.interactionIndex === 0) {
    this.dragLastPos = undefined;
  }
});
```

Your RoomB\_RotateClues script should look like the following:

```
import * as hz from 'horizon/core';
import { sysEvents } from 'sysEvents';

class RoomB_RotateClues extends hz.Component<typeof RoomB_RotateClues> {
  static propsDefinition = {
    objectToDrag: {type: hz.PropTypes.Entity},
  };

  private activePlayer!: hz.Player;
  private dragLastPos?: hz.Vec3;

  private vrPlayers!: hz.Player[];

  start() {
    this.activePlayer = this.world.getServerPlayer();
    const cameraPos = hz.Vec3.add(this.entity.position.get(), new hz.Vec3(0, 1, 0));
    const cameraRot = hz.Quaternion.fromEuler(new hz.Vec3(90, 0, 0));

    this.vrPlayers = [];
    // Set who can grab the object to none at first
    this.SetWhoCanGrabObject([]);

    // Set who can grab the object to VR players only. Web and Mobile players will use Focused Interaction instead of grabbing the object to interact with it
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
      if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
        this.vrPlayers.push(player);
        this.SetWhoCanGrabObject(this.vrPlayers);
      }
    });

    // Updating who can grab the object when a player leaves the world
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerExitWorld, (player: hz.Player) => {
      if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
        let playerIndex = this.vrPlayers.indexOf(player);
        if (playerIndex > -1) {
          this.vrPlayers.splice(playerIndex, 1);
        }
        this.SetWhoCanGrabObject(this.vrPlayers);
      }
    });

    // Enter Focused Interaction mode when a non-VR player interacts with the object
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player: hz.Player) => {
      if (this.activePlayer === this.world.getServerPlayer() && player.deviceType.get() !== hz.PlayerDeviceType.VR && this.props.objectToDrag !== undefined) {
        this.activePlayer = player;
        this.SetWhoCanGrabObject([]);
        this.sendNetworkEvent(player, sysEvents.OnStartFocusMode, { exampleController: this.entity, cameraPosition: cameraPos, cameraRotation: cameraRot });
      }
    });

    // Reset status after a player exits Focused Interaction mode
    this.connectNetworkEvent(this.entity, sysEvents.OnExitFocusMode, (data) => {
      if (this.activePlayer === data.player) {
        this.activePlayer = this.world.getServerPlayer();
        this.SetWhoCanGrabObject(this.vrPlayers);
      }
    });

    // Tracking Focused Interaction inputs to rotate the object
    this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputStarted, (data) => {
      const interaction = data.interactionInfo;
      if (interaction !== undefined && interaction.interactionIndex === 0) {
        this.dragLastPos = interaction.screenPosition;
      }
    });

    this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputMoved, (data) => {
      const interaction = data.interactionInfo;
      if (interaction !== undefined && interaction.interactionIndex === 0) {
        if (this.dragLastPos === undefined \|\| this.props.objectToDrag === undefined) return;

        let dragDelta = interaction.screenPosition.sub(this.dragLastPos);
        if (dragDelta.magnitude() > 0) {
          let newRotation = hz.Quaternion.fromEuler(new hz.Vec3(dragDelta.y * 1080, 0, -dragDelta.x * 1080));
          this.props.objectToDrag.rotation.set(newRotation.mul(this.props.objectToDrag.rotation.get()));
        }

        this.dragLastPos = interaction.screenPosition;
      }
    });

    this.connectNetworkEvent(this.entity, sysEvents.OnFocusedInteractionInputEnded, (data) => {
      const interaction = data.interactionInfo;
      if (interaction !== undefined && interaction.interactionIndex === 0) {
        this.dragLastPos = undefined;
      }
    });
  }

  private SetWhoCanGrabObject(players: hz.Player[]) {
    if (this.props.objectToDrag !== undefined && this.props.objectToDrag.simulated.get()) {
      this.props.objectToDrag.as(hz.GrabbableEntity)?.setWhoCanGrab(players);
    }
  }
}
hz.Component.register(RoomB_RotateClues);
```

## Checkpoint

Focused interactions are now available!

#### Test:

You can now interact with the objects in the second room of the world to enter Focus mode, and use the mouse on PC or your finger on mobile to click and drag to rotate them! Try it out on all three device types: VR, web, and mobile!