Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/custom-ui-tutorial-world/zone-8-store

# Zone 8 - Store

This zone demonstrates a comprehensive storefront implementation that can handle complex e-commerce interactions.

## Station #18: Storefront

The storefront is a complex Custom UI example capable of handling a large number of store functions. This gizmo comes with a store manager. Modify the store manager by changing the store data. Your store can sell fish or watering cans, for example. Set up the items and their costs for sale. You can also define how many items can be sold or require a prerequisite.

![Storefront properties](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/549819880_817392024132084_4682760541414925115_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=sEFcs1_hM4gQ7kNvwGeEACf&_nc_oc=AdnA1bJ6Rjm-KyBzVpvs2fuRpz1oPZcU4175_FF2-3lvk1SU92fXvArlE1o7dJlZjpk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vKdT8yZzMoXnhKHNpnsUqA&oh=00_Afmj_xvGVmEJezOM9qh4YsbYUSBxTMY47mo9-zzgY8u-1w&oe=694BBF9A)

Here is a breakdown of the TypeScript code which creates a store for a game.

### Store.ts

This file is like the main control panel for the store. It sets up the store’s visual design and how it responds to what players do. It does not contain the actual items for sale, but it knows how to display them and what to do when a player clicks on something.

* **`StoreFront Class`**: This is the heart of the file. It is like a blueprint for the store’s user interface (UI). It manages things like which tab you’re on, what items are currently visible, and how much currency the player has.
* **`"Bindings"`**: The code uses something called “bindings,” which are like special connections. If a value, like the player’s currency, changes, the binding automatically tells the UI to update.
* **`UI Functions`**: The file has special functions to draw different parts of the store, such as the tabs at the top, the list of items, and the detailed view of a selected item.

### StoreData.ts

This file is the catalog for the store. It contains all the information about the items and what they look like. It doesn’t handle any of the logic for buying things; it just lists the items.

* **`Item Lists`**: The file has different lists of items, like GreenList, BlueList, and FreeList. These lists correspond to different sections of the store like “Pickaxes” and “Backpacks.”
* **`Item Information`**: Each item in the lists has properties like an ID, name, description, price, and an image to display. For example, a “Green Pickaxe” item has its own unique ID, a description, and an image.
* **`Images and Icons`**: It also defines all the images used in the store, from the pickaxes themselves to the icons that show an item’s status (like “Owned” or “Locked”).

### StoreLayout.ts

This file is your blueprint for the store’s appearance. It defines all the sizes, positions, colors, and margins for every part of the store. You can change the look of the store without touching the logic in the other files.

* **`Constants`**: It uses constants (values that don’t change) to define the exact pixel sizes and positions of everything. For example, panelWidth is set to 1920 and panelHeight is 1080.
* **`Diagram`**: The file includes a diagram in the comments to explain how the different sections of the store (“Tabs,” “Currency,” and “Detail Area”) are laid out on the screen.

### StoreTypes.ts

This file is like the dictionary for all the other store files. It defines the “rules” for what different types of data should look like.

* **`Data Types`**: It uses type and enum to create custom data types. For example, CurrencyType is defined as a list of numbers (number[]). This tells the other files that currency is always represented as a list of numbers.
* **`ItemStatus`**: A good example is ItemStatus, which is a list of words like Buyable, Upgrade, Owned, Locked, and Hidden. The code can only use one of these specific words to describe an item’s status.

### Network Events

* `playerPurchaseEvent`: This event sends a message whenever a player tries to buy something. The message includes information about the item, its price, the player who bought it, and the store they bought it from.

### Exported Functions

Exported functions are “public” and can be called from outside the file where they are created.

* **`From Store.ts`**:
  + **`SetStoreReady`**: Makes the store ready to be shown to the player.
  + **`SetStoreStatusIcons`**: Sets the images for the “Owned” and “Locked” icons.
  + **`SetStoreCurrency`**: Sets the images for the currency icons.
  + **`SetStoreTabs`**: Sets the names of the store tabs.
  + **`SetStoreTabNames`**: Sets the names of the store tabs.
  + **`SetStoreItems`**: Populates a store tab with a list of items.
  + **`SetPlayerCurrency`**: Updates the amount of currency a player has.
  + **`SetItemStatus`**: Changes the status of a specific item (e.g., from Buyable to Owned).
  + **`SetFirstVisibleActive`**: Automatically selects the first visible tab when the store opens.
  + **`SetItemPrice`**: Changes the price of an item.
* **`From StoreDemo.ts`**:
  + **`SetSimulatedInventory`**: Updates the level of an item a player owns.
  + **`GetSimulatedInventory`**: Checks the level of an item a player owns.

### StoreDemo.ts:

This file provides a demonstration of how all the other store files work together. It operates as the “brains” that connect the player’s information to the store’s display.

#### How It Works:

- **Starts Up**: When the game world starts, this file sets up the store for the player. It grabs the store’s visual settings and item lists from the other files and sends them to the store’s UI.
- **Player Joins**: When a player joins the game, `StoreDemo.ts` is notified. It then sets up a pretend “wallet” for the player and an “inventory” to keep track of their items and their levels.
- **Purchase Handling**: This is the most important part. `StoreDemo.ts` is always listening for the playerPurchaseEvent from the main `Store.ts` file.
- **Purchase Logic**: The PurchaseHandler function is a series of checks and actions.
  * **`Check canPurchase`**: First, it checks to see if the player has enough currency for the item.
  * **`Update Inventory`**: If the player can buy the item, the code checks the item’s type.
  * **`Update Wallet`**: The code then subtracts the item’s cost from the player’s wallet.
  * **`Update UI`**: Finally, it sends a message back to the store’s UI to update the currency display and the item’s status.