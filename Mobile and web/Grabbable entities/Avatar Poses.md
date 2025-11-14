Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses

# Avatar Poses

# Avatar Poses

The avatar’s pose specifies the position of the avatar, and the animation-set that plays when a grabbable is held. For example, in Arena Clash, if you set the starting pistol to use the **Pistol** avatar pose, it looks like this:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452522582_512533857951237_378261310109167575_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=DC3z9Xheh2sQ7kNvwFWUPs-&_nc_oc=Admt2BDqXi0s5H7isQn643GwrR-yXEWPOnPEpunkF1LIVx207DCqppMcB5mu1WT7dh4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pNqNqGuD3hr7g9CuMVD4Vg&oh=00_Afi2wt1e7O5GgPPWSsxOF37Rq9Qok47rhwndXTQMdeFEVQ&oe=69311FD6)

When editing an entity, you can find the **Avatar Pose** property in the **More** section.

# Setting the Avatar Pose

You can choose an avatar pose according to how you want the user to hold and use the grabbable entity. The default pose holds the entity in the player’s hand with default animations. For example, running normally rather than aiming a weapon.

Different avatar poses play different animations. For example, **Sword** plays a swinging animation when playing **AvatarPoseAnimationNames.Fire**.

| ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452631575_512533731284583_2678556436957133234_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=1RPCec-_MOAQ7kNvwFN_EDc&_nc_oc=AdmdOBfbWmshwg4NvM78CNCD2HfCibcG0uEwh2ZOBTvAhbmC2NUV5IFQCDg0hhomKAQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=pNqNqGuD3hr7g9CuMVD4Vg&oh=00_AfgIzPaFoZmLgVC-6geOqu6WXxTe38CWPm1KBnkPoI7IQQ&oe=69311369) | ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/524637212_776044154933538_5457085298144533773_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=q1WzzK95RQkQ7kNvwFZM0Dz&_nc_oc=AdkOnYMaD2SVxbT_2RcBKc2uIaiokcUgIMrZa_9r5eL1zrNyWKMz2CyHNPfXbh1mJ08&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pNqNqGuD3hr7g9CuMVD4Vg&oh=00_Afgn_chbCXs35eNZLWnJNTCm5tbrwiwXxt4zUc4dULH4ww&oe=69312F3C) |
| :---- | :---- |

# Disable HWXS Grab Relax Animation

On mobile and web devices, avatars automatically relax their grip and lower the weapon after a few seconds.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/525356814_776044158266871_6237976970286260625_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q5QY3fx3S-kQ7kNvwE5Q6tq&_nc_oc=Adkz8ktSpw14Yi33QSUaswL3_5WcPKeQ_Zwzb3Xb9cHF0YWvW5u7PpiHdVKzZ96xpA4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=pNqNqGuD3hr7g9CuMVD4Vg&oh=00_AfiiKQEEaAdk-v6c-UBdqEdOx-01SNkmqhrSbdDCh67Q3Q&oe=69311565)

To prevent this and allow the avatar to hold their pose, **disable** the **HWXS Grab Relax Animation** toggle found in the More section of the Properties panel.

| Enabled | Disabled |
| --- | --- |
|  |  |