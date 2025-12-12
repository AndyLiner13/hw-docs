Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/static-light-gizmo

# Static light gizmo

The static light [gizmo](About%20gizmos.md) is a tool used to light scenes. Static lights do not move or change during runtime. The static light gizmo offers various shapes and allows customization of color and intensity. This gizmo is useful for creators who want to implement lighting in their worlds without the performance overhead associated with dynamic lighting.

The following image shows the static light gizmo, the red cube, lighting an object in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: An [environment gizmo](Environment%20gizmo.md) is added to the world where a night skydome is applied.

<details>
<summary>The static light gizmo lighting an object in the Build mode</summary>

<p></p>

[The static light gizmo lighting an object in the Build mode](../image_data/d755bc59ae495d2379e51a7cb22b41db4d2a26bc9eecaf0524034f967bc90a38.md)

### Overview
This image depicts a 3D scene viewed from above, resembling a virtual environment or a game interface. The scene includes geometric shapes, a small humanoid figure, and a floating icon.

### Key Elements
- **Red Cube**: Located near the bottom-left area of the image. It has a blue arrow pointing towards its front face and a green arrow pointing upwards. The cube is outlined in red.
- **Green Arrow**: Positioned on the red cube, pointing upwards.
- **Blue Arrow**: Positioned on the red cube, pointing towards its front face.
- **Gray Pyramid**: Situated below the red cube, partially obscured by it.
- **Humanoid Figure**: A small, light blue humanoid figure is located near the center of the image, slightly to the right. It appears to be floating and is facing upwards.
- **Floating Icon**: A small, light blue icon with a plus sign is positioned above the humanoid figure.
- **Background**: The background is a gradient of dark to light gray, with a grid overlay suggesting a floor or surface.
- **Floating Icon (Top Right)**: A small, light blue icon with a sun and cloud design is located in the top-right corner of the image.

### Visual Flow / Relationships
The most prominent visual elements are the red cube and the humanoid figure. The green and blue arrows on the red cube draw attention to specific directions. The floating icon above the humanoid figure suggests some form of interaction or action related to the figure. The overall layout implies a user interface or a simulation environment.

</details>

<p></p>



The following image shows the same static light gizmo lighting an object in the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: The geometry of the light, the red cube, is hidden in the Preview mode.

<details>
<summary>The static light gizmo lighting an object in the Preview mode</summary>

<p></p>

[The static light gizmo lighting an object in the Preview mode](../image_data/3f50acad87da630b016b5c1dbc0ff074756a7905107cd930dbccd7d06127b529.md)

### Overview
The image depicts a 3D-rendered scene featuring a character standing in a minimalist environment. The character has a back view, wearing a pink hoodie, blue jeans, and light-colored sneakers. There is a large, geometric cube to the left of the character. The background consists of a flat, tiled floor extending into the distance under a gradient sky.

### Key Elements
- **Character**: Located centrally in the image, facing away from the viewer. The character has a stylized appearance with a bun hairstyle in pink and blue tones. They are wearing a pink hoodie, blue jeans, and light-colored sneakers.
- **Cube**: Positioned to the left of the character, it is a large, simple geometric shape with a gradient from pink to white.
- **Background**: A flat, tiled floor with a grid pattern, transitioning from a darker shade at the top to a lighter shade at the bottom. The sky above is a gradient of dark to light blue.

### Visual Flow / Relationships
The character is the most prominent visual element due to their central placement and distinct features. The cube is secondary but still noticeable due to its size and color contrast against the background. The background provides a neutral setting that does not distract from the main subjects.

</details>

<p></p>



## Access the static light gizmo

While you can access and configure the static light gizmos in the [VR tool](Static%20light%20gizmo.md), the following steps show you how to access the static light gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “static” in the search field.
- Select the static light gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The static light gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Light** section, additional properties are available to customize and manage static lighting.

The **Enabled** toggle turns the light on or off.

**Shape** controls the shape of the light. For example, **Cuboid** and **Ellipsoid** are omnidirectional, while **Disk** and **Rectangle** have a visual directional arrow.

The **Color** and **Intensity** fields let you configure the light’s color and intensity.

For more information on the static light gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#static-light-gizmo).

## What’s next?

Now that you’ve been introduced to the static light gizmo, continue your learning with hands-on tutorials, and more related developer guides:

* [Static light gizmos user guide](Static%20light%20gizmo.md)
* [Meta Horizon Creator Program’s creator manual on the static light gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#static-light-gizmo)