Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller

# SpawnController Class

Extends *[SpawnControllerBase](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontrollerbase)*

Represents a controller used to spawn assets.
For information about usage, see [Introduction to Asset Spawning](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning).

## Signature

```
export declare class SpawnController extends SpawnControllerBase
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(asset, position, rotation, scale)** | Creates a controller for spawning an asset.  ---  Signature  ``` constructor(asset: Asset, position: Vec3, rotation: Quaternion, scale: Vec3); ```  Parameters  asset: [Asset](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_asset)  The asset to spawn.  position: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  The position of the asset in the world.  rotation: [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion)  The rotation of the asset in the world.  scale: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  The scale of the asset in the world. |

## Properties

|  |  |
| --- | --- |
| **asset**  [readonly] | The asset that is currently being spawned.      Signature  ``` readonly asset: Asset; ``` |