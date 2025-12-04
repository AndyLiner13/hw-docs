Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/trailfx-gizmo

# TrailFx gizmo

The TrailFx [gizmo](/hw-mcp-tools/documentation/hw-docs/Gizmos/About%20gizmos.md) is a tool designed to simplify the addition of visual effects, specifically trailing effects to moving objects in a virtual world. When the TrailFX gizmo is active, it creates a visual trail that follows the gizmo as it moves. This gizmo is intended to enhance the visual effects, making worlds more immersive and engaging.

## Limitations

There are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo) to the TrailFx gizmo. Using it sparingly to avoid [performance](/hw-mcp-tools/documentation/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) issues is recommended.

## Access the TrailFx gizmo

While you can access and configure the gizmos in the [VR tool](/hw-mcp-tools/documentation/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), the following steps show you how to access the TrailFx gizmo from the desktop editor and add it to the [scene pane](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).

- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “trailfx” in the search field.
- Select the TrailFx gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the [**Properties panel**](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane).

## Properties

The TrailFx gizmo is an entity. All objects in a world are represented by entities. [Entities](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

In the **Visual** section, additional properties are available to customize the TrailFx gizmo.

**Play on Start** controls whether the TrailFx gizmo auto-starts the effect when the world starts.

**Length**, **Width**, **Start Color**, **End Color** and **Preset** control the appearance and style of the TrailFx gizmo. The **Preset** dropdown menu allows you to select from three types of trails: **Default**, **Simple** or **Tapered**.

**Preview** allows creators to see how the trail effect while still in the [Build Mode](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). This feature is particularly useful for fine-tuning the visual aspects of the trail effect during the building phase. Click **Play** to start the preview. Click **Stop** to stop the preview.

**Note**: For more information on the TrailFx gizmo properties, see the [MHCP creator’s manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo).

The following image shows how the **Preview** property works while you’re in the [Build mode](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md). Once the TrailFx gizmo is configured with a simple trail in colors of purple and green, click **Play** next to **Preview**. You can [move](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) the gizmo manually to see the trailing effect.

![The TrailFx gizmo configured with a simple trail in colors of purple and green in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/506212074_739691291902158_3023337851867814073_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=RY5i--VkWDwQ7kNvwHlPlkw&_nc_oc=AdktV27yPBl0sZ-msYz4ckl_4-N8M-ftQ3V6BSecVt5byJ57vrmlL7s1v82uVoyeH9A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=qq0kOxCiTuzkyvMkZo8caQ&oh=00_AflIcYEUi9SHZbIHOiOU_39z_6CNkZzuaMwgU2K-_8tkvQ&oe=694BE049)

The following images show the TrailFx gizmo at work while you’re in the [Preview mode](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Build%20and%20Preview%20Modes.md) with **Play on Start** turned on. The shape and the color of the trail are configured as **Tapered** with colors of purple and pink.

**Note**: To reproduce what you see in the image below, create a world by first following the [Batting cage tutorial](/hw-mcp-tools/documentation/hw-docs/Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md) and then add a TrailFx gizmo as a [child object](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Objects/Object%20hierarchy%20and%20groups.md) of the ball in the [**Hierarchy** panel](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md). [Adjust the position](/hw-mcp-tools/documentation/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#move) of the TrailFx gizmo so that it appears to be trailing the ball.

![The TrailFx gizmo configured as the child of the ball in Hierarchy](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506050919_739691298568824_5981076667099177757_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=KErvjcy_e6kQ7kNvwGu4FGx&_nc_oc=Adm5eFZ5pXNjLyjqRevfWqfHdyOJXA87M0PgYf6lZLP1EqHaM192oCy2wOMzgmSqRVQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=qq0kOxCiTuzkyvMkZo8caQ&oh=00_AfkfqFtQmihgaYOfoOfT266wDqb7WbpYRK2OFe8xZnKGZA&oe=694BB69D)

![The TrailFx gizmo in the Preview mode](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506407852_739691295235491_2590837823088924789_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=YiaKzaZmJnsQ7kNvwE6LxvC&_nc_oc=AdmLt8V6Y1_BWQZqmMAWpoIki4s2CP5WntZ10wxHAXhROmdVvwBMeu74ogHFRg3yRqo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=qq0kOxCiTuzkyvMkZo8caQ&oh=00_AfnDD59lumZGKBBcDYSdUXJgO8rnTVjYePi-MjfEgw6yYg&oe=694BC5EB)

## Scripting

To customize the TrailFx gizmo through scripting, see the [TrailGizmo](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/TrailGizmo.md) API.

## What’s next?

Now that you’ve been introduced to the TrailFx gizmo, further your learning with related developer guides:

* [Meta Horizon Creator Program’s creator manual on the TrailFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo)
* [Batting cage](/hw-mcp-tools/documentation/hw-docs/Tutorials/Adding%20and%20manipulating%20objects%20tutorial.md)