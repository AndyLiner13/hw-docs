Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/genre-samples/chop-n-pop-sample-world/module-11-loot-system

# Module 11 - Loot System

The loot system is used for managing items that can be collected in the world.

* **Loot placement at world startup**: Some instances of loot are present in the world at startup, such as the ammo clips by the front gate of the graveyard.
* **Loot drops at runtime**: During gameplay, when enemies are defeated, loot items can be spawned at the same location as the enemy to reward the player.

In Chop ‘N Pop: Graveyard Bash, there are two types of loot:

* **Ammo**: The gun weapon uses a finite number of shots in each clip. Part of the gameplay is to find and pick up ammo clips and then to reload the gun when it is empty.
* **Potion**: Monster attacks do damage to a player’s hit points. Finding and collecting a potion raises a player’s hit points back toward normal.

<details>
<summary>Image of loot examples</summary>

<p></p>

[Image of loot examples](../../../image_data/1835e6fa6f87c55cff445f30c3339f507f6e8a0e8bb0b097a16c7db43f191d4e.md)

### Overview
This image depicts a scene from a video game or animated environment. It features a character standing in front of two wooden chests, with magical elements floating above them. The setting appears to be a dimly lit, possibly underground or dungeon-like area, with a dark, eerie atmosphere.

### Key Elements
- **Character**: A bald figure wearing a green t-shirt and black pants stands facing away from the viewer. The character has a simple, cartoonish design.
- **Chests**: Two large wooden chests are positioned side by side. They appear sturdy and are made of planks with metal latches on top.
- **Floating Objects**: Above the chests, there are glowing, magical-looking objects. These include a potion bottle with a swirling green liquid, a small chest, and another chest with a glowing star on it.
- **Background**: The background consists of stone walls and a dark, ominous sky with purple hues and silhouettes of tree branches. The ground is uneven and appears to be dirt or mud.

### Visual Flow / Relationships
The most prominent visual elements are the floating magical objects above the chests. The character is positioned centrally but slightly towards the bottom of the frame, looking at the chests. The chests are symmetrical and evenly spaced apart, creating a balanced composition. The magical objects float above the chests, suggesting a connection or interaction between the character and these items.

</details>

<p></p>



The loot system manages these sets of physical entities in the world as separate pools of objects and references. The system must manage:

* **Placement of entities**: at startup, all instances of each loot type are stacked together outside of the playing area. These entities are moved via script to designated locations in the Graveyard.
  + Loot is moved to the locations of the reference objects underneath the AmmoSpawnPoints node.
  + Loot items could not be spawned in. For more information, see [Module 2 - Design Patterns](Module%202%20-%20Design%20Patterns.md).
* **Animation**: Each loot type entity has an associated glowing or sparkling animation to draw the player’s eye to it.
* **Spawning**: Loot items can be spawned during gameplay to reward the player for defeating enemies.
* **Pickup**: When the player makes contact with a loot item, its benefits are added to the player’s personal data, and the instance is moved back off the playing area, indicating that the loot has been consumed.
  + **Ammo**: When an ammo loot item is collected, a new clip is added to the player’s inventory. Every 10 shots, the clip must be reloaded.
  + **Potion**: When a potion loot item is collected, hit points are increased immediately, up to the maximum hit points for a player.

## System Components

**System scripts**: The LootSystemInstance reference object hosts `LootSystem.ts`.

The LootTableInstance reference object hosts `LootTableAssets.ts`, which defines the loot types in the system.

**Loot types**: The loot system manages two types of loot: ammo and potions. Each loot type has the following components, which are shown below for ammo:

* AmmoLootPool reference object hosts `ObjectPool.ts`, which is the script instance that executes for the ammo loot pool.
* AmmoLootGroup reference object hosts all of the ammo objects. Each ammo object:
  + AmmoLoot reference object hosts `PoolLootItem.ts`
    - AmmoLoot model
    - AmmoParticleTypeFX vfx
    - AmmoPickup sound

**Loot spawn points**:

* In Chop ‘N Pop: Graveyard Bash, ammo loot items are selected and dropped at the AmmoSpawnPoints locations at the beginning of the game.
  + This node hosts the `WorldAmmoSpawner.ts` script.
* Under this node are a set of reference objects, which are used as spawn points for loot in the world.

### Loot at world startup

**LootSystem.ts**:

Creates an instance of the `LootSystem.ts`.

| Property | Description |
| --- | --- |
| lootMinimumHeight | When loot is dropped, its placement is based on the position of the dropping entity, including its Y-height. This property defines the minimum height where loot can be dropped; if Y-height is less than this value, lootMinimumHeight is used. |

Script dependencies:

* `Behaviour.ts`
* `ILootTable.ts` - provides an interface for dropping and clearing items from the loot table. This interface connects to functions defined in `LootTableAssets.ts`.

**WorldAmmoSpawner.ts**

This script is attached to the AmmoSpawnPoints node. At startup, this script populates instances of loot from the Loot Table to the locations of the reference objects beneath the AmmoSpawnPoints node.

| Property | Description |
| --- | --- |
| lootTable | A reference to the LootTableInstance reference object, which hosts the `LootSystem.ts` script. |

Script dependencies:

* `Behaviour.ts`
* `Events.ts`
* `LootSystem.ts`
* `ILootTable.ts`

**LootTablePool.ts**:

This script is invoked to assign loot items already present in the world at startup into an object pool for placement at the locations of the reference objects under AmmoSpawnPoints.

**PoolLootItem.ts**:

Attached to each loot item placed in the world, this script adds the item to the pool of loot items and manages allocation and freeing of the item from the pool.

Script dependencies:

* `Behaviour.ts`
* `ObjectPool.ts`
* `LootItem.ts` - See below.

**LootItem.ts**:

This script defines behaviors for loot items in the world. When a loot item is present in the world, a particle effect is played to draw the visitor’s eye to it. Additionally, there is a magnetic effect applied to the loot item and the player when the player draws within the magnetic radius of the item; this magnetism pulls the loot item to the player, so that the player does not have to manage a mechanic of collecting items.

When an item is collected:

* It is cleared from the loot table.
* A network event is sent to indicate that the item of specified type has been collected by the named player.

### Loot at runtime

These scripts and assets pertain to spawning loot items during gameplay. When enemies are defeated, loot items may or may not be dropped, based on odds in the loot table in the Script properties.

**LootTableAssets**:

This script defines the table of loot item types and their odds of being dropped, as well as the functions that can be applied to loot items at runtime (drop, clear, delete from world), which are referenced in the iLootTable interface:

* `shouldDropItem()`: returns TRUE if a random number is greater than the value of the noItemOdds property, indicating that an item should be dropped.
* `dropRandomItem()`: When invoked, function calculates a random number (0 to 1) and uses that to choose items from the loot table defined in the script properties. When a match is found, it is spawned at the location passed into the function.
* `clearItem()`: Removes the spawned item from the LootDrops list, which identifies loot dropped in the world and deletes the item from the world.
* `clearItems()`: Removes all spawned loot from the world.

In this script’s properties you can specify the types of loot and their odds (out of 1.00) of being dropped when an enemy is defeated.

| Property | Description |
| --- | --- |
| noItemOdds | You can use this property to specify the odds that no item is dropped when enemies are defeated. |
| Item1 | Select the asset that represents the first loot item type. |
| Item1Odds | Select the odds that a loot item of Item 1 type is selected.   **Note**: The sum of all odds are normalized to 1.0. The values should be consistently normalized to each other (e.g. Do not use both 0.25 and 25 to indicate 25%). |

Script dependencies:

* `AssetLootItem.ts` - extends LootItem for items that are spawned from assets
  + `LootItem.ts` - an indirect dependency that defines behaviors for all loot items (placed or spawned) in the world.
* `Behaviour.ts`
* `ILootTable.ts` - provides an interface for dropping and clearing items from the loot table. This interface connects to functions defined in `LootTableAssets.ts`.

## How to Deploy

Scripts and their related script dependencies and assets must be deployed into your world. For more information, see “Deploying Systems” in [Module 1 - Setup](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-1-setup).

## How to Use

To use the loot system, you must do the following:

- Deploy all system scripts.
- **Spawned assets**: If you are spawning in assets, create a LootTableInstance reference object**.** The LootTableInstance reference object hosts `LootTableAssets.ts`, which defines the loot types in the system. Specify the loot types in the script.
- **Non-spawned assets**: Create group of loot entities**.** For assets that are not spawned, in the Hierarchy panel, create a reference object for the Group of assets.
- Create and deploy a loot item type, which must include:
  - A root reference object.
    - Attach your version of `PoolLootItem.ts` to the loot item type:
    - Specify script parameters. For the parentPool parameter, select the root reference object you just created.
  - Sub-objects:
    - A model
    - A highlight particle FX
    - A pickup sound
- This loot type must be stored outside of the game area.
- Duplicate this item in the same location for as many instances of it as are needed in your world.
- **Create system nodes**: In the equivalent of WorldInstances node in you world, create nodes for the following (attached script):
  - LootSystemInstance (`LootSystem.ts`)
  - LootTableInstance (`LootAssetTable.ts`)
  - World
- For each of those scripts, configure the script properties on them.
  - For LootTableInstance, the Group node for your loot items should be selected.

## Modifications

### Modify properties

You can modify the properties on the loot items to change some behaviors of the assets in the world. These properties do not change the gameplay effects of collecting these loot items.

### Add or remove loot entities

You can balance your version of the game by adding or removing instances of loot entities in each of the Group nodes. For example, if the monsters have more hit points, you may need to add more ammo loot entities.

### Add new loot type

To add a new loot type:

- Create a loot asset composed of:
  - Ref object with `PoolLootItem.ts` attached.
  - Model
  - ParticleFX (optional)
  - Sound (optional)
- Add references to it in the LootTableInstance script properties, modifying odds for it to occur.
- If you want instances of it to be spawned at runtime, it must be added to the `LootTableAssets.ts` table.
- In `PlayerManager.ts`, you must add a reference and behaviors to `handleLootPickup()`.

## Summary

In this module, the system for managing game loot has been outlined. In Chop ‘N Pop: Graveyard Bash, there are two types of loot supported by this system, which enables you to see how variation in loot types can be managed. You can deploy this system into your world, adding these assets to it as needed, to build your own loot management system.