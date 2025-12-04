Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/avatar-override-tutorial-world/module-2-setup

# Module 2 - Setup

Note

You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](/hw-docs/MHCP%20program/Monetization/Monetization%20opportunities.md).

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

![Clothing Creation Page](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/557446075_828614593009827_5678205453223964822_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=S8k4ZAUV9o0Q7kNvwE66xqS&_nc_oc=Adn8uOTYWFbOELnBel-DEdoyyaGQVQRdpin0w8QS42MzZA0cB9phA46e_F1mnFQtxqs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=BVPJ8eLZS_k3IdmD8WySWg&oh=00_AfmVs7PD9B0hT7Xpz6my_ScMfLOaCmE7AjEgoleFg7Gdgg&oe=694BCB39)