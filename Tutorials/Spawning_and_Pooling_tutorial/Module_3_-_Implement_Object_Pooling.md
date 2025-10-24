# Module 3 - Implement Object Pooling

In the previous module, you learned how to spawn objects and de-spawn them when they are no longer needed. In this tutorial, we introduce object pooling, where upon world start, players can observe the following behaviors:
• On world start, objects are added into the world to an offscreen pool, where they can be accessed and moved into the gameplay area.
  • The object pool is executed as part of the `preStart()` method. Added as part of TypeScript v2.0.0, the `preStart()` method executes before any `start()` method, which makes `preStart()` a good location for any setup or initialization work that needs to be done.
  • The object pool becomes the inventory of assets that can be used as needed during gameplay.
• Upon stepping into the trigger zone, we spawn 100 objects into the spawn area by pulling them in from the object pool.
• Objects spawned from the pool appear faster and with less lag than in the SimpleSpawn approach.
  • Since objects have been pre-spawned into the pool, we are simply updating the visibility and position of the assets into the spawn area.
  • Object pooling reduces CPU load during gameplay and improves overall gameplay performance.
• When the player steps out of the trigger zone, we remove all of the spawned objects.
  • Objects are made invisible and are repositioned back into the object pooling area.
  • Nothing is destroyed.
• You can restart the experience again by stepping into the trigger zone.

## PoolUtils

To assist in building the tutorial, we are providing a reusable PoolUtils class where the various common object pooling functions are implemented. This file includes the following functions in the Pool class:
|  |
|  |
| hasAvailable() | Returns true if the pool has available entities. |
| hasActive() | Returns true if the pool has entities that are active. |
| isAvailable() | Returns true if a specified entity is available. |
| getNextAvailable() | Returns the next available entity from the pool. |
| getRandomAvailable() | Returns a random available entity from the pool. |
| getRandomActive() | Returns a random active entity from the pool. |
| addToPool() | Adds a specified entity to the pool. |
| removeFromPool() | Removes a specified entity from the pool. |
| resetAvailability() | Resets availability of all assets in the pool. |

Some of the above methods are not used in this example but may be useful elsewhere. Feel free to reuse the `PoolUtils.ts` file in your project.

## ObjectPooling Script

The `ObjectPooling.ts` script does the following:
1. In `preStart()`, we pre-populate our object pool with a list of objects using the `prePopulateObjectPool()` method.
2. Similar to SimpleSpawn, we define two trigger events and their listeners to spawn or despawn objects from our object pool.
  1. When receiving `objPoolSpawnTriggerEvent`, we get the next available object from our object pool, update its visibility and position into the desired spawn location. This step also adds the entity to the `objList[]` array and removes it from the `objectPool[]` array.
  2. When receiving `objPoolDespawnTriggerEvent`, we update the visibility and position of the object and reset the object availability on our Object Pool, so that it can be reused later. This step also adds the entity to the `objectPool[]` array and removes it from the `objList[]` array.

## Attach ObjectPooling Script

Similar to the simple object spawning module, this script is also attached to an empty object, and is executed when the world is started.

## Create ObjectPoolingTrigger Script

This trigger script is very similar to the `SimpleSpawnTrigger.ts` script, where we listen for `OnPlayerEnterTrigger` and `OnPlayerExitTrigger` events. When they are emitted, this script triggers the corresponding object pool spawn/despawn event at the object spawn location.

## Checkpoint

Run the project and observe object pooling behavior.
• Click the World Sim On button to toggle off your world simulation. Once you have clicked this button, the name will change to World Sim Off.
• Click World Sim Off to start your world simulation and launch preStart() and start() methods of your scripts, which pre-populates the object pool, among other things. Note: Clicking World Sim Off will toggle the button back to World Sim On.
• Enter the world.
• Walk up to the Object Pooling trigger zone. Notice how quickly entities are spawned into the location from the object pool.
  • These assets are simply pulled into this location from the object pool, which was created as soon as your pressed the Play button.
• Exit the trigger zone. Assets are quickly relocated back to the object pool.

You now have a working world that demonstrates object pooling behavior.
• In your own world, you can replace the trigger logic with other supported triggers in Meta Horizon Worlds. See the documentation for details.
• The `objList[]` array is important to keep track of the spawned objects, so that you can remove/delete the unused objects and free up resources when necessary.
• Similarly, the `ObjectPool[]` array needs to be maintained to determine currently available entities in the object pool.
• In a more dynamic world, this list of entities must be maintained throughout the gameplay experience.
