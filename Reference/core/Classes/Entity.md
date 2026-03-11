---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity
---

# [Entity Class](#entity-class)

An entity, which represents an object in Meta Horizon Worlds. All objects in a world are represented by entities.

## [Signature](#signature)

```ts
export declare class Entity 
```

## [Examples](#examples)

**Example 1**

Here's an example of an entity cast as a gizmo.

```ts
import {TextGizmo} from 'horizon/core';

const textHint = entity.as(TextGizmo);
textHint.text.set('Aim here');
```

**Example 2**

In this example, the entity is moved to a new location by setting the position property of the entity to a new 3D vector.

```ts
entity.position.set(new Vec3(50, 65, 33));
```

## [Remarks](#remarks)

The functionality of an entity is provided by its attached [components](../Abstract%20Classes/Component.md).\
The most common way for script to access an entity is by using `this.entity`, which refers to the entity the current component instance is attached to. Another common way is for the script to cast an entity as a gizmo, such as [TextGizmo](TextGizmo.md).\
Scripts can also interact with external entities in the following ways:\
Entity panel: If the Entity Panel of the attached entity passes in entities as properties.\
Events: If an entity is sent to a script using an event, such as a [CodeBlockEvent](CodeBlockEvent.md).\
Spawned entities: Entities that are spawned into the world. See the [Asset Spawning](../../../Desktop%20editor/Assets/Asset%20Spawning%20Reference.md) guide for usage.\
For information about using entities, see the [TypeScript Components, Properties, and Variables](../../../Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components%2C%20Properties%2C%20and%20Variables.md#entity) guide.

## [Constructors](#constructors)

### [(constructor)(id)](#constructorid)

Creates an entity in the world.

**Signature**

```ts
constructor(id: bigint);
```

**Parameters**

id: bigint

The ID of the entity to create.

## [Properties](#properties)

### [children](#children)

The child entities of the entity.

**Signature**

```ts
children: ReadableHorizonProperty<Entity[]>;
```

### [collidable](#collidable)

Indicates whether the entity is collidable. true if the entity is collidable; otherwise, false.

**Signature**

```ts
collidable: HorizonProperty<boolean>;
```

### [color](#color)

The color of the entity.

**Signature**

```ts
color: HorizonProperty<Color>;
```

### [forward](#forward)

The forward vector of the entity.

**Signature**

```ts
forward: ReadableHorizonProperty<Vec3>;
```

### [id \[readonly\]](#id-readonly)

The ID of the entity in the world.

**Signature**

```ts
readonly id: bigint;
```

### [interactionMode](#interactionmode)

The interaction mode for the entity, such as whether it's grabble or supports physics.

**Signature**

```ts
interactionMode: HorizonProperty<EntityInteractionMode>;
```

### [isValidReference](#isvalidreference)

Whether or not the entity is still a valid entity reference, and hasn't been disposed. Useful in asynchronous contexts (async/awaits, promise.then's, and networkEvents).

**Signature**

```ts
isValidReference: ReadableHorizonProperty<boolean>;
```

### [name](#name)

The human readable name of the entity.

**Signature**

```ts
name: ReadableHorizonProperty<string>;
```

### [owner](#owner)

The [Player](Player.md) that owns the entity.

**Signature**

```ts
owner: HorizonProperty<Player>;
```

**Remarks**

When changing entity ownership to a new player, you must transfer the state of the entity as well or the state will be lost. You can use the [Component.transferOwnership()](../Abstract%20Classes/Component.md#transferownership) and [Component.receiveOwnership()](../Abstract%20Classes/Component.md#receiveownership) methods to transfer an entity's state to a new owner. For more information, see [Maintaining local state on ownership change](../../../Scripting/Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md).If ownership for a [Entity.parent](Entity.md#parent) entity changes, the ownership change doesn't automatically apply to any [Entity.children](Entity.md#children).

### [parent](#parent)

The parent of the entity.

**Signature**

```ts
parent: ReadableHorizonProperty<Entity | null>;
```

### [position](#position)

The current position of the entity in the world.

**Signature**

```ts
position: HorizonProperty<Vec3>;
```

### [right](#right)

The right vector of the entity.

**Signature**

```ts
right: ReadableHorizonProperty<Vec3>;
```

### [rotation](#rotation)

The rotation component of the entity.

**Signature**

```ts
rotation: HorizonProperty<Quaternion>;
```

### [scale](#scale)

The current scale of the entity in the world.

**Signature**

```ts
scale: HorizonProperty<Vec3>;
```

### [simulated](#simulated)

Determines whether grabbing and physics is calculated. If simulated is off, then objects aren't grabbable and aren't affected by physics.

**Signature**

```ts
simulated: HorizonProperty<boolean>;
```

### [tags](#tags)

Use tags to annotate entities with user-defined labels that identify and match objects.

**Signature**

```ts
tags: HorizonSetProperty<string>;
```

**Examples**

```ts
entity.tags.set(['tag1', 'tag2']);
const tags: Array<string> = entity.tags.get();
const containsTag1: boolean = entity.tags.contains('tag1');
entity.tags.remove('tag1');
entity.tags.clear();
```

**Remarks**

You can have up to five tags per entity. Each tag can be up to 20 characters long. Tags are case sensitive. Avoid using special characters. There is no check for duplicate tags. Tags set or modified in TypeScript only presist for the session; they are not be stored in the entity.

### [transform \[readonly\]](#transform-readonly)

The transform of the entity, which contains position, rotation, and scale information.

**Signature**

```ts
readonly transform: Transform;
```

### [up](#up)

The up vector of the entity.

**Signature**

```ts
up: ReadableHorizonProperty<Vec3>;
```

### [visible](#visible)

Indicates whether players with permission can see the entity. true if players with permission can see the entity; false if no players can see the entity.

**Signature**

```ts
visible: HorizonProperty<boolean>;
```

**Examples**

```ts
const wasVisible: boolean = cubeEntity.visible.get();
cubeEntity.visible.set(!wasVisible);
```

**Remarks**

You can set which players have permission using [Entity.setVisibilityForPlayers()](Entity.md#setvisibilityforplayers). It's important to note that if any parent entity has its visibility set to false, the child entity will also be invisible regardless of its own visibility setting.

## [Methods](#methods)

### [as(entityClass)](#asentityclass)

Cast an entity as its more specific subclass.

**Signature**

```ts
as<T extends Entity>(entityClass: Class<[bigint], T>): T;
```

**Parameters**

entityClass: [Class](../Interfaces/Class.md)<\[bigint], T>

The subclass to cast entity to.

**Returns**

T

### [clearTransformConstraint()](#cleartransformconstraint)

Clears the transform constraint of an entity.

**Signature**

```ts
clearTransformConstraint(): void;
```

**Returns**

void

### [exists()](#exists)

Indicates whether the entity exists in the world. true if the entity exists in the world; otherwise, it does not exist in the world.

**Signature**

```ts
exists(): boolean;
```

**Returns**

boolean

A boolean that indicates whether the entity exists in the world.

### [getComponents(type)](#getcomponentstype)

Returns a list of all script component instances attached to the entity and executing in the same context as the entity.

**Signature**

```ts
getComponents<T extends Component<unknown, SerializableState> = Component>(type?: (new () => T) | null): T[];
```

**Parameters**

type: (new () => T) | null

*(Optional)* The type of components to return. Otherwise, if not provided, this method returns components of any type.

**Returns**

T\[]

The script component instances of the specified type that are attached to the entity.

**Remarks**

This method only returns script component instances if they're executing in the same context as the entity, such as on the same server or on a particular client.Avoid using this method in [Component.preStart()](../Abstract%20Classes/Component.md#prestart) as other script component instances may not be instantiated.

### [getPhysicsBounds()](#getphysicsbounds)

Get an axis aligned bounding box that surrounds the colliders in this entity and its children in world space

**Signature**

```ts
getPhysicsBounds(): Bounds;
```

**Returns**

[Bounds](Bounds.md)

a Bounds object encompassing all colliders under an entity

### [getRenderBounds()](#getrenderbounds)

Get an axis aligned bounding box that surrounds the renderers in this entity and its children in world space

**Signature**

```ts
getRenderBounds(): Bounds;
```

**Returns**

[Bounds](Bounds.md)

a Bounds object encompassing all renderers under an entity

### [isVisibleToPlayer(player)](#isvisibletoplayerplayer)

Indicates whether the entity is visible to the player.

**Signature**

```ts
isVisibleToPlayer(player: Player): boolean;
```

**Parameters**

player: [Player](Player.md)

The player to check the view permission for.

**Returns**

boolean

`true` if the player has permission to view the entity, `false` otherwise.

**Examples**

```ts
const playerHasViewPermission: boolean = cubeEntity.isVisibleTo(player);
const isTrulyVisible: boolean = playerHasViewPermission && cubeEntity.visible.get();
```

**Remarks**

The return value isn't affected by the `visible` property. For a player to view an entity, the entity must be visible (the `visible` property on the entity is `true`), and the user must have permission to view the entity (this function returns `true`).

### [lookAt(target, up)](#lookattarget-up)

Rotates an entity to look at a point.

**Signature**

```ts
lookAt(target: Vec3, up?: Vec3): void;
```

**Parameters**

target: [Vec3](Vec3.md)

The target for the entity to look at.

up: [Vec3](Vec3.md)

*(Optional)* The up direction of the rotation. The default value is [Vec3.up](Vec3.md#up).

**Returns**

void

### [moveRelativeTo(target, relativePosition, space)](#moverelativetotarget-relativeposition-space)

Moves every client instance of the entity relative to another entity.

**Signature**

```ts
moveRelativeTo(target: Entity, relativePosition: Vec3, space?: Space): void;
```

**Parameters**

target: [Entity](Entity.md)

The entity to move towards.

relativePosition: [Vec3](Vec3.md)

The position for the client entity to move, relative to the target entity.

space: [Space](../Enumerations/Space.md)

*(Optional)* Indicates whether relativePosition is a world or local position.

**Returns**

void

**Remarks**

We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers.

### [moveRelativeToPlayer(player, bodyPart, relativePosition, space)](#moverelativetoplayerplayer-bodypart-relativeposition-space)

Moves every client instance of the entity relative to a player.

**Signature**

```ts
moveRelativeToPlayer(player: Player, bodyPart: PlayerBodyPartType, relativePosition: Vec3, space?: Space): void;
```

**Parameters**

player: [Player](Player.md)

The entity to move towards.

bodyPart: [PlayerBodyPartType](../Enumerations/PlayerBodyPartType.md)

The body part of the player.

relativePosition: [Vec3](Vec3.md)

The position for the client entity to move, relative to the target entity.

space: [Space](../Enumerations/Space.md)

*(Optional)* Indicates whether the relativePosition is a world or a local position.

**Returns**

void

**Remarks**

We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers.

### [resetVisibilityForPlayers()](#resetvisibilityforplayers)

Makes the entity visible to all players in the world instance, which resets any changes made by calls to the method.

**Signature**

```ts
resetVisibilityForPlayers(): void;
```

**Returns**

void

**Examples**

cubeEntity.resetPlayerVisibilityList();

**Remarks**

If a player joins your world instance after an object's visibility is changed with the resetVisibilityForPlayers method, the object becomes invisible to the new player. To ensure all new players can see the object upon joining the world instance, you must use the resetVisibilityForPlayers method. If a parent entity has its visibility set to false, the child entity also becomes invisible regardless of its own visibility setting.

### [rotateRelativeTo(target, relativeRotation, space)](#rotaterelativetotarget-relativerotation-space)

Rotates every client instance of the entity relative to another entity.

**Signature**

```ts
rotateRelativeTo(target: Entity, relativeRotation: Quaternion, space?: Space): void;
```

**Parameters**

target: [Entity](Entity.md)

The entity to rotate around.

relativeRotation: [Quaternion](Quaternion.md)

The rotation relative to the target.

space: [Space](../Enumerations/Space.md)

*(Optional)* Indicates whether relativeRotation is a world or a local rotation.

**Returns**

void

**Remarks**

We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers.

### [rotateRelativeToPlayer(player, bodyPart, relativeRotation, space)](#rotaterelativetoplayerplayer-bodypart-relativerotation-space)

Rotates every client instance of the entity relative to a player.

**Signature**

```ts
rotateRelativeToPlayer(player: Player, bodyPart: PlayerBodyPartType, relativeRotation: Quaternion, space?: Space): void;
```

**Parameters**

player: [Player](Player.md)

The player for the entity to rotate around.

bodyPart: [PlayerBodyPartType](../Enumerations/PlayerBodyPartType.md)

The body part of the player.

relativeRotation: [Quaternion](Quaternion.md)

The rotation relative to the player.

space: [Space](../Enumerations/Space.md)

*(Optional)* Indicates whether the relativeRotation is a world or a local rotation.

**Returns**

void

**Remarks**

We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers.

### [setTransformConstraint(parentEntity, localPosition, localRotation, localScale)](#settransformconstraintparententity-localposition-localrotation-localscale)

Sets a transform constraint of an entity (the child) to another (the parent).

**Signature**

```ts
setTransformConstraint(parentEntity: Entity, localPosition: Vec3, localRotation: Quaternion, localScale: Vec3): void;
```

**Parameters**

parentEntity: [Entity](Entity.md)

The parent entity.

localPosition: [Vec3](Vec3.md)

The child's local position in its parent's coordinate system.

localRotation: [Quaternion](Quaternion.md)

The child's local rotation in its parent's coordinate system.

localScale: [Vec3](Vec3.md)

The child's local scale in its parent's coordinate system.

**Returns**

void

**Remarks**

This is the "snapping version" of transform constraint, using the `localPosition`, `localRotation`, and `localScale` parameters. It overrides the child's original local world position, rotation, and scale in its parent's coordinate system.

### [setTransformConstraintKeepRelative(parentEntity)](#settransformconstraintkeeprelativeparententity)

Sets a transform constraint of an entity (the child) to another (the parent).

**Signature**

```ts
setTransformConstraintKeepRelative(parentEntity: Entity): void;
```

**Parameters**

parentEntity: [Entity](Entity.md)

The parent entity.

**Returns**

void

**Remarks**

This is the "keep relative version" of transform constraint, using the child's original local world position, rotation, and scale. Its parent's coordinate system is preserved after the operation.To keep the child entity's world position, location, and scale before and after the attachment operation, use this method instead of "setTransformConstraint". To override attached entity's world position and location with your custom values, use "setTransformConstraint" with custom values.

### [setTransformConstraintToAssetBundleGizmoReference(parentEntity, referenceName, localPosition, localRotation, localScale)](#settransformconstrainttoassetbundlegizmoreferenceparententity-referencename-localposition-localrotation-localscale)

Sets a transform constraint of an entity (the child) to another asset bundle gizmo reference.

**Signature**

```ts
setTransformConstraintToAssetBundleGizmoReference(parentEntity: Entity, referenceName: string, localPosition: Vec3, localRotation: Quaternion, localScale: Vec3): void;
```

**Parameters**

parentEntity: [Entity](Entity.md)

The parent entity (an asset bundle gizmo entity).

referenceName: string

The asset bundle gizmo reference name.

localPosition: [Vec3](Vec3.md)

The child's local position in its parent's coordinate system.

localRotation: [Quaternion](Quaternion.md)

The child's local rotation in its parent's coordinate system.

localScale: [Vec3](Vec3.md)

The child's local scale in its parent's coordinate system.

**Returns**

void

**Remarks**

An asset bundle gizmo reference normally refers to one of the bone references generated in the game dynamically by the asset bundle gizmo. This is the "snapping version" of transform constraint, using the `localPosition`, `localRotation` and `localScale` parameters. This function overrides the child's original local world position, rotation, and scale in its parent's coordinate system.IMPORTANT: For now, if you call this function in the start() function of your TS script, you need to assure the attached object share the same ownership with the being attached asset bundle. This is because the asset bundle is playing the animation on the client side, but the SOP is synced by the server. So if they do not share the same ownership, you may notice some de-sync issue.You must import the asset bundle using the `Always Animate` option for `Culling Mode`. Otherwise, the asset does not animate with the entity.

### [setTransformConstraintToAssetBundleGizmoReferenceKeepRelative(parentEntity, referenceName)](#settransformconstrainttoassetbundlegizmoreferencekeeprelativeparententity-referencename)

Sets a transform constraint of an entity (the child) to another asset bundle gizmo reference.

**Signature**

```ts
setTransformConstraintToAssetBundleGizmoReferenceKeepRelative(parentEntity: Entity, referenceName: string): void;
```

**Parameters**

parentEntity: [Entity](Entity.md)

The parent entity (asset bundle gizmo entity).

referenceName: string

The asset bundle gizmo reference name.

**Returns**

void

**Remarks**

An asset bundle gizmo reference normally refers to one of the bone references generated in the game dynamically by the asset bundle gizmo. This is the "keep relative version" of transform constraint, using the child's original local world position, rotation, and scale. This function preserves its parent's coordinate system after the operation.Important: For now, if you call this function in the start() function of your TS script, you need to assure the attached object share the same ownership with the being attached asset bundle. This is because the asset bundle is playing the animation on the client side, but the SOP is synced by the server. So if they do not share the same ownership, you may notice some de-sync issue.

### [setVisibilityForPlayers(players, mode)](#setvisibilityforplayersplayers-mode)

Replaces the visibility state of the entity for the given players. The visibility state indicates whether the entity is visible or hidden for the given players.

**Signature**

```ts
setVisibilityForPlayers(players: Array<Player>, mode: PlayerVisibilityMode): void;
```

**Parameters**

players: Array<[Player](Player.md)>

An array of Player objects to set the visibility mode for.

mode: [PlayerVisibilityMode](../Enumerations/PlayerVisibilityMode.md)

Indicates whether the entity is visible only to the specified players.

**Returns**

void

**Examples**

cubeEntity.setVisibilityForPlayers(\[myPlayer], PlayerVisibilityMode.VisibleTo);

**Remarks**

Before updating the visibility state of the entity, this method clears the current visibility state of the entity for the given players.This method can only make the entity visible to players if the `visible` property of the entity is already set to `true`. The `visible` property of an entity determines whether any players can view view the entity, so this method acts as a filter once the property is enabled.

### [toString()](#tostring)

Gets a human-readable representation of the entity.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representing the entity.

