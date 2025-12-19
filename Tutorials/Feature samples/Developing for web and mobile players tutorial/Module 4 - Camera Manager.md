Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/developing-for-web-and-mobile-players-tutorial/module-4-camera-manager

# Module 4 - Camera Manager

Controlling the camera is useful in a game for focusing the player’s attention on the important areas of the screen. Using our Camera Manager, you can leverage the camera-related features of Meta Horizon Worlds, including:

* Switching between first-person and third-person cameras at any time.
* Setting the camera to a fixed position.
* Changing the camera field of view.
* Enabling and disabling camera collisions.

## SpawnPoint camera control

Here’s a quick and codeless solution to set the camera to first-person or third-person mode by using the Mobile Camera field in the SpawnPoint gizmos.

**Note**: This feature is not used in the tutorial world, but it’s an easy alternative if you don’t need much control over the camera.

<details>
<summary>Screenshot of SpawnPoint in the desktop editor with its Mobile Camera options displayed in the Properties panel</summary>

<p></p>

[Screenshot of SpawnPoint in the desktop editor with its Mobile Camera options displayed in the Properties panel](../../../image_data/b0b020b5d40b2052aa5fe995250bbe643cc62c9acf9607a898e8b4600c4a22f9.md)

### Overview
This image depicts a 3D modeling interface, likely from a game development tool. It shows a character model in a wireframe view, with a grid background indicating the scene's environment. On the right side, there is a panel displaying various attributes and behavior settings for the character model.

### Key Elements
- **Character Model**: A blue wireframe representation of a humanoid figure, positioned centrally in the scene.
- **Grid Background**: A light gray grid overlaying the scene, providing a reference for positioning and scaling.
- **Wireframe Cube**: A blue cube surrounding the character model, possibly representing collision detection or bounding volume.
- **Debug Data Panel**: Located on the right side, containing attributes such as position, rotation, scale, and behavior settings.
    - **Attributes Section**: Displays numerical values for X, Y, Z coordinates, rotation angles, and scale factors.
    - **Behavior Section**: Includes options like "Spawn on start," "Set Position Only," "Player Gravity," "Player Speed," and a dropdown menu for "Mobile Camera" with options like "Third Person," "First Person," "Orbit," "Pan," and "Follow."
    - **Gameplay Tags Section**: A search bar labeled "Search attached tags" and a tag icon below it.
    - **Attach Script Button**: A blue button labeled "Attach script" at the bottom of the panel.
    - **Dropdown Menu**: A dropdown menu showing camera modes, with "Third Person" currently selected.

### Visual Flow / Relationships
The most prominent visual elements are the character model and the debug data panel. The character model is central and surrounded by the wireframe cube. The debug data panel is on the right side, providing detailed information about the character's attributes and behavior. The grid background serves as a reference for spatial orientation within the scene.

</details>

<p></p>



Using this property, you can set the camera mode to first-person or third-person for all web or mobile players who enter through this Spawn Point; VR players are unaffected. For example, you might want a default first-person camera for your world, or you can choose to use a third-person camera in a lobby and then teleport players to another Spawn Point in the game area, where a first-person camera is applied.

Now, let’s get started with the Camera Manager.

## Camera events

We use events to communicate when we want to enable one of these camera features. Open the sysEvents script, and review the Camera API events that we have defined:

```
  // Camera API events
  OnSetCameraModeThirdPerson: new hz.NetworkEvent("OnSetCameraModeThirdPerson"),
  OnSetCameraModeFirstPerson: new hz.NetworkEvent("OnSetCameraModeFirstPerson"),
  OnSetCameraModeFixed: new hz.NetworkEvent<{position: hz.Vec3, rotation: hz.Quaternion}>("OnSetCameraModeFixed"),
  OnSetCameraModeAttached: new hz.NetworkEvent<{target: hz.Entity | hz.Player, positionOffset: hz.Vec3, translationSpeed: number, rotationSpeed: number}>("OnSetCameraModeAttached"),
  OnSetCameraModeFollow: new hz.NetworkEvent<{target: hz.Entity | hz.Player}>("OnSetCameraModeFollow"),
  OnSetCameraModePan: new hz.NetworkEvent<{panSpeed: number, positionOffset?: hz.Vec3}>("OnSetCameraModePan"),
  OnSetCameraModeOrbit: new hz.NetworkEvent<{target: hz.Entity | hz.Player, distance: number, orbitSpeed: number}>("OnSetCameraModeOrbit"),
  OnSetCameraRoll: new hz.NetworkEvent<{rollAngle: number}>("OnSetCameraRoll"),
  OnSetCameraFOV: new hz.NetworkEvent<{newFOV: number}>("OnSetCameraFOV"),
  OnResetCameraFOV: new hz.NetworkEvent("OnResetCameraFOV"),
  OnSetCameraPerspectiveSwitchingEnabled: new hz.NetworkEvent<{enabled: boolean}>("OnSetCameraPerspectiveSwitching"),
  OnSetCameraCollisionEnabled: new hz.NetworkEvent<{enabled: boolean}>("OnSetCameraCollisionEnabled"),
```

## Set script to Local mode

The Camera API must be executed in **Local Execution Mode**, as it functions on the local client only. Let’s double check that our script is configured correctly.

- Hover over the sysCameraManagerLocal script in the Scripts menu, and select the ellipsis (3 dots).
- From the context menu, select **Execution Mode > Local**:

<details>
<summary>Screenshot of sysCameraManagerLocal script entity with its execution mode property set to Local</summary>

<p></p>

[Screenshot of sysCameraManagerLocal script entity with its execution mode property set to Local](../../../image_data/342ecdc05220165a7a292f0c68f9eef7fa744c7654ac8db95999b58de67b76de.md)

### Overview
The image displays a user interface element from a software application, specifically a dropdown menu within a "Scripts" section. The dropdown menu is open, revealing options related to execution mode settings. The interface has a dark theme with some elements highlighted in yellow for emphasis.

### Key Elements
- **Visual description**: The dropdown menu is rectangular with rounded corners.
- **Location**: Positioned below the "Execution Mode" option in the dropdown menu.
- **Contents**: Contains the text "Local" with a checkmark next to it, indicating it is the current selection.
- **Visual styling**: The text is white, and the background is a light gray shade. There is a subtle shadow effect under the menu items.

### Visual Flow / Relationships
- **Most prominent visually**: The "Execution Mode" dropdown menu.
- **Arrows, lines, connectors, or implied reading order**: None visible.
- **Spatial relationships**: The "Execution Mode" option is the focal point, with its sub-option "Local" highlighted.

</details>

<p></p>



## Transfer ownership to player

Ownership of the sysCameraManagerLocal script must be transferred to the player before the Camera APIs can be called.

* Here, we check to see that the script is owned by the player.
* In the next section, we build the Player Manager, which is where ownership is transferred.

Find the next TODO in the script:

```
// TODO: Check if this is owned by the player or the server
```

Replace the above with the following check:

```
this.owningPlayer = this.entity.owner.get();
this.ownedByServer = this.owningPlayer === this.world.getServerPlayer();

if (this.ownedByServer) return;
```

When the above is inserted at the start of the script, we ensure that the Camera APIs calls later in the script are performed only in a local client.

## Enable Camera API module

The Camera API must be enabled for use in your world.

- Open the **Scripts panel**.
- Click the **Gear icon** to open the Script Settings.
- Click on **API** on the left side of the Settings.
- Enable **horizon/camera**.
- Click **Apply** to save the changes:

<details>
<summary>Screenshot of Script Settings window in the desktop editor</summary>

<p></p>

[Screenshot of Script Settings window in the desktop editor](../../../image_data/a320176e343054e5053d6a1c39ea507f8a1fea61466dce1d4a2e37864f4388a0.md)

### Overview
This image depicts a settings interface titled "Script Settings." It has a sidebar menu on the left with options such as "Script editing," "API," and "Console." The main content area on the right displays API-related settings with checkboxes and a dropdown menu for selecting an API version.

### Key Elements
- **Sidebar Menu**: Located on the left side.
  - **Visual description**: A vertical menu with rounded corners.
  - **Contents**: Contains the text "Script editing," "API," and "Console."
  - **Visual styling**: Dark gray background with white text.
- **Main Content Area**: Located on the right side.
  - **Visual description**: A dark gray background with white text.
  - **Contents**: Displays "API Version" with a dropdown menu set to "2.0.0."
  - **Visual styling**: White text on a dark gray background.
- **API Settings**: Listed under the "API" section.
  - **horizon/camera**: A checkbox next to the label, currently checked.
  - **horizon/world_streaming**: A checkbox next to the label, unchecked.
  - **horizon/capturing**: A checkbox next to the label, unchecked.
  - **Visual styling**: White text on a dark gray background.
- **Buttons**: Located at the bottom.
  - **Cancel**: A button labeled "Cancel" with a gray background.
  - **Apply**: A button labeled "Apply" with a blue background.
  - **Visual styling**: White text on a blue background for "Apply," and white text on a gray background for "Cancel."

### Visual Flow / Relationships
- **Most Prominent Element**: The "Apply" button due to its prominent placement and blue color.
- **Arrows/Lines/Connectors**: None visible.
- **Spatial Relationships**: The "Cancel" button is to the left of the "Apply" button, and both are aligned horizontally at the bottom. The API settings are stacked vertically under the "API" heading.

</details>

<p></p>



## Modify sysCameraManagerLocal

#### Imports:

Next, let’s import the events and the local camera at the top of the sysCameraManagerLocal file:

```
import { sysEvents } from 'sysEvents';
import LocalCamera, { CameraTransitionOptions, Easing } from 'horizon/camera';
```

**Initialize camera**:

Let’s begin using the Camera API!

We must ensure that the camera is initialized in a consistent manner each time that the local player enters the world. Particularly when you are switching between Preview mode and Edit mode in desktop or VR, the camera may change. So, to ensure that the camera works as expected on entry, you can apply a set of configuration properties to the camera. Locate the following TODO in the script:

```
// TODO: Reset camera to default settings
```

Replace the above with the following code, which sets the following defaults:

* Set the camera to third-person
* Reset the camera roll
* Reset the camera field of view

```
LocalCamera.setCameraModeThirdPerson();
LocalCamera.setCameraRollWithOptions(0);
LocalCamera.resetCameraFOV();
```

**Tip**: You can apply the above code and make modifications as needed in your worlds.

For now, let’s keep these settings as-is during the tutorial, as we still must change the camera in different places of the game later.

#### Create event listeners:

To use the camera events we defined, we must listen for them. Each event is associated with a specific Camera API, so you can just call that API after receiving each event.

Find the next TODO in the script:

```
// TODO: Listen for camera events
```

Replace the above with the following code:

```
this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraModeThirdPerson,
  () => {
    LocalCamera.setCameraModeThirdPerson(this.transitionOptions);
  },
);

this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraModeFirstPerson,
  () => {
    LocalCamera.setCameraModeFirstPerson(this.transitionOptions);
  },
);

this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraModeFixed,
  data => {
    LocalCamera.setCameraModeFixed({
      position: data.position,
      rotation: data.rotation,
      ...this.transitionOptions,
    });
  },
);

this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraModeAttached,
  data => {
    LocalCamera.setCameraModeAttach(data.target, {
      positionOffset: data.positionOffset,
      translationSpeed: data.translationSpeed,
      rotationSpeed: data.rotationSpeed,
      ...this.transitionOptions,
    });
  },
);

this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraRoll, data => {
  LocalCamera.setCameraRollWithOptions(data.rollAngle, this.transitionOptions);
});

this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraFOV, data => {
  LocalCamera.overrideCameraFOV(data.newFOV, this.transitionOptions);
});

this.connectNetworkEvent(this.owningPlayer, sysEvents.OnResetCameraFOV, () => {
  LocalCamera.resetCameraFOV(this.transitionOptions);
});

this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraPerspectiveSwitchingEnabled,
  data => {
    LocalCamera.perspectiveSwitchingEnabled.set(data.enabled);
  },
);

this.connectNetworkEvent(
  this.owningPlayer,
  sysEvents.OnSetCameraCollisionEnabled,
  data => {
    LocalCamera.collisionEnabled.set(data.enabled);
  },
);
```

In this local script, we’re listening for all the events related to the camera on the owningPlayer, and calling the associated camera API with the necessary parameters. Each API will have different parameters, so each event will receive different parameters. For example, the API to enable the camera perspective switching has an “enabled” parameter that is forwarded to the LocalCamera to apply this change.

Notice that we’re adding the listeners on the owningPlayer, instead of this entity, which is simpler to use. We don’t have to keep track of a reference to the camera manager entities, and we can just send events to the players to change the camera that they own.

An example on how we can use this system to change the camera for player to first-person:

```
this.sendNetworkEvent(player, sysEvents.OnSetCameraModeFirstPerson, null);
```

#### transitionOptions:

Notice that these APIs have a transitionOptions parameter, where you can modify the duration and the easing of the camera transition.

We have defined some default options that are used in all the events, but you can experiment with those and check how it affects the camera behavior. These options may also vary between types of games.

## Checkpoint

You’re done making the sysCameraManagerLocal script! It should now look like the following:

```
import * as hz from 'horizon/core';
import { sysEvents } from 'sysEvents';
import LocalCamera, { CameraTransitionOptions, Easing } from 'horizon/camera';

/**
 * Camera Manager Component (Local)
 *
 * Handles camera-related events for the local player in Horizon Worlds.
 * Listens for network events from sysCameraChangeTrigger and applies
 * camera settings to the local player's view.
 */
class sysCameraManagerLocal extends hz.Component<typeof sysCameraManagerLocal> {
  static propsDefinition = {};

  private ownedByServer: boolean = true;
  private owningPlayer!: hz.Player;

  private transitionOptions: CameraTransitionOptions = {
    duration: 0.5,
    easing: Easing.EaseInOut,
  };

  start() {
    this.owningPlayer = this.entity.owner.get();
    this.ownedByServer = this.owningPlayer === this.world.getServerPlayer();

    if (this.ownedByServer) return;

    this.resetCameraToDefaults();
    this.setupStandardCameraModeListeners();
    this.setupSpecialCameraEffectListeners();
  }

  private resetCameraToDefaults(): void {
    LocalCamera.setCameraModeThirdPerson();
    LocalCamera.setCameraRollWithOptions(0);
    LocalCamera.resetCameraFOV();
  }

  /**
   * Set up listeners for standard camera mode changes
   */
  private setupStandardCameraModeListeners(): void {
    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeThirdPerson, () => {
      LocalCamera.setCameraModeThirdPerson(this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeFirstPerson, () => {
      LocalCamera.setCameraModeFirstPerson(this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeFixed, (data) => {
      LocalCamera.setCameraModeFixed({
        position: data.position,
        rotation: data.rotation,
        ...this.transitionOptions
      });
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeAttached, (data) => {
      LocalCamera.setCameraModeAttach(
        data.target,
        {
          positionOffset: data.positionOffset,
          translationSpeed: data.translationSpeed,
          rotationSpeed: data.rotationSpeed,
          ...this.transitionOptions
        }
      );
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeFollow, () => {
      LocalCamera.setCameraModeFollow(this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModePan, (data) => {
      const panCameraOptions = {
        positionOffset: data.positionOffset,
        ...this.transitionOptions,
      };

      LocalCamera.setCameraModePan(panCameraOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraModeOrbit, () => {
      LocalCamera.setCameraModeOrbit(this.transitionOptions);
    });
  }

  /**
   * Set up listeners for special camera effects
   */
  private setupSpecialCameraEffectListeners(): void {
    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraRoll, (data) => {
      LocalCamera.setCameraRollWithOptions(data.rollAngle, this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraFOV, (data) => {
      LocalCamera.overrideCameraFOV(data.newFOV, this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnResetCameraFOV, () => {
      LocalCamera.resetCameraFOV(this.transitionOptions);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraPerspectiveSwitchingEnabled, (data) => {
      LocalCamera.perspectiveSwitchingEnabled.set(data.enabled);
    });

    this.connectNetworkEvent(this.owningPlayer, sysEvents.OnSetCameraCollisionEnabled, (data) => {
      LocalCamera.collisionEnabled.set(data.enabled);
    });
  }
}

hz.Component.register(sysCameraManagerLocal);
```

The Camera Managers are ready to be used by the Player Manager, which transfers the ownership of each manager to a player when it enters the world.

Since we need one Camera Manager per player, you should verify that you have the same number of Camera Managers as the maximum number of players permitted in your world (one Camera per one Player):

<details>
<summary>Screenshot of the CameraManager entities in the Hierarchy panel</summary>

<p></p>

[Screenshot of the CameraManager entities in the Hierarchy panel](../../../image_data/dbcc5f13cf5b216c231188c579e50351f492008fe9f7a70662837dfbe00d175f.md)

### Overview
This image displays a series of text labels arranged vertically against a dark background. The labels appear to be part of a user interface, possibly related to camera management in a local player context.

### Key Elements
- **Visual description**: The labels are rectangular blocks with rounded corners.
- **Location**: Each label is positioned vertically, stacked one below the other.
- **Contents**: The text within each label reads:
    - CameraManagerLocalPlayer0
    - CameraManagerLocalPlayer1
    - CameraManagerLocalPlayer2
    - CameraManagerLocalPlayer3
- **Visual styling**: The labels have a dark background with white text. There are no borders around the labels.

### Visual Flow / Relationships
The labels are arranged in a vertical column, with each label directly below the previous one. There are no arrows, lines, or connectors indicating a specific reading order. The labels are equally spaced vertically.

</details>

<p></p>



#### Test:

We can’t test this system yet, as we need to assign a camera manager to each player to use it. We will test the Camera Manager as part of the Player Manager in the next module.

## Additional Documentation and APIs

#### Docs:

* [Using the Camera API for Web and Mobile](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [How to set the player’s camera](../../../Mobile%20and%20web/TypeScript%20APIs%20for%20mobile/Camera.md)
* [Local Script for Mobile and Web](../../../Scripting/Local%20scripting/Getting%20Started%20with%20Local%20Scripting.md)

#### API references:

* [Camera](https://horizon.meta.com/resources/scripting-api/camera.md/?api_version=2.0.0)
* [Camera class](https://horizon.meta.com/resources/scripting-api/camera.camera.md/?api_version=2.0.0)