# Physics Overview

  
## Delta time simulation

 The physics engine simulates physics in delta time, meaning it performs
calculations once per frame and then updates the state of entities based on the time
elapsed since the previous frame. As a result, the physics system is
non-deterministic (output can vary under the same conditions); however, this prevents the
system from double simulating physics during long frames (frames that take longer to
complete). For players, this improves stability, performance, and realism of
the physical interaction in a world.  
## Ownership and synchronization

 In Meta Horizon Worlds, entity (objects in the world) [ownership](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/local-scripting/ownership-in-horizon-worlds) is optimized to improve the responsiveness and feel of physical interactions.
For example, when an entity collides with a player, the system automatically
transfers ownership of the entity to the player. Additionally, any entities (objects
in the world) that aren’t owned by the local client are treated as kinematic. When entities are treated as kinematic on the local client, their movement isn’t
influenced by the local physics engine. The movement of a kinematic entity is
updated based on the state received over the network from the client that owns
the entity. This means that movement of non-local entities is determined by the
physics simulations synchronized from remote clients. In contrast, when the local
client owns an entity, the local physics engine determines the entity’s
movement. However, the local client might perform smooth interpolation or extrapolation
on the motion of entities owned by remote clients. By treating non-local entities as kinematic, the local physics engine can focus
resources on interactions between the local player and the environment, while
providing consistent physical behavior for remote objects. This approach improves
multiplayer performance by reducing the computing load on player devices.
Additionally, this means clients don’t have to send complex physics data over the
network to remote clients; instead, they just need to send the position and velocity
of local entities. On each client, network synchronization is performed towards the end of each
frame. During this phase, each client processes received network data and
broadcasts updates from network events to other clients. Because physics is simulated
locally, the only physics data sent and received between remote clients during
network synchronization is velocity and position. This lowers the bandwidth used by
clients when synchronizing the state of entities. For more information about networking, see the [Networking Model](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/networking-model) overview.  
## Units

 The physics system uses the following SI units (International System of Units).
• Acceleration: meters/second squared
• Angular Acceleration: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in
radians/second squared
• Angular Velocity: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in
radians/second
• Distance: meters
• Force: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in newton’s impulse
• Impulse: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in newton x seconds
• Mass: kilograms
• Torque: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) where the direction is the axis of rotation and the magnitude is in
newton-meters
• Velocity: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3) with magnitude in meters/second
## Physical entities

 You can create objects with physical behavior in a world by using a physical
entity, which provides access to the following:
• Physics and Interactivity properties in Desktop Editor
• Scripting APIs that dynamically apply force (movement) and torque (rotation)
• Collision handling
• Physical effects, such as spring physics
• [Physics materials](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/sfx/adding-physics-and-animation-in-horizon#physics-materials), which are a collection of physics settings that emulate real-world behaviors,
such as a feather, ice, or a rubber ball.

 A physical entity is an [entity](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/reference/2.0.0/core_entity) with the following properties enabled in Desktop Editor:
• Motion: Interactive
• Interaction: Physics or Physics and Grabbable

 In TypeScript API, the equivalent properties are the following:
• interactionMode: Physics or Both
• simulated: true

 The TypeScript API also provides the [PhysicalEntity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity) class for creating physical entities. When using a `PhysicalEntity` object, the `locked` property must be set to `false` to enable physics.  
### Physics settings

 The following additional settings are available to physical entities in Desktop
Editor: Behavior panel:
• Visible
• Collidable
• Collision Layer
• Disable physics while grabbed
• Use Custom Gravity (XYZ)

 Physics panel:
• Physics Material
• Mass
• Drag
• Angular Drag
• Dynamic Friction
• Static Friction
• Bounciness
• Physics Audio Material
• Weight Simulation When Held
• Center of Mass Override

 For more information about the properties of physical entities, see [Using physics and animation](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/sfx/adding-physics-and-animation-in-horizon).  
### World events

 The TypeScript API provides several world update events for applying movement
and torque to players and physical entities at a specific phase of every frame. The [World.onPrePhysicsUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) event allows you to register a callback to run on every frame before physics
calculations are performed on entities. This event is typically used to move a
player and then allow physics to respond to the movement. The [World.onUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onupdate) event allows you to register a callback to run on every frame after physics
calculations are performed. This event is useful for moving entities on every frame
or moving a player in response to physics.  
#### Spring physics

 You can use spring physics to apply the physical movement of a spring to an
entity when you push it toward a location or spin it toward a rotation. For more
information, see the [Spring Physics](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/spring-physics) guide. To ensure continuous motion toward the specified target, the spring
physics methods must be called within the [World.onUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onupdate) event so they are called on every frame.  
## Physics APIs

• [PhysicalEntity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity) class
• [PhysicalEntity.springPushTowardPosition](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity#springpushtowardposition) method
• [PhysicalEntity.springSpinTowardRotation](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicalentity#springpushtowardposition) method
• [ProjectileLauncherGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_projectilelaunchergizmo) class
• [RaycastGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo) class
• [AssetBundleGizmo](https://developers.meta.com/horizon-worlds/reference/2.0.0/unity_asset_bundles_assetbundlegizmo) class
• [World.onPrePhysicsUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) event
• [World.onPrePhysicsUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onprephysicsupdate) event
## Performance recommendations

•  World update events
  • To stablize performance, distribute large physics operations across multiple
frames using the The [World.onUpdate](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#onupdate) event.
•  Colliders and meshes
  •  Optimize physics processing by disabling colliders while they are outside the
gameplay area.
  • Use primitive colliders instead of mesh colliders when possible, but avoid Sub-D
primitive colliders. An exception is for components involved in frequent
collisions, which favors using a single larger mesh collider.
  •  For large ground surfaces, check whether simplified concave meshes have optimal
performance.
  •  To create realistic objects, you can use mesh colliders. For more information,
see the [Collider Ingestion](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/collider-ingestion-user-guide) guide.
  • Use simple convex meshes instead of complex concave meshes.
•  Triggers
  • Disable triggers while they are in areas that are inaccessible to the player.
•  Grabables
  • Minimize the number of collidable components on grabbable objects. In most cases
collidable components should not have more than two collidable components.
•  Performance panel and tracing
  • Capture high-level metrics and perform deep tracing to identify sources of
performance issues related to physics and rendering. For more information, see the Performance tools and [Tracing](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/learn/documentation/performance-best-practices-and-tooling/performance-tools/tracing) guides.

 For details about physics recommendations, see [Physics best practices](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/physics-best-practices).    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
