# AttachableEntity Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). Represents an entity that can be attached to other entities.

## Signature

```typescript
export declare class AttachableEntity extends Entity
```

## Properties

| Property | Description |
| --- | --- |
| `socketAttachmentPosition` | The socket attachment position offset applied to the AttachableEntity when using Anchor attachment mode.<br/>**Signature:** `socketAttachmentPosition: HorizonProperty<Vec3>;` |
| `socketAttachmentRotation` | The socket attachment rotation offset applied to the AttachableEntity when using Anchor attachment mode.<br/>**Signature:** `socketAttachmentRotation: HorizonProperty<Quaternion>;` |

## Methods

| Method | Description |
| --- | --- |
| `attachToPlayer(player, anchor)` | Attaches the entity to a player.<br/>**Signature:** `attachToPlayer(player: Player, anchor: AttachablePlayerAnchor): void;`<br/>**Parameters:** player: Player - The player to attach the entity to. anchor: AttachablePlayerAnchor - The attachment point to use.<br/>**Returns:** void |
| `detach()` | Releases an attachment to a player.<br/>**Signature:** `detach(): void;`<br/>**Returns:** void |
| `toString()` | Creates a human-readable representation of the object.<br/>**Signature:** `toString(): string;`<br/>**Returns:** string - A string representation of the object |