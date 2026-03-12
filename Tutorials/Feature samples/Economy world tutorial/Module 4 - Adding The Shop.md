---
source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-4-adding-the-shop
---

# [Module 4 - Adding The Shop](#module-4---adding-the-shop)

> [!Note]
>
> You will need to be a member of MHCP and have accepted the terms in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

## [Adding the shop to the world](#adding-the-shop-to-the-world)

Let’s add a shop to the world using the world shop gizmo.

1. From the desktop editor, open the **Build Menu** and select **Gizmos**

![Select Gizmos](../../../.assets/image/f31b8e7608b6fb3f66e73ac86d9c0dbf444307ccddd30a9433f324ccd9161fc0.jpg)

1. Search or scroll to find the world shop gizmo

![Find the World Shop gizmo](../../../.assets/image/a57c4488a6faf019de4327be83015f4704c55d9b751c96d877f7ae06c7e44af0.png)

1. Drag the world shop gizmo into the world, and place it under the “Cook Shop” heading.

![Drag the shop into the world](../../../.assets/image/dfee477a978091fab6c8316923a05558264851617aa7bc41262226a95d263e84.jpg)

1. You may find that the gizmo arrives in the world facing the wrong way. Switch to the rotate tool (“E” on the keyboard) and rotate it 180° on the Y-axis (the green arc).

![Rotate and position the shop accordingly](../../../.assets/image/dbca95045ca4c54413d4f8eb164621b059217aef40aa16dc05e3dfbee4ee5b95.jpg)

## [Selling pies for gems](#selling-pies-for-gems)

Configure the world shop Gizmo to allow the player to swap 1x pie for 10x gems:

1. Select the world shop gizmo you added to the world

![Select the World Shop gizmo in the world](../../../.assets/image/f826f7387b7dd8cbf8833683b52f9e5c5e9a9b8af1887b8795629cf3aa94c488.jpg)

1. In the **Properties** panel, click the**Select item** drop-down menu

![Configure the first shop item 1](../../../.assets/image/2034454db1db84685072d6be57fbf72aca269434247cb5d2ecaaf2c725d6aebb.jpg)

1. Select **Gem**, and ensure the first **Quantity** text entry is set to “1”

![Configure the first shop item 2](../../../.assets/image/6ce857056f5051a920cc0434ce785cc92708ec947aa80988da81e84eec205c2b.jpg)

1. Click the **Select item** drop-down and choose **Apple Pie**

![Configure the first shop item 3](../../../.assets/image/4cc0800bac51a7c2ff8fa572fb65567637aafb243b71875525e84e0e97dac442.jpg)

1. Change the second **Quantity** text entry to “10” (10x Apple Pies = 1x Gem)

![Configure the first shop item 4](../../../.assets/image/b17898768cdc3aa4aef54ef9b9cd5ea4191035636e2fe3c82cb335ddeecd7f25.jpg)

The gem should now be visible in the shop UI, which also lists the purchase price and currency of the item.

![Configure the first shop item 5](../../../.assets/image/260e17969a1ba42b71d3a384a5100104c8efcbed87b89639975da24ce156c4a7.jpg)

## [Adding utility power-ups: Faster pies and faster apples](#adding-utility-power-ups-faster-pies-and-faster-apples)

Purchaseable utility items are great options to sell in the shop. They increase the player’s earning potential, but still require them to perform the core game loop of collecting apples and baking pies in order to maximize their benefit.

The benefit of utility items like faster pies is that it keeps the perceived value of pies high (as it still requires time investment from the player to bake the pie) while ensuring the player feels rewarded for purchasing the power-up (because they can increase their pie output).

Conversely, if we made pies purchaseable they would become devalued, as players with enough money could just pay to get them, rather than dedicating time in-game.

Let’s add “Faster Pies” and “Faster Apples” to the game. Repeat the steps for adding Gems to the shop, but now add the following items:

1. Item 2: 1x Faster Pies should be redeemed with 20x Gems
2. Item 3: 1x Faster Apples should be redeemed with 30x Gems

Your world shop properties should now be as follows:

![Example world shop proerties](../../../.assets/image/e496aa5dbe4f95e5771dbd392c3fd40bbe56840cf4577f9c6ecc746e502839b3.jpg)

## [Configuring the appearance of the shop](#configuring-the-appearance-of-the-shop)

As there are only three items for sale in the shop, you can configure the shop to only show the first three items in the shop UI. This will reduce clutter and make it easier for the player to understand what they can purchase.

With the shop selected, change the following properties in the **Properties** panel:

1. **Displayed title**: Cook Shop
2. **# Shop Items**: 3
3. **Display item balance**: Apple Pie

