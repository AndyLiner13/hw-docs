# Module 5 - Fixed Camera and Spectator Mode
...
## Checkpoint

 In this module, we covered how to set up a fixed camera for the player. While we
generally want to keep players immersed in the action, this perspective can be
useful in some contexts. In the next module, we explore how to create cutscenes using simple camera
motions and animation.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 5 - Fixed Camera and Spectator Mode
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
# Module 5 - Fixed Camera and Spectator Mode
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcamera-api-examples-tutorial%2Fmodule-5-fixed-camera-and-spectator-mode%2F)
...
# Module 5 - Fixed Camera and Spectator Mode

 In some environments, you may wish to position the player as a spectator to an
event. This camera mode allows for visitors to enjoy an unfolding scene, such as
an NBA game or musical event. Or, in a dynamic environment, you can enable a
...
...
# Module 5 - Fixed Camera and Spectator Mode
...
FixedCamera perspective to allow them to step out of the action for a moment. In this tutorial, entering the red target switches the camera to spectator mode: ![Spectator area of the world](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473725278_632772199260735_5663417698444515637_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bksm9aJyMSMQ7kNvwFU61G-&_nc_oc=AdnxqZe_vUL4r9N2MSUkfjZ8GjwIFX5Bea0aYXY5piKcg10n2XtOGu2qcSY3yNv7Ye8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_7V...
...
# Module 5 - Fixed Camera and Spectator Mode
...
 Upon entering, your view transitions to the following: ![Spectator point of view](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/473560894_632772152594073_6744967488002230001_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=7OSUCb4NXEgQ7kNvwHHMmiX&_nc_oc=AdknEKkPpILgavpwcqNDZ77uz1yeVHMAJ0D2CS93PYjk-vRJrj8bt5tzOtlzxbuB6wI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_7VxjCFPWVN2ndawrZBJ3w&oh=00_Afe9t7...
...
# Module 5 - Fixed Camera and Spectator Mode
...
 After stepping onto the target, the player’s perspective is quickly transformed
to the point of view of the stationary reference object positioned above the
target, looking out over the above scene. Note: The Q icon is displayed in this camera mode to allow the visitor to escape out
of a fixed camera mode. This transition is triggered when the player enters the Trigger Zone, attached
to which is `FixedCameraTrigger.ts`. It’s a pretty simple script:  
```
class FixedCameraTrigger extends hz.Component<typeof FixedCameraTrigger> {
  static propsDefinition = {
    cameraPositionEntity: {type: hz.PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (player: hz.Player) => {
        if (
          this.props.cameraPositionEntity !== undefined &&
          this.props.cameraPositionEntity !== null
        ) {
          this.sendNetworkEvent(
            player,
...
...
# Module 5 - Fixed Camera and Spectator Mode
...
            PlayerCameraEvents.SetCameraFixedPositionWithEntity,
            {
              entity: this.props.cameraPositionEntity,
              duration: 0.4,
              easing: Easing.EaseInOut,
            },
          );
        } else {
          console.warn(
            'Attempted to use FixedCameraTrigger without a camera position entity. Create an empty object and reference it in the props.',
          );
        }
      },
    );
  }
}
hz.Component.register(FixedCameraTrigger);
```
 When a player enters the Trigger Zone, the setCameraFixedPositionWithEntity
event is emitted, which is received by the `PlayerCamera.ts` script. This script takes position and rotation information from the submitted
entity. In this case, the this.props.cameraPositionEntity property maps to the
reference object above the zone. In `PlayerCamera.ts`:
• A listener for the above event triggers a call to the
setCameraFixedPositionWithEntity() function.
...
...
# Module 5 - Fixed Camera and Spectator Mode
...
• Above function calls to: setCameraFixedPosition(), which:
  • Sets locomotion on the player to 0
  • Calls to displayCameraResetButton(), which activates the Q button on the mobile
and web screen.

 For more information on parameters of this event and the above functions, see [Module 2 - PlayerCamera Overview](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/camera-api-examples-tutorial/module-2-playercamera-overview).  
## Checkpoint
...
## Additional Links
...
      Learn
# Module 5 - Fixed Camera and Spectator Mode
...
