# SetMeshOptions type

Options that indicate whether players can choose to use new material from a custom model or keep the current material when updating the mesh of a custom model entity.

## Signature

```typescript
export declare type SetMeshOptions = {
    updateMaterial?: boolean;
};
```

## Remarks

`updateMaterial` - true to enable use of the new material; false to use the current material.

For information on updating the mesh of a custom model entity, see the [MeshEntity.setMesh()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_meshentity#setmesh) method.