---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_grabbableentity
---

# [GrabbableEntity Class](#grabbableentity-class)

Extends *[Entity](Entity.md)*

Represents an entity that a player can grab.

## [Signature](#signature)

```ts
export declare class GrabbableEntity extends Entity 
```

## [Methods](#methods)

### [forceHold(player, hand, allowRelease)](#forceholdplayer-hand-allowrelease)

Forces the player to hold the entity and attach it to a hand they control.

**Signature**

```ts
forceHold(player: Player, hand: Handedness, allowRelease: boolean): void;
```

**Parameters**

player: [Player](Player.md)

The player that grabs the entity.

hand: [Handedness](../Enumerations/Handedness.md)

The player's hand that is grabbing the entity.

allowRelease: boolean

true if the player can release the entity when they are holding it; otherwise, fals.

**Returns**

void

### [forceRelease()](#forcerelease)

Forces the player to release the entity.

**Signature**

```ts
forceRelease(): void;
```

**Returns**

void

### [setWhoCanGrab(players)](#setwhocangrabplayers)

Specifies the players that can grab the entity.

**Signature**

```ts
setWhoCanGrab(players: Array<Player>): void;
```

**Parameters**

players: Array<[Player](Player.md)>

An array of players that can grab the entity.

**Returns**

void

### [toString()](#tostring)

Creates a human-readable representation of the GrabbableEntity.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the GrabbableEntity.

