---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller
---

# [SpawnController Class](#spawncontroller-class)

Extends *[SpawnControllerBase](SpawnControllerBase.md)*

Represents a controller used to spawn assets.\
For information about usage, see [Introduction to Asset Spawning](../../../Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md).

## [Signature](#signature)

```ts
export declare class SpawnController extends SpawnControllerBase 
```

## [Constructors](#constructors)

### [(constructor)(asset, position, rotation, scale)](#constructorasset-position-rotation-scale)

Creates a controller for spawning an asset.

**Signature**

```ts
constructor(asset: Asset, position: Vec3, rotation: Quaternion, scale: Vec3);
```

**Parameters**

asset: [Asset](Asset.md)

The asset to spawn.

position: [Vec3](Vec3.md)

The position of the asset in the world.

rotation: [Quaternion](Quaternion.md)

The rotation of the asset in the world.

scale: [Vec3](Vec3.md)

The scale of the asset in the world.

## [Properties](#properties)

### [asset \[readonly\]](#asset-readonly)

The asset that is currently being spawned.

**Signature**

```ts
readonly asset: Asset;
```

