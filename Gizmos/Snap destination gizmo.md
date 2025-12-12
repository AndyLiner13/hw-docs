Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/snap-destination-gizmo

# Snap destination gizmo

The snap destination [gizmo](About%20gizmos.md) is a helper tool used by creators to designate specific locations where players’ avatars can snap into place. When players use teleport movement, the aiming circle will automatically snap to the center of the gizmo when the area covered by the gizmo is detected.

The following image shows the aiming circle in [VR](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md) when the **Movement style** is set to **Teleport** in the Worlds app settings.

<details>
<summary>A screenshot of the aiming circle in VR</summary>

<p></p>

[A screenshot of the aiming circle in VR](../image_data/71c92b888e77c05a9aea367d8dedf8eee8d023c1691fbdcb808caa4a71c9b667.md)

### Overview
The image depicts a simple geometric design on a tiled floor. The main focus is a circular shape with concentric rings, surrounded by evenly spaced white dots arranged in a vertical line.

### Key Elements
- **Circular Shape**: A large circle with a smaller concentric circle inside, forming a ring-like structure. The outer ring has a white outline, while the inner circle is filled with a light gray color.
- **White Dots**: There are five white dots aligned vertically in the center of the image. Each dot is evenly spaced apart.
- **Background**: The background consists of a tiled floor with a light gray color and darker gray grout lines forming a grid pattern.

### Visual Flow / Relationships
- The most prominent visual element is the circular shape at the top.
- The white dots form a vertical line that draws the eye downward.
- The grid pattern of the tiles provides a structured backdrop for the design.

</details>

<p></p>



## Access the snap destination gizmo

While you can access and configure the gizmos in the [VR tool](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the snap destination gizmo from the desktop editor and add it to the [scene pane](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md), select **Build** > **Gizmos** from the menu bar, search for “snap destination” in the search field.
- Select the snap destination gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The snap destination gizmo is an entity. All objects in a world are represented by entities. [Entities](../Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

**Apply Orientation** controls whether the player’s final orientation will be aligned with the gizmo’s orientation.

**Note**: To validate that the snap destination gizmo is working, visit the world with the snap destination gizmo in [VR](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md). Ensure to set **Movement style** to **Teleport** by going to the Worlds app’s **Settings** > **Gameplay** > **Movement style** > **Teleport**.

When players use teleport movement, the aiming circle will automatically snap to the center of the gizmo when the area covered by the gizmo is detected.

## What’s next?

Now that you’ve been introduced to the snap destination gizmo, further your learning with more developer guides:

* [Meta Horizon Creator Program’s creator manual on the snap destination gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#snap-destination-gizmo)