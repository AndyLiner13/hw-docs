Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/economy-world-tutorial/module-3-configuring-gameplay

# Module 3 - Configuring Gameplay Entities

Requirements

 You will need to be a member of MHCP and have accepted the monetization Terms Of Service in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](../../../MHCP%20program/Monetization/Monetization%20opportunities.md).

Now that we have added in-world items, we need to set up the gameplay so the core loop works with these items.

## Configuring the apple spawners

The apple spawners (located under the trees) spawn apples that the player can pick up by moving their avatar over the apple. The apple disappears, and the player receives an apple in their world inventory.

### Composition of the apple spawner

Each apple spawner includes:

* **TriggerGizmo**: The root of the AppleSpawner is a TriggerGizmo, which is used to determine when a player has collected the apple.
* **Mesh**: This is an empty object containing the apple mesh, which is the visual appearance of the apple, taken from the Asset Library.
* **PFX**: This is a particle effect that draws attention to the apple, and communicates that this is something the player can interact with.
* **Dynamic Light**: Like the particle effect, the intention of the dynamic light is to draw attention to the apple. Considering how to layer lights, sounds, animation, and effects to communicate rewarding items to the player is a skillset in itself.

### SimpleLootItem.ts script overview

Each apple spawner has a SimpleLootItem.ts script attached which manages the state of the AppleSpawner. The state of the AppleSpawner is managed as follows:

* The `start()` method is called when the world starts, and this starts an interval timer which runs every `updateDelayS` (default is 0.1s).
* Within the callback function of the interval timer, the script calls the `this.update()` method, passing the amount of time passed since the last update (`updateDelayS`).
* `this.update()` starts as a reference to the `this.animateMesh` method. The `this.animateMesh` method spins the apple and makes it move up and down.
* When the player picks up the apple, `this.update()` is set to reference `this.awaitRespawn()` method, which counts down a timer before the apple is shown again. Note that this only occurs if the prop `respawnEnabled` is set to `true`.

When a player enters the trigger, the following events occur:

* The system checks if `this.active` is `true`, or if the apple is awaiting respawn.
* If `this.active` is `true`:
  + The player is granted an apple to their world inventory.
  + A network broadcast event `SimpleLootItemEvents.OnPickupLoot` is sent to update any local player UI or for any other listener that needs it.
  + The `deactivate()` method is called, which:
    - Hides the apple, light and effect.
    - Checks if this item can be respawned.
    - If it can be respawned, `this.update` is changed to refer to `awaitRespawn`, and sets the value of the variable `respawnRemaining` to the prop `respawnDelay`. The `awaitRespawn` update function then counts down the delay set for respawning an apple.
    - When the timer concludes, the `activate()` method is called, which re-enables the apple, light and effect, and sets `this.update` to the `animateMesh` method to return the apple to it’s default state.

Here is a simplified version of the SimpleLootItem.ts that illustrates the core functionality of the script:

```
import * as hz from 'horizon/core';
import {WorldInventory} from 'horizon/core';

class SimpleLootItem extends hz.Component<typeof SimpleLootItem> {
  // Other props and properties...

  private updateIntervalId: number = -1;
  private updateDelayS: number = 0.1;
  private update: (deltaTime: number) => void = deltaTime => {};

  private active: boolean = true;

  preStart(): void {
    this.connectCodeBlockEvent(
      this.entity,
      hz.CodeBlockEvents.OnPlayerEnterTrigger,
      (enteredBy: hz.Player) => {
        this.onTriggerEnter(enteredBy);
      },
    );
  }

  start() {
    this.active = this.props.active || false;
    if (this.active) {
      // Set the update method to point to the animateMesh method
      this.update = this.animateMesh;
    }

    // Repeatedly call this.update every this.updateDelayS seconds (0.1s by default)
    this.updateIntervalId = this.async.setInterval(() => {
      this.update(this.updateDelayS); // Set to animateMesh in start()
    }, this.updateDelayS * 1000);
  }

  onTriggerEnter(player: hz.Player) {
    // If this apple can be picked up, then grant the player an apple in their world inventory, update the player UI and hide the apple.
    if (this.active) {
      WorldInventory.grantItemToPlayer(
        player,
        this.props.lootSKU,
        this.props.lootCount,
      );
      this.sendNetworkBroadcastEvent(SimpleLootItemEvents.OnPickupLoot, {
        player,
        sku: this.props.lootSKU,
        count: this.props.lootCount,
      });
      this.deactivate();
    }
  }

  animateMesh(deltaTime: number) {
    // Animate the apple mesh
  }

  awaitRespawn(deltaTime: number) {
    // Count down the respawn timer
  }

  activate() {
    // Set the apple to be able to be picked up, and set this.update to animateMesh
  }

  deactivate() {
    // Hide the apple, light and effect, and set this.update to awaitRespawn
  }
}
```

## Setting the LootSKU

The SimpleLootItem.ts script has a prop `lootSKU` which is used to grant the player an item to their world inventory. To set this to the Apple we defined in the in-world items:

- Open the **Commerce** panel in the **Systems** menu

<details>
<summary>Create in-world item</summary>

<p></p>

[Create in-world item](../../../image_data/7a4394c89e148ef0efc7529fd319708634ec55a63d59cb5ea2c3274c0ecd0153.md)

### Overview
This image depicts a dropdown menu from a user interface, likely part of a software application or game development tool. The menu is triggered by clicking on a labeled button ("Systems") which has a downward-facing arrow indicating that a dropdown is available. The menu contains several options listed vertically.

### Key Elements
- **Visual description**: The dropdown menu is rectangular with rounded corners.
- **Location**: Positioned below the "Systems" button.
- **Contents**: The menu items include "Quests," "Leaderboards," "Commerce," "Variable Groups," and "Navigation." Each item is a clickable option.
- **Visual styling**: The background is dark gray, and the selected item ("Commerce") is highlighted with a lighter gray background. The text is white, providing good contrast against the dark background.

### Visual Flow / Relationships
- **Most prominent visually**: The "Commerce" option is highlighted, drawing attention to it as the currently selected item.
- **Arrows/lines/connectors**: There are no arrows or lines connecting elements within the menu.
- **Spatial relationships**: Items are arranged vertically, with each option stacked one below the other. The selected item is slightly raised compared to the others, indicating its active state.

</details>

<p></p>



- Hover over the “Apple” line item

<details>
<summary>Hover the apple line item</summary>

<p></p>

[Hover the apple line item](../../../image_data/cd2e7633aa9af5c2abbe0400c7773be2b187c1986310b37f28caa2d10a3d2d96.md)

### Overview
This image depicts a user interface element from a software application, likely related to inventory management or commerce. It shows a list of consumable items within a specific category labeled "Commerce." The interface includes filtering options and a search bar at the top.

### Key Elements
- **Header**: "Systems" and "Scripts" dropdown menus, indicating navigation options.
- **Search Bar**: Located at the top, with a magnifying glass icon.
- **Filter Dropdown**: "Displaying In-world Items" with a downward arrow, suggesting a dropdown menu for more filter options.
- **Items List**: A list of consumable items with icons, names, descriptions, and SKU numbers.
    - **Apple**: Icon of an apple, labeled as "Consumable · SKU: app..."
    - **Apple Pie**: Icon of a pie, labeled as "Consumable · SKU: apple_pie_552444e2"
    - **Faster Apples**: Icon of a pie slice, labeled as "Consumable · SKU: faster_apples_0c1f8411"
    - **Faster Pies**: Icon of a pie slice, labeled as "Consumable · SKU: faster_pies_e3e84cde"
    - **Gem**: Icon of a gemstone, labeled as "Consumable · SKU: gem_263b1de0"
    - **Oven**: Icon of an oven, labeled as "Consumable · SKU: oven_fe36a967"

### Visual Flow / Relationships
The visual hierarchy is clear, with the header at the top, followed by the search bar, and then the list of items. The items are arranged vertically, with each item having its own row containing an icon, name, description, and SKU number. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



- Click the **Copy SKU** button

<details>
<summary>Copy the SKU</summary>

<p></p>

[Copy the SKU](../../../image_data/f6fd95b5708ae0d3772924baa76c45e95b8281dccc57a052f858fcd3efb7cc57.md)

### Overview
This image depicts a user interface element from a commerce management system, likely within a game development environment. It shows a list of consumable items with their respective SKUs displayed. The interface includes filtering options at the top and a search bar for item searching.

### Key Elements
- **Header**: Located at the top, includes a search bar, a plus sign for adding new items, and a refresh icon.
- **Displaying**: A dropdown menu indicating the current display filter set to "In-world Items."
- **Items List**: A vertical list of consumable items with icons, names, descriptions, and SKUs.
    - **Apple**: Consumable SKU: app...
    - **Apple Pie**: Consumable SKU: apple_pie_b52444e2
    - **Faster Apples**: Consumable SKU: faster_apples_0c1f8411
    - **Faster Pies**: Consumable SKU: faster_pies_e3e84cde
    - **Gem**: Consumable SKU: gem_263b1de0
    - **Oven**: Consumable SKU: oven_fe36a967
- **Copy SKU Button**: A black button labeled "Copy SKU" appears over the "Faster Apples" item.
- **Icons**: Each item has a small icon next to its name.
- **Buttons**: Icons for copying, tagging, and deleting items are present next to each item.

### Visual Flow / Relationships
The visual hierarchy is clear with the header at the top, followed by the display filter, then the list of items. The "Copy SKU" button is prominently placed over one of the items, drawing attention to that specific action. The items are arranged vertically, with each item having a consistent layout of icon, name, description, and SKU.

</details>

<p></p>



- Close the **Commerce** panel and **Systems** menu; then select an apple spawner in the world

<details>
<summary>Close the commerce panel</summary>

<p></p>

[Close the commerce panel](../../../image_data/e63ff658072281cb3c5d5c918168d17f96b9d5ec5a53d3d5f50b52ea9e3f23d5.md)

### Overview
This image depicts a 3D modeling environment interface, likely from a game development tool. It shows a 3D object being manipulated within a grid-based workspace. The right side of the screen displays a settings panel for the object, labeled "GameplayTags."

### Key Elements
- **3D Object**: A transparent cube with a blue outline, placed on a yellow base. Inside the cube, there is a smaller object resembling a loot box with an orange exterior and a white interior. The object has a red arrow pointing towards it, indicating some form of interaction or selection.
- **Grid Workspace**: The object is situated on a light gray grid, suggesting a 3D modeling environment.
- **Settings Panel**: Located on the right side, it includes various parameters such as "active," "mesh," "pfx," "light," and numerical values for "animRotationFrequency," "animBobFrequency," "animBobAmplitude," "lootSKU," "lootCount," "respawnEnabled," and "respawnDelay." There is also a toggle switch next to "respawnEnabled."
- **Tag Input Box**: At the top of the settings panel, there is a search bar labeled "Search attached tags."
- **Tree Structure**: Below the tag input box, there is a tree structure showing the object's hierarchy, starting with "SimpleLootItem:SimpleLoot..." and expanding into more specific parameters.
- **Attach Script Button**: At the bottom of the settings panel, there is a blue button labeled "Attach script."

### Visual Flow / Relationships
The most prominent visual element is the 3D object in the center-left. The settings panel on the right provides contextual information about the object. The grid workspace serves as the backdrop for the 3D object. The red arrow on the object suggests an interactive element, possibly highlighting a feature or action point. The settings panel is organized hierarchically, with the tree structure indicating nested parameters related to the object.

</details>

<p></p>



- Paste (CTRL+V) the Apple SKU into the `lootSKU` property

<details>
<summary>Paste the Apple SKU</summary>

<p></p>

[Paste the Apple SKU](../../../image_data/d8d7a847f3ad71b8633a20fe217d207df8c80a35414db7e9b6296b2ebb031b73.md)

### Overview
This image depicts a 3D modeling environment within a game development tool, likely Unreal Engine, showing a scene with a loot box and a debug panel on the right side. The scene includes a loot box with a transparent glass container, a wooden pole, and a partially visible umbrella in the background.

### Key Elements
- **Loot Box**: A transparent glass container with a yellow base, containing an item resembling a loot box with an orange exterior and a white interior. Inside the loot box, there are two icons: one diamond-shaped and one square-shaped.
- **Wooden Pole**: A brown pole extending vertically from the ground, positioned to the right of the loot box.
- **Umbrella**: A light-colored umbrella with a beige canopy and a brown pole, partially visible in the upper right corner.
- **Debug Panel**: Located on the right side of the image, displaying various attributes and settings related to the loot box object named "AppleSpawner." It includes sections for Position, Rotation, Scale, Behavior, GameplayTags, and other parameters such as mesh, PFX, Dynamic Light, animRotationFrequency, animBobFrequency, animBobAmplitude, lootSKU, lootCount, respawnEnabled, and respawnDelay.

### Visual Flow / Relationships
The loot box is the most prominent visual element in the foreground, with the wooden pole and umbrella serving as background elements. The debug panel on the right provides contextual information about the loot box, indicating that this is part of a game development interface. The loot box is centrally located in the scene, while the wooden pole and umbrella are positioned behind it.

</details>

<p></p>



- Repeat this for each of the apple spawners in the world

Now, when a player enters the apple spawner trigger while it is active, an in-world apple item is added to their world inventory.

## Configure the player HUD

To determine if players are receiving apples when they collect them, we will need to configure the Player HUDs so that it shows this information. In this world, there are 4x Custom UI gizmos located above the world with the PlayerHud script attached. These are named PlayerHud1, PlayerHud2, PlayerHud3, and PlayerHud4.

<details>
<summary>Player HUDs</summary>

<p></p>

[Player HUDs](../../../image_data/88fd3e30f4a030502dcd96874da86196e9f6d4cf037326ccbb22266007f31af8.md)

### Overview
The image depicts a virtual environment resembling a player HUD (Heads-Up Display) interface, likely from a video game. It features a central area surrounded by structures labeled as "Player Kitchen," "Cook Shop," and "Adventure Shop." The scene includes a small character model standing in the center, with various floating icons and blocks around the area.

### Key Elements
- **Central Area**: A rectangular space outlined with yellow blocks, labeled "Player Kitchen."
- **Surrounding Structures**: Three rectangular structures labeled "Cook Shop," "Adventure Shop," and "Player Kitchen."
- **Floating Icons**: Small icons with purple backgrounds and white text ("Aa") are scattered throughout the scene.
- **Character Model**: A small blue humanoid figure stands in the center of the central area.
- **Background**: A simple grid-like floor and a light blue sky with stylized trees.

### Visual Flow / Relationships
- **Most Prominent Element**: The central area labeled "Player Kitchen."
- **Spatial Relationships**: The central area is surrounded by the three labeled structures. The floating icons are dispersed around the scene, with some near the structures and others further away.

</details>

<p></p>



Each of these is set to be owned by a player when they enter the world. This is done by the PlayerHudManager script, which is attached to the PlayerHudManager entity.

Configure each custom UI gizmo with the PlayerHud script attached to include the currencyName, currencySKU, and currencyTexture for Apples, Gems, and Pies respectively. Use the same method for copying SKUs from the **Systems > Commerce** panel that you used for setting the loot SKU.

When finished, each CustomUI gizmo with the PlayerHud should show the following properties (with minor differences in the SKUs).

<details>
<summary>Player HUD configuration</summary>

<p></p>

[Player HUD configuration](../../../image_data/879d350b8e994e6838f5c608325357bd23fd946f7ae1a08f4e56a26c0c4f98fb.md)

### Overview
This image displays a user interface element resembling a settings or configuration panel, likely within a game development tool or a similar software environment. It features a list of configurable items related to currencies, with each item having a name, SKU, and texture reference.

### Key Elements
- **Left Panel**: Contains a vertical list of currency-related settings.
  - **currency1Name**: Displays "Apples".
  - **currency1SKU**: Displays "apple_615786d0".
  - **currency1Texture**: Displays "apple" with a small icon next to it.
  - **currency2Name**: Displays "Gems".
  - **currency2SKU**: Displays "gem_263b1de0".
  - **currency2Texture**: Displays "gem" with a small icon next to it.
  - **currency3Name**: Displays "Pies".
  - **currency3SKU**: Displays "apple_pie_552444".
  - **currency3Texture**: Displays "pie" with a small icon next to it.
- **Right Panel**: Contains input fields corresponding to the left panel items.
- **Bottom Panel**: Contains a blue button labeled "Attach script".

### Visual Flow / Relationships
The layout is structured with the left panel listing the items and the right panel providing input fields for each item. The bottom panel has a single button for attaching a script. The visual flow suggests that users can configure the names, SKUs, and textures for different currencies, and then attach a script to apply these configurations.

</details>

<p></p>



## Testing the PlayerHUD and the apple spawner configuration

Once you have configured the apple spawner and the PlayerHUD, try playtesting the world. Collect an apple, and it should disappear from the world; after a short pause, the number of apples in the PlayerHUD should increase.

## Configuring the oven

In this game, the player must collect apples, and then use the oven to convert five apples into a pie. The combination of requirements such as a game action (collecting apples, starting oven) with a timer (to wait for the pie to cook) increases the perceived value of the pie, as it requires much more time to create as opposed to picking up an apple.

### Oven composition

Each oven hosts the following entities:

* **Oven (Empty Object)**: Contains the shapes used to represent the oven.
* **Trigger (TriggerGizmo)**: The trigger.
* **OvenFloor (Mesh)**: A shape used to show where an oven can be purchased.
* **PriceText (TextGizmo)**: Text to communicate to players the price of the oven, or the price of a pie.
* **FailText (TextGizmo)**: Text to communicate to players if purchasing the oven or baking a pie failed (for example, if they don’t have enough currency).

### Oven.ts Overview

Each oven has the `Oven.ts` script attached. This script controls purchasing the oven, and using the oven to convert apples to apple pies. This script manages interaction between the player and the oven, and the state of the oven.

The script extends `PurchaseableItem.ts`, which is another script that handles communication between a purchaseable entity in the world and the purchasing player’s world inventory. You can extend `PurchaseableItem.ts` in your own script to leverage the purchase functionality (use `Oven.ts` as an example on how to extend this functionality to suit your needs).

`Oven.ts` has the following properties:

* `trigger`: Reference to the TriggerGizmo the player interacts with to purchase the oven or bake a pie.
* `priceSKU`: The SKU of the currency needed to purchase the oven (e.g. gem\_XXXXXXXX).
* `priceCurrency`: The name of the currency needed to purchase the oven (Gem).
* `priceAmount`: The amount of the currency needed to purchase the oven (10).
* `priceTxt`: TextGizmo used to show the player the price of the oven, or the price of a pie depending on if they own the oven.
* `itemSKU`: The SKU of the oven / item to grant when this oven is not owned (e.g. oven\_XXXXXXXX).
* `itemCurrency`: The name of the currency granted when this oven is not owned (Oven).
* `itemAmount`: The amount of ovens to grant when this is purchased (1).
* `errorTxt`: A reference to a TextGizmo that can be used to display an error if the oven is not able to be purchased or the pie is not able to be baked.
* `ovenMesh`: A reference to the oven. This can be the parent of a group of entities that should be made visible / invisible depending on if the oven is owned or not.
* `piePriceSKU`: The SKU of the currency needed to bake a pie (e.g. apple\_XXXXXXXX).
* `piePriceAmount`: The amount of the currency needed to bake a pie (5).
* `pieSKU`: The SKU of the pie to grant to the player once the pie bake has been completed (e.g. apple\_pie\_XXXXXXXX).
* `pieAmount`: The number of pies to grant to the payer once the pie bake has been completed (1).
* `pieBakeDuration`: The length of time in seconds that the players must wait to bake the pie (15).

The core part of `Oven.ts` is the OnPlayerEnterTrigger event, which is fired when the player interacts with the Trigger. Here, the code can branch in two directions depending on the state of the oven:

- If the player owns the oven, then the `attemptPieBake()` method is called. Here it will:
- Check if the player has enough apples to make a pie.
- If so, it starts an interval timer which is used to count down a timer, and regularly updates the `PriceText` to show the progress of the pie being baked as a percentage.
- If the player does not own the oven, then the `attemptPurchase()` method is called. You can find this method in the PurchaseableItem class. This method:
- Checks if the player has enough currency to purchase the item (in this case, the oven).
- If the player does, then they are granted that item through the world inventory and the price is updated so that it no longer has the required price.
- The `onPurchaseSuccess` function is called. The `Oven.ts` script overrides this method and performs the following actions:
- Calls the original `onPurchaseSuccess` method in PurchaseableItem.ts.
- Sets the oven visibility to `true`.
- Sets the `purchased` variable to `true`.
- Sets the `PriceText` to display the cost of baking an apple.

Here is a simplified version of the Oven.ts that illustrates the core functionality of the script:

```
import * as hz from 'horizon/core';
import {WorldInventory} from 'horizon/core';
import {KitchenEvents} from 'Kitchen';
import {PurchaseableItem, PurchaseableItemEvents} from 'PurchaseableItem';

class Oven extends PurchaseableItem<typeof Oven> {
  // Props and properties...

  onPlayerEnterTrigger(player: hz.Player) {
    if (this.owner === player) {
      if (!this.purchased) {
        this.onAttemptPurchase(player); // This method is inherited from PurchaseableItem.ts.
      } else {
        this.attemptPieBake();
      }
    }
  }

  attemptPieBake() {
    if (this.owner === undefined || this.bakeRemaining > 0) {
      return;
    }
    const owner: hz.Player = this.owner;

    // Query how many apples the player has
    WorldInventory.getPlayerEntitlementQuantity(
      owner,
      this.props.piePriceSKU,
    ).then(quantity => {
      // Check the player has enough apples to bake a pie
      if (quantity >= this.props.piePriceAmount) {
        // If they do, remove 5x apples from their inventory
        WorldInventory.consumeItemForPlayer(
          owner,
          this.props.piePriceSKU,
          this.props.piePriceAmount,
        );
        this.sendNetworkBroadcastEvent(PurchaseableItemEvents.OnConsumeItem, {
          player: owner,
          itemSKU: this.props.piePriceSKU,
          itemAmount: this.props.piePriceAmount,
        });

        // Start the pie baking process
        this.startBakingPie();
      } else {
        // If the player does not have enough apples, display an error message above the oven
        const shortfall = this.props.piePriceAmount - Number(quantity);
        this.updateFailText(
          'Not enough apples. ' + shortfall + ' more needed!',
        );
      }
    });
  }

  startBakingPie() {
    // Use an interval timer to count down the time required to bake the pie
    this.bakeRemaining = this.props.pieBakeDuration;
    this.bakeIntervalId = this.async.setInterval(() => {
      this.bakeUpdate(this.bakeIntervalDelayS);
    }, this.bakeIntervalDelayS * 1000);
  }

  bakeUpdate(deltaTime: number) {
    // Countdown the timer
    this.bakeRemaining -= deltaTime;
    this.updateText('Baking Apple Pie: ' + this.bakeRemaining.toFixed(1) + 's');

    // If the timer has finished, then cancel the interval timer
    if (this.bakeRemaining <= 0) {
      this.async.clearInterval(this.bakeIntervalId);
      this.bakeIntervalId = -1;

      this.onPieBakeComplete();
    }
  }

  onPieBakeComplete() {
    if (this.owner === undefined) {
      return;
    }

    // Once the bake has completed, grant the player the apple pie
    WorldInventory.grantItemToPlayer(
      this.owner,
      this.props.pieSKU,
      this.props.pieAmount,
    );
    this.sendNetworkBroadcastEvent(PurchaseableItemEvents.OnReceiveItem, {
      player: this.owner,
      itemSKU: this.props.pieSKU,
      itemAmount: this.props.pieAmount,
    });

    // Return the text above the oven to the default bake apple pie text (price of the pie)
    this.updateText('Bake Apple Pie: ' + this.props.piePriceAmount + ' Apples');
  }

  // Other methods for managing oven ownership...
}
```

## Setting the oven values

There are four types of currency associated with the Oven:

* **Gem**: Gems are consumed when the player purchases a new oven (10 Gems are required).
* **Oven**: Ovens represent the oven itself. Ovens are granted when the player successfully purchases an oven.
  + We use this item as a currency so that the next time a player is in the world, they have the correct number of ovens. Setting it up as an item means we can also buy and sell ovens from the shop if we wanted to.
* **Apple**: Apples are consumed when a player starts baking a pie (5 Apples are required).
* **Apple Pie**: Pies are granted when a player has started baking a pie, and the allotted amount of time required to bake the pie has passed.

Configure the following properties in the `Oven.ts` script:

* `priceSKU`: Copy the SKU of your gems (e.g. gem\_XXXXXXXX).
* `itemSKU`: The SKU of the oven / item to grant when this oven is not owned (e.g. oven\_XXXXXXXX).
* `itemCurrency`: The name of the currency granted when this oven is not owned (Oven).
* `itemAmount`: The amount of ovens to grant when this is purchased (1).
* `errorTxt`: A reference to a TextGizmo that can be used to display an error if the oven is not able to be purchased or the pie is not able to be baked.
* `ovenMesh`: A reference to the oven. This can be the parent of a group of entities that should be made visible / invisible depending on if the oven is owned or not.
* `piePriceSKU`: The SKU of the currency needed to bake a pie (e.g. apple\_XXXXXXXX).
* `piePriceAmount`: The amount of the currency needed to bake a pie (5).
* `pieSKU`: The SKU of the pie to grant to the player once the pie bake has been completed (e.g. apple\_pie\_XXXXXXXX).
* `pieAmount`: The number of pies to grant to the payer once the pie bake has been completed (1).
* `pieBakeDuration`: The length of time in seconds that the players must wait to bake the pie (15).