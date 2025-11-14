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
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487315635_686408220563799_5263085594883600351_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=unIdjVikYvYQ7kNvwGYM8n5&_nc_oc=Adn19igKF91575yHRvfm_4YCTndmXZJXoWa8S1pZBUTwA943WEK5ev2A2tlZvv-J684&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfiEKXAoEBDZYUBtNfvXNDy19dUZKg-xyx3b6n6RYRSyIw&oe=693139F5)
- In the Asset Library tab, navigate your folder structure to select the folder where you wish to store the uploaded skydome.
- To begin, click **Add New > Skydome**:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488231531_686408263897128_267682368947112974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=xETfYSxTyPgQ7kNvwF_oG2U&_nc_oc=Adl15ntqAPbKvxzvIo4cvQo_bcQY6WEYk92ziqcspnff6891_FaAK5p4M-8V9kC7cb8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfhsD8VR9je_TVW97psNERNLgHuFU23RIR5LMSalOh0PwQ&oe=69311CB6)
- Select the art assets that you wish to upload for each of the skydome texture types. Please verify that all assets are in the file format and dimensions listed in the window:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468360191_598700739334548_8198028015957139387_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=HSiNKEokG8oQ7kNvwGI_oCs&_nc_oc=AdkZcGzEkZXDScNPhmaoGDh7wFHCODHe60OIp9EkC-WDhntAnPuEuDyR4C-gv6NZwu0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfirRglghwn6kQveg9DhpAM0Bz4mXlJMDskbu3nlQw1LQA&oe=6931137D)
- Click **Next**. The selected assets are displayed:
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468186265_598700746001214_8715326753450651892_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=iSLJGMHkBjIQ7kNvwEZneyH&_nc_oc=Adl_s6Ife6PuJmshE9duBHZPj9DVgOtluFzlNYA3h28rwFrO3rx7md9ZlSgAjWRARTg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfhJ1bQO9CE0FRWLwAdwru0SzUBmgnYjXTBvXx-U-x6sbw&oe=693126E5)
- Click **Next**. Enter the Name and Description for the skydome. To start creating the asset, click **Done**:
- The asset is created. This process may take a minute or two to complete. Do not navigate away from the world or create a second skydome until the process has completed.
- After the asset is created, it is displayed in the Asset Lbrary tab in the folder that you selected for import.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488180665_686408260563795_2352765188487960497_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=99YUMRcccJUQ7kNvwGG12GG&_nc_oc=Admxmgd4BymIpmiwAAUkhV_gCB7jIWIx_dUXvVxxcTn7PB_GEnu9RhnSCBqmzES5LHI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afh0gVUvqCsQWmXmRfUXeDfIrBWP-qXIE6F8dFNb6Yh-Ow&oe=69313F3A)

## Deploy Skydome to Worlds

After you have created the custom skydome asset, you can deploy it into your world.

**Note**: This process creates a new instance of the Environment gizmo mapped to the custom skydome asset. If you already have an Environment gizmo in your world, you may need to port its settings to the new one that you create here.

- In the Asset Library tab, locate the skydome asset that you created. Right-click the asset and select **Place**. You may also click and drag it into your world.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488538474_686408223897132_1051437652716361373_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=-e6E8GezE-YQ7kNvwF6s6qK&_nc_oc=AdlWsTR2ytjNmSDEBlC-mAgO95MWj3HYXA5o3FJ55_FUJGzMa6YzQ_Dc6Cez8qf85zQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfjfoSkgPWe4RZVYj3NMR5_vD_lQfO25ydPi4QW9aTM-fQ&oe=69313F3B)
- An instance of the Environment gizmo is created in the world, and the skydome in the world now matches the one that you uploaded.
  **Note**: Initially, the skydome is displayed at a lower resolution unitl the high-resolution display finishes downloading.
  ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487303222_686408197230468_6006533098210667677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=nPW82vIdY8QQ7kNvwGypDEc&_nc_oc=Adktek7VG4TA0O7qpOnsYSuW_bGzUD_cn1zxzDsics5iq8WudHxWW8VBZNXkYL6z3jE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfgZMvRZGPTpJNJG5pOilLKaasXrWmMJ5f3vve5PnXkoKw&oe=69312A44)
- Your custom skydome is displayed when you re-enter the world in the Desktop Editor or, after publication, in Visit mode on a supported device.

## Download Example Assets

You can download example assets for building a custom skydome:

**Download**: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=mDCDUzye8okQ7kNvwEL-Ov_&_nc_oc=Adkd-K0QB9pIwzr8LMCnYELipKkgBEE0TqZ4wptRN9rpTlZSpAAOZ0Vy03GvDKpK6O4&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfiXV3ZznzfRRwBCGV-U48Arwggr-5QIJzYi5J-yJL7F0g&oe=69311EDA)

## Appendix: Skydome Map Reference

This section contains reference information on the types of assets that you must generate to create a custom skydome.

### High Resolution Display Map

The High Resolution Display Map is a high-res display of the world background after it has been downloaded from the CDN. At world startup, this download process may take a few seconds, during which a low-resolution display map is shown to visitors.

**Tip**: During the upload process, the low-resolution map is generated from the high-resolution map that is uploaded. You do not have to create this asset.

This map is just for display purposes. It is not fed into lighting, fog, and reflection calculations.

#### Format

**Horizontal Strip**: 6144 x 1024 pixels

![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452589609_512527431285213_7230044182276876243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=I9T8YW0RPoAQ7kNvwGoDQiu&_nc_oc=Adn9F_toWlJUkhuWypY-zjYVYi8rKk7UT9AusaFA9WNnl82VDCwJD3MgR2d0K4A0Eyw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afg7lr7cA_c3SPYlFTLpmHBfD2FFQ2YGCV9NLFeBkzOFVA&oe=69314349)

#### Preparing Image Source

The skydome can be drawn or created via any image software:
1. The high-resolution display map must be an equirectangular/latlong source asset.
1. This asset must be converted to a horizontal strip through your source application.

For import, its format must be **horizontal strip**: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is more performant.

Horizon Unity import settings:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694607_512527321285224_7673882326822973083_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=cdZK7mj0MzEQ7kNvwF0FVFM&_nc_oc=Adn-GiHVHLECQiaCymz0WgK3F0jcnNWQhk-bw-9Ux_OPy-bePn88ehymy-iLqyTPd98&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfgaezM8FIwBxQk260f71PdkOqpVAlMkuzIAXGDq6J2nVA&oe=69312D72)

#### Example: High-Res Display Map

Captured:

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452673570_512527417951881_7382506179030491379_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RYcqO_RhWKAQ7kNvwFZNeTv&_nc_oc=AdklUuoFwMLFmPLgvjy50F5wc86FbhQbcQ8k2zlK6AawHJMhfYvB_mJEcBLupKeT9EU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afi-8R0t9NPEKIg9ndIKAbXLIYd2zVZQZhEyJEyugvsZAQ&oe=69311A89)

Drawn:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452881671_512527384618551_263665835944063482_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=_n0t7KLrykwQ7kNvwFK62Ua&_nc_oc=Adn3XszuJSHA0ifq3y3P_-NjvZ8RMxGOIm1SKKBTONeoauZcubQcmbnCokqTXNu84Ws&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfjgdYyaSmyr4BsnX362u2-n-rMkbI9VYCb1JKYKknFrNg&oe=693132B3)

#### Recommendations

You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and banding. See below.

Pinching example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452616361_512527381285218_995271016706393099_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=oOeyXeept-8Q7kNvwETy4gK&_nc_oc=AdnO2SR72dxFGfZs-DSqfcVV4puf6gEjzuvc_kORF7-HT-orG3E3BP3cX4QHXIM0Xro&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfiIEixYaUIH__-CIn2UQWAggyvbX2GrwbByJD_UAeKj7Q&oe=6931475E)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830189_512527367951886_1040209433688152179_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VOq1U371tbUQ7kNvwHViYv9&_nc_oc=AdngTzxGjX90n7G3ST0zGPR7UEnM4oCTEIF0KCj8xQVUactzS1wiSwRzl64GCMvebv8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afgp3QUTOSsBfcrQ7yxBXjZx09xm6xJKbYYe8e0BHTCAOA&oe=6931209C)

Seam example:

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452888902_512527284618561_7166563455042073515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=7YdoAzakODoQ7kNvwE9xMjs&_nc_oc=Adke9SLfDvUij3kdmGTEJ0lK1mEGb-cInqjb1mddYqu5x1b0AOclXRW7jc_yQlGSnbA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afg9bFU63cSGsLuCS43BQ9WewOwHgc2cA9Yx4SE1emYItg&oe=6931292D)

Noise example:

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452942918_512527364618553_711412972350669946_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sUJoHCvDRwMQ7kNvwEUu1AL&_nc_oc=AdmbnvsBFDeoGJjXE5uw8a2WRjVq8USVWnjAxo27NZgnUkW41LgskCTxQo3_svDoMlM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfjjxOYcIts_Dq1hSt9_w_f1idu2gkQTPEVXH4UQdoo4aw&oe=693114C9)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452540567_512527344618555_6504198765252610258_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=BhTVfLeX-t0Q7kNvwGGtKvz&_nc_oc=AdlGdDmNFHrl_ooIAJ-lf-_lZujHSrD57Dtz8AcHL6l3B4NJeSsBZ6mRDkesbVmbDcw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfjDgIOLjQqH8i82wnais2E01Hgu8UeaQOuWXwsSc02_Qw&oe=69314387)

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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514532_512527341285222_4650434737246338516_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=HTDrFlv5-JgQ7kNvwEDeWDt&_nc_oc=Adll1gUHDTsQsG8U52rRyBLz-DdjSlCb64SMv30thldhTKiyBL2H-Zf-G8lQWV9Vr3E&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_AfgCSX5zWhepgYru2ijufJDTbslKo4pwYqtGFdWt3v4-dQ&oe=69313201)

### Reflection Map

A Reflection Map is used for reflection probing and providing view-dependent reflection.

#### Format

* File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
* Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

#### Examples: Reflection Maps

Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice reflection for metallic objects, but it doesn’t represent the world in a physically accurate way.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653302_512527424618547_195787883060786723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fpRQDMpmrZ0Q7kNvwEGxZll&_nc_oc=Adm1gANe5zLof62BKbBdiNs-x-Sw2ZOZS66Xh5HmaBDekCYAdSEnMAviJan_8PtcaYc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=6yllrxSX2-ZY4Z3LqnXM-w&oh=00_Afg4NLP5GQfx3mumsnIiKnK3Ke4aKkpUEl7_RWZDZ1ZBDQ&oe=69313A99)

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