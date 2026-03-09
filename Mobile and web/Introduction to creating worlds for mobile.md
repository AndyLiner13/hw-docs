---
source: https://developers.meta.com/horizon-worlds/learn/documentation/create-for-web-and-mobile/introduction-to-creating-worlds-for-mobile
---

# Introduction to creating worlds for mobile

![](../_assets/images/05ec48a75f498a07759209ea13898ff7ea9e71e0f8c5df4cde825f51b018d2ab.png)

Making your worlds available on mobile and web enables users to access worlds from any device and as a result, can unlock broader reach for your published worlds on Meta Horizon Worlds.

The best way to ensure your worlds show up in discovery surfaces to reach wider audiences is to optimize worlds for mobile. Some key things to consider:

* Ensure your world’s core functionality works on mobile. You can implement device-specific functionality using Code Blocks with [per platform scripting](../VR%20tools/Scripting/Per%20Platform%20Scripting.md).
* Ensure all text in the world is legible on mobile. You can [configure the camera](TypeScript%20APIs%20for%20mobile/Camera.md), make [screen-based UI](../Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md), or use VFX, sounds and level geometry to communicate essential information.
* Consider portrait orientation support: In order to enable portrait orientation for your world you need to [configure camera settings for different orientations](../Gizmos/Spawn%20point%20gizmo.md#mobile-camera-options) and use the [Portrait Camera API](../Scripting/API%20references%20and%20examples/Portrait%20Camera%20API.md) for orientation detection.
* Set up grabbable entities so a player’s avatar holds objects in a natural and usable way. Learn how to [create grabbable entities for web and mobile players in Meta Horizon Worlds](Grabbable%20entities/Grabbable%20Entities%20On%20Mobile%20And%20Web.md).

## Start creating worlds for mobile now

![BROKEN_REF](https://scontent-dfw6-1.xx.fbcdn.net/v/t39.2365-6/559190943_833836049154348_1338189310288348086_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=dclP6VFVJD0Q7kNvwErBFho&_nc_oc=AdkkaoeBatZYlMtXuDWK5qw7HIg5BLFxo033aE00_HfYy1CoNfb-vzO2NZ5k42q4bSK_Mx87Oz5zOKPfsLLju90R&_nc_zt=14&_nc_ht=scontent-dfw6-1.xx&_nc_gid=ADtLLHCMM6pHfKQIrvjfMw&oh=00_Afr6PVTL60cQ8-nFv9gG_YNV7qoXAGyssePR2cfq4-Haow&oe=69842585)

Creating worlds for mobile is the same as creating worlds for VR. You use the VR editor to build your world, adding Code Blocks and functionality as desired, and then publish the world. All published worlds in Meta Horizon Worlds are available to play in the Meta Horizon App on mobile and on [horizon.meta.com](https://horizon.meta.com/) in the browser by default.

![](../_assets/images/a608c1c8f78292c4990db0056a6734cbfb360e55844a41869a188001e0a9e8c6.png)

## Testing you world on mobile and web

For more information on testing your world on mobile and web visit [Testing worlds on mobile and web](Testing%20worlds%20on%20mobile%20and%20web.md).

## Publishing your world on mobile and web

Any world you create is available on web and mobile by default. To inform mobile players of a world’s level of mobile compatibility, worlds are tagged as Unsupported, Playable or Optimized for mobile in the Meta Horizon App, and in the Horizon menu when playing on mobile.

To exclude your world from being available on mobile, or for more information on the world review and tagging process visit [Publishing worlds on mobile](Publishing%20worlds%20on%20mobile.md).