# SetMaterialOptions type

Options for the [MeshEntity.setMaterial()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_meshentity#setmaterial) method.

## Signature

```typescript
export declare type SetMaterialOptions = {
    materialSlot?: number | string;
};
```

## Remarks

`materialSlot` - The index or the name of the material slot to update. If null or an empty string, the material is applied to slot 0.