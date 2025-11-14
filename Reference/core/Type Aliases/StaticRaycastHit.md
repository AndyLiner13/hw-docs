Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_staticraycasthit

# StaticRaycastHit type

The result of a [raycast](/hw-docs/Reference/core/Classes/RaycastGizmo.md#raycastgizmo-class) collision against a static [Entity](/hw-docs/Reference/core/Classes/Entity.md).

## Signature

```
export declare type StaticRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Static;
};
```

## References

[BaseRaycastHit](/hw-docs/Reference/core/Type%20Aliases/BaseRaycastHit.md), [RaycastTargetType.Static](/hw-docs/Reference/core/Enumerations/RaycastTargetType.md)