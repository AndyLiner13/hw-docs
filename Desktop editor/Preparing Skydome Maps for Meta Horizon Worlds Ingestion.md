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
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487315635_686408220563799_5263085594883600351_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PyHqXx7PmgAQ7kNvwHIPbwT&_nc_oc=AdnO6O_GPevBR6DR3iKGIaglAy4dxDUkWF7fK5j5_1hsHZ0SOdoRL1yhl2Gn8vCMWCGZiWT09eb5q1u_RIW9udyq&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfkGwueGmENnUJseWCm8TKiTDLtHVPCe1fB7AH-AvC6JHw&oe=69557B35)
- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488231531_686408263897128_267682368947112974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=-8te3Oq83igQ7kNvwH6TDs2&_nc_oc=Adk4-uC31UKjQBuJwYg1dhTujyl9dmJsaPwR3W1LGwEz4-FYFg405FeKquEzmIxb12YBgMyVPiwL4OpMo3ZzCIpz&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfkkW4ZISSjevzWTfzPyNS-_ToHWqfX8_cmRSW4-sGXLAA&oe=69559636)
- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468360191_598700739334548_8198028015957139387_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=uX4oUpQwMA8Q7kNvwFkO4F0&_nc_oc=AdkJdG08TrYncxsRRvmoe33TFHyy0vJB0kVmtpr3G6O045dLWcRLWzRkprFpUUUgAAf6hH7H88EWDGQOOc8-RGI-&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfneNeim8Vdn8XzHON7qHALfbqAdL4JMH9iR68Eu748pRg&oe=69558CFD)
- Click **Next**. The selected assets are displayed:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468186265_598700746001214_8715326753450651892_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=AEwMm_kujMsQ7kNvwHN8EhR&_nc_oc=Adngl4oeOpE1E_Hm2TkK3mWO_tsE7d2DFhrhPc6KtmVBhkz0WOQaMH1OKPL6MrGGVxWq-AqnrAfnTVHOwfOo4gbV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfkhzYG9RWT54DhxR_nMrCou3DMQK6ttAIS89TU99Q3SRA&oe=6955A065)
- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488180665_686408260563795_2352765188487960497_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=QvCYVtz-ODQQ7kNvwHIsvEE&_nc_oc=Admzp5rkMy5P8hBXkwKAF92cvmxI5fNtzkTOGKb11I6x3DLKtaTnZ4AniF-6S1YN2VLWfrBG_7j3uV3W_pp3nWkb&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AflsN3azsW2-ZEaSAMLZT4j42ppsVuqeyyYP-x1yp7Z52w&oe=6955807A)

## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488538474_686408223897132_1051437652716361373_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=3QlFa8xzT-wQ7kNvwE29p_C&_nc_oc=AdkCkM8K3bG-Ruvc_I3RI6hJORDIVexGmqWMZWvm5IfCdwgp5bRvdS6Z_C00T76bbo6mTjfL1v3lwxrWc2wOpu58&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afmcv4NoF6GtgWo2uWAOmpsjZFPwEaqfZjMsKh_Bpiw2LA&oe=6955807B)
- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487303222_686408197230468_6006533098210667677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=miMqNI6YTIsQ7kNvwE9HHEM&_nc_oc=AdmMvHkhY72xauDVYf5sCov1nHEfPhQe-a0GayuBKlalbMd-7Ue6EruijzyPn4hS6FVslSIXkQYEu5G6HSh5nDYT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afml9VLEFR1FMj4iUKce3_Zqaq1pDMMDkvQ8aOiU7ikPEA&oe=69556B84)
- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=0ttVucf5PUgQ7kNvwETRWaW&_nc_oc=Adk4oknQEq3YcWim5qvMHQnnV83qXJtoNRpEGALCZh2mpHQDkETjMGLroMvSp2uCkJIDr0yIKoA907RsXtsUCMW1&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afk3DUVdGH7uTM4KQ8tEn6s5EV2olsp7j8E_Jc6CUQRgbg&oe=6955985A)

## Appendix: Skydome Map Reference

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### High Resolution Display Map

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### Format

**Horizontal Strip**: 6144 x 1024 pixels

![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452589609_512527431285213_7230044182276876243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FylJTiPJa_wQ7kNvwGiVZ1E&_nc_oc=Adk5_qaAaCBoe1xm1MTKHPM0Nu-9Qi1NeIJxFTMXcqYt4CF7h60BejvfSXRRc7TGdRAfMPhxqSz4dOFzqb9KUMQr&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfkY5g4pSAIpRrQA6ndRueeh73Ekn8Oqss92yom6UapA7w&oe=69558489)

#### Preparing Image Source

The skydome can be drawn or created via any image software:
1. The high-resolution display map must be an equirectangular/latlong source asset.
1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694607_512527321285224_7673882326822973083_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=dtoG-36-hwMQ7kNvwEGKwwY&_nc_oc=AdlRqrhLpRcnDulqEUPkGaAG7G6zuxy0HfFQt6Nw7vAQiqNkJsQLPawFBd6oXteVaDiKhjOaMOJchRmKLsCBjBNz&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfmFOWBou8EM34EXdn-yijIY5Zh2b5OoMkA0MoTQAop5Jg&oe=69556EB2)

#### Example: High-Res Display Map

Captured:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452673570_512527417951881_7382506179030491379_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ThMDtRTRC6cQ7kNvwG0D8YN&_nc_oc=AdmBta1WCEhmeXX8XRsdsmgeG4Mqc6aOJB6k_VetG4T6P8TJ8s8AzhKwJoIvIKZSo1uo-zdkOGZek96ht7UlcXV6&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afl5XbmFzgsoDgyaF6wL01VxT-2oRgWWD1ckCasADjAAEQ&oe=69559409)

Drawn:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452881671_512527384618551_263665835944063482_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=2k3huXv4-dEQ7kNvwFTa445&_nc_oc=AdnphEyvp4qA2tlx9ZXV2kQhPbDo_XB-VG4L756BPL0moPndBEDn7c7fn7HVXMom3IBa-PeCHJCPZOgx39VJnsBx&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfkrdvhpMoVHHCxbzrgsWX0UwSiRLhS4lTmOOfYPFVcwbA&oe=695573F3)

#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452616361_512527381285218_995271016706393099_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=lYIvuBhd9a4Q7kNvwFEgUvh&_nc_oc=AdklypML3nynNv-mcG7a9u4i7vURIKrzvhZR-4g13sTNwUvBL1NzmjXSu6KGuWoSzD0ckPvCc0YtEhaGrbk7lXiq&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfnmXvqEtw9b58K97ninE-dAQnxCE7z6MYx5HQVUKL1tZA&oe=6955889E)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830189_512527367951886_1040209433688152179_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5WX5LMjk4TIQ7kNvwFeGTDx&_nc_oc=AdmaeKhUEjWFebscu3CMVan6Fyb5a4JaXLdmDnMlan0YQrOvJC4H-lG7WMCMVl_1m5wB4vq3li1usNYwwC1lTVpH&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfmW7Ax-oZEgGUxo-0HlN4uj3qfCAjc7VVx3umiK-LCUwg&oe=69559A1C)

Seam example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452888902_512527284618561_7166563455042073515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=c0JLOveuy-UQ7kNvwFGEZIP&_nc_oc=AdlmZNTqJZpQSMOjDf5uauhJZWyDdLK9HRCLwA3zpKVqClZaGlcDC-AXA_Coc2t9gBqMRo7b7748PdBtiEf4G0Aj&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afl3nW1Z5UDrSGqPy_NWU5L7EHgRZdw18quEbr09AOgZjA&oe=69556A6D)

Noise example:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452942918_512527364618553_711412972350669946_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=-CkVK71-UCwQ7kNvwETH7Q3&_nc_oc=AdmNT0AZVp-5DkuLHm_E6a1-_cP_vydVlEiqCL9OVUypQZfrVbNYb3rlxkKI583cnT6lyWIdMyfxsOiYe3116N5V&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_AfniyePiyuqvgKBhcz6qtmPG0MOyIlt_xMQzep2bALKnXw&oe=69558E49)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452540567_512527344618555_6504198765252610258_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=VuIUfP23bWcQ7kNvwH5fhQ8&_nc_oc=AdlmmoNGuO4qmuz5FZ4E1WSMDheXj_Qo-9svAXj-lKx7tqQ9Re1I6HeP4Zl5jIqi2mOvlC9Ibv3nF8meWpCc-1it&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afl-xrtkIgACOXuybjDwsxfMnhQaivfQODJV4hESvwP9jA&oe=695584C7)

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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514532_512527341285222_4650434737246338516_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=xdRZO5qZA20Q7kNvwEmUD-R&_nc_oc=AdnD_I5Zs8EawrBSxucIhsfDJyT3p7rAl6w2PBCVpJcGhBNqHD3leiEP_5rSLFrdyuULfg76XRIx8wPpGnlWxt-F&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afka2mOztpCf6k6fdiAYNjvcAfCKuJnXHZXfHL5fSr7vHQ&oe=69557341)

### Reflection Map

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### Format

* File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
* Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### Examples: Reflection Maps

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653302_512527424618547_195787883060786723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ckWEXKihd1YQ7kNvwEivlRu&_nc_oc=AdkEMZE-PzNMTa4J2JaphM-Flf5FHH-TJ3mo33x7zdjNbVStBauqCtpTtU_H1dxwqdd1ycP16v16eXXpHls4Kr0v&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=N1RcqmyE2UdCBJZJDvT_fw&oh=00_Afl95vNvR8Sv3zgqt_dnGwZIktrYhV7XEItN3doAlSsJCA&oe=69557BD9)

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