# Module 6 - Fixed Camera and Cutscenes
...
## DoorButton.ts

 This is a fairly simple script, which manages two events:
1. onPlayerEnterTrigger causes a LocalEvent to be emitted to the entity specified
in the this.props.doorCutScene, referring to the reference object to which the `DoorCutScene.ts` is attached. This event triggers the camera dolly and cutscene animation.
2. After the animation is completed and the PlayerCamera has returned to the
player’s perspective, `DoorCutScene.ts` sends an event back to this script, which re-enables the magic green button for
replay.

  
```
   start() {
    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player: hz.Player) => {
      if (this.props.doorCutscene !== undefined && this.props.doorCutscene !== null) {
  ...
...
# Module 6 - Fixed Camera and Cutscenes
...
## DoorButton.ts
...
        this.sendLocalEvent(this.props.doorCutscene, CutsceneEvents.OnStartCutscene, {player, doorButton: this.entity});
        this.entity.as(hz.TriggerGizmo).enabled.set(false);
      } else {
        console.warn("DoorButton pressed, but no doorCutscene was set in the props.")
      };
    });
    this.connectNetworkEvent(this.entity, CutsceneEvents.OnCutsceneComplete, () => {
      this.entity.as(hz.TriggerGizmo).enabled.set(true);
    });
  };
```
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### Script Properties

 The following script properties are relevant to the camera dolly movement, the
animation sequence, or both.  
```
  static propsDefinition = {
    door: {type: hz.PropTypes.Entity},
    cameraStart: {type: hz.PropTypes.Entity},
    cameraEnd: {type: hz.PropTypes.Entity},
    moveDuration: {type: hz.PropTypes.Number, default: 5},
    robot: {type: hz.PropTypes.Entity},
  };
```

|  |
|  |
| door | Reference to the entity that is the door | playEnvironmentAnimation |
| cameraStart | Reference to the entity that is used as the point of reference for beginning the camera animation | playCameraAnimation |
| cameraEnd | Reference to the entity that is used as the point of reference for end point of the camera animation | playCameraAnimation |
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### Script Properties
...
| moveDuration | Time in seconds that the action sequence should last | playCameraAnimation and playEnvironmentAnimation |
| robot | Reference to the entity that is the NPC to animate | playEnvironmentAnimation |
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### playCameraAnimation()

 This function drives the switching of the camera to the first reference point
and the transition of the camera (dolly) to the second reference point. Tip: Review and modify this function to create camera animations of your own. Make
sure that you create the empty reference objects to define the beginning and
ending of the camera movement. With a bit of work, you can chain together multiple
sequences of camera animation. The camera animation is defined by the position of two objects that are
referenced by property on the `DoorCutScene.ts` script:  
```
moveDuration: {type: hz.PropTypes.Number, default: 5},
cameraStart: {type: hz.PropTypes.Entity},
cameraEnd: {type: hz.PropTypes.Entity},
```
 Additionally, you can modify the following properties to change some of the
performance aspects of the dolly: rate of travel, easing, etc.  
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### playCameraAnimation()
...
```
static readonly MoveToStartDuration: number = 0.4;
private static readonly MoveToStartEasing: Easing = Easing.Linear;
private static readonly DollyEasing: Easing = Easing.EaseOut;
```
 Tip: To create a pan effect, set the rotation of the starting object and the ending
object to point in the same direction.  
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### playEnvironmentAnimation

 This function defines three basic animated effects:
1. Door open
2. Robot emotes (thumbs up!)
3. Door closes

 This function references the following parameters:  
```
door: {type: hz.PropTypes.Entity},
moveDuration: {type: hz.PropTypes.Number, default: 5},
robot: {type: hz.PropTypes.Entity},
```
 Tip: You can modify the robot animation to use different emotes. Change the value
of the parameter for `setAnimationParameterTrigger()` to experiment. For more information on available emotes, see [NPC Scripts](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npc-scripts). Tip: You can build even more complex sequences in this location, inserting
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
### playEnvironmentAnimation
...
different NPCs at this location. For more information, see [NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npcs).  
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation

 In `DoorCutScene.ts`, the `start()` method contains the sequencing of actions:  
```
  start() {
    this.connectLocalEvent(this.entity, CutsceneEvents.OnStartCutscene, ({player, doorButton}) => {
        this.doorButton = doorButton;
        // Play the camera animations. You can add / edit / remove for your own camera animations here.
        this.playCameraAnimation(player);
        // Play environmental animations. You can add / edit / remove for your own environmental animations here.
        this.playEnvironmentalAnimation();
        this.connectNetworkEvent(player, PlayerCameraEvents.OnCameraResetPressed, () => {
          this.quitCameraAnimationForPlayer(player);
        });
    });
  };
```

• The camera animation (dolly) is played.
• The cut scene with the door and robot is played.
• If the reset button is pressed, the animations and camera position are reset.
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Trigger the Camera Dolly and Environment Animation
...
 Note: Each of the steps of the sequence (camera or environmental animation) is
wrapped in a timeout, which ensures that the specific action has a defined duration.  
### Script Properties
...
### playCameraAnimation()
...
### playEnvironmentAnimation
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Checkpoint

 In this module, we learned how to build a cutscene:
• Sequencing of fixed camera positions can create cinematic-style camera
movements.
• Sequencing of object and NPC animations are used to create the cinematics.
• Returning the camera at the end re-engages the player in the action.

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaQuestVR)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Checkpoint
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcamera-api-examples-tutorial%2Fmodule-6-fixed-camera-and-cutscenes%2F)
...
# Module 6 - Fixed Camera and Cutscenes

 You can inject a cutscene into your world experience using transitions of a
...
...
# Module 6 - Fixed Camera and Cutscenes
...
fixed camera and sequences of timed animations. In the final station of this tutorial is a magic green button. ![Button in the world to activate the cutscene](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/472790526_632772169260738_7344563092973262743_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WGYU5kZ7Y7gQ7kNvwEqqWMA&_nc_oc=AdnmIyik9l-sC6ZB727sfGPhK-Oo4gbJCNry1gsVqEwSqylTajmxjCr7Ev4cteOGOuE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=K63xiR6XmdVB3sEB8D0...
...
# Module 6 - Fixed Camera and Cutscenes
...
 When this button is pressed:
• The Trigger Zone object is breached by the player’s hand, which triggers code in
the `DoorButton.ts` script.
• This trigger sends a LocalEvent to the `DoorCutScene.ts` script, which executes the cutscene in the world:
  • The PlayerCamera position is quickly transitioned to the first reference object
in front of the button. See screenshot.
  • The PlayerCamera is transitioned smoothly forward to the second reference
object, effecting a dolly camera movement.
  • When the second reference object is reached:
   • The PlayerCamera stops.
   • The door animates to open.
   • The NPC robot steps forward and gives a thumbs up.
   • The door closes quickly.
  • PlayerCamera point of view resets to the previous mode and position, which is
back with the player standing in front of the green button.

  
## DoorButton.ts
...
## Trigger the Camera Dolly and Environment Animation
...
...
# Module 6 - Fixed Camera and Cutscenes
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 6 - Fixed Camera and Cutscenes
...
