Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposeusemode

# AvatarPoseUseMode Enum

The modes to apply to the permission list that determines which players can use a specific avatar pose managed by an Avatar Pose gizmo.

## Signature

```
export declare enum AvatarPoseUseMode
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| AllowUse | `1` | Enables the given players to use the avatar pose. |
| DisallowUse | `0` | Blocks the given players from using the avatar pose. |

## Remarks

You can set the permission list by calling the [AvatarPoseGizmo.setCanUseForPlayers()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/AvatarPoseGizmo.md#setcanuseforplayers) method.