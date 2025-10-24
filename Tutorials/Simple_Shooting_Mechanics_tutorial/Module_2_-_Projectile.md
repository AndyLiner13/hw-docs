# Module 2 - Projectile

  
## Concept

 ![Image of the Projectile Launcher gizmo](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480488768_676362564901698_4344486746919645959_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=V0iDNf38OLEQ7kNvwEcMJTr&_nc_oc=AdkqQ5_Z_w7abNZXZU0d_aKNyZSwFZeVMAeAXLL1eKPN7vGQr13H6sHHaC7QHGnNDw4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kx-ptuZDAa3U6M41JXvIig&oh=00_Afd59Eu5Eni9hkCahECwBv...
...
# Module 2 - Projectile

  
## Concept
...
 In Meta Horizon Worlds, the Projectile Launcher gizmo is an entity that you can add to your world, which allows you to manage the
firing, tracking, and collisions of configurable projectiles. In the context of the Projectile Launcher gizmo, a projectile is a short-lived entity that is created and fired in a set direction.
• After a projectile collides with something, it is destroyed.
• Through TypeScript, we can detect when a projectile collides with something, and
courtesy of the Projectile Launcher gizmo, we have special events to which to
listen.
...
...
# Module 2 - Projectile
...
## Projectile Launcher gizmo

 In the above screenshot, the Projectile Launcher gizmo is attached to the end of
the gun entity. Tip: To locate entities in the world, you can search for them by name in the
Hierarchy panel. For this type of entity, the default name is ProjectileLauncher. When the ProjectileLauncher gizmo is selected, you can see a set of
projectile-related properties in the Properties panel:
• Projectile Preset: Select the type of projectile emitted from the launcher.
• Speed: Set the speed in meters/second Note: This property value is overridden in each of the gun scripts in this world.
• Player Collision: Select the player entities with which the projectile can collide.
• Object Collision: Select the non-player entities with which the projectile can collide.
• Static Collision: When enabled, the projectile issues a collision event when it collides with
...
...
# Module 2 - Projectile
...
## Projectile Launcher gizmo
...
objects that are neither a player nor an entity.
• Gravity: Set the acceleration due to gravity that is applied to a launched projectile. Note: This property value is overridden in each of the gun scripts in this world.
• Scale: You can modify the scale of the projectile as needed.
• Trail Length Scale: You can alter the length of the contrail of the projectile.
• Projectile Color: Set the color of the projectile.
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Script properties

 When the script is attached to the Projectile Launcher gizmo, the following
properties appear in the Properties panel. These must be specified:
• projectileLauncher : Projectile Launcher entity in the world with which this projectile type is
associated.
  • This property connects the script to the parent ProjectileLauncher object, since
"this" reference in the TypeScript applies to the emitted projectiles.
  • In code, the type of this property is Entity, which means that a user can select an object that is already in the world (an
entity) from the presented dropdown.
• objHitForceMultipler : Collision energy is measured in relation to mass and velocity of the
colliding objects. This property allows you to tune or exaggerate that calculation.
• objHitSFX : Audio entity in the world to play when the projectile hits an object.
• objHitVFX : Visual effect entity in the world to play when the projectile hits an object.
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Script properties
...
Tip: You can add your preferred audio and vfx entities to the world and select them
from these dropdowns to deploy them.
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Start method

 In the start() method, the code creates listeners for Horizon World events,
called CodeBlockEvents. These premade events are emitted when a fired projectile collides with
something else:
• CodeBlockEvents.OnProjectileHitEntity
• CodeBlockEvents.OnProjectileHitPlayer

 Example:  
```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnProjectileHitEntity,
  this.onProjectileHitEntity.bind(this),
);
```
 When the CodeBlockEvents.OnProjectileHitEntity event fires, then the local onProjectileHitEntity function fires, bound to the projectile (this), where a specific response to the event is defined.  
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Reacting to events

  
```
private onProjectileHitEntity(objectHit: Entity, position: Vec3, normal: Vec3, isStaticHit: boolean) {
  //When the projectiles hits an entity, we apply a multiplied force
  //based on the normal to the entity to push it away from the projectile.

  this.onHitGeneric(position, normal);

  if(isStaticHit) return; // Only apply force to dynamic objects

  console.log("projectile hit object");
  objectHit.as(PhysicalEntity)?.applyForceAtPosition(
    normal.mulInPlace(-1 * this.props.objHitForceMultipler),
    position,
    PhysicsForceMode.Impulse);
}

```
 Each of the private onProjectileHit functions addresses how the projectile affects entities of the specified type
when it collides. All functions log a message and then call the onHitGeneric
function, passing in:
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Reacting to events
...
• The position of the projectile when the collision fires, which maps to the point
of impact.
• The other parameter is the "normal" of the collision, basically what the
projectile’s trajectory was when it hit, but pointing towards where the projectile was
coming from.

 In the previous code snippet for onProjectileHitEntity, you may note the following:  
```
if(isStaticHit) return; // Only apply force to dynamic objects

objectHit
  .as(PhysicalEntity)
  ?.applyForceAtPosition(
    normal.mulInPlace(-1 * this.props.objHitForceMultipler),
    position,
    PhysicsForceMode.Impulse,
  );
```
 The above code applies force at the point of impact, based on the property objectHitForceMultiplier. This force multiplier is only applied to collisions with other objects;
players are unaffected by this multiplier, as it could be too disruptive to the VR
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Reacting to events
...
experience. In onHitGeneric, the script sets the position of the sound and particle FX to the point of
impact and plays them. This function is run for all types of collisions. Tip: You can add additional variations as needed to your own world. For example, a
Player impact may require a different audio effect, which requires adding a new
property. Or you may decide to insert health and hit point effects as part of
the onProjectileHitPlayer function.    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Reacting to events
...
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
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts
...
### Reacting to events
...
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 2 - Projectile
...
## Script: ProjectileScript.ts

 Attached to the Projectile Launcher is the ProjectileScript.ts script. This
script applies to the projectiles launched from the launcher. For example,
references to this apply to any projectile emitted from it.  
### Script properties
...
### Start method
...
### Reacting to events
...
...
# Module 2 - Projectile
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fsimple-shooting-mechanics-tutorial%2Fmodule-2-projectile%2F)
...
# Module 2 - Projectile

  
## Concept
...
## Projectile Launcher gizmo
...
## Script: ProjectileScript.ts
...
## Additional Links
...
      Learn
# Module 2 - Projectile
