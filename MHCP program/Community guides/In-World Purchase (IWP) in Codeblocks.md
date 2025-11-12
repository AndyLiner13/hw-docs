Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/in-world-purchase-iwp-in-codeblocks

Learn

# In-World Purchase (IWP) in Codeblocks

Author: SeeingBlue

## Introduction

**Creator Skill Level**

Intermediate

**Recommended Prerequisite Background Knowledge**

An understanding of Intermediate Codeblock Scripting, [Persistent Player Variables](/hw-docs/Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Managing%20Persistent%20Variables%20Associated%20with%20a%20Variable%20Group.md), and [Basic Asset Spawning](/hw-docs/MHCP%20program/Community%20guides/Part%20One%20Understanding%20Asset%20Spawning%20with%20SeeingBlue.md) is recommended.

**Note**: IWP creation is now available in the Desktop Editor. Visit the [documentation](/hw-docs/MHCP%20program/Monetization/In-world%20purchase%20guide.md) for more information on this.

**Description**

In this document, we will go over the different types of In-World Purchases (IWPs), how to create each one, their related codeblocks, and some examples of how to use them.

**Learning Objectives**

By reading and reviewing this written guide you will be able to:

* Understand the IWP item types and related codeblock events, actions, operators, and values.
* Create all IWP item types including durable items with and without assets, auto-use and manual-use consumables, and group consumables together using item packs.
* Create purchases for members-only areas in your worlds, offer tangible items via the player’s inventory, and sell consumables to enhance gameplay.

## Understanding IWP Item Types and Related Codeblocks

### IWP Types

* **Durable without Asset**

  + Permanent (unless deleted by the user)
  + Used as a permanent status on a player, like VIP.
* **Durable with Asset**

  + Permanent (unless deleted by the user)
  + Unlimited uses
  + Retrieved from player’s Horizon inventory
  + Used for items players can spawn/despawn from their inventory.
* **Consumable with Auto-Use**

  + One-time use (can be repurchased)
  + Consumed immediately after purchase, does not appear in inventory
  + Does not require confirmation
  + Used for temporary statuses, time-based upgrades, and more
* **Consumable without Auto-use**

  + One-time use per purchase, can stack multiple purchases
  + Consumed from Horizon’s Inventory
  + Requires confirmation (via codeblocks) before consumption
  + Used for temporary statuses, time-based upgrades, and more
* **Item Packs**

  + Created out of *Consumables without Auto-use* items.
  + Allows you to combine a consumable into a stack of multiples.
  + Used to discount the sale of multiple consumables at once.

### IWP Codeblocks

**Broadcast Events**

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/461828106_558937446644211_4069079405675549335_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=c5gYSblUhA4Q7kNvwGsBusc&_nc_oc=Adk_zijd2CQHol2M--FABq2qe3ajMfICgOdVbx_e5QTO8ImKVA8aO28i8KckG1Pyg8E&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgDWb7JpPymDDJRREhsmdMHTY1PfrRWEUdrdlts6X75Bw&oe=692EA634)

* **“when player starts purchase item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who started the purchase
    - `itemId`: A string containing the name/id of the item being purchased.
  + This can be used on any script where you need to know when a purchase is started.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461872321_558937569977532_4169706045827159329_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=llOGcttROMwQ7kNvwErwrz_&_nc_oc=AdkU4ttCY3BeEGXtIuy2yfIV1h5sYSrvXsMxJprk34MiadgJLErQ6eKFGDWGD8UIQQg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfhpHT1ceCA9uCi2WnKCC6uigx2U6xCpjMrn14xPDjxOWQ&oe=692EB5A6)

* **“when player completes purchase item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who completed the purchase
    - `itemId`: A string containing the name/id of the item purchased.
    - `success`: A boolean letting us know if the purchase succeeded or failed.
  + This can be used on any script where you need to know when a purchase is completed successfully or not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461742436_558937363310886_7632016646801491315_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ryQE1E8miV8Q7kNvwE0p6D6&_nc_oc=AdnvBvyXCunnnMoaRjBITmZVEmRMzzHFgmIHT7oSesgKc_x0bFw7ijjjVvwfTSZMtp0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgpcBekb0BUpMMkxmwnPlgwJIPAGJy62zvl0yVpXD4woA&oe=692EAC5C)

* **“when player starts consume item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who started the consumption.
    - `itemId`: A string containing the name/id of the item being consumed.
  + This can be used on any script where you need to know when consumption is started.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461947158_558937576644198_8509130094477816769_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=XzqZdE_3Y7EQ7kNvwGvYu32&_nc_oc=AdloKc0cHr1U7P9S4V6zrshS5FLT4fpmKku0bkbwtzSgR2MEFrYV710OGW3qSUmAjWg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgjTjgssEjdVuo1dBNTujApf5pXTnK0snWwj_DLIXHlvA&oe=692EBD9D)

* **“when player completes consume item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who completed the consumption
    - `itemId`: A string containing the name/id of the item consumed.
    - `success`: A boolean letting us know if the consumption succeeded or failed.
  + This can be used on any script where you need to know when consumption is completed successfully or not.

**![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/462013257_558937543310868_2866554405895002171_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=FxY2MbxwG3AQ7kNvwHCByOF&_nc_oc=AdngBtt_Jk8O2OUxxEtV7Kbw5DKD4nHKdYTEJa0qB8P4yJs4CtUHeSezuBMuof4HeRA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgcpMzZSDVWXqIZ8iXsYIXt4BDQBVfANbVVXGeIYW_b6g&oe=692E93A4)**

* **“when an asset spawns from player inventory”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `obj`: A reference to the object that spawned from the player’s inventory.
    - `asset`: A reference to the asset used to spawn the object.
    - `player`: A reference to the player that spawned the item from their inventory.
  + This can be used on any script where you need to know when an item has spawned from a player’s inventory.

**Non-broadcast Events**

**![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461860683_558937423310880_5802107090403536248_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ul8vJ_oMHrYQ7kNvwFmIG42&_nc_oc=AdlilQ2BKvWuy5UmIBtpgJ2Fieg2l_0XL3iYpliabzZvkmS6yTjRav6MkliIsarfjGo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afi1Au4Q7BQIwisFXIVKN034ElGr8Ee0nt9skv9Z2T_76w&oe=692EC3FA)**

* **“when player purchase succeeds on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that purchased the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when a purchase of that item is successful.

**![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461795097_558937546644201_8837716101915000798_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=gnycIcqqFfcQ7kNvwGBHvNB&_nc_oc=Adk4VrBYCBosiATUdshNoDtGOQovnrj0T1xInLi5MpBY4oGSfRD-kyJYKZKdM9EAEWI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afh7--aFaw8JqtLzcJBNl1L9bIKBncJ4ug3yB5bRtXKt_Q&oe=692EC438)**

* **“when player purchase fails on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that attempted to purchase the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when a purchase of that item fails.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/462000937_558937573310865_3749702168699519294_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8T4Z0jSU9mkQ7kNvwHo87MZ&_nc_oc=Adnx9aiA_0PDYIJH17x3yLA0CMh3R5AelAgMYM1Uu_AwhudDrToCSTuTn-axPbE7GLc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfhNpWZGY14UU0ClacLC-zyvC85tgRGziIQ46fzxrFp64Q&oe=692E96CA)

* **“when player consume succeeds on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player consumed the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item is consumed successfully.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461730009_558937549977534_9215645537090210231_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=jAFmuEtXxdcQ7kNvwGQY93f&_nc_oc=AdkQ9t-gLLCCjiqxspxFYG71vQB7-xAOWtcLA-2OYIiydZim9b2xkYfs0E66uptBZB8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfjrV5jRv9j_e2G_ldwfsXuQc307gGgDJTnSpSLWkVEx2Q&oe=692EAF98)

* **“when player consume fails on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that attempted to consume the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item failed to be consumed.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/461742624_558937533310869_3315324053455887134_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=oxR6VANwC98Q7kNvwGKLUXl&_nc_oc=Adk29g7esQx53Ij7qDpihQ9fM4NmCFV0dkCRpxI2cpDy4FJi7Kes-HNK4TPFyYr2_7Y&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afgm82gtSn8XfK4sxQP8gqNnceVE8cEu_lDxz8Bp3PWKeg&oe=692E9216)

* **“when player try to consume item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that’s trying to consume the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item is attempted to be consumed.

**Actions**

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461688556_558937503310872_7649843234651612191_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=gqC3fhZTRcMQ7kNvwGL6vEa&_nc_oc=Admgoq6JTt0XAcMqNOqN0vd9BRqUzFsGVoqSSJKV5q5ioTNR627p9Oj7QJjKCPXZ8mI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afh0UlB46L9X3xR17mLHh1F1_xCo0nzAo-epKgUgAmywJw&oe=692EB850)

* **“consume item for player”**
  + Required Parameters
    - `player`: A reference to the player to consume the item.
    - `itemId`: A reference to the item to be consumed.
      * *Note* : This is an *Input Value* found under the *Values* category of your Script gizmo.
  + This is to be used to confirm the consumption of a *Consumable without Auto-use*.

**Operators**

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461974836_558937439977545_6340259987809215145_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=yCRqce7WY5kQ7kNvwEN1aAk&_nc_oc=AdnmKbAeZUdk_zac3G96QpkK7tENlzNQCNEj48w2l7t8He9HLDHsS9Qs73pt9iY8JyQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgBi--XFa3qmrWPly-FBF0ce9soTPNKPsWXdLjnfQfRbA&oe=692EC656)

* **“player owns item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a boolean that tells us whether the player owns the selected In-World item.

**![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461742917_558937506644205_5976681854130956775_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qvPGppj2k0MQ7kNvwG0Kx5U&_nc_oc=AdnqJYPX5YoQoL0_pt5_9DWN8QwQt6X_wXk4fkDtJT-bhiKLJl_IKft9UbSELYCfYpU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfieERY7SOTLHJekMJbngx9hNv9jJIW4qp1hPVlH7T9kKA&oe=692EAD8E)**

* **“player owns item quantity”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a number that tells us how many of the selected *Consumable without Auto-use* the player owns.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461797566_558937459977543_901849217770869654_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=cwOPxI0iNXsQ7kNvwEekYYl&_nc_oc=AdmOCZgAUs8qVreLxp-ubMpzrEH5HltsAEMlZJQGrTIA8-tLnc_ifNdZaeEKWMxEmI8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afg9ydH-jpoUB39AvHQBGjZI3Q1G1LhDeEyyn3M6WQ98Vg&oe=692EA00D)

* **“time since player consumed item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a number based on the selected value from a dropdown menu. Options are seconds, minutes, and days. The returned number represents how many seconds, minutes, or days that have passed since the item was consumed.
    - *Note*: Returns a 0 if the item has never been consumed. Recommended that you use this in conjunction with the “*player has consumed item*” codeblock.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/461825844_558937443310878_2067734326099493470_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rz83FO03xiQQ7kNvwELBsc8&_nc_oc=Adko882UTgQTUgYK6LYfp6CaUOoYMR1X1noOxJYbvclzjZScc2C7Wp77zSM1c1C0fQg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afj4FgpJuB3lx8T-8bKBTKBk6R8QNNoKDQjns-dDkJoqJQ&oe=692EBE33)

* **“player has consumed item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a boolean that tells us whether the player has consumed the selected item.

**Values**

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461976591_558937589977530_5446846885349310805_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Db0chfOkhYAQ7kNvwHlHyy9&_nc_oc=AdkQdpXykwiPDkdPf3OSBmGW6fbHVBaZqCMYlPJkXfZ4898yFLdn-pp2VC-n9fjGpEg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfjfqoHPWnTlJ0cYu5Q8DI8xUBygKKqOVK2zVA9VKKGX6w&oe=692EA261)

* **“in-world items”**
  + Contains a dropdown menu that lets you select an In-World Item ID to be used when making conditional checks in your IF statements.

## Creating an IWP

Creating and implementing IWPs involves a series of steps from item creation to placement in your world. This section will walk you through the process of setting up IWPs, including naming, pricing, and configuring item properties. You’ll learn how to create durable and consumable items, add them to your world, and customize their appearance and functionality.

**Step 1:** While in build mode, open your build menu, navigate to *Systems,* and click *Commerce* then *Create Item*.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461683576_558937513310871_2554100072706911353_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Yz9KumORQLQQ7kNvwGxUwIa&_nc_oc=AdnpCdibJXBQ47AzCGFRJxRVkoYudISGI2bYh0FK8lSiAzXy6jcc3ndmlqsOtRZew3U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfjLhmse0lWINEYzgHiL8qAqKi7TMw6ngjO-n-T-5rRO6g&oe=692EA6A8)

**Step 2:** Every IWP you create requires a *Name*, *Sell Price*, *Thumbnail*, and selected *Item type*.

| **Durable In-World Item** | **Consumable In-World Item** |
| --- | --- |
|  |  |
| Asset reference is optional. Leaving it blank will create a *Durable Item without an Asset* (permanent player statuses). Adding an Asset will create a *Durable Item with Asset*, like a permanent weapon, hat, etc… | Decide if your consumable will be automatically consumed upon purchase or allow the user to consume it from their inventory with *Auto use*. |

**Note:***Description* is an optional field, but it is recommended that you provide a detailed description to help users understand what they are buying.

**Step 3:** Once your In-World Item has been created, you can grab an In-World Item gizmo from your build menu and drag it into your world.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461688156_558937523310870_6289736828187432400_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=aOPyMvlqQcwQ7kNvwFAJQiw&_nc_oc=AdkrRRi3b0jmfMD47meNwYPELgxkF4jY8YNJliM9EzHvbLsmotmN9GVJ7uw_1AWdwp0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afi76V-7jPr8_KsJqg7jpEzeHp4qax4uoacduZVoBv_3hQ&oe=692EBB28)

**Step 4:** Open the property panel for your In-World Item gizmo and there are several settings you can change here:

* Hit *Select* next to *In-World Item* and select the In-World Item associated with this gizmo.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461835191_558937536644202_1528060342302655134_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=QGgD058dpl4Q7kNvwGAQAdI&_nc_oc=Adk9OExrtA3Bn8jP2K_D8XvTv_OR7Zlzh4YvkFAn2lwfOKA8kPm8YcWApwCpi14yjGA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfiFmIsJfJLDXzZ4vijoISKnMIGzYbkxdjk9X7RMIoybCg&oe=692EBFD2)

* Click the dropdown next to *UI Property* and change the display style of your gizmo.

| Trigger | Button | Icon |
| --- | --- | --- |
|  |  |  |

* This is also where you would attach any scripts using the non-broadcast event codeblocks described under the **IWP Codeblocks** section.

**Now your IWP is ready for purchase!**

## Creating Item Packs

This section will guide you through the process of creating and selling Item Packs, including how to access the feature, select items, set quantities and prices, and make them available for purchase in your game.

Item Packs consist of *Consumables without Auto-use* offering players the ability to purchase items in bulk. You can create one by opening your build menu, navigating to *Systems* then *Commerce* again, selecting *Item Packs*, and clicking *Create Item Pack*.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/461857884_558937456644210_2326314548428903926_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=83jW1Doe0SoQ7kNvwHuV_GE&_nc_oc=AdmUblTffxyftOwk6hoQiOrdfB64Uca93pORK_5Ju32fUg4s_X8LyNwHjT1aDhFAssM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfiEit0EeOksZ8cCgQ2RSgCm29Zr8ERsMQwfQqcJ4SqtLQ&oe=692EC767)

The next window will ask you which *Consumable without Auto-use* you would like to make an Item Pack out of. Once selected you can choose an *Item quantity* between 2 and 99 then select your *Sell Price*.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461878408_558937519977537_2913137907270513473_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=1zdSPy0cEnYQ7kNvwHNMnUj&_nc_oc=AdkRJP5iLz5QPlLGmuSrevYTAhFQn82W52H53claEux8RfkM5qXYJOzADdcDgoo0Pz8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgmPXOIrcYG3HE96BBqDuJx5ga-Dd9a-hdR8mnddHlmCw&oe=692EA94B)

Once created you can follow the same steps 3-4 in the previous section, **Creating an IWP**, to start selling your item pack.

## Examples: Implementing & Selling IWPs

In the following section, we will apply what we learned in the previous sections to build practical applications for our world. Some examples will include developing members-only area, an inventory system for weapons or other items, consumable health potions, and a simple item shop. These examples will demonstrate how to implement common gameplay mechanics, allowing players to access restricted areas, manage their inventory, use items, and make purchases within the game.

### Durable without Asset

**VIP Area**

**Required:** Durable Item without Asset. Follow steps 1-4 under **Creating an IWP** to create the VIP commerce, and setup the related *In-World Item* gizmo. Then pull out a *Trigger Gizmo* to get started

Durable items without assets are straightforward since all you can do is check if the player owns the IWP.

In this example, the script below is attached to a Trigger gizmo that covers our VIP area. When a player enters the trigger, we will check if they own this item and respawn them if they do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461957051_558937409977548_2001440408993131692_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=y3od46TT7VgQ7kNvwGLPmIn&_nc_oc=AdkXc6_RuUf7m3PLx6DU0Z34afBWsnJUuPGaQoIO0fijCiPti1e7Z1oRL9Boanpk0Ek&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfjDlKbinxE27_DbE5T3mbnkmwuf-mHwV11KqaiEKOPMBg&oe=692EB175)

This is created by using the *when trigger is entered by player* event codeblock with an *IF* statement inside. We use a *NOT* operator and drag the *player owns item* codeblock inside of it. Using the *player* parameter from the event and an *in-world items* input value, we can complete this *IF* statement and respawn our players.

### Durable with Asset

**Spawning from Player Inventory**

**Required:** Durable Item with Asset. Follow steps 1-4 under **Creating an IWP** to create your durable item with asset commerce by assigning an asset from your asset library, and setup the related *In-World Item* gizmo. Then choose any object to run the following script. You will need to create an asset variable in your script, I called mine *assetToSpawn* and I linked it to the same asset from my asset library that I used when creating the *Durable Item*.

Durable items with assets do not require scripts, but what if we need to communicate with the item our player spawned?

This script can run anywhere in the world since it uses a broadcast event.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461857291_558937556644200_2432027789069136617_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=swW4unVfPHkQ7kNvwG6Xs_V&_nc_oc=AdnQsg_Fbfk1hfMh2Hs8VCRxQaosXnljneaUhO3DqwUnw8cfOi6kkx-SfWuX7fzq0HU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgP6beymthPMgGSJ4ypxrjqLIh7tVdrGQZ7KNsalHas4w&oe=692EA31A)

Using the *when an asset spawns from player inventory* codeblock we get the object that spawned, the asset it was created from, and the player who spawned it. Since this is a broadcast event that will fire on any item spawning from any player, we’re going to check that the asset received by the event is the one we want by using an IF statement to compare the parameter to a specific asset variable in our script. Once we determine this is our asset, we can now send an event to the newly spawned object with our player as a parameter for the object to receive.

### Consumable with Auto-Use

**30-VIP Access**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the VIP consumsable with auto-use, and setup the related *In-World Item* gizmo. Then pull out a *Trigger Gizmo* to get started

In this example, we use a consumable to provide time-based(30 days) access to our users for their purchase. This script runs on a trigger gizmo that covers our VIP area.

**Note**: Because the script is too wide, I had to cut and modify the IF statement to show on two lines.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461976494_558937583310864_878520296293413428_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6LW-dvFzcxAQ7kNvwG8bmv6&_nc_oc=Adl8yUfS4OB4jdSrUwUzgEU2uG4cOFsNcM9WyZeqs8EBFNz9fRFAxdEWK5nDUqJOzqI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afj6BTHvhr3q31E6mz8J756XcCcLasFyg31vr7xcIsltrA&oe=692EA1EC)

This script uses the *IF* statement and the *NOT* operator just like in our previous example. We also incorporate the *AND* operator so we can check two conditions. First, we use the *player has consumed item* codeblock to tell us if they have consumed the item, then we use the *time since player consumed item* codeblock in conjunction with the *LESS THAN* operator and *number* input value to determine if it has been less than 30 days since they consumed. Because of our *AND* operator, if one of these conditions returns false, they will be teleported away from the area.

**Restore Health**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Health Restore consumable with auto-use, and setup the related *In-World Item* gizmo.

In this example, our users can purchase an instant health restore. This script is attached to the In-World Item gizmo and the events below will fire when the item is purchased.

**Note:** This script assumes you have a player manager listening for the restoreHealth event.

We don’t have any need for the *when player purchase succeeds on item* or *when player purchase fails on item* events, but I wanted to show that they still fire.

We wait for the *when player consume succeeds on item* event to fire, although since this is an auto-consumed item, we could have also sent *restoreHealth* under the *when player purchase succeeds on item* event too.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461900167_558937563310866_6112818593593678494_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=3wBQAXFOXM4Q7kNvwFPXbjr&_nc_oc=AdkWV8nnhNV_6Jv4rIZvkM86PRFDFevql1oQJ-KGTIBWgm4Yj09agWhcReOfelR7mpU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfibnlauCtBN1I1WScn3afkWvzQbx-m47vjYuYTHfNpTKA&oe=692E90F1)

Below you’ll see an example of my player manager script to give you an idea of what that looks like. This script can be ran on any object in the world and listens for events being sent to players.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/461981641_558937419977547_840786302865238297_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=zDYu78eTlSoQ7kNvwHjxEGK&_nc_oc=AdnMbBCCje2yvxEZ3Hl3SXY62fDej70xfFOAPwas8vF-wzYBwNHPPyyjmekc6eH-Vgw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfiU0vW09cm3uBuWeKs4-Qm4BItjzxpjXHhLOBTqC1iYJQ&oe=692EB0BB)

**Coin Shop**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Coin consumsable with auto-use, and setup the related *In-World Item* gizmo.

This is the same script as the previous **Restore Health** script, but I also wanted to show that you could set a Player-Persistent Variable. This script is attached to the In-World Item gizmo and the events below will fire when the item is purchased.

In this example, the user purchases 100 coins so we need to add the coins to their Coins PPV.

We use the *set player persistent var* to codeblock with a + operator to add their current Coin PPV that we retrieved using the *get user persistent var* codeblock to a number input value of 100.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/461688722_558937579977531_291030443651548477_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=QWkZFLwg9LYQ7kNvwH7spj9&_nc_oc=AdmHJ4LLP-_q_Bd68--X3rNQoT9S6VWuzXvxHFe19cMZDWtxzoCge-S0A4eheoV9YAk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_AfgMJNBuquW86kyntnc1hEsSfXtrCSQGjS0pW1Filpn0Cg&oe=692EBD36)

### Consumable without Auto-use

**Example: Manual Health Restore**

**Required:** Consumable without Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Health Restore consumsable without auto-use, and setup the related *In-World Item* gizmo.

In this example we show how to handle manual consumption of an In-World Item without auto-use, meaning the item is stored in the player’s inventory and consumed when they are ready. This script is attached to the In-World Item gizmo and the events below will fire when the item is consumed.

The important thing to note when a player tries to consume a *Consumable without Auto-use* is that you must recognize this using the *when player try to consume item**from inventory* codeblock and decide whether to acknowledge this attempt using the *consume item for player* codeblock before the consumption is considered successful, otherwise, the consumption will fail. Refer to the previous example, **Restore Health**, to see what a player manager script would look like.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461732831_558937416644214_556034990091293698_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=CqSjuK04fwkQ7kNvwGgXUoS&_nc_oc=Adl_z8CLhIzFMC1qMxg28_TGB7mubxmtwWlrHymTlNqwnmjOJ5pDekG53Cw8Tg6LSc0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=Mf5d7vBRYkoh-nXpEKKCuw&oh=00_Afjm1cuKcWOBd-VwsBUNEb1E5lALxDdIBtLXtV2024BRlA&oe=692EC16F)

## Extended Learning

To reinforce your understanding of IWP mechanics and put your new skills into practice, try completing the hands-on challenges provided below:

**Challenge 1:** Create a basic auto-use and manual-use consumable, then purchase and consume it in build mode. Additionally, go on to create an item pack out of the manual-use consumable.

**Challenge 2:** Create a basic durable item with and without an asset, then purchase and use it in build mode.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.