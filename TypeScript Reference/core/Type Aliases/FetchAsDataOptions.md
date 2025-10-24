# FetchAsDataOptions type

The additional options for the [Asset.fetchAsData()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_asset#fetchasdata) method.

## Signature

```typescript
export declare type FetchAsDataOptions = {
    skipCache: boolean;
};
```

## Remarks

Type parameters:
`skipCache` - Indicates whether to ignore the local cache when fetching the asset data and to instead fetch the data from the server. This option is only useful when fetching the latest version of an asset while the world instance is live and the asset was previously updated in the same world instance. Otherwise, you should not enable this option because retrieving unnecessary data from the server will degrade performance when the cached data is already up to date.