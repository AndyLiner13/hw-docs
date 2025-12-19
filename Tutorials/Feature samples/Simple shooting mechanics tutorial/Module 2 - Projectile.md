Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/simple-shooting-mechanics-tutorial/module-2-projectile

# Module 2 - Projectile

## Concept

<details>
<summary>Image of the Projectile Launcher gizmo</summary>

<p></p>

[Image of the Projectile Launcher gizmo](../../../image_data/6879096da2d95b67fea379f6399751342e245aa67d9eea4c0ab2d6141b8a74fe.md)

### Overview
This image depicts a 3D modeling environment within a software interface, likely a game development tool. The central area shows a 3D scene with a gun model highlighted in blue wireframe. The left panel displays a hierarchical list of objects, while the right panel contains properties related to the selected object ("ProjectileLauncher"). The bottom section includes a console with messages and system indicators.

### Key Elements
- **Central Scene**: A 3D model of a gun with a blue wireframe highlighting its structure. The word "Gun" is prominently displayed on the model.
- **Left Panel**: A hierarchical list showing various components of the gun model, such as "SpawnPoint," "LaserPoint," "LaserSight," and "ProjectileLauncher." The "ProjectileLauncher" is highlighted in blue.
- **Right Panel**: Contains properties related to the "ProjectileLauncher" object, including debug data, generic entity data, script instance data, behavior settings, and attributes.
- **Bottom Console**: Displays messages and system indicators, including a warning about script source maps needing reset.

### Visual Flow / Relationships
The most prominent visual element is the 3D model of the gun in the central area. The hierarchy list on the left provides context for the model's components, while the properties panel on the right offers detailed information about the selected object. The console at the bottom provides feedback and system status.

</details>

<p></p>



In Meta Horizon Worlds, the **Projectile Launcher gizmo** is an entity that you can add to your world, which allows you to manage the firing, tracking, and collisions of configurable projectiles.

In the context of the Projectile Launcher gizmo, a **projectile** is a short-lived entity that is created and fired in a set direction.

* After a projectile collides with something, it is destroyed.
* Through TypeScript, we can detect when a projectile collides with something, and courtesy of the Projectile Launcher gizmo, we have special events to which to listen.

## Projectile Launcher gizmo

In the above screenshot, the Projectile Launcher gizmo is attached to the end of the gun entity.

**Tip**: To locate entities in the world, you can search for them by name in the Hierarchy panel. For this type of entity, the default name is **ProjectileLauncher**. When it is found, right-click the entry in the Hierarchy panel and select **Focus on selection**.

When the ProjectileLauncher gizmo is selected, you can see a set of projectile-related properties in the Properties panel:

* **Projectile Preset**: Select the type of projectile emitted from the launcher.
* **Speed**: Set the speed in meters/second
  **Note**: This property value is overridden in each of the gun scripts in this world.
* **Player Collision**: Select the player entities with which the projectile can collide.
* **Object Collision**: Select the non-player entities with which the projectile can collide.
* **Static Collision**: When enabled, the projectile issues a collision event when it collides with objects that are neither a player nor an entity.
* **Gravity**: Set the acceleration due to gravity that is applied to a launched projectile.
  **Note**: This property value is overridden in each of the gun scripts in this world.
* **Scale**: You can modify the scale of the projectile as needed.
* **Trail Length Scale**: You can alter the length of the contrail of the projectile.
* **Projectile Color**: Set the color of the projectile.

## Script: ProjectileScript.ts

Attached to the Projectile Launcher is the ProjectileScript.ts script. This script applies to the projectiles launched from the launcher. For example, references to **this** apply to any projectile emitted from it.

### Script properties

When the script is attached to the Projectile Launcher gizmo, the following properties appear in the Properties panel. These must be specified:

* **projectileLauncher** : Projectile Launcher entity in the world with which this projectile type is associated.
  + This property connects the script to the parent ProjectileLauncher object, since “this” reference in the TypeScript applies to the emitted projectiles.
  + In code, the type of this property is **Entity**, which means that a user can select an object that is already in the world (an entity) from the presented dropdown.
* **objHitForceMultipler** : Collision energy is measured in relation to mass and velocity of the colliding objects. This property allows you to tune or exaggerate that calculation.
* **objHitSFX** : Audio entity in the world to play when the projectile hits an object.
* **objHitVFX** : Visual effect entity in the world to play when the projectile hits an object.
  **Tip**: You can add your preferred audio and vfx entities to the world and select them from these dropdowns to deploy them.

### Start method

In the start() method, the code creates listeners for Horizon World events, called **CodeBlockEvents**. These premade events are emitted when a fired projectile collides with something else:

* **CodeBlockEvents.OnProjectileHitEntity**
* **CodeBlockEvents.OnProjectileHitPlayer**

**Example**:

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnProjectileHitEntity,
  this.onProjectileHitEntity.bind(this),
);
```

When the **CodeBlockEvents.OnProjectileHitEntity** event fires, then the local **onProjectileHitEntity** function fires, bound to the projectile (**this**), where a specific response to the event is defined.

### Reacting to events

```
private onProjectileHitEntity(objectHit: Entity, position: Vec3, normal: Vec3, isStaticHit: boolean) {
  //When the projectiles hits an entity, we apply a multiplied force
  //based on the normal to the entity to push it away from the projectile.

  this.onHitGeneric(position, normal);

  if(isStaticHit) return; // Only apply force to dynamic objects

  console.log("projectile hit object");
  objectHit.as(PhysicalEntity)?.applyForceAtPosition(
    normal.mulInPlace(-1 * this.props.objHitForceMultipler),
    position,
    PhysicsForceMode.Impulse);
}
```

Each of the private **onProjectileHit** functions addresses how the projectile affects entities of the specified type when it collides. All functions log a message and then call the onHitGeneric function, passing in:

* The position of the projectile when the collision fires, which maps to the point of impact.
* The other parameter is the “normal” of the collision, basically what the projectile’s trajectory was when it hit, but pointing towards where the projectile was coming from.

In the previous code snippet for **onProjectileHitEntity**, you may note the following:

```
if(isStaticHit) return; // Only apply force to dynamic objects

objectHit
  .as(PhysicalEntity)
  ?.applyForceAtPosition(
    normal.mulInPlace(-1 * this.props.objHitForceMultipler),
    position,
    PhysicsForceMode.Impulse,
  );
```

The above code applies force at the point of impact, based on the property **objectHitForceMultiplier**. This force multiplier is only applied to collisions with other objects; players are unaffected by this multiplier, as it could be too disruptive to the VR experience.

In **onHitGeneric**, the script sets the position of the sound and particle FX to the point of impact and plays them. This function is run for all types of collisions.

**Tip**: You can add additional variations as needed to your own world. For example, a Player impact may require a different audio effect, which requires adding a new property. Or you may decide to insert health and hit point effects as part of the **onProjectileHitPlayer** function.