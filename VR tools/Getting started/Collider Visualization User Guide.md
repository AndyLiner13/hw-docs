Source: https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/collider-visualization-user-guide

# Collider Visualization User Guide

Creators can now visualize their collision meshes in VR so they can better manage collision issues, player movement and performance. Using the wearable on the wrist, it’s possible to toggle this feature to see colliders as colored meshes. Different colors distinguish the collision for static meshes vs non static meshes (rigid bodies, grabbables, etc.).

**Note:** The [Utilities menu must be enabled](../../Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md) before continuing.

## How does it work?

After the utilities menu is enabled. You will find the “Collision” button. Use your cursor to select the button and toggle the collision visualization.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/88baeb1c4e6ac53375d2a13fabff0bb22a0cfacfdfc23584a7d5351d2d78b9b0.md)

### Overview
The image depicts a first-person view within a virtual environment, likely a game or simulation. The foreground shows a hand holding a device with a menu interface, while the background features a wooden structure resembling a house or shed. The scene is outdoors with green grass and trees visible in the distance under a clear blue sky.

### Key Elements
- **Hand and Device**: A hand is holding a device with a circular interface. The device has a white background with rounded edges and displays text and icons.
  - **Text**: "Utilities," "Tracing," "HUD Metrics," "Collision."
  - **Icons**: A shield icon, camera icon, and microphone icon are present below the text.
  - **Colors**: White background, blue gradient at the bottom, black icons.
- **Background Structure**: A wooden structure with a door and a small balcony is visible.
  - **Details**: The structure has a light brown wood texture, a dark brown door, and a small window.
- **Foreground**: The ground is green grass, and part of another hand holding a black object is visible in the lower right corner.

### Visual Flow / Relationships
- **Most Prominent**: The hand holding the device is the focal point.
- **Arrows/Connections**: There are no explicit arrows or connections between elements.
- **Spatial Relationships**: The device is held in the foreground, with the wooden structure in the mid-ground, and the outdoor landscape in the background.

</details>

<p></p>



With “Collision” turned on, your world will display collision meshes up to 50 units away. To test this out, you can open the property panel of an object and toggle the “Collidable” option and notice the collision mesh appear and disappear. Static objects will have an orange collision mesh, while dynamic objects will have a purple mesh.

Note that purple meshes for dynamic objects are a concave representation of the actual collision mesh, which may be convex instead. For example, if you have a bucket with a convex collision mesh, the purple visualization would appear concave, making it seem like you could drop objects inside even if that’s not actually possible.

## Hints and Tips

This tool can be handy to investigate at a glance how players interact with the environment, for example whether the chairs around a table will block the users from reaching the table or how players can walk on objects with complex shapes.

Another use case is optimizing the performance of your world by disabling collisions on objects that can’t be reached by players. Once you have identified which areas of the world are not reachable, you can turn on collision meshes to quickly see which objects have collision meshes in the area.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/755f32d03345c74427b419c275559fa97309122d18b18ec52630ac9cf63f118d.md)

### Overview
The image depicts a virtual environment resembling a room with a warm, orange-toned interior. The space includes furniture such as tables and stools, and there's a staircase leading upwards. The room has a playful, cartoonish aesthetic with exaggerated proportions and bright colors.

### Key Elements
- **Tables and Stools**: There are multiple wooden tables with simple designs, accompanied by matching stools. They are scattered across the floor.
- **Staircase**: A prominent staircase with a red railing leads upwards, positioned centrally in the room.
- **Ceiling and Walls**: The ceiling features a large, flat panel with a blue object hanging from it, possibly a light fixture or decoration. The walls are painted in a warm orange hue.
- **Flooring**: The floor is a light brown color, giving the room a cozy feel.
- **User Interface Elements**: At the bottom of the image, there are circular controls and a small blue hand icon, suggesting interaction points within the virtual environment.

### Visual Flow / Relationships
The most prominent visual element is the staircase, which draws the eye upward. The tables and stools are distributed around the room, creating a sense of balance. The user interface elements at the bottom suggest that this is a first-person view within a virtual reality or game setting.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d3b704ffc6c596a0b9e13189f3a98147d06b8df016e19642d1df2540747bbf0b.md)

### Overview
The image displays a user interface element within a game development environment, specifically a settings panel for configuring a game object named "Group." The panel includes various toggles, options, and tabs related to the object's behavior and attributes.

### Key Elements
- **Panel Title**: "Group" at the top-left corner of the panel.
- **Tabs**: Located at the top of the panel, including "Behavior," "Attributes," "Physics," "More," and "Inter."
- **Entity ID**: "Entity ID: 1538335304656438903" displayed prominently below the tabs.
- **Toggle Switches**: Three toggle switches labeled "Visible," "Light & Shadow," and "Collidable," all set to "On."
- **Collision Layer**: A dropdown menu labeled "Collision Layer" with the option "Everything" selected.
- **Motion Options**: Below the collision layer, there are three radio buttons for "Motion" settings: "None," "Animated," and "Interactive."
- **Attached Script**: At the bottom of the panel, there's a section labeled "Attached Script" with a dropdown arrow indicating more options are available.

### Visual Flow / Relationships
The most prominent visual element is the central panel itself, which contains all the interactive components. The tabs at the top provide navigation, while the toggle switches and dropdown menus offer specific configuration options. The layout is structured to guide the user through different aspects of the object's properties.

</details>

<p></p>

