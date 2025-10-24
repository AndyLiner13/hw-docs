# Module 2 - The HUD System

  
## Systems Overview

 In this module, we begin building the systems to support the mechanics of our
puzzle game. These systems apply to all rooms (puzzles) of the game:
|  |
|  |
| HUD system | Provides guidance and tips to help the player solve the challenges |
| Puzzle Manager | - Monitors how long a player has been trying to complete a room; triggers clues. - Determines when a puzzle is complete, and the player can advance. |
| Camera Manager | Controls the camera based on room environment and device type for optimal experience. |
| Player Manager | Manages players entering and leaving the game. |

 Let’s start with the HUD first!  

## Overview of the HUD

 To build the HUD, we add in objects and attach them to the player’s screen. In
the tutorial world, we have used a small cube textured with a pattern to which we
have added a text gizmo. You can find these objects under the name
HintHUDPlayer in the tutorial world. Feel free to modify the HUD to your liking, using other
shapes, textures or fonts to make your game more attractive! 

### Web and mobile compatibility for the HUD

 To make the HUD object compatible with web and mobile, you must change a few
options in the Properties panel of the object:
|  |
|  |
| Avatar Attachable | Anchor |
| Attachable By | Everyone |
| Anchor To | Torso |
| Attach to 2D Camera | Enable it. |

 Additional 2D Screen properties appear in the panel to enable you to position
the object in the screen, rotate it, and/or scale it. 

 You can use the 2D Screen properties to position as needed. These coordinates
are in screen space. The X and Y coordinates control the position of the object in
the screen, where [0, 0] is the center of the screen, [-1, -1] is the bottom
left corner of the screen, and [1, 1] is the top right corner of the screen. The Z
coordinates control how far away from the camera the object is. Remember that the Meta Horizon Worlds UI is rendered on top of the game display
on Web and Mobile. This overlap includes images for buttons to open a menu,
different buttons to control the player and grabbable objects, and more. 

 Tip: Try to keep your UI in the center and left side of the screen, which is
usually not obstructed by platform-managed UI elements. Test your world on different
devices to verify that the UI is visible on all platforms. This step should be a
regular part of your web and mobile testing cycles.  

## Attach Script to HUD

 To get the HUD working, the HUD object must be attached to the player via
script. Our HUD manager script contains a list of HUD entities, one of which is attached
to the players when they enter the world. We will have a HUD manager that will have a list of HUD entities, and it will
attach one of the objects to the players when they enter the world.  

#### sysHintHUDEntity:

 Search for the HintHUDPlayer objects and make sure that the sysHintHUDEntity
script is attached and that it has a reference to the text gizmo of the entity: 

 We will use events to communicate between the HUD entities, the HUD manager and
any other system that requires displaying a hint.  

### HUD events

  
#### Specify events:

 Open the sysEvents script and check the following events:
• OnRegisterHintHUDEntity: we use this event to populate the list of HUD entities
in the HUD manager.
• OnDisplayHintHUD: we use this event to communicate to the HUD manager that we
want to display a hint with a specified text for some duration to specified
players.

  

#### Import events:

 Next, open the sysHintHUDEntity script and import these events at the top of the
file in order to use them:  `import` `{`sysEvents`}` `from` `'sysEvents'`;`  

#### Send local event:

 On startup, we must send the OnRegisterHintHUDEntity events to notify the HUD
manager to add this HUD entity to the list of available HUD entities. This way,
the HUD manager will be able to use the HUD entities when needed. Find the
following TODO in the script:  `// TODO: Notify the HintHUDManager to register this entity and this component` Replace the above with the following code to send the OnRegisterHintHUDEntity
event:  

```
this.sendLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, {
  HUDEntity: this.entity,
  HUDComponent: this,
});
```
 Notice that this event sends 2 parameters:
• HUDEntity: A reference to the entity, which is used to attach the entity to the
players when they enter the world.
• HUDComponent: A reference to the component, which is used by the HUD manager to
call the public function UpdateHintHUDText from within this script.
...

### Control HUD visibility

 Finally, we want to control the visibility of the HUD entities so that only the
player that owns the HUD entity can see it, and no other player can see it. To begin, we disable the visibility of the entity at start. Find the following
TODO in the script:  `// TODO: Hide the entity by default` Replace the above with this line of code to set its visibility to no players:  `this`.`entity`.`setVisibilityForPlayers`([],` hz`.`PlayerVisibilityMode`.`VisibleTo`);` The HUD manager is responsible for updating the visibility of the entity after
it’s attached to a player.  

### Finished sysHintHUDEntity script

 After these modifications, your sysHintHUDEntity script should look like the
following:  

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';

export class sysHintHUDEntity extends hz.Component {
  static propsDefinition = {
    Text: {type: hz.PropTypes.Entity},
  };

  start() {
    // Hide the entity by default
    this.entity.setVisibilityForPlayers([], hz.PlayerVisibilityMode.VisibleTo);

    // Notify the HintHUDManager to register this entity and this component
    this.sendLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, {
      HUDEntity: this.entity,
      HUDComponent: this,
    });
  }

  // Public function to update the text of this entity
  // This is called by the HintHUDManager
  public UpdateHintHUDText(text: string) {
    this.props.Text?.as(hz.TextGizmo)?.text.set(text);
  }
}
hz.Component.register(sysHintHUDEntity);
```
 That’s it! Our HUD entities are ready to be used by the HUD manager.  

### One HUD per Player

 But before that, please verify that you have one HUD entity for each possible
player in your world. One HUD entity is attached to each incoming player: 

### sysHintHUDManager

 Let’s modify the sysHintHUDManager script now. First, import the events and the
sysHintHUDEntity script:  

```
import {sysEvents} from 'sysEvents';
import {sysHintHUDEntity} from 'sysHintHUDEntity';
```
 The above import declarations pull in the class definitions from each of the
from files.  

#### Create event listener

 The first thing to do is listen to the OnRegisterHintHUDEntity event to add the
HUD entities to the list of available HUD entities. Find the following TODO in
the script:  `// TODO: Register all hint HUDs to keep track of their entities and components` Replace the above with the following code, which adds the entities and its
components to the hintHUDEntities and hintHUDComponents lists, respectively:  

```
this.connectLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, data => {
  this.hintHUDEntities.push(data.HUDEntity);
  this.hintHUDComponents.push(data.HUDComponent as sysHintHUDEntity);
});
```
 Notice that the HUD entities are sending the OnRegisterHintHUDEntity event in
the start() method, while the HUD manager starts listening to this event on
PreStart(). This is intentional to preserve the following order:
|  |
|  |
| 1 | PreStart() | HUD Manager starts listening for the OnRegisterHintHUDEntity event |
| 2 | start() | HUD entities send the OnRegisterHintHUDEntity event, notifying the HUD manager of existence after it has started listening. |

 We now have a list of all HUD entities in the world. Each player is assigned a
different HUD entity, and we use the player index to identify the entity that
belongs to each player. The next step is to display the HUDs when needed:
• Listen to the OnDisplayHintHUD event.
• Update the text of the HUDs by using their component reference and calling the
UpdateHintHUDText() function.
• Attach the player’s HUD to the player’s avatar, and set its visibility so the
player can see its own HUD.
• Set a timeout to hide the HUD after some time.

 Find the following TODO in the script:  `// TODO: Display the hint HUD of each player when a broadcast event is received` Replace the above with the following:  

```
this.connectNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, data => {
  // Reset timeout
  this.async.clearTimeout(this.timeoutID);

  // Update all hint HUDs texts via their components
  this.hintHUDComponents.forEach(hudComponent => {
    hudComponent.UpdateHintHUDText(data.text);
  });

  // Show the hint HUD of each player
  data.players.forEach(player => {
    // Display a popup instead of the hint HUD for VR players
    if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
      this.world.ui.showPopupForPlayer(player, data.text, data.duration);
    } else {
      let playerIndex = player.index.get();

      // Display the hint HUD
      if (playerIndex < this.hintHUDEntities.length) {
        let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
        playerHintHUDEntity
          .as(hz.AttachableEntity)
          ?.attachToPlayer(player, hz.AttachablePlayerAnchor.Torso);
        playerHintHUDEntity.setVisibilityForPlayers(
          [player],
          hz.PlayerVisibilityMode.VisibleTo,
        );
      }

      // Set timeout to hide the hint HUD after a certain amount of time
      this.timeoutID = this.async.setTimeout(
        () => this.HideHintHUD(),
        data.duration * 1000,
      );
    }
  });
});
```

 To hide the HUD after a time period, we must detach it and set its visibility to
be not visible. Find the following TODO in the script:  `// TODO: Detach and hide a hint HUD for all players` Replace the above with this function:  

```
private HideHintHUD() {
  let players = this.world.getPlayers();
  players.forEach(player => {
    let playerIndex = player.index.get();
    if (playerIndex < this.hintHUDEntities.length) {
      let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
      playerHintHUDEntity.as(hz.AttachableEntity)?.detach();
      playerHintHUDEntity.setVisibilityForPlayers([], hz.PlayerVisibilityMode.VisibleTo);
    }
  });
}

```

### Finished sysHintHUDManager script

 After you have completed the previous changes, your sysHintHUDManager script
should look like the following:  

```
import * as hz from 'horizon/core';
import {sysEvents} from 'sysEvents';
import {sysHintHUDEntity} from 'sysHintHUDEntity';

class sysHintHUDManager extends hz.Component<typeof sysHintHUDManager> {
  static propsDefinition = {};

  private hintHUDEntities = new Array<hz.Entity>();
  private hintHUDComponents = new Array<sysHintHUDEntity>();

  private timeoutID = -1;

  preStart() {
    // Register all hint HUDs to keep track of their entities and components
    this.connectLocalBroadcastEvent(sysEvents.OnRegisterHintHUDEntity, data => {
      this.hintHUDEntities.push(data.HUDEntity);
      this.hintHUDComponents.push(data.HUDComponent as sysHintHUDEntity);
    });
  }

  start() {
    // Display the hint HUD of each player when a broadcast event is received
    this.connectNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, data => {
      // Reset timeout
      this.async.clearTimeout(this.timeoutID);

      // Update all hint HUDs texts via their components
      this.hintHUDComponents.forEach(hudComponent => {
        hudComponent.UpdateHintHUDText(data.text);
      });

      // Show the hint HUD of each player
      data.players.forEach(player => {
        // Display a popup instead of the hint HUD for VR players
        if (player.deviceType.get() === hz.PlayerDeviceType.VR) {
          this.world.ui.showPopupForPlayer(player, data.text, data.duration);
        } else {
          let playerIndex = player.index.get();

          // Display the hint HUD
          if (playerIndex < this.hintHUDEntities.length) {
            let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
            playerHintHUDEntity
              .as(hz.AttachableEntity)
              ?.attachToPlayer(player, hz.AttachablePlayerAnchor.Torso);
            playerHintHUDEntity.setVisibilityForPlayers(
              [player],
              hz.PlayerVisibilityMode.VisibleTo,
            );
          }

          // Set timeout to hide the hint HUD after a certain amount of time
          this.timeoutID = this.async.setTimeout(
            () => this.HideHintHUD(),
            data.duration * 1000,
          );
        }
      });
    });
  }

  // Detach and hide a hint HUD for all players
  private HideHintHUD() {
    let players = this.world.getPlayers();
    players.forEach(player => {
      let playerIndex = player.index.get();
      if (playerIndex < this.hintHUDEntities.length) {
        let playerHintHUDEntity = this.hintHUDEntities[playerIndex];
        playerHintHUDEntity.as(hz.AttachableEntity)?.detach();
        playerHintHUDEntity.setVisibilityForPlayers(
          [],
          hz.PlayerVisibilityMode.VisibleTo,
        );
      }
    });
  }
}
hz.Component.register(sysHintHUDManager);
```

#### sysHintHUDEntity:
### HUD events
### Control HUD visibility
### Finished sysHintHUDEntity script
### One HUD per Player
### sysHintHUDManager
### Finished sysHintHUDManager script

## Checkpoint

 We’re done with the HUD system!  

#### Test:

 Now, you can use the OnDisplayHintHUD event to display a hint to 1 or more
players, with a specified text and duration (in seconds). You can add the following
in the start() method of a test script:  

```
this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
  players: [player],
  text: "This is an example",
  duration: 5,
});
```
 This system is used throughout the puzzle game to teach players how to use
objects or help them resolve the puzzles.  

## Additional Documentation and APIs

  
#### Additional Documentation:


•  [2D UI for Web and Mobile](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/2d-ui-for-web-and-mobile)
•  [Safe Placement of UI Controls](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/designing-worlds-for-mobile-and-web/safe-placement-of-ui-controls/)
•  [Events](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/local-events)

  

#### API docs:


• [CodeBlockEvent](https://horizon.meta.com/resources/scripting-api/core.codeblockevent.md/?api_version=2.0.0)
• [LocalEvent](https://horizon.meta.com/resources/scripting-api/core.localevent.md/?api_version=2.0.0)
• [NetworkEvent](https://horizon.meta.com/resources/scripting-api/core.networkevent.md/?api_version=2.0.0)
• [Player.DeviceType](https://horizon.meta.com/resources/scripting-api/core.player.devicetype.md/?api_version=2.0.0)

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
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fdeveloping-for-web-and-mobile-players-tutorial%2Fmodule-2-the-hud-system%2F)

# Module 2 - The HUD System

  
## Systems Overview
...
## Overview of the HUD
...
## Attach Script to HUD
...
## Checkpoint
...
## Additional Documentation and APIs
...
## Additional Links
...
      Learn
# Module 2 - The HUD System
