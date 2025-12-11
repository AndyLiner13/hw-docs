Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/physics

# Physics Overview

Meta Horizon Worlds uses Unity physics for core simulation of physics on every client. The physics system is designed for simple interactions using lightweight rigid body dynamics to simulate the motion of rigid objects. Lightweight rigid body dynamics is an optimized version of rigid body dynamics, designed for real-time applications where computational resources are limited. This approach provides fast and efficient collision detection and response, while using minimal network resources when synchronizing data between clients.

The physics engine on each client performs the following tasks on local entities that have physics simulation [enabled](Physics%20Overview.md#physical_entities):

* Applies forces and torque such as gravity, friction, and drag.
* Detects and responds to collisions.
* Updates velocity and position.
* Processes joints, constraints, and other physics characteristics.

The physics system includes support for the following elements:

* Rigid bodies: A rigid body is an object that maintains its shape and structure when forces are applied to it, making it a fundamental component of realistic physics simulations. By treating objects as rigid bodies, you can create more immersive experiences where entities respond to gravity and exhibit natural movement. To achieve this, instead of manually updating the position and rotation of an entity using scripts, consider applying forces to the entity and letting the game engine handle the resulting motion. This approach not only simplifies your code but also allows for more realistic and dynamic interactions.
* Joints: A joint attaches a rigid body to another or to a fixed position. Some joint types allow limited movement in relation to the attached rigid body.
* Colliders: Colliders are invisible entities consisting of custom shapes that respond to physical collisions. They can include collision, physics, and grabbable components. Primitive colliders (box, sphere, and capsule) provide simplicity and optimal performance while mesh colliders more closely match the shape of an entity, although their use is more processor intensive. For more information, see the [Collider Ingestion](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md) guide.
* Projectiles: A projectile is a temporary entity that is fired in a set direction before it is destroyed. You can use the [Projectile Launcher gizmo](../Gizmos/Projectile%20launcher%20gizmo.md) to manage the firing, tracking, and collision of the projectile. The launcher is accessible with the TypeScript API through the [Projectile Launcher class](../Reference/core/Classes/ProjectileLauncherGizmo.md), which allows you to detect and respond to events triggered by the gizmo. For more information, see the [Projectile tutorial](../Tutorials/Simple%20Shooting%20Mechanics%20tutorial/Module%202%20-%20Projectile.md).
* Unity asset bundles: Meta Horizon Worlds supports Unity asset bundles, which provide advanced graphic and physics capabilities. With Unity Asset bundles, you can import your unity assets including Unity colliders directly into your world and even spawn the assets dynamically using the [TypeScript APIs](../Reference/unity_asset_bundles/Classes/AssetBundleGizmo.md). For more information, see the [Horizon Unity AssetBundles Overview](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/unity-assetbundles/horizon-unity-assetbundles-overview).

## Delta time simulation

The physics engine simulates physics in delta time, meaning it performs calculations once per frame and then updates the state of entities based on the time elapsed since the previous frame. As a result, the physics system is non-deterministic (output can vary under the same conditions); however, this prevents the system from double simulating physics during long frames (frames that take longer to complete). For players, this improves stability, performance, and realism of the physical interaction in a world.

## Ownership and synchronization

In Meta Horizon Worlds, entity (objects in the world) [ownership](../Scripting/Local%20scripting/Ownership%20in%20Meta%20Horizon%20Worlds.md) is optimized to improve the responsiveness and feel of physical interactions. For example, when an entity collides with a player, the system automatically transfers ownership of the entity to the player. Additionally, any entities (objects in the world) that aren’t owned by the local client are treated as kinematic.

When entities are treated as kinematic on the local client, their movement isn’t influenced by the local physics engine. The movement of a kinematic entity is updated based on the state received over the network from the client that owns the entity. This means that movement of non-local entities is determined by the physics simulations synchronized from remote clients. In contrast, when the local client owns an entity, the local physics engine determines the entity’s movement. However, the local client might perform smooth interpolation or extrapolation on the motion of entities owned by remote clients.

By treating non-local entities as kinematic, the local physics engine can focus resources on interactions between the local player and the environment, while providing consistent physical behavior for remote objects. This approach improves multiplayer performance by reducing the computing load on player devices. Additionally, this means clients don’t have to send complex physics data over the network to remote clients; instead, they just need to send the position and velocity of local entities.

On each client, network synchronization is performed towards the end of each frame. During this phase, each client processes received network data and broadcasts updates from network events to other clients. Because physics is simulated locally, the only physics data sent and received between remote clients during network synchronization is velocity and position. This lowers the bandwidth used by clients when synchronizing the state of entities.

For more information about networking, see the [Networking Model](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/networking-model) overview.

## Units

The physics system uses the following SI units (International System of Units).

* Acceleration: meters/second squared
* Angular Acceleration: [Vec3](../Reference/core/Classes/Vec3.md) where the direction is the axis of rotation and the magnitude is in radians/second squared
* Angular Velocity: [Vec3](../Reference/core/Classes/Vec3.md) where the direction is the axis of rotation and the magnitude is in radians/second
* Distance: meters
* Force: [Vec3](../Reference/core/Classes/Vec3.md) with magnitude in newton’s impulse
* Impulse: [Vec3](../Reference/core/Classes/Vec3.md) with magnitude in newton x seconds
* Mass: kilograms
* Torque: [Vec3](../Reference/core/Classes/Vec3.md) where the direction is the axis of rotation and the magnitude is in newton-meters
* Velocity: [Vec3](../Reference/core/Classes/Vec3.md) with magnitude in meters/second

## Physical entities

You can create objects with physical behavior in a world by using a physical entity, which provides access to the following:

* **Physics** and **Interactivity** properties in Desktop Editor
* Scripting APIs that dynamically apply force (movement) and torque (rotation)
* Collision handling
* Physical effects, such as [spring physics](Physics%20Overview.md#spring_physics)
* [Physics materials](../VR%20tools/SFX/Use%20physics%20and%20animation%20in%20Meta%20Horizon%20Worlds.md#physics-materials), which are a collection of physics settings that emulate real-world behaviors, such as a feather, ice, or a rubber ball.

A physical entity is an [entity](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/reference/2.0.0/core_entity) with the following properties enabled in Desktop Editor:

* Motion: Interactive
* Interaction: Physics or Physics and Grabbable

In TypeScript API, the equivalent properties are the following:

* interactionMode: Physics or Both
* simulated: true

The TypeScript API also provides the [PhysicalEntity](../Reference/core/Classes/PhysicalEntity.md) class for creating physical entities. When using a `PhysicalEntity` object, the `locked` property must be set to `false` to enable physics.

### Physics settings

The following additional settings are available to physical entities in Desktop Editor:

**Behavior** panel:

* Visible
* Collidable
* Collision Layer
* Disable physics while grabbed
* Use Custom Gravity (XYZ)

**Physics** panel:

* Physics Material
* Mass
* Drag
* Angular Drag
* Dynamic Friction
* Static Friction
* Bounciness
* Physics Audio Material
* Weight Simulation When Held
* Center of Mass Override

For more information about the properties of physical entities, see [Using physics and animation](../VR%20tools/SFX/Use%20physics%20and%20animation%20in%20Meta%20Horizon%20Worlds.md).

### World events

The TypeScript API provides several world update events for applying movement and torque to players and physical entities at a specific phase of every frame.

The [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) event allows you to register a callback to run on every frame before physics calculations are performed on entities. This event is typically used to move a player and then allow physics to respond to the movement.

The [World.onUpdate](../Reference/core/Classes/World.md#onupdate) event allows you to register a callback to run on every frame after physics calculations are performed. This event is useful for moving entities on every frame or moving a player in response to physics.

#### Spring physics

You can use spring physics to apply the physical movement of a spring to an entity when you push it toward a location or spin it toward a rotation. For more information, see the [Spring Physics](../Scripting/API%20references%20and%20examples/Spring%20Physics.md) guide. To ensure continuous motion toward the specified target, the spring physics methods must be called within the [World.onUpdate](../Reference/core/Classes/World.md#onupdate) event so they are called on every frame.

## Physics APIs

* [PhysicalEntity](../Reference/core/Classes/PhysicalEntity.md) class
* [PhysicalEntity.springPushTowardPosition](../Reference/core/Classes/PhysicalEntity.md#springpushtowardposition) method
* [PhysicalEntity.springSpinTowardRotation](../Reference/core/Classes/PhysicalEntity.md#springpushtowardposition) method
* [ProjectileLauncherGizmo](../Reference/core/Classes/ProjectileLauncherGizmo.md) class
* [RaycastGizmo](../Reference/core/Classes/RaycastGizmo.md) class
* [AssetBundleGizmo](../Reference/unity_asset_bundles/Classes/AssetBundleGizmo.md) class
* [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) event
* [World.onPrePhysicsUpdate](../Reference/core/Classes/World.md#onprephysicsupdate) event

## Performance recommendations

* World update events

  + To stablize performance, distribute large physics operations across multiple frames using the The [World.onUpdate](../Reference/core/Classes/World.md#onupdate) event.
* Colliders and meshes

  + Optimize physics processing by disabling colliders while they are outside the gameplay area.
  + Use primitive colliders instead of mesh colliders when possible, but avoid Sub-D primitive colliders. An exception is for components involved in frequent collisions, which favors using a single larger mesh collider.
  + For large ground surfaces, check whether simplified concave meshes have optimal performance.
  + To create realistic objects, you can use mesh colliders. For more information, see the [Collider Ingestion](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md) guide.
  + Use simple convex meshes instead of complex concave meshes.
* Triggers

  + Disable triggers while they are in areas that are inaccessible to the player.
* Grabables

  + Minimize the number of collidable components on grabbable objects. In most cases collidable components should not have more than two collidable components.
* Performance panel and tracing

  + Capture high-level metrics and perform deep tracing to identify sources of performance issues related to physics and rendering. For more information, see the

    Performance tools

    and [Tracing](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing) guides.

For details about physics recommendations, see [Physics best practices](../Performance/Performance%20best%20practices/Physics%20best%20practices.md).