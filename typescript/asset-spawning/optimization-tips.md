Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/optimization-tips

# Optimization Tips

Spawning and despawning has a performance cost at runtime. Here are some tips to minimize the performance impact of using this feature.

## Have limits in the code to control the number of objects created

While Object Spawning allows creators to create many objects while their world is active, it also affects the world’s object limit. Enforcing a maximum number of objects that can be spawned ensures the world stays within performant range and won’t break unintentionally.

## Track objects to assess when they are no longer needed

Once an object spawns in-world, it exists as long as the world instance is active. Alternatively, the object can be proactively despawned if it is no longer needed.  You can make a script that monitors spawned objects to check if they can safely be removed without disrupting the player’s experience.

A few ways to implement this include:

* The player is X distance away from the object
* The player hasn’t interacted with the object for X minutes
* The object interaction is complete and sends an event indicating that it can be destroyed

## Object pooling

If you find an object should be created and destroyed often, you might consider proactively spawning objects that are hidden in a pool when the world instance is created. You can then request and return objects from this pool when needed -  saving you time from spawning/despawning objects and allowing you to plan out your world based on the updated object limit. This optimization is called [Optimization Pooling](https://en.wikipedia.org/wiki/Object_pool_pattern)
and is an implementation that you can add to your world.

### Object Pool Definition Example

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

 requestItem(): Entity\|null {
   let result = null;
   let itemIdx = this.pool.findIndex((poolItem) => {return poolItem.isInUse() == false;});
   if(itemIdx != -1) {
     result = this.pool[itemIdx].requestItem();
   }
   return result;
 }

 returnItem(item: Entity): void {
   let poolIdx = this.pool.findIndex((poolItem) => { return poolItem._getItem().id == item.id; });
  if(poolIdx == -1) return;

  let poolItem = this.pool[poolIdx];
  poolItem.returnItem();
  let itemPos = item.position.get();
  itemPos = itemPos.add(new Vec3(0, -10, 0));
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
import { PropsDefinition } from 'horizon/core';
import { Asset, Component, CodeBlockEvent, Entity, PropTypes, Vec3} from 'horizon/core';
import { EntityPool } from 'ObjectPool';


const spawnTriggerEvent = new CodeBlockEvent<[]>('spawnEvent', []);
const despawnTriggerEvent = new CodeBlockEvent<[]>('despawnEvent', []);

class PoolSpawnManager extends Component<typeof PoolSpawnManager> {
 static propsDefinition  = {
   numObj: {type: PropTypes.Number, default: 10},
   assetToSpawn: {type: PropTypes.Asset},
 };

 objPool: EntityPool = new EntityPool();
 objList: Entity[] = new Array<Entity>();
  // called on world start
 start() {
   // Request 10 objects to be spawned when the world is initially loaded
   for(let count = 0; count < this.props.numObj; count++) {
     this.world.spawnAsset(this.props.assetToSpawn!, this.entity.position.get(), this.entity.rotation.get()).then(spawnedObjects => {
       if(this.objPool == null) return;

       spawnedObjects.forEach(obj => {
         this.objPool.registerItem(obj);
       }, this);
     });
   }
   // Handle when the "Spawn" button is pressed
   this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
     if(this.objList.length == this.props.numObj \|\| this.objPool == null) return;
     for(let idx = 0; idx < this.props.numObj; idx++) {
       let obj = this.objPool.requestItem();
       if(obj == null) return;

       let entityPos = this.entity.position.get();
       entityPos = entityPos.add(new Vec3(0, 0, idx));
       obj.position.set(entityPos);
       this.objList.push(obj);
     }
   });

   // Handle when the "Despawn" button is pressed
   this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
     if(this.objList.length == 0 \|\| this.objPool == null) return;


     this.objList.forEach((item) => {
       this.objPool.returnItem(item);
     }, this);
     this.objList.splice(0, this.objList.length);
   });
 }
}
// This tells the UI that your component can be attached to an entity
Component.register(PoolSpawnManager);
```