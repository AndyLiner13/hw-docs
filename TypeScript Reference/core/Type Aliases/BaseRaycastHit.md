# BaseRaycastHit type

The base class for the result of a [raycast](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo#raycast) collision.

## Signature

```typescript
export declare type BaseRaycastHit = {
    distance: number;
    hitPoint: Vec3;
    normal: Vec3;
};
```

## References

[Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)

## Remarks

This type provides the common properties for all raycast hit results including the distance to the hit point, the exact hit location, and the surface normal at the hit point.