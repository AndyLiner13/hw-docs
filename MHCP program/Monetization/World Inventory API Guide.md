Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/world-inventory-api-guide

# World Inventory API Guide

The world inventory exists behind the scenes, storing a tally of in-world items for each player that enters the world. The world inventory persists after the player leaves the world, meaning the next time the player joins, the world inventory will be loaded as they left it. The world inventory is automatically created for each world.

There are several TypeScript APIs available to manage the world inventory for each player, and you can see these within some of the scripts in the Economy Example World.

## Items And entitlements

The TypeScript APIs feature a couple of key terms: **Items** and **Entitlements**.

**Entitlements**: An entitlement refers to the ability for a player to own an in-world item. When you create a new item in the **System > Commerce** menu, you are technically creating an entitlement for all players, i.e. you are creating the ability for all players to own an item.

**Items**: An item refers to an in-world item. Players can only own items that they have an entitlement for.

## Using promises

Each TypeScript API for the WorldInventory returns a Promise. You can learn more about Promises in the [official TypeScript documentation](https://www.typescriptlang.org/docs/handbook/intro.html). Promises are necessary when a function must be executed asynchronously, meaning it is executed without blocking higher priority functions. There are two main ways you can use Promises:

* `async/await` \* It’s possible to wait for an asynchronous function to be completed before proceeding to the next line of code when that function is called from within another asynchronous function as follows:

```
typicalFunction(){
  console.log(“This function is executed synchronously”);
  callAsyncFunction()
  console.log(“This code is executed without waiting for callAsyncFunction() to be completed”);
}

async callAsyncFunction(){
  console.log(“This function is executed asynchronously.”);
  const playerHasEntitlement = await hz.WorldInventory.doesPlayerHaveEntitlement(player, "item_sku");
  console.log(“Only once doesPlayerHaveEntitlement has completed will this log run. Player has entitlement: “ + playerHasEntitlement);
}
```

* `.then()` It’s possible to append a function that returns a promise with `.then()`, which includes a callback function that will only execute once the asynchronous operation has been completed.

```
typicalFunction(){
  console.log(“This function is executed synchronously”);
  hz.WorldInventory.doesPlayerHaveEntitlement(player, "item_sku").then((playerHasEntitlement) => {
    console.log(“Only once doesPlayerHaveEntitlement has completed will this log run. Player has entitlement: “ + playerHasEntitlement);
  });
}
```

## Granting / consuming items

You can manage the world inventory for each player by granting and consuming items. Granting an item increases the number of that item the player has, and consuming an item decreases it.

```
/*
 * Consumes the specified item or item pack for the given player.
 */
hz.WorldInventory.consumeItemForPlayer(player, 'item_sku', 5);

/*
 * Increases the player in world inventory item quantity by amount. Works for both durable and consumable items. Durable items will ignore the quantity parameter.
 */
WorldInventory.grantItemToPlayer(player, 'item_sku', 4);
```

## Querying world entitlements

You may want to query whether a player already has an item entitlement, or how many of a particular item they have. You can do this with the following:

```
/*
* Indicates whether the player has an entitlement for an in-world item based on the given SKU.
*/
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player) => {
    hz.WorldInventory.doesPlayerHaveEntitlement(player, sku).then((hasEntitlement) => {
    // true if the player owns this, false otherwise
      console.log("Player has entitlement: " + hasEntitlement);
    });
}

/*
* Returns the player in-world item quantity for the SKU.
*/
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player) => {
  WorldInventory.getPlayerEntitlementQuantity(player, "item_sku").then((itemQuantity) => {
    // 0 or a positive integer of how many they have
    console.log("Player has quantity: " + itemQuantity);
  })
}

/*
* Example showing how to get all player entitlements using async/await
*/
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, async (player) => {
  // Returns an array of all entitlements the player has
  const entitlements = await hz.WorldInventory.getPlayerEntitlements(player);
  entitlements.forEach((entitlement) => {
    console.log("Entitlement SKU: " + entitlement.sku);
  });
});
```

You can also query which items are available in the world, which will return an array of InWorldPurchaseable.

```
/*
* Returns a list of any in-world purchase items with SKUs that match the given list of item SKUs.
*/
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, (player) => {
  const skus = [“item_1_sku”, 'item_2_sku”'];
  WorldInventory.getWorldPurchasablesBySKUs(skus).then((purchaseableItems) => {
    console.log("Number of items: " + purchaseableItems.length);
    purchaseableItems.forEach((item) => {
      console.log("Item name: " + item.name);
      console.log("Item SKU: " + item.sku);
      console.log("Item description: " + item.description);
      console.log("Item price: " + item.price.priceInCredits);
      console.log("Item quantity: " + item.quantity);
      console.log("Item isPack: " + item.isPack);
    });
  })
}
```

Further information about these APIs can be found in the [APIs documentation](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory).