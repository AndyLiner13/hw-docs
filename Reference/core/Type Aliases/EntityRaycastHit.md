Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityraycasthit

# EntityRaycastHit type

The result of a [raycast](/hw-docs/Reference/core/Classes/RaycastGizmo.md#raycast) collision against an [Entity](/hw-docs/Reference/core/Classes/Entity.md).

## Signature

```
export declare type EntityRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Entity;
    target: Entity;
};
```

## References

[BaseRaycastHit](/hw-docs/Reference/core/Type%20Aliases/BaseRaycastHit.md), [RaycastTargetType.Entity](/hw-docs/Reference/core/Enumerations/RaycastTargetType.md), [Entity](/hw-docs/Reference/core/Classes/Entity.md)