Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/meta-horizon-worlds-inworld-purchase-guide

# In-world purchase guide

This document provides instructions and guidelines for using the Meta Horizon Worlds in-world purchase functionalities to sell items.

**Note:** Enrolling in the Meta Horizon Creator Program is a prerequisite to accessing any monetization tools offered to creators in Meta Horizon Worlds, including in-world purchases.

## What is an in-world item?

An in-world item is a digital experience, allowing a person to purchase and receive effects. When a creator develops an item and lists it for sale, players can purchase a license to use it based on the creator’s specifications.

Different types of these items are introduced below with concrete examples of each.

## Video guide

This video guide covers guidelines and best practices for implementing in-world-purchases (IWP).

## Creating an item

Go to the edit mode of a world, open the Creator User Interface (CUI), and go to Systems > Commerce.

| Desktop Editor | VR |
| --- | --- |
|  |  |

When creating an item, you’ll need to complete various fields:

* **Name and description:** This is the information displayed on the purchase panel and inventory when applicable.
* **Price:** The amount of Meta Credits paid to purchase the item. Item prices may be set between 25 - 20,000 credits.
* **Item Type:** A type needs to be specified for the item. Creators may choose between:

  + Durable: Once purchased, the person will permanently own the item.
    - As an option, a durable item can select an asset where a person can use the asset inventory. Refer to *Asset Reference* below for more details.
  + Consumable: Once purchased, a person can consume it in their inventory. One use of the item is spent each time an item is consumed.
    - As an option, a consumable item can be set to ‘auto-consume’. Once purchased, the auto-consume item will be consumed immediately and will not appear in the person’s inventory.

### Asset reference

When choosing Durable as the item type, you’ll be able to select an optional asset linked to the item.

| Desktop Editor | VR |
| --- | --- |
|  |  |

When this item is purchased, the buyer will be able to spawn the asset from their inventory. The “Inventory” section near the bottom of this guide shows what this looks like. Attaching an asset does not affect how this item is sold.

Once created, the items will appear in the CUI tab.

## Creating a consumable item pack

Given that consumable items can only be used once, it makes sense to create a pack of multiples so players can buy several at the same time. For example, the “jump booster x50” pack lets that player boost their jump 50 times.

| Desktop Editor | VR |
| --- | --- |
|  |  |

In order to do this, go to “Item Packs” under the Commerce tab, choose a consumable item, and create a pack for it. At least two inputs are needed for a pack:

* **Sell price:** The price for the pack. Packs do not need to have the same value per item as single purchases. For example, you can sell one jump booster for 25 Meta Credits and sell a pack of 20 for 450 Meta Credits.
* **Quantity:** The quantity of this pack. Once created, the pack item will be displayed as “<ITEM NAME> (Pack of <QUANTITY>)”, e.g. “Jump Booster (Pack of 50)”.

## Setting up an in-world purchase gizmo

In-World Purchase Gizmos are a mechanism where players can interact, see the purchase panel for an item, and make a purchase. It’s also the target entity for code block events, which is discussed in a later section.

| Desktop Editor | VR |
| --- | --- |
|  |  |

Open **CUI > Build > Gizmos** and find the in-world purchase gizmo. Drop the gizmo where you want people to interact, then open the gizmo configure page and adjust the fields accordingly:

* **In-world item:** The actual item you want to sell and want the script to work with.
* **Customize purchase dialog position:** The position you want the purchase dialog to show. If this option is off, it will always show in a fixed position in front of the person and follow their view when they move. If this option is set, it will display on the fixed position where the gizmo is positioned.
* **UI property:** This defines how a person will see and interact with this gizmo. There are three options available:

  + Trigger: This is the default option. The gizmo will be completely invisible, just like a trigger component. When a person’s avatar (hand or body) touches the trigger, the purchase panel will pop up.
  + Button: The person will see a price button denoting the amount of Meta Credits necessary to complete the purchase. The panel will show up when clicked with raycast.
  + Icon: The icon behaves similarly to the button, with the main difference being that the icon shows a purchase icon as opposed to the Meta Credit amount.

## Setting up code blocks (with examples)

In most cases, scripts are needed to fully utilize an in-world purchase. For example, if you want to give people a firework when they purchase something, or assign them a superpower when an item is consumed.

Some of these scripts need to be connected to an in-world purchase gizmo, and others can be connected to another object.

### Purchase event listener

**Note**: This script needs to be connected to an in-world purchase gizmo.

A purchase completion event will be fired once when players proceed with a purchase. If you want to display text in front of a player to tell them if their purchase was completed or not, the script will look like this:

```vs
this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnItemPurchaseComplete, (player, item, success) => {
  if (success) {
    console.log(`${player.name.get()} has succesfully purchased the item: ${item}`);
  }
});
```

This is also possible using code blocks in VR:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653334_512509804620309_7449246252743342538_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=c1U6lCBnXfMQ7kNvwHylIZc&_nc_oc=AdlO844lCJuy67phPe4jMh4DGFBLXLtLyPFJrQOKGwJzzzikP3MgDL8NhpoJn83kteQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfjGqf12uPoIX5NNyrL8jc0g76shdwN7CBaEREHUCsXYKg&oe=692BE0F7)

Here, the ‘t1’ is supposed to be a Text gizmo object, which needs to be connected to the in-world gizmo, which refers to this script.

As you can see, **when [player] purchase succeeds on item** does not include information about the item. This is because the script needs to be connected to the in-world purchase gizmo that sells the item.

### Entitlement check operator

**Note**: This script can be connected to any object.

Once a player purchases something, regardless if it’s durable or consumable (but not auto-consumed), the player will own the item. This ownership is called “entitlement”.

```vs
// IWPSellerGizmo
playerOwnsItem(player: Player, item: string): boolean;
```

For example, if you want to use a trigger that lets a player “verify” whether they own a specific item or not, you can give them a special effect to signify they own it. Unlike purchase events which only happen once a player purchases something, an entitlement check will work as long as they still own it.

This is also possible using code blocks in VR:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532481_512509801286976_3963140044187378221_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JB7KVXlEt-sQ7kNvwHbMk0z&_nc_oc=Adm4BtHccbMuUI73P92K3bSTn2PN5WpZJ41O9H4_YLz76G6lo6RVc63n0w87ifzM0dY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_Afi8jlhnjk3qyNSmsa51H7pk38eiVDIlmWSxh_kJh_P4Sg&oe=692BDAA7)

### Consume event listener

**Note**: This script needs to be connected to an in-world purchase gizmo.

Similar to purchase event listeners, there are event listeners for consume start and complete that fire once a person consumes something.

```vs
this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnItemConsumeStart, (player, item) => {
  console.log(`${player.name.get()} tried to consume the item: ${item}`);
});

this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnItemConsumeComplete, (player, item, success) => {

  if (success) {
    console.log(`${player.name.get()} successfully consumed the item: ${item}`);
  }
});
```

This is also possible using code blocks in VR:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452743645_512509807953642_1775503207172858437_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Z3dvDlDKXoQ7kNvwH7D5s6&_nc_oc=AdnyeoVW_Clu5c05zNT5MGrznLy5w0uTpQwu0fim450533IlXbW-tbxVayyTOPxl1PA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfgdSsJSKoKJ2mOJzsGOsniF26W1EWQ8ZNDTTocvQO-xOw&oe=692BE8C6)

These events are also available in TypeScript:

There are two major situations where players can consume something successfully:

- Immediately after they successfully purchase a consumable that’s set to be ‘auto-consumed.’
- They consume something from their inventory and it’s confirmed by “consume [item] for [player]”. See below.

#### Consume item request

- **Listen for consume-requests:** When a player attempts to use a consumable item, `CodeBlockEvents.OnItemConsumeStart` is broadcast. You need to listen to this event and handle it; if you do not, then the item will not be consumed.
- **Decide whether to consume:** When you receive the event you need to decide if you want the player to consume the item.
- **Consume, if desired:** If you want the player to consume the item then call `consumeItemForPlayer`, with the player and the item id. You will then get a `OnItemConsumeComplete` event with success set to `true`.
- **Otherwise, ignore:** If you don’t call `consumeItemForPlayer` (because you don’t want them to consume it) then the request will timeout and send a `OnItemConsumeComplete` event with success set to `false`.

Here is a simple example that always consumes a bagel every time the player tries to (in their menu):

```vs
this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnItemConsumeStart, (player, item) => {
  if (item === 'bagel_id') {
    const iwpGizmo = this.entity.as(hz.IWPSellerGizmo)
    iwpGizmo.consumeItemForPlayer(player, item)
  }
})
```

In VR, there is set of code blocks which act as a “protocol” to listen to the intent that the person wants to consume an item and confirms the consuming behavior.

To prevent players from accidentally consuming a purchased inventory item when it is not applicable in the game, the creator must acknowledge the attempt to consume. If the creator does not confirm the consume request within several seconds, consumption will be aborted and an error displayed to the player saying that the item cannot be consumed, and to try again later.

The VR code blocks look like this:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452816754_512509831286973_6338731087421512787_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=mDvWnxggG-EQ7kNvwFpIj-T&_nc_oc=Adntjuqsifg8I9Zng60tw0I0I_9xXB3U2JOibtJtoejKX_kAfoidimug51rXBnKTETE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_Afgw3XaYJ4T9OtdVs-WuaJBgUQgar-uDkCCC2GOW_wbNJw&oe=692BFC3E)

This is where you should replace the “display text” behavior with the actual things you want to happen, such as changing a person’s gravity or speed, adding health points, playing a sound, etc.

### Pack item consume

When you sell items in a pack using a gizmo, that gizmo is only responsible for the sell and buy interactions, not the scripted behavior. You need to also have a gizmo for the original single version of the item and connected to your scripts.

For example, if you have a consumable called “jump booster” and you created a pack called “jump booster x50”, you’ll want to have two in-world purchase gizmos, one for each of them. And you will also want to have a script gizmo that’s connected to the “jump booster”.

### Self-contained asset script

**Note**: This script needs to be connected to the asset and saved in the asset package.

When creating a durable item, you have the option to attach an asset to the item so players can invoke it from their inventory. Horizon supports self-contained scripts, so that if you put the script within the asset, the script will run when a player spawns the item from their inventory.

In VR, that looks like this:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652791_512509714620318_7608227791481175327_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=rSmcN8JnKF8Q7kNvwGBcPqR&_nc_oc=Adn0oG5WNgcDIXftrAaEolIFH7Z6fn3s4kwKzzAN-0FAmRFlagYMT3yKHTQ8a6rW_eU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfhU6ckhlvrL8WrM6e9g26tKFndU5aB_6NB9-AfnynEsmg&oe=692BE292)

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916924_512509727953650_5419197595682710966_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=aB2z3CGHdvcQ7kNvwGRP4eP&_nc_oc=AdkWoPy_SU1kDIXyrQgAfCnNo1ME3hP6WKC0FIlzpz8fl83hGQkyv_yTA-mz2GRgPZQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfgwEmjGnJsP4Igj-Nh2F6JT60eibrsABZV7a8FVtbErow&oe=692BF68C)

## Kudos panel

The Kudos Panel is a way to help you more easily monetize your worlds and is available in the headset editor. The Kudos Panel is a ready-to-use asset that automatically configures your world to allow people to purchase Kudos and show their support for your creations.

If you’d like more information about the Kudos Panel, please refer to [Meta Horizon Worlds Kudos Panel Instructions](/hw-docs/mhcp-program/monetization/meta-horizon-worlds-kudos-panel-instructions).

## Creator Control of Shops & Inventories

This feature allows creators to manage the visibility of shops and inventories within their worlds. Creators can disable the default in-world shop and the ‘In-world items’ tab in the inventory.

This provides a more tailored experience for users and is ideal for creators who have built their own shop systems and want greater control over purchasable items.

Open **CUI > Publish World** and adjust the following options:

* **Default in-world shop (headset only):** Controls visibility of the default shop. When enabled, the default shop will be visible to users. When disabled, the shop will be hidden.
* **In-world inventory items:** Controls visibility of the ‘In-world items’ tab in the inventory. When enabled, users can access their purchased items through the inventory tab. When disabled, this tab will be hidden.

When these options are enabled, the default shop and inventory items tab will be visible to users. When disabled, these elements will be hidden, allowing creators to implement their own custom solutions if desired.

## Player user interface (UI)

### Purchase panel

A purchase panel will appear when a gizmo is set up and people interact with it. Note that styles may vary as designs are continually updated.

### Inventory

After a person purchases an item, they’ll be able to access it in the inventory (again, if the item is not auto-consumed) by clicking the inventory button on the identity panel.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615534_512509711286985_6202407311245192958_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=irOgmoEa-uAQ7kNvwHGnPdF&_nc_oc=Adkuv4DL_GDIul08kMsm8J0zxzg4ODIzu05QjGr4nDr0rodwTqSiyDRiZnQAeS2eDj4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfjilGgZKvbe1uxk_I6zB7-A3O_jihcq_P6nJFfZYOFRkA&oe=692C0D64)
or
![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452945339_512509704620319_2347572327308779188_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=1IVxkeMcKwkQ7kNvwHMXFeZ&_nc_oc=Adn3T-GrgSsHfwJhUUYGakYqcBJkVH91Ow1t16VGdTO2iwfYgll4Vygy3DKS70KIhFE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfiP6Ut8sDYzlfvvulf2UyzlTAX3f7hBC-vLCFfbqNGCSg&oe=692BF3A6)

All items that are available in the current world are shown in the inventory along with their item detail information; additionally, players can see what items can be used if applicable.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863904_512509707953652_8349587293785080155_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Oqz8fb5fk0MQ7kNvwGBrFNy&_nc_oc=Adk6kk06Np6KusNjtTA-GBdhCXqJloNoquhqoMZ3oEyX4Sbbu8FHdvxBlEIBqkissR8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfimBfBq0FuFpzaPyKF-4ABbJAWAd6Ebf6d4tBw8VTVbkw&oe=692C098B)

* **If the item is consumable**, the player will be able to click the icon to consume it. When hovering on the item, the overlay will show ‘Use’ with the remaining amount of the consumable. The consuming will only succeed if the creator has correctly set up the consume-listeners as mentioned above.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452532418_512509701286986_4770500461266213628_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mTws4nz3T6YQ7kNvwFFtKjO&_nc_oc=Adm55SFHWzQFITvc6QcRdO8Ze5-LqbjpKjkaJ6qVd3D3SWOaWcabuZsLNW-P-gXtiQU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QWACA-4OcFgXJQb6WO0z2g&oh=00_AfjoEwJRxaBx1tjXOEYP9FXNF9F2ItMtRMxRDiN_BJs2Qg&oe=692C06B0)

The player can also point to the item name and click on ‘info’, which will lead to the item detail page.

* **If the item is durable with an asset**, the player will be able to spawn the asset with inventory. The asset will spawn in front of the player by default once the ‘use’ button is clicked.
* **If the item is durable without any asset**, it’s still visible in inventory so the player knows what are the things they’ve bought and are taking effect. When hovering on the item, no overlay will show up. While the player can still click into the item detail and view the information there.
* **If the item is auto-consumable**, it will not show up on inventory, as it’s simply consumed and gone upon purchase.

You can also retrieve the list of items a player owns using the following example:

```vs
/*
* Example showing how to get all player owned items
*/
this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterWorld, async (player) => {
  // Returns an array of all the items the player owns
  const entitlements = await hz.WorldInventory.getPlayerEntitlements(player);
  entitlements.forEach((entitlement) => {
    console.log("Entitlement SKU: " + entitlement.sku);
  });
});
```