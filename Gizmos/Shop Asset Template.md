Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/shop-asset-template

# Shop Asset Template

<details>
<summary>Shop Asset Template</summary>

<p></p>

[Shop Asset Template](../image_data/9a4df1504e9b9f610a84b25180e4bf29d52e6e2fcc1364665381fa7b3cf5b4f9.md)

### Overview
This image depicts a user interface element from a game or application, specifically a market section labeled "Fresh Market." It shows items available for purchase, each with an icon, name, description, price, and quantity.

### Key Elements
- **Top Left Corner**: A coin icon with a dollar sign, labeled "Banana" with a price of "25" and a description "A banana."
- **Center Left**: A green potion bottle icon, labeled "Green Potion" with a description "A green potion, wow," priced at "4."
- **Right Center**: A purple potion bottle icon, labeled "Purple Potion" with a description "purple :O," priced at "10."
- **Top Right Corner**: A circular icon showing a banana and the number "159," likely representing the player's current balance or inventory.
- **Top Right Corner (Closest to Banana Icon)**: A small "X" button, presumably for closing the market window.

### Visual Flow / Relationships
The layout is grid-like, with three items arranged horizontally. The items are evenly spaced, and there are no connecting lines or arrows indicating a specific reading order. The most prominent visual elements are the item icons and their corresponding labels and descriptions.

</details>

<p></p>



Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../MHCP%20program/Monetization/Monetization%20opportunities.md).

The Shop Asset Template allows users to trade Meta credits and in-world items for other in-world items.

The Shop Asset Template can be configured to display in-world items created in the **Systems > Commerce** menu. For more information on creating in-world items, visit the [In-World Purchase Guide](../MHCP%20program/Monetization/In-world%20purchase%20guide.md#creating-an-item).

Behind the scenes, the world inventory stores how many of each in-world item is owned by each player. While the shop interfaces with the world inventory automatically, you can use [World Inventory TypeScript APIs](../Reference/core/Classes/WorldInventory.md) to manually query, grant, and consume in-world items in a player’s world inventory.

## Access the Shop Asset Template

To access the Shop Asset Template: In the desktop editor, enter the Build mode and select **Asset Library > Public Assets** from the bottom menu bar. Next, search for “Shop” in the search field. Finally, select the Shop Asset Template and drag it into the scene. You can now edit the new asset template properties in the **Properties** panel.

<details>
<summary>Finding the Shop Asset Template</summary>

<p></p>

[Finding the Shop Asset Template](../image_data/abad0a1d59e114694d3312d03dfde81fd2729073df07dfc447cb8de6a7075c00.md)

### Overview
This image depicts a user interface of an asset library within a software application. The layout includes a sidebar with categories, a search bar, sorting options, and a grid of asset thumbnails. The interface is designed for managing and viewing digital assets related to shop interiors.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Public Assets**: A folder icon labeled "Public Assets" indicating a section for shared assets.
  - **My Assets**: A folder icon labeled "My Assets," suggesting a personal collection of assets.
- **Search Bar (Top Center)**:
  - Contains a magnifying glass icon and the word "shop," indicating a search query.
- **Sorting Options (Top Right)**:
  - "Newest" dropdown menu showing sorting criteria.
  - "All" dropdown menu likely for filtering asset types.
  - "Creator" dropdown menu for filtering by creator.
- **Asset Grid (Center)**:
  - Contains thumbnails of various assets labeled as "Shop Awning," "Shop Door," and "Shop Window."
  - Each thumbnail has a circular icon with "MetaHoriz..." text, possibly indicating the creator or source.
- **Highlighted Asset (Right)**:
  - A larger thumbnail of a "Shop" asset with a thumbs-up icon showing one like and zero dislikes.
  - The asset has a purple background with a white storefront icon and a paintbrush icon, suggesting customization options.

### Visual Flow / Relationships
- **Most Prominent Element**: The highlighted "Shop" asset on the right.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The sidebar is on the left, the search bar is at the top, and the asset grid occupies the central area. The highlighted asset draws attention due to its larger size and distinct color.

</details>

<p></p>



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

You can interface with the Shop Asset Template directly through TypeScript and fully customize the shop’s behavior. Please refer to the [World Inventory TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/experimental_worldinventory) documentation for more information on the economy APIs.