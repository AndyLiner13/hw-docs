Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices

# CPU and TypeScript optimization and best practices

## General recommendations

### Haptic feedback

It’s a good idea to use [Tracing](../Performance%20tools/Tracing.md) to verify the cost of haptic feedback in your world. In some cases, the cost can be extreme. In this case you should look into modifying/removing the haptic feedback.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415052_512500641287892_3419482455229549771_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5oitbgzg2ZgQ7kNvwEYIXX2&_nc_oc=AdmOgkPf8KheEP2MDupT7AX9z8Pp8o1JvzGhHD4xo7YK_pxIvEyUvLqdeLxew0lmahZVzuFSbwQl5GYmduL8JiPb&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfnKXEjoOcttuU9lCcZzITf-7VNrSd81fufxVlCP8wr6uA&oe=69558273)*In this example, haptic feedback takes ~7.8 ms per frame when active.*

### Trimesh and SubD don’t mix

If you have a trimesh world, having any SubD objects in it will incur additional CPU costs due to sunlight updates. Even if they are disabled/invisible they will still incur this extra performance cost. We recommend removing any and all SubD objects from trimesh worlds.

### Only enable necessary settings for 2D objects

When editing objects in Desktop Editor, ensure that only settings that are needed for the object are enabled.

For example, if the “Motion” property is set to “Animated”, components will be automatically added to account for that change (CollisionNotifier, Rigidbody, and a PhysicsComponentSG component).

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452954647_512500631287893_7177151756270803345_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=3uqfzgKxmnsQ7kNvwF9KSbD&_nc_oc=AdmQaeYhJqpnCiNCccS24USNhV6aCrenz3kHhzxLVyBV1jMgbblugev00hWOQiAohVI1Azf_Mb4zr6d0AyDgy-zM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_Afkhfw3etm8D7h4ISP8idRzX7vWPdJ82Or0W6cDJz-1QQw&oe=695599B1)

Also, if objects won’t ever be seen by the player, then turn off visibility as well. Keep in mind that additional settings will add runtime cost to a world such as costs to Physics and Sunlight so recommend turning off settings that aren’t needed.

### Keep animator count low

A large number of active animators in a world can quickly add up to a significant amount of CPU time and degraded performance. Because of this, we recommend keeping the number of active animating objects as low as possible.

## Implement level of detail (LOD)

[Level of Detail](../../Desktop%20editor/Help%20and%20reference/Manual%20Level%20of%20Detail%20Overview.md) improves performance by reducing the complexity of objects that are far away from the player. This optimization decreases GPU workload by rendering fewer polygons and lower-detail assets for objects that occupy less of the screen. This results in faster rendering times and better overall performance.

## TypeScript optimization

Optimizing TypeScript can have some of the largest impact when trying to improve world performance.

### Deep profiling

You can use deep profiling to find out what the expensive bridge calls actually are and how much CPU time they use when tracing. Note that associating these calls directly back to a line of code is not currently automatic and you’ll have to manually find those in your code.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452416347_512500627954560_8716800481369087731_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=usoJ_NyW4bkQ7kNvwFzS-Bb&_nc_oc=Adm5FyQHEy4t8IiF9AuiQzfgUzhBNV7ZMZov149efvv5UnlG2UQGaGgkSZHIYX7AVM2s1R0EQa2OSQ4QUBnXO8Do&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_Afn8LSV6mHtGk3uj7TrggCfR_OKtqB3NoaozSxiXZfJfTA&oe=69556D43)

*Toggle to enable deep tracing*

See the [Tracing documentation](../Performance%20tools/Tracing.md) for more information.

To optimize scripting CPU usage, focus on bridge calls.

- Take a deep trace.
- Find which bridge calls are done when and which contribute the most to CPU usage.
- Then, correlate them to your scripts and optimize where necessary.

### Optimizing bridge calls

Most Meta Horizon Worlds TypeScript APIs trigger bridge calls which can be expensive. It’s strongly recommended to minimize the impact by calling the functions only when absolutely necessary and caching results when possible. There is some caching internally but it is for a single frame. The following types should all have per-frame caching:

* HorizonProperty
* ReadableHorizonProperty
* WritableHorizonProperty

Manual caching should still be done for values that are only needed occasionally (not per frame).

Common functions that cause bridging include anything that accesses data or sets an entity’s data (e.g. get/set position), or anything that interacts with the world’s data (e.g. raycasts), or anything that interacts with a non-TS concept (e.g. playing audio).

#### For example:

* get/set visibility
* get/set position
* get/set rotation
* get/set scale
* get/set player
* get/set owner
* get/set body part position
* set UI binding
* UI callbacks

Note that every get/set in a chain is its own potential bridge call. For example, `this.entity.owner.get().position.get()` is two bridge calls. In this example, we recommend that you cache the owner on start.

You should then check if a value has changed before setting its corresponding property. For example, if you need to set an entity’s visibility, don’t do it every frame, but instead only when something has changed.

#### Calculating versus getting

In some instances you can save bridge calls by calculating a value instead of getting it. For example, take the following calls:

```
this.entityToRotate.position.get();
this.entityToRotate.forward.get();
this.entityToRotate.up.get();
this.entityToRotate.rotation.get();
```

Depending on where these are called, you can potentially simplify them by getting the position and rotation and calculating the forward and up vectors by multiplying the rotation vector by `Vec3.forward` and `Vec3.up` . For example to calculate the forward vector (thus replacing the call to `this.entityToRotate.forward.get()`):

```
const entityToRotateRotation = this.entityToRotate.rotation.get();
const entityToRotateForward = Quaternion.mulVec3(
  entityToRotateRotation,
  Vec3.forward,
);
```

### Networking and events

Most side effects triggered from TypeScript are network-synchronized with other clients and the server. Networked TypeScript calls can add up quickly. When profiling, you will often notice many networked calls happening on the same frame. Staggering these updates is a good way of mitigating these CPU costs. This means spreading out the needed network calls over two or more frames. For example if an enemy dies, you may need to reduce its health, find out it died, actually destroy it, play a sound, increment a score, etc. All of these calls could potentially happen on a different frame in sequence, reducing the overall per-frame CPU cost.

#### Local events

If you know your event is purely local (same client owns the sender and receiver entity), then using a HorizonEvent in TS will be much faster than a CodeblockEvents because the latter goes to C# and causes a bridge call because it may need to be networked.

#### Spreading events

When generating multiple events in scripts, chain the events over multiple frames instead of all in one.

For example, when firing a weapon:

* Start “fire” sound and video FX
* Launch projectile
* Apply recoil rotation to the gun
* Start VFX and SFX for the projectile
* Update ammo state (ammo bar, ammo text, gun state visuals, reticle state if out of ammo)
* Log that player has shot for accuracy calculations
* Update reticle position
* Update pistol holster position and rotation

These events could be chained over multiple frames without any loss of visual fidelity:

* Frame 1
  + Start “fire” sound and video FX
  + Apply recoil rotation to the gun
* Frame 2
  + Launch projectile
  + Start VFX and SFX for the projectile
* Frame 3
  + Update reticle position
* Frame 4
  + Update ammo state (ammo bar, ammo text, gun state visuals, reticle state if out of ammo)
  + Log that player has shot for accuracy calculations
* Frame 5
  + Update pistol holster position and rotation

#### Broadcast events

Broadcast events are a type of Horizon event that notify all objects subscribed to the same event without directly referencing them. This enables your code to be less dependent on knowing which objects should receive the event, reducing code complexity. Like Horizon events, Broadcast events are performed synchronously, but the execution order is random and can only be received by listeners registered on the same client.

Maintaining Broadcast event subscriptions can slow your event messaging as more subscriptions are added. If your objects no longer need to listen for Broadcast events, you can unsubscribe from these sources to improve performance.

```
this.eventSubscription = this.connectBroadcastEvent(
 World.onUpdate (data: { deltaTime: number }) => {
 }
);

// Cancel subscription logic
if (this.eventSubscription !== null) {
 this.eventSubscription.disconnect();
 this.eventSubscription = null;
}
```

### Attachments

Calculating and updating the attachment of an object in TypeScript can be expensive. An example would be attaching a pistol to a holster on the player. Rather than writing code to manually do this, we recommend using the attachment system as it has much better CPU performance.

### Raycasts

Raycasts can be very expensive. Using a short raycast distance will be much cheaper than a longer distance, so make sure you set it to the minimum necessary, and make sure you only raycast if you need to. If they are necessary, stagger the calls whenever possible over multiple frames.

## Audio playback

Playing audio clips is very CPU intensive. Whenever possible, combine multiple separate sounds into one merged sound file to improve performance. There is an option for audio called **Play and Forget** that runs faster but it does not provide any callbacks. We recommend that you use **Play and Forget** whenever possible. You can still get a similar effect as the callback by using a timer.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452878100_512500624621227_8465348933482063789_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8wluW6c_vnIQ7kNvwFG0ANL&_nc_oc=Adk4Zj21WSkR2qEKh1yRbg5-DGcuQVSndo_98HM73ZrbaE6xTi0TJIN3H4GLt-8ChT8WrPwWHFH7gNsapBUnNzE_&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfnE07REHRcdje2m6yBOfEFGMqrMLcuTUIEXGcjcFQ5iqg&oe=695571A2)

Here are some more audio playback optimization recommendations:

* Limit the minimum and maximum distance of Audio Graph Gizmo properties.
* Use .wav files instead of .opus for short audio files to reduce cost of de-encoding.
* Where possible, make sounds global to avoid the cost of spatializing.
* While there is a hard limit of 32 audio graph gizmos playing at once, that shouldn’t be treated as a stable limit and try instead to have no more than 10-12.
* Current behavior is that loading/opening an audio object causes a cpu hit i.e. even when the object isn’t playing. If possible, it’s best to only load gizmos on-demand.

## Concurrent players

Be cognizant of the CPU cost of players in the world. In multiplayer worlds, each avatar might use an additional 0.5 msec to process. 24 players might require 12 milliseconds, almost an entire frame at 72 fps. Limit the quantity of concurrent players, when publishing the world, accordingly.

## Spawning objects

### Performance characteristics

In server traces, an object spawn can take a significant amount of time. Traces to look for include:

* ServerSpawn
  + GetAssetDataFromBackendAsync
  + GetEntityCount
  + ClientSpawn

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704475_512500537954569_7031487538570193556_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=HtEMXC3UzhAQ7kNvwFit3kB&_nc_oc=AdmJtTa3bPz3cBKKEpTA6RLQGtQnNP8dIIk7b6PUqGCQQHj8LVNnKElBsRtoxSmk5tZinf6ZCyPgWrVVEUNMaTa0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AflGS_fznHKybMFkxA_RI-fDhv4gUGO1tjHV9U6sSAzFUg&oe=69557E92)*ServerSpawn, in this trace, lasts over 1.5 seconds.*

Although ServerSpawn is not processed on the main thread, secondary effects are seen there.

Multiple calls can be seen in the trace:

* `DataModel::CreateNodeFromEntityType`
* `SceneGraphTreeNodeLoader::GetEntityStatesFromTreeNode`
* `ScriptingRuntimeIntegration::InstantiationStep`
* `DynamicLightsRuntimeIntegration::PostSpawnInstantiationStep`

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452533527_512500531287903_3706876015676299264_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=aj5VSq5k5G0Q7kNvwFQlYFw&_nc_oc=AdmO2hYiVCbBqxCYITKZBRd3JmATOl6Wz1MGUtQaRGiqhHwcjdI9U2WMR6ZQSWBnpP1whRndf238w70uu8E5GqDz&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfmnHt_V9NxIIhHbmqkj0IKfko9t6mjjubyUvjoCpDMw8A&oe=6955897E)*In the server’s main thread, spawning objects also leads to skipped updates.*

A similar pattern is seen in client traces.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452935617_512500534621236_8571856347165737758_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pz2DzYqj3hMQ7kNvwGSHRyr&_nc_oc=AdkLU9wbmJGFRDFJ77eAgC2iHceT_x2Q5XUtK4VTKbtF3fZ1SC3EDRjm_vBMDiZSjxrtHgkKE7HRDsTHaAFzGx7z&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AflpgzEQvW-xuHuBRuiSTaZG5Di48Gp90Qcqx9SGWibBig&oe=69557310)*ClientSpawn runs for 280 milliseconds on a secondary thread.*

Effects of spawning on the client’s main thread are more troublesome. Multiple calls can be seen disrupting the main thread:

* `SceneGraphTreeNodeLoader::GetEntityStatesFromTreeNode`
* `DataModel::CreateNodeFromEntityType`
* `ScriptingRuntimeIntegration::InstantiationSte` p
* `UnityCollisionComponentsService::InstantiationStep`
* `SubDRuntimeIntegration::InstantiationStep`
* `PhysicsRuntimeIntegration::InstantiationStep`

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452486020_512500617954561_1498065068073528888_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=NxjrvdB8w68Q7kNvwEM7rNW&_nc_oc=AdnGJq7V_cys1PeU6qKwj0i3nOiaL3NxmiUwrRz7J8SXdsKHfusCE6GgAUvTDdxIBcEBGsYJe9mwj5cK7g0yEPsV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfnFkl3IyjJcW3IN3gSlv0FbM58pOeQoof3voKdYmG0zuA&oe=69558E6C)*ClientSpawn disruptions on the main thread cause multiple long and skipped frames.*

### Potential solutions

#### Reduce or eliminate dynamic spawning

Do not dynamically spawn objects during game play if at all possible. Spawn everything needed before play begins. For games with multiple levels or rooms, display a loading or cut-scene while old objects are released and new ones are spawned.

#### Pre-warm objects

In some cases, such as weapons with projectiles, it may be beneficial to pre-warm (or pre-fire) the weapon after loading. Same with any object that has secondary effects when touched, shot, or otherwise interacted with.

#### Have limits in the code to control the number of objects created

While Object Spawning allows creators to create many objects while their world is active, it also affects the world’s object limit. Enforcing a maximum number of objects that can be spawned ensures the world stays within performant range and won’t break unintentionally.

#### Track objects to assess when they are no longer needed

Once an object spawns in-world, it exists as long as the world instance is active. Alternatively, the object can be proactively despawned if it is no longer needed.  You can make a script that monitors spawned objects to check if they can safely be removed without disrupting the player’s experience.

A few ways to implement this include:

* The player is X distance away from the object
* The player hasn’t interacted with the object for X minutes
* The object interaction is complete and sends an event indicating that it can be destroyed

#### Object pooling

If you find an object should be created and destroyed often, you might consider proactively spawning objects that are hidden in a pool when the world instance is created. You can then request and return objects from this pool when needed -  saving you time from spawning/despawning objects and allowing you to plan out your world based on the updated object limit. This optimization is called [Object Pooling](https://en.wikipedia.org/wiki/Object_pool_pattern) and is an implementation that you can add to your world.

#### Object pool definition example:

```
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

#### Object pool example:

```
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

## Custom UI optimization

Custom UI allows for maximum developer flexibility but misuse of the feature can *significantly* degrade performance. Because UIs are built with a Typescript API, optimizing your use of Typescript is a good first step. This section assumes you have a good understanding of the [Custom UI Typescript API](../../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md).

Highlights:

* We suggest keeping main thread CPU cost under 0.5ms per frame on the local client, and 1.5ms per frame on the server.
* Reduce the number of binding set calls.
* Binding set calls and callbacks are networked RPC events between the local client and server, so the total time of each async operation is bound by the network latency of the viewer.
* Do not define bindings without a concrete purpose. This may happen by writing a custom abstract API layer wrapping the base UI components (View, Image, Pressable, etc.), and defining bindings for every prop as a convenience to consumers. On the local client, a binding set operation passes the entire key-value store to ReactVR. So the bigger this gets, the greater the CPU cost to perform a single binding set.
* Animations, by way of periodic binding updates, should be implemented with care or not at all. This is due to the twofold nature of the bridge call frequency limits, and network latency and droughts/bursts associated with that. Consider using the [Animation API](../../Desktop%20editor/Custom%20UI/Animations%20for%20custom%20UI.md) instead when needing animations for UI.

![Architecutral diagram of the server-client relationship](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/501031261_729959856208635_1618126584846801507_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=lqMTbXtv1bsQ7kNvwHBzxCe&_nc_oc=AdnlO-SZGZVgoHVAYrBh65D6p2vmgZ3tanXIwV2bafhF_yK12BFHYR9CEzIHHPF89CgVQ5A1Li9vpXDfR_Zm4gEh&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfnEual2PujTcR837eXq54W3-ZvaJJpMkRj56wDYTgqPhw&oe=695582BE)
*Architectural diagram of the server-client relationship*

### Profiling UI

In the [Deep profiling](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#deep-profiling) section, you learn how to create a deep profile. In a deep profile, there is a bridge call and a network RPC event associated with every UI binding set and callback. These actions make up for all main thread synchronous costs associated with UI. Target a CPU total cost for all UI in the world of less than **0.5ms** per frame on the local client, and **1.5ms** per frame on the server.

From a Deep trace pulled into Perfetto, watch the synchronous cost of these markers:

- For binding sets, look at these traces:
  * Client:
  * `Verts::PollDriver::PreFrame`
  * `Verts::PollDriver::Rpc`
  * `CustomUI::UpdateBinding`
    - Server:
  * `ScriptingRuntime::Bridge::SetUIBindings`
  * `CustomUI::UpdateBinding::Send`
- For callbacks, look at these traces:
  * Client:
  * `Verts::Update`
    - Server:
  * `ScriptingRuntime::HandleEvent::customuicallbackinternal`
- Other useful traces:
  * `CustomUI::UpdateImage::Send` (server)
  * `CustomUI::UpdateImage` (client)
  * `CustomUI::InitializeState::Send` (server)
  * `CustomUI::InitializeState` (client)

One useful method to make sense of this in aggregate is to drag a 5 second block across the main thread and look at the total wall time for that marker, divided by 360. For `Verts::PollDriver::Rpc` in the screenshot below, that is **0.25 ms** (90.03099 wall duration in seconds divided by 360 frames).

![Verts::PollDriver::Rpc in Perfetto](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/501585933_729959869541967_3381825224616955454_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=VjO31VE0FnwQ7kNvwE8IaKX&_nc_oc=AdlYwjfZ3wOotjSdvWq3iKKH792M1n4sl68WEFH3x1DtjAQEh8XvYXzpcbzn4Ny4Zr_i2oUU3pTgkan2ws-2wKQx&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=686AHFAgPT95HVWKIu25sQ&oh=00_AfkRd8XyFzniRY-zdvpP7Sj_oWi0hTYn67-mg1PTNXMFGA&oe=69559120)

### Binding Set and Callback Frequency Limits

The following table shows the limit we have found for binding sets and callbacks. Exceeding this will likely exceed the **1ms** per frame cost limit outlined above.

| Custom UI operation | Server | Local client (one user) |
| --- | --- | --- |
| Binding set | <= 20 per frame (all users) | <= 10 per frame |
| Callback | <= 1 per 2 frames (all users) | <= 1 per 2 frames |

### Network latency limitations

The communication loop between a UI panel rendered on a client, and the associated TypeScript engine on the server, is limited by the network latency of the viewer. That can affect the following situations:

* Style changes based on raycast/mouse interaction events like OnHover
* Animations driven from TypeScript by a sequence of binding set updates over a period of creating/building Animations using the [Animation API](../../Desktop%20editor/Custom%20UI/Animations%20for%20custom%20UI.md).

Even working within the binding and callback limits above, viewers may notice UI delays associated with the network call round-trip.

### Memory usage

Textures by far outweigh any other memory cost associated with a UI entity. This includes a mandatory ~40 MB ReactVR panel render texture, as well as a copy of any texture asset referenced by a UI image component (once per UI entity that contains a reference to that asset, no matter how many times).

Setting the visibility of a UI entity to `false` frees all textures to garbage collection. As such, everything in the [Spawning objects](CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md#spawning-objects) section applies here, and toggling visibility can be a costly operation (especially on the server). Where possible, set the visibility of the UI entity to `true` at initialization, and leave it that way.