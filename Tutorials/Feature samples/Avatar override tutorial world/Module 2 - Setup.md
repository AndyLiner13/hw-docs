Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/avatar-override-tutorial-world/module-2-setup

# Module 2 - Setup

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

Important

In-world items are tied to the world in which they are created, and can only be created by owners and editors of the world. This means that in order for the outfits to override as expected, the in-world items for this tutorial will need to be created by you.

Note

For detailed platform documentation on Avatar Overrides, see the [Avatar Item Overrides](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-item-overrides) page.

## Avatar Item Overrides

This module guides you through creating avatar clothing items, accessing them in your world via API, and managing equips via scripting and triggers.

## Creating In-World Items

Avatar clothing items can be created using the Meta [avatar item creation tool](https://horizon.meta.com/creator/avatars/). For detailed instructions, visit the [Avatar Clothing Creation & Selling](https://developers.meta.com/horizon-worlds/learn/documentation/full-bodied-avatars/avatar-clothing-creation-and-selling) page.

Once created, avatar clothing items can be added to your world as interactive entities. For guidance on creating these in-world items, see the Avatar Outfits Tutorial World Setup.

## Inputting SKUs into the Game

To enable players to equip avatar clothing items, items will need to be created and their SKUs entered into their respective Avatar Test Trigger or Outfit UI.

These elements are used to detect player interaction and apply the corresponding SKU (item ID) to the player’s avatar.

<details>
<summary>Clothing Creation Page</summary>

<p></p>

[Clothing Creation Page](../../../image_data/74a5df2dcf87493f1d121799da74db512d70134ef7c844ffd1519c8fe979da1b.md)

### Overview
The image displays a user interface for editing item details within a digital platform. It features a preview image of a waffle-patterned item, likely pants, alongside a form with various editable fields. The interface includes a warning message at the top indicating that the item needs additional information before listing.

### Key Elements
- **Preview Image**: A waffle-patterned pair of pants is displayed on the left side. The pants are shown in a light brown color with a grid pattern resembling waffles.
- **Form Fields**: Located on the right side, the form contains several fields with placeholder text indicating required information:
  - **Name**: Needs name
  - **Description**: Needs description
  - **Inventory type**: Avatar Item
  - **Category**: Bottoms
  - **Acquisition type**: Paid
  - **Price**: Needs price
  - **Item type**: Durable
  - **Can be used**: Anywhere
  - **Age rating**: 10+
- **Buttons**: At the top right, there are three buttons labeled:
  - Download texture file
  - Delete item
  - Edit
- **Warning Message**: A red warning triangle icon precedes the message: "Before you can list this item in your world, you need to set a price and other details."

### Visual Flow / Relationships
The layout is structured with the preview image on the left and the form fields on the right. The form fields are arranged vertically, with each field having a label followed by a placeholder text. The warning message is positioned above the form fields, drawing attention to the missing information needed before proceeding. The buttons are aligned horizontally at the top right, providing options for downloading the texture, deleting the item, or editing the details.

</details>

<p></p>

