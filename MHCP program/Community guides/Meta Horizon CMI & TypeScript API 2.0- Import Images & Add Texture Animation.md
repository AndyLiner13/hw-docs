Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation

# Meta Horizon CMI & TypeScript API 2.0: Import Images & Add Texture Animation

## Introduction

#### Creator Skill Level

All levels

#### Recommended Prerequisite Background Knowledge

No prior skills are necessary, but knowing a little about Blender and TypeScript will be helpful.

#### Description

Learn how to bring your virtual worlds to life using custom animations and visual effects. You’ll discover how to create animated instruction boards, add custom VFX, and even make an animated fireplace! Your creativity is the only limit.

We will start with the basics, such as importing Custom Model Import (CMI) planes with image textures. Then, we will explore various texture options, including transparency methods and importing UIO textures for animation.

You’ll also learn how to use two prewritten scripts to add animation and interactivity, even if you have no prior experience with Typescript.

#### Learning Objectives

By reading and reviewing this written guide you will be able to:

* [Import CMI](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#image-imports) images with or without transparency.
* [Use and or write typescript code](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#step-5--create-scripts) to create animated textures.
* [Billboard](https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#step-7--billboarding) an animated texture to create a unique 3D-like effect.

## Image Imports

When bringing in materials you are unfamiliar with, the cheat sheet below is a quick way to look up the naming conventions used for importing the most common material types.

If you are new to Custom Model Imports (CMI), don’t worry, we cover how these work in the next couple of sections. The long and short of it is that in Blender, the material must have a name that parallels the name of the texture PNG you upload with. A simple example would be a mesh, with a material named “MyTexture” in Blender, and uploaded with a PNG named “MyTexture\_BR.png”

### Image Importing Cheat Sheet

* **Image.fbx** (Standard Image)
  + Upload with file named “Image\_BR.png”
  + Named “Image” in Blender
* **Image.fbx** (Metal Image)
  + Upload with files named:
    - “Image\_BR.png”
    - “Image\_MEO.png”
  + Named “Image” in Blender
* **UnlitImage.fbx**
  + Upload with file named “Image\_B.png”
  + Named “Image\_Unlit” in Blender
* **UnlitBlendImage.fbx**
  + Upload with file named “Image\_BA.png”
  + Named “Image\_Blend” in Blender
* **TransparentImage.fbx**
  + Upload with files named:
    - “Image\_BR.png”
    - “Image\_MESA.png”
  + Named “Image\_Transparent” in Blender
* **MaskedImage.fbx**
  + Upload with file named “Image\_BA.png”
  + Named “Image\_Masked” in Blender
* **UIOImage.fbx** (Animated Image)
  + Upload with file named “Image\_BA.png”
  + Named “Image\_UIO” in Blend

## Texture Swapping

If you are already familiar with CMI and Typescript, this brief summary shows you how to upload texture assets, which can be referenced from your Typescript “props” as PropTypes.Asset, and cast .as(TextureAsset).

Don’t worry if this is your first time, we will be diving deep into both of these topics throughout.

### How to Upload PNG Textures

At the time of writing (June 2024), uploading PNG textures can only be done through the Horizon Desktop Editor. The name of the image does not matter, but the image must be a PNG.

In the images below you can see screenshots of the Meta Horizon Worlds desktop editor. From the “Assets” tab you can click “Texture” and then in the right image, you can see that you are able to upload multiple PNG images. We recommend first creating a folder to upload and store these images, it is much harder to move them after they have been imported.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968581_512510194620270_3962294350470992074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=oHbap5aJq-gQ7kNvwE__uj_&_nc_oc=Adn2NjNJtAJBSDoxmgcPWmdS_XG0EdUTqJx9iblGdTZiioyoCbQpRp2Maq2mtrTtzKg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgqoygT0NyE5I3zviuV9xmlFR5n7ioZgBap4YykqIfMVg&oe=694656DC)

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512510044620285_6379585956399160296_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=3LFUw2YLA7gQ7kNvwGI6KVp&_nc_oc=AdmTeWbNhy8z0VQ0D4SDPQQbf936R_8KYAa9_9m2XkbiRuyLRz-F0fNpwCXsO38suFc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgsvQCoFPr4V9eYGi6Diu38kg_LKTKdJpAtyDO9JphHWg&oe=69463E4F)

### How to Swap Textures

Here is a short example of how to swap textures, noting that this only works on CMI meshes uploaded with a UIO material/texture.

```
const texture = this.props.texture.as(TextureAsset);

if (texture) {
this.entity.as(MeshEntity)?.setTexture(texture);
```

## Step 1: Creating FBX Files

In the first step, we will show how to create FBX files for standard, \_Masked, and \_UIO material types. The process is similar for \_Unlit, \_Blend, and \_Transparent.

Once you have opened Blender, select and delete all items.

![01 Blender - Delete Hierarchy.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509954620294_1064153443481861995_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=EWhJX3XWsJEQ7kNvwFQAwHm&_nc_oc=AdmAcVA47dyDFMprXTVt6ySKP-XNkmmjyuPcj9lW2tWAL27HoS7OskKOdjzpSLqx6Hg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afge6pszyWmRIDM8-quM4Jmmo9iHMWxNfuaGWQQAl2JX1Q&oe=6946482E)

Then we’ll create a mesh plane via Add>Mesh>Plane.

![02 Blender - Add Mesh Plane.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452597170_512509924620297_9030051662676405660_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=uXZSKW1hpjcQ7kNvwHaZh-u&_nc_oc=AdmF9lTezShstoE8Z5lBhOX5uRcTn3MnSB-TpcIqcSVSK4FINKGtQUpZg8MweASUn6U&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiOedLRZYJ8R7_ksuwGCxbVbLKKP4kfrx_jHCPvSFJNXw&oe=69465FA5)

Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

![03 Blender - Material New.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814563_512509981286958_8049382712676840349_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9ksvMQnTSzoQ7kNvwEuOddP&_nc_oc=AdklJt0gUPARRKa2lDDQQR1z8Zkmx1eUtdhui9cYzI5RkWVBvOrDV8dcs0NZP_5kMLE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjFmffJ2aJwkCDjbzp3U5kxqY5Gjxc-r_Gp-cSNj_8ppA&oe=69463AEE)![04 Blender - Rename Image.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512509901286966_2206396220220413926_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=HOOnYGhheykQ7kNvwG3tkqc&_nc_oc=AdldFFlZsHeqDwej160F6Zp2I3lAvgqUd8zYcDqfrg7XWOMwIIxMXTfwYgtxlOWqRw8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afgt6R4uoEweCwr_2yDbmqGSJDhc0XpPhsW8tLvyQZ5fGQ&oe=69462D62)

This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

![05 Blender - File Export FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509864620303_2779347807224869433_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=jbEChWfpPv4Q7kNvwHuLKlL&_nc_oc=AdndWjP9e22APdeW6Hm2D1S72c17toICkP5rtNbAuXQN9oQfu054Q6Bhf0dueIaZ_n4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afgw-n9g5Fd-4XB2CljqG658KQ8oo3D6NGUDsVK2_HsHFw&oe=69464590)

Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. ![06 Blender - Save And Name FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512509771286979_6031989145017839875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uN2j59bxo4IQ7kNvwFiew2o&_nc_oc=Adka6U-O1x5kkYVN9RrU2bryCAXlFaqbpiwg5vcSIjbSdb50bvHBy-mPNgINF8B2UqM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjRS4pl3lNP_bTE32nlTq2VONgYnXw1PDl1pGC_qMthjQ&oe=6946442D)

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

![07 Blender - Name Masked.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863715_512509734620316_4491289245265288581_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=kZToKcj51bEQ7kNvwG3uO0s&_nc_oc=Adl2IyY8Dol-I_8XQ_5JSm3GIb690V-hnVxSZQvDfpSouvRIbBKCaDxlfV3KtYOXbmQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgStUtw6JSLay6ERlulZnIMBucxE5cNNZVqzNMM6fq52Q&oe=69463178)![09 Blender - Name UIO.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452683821_512510081286948_2595619572129583607_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=E4cEvSmz41kQ7kNvwFkfnV3&_nc_oc=AdmZtkMYFWdZfMB3Od4OvaugD0wV56wNqDuf3x3SmT3hj7j-ZIzfSkOL4t5iX7oVOyo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfixeApV3yGpoTTjCTa4o5UtIEzutdkRtgh3fiF29eAQ0Q&oe=69465F65)

The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

![Screenshot 2024-04-19 at 11.11.10 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452898941_512510074620282_8089196613872825284_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=0Qh4pkyvJ28Q7kNvwEJdypr&_nc_oc=AdngcSR6ME1siAtmoXKalzbAisQje-4YpKuphT3R37uBYfp4hLvH1Rag5I4h02HGDas&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgYqijEcNAt9IoNOohS0v_s4gbhknZ1VGj8x8dboauNAA&oe=69462AD1)![Screenshot 2024-04-19 at 11.11.21 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554819_512510067953616_4081317241237303944_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=1NUh9ftcLyMQ7kNvwF_LR04&_nc_oc=AdnY4auUrb0zRiz2PWFhctOfHOUCrt8E-OfDhIL6nPh-I2xXJvtn1-2eb4IBOQWMaW0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjsNhnw0s_zykHhnDVeMLLHnPp8ABFRgnuXgexSUi0mXQ&oe=69466053)

Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653333_512510071286949_6198600653867134572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=_gacFl8YKz0Q7kNvwFobZAL&_nc_oc=AdnK1AHGXvSZqiX1LsFdlnZI0VXU4aFo7I4h3EOZRf7yn2Z_D3yRKHQa89t7CUjPpfU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjZgoHaCgBKT1EKdFWyg7Q3pypb33r3Z_jwg97lKdI4sQ&oe=6946529D)

Here is a brief description of each material type:

#### Standard Image

* Basic texture, nothing special, and is easy to use.

#### MEO Image

* Using a secondary PNG, the RGB channels correspond to Metal, Emission, and Occlusion (MEO). Notice that if E & O are set to 0 the texture is not visible. Try playing with these values to get the exact look you are going for.

#### Unlit Image

* Light and shadows are not applied.

#### Unlit Blend Image

* Unlit, but supports transparency using the alpha channel of the PNG.

#### Transparent Image

* Using a secondary PNG the RGBA channels correspond to Metal, Emission, Specular, Alpha (MESA). This means you can get a metallic that is also partially transparent! It also means that you have to make sure the alpha channel correctly masks out your texture, in this case, it does not, hence the partially transparent square.

#### Masked Image

* Uses the alpha channel of the PNG to mask out the image. Note that this is masking, not transparency, partially transparent pixels will be dithered, meaning every other pixel will be opaque or clear. For real transparency use Unlit Blend or Transparent material types.

This is an example of dithering.

![pasted-image.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512510077953615_83611763970977192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4zW5qUVnfJUQ7kNvwGZu8G2&_nc_oc=AdnNTKr76uedrkgdiasdfAPZaOsnBiuL_u6uEk33hHOKQ8x0h_BdG9yqq-iJc3eDIQQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgZ2NRhnUOT2J9lnlY6oMhtRh-hvk5WPSD0XpQcbpYVQw&oe=69463B9E)

#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

![Screenshot 2024-04-19 at 8.53.37 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907674_512510061286950_115269541411199578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=rsMjpX7jMJAQ7kNvwGqVn7Z&_nc_oc=AdmgIdzu4z-my38NZIuyS391b04MizMM1QHnWRsup6QHJlvVhO8eytufUVJC0Bd821s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afi567z3tTm5lcAGx9qzDTYLLMonV4WOb0cFdhpUVS8sog&oe=69465D6E)

Then click “New” to create a new image, and from there select the Color property.

![Screenshot 2024-04-19 at 8.56.04 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452577881_512510057953617_5245386781112144432_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=VkIBJ08sbWoQ7kNvwEfCxL6&_nc_oc=AdkTxqSRvHz5w0cBx9Rtubpzxlp1HDO_57s-L7ufMHVQMXZ2Z0d8PesLq3QIs9keb3Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfihGr0YqyULlOLQnVqsnEHzQ9qblE1V7_gKhF4FxqloGA&oe=69463228)![Screenshot 2024-04-19 at 8.56.47 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652809_512510064620283_8540244349186137340_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WICmIAgyw8YQ7kNvwHEbp6S&_nc_oc=AdnqymekRPEa1DXuNs9GArTZYjUQpedADIazvS-nxuVHSj5j_Mj1HrvNYOtfEUDcJms&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfijWdgdIgrHHfT83r-OFL3rOjm3dtgdarcMLmWBX3FDCg&oe=6946621C)

Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

![Screenshot 2024-04-19 at 8.57.03 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916207_512510054620284_1744802443120394456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=S6dtGl9Y3y8Q7kNvwHdqDWO&_nc_oc=AdlQI_Cv1OQce4XVW5WCu4KIIZ8J8WgUP9qLsDITJ5Uc5yIKESrHraOUpkW32ssMkko&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afh0kM0A4moSaC2-FALKzqTzNDq_j8zpw776mUoRC4ljwQ&oe=694640D9)![Screenshot 2024-04-19 at 8.58.00 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652384_512510051286951_6288220246956715927_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=IY0MzATm42YQ7kNvwEI8IQL&_nc_oc=AdnAtmEv7yXAWuadLKzzlWShYg3PpvqXQFzmE0vLp4BHkhMT-MYuDniICGLlGU9IZT8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgpIYkvbGRH7aIq_QV7KBW2Uk-7tcV0wVfF3-MCwJgARQ&oe=69463686)

Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

![Screenshot 2024-04-19 at 8.58.28 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413439_512510047953618_4137326271119080615_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=0YVtS2P_NtcQ7kNvwFAjkY9&_nc_oc=AdlgOC9XwRQQDcHC_1KAOHIGKUnBQLyj7iglz9JXstiYg1VLziNNUXuXrMPdl4qg8m8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afhp3gFzDj-DVTlD0FTQgFZNnyeSRbJ_SsMqfYz-0AkATQ&oe=69462AAC)![Screenshot 2024-04-19 at 8.58.42 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452929981_512510041286952_8941302965582273418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=qtk8Fkxtf5gQ7kNvwHj0VDI&_nc_oc=AdlyUzRX-XPjbo6ep8KFpL3x1Yhn5c7sK24AtyQb63-1XA4CX7XsJrrZeQ9lnYCwoQA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjQZBBYGp-1k4MbxpNFcfULiMl1ruL87YLT7x68jHoaCg&oe=69465053)

![Screenshot 2024-04-19 at 8.59.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452691797_512510037953619_5827144605064287682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=vVEWpDDC6jUQ7kNvwHBqorA&_nc_oc=Adl0T5qRxv8HnpiDVsWLqBOzaXE6pbA1Yr1m4CZvC7izVoB8_1FuQ9f1PeaQDqeAV20&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afg9Lg7Xt4EBK0PFOc7lVynX8KcCH2ZGeN0SgF_3TQdDLA&oe=6946361A)

You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

![Screenshot 2024-04-19 at 9.17.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885117_512510034620286_9198152519515217659_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HHkXbruRE2oQ7kNvwFQah43&_nc_oc=AdmrOLUG9l_u4b5TFPDJdHRKzK-9OEh1Qc8y5yFh0t9XOIDuWU9VOolwOmOdcEWwIno&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afhq0ucIkIRvMzOzuCfBxrRvzdtHTdNB6gC_S4zbVsAkVw&oe=69464463)![Screenshot 2024-04-19 at 9.20.46 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653014_512510031286953_1113735815860416145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=dwCFXamz8LcQ7kNvwGqNxwa&_nc_oc=Adm-t-ALt5NRRZYDtsWlj9K5GoV1Zt_9IkJkFLCi43t9s4bbdI5AHi-7eirsetXmPxU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjM2yM7-ZZuWen5WN7xyiziz4kGCe4iV9sxnEiyNtQCSA&oe=69465AB8)

#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578204_512510027953620_7672824023604347554_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rb3Zz60AoEcQ7kNvwGY-w4R&_nc_oc=Adky2a35wxiSxMlriIHFO6OVa-kGuFTuVhdJCNhRB8eBsZOuDJTf6mMvZZxTsJYRSEk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjzatqtQ4mGenFCVYsOizqwvCj-BTFovAywciHb_c4Q_Q&oe=69464C78)![Screenshot 2024-04-19 at 9.26.48 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512509964620293_5448085797043372349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=vkvCwIMrKwAQ7kNvwG9oigl&_nc_oc=AdlMEw-Ju1y62OD8d950sUUZIzbV-qKu90euy75T2LDOQbPP8lsgu3EuVWTTyxyKraU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhbiztGQ53YeN8EZhtfdpZRl-ZVSkIWnff4Fb639TRzNQ&oe=6946457A)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452518323_512509967953626_7006945869471042038_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q1yJucxY-7UQ7kNvwE4IN34&_nc_oc=AdnfdeAn8-85nJ9Jk6UNO7VfZJ3EUE0kxgDe4YDzSvcuP50tzwozGdg3sJK3Gnuuna0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afj7rviYtn5-rjMTbp6aqdHBPABWMMkLgUb_Uh-c5RM24A&oe=6946473F)

You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933713_512509961286960_6507830893434825526_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8QJ8kGqCTtMQ7kNvwEoOMOw&_nc_oc=AdmEwRUEM_OfjzgItNXCDeKca8TniVGzPg05ibLRRuAjBXlp77DopLOhmi9NbZt-dGk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgRzEF0BAHc4UHJezMm-BWR8RkmW6cdAkQDem1Qj7kaWQ&oe=69465180)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652035_512509957953627_1509299483219844935_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=DVf0_f2bKeIQ7kNvwFhOzkM&_nc_oc=AdmR3gpZ5B4QOs16STaih0bmlR1jc_Dsnie9TL_U7_VYRXgBHeIiNOJKZFHONrWOnjw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjDX0olfUGvJSaXnQMBil9UMEuV4iXxF7fm5CbRjpwnAg&oe=69463C3F)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934280_512509947953628_7533721349325358428_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=k6Rz3sytyGsQ7kNvwHdZhhl&_nc_oc=Adk7AfrTrUJNaOlO1t_L4wuz11oxjByRBCKlJM-3PaJhoXwquvVgGT7mBLvmg3BEouo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgnCUQn8jT1qYCOCe6t4QhVs2mHo6lk5fjpBIrRMbVngg&oe=694661E7)

## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

![Screenshot 2024-04-19 at 11.06.55 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520063_512509951286961_8039903915903876142_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=fbA4gVl45JAQ7kNvwEAg_2Y&_nc_oc=Adl8sqKyiMdVaZKcOPSzkvjWAd4L6RV0CBXHrbPnWHL2IYfZZkuPCGZwEGz8YEGPxA0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhdCChVyl209UShCINkYAG_jxajU494Tq2yku2ZYx-OAg&oe=694641CA)

For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

![Screenshot 2024-04-19 at 11.02.04 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932907_512509914620298_8416274368174123809_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=LRxkwdcor10Q7kNvwHKPULO&_nc_oc=AdkEuzmBPQwUI_CMbWBl91YJkMyOPZaSzCUKY9i4HJM7u3vmVWp4rls6RLJBhdVQUi0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afhg4a4NoX6_bCnumK0pregyhWe-kaAJFyPW8eskznu-pA&oe=6946478E)![Screenshot 2024-04-19 at 11.01.05 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452716174_512509917953631_1260850758204712021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NTA1eIV6Wa4Q7kNvwFwrBT4&_nc_oc=AdnsMEsxx4VXOukQUIDyamSq3er4COI5zrYJoKZNwSrZ8yeEBGZFe-57VrwczaJ6-0w&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhtLicvYmb1d932G4xit2kNN61G4TzROl3kco5J_QsCqw&oe=69465F91)

You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

![23 Horizon - Add All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830425_512509941286962_2286961765036510195_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=lphjyVoP36kQ7kNvwFRd20P&_nc_oc=AdlXiewtbC7E6VAYC381orZHtJqfa_sXlHk3g1RshedFKwCEuNvpF_UoACCUsZvCBJo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgYKCO3r9VI3z53w25tykDbqa_8_oaICSfDmbrOiXYYVA&oe=6946573F)

### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

![13 Horizon - Create New World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514554_512509937953629_3385446684682933545_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IM4LvNSVjGMQ7kNvwGhJJbT&_nc_oc=Adl-sJJ905ZVknwNl_8U6hBU_TjjSc4Xj1JqW4QAWDsI0BVhD8MD2pYVJe29lSGQzc0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjvGopdePlFywfHtB-YqE_X32ldQMjwgY83STQGXBKtcA&oe=69464536)

Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

![14 Horizon - Assets Add New 3D Model.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452698500_512509944620295_8761892053068618025_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=B7Z-nX-WHXYQ7kNvwE4IDP5&_nc_oc=AdnsbcIs2BPFzP6iniUjDPfuQ2NZ8WtPEnt1xk42Rt_5beovQA34zWeFvYqGp5h3bJs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhkXQYig76A3LurSPMCbDXsSlLfS_2grwgm_4ELrdjbEA&oe=694631A0)

**Pro Tip:** Create a folder first so that you can organize these files.

![21 Horizon - Create Folder.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452969006_512510024620287_7145889613842616136_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=84gijqMlTSMQ7kNvwFUUEjD&_nc_oc=Adm0qW1X_LcLF8OCeNUJQN2C0fJx03gQJfKy2p--1y8_PtWTnajeorteFesS5xsn-QQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhEBvHl0RTg_j40j6xofQIsK0AKM0552BR36fQ-utW0BQ&oe=69464637)

## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

![Model Examples.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520302_512509931286963_1392348710732713706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=gdRBfAp7krkQ7kNvwE7JT2N&_nc_oc=Adl9gU6Y71yR5D8bUFUMRkZqdjj65YzPZO8_B_Fx56ZTFFKbUAWjWvVzsWkAT38_CO8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhDJti0Yus88UNDWym1m8QG4qIIBWkea-myHwbW6ss0Gg&oe=6946559D)

**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

![16 Horizon - Drag Images Into World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698500_512509927953630_2391688165484220586_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pqjDA5il_MEQ7kNvwE0BpoF&_nc_oc=AdkmND4cG33AsxSTS6t5_sVlZ2_GJJOFDBGAhKh3J_ikySdIjhJ9W4Bt27UZjeQgv4U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afg8_VH3VHrp9f9IIAW2zvAEWKXWxpzW4QTzcQeIawc5yQ&oe=69463E62)

## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452942546_512509921286964_7427347511941929464_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=_JJrJGMQ9G4Q7kNvwEd0Ul9&_nc_oc=Adn3nouesRxpEeIT5VBBtqtGlgahjdOzEEJBXNuykiN-C1YlrrkOasG3F6qOrDE-mEE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhaGjPsFa2_8JtiRR0upk_3Xn8BJAzzYgbqkrZwOPkPmw&oe=69463E5C)![23 Horizon - Add All PNGs.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886177_512510021286954_7252073352601237353_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=nFkkTCdHAFsQ7kNvwGEmzv1&_nc_oc=Adn1DnGHNPON_KRGhtP5R8rLrnNbkKvSMJlwOph0imxzNSBjI-Myhbh7EwIMmKCT8qo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfigNcj1KQ4EAUMFX8nO9qDRLVHFnrwSNHre3fPipmY66A&oe=69462FC8)

**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512509934620296_9067343352172927240_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=RDnBrxEsyncQ7kNvwEq-Uat&_nc_oc=Adn-k7k6skFptX0ZN4WZWf5KiZoqRY8QaIcNaY2RlsXSfqqjyi2kx5wLCFuDu_raEfI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjrGAHvyNT6Po3kQ__QZVFBG5dT_vqhuXBSVFLBlNeHlA&oe=6946499C)![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452813675_512510017953621_1399693691768195627_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=DmXd5SKGew8Q7kNvwEYkx6i&_nc_oc=Adk1qh-Ug22iXXsvMGD7E6NrWju7d11i3y5POPHw5X0Bq4PPZwJ--mkgOuiLpvy-IbM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiooVyPx0AS2mxAk6-WODLIbBgGqjKIpjn4d35Gypqqpg&oe=6946304C)

### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968830_512510014620288_2686261352574634183_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=JVTM76TkCnkQ7kNvwGqMbO2&_nc_oc=Adkr94YGsNqEzUV0EjPKzlzeTvKKpM7mtvYs7cDRXZI1vuJS4LYllsJHBP44G3yFovs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afjp6plpEQ2lLZwSuv4x_QaUNectbDnh346IpYB2AwU6xw&oe=69463B8A)

### AnimatedGIF.ts

You can copy and paste this code into a new script, or download the code as a file by clicking [here](https://drive.google.com/file/d/1L2RWLL8h75ezou6xoWUApNjr-aaH-2_Z/view?usp=sharing). Then drag the Typescript file into the scripts folder (Scripts > Three Dot Icon > Open Scripts Folder).

```
import { Asset, Component, MeshEntity, PropTypes, TextureAsset } from "horizon/core";

class AnimatedGIF extends Component<typeof AnimatedGIF> {

  static propsDefinition = {
    //Adjust the speedSeconds default here, or for each animation individually from the properties panel
    speedSeconds: { type: PropTypes.Number, default: 1 },
    texture0: { type: PropTypes.Asset },
    texture1: { type: PropTypes.Asset },
    texture2: { type: PropTypes.Asset },
    texture3: { type: PropTypes.Asset },
    texture4: { type: PropTypes.Asset },
    texture5: { type: PropTypes.Asset },
    texture6: { type: PropTypes.Asset },
    texture7: { type: PropTypes.Asset },
    texture8: { type: PropTypes.Asset },
    texture9: { type: PropTypes.Asset },
    texture10: { type: PropTypes.Asset },
    texture11: { type: PropTypes.Asset },
    texture12: { type: PropTypes.Asset },
    texture13: { type: PropTypes.Asset },
    texture14: { type: PropTypes.Asset },
    texture15: { type: PropTypes.Asset },
  };

  //create texture array, starting index of 0
  textures: TextureAsset[] = [];
  index = 0;

  //This value is set in start using this.props.speedSeconds
  delaySpeedMs = 0;

  start() {
    //Add Textures To Array In Correct Order (Skips Unassigned Values)
    this.addTextureToArray(this.props.texture0);
    this.addTextureToArray(this.props.texture1);
    this.addTextureToArray(this.props.texture2);
    this.addTextureToArray(this.props.texture3);
    this.addTextureToArray(this.props.texture4);
    this.addTextureToArray(this.props.texture5);
    this.addTextureToArray(this.props.texture6);
    this.addTextureToArray(this.props.texture7);
    this.addTextureToArray(this.props.texture8);
    this.addTextureToArray(this.props.texture9);
    this.addTextureToArray(this.props.texture10);
    this.addTextureToArray(this.props.texture11);
    this.addTextureToArray(this.props.texture12);
    this.addTextureToArray(this.props.texture13);
    this.addTextureToArray(this.props.texture14);
    this.addTextureToArray(this.props.texture15);

    //Value can be changed from the properties panel, maximum speed of 100x per second
    this.delaySpeedMs = Math.max(Math.floor(this.props.speedSeconds * 1000), 10);

    //Create meshEntity variable to make sure the script is attached to a MeshEntity
    const meshEntity = this.entity.as(MeshEntity);
if (meshEntity) {
      //Create looping event with setInterval
      this.async.setInterval(() => { this.loop(meshEntity); }, this.delaySpeedMs);
    }

    else {
      console.log('AnimatedGIF: meshEntity returned undefined (is the script attached to a UIO CMI MeshEntity?)');
    }
  }

  loop(meshEntity: MeshEntity) {
    meshEntity.setTexture(this.textures[this.index]);

    //update the index and loop back to 0 when reaching the length of the array
    this.index = (this.index + 1) % this.textures.length;

  }

  addTextureToArray(prop: Asset \| undefined) {
    if (prop) {
      this.textures.push(prop.as(TextureAsset));
    }
  }
}

Component.register(AnimatedGIF);
```

### TextureSwappingTrigger.ts

You can copy and paste this code into a new script, or download the code as a file by clicking [here](https://drive.google.com/file/d/1ZCo3ZCAAEOzGzJRaCRmtJ4lxLyoxSk8y/view?usp=sharing). Then drag the Typescript file into the scripts folder (Scripts > Three Dot Icon > Open Scripts Folder).

```
import { Asset, CodeBlockEvents, Component, MeshEntity, Player, PropTypes, TextureAsset } from "horizon/core";

//This script is attached to a trigger gizmo
class TextureSwappingTrigger extends Component<typeof TextureSwappingTrigger> {

  static propsDefinition = {
    //Make sure to reference the UIO MeshEntity on the trigger's property panel
    uioEntity: { type: PropTypes.Entity },
    startingIndex: { type: PropTypes.Number, default: 0 },
    texture0: { type: PropTypes.Asset },
    texture1: { type: PropTypes.Asset },
    texture2: { type: PropTypes.Asset },
    texture3: { type: PropTypes.Asset },
    texture4: { type: PropTypes.Asset },
    texture5: { type: PropTypes.Asset },
    texture6: { type: PropTypes.Asset },
    texture7: { type: PropTypes.Asset },
    texture8: { type: PropTypes.Asset },
    texture9: { type: PropTypes.Asset },
    texture10: { type: PropTypes.Asset },
    texture11: { type: PropTypes.Asset },
    texture12: { type: PropTypes.Asset },
    texture13: { type: PropTypes.Asset },
    texture14: { type: PropTypes.Asset },
    texture15: { type: PropTypes.Asset },
  };

  //create texture array, starting index of 0 is assigned using this.props.startingIndex (adjust from props or on trigger property panel)
  textures: TextureAsset[] = [];
  index = 0;

  preStart() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, this.triggerEnter.bind(this));
  }

  start() {
    //Add Textures To Array In Correct Order (Skips Unassigned Values)
    this.addTextureToArray(this.props.texture0);
    this.addTextureToArray(this.props.texture1);
    this.addTextureToArray(this.props.texture2);
    this.addTextureToArray(this.props.texture3);
    this.addTextureToArray(this.props.texture4);
    this.addTextureToArray(this.props.texture5);
    this.addTextureToArray(this.props.texture6);
    this.addTextureToArray(this.props.texture7);
    this.addTextureToArray(this.props.texture8);
    this.addTextureToArray(this.props.texture9);
    this.addTextureToArray(this.props.texture10);
    this.addTextureToArray(this.props.texture11);
    this.addTextureToArray(this.props.texture12);
    this.addTextureToArray(this.props.texture13);
    this.addTextureToArray(this.props.texture14);
    this.addTextureToArray(this.props.texture15);

    //Update to default texture on world start (checks for out of index starting value, adjusting if necessary)
    this.index = this.props.startingIndex % this.textures.length;
    this.updateTexture();
  }

  triggerEnter(player: Player) {
    this.updateTexture();
  }

  updateTexture() {
    //Create meshEntity variable to make sure the script is referencing a MeshEntity
    const meshEntity = this.props.uioEntity?.as(MeshEntity);

    if (meshEntity) {
      meshEntity.setTexture(this.textures[this.index]);
    }
    else {
      console.log('TextureSwappingTrigger: meshEntity returned undefined (is the script referencing a UIO CMI MeshEntity?)');
    }

    //update the index and loop back to 0 when reaching the length of the array
    this.index = (this.index + 1) % this.textures.length;
  }

  addTextureToArray(prop: Asset \| undefined) {
    if (prop) {
      this.textures.push(prop.as(TextureAsset));
    }
  }
}

Component.register(TextureSwappingTrigger);
```

## Step 5: Create Scripts

If you have downloaded the files, you can open the scripts folder by clicking the three-dot icon next to the gear icon, and selecting “Open Scripts Folder.” You can then drag the download files into that folder. Alternatively, if you’d like to write the code, you can create two new scripts, one named “AnimatedGIF” and the other “TextureSwappingTrigger.”

You’ll then hover over the newly created script and on the right side click the three-dot icon to see the drop-down, allowing you to select “Open in External Editor.”

![18 Horizon - Create AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452908886_512510011286955_6071772640735723234_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=RNbTak--vEsQ7kNvwHZ1nle&_nc_oc=Adku69YNchNSVFpxyF4oxznKDtzYHIdl77VKaylLAnyrfaQpa0gHsqmNBWuvPSjzPGw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhdhvtRA71ly1WFT3Z1DCMQsaaGZFkmGL5nERoyucUJ2Q&oe=694640DF)![19 Horizon - Open In External Editor.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934389_512509997953623_1096257128825943521_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=61NTUK2s9nIQ7kNvwHgTB8F&_nc_oc=Adk2jIVXsUtdBgaNQQAiHB29EhTQHykN-G8sHi16vzAcah_46J3JIWudaPr7t_bC4ko&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afg9e1-l2ilxynM9u7_mxKZ2Or7QemlmMpb_PdN7rFmn3A&oe=6946560B)

From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

![20 VS Code - Delete Default Paste AnimatedGIF Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452952740_512509994620290_6613449436146433136_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=sd9XxEUr-_kQ7kNvwEKZZI_&_nc_oc=AdlyHwlsNe-GiChm-79CcbquLW3A2uvI-SVPI7_CMyqa-qnk18lxwHqFuTrlJCQmJYU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgAh5GUzD8mGWd4P-KGgjKg1vd6u5JJQqCu9cKMkj6znw&oe=694646F4)![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512510004620289_3602977530773515663_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=IIR3DtrHxUsQ7kNvwG5327J&_nc_oc=Adk9OaKEe43l6T4Sxe0QANJgkhoak7EaJhQPzFLkBlA8JtCEaYqKjobM7rfI5xtA3Io&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiN1q0xleXy8EiDZ1oFjj6mmxoIzfAsFWbC2-FLq0Z52w&oe=69465EB4)

## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

![27 Horizon - Stop The World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512509971286959_3679470934818076750_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=YuuO92dtlpcQ7kNvwHoDZA-&_nc_oc=Adn9oCyPbm3jHNIHu1sw07j39tglYGMsqW13-zKlQ7ILWDec5Tre1jjqGibw3GKTZfs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afja6gQWvaeeXLkaEq0NpAOj7wJZQjeB4dk7P7sdblXJ8Q&oe=69463FEE)

Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452893310_512510007953622_6953964120795560456_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=XK8mEmVRpOYQ7kNvwGIPWw_&_nc_oc=AdlR-RLQUTlY5sZrYXT_IhJVxPwu96atbo8lO9mA84CWiHaprUIgmlG2RhmAWar1qSE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afh0UBabSWe8jBOqLXjp51e57OF4LZLHU4_BOjty-G1BfQ&oe=69463769)

With the script attached, we can now drag the assets into the empty texture slots in the correct order.

![26 Horizon - Reference All Texture Assets To Correct Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597104_512509974620292_7381418665732884630_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ksD-YQCTCDIQ7kNvwEiZ3cz&_nc_oc=AdnxQODT9j22p3VXcTHvBA5XG9Wkj-hDj_2nE15XxBi6BESSPSNC9Zf1aNFxRtyMMi4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AficNL14IZsfVm42ic90xcwzqTcT3s6rQTciSjvx-Dcn2Q&oe=6946355F)

![28 Horizon - Not All References Required Change Speed.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934376_512509991286957_335261093369493818_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=9vooPhqrYcYQ7kNvwHO7Jcq&_nc_oc=AdmcmOS1zwGkdSSOf7tlh-F8EUZe8TqYGltbYGirDHoRVnSCoNAbbi-IyY6iDxn8FOQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhhnP5bkkTmF79TF0iiGkFPLivkf8r3dFdkbdzS990KwA&oe=69465A89)

With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

![29 Horizon - Play World.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452532621_512509987953624_4411056457549309049_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=VTYkeeqCA1gQ7kNvwHJ5R61&_nc_oc=AdngtMmiKphaKHO1L_DlblFqaM9hlnSrLCGmwlAJ73_e1S_00cwApgKf1wwQ4qQs4Ck&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgONrABAztLBuXdK1-LoAGYgc0GtyfV9LFTCra5qVzylQ&oe=69462FCB)

The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

![30 Horizon - Adjust Speed To Your Liking.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452933994_512509984620291_3491567733690113088_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rIcIB-XLz1YQ7kNvwG4Kaew&_nc_oc=AdnqXC1FnOq0fcpG2Mn-48-Pp5nHOe9coGhzVZSyTm9S07p44VuCy2QPr4mPeVS6f3Y&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiYZVcT2sivbAB8KBh_bBJ5RWj1jmOa23-WGhekraE_UQ&oe=6946613B)![35 Horizon - Billboarded Nyan Cat.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452540279_512509977953625_2643885165784093538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ue5WHEtPJx8Q7kNvwFL9iio&_nc_oc=Adng_tgIBG_JNnEseIZXC2n4vFb1xnA8g260SLVOH0P3kSo0px35zIbnu46thBGHKkY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfivhyOs7QGu6B2uq-VZtIWnDCHFTPjJLivl66eRNdvv5w&oe=69463F67)

## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

![31 Horizon - Group With Some Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452853527_512510001286956_2716518458353739131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=v65vyPfARfoQ7kNvwE3-0ka&_nc_oc=AdmuMmdOxd_45DPz3SCQIvFLXcRc8U4VNuWjC67rXCu-04FRMEAP_h4tIaiMv1wmQoY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfguMgy_hTZ6Jrs-zjJBnzkbNPekgsU15RhGyJv6s8A7XQ&oe=69465459)

Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

![32 Horizon - Delete That Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415046_512509911286965_3425181708830011765_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=9DaFWflO8D8Q7kNvwG2og04&_nc_oc=AdnFy7qXreKVFRY0wVcWN1njAv97nOYKVyjGs0shgJTiqcQUapGy_2Y5tlbBu_p8OY8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfgCIPNWrA1XLniVgvhg2JvwwcIynFlwiZ0EzMLqiwCBHQ&oe=694638A3)

To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

![33 Horizon - Select Group Set Motion To Animated.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915492_512509907953632_8557229846459868426_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=jNNUh2IhJ6QQ7kNvwEDUSeP&_nc_oc=AdlSnLm2Q1M4-GFBXA8TVzG617a1dVWT97nkTlVjlA5E8X2Jv7CCEeYSyq4A1C08Myo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afhhf0EpBct8AfihRanSXEWfFPLxAQK84Z0q0egGmva5Zg&oe=6946586F)![34 Horizon - Billboard Freeform.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513071_512509904620299_6429956925647591739_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=UpE-KuWnOPcQ7kNvwEawsb2&_nc_oc=AdkzCLCe2LlNJEGE-XReqLyX1mW1i-boYtkYCHAeejDT_hPMKMR27x2ay1rx54R4IqE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjMRbDOrgeEI3YtLsHGap-DAy-CaF0W9xNg9OOPhk5i3g&oe=69462ACB)

Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

![39 Horizon - Bring Out A Trigger Gizmo.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615830_512509897953633_5127349402886952232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ObqzSYI3VrQQ7kNvwFWb8_M&_nc_oc=AdlggxfSA4SmYUEqtq_AaNf175hkcy0DU1cvcPGTLgbSnqRuiXiGzmc7BJqpW50NRpI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afh0WZAdE0asIY4awNdpISxpKgAscPiDf18Z1XzV4SAoWA&oe=69464A33)![40 Horizon - Bring Out A Button Shape.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452752337_512509887953634_7522440812087672101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=vqzm3WoNEjkQ7kNvwGqYYVt&_nc_oc=AdkztpZQ5l3eIT4YGQV8G31a7AI5ta_UCrbgR96V5mVBb-izNsUAYkkoNzeapl08FM4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhoQP6CunZmSa0yqQML3uIGOMab-uD_kP6lPAoXZsLuCA&oe=69463727)![41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509894620300_8243052218315123329_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=bjsNQ8ZXstsQ7kNvwECF2Ig&_nc_oc=AdmT0QDo9CvaT5snpD__e5hK0_cK3PO0PPLiE419I2UZHVSBqhLUg7jl-_jtt29s7sE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjhmvdT0OGq0H4Z5EiVdr7-KEtrtcDSy8bVhY52uRbaXQ&oe=694636CD)

![42 Horizon - Attach Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452628926_512509891286967_3053857877730824769_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nq42HgIlw3cQ7kNvwHMgf8o&_nc_oc=AdmXD-jSXjqHWewdNbS3jK0GU0Opo2Ub_eIBd6kz3hyC_7LpinCwMA1PIf4YkBD8Rrg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afh2y3pEykXxCJ-DJ1_Rm5koJ0hYSLYzfqsbVUEA8fmtsA&oe=69465742)

Select the UIO plane, and give it a good name so we can better identify it.

![43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888016_512509881286968_98449028924003563_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=KCneO-8aTOUQ7kNvwGDkEf5&_nc_oc=Adk59uSwgiJmzwwhzxKUMzFYsoMfUCNNbpfiNCMF9fEleB4r54XARjMl50P_rKmvi9o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjDVpW2qmo7D6uCoM51Lplk-gi8CpD4h9Ziwm5VidsIIw&oe=694630F3)

Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

![44 Horizon - Reference NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413127_512509874620302_6306166632729951456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=qlEyBFsB6F8Q7kNvwEc78fb&_nc_oc=AdnG8zfwvuI1WODt0ChSsKHyff4LasUSz1u-lZdsofJd3ibXcYmcRGgclOJNcjA5BZ0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfjndUoVeak15MJGaaTHOdA-k75CbJQKp_5gt1mMqCkJ8g&oe=69465047)

After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

![45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415063_512509871286969_397156706064990581_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=_yNHe31gLI8Q7kNvwFmjnDJ&_nc_oc=Adkkb48N3DrDrrkZT_85s2Y01dXkk1qMOvpqMepuY4dLQxsMN9rR_fdBRMLPx2y7wHg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiVG6kWtn4UAIK1sNik1XbxxdoiUrbfDuOg_DP954Lm3Q&oe=69464CFD)

Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

![46 Horizon - Jump On Button To Test.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452663326_512509884620301_5661988945403216671_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=BHa77us3ovwQ7kNvwFqgi9c&_nc_oc=Adl7jL5aXvqIbSR61HtP1tpzEbDHgStMQzGY4ae9laPAZP8vqOdnzPvjaaN9yN1pDt0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afi4RZoKpOy6iSpJHRKwQuiea-vUnjl9whz4IocS7EOTQw&oe=69462F65)

## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

![36 Horizon - Duplicate And Rename Props To Add More.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452587750_512509877953635_1060541854433685900_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=M2tNhyLHahEQ7kNvwFSjM65&_nc_oc=Adm817KGzKs-ubRxY-74cTX8n2-keqxwcnya676QgWiP7D1pWjGBlx6sqEUfycWo1Ug&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfiK9DuZVF5ENlc29Ii85d8iOqtZvymgr7HQAqnTfIRu9g&oe=694656DD)

Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

![37 Horizon - Duplicate Add To Array And Rename.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916434_512509867953636_5718596235244147160_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=k1rom43oW1sQ7kNvwHNMuhj&_nc_oc=AdmWD0cy52l4SqWgEZT11C5mt0pSEnDnyRHjhSiktV4I8lMCh8ffExpgI5uyrgsN72I&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_AfhUSPs4FiBrnmpHxHAWrG5VmeZzvdw1RBQfEw9R88euuw&oe=69462E83)

A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915631_512509861286970_8320013039747796277_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=MVwV-bPiHUEQ7kNvwE33xsr&_nc_oc=Adl3XrDGRv0ckB2lKAZOtFwPGQQP2kygNLqZbouBk6NpeqwiVLGiMK8RZli3p9mUYkM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=7jpibBXNGeNN6CL6esR5rg&oh=00_Afg0daejc64jqh6k0OWF3rUAj9R7pyknKm6MXRq-AFIrHA&oe=69464FB0)

A lot of this will feel like magic early on, and that is totally okay! Over time it will begin to make more and more sense.

There is a lot to learn in TypeScript, so if you have any questions about the code or want to dive deeper into how it works, be sure to ask in Discord, or check out some of the other Typescript resources!

## Extended Learning

Below we have provided some CMI and Scripting challenges for you to try implementing on your own. These require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete these or book a 1:1 mentor session.

### CMI Extended Learning:

#### Novice

Using the “TextureSwappingTrigger” script allows visitors to customize their experience in your world (ie. custom textures, pictures on walls, etc).

#### Intermediate

Create a fire. Either using a 3D model with an animated texture, or a 2D plane plus billboarding.

Tip: Some fire animations only look good on a billboarded 2D plane. For a 3D model, consider having intersecting planes floating above for the wispy elements of the fire.

#### Advanced

Try anything with a 3D model rather than a 2D plane. If you accomplish this, share your success in Discord!

## Scripting Extended Learning

#### Novice

Build a button using the “TextureSwappingTrigger” script so your visitors can adjust a skybox or some other texture, allowing users to customize their experience in your world.

#### Intermediate

Create a grabbable object that when you press the A or B button swaps the texture. This could be as simple as a colorful bouncy ball with various texture options.

Tip: Our trigger script uses “onPlayerEnterTrigger,” you’ll want to use a different codeblock event, when you backspace the current event name and the period and retype the period, you will see a drop down list for all codeblock event options!

#### Advanced

Add custom VFX. Think muzzle flashes, sparkles, smoke, or if you put the animation on a 3D object (ie. a cylinder), you can attach it to a player and make custom player effects like leveling up, taking damage, healing, etc.

Tip: You’ll want to have a way to run the animation X# of times. And either an off texture (ie. 100% transparent/masked), or set the visibility to false when not being used.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.