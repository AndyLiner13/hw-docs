# Introduction to Asset Spawning

 Asset spawning and despawning allows creators to instantiate and destroy objects
at runtime. It does this through scripts powered by CodeBlocks and TypeScript.
When objects are tied to Assets pulled from the creator’s Asset Library, it
enables objects to be spawned so users can interact with them to perform in-world
actions.  
## Considerations

 Before deciding to add object spawning to a world, there are a few questions
you’ll want to answer to determine if object spawning and despawning benefits or
detracts from your world’s experience. Spawning and despawning has a performance
cost at runtime, especially when objects are spawned in quick succession.
Consider the following:
• How often will objects need to be created or removed for the experience?
• How many object variations does the world require?
• Do certain objects need to persist for the entire world experience?

 Note: See the Optimization Tips near the end of this document for information on
improving performance.  
## Implementing SpawnController

 The SpawnController object is a container for managing the spawning and
despawning of assets. You create a SpawnController object to contain a specified asset,
including position, rotation, and scale:  
```
// Controls the asset spawn
spawnController!: SpawnController;

this.spawnController = new SpawnController(
  myAsset,
  myPosition,
  myRotation,
  Vec3.one
  );
```
 The SpawnController contains:
• The asset you’d like to spawn (myAsset)
• The position for the spawned object as a Vec3 (myPosition)
• The rotation for the spawned object as a Quaternion (myRotation)
• The scale of the spawned object as a Vec3 (Vec3.one)

 A full example is listed below. After the SpawnController has been defined for the asset, the following methods
can be applied on the object:
|  |
|  |
| load() | Loads the asset specified in the SpawnController object into runtime memory. |
| spawn() | Spawns the asset from runtime memory into the location specified when you created the SpawnController object. If the load() method has not been called yet, it is automatically called before spawn(). The combined call to load() and spawn() is much longer than just calling spawn() by itself. |
| unload() | Unloads the SpawnController entity from the world. A reference to the spawn entity remains. The spawn entity can be reused by calling again the load() method. |
| dispose() | Destroys the SpawnController object. |

  
### Performance notes

 The load() method performs 0.5 ms/frame of spawning work, while spawn() performs
5 ms/frame of spawning work. If load() finished before calling spawn(), then the spawn() call has almost
nothing left to do. To finish the spawning, the spawn() method enables and makes
visible the entity at the specified location in a single frame and waits for
lighting of the entity to begin.  
## Asset Spawning and Despawning Example

 The following TypeScript example demonstrates how to spawn and despawn a wall
when the player steps on a trigger. The code:
1. Creates the asset variable `wallAsset` in the script.
2. Declares two CodeBlockEvents: one to trigger spawning, and the other to trigger
despawning.
3. Creates a `SpawnController` to control the spawning of the asset.
4. Uses the `SpawnController.spawn` function to spawn the asset once the trigger is activated.
5. Uses the `SpawnController.unload` function to delete the asset when the despawn trigger is received.

  
```
// Official documentation on TypeScript can be found here:
// https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

import { Component, PropTypes, CodeBlockEvent, SpawnController, Vec3 } from 'horizon/core';

const spawnTriggerEvent = new CodeBlockEvent<[]>('spawnEvent', []); // Will spawn asset.
const despawnTriggerEvent = new CodeBlockEvent<[]>('despawnEvent', []); // Will despawn asset.

class SimpleSpawn extends Component<typeof SimpleSpawn> {
 // Define the inputs available in the property panel
 // in the UI as well as default values.

  static propsDefinition = {
    wallAsset: { type: PropTypes.Asset },
  };

  // Controls the asset spawn
  spawnController!: SpawnController;

  // Called on world start.
  start() {
    this.spawnController = new SpawnController(this.props.wallAsset!, this.entity.position.get(), this.entity.rotation.get(), Vec3.one);

    // Handle when the user steps on trigger.
    this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
      this.spawnController.spawn();
    });

    // Handle when the user steps off  trigger.
    this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
      this.spawnController.unload();
    });
  }
}

// Tells the UI that your component can be attached to an entity.
Component.register(SimpleSpawn);
```
  
## Asset Spawning in VR

 You can also use CodeBlocks with a Trigger gizmo to trigger the asset spawning
script: ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578226_512510381286918_2130091807967526852_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=NBcGPjDqe70Q7kNvwFvoUxk&_nc_oc=AdmUK0giAhtEXOQ3fm03-9jCb_Q3qklgMnC8U0rVQvcF-MtBvOvKHoNzpoeM_6FhFa0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3ptEDE5bkfl41KRygM-CaA&oh=00_AfdDkbFLKPmKMUV2veRInc2UqbRb...
1. Create a trigger CodeBlock script to send the spawn and despawn events to an
object. These scripts can be different for the spawn and despawn, but in this case
we keep them together since they will be tied to the same trigger. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514526_512510377953585_8446492638471105033_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=JqyvP06VpiEQ7kNvwGzMNUh&_nc_oc=Adn65HGbhBBNX14e0rRX2Kjw9AtFqQCsOIxYrUdmQnt05nEkJM7lW3dSTUgCV_n-qlo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3ptEDE5bkfl41KRygM-CaA&oh=00_Afd0yTrnVxetzfM...
2. Create a Trigger gizmo and attach the CodeBlock script to the trigger. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452702326_512510374620252_2897307560533346680_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=TzYmeetO5gAQ7kNvwFz9fse&_nc_oc=Adk4P9pRBXMOXxA9-1K0utCxzz4J1HStAfMazJ6LOhTtuMrGOX4fRmm-AxGTbYVZXME&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3ptEDE5bkfl41KRygM-CaA&oh=00_AfdeQn...
3.  Create an object and attach the TypeScript script to it. Depending on the
application, it might be a good idea to make this object invisible.
4.  Attach the asset you would like to spawn in the asset field that appears when
you attach the script. This is done with the following steps:
  1. Navigate to your asset library from the build menu, then to the asset you want
to spawn.
  2. Select the view info (“i”) icon on that asset.
  3. On the property panel, scroll down to see the asset reference pill (a blue oval
containing the asset name).
  4. Select and drag this reference pill to the Asset Variable field “empty” on the
object’s property panel. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453003138_512510371286919_5172008865838978843_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=8GUtPcfGv6oQ7kNvwHMjhPx&_nc_oc=AdlfmSbwoC99qumDx2r6k4eUjK36TYcFSDIc4WcehnpvvFXEDOU2gZPEmy66eTUmzPw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3ptEDE5bkfl41KRygM-CaA&oh=00_AfdqLlU6o7CPE-FK6JWWR...
5. Finally, attach this script object to the Trigger gizmo.

 Once you are done, you should have a CodeBlock script attached to a Trigger
gizmo which in turn is attached to an object. The object should have the TypeScript
script attached to it as well as the asset to be spawned and despawned. ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746658_512510367953586_6703341356671159163_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=RNbY17tJ3oEQ7kNvwHxUs4B&_nc_oc=Adl3lSADWGqCDFEyp2szeCxNK4ni4fKBHFWoFy4WtNxaZE53eeMedbjWFVq0Ocrc9Gc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3ptEDE5bkfl41KRygM-CaA&oh=00_AfconJI-ZPSfCqq...
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
