Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/navigation-volume-gizmo

# Navigation volume gizmo

To [build a navigation mesh](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation), the [navigation volume gizmo](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-gizmo), a helper tool, is used to define the area where the characters can move in the virtual world. Additionally, a [navigation profile](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-profile) that describes the characteristics of the navigation mesh that each agent or character traverses also needs to be created and configured. Once the [gizmo and the profiles are set up and linked](/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs#navigation-entities), the [navigation meshes can be built](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#building-the-navigation-meshes) or baked for each navigation profile. Scripts are attached to characters to drive their behaviors when traversing navigation meshes.

## Access the navigation volume gizmo

Accessing the navigation volume gizmo and placing it in the world are some of the initial steps in creating a navigation mesh. For comprehensive tutorials and conceptual guides on using the navigation volume gizmo as part of navigation mesh generation, see the NPC section that has a detailed tutorial on how to access and then [configure locomotion navigation volumes](/horizon-worlds/learn/documentation/desktop-editor/npcs/setting-up-npcs-with-navigation#configuring-locomotion-navigation-volumes) using the navigation volume gizmo. See also [Adding a navigation volume gizmo](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#adding-a-navigation-gizmo).

## Properties

The navigation volume gizmo is an entity. All objects in a world are represented by entities. [Entities](/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the **Properties** panel, you can edit the gizmo’s transformation fields to configure its **Position**, **Rotation**, and **Scale**.

The **Volume Type** dropdown menu controls whether the navigation volume, the area that the character can move, should be included or excluded from the navigation profile.

The **Navigation Profile** dropdown menu controls the navigation profile that the gizmo will use.

For additional descriptions of the navigation volume gizmo properties, see [MHCP’s creator manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#navigation-volume).

## Scripting

After the navigation profile and its navigation volume are defined, you can, for example, reference them from TypeScript to enable your NPC to use the navigation. See [Navigation APIs for scripted avatar NPCs](/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs#navigation-apis-for-scripted-avatar-npcs)

You can also use the [NavMesh TypeScript API](/horizon-worlds/reference/2.0.0/navmesh_navmesh) to get references to navigation mesh instances in order to perform path-finding calculations at runtime. See [Using the NavMesh APIs](/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#using-the-navmesh-apis)

## What’s next?

Now that you’ve been introduced to the navigation volume gizmo, further your learning with tutorials and related developer guides:

* [Tutorial worlds on navigation volumes](/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-10-npc-system)
* [Tutorial worlds on scripted avatar NPC](/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-2-overview#navigation-and-locomotion)
* [Get started with scripted avatar NPCs](/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs)
* [Build Navigation for Scripted Avatar NPCs](/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs)
* [Meta Horizon Creator Program’s creator manual on the navigation volume gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#navigation-volume)