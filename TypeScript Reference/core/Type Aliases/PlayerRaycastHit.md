# PlayerRaycastHit type

The result of a [raycast](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo#raycast) collision against a [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player).

## Signature

```typescript
export declare type PlayerRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Player;
    target: Player;
};
```

## References

[BaseRaycastHit](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_baseraycasthit), [RaycastTargetType.Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycasttargettype), [Player](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_player)