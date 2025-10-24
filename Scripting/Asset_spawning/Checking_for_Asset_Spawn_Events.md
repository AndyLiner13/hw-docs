# Checking for Asset Spawn Events

 If you have actions to perform once an asset is spawned, despawned, or fails to
spawn, you can listen for the following CodeBlock events within your TypeScript
code. For details on listening for CodeBlock Events, see the [Built-In CodeBlock events section](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/events/codeblock-events#built-in-codeblock-event).
• `CodeBlockEvents.OnAssetSpawned`: Indicates the asset spawned, including the spawned entity.
• `CodeBlockEvents.OnAssetDespawned`: Fires when the asset is removed, including the despawned entity.
• `CodeBlockEvents.OnAssetSpawnFailed`: Fires when the asset fails to spawn.

 For API reference information, see the [CodeBlockEvents variable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_codeblockevents).  
### Example

  
```
this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetSpawned,
  (entity: Entity, asset: Asset) => {
    // Perform an action on the spawned Entity.
  });

this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetDespawned,
  (entity: Entity, asset: Asset) => {
    // Perform an action on the despawned Entity.
  });

this.connectCodeBlockEvent(
  this.entity,
  CodeBlockEvents.OnAssetSpawnFailed,
  (asset: Asset) => {
    // Log the asset that failed to spawn.
  });
```    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


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
