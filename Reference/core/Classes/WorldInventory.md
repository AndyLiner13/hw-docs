Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory

# WorldInventory Class

Represents the inventory of items in a world.

## Signature

```
export declare class WorldInventory
```

## Examples

This example method retrieves the entitlements for a given player, and verifies whether a specific item is owned by the player.

```
verifyEntitlement(player: hz.Player, itemSKU: string) {
  const items: PlayerEntitlementDetails[] = await WorldInventory.getPlayerEntitlements(player);
  const isActive = WorldInventory.DoesPlayerHaveEntitlement(player,itemSKU);
  console.log(itemSKU," consumbed item is", isActive,"\n");
}
```

## Remarks

You can use this class to create a custom inventory of items a player is entitled to.

## Methods

|  |  |
| --- | --- |
| **consumeItemForPlayer(player, sku, quantity)** static | Consumes the specified item or item pack for the given player.      Signature  ``` static consumeItemForPlayer(player: Player, sku: string, quantity?: number): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player that's authorized to use the items.  sku: string  The SKU of the item or item pack to consume.  quantity: number  *(Optional)* The quantity of the item to consume. 1 is the minimum and default value.  Returns  void  Examples  In this example, a player consumes 5 power-up items.  ``` consumeItemForPlayer(player, "power_up_sku", 5); ``` |
| **doesPlayerHaveEntitlement(player, sku)** static | Indicates whether the player has an entitlement for an in-world item based on the given SKU.      Signature  ``` static doesPlayerHaveEntitlement(player: Player, sku: string): Promise<boolean>; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player to fetch entitlement information for.  sku: string  The SKU of the in-world item.  Returns  Promise<boolean>  - True if the player owns the in-world item for the SKU, otherwise false. |
| **getPlayerEntitlementQuantity(player, sku)** static | Returns the player in-world item quantity for the SKU.      Signature  ``` static getPlayerEntitlementQuantity(player: Player, sku: string): Promise<number>; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player to fetch in world items for  sku: string  Item/Item Pack SKUs to verify for  Returns  Promise<number>  - Returns item & item pack quantity if the player owns the in-world item for the SKU, otherwise 0 if player does not own item. |
| **getPlayerEntitlements(player)** static | Gets a list of active entitlements for the given player in a world.      Signature  ``` static getPlayerEntitlements(player: Player): Promise<PlayerEntitlement[]>; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player to fetch in-world entitlements for.  Returns  Promise<[PlayerEntitlement](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerentitlement)[]>  - A promise that resolves to a list of in world entitlement details for the player. |
| **getWorldPurchasablesBySKUs(skus)** static | Returns a list of any in-world purchase items with SKUs that match the given list of item SKUs.      Signature  ``` static getWorldPurchasablesBySKUs(skus: Array<string>): Promise<Array<InWorldPurchasable>>; ```  Parameters  skus: Array<string>  The list of item SKUs to query.  Returns  Promise<Array<[InWorldPurchasable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_inworldpurchasable)>>  - A promise that resolves to a list of in-world purchase items with SKUs that match the list of SKUs provided.  Examples  In this example, a menu displays any in-world purchase items with the provides SKUs.  ``` class GameManager extends hz.Component<typeof GameManager> {   static propsDefinition = {};   const skus = ['hamburger_item_123', 'hotdog_item_123'];   start() {     this.connectLocalBroadcastEvent(setMenuBoardState, (data: {state: MenuBoardState}) => {       this.setMenuBoardState(data.state);     });     const featuredItems = await hz.WorldInventory.getWorldPurchasablesBySKUs(skus);     if(featuredItems.length > 0) {       this.setMenuBoardState({items: featuredItems, message: null});     } else {       this.setMenuBoardState({items: [], message: 'No items available today!'});     }   }   } }  hz.Component.register(GameManager); ```  Remarks  This method allows you to query in-world purchase items so you can display their current catalog information in your world, such as their price and display name. |
| **grantItemToPlayer(player, sku, quantity)** static | Increases the player in world inventory item quantity by amount. Works for both durable and consumable items. Durable items will ignore the quantity parameter.      Signature  ``` static grantItemToPlayer(player: Player, sku: string, quantity?: number): void; ```  Parameters  player: [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)  The player to grant item to.  sku: string  The unique sku corresponding to the item to grant. Find it on Creator portal  quantity: number  *(Optional)*  Returns  void  Examples  ``` WorldInventory.grantItemToPlayer(player, "item_sku"); ``` |