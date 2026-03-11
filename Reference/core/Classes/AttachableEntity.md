---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_attachableentity
---

# [AttachableEntity Class](#attachableentity-class)

Extends *[Entity](Entity.md)*

Represents an entity that can be attached to other entities.

## [Signature](#signature)

```ts
export declare class AttachableEntity extends Entity 
```

## [Properties](#properties)

### [socketAttachmentPosition](#socketattachmentposition)

The socket attachment position offset applied to the `AttachableEntity` when using Anchor attachment mode.

**Signature**

```ts
socketAttachmentPosition: HorizonProperty<Vec3>;
```

### [socketAttachmentRotation](#socketattachmentrotation)

The socket attachment rotation offset applied to the `AttachableEntity` when using Anchor attachment mode.

**Signature**

```ts
socketAttachmentRotation: HorizonProperty<Quaternion>;
```

## [Methods](#methods)

### [attachToPlayer(player, anchor)](#attachtoplayerplayer-anchor)

Attaches the entity to a player.

**Signature**

```ts
attachToPlayer(player: Player, anchor: AttachablePlayerAnchor): void;
```

**Parameters**

player: [Player](Player.md)

The player to attach the entity to.

anchor: [AttachablePlayerAnchor](../Enumerations/AttachablePlayerAnchor.md)

The attachment point to use.

**Returns**

void

### [detach()](#detach)

Releases an attachment to a player.

**Signature**

```ts
detach(): void;
```

**Returns**

void

### [toString()](#tostring)

Creates a human-readable representation of the object.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the object

