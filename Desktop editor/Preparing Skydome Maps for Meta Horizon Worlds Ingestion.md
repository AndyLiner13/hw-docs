Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/preparing-skydome-maps-for-horizon-worlds-ingestion

# Preparing Skydome Maps for Meta Horizon Worlds Ingestion

This section describes the requirements and process for building custom skydome maps for ingestion into Meta Horizon Worlds for use in your worlds.

## Skydome Asset Requirements

To upload a custom skydome, you must build the following art assets, listed below in the supported format(s).

- High Resolution Display Cubemap (`PNG`)
  - The high-resolution display map must be an equirectangular/latlong source asset.
  - This asset must be converted to a horizontal strip through your source application.
- Radiance Map (`PNG` or `EXR`)
- Reflection Map (`EXR`)
- Fog Map (`EXR`)

For more information on the requirements for each asset type, please see “Appendix: Skydome Map Reference” below.

**Tip**: You can also download a pre-made assets to upload into Meta Horizon Worlds. See “Download” below.

## Limitations

* Skybox textures must meet the exact dimensions and type as noted in the UI. Using textures with any other dimensions causes failures.
* You cannot re-upload the skybox textures individually. You must make a new asset or use the Replace Asset feature.
* You cannot spawn a skydome asset via TypeScript.
* Reflection Map assets must be in `EXR` format. `PNG` is not supported.

## Import Skydome into Horizon

After you have prepared assets, the following steps walk through how to create a skydome asset:

- Open a world in the desktop editor.
- Click the **Asset Library tab** at the bottom of the screen:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487315635_686408220563799_5263085594883600351_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=nGclmXg-UfEQ7kNvwEoqxJt&_nc_oc=AdmnpKJ16cO-HMIf6LPNT3nmVzkz7wq3PXm9bvaR7AGd3R-Eu787P-Xw28oZHQtMfZI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afnx6swWk9rorPsCDiZa7g7g2S6owYB9zHh-ix_8-wcDlA&oe=694BD035)
- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488231531_686408263897128_267682368947112974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZZK6VjgtvI0Q7kNvwEgFVSY&_nc_oc=AdkhUdIeLTqeAriELGY2GvOHTPoNiGw_Urq2Fdd9LJV8_XAtXwHEbnXVjY7I328QnyQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfmJtv8q5keffM3tBh748LXpY7iShqL1QaVZceQiJ1rjyw&oe=694BB2F6)
- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468360191_598700739334548_8198028015957139387_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=X_XE1uK5PK8Q7kNvwHEjaWl&_nc_oc=AdnAc2pAoLvEDoeHch5utG9I2NUval6mM9ro3GmmQMqYQezOouNu-XDZNaxNYX5yW3E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfmmesJeDVn5VfoZqx7jBOP8Q9zPNoa4CG63-dW1-AKCpA&oe=694BE1FD)
- Click **Next**. The selected assets are displayed:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468186265_598700746001214_8715326753450651892_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=T5XANDxProIQ7kNvwEE4GJX&_nc_oc=Adk2Y1Df8yzLvw-YwCMBFlo8CTHyuNJ_y4ge9UhFBFA0Z1vcjV1Hf4Zs_MJoHQ__Hyc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afmq56vxMkS3ECfVGT1reqWr8CQ8BLvszK913rZJ09BqTA&oe=694BBD25)
- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488180665_686408260563795_2352765188487960497_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ScKVV7e5pi8Q7kNvwHjy54z&_nc_oc=AdnGjBtDsTZ4kRfOwM8KeQqbVJlqCRp_VNpi2ytxNd2cYxPwAiF1SxFkJALpc15lXCw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfnZz_HtsdY0yAvH9rVPuaKwq2ZKNZof6eb3XvZEijXyjQ&oe=694BD57A)

## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488538474_686408223897132_1051437652716361373_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=KK_ruFluHooQ7kNvwEA-108&_nc_oc=Adlk2-9k88Ttbhq-0Xh5tKWImdixhXLe0eAdUPIkNxBs3XbOdevYi1WmHqMAFmWvaec&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfkkYoVydHAS6yQ0s6s85U-_XPyCuDkZXgm2OWBZYRFPEg&oe=694BD57B)
- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487303222_686408197230468_6006533098210667677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=jjdTRp9kuR0Q7kNvwGH3Lab&_nc_oc=AdlX0zXZPHYMuV52ka261fODFCMN80CY0UgG9FZRRzL1utpuS1Et45CLoZvrcWbyatk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afk7wvsY6GKRe0d2r72kwh2FYTIPj6tehOfW9JVpJKVImw&oe=694BC084)
- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=yNbId5mr0REQ7kNvwEKJmkz&_nc_oc=Adm4JitdDwmS-oxfSUiRWjpgz5gGBPyHRMJqD-5rZ_ppkQrsCBvyNMIuYwZBK4BwURk&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfnSYJoTZMi8whaSr-L0dHKJm-Ex-Pc_tD2IZuDEgiAOnQ&oe=694BB51A)

## Appendix: Skydome Map Reference

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### High Resolution Display Map

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### Format

**Horizontal Strip**: 6144 x 1024 pixels

![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452589609_512527431285213_7230044182276876243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fGmAUDKSG3cQ7kNvwGj9SI-&_nc_oc=AdlzxAb8RDEQwcsBm6ti1suDnCyiQNgzA_PKL2rBxCVFH4uhAJRlcQfL3ZE2lrEhXCE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfmwdGWTnTvpLxaIGc_G9sV10W1OD9DlI2k24TIHTvcyoA&oe=694BD989)

#### Preparing Image Source

The skydome can be drawn or created via any image software:
1. The high-resolution display map must be an equirectangular/latlong source asset.
1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694607_512527321285224_7673882326822973083_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GOF765jkFpcQ7kNvwHCSegE&_nc_oc=Admq2qkmSqXh56HQbVNS65-U0pDOXTAvctjHS7ZGzHzXZ-5RB-qdnsnYsY4ZPZPiD44&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfmulvvRTLOI55ZykmLNN2y4W22fdrtqgWU57dK9lvOdEQ&oe=694BC3B2)

#### Example: High-Res Display Map

Captured:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452673570_512527417951881_7382506179030491379_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Byk6WIEGha4Q7kNvwGfA4Pb&_nc_oc=Admg2OmSfagHZ_xCRkwyojAD4RgPl7W7BUKOl4OO27Qltq9sRfikR2ul_XDGziPp-rQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfngoUu_uLhOlqNEw0_KSt_5IEwC3jxnGbrUtFVj-eZedw&oe=694BE909)

Drawn:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452881671_512527384618551_263665835944063482_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=dKXVNmm11L0Q7kNvwGHb8E7&_nc_oc=Adk3Q_LEsz7M2eshfMB129DVhy04UbfhOOkOT9IucT95j3l8Bj0OygMYqBzto7HJKuw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afn6JTHQpv20ONIvTaQf3VP5M52vGVo9LRdU6R4YpILNeg&oe=694BC8F3)

#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452616361_512527381285218_995271016706393099_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=vRnM_R0KeIoQ7kNvwG-FUuH&_nc_oc=Adl8v2g14Z2vCiHc3506zXu_wz4R6m7HA8pXrjdiywB5J30E9zt5XOSmf5eWkliQ-So&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfmchpigXAitLHd5LYuxAc_oX983-b4dqX5LCdgQ4OZK4w&oe=694BDD9E)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830189_512527367951886_1040209433688152179_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=u4HVus8BiRIQ7kNvwGo8a4k&_nc_oc=AdmGgE6ltp2GACK9ehQpACzzaQfjdzlHxbQOCEDaiq4NfqToRBgMGgh9l2bw_-pATk8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AflWNClkJZWCXgh8yqMva7Rgq3-RWk7StRlsEU1Z-vzrQg&oe=694BB6DC)

Seam example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452888902_512527284618561_7166563455042073515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cniVx-xgaUUQ7kNvwHMtzN8&_nc_oc=AdliA0nsRbzxEg3-Rxy3fq0VfG5do53alMPqjB_LP4TUyWK1-VXDk_G96Hui8KkEnwA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afmi8tf7rn6IvYgMpcdS8Zk-8Aed1hnsl2CsMvEtavzZ1g&oe=694BBF6D)

Noise example:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452942918_512527364618553_711412972350669946_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=S82HGd1QDn4Q7kNvwE7wTiG&_nc_oc=Adk1x7sMuZozC2hyjBZ-9G0O3E_blAqMb4hY8zXXzl1l0MVUX7wGjRLeqdErNqzoxVc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AfkMLTQktCKRCGY1VTDUjIXLOlggbT22kPEND4g-W4NHAA&oe=694BE349)

**Note**: Use [Nuke denoise](https://learn.foundry.com/nuke/content/comp_environment/denoise/removing_noise_denoise.html) to remove noise.

### Radiance Map

A radiance map is used for image-based lighting (IBL). A radiance map simulates how the sky lights up a 3D scene. It captures the intensity and color of the ambient light emitted from skydome. The radiance map is used for calculating global illumination.

#### Format

Radiance map is an **equirect** version of the display map.

* The format is **equirect** 256x128.
* Radiance map can be either `PNG` or `EXR`. Use an `EXR` file if you have HDR values in the radiance map. Otherwise, use a `PNG` file.

You can create a radiance map based on the display map.

- Convert a copy of the file to **equirect** format.
- Resize to 256 x 128.

#### Example: Radiance Map

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452540567_512527344618555_6504198765252610258_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=UCsSjs04eCIQ7kNvwEe--yD&_nc_oc=Adn02Y3tx2rSYiZkCgIAhB6Ahyo5tD5ensIDNWezK4nz9gf6KCAfyEZ7PYDbWMrPnqg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afm0aV0V5pM9k41xaKkR6GhU5lnGs7uHNwAFVUAh0X_yiw&oe=694BD9C7)

### Fog Map

A **fog map** adds atmospheric particle density to your world.

**Note**: A fog map applies color to meshes. It does not apply to the high resolution display map. Fog maps aren’t related to cached global illumination.

For greater distances between camera and mesh, the further away, the mesh is more tinted by the fog map. It’s a non-linear gradual change.

**Tip**: In the Environment gizmo, which is created when you add a custom skydome to your world, you can choose to override the fog map by a constant color, which provides realtime feedback on the fogging effect. You can also build a fog map that is composed of a single color.

#### Format

The format of the Fog map is the following:

* a **horizontal strip**: 384 x 64.
* A fog map shouldn’t have any near/middle/far ground geometries, just the sky.
* Fog maps are `EXR` format only. Do not use a `PNG`, which yields poor results.

#### Example: Fog Map

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514532_512527341285222_4650434737246338516_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bfn6dp_JR-UQ7kNvwHAIDos&_nc_oc=AdmtIoIxWDkh_dGbCfefiqoIL33nf7lgJwXp-bVfBp5m0i9EozHoYMei7cEArGXfQWU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_AflgA3pgyiIDvWJQWg5rCiWCZ-sTeSQuawWhxoz_4M-zww&oe=694BC841)

### Reflection Map

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### Format

* File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
* Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### Examples: Reflection Maps

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653302_512527424618547_195787883060786723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=dqaxeCML498Q7kNvwFiKS3G&_nc_oc=AdleN_gIHppppNIVbFTKkeXecggwECfGZ91gtJiV_J9udCfsToE5jL9dInvH0o-qYBg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JeR2KyJFkIauKjHWTDJAlQ&oh=00_Afk1e_CL1rJvAEgyZsObUoMFtWmwN07-nrMn1fvEojDKnQ&oe=694BD0D9)

Ideally, you can create a mip a mipmap sheet from a horizontal strip display map, which is more accurate than using the default reflection map from the above example.

In the above example, the default reflection map has some hot spots which produce a nice shiny look, especially on metallic objects. If the reflection map doesn’t have hot spots, the metallic objects look less shiny than using the default reflection map.

However, to get the most PBR accurate reflection, you must re-capture the world with all geometries and the new skydome, and then generate a [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps sheet based on roughness.

### More examples

Below you can see some example images of the custom skydome assets.

**Note**: These assets are not suitable for import. They are provided for display purposes only.

|  | Skydome | Radiance Map | Fog Map |
| --- | --- | --- | --- |
| Daytime |  |  |  |
| Misty Marsh |  |  |  |
| Sunrise |  |  |  |
| Midnight Black |  |  |  |
| Night |  |  |  |
| Overcast |  |  |  |
| Sunset |  |  |  |
| Twilight |  |  |  |
| Winter |  |  |  |