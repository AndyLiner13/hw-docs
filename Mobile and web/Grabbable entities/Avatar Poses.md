---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses
---

# [Avatar Poses](#avatar-poses)

# [Avatar Poses](#avatar-poses-1)

The avatar’s pose specifies the position of the avatar, and the animation-set that plays when a grabbable is held. For example, in Arena Clash, if you set the starting pistol to use the **Pistol** avatar pose, it looks like this:

![](../../_assets/images/fff394a5da3ecc83974c18ca1df5e22a0a5568201c3f6e879b3f7ab881c58a9c.png)

When editing an entity, you can find the **Avatar Pose** property in the **More** section.

# [Setting the Avatar Pose](#setting-the-avatar-pose)

You can choose an avatar pose according to how you want the user to hold and use the grabbable entity. The default pose holds the entity in the player’s hand with default animations. For example, running normally rather than aiming a weapon.

Different avatar poses play different animations. For example, **Sword** plays a swinging animation when playing **AvatarPoseAnimationNames.Fire**.

\| ![](../../_assets/images/a41da0bafb49b3e7f3a53b3ee526438345dab1cfceb787d3f5fd6e9fc972307e.png) | ![](../../_assets/images/5969c69f18544384b1ee51ed850a451772cefb332c9bc5f9dcd23e967457f11f.png) | | :---- | :---- |

# [Disable HWXS Grab Relax Animation](#disable-hwxs-grab-relax-animation)

On mobile and web devices, avatars automatically relax their grip and lower the weapon after a few seconds.

![](../../_assets/images/5868ea2817867d2c851d3d0c10a55576fb1586be38db0a305a2b5a67ddad0753.png)

To prevent this and allow the avatar to hold their pose, **disable** the **HWXS Grab Relax Animation** toggle found in the More section of the Properties panel.

| Enabled                                                                                      | Disabled                                                                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| ![](../../_assets/gifs/5f7f6178d40bba09f7fc511dafdca549c8ad8c6111e893f7111dce6e06493c05.gif) | ![](../../_assets/gifs/88526ba616ae722eef461cad92a17c00da23ff8ae2302774a9a5860f247ccc55.gif) |

