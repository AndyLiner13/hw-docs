Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/camera-api-examples-tutorial/module-2-playercamera-overview

Learn

# Module 2 - PlayerCamera Overview

This world is composed of several stations, each of which demonstrates a camera point of view in a specific use case. For example, you can see how the first-person camera works at the shooting gallery and how the third-person camera works at the hand-to-hand combat arena.

![First-Person Camera Station](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488054346_686408173897137_1013242816748594235_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=UeUawJKTNSIQ7kNvwG0XpSj&_nc_oc=AdkLj4XMkOxviARtIt5NlKlHBEbAf7_5ko4rcTn_xjRpx0g91t1N20UL0qGsYLDVFwA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CakEZTcAIw54IhhRGUezww&oh=00_Afiuqt9zgwwuWRiv3vS4qAjkJM4g9D3iq7W3dU8VYjSXww&oe=692FBF1B)

## Set Local Script mode

**Note**: The PlayerCamera script must be executed in Local mode. Any script that manipulates the player’s camera must be executed in Local mode.

## Set Initial PlayerCamera Point of View

For web and mobile, you can specify the initial point of view for the camera on the Spawn Point gizmo. Any web or mobile player that enters the world at that Spawn Point is automatically assigned the point of view selected for the gizmo.

**Note**: These options apply only to Meta Horizon Worlds Web and Mobile, which means web and mobile users.

**Tip**: This setting is applied when the player enters the world. Later, during runtime, you may use the Camera API to dynamically set the camera to a new point of view, as needed.

- Select the SpawnPoint gizmo in your world.
- In the Properties panel, locate the **Mobile Camera** property and select the preferred camera angle.

For more information on these options, see “Camera Perspectives” below.

| Mobile Camera option | Description |
| --- | --- |
| `Follow` | Camera POV follows the player (default). |
| `Third Person` | Camera POV is set to third-person. |
| `First Person` | Camera POV is set to first-person. |
| `Orbit` | Camera POV is set to orbit the player. |
| `Pan` | Camera POV is set at a fixed distance and angle from the player. |

## Camera Perspectives

The Camera API supports the following perspectives.

| Perspective | Description | Use cases |
| --- | --- | --- |
| Follow | Camera follows the player avatar with a smooth, dynamic view that maintains the player in frame. | This is the default camera for new worlds. Follow camera provides an intuitive viewing experience that automatically adjusts to player movement and is ideal for exploration and general gameplay. |
| Third Person | Camera is positioned behind the player’s avatar, facing forward of the avatar. | Third person is often used for close quarters combat or navigation or to build connection between the player and their avatar. If the environment requires being able to see more widely than the first-person camera, the third-person option can enhance the experience. |
| First Person | Camera and the player avatar’s eyes are in the same location. Camera is facing forward from the player’s avatar. | This is the default camera for VR. In general, first person is used to focus the player’s attention on tasks like aiming or reading from user interfaces. However, the player can lose track of other activities or threats on the periphery. |
| Orbit | Orbit camera allows the player to pivot the position of the camera around a fixed point. | Orbit camera is useful for visual exploration of a specific area or object. |
| Pan | Camera is positioned at a fixed distance and angle from the player, maintaining a consistent perspective while following player movement. | Pan camera is useful for side-scrolling games, platformers, or scenarios where you want to maintain a specific viewing angle while the player moves through the environment. |
| Focused Interaction | For web and mobile, the Focused Interaction API allows for zooming the camera into a specific object to enable a limited range of interactions. **Note**: Not included in this world. For more information, see the [Developing for Web and Mobile tutorial world](/hw-docs/Tutorials/Developing%20for%20Web%20and%20Mobile%20Players%20tutorial/Module%207A-%20The%20Focused%20Interaction%20Manager.md). | This is useful for things like entering codes in a keypad or manipulating a puzzle. |
| Fixed Camera Position | This mode places the camera at a fixed position in the world, facing in a fixed direction. | The fixed camera position can be used for big vistas or cutscenes that do not center on a specific entity. |
| Fixed Camera Position with Entity | This mode places the camera at a fixed position, while tracking an entity, such as the player’s avatar. | Use this camera to build player-centric cutscenes or to build isometric or sidescrolling games that focus on the player’s avatar. |

## Required Camera Entities

In this world, camera management is handled through the assignment of PlayerCamera entities to players as they enter the world and then configuring the entities to meet the needs of the specific station. By defining a set of properties on the PlayerCamera entity, the camera can be properly positioned relative to the player for the use case at hand.

The core entities for managing player cameras are positioned above the plane of the world.

![PlayerCamera core entities](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487312367_686408207230467_1588549126556306988_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZcQu_y4KV-oQ7kNvwH6XJWq&_nc_oc=AdmNCeP0oR9VDk40VyG8QxKSkt1VRG-oG_gT_xzaLQcfNrV0c_rYbEQI1VUVn-8At9U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CakEZTcAIw54IhhRGUezww&oh=00_AfifnPt3bYYyZRHDZJrmjKDvRhO9kPRN5uK2nyGYh7xDIQ&oe=692FA512)

In the Hierarchy panel, these entities are stored under PlayerCameraCore.

One PlayerCamera requires the following entities:

* PlayerCameraManager - reference object that hosts:
  + `PlayerCameraManager.ts` - script that manages assignment of PlayerCameras, among other things.
* PlayerCamera - reference object that hosts:
  + `PlayerCamera.ts` - script that controls the camera of the player’s avatar to which it is assigned.

## PlayerCamera events

Each of the listed scripts exports a set of events, which can be used by other scripts to drive PlayerCamera behaviors.

**Tip**: Script properties set on other entities, such as the sword, which uses `Weapon.ts`, are passed as event message data into these scripts.

The following PlayerCameraEvents are defined and exported from this script:

```
export const PlayerCameraEvents = {
  SetCameraMode: new hz.NetworkEvent<{ mode: CameraMode}>('SetCameraMode'),
  SetCameraFixedPosition: new hz.NetworkEvent<{position: hz.Vec3, rotation: hz.Quaternion, duration: number, easing: Easing}>('SetCameraFixedPosition'),
  SetCameraFixedPositionWithEntity: new hz.NetworkEvent<{entity: hz.Entity, duration: number, easing: Easing}>('SetCameraFixedPositionWithEntity'),
  RevertPlayerCamera: new hz.NetworkEvent<{}>('RevertPlayerCamera'),
  OnCameraResetPressed: new hz.NetworkEvent<{player: hz.Player}>('OnCameraResetPressed'),
};
```

### SetCameraMode

When this event is sent, the `PlayerCamera.ts` script sets the camera to a new mode. Example event:

```
this.sendNetworkEvent(player, PlayerCameraEvents.SetCameraMode, {mode: CameraMode.ThirdPerson});
```

The value for `mode` must match up to the values for a supported camera mode, which are defined using the CameraMode enum:

```
export declare enum CameraMode {
    FirstPerson = 0,
    ThirdPerson = 1,
    Attach = 2,
    Fixed = 3,
    Orbit = 4,
    Pan = 5
};
```

In this tutorial, camera modes are defined using script properties. For example, in the `Weapon.ts` script, which is attached to the sword, the field CameraMode is set to ThirdPerson. This value is passed into the event:

```
this.sendNetworkEvent(player, PlayerCameraEvents.SetCameraMode, {mode: this.getCameraMode()});
```

**Tip**: Whenever you are changing the camera to a new mode or point of view, you should retain the value for the old camera mode to enable a smooth switch back to the previous mode, if needed.

### SetCameraFixedPosition

The SetCameraFixedPosition event can be emitted to change the PlayerCamera to be set at fixed position. This fixed position includes position and rotation, and the camera does not move.

```
this.sendNetworkEvent(player, PlayerCameraEvents.SetCameraFixedPosition, { position: new Vec3 (0,20,0), rotation: new Quaternion (0,0,0,1), duration: 0.4, easing: Easing.EaseInOut});
```

| Parameter | Description |
| --- | --- |
| position | The world coordinates in Vec3 format for the position of the PlayerCamera. |
| rotation | The rotational coordinates in Vec3 format for where the camera is pointed. |
| duration | The duration of the transition between camera modes, in seconds. |
| easing | You can set the method of transitioning in and out of the new camera point of view, using the following set of enum values. |

```
export declare enum Easing {
    EaseIn = 0,
    EaseOut = 1,
    EaseInOut = 2,
    Linear = 3
};
```

### SetCameraFixedPositionWithEntity

This event forces the camera to move to the location and rotation of an entity in the world. You can use this approach to set up empty reference objects as “cameras” in your world.

Example:

```
this.sendNetworkEvent(player, PlayerCameraEvents.SetCameraFixedPositionWithEntity, { entity: this.props.cameraPositionEntity, duration: 0.4, easing: Easing.EaseInOut});
```

In the above, the entity specified in the cameraPositionEntity property is used to determine the position and rotation of the PlayerCamera.

In this tutorial, the `FixedCameraTrigger.ts` script sends positional and directional information from an empty reference object above the trigger, which serves as the placeholder for the fixed camera.

### RevertPlayerCamera

When issued, this event changes the camera to its most previous point of view, which is managed by the `getPreviousCameraMode()` function:

```
  getPreviousCameraMode(): number {
    let previousCameraMode = CameraMode.ThirdPerson;
    if (this.previousCameraMode !== -1) {
      previousCameraMode = this.previousCameraMode;
    };
    return previousCameraMode;
  };
```

### OnCameraResetPressed

This event can be fired when the Camera Reset button has been pressed.

When this event fires, the `PlayerManager.ts` script simply calls the `getPreviousCameraMode()` function.

#### Define Camera Reset button

**Note**: For FixedCamera modes, a Camera Reset button should be surfaced on screen, enabling visitors to escape from FixedCamera perspectives. Otherwise, they may find themselves “stuck” in that POV and quit the world.

When these modes are displayed, the code calls to the displayCameraResetButton() function in `PlayerCamera.ts`:

```
  // Add a custom input button to enable players to reset their camera to the previous camera mode.
  // We use this when the camera mode is set to Fixed to avoid players getting stuck in a fixed camera mode.
  displayCameraResetButton(on: boolean) {
    if (on) {
      if (!this.cameraResetHasRegisteredCallback) {
        this.cameraResetInput = hz.PlayerControls.connectLocalInput(hz.PlayerInputAction.LeftGrip, hz.ButtonIcon.Door, this, {preferredButtonPlacement: hz.ButtonPlacement.Default});
        this.cameraResetInput.registerCallback((action, pressed) => {
          if(pressed) {
            this.onCameraResetButtonPressed();
          };
        });
        this.cameraResetHasRegisteredCallback = true;
      };
    } else if (this.cameraResetInput !== undefined) {
      this.cameraResetInput?.disconnect();
      this.cameraResetHasRegisteredCallback = false;
    };
  };
```

## To Use a PlayerCamera

To use a PlayerCamera in your world:

- Copy the contents of the following scripts:
  - `PlayerCamera.ts`
  - `PlayerCameraManager.ts`
- Paste these contents into equivalent scripts in your world.
- Attach these scripts to empty reference objects of the same.
- Duplicate the PlayerCamera reference object, with attached `PlayerCamera.ts` script, so that there are the same number of PlayerCamera entities as the max capacity of avatars for your world.
  - **Tip**: You can set the maximum number of players for your world. In the desktop editor, select **Meta Horizon menu > Player Settings**.
- Review the events in `PlayerCamera.ts` and `PlayerCameraManager.ts` to learn how to send events to these scripts.

## Checkpoint

In this module, you learned the core of the PlayerCamera system:

* The available camera perspectives
* The entities and events required for a working PlayerCamera
* How to deploy a PlayerCamera into your world
* How to manipulate the PlayerCamera through events

In the next module, we explore the `CameraManager.ts` script.