Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/trailfx-gizmo

# TrailFx gizmo

The TrailFx [gizmo](/hw-docs/Gizmos/About%20gizmos.md) is a tool designed to simplify the addition of visual effects, specifically trailing effects to moving objects in a virtual world. When the TrailFX gizmo is active, it creates a visual trail that follows the gizmo as it moves. This gizmo is intended to enhance the visual effects, making worlds more immersive and engaging.

## Limitations

There are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo) to the TrailFx gizmo. Using it sparingly to avoid [performance](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) issues is recommended.

## Access the TrailFx gizmo

While you can access and configure the gizmos in the [VR tool](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the TrailFx gizmo from the desktop editor and add it to the [scene pane](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “trailfx” in the search field.
- Select the TrailFx gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The TrailFx gizmo is an entity. All objects in a world are represented by entities. [Entities](/hw-docs/Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Visual** section, additional properties are available to customize the TrailFx gizmo.

**Play on Start** controls whether the TrailFx gizmo auto-starts the effect when the world starts.

**Length**, **Width**, **Start Color**, **End Color** and **Preset** control the appearance and style of the TrailFx gizmo. The **Preset** dropdown menu allows you to select from three types of trails: **Default**, **Simple** or **Tapered**.

**Preview** allows creators to see how the trail effect while still in the [Build Mode](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). This feature is particularly useful for fine-tuning the visual aspects of the trail effect during the building phase. Click **Play** to start the preview. Click **Stop** to stop the preview.

**Note**: For more information on the TrailFx gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo).

The following image shows how the **Preview** property works while you’re in the [Build mode](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). Once the TrailFx gizmo is configured with a simple trail in colors of purple and green, click **Play** next to **Preview**. You can [move](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) the gizmo manually to see the trailing effect.

![The TrailFx gizmo configured with a simple trail in colors of purple and green in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/506212074_739691291902158_3023337851867814073_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=CMp9OgzHGJcQ7kNvwFZCOse&_nc_oc=Adk7hZ-RGx0O7FLpxivyXNHx3QDvQcOFVGxV_UaoDzqtdCiq19pO-NlgGsGKB5zuN1Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=iOQpr2tvho5Je9e93pjUvw&oh=00_Afi6WrnLP-cpBTCr-JMud7K8h7TCE3GL_uMV2b-qHGu4Fg&oe=6930A149)

The following images show the TrailFx gizmo at work while you’re in the [Preview mode](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) with **Play on Start** turned on. The shape and the color of the trail are configured as **Tapered** with colors of purple and pink.

**Note**: To reproduce what you see in the image below, create a world by first following the [Batting cage tutorial](/hw-docs/Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md) and then add a TrailFx gizmo as a [child object](/hw-docs/Desktop%20editor/Objects/Object%20hierarchy%20and%20groups.md) of the ball in the [**Hierarchy** panel](/hw-docs/Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md). [Adjust the position](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) of the TrailFx gizmo so that it appears to be trailing the ball.

![The TrailFx gizmo configured as the child of the ball in Hierarchy](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506050919_739691298568824_5981076667099177757_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=41ROZJ_oAOQQ7kNvwFHNiBH&_nc_oc=AdmqNK80XMl6rjVxl0bgBJgAts3MZ95vMTQm5VK4yhx3t5OJxCe7ddwctUgh1kGt_kY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=iOQpr2tvho5Je9e93pjUvw&oh=00_AfhlaMU7YRcw1mjNg6Q3UOFjF0qx6nkeevs0UkpbmtxveA&oe=6930AFDD)

![The TrailFx gizmo in the Preview mode](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506407852_739691295235491_2590837823088924789_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=8R99dsh0UyIQ7kNvwHBgxxY&_nc_oc=AdmhgAoeu4Zy35o9dLCRh9ylPwJW9KMgcT1iE8FCMmr9CM9FAsyTJe-ZRjzSHnF_BHI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=iOQpr2tvho5Je9e93pjUvw&oh=00_Afhzpz64S8dGAih9iltKOWlgC58AN4e86_F-XqLAk_GYMA&oe=6930BF2B)

## Scripting

To customize the TrailFx gizmo through scripting, see the [TrailGizmo](/hw-docs/Reference/core/Classes/TrailGizmo.md) API.

## What’s next?

Now that you’ve been introduced to the TrailFx gizmo, further your learning with related developer guides:

* [Meta Horizon Creator Program’s creator manual on the TrailFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo)
* [Batting cage](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/batting-cage-tutorial)