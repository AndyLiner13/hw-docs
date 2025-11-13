Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetcontentdata

# AssetContentData Class

Parses and stores the raw content of an asset.

## Signature

```
export declare class AssetContentData
```

## Remarks

Not all assets can be retrieved as raw data. The asset is stored as a string currently. If you are using this as a JSON regularly, we currently recommend that you cache the JSON. Otherwise you should cache the object itself.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(assetContentData)** | Constructs a new instance of this class.  ---  Signature  ``` constructor(assetContentData: Array<string>); ```  Parameters  assetContentData: Array<string>  The content of the Asset. |

## Methods

|  |  |
| --- | --- |
| **asJSON()** | Parse the raw contents of the asset and returns it as a JSON object. template T Provides an interface type for the JSON object to return. For example "interface JSONData { a: string; b: string; }". Leave this as empty if you want a generic JSON object.      Signature  ``` asJSON<T = JSON>(): T | null; ```  Returns  T | null  A generic JSON object or a JSON object that uses a specific interface type. returns null if the content doesn't use JSON or the provided generic type. |
| **asText()** | Gets the content of the Asset as a string.      Signature  ``` asText(): string; ```  Returns  string  The raw content of the Asset as a string. |