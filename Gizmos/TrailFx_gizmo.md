# TrailFx gizmo

## Limitations

 There are [limitations](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo) to the TrailFx gizmo. Using it sparingly to avoid [performance](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices) issues is recommended.  
 

## Access the TrailFx gizmo

 While you can access and configure the gizmos in the [VR tool](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), the following steps show you how to access the TrailFx gizmo from the desktop
editor and add it to the [scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
1.  In the desktop editor while in the Build mode, select Build > Gizmos from the menu bar, search for "trailfx" in the search field.
2.  Select the TrailFx gizmo and drag it into the scene.
3.  You can now edit the new gizmo properties in the [Properties panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#properties-pane).

  

# TrailFx gizmo

## Properties

 The TrailFx gizmo is an entity. All objects in a world are represented by
entities. [Entities](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) have their respective properties such as position, rotation, and scale. In the Properties panel, you can edit the gizmo's transformation fields to configure its Position, Rotation, and Scale. In the Visual section, additional properties are available to customize the TrailFx gizmo. Play on Start controls whether the TrailFx gizmo auto-starts the effect when the world
starts. Length, Width, Start Color, End Color and Preset control the appearance and style of the TrailFx gizmo. The Preset dropdown menu allows you to select from three types of trails: Default, Simple or Tapered. Preview allows creators to see how the trail effect while still in the [Build Mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes). This feature is particularly useful for fine-tuning the visual aspects of the
trail effect during the building phase. Click Play to start the preview. Click Stop to stop the preview. Note: For more information on the TrailFx gizmo properties, see the [MHCP creator's manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo). The following image shows how the Preview property works while you're in the [Build mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes). Once the TrailFx gizmo is configured with a simple trail in colors of purple
and green, click Play next to Preview. You can [move](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/object-tools#move) the gizmo manually to see the trailing effect. ![The TrailFx gizmo configured with a simple trail in colors of purple and green
in the Build mode](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/506212074_739691291902158_3023337851867814073_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=DB1iHhACxZcQ7kNvwHT5xEC&_nc_oc=Adk9i1mh5chr-GBbXpljos28Fc7Sub0_pv5F73JWcEMMzB9kRNS9kOnhb1rhKX1MgZA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=V0FecZ8MElEWLHwHTObR9A&oh=00_Aff2XOK1lFNJeaM7erj3kCBekB2IB9mfaOtRq...
 The following images show the TrailFx gizmo at work while you're in the [Preview mode](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/operational-modes) with Play on Start turned on. The shape and the color of the trail are configured as Tapered with colors of purple and pink. Note: To reproduce what you see in the image below, create a world by first
following the [Batting cage tutorial](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/batting-cage-tutorial) and then add a TrailFx gizmo as a [child object](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/object-grouping) of the ball in the [Hierarchy panel](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/hierarchy-window-overview). [Adjust the position](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/object-tools#move) of the TrailFx gizmo so that it appears to be trailing the ball. ![The TrailFx gizmo configured as the child of the ball in Hierarchy](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506050919_739691298568824_59810766670991...
 ![The TrailFx gizmo in the Preview mode](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/506407852_739691295235491_2590837823088924789_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=3YzHQqKIYZIQ7kNvwEKspYK&_nc_oc=AdljhQYFxZdnUEtXVWIzJ__vlUBTn38jY68x_ltnbptY8UlAV3jsSj0FRqmf2M09czc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=V0FecZ8MElEWLHwHTObR9A&oh=00_AffJEfYzWr0pAtL9zX-HEVlq47...

# TrailFx gizmo

## Scripting

 To customize the TrailFx gizmo through scripting, see the [TrailGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_trailgizmo) API.  
 

# TrailFx gizmo

## What's next?

 Now that you've been introduced to the TrailFx gizmo, further your learning with
related developer guides:
• [Meta Horizon Creator Program's creator manual on the TrailFx gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#trailfx-gizmo)
• [Batting cage](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/batting-cage-tutorial)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon/)
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
[Privacy Policy](https://www.meta.com/legal/privacy/policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# TrailFx gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Ftrailfx-gizmo%2F)

# TrailFx gizmo

 The TrailFx [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) is a tool designed to simplify the addition of visual effects, specifically
trailing effects to moving objects in a virtual world. When the TrailFX gizmo is
active, it creates a visual trail that follows the gizmo as it moves. This gizmo
is intended to enhance the visual effects, making worlds more immersive and
engaging.  
## Limitations

## Access the TrailFx gizmo

## Properties

## Scripting
 
## What's next?

## Additional Links

      Learn
# TrailFx gizmo
