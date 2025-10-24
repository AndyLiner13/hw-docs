# Module 2 - Design Patterns
...
## Behaviour & BehaviourFinder

 Unity developers will recognize the naming of these scripts. In addition to
providing common naming patterns, these two classes solve the disconnect between an
entity and the script attached to it. When an entity with an attached behaviour is spawned in the world, it registers
itself with the BehaviourFinder static container. This pattern allows you to
query the script, and therefore its classes, associated with any entity through
BehaviourFinder.  
...
...
# Module 2 - Design Patterns
...
## Asset configuration at spawn time

 Configuring properties on a file asset is time-consuming and inhibits tuning in
later phases of game development. To work around this limitation, this sample
introduces the NpcTuner and NpcConfigStore classes. NpcTuner is a property sheet that is attached to an empty reference object, enabling
quick tuning of any NPC entity that references it. NpcConfigStore is a static container that holds configurations until they are requested by the
assets when they spawn. The NPC assets only require a string property to enable config retrieval at
runtime. To apply this pattern to any asset:
1. Create a static container / singleton to hold your configurations (see `NpcConfigStore.ts`)
2. Create a component with the properties you want to apply to your asset. (see `NpcTuner.ts`)
3. In the `start()` method, register it with your static container.
...
...
# Module 2 - Design Patterns
...
## Asset configuration at spawn time
...
4. Query the static container for the asset config in the script’s `start()` (see `ZombieBrain.ts`)

 This pattern avoids bringing the asset on the stage to update it, update it, and
then delete it.  
...
...
# Module 2 - Design Patterns
...
## Server-Local entity messaging

 When an entity must communicate with a core system across the client-server
boundary and expects a response, one-way network messaging becomes a limitation. In
this world, this issue is solved by using two network messages. Example: When the axe applies damage to enemies:
1. The axe entity broadcasts the monstersInRange network message identifying itself
and its range.
2. The EnemyWaveManager listens for that message broadcast and evaluates what
monsters are in range given the entity’s position and range.
3. The EnemyWaveManager sends a monstersInRangeResponse network message directly to
the querying axe entity.
4. The axe listens for that message and evaluates what happens to the monsters in
range.

  
...
...
# Module 2 - Design Patterns
...
## Children as elements

 When you need a configurable list of points in space, create an empty object
with a script that enumerates its children, which are also empty objects. In this tutorial world, this technique is used to create spawn points for
monsters and loot. See the ZombieSpawnPoints node in the Hierarchy panel.  
## Parent-referencing scripts

 Sometimes, the “children as elements” pattern yields unexpected results, such as
elements moving as a single block depending on physics settings. In this case, we instead reference the parent through the child. In the child,
we add a property for the parent, and add a registration method on the parent
itself. Have the element register itself with the parent on its `start()` method.  
...
...
# Module 2 - Design Patterns
...
## Pre-spawned asset pools

 When assets cannot be spawned dynamically or it is not desirable to do so, you
can hide a number of statically created instances (drag & drop) in an unused part
of the world, then move them in and out as if they were spawned and deleted. During development of this tutorial world, it became evident that the ammo
crates could not be allocated at runtime. So, we created a pooled version of the loot
table using pooled pre-spawned assets. This method works well when the required
number of instances is well-known (e.g. one per player) or is fairly small in
number. Note: These assets still occupy runtime memory and may exhibit behaviors if they
have scripts attached to them. In this world, ammunition does nothing until it is
attached to a gun, and a HUD is only effective when it is attached to a player’s
avatar. For a more detailed explanation of pre-spawned versus spawned assets, you can
...
...
# Module 2 - Design Patterns
...
## Pre-spawned asset pools
...
explore the Spawning and Pooling tutorial. For more information, see [Spawning and Pooling](https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/spawning-and-pooling-in-typescript/module-1-setup).    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
...
...
# Module 2 - Design Patterns
...
## Pre-spawned asset pools
...
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
...
...
# Module 2 - Design Patterns
...
## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Ftutorial-worlds%2Fchop-n-pop-sample-world%2Fmodule-2-design-patterns%2F)
...
# Module 2 - Design Patterns

 This module describes some of the design patterns used in this tutorial world,
which may provide guidance in how to organize code in your own projects.  
## Behaviour & BehaviourFinder
...
## Asset configuration at spawn time
...
## Server-Local entity messaging
...
## Children as elements
...
## Parent-referencing scripts
...
## Pre-spawned asset pools
...
## Additional Links
...
      Learn
# Module 2 - Design Patterns
...
