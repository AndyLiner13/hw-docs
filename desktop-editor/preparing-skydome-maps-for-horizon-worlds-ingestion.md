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
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487315635_686408220563799_5263085594883600351_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=XZMuUjUYscAQ7kNvwECBkBP&_nc_oc=AdmlP3rJFS2sdXQTDkyqvrSb8TfOlb_I2RH37h8McNX6or0NYsOlXcSpHq-luJIjOAU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfijSPVd3oZZM7hHD4uV45GOu_nVxUDgA58fWqWylbg81w&oe=692BF3F5)
- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488231531_686408263897128_267682368947112974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=e6vV7t4_9H4Q7kNvwEtEsSJ&_nc_oc=Adn1gOO60d_JcD3RTDMe2zBKwyGBk8W8PYPa8z9XT9cOCF5f-9Zl3mogo_NnKwpNSHY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afh05aBXG4uCFWYsOOawa3D8sikpr07t_BjE2DqvbdV22g&oe=692C0EF6)
- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468360191_598700739334548_8198028015957139387_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=LW93iS0IDU8Q7kNvwHluIzd&_nc_oc=AdmpuvSIMx5bp-DjQi-ZbCjvjLrVBj4lnpPNFYWqFpLEj10nbVoApmwwYY4bTDQN2e0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afj0cwNgPN2LoAZimulYEyjbaPxsAk4dUFgB256lZCfppg&oe=692C05BD)
- Click **Next**. The selected assets are displayed:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468186265_598700746001214_8715326753450651892_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=d2JRYAUgYZ4Q7kNvwEzvUOX&_nc_oc=AdmEz43L9ZxlLtngL_INjHFvkQBW_CJ71cHI55xONAscR502zDY518uvRCOaIaQDrGs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfjtNWbtuY1mdnksW5c96-C6oBMnBj9p4U--itnyilJwFQ&oe=692BE0E5)
- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488180665_686408260563795_2352765188487960497_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=CKYvEt9Gy8gQ7kNvwF0G445&_nc_oc=Adm-pqqxdAZ-N3fyaZeJjEFGt_5eJhEiLWRmyuK4CnP0NKb_9KkDcqJQ0LboPNGbgr4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfhEolbFu3fqKDpfpwbrLUMFRr7WkWGhzeO2RYyQEBFS9g&oe=692BF93A)

## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488538474_686408223897132_1051437652716361373_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IPO1YgkvX4QQ7kNvwGprkEa&_nc_oc=AdmlnfI1lv-CTjKRjJWau_UWRRkdawCfXx651tLXXb1cKC_iBXGdrTl7gui5-0sLd6Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfgYdj3lz8BRu5tt7Np17y_iQnrmy0zesI6PY5YOOj1_fQ&oe=692BF93B)
- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487303222_686408197230468_6006533098210667677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=fY8BF_g38MQQ7kNvwEoUwYZ&_nc_oc=AdnRT-PUObHa1Cx54Jt1pRj50saXa9u5YdubITLMeOSoouUb5-wyN3vBSwERALegykw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afj2YFaS9IZqzQ92ssHAgpeFzc3jGL0B4dc0W6SjNtcsYw&oe=692BE444)
- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=muRo68f-uDQQ7kNvwGXVH-p&_nc_oc=AdmxdueFEoQzlTFYsnWibk2ImGdtxkqY1ybNWDdydIvop-QqXac-EWFYaYWPotEAOkU&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afjs9XtoVDVOov5FyuSa6AgQGFexUsxHXGpjygDMFeEsgw&oe=692BD8DA)

## Appendix: Skydome Map Reference

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### High Resolution Display Map

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### Format

**Horizontal Strip**: 6144 x 1024 pixels

![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452589609_512527431285213_7230044182276876243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cHXxGzVObPIQ7kNvwHcBCJU&_nc_oc=AdkiGc3B99KJb8VYbAEhJkd9ooxD8U8YxqhR2nPKXtVI55X0MPVPW5CKVnx2SFCgncQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfjivWb3nk5MbA9oX55lJAL1NnvdGmnV_PAxn0qc0fKrCQ&oe=692BFD49)

#### Preparing Image Source

The skydome can be drawn or created via any image software:
1. The high-resolution display map must be an equirectangular/latlong source asset.
1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694607_512527321285224_7673882326822973083_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HkeKERYyoKYQ7kNvwGz4xKt&_nc_oc=Adk42DXcXbjkKyjSFA08JCeluHjqtGJxh4lbAPn8tU6UiqhS-JmBcAx01KEwZGlmTpM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afha8yjw39dFIOdBGBiBd_oqCCt1FNBtIYq5E8wK69dByg&oe=692BE772)

#### Example: High-Res Display Map

Captured:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452673570_512527417951881_7382506179030491379_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=wjQ9OaEDJjgQ7kNvwGoeoUn&_nc_oc=AdnpEDlwS-11LJ61cJRkuKMlc6UatnzpvSRUe-Yb3eT_lAmTDYxmwDTayokbt61rtHA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfgL0cbmDwnIq0vsqcfQIkvqN5Hw227xhZGbZwtWuQ9kvQ&oe=692C0CC9)

Drawn:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452881671_512527384618551_263665835944063482_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=UPhztt3ycUQQ7kNvwG0au1w&_nc_oc=Adm3jdOSZuYNsMUxlFhWnUG3_k_DEit1yTKp1AohL0BaCRgU72ce7xLif-BGNc2OjyY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfigwVAEz31nqHZ5CwcPfMYuZ5ePCj24reGKtfvEDh2uQg&oe=692BECB3)

#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452616361_512527381285218_995271016706393099_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=yw0mc-8jn3gQ7kNvwEKTZ0n&_nc_oc=AdmHtSD4q9Cfesa_7fTGg0h8Q6g2Z9iB60yRF5Y7llIKgCREY-QUGOIf6D6DKUAfJlI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afgrgq1LlQCCj85utzwnOsSiVXyEu3re5YNBu_cLqiGUCg&oe=692C015E)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830189_512527367951886_1040209433688152179_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=15PPx-0-b0oQ7kNvwGqc5pX&_nc_oc=AdlhcsbTTspKaaCUtpv1rfXr4zgDgPVe0uCnipgsT8JYMjjoUWOt8Pc5GJ11N1hrzWw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfgZzxxbmvKJOiYVx3xXKWo0h7agwoMOi-D34P3TCkoBMA&oe=692BDA9C)

Seam example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452888902_512527284618561_7166563455042073515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=r2NUjWRNxSQQ7kNvwGH-UEB&_nc_oc=AdnTfaCPEY_gBuICL7-pBA1XU4GcOIMm2_k2nZkA4RJ1YzRtSIJF8srV4GkXjkveguU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfhJANkv6d3DH_1EsLgwpKSN7m8HXn-EgLhCGxWkPbH1bg&oe=692BE32D)

Noise example:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452942918_512527364618553_711412972350669946_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6zS8IGPqnmQQ7kNvwH96RqF&_nc_oc=AdlXALBNmvJZjduFvE-PIUwI4bcf82JhzkS-xY6lP0GEo7QfvMg-v4bxMTkV8jCiJEc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_Afi3ul0-SRRWj49rp8Ulb2Iz5wmIaUESU3g9mc8KEQfdYw&oe=692C0709)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452540567_512527344618555_6504198765252610258_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=pzZfuw9mrvsQ7kNvwHs7EFV&_nc_oc=AdltB5395wjt-Mjacm6bufFOC-lK-mS_9OVVFbkiPhSIlutwO7m-1wPqMSwY4pImMDA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfjyXBqbhfhRUhvs32aHu1LwVQsyybddZKz243cb4wlrKA&oe=692BFD87)

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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514532_512527341285222_4650434737246338516_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=7sQDMxBy57IQ7kNvwGU5B5A&_nc_oc=AdlfONUxpLDQOBEtTQQr6epuErFRQPJoZlcu3yclnCk6HZxGLJAekPHwbHKp9Tn8rrM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfgbIvqN0DL1qds4ViiZmY-Oa4rWTp56R8JYR1Wt6EGNYg&oe=692BEC01)

### Reflection Map

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### Format

* File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
* Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### Examples: Reflection Maps

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653302_512527424618547_195787883060786723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=BIFP5_z7GEwQ7kNvwF6QOZ1&_nc_oc=AdmRZ5ERzc4RLLxuTD-keOsoc3q43JhvISMc0gZwTtZqAKCSUNFtWLMzLmRalW93H8Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=juslUyOwUMHN_zBAVnbxWQ&oh=00_AfjAtATkMB6v8LSCNqZ1raLOhCLRPJEWHIc_8KqmZluTpQ&oe=692BF499)

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