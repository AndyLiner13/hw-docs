# Spawn Failure Detection and Result Handling

[World.spawnAsset()](../../Reference/core/Classes/World.md#spawnassetasset-position-rotation-scale) documents a `Promise<Entity[]>` that resolves to the root entities inside the spawned asset, while [SpawnControllerBase.spawn()](../../Reference/core/Classes/SpawnControllerBase.md#spawn) documents a `Promise<void>` alongside separate [SpawnControllerBase.rootEntities](../../Reference/core/Classes/SpawnControllerBase.md#rootentities-readonly) and [SpawnControllerBase.spawnError](../../Reference/core/Classes/SpawnControllerBase.md#spawnerror-readonly) properties. Those two surfaces expose spawn results differently, so code that treats an empty entity array as the universal failure signal is relying on behavior that the current API reference does not explicitly promise.

The current [World.spawnAsset()](../../Reference/core/Classes/World.md#spawnassetasset-position-rotation-scale) reference says only that the promise resolves to the root entities within the asset. It does not say that a failed spawn resolves to an empty array. The official [Object Spawning and Despawning](../../Desktop editor/Objects/Object Spawning and Despawning.md) and [Optimization Tips](Optimization Tips.md) examples both process the returned array with `forEach`, which is naturally safe for zero or more results and does not assume a guaranteed first element.

If you need explicit failure notification, the current [Checking for Asset Spawn Events](Checking for Asset Spawn Events.md) guide and the [CodeBlockEvents.OnAssetSpawnFailed](../../Reference/core/Variables/CodeBlockEvents.md#onassetspawnfailed) reference both document a dedicated failure event. That means current official guidance does provide a failure-observation path for spawned assets, even though the event payload returns the requested asset rather than a root-entity array.

[SpawnControllerBase](../../Reference/core/Classes/SpawnControllerBase.md) exposes a second documented failure surface. [SpawnControllerBase.spawn()](../../Reference/core/Classes/SpawnControllerBase.md#spawn) resolves `Promise<void>`, while [SpawnControllerBase.rootEntities](../../Reference/core/Classes/SpawnControllerBase.md#rootentities-readonly) exposes the spawned entities and [SpawnControllerBase.spawnError](../../Reference/core/Classes/SpawnControllerBase.md#spawnerror-readonly) exposes the most recent [SpawnError](../../Reference/core/Enumerations/SpawnError.md). For controller-based spawning, the documented pattern is state and error inspection rather than array-length inspection.

The older [Asset Spawning Reference](../../Desktop editor/Assets/Asset Spawning Reference.md#current-limitations-as-of-june-2022) says there is "No failure detection" when an asset fails to spawn, but the newer [Checking for Asset Spawn Events](Checking for Asset Spawn Events.md), [CodeBlockEvents.OnAssetSpawnFailed](../../Reference/core/Variables/CodeBlockEvents.md#onassetspawnfailed), and [SpawnError](../../Reference/core/Enumerations/SpawnError.md) references all document explicit failure surfaces. Because those official sources disagree, the safest documented conclusion is that failure handling exists in the current API surface, but it should be based on events or controller error state rather than on an undocumented assumption that an empty [World.spawnAsset()](../../Reference/core/Classes/World.md#spawnassetasset-position-rotation-scale) result always means failure.

## Comparison of documented failure surfaces

| API surface | Documented success value | Documented failure signal | Safe handling pattern |
| --- | --- | --- | --- |
| [World.spawnAsset()](../../Reference/core/Classes/World.md#spawnassetasset-position-rotation-scale) | `Promise<Entity[]>` resolving to root entities in the asset | No current reference page says that failure resolves to an empty array | Iterate the returned array safely, and use [CodeBlockEvents.OnAssetSpawnFailed](../../Reference/core/Variables/CodeBlockEvents.md#onassetspawnfailed) if you need an explicit failure callback |
| [SpawnControllerBase.spawn()](../../Reference/core/Classes/SpawnControllerBase.md#spawn) | `Promise<void>` with spawned entities available through [SpawnControllerBase.rootEntities](../../Reference/core/Classes/SpawnControllerBase.md#rootentities-readonly) | [SpawnControllerBase.spawnError](../../Reference/core/Classes/SpawnControllerBase.md#spawnerror-readonly) plus [SpawnError](../../Reference/core/Enumerations/SpawnError.md) | Read controller state after spawning instead of inferring failure from array shape |

When code only needs the first root entity from [World.spawnAsset()](../../Reference/core/Classes/World.md#spawnassetasset-position-rotation-scale), a local guard keeps the code safe without asserting that an empty array is the platform's official failure contract.

```typescript
this.world.spawnAsset(this.props.assetToSpawn, spawnPosition).then((spawnedObjects) => {
  const firstRoot = spawnedObjects[0];

  if (firstRoot == null) {
    return;
  }

  for (const entity of spawnedObjects) {
    this.objList.push(entity);
  }
});
```