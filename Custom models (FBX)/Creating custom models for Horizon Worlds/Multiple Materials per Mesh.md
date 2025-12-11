Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/multiple-materials-per-mesh

# Multiple Materials per Mesh

You can assign multiple materials to a single mesh in an FBX file. This allows you to create objects that have different visual elements. For example, consider a skateboard object that has one material for the deck, another material for the trucks, and a third material for the wheels, all without using multiple meshes.

For more information about how to use materials, see [Materials Guidance and Reference for Custom Models](Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md).

## Defining materials in the FBX file

You can assign materials to the faces of the mesh in the DCC (Digital Content Creation) tool of your choice. When the mesh is imported into Horizon, a material slot is created for each material on the mesh. You can reference these slots by name or index, where the first material is in slot 0.

### Forcing a material slot order

When the order of material slots is important, Horizon uses the same naming convention as Unreal Engine. Add a suffix of `\_skin##` on the material name to define which slot it belongs in. For example, `Metal_skin00` would appear in slot 0 and `Wood_skin01` would appear in slot 1. The same slot number cannot be used twice and the slot number cannot be greater than or equal to the number of materials.

## Referencing material slots in the scripting API

You can reference material slots either by name or index. When you use indexes for material slots, index 0 represents the first material. Meshes with a single material always use material slot 0.

If you don’t specify a material slot, then the [`setMaterial`](https://horizon.meta.com/resources/scripting-api/core.meshentity.setmaterial.md/?api_version=2.0.0) function (including for Unity Asset Bundles) will set the material in slot 0. To set a material in a different material slot, refer to the slot by name or index.

The [`setTexture`](https://horizon.meta.com/resources/scripting-api/core.meshentity.settexture.md/?api_version=2.0.0) function sets the texture for the entire mesh.

Modifying tintColor or tintStrength in the [`EntityStyle`](https://horizon.meta.com/resources/scripting-api/core.entitystyle.md/?api_version=2.0.0) affects the entire mesh.

## Current limitations

When using multiple materials, masked materials and vertex texture color shading models have the following limitations:

- **Masked material:** Either all materials must be masked material or none can be. If a subset of submeshes are masked, the shadow and reflection intensity will be incorrect, treating them as if none are masked.
- **VertexTextureColor:** Either all materials must be VertexTextureColor or none can be. Using a mix of VertexTextureColor and other shading models will lead to unexpected behaviors.
- **UI Optimized only:** Swapping methods are supported only for UI Optimized (`_UIO`) materials.