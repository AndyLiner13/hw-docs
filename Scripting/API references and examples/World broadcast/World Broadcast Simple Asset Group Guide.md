Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/world-broadcast/asset-group-guide

# World Broadcast Simple Asset Group Guide

The `Simple World Broadcast` asset group provides an easy, “plug-and-play” set of entities for creators who want to quickly begin working with the World Broadcast system. It includes the minimum required tech to use all features and can be extended with custom logic.

<details>
<summary>Simple World Broadcast</summary>

<p></p>

[Simple World Broadcast](../../../image_data/fcabb581db04617349a1513986698be47d61a53cb4f98d0f031ac6c0209d1c63.md)

### Overview
This image depicts a user interface element showing asset details for a broadcast titled "Simple World Broadcast." The interface includes a title bar, a text input field, and a description area.

### Key Elements
- **Title Bar**: Located at the top, spans the width of the interface. Contains the text "Asset details" and a back arrow icon on the left side.
- **Text Input Field**: Positioned below the title bar, it has a placeholder text "Simple World Broadcast" and a counter indicating "22/40" characters remaining.
- **Icon**: A small icon resembling a gear or settings symbol is placed next to the text input field.
- **Main Content Area**: A large rectangular section occupies the majority of the screen, featuring a gradient background transitioning from dark gray to light gray. Within this area, there is a white outline of a cube.
- **Description Text**: At the bottom, there is a block of text describing the asset as "A version of World Broadcast which only has a controller (World Broadcast Brain) and an entity which can act as a 'camera position'."

### Visual Flow / Relationships
The most prominent visual element is the title bar at the top. The text input field is secondary but important for interaction. The main content area with the cube icon is central and draws attention due to its larger size and distinct shape. The description text at the bottom provides additional context without being overly prominent.

</details>

<p></p>



## System Setup

### Step 1: Add the “Simple World Broadcast” Asset Group

The Simple World Broadcast Asset Group contains two root objects:

- `World Broadcast Brain`
- `Camera Handle`

The `World Broadcast Brain` component handles cycling through all camera handles in the world. An API is available to force the brain to focus on a particular camera handle.

```
  public ForceCameraFocusOnTarget(target: CameraTransform): void {
    if (target == null) {
      console.error('[*] WorldBroadcastBrain: Cannot force focus on null target');
      return;
    }

    if (this.props.debugMode)
      console.log(`[WorldBroadcastBrain] Forcing focus on ${JSON.stringify(target)} `);

    this.forcedFocusTarget = target;
    this.currentState = CameraDirectorState.ForcedFocus;
    this.UpdateCamera(target);
  }

  public EndForcedFocus(): void {
    if (this.props.debugMode)
      console.log('[WorldBroadcastBrain] Ending forced focus');

    this.currentState = CameraDirectorState.CyclingThroughDefaultCameraPositions;
    this.forcedFocusTarget = null;
  }
```

### Step 2: Add More Camera Handles

The World Broadcast Brain picks up all `Camera Handle` components at `start`. To add more handles, duplicate the handle bundled with the Asset Group.

<details>
<summary>Simple World Broadcast</summary>

<p></p>

[Simple World Broadcast](../../../image_data/a9d3892219397b19385bd339da1b6a471e9388a7146bc985edaf101a162d40aa.md)

### Overview
The image depicts a 3D modeling environment interface, likely from a game development tool such as Unreal Engine. The central area shows a grid floor with a gradient sky background. On the left side, there is a hierarchical tree view, and on the right side, there is a properties panel displaying various attributes and settings related to a selected object named "Camera Handle."

### Key Elements
- **Left Panel (Hierarchy)**: Located on the left side, it displays a tree structure with nodes labeled "SpawnPoint," "World Broadcast:Brain," and "Camera Handle." The "Camera Handle" node is highlighted, indicating it is the currently selected item.
- **Central Area**: The main workspace shows a grid floor with a gradient sky background transitioning from light blue at the horizon to a lighter shade above. There are no objects or models placed in the scene yet.
- **Right Panel (Properties)**: Positioned on the right side, it contains detailed information about the "Camera Handle." It includes sections for attributes, behavior, interactivity, navigation, and more. Text fields and checkboxes are visible within this panel.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Camera Handle" node in the hierarchy panel.
- **Arrows/Connectors**: None visible.
- **Reading Order**: The hierarchy panel on the left guides the viewer to the properties panel on the right, which provides detailed information about the selected object.

</details>

<p></p>



## Extending The System

The forced focus API can be used with custom logic to create gameplay-dependent camera switches. For example, link a trigger component to a camera handle to force the world broadcast brain to look at whatever enters the trigger zone. The `ForceCameraFocusOnTarget()` method can be called multiple times to change the forced focus target *without* ending forced focus first.

## Troubleshooting

### “No default camera found”

This error appears when no “Default Camera” entity exists as a child of the brain. The Asset Group includes this by default when imported, but the object hierarchy may have changed. If the “default camera” is no longer a child of the `World Broadcast Brain`, add an empty entity and copy these values from the inspector (excluding the transform):

<details>
<summary>Default Camera</summary>

<p></p>

[Default Camera](../../../image_data/c6019c5de42a6ac56dbec96a88de3a7dcbd0afa1471584694dd895281041fcf2.md)

### Overview
This image depicts a user interface element showing properties and attributes of a game object, likely within a game development tool or engine. The layout is structured with sections for attributes, behavior, and gameplay tags.

### Key Elements
- **Header**: "Properties" at the top, indicating the section of the interface.
- **Default Camera**: A field labeled "Default Camera" with a value "0.00 -6.72 -6" under the "Attributes" section.
- **Debug Data**: A collapsed section labeled "Debug Data."
- **Attributes Section**: Contains fields for Position, Rotation, Scale, and Billboard.
  - **Position**: Displays coordinates X: 0.00, Y: -6.72, Z: -6.
  - **Rotation**: Displays coordinates X: 0, Y: 180, Z: 0.
  - **Scale**: Displays coordinates X: 1, Y: 1, Z: 1.
  - **Billboard**: A dropdown menu set to "None."
- **Behavior Section**: Contains toggles and dropdown menus for Visible, Collidable, Collision Layer, Motion, Animation, Loop, Play on Start, and Speed.
  - **Visible**: Toggled on.
  - **Collidable**: Toggled on.
  - **Collision Layer**: Dropdown menu set to "Everything."
  - **Motion**: Dropdown menu set to "Animated."
  - **Animation**: Two buttons labeled "Play" and "Record."
  - **Loop**: Dropdown menu set to "Never."
  - **Play on Start**: Toggled off.
  - **Speed**: Value set to "1."
- **Gameplay Tags Section**: Contains a search bar labeled "Search attached tags" and a plus sign for adding new tags.
  - **DefaultCamera**: A tag labeled "DefaultCamera."

### Visual Flow / Relationships
The interface is organized into distinct sections with clear headings. The attributes and behavior sections are nested under the main properties header. The layout follows a vertical flow, with each section stacked vertically. The attributes section is expanded, while the behavior section is partially expanded, revealing its contents.

</details>

<p></p>



### “WorldBroadcastBrain: Cannot force focus on null target”, or “WorldBroadcastBrain: Cannot update camera to undefined transform”

This error occurs when the `target` passed into the `ForceCameraFocusOnTarget()` method does not exist. When calling the API, pass a new object of type `CameraTransform`. Create this object at the point of the API call. The type definition is as follows:

```
type CameraTransform = {
  position: hz.Vec3;
  rotation: hz.Quaternion;
};
```