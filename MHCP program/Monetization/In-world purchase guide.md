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

```
this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnItemPurchaseComplete, (player, item, success) => {
  if (success) {
    console.log(`${player.name.get()} has succesfully purchased the item: ${item}`);
  }
});
```

This is also possible using code blocks in VR:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/4284bbec81156a69664f5794fdf51923d270e2a2520e0f7dd7e13ecde34912d7.md)

### Overview
This image depicts a visual programming interface with a dark theme. It shows a sequence of blocks representing conditional logic and actions within a script editor. The interface includes a control panel at the bottom with a directional pad and a script capacity indicator.

### Key Elements
- **Top Bar**: Contains the word "durable" and icons for settings, copy, and close.
- **Script Blocks**: Located in the upper left area, these blocks represent conditions and actions. They include:
  - A block labeled "when world is started."
  - Two blocks under "when player purchase succeeds on item" and "when player purchase fails on item," both displaying "display ok" and "display not ok" respectively.
- **Control Panel**: At the bottom, there's a directional pad with a blue lightbulb icon above it, indicating a script action or hint.
- **Bottom Indicator**: Shows "No Errors" and "Script Mode: Default" along with a script capacity of 2%.

### Visual Flow / Relationships
The blocks are arranged vertically, with the "when world is started" block at the top, followed by the success and failure conditions. The control panel is positioned at the bottom, and the script capacity indicator is on the far right side.

</details>

<p></p>



Here, the ‘t1’ is supposed to be a Text gizmo object, which needs to be connected to the in-world gizmo, which refers to this script.

As you can see, **when [player] purchase succeeds on item** does not include information about the item. This is because the script needs to be connected to the in-world purchase gizmo that sells the item.

### Entitlement check operator

**Note**: This script can be connected to any object.

Once a player purchases something, regardless if it’s durable or consumable (but not auto-consumed), the player will own the item. This ownership is called “entitlement”.

```
// IWPSellerGizmo
playerOwnsItem(player: Player, item: string): boolean;
```

For example, if you want to use a trigger that lets a player “verify” whether they own a specific item or not, you can give them a special effect to signify they own it. Unlike purchase events which only happen once a player purchases something, an entitlement check will work as long as they still own it.

This is also possible using code blocks in VR:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/de945f5e7196352473a36a8a43c57b61fabba69d2583e5fe972239619f2fb85f.md)

### Overview
This image depicts a visual representation of a script editor interface, specifically showing a block-based programming environment. The interface includes a series of interconnected blocks representing conditional logic and actions within a script named "Script 1."

### Key Elements
- **Top Bar**: Contains the title "Script 1" and icons for settings, copy, and close functions.
- **Script Blocks**: Located centrally, these blocks are arranged in a vertical sequence.
  - **Block 1**: "when world is started"
  - **Block 2**: "when trigger is entered by player"
    - Sub-blocks under this include:
      - "if player owns entitlement of durable1_b3acdc45"
      - "display yes on t1"
      - "else display no on t1"
- **Background**: Dark theme with light blue accents around the edges.
- **Cursor**: A white cursor arrow is visible near the right side of the screen.
- **Bottom Bar**: Displays "No Errors" and "Script Mode: Default," along with a script capacity indicator showing "2%."

### Visual Flow / Relationships
The blocks are arranged vertically, with the "else" block positioned below the "if" block. The cursor suggests interaction is possible at the right edge of the screen. The blocks are connected by lines, indicating the flow of logic.

</details>

<p></p>



### Consume event listener

**Note**: This script needs to be connected to an in-world purchase gizmo.

Similar to purchase event listeners, there are event listeners for consume start and complete that fire once a person consumes something.

```
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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9b827a695baa806db9792a94e292f24f421d5058461a8a78faad0775cd521bc7.md)

### Overview
This image displays a user interface snippet that appears to be part of a visual programming environment or a game development tool. It shows conditional logic blocks with text inputs and outputs. The blocks are arranged vertically, indicating a sequence of actions or events.

### Key Elements
- **Block 1**: Located at the top, it has a green header with the text "> when player consume succeeds on item". Inside the block, there is a text input field labeled "ok" and a variable reference "t2".
- **Block 2**: Below Block 1, it has a blue header with the text "> when player consume fails on item". Similar to Block 1, it contains a text input field labeled "not ok" and a variable reference "t2".

### Visual Flow / Relationships
The blocks are arranged in a vertical sequence, suggesting a step-by-step process. There are no arrows or lines connecting the blocks, implying that the sequence is linear but not necessarily sequential in terms of execution order within the larger context of the program.

</details>

<p></p>



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

```
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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/157c0cb5035d620d5ad34086bd204f5de2f8fe7c5bf6d53095e9c3dc9062cf09.md)

### Overview
This image depicts a user interface for scripting within a game development environment. It shows a script editor window with a series of blocks representing conditional statements and actions related to player interactions with items in the game inventory.

### Key Elements
- **Script Title**: "Script 2" at the top left corner.
- **Conditional Blocks**:
  - **Block 1**: "display ok on t1" when "player purchase fails on item".
  - **Block 2**: "display not ok on t1" when "player purchase fails on item".
  - **Block 3**: "display ok on t2" when "player consume succeeds on item".
  - **Block 4**: "display not ok on t2" when "player consume fails on item".
  - **Block 5**: "when player try to consume item from inventory" with a dropdown menu showing "consumablepro_1bb255d4".
- **Action Block**: "consume item consumablepro_1bb255d4 for player".
- **Status Indicator**: "No Errors" with a green checkmark at the bottom left.
- **Script Mode**: "Default" displayed at the bottom left.
- **Script Capacity**: "4%" shown at the bottom right.

### Visual Flow / Relationships
The blocks are arranged vertically, with conditions leading to specific displays or actions. The blocks are connected by lines indicating the sequence of events. The most prominent visual elements are the conditional blocks and the action block, which are aligned horizontally under the conditions.

</details>

<p></p>



This is where you should replace the “display text” behavior with the actual things you want to happen, such as changing a person’s gravity or speed, adding health points, playing a sound, etc.

### Pack item consume

When you sell items in a pack using a gizmo, that gizmo is only responsible for the sell and buy interactions, not the scripted behavior. You need to also have a gizmo for the original single version of the item and connected to your scripts.

For example, if you have a consumable called “jump booster” and you created a pack called “jump booster x50”, you’ll want to have two in-world purchase gizmos, one for each of them. And you will also want to have a script gizmo that’s connected to the “jump booster”.

### Self-contained asset script

**Note**: This script needs to be connected to the asset and saved in the asset package.

When creating a durable item, you have the option to attach an asset to the item so players can invoke it from their inventory. Horizon supports self-contained scripts, so that if you put the script within the asset, the script will run when a player spawns the item from their inventory.

In VR, that looks like this:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9a9a0ac177e4fd2b4f47f0f16645fa8f44b8877c437d8e59530e72a796875804.md)

### Overview
This image depicts a user interface element that appears to be part of a scripting or programming environment, specifically a script editor window. The interface includes a search bar at the top, a settings gear icon, a copy icon, and a close button. Below the search bar, there is a script content area displaying a conditional statement and an action command.

### Key Elements
- **Search Bar**: Located at the top, spans the width of the window. Contains the text "asset script" within a black background.
- **Settings Gear Icon**: Positioned to the right of the search bar, within a black circle.
- **Copy Icon**: Situated next to the settings gear, also within a black circle.
- **Close Button**: A purple circle with a white "X" located farthest to the right.
- **Script Content Area**: Below the search bar, contains a conditional statement and an action command. The background of this area is dark gray.
  - **Conditional Statement**: "when player spawned asset obj from inventory"
  - **Action Command**: "attach obj to player Head"
- **Dropdown Menu**: Part of the action command, showing a dropdown arrow indicating more options can be selected.

### Visual Flow / Relationships
The most prominent visual element is the search bar at the top. The script content area is the second most prominent, as it contains the main functionality of the interface. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from the search bar down to the script content area.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/cdbae3df7ed951e8c3377448b29edf1cf1f167ef033a9db0d0ee0786a47f80d9.md)

### Overview
The image depicts a user interface from a game development tool or engine, showing a scene editor or asset management interface. The left side displays settings for an interactive object, while the right side shows a scripting interface for attaching scripts to assets.

### Key Elements
- **Left Panel (Settings)**:
  - **Title**: "Behavior"
  - **Options**:
    - **Visible**: Toggle switch set to "On"
    - **Collidable**: Toggle switch set to "On"
    - **Collision Layer**: Dropdown menu set to "Everything"
    - **Motion**: Options include "None," "Animated," and "Interactive," with "Interactive" selected
    - **Interaction**: Options include "Grabbable," "Physics," and "Both," with "Both" selected
  - **Attached Script**: A button labeled "hhat2" indicating an attached script
  - **Asset Script**: A dropdown menu showing "asset script"

- **Right Panel (Scripting Interface)**:
  - **Title**: "asset script"
  - **Script Code**: 
    ```when player spawned asset obj from inventory attach obj to player Head```
  - **Visual Elements**: A small icon of a player character, a green circle, and a purple cube labeled "asset script."

### Visual Flow / Relationships
- **Most Prominent Element**: The scripting interface on the right.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The left panel is stacked vertically above the right panel, with the scripting interface taking up more space on the right.

</details>

<p></p>



## Kudos panel

The Kudos Panel is a way to help you more easily monetize your worlds and is available in the headset editor. The Kudos Panel is a ready-to-use asset that automatically configures your world to allow people to purchase Kudos and show their support for your creations.

If you’d like more information about the Kudos Panel, please refer to [Meta Horizon Worlds Kudos Panel Instructions](Meta%20Horizon%20Worlds-%20Kudos%20Panel%20Instructions.md).

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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d6be180ce85ac39779343eaf9799d50324d21933ad50be398424209f4daaae36.md)

### Overview
This image depicts a simple button interface element with text inside it. The button has rounded corners and a light background.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "Open inventory" in a sans-serif font.
- **Visual styling**: The button has a light gray background with a subtle shadow effect underneath, giving it a slight elevation. The text is black and centered within the button.

### Visual Flow / Relationships
The button is the most prominent element in the image, as there are no other elements to interact with or connect to. There are no arrows or lines indicating a specific reading order.

</details>

<p></p>


or
<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/feff9a7ee3c859a28bb939837867b80ced8cb4648f278720479da712837b9c20.md)

### Overview
This image depicts a simple icon of a backpack. It is circular with a white background and contains a black silhouette of a backpack.

### Key Elements
- **Visual description**: The icon is a circular shape with a white background and a black silhouette of a backpack.
- **Location**: The icon is centered within the circular frame.
- **Contents**: The contents include a black outline of a backpack with a handle and a front pocket.
- **Visual styling**: The icon uses a stark contrast between the white background and the black silhouette.

### Visual Flow / Relationships
The icon is the sole focus of the image, with no additional elements or relationships to describe.

</details>

<p></p>



All items that are available in the current world are shown in the inventory along with their item detail information; additionally, players can see what items can be used if applicable.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/59398bc18ec1fbeb77bd20133c9d486c0f4c683bc45e5442fd04bc7490a1b94f.md)

### Overview
This image depicts a user interface element labeled "iwp examples 2 Inventory." It appears to be part of a digital inventory or asset management system, showcasing various items or assets arranged in a grid layout.

### Key Elements
- **Title**: "iwp examples 2 Inventory" located at the top-left corner.
- **Inventory Items**: There are five items displayed in a grid format:
  - **Top-left item**: A wooden structure resembling a wheel or a cart, with a small number "51" in the upper right corner.
  - **Second row, first column**: An orange cap with a white "C" logo on a gray textured surface.
  - **Second row, second column**: Another orange cap with a white "C" logo, but placed on a white surface against a green landscape background.
  - **Second row, third column**: A green ring or donut shape floating above a blue surface.
  - **Bottom-left item**: A similar orange cap as the one in the second row, first column, but positioned on a gray textured surface.

### Visual Flow / Relationships
The items are arranged in a 2x3 grid layout. The title is prominently displayed at the top. The items are evenly spaced within their respective cells, and there are no connecting lines or arrows indicating a specific reading order. The items are visually distinct in terms of color and background, making them easily distinguishable.

</details>

<p></p>



* **If the item is consumable**, the player will be able to click the icon to consume it. When hovering on the item, the overlay will show ‘Use’ with the remaining amount of the consumable. The consuming will only succeed if the creator has correctly set up the consume-listeners as mentioned above.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/6e3ddefc16a0b5b81588a8b49de0390232647b1c7c71ae6506fa38a0147d9dc5.md)

### Overview
This image depicts a user interface element, specifically a tooltip or information card, likely from a game or application. It contains text and a small icon, providing information about a "jump booster."

### Key Elements
- **Visual description**: The element is rounded rectangular with a white background and a subtle shadow effect.
- **Location**: Positioned at the bottom of the image.
- **Contents**: 
  - **Text**: "Use\n(99 available)" displayed prominently in black font.
  - **Icon**: A small, partially visible icon resembling a jump pad or similar object, located to the right of the text.
- **Visual styling**: The text has a bold font weight, and the icon is outlined in a light gray color.

### Visual Flow / Relationships
- **Most prominent visually**: The text "Use" is the most prominent due to its larger font size and placement.
- **Spatial relationships**: The icon is positioned to the right of the text, and the text "jump booster" is placed below the main card, indicating the item being referred to.

</details>

<p></p>



The player can also point to the item name and click on ‘info’, which will lead to the item detail page.

* **If the item is durable with an asset**, the player will be able to spawn the asset with inventory. The asset will spawn in front of the player by default once the ‘use’ button is clicked.
* **If the item is durable without any asset**, it’s still visible in inventory so the player knows what are the things they’ve bought and are taking effect. When hovering on the item, no overlay will show up. While the player can still click into the item detail and view the information there.
* **If the item is auto-consumable**, it will not show up on inventory, as it’s simply consumed and gone upon purchase.

You can also retrieve the list of items a player owns using the following example:

```
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