# Object Spawning and Despawning

## What is Object Spawning and Despawning?

 A great intro into this topic can be found in the public [Spawn and despawn assets](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/spawn-despawn-assets-horizon-worlds) documentation. Object spawning and despawning allows creators to instantiate and destroy
objects at runtime through scripts powered by CodeBlocks and TypeScript. These objects
are tied to [Assets](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/introduction-to-the-desktop-editor-asset-library) pulled from the creator’s Asset Library, and enables creators to spawn various
objects for users to interact with, to perform actions in-world and more. In the cannon example, let’s consider a case where a cannonball is fired
whenever the controlling player presses a trigger or button on their controller.
Without spawning, these cannonballs must already exist in-world, doing nothing, and
can then be moved into position with scripts. This can work. However, it’s unclear
how many cannonballs are needed and if they can be removed after use, leading
to creating too many cannonballs (cutting into your world object limit) or
insufficient cannonballs (making cannonballs respawn while airborne). With object spawning, the cannonball can be spawned when needed and is managed
with scripts in your world. When the object is no longer needed (such as the
cannonball hitting an object), the script can despawn the object to better manage
the object count against your world’s object limit.  

## Considerations

 Object spawning and despawning requires additional TypeScript and can incur a
performance at runtime, if not managed well. Before adding object spawning to your
world you should consider:
• How often do objects need to be created/removed for our experience?
• How many object variations does our world require?
• Do some objects need to exist for the entire world experience?

 Based on these questions, your team can decide if object spawning and despawning
is a benefit to your world experience.  

## How do we implement this feature in our world?

 There are three approaches to implementing spawning and despawning:
1. CodeBlocks
2. TypeScript
3. TypeScript with SpawnControllerTip: This method is recommended.

### Adding Spawning

 To spawn objects in your world, you need the following details available for
your script:
• The asset to spawn must be readable.
• The position for the spawned object (as a Vec3).
• The rotation for the spawned object (as a Quaternion).
• [CodeBlocks only] An event that is called after the object is spawned.
• [CodeBlocks only] A target object to receive the event.

 If you’re spawning the asset with CodeBlocks, drag the “Spawn Asset” block from
the Actions tab into the code pane, specifying the above details. If you’re
spawning the asset with TypeScript, use the “this.world.spawnAsset” function
instead. After spawning, your script receives a reference to the spawned object. For
CodeBlocks, the “Spawn Asset” block will notify your specified Target Object with an
Event to handle the newly spawned object(s), while TypeScript uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) to return the object once it’s spawned. In most cases, you can save this object
into a list to perform updates as needed.  

### Adding Despawning

 When a spawned object is no longer needed, you can then remove the object from
the world to improve performance. The only information needed is a reference to
the object you’d like to delete.  

## Example Implementations

  
### CodeBlocks

 ![A view of the CodeBlocks Editor with blocks to handle spawning assets and moving
them into a line.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/460204911_548705517667404_7824595070708973058_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=GdevxSakcrsQ7kNvwFPw4J1&_nc_oc=AdnfNgIU6iOPB4THqMY9NsDQAYyXTf5UJXj3tcjK9YgARNkY0yxT_d215k0SO6yDC6A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xhqDF_7QkYtPNYhDs3k5CQ&oh=00_AfdcIeAlVeUdneAQ6Nuqkw2...
 ![A view of the CodeBlocks Editor with blocks to handle despawning assets.](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/460197256_548705514334071_4968040419667574195_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=tmwS13bhF0oQ7kNvwHbm-dX&_nc_oc=AdnaQE8LfD8BsYoQ65mpbl7BPGDyFkUTjp_fGam5FiOktaAH_bcLHD_uCUg5rMS-9-M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xhqDF_7QkYtPNYhDs3k5CQ&oh=00_AffJ-e4wN3TOYX...

### TypeScript

  
```
import * as hz from 'horizon/core';

const spawnTriggerEvent = new hz.CodeBlockEvent<[]>('spawnEvent', []);
const despawnTriggerEvent = new hz.CodeBlockEvent<[]>('despawnEvent', []);
class RuntimeTypeScriptSpawner extends hz.Component<typeof RuntimeTypeScriptSpawner> {

 // define the inputs available in the property panel in the UI as well as default values
 static propsDefinition = {
   numObj: {type: hz.PropTypes.Number, default: 10},
   asset: {type: hz.PropTypes.Asset},
 };

 // define instance state
 objList: hz.Entity[] = new Array();

 // called on world start
 start() {

    // Handle when the user presses the "Spawn" button
    this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
      if(this.objList.length != 0) return;
      for(let count = 0; count < this.props.numobj; count++) {
        pos.add(new Vec3(0, 0, count));
        this.world.spawnAsset(this.props.asset, pos, this.entity.rotation.get()).then(spawnedObjects => {
          if(this.objList == null) return;

            spawnedObjects.forEach(obj => {
              this.objList.push(obj);
            }, this);
          });
      };
    });

    // Handle when the user presses the "Despawn" button
    this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
      if(this.objList.length == 0) return;

      this.objList.forEach(item => {
        this.world.deleteAsset(item);
        }, this);
      this.objList.splice(0, this.objList.length);
    });
  };
};

// This tells the UI that your component can be attached to an entity
hz.Component.register(RuntimeTypeScriptSpawner);
```

## Optimization tips

  
### Have limits in your code to control the number of objects created

 While object spawning allows creators to create many objects while their world
is active, it also counts against the world’s object limit. To ensure you don’t
exceed this limit, enforcing a maximum number of objects that can be spawned
ensures your world stays within performant range and won’t break unintentionally. With limits in place, your code can dynamically spawn objects until the limit is
reached - at which point, you should stop spawning.  

### Track objects to assess when they’re no longer needed

 After you have an object spawned in-world, the objects will exist as long as the
world instance is active. If the object should only temporarily exist in the
world, you can decide to proactively destroy the object. You might have a script
that monitors spawned objects to check if they can safely be removed without
disrupting the player’s experience. A few ways to implement this include:
• The player is X distance away from the object
• The player hasn’t interacted with the object for 5 minutes
• The object interaction is complete and sends an event indicating that it can be
destroyed

  

## Object Pooling

 Going back to the cannonball example, let’s say you have 20 cannons firing
multiple cannonballs at the same time. Given that spawning and despawning has a cost
on performance in your world, you might find that the cannons fire at different
times. If you find an object should be created and destroyed often, you might consider
proactively spawning objects that are hidden in a “pool” when the world instance
is created. You can then request and return objects from this “pool” when
needed. This saves you time from spawning or despawning objects and allows you to plan
your world based on the updated object limit. This optimization is called [Object Pooling](https://en.wikipedia.org/wiki/Object_pool_pattern) and is an implementation you can add into your world.  
### Object Pool Definition

  
```
import {Entity, Vec3} from 'horizon/core';

class PoolItem<T> {
 item: T;
 inUse: boolean

 constructor(item: T) {
   this.item = item;
   this.inUse = false;
 }

 _getItem(): T {
   return this.item;
 }

 requestItem(): T {
   this.inUse = true;
   return this.item;
 }

 returnItem(): void {
   this.inUse = false;
 }

 isInUse(): boolean {
   return this.inUse;
 }
}

export class EntityPool {
 pool: Array<PoolItem<Entity>>;
 maxSize: number;
 constructor(maxSize: number = 30) {
   this.pool = new Array<PoolItem<Entity>>();
   this.maxSize = maxSize;
 }

 registerItem(item: Entity) {
   if(item != undefined) {
     this.pool.push(new PoolItem(item));
   }
 }

 requestItem(): Entity|null {
   let result = null;
   let itemIdx = this.pool.findIndex((poolItem) => {return poolItem.isInUse() == false;});
   if(itemIdx != -1) {
     result = this.pool[itemIdx].requestItem();
   }
   return result;
 }

 returnItem(item: Entity): void {
   let poolIdx = this.pool.findIndex((poolItem) = { return poolItem._getItem().id == item.id; });
  if(poolIdx == -1) return;
  let poolItem = this.pool[poolIdx];
  poolItem.returnItem();
  let itemPos = item.position.get();
  itemPos.add(new Vec3(0, -10, 0));
  item.position.set(itemPos);
  this.pool[poolIdx] = poolItem;
 }

 getSize(): number {
   return this.pool.length;
 }

  isFull(): boolean {
   return this.pool.length == this.maxSize;
 }

 printIds() {
    this.pool.forEach((poolItem: PoolItem<Entity>) => {
     let item = poolItem._getItem();
     if(item != null) {
       console.log(item.id);
     }
    });
 }
}
```

### Object Pool Example

  
```
import * as hz from 'horizon/core';
import { EntityPool } from 'ObjectPool';

const spawnTriggerEvent = new hz.CodeBlockEvent<[]>('spawnEvent', []);
const despawnTriggerEvent = new hz.CodeBlockEvent<[]>('despawnEvent', []);
class PoolSpawnManager extends hz.Component<typeof PoolSpawnManager> {
 static propsDefinition = {
   numObj: {type: hz.PropTypes.Number, default: 10},
   assetToSpawn: {type: hz.PropTypes.Asset},
 };

 objPool: EntityPool = new EntityPool();
 objList: hz.Entity[] = new Array<Entity>();

  // called on world start
 start() {

   // Request 10 objects to be spawned when the world is initially loaded
   for(let count = 0; count < this.props.numobj; count++) {
     this.world.spawnAsset(this.props.assetToSpawn!, this.entity.position.get(), this.entity.rotation.get()).then(spawnedObjects => {
       if(this.objPool == null) return;
       spawnedObjects.forEach(obj => {
         this.objPool.registerItem(obj);
       }, this);
     });
   };

   // Handle when the "Spawn" button is pressed
   this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
     if(this.objList.length == this.props.numObj || this.objPool == null) return;
     for(let idx = 0; idx < this.props.numobj; idx++) {
       let obj=this.objPool.requestItem();
       if(obj== null) return;
       let entityPos=this.entity.position.get();
       entityPos.add(new hz.vec3(0,0, idx));
       obj.position.set(entityPos);
       this.objList.push(obj);
     };
    });

   // Handle when the Despawn button is pressed
   this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
     if(this.objList.length == 0 || this.objPool == null) return;
     this.objList.forEach((item) => {
       this.objPool.returnItem(item);
     }, this);
     this.objList.splice(0, this.objList.length);
   });
  };
};

// This tells the UI that your component can be attached to an entity
hz.Component.register(PoolSpawnManager);
```
    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
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

## Object Pooling

### Object Pool Definition
### Object Pool Example

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fdesktop-editor%2Fobjects%2Fobject-spawning-and-despawning%2F)

# Object Spawning and Despawning

 Note: This article describes object spawning methods using the legacy approach.
Beginning in TypeScript v2.0.0, you should use the SpawnController class for more
efficient management of spawning and despawning assets. For more information, see [Introduction to Spawning](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning). When creating worlds in Horizon, objects can appear and disappear based on
player input and world events, which is a great way to add dynamic experiences to
your world. For example, you might create cannons that fire projectiles at a set
interval or a shop where players can purchase items and wearables in-world.
However, including many complex objects in your world quickly fills your world’s
object capacity, reducing the resources you have available for world building.  
## What is Object Spawning and Despawning?
## Considerations
## How do we implement this feature in our world?
## Example Implementations
## Optimization tips
## Object Pooling
## Additional Links
