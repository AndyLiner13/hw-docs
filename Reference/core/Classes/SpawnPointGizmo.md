---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnpointgizmo
---

# [SpawnPointGizmo Class](#spawnpointgizmo-class)

Extends *[Entity](Entity.md)*

A Spawn Point gizmo, which you can use to teleport players to a location in a world using a fade-out/fade-in transition.

## [Signature](#signature)

```
export
 declare 
class
 
SpawnPointGizmo
 
extends
 
Entity
 
```

## [Remarks](#remarks)

For more information about using the Spawn Point gizmo, see [Spawn Points](../../../Tutorials/Feature%20samples/Multiplayer%20lobby%20tutorial/Module%205%20-%20Entering%20the%20Match.md) guide.

## [Properties](#properties)

|             |                                                                  |
| ----------- | ---------------------------------------------------------------- |
| **gravity** | The gravity for players spawned using this gizmo.Signature\`\`\` |
| gravity     |                                                                  |
| :           |                                                                  |

HorizonProperty <number></number>
;

````RemarksRange = (0, 9.81) |
| **speed**   | The speed for players spawned using this gizmo.Signature```
speed
:
 
HorizonProperty
<number>
;
```RemarksRange = (0, 45)       |

## [Methods](#methods)

|                            |                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **teleportPlayer(player)** | Teleports a player to the spawn point.Signature```
teleportPlayer
(
player
:
 
Player
):
 
void
;
```Parametersplayer: [Player](Player.md)The player to teleport.Returnsvoid |
| **toString()**             | Creates a human-readable representation of the SpawnPointGizmo.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the `SpawnPointGizmo`.        |
````

