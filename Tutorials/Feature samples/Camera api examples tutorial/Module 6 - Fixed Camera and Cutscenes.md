Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/camera-api-examples-tutorial/module-6-fixed-camera-and-cutscenes

# Module 6 - Fixed Camera and Cutscenes

You can inject a cutscene into your world experience using transitions of a fixed camera and sequences of timed animations.

In the final station of this tutorial is a magic green button.

<details>
<summary>Button in the world to activate the cutscene</summary>

<p></p>

[Button in the world to activate the cutscene](../../../image_data/992012930596f099245a4c79c62899a47ff90c9f70b713567e7b7d716c6572ba.md)

### Overview
This image depicts a virtual environment resembling a room or arena with a grid floor and a clear sky background. The scene includes several distinct objects and labels, suggesting a simulation or educational interface.

### Key Elements
- **Left Panel**: A purple cube labeled "DoorButton" with a green arrow pointing upwards and a blue arrow pointing downwards. Inside the cube, there is a white icon resembling a file with code tags (`<code>`).
- **Center**: A green rectangular object on a pedestal, possibly a podium or display stand.
- **Right Panel**: A red rectangular object with the letters "TS" and a rightward arrow, indicating some form of transition or direction.
- **Background**: A large, open space with a tiled floor and a distant building structure made of light brown blocks.

### Visual Flow / Relationships
The most prominent elements are the "DoorButton" cube on the left and the "TS" panel on the right. There are no arrows or lines connecting these elements, but the layout suggests a possible interaction sequence or flow between them. The green object in the center seems to be a focal point, possibly linking the two panels.

</details>

<p></p>



When this button is pressed:

* The Trigger Zone object is breached by the player’s hand, which triggers code in the `DoorButton.ts` script.
* This trigger sends a LocalEvent to the `DoorCutScene.ts` script, which executes the cutscene in the world:
  + The PlayerCamera position is quickly transitioned to the first reference object in front of the button. See screenshot.
  + The PlayerCamera is transitioned smoothly forward to the second reference object, effecting a dolly camera movement.
  + When the second reference object is reached:
    - The PlayerCamera stops.
    - The door animates to open.
    - The NPC robot steps forward and gives a thumbs up.
    - The door closes quickly.
  + PlayerCamera point of view resets to the previous mode and position, which is back with the player standing in front of the green button.

## DoorButton.ts

This is a fairly simple script, which manages two events:

- onPlayerEnterTrigger causes a LocalEvent to be emitted to the entity specified in the this.props.doorCutScene, referring to the reference object to which the `DoorCutScene.ts` is attached. This event triggers the camera dolly and cutscene animation.
- After the animation is completed and the PlayerCamera has returned to the player’s perspective, `DoorCutScene.ts` sends an event back to this script, which re-enables the magic green button for replay.

```
   start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player: hz.Player) => {
      if (this.props.doorCutscene !== undefined && this.props.doorCutscene !== null) {
        this.sendLocalEvent(this.props.doorCutscene, CutsceneEvents.OnStartCutscene, {player, doorButton: this.entity});
        this.entity.as(hz.TriggerGizmo).enabled.set(false);
      } else {
        console.warn("DoorButton pressed, but no doorCutscene was set in the props.")
      };
    });
    this.connectNetworkEvent(this.entity, CutsceneEvents.OnCutsceneComplete, () => {
      this.entity.as(hz.TriggerGizmo).enabled.set(true);
    });
  };
```

## Trigger the Camera Dolly and Environment Animation

In `DoorCutScene.ts`, the `start()` method contains the sequencing of actions:

```
  start() {
    this.connectLocalEvent(this.entity, CutsceneEvents.OnStartCutscene, ({player, doorButton}) => {
        this.doorButton = doorButton;
        // Play the camera animations. You can add / edit / remove for your own camera animations here.
        this.playCameraAnimation(player);
        // Play environmental animations. You can add / edit / remove for your own environmental animations here.
        this.playEnvironmentalAnimation();
        this.connectNetworkEvent(player, PlayerCameraEvents.OnCameraResetPressed, () => {
          this.quitCameraAnimationForPlayer(player);
        });
    });
  };
```

* The camera animation (dolly) is played.
* The cut scene with the door and robot is played.
* If the reset button is pressed, the animations and camera position are reset.

**Note**: Each of the steps of the sequence (camera or environmental animation) is wrapped in a timeout, which ensures that the specific action has a defined duration.

### Script Properties

The following script properties are relevant to the camera dolly movement, the animation sequence, or both.

```
  static propsDefinition = {
    door: {type: hz.PropTypes.Entity},
    cameraStart: {type: hz.PropTypes.Entity},
    cameraEnd: {type: hz.PropTypes.Entity},
    moveDuration: {type: hz.PropTypes.Number, default: 5},
    robot: {type: hz.PropTypes.Entity},
  };
```

| Property | Description | Usage |
| --- | --- | --- |
| door | Reference to the entity that is the door | playEnvironmentAnimation |
| cameraStart | Reference to the entity that is used as the point of reference for beginning the camera animation | playCameraAnimation |
| cameraEnd | Reference to the entity that is used as the point of reference for end point of the camera animation | playCameraAnimation |
| moveDuration | Time in seconds that the action sequence should last | playCameraAnimation and playEnvironmentAnimation |
| robot | Reference to the entity that is the NPC to animate | playEnvironmentAnimation |

### playCameraAnimation()

This function drives the switching of the camera to the first reference point and the transition of the camera (dolly) to the second reference point.

**Tip**: Review and modify this function to create camera animations of your own. Make sure that you create the empty reference objects to define the beginning and ending of the camera movement. With a bit of work, you can chain together multiple sequences of camera animation.

The camera animation is defined by the position of two objects that are referenced by property on the `DoorCutScene.ts` script:

```
moveDuration: {type: hz.PropTypes.Number, default: 5},
cameraStart: {type: hz.PropTypes.Entity},
cameraEnd: {type: hz.PropTypes.Entity},
```

Additionally, you can modify the following properties to change some of the performance aspects of the dolly: rate of travel, easing, etc.

```
static readonly MoveToStartDuration: number = 0.4;
private static readonly MoveToStartEasing: Easing = Easing.Linear;
private static readonly DollyEasing: Easing = Easing.EaseOut;
```

**Tip**: To create a pan effect, set the rotation of the starting object and the ending object to point in the same direction.

### playEnvironmentAnimation

This function defines three basic animated effects:

- Door open
- Robot emotes (thumbs up!)
- Door closes

This function references the following parameters:

```
door: {type: hz.PropTypes.Entity},
moveDuration: {type: hz.PropTypes.Number, default: 5},
robot: {type: hz.PropTypes.Entity},
```

**Tip**: You can modify the robot animation to use different emotes. Change the value of the parameter for `setAnimationParameterTrigger()` to experiment. For more information on available emotes, see [NPC Scripts](../../../Desktop%20editor/NPCs/NPC%20Scripts.md).

**Tip**: You can build even more complex sequences in this location, inserting different NPCs at this location. For more information, see [NPCs](../../../Desktop%20editor/NPCs/NPCs%20Overview.md).

## Checkpoint

In this module, we learned how to build a cutscene:

* Sequencing of fixed camera positions can create cinematic-style camera movements.
* Sequencing of object and NPC animations are used to create the cinematics.
* Returning the camera at the end re-engages the player in the action.