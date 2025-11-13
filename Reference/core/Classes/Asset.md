Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_asset

# Asset Class

Represents an asset in Meta Horizon Worlds. An asset is a set of objects and scripts you can store in an asset library outside of a world instance, and then spawn into the world at runtime.

## Signature

```
export declare class Asset
```

## Remarks

Assets are stored in asset libraries that you can view and manage in Desktop Editor. The [SpawnController](/hw-docs/Reference/core/Classes/SpawnController.md) class provides a container for managing asset spawning and despsawning at runtime.
Asset spawning excels when spawning smaller sets of dynamic content, or content that needs to spawn at different locations in a world. For larger sets of static content that always spawns at the same location in the world, the [world streaming](/hw-docs/Reference/world_streaming_sublevelentity) API provides more optimal performance.
For information spawning and despawning assets, see the guide [Introduction to Asset Spawning](/hw-docs/Scripting/Asset%20spawning/Introduction%20to%20Asset%20Spawning.md).

## Constructors

|  |  |
| --- | --- |
| **(constructor)(id, versionId)** | Creates an instance of [Asset](/hw-docs/Reference/core/Classes/Asset.md).  ---  Signature  ``` constructor(id: bigint, versionId?: bigint); ```  Parameters  id: bigint  The ID of the asset.  versionId: bigint  *(Optional)* The version of the asset. |

## Properties

|  |  |
| --- | --- |
| **id**  [readonly] | The ID of the asset.      Signature  ``` readonly id: bigint; ``` |
| **versionId**  [readonly] | The version of the asset.      Signature  ``` readonly versionId: bigint; ``` |

## Methods

|  |  |
| --- | --- |
| **as(assetClass)** | Creates an instance of [Asset](/hw-docs/Reference/core/Classes/Asset.md) with the given ID.      Signature  ``` as<T extends Asset>(assetClass: Class<[bigint, bigint], T>): T; ```  Parameters  assetClass: [Class](/hw-docs/Reference/core/Interfaces/Class.md)<[bigint, bigint], T>  The class to instantiate for this asset.  Returns  T  The new object. |
| **fetchAsData(options)** | Retrieves the raw content of the asset, such as a text asset.      Signature  ``` fetchAsData(options?: Partial<FetchAsDataOptions>): Promise<AssetContentData>; ```  Parameters  options: Partial<[FetchAsDataOptions](/hw-docs/Reference/core/Type%20Aliases/FetchAsDataOptions.md)>  *(Optional)* The optional settings for the asset.  Returns  Promise<[AssetContentData](/hw-docs/Reference/core/Classes/AssetContentData.md)>  An AssetContentData object that stores the raw asset content and can return it in formats that are easier to use.  Remarks  Use this method to retrieve large amounts of data to populate the world. Not all assets can be parsed as data. Before calling this function, you must upload the asset to the asset library. The first time you fetch the asset content, it is loaded locally in the cache. This increases the speed of additional fetch attempts, which retrieve the data from the cache by default. In rare cases, the asset is updated outside of the world instance while the instance is running. In that case, you may want to ignore the cache and retrieve the updated data directly from the server. In the options parameter, this method provides an optional `skipCache` setting, which enables you to ignore the local cache when retrieving the asset content. You should not enable this feature unless the content was already updated while the world instance is live; otherwise, it will degrade the performance of your world. |
| **toJSON()** | Specifies data to serialize as JSON.      Signature  ``` toJSON(): {         id: bigint;         versionId: bigint;         _hzType: string;     }; ```  Returns  { id: bigint; versionId: bigint; \_hzType: string; }  A valid object that can be serialized as JSON. |
| **toString()** | Creates a human-readable representation of the object.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the object |