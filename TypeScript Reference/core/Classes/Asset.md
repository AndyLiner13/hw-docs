# Asset Class

Represents an asset in Meta Horizon Worlds. An asset is a set of objects and scripts you can store in an asset library outside of a world instance, and then spawn into the world at runtime.

## Signature

```typescript
export declare class Asset
```

## Remarks

Assets are stored in asset libraries that you can view and manage in Desktop Editor. The [SpawnController](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_spawncontroller) class provides a container for managing asset spawning and despsawning at runtime.

Asset spawning excels when spawning smaller sets of dynamic content, or content that needs to spawn at different locations in a world. For larger sets of static content that always spawns at the same location in the world, the [world streaming](https://developers.meta.com/horizon-worlds/reference/2.0.0/world_streaming_sublevelentity) API provides more optimal performance.

For information spawning and despawning assets, see the guide [Introduction to Asset Spawning](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/asset-spawning/introduction-to-asset-spawning).

## Constructors

| Constructor | Description |
| --- | --- |
| `(constructor)(id, versionId)` | Creates an instance of Asset.<br/>**Signature:** `constructor(id: bigint, versionId?: bigint);`<br/>**Parameters:** id: bigint - The ID of the asset. versionId: bigint (Optional) - The version of the asset. |

## Properties

| Property | Description |
| --- | --- |
| `id` [readonly] | The ID of the asset.<br/>**Signature:** `readonly id: bigint;` |
| `versionId` [readonly] | The version of the asset.<br/>**Signature:** `readonly versionId: bigint;` |

## Methods

| Method | Description |
| --- | --- |
| `as(assetClass)` | Creates an instance of Asset with the given ID.<br/>**Signature:** `as<T extends Asset>(assetClass: Class<[bigint, bigint], T>): T;`<br/>**Parameters:** assetClass: Class<[bigint, bigint], T> - The class to instantiate for this asset.<br/>**Returns:** T - The new object. |
| `fetchAsData(options)` | Retrieves the raw content of the asset, such as a text asset.<br/>**Signature:** `fetchAsData(options?: Partial<FetchAsDataOptions>): Promise<AssetContentData>;`<br/>**Parameters:** options: Partial<FetchAsDataOptions> (Optional) - The optional settings for the asset.<br/>**Returns:** Promise<AssetContentData> - An AssetContentData object that stores the raw asset content and can return it in formats that are easier to use.<br/>**Remarks:** Use this method to retrieve large amounts of data to populate the world. Not all assets can be parsed as data. Before calling this function, you must upload the asset to the asset library. The first time you fetch the asset content, it is loaded locally in the cache. This increases the speed of additional fetch attempts, which retrieve the data from the cache by default. |
| `toJSON()` | Specifies data to serialize as JSON.<br/>**Signature:** `toJSON(): { id: bigint; versionId: bigint; _hzType: string; };`<br/>**Returns:** { id: bigint; versionId: bigint; _hzType: string; } - A valid object that can be serialized as JSON. |
| `toString()` | Creates a human-readable representation of the object.<br/>**Signature:** `toString(): string;`<br/>**Returns:** string - A string representation of the object |