# Meta Horizon Worlds creator manual

## Overview

 Meta Horizon (called "Horizon" for the rest of this document) is a Metaverse
content platform where people can find and create 3D immersive content to play,
explore, and socialize in. Horizon calls each experience a world. The content can be accessed on: Supported platforms: mobile, web, Windows PCs, and VR. Use the Horizon creation tools you can create team-vs-team shooter games,
fantasy fighting games, social deception games, hang out spaces and clubs, art
exhibits, simulation games, battle royale games, dungeon crawlers, obstacle courses,
puzzle games, talk shows, adventure games, stories, party games, improv clubs, and
whatever else you can imagine. The tools support many features for managing and scripting players, physics, 3D meshes, projectiles, purchases, grabbable items, wearable items, player inputs, static and dynamic lights, UI, Leaderboards, NPCs, and more. You can write scripts, handle the network, package up content into reusable assets, dynamically spawn content into a world while it is running, and so much more. Desktop Editor: Horizon can be installed on a Windows PC through the Meta Quest Link App. Once
installed, you click on the ellipsis (the 3 dots menu) Start in Desktop Mode,
this opens app with a set of tools where you can create, edit and publish worlds.
At this moment, the Desktop Editor is not supported in MAC computers. VR Editor: in Quest VR devices the Meta Horizon app contains an edit mode that allows for
creating and editing worlds inside of VR. It offers a natural and intuitive
experience where you can place object directly with your hands and immerse yourself
in your creations. The VR editor does not provide access to all tools that the
desktop has. For the majority of this documentation, we will be covering Desktop
Editor mode only. TypeScript and Code Blocks. Horizon uses [TypeScript](https://www.typescriptlang.org/) as its scripting language. TypeScript scripts can only be edited in the Desktop
Editor. Horizon also has a custom block-based scripting system (where you write
scripts by combining blocks together) that it calls Codeblocks. Codeblock Scripts can only be edited in the VR Editor. This documentation only
includes TypeScript features.

## Worlds

### Publishing and Player Settings

 Publishing![Image shows the publish world window with a message stating that a genre tag
must be selected](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480830190_656797526858202_6486575020987318744_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ejOuJTto_IwQ7kNvwGmO8e1&_nc_oc=AdkHMkbuAFK2ItrrjNNkxN7IEHEH5BS1jAQVFKBDOWL1SZegYj5JI1pNzV9517TxKZI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_Afd3l-H6C26ajIrHmRoALPFV7uv6mX1P2FK...
| Hide Action by Default | Mobile Only. Hides action icons by default unless specified otherwise in items properties. |
| Disable Dynamic LOD Toggles on Avatar | If enabled, LOD will no longer be applied to avatars. This decreases their detail for players when viewed from a distance. |
| Enable Max Quality Avatar | Enabled advanced shading and increased texture resolution on avatars. May affect performance. |

### World Backups

system, such as git, but it is possible to put the scripts into source control. Warning Restoring a backup will overwrite the editable version of the world. Currently,
branching is not available.

## Instances

### Instance Lifetime

 Creation: When a player travels to a world (to play it or edit it), Horizon finds or creates an instance of the right type. Longevity: The instance then remains running as long as players stay in it. Even when all
players leave, and the instance becomes empty, it may stay running for some
time, in case any players try to return or new players arrive. Destruction: When there are no players in an instance it will be destroyed, after some
timeout threshold. In rare instances a server error may also cause an instance to
be destroyed (which will send all players in it back to the app-launch state). Destroyed instances are permanently gone and so is their data. When an instance is destroyed there is no way for players to get back that
specific instance. Any data they had "acquired" in that instance is permanently lost.
You can use Horizon persistence to track data across instances and visits.

### Instance Types

#### Visitation Modes: Edit, Preview, and Publish

 "Visiting" a world in Horizon is done in one of three modes: edit, play, and
publish. In a published instance, all players are always in "publish mode". In an editor instance, the creator and editors can switch back and forth between edit and preview
modes; testers are always in preview mode.
|  |
|  |
| Edit | Experience the world as an editor where you can modify the world. | Editor Instance | Editor |
| Preview | Experience the world as a player from within the editable instance. | Editor Instance | Editor or Tester |
| Publish | Experience the world as a player in a published instance. | Published Instance | n/a |

 Debug console gizmo visibility. The Debug Console Gizmo has setting to control which visitation mode(s) it is visible in.

#### Visitation Modes: Edit, Preview, and Publish

 There are three types of instances: published instances, editor instances and preview instances. The editing tools, for modifying a world, are only available inside of an editor instance. There is no way to turn one into the other; when Horizon starts up a new instance, based on how the player is traveling, and then the type never changes, for as
long as the instance is alive.
|  |
|  |
| Published | Use the "Visit World" button, or travel to a friend, travel via a door. | No | No limit |
| Editor | Use the "Edit World" button if you are the world owner, editor, or a tester . | Yes, if you are the owner or an editor . | 1 |
| Preview | Use the "Preview version" button on the Creator Portal , or using the Preview Configuration actions (send link to Meta Quest phone app, open in browser or copy preview url). | No | No limit |

 Preview instances mirror the same functionality as Published instance. The
difference is that Preview instances will contain recent-unpublished edits of a
world. Preview instances are not discoverable.

#### Open, Closed, and Private Instances (Matchmaking)

 Instances can be open or private, controlling whether anyone can join, or if you can join by invite only. The matchmaking APIs allow you to close an open instance meaning that no one else can jon. Open Instance: An instance is open if anyone can join it. Open instances are created by default when joining a
world. They can also be created by using the 3 dots on a published world page and
selecting `Launch an Open Session`. Anyone can join an open instance. Private Instance: An instance is private when people can only join it by invite. Players can create a private instance
by using the `Launch a Closed Session` option under the 3 dots on a published world page. Matchmaking: Creators can also decide when to open and close an `Open Instance`(but not a `Private Instance`) by using the Matchmaking API. When an instance is closed in this way, players
can only join by invite.

#### Open, Closed, and Private Instances (Matchmaking)

3. Instance is Open: all published instances exist as either open or closed. An open instance can be joined by a player (if the above criteria are met). A closed instance can only be joined by players who are explicitly invited by players already in
the instance.

#### Instance Selection

 When a player travels to a world, Horizon will determine which instance to send
them to (if there are multiple) or create a new instance if needed (if all are
full, none exist, or the player specifically created a new one). The Editor Instance There is only ever (at most) one editor instance of a given world. When that one instance is full, no other editors can load the
world to edit. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480849720_656797523524869_5636069937135617719_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=fKBX6IMqjLEQ7kNvwHz894o&_nc_oc=AdkDYDdcpLTXk8iiDwnUDM8L8E76AxLmJcylV_iNqr8es6JIUqZe2aMm2UkgJgm0c8Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_AffNRcNQTPEZE0tOeiQjqk4wDoWN3A7bD...

#### Instance Selection

 Once published, Horizon maybe have multiple copies of a world running at the same time. For example if the maximum player count is set to 20 and there are 100 people "in the world" then they would be spread
out across at least 5 separate copies. These copies are called instances. Horizon sometimes refers to Instances as Sessions In all technical documentation, Horizon uses the word instance. Given that this is a somewhat technical term, it refers to them as sessions within the user-facing side of the product. For example, a person can "create a
new session".

### Travel, Doors, and Links

## Scene Graph

### Hierarchy

#### Ancestors

 We call the collection of an entity's parent, grandparent, great-grandparent,
etc the entity's ancestors. If the entity has no parent, we say it has 0 ancestors. If it has just a
parent and then grandparent, it would have 2. We call the children, and their children, and their children, etc of an entity
its descendants.

#### Empty Object and Groups

 Empty Objects and Groups are two entity types that create "collections" of
entities. They are similar in most regards, with only a few differences:
|  |
|  |
| Group | At the build-mode center of all their children. Meaning that moving a child in build-mode will move the pivot point . | Children have their interaction disabled and cannot be grabbable or physical . | Projectile collisions happen on the group. | 1+ |
| Empty Object | The center of the Empty Object is always the pivot point . | Children can be Interactive Entities, if the Empty Object's Motion is None. | Projectile collisions happen on a child. | 0+ |

 Empty Objects and Groups behave identically in regard to collisions, triggers, and raycasts. They behave differently with the projectile launcher. When a projectile launch is hit, Horizon checks if it has a parent and if the parent is a group. If there is a group parent, it uses that as the
entity. Otherwise, it uses the original entity it started with. Thus, a group
will appear to "bubble up" one level; empty objects do not.

#### Empty Object and Groups

 Any entity can be set as the child of another entity. For example, you might make a
robot's forearm a Mesh Entity that is a child of the upper arm Mesh Entity. Or you
might put a steering wheel inside a car. The main reasons to create parent-child
relationships are:
1. To have the transform of one entity impact another (e.g. moving a car also moves
the steering wheel within it).
2. To create "layers" or "folders" in the editor (e.g. putting all trees in a "collection" to make them easier to manage).

 When an entity has no parent, it is called a root entity.

#### Ancestors

#### Empty Object and Groups

### Coordinate System

#### Local coordinates

##### Example: Local Coordinates

the entity (so that the right axis always points out from the right ear). ![Example of coordinate system](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480611159_656797476858207_8234151886777029936_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=TA907ELgSPAQ7kNvwE9iLeC&_nc_oc=Adnzch3zNBPoIOBhqd2I1IRwC30A0CNb4CZ4UzNQkyw4FStPJbmQyZC9t9O59p87tbk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_Afd66RRuw9_fsnKB8mGa31hxBGyeEydh6k...

#### Local coordinates

forward. ![Diagram showing coordinate system](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/481024720_656797420191546_2462169612641144284_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=CQodV8UNknEQ7kNvwFfDEbW&_nc_oc=AdlvsSbIJKcsZ-F7H1GKE4xSStw-s_GORd5h8mM0lHDQg_DsttSFF7GxOpewO18IpYM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_Afd66RRuw9_fsnKB8mGa31hxBGyeEydh6k...

### Transforms

#### Rotation

##### Example: Setting a rotation

 Setting the `rotation` property is not influenced by the rotation of any ancestors. See local transforms for setting rotation relative to a parent entity.

#### Rotation

don't worry if rotations seem complex (they are)! The `rotation` property on an entity determines how much the entity is rotated around its pivot point. This rotation is specified globally, meaning that it is measured with respect to the world. A zero-rotation will
have an entity's up-axis align with the world's y-axis, its right-axis align with
the world's x-axis, etc.
##### Example: Setting a rotation

#### Scale

##### Example: Setting a scale

 Scale is a read-write property on the `Entity` class. To get the current scale of an entity, do:  `entity`.`scale`.`get`()` To scale an entity so that it is 3 times bigger on its up axis (than its
inherent size), do:  `entity`.`scale`.`set`(`new` `Vec3`(`1`,` `3`,` `1`))` Since the default scale is `(1,1,1)`, you can set any part of a scale to `1` to leave the entity "un-scaled" along that axis. Setting the `scale` property is not influenced by the rotation of any ancestors. See local transforms for setting scale relative to a parent entity. danger: Mesh Primitives Have Unexpected Inherent Sizes The built-in mesh primitives have an inherent scale of 150 meters on each side
(as of Feb 2025). Thus, if you wanted to use a built-in mesh cube and have it be
1 meter long on each side, you would need to give it a scale of (1/150, 1/150,
1/150). This is a longstanding bug.

#### Scale

 Scales are specified as 3-dimensional vectors, represented as the `Vec3` type in TypeScript. In the editor these are written as a "triple" such as `(0, 0, 0)`. Inherent Size: All entities have their own inherent size. For instance, a SubD cube is
inherently 1 meter long on each side.  3D model assets have a size based on how they were authored. The inherent size of an entity is
the size it is when it is unscaled. The `scale` property determines the fraction an entity should be of its inherent size. For
instance, a SubD cube is inherently 1 meter long on each side. If you set its
scale to be `(1, 0.5, 2)` then the cube will be 1 meter long on its right-axis, 0.5 meters long on its
up-axis, and 2 meters long on its forward-axis. In this example, the object has
been "shrunk" along its up-axis, and "expanded" along its forward-axis.
##### Example: Setting a scale

#### Local Transforms

##### Example: Local Position

 Let `parent` be an entity that has not been rotated nor scaled with `child` as one of its children. If `parent`'s global position is `(3, 0, 0)` and `child`'s global position is `(8, 1, 0)` then `child`'s local position will be `(5, 1, 0)`. The `child`'s local position is how much it is moved from its parent. Note: if the `parent` were rotated or scaled then you can't just "subtract the positions". Global values 'cascade down' the hierarchy. An entity's global position/rotation/scale influences the global
position/rotation/scale of its children (which then cascades to their child too!). If you have
a plate on a table on a boat and the boat moves globally then so do the table
and the plate; if the table moves then so does the plate (and everything on it!) Local values exist in the transformed local coordinate system of the parent. Local values exist in the transformed local coordinate system of the parent. Rotating and/or scaling an entity causing it axes to rotate and
scaled as well. We call these the transformed axes. A child with local position of `(0, 6, 0)` is moved 6 units from the global position of its parent along the parent's transformed up-axis. If there is no parent then this is just 6 meters up the world's y-axis.

#### Local Transforms

 Entities have a `localPosition`, `localRotation`, and `localScale` that can be accessed via the transforms (e.g. `entity.transform.localPosition.get()`). These properties specify values in relation to a parent entity (or to the
world if there is no parent), specified in the parent's local coordinates. Throughout this doc, other than this section, we omit the word global. When you see "position", it means "global position".

##### Example: Local Position

#### Pivot Points

 The transformation origin point of an entity is called its pivot point. It rotates around its pivot point, it scales around its pivot point, and when
you move an entity its pivot point end ups at the position specified.
1. Mesh entities have their pivot points specified when they are authored (e.g. in Blender)
2. Empty objects have their pivot points at the center of the gizmo (the grey cube)
3. Group entities compute their pivot point to be at the center of their "bounding box" in edit mode. For example if you move a child in a group in edit mode then when click off
the group it will recompute its pivot point to be at the center of all of its
children. This only happens in edit mode. The pivot of a group doesn't auto-change when
the world is running (even if its children move around).

#### Billboarding

 An entity is a "billboard" when it automatically rotates to face the player.
This uses per-player rotation so that each player can see the entity facing toward them. Empty objects and groups have a property (in the Properties panel) called Billboard with 3 options:
|  |
|  |
| None | No automatic rotation |
| Lock-Y | Auto-rotate per-player around the y-axis so that the entity always points its local forward axis in the direction of the player (but locked to the xz-plane). Its local up axis will always point straight up in the world. |
| Freeform | Auto-rotate per-player around any axis to face the player as best as possible. The entity's local forward axis will point exactly in the direction of the player. |

 Billboard User Interfaces (UIs): Leaderboard gizmos contain a setting called "UI Anchor Style" which can be set to "Static" or
"Billboard". When set to "Billboard" it acts just like a group with the billboard
property set to "Freeform". All other UIs (Custom UI, Debug Console Gizmo, Quests Gizmo, etc) can be made into a billboard by putting them in a group or as the child of an empty object and then using the billboard option there.

#### Billboarding

 Entities have three transform properties: position, rotation, and scale. You can use the Properties panel or the "manipulation handles" to manipulate
these properties. Editing these values determines how entities are transformed
when a new instance starts. Within the Horizon editor you can only configure initial position, rotation, and
scale. If you want these values to change while the world is running, you will need
to modify the values using scripting. In the desktop editor you can switch quickly between transform tools via the
keyboard. | Manipulation Tool | Keyboard Shortcut | |---|---| | Move | W | | Rotate
| E | | Scale | R | Entities can be transformed globally and locally, they have pivot points, and can be transformed relative to other entities or players. No Arbitrary Matrix Transforms Horizon does not currently allow matrix transforms. You can achieve some skew
effects by rotating an entity inside a non-uniformly scaled one. Arbitrary matrix
transforms are not exposed to the developer.

#### Position

#### Example: Setting a position

#### Rotation

#### Scale

#### Offsets - Move, Rotate, and Scale

#### Transform Property

#### Local Transforms

#### Pivot Points

#### Transform Helpers

#### Billboarding

## Entities

### Entity Class

|  |
|  |
| Scene Graph |   |
| children | All entities that are children of this one (in the Hierarchy panel) |
| getComponents | All components attached to this entity |
| id | A unique id in this instance |
| name | The name in the Properties panel |
| parent | The parent (if any) in the Hierarchy panel |
| Interaction |   |
| as | Convert the entity to an intrinsic or behavior entity type |
| collidable | Control collidability |
| color | Set the color of the mesh (only works for SubD ) |
| exists | Check if the entity exists (either from despawn or a Codeblock script passing an uninitialized reference) |
| interactionMode | Control the type of interactivity |
| owner | The player whose client has authority of the entity (defaults to the server player ) |
| simulated | If the entity updated in the simulation phase of each frame |
| tags | The list of tags on the entity |
| Transforms |   |
| forward | The local forward vector |
| lookAt | Rotate to look at a point |
| moveRelativeTo | Move in another entity's local coordinates |
| moveRelativeToPlayer | Move in a player's local coordinates |
| position | The entity's global position |
| right | The local right vector |
| rotateRelativeTo | Rotate in another entity's local coordinates |
| rotateRelativeToPlayer | Rotate in a player's local coordinates |
| rotation | The entity's global rotation |
| scale | The entity's global scale |
| transform | The entity's transform object |
| up | The local up vector |
| Visibility |   |
| isVisibleToPlayer | Does a player have permission to see the entity? |
| setVisibilityForPlayers | Set the permission for a player to see the entity |
| visible | Is the entity visible (which may be overridden by its parent or by permissions ) |

### Entity Types

#### Static vs Dynamic Entities

 All entities in Horizon are either static or dynamic. Static entity: A static entity can never change in any way (other than being spawned in and out ). A static entity's position, rotation, color, etc never change.
Horizon computes more detailed lighting on static entities. Scripts can read the data of a static entity (such as getting position) but can never change the
values. Static entities cannot have behaviors An entity is static when `Motion` is set to `None` in the Properties panel. Dynamic entity: A dynamic entity is one that changes. It may move and rotate, have its color
changed, have forces applied, be grabbed, be attached to an avatar, etc. A
dynamic entity has simpler lighting than static entities. Dynamic entities can have behaviors. An entity is dynamic when `Motion` is set to `Animated` or `Interactive` in the Properties panel
• When `Motion` is set to `Animated` you can record a "hand animation" on the entity.
• When `Motion` is set to `Interactive` you can make the entity grabbable, physics-simulated, or both.

 Parents don't affect static vs dynamic. A static entity can have a dynamic parent and vice versa.

#### Static vs Dynamic Entities

• When `Motion` is set to `Animated` you can record a "hand animation" on the entity.
• When `Motion` is set to `Interactive` you can make the entity grabbable, physics-simulated, or both.

 Parents don't affect static vs dynamic. A static entity can have a dynamic parent and vice versa.

#### Intrinsic Entity Types

 The table below lists all intrinsic types, which are subclasses of `Entity`. Note that some intrinsic types don't have an associated subclass and thus are
accessed simply as `Entity` instances. Every entity only has one intrinsic type which can be accessed via the entity.as() method. The intrinsic type classes (in the table below) all subclass `Entity`. All the entity properties are available on all of them. Intrinsic entity types are organized in the desktop editor into a few top-level categories:
• Shapes: built-in mesh "primitive" shapes (such as cube, sphere, torus, cylinder, cone, etc)
all of which instantiate Mesh Entities.
• Gizmos: entities that have in-world behavior (such as for spawning a player at a
location, showing UI, rendering a particle effect, launching a projectile, and so
much more). These are all listed in the table below and enumerated in full detail below.
• Colliders: mesh-less entities that still have a "shape" that can be collided with (such as sphere, cube, and capsule). Its type is just `Entity`.
• Sounds: a large library of pre-made sound effects; you can also create more using the
AI sound feature. These all instantiate sounds gizmos (which have the type `AudioGizmo`).
• Empty Object: a special "collection" entity. Its TypeScript type is just `Entity`.
• Group: another special "collection" entity. Its TypeScript type is just `Entity`.
• Sublevel: an abstract entity containing information for spawning in portions of levels.

 There is a full list of all intrinsic entity types and their documentation below.

#### Behavior Entity Types

 A dynamic entity can have multiple behavior types which can be accessed via the entity.as() method. The behavior type classes (in the table below) all subclass `Entity`. All the entity properties are available on all of them.
|  |
|  |
| Animated (Recording) | An entity that has a recording on it. | AnimatedEntity | Set Motion to Animated. Use the Record button in the Properties panel. |
| Attachable | An entity that can be attached to a Player . | AttachableEntity | Set Motion to Animated or Interactive. Set Avatar Attachable to Sticky or Anchor in the Properties panel. |
| Grabbable | An entity that can be grabbed and held. | GrabbableEntity | Set Motion to Interactive. Set Interaction to Grabbable or Both. Interaction can also be changed with entity.interactionMode.set(...). |
| Physics-Simulated | An entity that can respond to forces and torques . | PhysicalEntity | Set Motion to Interactive. Set Interaction to Physics or Both. Interaction can also be changed with entity.interactionMode.set(...) |
| Navigation Mesh Agent | An entity that can do its own locomotion using a navigation mesh profile | NavMeshAgent | In the Navigation Locomotion property sub-panel, set Enabled to true. |

#### Entity as() method

 You can convert an Entity instance into its intrinsic or behavior types using the entity `as()` method. For example:  `const` particleEffect`:` `ParticleGizmo` `=` entity`.`as`(`ParticleGizmo`)` Once you call `as()` on an entity, you can store that "casted" entity (in a `let`, `const`, or `class` member) and you don't need to call `as()` on it again. Note that `as()` returns the same entity back, preserving equality. Thus after the line above, `particleEffect === entity` would evaluate to `true`. Danger: The Entity `as()` method always succeeds! Do not cast to the wrong type! The `as()` method will always return an instance of the requested type. This means that

#### Animated Entities

can also script your car to animate on cue by calling `start()` on the car and its wheels on the same frame. Nested animations can be triggered all at once If an `AnimatedEntity` is a group that has the "Animate Group" property enabled, when `play()`, `pause()`, or `stop()` is called on the group, all descendants of that group that are `AnimatedEntity`s will also have the corresponding play/pause/stop method called on them, even
if they are not immediate children.

#### Interactive Entities

 Every entity in Horizon has an underlying intrinsic type determined by how the entity was originally created (e.g. whether you
instantiated a Sound Gizmo, Text Gizmo, 3D Model, etc). Additionally, an entity can have (multiple) behavior types based on settings in the Properties panel (such as being grabbable, attachable, etc). For example, a hat mesh that is grabbable and attachable has a intrinsic type of MeshEntity and two behavior types: GrabbableEntity and AttachableEntity.

#### Static vs Dynamic Entities

#### Intrinsic Entity Types

#### Behavior Entity Types

#### Entity as() method

#### Animated Entities

#### Interactive Entities

### Entity Properties

#### Simulated

 The simulated property is only available in scripting (as a `boolean`read-write Horizon property). The property allows you to disable interaction (as if temporarily setting
"Motion" to "None") so that entities don't respond to physics and are not grabbable. When an entity has `simulated` set to `false`:
• It cannot be grabbed ❌ (even if grabbable). If a held entity has its `simulated` set to `false` it will force release.
• It cannot have forces applied ❌ (even if it is physical).
• It can be attached via scripting ✅ (if it is attachable) though it may push the player (if `collidable` is `true`). If an attached entity has its `simulated` set to `false` it will NOT detach.
• It can be moved ✅ via `position.set(...)` and `rotation.set(...)` (if it is dynamic).
• It can be collided with following the standard rules for collisions.

 The `simulated` property defaults to `true`. When you call `entity.simulated.set(false)` the entity will lose all linear and angular velocity (as if you had called `entity.zeroVelocity()`). If, or when, `simulated` is re-enabled, those velocities are not returned. Note The PhysicalEntity class has a method `locked`; locked is very similar to simulated.

#### Entity Tags

 Entities in Horizon can be assigned a list of tags which are used of "classifying" entities. Tags are just `string`s. Tags can be assigned in the Properties panel; they can also be modified in
scripting with the `Entity` property `tags: HorizonSetProperty<string>`. When `entity.tags.get().contains(thing)` returns `true` we say that the `entity` has the tag`thing`. Tags (currently) have three primary use cases:
1. Controlling triggers: Trigger gizmos have a Properties panel setting that lets you specify a tag so that the trigger will only receive trigger enter and exit events for
entities that have that tag.
2. Controlling collisions: Entities have a Properties panel setting that lets you specify a tag that the entity will receive collision events from. The entity will only receive collision events if it collides with another
entity which has the specified tag.
3. Controlling raycasts: Raycast gizmos have a Properties panel setting that lets you specify a tag so that the raycast will only generate RaycastTargetType.Entity hit results for entities that have that tag.
4. Finding entities: Horizon has a method on the World class to get all entities in the instance which match a given "query":

  
```
// World
getEntitiesWithTags(
  tags: string[],
  matchOperation?: EntityTagMatchOperation
): Entity[];
```
 The method takes an list of tags (a string array) and optionally a match
operation (the enum `EntityTagMatchOperation` has `HasAnyExact` and `HasAllExact`) which defaults to `HasAnyExact` if not specified.
• `HasAnyExact`: return all entities in the world that have at least one of the tags in the `tags` argument.
• `HasAllExact`: return all entities in the world that have all of the tags in the `tags` argument.

 Horizon does not auto-check for duplicate tags. Be careful not to give an entity the same tag more than once. Doing so may
result in certain events happening more than once or the entity appearing multiple
times in lists.

#### Entity Tags

3. Controlling raycasts: Raycast gizmos have a Properties panel setting that lets you specify a tag so that the raycast will only generate RaycastTargetType.Entity hit results for entities that have that tag.
4. Finding entities: Horizon has a method on the World class to get all entities in the instance which match a given "query":

  
```
// World
getEntitiesWithTags(
  tags: string[],
  matchOperation?: EntityTagMatchOperation
): Entity[];
```
 The method takes an list of tags (a string array) and optionally a match
operation (the enum `EntityTagMatchOperation` has `HasAnyExact` and `HasAllExact`) which defaults to `HasAnyExact` if not specified.
• `HasAnyExact`: return all entities in the world that have at least one of the tags in the `tags` argument.
• `HasAllExact`: return all entities in the world that have all of the tags in the `tags` argument.

 Horizon does not auto-check for duplicate tags. Be careful not to give an entity the same tag more than once. Doing so may
result in certain events happening more than once or the entity appearing multiple
times in lists.

#### Entity Visibility
##### Entity Visibility Permissions

##### Example

#### Entity Visibility

 Entities can be rendered ("visible") or not rendered ("invisible"). When an
entity is rendered for a specific player we say that it is visible to that player. Visibility is controlled in the world snapshot by setting the visible property in the Properties panel. Visibility at runtime is controlled by the `visible` Horizon property on `Entity` and by player visibility permissions. Invisibility cascades down: If an entity is invisible then so are all of its children (and all descendants). Visible=false overrides permissions: When `visible` is set to `false`, the entity is invisible to all players, regardless of player permissions. When
`visible` is set to `true`, the entity is visible to players according to the per-player permissions
(which default to being visible for everyone). Permissions persist when Visible=false: Changing the `visible` property does not change the visibility permissions. When `visible` is changed to `false` the entity becomes invisible to everyone, but the per-player permissions are
intact and will begin acting again if the entity has `visible` changed to `true`.

##### Entity Visibility Permissions

#### Entity Visibility

 All `Entity` instances have the class properties in the table below. Additionally, entities
have methods for managing visibility, transforming relative to an entity or player, and checking if an entity exists.
|  |
|  |
| Scene Graph |   |   |
| id | bigint | A unique value representing this entity in this instance. ids are not reused (within an instance). |
| name | ReadableHorizonProperty <string> | The name the Entity has in Properties panel. |
| parent | ReadableHorizonProperty <Entity \| null> | The entity's parent (if there is one). |
| children | ReadableHorizonProperty <Entity[]> | The entity's children. |
| tags | HorizonSetProperty <string> | The array of tags on the entity. |
| Transform |   |   |
| position | HorizonProperty <Vec3> | The entity's global position. |
| rotation | HorizonProperty <Quaternion> | The entity's global rotation. |
| scale | HorizonProperty <Vec3> | The entity's global scale. |
| transform | Transform | The entity's transform instance (containing properties for local and global values). |
| Local Coordinates |   |   |
| forward | ReadableHorizonProperty <Vec3> | The entity's local positive z-axis . |
| up | ReadableHorizonProperty <Vec3> | The entity's local positive y-axis . |
| right | ReadableHorizonProperty <Vec3> | The entity's local positive x-axis . |
| Rendering |   |   |
| color | HorizonProperty <Color> | The color the entity renders as. This is only supported with the SubD rendering system. To change the color of a MeshEntity use tinting . |
| visible | HorizonProperty <boolean> | The top-level control for visibility. Read the rules for when an entity is visible . |
| Behavior |   |   |
| collidable | HorizonProperty <boolean> | If the entity has its collider active . This impacts grabbability , physics collision , trigger detection , if a play can stand on an entity (or is blocked by it), etc. |
| interactionMode | HorizonProperty <EntityInteractionMode> | The kind of interactive entity the entity is. This only works when Motion is set to Interactive. |
| simulated | HorizonProperty <boolean> | Whether the entity is impacted by physics (if its position and rotation are updated in the physics calculations of the frame). |
| Ownership |   |   |
| owner | HorizonProperty <Player> | The owner of the entity. Changing this property executes an ownership transfer . |

  
#### entity exists

#### Simulated

#### Entity Tags

#### Entity Visibility

 Every "thing" in the Horizon scene is an entity (a grabbable item, a mesh, a light, a particle effect, a sound, a group of
other entities, etc). Entity and Object mean the same thing (except in TypeScript) Horizon calls these objects in the Desktop Editor and VR Tools but calls them entities in TypeScript. This document tries to consistently call them entities, except
when quoting places where Horizon explicitly uses the word "object", but may
accidentally call them objects on occasion. In TypeScript `Object` is a built-in for managing data, whereas `Entity` is a Horizon-specific class. Entities are represented by the Entity class. They have an intrinsic type (such as being a particle effect) and may have (multiple) behavior types (such as being grabbable). Entities have a number of properties and methods for managing visibility. Entities can be transferred to run on player devices to improve "smoothness", can be impacted by physics via forces, be made grabbable, be made attachable, and so much more.

### Entity Class

### Entity Types

### Entity Properties

## All Gizmos (Intrinsic Entity Types)

### Collider Gizmo

 Description: Represents a collision field in your world. Used to stop players, objects,
and/or projectiles. | Property | Type | Description | |---|---|---| | Collidable | `boolean` | Determines whether collision is applied to this collider. | | Collision Layer
| `Everything`, `Objects Only`, or `Players Only`. Default is `Everything` | Determines which layers will collide. With `Objects Only`, projectiles and other objects will be blocked, but players can pass through
and with `Players Only` everything can pass through except players. | TypeScript: Collider Gizmos are referenced as `Entity` instances with no additional scripting capabilities. Limitations: There is currently no way to script a player to "force"-enter a pose. There is
also no way to prevent them from exiting.

### Custom UI Gizmo

 Description: Presents a custom UI (User Interface) to your players. Also see Custom UI
|  |
|  |
| Display mode | Spatial or Screen Overlay | Determines how your UIs will be seen. Spatial means the UI is 3D object somewhere in your world. Screen Overlay means it will appear on top of the players screen. |
| Input mode | No interaction, Interactive, Blocking, or Interactive, Non Blocking | Only displayed if the 'Display mode' is Screen Overlay. Controls whether the overlay has interaction and, if so, whether it blocks navigation (only for XS players, VR user never have blocked navigation) or does not block navigation (in which case it is invisible to VR players ) |
| Raycast | boolean | Determines if the raycast will appear for VR players . If disabled, VR players cannot interact, Mobile/Web players can unless Focus Prompt is disabled. |
| Raycast distance | number | Controls the distance within which a player can interact with the UI panel if Raycast is enabled. |
| Mipmap | boolean | If enabled, allows you to adjust the level of mipmap which affects how much detail is drawn when viewed from a distance. |
| Focus Prompt | boolean | Determines if Mobile/Web can interact with the UI. If disabled, Mobile/Web players cannot interact, but VR players can unless Raycast is disabled. |
| Focus prompt distance | number | Controls the distance within which a player can interact with the UI panel if Focus Prompt is enabled. |

 TypeScript: Custom UI Gizmos are referenced as() the `UIGizmo` class from `horizon/ui` with no properties or methods. For more information on `horizon/ui` see Custom UI Limitations: Custom UI Gizmo and their bindings will cause performance issues. See Custom UI for recommendations.

### Custom UI Gizmo

| Raycast distance | number | Controls the distance within which a player can interact with the UI panel if Raycast is enabled. |
| Mipmap | boolean | If enabled, allows you to adjust the level of mipmap which affects how much detail is drawn when viewed from a distance. |
| Focus Prompt | boolean | Determines if Mobile/Web can interact with the UI. If disabled, Mobile/Web players cannot interact, but VR players can unless Raycast is disabled. |
| Focus prompt distance | number | Controls the distance within which a player can interact with the UI panel if Focus Prompt is enabled. |

 TypeScript: Custom UI Gizmos are referenced as() the `UIGizmo` class from `horizon/ui` with no properties or methods. For more information on `horizon/ui` see Custom UI Limitations: Custom UI Gizmo and their bindings will cause performance issues. See Custom UI for recommendations.

### Debug Console Gizmo

 Description: Allows creators to monitor the console for messages in Play and Publish visitation modes. Debug consoles are never visible to non-collaborators on the world.
|  |
|  |
| Visibility | Edit Mode Only, Edit and Preview Mode, or In Published World | Determines which visitation modes testers, editors, and the the owner can see the Debug Console Gizmo. |

 TypeScript: Debug Console is referenced as `Entity` instances with no additional scripting capabilities.

### Dynamic Light Gizmo

 Description: Casts movable and changing light during runtime. It can move, rotate, change
intensity, etc. If you don't need the light to change, use a static light for better performance.
|  |
|  |
| Light Type | Point or Spot | Type of light. A point light is a point of light emitting in all directions (like a small bulb). A spot like is a "cone" of focused light (just like real spotlights). |
| Color | Color | RGB values between 0.0 - 1.0 |
| Intensity | number | Light brightness (0-10). |
| Falloff Distance | number | Distance light travels (0-100). |

 TypeScript: dynamic light gizmos are referenced as() the `DynamicLightGizmo` class with the following properties (light type and color are not modifiable in scripts):

```
// DynamicLightGizmo
color: HorizonProperty<Color>
intensity: HorizonProperty<number>
falloffDistance: HorizonProperty<number>
```

### Environment Gizmo

| Custom Light Intensity | boolean | If enabled, allows you to adjust the Light Intensity property. |
| Light Intensity | number | Sets the brightness of global lighting in the world. Accepts values between 0.0 and 2.0 with 1.0 as the default. |
| Custom Fog Color | boolean | If enabled, allows you to adjust the Fog Color property. |
| Fog Color | Color | Sets a custom color to the fog in your world. |
| Fog Density | number | Sets how dense or thick the fog is. Accepts values between 0.0000 and 0.1000. |
| Show Grid | boolean | Determines whether the world grid is visible at x:0, y:0, z:0. |
| VOIP Settings | Environment, Default, Nearby, Extended, Whisper, or Mute. Default is default. | Sets the default VOIP setting for all players in your world. |

 Typescript: TypeScript: Environment Gizmos are referenced as Entity instances with no
additional scripting capabilities. Limitations:
• Multiple Environment Gizmos are allowed, but only one can be active at a time.
You cannot use typescript to directly change their 'Active' property. You can use
asset spawning to add a new Environment Gizmo dynamically that will become the
new 'Active' gizmo.
• When spawning multiple Environment Gizmos, the original Environment Gizmo may
not reactivate when all other gizmos despawn. It might be safer to respawn your
original Environment Gizmo when needed.

### In-World Item Gizmo

 Description: Used to sell In-World Items to users in your worlds. See the in-world purchases section for detail.

### Media Board Gizmo

 Description: Allows players to scroll through pictures that have been shared to the world
and approved by the creator.
|  |
|  |
| LoD Radius | number | Determines at what distance(in meters) the media board will appear for players. |
| Panel UI Mode | Light Mode or Dark Mode | Set the view for the gizmo. |
| Pinned Page | number | Up to 30 photos can be listed, each photo is a page numbered 1-30. If a valid number if used here, the media board will always show that page. |
| Deterministic Ranking | boolean | If enabled, photos will be ranked by recency rather than likes. |

 TypeScript: Media Board Gizmos are referenced as the `Entity` class with no properties or methods.

### Mirror Gizmo

 Description: A stationary gizmo that allows players to see a reflection of themselves and
the world. Can be used to edit avatars and take pictures.
|  |
|  |
| Visible | boolean | Sets whether the Mirror Gizmo is visible to players. |
| Photo Capture | boolean | Sets whether players can take pictures using the Mirror Gizmo. |
| Name Tag Visibility | Show or Hide | Sets whether player name tags will appear in the Mirror Gizmo, including pictures. |
| Has Edit Avatar Button | boolean | Sets whether players can use the Mirror Gizmo to edit their avatars. |
| Has Frame | boolean | Sets whether the Mirror Gizmo has a border around the edge. |
| Aspect Ratio | 9:16, 16:9 | Determines the Mirror Gizmo's aspect ratio, making it appear in landscape or portrait mode. |
| Near Camera FPS | number | Determines the framerate of the reflection when viewed the best detail. |
| Far Camera FPS | number | Determines the framerate of the reflection when viewed the lowest detail. |

 TypeScript: Mirror Gizmos are referenced as the `Entity` class with no properties or methods Limitations: Mirror Gizmos are costly, recommend only one per world and be careful about
how much geometry it reflects in your world to avoid performance issues.

### NPC Gizmo

• Some methods that work on Players do not work on NPCs, e.g. `GrabbableEntity.forceHold()`, for which `AvatarAIAgent.grabbableInteraction.grab()` should be used instead.
• NPCs do not persist their PPV values past world shutdown.

### ParticleFx Gizmo

 Description: Play built-in particle effects (smoke burst, water spray, muzzle flare, camp
fire, etc). Available from two places in the editor:
1. Gizmo ParticleFX: Created via Build Menu's Gizmos section
2. Asset ParticleFX: Created via Asset Library's VFX category

 Gizmo ParticleFX Properties: | Property | Type | Description | |---|---|---| | Play on Start | `boolean` | Auto-play when the worlds starts (or when it is spawned in) | | Looping | `boolean` | Repeat effect continuously | | Preset | Dropdown | Select from predefined
particles | | Preview | Button | Test effect in the desktop editor | Asset ParticleFX Properties: | Property | Type | Description | |---|---|---| | Prefab Name | Dropdown |

### ParticleFx Gizmo

 The `player` property defaults to all players, if not specified. `oneShot` allows you to override the looping property. `fromStart` is a nuanced expert-level feature; it defaults to `true`. Effects have limited resources (such as a maximum number of particles). When
playing an effect while it is already playing the `fromStart` property lets you specify whether the "already playing" or the "new play" gets
more priority:
• `fromStart: true` prioritizes the new effect instance.
• `fromStart: false` prioritizes completing the current effect.

 bug `oneShot` is currently being ignored. Currently (Feb 2025) the `oneShot` property has no impact on whether an effect loops or not. It will also use the
value in the Looping setting. This is a bug.

### Projectile Launcher Gizmo

• High projectile speeds may cause collision detection issues

 Note that empty objects and groupsbehave differently with the projectile launcher. When a projectile launch is hit, Horizon checks if it has a parent and if the parent is a group. If there is a group parent, it uses that as the
entity. Otherwise it uses the original entity it started with. Thus a group will
appear to "bubble up" one level; empty objects do not.

### Quests Gizmo

 Description: Displays a list of Quests available in your world for players to track their
progress. See the Quests section for full details.

### Raycast Gizmo

(an entity with no parent) it will return `targetType` as `RaycastTargetType.Static` and there will not be a `target` field present. Here's the algorithm that is used (it is tag bubbling): ![Entity tag bubbling algorithm diagram.](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/480737365_656797466858208_6408611987938000829_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=AzS8QGV4JZcQ7kNvwF25g-s&_nc_oc=AdmVitiz-3tXTngelxS0qOT6iPR46OFjwZI5tVOvxxpjGOQRE5eBihMvVoDXUdLxpU4&_nc_z...
|  |
|  |
| Shape | Cuboid, Ellipsoid, Disk, or Rectangle | Determines the shape of the static light, affecting how the light is casted onto the surrounding geometry. Cuboid and Ellipsoid are omnidirectional, while Disk and Rectangle have a visual directional arrow. |
| Color | Color | Sets the color of the light coming from the Static Light Gizmo. |
| Intensity | number | Sets the intensity of the light emitted from the Static Light Gizmo. Values between 0.0 and 100.00 |

 Typescript: Static Light Gizmos are referenced simply as the `Entity` class.

### Sublevel Gizmo

 Description: An entity that helps manage sublevel spawning. Properties: The first property is called "Sublevel Type", which can be set to `Deeplink` or `Exclude`:
• Use `Deeplink` in the world that will load in the sublevel (the container). You can then use this entity as() a SublevelEntity to stream the level in. When this setting is used, 2 more settings appear:
  • Sublevel Initial State determines the state of the sublevel at world-start. It can be `Active` (which means the sublevel is fully present to players), `Loaded` (meaning that the sublevel is fully ready, just waiting to be "shown"), or `Unloaded` (none of the data is present or ready). See advanced spawning for more information on these options.
  • World Id is the world that this entity will stream in (the sublevel). There is a
thumbnail picture to click on that will open a "world selector".
• Use `Exclude` in a world that is meant to be streamed in (a sublevel). Any entities that are children (or descendants) of an "Exclude Sublevel" will not load when the sublevel is streamed into the
"container world".
  • Example, in the sublevel world you can have a spawn point which is a child of an
"Exclude Sublevel" gizmo; that makes it easy to test the sublevel world, but
the spawn gizmo won't load in when the container world streams this world in.

 TypeScript: When the sublevel entity has "Sublevel Type" set to "Deeplink" you can then
use the entity as() a SublevelEntity to stream the level in.

### Text Gizmo

#### Using a Text Gizmo

 The initial text of a text gizmo can be set in the Properties panel. Changing
the text after that can be done via the `text`read-write property on the `TextGizmo` class, such as:  `this`.`entity`.`as`(`TextGizmo`).`text`.`set`(`'Hello World'`)` Auto Fit Property The text gizmo has the property auto fit, which is only settable in the Properties panel. When it is set to `true`, the font size will change to fit the scaled extents of the text gizmo. This is
useful for making signs, for example; but, it can look weird to have all signs
using slightly different text sizes. You'll have more control of the text, and
have more consistency in the world, if you turn auto fit off. Note Text gizmos contribute to draw calls.

#### Text Gizmo Limitations

 The total length of the text, including all markup, cannot be longer than 1000
characters. If the text is longer than 1000 characters, the text will be
truncated. The text gizmo only supports the English characters (essentially whatever can be
typed on an English keyboard without any modifier keys). This means that the
text gizmo is not capable of displaying any of the following: á ê ï o ū ç ñ ¿ 月
😂, for example.

#### Text Gizmo Markup

 Horizon exposes Unity's TextMeshPro markup. The rest of this guide is a summary
of [Unity's TextMeshPro documentation](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichText.html).

#### Text Gizmo Tags

##### Example

 `this is <b>bold</b> text` will render as this is bold text Tags that are never closed stay active. The bold attribute starts being applied once `<b>` is encountered and stops when `</b>` is encountered. The closing tag is optional, and if it is omitted, the
attribute will continue to be applied until the end of the text.

##### Example

 `this is <b>bold text` will render as this is bold text

##### Text Gizmo Tag Parameters

 Some tags accept a parameter, which is specified after the tag name and an
equals sign.

#### Text Gizmo Tags

 Text markup is able to modify the contents (e.g. making all letters uppercase),
styling (such as size or color), and layout (such as alignment, rotation, and
spacing) of the text. Markup is specified using tags, which are a word surrounded
in angle brackets (e.g. `<b>`). Once a tag is specified, all text that comes after it will have that
attribute applied, until that tag "closes" by specifying the tag with a slash before the
name (e.g. `</b>`).

##### Example

##### Example

 ...

##### Text Gizmo Tag Parameters

#### Supported Text Gizmo Tags

|  |
|  |
| Text Decoration |   |   |   |
| b | Make text bold. | This is <b>bold</b> text. |   |
| u | Make text underlined. | This is <u>underlined</u> text. |   |
| i | Make text italicized. | This is <i>italicized</i> text. |   |
| s | Make text have a strikethrough. | This is <s>strikethrough</s> text. |   |

| color | Set the text color. Parameter: A hex RGB value with either 1 or 2 digits per component (e.g. #ﬀ0000 or #f00) or RGBA (e.g. #ﬀ0000ﬀ or #f00f). You can also specify a color by name. The following are supported: black, blue, green, orange, purple, red, white, and yellow | This is <color=#f00>red<color=#0000ff> and blue</color> text. |   |

| mark | Make text highlighted (on top of the text). Parameter: A hex RGB color with 2 digits per component (e.g. #ﬀ0000) or RGBA (e.g. #ﬀ0000ﬀ). | This is <mark=#ffff007f>highlighted</mark> text. |   |
| alpha | Set the text alpha. Parameter: A hex two-digit value (e.g. #ﬀ). | This is <alpha=#4f>transparent</alpha> text. |   |

| size | Change the font size of text. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | <size=75%>small</size>, <size=18>medium</size>, and <size=2em>large</size> |   |
| font | Change the font of text. Parameter: One of the following: anton sdf bangers sdf electronic highway sign sdf liberationsans sdf oswald bold sdf roboto-bold sdf default | This is <font=bangers sdf>vibrant</size> text. |   |

| material | Change the material of text. Parameter: The name of the material used to render the current font. The following combinations are supported: anton sdf - anton sdf - drop shadow - anton sdf - outline bangers sdf - bangers sdf - drop shadow - bangers sdf - outline - bangers sdf glow - bangers sdf logo liberationsans sdf - liberationsans sdf - metalic green - liberationsans sdf - overlay roboto-bold sdf - roboto-bold sdf - drop shadow - roboto-bold sdf - surface | <font=bangers sdf>bangers sdf<br><material=bangers sdf glow>bangers sdf glow<br><material=bangers sdf logo>bangers sdf logo |   |

| gradient | Render a gradient over text. If the text is not white, the gradient will be "blended" with the text color. Parameter: One of the following: | This is <gradient=Yellow to Orange - Vertical>stylish</gradient> text. |   |
| uppercase | Make text uppercase. | This is <uppercase>biG</uppercase> text. |   |
| lowercase | Make text lowercase. | This is <lowercase>SmAlL</lowercase> text. |   |
| smallcaps | Make text uppercase but small. | This is <smallcaps>biggish</smallcaps> text. |   |
| sup | Make text superscript. | Math like x<sup>2</sup> is fun! |   |
| sub | Make text subscript. | Chemistry like H<sub>2</sub>O if cool! |   |

| rotate | Rotate the letters within text. Parameter: An angle in degrees (e.g. 45). | This is <rotate=-20>rotated</rotate> text. |   |
| Vertical Layout |   |   |   |
| br | Insert a line break. | This is a<br>line break. |   |
| line-height | Set the line height for the current line and those that follow. <line-height=200%>line A<br><line-height=100%>line B<br><line-height=50%>line C<br>line D |   |   |
| voffset | Shift the "cursor" vertically up or down (impacting the text that comes next). | do<voffset=2em>mi<voffset=1em>re |   |
| Horizontal Layout |   |   |   |
| align | Set the alignment of the current line and those that follow. Parameter: One of the following: left, center, right, justified, or flush. | <width=150><align=right>hello<br><align=left>world |   |
| width | Set the width of the current line and those that follow. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | <width=150><align=right>hello<br><align=left>world |   |

| indent | Set the indent level for this line and all lines after it. It applies to lines created with <br> or due to wrapping. If you only want to indent lines made with <br>, use line-indent. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | <indent=25%>This is a kind of boring sentence.<br><indent=0%>Followed by a less interesting one. |   |

| line-indent | This is the same as "indent" but it only applies to manual line breaks made with <br> and not line breaks causes from wrapping (e.g. when using the width attribute). Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | <line-indent=25%>This is a kind of boring sentence.<br>Followed by a less interesting one. |   |

| pos | Set the position of text cursor for the rest of the line. When the tag closes with </pos> the cursor returns back to where it was. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | And a step<pos=3em>to the right! |   |
| space | Insert whitespace. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | Let me...<space=3em>think |   |

| margin | Set the margin for the current line and those that follow. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | This is a kind of boring sentence.<br><margin=4em>Followed by a less interesting one. |   |
| margin-left | Set the left margin for the current line and those that follow. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | This is a kind of boring sentence.<br><margin-left=4em>Followed by a less interesting one. |   |

| margin-right | Set the right margin for the current line and those that follow. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | This is a kind of boring sentence.<br><margin-right=4em>Followed by a less interesting one. |   |
| cspace | Modify the spacing between letters. A positive value spreads them out and a negative value brings them closer together. Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | This is <cspace=1em>crazy |   |

| mspace | Modify the width of each letter, turning the font into a monospace font (meaning every character takes up the same horizontal space). Parameter: A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | This is <mspace=1em>whimsy</mspace> text. |   |
| Glyphs / Sprites |   |   |   |
| sprite | Render a builtin sprite. Notice that this tag takes a second attribute called "index" that specifies which sprite to render in the set. Parameter: Only "dropcap numbers" is currently supported. | <sprite="dropcap numbersz" index=3> |   |
| Parsing |   |   |   |
| noparse | Disable parsing on text. | Is <noparse>this <b>bold</b></noparse> or is <b>this</b>? |   |

#### Text Gizmo Limitations

#### Text Gizmo Markup

#### Text Gizmo Tags

#### Supported Text Gizmo Tags

 Description: The text gizmo is a 2D surface on which text can be rendered. It supports a
wide variety of markup commands that allows changing color, size, font, bold, italics, underline,
vertical and horizontal offsets, line height, alignment, and more.
|  |
|  |
| Text | string | Sets the text displaying on the Text Gizmo. |
| Auto Fit | boolean | Automatically determines the size of the font. If disabled, you can set the size manually. |
| Fixed Font Size | number | Sets the font size of the text when Auto Fit is disabled. |

 Notes:
• When using fixed font size, the rendered size of text is a combination of the
fixed font size and the scale properties of the text gizmo itself

 Typescript: Text Gizmos are referenced as the `TextGizmo` class with the following properties.

```
//Properties
text: HorizonProperty<string>; //The content to display in the text label
```

#### Using a Text Gizmo

#### Text Gizmo Limitations

#### Text Gizmo Markup

#### Text Gizmo Tags

#### Supported Text Gizmo Tags

### Trigger Gizmo

    'empty',
    [PropTypes.Entity]
  )
}

 Limitations: Using too many Trigger Gizmos can affect performance due to their impact on
the physics system for collision detection.

### Trigger Collisions

enters a trigger, the group and its children can cause `OnEntityEnterTrigger` events as long as they have the right tags. When a trigger sends an OnEntityEnterTrigger event it checks to see if the trigger was previously unoccupied; if so, then
the "secret" occupied is also sent to the trigger. Likewise, if this is an `OnEntityExitTrigger` event and the trigger is now unoccupied, then the "secret" empty event is also sent to the trigger.

### World Leaderboard Gizmo

 Description: Used to track and display sorted player scores in your world. See the leaderboard section for full detail.

### World Promotion Gizmo

 Description: Used to show a sign in a world that offers to let players "save the world for
later" in the bookmarked worlds.
|  |
|  |
| Promotion Type | Save Panel | This option cannot currently be changed. |
| Panel UI Mode | Light Mode or Dark Mode | Determines the color theme. Light vs dark refers to the background color of the gizmo. |

 TypeScript: World Promotion gizmos are referenced as `Entity` instances with no additional scripting capabilities.

 All intrinsic entity types are listed in the table below, each of which link to detailed documentation.
|  |
|  |
| Avatar Pose | Entity |
| Box Collider | Entity |
| Capsule Collider | Entity |
| Custom UI | Entity |
| Debug Console | Entity |
| Door | Entity |
| Dynamic Light | DynamicLightGizmo |
| Empty Object | Entity |
| Environment | Entity |
| Group | Entity |
| In-World Item | IWPSellerGizmo |
| Media Board | Entity |
| Mesh | MeshEntity |
| Mirror | Entity |
| Navigation Volume | Entity |
| NPC | AIAgentGizmo |
| ParticleFx | ParticleGizmo |
| Projectile Launcher | ProjectileLauncherGizmo |
| Quests | AchievementsGizmo |
| Raycast | RaycastGizmo |
| Script | Entity |
| Snap Destination | Entity |
| Sound | AudioGizmo |
| Sound Recorder | AudioGizmo |
| Spawn Point | SpawnPointGizmo |
| Static Light | Entity |
| Sphere Collider | Entity |
| Sublevel | SublevelEntity |
| Text | TextGizmo |
| TrailFx | TrailGizmo |
| Trigger Zone | TriggerGizmo |
| World Leaderboard | Entity |
| World Promotion | Entity |

  
### Avatar Pose Gizmo

### Collider Gizmo

### Custom UI Gizmo

### Debug Console Gizmo

### Door Gizmo

### Dynamic Light Gizmo

### Environment Gizmo

### In-World Item Gizmo

### Media Board Gizmo

### Mirror Gizmo

### Navigation Volume

### NPC Gizmo

### ParticleFx Gizmo

### TrailFx Gizmo

### Projectile Launcher Gizmo

### Quests Gizmo

### Raycast Gizmo

### Script Gizmo

### Snap Destination Gizmo

### Sound Gizmo

## Assets

### Managing Assets

 In the Assets panel and the [Creator Portal Assets section](https://horizon.meta.com/creator/assets/) you can edit assets, remove assets, create asset folders, move assets into
asset folders, and so on.

### Referencing Assets (Props and IDs)

#### Asset as() method

 You can convert an `Asset` instance into its specific type using the asset `as()` method, which behaves just like the Entity as() method. For example:  `const` materialAsset`:` `MaterialAsset` `=` asset`.`as`(`MaterialAsset`)` Once you call `as()` on an asset, you can store that "casted" asset (in a `let`, `const`, or `class` member) and you don't need to call `as()` on it again. Note that `as()` returns the same asset back, preserving equality. Thus after the line above, `materialAsset === asset` would evaluate to `true`. The Asset] `as()` method always succeeds! Do not cast to the wrong type! The `as()` method will always return an instance of the requested type. This means that

### Referencing Assets (Props and IDs)

 You need an instance of the `Asset` class in order to spawn, fetch text data, or modify the material/mesh/style/texture on a mesh. There are two ways to get an instance of `Asset`:
1. Props: Create a Component property with type `PropTypes.Asset` and then when the script is attached to an entity you can drag the asset from the Assets panel into the property slot in the
Properties panel.
2.  Direct Allocation: You can call `new Asset` with the asset id (which you can find by clicking on an asset in the Assets
panel). The constructor takes an optional second argument if you want to instance a
specific version of the asset (you can also find version ids when clicking on an asset and
...

### 3D Model Asset

#### MeshEntity Class

 Every Entity that has a 3D mesh (including the built-in "CMI Primitives") can be used as a `MeshEntity` (accessed using the Asset as() method). These come from 3D Model Assets. You can apply a tint, modify color brightness, change the texture, change the material, or change the mesh.
|  |
|  |
| setMaterial | Change a material |
| setTexture | Change the texture |
| setMesh | Change the mesh |
| style | Change the tint color, tint strength, and overall brightness of the material |

  
#### MeshEntity Style

 The MeshEntity class has a property `style` of type `EntityStyle`. You can use it for tweaking the visual presentation of the `MeshEntity`. The `style` property only works if the `MeshEntity` has a texture. So, for example, a VXC (vertex-lit) material cannot have its style modified. `EntityStyle` has a few read-write Horizon properties:
|  |
|  |
| brightness | number (0 to 100) | 1 | Luminance adjustment. 0 is black 1 is no change 100 is very bright. |
| tintColor | Color | white (1,1,1) | A color to mix into the base color. |
| tintStrength | number (0 to 1) | 0 | The amount to mix tintColor into the base color. 0 is no tint 1 is fully tinted  |

#### MeshEntity setMesh

since the new mesh may have to be downloaded, have its lighting computed, have
its collider updated, etc.

### 3D Model Asset

 Description: A 3D Model Asset is 1, or many, 3D meshes with associated materials (and
possibly textures). Creation: To create a 3D model asset go to the Assets panel and click "Add New" or go to
the [Creator Portal Assets section](https://horizon.meta.com/creator/assets/) and click "Import". Then add [fbx](https://www.autodesk.com/products/fbx/overview) files and images (typically created in digital content creation tools, DCCs,
such as [Blender](https://www.blender.org/), [ZBrush](https://www.maxon.net/en/zbrush), or [Maya](https://www.autodesk.com/products/maya/overview) along with GIMP or Adobe Substance Painter). To learn about creating these files, see the section on Custom Model Import. Updating: To update the contents of a 3D Model Asset, find the asset in the Assets
...

come from. These entities will be used to create the world that players move
around in, by creating empty objects and groups of them, grabbables to pick up, attachables to wear, physics elements to interact with, and all other things in a world. These assets are how you
create MeshEntities, on which you can make modifications via scripting.

#### MeshEntity Class

#### MeshEntity Style

#### MeshEntity setMesh

#### MeshEntity setMesh

### Material Asset

material may need to be downloaded and processed. Material slots If a mesh uses multiple materials, you must specify which slot to update using
the `materialSlot` option. Slots can be referenced by index or by using the Unreal naming
convention: a material name ending in `_skin##` will determine a slot index (e.g. `face_skin00` is slot `0`; `face_skin03` is slot `3`). You cannot specify a slot number higher than the number of materials in the
original material. See more info [here](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/multiple-materials-per-mesh).

### Text Asset (JSON)

 Description: Text Assets make it easy to store (and version) `string` or [JSON](https://en.wikipedia.org/wiki/JSON) data. You could also paste the data into a TypeScript file, but Text Assets
make it much easier to manage, share, version, etc. Creation: To create a text asset go to the Assets panel and click "Add New" or go to the
[Creator Portal Assets Section](https://horizon.meta.com/creator/assets/) and click "Import". Usage: To use a text asset, first get it as an Asset instance. Then call `fetchAsData` on it:

```
// Asset
fetchAsData(
  options?: Partial<FetchAsDataOptions>
): Promise<AssetContentData>;
```
 fetchAsData options: The optional `options` parameter in `fetchAsData` lets you specify if you want to "skip the cache":

```
type FetchAsDataOptions = {
  skipCache: boolean;
};
```
 Skipping the caches means to fetch the latest data from the servers. If you
don't provide the options then `skipCache=false` is used. Regularly fetching data with `skipCache=true` can greatly degrade the performance of your world. fetchAsData return type: The `fetchAsData` function returns `Promise<AssetContentData>`. The `AssetContentData` class has two relevant methods:

```
// AssetContentData
asText(): string
asJSON<T = JSON>(): T | null
```
 The `asText` method will return the JSON serialized (e.g. as if with [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)). The `asJSON` method returns `null` if the the asset is not a text asset with JSON. Otherwise it returns the JSON
data casted to the type `T`. `asJson()` does no work to ensure that the data is compatible with the type `T`. You should do runtime checks to ensure that the data has the right structure
before using it. We recommend included a type "tag" and version number in the
JSON if possible, to ease these checks. This is the same advice we give for persistent object data. See that section for more details.

### Template Asset

 Description: Template Assets are similar to [Prefabs in Unity](https://docs.unity3d.com/Manual/Prefabs.html). They allow you to create an asset that you can instantiate, and then edit such
that edits propagate to all instantiations (without losing any overrides on instantiations). Creation: To create a Template Asset, select a number of entities in the desktop editor.
Then right-click and choose "Create Asset". Fill out the form, with "Asset
Type" set to "Template Asset". Read the documentation on how file-backed scripts interact with template assets. Template assets can be nested. Updating: Once you have a Template Asset (by creating one or having on shared with you),
you can edit it. Find the asset in the Assets panel, right-click it, and choose
"Edit Template Definition". This will reconfigure the entire desktop editor to be editing a new "mini
world" which just the contents of the asset. Whatever you create / edit / delete
here will end up being the new contents of the asset. When you are done, click
"Save" (or click "Discard" if you don't want to keep your edits). It will ask you
if you want to propagate the changes outward to instantiations of the asset.
Also, in all worlds that use the asset, the "available asset updates" button will
get a blue dot; you can use that button to accept the newer versions of the asset.
Do not override properties on children of an instantiated template asset. When a template asset is updated, all instantiations will lose any overrides
that are not on the root. If you want to set overrides on the "sub-elements" you should split the
template into smaller one. Instantiation: You can drag a template asset out from the Assets panel and into the world to
instantiate its contents. You will get only one root entity: if the asset
describes only 1 entity then that is wha will be instantiated; it the asset describes
multiple entities then you will get an Empty Object with all the entities as children. You can then modify the properties on the root entity (such as attaching a component, changing props, or adjusting any entity settings). Those overrides will persist even if you update the asset (described above). Unlinking: When you instantiate a template asset you can "unlink" the entities from the
asset. This allows you to modify the internals, delete some pieces, etc. But when
you do so, it will no longer get updates when the template is updated. If you
want to do an unlink, select an instantiated root entity, right-click it and
choose "Unlink instance root". Spawning: If you spawn a template asset into a world, you will get a single entity (if the asset only
has 1) or you will get an Empty Object with all the entities as children. In either case, the entity created is the root entity.

### Legacy Asset Group

 Recommendation: do not use You should use Template Assets which support all the same functionality and more (which is why this kind is "legacy"). Description: A Legacy Asset Group represents a collection of entities, property settings, and/or scripts. Unlike Template Assets, they do not allow you to automatically update all instances whenever you make
an edit. Creation: To create a legacy asset group, select some assets in the Desktop Editor and
then right-click. The dropdown will include the "Create Asset" option. In the
dialogue that appears, change "Asset Type" to "Legacy Asset Group". Instantiation: You can drag a legacy asset group out from the Assets panel and into the world
to instantiate its contents. Spawning: If you spawn a legacy asset group into a world, the entities will be in the array in the
same order that you selected the entities when you made the asset. The first entity
you select, when making the asset, becomes the root entity.

 Assets represent data that can be created and used in a world. Assets never contain actual entities. Instead, assets contain data such as a texture, text, mesh, audio. Some asset types (Template Assets and like Legacy Asset Groups) contain instructions on how to create entities. An asset may represent "a grabbable blue cone with a script attached". When you drag that asset out of the
assets panel, it will create a new instance of a blue cone MeshEntity with the correct properties applied and script attached. You could drag out the
asset again and get another new entity. When an asset is "dragged out" of the
assets panel, we say the entities are instantiated (from the asset). When an asset is spawned, we say the entities are spawned (from the asset). Asset types: There are various types of assets that are split into two categories:
• Entity Asset Types: Assets that are used to create (configured) entities.

• Data Asset Types: Assets that provide data (most of which are used to modify a MeshEntity).

 Note: 3D Model is in both groups (although it can only be used as data, as a mesh, when there
is exactly 1 mesh in the asset).
|  |
|  |
| 3D Model | MeshEntity or Empty Object (with MeshEntity children) | Assets panel or Creator Portal Assets section |
| Audio | Sound Gizmo | Gen AI |
| Legacy Group | Array of Entity | Right-click then "Create Asset" |
| Template | Array of Entity | Right-click then "Create Asset" |

|  |
|  |
| Single Mesh 3D Model | Use setMesh on a MeshEntity | Assets panel or Creator Portal Assets section |
| Material | Use setMaterial on a MeshEntity | Assets panel |
| Text | Use fetchAsData on an Asset | Assets panel or Creator Portal Assets section |

## Custom Model Import

### SubD vs Custom Models

#### Horizon Lighting

 Horizon uses [vertex lighting](https://en.wikipedia.org/wiki/Gouraud_shading). You'll notice that dynamic lights (e.g. if you make a flashlight) don't look good on your meshes unless you
tessellate sufficient (cut triangles into smaller triangular to create a higher
density of vertices). Horizon has a custom built [global illumination (GI)](https://en.wikipedia.org/wiki/Global_illumination) system that calculates [ambient occlusion (AO)](https://en.wikipedia.org/wiki/Ambient_occlusion) (so that meshes self-shadow) as well as color bounce and color bleed. All of
this lighting information is baked onto the meshes and into light probes (some of
which is stored in the world snapshot). This is one of the main reasons that spawning is slow; it is computing the lighting. Sublevel streaming is so much faster because lighting is pre-computed at the (static) world level. If you want to create meshes that disable Horizon's GI system then you should use the [unlit material](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models#unlit-materials).

#### Horizon Lighting

bake geometric detail into textures), make transparent meshes, create custom
colliders, offset pivots, and more.

MeshEntity class which can be tinted and modified with scripting. The guides for creating custom models are [here](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/getting-started-with-custom-model-import/); There are a number of [supported material types](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models). Note No post-processing, custom shaders, normal maps, rigs, skinning, baked
animations, LODs, mipmaps, or custom particle effects. Currently there are no post-process rendering options which makes things like
bloom, motion blur, sepia, etc impossible. Likewise, you cannot write custom
shaders or use normal / bump / displacement maps. Other advanced features such as
rigging, skinning, LODs, mipmaps, terrain, etc are currently unavailable. Emissive
materials will look bright but don't actually contribute to the ambient lighting.

### SubD vs Custom Models

 Horizon has two different mesh+rendering systems. They cannot be mixed; you must
choose which you want to use when creating a world. If you find any workarounds to mix them in one world, you may experience
unexpected and unpredictable results.
1. SubD ("primitives") - This is the original "legacy" system in Horizon. Worlds are created solely
using primitive shapes (cub, sphere, cylinder, cone, etc). The primitives are
implement using [subdivision](https://en.wikipedia.org/wiki/Subdivision_surface); you'll notice that as you get closer to the shapes they will subdivide and
become smoother and smooth. Since Horizon uses vertex lighting this means that static lights and dynamic lights can appear to have decent spatial resolution.
2. Custom Models ("tri-mesh") - This system uses a more standard rendering pipeline of triangular mesh
(tri-mesh) models with materials and textures. Here you can make detailed meshes (and
bake geometric detail into textures), make transparent meshes, create custom
colliders, offset pivots, and more.

  
#### Horizon Lighting

## Scripting

### Creating and Editing Scripts

#### Syncing Scripts

 When you create, edit, or delete scripts in a world's scripts folder, Horizon
automatically tracks and syncs those edits to the world snapshot. Tip If syncing doesn't appear to be working, delete the .editor file, leave world, and come back.

#### Scripts in Source Control

 When you open a world in the editor, Horizon checks to see if the scripts match
what is saved in the world snapshot. If they don't match, it will ask if you want to update the world with the
scripts you have in the folder. Thus, the scripts folder acts like an "auto-sync
directory". This means that you can put a git repo in the scripts folder, share the
same repo with different "forks" of a world, use submodules to share scripts,
and more!

### Horizon Properties

 Calling `set` on a Horizon property does not change the value immediately. See the section on scene graph mutations for the details. There is an additional class `HorizonSetProperty` which is used for managing properties that act like Sets such as entity tags. You can `get()` and `set(values)` the values; additionally there are methods for `length()`, `contains()`, `clear()`, `add(value)`, and `remove(value)`. Note that the `HorizonSetProperty` is meant to act like a `Set`. However the `get()` and `set()` methods both use arrays, for convenience and simplicity. Horizon Property Example Here is some of the PhysicalEntity class:

```
class PhysicalEntity extends Entity {
  gravityEnabled: WritableHorizonProperty<boolean>
  locked: HorizonProperty<boolean>
  velocity: ReadableHorizonProperty<Vec3>
 // ...
}
```
 From the above definition we can discern that we can do the following with a

### Types

#### Comparable Interface

however `a === a` is `true` because both sides are the same class instance (the same reference).

#### Copying vs Mutating Methods

#### Vec3

#### Color

#### Quaternion

### World Class

 The `World` class represents the currently running instance and the world's persistent data.
|  |
|  |
| System Events |   |
| static onUpdate | The built-in LocalEvent for subscribing to the on-update frame event . |
| static onPrePhysicsUpdate | The built-in LocalEvent for subscribing to the pre-physics frame event . |
| Instance Management |   |
| reset | Reset the instance . |
| matchmaking | Manage the instance's open setting . |
| Instance Players |   |
| getPlayerFromIndex | Find which, if any, Player has the given index . |
| getPlayers | Get all current players in the instance . |
| getServerPlayer | Get the player representing the server . |
| getLocalPlayer | Determine which player's client is running the current code . |
| ui | Show a popup or tooltip UI to players. |
| World Entities |   |
| getEntitiesWithTags | Find entities in the instance. |
| spawnAsset | Spawn an asset into the instance. |
| deleteAsset | Delete spawned entities from the instance. |
| World Data |   |
| id | Get the unique id for this world. |
| leaderboards | Manage player leaderboard scores . |
| persistentStorage | Manager persistence (player saved data) . |

### Components

#### Component Class

 Scripting an entity requires attaching a component to it. Creating Components is the core of scripting. To create a component, you
subclass `Component`, override the `start` method (code that runs when the entity "awakens"), and register the component. A minimal component looks like:

```
class BasicComponent extends Component<typeof BasicComponent> {
  override start() {}
}
Component.register(BasicComponent)
```
 The most unusual part is the `<typeof BasicComponent>` part. You must always put the component's class name within the angle brackets
(`<>`) after `Component` (this is a trick Horizon uses for component props).

#### Attaching Components to Entities

 Registering: the code `Component.register(BasicComponent)` above must be called for every component subclass that you create. This call
results in the component appearing in the Attached Script dropdown in the desktop editor. The component will appear with the format filename:componentName. So if the `BasicComponent` above is inside the TypeScript file `Demo` then the script will appear in the Attached Script dropdown as `Demo:BasicComponent`. This allows you to put multiple components in a file. The `Component.register` method takes an optional second argument to override the name in the dropdown.

So if the following line of code is in a file `Obstacles`:  `Component`.`register`(`SpinningTurntableComponent`,` `'Spinner'`)` then the class will appear in the Attached Script dropdown as Obstacles:Spinner. If you want to override the name in `Component.register`, only use letters, numbers, and underscore in the name. Attaching: once a component subclass is registered, you can click an entity in the
desktop editor, open the Properties panel, and choose it from the Attached Script
dropdown. That entity will now run the code in that component. Once you attach a script, the Properties panel will show all
the component's properties as editable fields. The next section explains how to
add properties to a component.

#### Component Properties

 Components can define properties that appear in the Properties panel by
implementing the optional static method `propsDefinition`. When you attach the component, these properties will be configurable in the UI and accessible via the
component's `props` field.

#### Component Properties Example

 Here's a simple example showing how to define properties:

```
import {Color, Component, PropTypes} from 'horizon/core'

class ExampleComponent extends Component<typeof ExampleComponent> {
  static propsDefinition = {
    name : {type : PropTypes.String},
    color : {type : PropTypes.Color, default: new Color(1, 0.5, 0)}
  }

  override start() {
    console.log(this.props.name, this.props.color.toString())
  }
}
Component.register(ExampleComponent)
```
 This example creates:
• A name field that shows as a text input
• A color field that shows as a color picker, defaulting to orange (1, 0.5, 0)

 The static `propsDefinition` object defines your properties. Each property needs:
• A key that will become the property name in `this.props`
• An object value containing:

 Be aware of these important Type Distinctions: Entity is a type used in code like:  `const` e`:` `Entity` `=` `...` While `PropTypes.Entity` is data used in `propsDefinition` or CodeBlockEvents. No Type CheckingTypeScript does not type-check the `static propsDefinition` object. Verify your property definitions carefully. Limitations
• Player: the `PropTypes` object includes `PropTypes.Player` but there is no way to make use of it for `propsDefinition`.
• Arrays: the `PropTypes` enum includes array versions of all types (like `NumberArray`), but there is no way to make use of them for `propsDefinition`.
• Nullable Types: Properties using `PropTypes.Entity` or `PropTypes.Asset` will always be nullable: `Entity | null` or `Asset | null`, respectively. You must check for `null` before using these properties:

```
...
static propsDefinition = {theEntity: {type: PropTypes.Entity}}

// ...

override start() {
  if (this.props.theEntity !== null) {
    // Safe to use this.props.theEntity here
  }
}
```

#### Component Lifecycle

 Components follow a strict, sequential lifecycle with 3 key parts. All
components are prepared and then all are started (this is useful for event subscriptions). Then all components are "active", running in the world. If, or when, the
editor stops, the component's entity despawns, or the component's entity prepares to change owner then they are torn down. Likewise, when a group of entities are spawned, all them are prepared; then, all of them are started.
1. Preparation - When components are created (via instance start, spawning, or after an ownership transfer):
  • Component allocation occurs
  • Constructor executes
  • Property initializers run
  • `initializeUI()` executes (UIComponents only)
  • `preStart()` executes
2. Start - After preparation:
  • `start()` executes
  • `receiveOwnership()` executes (only during ownership transfers)
  • Component becomes "active" (begins processing events and timers)
  ...
3. Teardown - When the editor stops, component despawns, or an before an ownership transfer:
  • `transferOwnership()` executes (only during ownership transfers)
  • Component is disposed, meaning that `dispose()` executes and all callbacks registered with `registerDisposeOperation` run, except for the ones where the `DisposeOperationRegistration` was already canceled or ran.
  • All [async timeouts and intervals] created with the component are canceled.
  • All event subscriptions created with the component are disconnected.

 Initializing a collection of Components When a set of components need to be initialized, all are prepared before any are started. This is important for connecting to receive events. This is true for:
• all components at the start of the instance
• all components in a group of spawned entities
• all components changing owner at the same time

 The diagram below shows the full lifecycle of a component. All green rectangle
boxes are TypeScript code executing during the Script Phase. The full breakdown a frame gives another view into when all these actions occur and the ownership transfer section explains how a "move" is implemented as one component tearing down and then a new one preparing and starting. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480610569_656797566858198_2645415609124319419_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=usAK8qpoSh0Q7kNvwGmO8e1&_nc_oc=AdkHMkbuAFK2ItrrjNNkxN7IEHEH5BS1jAQVFKBDOWL1SZegYj5JI1pNzV9517TxKZI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_Afd3l-H6C26ajIrHmRoALPFV7uv6mX1P2FK...

• Use property initializers for data (without accessing props)
• Use `preStart()` for event registration
• Use `start()` for initialization behavior

#### Async (Delays and Timers)

 There are two ways to delay code (to run it later):
• timeouts: code that will run once after a delay (unless canceled before it runs).
• intervals: code that will run after a delay, and then again after that same delay, and so
on forever (unless it is canceled).

 Canceling a timeout or an interval is called clearing it. These naming conventions are consistent with standard JavaScript. Component instances have a member `async` that provides access to functions for creating async code. For example if you
have a `component` you might write:  `component`.`async`.`setTimeout`(()` `=>` console`.`log`(`'ready!'`),` `1000` `/* ms */`)` to execute the given `console.log(...)` after 1000 milliseconds(1 second). The following methods are provided in `Component`'s `async` member:
|  |
|  |
| setTimeout | Create a timeout |
| clearTimeout | Cancel a timeout |
| setInterval | Create an interval |
| clearInterval | Cancel an interval |

 Component disposal: the `id`s returned from `setTimeout` and `setInterval` are automatically registered with the component's disposal to be cleared. Thus if you write:  `component`.`async`.`setInterval`(()` `=>` console`.`log`(`'hi!'`),` `1000` `/* ms */`)` then if, or when, `component` is torn down, the interval will be automatically canceled. Synchronization phase: the callbacks passed to `setTimeout` and `setInterval` are executed in the Synchronization Phase when async callbacks are checked for readiness. Timeouts and Intervals are not precisely timing. They make a 'best attempt' at
the delay (but may wait slightly *longer*). The methods above are not precise in when the callback runs. They will wait at
least the delay amount, but may wait longer if the system is busy. If you need precise timing, you should use the frame-based approach (see the section on running code every frame).

#### Run Every Frame (PrePhysics and OnUpdate)

#### BuiltInVariableType

#### PropTypes

 `PropTypes` is an enum representing all the same values in BuiltInVariableType. `PropTypes` is used in creating the component propsDefinition and in creating CodeBlockEvents.

```
const PropTypes = {
  Number: "number";
  String: "string";
  Boolean: "boolean";
  Vec3: "Vec3";
  Color: "Color";
  Entity: "Entity";
  Quaternion: "Quaternion";
  Player: "Player";
  Asset: "Asset";
  NumberArray: "Array<number>";
  StringArray: "Array<string>";
  BooleanArray: "Array<boolean>";
  Vec3Array: "Array<Vec3>";
  ColorArray: "Array<Color>";
  EntityArray: "Array<Entity>";
  QuaternionArray: "Array<Quaternion>";
  PlayerArray: "Array<Player>";
  AssetArray: "Array<Asset>";
};
```

### Communication Between Components

#### Receiving Events

eventually time out and be 'killed'. If an event callbacks runs for a long time it will "stall" all script execution
(since it is single-threaded). Eventually Horizon will kill a long-running
callback (but only after some number of seconds). When a long callback runs for too
long it can block most of the other system behavior and cause unexpected results.
Extremely large work-loads should be split up across frames.

#### Code Block Events

##### Built-In Code Block Events

can lead to issues. Some times TypeScript and Codeblock scripts will "fight each other" when both listening to events from the same entity. It
is a subtle bug that doesn't appear in all cases. However we recommend: do not have TypeScript and Codeblock scripts listen to events from the same entity. Example: Imagine a trigger that has a Codeblock script attached to it that listens to trigger enter on `self` (Codeblock's version of `this.entity`). If you then have a TypeScript script also connect to the trigger enter event then it turns out that neither script will receive trigger events for
that trigger.

#### Converting Between Components and Entities

 When two components are running on the same client they can directly call one another's functions (instead of going through entities and the event system). There are 2 ways to "find component instances on the local client:
1. components attached to entities: you can do `entity.getComponents()` to get all components on an entity. If only one component is attached to the
entity then the array will have 1 element in it. You can also pass in a class `entity.getComponents(ExampleComponent)` to get an array of `ExampleComponent` instances attached to the entity (which, again, will be at most one).
2. all component instances: you can run `Component.getComponents(ExampleComponent)` to get an array of all instances of `ExampleComponent` on the local client.

 Danger: `getComponents` cannot be used until start. You cannot call `entity.getComponents(...)` or `Component.getComponents(...)` in a property initializer, `initializeUI`, or in `preStart`. This information isn't ready until after the prepare state of component instantiation. Calling a method on a component. In this example we find all `ListenerComponent`s in the local client from within the `SpeakerComponent`. We are then able to directly access the `props` and the `hear` method on `ListenerComponent`.

```
import {Component, PropTypes} from 'horizon/core'

class ListenerComponent extends Component<typeof ListenerComponent> {
  static propsDefinition = {
    name: { type: PropTypes.String }
  }

  override start() {}

  hear(message: string) {
    console.log('I heard: ' + message)
  }
}
Component.register(ListenerComponent)

class SpeakerComponent extends Component<typeof SpeakerComponent> {
  override start() {
    const listeners = Component.getComponents(ListenerComponent)
    for (const listener of listeners) {
      listener.hear('Hello from Speaker!')
    }
  }
}
Component.register(SpeakerComponent)
```

### Frames

#### Frame sequence

##### Simulation Phase

 The Simulation Phase runs at the start of the frame and includes physics calculations and
avatar/animation updates.
1. Pre-Physics
  • Broadcasts the World.onPrePhysicsUpdate event locally, causing all local listeners to run.
2. Physics Updates
  • Players update their positions and pose based on locomotion inputs.
  • Animation playback is updated.
  • Physics calculations run, applying accumulated forces and torques to entities with simulated=true to update their linear and angular velocities.
  • Collisions with object and players as well as with triggers are detected; the associated CodeBlockEvents are queued to run later in the frame in the Script Phase.
3. On-Update
  • Broadcasts the World.onUpdate event locally, causing all local listeners to run.
  ...

##### Script Phase

 The Script Phase executes all event listeners, handles player input, instantiates components,
and commits pending scene graph changes.
1. Scene Graph Updates Preparation
  • Any scene graph mutations performed via property.set(...) throughout the frame thus far are copied to a side and the "pending updates"
cache is cleared. There are subtleties in how scene graph mutations are applied.
2. Component Initialization
  • New files, from world start or spawning, are executed, running all code in the top-level scope (initializing globals, running `static` class members and blocks, etc).
  • New components are instantiated (due to the instance starting, assets spawning in, or entities having their ownership transferred to this device). Those new components will all be prepared and then started.
3. Event Processing
  • NetworkEvent listeners run
  • PlayerInput callbacks run
  ...
4. Scene Graph Updates
  • The mutations prepared in step #2 are now applied. There are subtleties in how scene graph mutations are applied.
5. Final Callbacks
  • Any asynchronous callbacks (e.g., `setTimeout`, `setInterval`) that are "passed due" are run (meaning that the current time is equal to or
later than their scheduled times). Note that Horizon will limit how many async callbacks run in one frame; if too much time has been used, and there are still
async callbacks to run, it may delay running them until the next frame. Note that
events do not do this. CodeBlockEvents and NetworkEvents are all processed until the queue is empty.

##### Scene Graph Mutations

change is buffered, waiting to be applied. The changes get applied near the end of the script phase (see the frame sequence diagram), just before async handlers run. So if you modify an entity's position in an OnUpdate callback, you won't see the new value in `get()` until the async handlers run that frame. This buffering system means that modifications made during the script phase won't be visible at all in that same frame. At the start of the script phase, all pending mutations are prepared (copied to a separate buffer and cleared).
Then the frame continues with component initialization and event callbacks. Any new modifications during those callbacks get buffered for later. When it comes
time to "commit" the mutations, only the ones that were prepared at the start
get applied - newer modifications wait for the next frame. This means that:
...

##### Scene Graph Mutations

directly, or move them with physics forces, but never both at once. The same applies
to setting rotations vs using torques.

##### Synchronization Phase

### Component Inheritance

 It is not recommended to create deep hierarchies of components. We recommend you
prefer composition over inheritance and use the general guidance of: only subclass an abstract class. If you want to make your own component subclass that is meant to be further
subclassed, then this pattern should suffice (note that the abstract Parent is not registered).

```
abstract class Parent<T> extends Component<typeof Parent & T> {
  static propsDefinition = {
    name: {type: PropTypes.String},
  }
  start() {}
  abstract greeting() : string
}

class Child<T> extends Parent<typeof Child> {
  static propsDefinition = {
    ...Parent.propsDefinition,
    favoriteNumber: {type: PropTypes.Number},
  }
  start() {}
  greeting() {
    return this.props.name + ' ' + this.props.favoriteNumber
  }
}
Component.register(Child)
```

### File-Backed Scripts (FBS)

#### FBS Script Ids

##### Branched World Development Source Control Workflow Issues

 If you make clones of your main world for branching source control development
workflow, and add new scripts in the branch world, it is critically important that you make assets of the scripts in the branch world and add them
as assets to the main world before you use external source control to merge the file changes into the branch used
by the main world. Example workflow steps:
1. Clone main world for branched work
2. Branch typescript source in external revision control system for branched world
3. Create new scripts and assets in branched world
4. Check in script changes in branched world to external revision control system
branch
5. Critical: Add assets referencing new scripts from branch to the main world
6. Merge script changes in external revision control system back to main world
branch

 The reason for this is that you want to ensure that the script id used by the
FBS in the main world matches the script id for the branch world, especially any
assets created in the branch world that you plan to later spawn into the main
world. By dragging the FBS scripts as assets in to the main world, they will not get new FBS script ids, but will reference the same script ids as those in the
branch world. Then, when you use external source control to merge the typescript
to the main world, the scripts will already have the correct id. If you did this in the other order (merging the source code to the main world
before adding the scripts as assets), the merged code would appear as 'brand new'
scripts in the main world and would be assigned unique script ids that did not
match those of assets created in the branched world. Later, if you tried to spawn
those assets into your main world, you would get runtime errors about colliding
script names for different script ids.

##### Branched World Development Source Control Workflow Issues

 The reason for this is that you want to ensure that the script id used by the
FBS in the main world matches the script id for the branch world, especially any
assets created in the branch world that you plan to later spawn into the main
world. By dragging the FBS scripts as assets in to the main world, they will not get new FBS script ids, but will reference the same script ids as those in the
branch world. Then, when you use external source control to merge the typescript
to the main world, the scripts will already have the correct id. If you did this in the other order (merging the source code to the main world
before adding the scripts as assets), the merged code would appear as 'brand new'
scripts in the main world and would be assigned unique script ids that did not
match those of assets created in the branched world. Later, if you tried to spawn
those assets into your main world, you would get runtime errors about colliding
script names for different script ids.

#### Converting to FBS

when you initiated the FBS conversion. You may want to clone your world and convert that clone to FBS first to debug any
issues before converting your main world. Be aware that after updating to FBS, you will also need to update all assets
that were being used in the world to also have FBS scripts. Assets will not update
to FBS scripts automatically.

#### Typescript Scripts Workflow

 Using FBS is largely seamless to the typescript workflow, as most edits to the
scripts are done via the external editor (e.g. VSCode) without regard to in-world
script gizmos. In fact, as new typescript scripts tend to pile up at
the world at the origin (0, 0, 0), it can clean up your visual view by just
deleting all the gizmos from the world and relying on either the VSCode view or the
Scripts panel in the desktop editor to find/manage them. Note: you may need to add script gizmos for typescript FBS if you need to
reference them as imported modules in any assets you create.

#### Codeblock Scripts workflow

 Using FBS with codeblocks can be a challenging experience, as editing script
data is primarily done via accessing the in-scene script gizmos. First, script
gizmos are no longer synonymous with distinct script data. Simply copying a script
gizmo does not make a duplicate of the script data, and editing the data in the
copied gizmo will edit the data viewed in the original gizmo as well. Likewise,
deleting a script gizmo does not delete the script data. The script data is still
available in the Script->Library, and another gizmo can be instantiated. The script data is still
available in the Script->Library, and another gizmo can be instantiated. bug Codeblock script gizmos sometimes vanish in FBS worlds When editing a codeblock script in an FBS world, at times, the script gizmo may
vanish while editing. The script data hasn't been deleted, as it is still in the
Script->Library. Another gizmo can be re-spawned for the script data and
editing can continue. bug Codeblock script updates are slow when using FBSMany creators report that edits to codeblock scripts in an FBS world take a long
time to sync/update in the scripting UI, greatly slowing development speed.

#### Scripts and Template Assets

 It is highly advised to use FBS when using template assets. Template assets have UI support for identifying when asset definition updates
are needed because of version changes to FBS scripts, and for pulling in version
updates of FBS scripts to worlds that have instantiated template assets.

 File-Backed Scripts (FBS) are 'production ready' and used by many high profile worlds. The legacy
gizmo-backed script storage, while intuitive, had a number of shortcomings:
|  |
|  |
| Script size | 32 KB per script | No reasonable limit |
| Script count | Limited | No reasonable limit |
| Travel time | Impacted by script size/count | Not significantly impacted |

 FBS are 'production ready' and used by many high profile worlds. The legacy
gizmo-backed script storage, while intuitive, had a number of shortcomings:
|  |
|  |
| Script size | 32 KB per script | No reasonable limit |
| Script count | Limited | No reasonable limit |
| Travel time | Impacted by script size/count | Not significantly impacted |

 FBS Asset Module References While spawned assets will automatically import the FBS script containing
Components directly referenced by Entities in the asset, they will not do a transitive closure of all modules imported by that Component's script. You will need to ensure that the scripts
for those modules are already in the destination world, or you will need to manually include the script
gizmos for those modules in the asset definition. Otherwise, you will get a runtime
compilation error during initialization of the spawned asset. Assets reference a frozen version of FBS script data. When you create an asset, it locks in a version of the FBS script data at the
time of creation. If you later want to update the script version used by the
asset, you will need to re-create or update them to get a later script version. Using
template assets helps with this. Avoid sharing FBS scripts with untrusted partners As FBS in different worlds all reference and edit the same back end script data,
make sure that you are sharing FBS script references only with people you
trust. Any edits they make in copies of the FBS will be reflected in all instances of
the FBS in all worlds. Using template assets can limit automatic updates to published changes which must be accepted into
other worlds. Danger: Do not mix assets with FBS and Gizmo-Backed Scripts in the same world If you spawn assets with FBS and Gizmo-Backed Scripts into the same world, you
can get into very weird situations where it is unclear which script you are
editing/referencing. The desktop editor seems to refuse to allow mixing at build
time, but runtime spawning may not.

#### FBS Script Ids

#### Converting to FBS

#### Typescript Scripts Workflow

#### Codeblock Scripts workflow

#### Scripts and Template Assets

### Script File Execution

### Script Execution Timing
• On Ownership Transfer: When ownership transfers from one client to another:
  1. Existing components are disposed on the previous owner's client.
  2. New components are instantiated on the new owner's client. The file itself is not re-run during ownership transfer (since all files were run when the player joined).

• On Asset Spawn / Sublevel Stream: When an asset spawns or sublevel streams in, the following happens:
  1. All files are run (executing any top-level code) on all active clients (the server and client devices for all players in the world).
  2. All components are instantiated on the server.

### Scripting Helper Functions

## Network

### Clients (Devices and the Server)

 Horizon instances run as a distributed systems with multiple machines involved. Each machine is called a client. Clients have the full scene graph, can run code, and have a Player associated with them. There are two types of clients:
• Player Devices: a client associated with a human player. These clients receive player input,
can run local scripts, render the world from their player's camera / eyes every frame, and synchronize data with Meta's servers. For a mobile player the device is their phone or
tablet, for a PC or web-based player it is the computer and for a VR user this is
their headset (or their computer if they are tethered).
• Server: a special client that lives on Meta's servers. Its associated player is the
special server player. The server client runs all default scripts and local scripts on entities owned by the server player. The server operates just like player devices except that it skips rendering at the end of each frame.

### Entity Ownership

 Each entity in the world is owned by exactly one client. An entity's owner:
• Runs local scripts: The owning client runs the attached script on the entity (if there is one and
if it is set to local execution mode).
• Has scene graph authority: The owning client is the authority for that entity's core attributes (such as position, visibility, and collision
settings). When a client wants to modify an entity it doesn't own, it must send
a message to the owning client requesting the change.

 When an instance starts (or assets / sublevels spawn in) all entities begin owned by the server until their ownership is changed. When the owner changes, the local components attached to the entity move. When a player leaves, all entities owned by them are transferred back to the server.

### Local and Default Scripts

#### Why Local Scripts and Ownership Matter: Network Latency

 When a client modifies an entity it owns, the changes happen immediately at the
end of the current frame. But when a client modifies an entity owned by a
different client:
1. The change is sent over the network to the owning client (through the server)
2. The owner applies the change
3. The owner broadcasts the new state to all clients
4. Other clients receive and apply the new state

 This process takes at least a few frames (or more if slow networks are
involved). Using local scripts on player-owner entities can make actions feel instantaneous to the local player (with no real
impact to the other players). See the example below.

##### Example

#### Why Local Scripts and Ownership Matter: Network Latency

 When a client modifies an entity it owns, the changes happen immediately at the
end of the current frame. But when a client modifies an entity owned by a
different client:
1. The change is sent over the network to the owning client (through the server)
2. The owner applies the change
3. The owner broadcasts the new state to all clients
4. Other clients receive and apply the new state

 This process takes at least a few frames (or more if slow networks are
involved). Using local scripts on player-owner entities can make actions feel instantaneous to the local player (with no real
impact to the other players). See the example below.

#### Local and Default Scripts

 In the Script dropdown in the desktop editor, scripts can be marked as default or localexecution mode. All scripts are originally created with a default execution mode, and must be manually changed to local if so desired. The default vs local terminology is a bit confusing. The execution mode setting describes what
happens to a component when the entity it is attached to changes owner.
• Default script execution mode: all components in the file will always executes on the server, regardless of
ownership of the entity they are attached to.
• Local script execution mode: components defined in the file will "move" to execute on the client matching the new owner of the entity (every time the
owner changes).

 Component execution mode: Even though execution mode is an aspect of files, we borrow the term for
components, according to the execution mode of file they are defined in. So, we say a component has default execution mode when the file it is defined in does. We often abbreviate the terms as: default component, local component, default script, and local script. A script file's execution mode (local or default) affects how its components
run:
1. One execution mode per file: All components in a script file share the file's execution mode. However:
  • A local component can run on any client.
  • Different components in the same local script can run on different clients.
  • Different instances of the same component class in a local script can run on different clients.
2. "Local" means "movable": The term "local" means the component can run on player devices, not that it must:
  • Local components run on whichever client owns their entity.
  • If the server player owns the entity, its local component runs on the server.
  ...

#### Local and Default Scripts

3. Ownership transfer creates new components: Local components don't actually move. When their entity changes owner, an ownership transfer occurs:
  • The old component is disposed.
  • A new component is instantiated on the new owner.
  • The old component may pass data to the new one.
4. Mixed execution on one entity: Some creators have the ability to attach multiple scripts to an entity.
  • Only local components "move" when the entity owner changes.
  • One entity may have some components running on the server and others running on a player device.

#### Ownership Transfer

#### Ownership Transfer Sequence

the server player then steps #3 and #4 are merged into just one step. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480849120_656797436858211_4910455202806412283_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=zp-pfPMlPOwQ7kNvwE9LeF4&_nc_oc=AdmNzE_Yu1-3JtXAgHySwv-GzroVrQSnExGfIK2tbvrQXhPaGnzRmnfh63Q93zNsaWo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=CwQ5EQEr9t729FGoor7YOQ&oh=00_Afe1vnKp...

#### Ownership Transfer Sequence

#### Example

 The example below shows a simple script that tracks how much ammo is in a
weapon. When the gun is transferred, it maintains the same ammo count. Note that if the transfer is discontinuous the amount of ammo will be the value in the props.

```
import { Component, Player, PropTypes } from "horizon/core"

type Ammo = {count: number};

class Weapon extends Component<typeof Weapon, Ammo> {
  static propsDefinition = {
    initialAmmo: {type: PropTypes.Number, default: 20},
  };

  // props are immutable; we store ammo in a private field
  private ammo: number = 0;

  override start() {
    this.ammo = this.props.initialAmmo;
  }

  override receiveOwnership(state: Ammo | null, from: Player, to: Player) {
    if (state !== null) {
      this.ammo = state.count
    }
  }

  override transferOwnership(state: Ammo, from: Player, to: Player) {
    state.count = this.ammo;
  }
}
Component.register(Weapon)
```

#### Discontinuous Ownership Transfers

#### Automatic Ownership Transfers

#### Transferring Data Across Owners

#### Example

### Authority and Reconciliation

## Collisions

### Colliders

#### Separating a Collider from a Mesh

##### Example

 A high resolution mesh with a low resolution collider. Here's an example of a mesh (a character's face) that has a lot of geometry. It
would really hurt perf to have Horizon compute collisions with the full face. So
instead, a separate collider has been added (the icosahedron). This can be
achieved by making the face with `collidable=false` and the icosahedron with `visible=false`. Or you could use the sphere collider instead. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480587385_656797580191530_2217575239024647133_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=sy8LPOyKipYQ7kNvwEacaS-&_nc_oc=Adl623YV_8klM_YHawONl7B0NrPeOsR1K4N7lNwCBQ3Q3ifTD-HMYa5iMsaz0uLzc6o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx...

#### Separating a Collider from a Mesh

 For performance reasons a mesh may want to have a collider with less detail than
the actual mesh. Avatars do this. When you import your own 3D models, you can disable collidability and use collider gizmos to approximate the shape instead. You shouldn't try separating out colliders unless:
• you are experienced in doing so
• you have identified an actual performance issue in your world

##### Example

### Entity Tag Bubbling

 When Horizon is looking for an entity with a specific tag it performs a process
we'll call tag bubbling where it walks up the ancestor chain in search of an entity with the tag. This process is used in collision detection and raycasting. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480831061_656797576858197_2777501900950716303_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ruLcVe7bMtYQ7kNvwEZfOEb&_nc_oc=AdllMv7L7VVHemHnxv0gTU0_1wwsH6jgXcZeCq0ntQO8Z2dJMGwdol5LTHCGvOF0F0Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CwQ5...

## Physics

### PhysicalEntity Class

|  |
|  |
| gravityEnabled | When true, a force is generated every frame with the magnitude set in the Properties panel |
| applyForce | Add a force (or impulse or velocity change) to the entity |
| applyLocalForce | Add a force (or impulse or velocity change) to the entity, expressed in local coordinates |
| applyForceAtPosition | Add a force (or impulse or velocity change) to the entity at a specific position, which may also generate a torque |
| applyTorque | Apply a torque |
| applyLocalTorque | Apply a torque expressed in local coordinates |
| zeroVelocity | Immediate stop the entity, positionally and rotationally |
| springPushTowardPosition | Apply a linear spring force |
| springSpinTowardRotation | Apply a rotational spring torque |

### Applying Forces and Torque

#### Torques

    rotation: Quaternion,
    options?: Partial
    ): void

 See the documentation in spring spin.

#### Springs

##### Spring Push

  physEnt.springPushTowardPosition(this.props.obj2.position.get(), {stiffness: 5, damping: 0.2});

### Applying Forces and Torque

 Every PhysicalEntity has internal state representing pending (linear) acceleration and pending angular acceleration (stored on the client that owns the entity, due to authority). In the next simulation phase the engine will do a simulation step that accumulates the pending accelerations
into the velocities, and accumulates the current velocities onto the position
and rotation. The physics-based way to impact acceleration, velocity, and position is via force. The physics-based way to impact angular acceleration, angular velocity, and
rotation is via torque (the rotational analog of a force).

#### Forces

#### Torques

#### Springs

## Players

### Player Class

| Quests / Achievements |   |
| hasCompletedAchievement | Check if the player has completed the given achievement |
| setAchievementComplete | Set if the player has completed the given achievement |
| UI / Focused Interaction |   |
| enterFocusedInteractionMode | Change a Mobile/Web player from locomotion mode to focus mode (where they can tap on the screen instead of moving the avatar). Must be called on a player device . |
| exitFocusedInteractionMode | Return a Mobile/Web player to normal locomotion mode. Must be called on a player device . |
| focusedInteraction | The FocusedInteraction object for the player. |
| unfocusUI | Exit a player from the UI they are focused on |
| Aim Assist |   |
| clearAimAssistTarget | Remove the aim-assist target |
| setAimAssistTarget | Configure a Mobile/Web player's cursor to be attracted to a given target |
| Voip |   |

### Player Entering and Exiting a World

one state to another; in the box, italics text is the action that caused the change, bold text is built-in CodeBlockEvents that are sent (in the order top-to-bottom if there are multiple in a box), and underlined text is a system action that occurs. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480310115_656797590191529_1870444710099372950_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0_EKzXQt2tkQ7kNvwH13ZS-&_nc_oc=AdmxVnd39Z-yDmvhBPJrCXVswpAJK9AMVfGJRUe1TS5upa1YqQV4mZxswKORcgUUfx8&_nc...

### Player Body Parts

 A player has a number of properties for accessing body parts: `head`, `torso`, `foot`, `leftHand`, and `rightHand`; each return an instance of the class `PlayerBodyPart` (or the more specific `PlayerHand`). They are Horizon properties and so you must use `get()`:  `const` torso `=` player`.`torso`.`get`()` The `foot` body part is an "abstract" location in between the two feet (directly below the
avatar center point near the hips). Each body part has a has the standard global transform properties: position, rotation, and scale as well as local versions: `localPosition`, `localRotation`, and `localScale`. There is also `forward` and `up`. Additionally you can use `bodyPart.player` to identify which player the part belongs to and `bodyPart.type` to identify which part of the body it is (e.g. `player.leftHand.get().type` returns `PlayerBodyPartType.LeftHand`).

#### Getting a body part's local right vector.

#### Player Hand

### Haptics

| Coarse | A moderate vibration with a slightly longer duration, striking a balance between sharp and soft. Ideal for interactions that need to feel distinct without being abrupt. |
| Soft | A low-frequency, smooth vibration that builds and fades gradually, creating a more diffuse, gentle sensation. Ideal for subtle cues or immersive environmental effects. |

## Grabbing and Holding Entities

### Creating a Grabbable Entity

on-screen while holding the entity. For more details [see the article on configuring held items for Mobile/Web players](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/intro-to-grabbable-entities).

### Grab Sequence and Events

one state to another; in the box, italics text is the action that caused the change, bold text is built-in CodeBlockEvents that are sent (in the order top-to-bottom if there are multiple in a box), and underlined text is a system action that occurs. ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/480969837_656797440191544_3479717928870876208_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=AjBWqLcKpCgQ7kNvwF7OMQf&_nc_oc=AdnrW3czomwBIxwMKeMBCgT8ZJIRO54kGwHfu9b0R-jyO0kMvpId5zemk4sQhc41dI...

### Grab Sequence and Events

#### Moving Held Entities

#### Grabbables and Ownership

## Attaching Entities

### Avatar Attachable

#### Sticky Attachments

 Whereas attachable entities may have their `Motion` set to `Animated`, `Sticky` entities work best when set to `Grabbable`. Upon releasing the held entity, it will attach to where the collision occurs
between the active collider and the Attachable By permitted player.

##### Stick Attachment To

 The following is a list of player body parts that the attachable entity may
stick to.
|  |
|  |
| Any | Both head and torso |
| Head | Anywhere on the player's head |
| Torso | Anywhere on the player's torso |

 Using code to attach a sticky entity does not place the entity at the center of
the body part. Wherever the entity is located upon calling `attachToPlayer()` will be where the entity will begin to follow the body part. Set `Avatar Attachable` to Anchor to reposition the entity to the body part when doing a scripted attach.

#### Attachment Anchors

##### Auto Scale to Anchor

 When an entity has "Avatar Attachable" set to "Anchor" there is a setting
available: "Auto Scale to Anchor". When enabled, the attached item will have its scale changed when it is attached to fit the anchor it has been attached to. This setting makes it easier to
support avatars of different shapes and styles. When the entity is detached it will be scaled back to its intrinsic size, its scale automatically becoming (1,1,1).

#### Attachment Anchors

one state to another; in the box, italics text is the action that caused the change, bold text is built-in CodeBlockEvents that are sent (in the order top-to-bottom if there are multiple in a box), and underlined text is a system action that occurs. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/480454017_656797570191531_1078493421499719284_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=oaCjJ0giljAQ7kNvwEPy0RT&_nc_oc=AdnXODPh4h4h22FpSkF2yLPk4XZBaL5K6RVhh1vr3AQeFEMbzFVKKkNkTxz2bfRcuEQ&_nc_z...

• From Attached to Held: the `OnGrabStart` is sent and then `OnAttachEnd`.

#### Scripted Attach

#### Detaching

#### Socket Attachment

#### Sticky Attachments

#### Attachment Anchors

## Holstering Entities

### Cross-screen Holstering

#### Scripting Holstering

 The player is the local player, the one doing the holstering, the items are all currently holstered items (by `player`), and grabbed item is the currently holstered item. Note that `grabbedItem` will also be in the `items` array, so if you want to show a player the "other" items, you would need to
filter `grabbedItem` out.

### Cross-screen Holstering

pressing the holster icon. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/480590377_656797586858196_8956842387091686648_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kKpmHPIZAu4Q7kNvwGFv_WM&_nc_oc=AdnWfxg-BkUfxdw1SZVhx-nvkE04dADNbWzRZrL9pPplsE340dso0-lVMUthzUPbP1I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=CwQ5...

## Persistence

### Leaderboards

 Leaderboards store and display player scores, allowing players to compare
progress even when they are not in the same session. Leaderboards have two parts: a leaderboard and leaderboard gizmos. Leaderboards contain the properties (such as name, sort order, and auto-reset behavior). Leaderboard Gizmos are an entity in the world that allow a player to see and interact with the
data.
• Global Persistence: Unlike other persistent data, leaderboards retain and display scores across
all instances, even when the player is not present.
• Write-Only (by default): Scores can be updated (written) but not retrieved (read) via scripts. However,
to work around this, you can create a player persistent variable and then always set them together.
• Privacy and Player Control: Players can opt out of leaderboard tracking and delete stored scores from the in-app menu → General tab → Leaderboard Participation / Data.

### Quests

#### Using the Quests Gizmo

 The Quest gizmo displays quest information to players. Each player sees only
their own quest progress.
|  |
|  |
| Displayed Title | string | Header text shown on the gizmo |
| Number of Entries Per Page | number | Quests shown per page (1-6) |
| Panel UI Mode | Light Mode or Dark Mode | Color theme (light vs dark refers to the background color) |
| LoD Radius | number | Maximum visibility distance |

 TypeScript: Quest Gizmos are referenced as() the `AchievementsGizmo` class with the method

```
// AchievementsGizmo
displayAchievements(scriptIDs: string[]): void
```
 allowing you to specify a subset of quests that will appear on the gizmo. For
example, you could have two Quest gizmos in the world and have one show the "easy
...

#### Simple vs Tracked Quests

#### Using the Quests Gizmo

#### Resetting Quests

### In-World Purchases (IWPs)

#### Creating, Editing, and Deleting IWPs

| Asset Reference | Link the asset to be spawned | For Durable items only |
| Auto Use | Triggers use on purchase | For Consumable items only |

#### In-World Durable Items

to use a combination of a durable item and a player persistent variable, providing the functionality if they have either.

##### Durable In-World Item Asset

##### Durable In-World Item CodeBlockEvents

#### In-World Consumable Items

##### Item Packs

 Consumables can be bundled into 2 or more of the same item so that players can
purchase a collection instead of one-by-one (i.e. health packs, cannon balls,
gems) as item packs. Item packs allow creators to offer special promotions to motivate purchases
(such as 1 heart for 25 credits vs a pack of 5 hearts for 100 credits). To create a pack:
1. Create the consumable item following the steps from the prior section.
2. Once created, open the Commerce UI (Systems > Commerce), and Change the Displaying drop down to Iem Packs.
3. Click on the + Icon to opn the Create an item pack UI.
4. Select the consumable item, and click Select.
5. Specify a quantity (between 2 and 99).
6. Specify a price (25 to 20,000 credits).
7. Click Create.

##### Item Packs

 When a player purchases a pack of consumables without auto-use, they are able to see their unused item quantity in their inventory. Clicking
the inventory icon will not trigger the consume automatically; instead, a
broadcast code block event is emitted. This even can then be intercepted with a script,
that would also confirm if the player can consume or not the item. For more
details see Handling an Item-Consume Item Request.

##### Auto-Use Consumable In-World Items

 When a consumable item is set to auto-use, the player does not initiate the use of the item (since it is used
automatically at the time of purchase). This means that OnItemConsumeStart is never sent. But the OnItemConsumeComplete is sent right after the purchase succeeds (since the item is then auto-used).

##### Handling an Item-Consume Item Request

  if (item === 'bagel_id') {
    const iwpGizmo = this.entity.as(hz.IWPSellerGizmo)
    iwpGizmo.consumeItemForPlayer(player, item)
  }
})

#### In-World Consumable Items

 Consumable items are purchased and then used. They can be purchased again and then used. It is possible to have many at once
("stockpiling" until you use them). An example would be a speed boost that
lasts for 5 minutes once activated. When a player tries to use a consumable you are sent a request that you must handle. There are a number of other APIs, listed below. TypeScript: Unlike leaderboards and quests, you need an actual `IWPSellerGizmo`, via as, to interact with durable items. There are consumable item CodeBlockEvents that can be connected to. There are also a few methods on the `IWPSellerGizmo` class related to durable items. In the below methods `item` is an item id:
1.  Check how many of the given item a player has:

```
// IWPSellerGizmo
getItemCountForPlayer(player: Player, item: string): number
```
2.  Check if a player can consume the item (has at least 1):

```
// IWPSellerGizmo
canConsumeItemForPlayer(player: Player, item: string): boolean
```
3.  Consume the item for a player (if they have one otherwise a OnItemConsumeComplete is sent with `success` set to `false`):

```
// IWPSellerGizmo
consumeItemForPlayer(player: Player, item: string): void
```

##### Item Packs

##### Auto-Use Consumable In-World Items

##### Handling an Item-Consume Item Request

### In-World Purchases (IWPs)

 In-World Purchases (IWPs) allow players to use Meta Credits to acquire virtual
items, enhancements, entitlements, unlocks, special access, give kudos/tips, and
more within worlds. IWPs Offer
• Transaction Types: Durable (one-time) or Consumable (repeatable) purchases
• Asset Integration: Purchases can be linked to spawning assets
• Auto-Use Option: Consumables can trigger automatically on purchase
• Pricing Range: 25 to 20,000 Meta Credits per item
• Presentation: Customizable purchase UI with name, description, and thumbnail

#### Creating, Editing, and Deleting IWPs

#### Using the In-World Purchase Gizmo

#### In-World Item ID String

#### In-World Durable Items

#### In-World Consumable Items

#### In-World Item CodeBlockEvents

 All events in the table below are 🔈 server-broadcast CodeBlockEvents; you can connect to any server-owned entity to receive them. Events marked with
🧱 are for durable items; events marked with 🍏 are for consumable items.
|  |
|  |
| 🔈🧱🍏OnItemPurchaseStart | player: Player item: string | Broadcast when a player opens the purchase menu (both Durable and Consumable ). |
| 🔈🧱🍏OnItemPurchaseComplete | player: Player item: string success: boolean | Broadcast when a player closes the purchase menu (for both Durable and Consumable ). success contains if purchase was successful. |
| 🔈🧱🍏OnItemPurchaseSucceeded (deprecated) | player: Player item: string | Broadcast when a player successfully purchases an item. |

### Player Persistent Variables (PPVs)

#### Creating, Editing, and Deleting Player Persistent Variables

the changes. Collaborators can modify their debug values as well. For testers, you
would have to use scripts to clear or adjust their PPV values.

## Spawning

### Simple Spawning

#### Deleting Simply Spawned Entities

 The `deleteAsset` method returns a `Promise<undefined>` which resolves when the spawned entities have been fully removed from the instance. Entity exists(): after calling `deleteAsset` on `entity`, `entity.exists()` will then return `false`. If `fullDelete` was set to `true` then all entities created in the same "spawn event" will also no longer exist.

### Despawning

### Advanced Spawning (SpawnController)

### Sublevels

## Showing Players Temporary Messages

## Custom UI

### UIComponent Class

 The `UIComponent` class is a subclass of the Component class. Thus the following all exactly as they do in `UIComponent`:
• Component.register
• propsDefinition
• preStart
• start
• transferOwnership
• receiveOwnership
• dispose

 There are some members specific to `UIComponent`. Additionally, whereas `Component` can be attached to any entity, a `UIComponent`must be attached to a Custom UI Gizmo for it to render any UI.
|  |
|  |
| abstract initializeUI(): UINode | You must override this method and return the initial "view tree". This method is called before preStart . |
| readonly panelWidth: number | The total number of pixels the UI gizmo is wide. This doesn't change the size of the UI (use scale ); it just changes how you reference the UI. For instance if you set this to 100 then you can use 50 to reference the midpoint. The default is 500. |
| readonly panelHeight: number | The same as panelWidth except specifying height. |

### Bindings

#### Deriving Bindings

collection of others. For example here is a binding that contains a `boolean` representing if a `string` in a binding is contained in a `string[]` in another binding.

```
const needleBinding = new Binding('lemon')
const haystackBinding = new Binding(['apple', 'pear'])

const containedBinding = Binding.derive(
  [needleBinding, haystackBinding],
  (needle, haystack) => haystack.includes(needle)
)
```

#### Binding Class

#### Creating Bindings

#### Global vs Player Binding Values

#### Setting and Resetting Bindings

#### Deriving Bindings

#### Animated Bindings

### UINode Types

#### Conditional UI (If)

 Use `UINode.If` to create a `UINode` that uses a binding to choose between showing one of two children: [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#if)

#### UI View

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#view)

#### UI Text

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#text)

#### UI Image

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#image)

#### UI Pressable

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#pressable)

#### UI ScrollView

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui#scrollview)

#### UI Dynamic List

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/dynamic-list)

## Navigation Mesh

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/npcs/)

### Navigation Mesh Volume

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-gizmo)

### Navigation Mesh Profile

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation#navigation-profile)

### Navigation Mesh Agent

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/nav-mesh-agents)

## Cross Screens - Mobile vs PC vs VR

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/create-for-web-and-mobile/)

### Camera

 [Link](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/camera)

## Common Problems and Troubleshooting

### Horizon TypeScript Symbols

• AchievementsGizmo
• AIAgentGizmo
• AimAssistOptions
• AnimatedEntity
• AnimationCallback
• AnimationCallbackReason
• AnimationCallbackReasons
• assert
• Asset
• AssetContentData
• AttachableEntity
• AttachablePlayerAnchor
• AudioGizmo
• AudibilityMode
• AudioOptions
• AvatarGripPose
• AvatarGripPoseAnimationNames
• BaseRaycastHit
• BuiltInVariableType
• ButtonIcon
• ButtonPlacement
• clamp
• Color
• CodeBlockEvents
• Comparable
• Component
• CodeBlockEvent
• DefaultFetchAsDataOptions
• DefaultFocusedInteractionTapOptions
• DefaultFocusedInteractionTrailOptions
• DefaultPopupOptions
• DefaultSpringOptions
• DefaultThrowOptions
• DefaultTooltipOptions
• degreesToRadians
• DisposableObject
• DisposableOperation
• DisposableOperationRegistration
• DynamicLightGizmo

• EntityInteractionMode
• EntityRaycastHit
• EntityStyle
• EntityTagMatchOperation
• EulerOrder
• EventSubscription
• FetchAsDataOptions
• FocusedInteraction
• FocusedInteractionTapOptions
• FocusedInteractionTrailOptions
• GrabbableEntity
• Handedness: force hold, haptics, throwing
• HapticSharpness
• HapticStrength
• HorizonProperty
• HorizonSetProperty
• InteractionInfo
• IPersistentStorage
• IUI
• IWPSellerGizmo
• LaunchProjectileOptions
• LayerType
• Leaderboards
• LocalEvent
• LocalEventData
• MaterialAsset
• MeshEntity
• MonetizationTimeOption
• NetworkEvent
• NetworkEventData
• ParticleFXPlayOptions
• ParticleFXStopOptions
• ParticleGizmo
• PersistentSerializableState
• PhysicalEntity
• PhysicsForceMode
• PlayAnimationOptions
• Player

• PlayerBodyPart
• PlayerBodyPartType
• PlayerDeviceType
• PlayerHand
• PlayerControls
• PlayerControlsConnectOptions
• PlayerInput
• PlayerInputAction
• PlayerInputStateChangeCallback
• PlayerRaycastHit
• PlayerVisibilityMode
• PopupOptions
• ProjectileLauncherGizmo
• PropTypes
• Quaternion
• radiansToDegrees
• RaycastGizmo
• RaycastHit
• RaycastTargetType
• ReadableHorizonProperty
• SerializableState
• SetMaterialOptions
• SetMeshOptions
• SetTextureOptions
• Space: body part, transform helpers
• SpawnController
• SpawnControllerBase
• SpawnError
• SpawnPointGizmo
• SpawnState
• StaticRaycastHit
• StopAnimationOptions
• TextGizmo
• TextureAsset
• ThrowOptions
• TooltipAnchorLocation
• TooltipOptions

•  When you see an error message showing just an Entity`id` (such as 100006) then you can do an entity debug trick and run

```
  console.log(
    new Entity(BigInt("100006")).name.get()
  )
```
 to see the name of the entity. You should never call `new Entity` in a published world.

### Horizon TypeScript Symbols

## All Built-In CodeBlockEvents

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

## All Built-In CodeBlockEvents

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fmhcp-program%2Fcommunity-tutorials%2Fcreator-manual%2F)

