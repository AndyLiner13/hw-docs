Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices

# Physics best practices

## Collidable objects

Collidable objects in the world require physics processing to determine if something is interacting with them. Optimize physics processing by disabling colliders on any objects that aren’t interacted with or are outside the game play areas. In manual traces, large numbers of colliders will be reflected in Physics.Simulate times. If you have access to developer builds of Meta Horizon Worlds, the number of colliders in the world will be broken out in the Physics::Overlaps # trace. As a rule of thumb, the number of overlaps should be kept below 400.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/725a76150e0a60eecf3d1b2b3604cfadd2fd5c636b53b0eb58e46537d5f849ac.md)

### Overview
This image depicts a timeline or sequence diagram showing various stages or processes within a game loop, specifically labeled as `PlayerLoop::Frame`. The diagram includes multiple horizontal bars representing different functions or events that occur during the frame update process.

### Key Elements
- **Timeline Bars**: These represent different stages or functions within the game loop.
  - **Visual description**: Horizontal bars with colored backgrounds and labels.
  - **Location**: Distributed across the timeline horizontally.
  - **Contents**: Labels such as `UpdateRunner::Physical`, `UpdateRunner::Update`, `PlayerLoop::LateUpdate`, `PlayerLoop::PostLateUpdate`, etc.
  - **Visual styling**: Bars have varying colors and some contain additional elements like icons or text within them.

### Visual Flow / Relationships
- **Most prominent visually**: The timeline bars are arranged sequentially along the horizontal axis.
- **Arrows/Connectors**: None visible.
- **Spatial relationships**: Bars are placed next to each other in a linear fashion, indicating a chronological order of events.

</details>

<p></p>



*UpdateRunner::PrePhysicsUpdate and UpdateRunner::Physics.Simulate in high collider world*

To view colliders in the world, toggle **Collision** in the **Utilities** menu. This highlights all collidable objects in the world with an orange tint.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fbbcae22d91502d04b34992e7ce8323ebeaac9b811ed30c497cccd7c4f786731.md)

### Overview
This image depicts a user interface element within a game or simulation environment. It features a menu dropdown with options, a circular control pad, and a set of interactive buttons at the bottom.

### Key Elements
- **Menu Dropdown**: Located in the upper left area, it contains four options labeled "Utilities," "Tracing," "HUD Metrics," and "Collision." The "Tracing" option is highlighted, suggesting it is currently selected.
- **Circular Control Pad**: Positioned centrally, it has a central black circle surrounded by a ring with directional arrows and a central button marked with a human figure.
- **Interactive Buttons**: At the bottom, there are three circular buttons with icons: a shield, a camera, and a microphone, likely representing different functions such as protection, recording, and voice commands.

### Visual Flow / Relationships
The most prominent visual element is the menu dropdown, which draws attention due to its position and the highlighted selection. The control pad is central and symmetrical, serving as a focal point. The interactive buttons at the bottom provide additional interaction points, arranged horizontally.

</details>

<p></p>



*Collision in the Utilities menu*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/30801706dea79ccdd6b360be2c1afbadd5f84e60f2b6892f6c5b4ca5ae571f50.md)

### Overview
The image depicts a simple 3D scene with a blue sphere placed on a matching blue cube. The background features a blurred environment with geometric shapes and a gradient sky.

### Key Elements
- **Sphere**: A smooth, light blue sphere positioned centrally on the cube.
- **Cube**: A solid, light blue cube beneath the sphere, serving as a base.
- **Background**: Blurred geometric shapes and a gradient sky transitioning from light blue to white.

### Visual Flow / Relationships
The sphere is the most prominent element, sitting atop the cube. The background elements are out of focus, creating a sense of depth. There are no arrows or lines connecting elements, suggesting a static scene without interaction.

</details>

<p></p>



*Collision off*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d24c0394e9570f38ec2d2e1a5650e292fb6f9ef9bfba9ef3092a749dfb3aed73.md)

### Overview
The image depicts a simple 3D scene featuring a sphere placed on a cube. The sphere is larger than the cube and both objects are rendered with a smooth, matte texture. The background is a gradient of dark gray to lighter gray, suggesting a neutral environment typical of 3D modeling software.

### Key Elements
- **Sphere**: A smooth, orange sphere positioned centrally above the cube. It has a subtle gradient effect, transitioning from a lighter shade at the top to a darker shade at the bottom.
- **Cube**: A pinkish-orange cube beneath the sphere. It has a matte finish and is slightly smaller than the sphere.
- **Background**: A gradient background transitioning from dark gray at the edges to lighter gray in the center, creating a sense of depth.

### Visual Flow / Relationships
The sphere is the most prominent element due to its size and central placement. The cube serves as a base for the sphere, and there are no connecting lines or arrows indicating a specific relationship between them. The elements are spatially arranged with the sphere above the cube, and the background provides a neutral setting without any additional elements or distractions.

</details>

<p></p>



*Collision on*

With highly detailed objects in play, disable the detailed colliders, then wrap the detailed object in a primitive collider such as a cube (best), sphere, or capsule collider. This only requires one physics test for collision and usually results in no loss of functionality or visual fidelity.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/631736ecdd6eca5f8b4fd231f6438e2151772ce3a5b8407f362fd301ef8eab05.md)

### Overview
The image depicts a 3D-rendered scene featuring geometric shapes on a flat surface. The primary focus is on a rectangular prism and a cube with a sphere resting on top. The background is a gradient of dark blue to gray.

### Key Elements
- **Rectangular Prism**: Located on the left side of the image. It has a pinkish-red face with four small circular cutouts in a vertical line. The edges are outlined in white, and the corners are sharp. The top surface is yellow.
- **Cube with Sphere**: Positioned to the right of the rectangular prism. The cube is dark gray, and a large black sphere sits atop it. The sphere is smooth and reflective.
- **Background**: A gradient background transitions from dark blue at the top to gray at the bottom.
- **Surface**: The objects rest on a flat, orange-brown surface that resembles a table or floor.
- **Small Green Square**: A small green square is floating above the rectangular prism near its top edge.
- **Red Arrow**: A red arrow pointing towards the rectangular prism is located on the left side of the image, partially obscured by the rectangular prism itself.

### Visual Flow / Relationships
The rectangular prism is the most prominent object due to its size and central placement. The cube with the sphere is secondary but still noticeable. The red arrow draws attention to the rectangular prism, suggesting interaction or highlighting. The green square appears as a minor detail, adding to the abstract nature of the scene.

</details>

<p></p>



*Complex object made of non-collidables with simple collidable cube*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/abb0a8df3327c1cd7adae41b9388a264df747e7a3c5eac2999e986716ffd4515.md)

### Overview
The image depicts a 3D modeling interface showing a red cube with blue edges and a floating control panel. The cube has some interactive elements marked with small spheres and a green square on its surface. The control panel is a floating window with various settings related to the cube's behavior, attributes, physics, and more.

### Key Elements
- **Cube**: A red cube with blue edges, located in the foreground. It has small spheres marked on its surface and a green square on one side.
- **Control Panel**: A floating window with a dark background and light text. It contains tabs labeled "Behavior," "Attributes," "Physics," and "More." There are toggles for "Visible," "Light & Shadow," and "Collidable," with "Collidable" set to "On." Other sections include "Motion" options like "None," "Animated," and "Interactive."
- **Floating Window**: The control panel is a rectangular window with rounded corners, positioned above the cube. It has a close button ("X") at the top right corner.

### Visual Flow / Relationships
- **Most Prominent Element**: The red cube is the most prominent visual due to its size and central placement.
- **Arrows/Connectors**: There are no arrows or connectors visible in the image.
- **Spatial Relationships**: The control panel is floating above the cube, suggesting interaction between the two. The cube's surface elements indicate interactivity, likely controlled through the panel.

</details>

<p></p>



*Enclosed in a non-visible collidable object*

For best performance, you should attempt to leverage primitive colliders (as shown below). The only exception is for things that you collide with very often/all-the-time may be better as a single, large mesh. Testing can help determine which gives better performance.

This is especially true for worlds that are using [Custom Model Import](../../Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md), as using non-mesh colliders and non-primitive colliders will incur an additional, high, and spiking cost associated with rendering.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e524b9e1685c4aef584e1e916e6501a76daee7dd12e2871cf1b7f8bc20a3763b.md)

### Overview
The image depicts a user interface within a 3D modeling or game development environment. The main focus is on a menu titled "Colliders," which displays various collision shapes. The background shows a virtual environment with buildings, trees, and a sky with colorful clouds. Two large orange ellipses are floating in the foreground, likely representing collision shapes or objects being manipulated.

### Key Elements
- **Left Panel**: A vertical menu with options such as "Build," "Shapes," "Gizmos," "Sounds," and "Colliders." The "Colliders" option is highlighted, indicating it is currently selected.
  - **Visual description**: Dark gray background with white text.
  - **Location**: Left side of the screen.
  - **Contents**: Text labels for menu items.
  - **Visual styling**: White text on dark gray background, no borders.

- **Central Panel**: A window titled "Colliders" displaying three different collision shapes.
  - **Visual description**: Dark gray background with lighter gray gridlines.
  - **Location**: Center of the screen.
  - **Contents**: Three icons labeled "Box Collider," "Sphere Collider," and "Capsule Collider," each with an information icon next to them.
  - **Visual styling**: Icons are simple geometric shapes with a light gray background and orange highlights.

- **Foreground**: Two large orange ellipses floating in the scene.
  - **Visual description**: Orange, elongated shapes with a glossy appearance.
  - **Location**: Foreground, partially obscuring the central panel.
  - **Contents**: No text or additional elements.
  - **Visual styling**: Solid orange color, smooth edges, and a slight glow effect.

- **Background**: A virtual environment with buildings, trees, and a sky with colorful clouds.
  - **Visual description**: Buildings with green roofs, trees with green foliage, and a blue sky with pink and purple clouds.
  - **Location**: Behind the central panel.
  - **Contents**: No text or additional elements.
  - **Visual styling**: 3D rendered graphics with a cartoonish aesthetic.

- **Bottom Panel**: A navigation bar with icons and a timestamp.
  - **Visual description**: Dark gray background with white icons and text.
  - **Location**: Bottom of the screen.
  - **Contents**: Icons for settings, assets, and other functions, along with a timestamp showing "4:43 PM."
  - **Visual styling**: White icons on dark gray background, thin white text.

### Visual Flow / Relationships
- **Most prominent visually**: The central panel with the "Colliders" window.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: The left panel is to the left, the central panel is centered, and the foreground objects are in front of the central panel. The background environment is behind everything else.

</details>

<p></p>



*World Editor showing raw primitive colliders*

## Grabbables

In order for grabbables to have good performance, it is important to minimize the number of collidable components on the grabbable object. For a rule of thumb, the maximum number of collidable components any grabbable should have is 2.

## Triggers

The number of triggers in the world has a runtime cost associated with it. This is seen by an increase in *Physics.Simulate* and the *TriggerRuntimeIntegration::Update* markers. Active triggers still have a runtime cost in the world even if they are inaccessible to the player.

Even objects outside the player area that have a trigger will still contribute to frame time.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/02c8c4828b59d577be00c2e96748b75ca01022e54e3f233a6a873363f3145525.md)

### Overview
This image displays a Unity Editor interface showing a scene view alongside an Inspector window. The scene view contains a grid floor with some 3D objects, while the Inspector window shows details of a selected game object, specifically its transform and collider settings.

### Key Elements
- **Scene View (Left Panel)**:
  - **Visual description**: A 3D scene with a grid floor and several 3D objects.
  - **Location**: Left side of the image.
  - **Contents**: Includes a green axis indicator, a red cube, and a blue cube with a white outline.
  - **Visual styling**: Dark background with a green grid overlay.

- **Inspector Window (Right Panel)**:
  - **Visual description**: A dark-themed window with various settings for a game object.
  - **Location**: Right side of the image.
  - **Contents**: Includes fields for Position, Rotation, Scale, Box Collider settings, and a Script component labeled "Trigger Game Object Helper (Script)".
  - **Visual styling**: Dark background with white and light gray text, and a red circle highlighting a specific checkbox.

### Visual Flow / Relationships
- **Most prominent visually**: The red circle highlighting the "Is Trigger" checkbox in the Inspector window.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The Inspector window is adjacent to the Scene view, with the Scene view on the left and the Inspector on the right.

</details>

<p></p>



For best performance, disable triggers far away from the player, in areas like buildings (until the player enters the building), and areas inaccessible to the player.

## Collidable property

Entities when using the Scripting API have a [collidable property](https://developers.meta.com/horizon-worlds/resources/scripting-api/core.entity.collidable.md/?api_version=2.0.0) that can be enabled or disabled. In worlds where the physics cost is high, and players are collectively moved to another area such as PvP worlds, consider setting the collidable property to false to turn off the colliders in areas the players aren’t present. Since this is a bridge call, as mentioned in the [CPU and TypeScript optimization and best practices](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#typescript-optimization), ensure these are spread across several frames to reduce any spikes during gameplay.