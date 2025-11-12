Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastoptions

API reference

# RaycastOptions type

Options for the [RaycastGizmo.raycast()](/hw-docs/Reference/core/Classes/RaycastGizmo.md#raycast) method.

## Signature

```
export declare type RaycastOptions = {
    layerType?: LayerType;
    maxDistance?: number;
    stopOnFirstHit?: boolean;
};
```

## References

[LayerType](/hw-docs/Reference/core/Enumerations/LayerType.md)

## Remarks

Members:
`layerType` - `Player`, `Objects`, or `Both`.
`maxDistance` - The maximum distance to send the raycast from the origin, from 0 (the origin) to 100 (farthest from the origin).
`stopOnFirstHit` - If true, the raycast will stop on the first collision it meets, but will return a StaticHit if layer and tag don't match If false, the raycast will only find players/entities matching with the layer type and tag. Tags are defined in the Gizmo. No tag hits anything.