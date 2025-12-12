Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/camera

# Camera

This article covers how to set up and control camera perspectives for web and mobile players using both **spawn point configuration** and the **Camera API** via TypeScript.

## Setting camera mode via spawn point

The spawn point can be configured to control the player’s camera and modify its behavior when they enter your world.

To set the player’s camera, select the spawn point and use the **Mobile Camera** drop-down in the object properties window.

<details>
<summary>Set Player Camera</summary>

<p></p>

[Set Player Camera](../../image_data/72543923218f6c5ffb163cfc4036cef5c9123922c427d64c44f507600096135f.md)

### Overview
This image depicts a user interface element within a game development environment, specifically showing a character model and its associated settings in a scene editor. The right side of the image displays a panel with various attributes and behavior options for the character model named "SpawnPoint."

### Key Elements
- **Character Model**: A blue humanoid figure is positioned within a blue bounding box, indicating its spawn point. The figure is standing with one hand on its hip.
- **Scene Editor Background**: The background is a grid, suggesting a 3D modeling workspace.
- **Spawn Point Indicator**: A blue circle with a white downward arrow is located at the top-left of the bounding box, indicating the spawn point location.
- **Debug Data Panel**: On the right, there is a panel titled "Debug Data" which includes sections for "Attributes," "Behavior," and "Gameplay Tags."
    - **Attributes Section**: Contains fields for Position (X: 8.02, Y: 5.12, Z: -168.), Rotation (X: 0, Y: 0, Z: 0), and Scale (X: 1, Y: 1, Z: 1).
    - **Behavior Section**: Includes options such as "Spawn on start," "Set Position Only," "Player Gravity," and "Player Speed." There is also a dropdown menu labeled "Mobile Camera" set to "Third Person."
    - **Gameplay Tags Section**: Displays a search bar labeled "Search attached tags" and a tag icon with a label "This object has no tags."
- **Dropdown Menu**: The "Mobile Camera" dropdown menu is expanded, showing options like "Third Person," "First Person," "Orbit," "Pan," and "Follow."
- **Attach Script Button**: At the bottom of the Debug Data panel, there is a blue button labeled "Attach script."

### Visual Flow / Relationships
The most prominent visual elements are the character model and the Debug Data panel. The character model is central in the left portion of the image, while the Debug Data panel occupies the right side. The dropdown menu is nested under the "Mobile Camera" heading. The layout follows a typical user interface design with clear sections and interactive elements.

</details>

<p></p>



Note

This image shows the Desktop Editor. The same functionality is available in the Properties panel for entities in VR build mode.

### To change the camera perspective:

- Open your creator menu and select **Gizmos**.
- Select **SpawnPoint**.
- Grab your new SpawnPoint gizmo and move up on your right thumbstick to select **...Properties**.
- Select the dropdown you want to use next to **Mobile Camera**.

### Available camera modes

The Mobile Camera dropdown offers the following camera modes. You can also control each mode programmatically via the Camera API (see [Camera Control with the Camera API](Camera.md#camera-control-with-the-camera-api) section below).

| Camera Mode | Description | Spawn Point Customization Options | Example |
| --- | --- | --- | --- |
| **None** | Default setting with standard camera behavior. | None |  |
| **First Person** | The camera is from the player’s point-of-view. | None | First-Person |
| **Third Person** | The camera follows the player from behind. | None | Third-Person |
| **Orbit** | The camera dynamically follows the player, but is not fixed behind them. | **Camera distance:** The distance between the camera and the player. | Orbit Camera |
| **Pan** | The camera follows the player at a fixed position adjacent to the player, ensuring the camera angle and distance remain constant. | **Camera offset:** Set the camera’s position relative to the player using a vector with X, Y, and Z parameters. | Pan Camera |
| **Follow** | The camera tracks player movements without being fixed behind them. During movement, the camera automatically rotates to align itself behind the player. | **Camera Auto Follow Delay:** The delay before auto-turning is enabled after the camera stops being manually rotated.  **Enable Continuous Rotation:** When true, the camera continuously rotates to stay behind the player after movement, unless manually interrupted by player interaction.  **Horizon Levelling:** Enables levelling the camera to the horizon.  **Rotation Rate:** The rate at which the camera rotates back behind the player when they are moving. Lower numbers mean slower camera movement. | Follow Camera |

## Camera control with the Camera API

Use the Camera API to change camera modes and properties via TypeScript in real-time.

**Important notes:**

* All Camera API methods have no effect in VR, where first person is always enabled
* Any script that manipulates the player’s camera must be executed in Local mode
* All camera mode changes can include smooth transitions with customizable duration and easing

### Prerequisites

Before using the Camera API, you need to:

- **Enable the Camera API module:**
  * Open the **Scripts** dropdown
  * Click the **Settings** icon <details>
                                <summary>Script settings</summary>
                                
                                <p></p>
                                
                                [Script settings](../../image_data/f7d7dfd39b1f8dd8b33be5e803102036a47eca02ce4cecb52afc02a2e1557c67.md)
                                
                                ### Overview
                                This image depicts a user interface element from a software application, specifically a settings or configuration panel related to scripts. The layout includes a search bar, a plus sign for adding new items, a settings gear icon, and a menu icon.
                                
                                ### Key Elements
                                - **Search Bar**: Located at the top-left, it has a magnifying glass icon and a placeholder text "> Search for scripts".
                                - **Plus Sign**: Positioned next to the search bar, indicating the option to add new scripts.
                                - **Settings Gear Icon**: Situated to the right of the plus sign, representing the settings for scripts.
                                - **Menu Icon**: A vertical ellipsis icon located to the far right, likely for additional options or a dropdown menu.
                                - **Settings Button**: A black button labeled "Settings" at the bottom-right, suggesting access to more detailed settings.
                                
                                ### Visual Flow / Relationships
                                The most prominent visual element is the search bar, as it is the largest and most central. The settings gear icon is secondary but still important, as it suggests configuration options. The menu icon is less prominent but still noticeable due to its distinct shape. The settings button at the bottom-right acts as a call-to-action for accessing detailed settings.
                                
                                </details>
                                
                                <p></p>
                                
                                
  * Enable **horizon/camera**<details>
                             <summary>Enable Camera API module</summary>
                             
                             <p></p>
                             
                             [Enable Camera API module](../../image_data/7edbfe760b4cdf5557ff01a942f80dc51874c61c86a7ee051cc2e8b14cb179f2.md)
                             
                             ### Overview
                             This image depicts a user interface element showing a text input field with a checkbox next to it. The interface includes a "Cancel" button at the bottom left and an "Apply" button at the bottom right. The background is dark gray, and the text input field has a red bounding box highlighting it.
                             
                             ### Key Elements
                             - **Text Input Field**: Located at the top, it contains the text "horizon/camera". It is rectangular with rounded corners and has a light gray background.
                             - **Checkbox**: Positioned to the right of the text input field, it is a small square with a blue border and a white checkmark inside.
                             - **Buttons**: Two buttons are located at the bottom of the interface. The "Cancel" button is gray with white text, while the "Apply" button is blue with white text.
                             - **Background**: The entire interface has a dark gray background.
                             
                             ### Visual Flow / Relationships
                             The most prominent visual element is the text input field due to its size and the red bounding box. The checkbox is secondary but important as it indicates an option that can be toggled. The buttons at the bottom are less prominent but serve functional purposes. There are no arrows or lines connecting elements, so the reading order is linear from top to bottom.
                             
                             </details>
                             
                             <p></p>
                             
                             
- **Set Local execution mode:**
  * Set your script to execute in Local mode <details>
                                             <summary>UI path to set Local execution mode</summary>
                                             
                                             <p></p>
                                             
                                             [UI path to set Local execution mode](../../image_data/8cd4d197b20093de4d7100111ae5dad8830b1e180a2396a7a157c913dc41b654.md)
                                             
                                             ### Overview
                                             The image displays a user interface element within a development environment, specifically a menu for managing scripts. The main focus is on a dropdown menu that appears to be part of a larger interface, likely related to game development given the context of the environment.
                                             
                                             ### Key Elements
                                             - **Left Panel**: A vertical list of compiled scripts labeled with icons resembling text blocks and names such as "DoorButton," "DoorCutscene," "FixedCameraTrigger," etc.
                                             - **Search Bar**: Located at the top of the left panel, partially obscured but showing a placeholder text.
                                             - **Dropdown Menu**: Appears in the lower right quadrant, offering options like "Recompile," "Open in External Editor," "Execution Mode," "Rename," and "Delete." The "Execution Mode" option has a sub-menu arrow indicating further options.
                                             - **Contextual Menu**: Positioned to the right of the dropdown, showing "Default" and "Local" options, with "Local" highlighted in red.
                                             - **Background**: The main background is a gradient sky with a grid floor, suggesting a game development environment.
                                             
                                             ### Visual Flow / Relationships
                                             - **Most Prominent Element**: The dropdown menu is the most prominent due to its central placement and active selection.
                                             - **Arrows and Lines**: The dropdown menu has a downward arrow indicating it is open. There are no other directional arrows or lines connecting elements.
                                             - **Spatial Relationships**: The dropdown menu is nested within the larger interface, with the contextual menu appearing to the right of the dropdown.
                                             
                                             </details>
                                             
                                             <p></p>
                                             
                                             

### Camera transitions

All camera mode changes support smooth transitions. You can specify transition properties to ease the movement between camera modes:

```
import LocalCamera, {CameraTransitionOptions, Easing} from 'horizon/camera';

// Example transition options
const transitionOptions = {
  duration: 0.5,
  easing: Easing.EaseInOut,
};
```

### Basic import statement

```
import LocalCamera from 'horizon/camera';
```

## Set the first person camera mode

```
LocalCamera.setCameraModeFirstPerson();

// With transition
LocalCamera.setCameraModeFirstPerson({
  duration: 0.5,
  easing: Easing.EaseInOut,
});
```

## Set the third person camera mode

```
LocalCamera.setCameraModeThirdPerson();

// With transition
LocalCamera.setCameraModeThirdPerson({
  duration: 0.5,
  easing: Easing.EaseInOut,
});
```

## Set the fixed camera mode

Set the camera to a fixed world position and rotation. Calling this API without parameters fixes the camera at its current position and orientation.

```
LocalCamera.setCameraModeFixed();

// With specific position and rotation
LocalCamera.setCameraModeFixed({
  position: new hz.Vec3(0, 1, -5),
  rotation: hz.Quaternion.fromEuler(new hz.Vec3(0, 0, 0)),
  duration: 0.5,
  easing: Easing.EaseInOut,
});
```

## Set the attached camera mode

Attach the camera to a target entity to automatically follow its position and rotation. When the target entity is destroyed, camera tracking stops and the camera remains at its last position.

```
LocalCamera.setCameraModeAttach(targetEntity);

// With offset and speeds
LocalCamera.setCameraModeAttach(targetEntity, {
  positionOffset: new hz.Vec3(0, 0, -5),
  translationSpeed: 1,
  rotationSpeed: 1,
  duration: 0.5,
  easing: Easing.EaseInOut,
});
```

## Set the pan camera mode

Set the camera to pan adjacent to the avatar at a fixed vector from the avatar.

```
LocalCamera.setCameraModePan({
  positionOffset: new hz.Vec3(25, 0, 0),
  translationSpeed: 1,
});
```

## Set the follow camera mode

Follow camera mode is similar to orbit camera mode - the camera direction is not tied to the avatar’s facing direction. However, follow camera can automatically rotate back behind the avatar as the player moves.

```
LocalCamera.setCameraModeFollow();

// With configuration options (showing default values)
LocalCamera.setCameraModeFollow({
  activationDelay: 2.0, // The delay before auto-turning is enabled after the camera has been manually turned.
  cameraTurnSpeed: 1.0, // Modifier for the speed at which the camera turns to return behind the player avatar.
  continuousRotation: false, // Enable the camera to continually rotate behind the player once rotation starts, uninterrupted, rather than only rotating while the player moves.
  distance: 5.0, // The distance from the target to the camera. If not set, the camera remains at its current distance.
  horizonLevelling: false, // Enables levelling the camera to the horizon.
  rotationSpeed: 0.0, // Controls how quickly the camera moves with the player's avatar. Lower numbers mean slower camera movement. If not set, the camera snaps to the position offset from the target.
  translationSpeed: 0.0, // Controls how quickly the camera moves with the player's avatar. Lower numbers mean slower camera movement. If not set, the camera snaps to the target position.
  verticalOffset: 0.0, // Vertical offset up from the target position. The camera continues to look at the player's avatar.
});
```

## Set the camera field of view

```
LocalCamera.overrideCameraFOV(72.5);

// With transition
LocalCamera.overrideCameraFOV(72.5, {duration: 0.5, easing: Easing.EaseInOut});
```

## Adjust the camera roll

Adjust the tilt of the camera on the Z-axis, also known as the camera roll.

```
LocalCamera.setCameraRollWithOptions(30);

// With transition
LocalCamera.setCameraRollWithOptions(30, {
  duration: 0.5,
  easing: Easing.EaseInOut,
});
```

## Get the camera look at position

The Camera API gets the world position that the player is currently looking at, ignoring the local player’s avatar.

```
import LocalCamera from 'horizon/camera';

let cameraLookAtPos = LocalCamera.lookAtPosition.get();
```

## Enable and disable camera collisions

You can use the Local Camera API to enable and disable camera collision. Camera collision gives the camera a physical presence in the world, which means it won’t clip into world geometry, and it won’t see through walls. Instead, the camera is moved closer to the avatar.

Small spaces can cause the camera to move very close to the avatar, making navigation difficult. If your world includes many small spaces, consider:

* Disabling camera collision
* Switching to [first-person camera mode](Camera.md#how-to-set-the-first-person-camera-mode)
* Enabling [perspective switching](Camera.md#how-to-enable-and-disable-perspective-switching)

```
import LocalCamera from 'horizon/camera';

LocalCamera.collisionEnabled.set(true);
```

## Enable and disable perspective switching

The Camera API controls whether the player can toggle between first and third person modes using **PageUp** and **PageDown**. This does not affect your ability to force first and third person mode via the APIs. This has no effect in VR, where first person is always enabled.

```
import LocalCamera from 'horizon/camera';

LocalCamera.perspectiveSwitchingEnabled.set(false);
```

## Modify the camera’s behavior at runtime

You can change the options that define camera configuration during gameplay. The available options to configure are:

| Camera Mode | Options |
| --- | --- |
| Fixed Camera | position  rotation |
| Attach Camera | positionOffset  rotationOffset  translationSpeed  rotationSpeed  target |
| Pan Camera | positionOffset  translationSpeed |
| Orbit Camera | distance  verticalOffset  translationSpeed  rotationSpeed |
| Follow Camera | activationDelay  cameraTurnSpeed  continuousRotation  distance  horizonLevelling  rotationSpeed  translationSpeed  verticalOffset |

To configure camera behavior at runtime, the Camera API gets the camera’s current mode as an object, then modifies the parameters of that object. You must specify which camera mode you expect to get in the function call:

```
LocalCamera.getCameraModeObjectAs(AttachCameraMode)?.rotationSpeed.set(10);
```

If the specified camera mode differs from the current camera mode, this function returns null.

```
LocalCamera.setCameraModeFollow();
const cameraMode = LocalCamera.getCameraModeObjectAs(AttachCameraMode); // returns null
```

## Portrait orientation support

For advanced orientation-based camera control and detection, you can use the experimental **Portrait Camera API**. This allows you to:

* Detect when players are viewing your world in portrait vs landscape orientation.
* Create different camera behaviors for each orientation.

For comprehensive documentation and examples, see [Portrait Camera API](../../Scripting/API%20references%20and%20examples/Portrait%20Camera%20API.md).

You can also configure orientation-specific camera parameters directly in the [spawn point gizmo’s Mobile Camera Options](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) without scripting.

## Related documentation

* [Portrait Camera API](../../Scripting/API%20references%20and%20examples/Portrait%20Camera%20API.md) - Experimental API for orientation detection and control
* [Spawn Point Gizmo - Mobile Camera Options](../../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) - Configure camera settings for different orientations
* [Preview Mode - Setting the Preview Device](../../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Preview%20mode.md#setting-the-preview-device) - Test camera behavior in different orientations