# Navigation volume gizmo

## Access the navigation volume gizmo

 Accessing the navigation volume gizmo and placing it in the world are some of
the initial steps in creating a navigation mesh. For comprehensive tutorials and
conceptual guides on using the navigation volume gizmo as part of navigation mesh
generation, see the NPC section that has a detailed tutorial on how to access
and then [configure locomotion navigation volumes](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/setting-up-npcs-with-navigation#configuring-locomotion-navigation-volumes) using the navigation volume gizmo. See also [Adding a navigation volume gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#adding-a-navigation-gizmo).  

# Navigation volume gizmo

## Properties

 The navigation volume gizmo is an entity. All objects in a world are represented
by entities. [Entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo's transformation fields to configure its Position, Rotation, and Scale. The Volume Type dropdown menu controls whether the navigation volume, the area that the
character can move, should be included or excluded from the navigation profile. The Navigation Profile dropdown menu controls the navigation profile that the gizmo will use. For additional descriptions of the navigation volume gizmo properties, see [MHCP's creator manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#navigation-volume).  

# Navigation volume gizmo

## Scripting

 After the navigation profile and its navigation volume are defined, you can, for
example, reference them from TypeScript to enable your NPC to use the
navigation. See [Navigation APIs for scripted avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs#navigation-apis-for-scripted-avatar-npcs) You can also use the [NavMesh TypeScript API](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) to get references to navigation mesh instances in order to perform path-finding
calculations at runtime. See [Using the NavMesh APIs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#using-the-navmesh-apis)  

# Navigation volume gizmo

## What's next?

 Now that you've been introduced to the navigation volume gizmo, further your
learning with tutorials and related developer guides:
• [Tutorial worlds on navigation volumes](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-10-npc-system)
• [Tutorial worlds on scripted avatar NPC](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/scripted-avatar-npc-tutorial/module-2-overview#navigation-and-locomotion)
• [Get started with scripted avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/getting-started-with-scripted-avatar-npcs)
• [Build Navigation for Scripted Avatar NPCs](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs)
• [Meta Horizon Creator Program's creator manual on the navigation volume gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#navigation-volume)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Navigation volume gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fnavigation-volume-gizmo%2F)

# Navigation volume gizmo

 To [build a navigation mesh](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation), the [navigation volume gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-gizmo), a helper tool, is used to define the area where the characters can move in the
virtual world. Additionally, a [navigation profile](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-profile) that describes the characteristics of the navigation mesh that each agent or
character traverses also needs to be created and configured. Once the [gizmo and the profiles are set up and linked](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/scripted-avatar-npcs/build-navigation-for-scripted-avatar-npcs#navigation-entities), the [navigation meshes can be built](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#building-the-navigation-meshes) or baked for each navigation profile. Scripts are attached to characters to
drive their behaviors when traversing navigation meshes.  

## Access the navigation volume gizmo

## Properties

## Scripting

## What's next?

## Additional Links

      Learn
# Navigation volume gizmo
