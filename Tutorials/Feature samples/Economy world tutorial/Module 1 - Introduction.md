Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-1-introduction

# Module 1 - Introduction

<details>
<summary>Economy world cover image</summary>

<p></p>

[Economy world cover image](../../../image_data/e50538a004f9af871b6c801d6a28b0d3454ca0d734787924e1bd94b8046a8bb3.md)

### Overview
This image depicts a virtual environment resembling a shooting range or a game arena. The space is enclosed with yellow tiled walls and a flat floor. The central focus is a target mounted on a wall, surrounded by various objects that appear to be interactive elements within the game.

### Key Elements
- **Target**: A circular target with concentric rings, located centrally on the back wall.
- **Left Wall**: Contains a red rectangular object labeled "Snipershot (Web/Mobile Players Only)" and a small blue sign above it.
- **Right Wall**: Features another red rectangular object labeled "Cannon (VR Players Only)" and a small blue sign above it.
- **Floor**: A gray tiled surface with a grid pattern.
- **Central Wall**: A large, flat surface with a few scattered objects, including what looks like a small cannon and some other items.

### Visual Flow / Relationships
The most prominent visual element is the target at the back. The red objects on both walls are likely interactive targets or weapons, given their placement and labels. The objects on the central wall seem to be part of the game setup but are less distinct in purpose compared to the target and the labeled objects.

</details>

<p></p>



Welcome to module 1 of the Economy World tutorial. In this tutorial, you will learn:

* How to use in-world items and the shop gizmo to create an in-world economy
* How to design an in-world economy as a feature of your game
* How to use the Daily Claims gizmo to boost player engagement

Requirements

 You must be a member of MHCP and accept the terms in the Developer Dashboard to create in-world items and currency. Learn more from [Monetization opportunities](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

## Decoupling economy from monetization

It is important to differentiate between an in-world economy and monetization, as it’s easy to confuse the two.

* **In-World Economy**: The economy of a world which includes unlockable items, purchaseable goods, progression systems, and customization options. Unlockable and purchaseable in-world items may or may not be available to purchase with real-world currency.
* **Monetization**: The items in a world that are only available for purchase with real-world currency.

## Benefits of an in-world economy

Benefits of an in-world economy include:

* Developing the social value of cosmetic items in-world.
* Offering players meaningful rewards for regular or prolonged play sessions
* Building anticipation and excitement
* Encouraging daily engagement through features like Daily Claims rewards

## Introduction to tycoon games

To showcase the usage and impact of an in-world economy, we are focusing on a tycoon game.

The objective of this game is for players to earn in-world currency by performing tasks, then upgrading and improving their workflow to maximize the amount of currency for time spent in-world. The fulfilling experience of the world comes from players upgrading and improving their workflow, and unlocking more varied and valuable content.

The economy of this game forms the basis of the gameplay, but an in-world economy can be established in almost any game that requires player action. For the best results, it is worth considering how to incorporate an in-world economy during the design phase of your game.

## Introduction to apple farmer tycoon

In our example world, we have established an in-world economy based on a simple core loop. The core loop for this world is: Collect apples that fall from trees. Use the oven to cook 5x apples and convert to 1x pie. Sell the pies in the shop to receive gems (an in-world soft currency). Use the gems to purchase more ovens, as well as oven and apple tree upgrades.

## Introduction to the world inventory APIs

The backbone of the in-world economy and shop gizmo is the world inventory. The world inventory exists behind the scenes, storing the amount of each in-world item for each player entering the world. The world inventory persists after the player leaves the world, which means the next time the player joins, the world inventory will load as the player left it. The World Inventory is automatically created for each world.

There are several [TypeScript APIs](../../../Reference/core/Classes/WorldInventory.md) available to manage the world inventory. The key API calls for this tutorial are:

* `hz.WorldInventory.grantItemToPlayer(player, "item_sku", 1);`: The grantItemToPlayer method is used to grant a quantity of in-world items to the player’s world inventory.
* `hz.WorldInventory.consumeItemForPlayer(player, "item_sku", 5);`: This method is used to remove a quantity of in-world items from the player’s world inventory.
* `hz.WorldInventory.getPlayerEntitlementQuantity(player, “item_sku”);`: You can use this method to query how many of a specific in-world item the player has in their world inventory.