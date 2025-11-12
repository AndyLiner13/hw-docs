Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/shop-gizmo

Learn

# Shop gizmo

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

Gizmos are a suite of helper tools which are designed to enhance the creation and interactivity of worlds. The shop gizmo allows users to trade Meta credits and in-world items for other in-world items.

![Shop Gizmo in Meta Horizon Worlds](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/518277094_762929259578361_3593903843151039697_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8NurxzUYRk4Q7kNvwFzP7Ci&_nc_oc=AdkK-TtHmDiOe2YIrA1POeqGJhnWugg9c6MNRDmp_AGCMeQEwqePvcfOowOg1JJKgpE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hNAcgYi8O1n9mqTz8KycmQ&oh=00_AfjNFhN6By-W4vhAC55a5YYgj-8MwrgqTF5irp4RFS-O5g&oe=692EC591)

The shop gizmo can be configured to display in-world items created in the **Systems > Commerce** menu. For more information on creating in-world items, visit the [In-World Purchase Guide](/hw-docs/MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item).

Behind the scenes, the world inventory stores how many of each in-world item is owned by each player. While the shop interfaces with the world inventory automatically, you can use [World Inventory TypeScript APIs](/hw-docs/Reference/core/Classes/WorldInventory.md) to manually query, grant, and consume in-world items in a player’s world inventory.

## Limitations

The shop gizmo can only handle in-world items set to “Consumable.” This is because “Durable” in-world items can only be granted to a player once and are never consumed; therefore, they have limited application for the shop.

## Access the shop gizmo

To access the shop gizmo: In the desktop editor, enter Build mode and select **Build > Gizmos** from the menu bar. Next, search for “Shop” in the search field. Finally, select the shop gizmo and drag it into the scene. You can now edit the new gizmo properties in the **Properties** panel.

## Shop gizmo properties

The shop gizmo properties can be configured in the **Properties** panel or through scripting.

The shop gizmo properties contain two specialist property groups to configure the appearance and capabilities of the shop.

### Visual and interaction

Here you can change the following:

* **Display mode**: When set to “Spatial” it will display the shop in 3D space specified in Editor. If set to “Screen overlay”, renders the shop gizmo in screen mode on top of all in-game elements.
* **Displayed title**: Name the shop, which is displayed in the top-left corner of the shop UI.
* **# Shop Items**: State how many items are available at the shop. It is worth limiting the number of items to only what is currently available to avoid confusing the players, and to maintain a cleaner shop UI.
* **Display available Meta Credits**: If your shop features items that are available to purchase with Meta credits, we advise showing your player the amount of Meta credits they have available, so they can make informed purchase decisions.
* **Display item balance**: In addition to Meta credits, your shop can also display the amount of in-world items a player has. This is especially useful for any in-world currency items your players may need to use to purchase items from this shop, and can be different for different shops in the world.
* **Panel UI mode**: Select dark mode or light mode to match the theme of your world.

### Shop items

To use the shop gizmo, you will need to create in-world items through the **Systems > Commerce** menu. Once you have done this, you can add these items to the shop using the shop gizmo properties.

You can use the shop gizmo properties to configure which in-world items to display, and the cost of items in terms of other items. These are then available for players to swap, and will check the quantity of the item the player has before enabling them to purchase the item.

For example, let’s say a world features two in-world items, “Apple Pies” and “Gems,” which have been configured. It is possible to enable your player to swap 10 Apple Pies for 1 Gem with the following settings:

* Item 1: Gem
* Quantity: 1
* Redeem with: Apple Pie
* Quantity: 10

## Screen Overlay mode

To display the shop gizmo in screen overlay mode, you must make it visible through scripting. By default, when set to screen overlay, the shop gizmo remains hidden until a script makes it visible.

```
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, (player: hz.Player) => {
      const shopGizmo = this.props.shopGizmo!;
      this.world.setShopOverlayVisible(player, shopGizmo, true);
    });
```

## Listening to Shop Purchases

To listen to shop purchases and update your UI accordingly, you can use the `InWorldShopHelpers.OnPlayerPurchasedItemEvent` event. This event is fired whenever a player makes a purchase from a shop.

```
this.connectNetworkBroadcastEvent(hz.InWorldShopEvents.OnPlayerPurchasedItemEvent, (payload) => {
  // Update your UI here, e.g. update a HUD displaying how many items the player owns
  console.log(`Player ${payload.playerId} purchased ${payload.grantItemQuantity} of item ${payload.grantItemSku}`);
});
```

This code snippet listens for the OnPlayerPurchasedItemEvent event and logs a message to the console whenever a player makes a purchase. You can replace the `console.log` statement with your own code to update your UI as needed.

## Scripting

While the shop gizmo provides purchase callbacks through events as shown above, you can also use the [World Inventory TypeScript APIs](/hw-docs/Reference/experimental_worldinventory) to manage your player’s world inventory and distribute in-world items.