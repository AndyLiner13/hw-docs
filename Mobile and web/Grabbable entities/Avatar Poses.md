Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/avatar-poses

# Avatar Poses

# Avatar Poses

The avatar’s pose specifies the position of the avatar, and the animation-set that plays when a grabbable is held. For example, in Arena Clash, if you set the starting pistol to use the **Pistol** avatar pose, it looks like this:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452522582_512533857951237_378261310109167575_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=sMmJDC1LZnAQ7kNvwHchZe-&_nc_oc=Adnj2g2PGfsz-QqVIQOlI5thk6nklmnTqexxxuUWeoQHF46-1I4YdXERAOSCdzrZPXU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_gDCxfHvIONDhQGQHw1-4Q&oh=00_Afmn8iaxnBGaudzxbkmARXhPVwDbfO2-APSNjTx5DdICMg&oe=694BB616)

When editing an entity, you can find the **Avatar Pose** property in the **More** section.

# Setting the Avatar Pose

You can choose an avatar pose according to how you want the user to hold and use the grabbable entity. The default pose holds the entity in the player’s hand with default animations. For example, running normally rather than aiming a weapon.

Different avatar poses play different animations. For example, **Sword** plays a swinging animation when playing **AvatarPoseAnimationNames.Fire**.

| ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452631575_512533731284583_2678556436957133234_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=oWufARn_QtQQ7kNvwEQGyGz&_nc_oc=AdkM3Jdx0luuDBLtakYk45_9ZD0voXADO-IFRFvNbToXO8bMbaUDqZ7vyEJtmMuAUY0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=_gDCxfHvIONDhQGQHw1-4Q&oh=00_AflX9ptczwEOeR3dbE7cPhfIsNm0KZGz3YqeralJmDBEfQ&oe=694BE1E9) | ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/524637212_776044154933538_5457085298144533773_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=H7UkV-nzYfYQ7kNvwEOY4NY&_nc_oc=Adk81sfHzGCZHQxDPDx7j65kclRkr9J1oiOVMGa_S3u7SL7z7fuViGma7BODAS4i78M&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_gDCxfHvIONDhQGQHw1-4Q&oh=00_AfmJ-wgCO8u23T3jaJcYxdnVtRSf0h2Sxt2ULauojAlS7A&oe=694BC57C) |
| :---- | :---- |

# Disable HWXS Grab Relax Animation

On mobile and web devices, avatars automatically relax their grip and lower the weapon after a few seconds.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/525356814_776044158266871_6237976970286260625_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nCRKtblfS84Q7kNvwFqFl5v&_nc_oc=AdmNiU501BS-4ZHeB2ZWSFmReHj9voVOR7xiOZfhHBdng_g9qyWY7822ztHaPtyijp0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=_gDCxfHvIONDhQGQHw1-4Q&oh=00_AfnxhmIqFoFMC-t3VfRHtcL4OQNNQTbfUmQ21l8pAQo80g&oe=694BE3E5)

To prevent this and allow the avatar to hold their pose, **disable** the **HWXS Grab Relax Animation** toggle found in the More section of the Properties panel.

| Enabled | Disabled |
| --- | --- |
|  |  |