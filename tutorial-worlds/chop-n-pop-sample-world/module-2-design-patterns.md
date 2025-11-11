Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/chop-n-pop-sample-world/module-2-design-patterns

# Module 2 - Design Patterns

This module describes some of the design patterns used in this tutorial world, which may provide guidance in how to organize code in your own projects.

## Behaviour & BehaviourFinder

Unity developers will recognize the naming of these scripts. In addition to providing common naming patterns, these two classes solve the disconnect between an entity and the script attached to it.

When an entity with an attached behaviour is spawned in the world, it registers itself with the BehaviourFinder static container. This pattern allows you to query the script, and therefore its classes, associated with any entity through BehaviourFinder.

## Asset configuration at spawn time

Configuring properties on a file asset is time-consuming and inhibits tuning in later phases of game development. To work around this limitation, this sample introduces the NpcTuner and NpcConfigStore classes.

**NpcTuner** is a property sheet that is attached to an empty reference object, enabling quick tuning of any NPC entity that references it.

**NpcConfigStore** is a static container that holds configurations until they are requested by the assets when they spawn.

The NPC assets only require a string property to enable config retrieval at runtime.

**To apply this pattern to any asset**:

- Create a static container / singleton to hold your configurations (see `NpcConfigStore.ts`)
- Create a component with the properties you want to apply to your asset. (see `NpcTuner.ts`)
- In the `start()` method, register it with your static container.
- Query the static container for the asset config in the script’s `start()` (see `ZombieBrain.ts`)

This pattern avoids bringing the asset on the stage to update it, update it, and then delete it.

## Server-Local entity messaging

When an entity must communicate with a core system across the client-server boundary and expects a response, one-way network messaging becomes a limitation. In this world, this issue is solved by using two network messages.

**Example**:

When the axe applies damage to enemies:

- The axe entity broadcasts the monstersInRange network message identifying itself and its range.
- The EnemyWaveManager listens for that message broadcast and evaluates what monsters are in range given the entity’s position and range.
- The EnemyWaveManager sends a monstersInRangeResponse network message directly to the querying axe entity.
- The axe listens for that message and evaluates what happens to the monsters in range.

## Children as elements

When you need a configurable list of points in space, create an empty object with a script that enumerates its children, which are also empty objects.

In this tutorial world, this technique is used to create spawn points for monsters and loot. See the **ZombieSpawnPoints node** in the Hierarchy panel.

## Parent-referencing scripts

Sometimes, the “children as elements” pattern yields unexpected results, such as elements moving as a single block depending on physics settings.

In this case, we instead reference the parent through the child. In the child, we add a property for the parent, and add a registration method on the parent itself. Have the element register itself with the parent on its `start()` method.

## Pre-spawned asset pools

When assets cannot be spawned dynamically or it is not desirable to do so, you can hide a number of statically created instances (drag & drop) in an unused part of the world, then move them in and out as if they were spawned and deleted.

During development of this tutorial world, it became evident that the ammo crates could not be allocated at runtime. So, we created a pooled version of the loot table using pooled pre-spawned assets. This method works well when the required number of instances is well-known (e.g. one per player) or is fairly small in number.

**Note**: These assets still occupy runtime memory and may exhibit behaviors if they have scripts attached to them. In this world, ammunition does nothing until it is attached to a gun, and a HUD is only effective when it is attached to a player’s avatar.

For a more detailed explanation of pre-spawned versus spawned assets, you can explore the Spawning and Pooling tutorial. For more information, see [Spawning and Pooling](/hw-docs/tutorial-worlds/spawning-and-pooling-in-typescript/module-1-setup).