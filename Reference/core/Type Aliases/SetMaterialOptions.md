---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_setmaterialoptions
---

# [SetMaterialOptions type](#setmaterialoptions-type)

Options for the [MeshEntity.setMaterial()](../Classes/MeshEntity.md#setmaterial) method.

## [Signature](#signature)

```
export
 declare type 
SetMaterialOptions
 
=
 
{

    materialSlot
?:
 number 
|
 
string
;


};
```

## [Remarks](#remarks)

materialSlot - The index or the name of the material slot to update. If null or an empty string, the material is applied to slot 0.

