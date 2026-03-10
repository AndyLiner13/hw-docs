---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world
---

# [World Class](#world-class)

Represents a virtual world in Meta Horizon Worlds, which provides access to properties, events, and operations related to the world state; including events scripts can use to time operations based on state changes to the world.

## [Signature](#signature)

```
export
 declare 
class
 
World
 
```

## [Properties](#properties)

|        |                                              |
| ------ | -------------------------------------------- |
| **id** | Returns the current world ID.Signature\`\`\` |
| id     |                                              |
| :      |                                              |

ReadableHorizonProperty <bigint></bigint>
;

````|
| **leaderboards**                         | The leaderboards for the players in the world.Signature```
leaderboards
:
 
ILeaderboards
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **matchmaking**                          | The matchmaking system for queueing players into the world.Signature```
matchmaking
:
 
{

        allowPlayerJoin
(
allow
:
 
boolean
):
 
Promise
<void>
;

    
};
```Remarks`allowPlayerJoin` - Indicates whether players can join the world.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **name**                                 | The human-readable name of the world.Signature```
name
:
 
ReadableHorizonProperty
<string>
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **onPrePhysicsUpdate**static \[readonly] | An event that broadcasts on every rendered frame before the physics engine updates the world state. This event is especially useful for timing animations and entity locations before physics calculations are performed.Signature```
static
 
readonly
 onPrePhysicsUpdate
:
 
LocalEvent
<{

        deltaTime
:
 number
;

    
}>;
```RemarksThe [World.onPrePhysicsUpdate](World.md#onprephysicsupdate) event provides similar functionality, but after the physics engine performs calculations. For more information about subscribing to world update events, see the [World Update Events](../../../Scripting/Events/World%20Update%20Events.md) guide.                                                                                                                                                                  |
| **onUpdate**static \[readonly]           | An event that broadcasts on every rendered frame in the world, allowing synchronization between the state of the world and the rendering pipeline. You can use this event to time animations, physics, and entity transforms for optimal performance.Signature```
static
 
readonly
 onUpdate
:
 
LocalEvent
<{

        deltaTime
:
 number
;

    
}>;
```RemarksBy subscribing to this event, a script can perform operations during the world update loop, such as [spawning an asset](World.md#spawnasset). The [World.onPrePhysicsUpdate](World.md#onprephysicsupdate) event provides similar functionality, but before the physics engine performs calculations. For more information about subscribing to world update events, see the [World Update Events](../../../Scripting/Events/World%20Update%20Events.md) guide. |
| **persistentStorage**                    | A persistent storage object, which contains a set of functions that interact with player variables. For information about using player variables, see the [Persistent Variables](../../../Scripting/Get%20started%20with%20TypeScript/Object%20Type%20Persistent%20Variables.md) guide.Signature```
persistentStorage
:
 
IPersistentStorage
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **persistentStorageWorld**               | A persistent storage object, which contains a set of functions that interact with player variables.Signature```
persistentStorageWorld
:
 
IPersistentStorageWorld
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **snapshotId**                           | Returns the current snapshot ID.Signature```
snapshotId
:
 
ReadableHorizonProperty
<bigint>
;
```                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **team**                                 | Basic functions for teams based gameplay.Signature```
team
:
 
ITeam
;
```RemarksIn horizon, every world comes with a team management logic. Players, at any moment during their session, can join, leave or change teams at will. But a player can only be in one team of a given team group. Team groups are ways to separate teams in different sets. This allows the creation of multiple gameplay bubbles with their own teams in one single world.                                                                                                                                                                                                                                                                                                                                                                          |
| **ui**                                   | Basic UI functions for displaying popups and tooltips.Signature```
ui
:
 IUI
;
```RemarksFor an example, see the [Lobby tutorial](../../../Tutorials/Feature%20samples/Multiplayer%20lobby%20tutorial/Module%204%20-%20Starting%20the%20Game.md#display-a-countdown-timer).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## [Methods](#methods)

|                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **deleteAsset(entity, fullDelete)**                   | Removes a previously spawned asset from the world.Signature```
deleteAsset
(
entity
:
 
Entity
,
 fullDelete
?:
 
boolean
):
 
Promise
<undefined>
;
```Parametersentity: [Entity](Entity.md)The previously spawned entity.fullDelete: boolean*(Optional)* if `true`, the entity must be the root object, thus deleting all sub-objects.ReturnsPromise\<undefined>A promise that resolves when the entity has been deleted.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **findEntities(name, options)**                       | Finds entities by their names.Signature```
findEntities
(
name
:
 
string
,
 options
?:
 
FindEntitiesOptions
):
 
Entity
[];
```Parametersname: stringThe name of the entities to find, case sensitive. Must not be empty. If empty, will log an error.options: [FindEntitiesOptions](../Type%20Aliases/FindEntitiesOptions.md)*(Optional)* Options for the [World.findEntities()](World.md#findentities) method. `rootEntity` - Will only search for entities that are descendents of the given root [entity](Entity.md) `matchOperation` - The [match operation](../Enumerations/EntityNameMatchOperation.md) to run when searching for entities with given string`rootEntity` defaults to undefined, which means the entire hierarchy will be searched`matchOperation` defaults to [EntityNameMatchOperation.Exact](../Enumerations/EntityNameMatchOperation.md). Options are [EntityNameMatchOperation.Exact](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.StartsWith](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.EndsWith](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.Contains](../Enumerations/EntityNameMatchOperation.md), and [EntityNameMatchOperation.Regex](../Enumerations/EntityNameMatchOperation.md)Returns[Entity](Entity.md)\[]An array of all of the entities matching the string and operation. If no entities are found, the array will be empty.Examples```
const
 floorTiles 
=
 
this
.
world
.
findEntities
(
'floor'
);
 
// returns all entities with the name 'floor'.


const
 trees 
=
 
this
.
world
.
findEntities
(
'tree'
,
 
{
rootEntity
:
 groundEntity
});
 
// returns all entities with the name tree that are descendants of the entity 'groundEntity'


const
 enemies 
=
 
this
.
world
.
findEntities
(
'enemy'
,
 
{
matchOperation
:
 
EntityNameMatchOperation
.
StartsWith
});
 
// returns all entities whose name's start with 'enemy'


const
 cubes 
=
 
this
.
world
.
findEntities
(
'Cube'
,
 
{
matchOperation
:
 
EntityNameMatchOperation
.
EndsWith
});
 
// returns all entities whose name's ends with 'Cube'


const
 walls 
=
 
this
.
world
.
findEntities
(
'Wall'
,
 
{
matchOperation
:
 
EntityNameMatchOperation
.
Contains
});
 
// returns all entities whose name's contain the string 'Wall'


const
 apples 
=
 
this
.
world
.
findEntities
(
"^a...e$"
,
 
{
matchOperation
:
 hz
.
EntityNameMatchOperation
.
Regex
});
 
// returns all entities whose name matches the regex, in this case meaning it starts with a lower case a, ends with an e, and is five characters long


const
 applesFromTree 
=
 
this
.
world
.
findEntities
(
"^a...e$"
,
 
{
rootEntity
,
 treeEntity
,
 matchOperation
:
 hz
.
EntityNameMatchOperation
.
Regex
});
 
// returns all entities matching the regex that descend from treeEntity


const
 expectEmpty 
=
 
this
.
world
.
findEntities
(
''
);
 
// name must not be empty. Logs an error and returns an empty array
```RemarksFor performance reasons do not do this in the update loop. Best used in start and cache the result. |
| **findEntity(name)**                                  | Finds an entity by its name.Signature```
findEntity
(
name
:
 
string
):
 
Entity
 
|
 
undefined
;
```Parametersname: stringThe name of the entity to find, case sensitive. Must not be emptyReturns[Entity](Entity.md) \| undefinedThe entity with the specified name, or undefined if no such entity exists.Examples```
const
 floor 
=
 
this
.
world
.
findEntity
(
'floor'
);
 
// returns the entity with the name floor.


const
 expectUndefined 
=
 
this
.
world
.
findEntity
(
'oneOfMany'
);
 
// if multiple entites with same name exists, this logs an error to console and returns undefined


const
 expectUndefiend 
=
 
this
.
world
.
findEntity
(
''
);
 
// name must not be empty. Logs an error and returns undefined
```RemarksFor performance reasons do not do this in the update loop. Best used in start and cache the result. If there are multiple entities with the same name, will log an error and return undefined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **getEntitiesWithTags(tags, matchOperation)**         | Gets all world entities containing the provided tags using the provided match operation.Signature```
getEntitiesWithTags
(
tags
:
 
string
[],
 matchOperation
?:
 
EntityTagMatchOperation
):
 
Entity
[];
```Parameterstags: string\[]An array of tag names to match against. The comparison is case sensitive.matchOperation: [EntityTagMatchOperation](../Enumerations/EntityTagMatchOperation.md)*(Optional)* The match operation to run when searching for entities with given tags. Defaults to [EntityTagMatchOperation.HasAnyExact](../Enumerations/EntityTagMatchOperation.md).Returns[Entity](Entity.md)\[]An array of all of the entities matching the tags and operation.Examples```
entityA
.
tags
.
set
([
'tag1'
,
 
'tag2'
,
 
'tag3'
]);

entityB
.
tags
.
set
([
'tag2'
,
 
'tag3'
,
 
'tag4'
]);

entitiesWithAnytags 
=
 
this
.
world
.
getEntitiesWithTags
([
'tag1'
,
 
'tag2'
],
 
EntityTagMatchOperation
.
MatchAny
);
 
// returns entityA & entityB

entitiesWithAlltags 
=
 
this
.
world
.
getEntitiesWithTags
([
'tag3'
,
 
'tag4'
],
 
EntityTagMatchOperation
.
MatchAll
);
 
// returns entityB
```RemarksThis is an expensive operation and should be used carefully.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **getLocalPlayer()**                                  | Gets the player corresponding to the local Meta Horizon Worlds client running on the player's machine where this script is currently executing.Signature```
getLocalPlayer
():
 
Player
;
```Returns[Player](Player.md)The local player.RemarksThis is particularly useful for Local Scripting to figure out which player's machine a local script is executing on. Note that if the local script is executing on the server, this will return the server player.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **getPlayerFromIndex(playerIndex)**                   | Gets the [Player](Player.md) object for the given [player index](Player.md#index).Signature```
getPlayerFromIndex
(
playerIndex
:
 number
):
 
Player
 
|
 
null
;
```ParametersplayerIndex: numberThe index of the player. Retrievable with the [Player.index](Player.md#index) property.Returns[Player](Player.md) \| nullThe player corresponding to that index, or null if no player exists at the index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **getPlayers()**                                      | Gets all [players](Player.md) currently in the world, not including the server player.Signature```
getPlayers
():
 
Player
[];
```Returns[Player](Player.md)\[]An array of [Player](Player.md) objects in the world.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **getServerPlayer()**                                 | Gets the player corresponding to the server's Meta Horizon Worlds client.Signature```
getServerPlayer
():
 
Player
;
```Returns[Player](Player.md)The server player.RemarksThis is particularly useful for Local Scripting to figure out if a script is executing on some client other than the server. Note that a server player is not physically present in the world and does not support a number of standard features (such as name.get() or being moved) that normal players do.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **reset()**                                           | Resets the world's state. This sets all entities back to their initial position, cancels all event and event listeners, and restarts scripts in the world.Signature```
reset
():
 
void
;
```Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **setShopOverlayVisible(player, shopGizmo, visible)** | Changes the visible state of a shop configured as an overlay elementSignature```
setShopOverlayVisible
(
player
:
 
Player
,
 shopGizmo
:
 
Entity
,
 visible
:
 
boolean
):
 
Promise
<void>
;
```Parametersplayer: [Player](Player.md)the player who will be seeing the shop overlay change stateshopGizmo: [Entity](Entity.md)the entity Gizmo of the shopvisible: booleanthe new state to set to the shopReturnsPromise\<void>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **spawnAsset(asset, position, rotation, scale)**      | Asynchronously spawns an asset.Signature```
spawnAsset
(
asset
:
 
Asset
,
 position
:
 
Vec3
,
 rotation
?:
 
Quaternion
,
 scale
?:
 
Vec3
):
 
Promise
<
Entity
[]>;
```Parametersasset: [Asset](Asset.md)The asset to spawn.position: [Vec3](Vec3.md)The position where the asset is spawned.rotation: [Quaternion](Quaternion.md)*(Optional)* The rotation of the spawned asset. If invalid, is replace with `Quaternion.one` (no rotation).scale: [Vec3](Vec3.md)*(Optional)* The scale of the spawned asset.ReturnsPromise<[Entity](Entity.md)\[]>A promise resolving to all of the root entities within the asset.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **toString()**                                        | Creates a string representation of the `World` object.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the `World` object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **update(updateType, deltaTime)**                     | Called on every frame.Signature```
update
(
updateType
:
 
WorldUpdateType
,
 deltaTime
:
 number
):
 
undefined
;
```ParametersupdateType: WorldUpdateTypeThe type of update.deltaTime: numberThe duration, in seconds, since the last frame.Returnsundefined                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
````

