Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-8-room-c-target-practice

# Module 8 - Room C: Target Practice

Splitting the functionality based on device enables us to leverage the mechanics and strengths of each device to deliver an engaging experience for players on all platforms.

In this module, you learn:

* How and when to bifurcate the experience so that players on different devices can have access to different mechanics (and the same level of fun!).
* How to build a slingshot that uses Focused Interaction for web and mobile players.

**Note**: This bifurcation of experiences needs to be tested on each device. We want to sustain the fun and competitiveness across platforms while avoiding making the world unplayable on any single device.

## Different mechanics for Web & Mobile versus VR players

We can check which device the player is using before they enter Focused Interaction mode. The following code sets an event listener for when the player enters the world, when the player’s device type is checked.

In this case, if the device is not VR, then a network event is sent to set the player’s starting camera position.

```vs
// When a player interacts with the trigger, check which device they use and enter Focused Interaction mode

this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterTrigger,
  (player: hz.Player) => {
    if (
      this.activePlayer === this.world.getServerPlayer() &&
      player.deviceType.get() !== hz.PlayerDeviceType.VR
    ) {
      this.activePlayer = player;
      this.sendNetworkEvent(player, sysEvents.OnStartFocusMode, {
        exampleController: this.entity,
        cameraPosition: cameraPos,
        cameraRotation: cameraRot,
      });
    }
  },
);
```

## To emulate or bifurcate?

In this puzzle, a VR player can use a cannon to fire a ball. When the cannonball hits the target, a bridge is unlocked and then the player can reach the door.

The cannon has a complex interface of levers and buttons and is designed to leverage the strengths of hand motion tracking in VR.

However, porting this VR-centric mechanic to web and mobile to **emulate the experience** may require us to compromise some of the essential experience. We may need to simplify the interaction or skip it entirely, and the result would be a lot less fun for web and mobile players.

Rather than attempting to emulate the experience, we can **bifurcate the experience**, and create a separate game mechanic that is just as fun for web and mobile players: Behold the slingshot!

Incorporating a slingshot into this section provides web and mobile players their own brand of fun and interactive mechanic, while still enabling them to traverse the world in a slightly different way.

## Bifurcate the player flow

To start, we must ensure that only VR players can access the cannon, and only web and mobile players can access the slingshot. We create a single trigger, which has an attached script that can teleport the player to the correct mechanic’s location, depending on their device.

![Screenshot of the teleport pad that transports visitor to appropriate location based on visitor's device type](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968560_512509471287009_4305206127726643675_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=NalezvaJQncQ7kNvwFrF2yp&_nc_oc=Adk0ddrOXJ9K6SOOVR7R0CYqygmYtkJ1LASKk4LeoDYfHAySZDbjM7w3ptj2x6RB_mM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=zbfJmgZheGj7SMctzMHMlA&oh=00_AfgIOwISzMW0an2xfqCThSWplL05q47DNUbOb9KnS80a2w&oe=692BF1C6)

The cannon and the slingshot are on separate elevated platforms. Players can only get on the platforms via the teleport pad, yet teleported players can return to the main level of the room easily.

We want a script to listen for the player entering the trigger and then teleport the player to the spawnPoint on the correct platform, depending on their device type. The RoomC\_BifurcateTrigger entity has a RoomC\_TeleportPlayerByPlatform script attached to it. Open the script, and locate the following TODO:

```vs
// TODO: When a player enters the trigger, teleport them to the correct spawn point based on their device type
```

Replace the above with the following:

```vs
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnPlayerEnterTrigger,
  (player: hz.Player) => {
    if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
      this.props.vrSpawnPoint?.as(hz.SpawnPointGizmo)?.teleportPlayer(player);
    } else {
      this.props.nonVrSpawnPoint
        ?.as(hz.SpawnPointGizmo)
        ?.teleportPlayer(player);
    }
  },
);
```

**Note**: You must test this trigger in VR and in the desktop editor (web/mobile option) to verify that the player is teleported to the correct location depending on their device.

## Create a slingshot for web & mobile

For web & mobile users, the slingshot mechanic requires the player to pull back the slingshot pouch and release the pouch to fire the slingshot. The speed and direction of the force for firing the ball is calculated from the difference between the ball’s starting position and its position when it was released.

To grab, move and release the ball, we use Focused Interaction, and we raycast from the players touchPoint to determine the position where the ball is being held.

![Screenshot of the raycast gizmo linked to the slingshot, which enables it to be used for aiming the slingshot](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452576406_512511031286853_1882245616182059762_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=PLe7wQJUMbkQ7kNvwFwj7uM&_nc_oc=AdmeBKDvqB31Lm_3EbDZ5Z3ZyKTnKK_CnN7Xzfxh3uxWaUB5nwWBUH37khYyw-bXC20&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=zbfJmgZheGj7SMctzMHMlA&oh=00_AfgUHxoB3uMLN_NSBAl8gqimFDN0h1nOkuWesFDE3U1NGQ&oe=692BFB9B)

During Focused Interaction, we raycast any touch input against the PullPlane (the selection above), which is an invisible primitive object in the world. In this example, we’ve used a flattened pyramid as the PullPlane object. This object is not tied to the others, it is simply positioned in such a way that we can move the ball on this plane to be able to shoot it.

When the Focused Interaction player input begins, we check to see if the touch hits the PullPlane by raycasting from the camera origin in the camera direction. If the player has touched the pull plane, we stop the ball and the pouch from moving, and we disable physics on these elements on the next frame (after zeroVelocity() has completed executing).

The RoomC\_Slingshot script is already attached to the RoomC\_SlingshotStartTrigger entity. Open the RoomC\_Slingshot script and within the start() function, locate the following TODO:

```vs
// TODO: Listen for focused interaction inputs started.
// Raycast from the interaction point in the direction of the camera, and check the ray intersects with the pull plane.
// If the raycast intersects with the pull plane:
// Set the touchStartPosition to where the raycast from the touch point intersects the pull plane.
// Also zero velocity and disable physics on the ball and pouch. Disable collision on the ball
```

Replace the above with the following:

```vs
this.connectNetworkEvent(
  this.entity,
  sysEvents.OnFocusedInteractionInputStarted,
  data => {
    const interaction = data.interactionInfo;
    if (interaction !== undefined && interaction.interactionIndex === 0) {
      // Check player touched the interaction plane
      const hitResult = raycast
        ?.as(hz.RaycastGizmo)
        ?.raycast(interaction.worldRayOrigin, interaction.worldRayDirection, {
          layerType: hz.LayerType.Objects,
        });
      if (
        hitResult !== null &&
        hitResult?.targetType === hz.RaycastTargetType.Entity
      ) {
        // Player touched the touch plane
        // Zero ball and pouch velocity as player is now in control
        ball?.as(hz.PhysicalEntity)?.zeroVelocity();
        pouch?.as(hz.PhysicalEntity)?.zeroVelocity();
        ball?.collidable.set(false);
        // Set the touching flag
        touching = true;
        // Disable ball and pouch simulation next frame (after the velocity has been set to zero)
        this.async.setTimeout(() => {
          ball?.simulated.set(false);
          pouch?.simulated.set(false);
        }, 1);
      }
    }
  },
);
```

For mobile users, when the player moves their finger, we should continue to update the position of the pouch and ball so that they remain where the raycast from the player’s touch position intersects with the PullPlane.

In the start() function of the RoomC\_Slingshot script, locate the following TODO:

```vs
// TODO: Listen for focused interaction inputs moved.
// Raycast from the interaction point in the direction of the camera, and check the ray intersects with the pull plane.
// Move the ball and pouch to the touch position (so long as it is within the pull plane)
```

Replace the above with the following:

```vs
this.connectNetworkEvent(
  this.entity,
  sysEvents.OnFocusedInteractionInputMoved,
  data => {
    const interaction = data.interactionInfo;
    if (interaction !== undefined && interaction.interactionIndex === 0) {
      // Check player touched the interaction plane
      const hitResult = raycast
        ?.as(hz.RaycastGizmo)
        ?.raycast(interaction.worldRayOrigin, interaction.worldRayDirection, {
          layerType: hz.LayerType.Objects,
        });
      if (
        hitResult !== null &&
        hitResult?.targetType === hz.RaycastTargetType.Entity
      ) {
        // Move ball and pouch to the touch position
        ball?.position.set(hitResult.hitPoint);
        pouch?.position.set(hitResult.hitPoint.sub(deltaPouchBall));
      }
    }
  },
);
```

When the player stops touching the screen, the slingshot is released. We enable physics on the ball and the pouch and apply a force to the ball to launch it. We calculate the trajectory of the force by subtracting the ball’s current position from its start position, and multiply this by a force that we can expose in the script’s Props, which allows for easy tweaking for designers outside of the code.

In the start() function of the RoomC\_Slingshot script, locate the following TODO:

```vs
// TODO: Listen for focused interaction inputs ended.
// Calculate the vector between the pouch and ball positions.
// Apply force equal to distance from start point to the ball and in the direction of the vector.
// Enable physics on the ball and pouch, and enable collision on the ball after a short delay (so the ball doesn't collide with the slingshot)
```

Replace the above with the following:

```vs
this.connectNetworkEvent(
  this.entity,
  sysEvents.OnFocusedInteractionInputEnded,
  data => {
    const interaction = data.interactionInfo;
    if (interaction !== undefined && interaction.interactionIndex === 0) {
      const ballPosition = ball?.position.get();
      if (ballPosition === undefined) {
        throw new Error(
          'There was an error retrieving ball position in OnFocusedInteractionInputEnded. Is the ball prop set?',
        );
      }
      // Calculate the vector between the balls original position and current location (we'll use this to apply force to the ball)
      const deltaVector = ballPosition.sub(ballStartPosition);
      ball
        ?.as(hz.PhysicalEntity)
        ?.applyForce(
          deltaVector?.mul(-1 * this.props.maxForce),
          hz.PhysicsForceMode.Impulse,
        );
      // Enable physics on the ball and pouch
      ball?.simulated.set(true);
      pouch?.simulated.set(true);
      // Enable collision after the ball has cleared the slingshot
      this.async.setTimeout(() => {
        ball?.collidable.set(true);
      }, 150);
      // Reset the touch start position
      touching = false;
    }
  },
);
```

The basic interaction is complete. We can simulate some aspects of a real slingshot by adding spring physics to the pouch, as well as elasticated ropes.

When the player is not touching the screen, we spring our pouch back to its start position. We specify damping and stiffness so that the pouch feels like it’s connected to elasticated ropes.

In the start() function of the RoomC\_Slingshot script, locate the following TODO:

```vs
// TODO: When the player is not interacting with the slingshot, spring the pouch towards its start position every update.
```

Replace the above with the following:

```vs
this.connectLocalBroadcastEvent(hz.World.onUpdate, data => {
  if (!touching) {
    pouch?.as(hz.PhysicalEntity)?.springPushTowardPosition(pouchStartPosition, {
      stiffness: 20,
      damping: 0.2,
    });
  }
});
```

Unlike a real slingshot, the elasticated ropes in our slingshot are for visuals only and are not used to fire the ball. We can add some elasticated ropes to our slingshot to simulate the effect by using two cylinders that scale between anchor points on the frame and the pouch.

RoomC\_SlingshotRopeL and RoomC\_SlingshotRopeR have the same RoomC\_SlingshotRope script attached. Open the script and locate the following TODO:

```vs
// TODO: Scale the rope between the anchor and the pouch
```

Replace the above with the following:

```vs
const deltaVector = pouch.position.get().sub(anchor.position.get());
const midpoint = anchor.position.get().add(deltaVector.div(2));

this.entity.position.set(midpoint); // move to midpoint
this.entity.lookAt(pouch.position.get()); // rotate in correct direction
this.entity.scale.set(
  new hz.Vec3(
    this.defaultScale.x,
    this.defaultScale.y,
    deltaVector.magnitude(),
  ),
); // stretch between the two points
```

## Checkpoint

Great job! You’ve bifurcated the player experience for players in VR and for players on screens. Now, all players can enjoy the puzzle, while offering a slightly different experience that leverages the strengths of each platform.

#### Test:

Please take time to test these two different mechanics on all three device types to see how they feel. Can you complete the room on all three device types?

In this module you:

* Bifurcated the player experience to offer an enjoyable game mechanic across all platforms.
* Built a slingshot mechanic for web and mobile players.
* Learned how to combine Focused Interaction with physics to build a physics skill game for web and mobile players.

**Tip**: Explore the cannon mechanic and code to learn how it works for VR players.

## Additional Documentation and APIs

#### Additional documentation:

* [Local Script for Mobile and Web](/hw-docs/typescript/local-scripting/getting-started-with-local-scripting/)
* [Per Platform Scripting](/hw-docs/create-for-web-and-mobile/typescript-apis-for-mobile/per-platform-scripting/)
* [Using the Camera API for Web and Mobile](/hw-docs/create-for-web-and-mobile/typescript-apis-for-mobile/camera/)
* [How to set the player’s camera](/hw-docs/create-for-web-and-mobile/references-and-guides/how-to-set-the-players-camera/)
* [Intro to Grabbable Entities](/hw-docs/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities)
* [Preview device](/hw-docs/desktop-editor/getting-started/preview-mode#preview-device)

#### API docs:

* [PhysicalEntity](https://horizon.meta.com/resources/scripting-api/core.physicalentity.md/?api_version=2.0.0)