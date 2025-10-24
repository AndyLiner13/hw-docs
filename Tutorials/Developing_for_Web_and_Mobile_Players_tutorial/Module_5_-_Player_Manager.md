# Module 5 - Player Manager

 Now, to put the Camera Manager to use. Open the sysPlayerManager script.  
## Acquire list of Camera Managers

 To acquire a list of the camera managers in the world, we can use tags. You can
use GameplayTags as a simple way of searching for entities.  
#### Assign tags:

 For each of your Camera Manager entities in the world, please verify that you
have added the CameraManager gameplay tag on its Properties panel: ![Screenshot of Properties panel for CameraManager entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489925046_692135336657754_9131683567393662516_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0UTzlx2-QoEQ7kNvwF4y0_O&_nc_oc=AdkeXPrrTIVrYFJgukRs_IeQwnwoACGTyIKvFMbsOf7rGOVSUkTR8OXaYV6Mtqne81w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=d-oS2lKw7P76ZSWkSS...
 Find the following TODO in the sysPlayerManager script:  `// TODO: Get all camera managers` Replace the above with the following line:  `this`.`cameraManagers `=` `this`.`world`.`getEntitiesWithTags`([`"CameraManager"`]);` this.cameraManagers now contains the list of all entities that have the
CameraManager tag. After we have this list, we must transfer the ownership of one of them to a
player when the player enters the world, since the Camera API runs in the local
client only. Locate the next TODO in the script:  `// TODO: Assign a Camera Manager to the player` Replace the above with this code:  
```
if (playerIndex < this.cameraManagers.length) {
  this.cameraManagers[playerIndex].owner.set(player);
} else {
  console.error("Not enough Camera Managers in the world");
}
```
 This code checks if there are available Camera Managers in the world and assigns
one of them to the player, based on its player index. If there are no available
Camera Managers, an error is written to the console. When the player leaves the world, we must transfer the Camera Manager for the
player back to the server. Find this TODO:  `// TODO: Release the Camera Manager from the player` Replace the above with the following:  
```
if (playerIndex < this.cameraManagers.length) {
  this.cameraManagers[playerIndex].owner.set(this.world.getServerPlayer());
}
```
 Your sysPlayerManager script should look like the following now (in a later
module, we complete the remaining TODO items):  
```
import * as hz from 'horizon/core';

class sysPlayerManager extends hz.Component<typeof sysPlayerManager> {
  static propsDefinition = {};
  private cameraManagers: hz.Entity[] = [];
  private focusedInteractionManagers: hz.Entity[] = [];

  preStart() {
    // Get all camera managers
    this.cameraManagers = this.world.getEntitiesWithTags(["CameraManager"]);
    // TODO: Get all Focused Interaction Managers
  }

  start() {
    // When a player enters the world assign them a Camera Manager and a Focused Interaction Manager
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterWorld,
      (player: hz.Player) => {
        this.RegisterPlayer(player);
      },
    );

    // When a player exits the world release their Camera Manager and Focused Interaction Manager
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerExitWorld,
      (player: hz.Player) => {
        this.DeregisterPlayer(player);
      },
    );
  }

  private RegisterPlayer(player: hz.Player) {
    let playerIndex = player.index.get();

    // Assign a Camera Manager to the player
    if (playerIndex < this.cameraManagers.length) {
      this.cameraManagers[playerIndex].owner.set(player);
    } else {
      console.error("Not enough Camera Managers in the world");
    }

    // TODO: Assign a Focused Interaction Manager to the player
  }

  private DeregisterPlayer(player: hz.Player) {
    let playerIndex = player.index.get();

    // Release the Camera Manager from the player
    if (playerIndex < this.cameraManagers.length) {
      this.cameraManagers[playerIndex].owner.set(this.world.getServerPlayer());
    }

    // TODO: Release the Focused Interaction Manager from the player
  }
}
hz.Component.register(sysPlayerManager);
```
## Checkpoint

 Each player that joins the world is assigned its own Camera Manager, which we
can use to control its camera.  
#### Test:

 To check if you’ve done everything correctly, jump into Preview Mode, teleport
to the Features Lab, and try out the camera related features there, which
exercise these systems:
• First Person Camera
• Third Person Camera
• Fixed Camera
• Attached Camera
• Camera POV
• Camera Roll
• Camera Collision
• Camera Perspective Switching

  
#### Systems complete:

 That completes building out our game systems! In the past few modules, you did
the following:
• Created a HUD system
• Created a Puzzle Manager
• Created a Camera Manager
• Updated the Player Manager

 These components lay the foundation for the next modules, where we start
building out the puzzle rooms and create a good experience for web and mobile players.  
## Additional Documentation and APIs

  
#### Docs:


•  [Using the Camera API for Web and Mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/camera/)
•  [How to set the player’s camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/how-to-set-the-players-camera/)
•  [Local Script for Mobile and Web](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/getting-started-with-local-scripting/)

  

#### API references:


• [Camera](https://horizon.meta.com/resources/scripting-api/camera.md/?api_version=2.0.0)
• [Camera class](https://horizon.meta.com/resources/scripting-api/camera.camera.md/?api_version=2.0.0)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
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

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fdeveloping-for-web-and-mobile-players-tutorial%2Fmodule-5-player-manager%2F)

# Module 5 - Player Manager
