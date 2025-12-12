Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/view-modes-for-debugging

# View modes for debugging

Debugging view modes in desktop editor can help you debug your world. Its features include:

* Wireframe viewing options that give you visibility into the geometric complexity of your meshes.
* A collision view mode that helps you understand how players will be able to interact with objects in your world.
* An overdraw view mode that helps you see where the same pixels are being drawn more than once.

## Opening in desktop editor

To open the view modes menu, select the view icon on the right side of the toolbar.

<details>
<summary>The debugging view mode icon</summary>

<p></p>

[The debugging view mode icon](../../image_data/33d3dd01a1b19ad193473bd5c14b02f97b83141bba75c026f007100ae8130768.md)

### Overview
This image depicts a simple interface element consisting of a circular icon and a downward-pointing triangle, likely representing a dropdown menu or a toggle switch.

### Key Elements
- **Circular Icon**: Located at the left side of the image. It has a gradient fill transitioning from dark gray to lighter gray, with a white circle in the center. The icon appears slightly blurred.
- **Downward Triangle**: Positioned to the right of the circular icon. It is a solid dark gray triangle pointing downwards.
- **Background**: The background is a solid dark gray color, providing contrast to the lighter elements.

### Visual Flow / Relationships
The circular icon and the downward triangle are closely aligned horizontally, suggesting a relationship as part of a single interactive element. There are no arrows or lines connecting them, implying a direct spatial adjacency rather than a hierarchical relationship.

</details>

<p></p>



Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

<details>
<summary>List of Available viewmodes</summary>

<p></p>

[List of Available viewmodes](../../image_data/b36d7c7d363917e173952bafe680287aab938c8c03e2a0a595f48ab49161f5ff.md)

### Overview
This image depicts a user interface element showing a dropdown menu with various options listed vertically. The menu has a dark background with light-colored text and icons, and some elements are highlighted with lighter backgrounds.

### Key Elements
- **Visual description**: The dropdown menu has a dark background with light text and icons.
- **Location**: The dropdown menu is located in the upper part of the image.
- **Contents**: 
  - "Shaded" option with a checkmark next to it.
  - "Wireframe," "Solid wireframe," "Shaded wireframe," "Collision," and "Overdraw" options listed below.
- **Visual styling**: The text is white, and the icons are circular with a white fill and a black outline. The selected option has a lighter background compared to others.

### Visual Flow / Relationships
- **Most prominent visually**: The "Shaded" option with the checkmark.
- **Arrows, lines, connectors, or implied reading order**: There are no arrows or lines connecting elements. The reading order is vertical, moving from top to bottom.
- **Spatial relationships**: Elements are arranged in a stacked manner, with each option having its own line.

</details>

<p></p>



### Opening in VR

In VR, first [Enable the Utilities Menu](../../Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md), then open your wearable and select the desired view mode.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8eb21f268197532829442b1589ab2f84c2e0d23c32533765bd3a4845c1d2fa83.md)

### Overview
The image depicts a stylized, geometric landscape with a hand reaching towards a glowing, hexagonal portal. The scene has a warm, orange-yellow color palette, giving it a dreamy, almost otherworldly atmosphere. The background features abstract shapes resembling mountains or structures, and a central figure that appears to be a tree or plant with a circular base and a flower-like top.

### Key Elements
- **Hand**: A light yellow hand with a black sleeve is positioned in the bottom left corner, reaching upwards. It is the focal point of the image.
- **Hexagonal Portal**: A large, golden hexagon dominates the upper part of the image. It has a dark interior and is surrounded by a glowing aura.
- **Background Shapes**: Abstract, angular shapes in shades of orange and yellow fill the background, resembling stylized mountains or buildings.
- **Central Figure**: A central, darker shape in the middle of the hexagon appears to be a tree or plant with a circular base and a flower-like top, emitting a soft glow.

### Visual Flow / Relationships
The hand is the most prominent element, drawing the viewer's attention downward. The hexagonal portal acts as a gateway, leading the eye into the scene. The background shapes create a sense of depth and frame the central figure, which is illuminated and stands out against the darker hexagon.

</details>

<p></p>



## Available view modes

| View mode | Description |
| --- | --- |
| **Shaded** | - Texture only.   - This is the default view that shows meshes with their textures available. |
| **Wireframe** | - Wireframe only.   - Use this to view your world’s geometric complexity. It allows you to see through meshes for debugging unintended overlaps between objects. |
| **Solid wireframe** | - Wireframe over a solid material.   - This option places a solid material underneath the wireframe, it’s useful for displaying objects that are apart and distinguishing which objects are closer to the camera. |
| **Shaded wireframe** | - Wireframe over the object’s texture.   - Use this view to understand how textures are affected by their underlying mesh geometry and debug texture issues that may be caused by the meshes underneath them.   - **Note:** There is a known bug in the desktop editor where jumping to Preview mode while Shaded Wireframe mode is active causes the player to pass through geometry. |
| **Collision** | - Shows object colliders.   - Use this view to see which objects have colliders. You can also use this to optimize the performance of a world to disable collisions on objects that players can’t reach, reducing the overall complexity. |
| **Overdraw** | - Shows pixel overdraw.   - Use this view to see where the same pixels are being drawn more than once in a scene so you can better optimize your world.   - See the [Overdraw view mode](View%20modes%20for%20debugging.md#overdraw-view-mode) section for more information. |

## Keyboard shortcuts

These numeric keys provide shortcuts to the different view modes:

* 1: Shaded
* 2: Wireframe
* 3: Solid wireframe
* 4: Shaded wireframe
* 5: Collision
* 6: Overdraw

## Wireframe view mode

Wireframe view mode helps you see the geometric complexity of your 3D models. You can use this view mode to assess which 3D models should be simplified to make your world more performant if you’re running into performance issues.

### Use wireframe view mode to optimize your world

Wireframe view mode comes in three variants:

* Wireframe.
* Solid wireframe.
* Shaded wireframe.

For reference, the screenshot below displays a scene in the default **Shaded view** mode:

<details>
<summary>Default shaded view mode</summary>

<p></p>

[Default shaded view mode](../../image_data/8d4e770bbf283d8294512f2d41f2fb823e39aaecfd373b82f5d9b0b4687be246.md)

### Overview
The image depicts a 3D modeling environment with a scene rendered in a shaded view mode. The scene includes a small figure standing near some trees and a building structure that appears to be under construction or modification. There are various green lines and shapes indicating different aspects of the model, such as planes and possibly lighting or material properties.

### Key Elements
- **Background**: A gradient sky transitioning from dark blue at the top to purple at the bottom, suggesting a twilight or night setting.
- **Foreground**: Silhouettes of leafless trees and a small figure resembling a person or character.
- **Building Structure**: A rectangular building with a flat roof, partially transparent, and surrounded by green lines and shapes, likely representing construction or design elements.
- **Green Lines and Shapes**: These indicate planes or areas of interest within the model, possibly for lighting, materials, or geometry.
- **Small Figure**: A small, blue-colored figure positioned near the trees and the building structure.

### Visual Flow / Relationships
The most prominent visual element is the building structure, which is centrally located and surrounded by the green lines and shapes. The small figure is positioned in front of the building, suggesting interaction or observation. The trees are scattered around the scene, adding to the eerie atmosphere.

</details>

<p></p>

*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

<details>
<summary>Wireframe view mode</summary>

<p></p>

[Wireframe view mode](../../image_data/d546392f988257caf14786d5d24dfb162b92178f7ab9cca2ab3bdd0d6a83a299.md)

### Overview
The image displays a wireframe view of a complex architectural structure, likely a 3D model of a building or a cityscape. The structure is composed of numerous interconnected lines forming a network-like pattern, with various shapes and forms that suggest a multi-story building with multiple levels and possibly a bridge or walkway connecting different parts. The overall composition is intricate and somewhat abstract.

### Key Elements
- **Visual Description**: The image features a black wireframe against a light gray background.
- **Location**: The wireframe spans the entire image, occupying the central area.
- **Contents**: The wireframe includes straight and curved lines forming a complex network. There are also some irregular shapes resembling trees or branches, adding to the abstract nature of the structure.
- **Visual Styling**: The lines are uniformly black, and the background is a solid light gray. There are no gradients or additional colors.

### Visual Flow / Relationships
- **Most Prominent Visually**: The central part of the wireframe structure.
- **Arrows, Lines, Connectors**: There are no explicit arrows or connectors; the lines form a continuous network.
- **Spatial Relationships**: The elements are arranged in a way that suggests a three-dimensional space, with some lines extending upwards and others curving horizontally and vertically.

</details>

<p></p>

*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

<details>
<summary>Solid wireframe view mode</summary>

<p></p>

[Solid wireframe view mode](../../image_data/0e8b399ac954dfcbf90657836103ce34099877447113bb07f84d0d4d4b5e3fdf.md)

### Overview
The image displays a 3D wireframe model of a town or village scene viewed in a 3D modeling software interface. The scene includes buildings, trees, and bridges, all rendered in a monochromatic wireframe style. The user interface elements are visible at the top and right side of the screen.

### Key Elements
- **Wireframe Buildings**: Located centrally and extending across the image, these represent houses with pitched roofs and chimneys. They are interconnected by bridges.
- **Trees**: Scattered throughout the scene, these are depicted as bare, skeletal structures without leaves.
- **Bridges**: Connecting the buildings, these are geometrically structured, resembling trusses or lattice frameworks.
- **User Interface Elements**: At the top, there are various tool icons and dropdown menus. On the right, there’s a vertical panel with options labeled "View mode," "Solid wireframe," and others.
- **Grid**: A faint grid overlay is visible beneath the wireframe models, aiding in spatial orientation.

### Visual Flow / Relationships
- **Most Prominent Element**: The central area of the wireframe model, featuring the buildings and bridges.
- **Arrows/Connectors**: None explicitly shown, but the layout suggests connections between elements.
- **Spatial Relationships**: The buildings are arranged in a row, with bridges connecting them. Trees are dispersed around the buildings.

</details>

<p></p>

*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

<details>
<summary>Shaded wireframe view mode</summary>

<p></p>

[Shaded wireframe view mode](../../image_data/c62b6095f6c036a963e5bae9b3acf79f51b857a4354b655e574043dc2de0ddd1.md)

### Overview
The image depicts a 3D wireframe model of a small town or village, viewed in a shaded wireframe mode within a 3D modeling software interface. The scene includes buildings, trees, and possibly bridges or roads, all rendered in a monochromatic wireframe style against a purple grid background.

### Key Elements
- **Buildings**: Silhouetted structures with triangular roofs, arranged in a clustered formation. They appear to be multi-story houses or small buildings.
- **Trees**: Bare, leafless trees scattered throughout the scene, some with intricate branch patterns.
- **Roads/Bridges**: Geometric shapes resembling roads or bridges, constructed with triangular and rectangular wireframes.
- **Grid Background**: A purple grid overlaying the entire scene, providing a reference for scale and perspective.

### Visual Flow / Relationships
The most prominent visual elements are the buildings and trees, which are distributed across the scene. The grid background helps establish depth and perspective. There are no arrows or lines connecting elements, but the arrangement suggests a layout typical of a small town or village.

</details>

<p></p>

*Shaded wireframe view mode.*

## Collision view mode

**Collision view** mode helps you identify which objects in your world have colliders. Use this view mode to optimize your world’s performance by disabling colliders on objects that players can’t reach or resizing colliders only to where they are necessary.

### Use collision view mode to optimize your world

In collision view mode, colliders are visualized using a semi-transparent colored material.

<details>
<summary>Collision view mode</summary>

<p></p>

[Collision view mode](../../image_data/a304b93c02cf5f339b7d22805875ca40e44576ba7f620e1967f3ed407608c20c.md)

### Overview
The image depicts a 3D environment viewed from an overhead perspective, likely a scene from a video game or a 3D modeling software. The environment includes a variety of geometric shapes and objects, some of which appear to be part of a collision detection system. The scene has a Halloween theme, indicated by the presence of tombstones and barren trees.

### Key Elements
- **Background**: A gradient sky transitioning from purple to blue, suggesting a twilight or night setting.
- **Foreground**: A reddish-orange area that could represent terrain or ground.
- **Geometric Shapes**: Several rectangular and triangular shapes are scattered throughout the scene. These shapes are highlighted in green and red, indicating collision detection zones.
- **Trees**: Bare, leafless trees are distributed across the scene, adding to the eerie atmosphere.
- **Tombstones**: Silhouettes of tombstones are visible in the background, reinforcing the Halloween theme.
- **UI Elements**: At the top, there are various interface elements such as buttons and dropdown menus, indicating this might be a 3D modeling or game development tool.

### Visual Flow / Relationships
The most prominent elements are the collision detection shapes, which are spread across the scene. There are no clear arrows or lines connecting elements, but the arrangement suggests a spatial relationship where the shapes interact within the environment. The interface elements at the top provide context, suggesting user interaction with the scene.

</details>

<p></p>

*Collision view mode.*

## Overdraw view mode

**Overdraw view** mode helps you see where the same pixels are being drawn more than once in a scene so you can better optimize your world. Turning on overdraw view mode shows where meshes overlap so you can change, remove, or reposition geometries to make your world more performant.

### Use overdraw view mode to optimize your world

In overdraw view mode, you can see where geometries overlap the most in your world by looking for the areas that are most opaque. Each occurrence of overdraw is a place where unnecessary pixels are being drawn. You can optimize your world by modifying your meshes and optimizing your layout to minimize overdraw.

<details>
<summary>Overdraw view mode</summary>

<p></p>

[Overdraw view mode](../../image_data/fc597e3557835df11e6acd661f46d09f5d68f13894eccfc5f7a849407791192f.md)

### Overview
The image depicts a 3D model of a cemetery scene viewed in a software interface, likely a 3D modeling or rendering program. The scene includes gravestones, trees, and a few small structures resembling mausoleums or chapels. The overall color scheme is a muted orange, giving the scene a somewhat eerie or spooky atmosphere.

### Key Elements
- **Gravestones**: Numerous gravestones are scattered throughout the scene, varying in shape and size. They appear as simple rectangular blocks with flat tops.
- **Trees**: Bare, leafless trees are distributed across the scene, some with intricate branch patterns. These trees are stylized and lack foliage.
- **Mausoleums/Chapels**: A few larger structures resembling mausoleums or chapels are present, featuring pointed roofs and decorative elements.
- **Fencing**: Wooden fencing runs through parts of the scene, separating different areas.
- **Ground**: The ground is a uniform brown, with some areas appearing slightly lighter, possibly indicating different materials or lighting effects.

### Visual Flow / Relationships
The scene is arranged in a grid-like pattern, with the gravestones and trees distributed across the area. The mausoleums are positioned towards the back, while the fencing creates boundaries within the scene. There are no arrows or lines connecting elements, but the layout suggests a structured arrangement typical of a cemetery design.

</details>

<p></p>

*Overdraw view mode.*