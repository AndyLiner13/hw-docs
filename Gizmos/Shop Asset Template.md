Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/shop-asset-template

# Shop Asset Template

![Shop Asset Template](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/504085884_734185555786065_4230548913834177985_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=kMptQvPWv78Q7kNvwGLs4rz&_nc_oc=AdmA5Q4uQF3q9wyOrPwfgGvUQCeeIIQ4e_hnm2b0oiezLNRqhu19gzuR8xI2iySfjHc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=umtqjIKX7rHlROlTyKyIpg&oh=00_AfihGmWsDBlaB00dix82Mp-CJ8LXw0btawfRi_amzcQUKQ&oe=692F97D2)

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

The Shop Asset Template allows users to trade Meta credits and in-world items for other in-world items.

The Shop Asset Template can be configured to display in-world items created in the **Systems > Commerce** menu. For more information on creating in-world items, visit the [In-World Purchase Guide](/hw-docs/MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item).

Behind the scenes, the world inventory stores how many of each in-world item is owned by each player. While the shop interfaces with the world inventory automatically, you can use [World Inventory TypeScript APIs](/hw-docs/Reference/core/Classes/WorldInventory.md) to manually query, grant, and consume in-world items in a player’s world inventory.

## Access the Shop Asset Template

To access the Shop Asset Template: In the desktop editor, enter the Build mode and select **Asset Library > Public Assets** from the bottom menu bar. Next, search for “Shop” in the search field. Finally, select the Shop Asset Template and drag it into the scene. You can now edit the new asset template properties in the **Properties** panel.

![Finding the Shop Asset Template](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/503737348_734185559119398_8977711842245773395_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=DSFH-OKdCgEQ7kNvwGzWuK-&_nc_oc=AdmVt_fhKppyDr0Z4q5ligfKRfOOn8zYa5194kARidR1tJACLhepPUUUP9GbTeeeDgA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=umtqjIKX7rHlROlTyKyIpg&oh=00_AfhsvLdsZTLyrp2hURMw1FzUwLsqhGk13Pkk47pT23omsA&oe=692FBD91)

## Shop Asset Template properties

The Shop Asset Template properties can be configured in the **Properties** panel or through scripting.

### Visual and interaction

Here you can change the following:

* **Id**: Id of the Shop. Used to differentiate between multiple shops in the same world.
* **Displayed Title**: Name of the shop, which is displayed in the top-left corner of the shop UI.
* **Displayed Title Icon**: Select an icon to display next to the shop title.
* **Soft Currency SKU**: The SKU of the soft currency used to purchase items from this shop. This is used to display the amount of soft currency a player has available to purchase items from this shop.
* **Soft Currency Thumbnail**: The thumbnail of the soft currency used to purchase items from this shop. This is used to display the amount of soft currency a player has available to purchase items from this shop.
* **Item SKU**: The SKU of an item you want to sell in this shop.
* **Item Thumbnail**: The thumbnail of an item you want to sell in this shop.
* **Item Cost SKU**: The SKU of the currency used to purchase this item. Leave it blank if you want to sell this item with Meta credits.
* **Item Cost Quantity**: The quantity of the currency used to purchase this item. Leave it blank if you want to sell this item with Meta credits.

### Shop items

To use the Shop Asset Template, you will need to create in-world items through the **Systems > Commerce** menu. Once you have done this, you can add these items to the shop using the Shop Asset Template properties.

You can use the Shop Asset Template properties to configure which in-world items to display, and the cost of items in terms of other items. These are then available for players to swap, and will check the quantity of the item the player has before enabling them to purchase the item.

For example, let’s say a world features two in-world items, “Apple Pies” and “Gems,” which have been configured. It is possible to enable your player to swap 10 Apple Pies for 1 Gem with the following settings:

* Item 1: Gem
* Quantity: 1
* Cost SKU: Apple Pie
* Cost Quantity: 10

## Scripting

You can interface with the Shop Asset Template directly through TypeScript and fully customize the shop’s behavior. Please refer to the [World Inventory TypeScript APIs](/hw-docs/Reference/experimental_worldinventory) documentation for more information on the economy APIs.