Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/in-world-purchase-iwp-in-codeblocks

# In-World Purchase (IWP) in Codeblocks

Author: SeeingBlue

## Introduction

**Creator Skill Level**

Intermediate

**Recommended Prerequisite Background Knowledge**

An understanding of Intermediate Codeblock Scripting, [Persistent Player Variables](../../Desktop%20editor/Quests,%20leaderboards,%20and%20variable%20groups/Variable%20groups/Managing%20Persistent%20Variables%20Associated%20with%20a%20Variable%20Group.md), and [Basic Asset Spawning](Part%20One-%20Understanding%20Asset%20Spawning%20with%20SeeingBlue.md) is recommended.

**Note**: IWP creation is now available in the Desktop Editor. Visit the [documentation](../Monetization/In-world%20purchase%20guide.md) for more information on this.

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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/78895652c8dcc0f0ba44540ff9114762c95e10c57d5b8bdcd792860786e28f22.md)

### Overview
This image depicts a single rectangular button with rounded corners, set against a light blue background. The button contains text that reads "when player starts purchase item (broadcast)".

### Key Elements
- **Visual description**: The button has a rounded rectangular shape.
- **Location**: Positioned centrally within the image.
- **Contents**: Contains the text "> when player starts purchase item (broadcast)".
- **Visual styling**: The button has a solid light blue background with no gradients or shadows. The text is white and appears to be in a sans-serif font.

### Visual Flow / Relationships
The button is the sole element in the image, making it the most prominent feature. There are no arrows, lines, or additional elements to suggest a specific reading order or spatial relationships.

</details>

<p></p>



* **“when player starts purchase item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who started the purchase
    - `itemId`: A string containing the name/id of the item being purchased.
  + This can be used on any script where you need to know when a purchase is started.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a7698803911d41812b6353a80cdbe14dcbfaeabbe4e61216cf53dedde1d862d1.md)

### Overview
This image depicts a single rectangular button with rounded corners, set against a light blue background. The button contains text that reads "when player completes purchase item (broadcast)".

### Key Elements
- **Visual description**: The button has a rounded rectangular shape.
- **Location**: Positioned centrally within the image.
- **Contents**: Contains the text "> when player completes purchase item (broadcast)".
- **Visual styling**: The button has a solid light blue background with no gradients or shadows. The text is white and appears to be in a sans-serif font.

### Visual Flow / Relationships
The button is the sole focus of the image, with no additional elements or connections to other parts of the interface. There are no arrows, lines, or implied reading orders.

</details>

<p></p>



* **“when player completes purchase item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who completed the purchase
    - `itemId`: A string containing the name/id of the item purchased.
    - `success`: A boolean letting us know if the purchase succeeded or failed.
  + This can be used on any script where you need to know when a purchase is completed successfully or not.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/158e6d1d20651cda83acbb7e650ca8184f6aa4e2c4d5da41be68da8207828bae.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button has a gradient fill and contains text indicating an action related to player interaction within a broadcast context.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges, filled with a gradient that transitions from a lighter shade at the top to a darker shade at the bottom.
- **Location**: Positioned centrally in the image.
- **Contents**: The text inside the button reads: "when player starts consume item (broadcast)".
- **Visual styling**: The button has a blue gradient background, and the text is white, providing good contrast.

### Visual Flow / Relationships
The button is the sole focus of the image, with no additional elements or connections to other parts of the interface. It is designed to stand out as a call-to-action.

</details>

<p></p>



* **“when player starts consume item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who started the consumption.
    - `itemId`: A string containing the name/id of the item being consumed.
  + This can be used on any script where you need to know when consumption is started.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/90a12fbb0bd7a2cf2725cb5589f261dda1cdd0e641b704d5bfc4aa74407ffa2c.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button has a blue background with white text inside.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "> when player completes consume item (broadcast)".
- **Visual styling**: The text is white, and the button has a solid blue background.

### Visual Flow / Relationships
The button is the most prominent element in the image, as it occupies the central area and is the only object present. There are no arrows, lines, or connectors indicating any specific reading order.

</details>

<p></p>



* **“when player completes consume item (broadcast)”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `player`: A reference to the player who completed the consumption
    - `itemId`: A string containing the name/id of the item consumed.
    - `success`: A boolean letting us know if the consumption succeeded or failed.
  + This can be used on any script where you need to know when consumption is completed successfully or not.

**<details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/478afe1baf040ec605d58a83c08f725f64b0500e87c101133b1f9a596dc7e29d.md)
  
  ### Overview
  This image depicts a single line of text within a blue rectangular box, which appears to be part of a user interface element, possibly a notification or a message box.
  
  ### Key Elements
  - **Visual description**: The text is contained within a rounded rectangular shape.
  - **Location**: The rectangle is positioned centrally in the image.
  - **Contents**: The text reads: > **"when an asset spawns from player Inventory"**
  - **Visual styling**: The rectangle has a solid blue background with a subtle gradient effect, and the text is white with a slight shadow, making it stand out against the blue background.
  
  ### Visual Flow / Relationships
  The text is the only element in the image, so there are no relationships or flows to describe.
  
  </details>
  
  <p></p>
  
  **

* **“when an asset spawns from player inventory”**
  + Broadcast Event - Can be heard from any script in the world
  + Parameters
    - `obj`: A reference to the object that spawned from the player’s inventory.
    - `asset`: A reference to the asset used to spawn the object.
    - `player`: A reference to the player that spawned the item from their inventory.
  + This can be used on any script where you need to know when an item has spawned from a player’s inventory.

**Non-broadcast Events**

**<details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/278b6f874656f19b4f4953d826f88dcc6239778539912c2c482d211cf109c36e.md)
  
  ### Overview
  This image depicts a single rectangular button with rounded corners, set against a blue background. The button contains text that reads "when player purchase succeeds on item."
  
  ### Key Elements
  - **Visual description**: The button has a rectangular shape with rounded edges.
  - **Location**: Positioned centrally in the image.
  - **Contents**: Contains the text "> when player purchase succeeds on item".
  - **Visual styling**: The button has a solid blue background with no gradients or textures. The text is white and appears to be in a sans-serif font.
  
  ### Visual Flow / Relationships
  The button is the sole focus of the image, with no additional elements or connections to other parts of the interface. There are no arrows, lines, or implied reading orders.
  
  </details>
  
  <p></p>
  
  **

* **“when player purchase succeeds on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that purchased the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when a purchase of that item is successful.

**<details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/f3463f25223566163569b95cc641d2d1bd87c664413aa00d08a56c23cfca3c73.md)
  
  ### Overview
  This image depicts a single rectangular button with rounded corners. The button has a blue background with white text inside.
  
  ### Key Elements
  - **Visual description**: The button is rectangular with rounded edges.
  - **Location**: Positioned centrally in the image.
  - **Contents**: Contains the text "> when player purchase fails on item".
  - **Visual styling**: The button has a solid blue background with white text. There are no additional elements or gradients within the button itself.
  
  ### Visual Flow / Relationships
  The button is the sole focus of the image, with no other elements or connections to indicate a specific visual hierarchy or spatial relationships.
  
  </details>
  
  <p></p>
  
  **

* **“when player purchase fails on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that attempted to purchase the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when a purchase of that item fails.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a29764769a623641d9858ec5bb8fcf07a92dd960a794c01b9b3f229115da2c47.md)

### Overview
The image displays a single rectangular button with rounded corners. The button has a blue background with white text that reads "when player consume succeeds on item."

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: The text "when player consume succeeds on item" is written in white font.
- **Visual styling**: The button has a solid blue background with no gradients or textures. There are no additional elements or icons within the button.

### Visual Flow / Relationships
- The button is the most prominent visual element as it occupies the central area of the image.
- There are no arrows, lines, or connectors present.
- The button is the sole element in the image, so there are no spatial relationships to describe beyond its central placement.

</details>

<p></p>



* **“when player consume succeeds on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player consumed the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item is consumed successfully.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/92f99687e3aa21fff1a0b248d54a3ff58807921d2d762e1b872c7c42eb0192d3.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button has a blue background with white text inside.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "> when player consume fails on item".
- **Visual styling**: The button has a solid blue background with white text. There are no additional elements or gradients within the button itself.

### Visual Flow / Relationships
The button is the sole focus of the image, with no other elements or connections to indicate a specific visual hierarchy or spatial relationships.

</details>

<p></p>



* **“when player consume fails on item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that attempted to consume the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item failed to be consumed.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e4589ee711ab85fe3e987af1072d9314b0d1ff0c26127d62eb4f73652d5a705c.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button has a blue background with white text inside.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "> when player try to consume item".
- **Visual styling**: The button has a solid blue background with white text. There are no additional elements or gradients within the button itself.

### Visual Flow / Relationships
The button is the sole focus of the image, with no other elements or connections to indicate a specific visual hierarchy or spatial relationships.

</details>

<p></p>



* **“when player try to consume item”**
  + Standard Event - Script must be attached to an In-World Item gizmo.
  + Parameters
    - `player`: A reference to the player that’s trying to consume the item.
  + This can be used in a script attached to a specific In-World Item gizmo that you need to know when the item is attempted to be consumed.

**Actions**

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0589bda4c6b09cdaaa3846b6cf7f8942b8000cf4ebc66d8ea61d7f7444b887eb.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button has a blue background with white text inside.

### Key Elements
- **Visual description**: The button is rectangular with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "> consume item for player".
- **Visual styling**: The button has a solid blue background with white text. There are no additional elements or gradients within the button itself.

### Visual Flow / Relationships
The button is the sole focus of the image, with no other elements or connections to indicate a specific visual hierarchy or spatial relationships.

</details>

<p></p>



* **“consume item for player”**
  + Required Parameters
    - `player`: A reference to the player to consume the item.
    - `itemId`: A reference to the item to be consumed.
      * *Note* : This is an *Input Value* found under the *Values* category of your Script gizmo.
  + This is to be used to confirm the consumption of a *Consumable without Auto-use*.

**Operators**

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/63acf0e6ec1fb93166e4bf5d8ad3ed7606c3cb26d3ca517c945e7cf9908cfd5d.md)

### Overview
This image depicts a single, rounded rectangular button with text inside. The button has a blue background and white text.

### Key Elements
- **Visual description**: The button is rounded rectangular with a smooth, glossy appearance.
- **Location**: Positioned centrally in the image.
- **Contents**: The text inside the button reads "player owns item".
- **Visual styling**: The text is white, bold, and centered within the button. The button itself has a solid blue background with no gradients or additional textures.

### Visual Flow / Relationships
The button is the sole focus of the image, with no additional elements or connections to other parts of the interface.

</details>

<p></p>



* **“player owns item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a boolean that tells us whether the player owns the selected In-World item.

**<details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/89ddc07ae0643231d16756271c58fd2bb1200362f27f7d0ad312ed89d353212b.md)
  
  ### Overview
  This image depicts a single rectangular button with rounded corners. The button contains text that reads "player owns item quantity."
  
  ### Key Elements
  - **Visual description**: The button has a blue background with white text.
  - **Location**: The button occupies the central area of the image.
  - **Contents**: The text "player owns item quantity" is written in white font.
  - **Visual styling**: The button has a solid blue background with no gradients or textures. There are no borders or additional elements surrounding the text.
  
  ### Visual Flow / Relationships
  The button is the sole focus of the image, with no additional elements or connections to other parts of the interface. The text is centered within the button, and there are no arrows or lines indicating a specific reading order.
  
  </details>
  
  <p></p>
  
  **

* **“player owns item quantity”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a number that tells us how many of the selected *Consumable without Auto-use* the player owns.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/305f4b99efe04635dca20fdcec9f28c753f13c3f58c8d355fcd8de50d6ae0117.md)

### Overview
This image depicts a single rectangular element with rounded corners, likely a label or a title card. The text within the element indicates a measurement or metric related to player activity.

### Key Elements
- **Visual description**: The element is a horizontally oriented rectangle with rounded edges.
- **Location**: Positioned centrally in the image.
- **Contents**: Contains the text "time since player consumed item".
- **Visual styling**: The background is a solid blue color (#007BFF), and the text is white (#FFFFFF).

### Visual Flow / Relationships
The element is the sole focus of the image, with no additional elements or connections to other parts of the interface. It is centrally aligned both horizontally and vertically.

</details>

<p></p>



* **“time since player consumed item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a number based on the selected value from a dropdown menu. Options are seconds, minutes, and days. The returned number represents how many seconds, minutes, or days that have passed since the item was consumed.
    - *Note*: Returns a 0 if the item has never been consumed. Recommended that you use this in conjunction with the “*player has consumed item*” codeblock.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e55d5ae38b6e6d6af2486ca91aaf6caeea29de7e4f6475e341bc1d57bb7a0165.md)

### Overview
This image depicts a single rectangular button with rounded corners. The button contains text that reads "player has consumed item."

### Key Elements
- **Visual description**: The button is a rounded rectangle with a blue background.
- **Location**: Positioned centrally in the image.
- **Contents**: The text "player has consumed item" is written in white font.
- **Visual styling**: The button has a solid blue background with no gradients or textures. There are no additional elements or icons within the button.

### Visual Flow / Relationships
The button is the sole focus of the image, with no other elements or connections to indicate a specific relationship or hierarchy.

</details>

<p></p>



* **“player has consumed item”**
  + Required Parameters
    - `player`: A reference to the player we’re checking.
  + Returns a boolean that tells us whether the player has consumed the selected item.

**Values**

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9fbd6998426194ae71fb40acc02e818a8f0db1789122e80e36ceceb0442bca1d.md)

### Overview
This image depicts a single button labeled "in-world items". The button has a rounded rectangular shape with a blue background and white text.

### Key Elements
- **Visual description**: The button is rounded rectangular with a blue background and white text.
- **Location**: Positioned centrally in the image.
- **Contents**: The text "in-world items" is written in white font.
- **Visual styling**: The button has a solid blue background with no gradients or textures. There are no borders around the button.

### Visual Flow / Relationships
The button is the sole focus of the image, with no additional elements or connections to other parts of the interface.

</details>

<p></p>



* **“in-world items”**
  + Contains a dropdown menu that lets you select an In-World Item ID to be used when making conditional checks in your IF statements.

## Creating an IWP

Creating and implementing IWPs involves a series of steps from item creation to placement in your world. This section will walk you through the process of setting up IWPs, including naming, pricing, and configuring item properties. You’ll learn how to create durable and consumable items, add them to your world, and customize their appearance and functionality.

**Step 1:** While in build mode, open your build menu, navigate to *Systems,* and click *Commerce* then *Create Item*.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e9b3bfaa1e5d5742628c4c88c04e61913de4fc284652cd2af13782dc2c28899a.md)

### Overview
The image depicts a user interface from a game or application management tool. It shows a sidebar menu on the left and a main content area on the right. The sidebar includes options such as Systems, Quests, Leaderboards, Commerce, In-world Items, Item Packs, Persistent Variables, and Variable Groups. The main content area displays a section titled "Commerce" under "In-world Items," listing items that can be purchased within the game world. There is also a "Create Item" button at the top right corner.

### Key Elements
- **Sidebar Menu**: Located on the left side, it has a dark background with white text and icons. The "Commerce" option is highlighted with a red underline.
- **Main Content Area**: On the right, it has a black background with white text. It displays a title "Commerce" and a subtitle "In-world Items." Below this, there are descriptions and prices for items like "1000 Coin," "500 Coin," and "Green Projectile."
- **"Create Item" Button**: Positioned at the top right, it is a purple button with white text.
- **Item Icons**: Each item listed has a small icon next to its name.
- **Price Tags**: Next to each item, there are price tags indicating the cost in-game currency.
- **Three-dot Menus**: Small three-dot menus appear next to each item, likely for more actions related to those items.
- **Bottom Navigation Bar**: At the bottom, there are several icons representing different functionalities, such as a cube, wrench, bag, globe, and settings gear.

### Visual Flow / Relationships
The layout is structured with the sidebar on the left and the main content area on the right. The "Create Item" button is prominently placed at the top right, drawing attention. The items listed in the main content area are arranged vertically, with their respective icons and details aligned to the left. The three-dot menus suggest interactive elements for each item.

</details>

<p></p>



**Step 2:** Every IWP you create requires a *Name*, *Sell Price*, *Thumbnail*, and selected *Item type*.

| **Durable In-World Item** | **Consumable In-World Item** |
| --- | --- |
|  |  |
| Asset reference is optional. Leaving it blank will create a *Durable Item without an Asset* (permanent player statuses). Adding an Asset will create a *Durable Item with Asset*, like a permanent weapon, hat, etc… | Decide if your consumable will be automatically consumed upon purchase or allow the user to consume it from their inventory with *Auto use*. |

**Note:***Description* is an optional field, but it is recommended that you provide a detailed description to help users understand what they are buying.

**Step 3:** Once your In-World Item has been created, you can grab an In-World Item gizmo from your build menu and drag it into your world.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/26b035d380ae5600454dd9a3baf8950f646e02e0ce5775e6d640b671b0f65af1.md)

### Overview
This image depicts a user interface from a game development tool, specifically showing the "Gizmos" section under the "Build" menu. The interface includes a sidebar with various categories, a central grid displaying icons representing different tools or features, and a bottom toolbar with additional controls.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Visual description**: A vertical menu with rounded corners.
  - **Location**: Left side of the image.
  - **Contents**: Contains categories such as "Shapes," "Gizmos," "Sounds," "Colliders," and "Assets."
  - **Visual styling**: Dark background with white text and icons.

- **Central Grid (Main Content Area)**:
  - **Visual description**: A grid layout with rounded corners.
  - **Location**: Center of the image.
  - **Contents**: Icons representing different tools or features like "TrailFx," "ParticleFx," "Sound Recorder," "World Leaderboard," "Projectile Launcher," "Snap Destination," "Raycast," "Debug Console," "World Promotion," "Place Gizmo," and "In-world Item."
  - **Visual styling**: Each icon has a distinct color and shape, with a small icon at the top right corner of each tile indicating more options.

- **Bottom Toolbar**:
  - **Visual description**: A horizontal bar with circular icons.
  - **Location**: Bottom of the image.
  - **Contents**: Includes icons for actions like creating a new object, opening a file, navigating, and settings.
  - **Visual styling**: Dark background with white icons.

- **Search Bar**:
  - **Visual description**: A rectangular search bar with a magnifying glass icon.
  - **Location**: Top right corner of the main content area.
  - **Contents**: Placeholder text "Search" and a magnifying glass icon.
  - **Visual styling**: Dark background with white text and icon.

### Visual Flow / Relationships
- **Most prominent visually**: The central grid of icons.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: Icons are arranged in a grid layout, with each icon having its own space. The sidebar and bottom toolbar provide navigation and additional functionality.

</details>

<p></p>



**Step 4:** Open the property panel for your In-World Item gizmo and there are several settings you can change here:

* Hit *Select* next to *In-World Item* and select the In-World Item associated with this gizmo.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fce8a96fcd947ad4b2843533631a8a90dcfeb4cb5fcde2cbf644f6c220614fd5.md)

### Overview
This image depicts a user interface element within a game development tool, specifically a settings or configuration panel for an item named "IWPSeller". The panel includes various toggles, switches, and options related to the item's behavior and properties.

### Key Elements
- **Header**: Located at the top, contains the name "IWPSeller" and a close button ("X") on the right side.
- **Tabs**: Below the header, there are three tabs labeled "Behavior," "Attributes," and "Gameplay Tags." The "Behavior" tab is highlighted, indicating it is currently active.
- **Toggle Switches**: Several toggle switches are present, such as "Visible" which is turned on, and others like "In-world Item," "Customize Purchase Dialog Position," and "UI Property."
- **Sliders**: There are sliders next to some of the toggle switches, such as "Trigger" and "Select."
- **Buttons**: A "Select" button is visible near the "Trigger" slider.
- **Dropdown Menu**: A dropdown menu is partially visible under the "Trigger" slider.
- **Attached Script**: At the bottom, there is a section labeled "Attached Script" with a blue button labeled "IWPSeller."

### Visual Flow / Relationships
The layout is structured with a clear hierarchy. The header is the most prominent element at the top. Below that, the tabs provide navigation. The toggle switches and sliders are arranged in a grid-like fashion, with the "Visible" toggle being the most prominent due to its active state. The "Attached Script" section at the bottom is less prominent but still noticeable.

</details>

<p></p>



* Click the dropdown next to *UI Property* and change the display style of your gizmo.

| Trigger | Button | Icon |
| --- | --- | --- |
|  |  |  |

* This is also where you would attach any scripts using the non-broadcast event codeblocks described under the **IWP Codeblocks** section.

**Now your IWP is ready for purchase!**

## Creating Item Packs

This section will guide you through the process of creating and selling Item Packs, including how to access the feature, select items, set quantities and prices, and make them available for purchase in your game.

Item Packs consist of *Consumables without Auto-use* offering players the ability to purchase items in bulk. You can create one by opening your build menu, navigating to *Systems* then *Commerce* again, selecting *Item Packs*, and clicking *Create Item Pack*.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/6cc58bd1fb1d3622d71da67a69e8d122d27b8ce8ea830bdc559ca692650265ce.md)

### Overview
The image depicts a user interface from a game or application, specifically within a commerce section related to item packs. The layout includes a sidebar menu on the left and a main content area on the right. The sidebar highlights "Item Packs" as the current selection. The main content area displays information about in-world item packs, with specific examples listed.

### Key Elements
- **Sidebar Menu**: Located on the left side, with a dark background and white text. Contains options such as "Systems," "Quests," "Leaderboards," "Commerce," "In-world Items," "Persistent Variables," and "Variable Groups." "Item Packs" is highlighted in red, indicating the current selection.
- **Main Content Area**: On the right, with a dark background and white text. Displays the title "Commerce" at the top. Below that, it states "In-world item packs" followed by a brief description. Three item pack categories are listed:
  - **consumableHealth Packs**: Contains 1 pack
  - **VIP 30 Days Manual Use Packs**: Contains 1 pack
  - **ConsumableNoAutoUse Packs**: Contains 1 pack
- **Create Item Pack Button**: Located at the top-right corner, with a purple background and white text saying "Create Item Pack."
- **Icons and Buttons**: At the bottom of the screen, there are several circular icons with different symbols, likely representing various functions or tools within the application. One of these icons is circled in red.
- **Background**: A gradient blue background is visible behind the sidebar and content area.

### Visual Flow / Relationships
The visual hierarchy is clear, with the sidebar menu on the left guiding the user to the current section. The main content area on the right provides detailed information about item packs. The "Create Item Pack" button is prominently placed at the top-right, suggesting its importance. The bottom icons likely offer additional functionalities, but their specific purposes are not described here.

</details>

<p></p>



The next window will ask you which *Consumable without Auto-use* you would like to make an Item Pack out of. Once selected you can choose an *Item quantity* between 2 and 99 then select your *Sell Price*.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/843a50386b333e2e686fbce6c56ba0e42b9972132cfcb4acd90fe718855253dd.md)

### Overview
This image depicts a user interface dialog box titled "Create item pack." It contains fields for entering an item quantity and selling price, along with a preview section showing an item named "consumableHealth."

### Key Elements
- **Title**: "Create item pack" located at the top of the dialog box.
- **Preview Section**: A small image thumbnail labeled "consumableHealth" with a placeholder image of a beach scene. Below the image, the text "consumableHealth" is displayed.
- **Item Quantity Field**: Located below the preview section, with the label "Item quantity" and a prompt "Enter an amount between 2–99."
- **Sell Price Field**: Positioned below the item quantity field, with the label "Sell Price."
- **Dropdown Menu**: A small dropdown menu icon is visible next to the sell price field.
- **Footer Text**: At the bottom, there is a note stating, "Payout is subject to Creator In-World Purchase Terms. Visit the Oculus support site for term details."
- **Navigation Buttons**: Two buttons labeled "Back" and "Create" are present at the bottom of the dialog box.

### Visual Flow / Relationships
The most prominent visual elements are the title, preview section, and the item quantity field. The flow moves from the title down to the preview section, then to the item quantity field, followed by the sell price field, and finally to the footer text and navigation buttons. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



Once created you can follow the same steps 3-4 in the previous section, **Creating an IWP**, to start selling your item pack.

## Examples: Implementing & Selling IWPs

In the following section, we will apply what we learned in the previous sections to build practical applications for our world. Some examples will include developing members-only area, an inventory system for weapons or other items, consumable health potions, and a simple item shop. These examples will demonstrate how to implement common gameplay mechanics, allowing players to access restricted areas, manage their inventory, use items, and make purchases within the game.

### Durable without Asset

**VIP Area**

**Required:** Durable Item without Asset. Follow steps 1-4 under **Creating an IWP** to create the VIP commerce, and setup the related *In-World Item* gizmo. Then pull out a *Trigger Gizmo* to get started

Durable items without assets are straightforward since all you can do is check if the player owns the IWP.

In this example, the script below is attached to a Trigger gizmo that covers our VIP area. When a player enters the trigger, we will check if they own this item and respawn them if they do not.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9bee3ac248591bf49fd84c983d006823fe51a5ed1583558438b3521bdcb01aa6.md)

### Overview
This image depicts a user interface segment that appears to be part of a scripting or programming environment, likely for a game or application. It shows conditional logic being written within a script editor. The interface includes various blocks representing conditions and actions, connected by lines indicating the flow of the script.

### Key Elements
- **Trigger Block**: Located at the top-left, this block has a blue background and contains the text "> when trigger is entered by". It indicates the start of a condition or event handler.
- **Player Block**: A green circular block with a player icon and the word "player" next to it, placed within the trigger block.
- **Conditional Block**: A teal block with the word "if" followed by a negation symbol ("not"), indicating a conditional statement.
- **Player Ownership Check**: Another green block with a player icon and the word "player", placed within the conditional block. This block checks if the player owns a specific entitlement.
- **Entitlement Identifier**: A purple block containing the text "vip_permament_697a8c40", which appears to be an entitlement identifier.
- **Respawn Block**: A dark blue block with a player icon and the word "respawn", indicating an action to respawn the player.
- **Destination Block**: A dark blue block with a destination icon and the text "mainSpawn", indicating the destination spawn point.

### Visual Flow / Relationships
The visual flow starts with the trigger block, moves through the conditional check, and ends with the respawn action. There are no arrows or lines connecting the blocks directly, but the arrangement implies a sequential flow from trigger to condition to action.

</details>

<p></p>



This is created by using the *when trigger is entered by player* event codeblock with an *IF* statement inside. We use a *NOT* operator and drag the *player owns item* codeblock inside of it. Using the *player* parameter from the event and an *in-world items* input value, we can complete this *IF* statement and respawn our players.

### Durable with Asset

**Spawning from Player Inventory**

**Required:** Durable Item with Asset. Follow steps 1-4 under **Creating an IWP** to create your durable item with asset commerce by assigning an asset from your asset library, and setup the related *In-World Item* gizmo. Then choose any object to run the following script. You will need to create an asset variable in your script, I called mine *assetToSpawn* and I linked it to the same asset from my asset library that I used when creating the *Durable Item*.

Durable items with assets do not require scripts, but what if we need to communicate with the item our player spawned?

This script can run anywhere in the world since it uses a broadcast event.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e117716c44badb29ce5aacc81874316cb215f920d4d57061682da0712ecc4332.md)

### Overview
This image depicts a user interface segment of a programming or scripting environment, likely for a game development tool. It shows a sequence of conditional logic and actions related to asset management within a game.

### Key Elements
- **Top Panel**: Contains a series of blocks representing conditions and actions.
  - **Block 1**: "when asset spawns" with a green "obj" icon.
  - **Block 2**: "asset from player inventory" with a green "player" icon.
  - **Block 3**: "if asset == assetToSpawn" with a blue "asset" icon and a green "assetToSpawn" icon.
  - **Block 4**: "send setOwner to obj with player parameters".

- **Visual Flow / Relationships**: The blocks are arranged horizontally, with the "if" condition block being the central focus. The sequence suggests a conditional check followed by an action if the condition is met.

</details>

<p></p>



Using the *when an asset spawns from player inventory* codeblock we get the object that spawned, the asset it was created from, and the player who spawned it. Since this is a broadcast event that will fire on any item spawning from any player, we’re going to check that the asset received by the event is the one we want by using an IF statement to compare the parameter to a specific asset variable in our script. Once we determine this is our asset, we can now send an event to the newly spawned object with our player as a parameter for the object to receive.

### Consumable with Auto-Use

**30-VIP Access**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the VIP consumsable with auto-use, and setup the related *In-World Item* gizmo. Then pull out a *Trigger Gizmo* to get started

In this example, we use a consumable to provide time-based(30 days) access to our users for their purchase. This script runs on a trigger gizmo that covers our VIP area.

**Note**: Because the script is too wide, I had to cut and modify the IF statement to show on two lines.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8c20115fdded47f9a2ffb0760eecf3a2b003b361efb26886688cfdc5962b4a75.md)

### Overview
This image depicts a user interface element resembling a conditional logic statement or a script editor. It contains multiple lines of code or conditions, with various elements like buttons, checkboxes, and text inputs.

### Key Elements
- **Trigger Condition**: Located at the top-left, the condition states "when trigger is entered by player". The "player" is represented by a green circular icon with a white figure inside.
- **Conditional Logic**: Below the trigger condition, there are several lines of logic. Each line starts with "if" followed by a condition involving the player and a specific item ("vip_30_days_d94c4b91").
- **Player Interaction**: The phrase "player has consumed" is repeated, indicating that the player has interacted with the item.
- **Time Duration**: A line specifies "time DAYS since player consumed", suggesting a time-based condition related to the player's interaction with the item.
- **Respawn Action**: At the bottom, there's a line stating "respawn player to mainSpawn", indicating an action to respawn the player to a specific location.
- **UI Elements**: The interface includes buttons, checkboxes, and text inputs, some of which are highlighted in blue, green, and purple.

### Visual Flow / Relationships
The visual hierarchy is structured vertically, with each line representing a step in the conditional logic. Arrows or lines connecting elements are absent, implying a linear reading order from top to bottom. The most prominent elements are the trigger condition and the respawn action, as they stand out due to their placement and distinct color coding.

</details>

<p></p>



This script uses the *IF* statement and the *NOT* operator just like in our previous example. We also incorporate the *AND* operator so we can check two conditions. First, we use the *player has consumed item* codeblock to tell us if they have consumed the item, then we use the *time since player consumed item* codeblock in conjunction with the *LESS THAN* operator and *number* input value to determine if it has been less than 30 days since they consumed. Because of our *AND* operator, if one of these conditions returns false, they will be teleported away from the area.

**Restore Health**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Health Restore consumable with auto-use, and setup the related *In-World Item* gizmo.

In this example, our users can purchase an instant health restore. This script is attached to the In-World Item gizmo and the events below will fire when the item is purchased.

**Note:** This script assumes you have a player manager listening for the restoreHealth event.

We don’t have any need for the *when player purchase succeeds on item* or *when player purchase fails on item* events, but I wanted to show that they still fire.

We wait for the *when player consume succeeds on item* event to fire, although since this is an auto-consumed item, we could have also sent *restoreHealth* under the *when player purchase succeeds on item* event too.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bd1204a8bc97f75190bd95d31773cc314e30cea93ed9fa65cabffd3bd0d70392.md)

### Overview
This image depicts a user interface element that appears to be part of a game or application's scripting or command-line interface. It shows a sequence of commands or actions being executed, with specific parameters and conditions specified.

### Key Elements
- **Visual description**: The interface consists of a series of text fields and buttons.
- **Location**: The elements are arranged horizontally across the screen.
- **Contents**:
  - "when player consume succeeds on item" (text field)
  - "send restoreHealth to player with player parameters" (text field)
- **Visual styling**: The text fields have a blue background with white text, while the buttons have a green background with white text.

### Visual Flow / Relationships
- The most prominent visual elements are the text fields containing the commands.
- There are no arrows or lines connecting the elements, but the sequence suggests a step-by-step process.
- The elements are aligned horizontally, with the text fields on the left and the buttons on the right.

</details>

<p></p>



Below you’ll see an example of my player manager script to give you an idea of what that looks like. This script can be ran on any object in the world and listens for events being sent to players.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bd67522b4fce76a79951e95ca4a49fb1e6a7a7a01b2d94abed551022e6c89dc4.md)

### Overview
This image displays a user interface resembling a visual programming environment, specifically a block-based coding interface. The interface consists of a series of interconnected blocks that represent different actions and conditions within a program. The blocks are arranged in a vertical sequence, each representing a step in a conditional logic flow.

### Key Elements
- **Block 1:** "when world is entered by player"
  - **Visual description:** A green block with a person icon and the word "player."
  - **Location:** Top-left corner.
  - **Contents:** "when world is entered by player"
  - **Visual styling:** Green background, white text, rounded corners.
  
- **Block 2:** "Listen to events from player"
  - **Visual description:** A blue block with a person icon and the word "player."
  - **Location:** Below Block 1.
  - **Contents:** "Listen to events from player"
  - **Visual styling:** Blue background, white text, rounded corners.
  
- **Block 3:** "add player to players"
  - **Visual description:** A green block with a person icon and the word "players."
  - **Location:** Below Block 2.
  - **Contents:** "add player to players"
  - **Visual styling:** Green background, white text, rounded corners.
  
- **Block 4:** "add #100 to healths"
  - **Visual description:** A yellow block with a plus sign and the number "#100," followed by another yellow block with the word "healths."
  - **Location:** Below Block 3.
  - **Contents:** "add #100 to healths"
  - **Visual styling:** Yellow background, white text, rounded corners.
  
- **Block 5:** "when restoreHealth is received with p"
  - **Visual description:** A purple block with a downward arrow and the word "restoreHealth," followed by a green block with a person icon labeled "p."
  - **Location:** Below Block 4.
  - **Contents:** "when restoreHealth is received with p"
  - **Visual styling:** Purple background, white text, rounded corners.
  
- **Block 6:** "+ New Param"
  - **Visual description:** A gray block with a plus sign and the words "+ New Param."
  - **Location:** Next to Block 5.
  - **Contents:** "+ New Param"
  - **Visual styling:** Gray background, white text, rectangular shape.
  
- **Block 7:** "set #100 at index of p in players in healths"
  - **Visual description:** A blue block with the number "#100," followed by a green block with a person icon labeled "p," then a green block with the word "players," a blue block with the word "in," a yellow block with the number "#," a green block with the word "healths," and a yellow block with the number "#."
  - **Location:** Below Block 5.
  - **Contents:** "set #100 at index of p in players in healths"
  - **Visual styling:** Blue, green, yellow, and white text, rounded corners.
  
- **Block 8:** "Show pop-up for p with Health Restored for #3 seconds"
  - **Visual description:** A purple block with a person icon labeled "p," a green block with the words "with Health Restored," a yellow block with the number "#3," and a yellow block with the word "seconds."
  - **Location:** Below Block 7.
  - **Contents:** "Show pop-up for p with Health Restored for #3 seconds"
  - **Visual styling:** Purple, green, yellow, and white text, rounded corners.
  
- **Block 9:** "when world is exited by player"
  - **Visual description:** A green block with a person icon and the word "player."
  - **Location:** Below Block 8.
  - **Contents:** "when world is exited by player"
  - **Visual styling:** Green background, white text, rounded corners.
  
- **Block 10:** "remove item at index of player in players from healths"
  - **Visual description:** A blue block with the word "remove item," a green block with a person icon labeled "player," a green block with the word "players," a blue block with the word "from," and a yellow block with the word "healths."
  - **Location:** Below Block 9.
  - **Contents:** "remove item at index of player in players from healths"
  - **Visual styling:** Blue, green, yellow, and white text, rounded corners.
  
- **Block 11:** "remove item player from players"
  - **Visual description:** A blue block with the word "remove item," a green block with a person icon labeled "player," and a green block with the word "players."
  - **Location:** Below Block 10.
  - **Contents:** "remove item player from players"
  - **Visual styling:** Blue, green, and white text, rounded corners.

### Visual Flow / Relationships
- **Most prominent visually:** The blocks are arranged vertically, indicating a sequential flow of actions.
- **Arrows, lines, connectors, or implied reading order:** There are no explicit arrows or lines connecting the blocks, but the vertical arrangement implies a chronological order.
- **Spatial relationships:** Blocks are aligned horizontally when grouped together, with some blocks stacked vertically to indicate nested operations.

</details>

<p></p>



**Coin Shop**

**Required:** Consumable with Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Coin consumsable with auto-use, and setup the related *In-World Item* gizmo.

This is the same script as the previous **Restore Health** script, but I also wanted to show that you could set a Player-Persistent Variable. This script is attached to the In-World Item gizmo and the events below will fire when the item is purchased.

In this example, the user purchases 100 coins so we need to add the coins to their Coins PPV.

We use the *set player persistent var* to codeblock with a + operator to add their current Coin PPV that we retrieved using the *get user persistent var* codeblock to a number input value of 100.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/971445bb2eefdf94fe27a1ec9ec07dee96a892a9af6c34bdfc3fce1048040f7f.md)

### Overview
This image depicts a visual representation of a programming logic flow involving player purchases and item consumption within a game environment. The layout consists of conditional blocks and actions related to player interactions with items.

### Key Elements
- **Conditional Blocks**: 
  - **Top Left**: "When player purchase succeeds on item"
    - **Visual description**: Green rounded rectangle with white text.
    - **Location**: Top-left corner.
    - **Contents**: "player purchase succeeds on item"
    - **Visual styling**: Green background, white text, blue border.
  - **Middle Left**: "When player purchase fails on item"
    - **Visual description**: Green rounded rectangle with white text.
    - **Location**: Middle-left area.
    - **Contents**: "player purchase fails on item"
    - **Visual styling**: Green background, white text, blue border.
  - **Bottom Left**: "When player consume succeeds on item"
    - **Visual description**: Green rounded rectangle with white text.
    - **Location**: Bottom-left area.
    - **Contents**: "player consume succeeds on item"
    - **Visual styling**: Green background, white text, blue border.
  
- **Debug Print Actions**:
  - **Top Left**: "Debug Print purchase succeeds"
    - **Visual description**: Purple rounded rectangle with white text.
    - **Location**: Above the first conditional block.
    - **Contents**: "purchase succeeds"
    - **Visual styling**: Purple background, white text, blue border.
  - **Middle Left**: "Debug Print purchase fails"
    - **Visual description**: Purple rounded rectangle with white text.
    - **Location**: Above the second conditional block.
    - **Contents**: "purchase fails"
    - **Visual styling**: Purple background, white text, blue border.
  - **Bottom Left**: "Debug Print consume succeeds"
    - **Visual description**: Purple rounded rectangle with white text.
    - **Location**: Above the third conditional block.
    - **Contents**: "consume succeeds"
    - **Visual styling**: Purple background, white text, blue border.

- **Action Block**:
  - **Bottom Right**: "Set coins to get user persistent variable coins value for player + #100 for player"
    - **Visual description**: Blue rounded rectangle with white text.
    - **Location**: Bottom-right area.
    - **Contents**: "set coins to get user persistent variable coins value for player + #100 for player"
    - **Visual styling**: Blue background, white text, blue border.

### Visual Flow / Relationships
- **Most Prominent**: The conditional blocks are the most prominent as they define the logic paths.
- **Arrows/Connections**: There are no explicit arrows connecting the blocks, but the sequence is implied by the vertical arrangement.
- **Spatial Relationships**: The blocks are arranged vertically, with the conditional blocks at the top and the action block at the bottom. Each block is adjacent to the one above it.

</details>

<p></p>



### Consumable without Auto-use

**Example: Manual Health Restore**

**Required:** Consumable without Auto-Use. Follow steps 1-4 under **Creating an IWP** to create the Health Restore consumsable without auto-use, and setup the related *In-World Item* gizmo.

In this example we show how to handle manual consumption of an In-World Item without auto-use, meaning the item is stored in the player’s inventory and consumed when they are ready. This script is attached to the In-World Item gizmo and the events below will fire when the item is consumed.

The important thing to note when a player tries to consume a *Consumable without Auto-use* is that you must recognize this using the *when player try to consume item**from inventory* codeblock and decide whether to acknowledge this attempt using the *consume item for player* codeblock before the consumption is considered successful, otherwise, the consumption will fail. Refer to the previous example, **Restore Health**, to see what a player manager script would look like.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/48fad7fa05162db72670f055adf78e21b82e08f9f20f0675f3aec38a457a48d4.md)

### Overview
This image depicts a visual representation of a sequence of events or conditions related to player actions within a game or application. The layout resembles a flowchart or a visual scripting interface, with blocks representing different conditions and actions.

### Key Elements
- **When Block**: Located at the top left, this block has a green rounded rectangle with a white icon inside, indicating a condition or event trigger. The text reads: `when player purchase succeeds on item`.
- **Debug Print Block**: Adjacent to the When block, this block has a dark blue rounded rectangle with a white icon inside, labeled as `Debug Print`. The text reads: `purchase succeeds`.
- **When Block**: Below the first When block, another block with similar styling triggers when a player's purchase fails. The text reads: `when player purchase fails on item`.
- **Debug Print Block**: Next to the second When block, this block displays `purchase fails`.
- **When Block**: Further down, another When block is shown, indicating an action when trying to consume an item from inventory. The text reads: `when player try to consume item from inventory`.
- **Debug Print Block**: Following the third When block, this block shows `try consume`.
- **Consume Block**: This block is labeled `consume` and contains a placeholder ID (`consumablenaoutouse_be64b1af`) and specifies that it's for a player. The text reads: `consume consumablenaoutouse_be64b1af for player`.
- **When Block**: Below the Consume block, another When block indicates success in consuming an item. The text reads: `when player consume succeeds on item`.
- **Debug Print Block**: Next to the fourth When block, this block shows `consume succed`.
- **Send Block**: This block is labeled `send` and includes a dropdown menu with the text `restoreHealth`, followed by a player icon and the word `with`. The text reads: `send restoreHealth to player with player parameters`.
- **When Block**: At the bottom, another When block triggers when the consumption fails. The text reads: `when player consume fails on item`.
- **Debug Print Block**: Finally, this block displays `consume fail`.

### Visual Flow / Relationships
The visual flow is linear, moving from top to bottom and left to right. Each When block introduces a new condition, followed by a Debug Print block that outputs the result of that condition. The sequence is structured to show a series of possible outcomes based on player actions.

</details>

<p></p>



## Extended Learning

To reinforce your understanding of IWP mechanics and put your new skills into practice, try completing the hands-on challenges provided below:

**Challenge 1:** Create a basic auto-use and manual-use consumable, then purchase and consume it in build mode. Additionally, go on to create an item pack out of the manual-use consumable.

**Challenge 2:** Create a basic durable item with and without an asset, then purchase and use it in build mode.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.