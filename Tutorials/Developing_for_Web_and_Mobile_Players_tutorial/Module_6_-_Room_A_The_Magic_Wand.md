# Module 6 - Room A: The Magic Wand

 Now, we begin building out the puzzle rooms of our game. In this first room, the
puzzle is simple: navigate a maze to find and collect a magic wand, find the
exit door, and zap it with the wand to open the door to the next room. The above pathway requires use of all of the systems that we have built, as well
as some new coding to manage game activities. In this module, you learn:
•  Camera API: Changing camera modes such as First-Person Camera, Third-Person
Camera, or Camera Collisons settings.
•  Specify Grabbable Objects that are interactive in web and mobile devices.
•  Shooting: Projectile Launchers and making them interactive with other objects.

  
## Camera API

 The Camera API supports several camera modes that you can switch between at
runtime to enhance your players’ experience. In this room, we utilize two modes:
• First Person Camera
• Disabling Camera Collisions

  
### Switch to First Person Camera

 This room features a number of tight corridor spaces, where third-person camera
perspective (as shown above) won’t work. In tighter spaces, the camera should be
first-person, so that the player can follow the direction of movement and avoid
occlusions caused by sharp corners.  
#### Trigger Object

 In this room, there’s a Trigger Zone entity, RoomA_TriggerCameraFirstPerson,
which covers the volume where we want the camera to be set to First Person. This
volume covers the narrow corridors of the room. Whenever the player is inside the
trigger volume, the camera should be set to First Person mode. When the player
exits the trigger, the Camera mode is changed back to Third Person mode.  
#### sysCameraChangeTrigger Script

 Let’s open the sysCameraChangeTrigger script. This script has two portions,
actions to be taken when the player enters the trigger (OnPlayerEnterTrigger) and
when the player exits the trigger (onPlayerExitTrigger).
1. Search for the section of code where we are to input the sendNetworkEvent for
First Person Camera Mode when Player Enters Trigger, and find the following TODO:

  `
// TODO: Add in sendNetworkEvent for First Person Camera Mode when Player Enters Trigger`
1. Add in the following code:

  `this`.`sendNetworkEvent`(`player`,` sysEvents`.`OnSetCameraModeFirstPerson`,` `null`);` This above sends a network event with the event: onSetCameraModeFirstPerson. If
you recall, the listener is defined in sysCameraManagerLocal. When this event is
fired, sysCameraManagerLocal receives the event and sets Local Camera mode to
First Person.
1. In the section of code where Player Exits Trigger, we want to set the camera to
Third Person mode when the player exits the trigger. Find the following TODO:

  `
// TODO: Add in sendNetworkEvent for Third Person Camera Mode when Player Exits Trigger`
1. Replace the above with the following code:

  `this`.`sendNetworkEvent`(`player`,` sysEvents`.`OnSetCameraModeThirdPerson`,` `null`);` Now we must attach this script to the trigger object.
1. Select the RoomA_TriggerCameraFirstPerson Trigger Zone.
2. In its Properties, locate the Script section. From the Attached Script
drop-down, select sysCameraChangeTrigger.
3. The parameter appears in the panel. For the cameraMode value, enter:
FirstPerson.
  1. cameraModeText can be left blank for now.

 The panel should look like the following: ![Screenshot of script attached to the trigger zone with cameraMode set to
FirstPerson](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489785361_692135396657748_6759029060333216151_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=AVphXhF6f5EQ7kNvwEUUpRH&_nc_oc=AdlZneW7camhFPqMp7QD96Fl_4tbL2p-jD2rbvoVSPJyFtL5cU3CHQ98qUWPeAO-lpo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=K7lVXOfpzzbs9VEMPkS...
 ![Screenshot of doorway through which the camera switches to third-person point of
view](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653564_512509401287016_3625232458578274519_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=B7nt8yUvFy0Q7kNvwFeavnR&_nc_oc=AdlgJ9s5l9Mvb25vr7e3bYl-P-AHhk7nJsEiFmeIEPd-NCgCiYRsbR6wPL4Lktj_elo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=K7lVXOfpzzbs9VEMPkSdxA&oh=00...
### Disable camera collisions

 In the next area of the room, we must disable camera collision where you find
multiple columns that can interfere. ![Screenshot of area in the desktop editor where camera collisions are disabled
due to narrow passsageways](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968585_512509391287017_7589049499708338441_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=krNlae8_8YQQ7kNvwE0lAws&_nc_oc=Adl3thg2mRUBexcXXxpxWYdwq-jb7IrhQZgAFXJNA2KtyZREoLtkKdFUm_K_bA4EFbw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=K7lVXOfpzzbs9VEMPkSdxA&oh=00_A...
##### Trigger Object

 In the room, locate the Trigger Zone entity TriggerCameraCollision. This entity
covers the area where we want camera collision to be disabled: (the entire area
with the columns). Below, the Trigger Zone has been selected in the Hierarchy
panel of the desktop editor: ![Screenshot of the trigger zone in the desktop editor, which triggers activation
and de-activation of camera collisions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452970869_512509394620350_8496384459627415358_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=LEShX6qaHk0Q7kNvwGEt5CS&_nc_oc=AdlvP_1MCY3Q-l-fOzjFr9fkXrmID1UCLbzMsS4PuGjsmGy_PRo3x7x3NwdguOwiDJY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=K7lVXOfpzzbs9VEMPkS...
##### sysCameraChangeTrigger Script

 Now, we edit the sysCameraChangeTrigger script when the input is Collision:
1. Search for the section of code where we are to input the sendNetworkEvent for
Collision Mode when Player Enters Trigger. Find the following TODO:

  `
// TODO: Add in sendNetworkEvent to disable collision mode when Player Enters Trigger`
1. Replace the above with the following code:

  
```
this.sendNetworkEvent(player, sysEvents.OnSetCameraCollisionEnabled, {
  enabled: false,
});
```
 The above sends a network event with the event: onSetCameraCollision. Keep in
mind that the listener is defined in sysCameraManagerLocal. When this event is
fired, sysCameraManagerLocal performs the update to disable camera collision.
1. When the player exits the trigger, we want to re-enable camera collision. Find
the following TODO:

  `
// TODO: Add in sendNetworkEvent to enable collision mode when Player Exits Trigger`
1. Replace the above with the following code:

  
```
this.sendNetworkEvent(player, sysEvents.OnSetCameraCollisionEnabled, {
  enabled: true,
});
```

1. Now we must attach this script to the Trigger Zone entity. Select the
TriggerCameraCollision trigger zone.
2. In its Properties, locate the Script section. From the Attached Script
drop-down, select sysCameraChangeTrigger.
3. For the CameraMode property, enter: Collision.
  1. cameraModeText can be left blank for now.

 The panel should look like the following now: ![Screenshot of Properties panel for the TriggerCameraCollision trigger zone](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488959834_692135349991086_6423528237934908180_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=mnwzeCZD70sQ7kNvwHP4ARO&_nc_oc=AdkERJgVnbGJQmdiwAQzJ4EI9k5koJU3FTMV9E3y5CKGsIK-3FnKONnycIzR47eH7TE&_nc_zt=14&_nc_ht=scontent-dfw5-...
## Set up a grabbable object that shoots projectiles

 In the area shown below, we have group of entities:
• A magic wand entity
• A projectile launcher

 We want to make this grouped entity grabbable, as well as able to shoot and
interact with other objects. To complete the puzzle, the player must grab the wand,
fire projectiles and hit the exit door to open it. ![Screenshot of the wand, a grabbable projectile shooter](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452818142_512509384620351_632903491088573082_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2kzhxClyMNkQ7kNvwHenS6v&_nc_oc=Adlp9BckdRl5I7PbcBHWYq6ML2nkWlSUkrus1fk5uGIaUhCnjTu4mc6ow_Skd-NMK88&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=K7lVX...
#### The Magic Wand projectile entity

 The wand projectile object (RoomA_Wand) is a parent group of 2 items.
1. The wand object that constitutes the shape
2. A projectile launcher (RoomA_ProjectileLauncher) that actually does the
projectile animation and interaction

 The wand and the projectile launcher must be grouped together so that they
interact with the world as a set. ![Screenshot of wand and projectile launcher as a group in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512509381287018_6692747131156131000_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=TYdH20PfYeAQ7kNvwH5Z9d0&_nc_oc=AdkS3aSF9ZyinXTc8QjyQXmpzSyCF4DLbNuoWVyoyPkk3-xGXOxR4v-aY1_w4kj_Fyg&_nc_zt=14&_nc_ht=scontent-dfw5-...
#### Set object as grabbable:


1. Select the RoomA_Wand entity.
2. In the Properties tab, locate the Behavior section.
3. Properties:
4. Set Motion property: Interactive.
5. Set Interaction property: Grabbable.
 ![Screenshot of visibility and collision properties for the magic wand entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512509364620353_6590152911512892444_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=I_BNXXFmKTUQ7kNvwGrKdQu&_nc_oc=Adm-SpTmolfX1iaCLaIkAzleZiQ2p_tAUG_2iVoJThR5dM-jpP8xh1WHfJv3l-jHqzY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=K...
 Checkpoint: After the above is completed, preview the scene. You should see that the wand
now has an E and a hand symbol over it, indicating that you can press E to grab
the entity on mobile or desktop.  
#### Customize avatar interactions:

 We can also customize the Avatar’s interaction with this entity. For example:
1. Set Avatar Pose: Torch. This sets the grab animation to be similar to a person
holding a torch.
2. Set Who Can Grab?: Anyone. This allows anybody to grab this entity.
3. Set Who Can Take From Holder?: Only You. This disables the ability to grab the
entity out of somebody else’s hand.
4. Set Primary Action Icon: Fire. This creates the action button on mobile where
players can select to trigger a fire action.
5. Set Secondary Action Icon: Aim. This creates the action button on mobile where
players can select to trigger the aim action.

 The Properties panel should look something like the following: ![Screenshot of Properties panel for the magic wand entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490155658_692135356657752_506079041216624330_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yTsgOzVphbcQ7kNvwE08iVp&_nc_oc=Adl5cpYkTVaMqyYGpsY-m6Xy6ywDDmYmIpBTjwESh8dZT4idcMH5cI6R2b86or5s90o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx...
 Tip: If you wish to customize the way the Avatar holds the wand, you can switch to
the VR headset to set the Grab Anchors on the entity. This defines the locations
on the entity where it can be grabbed.  
## Customize Projectile Launcher

 You may wish to customize the properties of the projectile launcher, such as the
speed of the projectile, the gravity acting on the projectile motion, the scale
(size) of the projectile objects, the trail length and the color. You can modify these properties by selecting the projectile entity
(RoomA_ProjectileLauncher) and modify the appropriate values in the Properties panel: ![Screenshot of Properties panel for projectile launcher entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452936022_512509447953678_2675348446593389257_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=eTM4thcqNesQ7kNvwHTifJZ&_nc_oc=AdkZ9yoOaR4_ZedzuKxkzt6uzMhxXTHZl9Z9XHfcVeTnH7eAIqrcrJ9EQ2PKK0nsU4I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=K...
#### Projectile Launcher Scripting

 Now, we must script the ability for the wand to shoot projectiles and open the
exit door. First, we configure the following props definitions in the propsDefinition
section of the RoomA_Wand script as shown below.
1. Open the RoomA_Wand script.
2. Search for the propsDefinition code section:

  
```
static propsDefinition = {
  // TODO: Add in props definitions
};

```

1. Add in the following props:

  
```
// This points to the projectile launcher entity
projectileLauncher: {type: hz.PropTypes.Entity},


// This holds the hint text that we want to display when player grabs wand
hintText: {type: hz.PropTypes.String},

// Number of seconds to display hint
hintDuration: {type: hz.PropTypes.Number, default: 2},
// The exit door object that we want to move when hit with projectile
objectToMove: {type: hz.PropTypes.Entity},

// Puzzle Manager object holding the Puzzle Manager script to solve puzzle
puzzleManager: {type: hz.PropTypes.Entity},

```
 The propsDefinition should look like the following (comments have been removed):  
```
static propsDefinition = {

    projectileLauncher: {type: hz.PropTypes.Entity},
    hintText: {type: hz.PropTypes.String},
    hintDuration: {type: hz.PropTypes.Number, default: 2},
    objectToMove: {type: hz.PropTypes.Entity},
    puzzleManager: {type: hz.PropTypes.Entity},
};

```

1. Next, we want to check if the props have been defined, as we need them for the
wand to work as intended. To do so, add the following code under this TODO
comment:

  
```
// TODO: Check if the props have been defined
const launcher = this.props.projectileLauncher?.as(hz.ProjectileLauncherGizmo);
const door = this.props.objectToMove;
if(launcher === undefined \|\| launcher === null) return;

```

1. Next, we set the owner of the projectile launcher to be the player, which
enables us to set the aim direction on web and mobile and to shoot projectiles in the
same direction that the camera (also owned by the player) is facing. To do so,
add the following code under this TODO comment:

  
```
// TODO: Set ownership of the launcher to the player. This will also allow us to set the aim direction on web and mobile,
// shooting projectile in the direction the camera is facing
launcher.owner.set(player);
```

1. Next, we want to display a hint through the player’s HUD when the player grabs
the wand. The code below sends the event to sysHintHUDManager to display the
hint:

  
```
// TODO: Send event to HintHUDManager to display wand hint
this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
  players: [player],
  text: this.props.hintText,
  duration: this.props.hintDuration,
});
```

1. Now, we add animation and a small delay before launching the projectile. Insert
the following code within the connectCodeBlockEvent section:

  
```
// TODO: Play animation and launch projectile on index trigger down
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnIndexTriggerDown,
  (player: hz.Player) => {
    player.playAvatarGripPoseAnimationByName(
      hz.AvatarGripPoseAnimationNames.Fire,
    );
    // Small delay to allow the animation to play before launching the projectile
    this.async.setTimeout(() => launcher.launchProjectile(), 30);
  },
);
```

1. We want to resolve the puzzle by sending a network event (OnFinishPuzzle) to the
Puzzle Manager:

  
```
// TODO: Solve puzzle when door is hit
this.connectCodeBlockEvent(
  launcher,
  hz.CodeBlockEvents.OnProjectileHitEntity,
  (obj, position, normal, isStaticHit) => {
    if (obj === door && this.props.puzzleManager) {
      this.sendNetworkEvent(
        this.props.puzzleManager,
        sysEvents.OnFinishPuzzle,
        {},
      );
    }
  },
);
```
 After all the code changes, the RoomA_Wand script should look like the
following:  
```
import * as hz from 'horizon/core';
import { sysEvents } from 'sysEvents';


class RoomA_Wand extends hz.Component<typeof RoomA_Wand> {
  static propsDefinition = {
    projectileLauncher: {type: hz.PropTypes.Entity},
    hintText: {type: hz.PropTypes.String},
    hintDuration: {type: hz.PropTypes.Number, default: 2},
    puzzleManager: {type: hz.PropTypes.Entity},
    objectToMove: {type: hz.PropTypes.Entity},
  };


  start() {
    const launcher = this.props.projectileLauncher?.as(hz.ProjectileLauncherGizmo);
    const door = this.props.objectToMove;
    if(launcher === undefined \|\| launcher === null) return;


    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: true, player: hz.Player) => {
      // Set ownership of the launcher to the player. This will also allow us to set the aim direction on web and mobile,
      // shooting projectile in the direction the camera is facing
      launcher.owner.set(player);


      // Sends event to HintHUDManager to display wand hint
      this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {players: [player], text: this.props.hintText, duration: this.props.hintDuration});


      // Play animation and launch projectile on index trigger down
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
        player.playAvatarGripPoseAnimationByName(hz.AvatarGripPoseAnimationNames.Fire);
        // Small delay to allow the animation to play before launching the projectile
        this.async.setTimeout(() => launcher.launchProjectile(), 30);
      });


      //Solve puzzle when door is hit
      this.connectCodeBlockEvent(launcher, hz.CodeBlockEvents.OnProjectileHitEntity, (obj, position, normal, isStaticHit) => {
        console.log(obj.name.get())
        if(obj === door && this.props.puzzleManager) {
          this.sendNetworkEvent(this.props.puzzleManager, sysEvents.OnFinishPuzzle, {});
        }
      });
    });
  }
}
hz.Component.register(RoomA_Wand);
```
 The code is complete! Now, we attach this script to the wand.
1. Select the RoomA_Wand entity.
2. In its Properties, locate the Script section.
3. From the Attached Script drop-down, select RoomA_Wand.
4. New properties appear in the panel, as taken from the propsDefinition in the
script. Specify the following values:
  1. projectileLauncher: RoomA_ProjectileLauncher
  2. hintText: Fire and use magic to exit this room! (or any other hint text you
want)
  3. hintDuration: 5 (or any other duration in seconds you want the hint to show)
  4. objectToMove: RoomA_Door
  5. puzzleManager: RoomA_PuzzleManager

 The properties should look like the following: ![Screenshot of Properties panel for the RoomA_Wand entity after all properties
have been specified](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489526187_692135346657753_7313652591887126432_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=haw5jfx9ABcQ7kNvwHKAFBq&_nc_oc=Admt06qLHw_iUcFiGJ0W3xOcFf-onoo0in6IzuhBdm22lTXYnFZTh0_crTPnOQKSjPc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=K7lVXOfpzzbs9VEMPkSdxA&oh=...
## Checkpoint

 Room A module completed! In this module, you:
• Learned how to use the Camera API.
• Learned how to make an object grabbable.
• Learned how to use projectile launchers and make it interactive with the world.

  
#### Test:

 To test, you can try the puzzle in Room A to see if you can collect the wand and
use it to open the exit door! Tip: Pay attention to the changes in the camera as you move through the puzzle
room.
• Camera should be in Third Person mode in the wider areas.
• In the column area, the camera should switch to First Person mode.

  
## Additional Documentation and APIs

  
#### Additional documentation:


•  [How to set the player’s camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/how-to-set-the-players-camera/)
•  [Intro to Grabbable Entities](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities)

  

#### API docs:


• [Camera](https://horizon.meta.com/resources/scripting-api/camera.md/?api_version=2.0.0)
• [ProjectileLauncherGizmo](https://horizon.meta.com/resources/scripting-api/core.projectilelaunchergizmo.md/?api_version=2.0.0)

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
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fdeveloping-for-web-and-mobile-players-tutorial%2Fmodule-6-room-a-the-magic-wand%2F)

# Module 6 - Room A: The Magic Wand
