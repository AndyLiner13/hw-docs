Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/static-light-gizmo

# Static light gizmo

The static light [gizmo](/hw-docs/code-blocks-and-gizmos/about-gizmos) is a tool used to light scenes. Static lights do not move or change during runtime. The static light gizmo offers various shapes and allows customization of color and intensity. This gizmo is useful for creators who want to implement lighting in their worlds without the performance overhead associated with dynamic lighting.

The following image shows the static light gizmo, the red cube, lighting an object in the [Build mode](/hw-docs/desktop-editor/getting-started/user-interface/operational-modes).

**Note**: An [environment gizmo](/hw-docs/code-blocks-and-gizmos/use-the-environment-gizmo) is added to the world where a night skydome is applied.

![The static light gizmo lighting an object in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/505590096_738224345382186_9005774872030246077_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=cgT0OPMLpGsQ7kNvwGThKlH&_nc_oc=AdmvgzaQsYE_tReJRoKLIeFDt8XuhxJ-J8xzSFZl1lROV4bnDqOOoJ_9KSMrTN-AgfQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pIdl_ng3BQyIy57rA9QAuw&oh=00_AfiZ6qgeiySWpd9wtSI-dXB9WFZmObwK64G-f0iXRNYv4g&oe=692C0D6E)

The following image shows the same static light gizmo lighting an object in the [Preview mode](/hw-docs/desktop-editor/getting-started/user-interface/operational-modes).

**Note**: The geometry of the light, the red cube, is hidden in the Preview mode.

![The static light gizmo lighting an object in the Preview mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/505424288_738224342048853_1656212214900149301_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=-75NhFgVxf4Q7kNvwHEb7LN&_nc_oc=AdlIVInnSKXyGZ_XtG75Q6s_i7zSpD0ybV-fqhEgNpuOFEgNxUmIDKNtMLnadaZx6p4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pIdl_ng3BQyIy57rA9QAuw&oh=00_AfhQK0ecF77xvbUAgxyoeA5GrGZV_jjB4zXKKFa5LetFJw&oe=692C05F6)

## Access the static light gizmo

While you can access and configure the static light gizmos in the [VR tool](/hw-docs/custom-model-import/user-guides/static-light-gizmos-user-guide), the following steps show you how to access the static light gizmo from the desktop editor and add it to the [scene pane](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “static” in the search field.
- Select the static light gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [Properties panel](/hw-docs/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane).

## Properties

The static light gizmo is an entity. All objects in a world are represented by entities. [Entities](/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Light** section, additional properties are available to customize and manage static lighting.

The **Enabled** toggle turns the light on or off.

**Shape** controls the shape of the light. For example, **Cuboid** and **Ellipsoid** are omnidirectional, while **Disk** and **Rectangle** have a visual directional arrow.

The **Color** and **Intensity** fields let you configure the light’s color and intensity.

For more information on the static light gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#static-light-gizmo).

## What’s next?

Now that you’ve been introduced to the static light gizmo, continue your learning with hands-on tutorials, and more related developer guides:

* [Static light gizmos user guide](/hw-docs/custom-model-import/user-guides/static-light-gizmos-user-guide)
* [Meta Horizon Creator Program’s creator manual on the static light gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#static-light-gizmo)