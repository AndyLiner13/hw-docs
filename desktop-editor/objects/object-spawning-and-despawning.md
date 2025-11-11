Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/objects/object-spawning-and-despawning

# Object Spawning and Despawning

**Note**: This article describes object spawning methods using the legacy approach. Beginning in TypeScript v2.0.0, you should use the SpawnController class for more efficient management of spawning and despawning assets. For more information, see [Introduction to Spawning](/hw-docs/typescript/asset-spawning/introduction-to-asset-spawning).

When creating worlds in Horizon, objects can appear and disappear based on player input and world events, which is a great way to add dynamic experiences to your world. For example, you might create cannons that fire projectiles at a set interval or a shop where players can purchase items and wearables in-world. However, including many complex objects in your world quickly fills your world’s object capacity, reducing the resources you have available for world building.

## What is Object Spawning and Despawning?

A great intro into this topic can be found in the public [Spawn and despawn assets](/hw-docs/code-blocks-and-gizmos/spawn-despawn-assets-horizon-worlds) documentation.

Object spawning and despawning allows creators to instantiate and destroy objects at runtime through scripts powered by CodeBlocks and TypeScript. These objects are tied to [Assets](/hw-docs/desktop-editor/assets/introduction-to-the-desktop-editor-asset-library) pulled from the creator’s Asset Library, and enables creators to spawn various objects for users to interact with, to perform actions in-world and more.

In the cannon example, let’s consider a case where a cannonball is fired whenever the controlling player presses a trigger or button on their controller. Without spawning, these cannonballs must already exist in-world, doing nothing, and can then be moved into position with scripts. This can work. However, it’s unclear how many cannonballs are needed and if they can be removed after use, leading to creating too many cannonballs (cutting into your world object limit) or insufficient cannonballs (making cannonballs respawn while airborne).

With object spawning, the cannonball can be spawned when needed and is managed with scripts in your world. When the object is no longer needed (such as the cannonball hitting an object), the script can despawn the object to better manage the object count against your world’s object limit.

## Considerations

Object spawning and despawning requires additional TypeScript and can incur a performance at runtime, if not managed well. Before adding object spawning to your world you should consider:

* How often do objects need to be created/removed for our experience?
* How many object variations does our world require?
* Do some objects need to exist for the entire world experience?

Based on these questions, your team can decide if object spawning and despawning is a benefit to your world experience.

## How do we implement this feature in our world?

There are three approaches to implementing spawning and despawning:

- CodeBlocks
- TypeScript
- TypeScript with SpawnController
  **Tip**: This method is recommended.

### Adding Spawning

To spawn objects in your world, you need the following details available for your script:

* The asset to spawn must be readable.
* The position for the spawned object (as a Vec3).
* The rotation for the spawned object (as a Quaternion).
* **[CodeBlocks only]** An event that is called after the object is spawned.
* **[CodeBlocks only]** A target object to receive the event.

If you’re spawning the asset with CodeBlocks, drag the “Spawn Asset” block from the Actions tab into the code pane, specifying the above details. If you’re spawning the asset with TypeScript, use the “this.world.spawnAsset” function instead.

After spawning, your script receives a reference to the spawned object. For CodeBlocks, the “Spawn Asset” block will notify your specified Target Object with an Event to handle the newly spawned object(s), while TypeScript uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to return the object once it’s spawned. In most cases, you can save this object into a list to perform updates as needed.

### Adding Despawning

When a spawned object is no longer needed, you can then remove the object from the world to improve performance. The only information needed is a reference to the object you’d like to delete.

## Example Implementations

### CodeBlocks

![A view of the CodeBlocks Editor with blocks to handle spawning assets and moving them into a line.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/460204911_548705517667404_7824595070708973058_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=PZwXRdaj6tYQ7kNvwEDxmH5&_nc_oc=AdnXl77cQgLrpqjUC3r6J9OO52K46QrDNwdSyKXjYygYG6x6lyBXBC9qmiaE6FDmn20&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=U4Mrix7WKOXa5t5A2Tmwow&oh=00_AfgqJx3ln2r1h-SnR_9xdGuDt58jQydZZdM5REI5nsBWxQ&oe=692C10A8)

![A view of the CodeBlocks Editor with blocks to handle despawning assets.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/460197256_548705514334071_4968040419667574195_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=L3A9KHlNdLQQ7kNvwHJgV0H&_nc_oc=AdlAtr0LLO1ZIfBa3cW2NUvMG4hHNZfcc7dbVNA8Kcn3fIoUxCiT508UbU4ERT1QFPk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=U4Mrix7WKOXa5t5A2Tmwow&oh=00_AfhQDydozDoYq20EJlQNpFs2RpUCX58rzl1XUNLPDi7uNQ&oe=692BEBA8)

### TypeScript

```vs
import * as hz from 'horizon/core';

const spawnTriggerEvent = new hz.CodeBlockEvent<[]>('spawnEvent', []);
const despawnTriggerEvent = new hz.CodeBlockEvent<[]>('despawnEvent', []);
class RuntimeTypeScriptSpawner extends hz.Component<typeof RuntimeTypeScriptSpawner> {

 // define the inputs available in the property panel in the UI as well as default values
 static propsDefinition = {
   numObj: {type: hz.PropTypes.Number, default: 10},
   asset: {type: hz.PropTypes.Asset},
 };

 // define instance state
 objList: hz.Entity[] = new Array();

 // called on world start
 start() {

    // Handle when the user presses the "Spawn" button
    this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
      if(this.objList.length != 0) return;
      for(let count = 0; count < this.props.numobj; count++) {
        pos.add(new Vec3(0, 0, count));
        this.world.spawnAsset(this.props.asset, pos, this.entity.rotation.get()).then(spawnedObjects => {
          if(this.objList == null) return;

            spawnedObjects.forEach(obj => {
              this.objList.push(obj);
            }, this);
          });
      };
    });

    // Handle when the user presses the "Despawn" button
    this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
      if(this.objList.length == 0) return;

      this.objList.forEach(item => {
        this.world.deleteAsset(item);
        }, this);
      this.objList.splice(0, this.objList.length);
    });
  };
};

// This tells the UI that your component can be attached to an entity
hz.Component.register(RuntimeTypeScriptSpawner);
```

## Optimization tips

### Have limits in your code to control the number of objects created

While object spawning allows creators to create many objects while their world is active, it also counts against the world’s object limit. To ensure you don’t exceed this limit, enforcing a maximum number of objects that can be spawned ensures your world stays within performant range and won’t break unintentionally.

With limits in place, your code can dynamically spawn objects until the limit is reached - at which point, you should stop spawning.

### Track objects to assess when they’re no longer needed

After you have an object spawned in-world, the objects will exist as long as the world instance is active. If the object should only temporarily exist in the world, you can decide to proactively destroy the object. You might have a script that monitors spawned objects to check if they can safely be removed without disrupting the player’s experience. A few ways to implement this include:

* The player is X distance away from the object
* The player hasn’t interacted with the object for 5 minutes
* The object interaction is complete and sends an event indicating that it can be destroyed

## Object Pooling

Going back to the cannonball example, let’s say you have 20 cannons firing multiple cannonballs at the same time. Given that spawning and despawning has a cost on performance in your world, you might find that the cannons fire at different times.

If you find an object should be created and destroyed often, you might consider proactively spawning objects that are hidden in a “pool” when the world instance is created. You can then request and return objects from this “pool” when needed.

This saves you time from spawning or despawning objects and allows you to plan your world based on the updated object limit. This optimization is called [Object Pooling](https://en.wikipedia.org/wiki/Object_pool_pattern) and is an implementation you can add into your world.

### Object Pool Definition

```vs
import {Entity, Vec3} from 'horizon/core';

class PoolItem<T> {
 item: T;
 inUse: boolean

 constructor(item: T) {
   this.item = item;
   this.inUse = false;
 }

 _getItem(): T {
   return this.item;
 }

 requestItem(): T {
   this.inUse = true;
   return this.item;
 }

 returnItem(): void {
   this.inUse = false;
 }

 isInUse(): boolean {
   return this.inUse;
 }
}

export class EntityPool {
 pool: Array<PoolItem<Entity>>;
 maxSize: number;
 constructor(maxSize: number = 30) {
   this.pool = new Array<PoolItem<Entity>>();
   this.maxSize = maxSize;
 }

 registerItem(item: Entity) {
   if(item != undefined) {
     this.pool.push(new PoolItem(item));
   }
 }

 requestItem(): Entity|null {
   let result = null;
   let itemIdx = this.pool.findIndex((poolItem) => {return poolItem.isInUse() == false;});
   if(itemIdx != -1) {
     result = this.pool[itemIdx].requestItem();
   }
   return result;
 }

 returnItem(item: Entity): void {
   let poolIdx = this.pool.findIndex((poolItem) = { return poolItem._getItem().id == item.id; });
  if(poolIdx == -1) return;
  let poolItem = this.pool[poolIdx];
  poolItem.returnItem();
  let itemPos = item.position.get();
  itemPos.add(new Vec3(0, -10, 0));
  item.position.set(itemPos);
  this.pool[poolIdx] = poolItem;
 }

 getSize(): number {
   return this.pool.length;
 }

  isFull(): boolean {
   return this.pool.length == this.maxSize;
 }

 printIds() {
    this.pool.forEach((poolItem: PoolItem<Entity>) => {
     let item = poolItem._getItem();
     if(item != null) {
       console.log(item.id);
     }
    });
 }
}
```

### Object Pool Example

```vs
import * as hz from 'horizon/core';
import { EntityPool } from 'ObjectPool';

const spawnTriggerEvent = new hz.CodeBlockEvent<[]>('spawnEvent', []);
const despawnTriggerEvent = new hz.CodeBlockEvent<[]>('despawnEvent', []);
class PoolSpawnManager extends hz.Component<typeof PoolSpawnManager> {
 static propsDefinition = {
   numObj: {type: hz.PropTypes.Number, default: 10},
   assetToSpawn: {type: hz.PropTypes.Asset},
 };

 objPool: EntityPool = new EntityPool();
 objList: hz.Entity[] = new Array<Entity>();

  // called on world start
 start() {

   // Request 10 objects to be spawned when the world is initially loaded
   for(let count = 0; count < this.props.numobj; count++) {
     this.world.spawnAsset(this.props.assetToSpawn!, this.entity.position.get(), this.entity.rotation.get()).then(spawnedObjects => {
       if(this.objPool == null) return;
       spawnedObjects.forEach(obj => {
         this.objPool.registerItem(obj);
       }, this);
     });
   };

   // Handle when the "Spawn" button is pressed
   this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
     if(this.objList.length == this.props.numObj || this.objPool == null) return;
     for(let idx = 0; idx < this.props.numobj; idx++) {
       let obj=this.objPool.requestItem();
       if(obj== null) return;
       let entityPos=this.entity.position.get();
       entityPos.add(new hz.vec3(0,0, idx));
       obj.position.set(entityPos);
       this.objList.push(obj);
     };
    });

   // Handle when the Despawn button is pressed
   this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
     if(this.objList.length == 0 || this.objPool == null) return;
     this.objList.forEach((item) => {
       this.objPool.returnItem(item);
     }, this);
     this.objList.splice(0, this.objList.length);
   });
  };
};

// This tells the UI that your component can be attached to an entity
hz.Component.register(PoolSpawnManager);
```