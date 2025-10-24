# EntityRaycastHit type

The result of a [raycast](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo#raycast) collision against an [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity).

## Signature

```typescript
export declare type EntityRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Entity;
    target: Entity;
};
```

## References

[BaseRaycastHit](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_baseraycasthit), [RaycastTargetType.Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasttargettype), [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)