Source: https://developers.meta.com/horizon-worlds/learn/documentation/tutorial-worlds/spawning-and-pooling-in-typescript/module-5-summary

Learn

# Module 5 - Summary

Congratulations! You have successfully completed the Spawning and Pooling in TypeScript tutorial world.

We have covered the primary spawning options available in Meta Horizon Worlds, including proper usage and trade-offs and considerations for each option.

* **Simple object spawning**: Spawning in objects one-by-one is easy to implement but is slow. This method is suitable for small numbers of assets and simpler assets.
* **Object pooling**: Assets can be spawned into an off-camera pooling location from which they can be moved into the world experience as needed. However, these assets still exist in the world, require management, and consume resources.
* **SpawnController**: At startup, you can load assets into SpawnController objects, which makes them readily available for spawning. When needed, they can be quickly spawned or unloaded from the world--and reloaded again if needed.

Visit the Complete world to try out the end-to-end experience! The two spawn options are placed side-by-side, so you can easily compare them.

## Extending the Tutorial

You can explore the following ideas for expanding on this tutorial.

### One array

It may be more efficient to turn `objList[]` and `objectPool[]` into a single multi-dimensional array. You could add a flag `inUse` to the array to determine if the entity is being used in the world at any time.

### Multiple asset types

You can expand the array(s) to enable use of multiple asset types. Asset types can be referenced by:

* Properties in the Properties panel (current method)
* Hard-coded asset IDs. These values must be captured to BigInt data type in your code and referenced using the asset.id property.
* JSON data loaded from an external resource can include other useful information, such as loadOnStart, maxEntities, and even previously undefined values like maxHitPoints.