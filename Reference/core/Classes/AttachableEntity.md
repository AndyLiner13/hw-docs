---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_attachableentity
---

# [AttachableEntity Class](#attachableentity-class)

Extends *[Entity](Entity.md)*

Represents an entity that can be attached to other entities.

## [Signature](#signature)

```
export
 declare 
class
 
AttachableEntity
 
extends
 
Entity
 
```

## [Properties](#properties)

|                              |                                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **socketAttachmentPosition** | The socket attachment position offset applied to the `AttachableEntity` when using Anchor attachment mode.Signature\`\`\` |
| socketAttachmentPosition     |                                                                                                                           |
| :                            |                                                                                                                           |

HorizonProperty
<
Vec3

> ;

````|
| **socketAttachmentRotation** | The socket attachment rotation offset applied to the `AttachableEntity` when using Anchor attachment mode.Signature```
socketAttachmentRotation
:
 
HorizonProperty
<
Quaternion
>;
``` |

## [Methods](#methods)

|                                    |                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **attachToPlayer(player, anchor)** | Attaches the entity to a player.Signature```
attachToPlayer
(
player
:
 
Player
,
 anchor
:
 
AttachablePlayerAnchor
):
 
void
;
```Parametersplayer: [Player](Player.md)The player to attach the entity to.anchor: [AttachablePlayerAnchor](../Enumerations/AttachablePlayerAnchor.md)The attachment point to use.Returnsvoid |
| **detach()**                       | Releases an attachment to a player.Signature```
detach
():
 
void
;
```Returnsvoid                                                                                                                                                                                                                                             |
| **toString()**                     | Creates a human-readable representation of the object.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the object                                                                                                                                                                               |
````

