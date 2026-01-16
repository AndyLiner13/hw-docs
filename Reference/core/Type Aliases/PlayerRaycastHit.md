Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerraycasthit

# PlayerRaycastHit type

The result of a [raycast](../Classes/RaycastGizmo.md#raycast) collision against a [Player](../Classes/Player.md).

## Signature

```
export declare type PlayerRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Player;
    target: Player;
};
```

## References

[BaseRaycastHit](BaseRaycastHit.md), [RaycastTargetType.Player](../Enumerations/RaycastTargetType.md), [Player](../Classes/Player.md)