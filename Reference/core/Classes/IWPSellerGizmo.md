Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_iwpsellergizmo

# IWPSellerGizmo Class

Extends *[Entity](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md)*

Represents an In-World Item gizmo in the world.

## Signature

```
export declare class IWPSellerGizmo extends Entity
```

## Remarks

For information about usage, see the [In-world purchase](/hw-mcp-tools/documentation/hw-docs/MHCP%20program/Monetization/In-world%20purchase%20guide.md) guide.

## Methods

|  |  |
| --- | --- |
| **consumeItemForPlayer(player, item)** | Consumes the specified item for the given player.      Signature  ``` consumeItemForPlayer(player: Player, item: string): void; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player that's authorized to use the item.  item: string  The item the player is authorized to use.  Returns  void |
| **playerHasConsumedItem(player, item)** | Indicates whether a player used a specific item.      Signature  ``` playerHasConsumedItem(player: Player, item: string): boolean; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player to query.  item: string  The item to query.  Returns  boolean  true if player consumed the item, false otherwise. |
| **playerOwnsItem(player, item)** | Indicates whether the player has an entitlement for the given item.      Signature  ``` playerOwnsItem(player: Player, item: string): boolean; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player to query.  item: string  The item to query.  Returns  boolean  True if player has an entitlement for the item, false otherwise. |
| **quantityPlayerOwns(player, item)** | Gets the number of the items the player has entitlements for.      Signature  ``` quantityPlayerOwns(player: Player, item: string): number; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player to query.  item: string  The item to query.  Returns  number  The number of the items the player has entitlements for. |
| **timeSincePlayerConsumedItem(player, item, timeOption)** | Gets the time since the player consumed the given item.      Signature  ``` timeSincePlayerConsumedItem(player: Player, item: string, timeOption: MonetizationTimeOption): number; ```  Parameters  player: [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)  The player that consumed the item.  item: string  The item the player consumed.  timeOption: [MonetizationTimeOption](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/MonetizationTimeOption.md)  The time units since the player purchased the item and the item was consumed.  Returns  number  The number of `timeOption` units since player consumed the item. |
| **toString()** | Creates a human-readable representation of the gizmo.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the gizmo. |