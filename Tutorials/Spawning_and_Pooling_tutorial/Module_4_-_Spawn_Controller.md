# Module 4 - Spawn Controller

The Spawn Controller station functionally works in a similar manner to the Object Pooling station. However, instead of spawning in assets at startup to an offscreen location, they are loaded into an array of `SpawnController` containers. The entities are now part of the world's runtime memory but do not exist as entities in the world yet. When needed, they can be quickly spawned into the world experience. The `SpawnController` container object features the following methods:
|  |
|  |
| initialize | This is not a formal method. You create an array of SpawnController container objects. |
| load() | Loads a specified asset into the SpawnController object, which means it's now available in memory. |
| spawn() | Makes the specified SpawnController object available in the world. Note: If you have not yet performed the load() operation, spawn() performs load() as well. However, this combination takes a much longer time. |
| unload() | Removes the specified Spawn Controller object from the world and from runtime memory. The Spawn Controller object can be referenced and can be reused again through the load() method. |
| dispose() | Destroys the SpawnController object. |
| pause() | Interrupts the spawning process, returning a Promise indicating when the operation completes or fails. |

## How to use

• You can explore this station to see how quickly you can spawn in and despawn out 100 entities. The Spawn Controller station should be the most efficient station in terms of performance.
• You can use these scripts as the basis of your own Spawn Controller system. Make sure to maintain the Pool properly.

## SpawnControllerManager.ts

This script is responsible for managing the SpawnControllers, including load, spawning, unloading, and disposing of the `SpawnController` objects. In parallel to the array of `SpawnController` objects, the script maintains a Pool of entities that have been moved into the world. So, when the `spawn()` method of a `SpawnController` entity is executed, the entity is also added to the Pool of entities for tracking purposes. Also defined here are the two events to spawn and despawn the entities, which are triggered by entering and exiting the trigger zone, respectively. This script features two script properties:
• spawnCount: Number of instances of the asset to spawn in. Max of 500.
• assetTopawn: Selected asset to spawn in.

This script features data validation for the above script property values.

### Script notes

• In the world, this script is attached to an empty reference object.
• `spawnControllerPool`: Pool of SpawnControllers
• `spawnControllerList`: List of SpawnController entities now in the world.
• `preStart()` executes the following:
  • Initialize the `SpawnControllerPool` and `spawnControllerList`
  • `load()` method
  • Set up listeners for events fired from a player entering or exiting the trigger
• `start()` method is unused
• `dispose()` method removes the entities from the `SpawnControllerPool` and `SpawnControllerList`. Then, those objects are cleared.

### spawn() method

The `spawn()` method is wrapped in a then/catch promise to address success and failure states on the method. The `SpawnController` object provides two enumerated properties that you can query for the status of spawning:
• currentState: current state of spawning is returned as a code, which is an index value into the enumerated list of text values. Code value of `0` means that all is well.
• spawnError: in the `catch()` method, you can see how the spawnError value is used to query the spawnError enum for the text value.

## SpawnControllerTrigger.ts

This script is attached to the trigger zone entity for the Spawn Controller area. It configures two listeners, which issue specific events back to the target, which is the SpawnControllerManager empty object. The script associated with that object (`SpawnControllerManager.ts`) receives the events and processes accordingly.
|  |
|  |
| onPlayerEnterTrigger | objPoolSpawnControllerSpawnEvent | SpawnControllerManager.ts executes spawn() method on each SpawnController instance, making the entity appear in the world at the trigger zone location. |
| onPlayerExitTrigger | objPoolSpawnControllerDespawnEvent | SpawnControllerManager.ts executes the unload() method on each SpawnController instance, removing it from the world and runtime memory. |

### Script notes

• Script property (target) should be defined to be the empty object to which the Manager script is attached.

## Checkpoint

This station operates like the other two: Press the Play button and enter the world.
• If logging is enabled, observe the `SpawnController` messages in the console.
• When all entities have been loaded, enter the trigger. Then, exit.
• You can repeat the process, which depending on system load, may be quick.

The `SpawnControllerManager.ts` script is a self-contained manager for spawning in assets. Note that:
• It is set up to manage a single asset. It could be modified to handle any set of assets.
• The script spawns and despawns all instances of the asset at once, so that you can observe performance impacts. Incremental `spawn()` and `unload()` methods would require a modified approach.
