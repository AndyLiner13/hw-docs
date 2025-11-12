Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-environment-gizmo

Learn

# Environment gizmo

The environment [gizmo](/hw-docs/Gizmos/About%20gizmos.md) is a helper tool that allows creators to control and customize the environment of a virtual world. The environment is enabled by the skydome feature, a dome-shaped visual that provides a simulated backdrop. The skydome feature has options to choose different textures, as well as allowing the customization of the environment, such as lighting and fog. Additionally, the Voice Over Internet Protocol or [VOIP setting](/hw-docs/Desktop%20editor/Settings/Player%20Settings%20Modification.md) is available to configure how players hear each other in the world.

**Note**: You have the option to create your custom skydome asset, import it, and deploy the skydome to Worlds. This process creates a new instance of the environment gizmo that’s mapped to the custom skydome asset. See [Preparing skydome maps for Worlds ingestion](/hw-docs/Desktop%20editor/Preparing%20Skydome%20Maps%20for%20Meta%20Horizon%20Worlds%20Ingestion.md) for details. Additionally, if you would like to consider using generative AI to create your skydome, see [Generative AI skybox generation tool](/hw-docs/Desktop%20editor/Generative%20AI%20tools/Generative%20AI%20Skybox%20Generation%20Tool.md) for more information.

## Access the environment gizmo

While you can access and use gizmos in the [VR tool](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the creator experience in the [desktop editor](/hw-docs/Get%20started/Install%20the%20desktop%20editor.md).

In the desktop editor, do the following to access the environment gizmo:

- In the desktop editor while in Build mode, select **Build** > **Gizmos** from the menu bar, search for “Environment” in the search field.
- Select the environment gizmo and drag it into the scene.
- You can now edit the new gizmo properties in the **Properties** panel.

## Properties

The following sections highlights the environment gizmo’s attributes and behavior in the [Properties](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#properties-pane) panel.

### Attributes

The environment gizmo is an entity. All objects in a world are represented by [entities](/hw-docs/Reference/core/Classes/Entity.md). Entities have their respective properties such as position, rotation, and scale.
In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Keep in mind that these fields have no effects on the environment gizmo’s behavior.

### Behavior

You can have multiple environment gizmos in the world, but only one can be active at a time and affect the world. Turning on the **Active** toggle of a particular environment gizmo activates its effects that you’ve configured while other environment gizmos remain inactive.

The skydome feature of the gizmo creates the background environment of a virtual world. It is a large, dome-shaped visual that surrounds the user, providing a backdrop that simulates various environments, such as the sky and landscapes. The skydome accounts for the largest visible part of the screen and influences the overall atmosphere and aesthetic of the environment.

There are two types of skydomes available, cubemap skydome and custom gradient skydome.

**Cubemap**: This type uses a pre-rendered cubemap, which is a 2D texture that represents a 3D environment. This setting allows you to select from a series of preset images to create the illusion of distant backgrounds to create an immersive and realistic atmosphere.

**Custom gradient**: This type allows you to define custom gradient backgrounds by selecting colors for the top, middle, and bottom of the skydome. You can adjust the color transitions and the brightness to create unique visual effects.

There are additional settings in the skydome feature that provides control over lighting and fog, enabling you to customize the lighting intensity, sky brightness, fog color and density.

For example, adjusting **Fog Density** lets you change how light spreads through the world. The higher the number, the denser the fog, and the harder it is to see objects at a distance.

**Show Grid** either shows or hides the floor grid. The grid is 64 square meters in size, with each tile representing one square meter. The grid can’t be edited, moved or selected, and doesn’t have a Properties panel, but it’s a solid surface onto which players and simulated objects can move around.

You can configure how players hear each other in the world under the **VOIP Settings** in the Properties panel, and through the [TypeScript API](/hw-docs/Reference/core/Type%20Aliases/VoipSetting.md). For additional information, see `setVoipSetting(setting)` in the [Player](/hw-docs/Reference/core/Classes/Player.md) class on how players interact with the environment gizmo.

## Scripting

The environment gizmo lets you configure the settings for a static environment. But to achieve a dynamic environment where, for example, the day transitions to night, use [object spawning and despawning](/hw-docs/Desktop%20editor/Objects/Object%20Spawning%20and%20Despawning.md). As the day moves from one phase to another, you spawn a new active environment gizmo and despawn the old one. Spawning and despawning can be achieved through [three different approaches](/hw-docs/Desktop%20editor/Objects/Object%20Spawning%20and%20Despawning.md#how-do-we-implement-this-feature-in-our-world): codeblocks, TypeScript, and TypeScript with SpawnController class. The recommended way is using the [SpawnController class](/hw-docs/Reference/core/Classes/SpawnController.md). See also [Implementing SpawnController](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md#implementing-spawncontroller).

To do a day-to-night cycle, the following outlines the steps:

- The world is set to daytime by default.
- You spawn an active afternoon environment gizmo, and the world becomes afternoon.
- When you want the world to be nighttime, spawn an active nighttime environment gizmo first, and then despawn the afternoon environment gizmo.

**Note**: Be aware of the following when despawning an active environment gizmo:

* If an active environment gizmo is deleted/despawned by a script in the Build mode, it will still affect the world.
* When using the VR tool, if an active environment gizmo is deleted by using the [Disk UI in Build mode](/hw-docs/VR%20tools/Getting%20started/Use%20your%20controllers%20in%20Build%20Mode%20of%20Meta%20Horizon%20Worlds.md), deleting the gizmo will remove its effects on the world. Because of this, you will know what your worlds look like when they’re published. In the VR tool, the Disk UI is the primary user interface when creators are in the Build mode. The Disk UI provides a primary set of tools that you can access to build and edit worlds when using the VR tool.

## What’s next?

Now you’ve been introduced to the environment gizmo, further your understanding with the following topics on spawning and despawning.

* [Example uses of spawning](/hw-docs/Desktop%20editor/Assets/Asset%20Spawning%20Reference.md#example-uses-of-spawning)
* [Asset spawning and despawning example](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md#asset-spawning-and-despawning-example)
* [Meta Horizon Creator Program creator manual on environment gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#environment-gizmo)
* [Meta Horizon Creator Program creator manual on spawning](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#spawning)
* [Meta Horizon Creator Program creator manual on VOIP settings](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#voip-settings)