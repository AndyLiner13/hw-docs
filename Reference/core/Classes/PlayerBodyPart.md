---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerbodypart
---

# [PlayerBodyPart Class](#playerbodypart-class)

Represents a player body part.

## [Signature](#signature)

```ts
export declare class PlayerBodyPart 
```

## [Constructors](#constructors)

### [(constructor)(player, type)](#constructorplayer-type)

Creates a `PlayerBodyPart`.

**Signature**

```ts
constructor(player: Player, type: PlayerBodyPartType);
```

**Parameters**

player: [Player](Player.md)

The player that owns the body part.

type: [PlayerBodyPartType](../Enumerations/PlayerBodyPartType.md)

The type of the body part.

## [Properties](#properties)

### [forward](#forward)

The forward direction of the body part.

**Signature**

```ts
forward: ReadableHorizonProperty<Vec3>;
```

### [localPosition](#localposition)

The position of the body part relative to the player's torso.

**Signature**

```ts
localPosition: ReadableHorizonProperty<Vec3>;
```

### [localRotation](#localrotation)

The local rotation of the body part relative to the player's torso.

**Signature**

```ts
localRotation: ReadableHorizonProperty<Quaternion>;
```

### [player \[readonly\] protected](#player-readonly-protected)

The player that owns the body part.

**Signature**

```ts
protected readonly player: Player;
```

### [position](#position)

The position of the body part relative to the player.

**Signature**

```ts
position: ReadableHorizonProperty<Vec3>;
```

### [rotation](#rotation)

The rotation of the body part relative to the player's body.

**Signature**

```ts
rotation: ReadableHorizonProperty<Quaternion>;
```

### [type \[readonly\] protected](#type-readonly-protected)

The type of the body part.

**Signature**

```ts
protected readonly type: PlayerBodyPartType;
```

### [up](#up)

The up direction of the body part.

**Signature**

```ts
up: ReadableHorizonProperty<Vec3>;
```

## [Methods](#methods)

### [getPosition(space)](#getpositionspace)

Gets the world or the local position of the body part.

**Signature**

```ts
getPosition(space: Space): Vec3;
```

**Parameters**

space: [Space](../Enumerations/Space.md)

Indicates whether to get the world or local position of the body part.

**Returns**

[Vec3](Vec3.md)

The position of the body part in this space.

### [getRotation(space)](#getrotationspace)

Gets the rotation or the local rotation of the body part.

**Signature**

```ts
getRotation(space: Space): Quaternion;
```

**Parameters**

space: [Space](../Enumerations/Space.md)

Indicates whether to get the world or local rotation of the body part.

**Returns**

[Quaternion](Quaternion.md)

The rotation of the body part in this space.

