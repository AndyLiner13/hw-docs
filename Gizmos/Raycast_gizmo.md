# Raycast gizmo

## Limitations

 Raycasting too often in a short period of time can hurt performance.  

## Access the raycast gizmo

 In the Meta Horizon Worlds desktop editor, do the following to access the
raycast gizmo:
1.  In the desktop editor while in Build mode, select Build > Gizmos from the menu bar, search for "Raycast" in the search field.
2.  Select Raycast to drag it into the scene.
3.  You can now edit the new gizmo properties in the Properties panel.

  

# Raycast gizmo

## Raycast gizmo properties

 Whenever a collision event occurs when the ray is projected into the world, the
information returned about the object depends on the configuration in Properties. You can filter collision events by configuring Collide With, or by adding an additional condition when using Object Tagged. ![Raycast gizmo properties panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/491864717_702686125602675_3809255897420655060_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=bkBB7kLnIy8Q7kNvwGIZ_62&_nc_oc=AdnZBhfpJM3hH1YMY32GhQiMS0il-fKsiWFhg4muHZFCGpZhg7jYnQ8XZjdqF8RgTAs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y
 In the Collide With field, you can choose between Players, Object Tagged or Both. Remember that whenever Object Tagged is chosen, the [tag](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#properties) needs to be provided in the Object Tag field. The raycast will then return hits for objects with matching tags. The following lists the types of target that the raycast will return depending
on the level of filtering you've configured for your collision events:
•  If you choose Players, the raycast returns a hit when it collides with a player.
•  If you choose Object Tagged, the raycast returns a hit when it collides with an object with the matching
tag.
•  If you choose Both, the raycast returns a hit when it collides with both players and objects with
matching tags.

 The Raycast Distance field specifies the maximum distance, in meters, within which the raycast can
register a hit. If Stop On First Hit is enabled when the ray collides with an object that does not have the tag
specified in Object Tagged, the raycast registers the hit as a miss by returning a static empty hit. This
simulates how collision events would naturally occur, and the ray would appear
as blocked. If Stop On First Hit is disabled, the ray will continue within its maximum distance until it hits an
object that satisfies the specified conditions. You can also use [Raycast gizmo API](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo) to define the properties.
|  |
|  |
| Collide With | Players, Objects Tagged, or Both | Sets which collision layer(s) the raycast will interact with. |
| Object Tag | string | When the Collide With property is Objects Tagged or Both this specifies which entity tag the raycast will activate on. |
| Raycast Distance | number | The maximum distance, in meters, that the ray should travel before concluding it didn't hit anything. |
| Stop On First Hit | boolean | When enabled, the raycast stops upon colliding with the first object. |

 Raycast gizmos are referenced using the [as()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity#methods) method, for example:  `    `const` laserGizmo `=` `this`.`props`.`laserProjector`.`as`(`RaycastGizmo`);` The result of the raycast collision is [RaycastHit](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasthit) with the [target types](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasttargettype), Entity, Player, and Static, during the raycast collision.  

# Raycast gizmo

## What's next?

 Try the following tutorial worlds with code samples and related guides:
•  [Simple shooting mechanics](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/simple-shooting-mechanics-tutorial/module-4-laser-gun#raycast-gizmo)
•  [Use tap inputs to interact with a keypad](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/developing-for-web-and-mobile-players-tutorial/module-7c-use-tap-inputs-to-interact-with-a-keypad)
•  [Meta Horizon Creator Program creators manual](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#raycast-gizmo)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8.EqOQ.svg)


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
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Raycast gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fraycast-gizmo%2F)

# Raycast gizmo

 The raycast gizmo is one of many gizmos in Meta Horizon Worlds that's designed
to enhance the creator's ability to build interactive and dynamic worlds. This
topic focuses on the experience of using a raycast gizmo in the [desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/install-desktop-editor), introduces the gizmo's properties and expected behavior, and then highlights
the [Raycast gizmo APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo). First of all, raycasting is the act of projecting a virtual laser beam from a
location towards a direction and finding the first thing that it collides with
such as a player or an object. If a collision is detected, information about the
collision is returned. The act of casting a ray into the world is called raycast. To cast a ray in Meta Horizon Worlds, use a raycast gizmo that projects a beam
into the world. Whenever the ray collides with an object, information about the
object is returned. While commonly used in shooting games, raycast gizmos can
also be used for other purposes such as determining line of sight.  

## Limitations

## Access the raycast gizmo

## Raycast gizmo properties

## What's next?

## Additional Links

      Learn
# Raycast gizmo
