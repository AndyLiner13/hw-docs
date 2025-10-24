# MeshEntity Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) An [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) that uses a custom model.

## Signature

```typescript
export declare class MeshEntity extends Entity
```

## Remarks

A custom model is built outside of Meta Horizon Worlds with a 3D modeling tool exported as an .fbx file, and then consumed in the asset library by the asset pipeline.

## Properties

| Property | Description |
| --- | --- |
| style | The style of the MeshEntity. Signature style: EntityStyle; |

## Methods

| Method | Description |
| --- | --- |
| setMaterial(materialAsset, options) | Sets the material on a MeshEntity (custom model entity) to a material asset. Signature setMaterial(materialAsset: MaterialAsset, options?: SetMaterialOptions): Promise<void>; Parameters materialAsset: MaterialAsset A material asset from the asset library. options: SetMaterialOptions (Optional) Returns Promise<void>A promise that resolves when the material has been successfully updated. Examples class Button extends Component<typeof Button> { static propsDefinition = { material: {type: PropTypes.Asset}, materialSlot: {type: PropTypes.Number | Proptypes |
| setMesh(mesh, options) | Changes the mesh and optionally material of a MeshEntity (custom model entity). Signature setMesh(mesh: Asset, options: SetMeshOptions): Promise<void>; Parameters mesh: Asset The new custom model asset to use in the world. You must use a custom model asset that was consumed as a custom model in the asset pipeline. You cannot use a custom model asset that is saved as an asset within Meta Horizon Worlds. options: SetMeshOptions true if players can decide to use the new material that comes with the new custom model; false to use the current material. Returns Promise<void>A promise that resolves when the mesh (and material) has been successfully swapped. Examples import { Component, PropTypes, Entity, AudioGizmo, CodeBlockEvents, Asset } from '@early_access_api/v1'; import { MeshEntity, TextureAsset } from '@early_access_api/v1'; class |
| setTexture(texture, options) | Changes the texture of a MeshEntity (custom model entity) for the specified players. Signature setTexture(texture: TextureAsset, options?: SetTextureOptions): Promise<void>; Parameters texture: TextureAsset The asset containing the texture to apply. The asset must be a texture asset that has been consumed as a texture in the asset pipeline. options: SetTextureOptions (Optional) Indicates the players to apply the texture for. Returns Promise<void>A promise that resolves when the texture is successfully applied. Examples import { Component, PropTypes, Entity, AudioGizmo, CodeBlockEvents, Asset } from '@early_access_api/v1'; import { MeshEntity, TextureAsset } from  |
| toString() | Gets a human readable representation of the MeshEntity. Signature toString(): string; Returns stringA string representation of the MeshEntity. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_meshentity%2F)