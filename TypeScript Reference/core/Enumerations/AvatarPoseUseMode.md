# AvatarPoseUseMode Enum

The modes to apply to the permission list that determines which players can use a specific avatar pose managed by an Avatar Pose gizmo.

## Signature

```typescript
export declare enum AvatarPoseUseMode
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| AllowUse | 1 | Enables the given players to use the avatar pose. |
| DisallowUse | 0 | Blocks the given players from using the avatar pose. |

## References

- [AvatarPoseGizmo.setCanUseForPlayers()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo#setcanuseforplayers) - Method that uses this enumeration to set permissions

## Remarks

You can set the permission list by calling the [AvatarPoseGizmo.setCanUseForPlayers()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposegizmo#setcanuseforplayers) method.

## Examples

### Setting Avatar Pose Permissions

```typescript
// Allow specific players to use the avatar pose
avatarPoseGizmo.setCanUseForPlayers(allowedPlayers, AvatarPoseUseMode.AllowUse);

// Block certain players from using the avatar pose
avatarPoseGizmo.setCanUseForPlayers(blockedPlayers, AvatarPoseUseMode.DisallowUse);
```