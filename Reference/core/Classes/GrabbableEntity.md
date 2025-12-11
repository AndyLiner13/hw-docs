Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_grabbableentity

# GrabbableEntity Class

Extends *[Entity](Entity.md)*

Represents an entity that a player can grab.

## Signature

```
export declare class GrabbableEntity extends Entity
```

## Methods

|  |  |
| --- | --- |
| **forceHold(player, hand, allowRelease)** | Forces the player to hold the entity and attach it to a hand they control.      Signature  ``` forceHold(player: Player, hand: Handedness, allowRelease: boolean): void; ```  Parameters  player: [Player](Player.md)  The player that grabs the entity.  hand: [Handedness](../Enumerations/Handedness.md)  The player's hand that is grabbing the entity.  allowRelease: boolean  true if the player can release the entity when they are holding it; otherwise, fals.  Returns  void |
| **forceRelease()** | Forces the player to release the entity.      Signature  ``` forceRelease(): void; ```  Returns  void |
| **setWhoCanGrab(players)** | Specifies the players that can grab the entity.      Signature  ``` setWhoCanGrab(players: Array<Player>): void; ```  Parameters  players: Array<[Player](Player.md)>  An array of players that can grab the entity.  Returns  void |
| **toString()** | Creates a human-readable representation of the GrabbableEntity.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the GrabbableEntity. |