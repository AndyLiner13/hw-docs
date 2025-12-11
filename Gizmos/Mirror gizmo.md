Source: https://developers.meta.com/horizon-worlds/learn/documentation/code-blocks-and-gizmos/mirror-gizmo

# Mirror gizmo

The mirror [gizmo](About%20gizmos.md) is a a multifunctional tool that can be placed anywhere in the world. You can see your avatar’s reflections in real-time, take photos, and customize the appearance of your avatar directly in the virtual environment. Incorporating the mirror gizmo into your virtual environment not only enriches the player experience but also encourages social connectivity, creativity, and a deeper sense of belonging among players.

**Note**: While the mirror gizmo is available in the desktop editor, the full functionality, including real-time avatar editing and photo capture, is optimized for [VR](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md) use. The immersive VR experience allows you to interact with your avatar and the virtual world in an intuitive and engaging way. If you are using the desktop editor, you may have limited access to these features compared to the VR setup. For the best experience with the mirror gizmo, using a VR headset is recommended.

Some of the benefits of using the mirror gizmo in your virtual environment are as follows:

* Enhanced social interactivity: The mirror fosters social interactions among players. Friends can gather in front of the mirror, experiment with different looks, and capture group photos, promoting a sense of community and togetherness.
* Increased player engagement: By providing a tool for personalization and photo capture, players are likely to spend more time within the virtual world, exploring different styles and capturing moments, thereby increasing overall engagement.
* Personalization and identity expression: The mirror allows players to experiment and express their identities in the virtual space through avatar customization. This can lead to a more personalized and meaningful virtual experience.
* Realism and immersion: The ability to see one’s reflection adds a layer of realism, making the virtual world feel more lifelike and immersive.
* Content creation opportunities: Players can create unique content, such as customized photos or avatars, which can be shared within or outside the virtual world. This not only enhances the player experience but also promotes the virtual environment on other platforms.
* Innovative Interaction: Introducing novel ways to interact with the environment and other players sets the virtual world apart from others, offering a unique selling point that can attract more players.

## Limitations

* In a mirror-enabled world, all players in the world will be able to see and use the shutter button to take a photo.
* Only 16:9 and 9:16 aspect ratio are supported.
* There is usually a negligible impact from using the mirror gizmo with default configuration, however that impact can change based on what the mirror faces, the complexity of the world, and when you choose to render the mirror. See the [Properties](Mirror%20gizmo.md#properties) for configuration options and [Performance consideration](Mirror%20gizmo.md#performance-considerations) sections for more details.

## Performance considerations

* For the [best performance](../Performance/Introduction%20to%20performance%20optimization.md), avoid facing the mirror toward areas with many moving objects.
* With the same configurations, mirror scale does not impact performance.
* Mirror performance scales well with world complexity. Expect minimal increase of 0 to 5% for both CPU and GPU utilization.

## Access the mirror gizmo

The following steps show you how to access the mirror gizmo from the VR tool and place it in the world. But before you begin, make sure you’re familiar with the following topics:

* Access an [existing world or create a new world](../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md)
* Use the [controllers in the Build mode](../VR%20tools/Getting%20started/Use%20your%20controllers%20in%20Build%20Mode%20of%20Meta%20Horizon%20Worlds.md)
* [Preview mode](../VR%20tools/Getting%20started/Preview%20Mode.md)

- Open the Meta Horizon Worlds app on your VR headset and click **Create** to access the Creator Home.
- Select the world you want to edit or create a new world.
- By default, you enter the world in the [Preview mode](../VR%20tools/Getting%20started/Preview%20Mode.md).
- Using the [disk UI](../VR%20tools/Getting%20started/Preview%20Mode.md) from your right controller and switch to the Build mode.
- Click on the menu button on your left controller.
- Click **Gizmo** > **Mirror Gizmo**.
- Use the three-dot menu to place the gizmo in your world.
- Use the **Grab** tool, the teardrop shaped cursor, to select the gizmo.
- Use the thumbstick to select the three-dot menu on the disk UI and open the Properties panel.
- You can now edit the new gizmo properties in the Properties panel.

## Properties

The following highlights some of the key configuration options for the mirror gizmo in the **Properties** panel.

| Property | Default | Description | Performance |
| --- | --- | --- | --- |
| **Visible** | true | Controls whether the gizmo is enabled. **Note**: This should not be used to change visibility during the experiment phase. |  |
| **Photo Capture** | true | Enables photo capture functionality. |  |
| **Name Tag Visibility** | Show | Sets whether player name tags will appear in the mirror gizmo, including pictures. |  |
| **Has Edit Avatar Button** | false | Enables button that opens edit avatar screen. |  |
| **Does Edit Avatar Go To Closet** | false | Clicking the Edit Avatar button will navigate to the closet tab. |  |
| **Has Frame** | true | Shows a grey frame around the gizmo. Re-enter the world to see the frame enabled or disabled. |  |
| **Aspect Ratio** | 9:16 (portrait) | There are 2 aspect ratios available: 9:16 (portrait) and 16:9 (landscape). This is the only way to correctly set mirror perspectives. Do not try to use attributes scale to change aspect ratio. |  |
| **Render Radius** | 16 (meters) | How far moving things will be rendered in the mirror. | Lower radius leads to better performance |
| **Near/Far LOD Radius** | 3 (near) to 15 (far) | At near radius the mirror will use Near Resolution and Near FPS. At far radius the mirror will use Far Resolution and Far FPS. Distance in between will have interpolated values based on Near/Far Resolution and FPS. | Lower LOD Radius leads to better performance |
| **Near/Far Resolution** | 540p (near) to 360p (far) | The reflection resolution of the mirror image based on LOD Radius. | The higher resolution the worse the performance may be. |
| **Near/Far Camera FPS** | 30 (near) to 20 (far) | The frame rate of the mirror updates based on LOD Radius | The higher the FPS is set, the worse performance will be. |

For example, to resize the mirror, you can resize the mirror by changing the **Scale** values in **Properties** > **Attributes** or by using both [controllers](../VR%20tools/Getting%20started/Use%20your%20controllers%20in%20Build%20Mode%20of%20Meta%20Horizon%20Worlds.md) to pull the mirror apart, like resizing a desktop window.

**Note**: The x, y, z scale values should all be the same value when setting the attributes.

The following shows you how to configure the gizmo’s properties in VR.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974860_1582777578979793_4578442253378448808_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=n546TBVhTRcQ7kNvwEd5hFM&_nc_oc=AdlZJZ50Yt1_0zKRu3KCJWqbIPqZ65RrFDNuIAtf4pC0_MCIVlgcsO_9-kYtbktEEtc&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afm7zc4Cb3ZtJ-D2mPWypbWYthPrWKMnXqjAzn7BjkWxPw&oe=694BE0DA)

## Take photos and edit your avatar

After placing the gizmo in your world and configuring the properties, you can take a photo and edit your avatar directly from the mirror.

The following shows you how to take a photo.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974721_499114159825081_5750543788586459815_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=XhucixqYhz4Q7kNvwHba8un&_nc_oc=Adk8d4yAOpoTur4AQ6J8ewlzVmrOE4nYY-thYn_zx3uXCAjJg4qd6yB3SNxt8E5eLbw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkhY-SVbw-L3xZxFngCBe2Ox8yooRwEn_-sm3xFiLKgHg&oe=694BE912)

The following shows you how to edit your avatar.

![](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982534_585330297294458_1498502693454280462_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=c2qap4O-nwUQ7kNvwGI_hLc&_nc_oc=AdkvZWkoSWuqSN2bH1XByPup_0cnT0CfhuU9HZYYmZKCNGVl9l2S-DDKg1z8cYpJOPY&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkE1lzDWxsILWHy6CHpCyIFZiz9Mwu-oDUuOTIWJCAp5w&oe=694BC427)

## What’s next?

* [Meta Horizon Creator Program creator manual on the mirror gizmo](https://github.com/MHCPCreators/horizonCreatorManual/blob/main/HorizonTechnicalDoc.md#mirror-gizmo)
* [Working in VR while in preview](../VR%20tools/Getting%20started/Preview%20Mode.md)
* [Memory limits and performance metrics](../Save,%20optimize,%20and%20publish/Memory%20limits%20and%20performance%20metrics.md)