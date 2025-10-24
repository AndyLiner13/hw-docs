# Mirror gizmo

## Limitations


• In a mirror-enabled world, all players in the world will be able to see and use
the shutter button to take a photo.
• Only 16:9 and 9:16 aspect ratio are supported.
• There is usually a negligible impact from using the mirror gizmo with default
configuration, however that impact can change based on what the mirror faces, the
complexity of the world, and when you choose to render the mirror. See the Properties for configuration options and Performance consideration sections for more details.

  

## Performance considerations


• For the [best performance](https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/introduction-to-performance), avoid facing the mirror toward areas with many moving objects.
• With the same configurations, mirror scale does not impact performance.
• Mirror performance scales well with world complexity. Expect minimal increase of
0 to 5% for both CPU and GPU utilization.

  

# Mirror gizmo

## Access the mirror gizmo

 The following steps show you how to access the mirror gizmo from the VR tool and
place it in the world. But before you begin, make sure you're familiar with the
following topics:
• Access an [existing world or create a new world](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon)
• Use the [controllers in the Build mode](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/using-controllers-in-build-mode)
• [Preview mode](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/preview-mode)


1. Open the Meta Horizon Worlds app on your VR headset and click Create to access the Creator Home.
2. Select the world you want to edit or create a new world.
3. By default, you enter the world in the [Preview mode](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/preview-mode).
4. Using the [disk UI](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/preview-mode) from your right controller and switch to the Build mode.
5. Click on the menu button on your left controller.
6. Click Gizmo > Mirror Gizmo.
7. Use the three-dot menu to place the gizmo in your world.
8. Use the Grab tool, the teardrop shaped cursor, to select the gizmo.
9. Use the thumbstick to select the three-dot menu on the disk UI and open the
Properties panel.
10. You can now edit the new gizmo properties in the Properties panel.

# Mirror gizmo

## Properties

 The following highlights some of the key configuration options for the mirror
gizmo in the Properties panel.
|  |
|  |
| Visible | true | Controls whether the gizmo is enabled. Note: This should not be used to change visibility during the experiment phase. |   |
| Photo Capture | true | Enables photo capture functionality. |   |
| Name Tag Visibility | Show | Sets whether player name tags will appear in the mirror gizmo, including pictures. |   |
| Has Edit Avatar Button | false | Enables button that opens edit avatar screen. |   |
| Does Edit Avatar Go To Closet | false | Clicking the Edit Avatar button will navigate to the closet tab. |   |
| Has Frame | true | Shows a grey frame around the gizmo. Re-enter the world to see the frame enabled or disabled. |   |
| Aspect Ratio | 9:16 (portrait) | There are 2 aspect ratios available: 9:16 (portrait) and 16:9 (landscape). This is the only way to correctly set mirror perspectives. Do not try to use attributes scale to change aspect ratio. |   |
| Render Radius | 16 (meters) | How far moving things will be rendered in the mirror. | Lower radius leads to better performance |
| Near/Far LOD Radius | 3 (near) to 15 (far) | At near radius the mirror will use Near Resolution and Near FPS. At far radius the mirror will use Far Resolution and Far FPS. Distance in between will have interpolated values based on Near/Far Resolution and FPS. | Lower LOD Radius leads to better performance |
| Near/Far Resolution | 540p (near) to 360p (far) | The reflection resolution of the mirror image based on LOD Radius. | The higher resolution the worse the performance may be. |
| Near/Far Camera FPS | 30 (near) to 20 (far) | The frame rate of the mirror updates based on LOD Radius | The higher the FPS is set, the worse performance will be. |

 For example, to resize the mirror, you can resize the mirror by changing the Scale values in Properties > Attributes or by using both [controllers](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/using-controllers-in-build-mode) to pull the mirror apart, like resizing a desktop window. Note: The x, y, z scale values should all be the same value when setting the
attributes. The following shows you how to configure the gizmo's properties in VR.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974860_1582777578979793_4578442253378448808_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=gfg3a_UVqsYQ7kNvwF82asC&_nc_oc=AdklwWkeW_6DFzb4rVhqoNs6qwIlyr2mxiG9RjMZxvS4H8cVZOB8m79CjaV7eZVGa_I&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Affal9Fiw8tEZzRfRiRqvQEHkvprRgA3g...

# Mirror gizmo

## Take photos and edit your avatar

 After placing the gizmo in your world and configuring the properties, you can
take a photo and edit your avatar directly from the mirror. The following shows you how to take a photo.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974721_499114159825081_5750543788586459815_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=jwKdHvTy6qAQ7kNvwGAllFh&_nc_oc=Adk7RTeLzjuup2ghpjzc_bi8x8wcyO6iDHukYMxng8rLvrbvPPQ891I5d1StsUP4TgA&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfcutG1hVerv0guq6SBWCu8GGyB90
 The following shows you how to edit your avatar.![Image](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982534_585330297294458_1498502693454280462_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ciAnFFdepFMQ7kNvwHBLL5f&_nc_oc=AdnW8PrCgFORKpSm8W_rxlNNd_xclgjkclkRVPUQTy9y1S5FR7Uh1ACUqFJMrqvC680&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AffS7DeZ8HdMnODPHSD7Z77RPvyr4CNGgVw4bmqr5AytzQ&oe=

# Mirror gizmo

## What's next?


• [Meta Horizon Creator Program creator manual on the mirror gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#mirror-gizmo)
• [Working in VR while in preview](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/preview-mode)
• [Memory limits and performance metrics](https://developers.meta.com/horizon-worlds/learn/documentation/save-optimize-and-publish/memory-limits-horizon-worlds)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta

# Mirror gizmo

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Flearn%2Fdocumentation%2Fcode-blocks-and-gizmos%2Fmirror-gizmo%2F)

# Mirror gizmo

 The mirror [gizmo](https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/about-gizmos) is a a multifunctional tool that can be placed anywhere in the world. You can
see your avatar's reflections in real-time, take photos, and customize the
appearance of your avatar directly in the virtual environment. Incorporating the
mirror gizmo into your virtual environment not only enriches the player experience
but also encourages social connectivity, creativity, and a deeper sense of
belonging among players. Note: While the mirror gizmo is available in the desktop editor, the full
functionality, including real-time avatar editing and photo capture, is optimized for [VR](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon) use. The immersive VR experience allows you to interact with your avatar and
the virtual world in an intuitive and engaging way. If you are using the desktop
editor, you may have limited access to these features compared to the VR setup.
For the best experience with the mirror gizmo, using a VR headset is recommended. Some of the benefits of using the mirror gizmo in your virtual environment are
as follows:
• Enhanced social interactivity: The mirror fosters social interactions among
players. Friends can gather in front of the mirror, experiment with different looks,
and capture group photos, promoting a sense of community and togetherness.
• Increased player engagement: By providing a tool for personalization and photo
capture, players are likely to spend more time within the virtual world,
exploring different styles and capturing moments, thereby increasing overall engagement.
• Personalization and identity expression: The mirror allows players to experiment
and express their identities in the virtual space through avatar customization.
This can lead to a more personalized and meaningful virtual experience.
• Realism and immersion: The ability to see one's reflection adds a layer of
realism, making the virtual world feel more lifelike and immersive.
• Content creation opportunities: Players can create unique content, such as
customized photos or avatars, which can be shared within or outside the virtual
world. This not only enhances the player experience but also promotes the virtual
environment on other platforms.
• Innovative Interaction: Introducing novel ways to interact with the environment
and other players sets the virtual world apart from others, offering a unique
selling point that can attract more players.

  

## Limitations

## Performance considerations

## Access the mirror gizmo

## Properties

## Take photos and edit your avatar

## What's next?

## Additional Links

      Learn
# Mirror gizmo
