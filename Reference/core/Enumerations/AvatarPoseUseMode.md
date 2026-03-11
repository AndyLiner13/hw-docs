---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_avatarposeusemode
---

# [AvatarPoseUseMode Enum](#avatarposeusemode-enum)

The modes to apply to the permission list that determines which players can use a specific avatar pose managed by an Avatar Pose gizmo.

## [Signature](#signature)

```ts
export declare enum AvatarPoseUseMode 
```

## [Enumeration Members](#enumeration-members)

| Member      | Value | Description                                          |
| ----------- | ----- | ---------------------------------------------------- |
| AllowUse    | `1`   | Enables the given players to use the avatar pose.    |
| DisallowUse | `0`   | Blocks the given players from using the avatar pose. |

## [Remarks](#remarks)

You can set the permission list by calling the [AvatarPoseGizmo.setCanUseForPlayers()](../Classes/AvatarPoseGizmo.md#setcanuseforplayers) method.

