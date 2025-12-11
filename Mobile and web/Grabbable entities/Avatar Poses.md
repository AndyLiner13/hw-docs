Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses

# Avatar Poses

# Avatar Poses

The avatar’s pose specifies the position of the avatar, and the animation-set that plays when a grabbable is held. For example, in Arena Clash, if you set the starting pistol to use the **Pistol** avatar pose, it looks like this:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452522582_512533857951237_378261310109167575_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=WGAtoPsUgKoQ7kNvwEaCSwr&_nc_oc=AdkEl2BHFSmijutg3l1S0FwQMznv5Wczv3Dfroz-LDfStiEjTBNoBTfJE4K2mMmcxbEVgKAeSgjIyBdbdImsyVmH&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AflSSHhkpI-IDUVVa4LFGXATJA6bZNaflAGPUCH5FAc6Ng&oe=69559956)

When editing an entity, you can find the **Avatar Pose** property in the **More** section.

# Setting the Avatar Pose

You can choose an avatar pose according to how you want the user to hold and use the grabbable entity. The default pose holds the entity in the player’s hand with default animations. For example, running normally rather than aiming a weapon.

Different avatar poses play different animations. For example, **Sword** plays a swinging animation when playing **AvatarPoseAnimationNames.Fire**.

| ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452631575_512533731284583_2678556436957133234_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=IRNtCdCJ8QIQ7kNvwG5qOLY&_nc_oc=AdloQ4PaziuOldDjPNHBXtL3G1NCezd7CTf1oE8optHYso766-S3loaIDLQRaMVCra4HeOtMwowIAZujPmBvzOOP&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AfmdBGpY5Cn_KL_AyAKY7DdLD64SoiF56ZiQbpeULT05JA&oe=69558CE9) | ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/524637212_776044154933538_5457085298144533773_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nYS0LUqU_7sQ7kNvwGeoRpy&_nc_oc=Adln1nYx_YNolnDmr8uI2VbyA0AEmYZsz5ihkA2eWwjtOuTvtAGXB57l3RwW7XdUMNi0Y2rp3Qp-JvIGVyHdemXH&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AfnI0_yDFZwreWfMjCjbZg5XRTEF0MMV0IFPdRZlL5sK0A&oe=6955707C) |
| :---- | :---- |

# Disable HWXS Grab Relax Animation

On mobile and web devices, avatars automatically relax their grip and lower the weapon after a few seconds.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/525356814_776044158266871_6237976970286260625_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=bc6gY0yv4hEQ7kNvwE1sGw-&_nc_oc=AdmH7fO8EnA-vO_RHmJd6P3I_fiHEXxE2__V3Gku6VU5_oyU95soRebkhrzFEa0Iy3x3NT1mYE50h-6AhwGx4gVp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=jY0wlas5zx0HISP5c8emEA&oh=00_AfmysewutSj7XT6DoPYZvA6BNL3UYIxqrN0B102y-_ZPew&oe=69558EE5)

To prevent this and allow the avatar to hold their pose, **disable** the **HWXS Grab Relax Animation** toggle found in the More section of the Properties panel.

| Enabled | Disabled |
| --- | --- |
|  |  |