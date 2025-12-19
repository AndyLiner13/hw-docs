Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/feature-samples/spawning-and-pooling-in-typescript/module-3-implement-object-pooling

# Module 3 - Implement Object Pooling

In the previous module, you learned how to spawn objects and de-spawn them when they are no longer needed. In this tutorial, we introduce **object pooling**, where upon world start, players can observe the following behaviors:

* On world start, objects are added into the world to an offscreen pool, where they can be accessed and moved into the gameplay area.
  + The object pool is executed as part of the `preStart()` method. Added as part of TypeScript v2.0.0, the `preStart()` method executes before any `start()` method, which makes `preStart()` a good location for any setup or initialization work that needs to be done.
  + The object pool becomes the inventory of assets that can be used as needed during gameplay.
* Upon stepping into the trigger zone, we spawn 100 objects into the spawn area by pulling them in from the object pool.
* Objects spawned from the pool appear faster and with less lag than in the SimpleSpawn approach.
  + Since objects have been pre-spawned into the pool, we are simply updating the visibility and position of the assets into the spawn area.
  + Object pooling reduces CPU load during gameplay and improves overall gameplay performance.
* When the player steps out of the trigger zone, we remove all of the spawned objects.
  + Objects are made invisible and are repositioned back into the object pooling area.
  + Nothing is destroyed.
* You can restart the experience again by stepping into the trigger zone.

## PoolUtils

To assist in building the tutorial, we are providing a reusable PoolUtils class where the various common object pooling functions are implemented. This file includes the following functions in the Pool class:

| **Function Name** | **Description** |
| --- | --- |
| `hasAvailable()` | Returns `true` if the pool has available entities. |
| `hasActive()` | Returns `true` if the pool has entities that are active. |
| `isAvailable()` | Returns `true` if a specified entity is available. |
| `getNextAvailable()` | Returns the next available entity from the pool. |
| `getRandomAvailable()` | Returns a random available entity from the pool. |
| `getRandomActive()` | Returns a random active entity from the pool. |
| `addToPool()` | Adds a specified entity to the pool. |
| `removeFromPool()` | Removes a specified entity from the pool. |
| `resetAvailability()` | Resets availability of all assets in the pool. |

Some of the above methods are not used in this example but may be useful elsewhere. Feel free to reuse the `PoolUtils.ts` file in your project.

## ObjectPooling Script

The `ObjectPooling.ts` script does the following:

- In `preStart()`, we pre-populate our object pool with a list of objects using the `prePopulateObjectPool()` method.
- Similar to SimpleSpawn, we define two trigger events and their listeners to spawn or despawn objects from our object pool.
  - When receiving `objPoolSpawnTriggerEvent`, we get the next available object from our object pool, update its visibility and position into the desired spawn location. This step also adds the entity to the `objList[]` array and removes it from the `objectPool[]` array.
  - When receiving `objPoolDespawnTriggerEvent`, we update the visibility and position of the object and reset the object availability on our Object Pool, so that it can be reused later. This step also adds the entity to the `objectPool[]` array and removes it from the `objList[]` array.

```
import * as hz from 'horizon/core';
import { Pool } from 'PoolUtils';

export const objPoolSpawnTriggerEvent = new hz.LocalEvent<{position: hz.Vec3}>('objPoolSpawnEvent');
export const objPoolDespawnTriggerEvent = new hz.LocalEvent<{}>('objPoolDespawnEvent');

const OBJECT_POOL_SIZE = 100;
const HIDDEN_POSITION = new hz.Vec3(-100, -100, 100); // somewhere far away
const ASSET_ROTATION = hz.Quaternion.fromEuler(new hz.Vec3(-90, 0, 90));

export const DISPLAY_CONSOLE_OBJECTPOOLING: Boolean = true;

class ObjectPooling extends hz.Component<typeof ObjectPooling> {
  static propsDefinition = {
    assetToSpawn: {type: hz.PropTypes.Asset},
  };

  private objectPool: Pool<hz.Entity> = new Pool<hz.Entity>();
  // objList is used to keep track of objects we have taken out from the pool for usage.
  private objList: hz.Entity[] = new Array<hz.Entity>();

  preStart() {
    if (DISPLAY_CONSOLE_OBJECTPOOLING) {
      console.log("ObjectPooling: Object Pooling script called");
    };
    if(this.props.assetToSpawn) {
      this.prePopulatObjectPool(this.props.assetToSpawn, OBJECT_POOL_SIZE);
    } else {
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {
        console.error("ObjectPooling: assetToSpawn is not specified. Unable to prepopulate object pool");
      };
    }

    this.connectLocalEvent(this.entity, objPoolSpawnTriggerEvent, (data: {position: hz.Vec3})=>{
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {
        console.log('ObjectPooling: objPoolSpawnTriggerEvent called');
      };
      for(let i = 0; i < OBJECT_POOL_SIZE; i++) {
        const obj = this.objectPool.getNextAvailable();
        if(obj == null) return;
        obj.position.set(this.getRandomSpawnPosition(data.position));
        obj.visible.set(true);
        this.objList.push(obj); // Keep track of objs/entities we are currently using
      }
    });

    this.connectLocalEvent(this.entity, objPoolDespawnTriggerEvent, () => {
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {
        console.log('ObjectPooling: objPoolDespawnTriggerEvent is called');
      };
      if(this.objList.length == 0) return;

      // In object pooling, we are not deleting the asset. We simple recycle it back to
      // the objectPool to be used again
      this.objList.forEach(obj => {
        obj.position.set(HIDDEN_POSITION);
      });
      this.objList.splice(0, this.objList.length);
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {
        console.log('ObjectPooling: after despawning, objList size='+this.objList.length);
      };
      // Reset our object pool
      this.objectPool.resetAvailability();
    });
  }

  start() {}

  private prePopulatObjectPool(asset:hz.Asset, numOfObjects: number): void {
    if (DISPLAY_CONSOLE_OBJECTPOOLING) {
      console.log('ObjectPooling: Pre populating object pool');
    };
    for (let i = 0; i < numOfObjects; i++) {
      this.world.spawnAsset(asset, HIDDEN_POSITION, ASSET_ROTATION).then(spawnedObjects => {
        spawnedObjects.forEach(obj => {
          this.objectPool.addToPool(obj);
          obj.visible.set(false)
        }, this);
        if (DISPLAY_CONSOLE_OBJECTPOOLING) {
          console.log("ObjectPooling: object pool size: "+ this.objectPool.all.length);
        };
      });
    }
  }

  // Helper method to get random spawn position from provided initial position
  private getRandomSpawnPosition(initialPosition: hz.Vec3): hz.Vec3 {
    const pos = initialPosition.clone();
    pos.x += Math.random()*3;
    pos.y += Math.random()*2;
    pos.z += Math.random()*2;

    return pos;
  }
}
hz.Component.register(ObjectPooling);
```

## Attach ObjectPooling Script

Similar to the simple object spawning module, this script is also attached to an empty object, and is executed when the world is started.

## Create ObjectPoolingTrigger Script

This trigger script is very similar to the `SimpleSpawnTrigger.ts` script, where we listen for `OnPlayerEnterTrigger` and `OnPlayerExitTrigger` events. When they are emitted, this script triggers the corresponding object pool spawn/despawn event at the object spawn location.

```
import * as hz from 'horizon/core';
import { objPoolDespawnTriggerEvent, objPoolSpawnTriggerEvent } from 'ObjectPooling';
import { DISPLAY_CONSOLE_OBJECTPOOLING } from 'ObjectPooling';

class ObjectPoolingTrigger extends hz.Component<typeof ObjectPoolingTrigger> {
  static propsDefinition = {
    // Entity/object to spawn upon trigger. This is usually an object
    // with attached SpawnManager script
    target: {type: hz.PropTypes.Entity}, // ObjectPoolingManager object, which has ObjectPooling.ts script attached and assetSpawn prop set to RedHeart
  };

  start() {
    // console.log("ObjectPooling: trigger script called");

    if(this.props.target == undefined){
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {console.error("ObjectPooling: Trigger doesn't have a target defined");};
      return;
    }

    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerEnterTrigger, ()=>{
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {console.log("ObjectPooling: Player entering trigger");};
      if(this.props.target == undefined) {
        if (DISPLAY_CONSOLE_OBJECTPOOLING) {console.error("ObjectPooling: target undefined on ObjectPoolingTrigger OnPlayerEnterTrigger. Unable to spawn");};
        return;
      }
      this.sendLocalEvent(this.props.target, objPoolSpawnTriggerEvent, {position: this.props.target.position.get()});
    });

    this.connectCodeBlockEvent(this.entity, hz.CodeBlockEvents.OnPlayerExitTrigger, ()=>{
      if (DISPLAY_CONSOLE_OBJECTPOOLING) {console.log("ObjectPooling: Player exiting Trigger");};
      if(this.props.target == undefined) {
        if (DISPLAY_CONSOLE_OBJECTPOOLING) {console.error("ObjectPooling: target undefined on ObjectPoolingTrigger OnPlayerExitTrigger. Unable to de-spawn");};
        return;
      }
      this.sendLocalEvent(this.props.target, objPoolDespawnTriggerEvent, {});
    });
  }
}
hz.Component.register(ObjectPoolingTrigger);
```

## Checkpoint

Run the project and observe object pooling behavior.

* Click the **World Sim On** button to toggle off your world simulation. Once you have clicked this button, the name will change to **World Sim Off**.
* Click **World Sim Off** to start your world simulation and launch preStart() and start() methods of your scripts, which pre-populates the object pool, among other things. **Note**: Clicking **World Sim Off** will toggle the button back to **World Sim On**.
* Enter the world.
* Walk up to the Object Pooling trigger zone. Notice how quickly entities are spawned into the location from the object pool.
  + These assets are simply pulled into this location from the object pool, which was created as soon as your pressed the **Play button**.
* Exit the trigger zone. Assets are quickly relocated back to the object pool.

You now have a working world that demonstrates object pooling behavior.

* In your own world, you can replace the trigger logic with other supported triggers in Meta Horizon Worlds. See the documentation for details.
* The `objList[]` array is important to keep track of the spawned objects, so that you can remove/delete the unused objects and free up resources when necessary.
* Similarly, the `ObjectPool[]` array needs to be maintained to determine currently available entities in the object pool.
* In a more dynamic world, this list of entities must be maintained throughout the gameplay experience.