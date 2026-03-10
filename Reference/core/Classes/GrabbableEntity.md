---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_grabbableentity
---

# [GrabbableEntity Class](#grabbableentity-class)

Extends *[Entity](Entity.md)*

Represents an entity that a player can grab.

## [Signature](#signature)

```
export
 declare 
class
 
GrabbableEntity
 
extends
 
Entity
 
```

## [Methods](#methods)

|                                           |                                                                                           |
| ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| **forceHold(player, hand, allowRelease)** | Forces the player to hold the entity and attach it to a hand they control.Signature\`\`\` |
| forceHold                                 |                                                                                           |
| (                                         |                                                                                           |
| player                                    |                                                                                           |
| :                                         |                                                                                           |

Player
,
hand
:

Handedness
,
allowRelease
:

boolean
):

void
;

````Parametersplayer: [Player](Player.md)The player that grabs the entity.hand: [Handedness](../Enumerations/Handedness.md)The player's hand that is grabbing the entity.allowRelease: booleantrue if the player can release the entity when they are holding it; otherwise, fals.Returnsvoid |
| **forceRelease()**                        | Forces the player to release the entity.Signature```
forceRelease
():
 
void
;
```Returnsvoid                                                                                                                                                                                                                                                                                                                                                                                    |
| **setWhoCanGrab(players)**                | Specifies the players that can grab the entity.Signature```
setWhoCanGrab
(
players
:
 
Array
<
Player
>):
 
void
;
```Parametersplayers: Array<[Player](Player.md)>An array of players that can grab the entity.Returnsvoid                                                                                                                                                                                                                                                     |
| **toString()**                            | Creates a human-readable representation of the GrabbableEntity.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the GrabbableEntity.                                                                                                                                                                                                                                                                                                              |
````

