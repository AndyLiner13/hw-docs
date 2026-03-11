---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawnpointgizmo
---

# [SpawnPointGizmo Class](#spawnpointgizmo-class)

Extends *[Entity](Entity.md)*

A Spawn Point gizmo, which you can use to teleport players to a location in a world using a fade-out/fade-in transition.

## [Signature](#signature)

```ts
export declare class SpawnPointGizmo extends Entity 
```

## [Remarks](#remarks)

For more information about using the Spawn Point gizmo, see [Spawn Points](https://developers.meta.com/horizon-worlds/learn/documentation/tutorials/multiplayer-lobby-tutorial/module-5-entering-the-match) guide.

## [Properties](#properties)

### [gravity](#gravity)

The gravity for players spawned using this gizmo.

**Signature**

```ts
gravity: HorizonProperty<number>;
```

**Remarks**

Range = (0, 9.81)

### [speed](#speed)

The speed for players spawned using this gizmo.

**Signature**

```ts
speed: HorizonProperty<number>;
```

**Remarks**

Range = (0, 45)

## [Methods](#methods)

### [teleportPlayer(player)](#teleportplayerplayer)

Teleports a player to the spawn point.

**Signature**

```ts
teleportPlayer(player: Player): void;
```

**Parameters**

player: [Player](Player.md)

The player to teleport.

**Returns**

void

### [toString()](#tostring)

Creates a human-readable representation of the SpawnPointGizmo.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the `SpawnPointGizmo`.

