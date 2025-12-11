Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/introduction-to-creating-worlds-for-mobile

# Introduction to creating worlds for mobile

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461801121_558937499977539_1061214547025883489_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=15N8NiVohxkQ7kNvwH1vih3&_nc_oc=Admi66iVeo2__Uxq8cuE6j9XiT93Hw17bP57AOAEuy2z67L_6ZMbKDsVrXwJ7SpH4LY-dm1bi6hKtaZ00Uao18LW&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=TUHv6PvrHrSgrd9XL73pbA&oh=00_Afn62pgpTxhkixRcsPquMuCX6gcQIZlbLnxne4S2RpT_QA&oe=695587D8)

Making your worlds available on mobile and web enables users to access worlds from any device and as a result, can unlock broader reach for your published worlds on Meta Horizon Worlds.

The best way to ensure your worlds show up in discovery surfaces to reach wider audiences is to optimize worlds for mobile. Some key things to consider:

* Ensure your world’s core functionality works on mobile. You can implement device-specific functionality using Code Blocks with [per platform scripting](../VR%20tools/Scripting/Per%20Platform%20Scripting.md).
* Ensure all text in the world is legible on mobile. You can [configure the camera](TypeScript%20APIs%20for%20mobile/Camera.md), make [screen-based UI](../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md), or use VFX, sounds and level geometry to communicate essential information.
* Consider portrait orientation support: In order to enable portrait orientation for your world you need to [configure camera settings for different orientations](../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) and use the [Portrait Camera API](../Scripting/API%20references%20and%20examples/Portrait%20Camera%20API.md) for orientation detection.
* Set up grabbable entities so a player’s avatar holds objects in a natural and usable way. Learn how to [create grabbable entities for web and mobile players in Meta Horizon Worlds](Grabbable%20entities/Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Start creating worlds for mobile now

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559190943_833836049154348_1338189310288348086_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=l-VqGkVUz6oQ7kNvwHPCQ3h&_nc_oc=AdnaKRigozEi11RlPXEM77zHhujQyHhf74JcstndQMl0cOgbGo5P3B_2gPC9E2-17rTm1C4kfkzv_7IflKuiiFrt&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=TUHv6PvrHrSgrd9XL73pbA&oh=00_AfnkzA0mJqrvG9tDlAG1ZLqEXE-Ndt3C1T64kXXq5oBnBg&oe=69559085)

Creating worlds for mobile is the same as creating worlds for VR. You use the VR editor to build your world, adding Code Blocks and functionality as desired, and then publish the world. All published worlds in Meta Horizon Worlds are available to play in the Meta Horizon App on mobile and on [horizon.meta.com](https://horizon.meta.com/) in the browser by default.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/460553022_547780904426532_3533426530060538066_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=uIF0p9Df-FUQ7kNvwGWengx&_nc_oc=AdlEBTWHYUhQ3L9319XfoEh1QIVXfvBrr94F8eLbObSj8d81NRWuHHZcUAfky48tvg4v0Pn1-0sbdxg0vygJGMCG&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=TUHv6PvrHrSgrd9XL73pbA&oh=00_AfmIhs2icDoTtLy1aAGQDbIk3VrXm1yTgVFUvBXLbfkEfA&oe=6955958F)

## Testing you world on mobile and web

For more information on testing your world on mobile and web visit [Testing worlds on mobile and web](Testing%20worlds%20on%20mobile%20and%20web.md).

## Publishing your world on mobile and web

Any world you create is available on web and mobile by default. To inform mobile players of a world’s level of mobile compatibility, worlds are tagged as Unsupported, Playable or Optimized for mobile in the Meta Horizon App, and in the Horizon menu when playing on mobile.

To exclude your world from being available on mobile, or for more information on the world review and tagging process visit [Publishing worlds on mobile](Publishing%20worlds%20on%20mobile.md).