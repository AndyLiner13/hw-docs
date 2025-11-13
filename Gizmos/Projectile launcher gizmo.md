Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/projectile-launcher-gizmo

Learn

# Projectile launcher gizmo

The projectile launcher [gizmo](/hw-docs/Gizmos/About%20gizmos.md) allows creators to launch objects or projectiles from a specific point in their world. With options to configure properties such as size and speed as well as implementing more customized launching mechanism through scripting, this gizmo can be used to create a variety of interactive and immersive experiences, such as [shooting games](/hw-docs/Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%201%20-%20Setup.md) and [obstacle courses](/hw-docs/Tutorials/Developing%20for%20Web%20and%20Mobile%20Players%20tutorial/Module%206%20-%20Room%20A-%20The%20Magic%20Wand.md).

## Limitations

There are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#projectile-launcher-gizmo) while using the projectile launcher gizmo. Be aware of the following:

* Collision detection is limited by the projectile speed.
* When a projectile collides with an entity, whether the projectile collision happens on the group or on the child depends on how the projectile is combined with other objects. Typically, a collection of entities is organized through a [parent-child hierarchy or group](/hw-docs/Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md#empty-objects). See also [Empty objects and groups](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#empty-object-and-groups).
* The number of active projectiles per launcher is limited.

## Access the projectile launcher gizmo

While you can access and use gizmos in the VR tool, this topic focuses on the creator experience in the desktop editor.

- In the desktop editor, do the following to access the projectile launcher gizmo:
- In the desktop editor while in the Build mode, select **Build** > **Gizmos** from the menu bar, search for “projectile” in the search field.
- Select the projectile launcher gizmo and drag it into the scene.
  You can now edit the new gizmo properties in the Properties panel.

## Properties

The properties of the projectile launcher gizmo can be configured in the **Properties** panel of the desktop editor or through [scripting](/hw-docs/Scripting/Scripting%20using%20TypeScript.md). The following sections highlight the projectile launcher gizmo’s attributes and behavior in the Properties panel.

### Attributes

The projectile launcher gizmo is an entity. All objects in a world are represented by entities. [Entities](/hw-docs/Reference/core/Classes/Entity.md) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**. Additionally, like the transformation, [**Color**](/hw-docs/Reference/core/Classes/Color.md) can be edited in the UI panel or controlled through scripting.

### Behavior

[Properties and variables](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#properties-and-variables) that define the behavior and are specific to the projectile launcher gizmo are listed under **Properties** > **Behavior** in the UI panel. For the [projectile launcher gizmo](/hw-docs/Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%202%20-%20Projectile.md#projectile-launcher-gizmo), physics properties are notable. For example, configure **Gravity** for gravity, and **Player Collision**, **Object Collision**, and **Static Collision** for collision detection when the projectiles collide with other entities such as players, objects, or static objects.

Additionally, you can choose from different types of projectiles, such as spheres, cubes, or grenade in **Projectile Preset**. Configure projectile launch speed in **Speed** and color in **Projectile Color**. To make the projectiles easier to see, adjust **Scale** and **Trail Length Scale** based on your preferences.

#### Projectile Pool Size

The **Projectile Pool Size** property controls the number of projectile instances that are pre-created and pooled for reuse by the launcher. The number of outstanding, in-flight projectiles cannot exceed the projectile pool size. This setting affects performance as well, since a larger pool size allocates more memory.

**When to adjust:** Increase the pool size for projectile launcher gizmos that need many outstanding projectiles at the same time (such as machine guns or shotguns). Decrease it for slower weapons (such as single-shot rifles) to conserve resources.

Note

If your projectile launcher entity is a child of an attachable and you're using the "All Objects Except Launcher's Group" option for Object Collision, the launcher will only ignore object colisions for the children of the attachable entity.

## Scripting

If customization is required with the projectile launcher gizmo, scripting is the recommended approach, see [`ProjectileLauncherGizmo`](/hw-docs/Reference/core/Classes/ProjectileLauncherGizmo.md) and [`LaunchProjectileOptions`](/hw-docs/Reference/core/Type%20Aliases/LaunchProjectileOptions.md) APIs.

For example, to customize certain behavior in reaction to occurrences in the world, a collection of built-in [`CodeBlockEvents`](/hw-docs/Reference/core/Variables/CodeBlockEvents.md) are available to listen for events. For projectile launchers, some common events to listen are projectile launch `OnProjectileLaunched`, and collisions `OnProjectileHitEntity` or `OnProjectileHitPlayer`. See also [`CodeBlockEvent`](/hw-docs/Reference/core/Classes/CodeBlockEvent.md).

## What’s next?

Now you’ve been introduced to the projectile launcher gizmo, further your learning with hands-on tutorials, tutorial worlds with completed samples, and developer guides:

* [Create your first world tutorial on projectile launcher gizmo](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#section-6-add-a-projectile-launcher-to-the-rifle)
* [Simple shooting mechanics on projectile](/hw-docs/Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%202%20-%20Projectile.md)
* [Tutorial worlds for web and mobile on the magic wand](/hw-docs/Tutorials/Developing%20for%20Web%20and%20Mobile%20Players%20tutorial/Module%206%20-%20Room%20A-%20The%20Magic%20Wand.md#set-up-a-grabbable-object-that-shoots-projectiles)
* [Meta Horizon Worlds creator’s manual on projectile launcher gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#projectile-launcher-gizmo)
* [Batting cage](/hw-docs/get-started/batting-cage-tutorial)
* [TypeScript components, properties, and variables](/hw-docs/Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#gizmos).
* [Physics basics](/hw-docs/VR%20tools/SFX/Use%20physics%20and%20animation%20in%20Meta%20Horizon%20Worlds.md#physics-basics)