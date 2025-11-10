Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/spawning-and-pooling-in-typescript/module-4-spawn-controller

# Module 4 - Spawn Controller

The Spawn Controller station functionally works in a similar manner to the Object Pooling station. However, instead of spawning in assets at startup to an offscreen location, they are loaded into an array of `SpawnController` containers. The entities are now part of the world’s runtime memory but do not exist as entities in the world yet. When needed, they can be quickly spawned into the world experience.

The `SpawnController` container object features the following methods:

| Method | Description |
| --- | --- |
| initialize | This is not a formal method. You create an array of `SpawnController` container objects. |
| `load()` | Loads a specified asset into the `SpawnController` object, which means it’s now available in memory. |
| `spawn()` | Makes the specified `SpawnController` object available in the world. **Note**: If you have not yet performed the `load()` operation, `spawn()` performs `load()` as well. However, this combination takes a much longer time. |
| `unload()` | Removes the specified Spawn Controller object from the world and from runtime memory. The Spawn Controller object can be referenced and can be reused again through the `load()` method. |
| `dispose()` | Destroys the `SpawnController` object. |
| `pause()` | Interrupts the spawning process, returning a Promise indicating when the operation completes or fails. |

## How to use

* You can explore this station to see how quickly you can spawn in and despawn out 100 entities. The Spawn Controller station should be the most efficient station in terms of performance.
* You can use these scripts as the basis of your own Spawn Controller system. Make sure to maintain the Pool properly.

## SpawnControllerManager.ts

This script is responsible for managing the SpawnControllers, including load, spawning, unloading, and disposing of the `SpawnController` objects.

In parallel to the array of `SpawnController` objects, the script maintains a Pool of entities that have been moved into the world. So, when the `spawn()` method of a `SpawnController` entity is executed, the entity is also added to the Pool of entities for tracking purposes.

Also defined here are the two events to spawn and despawn the entities, which are triggered by entering and exiting the trigger zone, respectively.

This script features two script properties:

* **spawnCount**: Number of instances of the asset to spawn in. Max of 500.
* **assetTopawn**: Selected asset to spawn in.

This script features data validation for the above script property values.

```vs
import * as hz from 'horizon/core';
import { Pool } from 'PoolUtils';

export const objPoolSpawnControllerSpawnEvent = new hz.LocalEvent<{position: hz.Vec3}>('objPoolSpawnControllerSpawnEvent');
export const objPoolSpawnControllerDespawnEvent = new hz.LocalEvent<{}>('objPoolSpawnControllerDespawnEvent');

const ASSET_COUNT_MAX: number = 500; // This value is used here as a safeguard for the maximum number of permitted assets to be loaded in SpawnControllers. You can change it to another value if preferred.
const ASSET_ROTATION_SC:hz.Quaternion = hz.Quaternion.fromEuler(new hz.Vec3(-90, 0, 90));

export const DISPLAY_CONSOLE_SPAWNCONTROLLER: Boolean = true;

class SpawnControllerManager extends hz.Component<typeof SpawnControllerManager> {
  static propsDefinition = {
    spawnCount: {type: hz.PropTypes.Number, default:1},
    assetToSpawn: {type: hz.PropTypes.Asset},
  };

  // spawnControllerPool array holds the set of SpawnController objects, which are loaded in preStart() with instances of the asset.
  spawnControllerPool: Pool<hz.SpawnController> = new Pool<hz.SpawnController>();

  // spawnControllerList is used to keep track of objects we have taken out from the pool for usage.
  spawnControllerList: hz.SpawnController[] = new Array<hz.SpawnController>();

  preStart() {
    let object_pool_size_sc: number = this.props.spawnCount;
    if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
      console.log("SpawnController: Load SpawnControllers in SpawnController staging");
    };

    // Data validation checks
    if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
      console.log("SpawnController: Init SpawnControllers");
    };
    if ((this.props.spawnCount) && (this.props.assetToSpawn)) {
      if ((this.props.spawnCount < 1) || (this.props.spawnCount > ASSET_COUNT_MAX)) { // spawnCount must be greater than 0 and less than the ASSET_COUNT_MAX safeguard.
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
          console.log("SpawnController: spawnCount must be greater than 0 and less than " + ASSET_COUNT_MAX.toString() + ".");
        };
        return;
      } else {
        // init: load assets into the Pool and into the world
        let thisScale: hz.Vec3 = this.entity.scale.get();
        for (let i = 0; i < object_pool_size_sc; i++) {
          let thisPos: hz.Vec3 = this.getRandomSpawnPosition(this.entity.position.get());
          let sc: hz.SpawnController = new hz.SpawnController(this.props.assetToSpawn, thisPos, ASSET_ROTATION_SC, thisScale);
          this.spawnControllerPool.addToPool(sc);
          /*
            The load() method loads the SpawnController assets into runtime memory, so that they can be quickly accessed as needed. Doing this in the preStart() method
            means that the assets are loaded before players enter the world.
            You can call spawn() without load() first. spawn() performs the load() operation if it has not been done yet. However, there may be a disruptive
            performance hit as the assets are being loaded at runtime.
          */
          sc.load().then(() => {
            if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
              console.log("Loaded SpawnController #" + i.toString());
            };
            }).catch(() => {
              if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
                console.error("SpawnController: Error loading SpawnController #" + i.toString() + "!");
            };
            });
          };
        this.spawnControllerPool.resetAvailability();
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
          console.log("SpawnController: spawnControllerPool loaded with " + (object_pool_size_sc).toString() + " assets.");
        };
      }
    } else { // one or more of the script properties has not been specified.
      if (!this.props.assetToSpawn) {
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
          console.error("SpawnController: assetToSpawn is not specified. Unable to prepopulate object pool");
        };
      } else if (!this.props.spawnCount) {
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
          console.error("SpawnController: spawnCount is not specified correctly. Unable to prepopulate object pool");
        };
      }
      return;
    }

    // listener for the trigger event sent when the player enters the spawning trigger volume. When triggered, spawn assets.
    this.connectLocalEvent(this.entity, objPoolSpawnControllerSpawnEvent, (data: {position: hz.Vec3})=>{
      if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
        console.log('SpawnController: objPoolSpawnTriggerEvent called');
      };
      for(let i = 0; i < object_pool_size_sc; i++) {
        const obj = this.spawnControllerPool.getNextAvailable();
        if(obj == null) return;
        /*
          Following call spawns in the entity obj, which has already been loaded into memory.
          spawnError and spawnState are enums. You can check the different enums in the code:
            hz.SpawnError.None,
            hz.SpawnError.ExceedsCapacity,
            hz.SpawnError.Cancelled,
            hz.SpawnError.InvalidAsset,
            hz.SpawnError.UnauthorizedContent,
            hz.SpawnError.InvalidParams,
            hz.SpawnError.Unknown
          then/catch blocks are used to gate actions on success (then) and to log spawn errors (catch).
        */
        obj.spawn().then(() => {
          if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
            console.log("SpawnController: object #" + i.toString() + " spawned with state: " + hz.SpawnState[obj.currentState.get()]);
          };
        }).catch(() => {
          if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
            console.error("SpawnController: Error spawning object #" + i.toString() + "! Error code: " + hz.SpawnError[obj.spawnError.get()]);
          };
        });
        this.spawnControllerList.push(obj); // Keep track of objs/entities we are currently using
      };
      if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
        console.log("SpawnController: count of spawned assets: " + this.spawnControllerList.length.toString());
      };
    });

    // listener for the trigger event sent when the player exits the spawning trigger volume. When triggered, unload (despawn) assets.
    this.connectLocalEvent(this.entity, objPoolSpawnControllerDespawnEvent, () => {
      if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
        console.log('SpawnController: objPoolDespawnTriggerEvent is called');
      };
      if(this.spawnControllerList.length == 0) return;

      // In object pooling, we are not deleting the asset. We simple unload it and move it back back to
      // the spawnControllerPool to be used again.
      this.spawnControllerList.forEach(obj => {
        obj.unload();
        this.spawnControllerPool.addToPool(obj);
      });

      // Reset our object pool.
      this.spawnControllerPool.resetAvailability();
      this.spawnControllerList = []; // since we are removing all of the assets from the list, assets were not removed while they were migrated to the pool. Kind of a hack.
      if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
        console.log('SpawnController: after despawning, spawnControllerList size=' + this.spawnControllerList.length);
      };
    });
  }

  start() {}

 dispose() {
   for(let i = 0; i < this.spawnControllerList.length; i++) {
     const obj = this.spawnControllerPool.getNextAvailable();
     if(obj == null) return;
     this.spawnControllerPool.removeFromPool(obj);
     obj.dispose();
   };
   this.spawnControllerPool.resetAvailability();
   this.spawnControllerList = [];
   if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
     console.log("SpawnController: SpawnController arrays destroyed.");
   };
 };

 // Helper method to get random spawn position from provided initial position
 private getRandomSpawnPosition(initialPosition: hz.Vec3): hz.Vec3 {
   const pos = initialPosition.clone();
   pos.x += Math.random()*3;
   pos.y += Math.random()*2;
   pos.z += Math.random()*2;
   return pos;
 };

};
hz.Component.register(SpawnControllerManager);
```

### Script notes

* In the world, this script is attached to an empty reference object.
* `spawnControllerPool`: Pool of SpawnControllers
* `spawnControllerList`: List of SpawnController entities now in the world.
* `preStart()` executes the following:
  + Initialize the `SpawnControllerPool` and `spawnControllerList`
  + `load()` method
  + Set up listeners for events fired from a player entering or exiting the trigger
* `start()` method is unused
* `dispose()` method removes the entities from the `SpawnControllerPool` and `SpawnControllerList`. Then, those objects are cleared.

### spawn() method

The `spawn()` method is wrapped in a then/catch promise to address success and failure states on the method. The `SpawnController` object provides two enumerated properties that you can query for the status of spawning:

* **currentState**: current state of spawning is returned as a code, which is an index value into the enumerated list of text values. Code value of `0` means that all is well.
* **spawnError**: in the `catch()` method, you can see how the spawnError value is used to query the spawnError enum for the text value.

```vs
/*
  Following call spawns in the entity obj, which has already been loaded into memory.
  spawnError and spawnState are enums. You can check the different enums in the code:
    hz.SpawnError.None,
    hz.SpawnError.ExceedsCapacity,
    hz.SpawnError.Cancelled,
    hz.SpawnError.InvalidAsset,
    hz.SpawnError.UnauthorizedContent,
    hz.SpawnError.InvalidParams,
    hz.SpawnError.Unknown
  then/catch blocks are used to gate actions on success (then) and to log spawn errors (catch).
*/
obj.spawn().then(() => {
  if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
    console.log("SpawnController: object #" + i.toString() + " spawned with state: " + hz.SpawnState[obj.currentState.get()]);
  };
}).catch(() => {
  if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {
    console.error("SpawnController: Error spawning object #" + i.toString() + "! Error code: " + hz.SpawnError[obj.spawnError.get()]);
  };
});
```

## SpawnControllerTrigger.ts

This script is attached to the trigger zone entity for the Spawn Controller area. It configures two listeners, which issue specific events back to the target, which is the SpawnControllerManager empty object. The script associated with that object (`SpawnControllerManager.ts`) receives the events and processes accordingly.

| CodeBlockEvent | LocalEvent | Results |
| --- | --- | --- |
| `onPlayerEnterTrigger` | `objPoolSpawnControllerSpawnEvent` | `SpawnControllerManager.ts` executes `spawn()` method on each `SpawnController` instance, making the entity appear in the world at the trigger zone location. |
| `onPlayerExitTrigger` | `objPoolSpawnControllerDespawnEvent` | `SpawnControllerManager.ts` executes the `unload()` method on each `SpawnController` instance, removing it from the world and runtime memory. |

```vs
import * as hz from 'horizon/core';
import {objPoolSpawnControllerSpawnEvent, objPoolSpawnControllerDespawnEvent} from 'SpawnControllerManager'
import { DISPLAY_CONSOLE_SPAWNCONTROLLER } from 'SpawnControllerManager';

class SpawnControllerTrigger extends hz.Component<typeof SpawnControllerTrigger> {
    static propsDefinition = {
      // Entity/object to spawn upon trigger. This is usually an object
      // with attached SpawnControllerManager script
      target: {type: hz.PropTypes.Entity}, // SpawnControllerManager object, which has SpawnControllerTrigger.ts script attached and assetToSpawn prop set to RedHeart
    };

    start() {
//      console.log("SpawnController trigger script called");

      if(this.props.target == undefined){
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {console.error("SpawnControllerTrigger doesn't have a target defined");};
        return;
      }

      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, ()=>{
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {console.log("Player entering Spawn Controller trigger");};
        if(this.props.target == undefined) {
          if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {console.error("target undefined on SpawnController OnPlayerEnterTrigger. Unable to spawn");};
          return;
        }
        this.sendLocalEvent(this.props.target, objPoolSpawnControllerSpawnEvent, {position: this.props.target.position.get()});
      });

      this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerExitTrigger, ()=>{
        if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {console.log("Player exiting SpawnController Trigger");};
        if(this.props.target == undefined) {
          if (DISPLAY_CONSOLE_SPAWNCONTROLLER) {console.error("target undefined on SpawnControllerTrigger OnPlayerExitTrigger. Unable to de-spawn");};
          return;
        }
        this.sendLocalEvent(this.props.target, objPoolSpawnControllerDespawnEvent, {position: this.props.target.position.get()});
      });
    }

  }
hz.Component.register(SpawnControllerTrigger);
```

### Script notes

* Script property (target) should be defined to be the empty object to which the Manager script is attached.

## Checkpoint

This station operates like the other two: Press the **Play button** and enter the world.

* If logging is enabled, observe the `SpawnController` messages in the console.
* When all entities have been loaded, enter the trigger. Then, exit.
* You can repeat the process, which depending on system load, may be quick.

The `SpawnControllerManager.ts` script is a self-contained manager for spawning in assets. Note that:

* It is set up to manage a single asset. It could be modified to handle any set of assets.
* The script spawns and despawns all instances of the asset at once, so that you can observe performance impacts. Incremental `spawn()` and `unload()` methods would require a modified approach.