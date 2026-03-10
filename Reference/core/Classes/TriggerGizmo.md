---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_triggergizmo
---

# [TriggerGizmo Class](#triggergizmo-class)

Extends *[Entity](Entity.md)*

Represents a Trigger gizmo in the world, which triggers an event when a player enters or exits a given area.

## [Signature](#signature)

```
export
 declare 
class
 
TriggerGizmo
 
extends
 
Entity
 
```

## [Properties](#properties)

|             |                                                                |
| ----------- | -------------------------------------------------------------- |
| **enabled** | Indicates whether the Trigger gizmo is enabled.Signature\`\`\` |
| enabled     |                                                                |
| :           |                                                                |

WritableHorizonProperty <boolean></boolean>
;

````|

## [Methods](#methods)

|                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **getWhoCanTrigger()**        | Gets all the players that can trigger the Trigger gizmo.Signature```
getWhoCanTrigger
():
 
Array
<
Player
>;
```ReturnsArray<[Player](Player.md)>An array of players that can trigger the gizmo.RemarksIf the trigger is set to `Objects`, it returns an empty array. If the trigger is set to `Players`, it returns all players (default) or the players specified by a [TriggerGizmo.setWhoCanTrigger()](TriggerGizmo.md#setwhocantrigger) call.                                                                                 |
| **setWhoCanTrigger(players)** | Specifies the players that can trigger the Trigger gizmo.Signature```
setWhoCanTrigger
(
players
:
 
'anyone'
 
|
 
Array
<
Player
>):
 
void
;
```Parametersplayers: 'anyone' \| Array<[Player](Player.md)>An array of players that can trigger the gizmo, or `anyone` (default).ReturnsvoidExamples```
trigger
.
setWhoCanTrigger
(
'anyone'
);
 
// anyone can trigger

trigger
.
setWhoCanTrigger
([]);
 
// no one can trigger

trigger
.
setWhoCanTrigger
([
player1
,
 player2
]);
 
// only those 2 players can trigger
``` |
| **toString()**                | Creates a human-readable representation of the `TriggerGizmo` object.Signature```
toString
():
 
string
;
```ReturnsstringA string representation `TriggerGizmo` object.                                                                                                                                                                                                                                                                                                                                                            |
````

