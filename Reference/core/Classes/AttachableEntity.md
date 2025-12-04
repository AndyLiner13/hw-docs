Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_attachableentity

# AttachableEntity Class

Extends *[Entity](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md)*

Represents an entity that can be attached to other entities.

## Signature

```
export declare class AttachableEntity extends Entity
```

## Properties

|  |  |
| --- | --- |
| **socketAttachmentPosition** | The socket attachment position offset applied to the `AttachableEntity` when using Anchor attachment mode.      Signature  ``` socketAttachmentPosition: HorizonProperty<Vec3>; ``` |
| **socketAttachmentRotation** | The socket attachment rotation offset applied to the `AttachableEntity` when using Anchor attachment mode.      Signature  ``` socketAttachmentRotation: HorizonProperty<Quaternion>; ``` |

## Methods

|  |  |
| --- | --- |
| **attachToPlayer(player, anchor)** | Attaches the entity to a player.      Signature  ``` attachToPlayer(player: Player, anchor: AttachablePlayerAnchor): void; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player to attach the entity to.  anchor: [AttachablePlayerAnchor](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/AttachablePlayerAnchor.md)  The attachment point to use.  Returns  void |
| **detach()** | Releases an attachment to a player.      Signature  ``` detach(): void; ```  Returns  void |
| **toString()** | Creates a human-readable representation of the object.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the object |