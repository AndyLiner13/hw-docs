# Module 3 - PlayerCameraManager
...
## PlayerCamera Self-Registration

 A PlayerCamera is 1) an empty reference object and 2) `PlayerCamera.ts` script to it. Each PlayerCamera object executes its `PlayerCamera.ts` script on start. In the `start()` method of `PlayerCamera.ts`, the script emits the OnRegisterPlayerCamera event to register itself with the
PlayerCameraManager:  
```
  start() {
    // Self register this PlayerCamera to the PlayerManager using a broadcast event.
    // We are using a broadcast event because it is easier to add / remove cameras as you adjust the number of max players for your world.
    // For more performance at world startup you may want to make this a non-broadcast network event and use the propsDefinition
    //  to specify a reference to the PlayerManager, then just use a sendNetworkEvent directly.
    this.sendNetworkBroadcastEvent(CameraManagerEvents.OnRegisterPlayerCamera, {ObjectId: "PlayerCamera", Object: this.entity});
  ...
...
# Module 3 - PlayerCameraManager
...
## PlayerCamera Self-Registration
...
  };
```
 In `PlayerCameraManager.ts`, a listener in the `preStart()` method pushes the registering camera into the list of available PlayerCameras:  
```
  preStart(): void {
    this.connectNetworkBroadcastEvent(CameraManagerEvents.OnRegisterPlayerCamera, ({ObjectId, Object}) => {
      if (ObjectId === "PlayerCamera") {
        this.playerCameras.push(Object);
      };
    });
  };
```
 From this list of PlayerCameras, individual players are assigned PlayerCameras.  
...
...
# Module 3 - PlayerCameraManager
...
## Assign and Unassign PlayerCameras

 In this example, camera assignment happens through an iterative process of
attempting to assign an available camera to a player that does not have one. Since execution of code is non-deterministic in the Meta Horizon Worlds
platform, actions to initialize a set of objects can lead to race conditions or other
issues. So, you can ensure a better result by setting up assignments of objects to
players or entities based on a defined set of attempts. In this case, PlayerCamera assignments are based off of the following constants:  
```
  private retryCameraAssignDelay: number = 0.1;
  private maxAssignAttempts: number = 5;
```
 When a player enters a world, the PlayerCameraManager makes up to 5 attempts,
each of which is separated by a 0.1 second time delay. If the PlayerCameraManager
...
...
# Module 3 - PlayerCameraManager
...
## Assign and Unassign PlayerCameras
...
fails to assign a camera, an error is reported. Each attempt to assign a camera consists of calling `getCameraForPlayer(player: hz.Player)` in the PlayerCameraManager class, which returns a camera from the array at the
player’s index. Whether joining the world via mobile, web or in VR, each player
is automatically assigned a player index, which increases from `[0]` to the maximum avatar capacity. Note: There must be at least the same number of PlayerCamera entities in the world
as the maximum avatar capacity of the world, so that a camera can be found and
assigned for every web and mobile player that joins. Potentially, all visitors to
the world could be mobile players. Similarly, when the player exits the world, the camera is unassigned from the
player and returned to the pool of PlayerCameras available for use.  
...
...
# Module 3 - PlayerCameraManager
...
## PlayerCameraManager.ts events

 The following CameraManagerEvents are defined and exported from this script:  
```
export const CameraManagerEvents = {
  OnRegisterPlayerCamera: new hz.NetworkEvent<{
    ObjectId: string;
    Object: hz.Entity;
  }>('OnRegisterPlayerCamera'),
  OnSetPlayerCamera: new hz.NetworkEvent<{
    player: hz.Player;
    camera: hz.Entity;
  }>('OnSetPlayerCamera'),
};
```
 Event uses:
|  |
|  |
| OnRegisterPlayerCamera | When the player has been assigned a PlayerCamera, the player/PlayerCamera combination is pushed in the PlayerCameras array of entities. |
| OnSetPlayerCamera | When a player enters the world, PlayerCameraManager.ts attempts to assign a PlayerCamera object to the player. |

  
...
...
# Module 3 - PlayerCameraManager
...
## Checkpoint

 Now you can manage your PlayerCamera entities! In this module, we explored how
to use the PlayerCameraManager class to assign and unassign PlayerCamera entities
to players entering the world. Tip: This assignment mechanism can be generalized to handle assignment of other
entity types to players entering and exiting the world. Next, we explore the Pan Camera mode and use cases.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
...
...
# Module 3 - PlayerCameraManager
...
## Checkpoint
...
[Blog](https://developers.meta.com/horizon/blog/)
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
# Module 3 - PlayerCameraManager
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fcamera-api-examples-tutorial%2Fmodule-3-playercameramanager%2F)
...
# Module 3 - PlayerCameraManager

 The PlayerCameraManager is responsible for managing the assignment of
PlayerCamera entities to players when they enter the world.  
## PlayerCamera Self-Registration
...
## Assign and Unassign PlayerCameras
...
## PlayerCameraManager.ts events
...
## Checkpoint
...
## Additional Links
...
      Learn
# Module 3 - PlayerCameraManager
...
