Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/camera-api-examples-tutorial/module-5-fixed-camera-and-spectator-mode

# Module 5 - Fixed Camera and Spectator Mode

In some environments, you may wish to position the player as a spectator to an event. This camera mode allows for visitors to enjoy an unfolding scene, such as an NBA game or musical event. Or, in a dynamic environment, you can enable a FixedCamera perspective to allow them to step out of the action for a moment.

In this tutorial, entering the red target switches the camera to spectator mode:

<details>
<summary>Spectator area of the world</summary>

<p></p>

[Spectator area of the world](../../../image_data/478dd6423134b81c92806e6d2cd7ac6e8de9a82009b51481e01b705006627239.md)

### Overview
The image depicts a virtual environment labeled as a "Spectate Area." It features a character standing facing a central platform with a target-like design. The area is enclosed by a low wall and has a minimalist design with a light blue gradient background.

### Key Elements
- **Text**: "Spectate Area" is prominently displayed at the top in white font against a light blue gradient background.
- **Character**: A bald individual wearing a green shirt and black pants stands facing away from the viewer towards the platform.
- **Platform**: A red platform with a white target design is situated centrally. The target consists of concentric circles.
- **Wall**: A low, yellowish-brown wall surrounds the platform, forming a barrier.
- **Background**: The background is a gradient of light blue, transitioning from a lighter shade at the top to a slightly darker shade at the bottom.

### Visual Flow / Relationships
The most prominent visual element is the "Spectate Area" text at the top. The character is positioned below and to the right of the text, looking towards the platform. The platform is the focal point, drawing attention due to its central placement and distinct design. The wall encloses the area, creating a sense of boundary around the platform.

</details>

<p></p>



Upon entering, your view transitions to the following:

<details>
<summary>Spectator point of view</summary>

<p></p>

[Spectator point of view](../../../image_data/6ad782cd7edcacc775fd100d7ac577d7178cab2581b9100fea58eb5fceda80d0.md)

### Overview
The image depicts a 3D modeling environment with a grid-based layout. The scene includes geometric shapes and structures, likely part of a design or architectural project. The interface suggests tools for navigation and interaction are available at the edges of the screen.

### Key Elements
- **Grid Floor**: A large, light gray grid spans the entire floor, serving as a reference for spatial orientation.
- **Geometric Shapes**: Several orange cubes and rectangular prisms are scattered across the floor, forming part of the model.
- **Note Paper**: A yellow sticky note with handwritten text is placed on one of the cubes, indicating a point of interest or instruction.
- **Camera Position**: The camera is positioned above and slightly behind the model, providing a clear view of the entire scene.
- **User Interface Elements**: Icons and buttons are located in the corners of the screen, suggesting functionality for navigation, editing, and other operations within the software.

### Visual Flow / Relationships
- **Most Prominent Element**: The grid floor serves as the foundational element, with the cubes and note paper as secondary focal points.
- **Arrows and Lines**: There are no explicit arrows or lines connecting elements, but the arrangement of objects implies a logical flow from the foreground to the background.
- **Spatial Relationships**: The cubes are distributed unevenly, some stacked, others standing alone, creating a sense of depth and structure.

</details>

<p></p>



After stepping onto the target, the player’s perspective is quickly transformed to the point of view of the stationary reference object positioned above the target, looking out over the above scene.

**Note**: The Q icon is displayed in this camera mode to allow the visitor to escape out of a fixed camera mode.

This transition is triggered when the player enters the Trigger Zone, attached to which is `FixedCameraTrigger.ts`. It’s a pretty simple script:

```
class FixedCameraTrigger extends hz.Component<typeof FixedCameraTrigger> {
  static propsDefinition = {
    cameraPositionEntity: {type: hz.PropTypes.Entity},
  };

  start() {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (player: hz.Player) => {
        if (
          this.props.cameraPositionEntity !== undefined &&
          this.props.cameraPositionEntity !== null
        ) {
          this.sendNetworkEvent(
            player,
            PlayerCameraEvents.SetCameraFixedPositionWithEntity,
            {
              entity: this.props.cameraPositionEntity,
              duration: 0.4,
              easing: Easing.EaseInOut,
            },
          );
        } else {
          console.warn(
            'Attempted to use FixedCameraTrigger without a camera position entity. Create an empty object and reference it in the props.',
          );
        }
      },
    );
  }
}
hz.Component.register(FixedCameraTrigger);
```

When a player enters the Trigger Zone, the setCameraFixedPositionWithEntity event is emitted, which is received by the `PlayerCamera.ts` script. This script takes position and rotation information from the submitted entity. In this case, the this.props.cameraPositionEntity property maps to the reference object above the zone.

In `PlayerCamera.ts`:

* A listener for the above event triggers a call to the setCameraFixedPositionWithEntity() function.
* Above function calls to: setCameraFixedPosition(), which:
  + Sets locomotion on the player to 0
  + Calls to displayCameraResetButton(), which activates the Q button on the mobile and web screen.

For more information on parameters of this event and the above functions, see [Module 2 - PlayerCamera Overview](Module%202%20-%20PlayerCamera%20Overview.md).

## Checkpoint

In this module, we covered how to set up a fixed camera for the player. While we generally want to keep players immersed in the action, this perspective can be useful in some contexts.

In the next module, we explore how to create cutscenes using simple camera motions and animation.