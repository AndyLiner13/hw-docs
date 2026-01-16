Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_staticraycasthit

# StaticRaycastHit type

The result of a [raycast](../Classes/RaycastGizmo.md#raycast) collision against a static [Entity](../Classes/Entity.md).

## Signature

```
export declare type StaticRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Static;
};
```

## References

[BaseRaycastHit](BaseRaycastHit.md), [RaycastTargetType.Static](../Enumerations/RaycastTargetType.md)