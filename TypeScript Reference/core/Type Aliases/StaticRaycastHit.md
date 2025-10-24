# StaticRaycastHit type

The result of a [raycast](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo#raycast) collision against a static [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity).

## Signature

```typescript
export declare type StaticRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Static;
};
```

## References

[BaseRaycastHit](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_baseraycasthit), [RaycastTargetType.Static](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasttargettype)