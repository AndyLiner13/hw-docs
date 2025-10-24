# Module 1 - Introduction

 Welcome to module 1 of the Economy World tutorial. In this tutorial, you will
learn:
• How to use in-world items and the shop gizmo to create an in-world economy
• How to design an in-world economy as a feature of your game

 Your Highlight HeadingYou must be a member of MHCP and accept the monetization Terms Of Service in the
creator portal to create in-world items and currency. Learn more from [Monetization opportunities](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).  

## Decoupling economy from monetization

 It is important to differentiate between an in-world economy and monetization,
as it’s easy to confuse the two.
• In-World Economy: The economy of a world which includes unlockable items, purchaseable goods,
progression systems, and customization options. Unlockable and purchaseable
in-world items may or may not be available to purchase with real-world currency.
• Monetization: The items in a world that are only available for purchase with real-world
currency.

  

## Benefits of an in-world economy

 Benefits of an in-world economy include:
• Developing the social value of cosmetic items in-world.
• Offering players meaningful rewards for regular or prolonged play sessions
• Building anticipation and excitement

  

## Introduction to tycoon games

 To showcase the usage and impact of an in-world economy, we are focusing on a
tycoon game. The objective of this game is for players to earn in-world currency by
performing tasks, then upgrading and improving their workflow to maximize the amount of
currency for time spent in-world. The fulfilling experience of the world comes
from players upgrading and improving their workflow, and unlocking more varied and
valuable content. The economy of this game forms the basis of the gameplay, but an in-world
economy can be established in almost any game that requires player action. For the
best results, it is worth considering how to incorporate an in-world economy during
the design phase of your game.  

## Introduction to apple farmer tycoon

 In our example world, we have established an in-world economy based on a simple
core loop. The core loop for this world is: Collect apples that fall from trees.
Use the oven to cook 5x apples and convert to 1x pie. Sell the pies in the shop
to receive gems (an in-world soft currency). Use the gems to purchase more
ovens, as well as oven and apple tree upgrades.  

## Introduction to the world inventory APIs

 The backbone of the in-world economy and shop gizmo is the world inventory. The
world inventory exists behind the scenes, storing the amount of each in-world
item for each player entering the world. The world inventory persists after the
player leaves the world, which means the next time the player joins, the world
inventory will load as the player left it. The World Inventory is automatically
created for each world. There are several [TypeScript APIs](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldinventory) available to manage the world inventory. The key API calls for this tutorial
are:
• `hz.WorldInventory.grantItemToPlayer(player, "item_sku", 1);`: The grantItemToPlayer method is used to grant a quantity of in-world items to
the player’s world inventory.

• `hz.WorldInventory.consumeItemForPlayer(player, "item_sku", 5);`: This method is used to remove a quantity of in-world items from the player’s
world inventory.
• `hz.WorldInventory.getPlayerEntitlementQuantity(player, “item_sku”);`: You can use this method to query how many of a specific in-world item the
player has in their world inventory.

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Feconomy-world-tutorial%2Fmodule-1-introduction%2F)
