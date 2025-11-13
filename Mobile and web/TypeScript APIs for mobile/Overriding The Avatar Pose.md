Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/typescript-apis-for-mobile/overriding-the-avatar-pose

# Overriding The Avatar Pose

You can programmatically override the avatar pose on a grabbable item at runtime. This approach lets you play a different set of animations. For example, you could use a gun in a melee attack by switching to the sword set. This is done by calling the following methods:

* [setAvatarGripPoseOverride](/hw-docs/Reference/core/Classes/Player.md#setavatargripposeoverride)
* [clearAvatarGripPoseOverride](/hw-docs/Reference/core/Classes/Player.md#clearavatargripposeoverride)

The existing avatar grip poses are defined in the [AvatarGripPose enumumeration](/hw-docs/Reference/core/Enumerations/AvatarGripPose.md).

The following example demonstrates how to override an avatar pose on a grabble item:

```
  fireGun(player: hz.Player){
    // Switch back to the default animation set
    player.clearAvatarPoseOverride();
    player.playAvatarPoseAnimationByName(AvatarPoseAnimationNames.Fire);
  }
  meleeAttack(player: Player) {
    // Switch to using the sword animation set
    player.setAvatarPoseOverride(AvatarPose.Sword);
    player.playAvatarPoseAnimationByName(AvatarPoseAnimationNames.Fire);
  }
```