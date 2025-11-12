Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller

API reference

# SpawnController Class

Extends *[SpawnControllerBase](/hw-docs/Reference/core/Classes/SpawnControllerBase.md)*

Represents a controller used to spawn assets.
For information about usage, see [Introduction to Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md).

## Signature

```
export declare class SpawnController extends SpawnControllerBase
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(asset, position, rotation, scale)** | Creates a controller for spawning an asset.  ---  Signature  ``` constructor(asset: Asset, position: Vec3, rotation: Quaternion, scale: Vec3); ```  Parameters  asset: [Asset](/hw-docs/Reference/core/Classes/Asset.md)  The asset to spawn.  position: [Vec3](/hw-docs/Reference/core/Classes/Vec3.md)  The position of the asset in the world.  rotation: [Quaternion](/hw-docs/Reference/core/Classes/Quaternion.md)  The rotation of the asset in the world.  scale: [Vec3](/hw-docs/Reference/core/Classes/Vec3.md)  The scale of the asset in the world. |

## Properties

|  |  |
| --- | --- |
| **asset**  [readonly] | The asset that is currently being spawned.      Signature  ``` readonly asset: Asset; ``` |