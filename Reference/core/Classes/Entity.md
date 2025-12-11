Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity

# Entity Class

An entity, which represents an object in Meta Horizon Worlds. All objects in a world are represented by entities.

## Signature

```
export declare class Entity
```

## Examples

**Example 1**

Here's an example of an entity cast as a gizmo.

```
import {TextGizmo} from 'horizon/core';

const textHint = entity.as(TextGizmo);
textHint.text.set('Aim here');
```

**Example 2**

In this example, the entity is moved to a new location by setting the position property of the entity to a new 3D vector.

```
entity.position.set(new Vec3(50, 65, 33));
```

## Remarks

The functionality of an entity is provided by its attached [components](../Abstract%20Classes/Component.md).
The most common way for script to access an entity is by using `this.entity`, which refers to the entity the current component instance is attached to. Another common way is for the script to cast an entity as a gizmo, such as [TextGizmo](TextGizmo.md).
Scripts can also interact with external entities in the following ways:
Entity panel: If the Entity Panel of the attached entity passes in entities as properties.
Events: If an entity is sent to a script using an event, such as a [CodeBlockEvent](CodeBlockEvent.md).
Spawned entities: Entities that are spawned into the world. See the [Asset Spawning](../../../Desktop%20editor/Assets/Asset%20Spawning%20Reference.md) guide for usage.
For information about using entities, see the [TypeScript Components, Properties, and Variables](../../../Scripting/Get%20started%20with%20TypeScript/TypeScript%20Components,%20Properties,%20and%20Variables.md#entity) guide.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(id)** | Creates an entity in the world.  ---  Signature  ``` constructor(id: bigint); ```  Parameters  id: bigint  The ID of the entity to create. |

## Properties

|  |  |
| --- | --- |
| **children** | The child entities of the entity.      Signature  ``` children: ReadableHorizonProperty<Entity[]>; ``` |
| **collidable** | Indicates whether the entity is collidable. true if the entity is collidable; otherwise, false.      Signature  ``` collidable: HorizonProperty<boolean>; ``` |
| **color** | The color of the entity.      Signature  ``` color: HorizonProperty<Color>; ``` |
| **forward** | The forward vector of the entity.      Signature  ``` forward: ReadableHorizonProperty<Vec3>; ``` |
| **id**  [readonly] | The ID of the entity in the world.      Signature  ``` readonly id: bigint; ``` |
| **interactionMode** | The interaction mode for the entity, such as whether it's grabble or supports physics.      Signature  ``` interactionMode: HorizonProperty<EntityInteractionMode>; ``` |
| **isValidReference** | Whether or not the entity is still a valid entity reference, and hasn't been disposed. Useful in asynchronous contexts (async/awaits, promise.then's, and networkEvents).      Signature  ``` isValidReference: ReadableHorizonProperty<boolean>; ``` |
| **name** | The human readable name of the entity.      Signature  ``` name: ReadableHorizonProperty<string>; ``` |
| **owner** | The [Player](Player.md) that owns the entity.      Signature  ``` owner: HorizonProperty<Player>; ```  Remarks  When changing entity ownership to a new player, you must transfer the state of the entity as well or the state will be lost. You can use the [Component.transferOwnership()](../Abstract%20Classes/Component.md#transferownership) and [Component.receiveOwnership()](../Abstract%20Classes/Component.md#receiveownership) methods to transfer an entity's state to a new owner. For more information, see [Maintaining local state on ownership change](../../../Scripting/Local%20scripting/Maintaining%20Local%20State%20on%20Ownership%20Change.md). If ownership for a [Entity.parent](Entity.md#parent) entity changes, the ownership change doesn't automatically apply to any [Entity.children](Entity.md#children). |
| **parent** | The parent of the entity.      Signature  ``` parent: ReadableHorizonProperty<Entity | null>; ``` |
| **position** | The current position of the entity in the world.      Signature  ``` position: HorizonProperty<Vec3>; ``` |
| **right** | The right vector of the entity.      Signature  ``` right: ReadableHorizonProperty<Vec3>; ``` |
| **rotation** | The rotation component of the entity.      Signature  ``` rotation: HorizonProperty<Quaternion>; ``` |
| **scale** | The current scale of the entity in the world.      Signature  ``` scale: HorizonProperty<Vec3>; ``` |
| **simulated** | Determines whether grabbing and physics is calculated. If simulated is off, then objects aren't grabbable and aren't affected by physics.      Signature  ``` simulated: HorizonProperty<boolean>; ``` |
| **tags** | Use tags to annotate entities with user-defined labels that identify and match objects.      Signature  ``` tags: HorizonSetProperty<string>; ```  Examples  ``` entity.tags.set(['tag1', 'tag2']); const tags: Array<string> = entity.tags.get(); const containsTag1: boolean = entity.tags.contains('tag1'); entity.tags.remove('tag1'); entity.tags.clear(); ```  Remarks  You can have up to five tags per entity. Each tag can be up to 20 characters long. Tags are case sensitive. Avoid using special characters. There is no check for duplicate tags. Tags set or modified in TypeScript only presist for the session; they are not be stored in the entity. |
| **transform**  [readonly] | The transform of the entity, which contains position, rotation, and scale information.      Signature  ``` readonly transform: Transform; ``` |
| **up** | The up vector of the entity.      Signature  ``` up: ReadableHorizonProperty<Vec3>; ``` |
| **visible** | Indicates whether players with permission can see the entity. true if players with permission can see the entity; false if no players can see the entity.      Signature  ``` visible: HorizonProperty<boolean>; ```  Examples  ``` const wasVisible: boolean = cubeEntity.visible.get(); cubeEntity.visible.set(!wasVisible); ```  Remarks  You can set which players have permission using [Entity.setVisibilityForPlayers()](Entity.md#setvisibilityforplayers). It's important to note that if any parent entity has its visibility set to false, the child entity will also be invisible regardless of its own visibility setting. |

## Methods

|  |  |
| --- | --- |
| **as(entityClass)** | Cast an entity as its more specific subclass.      Signature  ``` as<T extends Entity>(entityClass: Class<[bigint], T>): T; ```  Parameters  entityClass: [Class](../Interfaces/Class.md)<[bigint], T>  The subclass to cast entity to.  Returns  T |
| **exists()** | Indicates whether the entity exists in the world. true if the entity exists in the world; otherwise, it does not exist in the world.      Signature  ``` exists(): boolean; ```  Returns  boolean  A boolean that indicates whether the entity exists in the world. |
| **getComponents(type)** | Returns a list of all script component instances attached to the entity and executing in the same context as the entity.      Signature  ``` getComponents<T extends Component<unknown, SerializableState> = Component>(type?: (new () => T) | null): T[]; ```  Parameters  type: (new () => T) | null  *(Optional)* The type of components to return. Otherwise, if not provided, this method returns components of any type.  Returns  T[]  The script component instances of the specified type that are attached to the entity.  Remarks  This method only returns script component instances if they're executing in the same context as the entity, such as on the same server or on a particular client. Avoid using this method in [Component.preStart()](../Abstract%20Classes/Component.md#prestart) as other script component instances may not be instantiated. |
| **getPhysicsBounds()** | Get an axis aligned bounding box that surrounds the colliders in this entity and its children in world space      Signature  ``` getPhysicsBounds(): Bounds; ```  Returns  [Bounds](Bounds.md)  a Bounds object encompassing all colliders under an entity |
| **getRenderBounds()** | Get an axis aligned bounding box that surrounds the renderers in this entity and its children in world space      Signature  ``` getRenderBounds(): Bounds; ```  Returns  [Bounds](Bounds.md)  a Bounds object encompassing all renderers under an entity |
| **isVisibleToPlayer(player)** | Indicates whether the entity is visible to the player.      Signature  ``` isVisibleToPlayer(player: Player): boolean; ```  Parameters  player: [Player](Player.md)  The player to check the view permission for.  Returns  boolean  `true` if the player has permission to view the entity, `false` otherwise.  Examples  ``` const playerHasViewPermission: boolean = cubeEntity.isVisibleTo(player); const isTrulyVisible: boolean = playerHasViewPermission && cubeEntity.visible.get(); ```  Remarks  The return value isn't affected by the `visible` property. For a player to view an entity, the entity must be visible (the `visible` property on the entity is `true`), and the user must have permission to view the entity (this function returns `true`). |
| **lookAt(target, up)** | Rotates an entity to look at a point.      Signature  ``` lookAt(target: Vec3, up?: Vec3): void; ```  Parameters  target: [Vec3](Vec3.md)  The target for the entity to look at.  up: [Vec3](Vec3.md)  *(Optional)* The up direction of the rotation. The default value is [Vec3.up](Vec3.md#up).  Returns  void |
| **moveRelativeTo(target, relativePosition, space)** | Moves every client instance of the entity relative to another entity.      Signature  ``` moveRelativeTo(target: Entity, relativePosition: Vec3, space?: Space): void; ```  Parameters  target: [Entity](Entity.md)  The entity to move towards.  relativePosition: [Vec3](Vec3.md)  The position for the client entity to move, relative to the target entity.  space: [Space](../Enumerations/Space.md)  *(Optional)* Indicates whether relativePosition is a world or local position.  Returns  void  Remarks  We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers. |
| **moveRelativeToPlayer(player, bodyPart, relativePosition, space)** | Moves every client instance of the entity relative to a player.      Signature  ``` moveRelativeToPlayer(player: Player, bodyPart: PlayerBodyPartType, relativePosition: Vec3, space?: Space): void; ```  Parameters  player: [Player](Player.md)  The entity to move towards.  bodyPart: [PlayerBodyPartType](../Enumerations/PlayerBodyPartType.md)  The body part of the player.  relativePosition: [Vec3](Vec3.md)  The position for the client entity to move, relative to the target entity.  space: [Space](../Enumerations/Space.md)  *(Optional)* Indicates whether the relativePosition is a world or a local position.  Returns  void  Remarks  We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers. |
| **resetVisibilityForPlayers()** | Makes the entity visible to all players in the world instance, which resets any changes made by calls to the method.      Signature  ``` resetVisibilityForPlayers(): void; ```  Returns  void  Examples  cubeEntity.resetPlayerVisibilityList();  Remarks  If a player joins your world instance after an object's visibility is changed with the resetVisibilityForPlayers method, the object becomes invisible to the new player. To ensure all new players can see the object upon joining the world instance, you must use the resetVisibilityForPlayers method. If a parent entity has its visibility set to false, the child entity also becomes invisible regardless of its own visibility setting. |
| **rotateRelativeTo(target, relativeRotation, space)** | Rotates every client instance of the entity relative to another entity.      Signature  ``` rotateRelativeTo(target: Entity, relativeRotation: Quaternion, space?: Space): void; ```  Parameters  target: [Entity](Entity.md)  The entity to rotate around.  relativeRotation: [Quaternion](Quaternion.md)  The rotation relative to the target.  space: [Space](../Enumerations/Space.md)  *(Optional)* Indicates whether relativeRotation is a world or a local rotation.  Returns  void  Remarks  We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers. |
| **rotateRelativeToPlayer(player, bodyPart, relativeRotation, space)** | Rotates every client instance of the entity relative to a player.      Signature  ``` rotateRelativeToPlayer(player: Player, bodyPart: PlayerBodyPartType, relativeRotation: Quaternion, space?: Space): void; ```  Parameters  player: [Player](Player.md)  The player for the entity to rotate around.  bodyPart: [PlayerBodyPartType](../Enumerations/PlayerBodyPartType.md)  The body part of the player.  relativeRotation: [Quaternion](Quaternion.md)  The rotation relative to the player.  space: [Space](../Enumerations/Space.md)  *(Optional)* Indicates whether the relativeRotation is a world or a local rotation.  Returns  void  Remarks  We recommend that you use this operation in an update loop instead of in a one-off call. Make sure that the client or server owns both the source and target, as the operation might not work properly if they are owned by different clients or servers. |
| **setVisibilityForPlayers(players, mode)** | Replaces the visibility state of the entity for the given players. The visibility state indicates whether the entity is visible or hidden for the given players.      Signature  ``` setVisibilityForPlayers(players: Array<Player>, mode: PlayerVisibilityMode): void; ```  Parameters  players: Array<[Player](Player.md)>  An array of Player objects to set the visibility mode for.  mode: [PlayerVisibilityMode](../Enumerations/PlayerVisibilityMode.md)  Indicates whether the entity is visible only to the specified players.  Returns  void  Examples  cubeEntity.setVisibilityForPlayers([myPlayer], PlayerVisibilityMode.VisibleTo);  Remarks  Before updating the visibility state of the entity, this method clears the current visibility state of the entity for the given players. This method can only make the entity visible to players if the `visible` property of the entity is already set to `true`. The `visible` property of an entity determines whether any players can view view the entity, so this method acts as a filter once the property is enabled. |
| **toString()** | Gets a human-readable representation of the entity.      Signature  ``` toString(): string; ```  Returns  string  A string representing the entity. |