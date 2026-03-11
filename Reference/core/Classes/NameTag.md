---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_nametag
---

# [NameTag Class](#nametag-class)

A tag associated with a player avatar.

## [Signature](#signature)

```ts
export declare class NameTag 
```

## [Constructors](#constructors)

### [(constructor)(player)](#constructorplayer)

Creates a new `NameTag`.

**Signature**

```ts
constructor(player: Player);
```

**Parameters**

player: [Player](Player.md)

The Player to attach the tag to.

## [Properties](#properties)

### [visible](#visible)

The visibility of the player's tag.

**Signature**

```ts
visible: HorizonProperty<boolean>;
```

**Remarks**

`true` for visible, `false` for invisible.

