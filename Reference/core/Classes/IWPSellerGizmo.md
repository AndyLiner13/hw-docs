---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iwpsellergizmo
---

# [IWPSellerGizmo Class](#iwpsellergizmo-class)

Extends *[Entity](Entity.md)*

Represents an In-World Item gizmo in the world.

## [Signature](#signature)

```
export
 declare 
class
 
IWPSellerGizmo
 
extends
 
Entity
 
```

## [Remarks](#remarks)

For information about usage, see the [In-world purchase](../../../MHCP%20program/Monetization/In-world%20purchase%20guide.md) guide.

## [Methods](#methods)

|                                        |                                                                  |
| -------------------------------------- | ---------------------------------------------------------------- |
| **consumeItemForPlayer(player, item)** | Consumes the specified item for the given player.Signature\`\`\` |
| consumeItemForPlayer                   |                                                                  |
| (                                      |                                                                  |
| player                                 |                                                                  |
| :                                      |                                                                  |

Player
,
item
:

string
):

void
;

````Parametersplayer: [Player](Player.md)The player that's authorized to use the item.item: stringThe item the player is authorized to use.Returnsvoid                                                                                                                                                                                                                                                               |
| **playerHasConsumedItem(player, item)**                   | Indicates whether a player used a specific item.Signature```
playerHasConsumedItem
(
player
:
 
Player
,
 item
:
 
string
):
 
boolean
;
```Parametersplayer: [Player](Player.md)The player to query.item: stringThe item to query.Returnsbooleantrue if player consumed the item, false otherwise.                                                                                                                                                                                                                                                       |
| **playerOwnsItem(player, item)**                          | Indicates whether the player has an entitlement for the given item.Signature```
playerOwnsItem
(
player
:
 
Player
,
 item
:
 
string
):
 
boolean
;
```Parametersplayer: [Player](Player.md)The player to query.item: stringThe item to query.ReturnsbooleanTrue if player has an entitlement for the item, false otherwise.                                                                                                                                                                                                                             |
| **quantityPlayerOwns(player, item)**                      | Gets the number of the items the player has entitlements for.Signature```
quantityPlayerOwns
(
player
:
 
Player
,
 item
:
 
string
):
 number
;
```Parametersplayer: [Player](Player.md)The player to query.item: stringThe item to query.ReturnsnumberThe number of the items the player has entitlements for.                                                                                                                                                                                                                                          |
| **timeSincePlayerConsumedItem(player, item, timeOption)** | Gets the time since the player consumed the given item.Signature```
timeSincePlayerConsumedItem
(
player
:
 
Player
,
 item
:
 
string
,
 timeOption
:
 
MonetizationTimeOption
):
 number
;
```Parametersplayer: [Player](Player.md)The player that consumed the item.item: stringThe item the player consumed.timeOption: [MonetizationTimeOption](../Enumerations/MonetizationTimeOption.md)The time units since the player purchased the item and the item was consumed.ReturnsnumberThe number of `timeOption` units since player consumed the item. |
| **toString()**                                            | Creates a human-readable representation of the gizmo.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the gizmo.                                                                                                                                                                                                                                                                                                                                                                                                           |
````

