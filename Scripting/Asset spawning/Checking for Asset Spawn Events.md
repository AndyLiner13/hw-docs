Source: https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/checking-for-asset-spawn-events

# Checking for Asset Spawn Events

If you have actions to perform once an asset is spawned, despawned, or fails to spawn, you can listen for the following CodeBlock events within your TypeScript code. For details on listening for CodeBlock Events, see the [Built-In CodeBlock events section](../Events/CodeBlock%20Events.md#built-in-codeblock-event).

* `CodeBlockEvents.OnAssetSpawned`: Indicates the asset spawned, including the spawned entity.
* `CodeBlockEvents.OnAssetDespawned`: Fires when the asset is removed, including the despawned entity.
* `CodeBlockEvents.OnAssetSpawnFailed`: Fires when the asset fails to spawn.

For API reference information, see the [CodeBlockEvents variable](../../Reference/core/Variables/CodeBlockEvents.md).

### Example

```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetSpawned,
  (entity: Entity, asset: Asset) => {
    // Perform an action on the spawned Entity.
  });

this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetDespawned,
  (entity: Entity, asset: Asset) => {
    // Perform an action on the despawned Entity.
  });

this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetSpawnFailed,
  (asset: Asset) => {
    // Log the asset that failed to spawn.
  });
```