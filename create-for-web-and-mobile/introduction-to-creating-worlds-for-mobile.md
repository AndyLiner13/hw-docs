Source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/introduction-to-creating-worlds-for-mobile

# Introduction to creating worlds for mobile

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461801121_558937499977539_1061214547025883489_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=DpPeHMVvI1wQ7kNvwENSI6X&_nc_oc=AdnX9g3QtgiT1Acvs-WQzB5I_kRTlN0hJCNWyRHjM2QlHh_ecO8bxaxH41eQy5A3V8o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=vF7BbHI5eiZiBl8De9LSdw&oh=00_AfitCMNj_Yn8YK4DhZCPwnjVH-4D-p1ima1EmrmStj6rSQ&oe=692C0098)

Making your worlds available on mobile and web enables users to access worlds from any device and as a result, can unlock broader reach for your published worlds on Meta Horizon Worlds.

The best way to ensure your worlds show up in discovery surfaces to reach wider audiences is to optimize worlds for mobile. Some key things to consider:

* Ensure your world’s core functionality works on mobile. You can implement device-specific functionality using Code Blocks with [per platform scripting](/horizon-worlds/learn/documentation/create-for-web-and-mobile/codeblocks-for-mobile/per-platform-scripting).
* Ensure all text in the world is legible on mobile. You can [configure the camera](/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/player-camera), make [screen-based UI](/horizon-worlds/learn/documentation/create-for-web-and-mobile/tools-for-creating-worlds-for-mobile/screen-based-ui), or use VFX, sounds and level geometry to communicate essential information.
* Consider portrait orientation support: In order to enable portrait orientation for your world you need to [configure camera settings for different orientations](/horizon-worlds/learn/documentation/code-blocks-and-gizmos/use-the-spawn-point-gizmo#mobile-camera-options) and use the [Portrait Camera API](/horizon-worlds/learn/documentation/typescript/api-references-and-examples/portrait-camera-api) for orientation detection.
* Set up grabbable entities so a player’s avatar holds objects in a natural and usable way. Learn how to [create grabbable entities for web and mobile players in Meta Horizon Worlds](/horizon-worlds/learn/documentation/create-for-web-and-mobile/grabbable-entities/create-grabbable-entities).

## Start creating worlds for mobile now

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/559190943_833836049154348_1338189310288348086_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=NKiPGcRnR3sQ7kNvwH7DFnF&_nc_oc=Adms1X2l9dkMB4Kck4sszsJqcMcFPRE7PqnDYqIk8HPQpqMIphAR0HKCRYjggPK06as&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=vF7BbHI5eiZiBl8De9LSdw&oh=00_AfjKLuYKW3ucNOM39coHwXlYOfO-eFgJ_0kO_SkL5FKakQ&oe=692C0945)

Creating worlds for mobile is the same as creating worlds for VR. You use the VR editor to build your world, adding Code Blocks and functionality as desired, and then publish the world. All published worlds in Meta Horizon Worlds are available to play in the Meta Horizon App on mobile and on [horizon.meta.com](https://horizon.meta.com/) in the browser by default.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/460553022_547780904426532_3533426530060538066_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=pZAYrSfg7RkQ7kNvwFd5RtP&_nc_oc=AdnKWwK3AFszVebmkMuaDgduOXvi-X9QGMWUAHGptX3LuhqX_9vyHEjKcPDnrHtXJiQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=vF7BbHI5eiZiBl8De9LSdw&oh=00_AfiNbx5Wgl_p4wCvG8eB7Xq-sEXFjfx-pfb5pV69mWbdWQ&oe=692C0E4F)

## Testing you world on mobile and web

For more information on testing your world on mobile and web visit [Testing worlds on mobile and web](/horizon-worlds/learn/documentation/create-for-web-and-mobile/how-to-test-on-web-and-mobile).

## Publishing your world on mobile and web

Any world you create is available on web and mobile by default. To inform mobile players of a world’s level of mobile compatibility, worlds are tagged as Unsupported, Playable or Optimized for mobile in the Meta Horizon App, and in the Horizon menu when playing on mobile.

To exclude your world from being available on mobile, or for more information on the world review and tagging process visit [Publishing worlds on mobile](/horizon-worlds/learn/documentation/create-for-web-and-mobile/publishing-worlds-on-mobile).