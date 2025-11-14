Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/scripted-avatar-movement

# Scripted Avatar Movement

The Player class includes locomotion features for programmatically controlling avatar movement. Create scripted movement sequences, implement tap-to-move mechanics, rotate players, and trigger jumps with customizable speed options.

Note

This feature requires Desktop Editor **v239** or higher.

For detailed method signatures, parameters, and return types, see the [Player API Reference](/hw-docs/Reference/core/Classes/Player.md).

## Locomotion API Methods

The Player class includes these locomotion methods for scripted avatar movement:

| Method | Description |
| --- | --- |
| [moveToPosition](#movetoposition) | Moves the player to a specified position. |
| [moveToPositions](#movetopositionspath-options) | Moves the player along a path of positions. |
| [rotateBy](#rotatebyangle-options) | Rotates the player by a specified angle in degrees. |
| [rotateTo](#rotatetodirection-options) | Rotates the player to face a specified direction. |
| [jump](#jump) | Makes the player jump. |
| [isJumping](#isjumping) | True when the player is jumping. |
| [isMoving](#ismoving) | True when the player is moving. |
| [isNavigating](/hw-docs/Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Scripted%20Avatar%20Movement.md) | True when the player moves via scripted navigation. |
| [stopMovement](#stopmovement) | Stops any movement in progress. |

### moveToPosition

Moves the player to a specified position. Any new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```
moveToPosition(position: Vec3, options?: LocomotionOptions): Promise<LocomotionResult>;
```

**Parameters**

* `position`: [Vec3](/hw-docs/Reference/core/Classes/Vec3.md) - The destination position.
* `options`: [LocomotionOptions](/hw-docs/Reference/core/Type%20Aliases/LocomotionOptions.md) - *(Optional)* Optional parameters.

**Returns**

Promise<[LocomotionResult](/hw-docs/Reference/core/Enumerations/LocomotionResult.md)> - A promise that resolves when locomotion ends.

### moveToPositions(path, options)

Moves the player along a path of positions. Any new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```
moveToPositions(path: Array<Vec3>, options?: LocomotionOptions): Promise<LocomotionResult>;
```

**Parameters**

* `path`: Array<[Vec3](/hw-docs/Reference/core/Classes/Vec3.md)> - An array of positions to follow in order.
* `options`: [LocomotionOptions](/hw-docs/Reference/core/Type%20Aliases/LocomotionOptions.md) - *(Optional)* Optional parameters.

**Returns**

Promise<[LocomotionResult](/hw-docs/Reference/core/Enumerations/LocomotionResult.md)> - A promise that resolves when locomotion ends.

### rotateBy(angle, options)

Rotates the player by a specified angle in degrees. Any new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```
rotateBy(angle: number, options?: RotationOptions): Promise<LocomotionResult>;
```

**Parameters**

* `angle`: number - The rotation angle in degrees.
* `options`: [RotationOptions](/hw-docs/Reference/core/Type%20Aliases/RotationOptions.md) - *(Optional)* Optional parameters.

**Returns**

Promise<[LocomotionResult](/hw-docs/Reference/core/Enumerations/LocomotionResult.md)> - A promise that resolves when rotation ends.

### rotateTo(direction, options)

Rotates the player to face a specified direction. Any new move, rotate, follow, or jump command cancels any previous move command.

**Signature**

```
rotateTo(direction: Vec3, options?: RotationOptions): Promise<LocomotionResult>;
```

**Parameters**

* `direction`: [Vec3](/hw-docs/Reference/core/Classes/Vec3.md) - The target facing direction.
* `options`: [RotationOptions](/hw-docs/Reference/core/Type%20Aliases/RotationOptions.md) - *(Optional)* Optional parameters.

**Returns**

Promise<[LocomotionResult](/hw-docs/Reference/core/Enumerations/LocomotionResult.md)> - A promise that resolves when rotation ends.

### jump()

Makes the player jump.

**Signature**

```
jump(): Promise<LocomotionResult>;
```

**Returns**

Promise<[LocomotionResult](/hw-docs/Reference/core/Enumerations/LocomotionResult.md)> - A promise that resolves when the jump ends.

### isJumping

True when the player is jumping.

**Signature**

```
isJumping: ReadableHorizonProperty<boolean>;
```

### isMoving

True when the player is moving.

**Signature**

```
isMoving: ReadableHorizonProperty<boolean>;
```

True when the player moves via scripted navigation.

**Signature**

```
isNavigating: ReadableHorizonProperty<boolean>;
```

### stopMovement()

Stops any movement in progress.

**Signature**

```
stopMovement(): void;
```

**Returns**

void

## Set Up

Tap to Move requires three components:

* Focused interaction for tap input
* Raycast gizmo to find the world-space movement position after a tap
* Player locomotion scripting

Add geometry for the player to walk on, a Raycast gizmo, and an empty object to position your camera.

### Code

Attach this code as a script to an empty object in the scene. The script handles focused interaction, raycasting, and locomotion for tap-to-move functionality.

```
import LocalCamera from 'horizon/camera';
import * as hz from 'horizon/core';

class TapToMoveHandler extends hz.Component<typeof TapToMoveHandler> {
  static propsDefinition = {
    cameraPos : {type: hz.PropTypes.Entity},
    raycastGizmo : {type: hz.PropTypes.Entity},
    movementSpeed: {type: hz.PropTypes.Number, default: 4.5},
  };

  localPlayer!: hz.Player;

  start() {

    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player: hz.Player) => {
      if(this.entity.owner.get() == this.world.getServerPlayer()) {
        this.entity.owner.set(player);
      }
    });

    const isClient = this.entity.owner.get().id != this.world.getServerPlayer().id;
    if (isClient) {
      this.localPlayer = this.entity.owner.get();
      this.triggerFocusedInteraction();
      this.setCameraMode();
      this.subscribeToEvents();
    }
  }

  triggerFocusedInteraction() {
    this.localPlayer.enterFocusedInteractionMode({disableFocusExitButton: true})
  }

  setCameraMode() {
    if(!this.props.cameraPos) {
      console.error('No camera position entity found');
      return;
    }

    this.async.setTimeout(() =>
          {
            LocalCamera.setCameraModeAttach(this.props.cameraPos!);
          }, 100);
  }

  subscribeToEvents() {
    this.connectLocalBroadcastEvent(hz.PlayerControls.onFocusedInteractionInputEnded, (data: {interactionInfo: hz.InteractionInfo[]}) => {
      var firstInteraction = data.interactionInfo[0];
      if (firstInteraction.interactionIndex != 0) {
        return;
      }

      if(this.localPlayer == undefined) {
        return;
      }

      try
      {
        var startRaycastHit = this.getTouchPosOnCollider(firstInteraction);
        if (startRaycastHit == undefined)
        {
          startRaycastHit = hz.Vec3.zero;
        }
        this.localPlayer.moveToPosition(startRaycastHit, {movementSpeed: this.props.movementSpeed});
      }
      catch (e) {
        console.error(e);
      }
    });
  }

  getTouchPosOnCollider(interaction: hz.InteractionInfo) {
    if(this.props.raycastGizmo == undefined) {
      return undefined;
    }

    var hit = this.props.raycastGizmo.as(hz.RaycastGizmo).raycast(interaction.worldRayOrigin, interaction.worldRayDirection);

    if(hit == undefined) {
      console.error('No hit');
      return undefined;
    }

    return hit.hitPoint;
  }
}
hz.Component.register(TapToMoveHandler);
```