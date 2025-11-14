Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerraycasthit

# PlayerRaycastHit type

The result of a [raycast](/hw-docs/Reference/core/Classes/RaycastGizmo.md#raycastgizmo-class) collision against a [Player](/hw-docs/Reference/core/Classes/Player.md).

## Signature

```
export declare type PlayerRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Player;
    target: Player;
};
```

## References

[BaseRaycastHit](/hw-docs/Reference/core/Type%20Aliases/BaseRaycastHit.md), [RaycastTargetType.Player](/hw-docs/Reference/core/Enumerations/RaycastTargetType.md), [Player](/hw-docs/Reference/core/Classes/Player.md)