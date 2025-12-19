Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/developing-for-web-and-mobile-players-tutorial/module-6-room-a-the-magic-wand

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

<details>
<summary>Screenshot of doorway through which the camera switches to third-person point of view</summary>

<p></p>

[Screenshot of doorway through which the camera switches to third-person point of view](../../../image_data/f90ea4473f77bd9be63aa76c4f0a5936577458cee7483d9da83f44d6997c9cd3.md)

### Overview
The image depicts a virtual environment resembling a corridor with tiled walls and floors. The walls are orange with a grid pattern, and the floor is a light gray with a subtle grid overlay. A doorway leads into another area, which has a greenish hue. There is a signboard on the right side of the corridor providing information.

### Key Elements
- **Wall**: Orange tiles with a blue grid pattern.
- **Doorway**: Located centrally, leading into a green-tinted area.
- **Floor**: Light gray tiles with a subtle grid pattern.
- **Signboard**: Positioned on the right wall, light blue background with black text.
    - **Text**: "Welcome to Room A! In these narrow corridors, we switch to first-person camera."

### Visual Flow / Relationships
- **Most Prominent Element**: The doorway leading into the green area.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The signboard is positioned to the right of the doorway, and the corridor extends forward.

</details>

<p></p>



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

<details>
<summary>Screenshot of script attached to the trigger zone with cameraMode set to FirstPerson</summary>

<p></p>

[Screenshot of script attached to the trigger zone with cameraMode set to FirstPerson](../../../image_data/e1c303e04bc9fe3fd290ab38fba30796d628d0c4229c30789c551c46b0973158.md)

### Overview
This image depicts a user interface element, specifically a settings panel within a software application. The panel includes a dropdown menu and some text fields, with a button at the bottom labeled "Attach script."

### Key Elements
- **Dropdown Menu**: Located at the top, it has a label "sysCameraChangeTrigger:" followed by a partially visible string. The dropdown arrow indicates that more options are available when expanded.
- **Text Fields**: Two text fields are present below the dropdown:
  - **cameraMode**: Displays "FirstPerson" in a black rectangular box with white text.
  - **cameraModeText**: Displays "None (Object)" in a similar black rectangular box with white text.
- **Button**: Positioned at the bottom of the panel, labeled "Attach script." It is a large, dark gray button with white text.
- **Expandable Section**: The dropdown menu is part of a larger expandable section indicated by a triangle icon on the left side.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu due to its size and placement at the top. The text fields are secondary elements, providing specific information related to camera modes. The "Attach script" button is the final element, likely intended for attaching a script to the current setting. There is no explicit visual flow direction indicated, but the layout suggests a linear progression from the dropdown through the text fields to the button.

</details>

<p></p>



### Disable camera collisions

In the next area of the room, we must disable camera collision where you find multiple columns that can interfere.

<details>
<summary>Screenshot of area in the desktop editor where camera collisions are disabled due to narrow passsageways</summary>

<p></p>

[Screenshot of area in the desktop editor where camera collisions are disabled due to narrow passsageways](../../../image_data/7ae7985f7c0fef646f59830ab0c60633b4ce3e36e4f8e26e5a44f04aad0c562a.md)

### Overview
The image depicts a first-person view of a character standing in a corridor-like environment. The character is facing away from the viewer, wearing a red plaid shirt, brown pants, and a black cap. To the right of the character, there is a rectangular text box with a light blue background containing a message about camera collision settings. The environment features orange walls with a grid pattern and a tiled floor.

### Key Elements
- **Character**: A figure with a red plaid shirt, brown pants, and a black cap, positioned centrally but slightly to the left. The character is facing away from the viewer.
- **Text Box**: Located to the right of the character, within the orange wall. It has a light blue background with white text that reads: "Disable camera collision when you walk between multiple small objects, such as columns."
- **Walls**: Orange with a grid pattern, forming the walls of the corridor. The walls extend vertically and horizontally, creating a sense of depth.
- **Floor**: Tiled in a light gray color, extending across the corridor.

### Visual Flow / Relationships
The most prominent visual element is the character, as the viewer's perspective is from behind them. The text box is secondary but important, providing instructions. The walls form a continuous backdrop, guiding the viewer's eyes through the corridor. There are no arrows or lines connecting elements, and the reading order is implied by the layout, moving from the character to the text box.

</details>

<p></p>



##### Trigger Object

In the room, locate the Trigger Zone entity TriggerCameraCollision. This entity covers the area where we want camera collision to be disabled: (the entire area with the columns). Below, the Trigger Zone has been selected in the Hierarchy panel of the desktop editor:

<details>
<summary>Screenshot of the trigger zone in the desktop editor, which triggers activation and de-activation of camera collisions</summary>

<p></p>

[Screenshot of the trigger zone in the desktop editor, which triggers activation and de-activation of camera collisions](../../../image_data/d7ef288608655b09a80dcadd657492e1361ae5b0b7abfc0a1d2d1144e0ba35a7.md)

### Overview
The image displays a 3D modeling environment interface, likely from a game development tool. It shows a room with a grid layout and various labeled objects representing different features or components within the game level design.

### Key Elements
- **Room Layout**: A 3D room with walls and floors, colored in shades of yellow and green, with a grid overlay indicating measurement units.
- **Objects**: Several labeled objects such as "RoomA_TriggerCameraCollision," "RoomB_SpawnPoint," etc., are visible on the left side of the screen.
- **Grid Overlay**: A light green grid overlaying the floor plane, suggesting a coordinate system for precise placement and alignment.
- **Highlighted Object**: The object labeled "RoomA_TriggerCameraCollision" is highlighted in blue, indicating selection or focus.
- **Camera View**: The camera view is positioned above the room, providing a top-down perspective.

### Visual Flow / Relationships
- **Most Prominent**: The highlighted object "RoomA_TriggerCameraCollision."
- **Arrows and Lines**: Blue lines and arrows are present, likely representing collision detection or movement paths.
- **Spatial Relationships**: Objects are arranged in a structured manner, with some stacked vertically and others horizontally, forming a complex layout.

</details>

<p></p>



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

<details>
<summary>Screenshot of Properties panel for the TriggerCameraCollision trigger zone</summary>

<p></p>

[Screenshot of Properties panel for the TriggerCameraCollision trigger zone](../../../image_data/aa82b7b9004b3d160bd7dd709a36ee070eb1fad7f2e3445d2b75dcaffda5da19.md)

### Overview
This image depicts a user interface element, specifically a settings panel within a software application. The panel includes a header, several configurable options, and a button at the bottom.

### Key Elements
- **Header**: Located at the top, it contains the title "sysCameraChangeTrigger..." which is partially obscured. It has a dark background with white text.
- **cameraMode**: Positioned below the header, this section displays the label "cameraMode" on the left side. To the right, there is a black rectangular button with the word "Collision" written in white.
- **cameraModeText**: Below "cameraMode," this section shows the label "cameraModeText." Next to it is another black rectangular button labeled "None (Object)" with a small circular icon next to the text.
- **Attachment Button**: At the bottom of the panel, there is a large button labeled "Attach script."

### Visual Flow / Relationships
The most prominent visual element is the header, as it sets the context for the rest of the panel. The elements are arranged vertically, with each setting option clearly separated by a thin horizontal line. The attachment button at the bottom is the least prominent but still noticeable due to its larger size compared to the other elements.

</details>

<p></p>



## Set up a grabbable object that shoots projectiles

In the area shown below, we have group of entities:

* A magic wand entity
* A projectile launcher

We want to make this grouped entity grabbable, as well as able to shoot and interact with other objects. To complete the puzzle, the player must grab the wand, fire projectiles and hit the exit door to open it.

<details>
<summary>Screenshot of the wand, a grabbable projectile shooter</summary>

<p></p>

[Screenshot of the wand, a grabbable projectile shooter](../../../image_data/255ddc5319a3d54905a9ebfe959cb9e0247ee1607b389d6789e3394e29cd37bc.md)

### Overview
The image depicts a first-person view of a character interacting with a wall-mounted object in a virtual environment. The scene includes a floating blue speech bubble, a control panel with interactive buttons, and a green projectile trajectory line.

### Key Elements
- **Speech Bubble**: Located at the top-left of the image, it contains a message: > "This object also has a projectile launcher, which is interactive with other objects."
- **Control Panel**: Positioned on the right side of the image, featuring two buttons labeled 'E' and a hand icon.
- **Projectile Trajectory Line**: A bright green line starts from the bottom-right corner and extends upwards, indicating the path of a projectile.
- **Character**: The back of a character wearing a red plaid shirt and a black cap is visible in the foreground, facing the wall.

### Visual Flow / Relationships
- **Most Prominent Element**: The green projectile trajectory line draws attention due to its bright color and direction.
- **Interactive Buttons**: The 'E' button and hand icon suggest interaction points, likely for launching the projectile or accessing more information.
- **Spatial Relationships**: The speech bubble provides context about the object's functionality, while the control panel offers direct engagement options.

</details>

<p></p>



#### The Magic Wand projectile entity

The wand projectile object (RoomA\_Wand) is a parent group of 2 items.

- The wand object that constitutes the shape
- A projectile launcher (RoomA\_ProjectileLauncher) that actually does the projectile animation and interaction

The wand and the projectile launcher must be grouped together so that they interact with the world as a set.

<details>
<summary>Screenshot of wand and projectile launcher as a group in the desktop editor</summary>

<p></p>

[Screenshot of wand and projectile launcher as a group in the desktop editor](../../../image_data/bdec85faa2f6a3f006581ae57645352effb5fb543b3994b1d44c4b7ded61b411.md)

### Overview
The image depicts a 3D modeling environment interface, likely from a game development tool. It shows a room with a wall and a blue cube-like object with a transparent front face. There is also a floating rectangular tooltip with text explaining the object's functionality.

### Key Elements
- **Wall**: A large, yellow-tiled wall occupies the background. The tiles are arranged in a grid pattern.
- **Cube Object**: A blue cube with a transparent front face is positioned in the foreground. It has a brown vertical line running through its center, possibly indicating an axis or a connection point.
- **Tooltip**: A light blue rectangular tooltip is placed above the cube. Inside the tooltip, the text reads: > **This object also has a projectile launcher, which is interactive with other objects.**
- **Left Panel**: On the left side, there is a vertical menu with various items listed under categories such as "RoomA_Wand," "RoomB_SpawnPoint," etc. Each item has a small icon next to it.

### Visual Flow / Relationships
- **Most Prominent Element**: The blue cube object is the most prominent due to its central placement and distinct color.
- **Arrows and Lines**: Red arrows pointing towards the cube suggest interactivity or connections.
- **Spatial Relationships**: The tooltip is directly above the cube, providing information about the object. The left panel is separate but related, showing object names and categories.

</details>

<p></p>



#### Set object as grabbable:

- Select the RoomA\_Wand entity.
- In the Properties tab, locate the Behavior section.
- Properties:
- Set Motion property: Interactive.
- Set Interaction property: Grabbable.

<details>
<summary>Screenshot of visibility and collision properties for the magic wand entity</summary>

<p></p>

[Screenshot of visibility and collision properties for the magic wand entity](../../../image_data/2939d08eed3737add9492753d12f05ed0693c45f5edca5911028fef32ccdffb7.md)

### Overview
This image depicts a settings or configuration interface section titled "Behavior." It contains several toggle switches, dropdown menus, and labels related to behavior settings.

### Key Elements
- **Toggle Switches**: Located in the right column, these are interactive elements that can be toggled on or off. The labels are "Visible" and "Collidable," both of which are currently enabled as indicated by the blue indicator next to them.
- **Dropdown Menus**: Positioned to the right of the labels "Collision Layer," "Motion," and "Interaction." These menus allow selection of options from a dropdown list.
- **Labels**: These are descriptive texts such as "Visible," "Collidable," "Collision Layer," "Motion," and "Interaction."

### Visual Flow / Relationships
The layout is structured with labels on the left and corresponding interactive elements (toggle switches and dropdown menus) on the right. The toggle switches are more prominent due to their larger size and distinct blue indicators compared to the smaller dropdown menus.

</details>

<p></p>



**Checkpoint**: After the above is completed, preview the scene. You should see that the wand now has an E and a hand symbol over it, indicating that you can press E to grab the entity on mobile or desktop.

#### Customize avatar interactions:

We can also customize the Avatar’s interaction with this entity. For example:

- Set Avatar Pose: Torch. This sets the grab animation to be similar to a person holding a torch.
- Set Who Can Grab?: Anyone. This allows anybody to grab this entity.
- Set Who Can Take From Holder?: Only You. This disables the ability to grab the entity out of somebody else’s hand.
- Set Primary Action Icon: Fire. This creates the action button on mobile where players can select to trigger a fire action.
- Set Secondary Action Icon: Aim. This creates the action button on mobile where players can select to trigger the aim action.

The Properties panel should look something like the following:

<details>
<summary>Screenshot of Properties panel for the magic wand entity</summary>

<p></p>

[Screenshot of Properties panel for the magic wand entity](../../../image_data/08a9f5018b1ed60c2356057ff2f21dcc66e367dd46b0d95cac55c83cba223d27.md)

### Overview
This image depicts a settings or configuration interface, specifically a section labeled "More" under "Properties." It contains various adjustable parameters related to object interactions and animations within a virtual environment, likely a game or simulation.

### Key Elements
- **Collision Events From**: Dropdown menu showing "Nothing."
- **Use Grab Lock**: Toggle switch off.
- **Use VR Grab Anchor**: Toggle switch on.
- **Grab Anchor X/Y/Z Coordinates**: Input fields displaying coordinates (-0.02, 0.00, -0.63) and (47.60, 13.80, 29.75).
- **Use Per Hand Grab Anchors**: Toggle switch off.
- **Use HWXS Grab Anchor**: Toggle switch off.
- **Grab Aim P... X/Y/Z Coordinates**: Input fields displaying coordinates (0, 0, 0).
- **Grab Aim R... X/Y/Z Coordinates**: Input fields displaying coordinates (0, 0, 0).
- **Avatar Pose**: Dropdown menu showing "Torch."
- **HWXS Grab Relax Animation Enabled**: Toggle switch on.
- **Who Can Grab?**: Dropdown menu showing "Anyone."
- **Who Can Take From Holder?**: Dropdown menu showing "Only You."
- **Primary Action Icon**: Dropdown menu showing "Fire."
- **Custom Primary Action...**: Placeholder field.
- **Secondary Action Icon**: Dropdown menu showing "None."
- **Custom Secondary Action...**: Placeholder field.
- **Tertiary Action Icon**: Dropdown menu showing "None."

### Visual Flow / Relationships
The interface is structured in a vertical list format, with each parameter grouped into its own row. The toggle switches and dropdown menus are aligned to the right of their respective labels. The input fields for coordinates are centrally placed beneath their labels. The layout is clean and organized, facilitating easy navigation through the settings.

</details>

<p></p>



**Tip**: If you wish to customize the way the Avatar holds the wand, you can switch to the VR headset to set the Grab Anchors on the entity. This defines the locations on the entity where it can be grabbed.

## Customize Projectile Launcher

You may wish to customize the properties of the projectile launcher, such as the speed of the projectile, the gravity acting on the projectile motion, the scale (size) of the projectile objects, the trail length and the color.

You can modify these properties by selecting the projectile entity (RoomA\_ProjectileLauncher) and modify the appropriate values in the Properties panel:

<details>
<summary>Screenshot of Properties panel for projectile launcher entity</summary>

<p></p>

[Screenshot of Properties panel for projectile launcher entity](../../../image_data/4570e2358db03e5bb7531a6947ca739ec9311c8b8b3ee8e20a9f2838b009f07b.md)

### Overview
This image depicts a user interface element showing properties for a game object named "ProjectileLauncher." It includes various adjustable parameters related to behavior, collision settings, and physics properties.

### Key Elements
- **Header**: "Properties" at the top, indicating the section of the interface.
- **Object Name**: "ProjectileLauncher" displayed in a black box with white text.
- **Behavior Section**: Contains adjustable parameters such as "Projectile Preset," "Speed," "Player Collision," and "Objects Collision."
- **Static Collision Toggle**: A toggle switch labeled "Static Collision" with a blue indicator.
- **Parameters**: Includes fields for "Gravity," "Scale," "Trail Length Scale," and numerical values for "0.71," "0.17," and "0.17."
- **Color Palette**: Red and gray buttons with numerical values.

### Visual Flow / Relationships
The interface is structured with a clear hierarchy. The "Behavior" section is expanded, revealing its contents. Parameters are arranged vertically, with labels above the input fields. The toggle switch stands out due to its distinct color and placement within the "Static Collision" row.

</details>

<p></p>



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

<details>
<summary>Screenshot of Properties panel for the RoomA_Wand entity after all properties have been specified</summary>

<p></p>

[Screenshot of Properties panel for the RoomA_Wand entity after all properties have been specified](../../../image_data/04f1cee2c18eeb9cac763fa02e9d7de22a074c9cfc284c174faff588377e8f87.md)

### Overview
This image depicts a user interface element, specifically a settings or configuration panel for an object named "RoomA_Wand." The panel includes various configurable parameters such as projectile launch, hint text, hint duration, puzzle mana, and object to move. There is also a button at the bottom labeled "Attach script."

### Key Elements
- **Header**: Located at the top, it displays the name "RoomA_Wand:RoomA_Wand" with a disclosure triangle on the left and three vertical dots on the right.
- **Projectile Launch**: Positioned above the header, it has a small icon resembling a bullet and a label "projectileLaunch..." followed by a field labeled "RoomA_Projectil..." with a circular toggle switch next to it.
- **Hint Text**: Below the projectile launch, it has a label "hintText" with a corresponding text field containing the text "Fire and use magic."
- **Hint Duration**: Positioned below the hint text, it has a label "hintDuration" with a numeric value "5" displayed in a field.
- **Puzzle Mana**: Below the hint duration, it has a label "puzzleMana..." with a small icon resembling a puzzle piece and a field labeled "RoomA_PuzzleMana..." with a circular toggle switch next to it.
- **Object To Move**: Below the puzzle mana, it has a label "objectToMove" with a small icon resembling a door and a field labeled "RoomA_Door" with a circular toggle switch next to it.
- **Attach Script Button**: At the bottom, there is a large button labeled "Attach script."

### Visual Flow / Relationships
The elements are arranged vertically, with each parameter having its own label, field, and toggle switch. The toggle switches are positioned to the right of their respective fields. The "Attach script" button is the only interactive element that stands out due to its larger size and distinct label compared to the other fields.

</details>

<p></p>



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

* [How to set the player’s camera](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [Intro to Grabbable Entities](../../../Mobile%20and%20web/Grabbable%20entities/Introduction%20To%20Grabbable%20Entities%20On%20Mobile%20And%20Web.md)

#### API docs:

* [Camera](https://horizon.meta.com/resources/scripting-api/camera.md/?api_version=2.0.0)
* [ProjectileLauncherGizmo](https://horizon.meta.com/resources/scripting-api/core.projectilelaunchergizmo.md/?api_version=2.0.0)