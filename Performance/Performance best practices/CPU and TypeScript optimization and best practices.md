Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/cpu-and-typescript-optimization-best-practices

# CPU and TypeScript optimization and best practices

## General recommendations

### Haptic feedback

It’s a good idea to use [Tracing](../Performance%20tools/Tracing.md) to verify the cost of haptic feedback in your world. In some cases, the cost can be extreme. In this case you should look into modifying/removing the haptic feedback.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0ff1710019166b2bcc3f9a241b729a80bc45a899954afbf07bc4c5c1271a0a1e.md)

### Overview
This image depicts a screenshot of a profiling tool interface, specifically Perfetto, which is used for performance analysis of applications. The main area of the interface displays a timeline with various colored bars representing different processes or events within an application trace. On the left side, there is a navigation pane with options for managing traces and viewing examples. The bottom section shows detailed information about a specific slice of the timeline.

### Key Elements
- **Timeline**: Located centrally, filled with horizontal bars of varying colors and lengths, indicating different processes or events over time.
    - **Visual description**: Bars are horizontal, rectangular shapes.
    - **Location**: Central area, spanning horizontally across the screen.
    - **Contents**: Text labels such as "PlayerLoop: Update," "WorldRunner: Update," etc., appear above some bars.
    - **Visual styling**: Bars have distinct colors like purple, green, red, and blue, with varying widths and lengths.
- **Navigation Pane**: Located on the left side.
    - **Visual description**: Vertical pane with a dark background.
    - **Location**: Left side of the screen.
    - **Contents**: Contains menu items like "Open trace file," "Record new trace," "Show timeline," etc.
    - **Visual styling**: White text on a dark background.
- **Current Trace**: Below the navigation pane, showing the current trace being analyzed.
    - **Visual description**: A smaller section with a light background.
    - **Location**: Below the navigation pane.
    - **Contents**: Displays the name of the current trace ("com.facebook.together.together.stable").
    - **Visual styling**: Light background with black text.
- **Details Section**: At the bottom, providing information about a specific slice of the timeline.
    - **Visual description**: A white section with black text.
    - **Location**: Bottom of the screen.
    - **Contents**: Includes fields like "Name," "Category," "Start time," "Duration," "Thread," "Process," and "SQL ID."
    - **Visual styling**: Black text on a white background.

### Visual Flow / Relationships
- **Most prominent visually**: The timeline with colored bars.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The timeline spans horizontally across the central area, with the navigation pane on the left and the details section at the bottom.

</details>

<p></p>

*In this example, haptic feedback takes ~7.8 ms per frame when active.*

### Trimesh and SubD don’t mix

If you have a trimesh world, having any SubD objects in it will incur additional CPU costs due to sunlight updates. Even if they are disabled/invisible they will still incur this extra performance cost. We recommend removing any and all SubD objects from trimesh worlds.

### Only enable necessary settings for 2D objects

When editing objects in Desktop Editor, ensure that only settings that are needed for the object are enabled.

For example, if the “Motion” property is set to “Animated”, components will be automatically added to account for that change (CollisionNotifier, Rigidbody, and a PhysicsComponentSG component).

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a0266e30315e90d08ec1090596a8897777f06d59489f38c40b97e0021d375409.md)

### Overview
The image displays a user interface from a game development environment, specifically showing the properties and inspector panels of an object named "Blue Frank." The interface includes sections for properties, behavior, attributes, and gameplay tags. The right side of the image shows the object's scripts and components, while the bottom part highlights a comparison between two states of the object's properties.

### Key Elements
- **Left Panel (Properties)**:
  - **Header**: "Properties" at the top.
  - **Icon**: A small icon labeled "[Icon] Blue Frank."
  - **Behavior Section**:
    - **Visible**: Toggle switch.
    - **Collidable**: Toggle switch.
    - **Motion**: Dropdown menu set to "Animated."
      - **Sub-elements**: "Play" and "Record" buttons.
    - **Animation**: Dropdown menu set to "Never."
    - **Loop**: Dropdown menu set to "Never."
    - **Speed**: Slider with value "1."
    - **Enable client smoothing**: Toggle switch.
  - **Attributes Section**:
    - **Position**: X: -9.37, Y: -24.9, Z: 39.8.
    - **Rotation**: X: 0.00, Y: 0.00, Z: -0.00.
    - **Scale**: X: 1.78, Y: 1.78, Z: 1.78.
    - **Billboard**: Dropdown menu set to "None."
    - **Color**: RGB values (0, 0, 0).

- **Bottom Section (Gameplay Tags)**:
  - **Search Bar**: "Search attached tags."
  - **Tag Placeholder**: "This object has no tags."

- **Right Panel (Inspector)**:
  - **Transform Section**:
    - **Position**: X: 0, Y: 0, Z: 0.
    - **Rotation**: X: 0, Y: 0, Z: 0.
    - **Scale**: X: 1.778252, Y: 0, Z: 0.
  - **Collision Notifier (Script)**:
    - **Script**: CollisionNotifier.
    - **Rigidbody**:
      - **Mass**: 1.
      - **Drag**: 0.
      - **Use Gravity**: Checked.
      - **Is Kinematic**: Checked.
      - **Interpolate**: None.
      - **Collision Detection**: Discrete.
  - **Physics Component SG (Script)**:
    - **Script**: PhysicsComponentSG.
    - **Base Config**: Checked.
    - **Override Config**: Checked.

- **Bottom Right Section (Comparison)**:
  - **Text**: "No Physics Component, Rigidbody, or CollisionNotifier."

### Visual Flow / Relationships
- **Most Prominent Element**: The "Motion" section in the left panel, as it is highlighted and contains interactive elements.
- **Arrows/Connections**: None explicitly shown.
- **Spatial Relationships**: The left panel is vertically aligned with the right panel, which is further divided into sections. The bottom section is a standalone comparison area.

</details>

<p></p>



Also, if objects won’t ever be seen by the player, then turn off visibility as well. Keep in mind that additional settings will add runtime cost to a world such as costs to Physics and Sunlight so recommend turning off settings that aren’t needed.

### Keep animator count low

A large number of active animators in a world can quickly add up to a significant amount of CPU time and degraded performance. Because of this, we recommend keeping the number of active animating objects as low as possible.

## Implement level of detail (LOD)

[Level of Detail](../../Desktop%20editor/Help%20and%20reference/Manual%20Level%20of%20Detail%20Overview.md) improves performance by reducing the complexity of objects that are far away from the player. This optimization decreases GPU workload by rendering fewer polygons and lower-detail assets for objects that occupy less of the screen. This results in faster rendering times and better overall performance.

## TypeScript optimization

Optimizing TypeScript can have some of the largest impact when trying to improve world performance.

### Deep profiling

You can use deep profiling to find out what the expensive bridge calls actually are and how much CPU time they use when tracing. Note that associating these calls directly back to a line of code is not currently automatic and you’ll have to manually find those in your code.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d1c14ae95b4c67acad44d1dae4b503d308c151c5c717af72ecbe28addb41a135.md)

### Overview
This image depicts a dialog box with two radio button options for selecting a trace type. The box is set against a hexagonal tiled floor background with pink confetti scattered around. The dialog box has a dark gray background with white text and blue accents.

### Key Elements
- **Title**: "Start a trace" displayed at the top of the dialog box.
- **Question**: "What type of trace do you want to run?" located below the title.
- **Options**:
  - **Overview**: A radio button option labeled "Overview" with a description underneath stating, "Set a baseline for how your world performs in visit mode. Viewable in Perfetto."
  - **Deep**: Another radio button option labeled "Deep" with a description underneath stating, "Uncover possible ways to optimize parts of your world. Viewable in Perfetto."
- **Buttons**:
  - **Start capture**: A blue button with white text that says "Start capture" located on the right side of the dialog box.
  - **Cancel**: A gray button with white text that says "Cancel" located at the bottom left of the dialog box.
- **Close Button**: A small white "X" icon located at the top right corner of the dialog box.

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself. The radio buttons are arranged vertically under the question, with the "Deep" option currently selected as indicated by the blue dot next to it. The "Start capture" button is positioned to the right of the dialog box, while the "Cancel" button is at the bottom left. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order moving from the question, through the options, and ending with the buttons.

</details>

<p></p>



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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/de68483e07d0b36c3b64ed43dc9ed12b778244d500ee4a531714b39d008695d6.md)

### Overview
This image depicts a user interface element showing properties related to a sound asset named "Air Boost End 01". The layout is structured with a header, a toggle switch, and a slider control.

### Key Elements
- **Header**: Located at the top, labeled "Properties". Contains a small icon resembling a cube with a gear inside, indicating settings or properties.
- **Asset Name**: Below the header, the name "Air Boost End 01" is displayed in a black rectangular box with white text.
- **Sound Section**: A collapsed section titled "Sound" is shown with expandable arrow indicators.
- **Preview Label**: Positioned under the "Sound" section, reads "Preview".
- **Play on Start Toggle**: A toggle switch located to the right of the "Preview" label, currently in the off state.
- **Play and Forget Toggle**: Another toggle switch next to "Play and Forget", which is in the on state.
- **Play Limit Slider**: A slider control labeled "Play Limit" with a value of "0".

### Visual Flow / Relationships
The most prominent visual element is the "Play and Forget" toggle switch due to its active state. The elements are arranged vertically, with labels to the left and controls to the right. There are no arrows or lines connecting elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8ac5445dec3aad68f18b2df73a3f88041dfeb63ff75ae0054a949b502c9090a3.md)

### Overview
This image depicts a timeline or Gantt chart-style visualization showing various tasks or processes labeled with their durations. The timeline is segmented into time intervals marked at the top, and tasks are represented as horizontal bars extending across these intervals.

### Key Elements
- **Timeline Bars**: These represent tasks or processes. They are colored differently to distinguish between them.
  - **GetAssetDataFrom...**: A green bar starting at 2.4 seconds and ending at 2.8 seconds.
  - **GetEntityCount**: An orange bar starting at 2.6 seconds and ending at 3.0 seconds.
  - **ClientSpawn**: A pink bar starting at 2.8 seconds and ending at 3.2 seconds.
  - **Create...**: A teal bar starting at 3.0 seconds and ending at 3.4 seconds.
  - **ServerSpawn**: A brown bar spanning from 2.8 seconds to 3.8 seconds.
- **Time Intervals**: Labeled at the top of the timeline, indicating the start times of the intervals.
- **Task Labels**: Located within the bars, providing names for the tasks.

### Visual Flow / Relationships
The timeline is linear, with tasks arranged horizontally according to their start times. The bars extend from left to right, indicating the duration of each task. There are no arrows or connectors, and the reading order follows the sequence of the timeline from left to right.

</details>

<p></p>

*ServerSpawn, in this trace, lasts over 1.5 seconds.*

Although ServerSpawn is not processed on the main thread, secondary effects are seen there.

Multiple calls can be seen in the trace:

* `DataModel::CreateNodeFromEntityType`
* `SceneGraphTreeNodeLoader::GetEntityStatesFromTreeNode`
* `ScriptingRuntimeIntegration::InstantiationStep`
* `DynamicLightsRuntimeIntegration::PostSpawnInstantiationStep`

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/eec6d7d23423dee9951dc3e0d701544d1661b07bf4d3db7556f8083e44bfcdf3.md)

### Overview
This image depicts a timeline or Gantt chart-style visualization showing various tasks or processes labeled with different categories and states. The timeline is divided into two main sections: "Main Thread 1" at the top and "Async 11361" at the bottom. Each task is represented by a colored bar indicating its duration and status.

### Key Elements
- **Main Thread 1**:
  - **Task Bars**: Multiple colored bars representing different tasks.
  - **Labels**: Text labels such as "Sce_DataMode", "Act...", "Sc_...", "ScriptingRuntime..." are visible within the bars.
  - **Colors**: Bars are filled with various shades of green, blue, red, and purple.
  - **Background**: A light gray background with a darker gray vertical line on the left side.
- **ServerSpawn**:
  - **Bar**: A large yellow bar spanning across both sections.
  - **Label**: "ServerSpawn" written above the bar.
- **Async 11361**:
  - **Task Bars**: Similar colored bars as in Main Thread 1.
  - **Labels**: Text labels such as "CreateAssetNodes", "InstantiateObjects", and "SpawnTreeEntities" are visible within the bars.
  - **Colors**: Bars are filled with shades of teal, pink, and orange.
- **UnityRuntime...**: 
  - **Bars**: Multiple bars with the label "UnityRuntime..." repeated several times.
  - **Colors**: Bars are filled with shades of red and teal.
- **DynamicLightsR...**: 
  - **Bar**: A single bar with the label "DynamicLightsR...".
  - **Color**: Filled with a red shade.
- **Other Elements**:
  - **Vertical Line**: A thin vertical line on the left side of the image.
  - **Horizontal Line**: A thin horizontal line separating the two main sections.

### Visual Flow / Relationships
- **Most Prominent**: The large yellow "ServerSpawn" bar.
- **Arrows/Connections**: No explicit arrows or connections are visible.
- **Spatial Relationships**: Bars are arranged horizontally, with some stacked vertically within the sections.

</details>

<p></p>

*In the server’s main thread, spawning objects also leads to skipped updates.*

A similar pattern is seen in client traces.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/8fbfbc7fcee7edaaabb6d0c8157685d00199305078aa3a672642ea8370eadca8.md)

### Overview
This image depicts a timeline or Gantt chart-style visualization showing various tasks or processes occurring over time. The timeline is segmented into time intervals marked at the top, and each task is represented by a colored bar indicating its duration and progress.

### Key Elements
- **Time Intervals**: Located at the top of the image, these represent the progression of time. Each interval is labeled with a timestamp.
- **Task Bars**: These are horizontal bars representing different tasks. Each bar has a distinct color and label.
    - **ConvertJSONToEntityTree**: A purple bar starting at 101.50 s.
    - **LoadSceneGraphFromEntityTree**: A light orange bar starting at 101.55 s.
    - **SceneGraphTreeNodeLoader.Lo**: A pink bar starting at 101.60 s.
    - **SceneGraphTreeNodeLoader.Pr**: A light purple bar starting at 101.65 s.
    - **[ConvertToT_**: A green bar starting at 101.70 s.
    - **[Remap] Rem**: A pink bar starting at 101.75 s.
    - **ClientSpawn**: A large magenta bar spanning from 101.50 s to 101.75 s.
    - **CreateAssetNodes**: A dark teal bar starting at 101.50 s.
    - **InstantiateObjects**: A light red bar starting at 101.65 s.
    - **SpawnTreeEntities**: A brown bar starting at 101.70 s.
    - **WBSceneGraphSnapshotDeserialization**: A teal bar starting at 101.70 s.

### Visual Flow / Relationships
The visual hierarchy is primarily determined by the length and color of the bars, which indicate the duration and importance of each task. The magenta bar for `ClientSpawn` is the longest, suggesting it is the most significant process. The bars are arranged horizontally, with no connecting lines or arrows, implying a linear sequence rather than a hierarchical or parallel relationship.

</details>

<p></p>

*ClientSpawn runs for 280 milliseconds on a secondary thread.*

Effects of spawning on the client’s main thread are more troublesome. Multiple calls can be seen disrupting the main thread:

* `SceneGraphTreeNodeLoader::GetEntityStatesFromTreeNode`
* `DataModel::CreateNodeFromEntityType`
* `ScriptingRuntimeIntegration::InstantiationSte` p
* `UnityCollisionComponentsService::InstantiationStep`
* `SubDRuntimeIntegration::InstantiationStep`
* `PhysicsRuntimeIntegration::InstantiationStep`

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/31cc74eda0f0ef1a8468665bc4c050a029b016548ec5d409814c6824c4391af4.md)

### Overview
This image depicts a timeline or log viewer interface, likely from a debugging tool or profiler. It shows a sequence of frames over time, with various events and states labeled within each frame. The timeline is segmented into time intervals marked at the top with timestamps.

### Key Elements
- **Timeline Header**: Located at the top, showing time intervals such as "101.50 s," "101.55 s," etc.
- **Frame Labels**: Each frame is labeled with "Frame" followed by a number or identifier.
- **Event Log**: Within each frame, there are entries that appear to represent different events or states. These are color-coded and include text labels like "PlayerLoop::Frame," "PlayerLoop::Update," "PlayerLoop::Render," among others.
- **Timestamps**: Time intervals are marked at the top of the timeline, indicating when each frame begins.
- **Color Coding**: Different colors are used to distinguish between various events or states within the same frame.

### Visual Flow / Relationships
- **Most Prominent Element**: The timeline itself, which spans across the entire width of the image.
- **Arrows/Connectors**: There are no arrows or connectors visible in this image.
- **Reading Order**: The timeline progresses from left to right, with each frame representing a snapshot of the system's state at a specific point in time.

</details>

<p></p>

*ClientSpawn disruptions on the main thread cause multiple long and skipped frames.*

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

<details>
<summary>Architecutral diagram of the server-client relationship</summary>

<p></p>

[Architecutral diagram of the server-client relationship](../../image_data/bf19dfd8d41e6de6d1d42ecf99caba6ee9a021a1f54a249f9894ccdadf9adb08.md)

### Overview
The image depicts a diagram illustrating a server-client interaction involving TypeScript runtime and CustomUIStateService components. The diagram uses arrows to indicate data flow between the server and client environments.

### Key Elements
- **Server Section**:
  - **Visual description**: A large rectangular box labeled "Server" at the top.
  - **Location**: Top section of the image.
  - **Contents**: Contains two smaller rectangles within the larger box labeled "TypeScript Runtime" and "CustomUIStateService".
  - **Visual styling**: Dark teal background with white text, bordered edges.

- **Client Section**:
  - **Visual description**: A large rectangular box labeled "Client" at the bottom.
  - **Location**: Bottom section of the image.
  - **Contents**: Contains two smaller rectangles within the larger box labeled "ReactVR (Redux store, Custom UI DOM)" and "CustomUIStateService".
  - **Visual styling**: Dark green background with white text, bordered edges.

- **Arrows**:
  - **Network RPC**: An arrow pointing downward from the server to the client.
  - **initialize()**: An arrow pointing downward from the server to the client.
  - **Binding.set()**: An arrow pointing downward from the server to the client.
  - **Callback**: An arrow pointing upward from the client to the server.

### Visual Flow / Relationships
- **Most prominent visually**: The large rectangular boxes labeled "Server" and "Client".
- **Arrows**: Indicate the direction of data flow between the server and client.
- **Spatial relationships**: The server box is above the client box, and the arrows connect specific components within the boxes.

</details>

<p></p>


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

<details>
<summary>Verts::PollDriver::Rpc in Perfetto</summary>

<p></p>

[Verts::PollDriver::Rpc in Perfetto](../../image_data/b8078b1be44b27a353b571d7c0417a419407ab823f900fc1828382eae4c1d0a7.md)

### Overview
This image depicts a user interface of a profiling tool, likely for analyzing performance data of a software application. The layout includes a navigation pane on the left, a timeline visualization in the center, and a table of performance metrics at the bottom.

### Key Elements
- **Navigation Pane (Left)**:
  - **Visual description**: A vertical sidebar with a dark theme.
  - **Location**: Left side of the image.
  - **Contents**: Contains options such as "Open trace file," "Record new trace," "Show timeline," "Download," "Query (SQL)," "Viz," "Metrics," "Info and stats," "Switch to legacy UI," "Convert to .json," "Convert to .sysrace," "Open Android example," and "Open Chrome example."
  - **Visual styling**: Dark background with white text and icons.

- **Timeline Visualization (Center)**:
  - **Visual description**: A horizontal timeline with colored bars representing different events or processes over time.
  - **Location**: Center of the image.
  - **Contents**: The timeline spans from 00:00:00 to 00:00:09, with timestamps marked every second.
  - **Visual styling**: White background with colored bars, some with labels indicating specific events.

- **Tree View (Center)**:
  - **Visual description**: A hierarchical tree view showing trace events and kernel threads.
  - **Location**: Center of the image, above the timeline.
  - **Contents**: Includes nodes labeled "Trace Events," "Misc Global Tracks," and "Kernel threads," with expandable/collapsible sections.
  - **Visual styling**: Dark background with white text and checkboxes next to each node.

- **Performance Table (Bottom)**:
  - **Visual description**: A table listing performance metrics.
  - **Location**: Bottom of the image.
  - **Contents**: Columns include "Name," "Wall duration (ms)," "Avg Wall duration (ms)," and "Occurrences." Rows show various functions and their respective durations and occurrences.
  - **Visual styling**: Light gray background with black text, bordered by a thin line.

### Visual Flow / Relationships
- **Most prominent visually**: The timeline visualization in the center.
- **Arrows/lines/connectors**: None explicitly shown.
- **Spatial relationships**: The timeline is below the tree view, and the performance table is at the bottom. The tree view branches out from the timeline, suggesting a relationship between the timeline events and the tree nodes.

</details>

<p></p>



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