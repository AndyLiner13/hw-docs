Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning

Learn

# Introduction to Asset Spawning

Asset spawning and despawning allows creators to instantiate and destroy objects at runtime. It does this through scripts powered by CodeBlocks and TypeScript. When objects are tied to Assets pulled from the creator’s Asset Library, it enables objects to be spawned so users can interact with them to perform in-world actions.

## Considerations

Before deciding to add object spawning to a world, there are a few questions you’ll want to answer to determine if object spawning and despawning benefits or detracts from your world’s experience. Spawning and despawning has a performance cost at runtime, especially when objects are spawned in quick succession. Consider the following:

* How often will objects need to be created or removed for the experience?
* How many object variations does the world require?
* Do certain objects need to persist for the entire world experience?

**Note:** See the Optimization Tips near the end of this document for information on improving performance.

## Implementing SpawnController

The SpawnController object is a container for managing the spawning and despawning of assets. You create a SpawnController object to contain a specified asset, including position, rotation, and scale:

```
// Controls the asset spawn
spawnController!: SpawnController;

this.spawnController = new SpawnController(
  myAsset,
  myPosition,
  myRotation,
  Vec3.one
  );
```

The SpawnController contains:

* The asset you’d like to spawn (myAsset)
* The position for the spawned object as a Vec3 (myPosition)
* The rotation for the spawned object as a Quaternion (myRotation)
* The scale of the spawned object as a Vec3 (Vec3.one)

A full example is listed below.

After the SpawnController has been defined for the asset, the following methods can be applied on the object:

| **Method** | **Description** |
| --- | --- |
| load() | Loads the asset specified in the SpawnController object into runtime memory. |
| spawn() | Spawns the asset from runtime memory into the location specified when you created the SpawnController object. If the load() method has not been called yet, it is automatically called before spawn(). The combined call to load() and spawn() is much longer than just calling spawn() by itself. |
| unload() | Unloads the SpawnController entity from the world. A reference to the spawn entity remains. The spawn entity can be reused by calling again the load() method. |
| dispose() | Destroys the SpawnController object. |

### Performance notes

The load() method performs 0.5 ms/frame of spawning work, while spawn() performs 5 ms/frame of spawning work.

If load() finished before calling spawn(), then the spawn() call has almost nothing left to do. To finish the spawning, the spawn() method enables and makes visible the entity at the specified location in a single frame and waits for lighting of the entity to begin.

## Asset Spawning and Despawning Example

The following TypeScript example demonstrates how to spawn and despawn a wall when the player steps on a trigger. The code:

- Creates the asset variable `wallAsset` in the script.
- Declares two CodeBlockEvents: one to trigger spawning, and the other to trigger despawning.
- Creates a `SpawnController` to control the spawning of the asset.
- Uses the `SpawnController.spawn` function to spawn the asset once the trigger is activated.
- Uses the `SpawnController.unload` function to delete the asset when the despawn trigger is received.

```
// Official documentation on TypeScript can be found here:
// https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

import { Component, PropTypes, CodeBlockEvent, SpawnController, Vec3 } from 'horizon/core';

const spawnTriggerEvent = new CodeBlockEvent<[]>('spawnEvent', []); // Will spawn asset.
const despawnTriggerEvent = new CodeBlockEvent<[]>('despawnEvent', []); // Will despawn asset.

class SimpleSpawn extends Component<typeof SimpleSpawn> {
 // Define the inputs available in the property panel
 // in the UI as well as default values.

  static propsDefinition = {
    wallAsset: { type: PropTypes.Asset },
  };

  // Controls the asset spawn
  spawnController!: SpawnController;

  // Called on world start.
  start() {
    this.spawnController = new SpawnController(this.props.wallAsset!, this.entity.position.get(), this.entity.rotation.get(), Vec3.one);

    // Handle when the user steps on trigger.
    this.connectCodeBlockEvent(this.entity, spawnTriggerEvent, () => {
      this.spawnController.spawn();
    });

    // Handle when the user steps off  trigger.
    this.connectCodeBlockEvent(this.entity, despawnTriggerEvent, () => {
      this.spawnController.unload();
    });
  }
}

// Tells the UI that your component can be attached to an entity.
Component.register(SimpleSpawn);
```

## Asset Spawning in VR

You can also use CodeBlocks with a Trigger gizmo to trigger the asset spawning script:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452578226_512510381286918_2130091807967526852_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=qm7qvmrP1zsQ7kNvwG60j0G&_nc_oc=Adk2q-I4MdQIPRLFM3L9TGJ7Y8IGHpGe_8OSmdWO7OGe-icQPKMV_5GQB6vJWMEAzn8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-CM6WJxzx67_hnvFU6Ag5g&oh=00_AfjWGbn0Lczp5iIMvHBsj6M6jp84YteXsp9Q_ngmZ8pxCw&oe=692E9FBC)

- Create a trigger CodeBlock script to send the spawn and despawn events to an object. These scripts can be different for the spawn and despawn, but in this case we keep them together since they will be tied to the same trigger.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514526_512510377953585_8446492638471105033_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=WmCYIW4TZ2AQ7kNvwEbeVXc&_nc_oc=AdmuvnGQl8KKEeQ24Rlk64Rgk8wkO7lgTCzckJbX-IFTSDaUNOcKK-fBwMrt-lqNpsQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-CM6WJxzx67_hnvFU6Ag5g&oh=00_AfjKgyu8_iNiBrgVyxWA7kd5qOGdNvQ-LyWR8BRFEYVWxA&oe=692E9AB3)
- Create a Trigger gizmo and attach the CodeBlock script to the trigger.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452702326_512510374620252_2897307560533346680_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PSUaKz9bjyoQ7kNvwH9jS9k&_nc_oc=Adn8bZWANYi_ahSHl516YvnxWMzl04ypHpd4bABWI-fntkr1M1lOCC8OtUTh3WibOVg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-CM6WJxzx67_hnvFU6Ag5g&oh=00_AfgIFZsnTPnhEiIF-XrYuVx79_hYqTc_sr43qNt_WrON9Q&oe=692EC916)
- Create an object and attach the TypeScript script to it. Depending on the application, it might be a good idea to make this object invisible.
- Attach the asset you would like to spawn in the asset field that appears when you attach the script. This is done with the following steps:

  - Navigate to your asset library from the build menu, then to the asset you want to spawn.
  - Select the view info (“i”) icon on that asset.
  - On the property panel, scroll down to see the asset reference pill (a blue oval containing the asset name).
  - Select and drag this reference pill to the Asset Variable field “empty” on the object’s property panel. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/453003138_512510371286919_5172008865838978843_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=XJIZBZi0ZVsQ7kNvwEgJgbe&_nc_oc=Adl6O55hPlGuHvL5zevH59rG98GZYCyvxVUL01EAdR8OstxOI_XQf8g2i3di_6gEXsk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=-CM6WJxzx67_hnvFU6Ag5g&oh=00_AfhXTq_ojWobwnrxucx-OjZbFbz2vmldE16d9glpV7XpYQ&oe=692EBF88)
- Finally, attach this script object to the Trigger gizmo.

Once you are done, you should have a CodeBlock script attached to a Trigger gizmo which in turn is attached to an object. The object should have the TypeScript script attached to it as well as the asset to be spawned and despawned.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746658_512510367953586_6703341356671159163_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=ekH8yzTbSJUQ7kNvwGYUoQd&_nc_oc=Adkc6HE3CvkOzJTxaT1TkjHK6UQsn4mK8-nepnCpehaDw6ND9GYtsjTMQFlz7NIujmM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=-CM6WJxzx67_hnvFU6Ag5g&oh=00_AfgHR6CQztsfG97AEQ4uqYr2Nru8A1Y566Ke8Dfogxf_iw&oe=692E945B)