Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityraycasthit

# EntityRaycastHit type

The result of a [raycast](../Classes/RaycastGizmo.md#raycast) collision against an [Entity](../Classes/Entity.md).

## Signature

```
export declare type EntityRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Entity;
    target: Entity;
};
```

## References

[BaseRaycastHit](BaseRaycastHit.md), [RaycastTargetType.Entity](../Enumerations/RaycastTargetType.md), [Entity](../Classes/Entity.md)