---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastoptions
---

# [RaycastOptions type](#raycastoptions-type)

Options for the [RaycastGizmo.raycast()](../Classes/RaycastGizmo.md#raycast) method.

## [Signature](#signature)

```ts
export declare type RaycastOptions = {
    layerType?: LayerType;
    maxDistance?: number;
    stopOnFirstHit?: boolean;
};
```

## [References](#references)

[LayerType](../Enumerations/LayerType.md)

## [Remarks](#remarks)

Members:\
`layerType` - `Player`, `Objects`, or `Both`.\
`maxDistance` - The maximum distance to send the raycast from the origin, from 0 (the origin) to 100 (farthest from the origin).\
`stopOnFirstHit` - If true, the raycast will stop on the first collision it meets, but will return a StaticHit if layer and tag don't match If false, the raycast will only find players/entities matching with the layer type and tag. Tags are defined in the Gizmo. No tag hits anything.

