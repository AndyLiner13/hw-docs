Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_playerraycasthit

# PlayerRaycastHit type

The result of a [raycast](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/RaycastGizmo.md#raycast) collision against a [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md).

## Signature

```
export declare type PlayerRaycastHit = BaseRaycastHit & {
    targetType: RaycastTargetType.Player;
    target: Player;
};
```

## References

[BaseRaycastHit](/hw-mcp-tools/documentation/hw-docs/Reference/core/Type%20Aliases/BaseRaycastHit.md), [RaycastTargetType.Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/RaycastTargetType.md), [Player](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Player.md)