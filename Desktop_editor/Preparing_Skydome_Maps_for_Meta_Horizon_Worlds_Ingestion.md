# Preparing Skydome Maps for Meta Horizon Worlds Ingestion

## Skydome Asset Requirements

 To upload a custom skydome, you must build the following art assets, listed
below in the supported format(s).
1. High Resolution Display Cubemap (`PNG`)
  1. The high-resolution display map must be an equirectangular/latlong source asset.
  2. This asset must be converted to a horizontal strip through your source
application.
2. Radiance Map (`PNG` or `EXR`)
3. Reflection Map (`EXR`)
4. Fog Map (`EXR`)

 For more information on the requirements for each asset type, please see
"Appendix: Skydome Map Reference" below. Tip: You can also download a pre-made assets to upload into Meta Horizon Worlds.
See "Download" below.  
## Limitations


• Skybox textures must meet the exact dimensions and type as noted in the UI.
Using textures with any other dimensions causes failures.
• You cannot re-upload the skybox textures individually. You must make a new asset
or use the Replace Asset feature.
• You cannot spawn a skydome asset via TypeScript.
• Reflection Map assets must be in `EXR` format. `PNG` is not supported.

  
## Import Skydome into Horizon

 After you have prepared assets, the following steps walk through how to create a
skydome asset:
1. Open a world in the desktop editor.
2. Click the Asset Library tab at the bottom of the screen: ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/487315635_686408220563799_5263085594883600351_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=wAtAHA4XxLYQ7kNvwGj5bGk&_nc_oc=AdlByQLqnfzB7pEoRniUGA_LP6bgKw_ARwXOJzjz8OYJw6yiUKjbDBtF0PSyGGNnUYc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaVYhyRkwkZ...
3. In the Asset Library tab, navigate your folder structure to select the folder
where you wish to store the uploaded skydome.
4. To begin, click Add New > Skydome: ![Horizontal strip layout and example display map](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/488231531_686408263897128_267682368947112974_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=JXJ5eeCc6XMQ7kNvwGE1Dgc&_nc_oc=AdkoCVctVRdoWBoN_LqPVsMuUzQsGTzVo0-7QPWLEKe4sIwtSoMl3Z5WxAedL9LsCwo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=xbaVYhyRkwkZ3ovZ...
5. Select the art assets that you wish to upload for each of the skydome texture
types. Please verify that all assets are in the file format and dimensions listed
in the window: ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468360191_598700739334548_8198028015957139387_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=D3J9ol9QmsoQ7kNvwFvDOoO&_nc_oc=AdkctH-H-h2E6JKc95y-ZObEwBvstj4lz7QIalEfskZANlXotMZl5Z6-WduDSn2hkVM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02cXnQ&oh=00...
6. Click Next. The selected assets are displayed: ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/468186265_598700746001214_8715326753450651892_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=PLThCgQDQT4Q7kNvwHYCvuD&_nc_oc=Adk57Y2691yknzOxtpEcMqhH9O7R85dlNz9x_3B6NeRkUjOXiJjHilbOWwj4ry4LwsA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaVYhyRkwkZ...
7. Click Next. Enter the Name and Description for the skydome. To start creating the asset,
click Done:
8. The asset is created. This process may take a minute or two to complete. Do not
navigate away from the world or create a second skydome until the process has
completed.
9. After the asset is created, it is displayed in the Asset Lbrary tab in the
folder that you selected for import. ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/488180665_686408260563795_2352765188487960497_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=_tTOxF0Qo0sQ7kNvwHWCjBN&_nc_oc=Adl3B3j4gZ2sjhQ5Zvgt7QWfrxkcuJMaAIwS9mBWIAQjPAvxiUhGp3mOf6oMAc0POuA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02...
## Deploy Skydome to Worlds

 After you have created the custom skydome asset, you can deploy it into your
world. Note: This process creates a new instance of the Environment gizmo mapped to the
custom skydome asset. If you already have an Environment gizmo in your world, you
may need to port its settings to the new one that you create here.
1. In the Asset Library tab, locate the skydome asset that you created. Right-click
the asset and select Place. You may also click and drag it into your world. ![Horizontal strip layout and example display map](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/488538474_686408223897132_1051437652716361373_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=pIib8Jxukk8Q7kNvwGXqOnR&_nc_oc=Adk7LdmzeVShau8FN_ejWK1EUfZKPha938KvQ9Bd8kW5RcDDuBUpZ2Aw2jRuPurWb3g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaV...
2. An instance of the Environment gizmo is created in the world, and the skydome in
the world now matches the one that you uploaded. Note: Initially, the skydome is displayed at a lower resolution unitl the
high-resolution display finishes downloading. ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/487303222_686408197230468_6006533098210667677_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=_1mmwb_Lq6YQ7kNvwHIS-5M&_nc_oc=Adm78sR_DGBAyPJVSiD4zooeTXcgZy1uxORIbXnM-eypr0SdCenQJ7ghcB9EGosqBAk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02cXnQ&o...
3. Your custom skydome is displayed when you re-enter the world in the Desktop
Editor or, after publication, in Visit mode on a supported device.
## Download Example Assets

 You can download example assets for building a custom skydome: Download: [SkydomeCustomSkydomeTestAssets.zip](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/75375772_2364431677244731_586874341463105764_n.zip?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=OHfWbA54x3kQ7kNvwG6bWBM&_nc_oc=Adm-4Trk5TY7AIEcWMXSTauvKkcLcRhffw6flAwPYalp3R9WyFHuvkNIGerl75T2ifg&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AffDehz...
## Appendix: Skydome Map Reference
### High Resolution Display Map
#### Format

 Horizontal Strip: 6144 x 1024 pixels ![Horizontal strip layout and example display map](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452589609_512527431285213_7230044182276876243_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=g0WGq4zvE7UQ7kNvwFH-2im&_nc_oc=AdnWsfWX7JClr-pGB8TGQN3OrshE3D9qD2x1H4LDJRviQTRi_ieBoNBzhoSYLI3eWHw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVY...
#### Preparing Image Source

 The skydome can be drawn or created via any image software: 1. The
high-resolution display map must be an equirectangular/latlong source asset. 1. This asset
must be converted to a horizontal strip through your source application. For import, its format must be horizontal strip: 6144 x 1024 pixels in `PNG` file format. This format is recommended because it is compresses well and is
more performant. Horizon Unity import settings: ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452694607_512527321285224_7673882326822973083_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=G55LqfF30tMQ7kNvwHButYt&_nc_oc=AdlUjCuAgphjNUJ7lrK-vzGkEcIIdDnAC_F0qpq6J87ckmz8VKoV6ybZ6OVHMQRUFXI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVY...
#### Example: High-Res Display Map

 Captured: ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452673570_512527417951881_7382506179030491379_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=JWt28rRtA14Q7kNvwG_9kD8&_nc_oc=AdkwoPdZ7OrIt9usLqCBP5JQ51yW3gj_-9vkQ24MwX-syzwSDdJN8uiQ4DnVb0tN47Q&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=x...
 Drawn: ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452881671_512527384618551_263665835944063482_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=jqrKwi3XGPUQ7kNvwGN_elP&_nc_oc=Adl6B36ZHa4A65XQjWZTZOVhlUqAOm8wlq8yZyqe9WP98PeWGwUriKHvedFoxRYjzHo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02c...
#### Recommendations

 You can preview your maps using [Unity skybox](https://github.com/TwoTailsGames/Unity-Built-in-Shaders/blob/master/DefaultResourcesExtra/Skybox-Cubed.shader) prior to ingestion to fix any image errors like seams, pinching, noise, and
banding. See below. Pinching example: ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452616361_512527381285218_995271016706393099_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=W-n09hfzu4wQ7kNvwGWY_sm&_nc_oc=AdnJ0R7-khnge5i39uzhllp41KJoKkmvFbgc9_-HyrRAmVAjJ2xRif7ohna16w6Vn8Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVY...
 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830189_512527367951886_1040209433688152179_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=fvH-3z3CM9kQ7kNvwGeEYgJ&_nc_oc=AdmIvaSp9TyBqZlJa1p389WtZSoPW4xf7Iy9xfS5-JUWKez_gBCWVAz3n3gatJviwX0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02c...
 Seam example: ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452888902_512527284618561_7166563455042073515_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=meVsoeceB-0Q7kNvwGMGUjc&_nc_oc=AdmrLl-dJgUEDhIQaPC3IxGB6-zWajCpA-a1RZChg4A6O3uhvPSbsa_TxRe_Bnc-xCo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02cXnQ&oh...
 Noise example: ![Image](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452942918_512527364618553_711412972350669946_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=alEdNIpz3vcQ7kNvwEs7piK&_nc_oc=Adnjhnz0zF2KiRL3NDwWMf1rApb10SO0ug2mTl0r0nz2VPWj58IL014GXJKS4QnnxsM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02cXnQ&o...
 Note: Use [Nuke denoise](https://learn.foundry.com/nuke/content/comp_environment/denoise/removing_noise_denoise.html) to remove noise.  
### Radiance Map
#### Format

 Radiance map is an equirect version of the display map.
• The format is equirect 256x128.
• Radiance map can be either `PNG` or `EXR`. Use an `EXR` file if you have HDR values in the radiance map. Otherwise, use a `PNG` file.

 You can create a radiance map based on the display map.
1. Convert a copy of the file to equirect format.
2. Resize to 256 x 128.

  
#### Example: Radiance Map

 ![Image](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452540567_512527344618555_6504198765252610258_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=c7LrpAIl5m8Q7kNvwFryI0E&_nc_oc=AdmElEk6iiKMuqzckYmRgCvWnXeGfigTRPACOWxBFJGl2PbN5KSRdZ9n9ln_muU15U8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=xbaVY...
### Fog Map
#### Format

 The format of the Fog map is the following:
• a horizontal strip: 384 x 64.
• A fog map shouldn’t have any near/middle/far ground geometries, just the sky.
• Fog maps are `EXR` format only. Do not use a `PNG`, which yields poor results.

  
#### Example: Fog Map

 ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452514532_512527341285222_4650434737246338516_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=q2XZPDzZm60Q7kNvwErkNjl&_nc_oc=AdmC6IC3gAENWzOu_fNwH9yLibPi3HkE-4h4cl6uGVysl8O4UrTOfxL4DIn7sUDA6s0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02...
### Reflection Map
#### Format


• File format should be a 768 x 256 [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps (8 mip levels) sheet.
• Use an `EXR` file if you have HDR values in the reflection map. Otherwise, use a `PNG` file.

  
#### Examples: Reflection Maps

 Many skydomes in Meta Horizon Worlds reuse this image because it creates a nice
reflection for metallic objects, but it doesn’t represent the world in a
physically accurate way. ![Image](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653302_512527424618547_195787883060786723_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fryTHrANb50Q7kNvwF6qh6p&_nc_oc=AdmTWWywP-hyoOkHwBxs3VXSLYidxD-hXus-qUNLUr4svYUXr1KlwlTRpDE5imtlpCo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=xbaVYhyRkwkZ3ovZ02cXnQ...
 Ideally, you can create a mip a mipmap sheet from a horizontal strip display
map, which is more accurate than using the default reflection map from the above
example. In the above example, the default reflection map has some hot spots which
produce a nice shiny look, especially on metallic objects. If the reflection map
doesn’t have hot spots, the metallic objects look less shiny than using the default
reflection map. However, to get the most PBR accurate reflection, you must re-capture the world
with all geometries and the new skydome, and then generate a [convolution](https://learnopengl.com/PBR/IBL/Specular-IBL) mipmaps sheet based on roughness.  
### More examples

 Below you can see some example images of the custom skydome assets. Note: These assets are not suitable for import. They are provided for display
purposes only.
|  |
|  |
| Daytime |   |   |   |
| Misty Marsh |   |   |   |
| Sunrise |   |   |   |
| Midnight Black |   |   |   |
| Night |   |   |   |
| Overcast |   |   |   |
| Sunset |   |   |   |
| Twilight |   |   |   |
| Winter |   |   |   |

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
