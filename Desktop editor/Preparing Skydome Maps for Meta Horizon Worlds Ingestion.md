---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/preparing-skydome-maps-for-horizon-worlds-ingestion
---

# [Preparing Skydome Maps for Meta Horizon Worlds Ingestion](#preparing-skydome-maps-for-meta-horizon-worlds-ingestion)

This section describes the requirements and process for building custom skydome maps for ingestion into Meta Horizon Worlds for use in your worlds.

## [Skydome Asset Requirements](#skydome-asset-requirements)

To upload a custom skydome, you must build the following art assets, listed below in the supported format(s).

1. High Resolution Display Cubemap (`PNG`)
   1. The high-resolution display map must be an equirectangular/latlong source asset.
   2. This asset must be converted to a horizontal strip through your source application.
2. Radiance Map (`PNG` or `EXR`)
3. Reflection Map (`EXR`)
4. Fog Map (`EXR`)

For more information on the requirements for each asset type, please see “Appendix: Skydome Map Reference” below.

**Tip**: You can also download a pre-made assets to upload into Meta Horizon Worlds. See “Download” below.

## [Limitations](#limitations)

- Skybox textures must meet the exact dimensions and type as noted in the UI. Using textures with any other dimensions causes failures.
- You cannot re-upload the skybox textures individually. You must make a new asset or use the Replace Asset feature.
- You cannot spawn a skydome asset via TypeScript.
- Reflection Map assets must be in `EXR` format. `PNG` is not supported.

## [Import Skydome into Horizon](#import-skydome-into-horizon)

After you have prepared assets, the following steps walk through how to create a skydome asset:

1. Open a world in the desktop editor.
2. Click the **Asset Library tab** at the bottom of the screen: ![Horizontal strip layout and example display map](../_assets/images/f30594e8a4d5d967655cf34fed8b774e65229d329557f267fabe43e75d693126.png)
3. In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
4. To begin, click **Add New > Skydome**: ![Horizontal strip layout and example display map](../_assets/images/8b394fc1bfb0bd37d8983fcbc7b4fd262ddbabd6cc0abea75537054b5d564dc8.png)
5. Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window: ![Horizontal strip layout and example display map](../_assets/images/182c7b3f19a109e8e29c3c50a33137b836ed40a983d6cfdb7ea540d620a59bd0.png)
6. Click **Next**. The selected assets are displayed: ![Horizontal strip layout and example display map](../_assets/images/e9fe9ecc8a72243054ef72756d71448732c17e1edd23c594138f33b6b7468f56.png)
7. Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
8. The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
9. After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import. ![Horizontal strip layout and example display map](../_assets/images/4e22946513a7ef96ff1c78b606646678560be1309a2a2222e9e3f4185ae68613.png)

## [Deploy Skydome to Worlds](#deploy-skydome-to-worlds)

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

1. In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world. ![Horizontal strip layout and example display map](../_assets/images/d60e18724f6a0b4a0aeb4256efdff293e271765de68f06c75ad4563cf14bedea.png)
2. An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded. **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading. ![Horizontal strip layout and example display map](../_assets/images/815450e5e675d839d453ed6b94f13caf519f1c2d4210f7d3c9e7ff7bd7a19101.png)
3. Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## [Download Example Assets](#download-example-assets)

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](../_assets/misc/11852418ec702011b5c6826034dd5dc527ac9e5d47da807bdc0342229699a7fe.zip)

## [Appendix: Skydome Map Reference](#appendix-skydome-map-reference)

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### [High Resolution Display Map](#high-resolution-display-map)

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### [Format](#format)

**Horizontal Strip**: 6144 x 1024 pixels

![Horizontal strip layout and example display map](../_assets/images/66515c566275f69a9064a8883acca2d2feb5ef0e3560f6846a6a1e4c6d235843.png)

#### [Preparing Image Source](#preparing-image-source)

The skydome can be drawn or created via any image software: 1. The high-resolution display map must be an equirectangular/latlong source asset. 1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

![](../_assets/images/720b8f52634cdec122e5fd07570d2f0cb9a80c26316717487a2f1ad1c30cb97a.png)

#### [Example: High-Res Display Map](#example-high-res-display-map)

Captured:

![](../_assets/images/49fbff9ed1be0904535a853fa9b6e5fbd6f1e4a5ff55c9a56764a0cfbd46cf3f.png)

Drawn:

![](../_assets/images/8f1dff4807759d4bb9fb4c0ff7204f8cddc0a46095adce7996837c8bc69988ca.png)

#### [Recommendations](#recommendations)

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

![](../_assets/images/e090d728c912f90e44aa00afca1d6f565d08120b64f005869317ff5ddb73056d.png)![](../_assets/images/8a9897c1121d29ccaa0baa6e8de31e8423b49f58ed8790786187b6c95789cdaa.png)

Seam example:

![](../_assets/images/a92920794b7a12a659b74983413041af2a77ec88bd1fd8227b0cb0a1561cd6f6.png)

Noise example:

![](../_assets/images/ce518d0711f4a4cbc001c4eff4aa6eebf828f8ce2653a381046fb0fd869fa813.png)

**Note**: Use [Nuke denoise](https://learn.foundry.com/nuke/content/comp_environment/denoise/removing_noise_denoise.html) to remove noise.

### [Radiance Map](#radiance-map)

A radiance map is used for image-based lighting (IBL). A radiance map simulates how the sky lights up a 3D scene. It captures the intensity and color of the ambient light emitted from skydome. The radiance map is used for calculating global illumination.

#### [Format](#format-1)

Radiance map is an **equirect** version of the display map.

- The format is **equirect** 256x128.
- Radiance map can be either `PNG` or `EXR`. Use an `EXR` file if you have HDR values in the radiance map. Otherwise, use a `PNG` file.

You can create a radiance map based on the display map.

1. Convert a copy of the file to **equirect** format.
2. Resize to 256 x 128.

#### [Example: Radiance Map](#example-radiance-map)

![](../_assets/images/b9e6829a5e2a7e391dc12780f2972edb4b594325cc1092ad34dda3a56f01bf50.png)

### [Fog Map](#fog-map)

A **fog map** adds atmospheric particle density to your world.

**Note**: A fog map applies color to meshes. It does not apply to the high resolution display map. Fog maps aren’t related to cached global illumination.

For greater distances between camera and mesh, the further away, the mesh is more tinted by the fog map. It’s a non-linear gradual change.

**Tip**: In the Environment gizmo, which is created when you add a custom skydome to your world, you can choose to override the fog map by a constant color, which provides realtime feedback on the fogging effect. You can also build a fog map that is composed of a single color.

#### [Format](#format-2)

The format of the Fog map is the following:

- a **horizontal strip**: 384 x 64.
- A fog map shouldn’t have any near/middle/far ground geometries, just the sky.
- Fog maps are `EXR` format only. Do not use a `PNG`, which yields poor results.

#### [Example: Fog Map](#example-fog-map)

![](../_assets/images/0c8bf2d913e4c0e49a885d8ead9a7957ac9d950b38569756c2fe15e3d7971f17.png)

### [Reflection Map](#reflection-map)

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### [Format](#format-3)

- File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
- Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### [Examples: Reflection Maps](#examples-reflection-maps)

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

![](../_assets/images/8240865061ff1240b95e4f32ef1330d5d27551eaeb37cd86194d2e785b7d3ae9.png)

Ideally, you can create a mip a mipmap sheet from a horizontal strip display map, which is more accurate than using the default reflection map from the above example.

In the above example, the default reflection map has some hot spots which produce a nice shiny look, especially on metallic objects. If the reflection map doesn’t have hot spots, the metallic objects look less shiny than using the default reflection map.

However, to get the most PBR accurate reflection, you must re-capture the world with all geometries and the new skydome, and then generate a [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps sheet based on roughness.

### [More examples](#more-examples)

Below you can see some example images of the custom skydome assets.

**Note**: These assets are not suitable for import. They are provided for display purposes only.

|                | Skydome                                                                                     | Radiance Map                                                                                | Fog Map                                                                                     |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Daytime        | ![](../_assets/images/d4e68ea041aacd0d0fb99b22a5d8a3f434585d1e61e036d12957681e8e860fa7.png) | ![](../_assets/images/1a626a146af6887077617096f4c82514de37cd6523c0607e8b3f8f4275fe029f.png) | ![](../_assets/images/26cf4940c2fab10dc2edef9f39bd2f696a2823e7be4c5ddde969e475d835bc13.png) |
| Misty Marsh    | ![](../_assets/images/c15089ba460b9f4b9c8c80408b355f03f07065bd0eac47ba2599ca118a2b2973.png) | ![](../_assets/images/0b252123d621bfccdd4c63ba0354f9358d424e590b72bff90905f0bfbd776224.png) | ![](../_assets/images/172671e83e0a9adfc5555337ed359c3ccefbcfc8fbb73898ccc7f3e77dcfb540.png) |
| Sunrise        | ![](../_assets/images/8c741f267692441dce0321c58261ec3988ef31bdd1ed68d22f1c5aeacc58eff8.png) | ![](../_assets/images/6b0d6c2160cb06ddfab035a5cbb93f3639a9ff12520b4c2badfe91a35eedc62f.png) | ![](../_assets/images/baa3f403e46a100c928a9a1b49422e3a039bae27d478b3a150facad49e51251d.png) |
| Midnight Black | ![](../_assets/images/8fd3c7a6b089a80ed7245f78f02139c51ca83ec4e6f8caa184a83774a33d6649.png) | ![](../_assets/images/fc469a042cc19059a631d518b944f09cd2f8bcdf2a907f06390f92828b4e3af8.png) | ![](../_assets/images/8b9a2aa7401192f0a018eb8a745d6ff37e800ce21fbc22b780e8f07e0e83cce5.png) |
| Night          | ![](../_assets/images/73934033812988ee8bf29670987cfe8053f630914bea97545bcbcde338a37b54.png) | ![](../_assets/images/55d8bb76c600150340eb9b1f9f76816e574a7a82e93819ae07b1d1b2f12fed0f.png) | ![](../_assets/images/b4e39060541dadf5f0190b06e7aa615dfb853ab10d4f73f74e6751205a255175.png) |
| Overcast       | ![](../_assets/images/1f21b8c64624420aafe0743c78db2c4339047f07ec28db587358415db8609845.png) | ![](../_assets/images/3e6458bcdeb7951b85753c12e784b0245bec7d964e477518d754246e6cc7b927.png) | ![](../_assets/images/4335006410109e491c6f53bbd48e8653506f451b97250a45ddfc6e2a7b1e002f.png) |
| Sunset         | ![](../_assets/images/f6b2ad2225969094ba258b983ee9a578c9ada6141c333ff76d108ec0026e9af4.png) | ![](../_assets/images/f85a26a020567d2f899cf3e747d654eafb217755b9e2ce95c8c5d0bdb9336302.png) | ![](../_assets/images/3819e2dd34e61a88157529d0bc65d23e776917fe61b6bc44054070e5becbd232.png) |
| Twilight       | ![](../_assets/images/315f83cc42c4afb478b25999f1d1ba5b6e53a540ea93fda59f5728e37775f0c9.png) | ![](../_assets/images/559c5212377f725e392648711c64f1a93ef0bf6a09aa5f067bc5dd84e3e9d996.png) | ![](../_assets/images/0fb64ffbdc13231d4ac9293f54141d74dbdf5bdf032bf5b717bce58386ba3526.png) |
| Winter         | ![](../_assets/images/b105cfc18469182694b52911b55ba43ef4afbc3821c312e4e4b38084026afb4d.png) | ![](../_assets/images/0d9b11e52cac450c67afeaf1631600af2513db562a483f81b5196fcaa61f5e42.png) | ![](../_assets/images/061a072b3e55e8cd7b565417ec4b4593528444e671ac9229ad7b2cbc2d99a802.png) |

