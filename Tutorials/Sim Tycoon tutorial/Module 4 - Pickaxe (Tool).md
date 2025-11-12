Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/sim-tycoon-tutorial/module-4-pickaxe

Learn

# Module 4 - Pickaxe (Tool)

The pickaxe is the primary grabbable tool used by players to mine resource nodes and extract materials. It represents the core interaction mechanism in the Sim Tycoon gameplay loop.

## System components

### Pickaxe.ts

This script is attached to the pickaxe grabbable in the world. It controls swinging, mining, collisions, and resource collection.

### Pickaxe properties

**name** – The string identifier of the tool. The name is used to track the player’s equipped tools and resource interactions.
**toolType** – Signature of the tool type. Resource nodes validate this type before extraction is allowed.
**primaryResource** – The resource type name that the pickaxe is most effective against.
**primaryMult** – Multiplier applied when mining the correct (matching) resource type.
**secondaryMult** – Multiplier applied when mining a non-matching resource type.

### Main functions

* **`start()`** – Initializes pickaxe behavior, binds swing and collision events, and sets up animations and sounds.
* **`onCollision()`** – Handles interactions with `ResourceNode` and `GlobalResourceNode`. This function calculates extraction progress, applies multipliers, plays visual and sound effects, and updates UI (health bar, backpack).
* **`swapGrabbable()`** – Allows swapping the pickaxe with other grabbable items when tapping the Swap button.

## How to deploy

- Add `Pickaxe.ts` to your project.
- Create a pickaxe grabbable entity using your 3D model.
- Attach `Pickaxe.ts` to the entity.
- Set properties if you want custom resource types or multipliers.
  - In the properties, set ‘Collision Events From’ to ‘Objects Tagged’
  - Set object tag to ‘RESOURCE’
- Make sure resource nodes use `ResourceNode.ts` or `GlobalResourceNode.ts`
- If you are adding a new tool, make sure to add it to the save game data (see below for more information).

## How to use

When equipped, the player can:

* **Swing the pickaxe** –  Pressing the trigger initiates a swing. Collisions with resource nodes trigger resource extraction.
* **Mine resources** – Matching resource types yield higher progress and matching sound effects.
* **Swap tools** – Tap the Swap button to swap the pickaxe with other grabbable tools in your inventory.

HUD elements update dynamically as mining progresses.

## Modifications

* Change multipliers for more or less productive mining.
* Change the tool model to create a different looking extraction tool.
* Add new animations for different swing styles.
* Create different pickaxe types for unique resource matches.
* Customize sounds and effects to give each tool its own feel.