Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-6-room-a-the-magic-wand

# Module 6 - Room A: The Magic Wand

Now, we begin building out the puzzle rooms of our game. In this first room, the puzzle is simple: navigate a maze to find and collect a magic wand, find the exit door, and zap it with the wand to open the door to the next room.

The above pathway requires use of all of the systems that we have built, as well as some new coding to manage game activities. In this module, you learn:

* Camera API: Changing camera modes such as First-Person Camera, Third-Person Camera, or Camera Collisons settings.
* Specify Grabbable Objects that are interactive in web and mobile devices.
* Shooting: Projectile Launchers and making them interactive with other objects.

## Camera API

The Camera API supports several camera modes that you can switch between at runtime to enhance your players’ experience. In this room, we utilize two modes:

* First Person Camera
* Disabling Camera Collisions

### Switch to First Person Camera

![Screenshot of doorway through which the camera switches to third-person point of view](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653564_512509401287016_3625232458578274519_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=LZrLYw5mmLQQ7kNvwGFMoRU&_nc_oc=AdlCIvraA8lcG4SIVnTZQHbt5MUkl_qcDsVPcOzFhpSC7zyWqVBSfvVpsvVOKPC00go&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfjxmxyuVJB-5rhJROdHwKixBBKTpqBKVCEFmXXRVUAPBQ&oe=69464A75)

This room features a number of tight corridor spaces, where third-person camera perspective (as shown above) won’t work. In tighter spaces, the camera should be first-person, so that the player can follow the direction of movement and avoid occlusions caused by sharp corners.

#### Trigger Object

In this room, there’s a Trigger Zone entity, RoomA\_TriggerCameraFirstPerson, which covers the volume where we want the camera to be set to First Person. This volume covers the narrow corridors of the room. Whenever the player is inside the trigger volume, the camera should be set to First Person mode. When the player exits the trigger, the Camera mode is changed back to Third Person mode.

#### sysCameraChangeTrigger Script

Let’s open the sysCameraChangeTrigger script. This script has two portions, actions to be taken when the player enters the trigger (OnPlayerEnterTrigger) and when the player exits the trigger (onPlayerExitTrigger).

- Search for the section of code where we are to input the sendNetworkEvent for First Person Camera Mode when Player Enters Trigger, and find the following TODO:

```
// TODO: Add in sendNetworkEvent for First Person Camera Mode when Player Enters Trigger
```

- Add in the following code:

```
this.sendNetworkEvent(player, sysEvents.OnSetCameraModeFirstPerson, null);
```

This above sends a network event with the event: onSetCameraModeFirstPerson. If you recall, the listener is defined in sysCameraManagerLocal. When this event is fired, sysCameraManagerLocal receives the event and sets Local Camera mode to First Person.

- In the section of code where Player Exits Trigger, we want to set the camera to Third Person mode when the player exits the trigger. Find the following TODO:

```
// TODO: Add in sendNetworkEvent for Third Person Camera Mode when Player Exits Trigger
```

- Replace the above with the following code:

```
this.sendNetworkEvent(player, sysEvents.OnSetCameraModeThirdPerson, null);
```

Now we must attach this script to the trigger object.

- Select the RoomA\_TriggerCameraFirstPerson Trigger Zone.
- In its Properties, locate the Script section. From the Attached Script drop-down, select sysCameraChangeTrigger.
- The parameter appears in the panel. For the cameraMode value, enter: FirstPerson.
  - cameraModeText can be left blank for now.

The panel should look like the following:

![Screenshot of script attached to the trigger zone with cameraMode set to FirstPerson](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489785361_692135396657748_6759029060333216151_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=q5TTAYajKbkQ7kNvwEiCUwL&_nc_oc=AdlaecmiI-8zsxRY7quZ3HbsXqCKHms0NIytsSlQoKJtfxuT4NTas0PPtjZvjAIa8Vo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_Afichp9fF35FNN_E3gfeRVwoupu7T4DzIB6MRLTEXExa8w&oe=69464FF1)

### Disable camera collisions

In the next area of the room, we must disable camera collision where you find multiple columns that can interfere.

![Screenshot of area in the desktop editor where camera collisions are disabled due to narrow passsageways](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968585_512509391287017_7589049499708338441_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ALTTrBAZ57QQ7kNvwHE1Iri&_nc_oc=AdkCR0yW7JjgRoYG6ppjwrq2Zsy4AMWwJ1R5zPdAtnEzLITAZDz5dxcFZfr8pwNLLHE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfjmGFUOM1sUWVwlLfzJOXa6SnlqiqLmIRj7APGl-OJneQ&oe=69464A37)

##### Trigger Object

In the room, locate the Trigger Zone entity TriggerCameraCollision. This entity covers the area where we want camera collision to be disabled: (the entire area with the columns). Below, the Trigger Zone has been selected in the Hierarchy panel of the desktop editor:

![Screenshot of the trigger zone in the desktop editor, which triggers activation and de-activation of camera collisions](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452970869_512509394620350_8496384459627415358_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Du-xc4IY_RAQ7kNvwFGXHpd&_nc_oc=AdlJx5eAzmwZKxMUPrdBbzmCbovsJgITs2OXls9C59mbj0bxDtnPG6LfT8i_AzzD9BE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfiRCljUL0S5Klk_FZhSYpQZaUo5ttt80lxtm2ghNLH99g&oe=694655E4)

##### sysCameraChangeTrigger Script

Now, we edit the sysCameraChangeTrigger script when the input is Collision:

- Search for the section of code where we are to input the sendNetworkEvent for Collision Mode when Player Enters Trigger. Find the following TODO:

```
// TODO: Add in sendNetworkEvent to disable collision mode when Player Enters Trigger
```

- Replace the above with the following code:

```
this.sendNetworkEvent(player, sysEvents.OnSetCameraCollisionEnabled, {
  enabled: false,
});
```

The above sends a network event with the event: onSetCameraCollision. Keep in mind that the listener is defined in sysCameraManagerLocal. When this event is fired, sysCameraManagerLocal performs the update to disable camera collision.

- When the player exits the trigger, we want to re-enable camera collision. Find the following TODO:

```
// TODO: Add in sendNetworkEvent to enable collision mode when Player Exits Trigger
```

- Replace the above with the following code:

```
this.sendNetworkEvent(player, sysEvents.OnSetCameraCollisionEnabled, {
  enabled: true,
});
```

- Now we must attach this script to the Trigger Zone entity. Select the TriggerCameraCollision trigger zone.
- In its Properties, locate the Script section. From the Attached Script drop-down, select sysCameraChangeTrigger.
- For the CameraMode property, enter: Collision.
  - cameraModeText can be left blank for now.

The panel should look like the following now:

![Screenshot of Properties panel for the TriggerCameraCollision trigger zone](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488959834_692135349991086_6423528237934908180_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=-pGtXEDNQ8cQ7kNvwH0vMZP&_nc_oc=AdkBn7B2vc7zSmJj0rxScEqvo8dhnI1MFg8XChGS3AWGZunzxSbYg-vJIemU9w-HwA4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_Afj0hmmRH7keUZo9ruvyi47iaftgehMMjjGx5LTHs7_MjA&oe=69463E91)

## Set up a grabbable object that shoots projectiles

In the area shown below, we have group of entities:

* A magic wand entity
* A projectile launcher

We want to make this grouped entity grabbable, as well as able to shoot and interact with other objects. To complete the puzzle, the player must grab the wand, fire projectiles and hit the exit door to open it.

![Screenshot of the wand, a grabbable projectile shooter](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452818142_512509384620351_632903491088573082_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=aLdLA6pYDBAQ7kNvwEMQ4hr&_nc_oc=AdkbTiz86096poGB1KtEPhTPapfdArfkz1DperEPZLX7OeVYQTt0JKsAV3q2o8rFCTI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfhP1XmXImBqayvMrni4JEqq8N9iZIK2R967BrwO8JfvVQ&oe=694645A9)

#### The Magic Wand projectile entity

The wand projectile object (RoomA\_Wand) is a parent group of 2 items.

- The wand object that constitutes the shape
- A projectile launcher (RoomA\_ProjectileLauncher) that actually does the projectile animation and interaction

The wand and the projectile launcher must be grouped together so that they interact with the world as a set.

![Screenshot of wand and projectile launcher as a group in the desktop editor](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452459127_512509381287018_6692747131156131000_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=vYmGXhPtjzYQ7kNvwH_mQsy&_nc_oc=Adlvhd_F9hylGKLKR-PT4L34DOYvCl8GLyW0KCWk90ah2TIRIrSwVJznlB9YJMGr_xE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfioaIdxvFZvVi9SUMLqFt7Hmdjw5HFMbWOCGSKW1rj5rg&oe=694648D9)

#### Set object as grabbable:

- Select the RoomA\_Wand entity.
- In the Properties tab, locate the Behavior section.
- Properties:
- Set Motion property: Interactive.
- Set Interaction property: Grabbable.

![Screenshot of visibility and collision properties for the magic wand entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452588453_512509364620353_6590152911512892444_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=b9OwOkUEbrEQ7kNvwGzDCwB&_nc_oc=Adlr_zSWOTyv6IB_7rABjqF8Yl8puBwVwiXy4Dkjmr0i-c59HyVKo5Eq4RAZNYogRno&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfghfQU3xG49CisG7WI9b-y-v0VAmybzwU6XNdH7Fjhb-A&oe=694638A7)

**Checkpoint**: After the above is completed, preview the scene. You should see that the wand now has an E and a hand symbol over it, indicating that you can press E to grab the entity on mobile or desktop.

#### Customize avatar interactions:

We can also customize the Avatar’s interaction with this entity. For example:

- Set Avatar Pose: Torch. This sets the grab animation to be similar to a person holding a torch.
- Set Who Can Grab?: Anyone. This allows anybody to grab this entity.
- Set Who Can Take From Holder?: Only You. This disables the ability to grab the entity out of somebody else’s hand.
- Set Primary Action Icon: Fire. This creates the action button on mobile where players can select to trigger a fire action.
- Set Secondary Action Icon: Aim. This creates the action button on mobile where players can select to trigger the aim action.

The Properties panel should look something like the following:

![Screenshot of Properties panel for the magic wand entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/490155658_692135356657752_506079041216624330_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=pj0hOHirXBoQ7kNvwGi15nr&_nc_oc=AdmFb7Z0Z9XaqQOPxlP0Bm34NSnCcu4gG7oNtgYutgchSg1ZPV4yMv7dRf7qtTgqTAA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfiH22aFX9_VRoZ0jdBFnLO1gABASyKGcwXocNpWcxCYPQ&oe=69462FA6)

**Tip**: If you wish to customize the way the Avatar holds the wand, you can switch to the VR headset to set the Grab Anchors on the entity. This defines the locations on the entity where it can be grabbed.

## Customize Projectile Launcher

You may wish to customize the properties of the projectile launcher, such as the speed of the projectile, the gravity acting on the projectile motion, the scale (size) of the projectile objects, the trail length and the color.

You can modify these properties by selecting the projectile entity (RoomA\_ProjectileLauncher) and modify the appropriate values in the Properties panel:

![Screenshot of Properties panel for projectile launcher entity](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452936022_512509447953678_2675348446593389257_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=6zzWT4QH0xUQ7kNvwEt-uhL&_nc_oc=AdnUZ37RSUWMU2BqtpN3if_LlixT7nxIbh8PHbOVXsqqVugys0_xc1J_lGb1ob5hf3U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_Afg14xGPmUiOgpKD3fCHj8JPA4EtNXV2OoQowmD0oVzHFA&oe=694658DF)

#### Projectile Launcher Scripting

Now, we must script the ability for the wand to shoot projectiles and open the exit door.

First, we configure the following props definitions in the propsDefinition section of the RoomA\_Wand script as shown below.

- Open the RoomA\_Wand script.
- Search for the propsDefinition code section:

```
static propsDefinition = {
  // TODO: Add in props definitions
};
```

- Add in the following props:

```
// This points to the projectile launcher entity
projectileLauncher: {type: hz.PropTypes.Entity},

// This holds the hint text that we want to display when player grabs wand
hintText: {type: hz.PropTypes.String},

// Number of seconds to display hint
hintDuration: {type: hz.PropTypes.Number, default: 2},

// The exit door object that we want to move when hit with projectile
objectToMove: {type: hz.PropTypes.Entity},

// Puzzle Manager object holding the Puzzle Manager script to solve puzzle
puzzleManager: {type: hz.PropTypes.Entity},
```

The propsDefinition should look like the following (comments have been removed):

```
static propsDefinition = {

    projectileLauncher: {type: hz.PropTypes.Entity},
    hintText: {type: hz.PropTypes.String},
    hintDuration: {type: hz.PropTypes.Number, default: 2},
    objectToMove: {type: hz.PropTypes.Entity},
    puzzleManager: {type: hz.PropTypes.Entity},
};
```

- Next, we want to check if the props have been defined, as we need them for the wand to work as intended. To do so, add the following code under this TODO comment:

```
// TODO: Check if the props have been defined
const launcher = this.props.projectileLauncher?.as(hz.ProjectileLauncherGizmo);
const door = this.props.objectToMove;
if(launcher === undefined \|\| launcher === null) return;
```

- Next, we set the owner of the projectile launcher to be the player, which enables us to set the aim direction on web and mobile and to shoot projectiles in the same direction that the camera (also owned by the player) is facing. To do so, add the following code under this TODO comment:

```
// TODO: Set ownership of the launcher to the player. This will also allow us to set the aim direction on web and mobile,
// shooting projectile in the direction the camera is facing
launcher.owner.set(player);
```

- Next, we want to display a hint through the player’s HUD when the player grabs the wand. The code below sends the event to sysHintHUDManager to display the hint:

```
// TODO: Send event to HintHUDManager to display wand hint
this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {
  players: [player],
  text: this.props.hintText,
  duration: this.props.hintDuration,
});
```

- Now, we add animation and a small delay before launching the projectile. Insert the following code within the connectCodeBlockEvent section:

```
// TODO: Play animation and launch projectile on index trigger down
this.connectCodeBlockEvent(
  this.entity,
  hz.CodeBlockEvents.OnIndexTriggerDown,
  (player: hz.Player) => {
    player.playAvatarGripPoseAnimationByName(
      hz.AvatarGripPoseAnimationNames.Fire,
    );
    // Small delay to allow the animation to play before launching the projectile
    this.async.setTimeout(() => launcher.launchProjectile(), 30);
  },
);
```

- We want to resolve the puzzle by sending a network event (OnFinishPuzzle) to the Puzzle Manager:

```
// TODO: Solve puzzle when door is hit
this.connectCodeBlockEvent(
  launcher,
  hz.CodeBlockEvents.OnProjectileHitEntity,
  (obj, position, normal, isStaticHit) => {
    if (obj === door && this.props.puzzleManager) {
      this.sendNetworkEvent(
        this.props.puzzleManager,
        sysEvents.OnFinishPuzzle,
        {},
      );
    }
  },
);
```

After all the code changes, the RoomA\_Wand script should look like the following:

```
import * as hz from 'horizon/core';
import { sysEvents } from 'sysEvents';

class RoomA_Wand extends hz.Component<typeof RoomA_Wand> {
  static propsDefinition = {
    projectileLauncher: {type: hz.PropTypes.Entity},
    hintText: {type: hz.PropTypes.String},
    hintDuration: {type: hz.PropTypes.Number, default: 2},
    puzzleManager: {type: hz.PropTypes.Entity},
    objectToMove: {type: hz.PropTypes.Entity},
  };

  start() {
    const launcher = this.props.projectileLauncher?.as(hz.ProjectileLauncherGizmo);
    const door = this.props.objectToMove;
    if(launcher === undefined \|\| launcher === null) return;

    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnGrabStart, (isRightHand: true, player: hz.Player) => {
      // Set ownership of the launcher to the player. This will also allow us to set the aim direction on web and mobile,
      // shooting projectile in the direction the camera is facing
      launcher.owner.set(player);

      // Sends event to HintHUDManager to display wand hint
      this.sendNetworkBroadcastEvent(sysEvents.OnDisplayHintHUD, {players: [player], text: this.props.hintText, duration: this.props.hintDuration});

      // Play animation and launch projectile on index trigger down
      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnIndexTriggerDown, (player: hz.Player) => {
        player.playAvatarGripPoseAnimationByName(hz.AvatarGripPoseAnimationNames.Fire);
        // Small delay to allow the animation to play before launching the projectile
        this.async.setTimeout(() => launcher.launchProjectile(), 30);
      });

      //Solve puzzle when door is hit
      this.connectCodeBlockEvent(launcher, hz.CodeBlockEvents.OnProjectileHitEntity, (obj, position, normal, isStaticHit) => {
        console.log(obj.name.get())
        if(obj === door && this.props.puzzleManager) {
          this.sendNetworkEvent(this.props.puzzleManager, sysEvents.OnFinishPuzzle, {});
        }
      });
    });
  }
}
hz.Component.register(RoomA_Wand);
```

The code is complete! Now, we attach this script to the wand.

- Select the RoomA\_Wand entity.
- In its Properties, locate the Script section.
- From the Attached Script drop-down, select RoomA\_Wand.
- New properties appear in the panel, as taken from the propsDefinition in the script. Specify the following values:
  - projectileLauncher: RoomA\_ProjectileLauncher
  - hintText: Fire and use magic to exit this room! (or any other hint text you want)
  - hintDuration: 5 (or any other duration in seconds you want the hint to show)
  - objectToMove: RoomA\_Door
  - puzzleManager: RoomA\_PuzzleManager

The properties should look like the following:

![Screenshot of Properties panel for the RoomA_Wand entity after all properties have been specified](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/489526187_692135346657753_7313652591887126432_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=wKSMFyUAK9EQ7kNvwEleMVR&_nc_oc=AdmaU3EdRz4whCTc7SwgXbJyJBBnvIYQM-csJ-kYbsNWrbs7ZiqCCvIDj0Sw1XnIjDo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=J6eBvq688GtCIh_s3g8ezg&oh=00_AfhAuTyvxUirSlyI0ltKIF9TMh3gyllmlgDARGWFU1dAmw&oe=694631F1)

## Checkpoint

Room A module completed! In this module, you:

* Learned how to use the Camera API.
* Learned how to make an object grabbable.
* Learned how to use projectile launchers and make it interactive with the world.

#### Test:

To test, you can try the puzzle in Room A to see if you can collect the wand and use it to open the exit door!

**Tip**: Pay attention to the changes in the camera as you move through the puzzle room.

* Camera should be in Third Person mode in the wider areas.
* In the column area, the camera should switch to First Person mode.

## Additional Documentation and APIs

#### Additional documentation:

* [How to set the player’s camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/references-and-guides/how-to-set-the-players-camera/)
* [Intro to Grabbable Entities](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities)

#### API docs:

* [Camera](https://horizon.meta.com/resources/scripting-api/camera.md/?api_version=2.0.0)
* [ProjectileLauncherGizmo](https://horizon.meta.com/resources/scripting-api/core.projectilelaunchergizmo.md/?api_version=2.0.0)