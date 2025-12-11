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

[The debugging view mode icon](../../../../images/output/img_20251211_051330_20251211_051330.md)

### Overview
This image depicts a simple interface element consisting of a circular icon and a downward-pointing arrow, likely representing a dropdown menu or toggle switch.

### Key Elements
- **Circular Icon**: A light gray circle with a darker gray outline, located towards the left side of the image.
- **Arrow**: A small, dark gray downward-pointing arrow positioned to the right of the circle.
- **Background**: The background is a solid dark gray.

### Visual Flow / Relationships
The circular icon and the arrow are closely aligned horizontally, suggesting a single interactive element. There are no additional elements or lines connecting them, implying a direct relationship between the two.

</details>

<p></p>



Hovering your cursor over each option reveals a description of the view mode. See [Available view modes](https://developers.meta.com/horizon-worlds/learn/documentation/view-modes-for-debugging#available-view-modes) for further details. After selecting an option, the view mode will be displayed inside the dropdown button. Hovering over this dropdown button will also show you the active view mode.

<details>
<summary>List of Available viewmodes</summary>

<p></p>

[List of Available viewmodes](../../../../images/output/img_20251211_051436_20251211_051436.md)

### Overview
This image depicts a dropdown menu interface with various options listed vertically. The menu has a dark theme with light-colored text and icons. The interface includes a toggle switch at the bottom right labeled "Show Gizmos."

### Key Elements
- **Dropdown Toggle**: Located at the top left, it's a circular icon with a downward arrow indicating a dropdown menu.
- **Options List**: A vertical list of menu items with icons and text descriptions.
    - **Shaded**: Icon resembling a circle with a checkmark, text "Shaded," number "1" on the far right.
    - **Wireframe**: Icon resembling a circle with a plus sign, text "Wireframe," number "2" on the far right.
    - **Solid wireframe**: Icon resembling a circle with a plus sign, text "Solid wireframe," number "3" on the far right.
    - **Shaded wireframe**: Icon resembling a circle with a plus sign, text "Shaded wireframe," number "4" on the far right.
    - **Collision**: Icon resembling a chain link, text "Collision," number "5" on the far right.
    - **Overdraw**: Icon resembling a rectangle with a plus sign, text "Overdraw," number "6" on the far right.
- **Toggle Switch**: Located at the bottom right, it's a blue rectangular toggle switch with a white square indicating the current state as "on."

### Visual Flow / Relationships
The visual hierarchy is clear with the dropdown toggle being the most prominent element. The options list follows a descending order based on numbers, suggesting a sequential selection process. The toggle switch at the bottom right is distinct and separate from the options list, indicating a secondary action.

</details>

<p></p>



### Opening in VR

In VR, first [Enable the Utilities Menu](../../Performance/Performance%20tools/Enable%20the%20Utilities%20menu.md), then open your wearable and select the desired view mode.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_051531_20251211_051531.md)

### Overview
The image depicts a stylized, geometric landscape with a hand reaching towards a glowing, hexagonal portal. The scene has a warm, orange-yellow color palette, giving it a surreal, almost dreamlike quality. The background features abstract shapes resembling mountains and structures, creating a sense of depth and mystery.

### Key Elements
- **Hand**: A white, semi-transparent hand is positioned in the bottom-left corner, extending upwards. It appears to be reaching towards the portal.
- **Portal**: A large, hexagonal portal dominates the upper part of the image. It is outlined in a darker shade of orange and emits a bright light, suggesting a passage or gateway.
- **Background Shapes**: The background consists of abstract, angular shapes in varying shades of orange and yellow. These shapes resemble stylized mountains and structures, adding to the surreal atmosphere.
- **Play Button**: A small play button icon is located near the center of the image, partially obscured by the hand and the portal.

### Visual Flow / Relationships
The most prominent visual element is the hand reaching towards the portal. The play button is secondary but noticeable due to its central placement. The background shapes create a layered effect, with the hand and portal being the focal points.

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

[Default shaded view mode](../../../../images/output/img_20251211_051737_20251211_051737.md)

### Overview
The image depicts a 3D modeling environment with a scene rendered in a shaded view mode. The scene includes a building with multiple floors, trees without leaves, and some green lines indicating structural elements or measurements. The interface at the top suggests tools for manipulating objects within the model.

### Key Elements
- **Building**: A multi-story structure with a flat roof, located centrally in the image. It has several windows and chimneys.
- **Trees**: Bare trees scattered around the scene, particularly in the foreground and near the building.
- **Green Lines**: These lines appear to be measurement or structural guides, extending across the building and the ground.
- **Ground**: The ground is a flat surface with some darker areas that might represent shadows or terrain variations.
- **User Interface**: Various tool icons and settings are visible at the top, indicating a 3D modeling software interface.

### Visual Flow / Relationships
- **Most Prominent Element**: The building in the center.
- **Arrows/Connectors**: Green lines suggest connections or measurements but no explicit arrows are present.
- **Reading Order**: The image is a single, static view with no clear implied reading order.

</details>

<p></p>

*Shaded (default) view mode.*

**Wireframe view** mode allows you to see through 3D models to get a high level view of your world’s geometric complexity and identify unintended overlaps between models in your world.

<details>
<summary>Wireframe view mode</summary>

<p></p>

[Wireframe view mode](../../../../images/output/img_20251211_051948_20251211_051948.md)

### Overview
The image displays a wireframe view of a complex architectural structure, likely a castle or fortress, rendered in a 3D modeling software environment. The structure is composed of numerous interconnected triangular and rectangular frames forming a detailed framework. The wireframe is set against a neutral gray background, which serves as the grid for the model. The interface around the image suggests that this is a digital workspace for 3D modeling, with various tools and options available at the top.

### Key Elements
- **Wireframe Structure**: The central focus is the intricate wireframe of a multi-level building with multiple towers and turrets. The structure includes detailed beams, supports, and connecting elements.
- **Grid Background**: A light gray grid overlays the entire image, providing a reference for scale and perspective.
- **User Interface Elements**: At the top, there are several tool icons and dropdown menus indicating different functions such as local transformations, centering, scaling, and rotation. The right side shows a dropdown menu labeled "View mode: Wireframe," confirming the current display mode.

### Visual Flow / Relationships
- **Most Prominent Element**: The wireframe structure itself is the most prominent feature, occupying the majority of the image.
- **Spatial Relationships**: The structure is depicted from a slightly elevated angle, allowing visibility of its complexity and depth. There are no arrows or lines connecting elements, but the grid helps guide the viewer’s eye through the structure.

</details>

<p></p>

*Wireframe view mode.*

**Solid wireframe view** mode places a solid material underneath the wireframe. Use this view mode to help you tell objects apart more clearly and distinguish which objects are closer to the camera while in wireframe view.

<details>
<summary>Solid wireframe view mode</summary>

<p></p>

[Solid wireframe view mode](../../../../images/output/img_20251211_052159_20251211_052159.md)

### Overview
The image displays a wireframe view of a 3D model, likely a scene featuring multiple buildings and trees. The model is rendered in grayscale, showing the structural framework of the objects. The interface suggests that this is a 3D modeling software environment.

### Key Elements
- **Wireframe Model**: The central focus is a complex wireframe model composed of numerous triangular faces forming the structure of buildings and trees. The buildings appear to be multi-story structures with varying roof shapes.
- **Trees**: Several leafless trees are scattered throughout the scene, integrated into the wireframe model.
- **Grid Background**: A light gray grid overlays the entire scene, providing a reference for scale and perspective.
- **User Interface Elements**: At the top, there are various tool icons and settings related to camera controls, lighting adjustments, and view modes. On the right side, there are panels labeled "View mode," "Properties," and others, indicating this is a 3D modeling software interface.

### Visual Flow / Relationships
- **Most Prominent Element**: The wireframe model itself is the most prominent feature, occupying the majority of the screen.
- **Arrows and Lines**: There are no explicit arrows or lines connecting elements within the scene.
- **Spatial Relationships**: The buildings and trees are arranged in a somewhat linear fashion, suggesting a street or row of houses. The grid helps maintain perspective and alignment.

</details>

<p></p>

*Solid wireframe view mode.*

**Shaded wireframe view** mode shows the object’s texture underneath the wireframe. Use this view mode to help you understand how textures are affected by their underlying 3D models and debug texture issues that may be caused by the meshes underneath them.

<details>
<summary>Shaded wireframe view mode</summary>

<p></p>

[Shaded wireframe view mode](../../../../images/output/img_20251211_052406_20251211_052406.md)

### Overview
The image displays a 3D wireframe model of a complex architectural structure, resembling a castle or fortification, viewed in a shaded wireframe mode within a 3D modeling software interface. The model includes multiple buildings interconnected by bridges and pathways, with trees and branches integrated into the design.

### Key Elements
- **Wireframe Model**: The central focus is a detailed wireframe representation of a multi-story building complex with numerous towers, turrets, and connecting structures. The model is predominantly black with thin lines forming the framework.
- **Trees and Branches**: Black tree silhouettes are scattered throughout the model, adding a natural element to the structure.
- **Background**: A gradient purple background serves as the backdrop for the model.
- **Grid**: A light gray grid overlay is visible beneath the model, indicating the workspace environment of the software.

### Visual Flow / Relationships
- **Most Prominent Element**: The central building complex.
- **Spatial Relationships**: The model is positioned centrally, with the grid providing a sense of depth and scale. The trees are distributed around the structure, creating a layered effect.

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

[Collision view mode](../../../../images/output/img_20251211_052619_20251211_052619.md)

### Overview
This image depicts a 3D environment viewed from above, resembling a game development interface. The scene includes a variety of geometric shapes, trees, and buildings, with a distinct color gradient overlaying the entire image.

### Key Elements
- **Background**: A gradient transitioning from dark blue at the top to lighter shades towards the bottom, creating a night sky effect.
- **Geometric Shapes**: Several rectangular shapes are scattered across the scene, some highlighted in green, suggesting collision detection areas.
- **Trees**: Bare, stylized trees are distributed throughout the scene, adding to the eerie atmosphere.
- **Buildings**: Silhouettes of houses and structures are visible in the background, rendered in a muted purple hue.
- **Ground**: The ground is a flat, reddish-orange surface, possibly representing terrain or a specific layer within the game environment.
- **UI Elements**: At the top of the image, there are various interface elements such as tool icons, dropdown menus, and a view mode indicator labeled "Collision."

### Visual Flow / Relationships
The most prominent visual elements are the geometric shapes and the trees, which are spread out across the scene. The buildings in the background provide context but are less prominent. The interface elements at the top suggest that this is part of a game development tool, likely used for level design or asset placement.

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

[Overdraw view mode](../../../../images/output/img_20251211_052827_20251211_052827.md)

### Overview
The image depicts a wireframe view of a cemetery scene, rendered in a top-down perspective. The scene includes gravestones, trees, and a few buildings in the background. The wireframe style gives the impression of a 3D model being viewed in a design software environment.

### Key Elements
- **Gravestones**: Numerous gravestones are scattered across the scene, depicted as simple rectangular shapes with varying heights and orientations.
- **Trees**: Bare, leafless trees are distributed throughout the scene, some with intricate branch structures.
- **Buildings**: A row of buildings with pitched roofs and chimneys is visible in the background, rendered in a similar wireframe style.
- **Fencing**: Horizontal and vertical fences are present, forming boundaries around the cemetery area.
- **Background**: The background is a solid black, emphasizing the orange wireframe elements.

### Visual Flow / Relationships
The most prominent visual elements are the gravestones and trees, which are spread across the scene. The buildings in the background provide depth and context. The wireframe style suggests a focus on the layout and structure rather than detailed textures or colors. There are no arrows or lines connecting elements, and the reading order is implied by the top-down perspective.

</details>

<p></p>

*Overdraw view mode.*