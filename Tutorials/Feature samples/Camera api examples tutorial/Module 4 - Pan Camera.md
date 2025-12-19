Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/camera-api-examples-tutorial/module-4-pancamera

# Module 4 - Pan Camera

The pan camera setting moves the player’s camera to follow their avatar at a consistent offset. Having the camera follow the avatar gives a lot of creative freedom for experimenting with different types of gameplay, and allows for sidescrolling, top-down and isometric influenced gameplay.

In this tutorial, climbing the steps switches the camera to pan camera mode, and sets the camera’s position to be 10 offset from the player on the X-axis.

<details>
<summary>Sidescroller for Camera API Examples</summary>

<p></p>

[Sidescroller for Camera API Examples](../../../image_data/c1bfaf2323205e920980e9d692b7f4e8fdce94d11e00747a529ceb05fbfb94ca.md)

### Overview
The image depicts a scene from a video game or simulation environment. It features a character standing on a floating platform surrounded by large yellow structures resembling pillars or walls. The background is a gradient blue sky, suggesting an open-air setting.

### Key Elements
- **Character**: A figure wearing a pink and black outfit stands on a small gray platform. The character has short hair and is facing away from the viewer.
- **Platforms**: Two platforms are visible—one larger one the character is standing on, and another smaller one extending into the distance.
- **Pillars**: Large yellow pillars frame the scene on both sides, creating a corridor-like structure.
- **UI Elements**: On the left side, there are two buttons labeled "TAB" and "ESC." On the right side, there are icons for a microphone, a settings gear, and a character avatar.

### Visual Flow / Relationships
The character is the most prominent visual element, positioned centrally within the frame. The platforms and pillars create a sense of depth and guide the viewer's eye towards the distant platform. The UI elements are placed at the edges, ensuring they do not obstruct the central focus.

</details>

<p></p>



Entering the top-down area also switches the camera to pan mode, but notice that we have set the camera’s position to be 20 units offset from the player on the Y-axis, which gives a top-down perspective.

<details>
<summary>Top-down for Camera API Examples</summary>

<p></p>

[Top-down for Camera API Examples](../../../image_data/3706c3aa0f30ba213459779eb2eaf6b094d922b480db2a58ffed65aac69f520f.md)

### Overview
This image depicts a top-down view of a game environment, likely a puzzle or platformer game. The scene includes geometric shapes, a character, and various interactive elements. The layout suggests a level design with platforms and obstacles.

### Key Elements
- **Platforms**: Gray rectangular blocks forming a path or platform area.
- **Character**: A small figure located near the center of the image, possibly the player character. It appears to be standing on a platform.
- **Obstacles**: 
  - **Blue Object**: A blue, diamond-shaped object on the left side of the image.
  - **Brown Objects**: Two circular, brown objects near the center-right, possibly collectibles or obstacles.
- **Background**: A grid pattern in the background, suggesting a virtual space or workspace.
- **Trees**: Two green, polygonal trees are positioned at the top right corner of the image.
- **UI Elements**: 
  - Top-left corner: Icons labeled "TAB" and "ESC," likely for game controls.
  - Top-right corner: Icons for volume control ("V"), notifications ("N"), and a user profile or settings ("B").

### Visual Flow / Relationships
The most prominent visual elements are the platforms and the character. The blue object seems to be an obstacle or collectible. The circular brown objects appear to be part of the level design. The trees add environmental detail but do not interact with the gameplay directly. The grid background helps in understanding the spatial relationships within the game world.

</details>

<p></p>



The PanCameraTrigger.ts script is essentially an extension of the CameraTrigger script with some additional properties:

| Parameter | Description |
| --- | --- |
| `cameraOffset` | The camera’s offset from the player’s avatar in Vec3 format. Note that the camera will always target the player’s avatar at the center of the frame.   If not set the default value in this tutorial is `(2, 0, 0)`. |
| `translationSpeed` | The speed the camera can move, decoupled from the avatar’s speed. This allows for smoother camera transition when the player starts and ends their movement.   If not set, the default value in this tutorial is `4.0`. |
| `collisionsEnabled` | Whether the camera should collide with objects in the world.   If set to `true`, the camera will move closer to the player when there is an obstacle to its position with the offset.   If set to `false`, the camera will ignore obstacles in the world, passing through them or behind them to maintain its offset position. |

When a player enters the Trigger Zone, the SetCameraCollisions and SetCameraPan events are emitted, which are received by the `PlayerCamera.ts` script. In `PlayerCamera.ts`:

* A listener for `SetCameraCollisions` triggers a call to the `setCameraCollisions()` function.
* A listener for `SetCameraPan` triggers a call to the `setCameraPan()` function.

For more information on parameters of this event and the above functions, see [Module 2 - PlayerCamera Overview](Module%202%20-%20PlayerCamera%20Overview.md).

## Checkpoint

In this module we explored using the Pan Camera to offset the player’s camera at a specific position from the player, which enables interesting game mode variations on mobile and web such as sidescrolling and top-down.

Next, we explore Fixed Camera modes and use cases.