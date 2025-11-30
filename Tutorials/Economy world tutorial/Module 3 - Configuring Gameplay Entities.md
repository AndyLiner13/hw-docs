Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/economy-world-tutorial/module-3-configuring-gameplay

# Module 3 - Configuring Gameplay Entities

Requirements

 You will need to be a member of MHCP and have accepted the monetization Terms Of Service in the Developer Dashboard in order to create in-world items and currency. Find out more about monetization [here](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/monetization/creator-monetization-partner-program).

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

![Create in-world item](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495696251_715823344288953_5507441691893268300_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Gz00TOooraYQ7kNvwHCKwp-&_nc_oc=AdmLxMfg8HOiySmqL_J3hSGVbtJlEc9PqXi1i-Himo1J3209ggwbXwxJD2UJs1vXPH4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_Afhnbx7Gzr388K78la3hcEygR2tt5SztDUuGWgmFCSqEug&oe=694632B3)

- Hover over the “Apple” line item

![Hover the apple line item](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495301757_715823294288958_8858355950960058773_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tSFUUyp_EjgQ7kNvwE4LTZ9&_nc_oc=Adl5cjY2ojxn92mX6SB3CfKjGxJMWRtk6OwSUkgOdKPAA16YirXU5Y2oh5L7mw0Vfvk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfhCjU35iqglQntj4vxRXgxdXfrB5Etna8TxoPXL0AFnfQ&oe=69465343)

- Click the **Copy SKU** button

![Copy the SKU](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/496254883_715823330955621_3034827105264845419_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=yfP3xbkhHW4Q7kNvwHJa4lU&_nc_oc=Adkj9YhMsDVpj25it3dwcryZDYO7Dg2y-Ntsm4pjSnnSdHRutf7SZpwo48Xbm4kXKYY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfjoTpa2f1DTEC0KoUhDGzXjyjXgLQMAsQcKw3I_x2Kkmg&oe=69464DFA)

- Close the **Commerce** panel and **Systems** menu; then select an apple spawner in the world

![Close the commerce panel](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/495725723_715823350955619_3017104055955316189_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=PmKdqHMmQjgQ7kNvwH-Vjpo&_nc_oc=AdnniLLbTaxoq8VmF8YQJVmalRFrfd0NeudKWKARVDSMpWGN35BQGEZM2YBoBnshu18&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfgXsXWoWKdTq-jBW_GcQkusck_moTnD66SEfBr_-7nZlA&oe=69465C48)

- Paste (CTRL+V) the Apple SKU into the `lootSKU` property

![Paste the Apple SKU](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495605507_715823297622291_5514369924114132716_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=YL_E_hkYxYoQ7kNvwFZ8Nsu&_nc_oc=AdkHDV-_q3zyDZ3gP-II0qqPLvRVQToRLd0tiAYXngSVivCU99lCWASwHEbmXZWosao&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfjOKqUOycBoEjv5n85Ez-JNNSnWZexa79oXR3OuqwBNRQ&oe=69464970)

- Repeat this for each of the apple spawners in the world

Now, when a player enters the apple spawner trigger while it is active, an in-world apple item is added to their world inventory.

## Configure the player HUD

To determine if players are receiving apples when they collect them, we will need to configure the Player HUDs so that it shows this information. In this world, there are 4x Custom UI gizmos located above the world with the PlayerHud script attached. These are named PlayerHud1, PlayerHud2, PlayerHud3, and PlayerHud4.

![Player HUDs](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/495841783_715823300955624_1480702978290755630_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=qDlVyzQkS8kQ7kNvwEzaPtA&_nc_oc=Adlq9yeiemDIY-nlqHFxjIKwYinL9xXablWD_FnKTOUIOEAwxPxOggHgcAqewxIJNd4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfhxVEp-ju3qzmWXbcQi_LpUVYhWDe6Cmu8SXmrJ29DHbQ&oe=69464317)

Each of these is set to be owned by a player when they enter the world. This is done by the PlayerHudManager script, which is attached to the PlayerHudManager entity.

Configure each custom UI gizmo with the PlayerHud script attached to include the currencyName, currencySKU, and currencyTexture for Apples, Gems, and Pies respectively. Use the same method for copying SKUs from the **Systems > Commerce** panel that you used for setting the loot SKU.

When finished, each CustomUI gizmo with the PlayerHud should show the following properties (with minor differences in the SKUs).

![Player HUD configuration](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/496532826_715823387622282_5131601984334569618_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=PQj7T7MnHuMQ7kNvwGKd2T0&_nc_oc=AdkK2lK9jdmuM7JWS9Qm13qz7-gY4xnddRC5LiGMM9xOihkJN0-fJo8GhNwIkBFGoWs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_j7K5MyJhxqGdabHwB9QRw&oh=00_AfgPfQ2_2OGXfDAs4PrEMNbCC9vpMDSDwZP9wYS_trU56A&oe=6946411E)

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