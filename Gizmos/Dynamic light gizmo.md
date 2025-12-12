Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/dynamic-light-gizmo

# Dynamic light gizmo

The dynamic light [gizmo](About%20gizmos.md) allows creators to add dynamic lighting effects such as moving and changing lights. Some common use cases include enhancement of atmosphere and [highlighting important areas or objects](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-3-configuring-gameplay#configuring-the-apple-spawners).

The following image is taken from the [tutorial world](../Tutorials/Getting%20started/Getting%20started%20with%20tutorials/Access%20Tutorial%20Worlds.md) called [Economy world](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-3-configuring-gameplay) where the dynamic light gizmos are at work. The dynamic light is used to draw attention to the apple.

<details>
<summary>An screenshot of the dynamic light gizmo at work</summary>

<p></p>

[An screenshot of the dynamic light gizmo at work](../image_data/96d17fd3fa6e991d32111c72ccd9e809749c98f0e8c6646c920c7d8e1d49fef8.md)

### Overview
This image depicts a virtual environment with a character standing under a tree. The scene includes two apples, one on the ground and one hanging from the tree. The character is wearing casual clothing and has blue hair tied up in a bun. There is a circular icon at the bottom right corner that resembles a menu or interaction button.

### Key Elements
- **Character**: A figure with blue hair in a bun, wearing a pink hoodie and blue jeans. Located centrally in the image.
- **Tree**: A large tree with a brown trunk and green leaves. Positioned on the right side of the image.
- **Apples**: Two red apples, one on the ground and one hanging from the tree. Both apples have small white lines around them, possibly indicating selection or interaction points.
- **Ground**: A grid-patterned floor, suggesting a virtual or game-like setting.
- **Menu Icon**: A circular icon with a white menu symbol located at the bottom right corner.

### Visual Flow / Relationships
The most prominent visual elements are the character and the apples. The apples are connected by lines, suggesting interactivity. The character is positioned between the two apples, and the tree is partially obstructing the view of the hanging apple. The menu icon at the bottom right suggests an interactive element within the scene.

</details>

<p></p>



## Limitations

While using the dynamic light gizmo, there are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo). For example, the number of lights permitted and its impact on [performance](../Performance/Designing%20a%20performant%20world.md).

## Access the dynamic light gizmo

While you can access and use gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the desktop editor.

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “dynamic light” in the search field.
- Select the dynamic light gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties** panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The dynamic light gizmo is an [entity](../Reference/core/Classes/Entity.md). All objects in a world are represented by entities. Entities have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Additionally, like the transformation, [**Color**](../Reference/core/Classes/Color.md) can be edited in the UI panel or controlled through scripting.

In the **Light** section, additional properties are available to customize and manage dynamic lights.

The **Enabled** toggle turns the light on or off.

The **Color** and **Intensity** fields let you configure the light’s appearance and intensity.

**Light Type** specifies the type of light sources such as **Point** (omnidirectional light) or **Spot** (cone-shaped light).

**Falloff Distance** specifies the decline in light intensity with distance.

**Spread** specifies the spread of spotlight, which is the width of the light beam.

For more information on the dynamic light gizmo properties, see [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo) and the [DynamicLightGizmo](../Reference/core/Classes/DynamicLightGizmo.md) API.

## Scripting

To control the gizmo through scripting, see the [DynamicLightGizmo](../Reference/core/Classes/DynamicLightGizmo.md) API.

## What’s next?

Now that you’ve been introduced to the dynamic light gizmo, further your learning with hands-on tutorials and guides:

* [Meta Horizon Worlds creator’s manual on the dynamic light gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo)
* [Tutorial worlds on dynamic lights](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-3-configuring-gameplay)
* [Material asset user guide](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/material-asset-user-guide)