Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/dynamic-light-gizmo

Learn

# Dynamic light gizmo

The dynamic light [gizmo](/hw-docs/Gizmos/About%20gizmos.md) allows creators to add dynamic lighting effects such as moving and changing lights. Some common use cases include enhancement of atmosphere and [highlighting important areas or objects](/hw-docs/Tutorials/Economy%20world%20tutorial/Module%203%20-%20Configuring%20Gameplay%20Entities.md#configuring-the-apple-spawners).

The following image is taken from the [tutorial world](/hw-docs/Tutorials/Getting%20started%20with%20tutorial%20worlds/Access%20Tutorial%20Worlds.md) called [Economy world](/hw-docs/Tutorials/Economy%20world%20tutorial/Module%203%20-%20Configuring%20Gameplay%20Entities.md) where the dynamic light gizmos are at work. The dynamic light is used to draw attention to the apple.

![An screenshot of the dynamic light gizmo at work](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/505443192_738224338715520_974421412205283361_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ve4nmZZDSmUQ7kNvwHB8qA_&_nc_oc=AdlLeD8iC6tGPOfUkvsq9gpMVK58RyCYRP5qWOMI4s9NyfjIJTEupIP9zMT0vp6fe6I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JKf261QpQFAkGxUB8lZ_DA&oh=00_AfhG3bYug5JgjLamByjGcynHYCA0IrQN3AdxnvkDaX5qKw&oe=692FAFAA)

## Limitations

While using the dynamic light gizmo, there are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo). For example, the number of lights permitted and its impact on [performance](/hw-docs/Performance/Designing%20a%20performant%20world.md).

## Access the dynamic light gizmo

While you can access and use gizmos in the [VR tool](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the desktop editor.

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “dynamic light” in the search field.
- Select the dynamic light gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties** panel](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The dynamic light gizmo is an [entity](/hw-docs/Reference/core/Classes/Entity.md). All objects in a world are represented by entities. Entities have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Additionally, like the transformation, [**Color**](/hw-docs/Reference/core/Classes/Color.md) can be edited in the UI panel or controlled through scripting.

In the **Light** section, additional properties are available to customize and manage dynamic lights.

The **Enabled** toggle turns the light on or off.

The **Color** and **Intensity** fields let you configure the light’s appearance and intensity.

**Light Type** specifies the type of light sources such as **Point** (omnidirectional light) or **Spot** (cone-shaped light).

**Falloff Distance** specifies the decline in light intensity with distance.

**Spread** specifies the spread of spotlight, which is the width of the light beam.

For more information on the dynamic light gizmo properties, see [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo) and the [DynamicLightGizmo](/hw-docs/Reference/core/Classes/DynamicLightGizmo.md) API.

## Scripting

To control the gizmo through scripting, see the [DynamicLightGizmo](/hw-docs/Reference/core/Classes/DynamicLightGizmo.md) API.

## What’s next?

Now that you’ve been introduced to the dynamic light gizmo, further your learning with hands-on tutorials and guides:

* [Meta Horizon Worlds creator’s manual on the dynamic light gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#dynamic-light-gizmo)
* [Tutorial worlds on dynamic lights](/hw-docs/Tutorials/Economy%20world%20tutorial/Module%203%20-%20Configuring%20Gameplay%20Entities.md)
* [Material asset user guide](/hw-docs/desktop-editor/assets/material-asset-user-guide)