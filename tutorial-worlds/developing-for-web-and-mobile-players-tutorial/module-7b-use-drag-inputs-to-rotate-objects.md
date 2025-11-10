Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-7b-use-drag-inputs-to-rotate-objects

# Module 7B - Use drag inputs to rotate objects

In the second room of the puzzle game, we have several objects which have a number. This number needs to be retrieved, but it is not initially visible. So, the player must interact with these objects to rotate them, revealing the single digit.

These objects have a trigger which is selectable in screen mode so that players can interact with them on web and mobile:

![Screenshot of the desktop editor displaying an object that can be rotated using drag inputs](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488910387_692135359991085_4663474754826465509_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=C8isDhtzsyoQ7kNvwFNV9FD&_nc_oc=AdkjRWewRopmweREZatomIt3nUdMYWINdpTCYC5dbKub39kjq0ByQiBsH1UlZeiyeHs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=odlCbutfz1czxn0YpsKlOA&oh=00_AfiNWXrk2NuQHTbnCASUHV5Mqh2QoOicfxAi6KoL2w3ivg&oe=692BE9AA)

#### RoomB\_RotateClues script:

The trigger has a script attached to it, RoomB\_RotateClues. Open the script and let’s start modifying it!

First, we must prevent web and mobile players from being able to grab the object, as we only want them to be able to interact with the trigger to enter Focus mode.

Find the TODO:

```vs
// TODO: Set who can grab the object to none at first
```

Replace the above with the following line:

```vs
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

```vs
// TODO: Set who can grab the object to VR players only. Web and Mobile players will use Focused Interactions instead of grabbing the object to interact with it
```

Replace the above with the following code to achieve our goal:

```vs
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

```vs
// TODO: Updating who can grab the object when a player leaves the world
```

Replace the above with this code to delete players from the list:

```vs
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

```vs
// TODO: Enter Focused Interaction mode when a non-VR player interacts with the object
```

Replace the above with this code:

```vs
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

```vs
// TODO: Reset status after a player exits Focused Interaction mode
```

Replace the above with the following code:

```vs
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

```vs
// TODO: Tracking Focused Interaction inputs to rotate the object
```

Replace the above with the following:

```vs
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

```vs
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