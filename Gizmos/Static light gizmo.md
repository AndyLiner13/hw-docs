Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/static-light-gizmo

# Static light gizmo

The static light [gizmo](About%20gizmos.md) is a tool used to light scenes. Static lights do not move or change during runtime. The static light gizmo offers various shapes and allows customization of color and intensity. This gizmo is useful for creators who want to implement lighting in their worlds without the performance overhead associated with dynamic lighting.

The following image shows the static light gizmo, the red cube, lighting an object in the [Build mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: An [environment gizmo](Environment%20gizmo.md) is added to the world where a night skydome is applied.

![The static light gizmo lighting an object in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/505590096_738224345382186_9005774872030246077_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=JM2-0DPcM2sQ7kNvwFtxESZ&_nc_oc=AdnXZ3YmDGiyB-WjE7gGejdJlC5TkxPIWdlzBj9PbU1yyzuKBt65D0x1QmOIGQUa-SVToUOYKLUue6TTkSsBFspk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD2Sai1ozZ55ooBhddsFpA&oh=00_AfkT2OKyb-Uwos2pXXx5RmO0bGUxHwldaOLIrW0ZEGKeJQ&oe=695594AE)

The following image shows the same static light gizmo lighting an object in the [Preview mode](../Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md).

**Note**: The geometry of the light, the red cube, is hidden in the Preview mode.

![The static light gizmo lighting an object in the Preview mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/505424288_738224342048853_1656212214900149301_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=87JP29-4_a8Q7kNvwHv5Q5D&_nc_oc=AdkF9YOLXK9fvV9LGgDpYgpZXpr6VUU4ZKZkwV_VTwTWoQHiEl_0LHSdLEgFuQ0HQl2Ml1uEVyUw4QBbMxRSSnpc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AD2Sai1ozZ55ooBhddsFpA&oh=00_AflKevZ7p0dpidE2O8WK_Wu_w1ozjXqu_NhfJ04_4TB0hA&oe=69558D36)

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