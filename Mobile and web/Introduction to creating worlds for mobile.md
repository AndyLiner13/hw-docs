Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/introduction-to-creating-worlds-for-mobile

# Introduction to creating worlds for mobile

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461801121_558937499977539_1061214547025883489_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZEd-grNstzgQ7kNvwHBMNK7&_nc_oc=Adlgyj4l2KGQIKq-6_t6BzAlUp-dsoHmmpF7ExnW71iKPIc-JiKTy1EENOWlhG-mdBw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=peMrchG3VC3oidfjYp7NLg&oh=00_Afjsvft93Wt5mgCoxEihR5MHm9TALgZ8HcP32D4TWsZ2gw&oe=69314698)

Making your worlds available on mobile and web enables users to access worlds from any device and as a result, can unlock broader reach for your published worlds on Meta Horizon Worlds.

The best way to ensure your worlds show up in discovery surfaces to reach wider audiences is to optimize worlds for mobile. Some key things to consider:

* Ensure your world’s core functionality works on mobile. You can implement device-specific functionality using Code Blocks with [per platform scripting](/hw-docs/VR%20tools/Scripting/Per%20Platform%20Scripting.md).
* Ensure all text in the world is legible on mobile. You can [configure the camera](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/player-camera), make [screen-based UI](https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/screen-based-ui), or use VFX, sounds and level geometry to communicate essential information.
* Consider portrait orientation support: In order to enable portrait orientation for your world you need to [configure camera settings for different orientations](/hw-docs/Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) and use the [Portrait Camera API](/hw-docs/Scripting/API%20references%20and%20examples/Portrait%20Camera%20API.md) for orientation detection.
* Set up grabbable entities so a player’s avatar holds objects in a natural and usable way. Learn how to [create grabbable entities for web and mobile players in Meta Horizon Worlds](/hw-docs/Mobile%20and%20web/Grabbable%20entities/Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Start creating worlds for mobile now

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559190943_833836049154348_1338189310288348086_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=h9BiO9UAn1wQ7kNvwGTj_xm&_nc_oc=AdlZ7iwY6_XuPbmIzlp72yD-KYcUY-25Bz_YJ_V58-8QudjAJrOHmixR0bM853QzxoA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=peMrchG3VC3oidfjYp7NLg&oh=00_Afgg9RuuK2DovkvWwCrCNMLLMoMhp1cjePgN92w7kOlCkA&oe=69311705)

Creating worlds for mobile is the same as creating worlds for VR. You use the VR editor to build your world, adding Code Blocks and functionality as desired, and then publish the world. All published worlds in Meta Horizon Worlds are available to play in the Meta Horizon App on mobile and on [horizon.meta.com](https://horizon.meta.com/) in the browser by default.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/460553022_547780904426532_3533426530060538066_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=fETyk6kh5GAQ7kNvwFBZVB9&_nc_oc=AdkmCq3dzijn89DMXG70pJ08AE-wS4IoMCFL_2VTUAb_f2AtCOvzVtQZPlQKMrZEwQo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=peMrchG3VC3oidfjYp7NLg&oh=00_Afh-r6QBs2GHTBIAAz4mPlFRfoGe97vzFz_dwYtfB5y6aw&oe=69311C0F)

## Testing you world on mobile and web

For more information on testing your world on mobile and web visit [Testing worlds on mobile and web](/hw-docs/Mobile%20and%20web/Testing%20worlds%20on%20mobile%20and%20web.md).

## Publishing your world on mobile and web

Any world you create is available on web and mobile by default. To inform mobile players of a world’s level of mobile compatibility, worlds are tagged as Unsupported, Playable or Optimized for mobile in the Meta Horizon App, and in the Horizon menu when playing on mobile.

To exclude your world from being available on mobile, or for more information on the world review and tagging process visit [Publishing worlds on mobile](/hw-docs/Mobile%20and%20web/Publishing%20worlds%20on%20mobile.md).