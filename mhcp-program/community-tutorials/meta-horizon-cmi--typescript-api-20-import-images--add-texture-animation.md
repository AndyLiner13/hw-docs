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

* [Import CMI](/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#image-imports) images with or without transparency.
* [Use and or write typescript code](/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#step-5--create-scripts) to create animated textures.
* [Billboard](/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation#step-7--billboarding) an animated texture to create a unique 3D-like effect.

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

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968581_512510194620270_3962294350470992074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sXLVVa9k3wEQ7kNvwEhi36i&_nc_oc=AdlElC3SLvfn2JY-6qdCjj4twjgbfyuFJBUheAkzyII5I6lkOTkk6xt1KS1tUdMNqKw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afi1wAHNAVbOM2wvmyTIm-1K8fUN2LugWkwRlZipk3Chlg&oe=692BF8DC)

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512510044620285_6379585956399160296_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=6tvxrGk6IO0Q7kNvwFwNEnI&_nc_oc=AdmJrYHNHVTGfAwFsnHQHF2fFPwZvyMyWul3K8pHhHK7srVgrLgilWvJIxl5XEiaMf0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiCScH59CQ1idClI_AQs04YmLSoJqKBShLuAsNVzTTzqQ&oe=692BE04F)

### How to Swap Textures

Here is a short example of how to swap textures, noting that this only works on CMI meshes uploaded with a UIO material/texture.

```vs
const texture = this.props.texture.as(TextureAsset);

if (texture) {
this.entity.as(MeshEntity)?.setTexture(texture);
```

## Step 1: Creating FBX Files

In the first step, we will show how to create FBX files for standard, \_Masked, and \_UIO material types. The process is similar for \_Unlit, \_Blend, and \_Transparent.

Once you have opened Blender, select and delete all items.

![01 Blender - Delete Hierarchy.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509954620294_1064153443481861995_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=197DvNRWmY0Q7kNvwG4GxDU&_nc_oc=Adn7t8p861EWyqlV5998ipsvXS5bZnaHOA7RKUGoowHcxkN-Um9JOwE3aGp9z8VD5ks&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhrdSiZ6w6GcFMDaFLWE6QBEbnrJOZpql4tZT8X0C0MVw&oe=692BEA2E)

Then we’ll create a mesh plane via Add>Mesh>Plane.

![02 Blender - Add Mesh Plane.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452597170_512509924620297_9030051662676405660_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=maM-Qf0QakgQ7kNvwFjT1DS&_nc_oc=AdmG74M4QpqEMXxBBu8Oqn1XtLztV4YQwHisPcsQqtikhJUWCOFyt_6UUUvBXXwhmQw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhyRLo2Q0-S-nU1tTk8eoVLq3g30gXr4uLAtV-NEX7QjQ&oe=692C01A5)

Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

![03 Blender - Material New.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814563_512509981286958_8049382712676840349_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=0yMmge3PP0sQ7kNvwE60ila&_nc_oc=Adk9PJ7vFW1PkICc2iCMBF5U50wz3N0LTiqF81A76iyJllUGZgbAu4ln2nJG7SdFx4U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiGA6__YPVd2LRZxb38lE3H0ft41BY3DzmjBHAbVdvPMA&oe=692BDCEE)![04 Blender - Rename Image.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512509901286966_2206396220220413926_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=N0S1qzfi770Q7kNvwEzDwvD&_nc_oc=AdlZdN3yMkYtN87tLW3Xnkar624uHHf9RwQzoOT6rgBq23sQCfDwwwMaP27PIc5aU9A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afi5nqyNTqzVf405IPn-MXCy5u6IGTzpjHJPQFmK9ztrZA&oe=692C07A2)

This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

![05 Blender - File Export FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509864620303_2779347807224869433_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=zgaQ4T9bAA8Q7kNvwF-Y0R_&_nc_oc=AdlX5O7S4hlYdMJRKOSijBLrOJJ0EEckqalgHU5MufMWdMNceurSiLbmdFqbpQs6iKg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhUNhJduGZjk_pD9iNO07Re-p2OuH8V56g_TWovWPhhSg&oe=692BE790)

Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. ![06 Blender - Save And Name FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512509771286979_6031989145017839875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=2yC0o_LM3R8Q7kNvwH31iwg&_nc_oc=Admk7INYJht2a18ZWxMMUECF17U8UrA0vYO-ztNDrSJCRMYScsV9OJ-oj-EA0HfhNgo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiCpZU5YGGji7C6bPpgFlPuZiNZpCuMQ98yNlQobsIrNw&oe=692BE62D)

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

![07 Blender - Name Masked.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863715_512509734620316_4491289245265288581_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=8niFo1E_kakQ7kNvwHLE3e6&_nc_oc=AdmaaBJG-xNrc9fPFOUGTLg2Bh6ofczs8dwYaOAi5PRDZk7mw9HvLijIBlon5nBqlmU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhntMrmJ0gbSzfJP65RIzaG7w_Lgj70Ol2Zan0oDPvnJw&oe=692C0BB8)![09 Blender - Name UIO.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452683821_512510081286948_2595619572129583607_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=-9pki7JvUDgQ7kNvwFva3Oh&_nc_oc=AdkLJJKs_CH4TOHLCasQkb8xGWGgeLv7x3YgDDqmZmt6tmSTaaOGiFR6KeO3A4-D8Tk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afir4IRKGweYCLuFozk0ggr6q9EpTK5S4X3fmW3PG2RopA&oe=692C0165)

The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

![Screenshot 2024-04-19 at 11.11.10 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452898941_512510074620282_8089196613872825284_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QLsNEYXECscQ7kNvwEokwfh&_nc_oc=AdniwBIZl5UNP-06803Ufwc36A1y9yIZ4Q53pL2V7OFdXTU-cKuqTxuyL9IBwU-uqjY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjRVxH3w_xWxPB98riewRuKbJBTphZTavZQZnG6-mDTYQ&oe=692C0511)![Screenshot 2024-04-19 at 11.11.21 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554819_512510067953616_4081317241237303944_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=zqcWlVVzPYIQ7kNvwH4Uki9&_nc_oc=AdkRrjZQi-3kzCjTFfm2Pd2yMtbAZ9KAQUlE757mMmWAVCFytZFCrxUop_11abnk3UM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfioN3HpFPIaB2LGy4oSsaGSLdgaqCLnHbh5kjjfbaeEsQ&oe=692C0253)

Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653333_512510071286949_6198600653867134572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=x98LcsThJAgQ7kNvwGjHokR&_nc_oc=AdlVBk32oIliJk5oJD8eYANIEfiA9oXNJWB4e1jOd_XJljNPnq9aBJZhKX33x-U15Do&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afgwni_FB_GFTvWeJbYAWTIGhSJjTeQMwdV-8S--kNQX_g&oe=692BF49D)

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

![pasted-image.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512510077953615_83611763970977192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=AiEKc_qgkyYQ7kNvwFSueJl&_nc_oc=AdmcY-GZc9CU0s9RyEx3C3eC__Y5nkRO0edOtQJTO1KnEZUmox7MY2EENPTg-1T0mAc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjGQBigFF-AczIS23kYXzjjfFwNXdf3vuRQBVloB2gytg&oe=692BDD9E)

#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

![Screenshot 2024-04-19 at 8.53.37 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907674_512510061286950_115269541411199578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mM9z-WCBJqQQ7kNvwGBQARS&_nc_oc=AdnTCdl0I4Axh00VFCfU96njFWVZTDUEYrNKgP2x41sICqxyKGUytis7oGnP-d-KPXA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjxjD7xa9h81n_pLCX_Y8ygZRmCgXMTU25cEmewlfqUdQ&oe=692BFF6E)

Then click “New” to create a new image, and from there select the Color property.

![Screenshot 2024-04-19 at 8.56.04 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452577881_512510057953617_5245386781112144432_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rf3BlFLkvLwQ7kNvwEa7x7M&_nc_oc=AdmixB7Ioabm2V0AM-cOBuHYNQT5xSvSQZ1tw5LorSp8AgdUSuJneIkkUcY57yLrAko&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiChpYmOJ6UP0um9gIpZjl28UtGOgoPIChn70fiVuDPrg&oe=692C0C68)![Screenshot 2024-04-19 at 8.56.47 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652809_512510064620283_8540244349186137340_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2t3nkyn72VoQ7kNvwFxw715&_nc_oc=AdkYnsEdZuAEtYXEH55ToRdKOnygW05PC2OcTMPvPr9IbH-bjv_ULeQ3kY-t6ox9OcU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afjs_y0Lh7Gsyuxf2eEpe8T-MvNV_RMyt41d2bjdo14-fw&oe=692C041C)

Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

![Screenshot 2024-04-19 at 8.57.03 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916207_512510054620284_1744802443120394456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=UD-hYA70pf0Q7kNvwE9xh0x&_nc_oc=Adl0iVAjKIzfGF-HviCYjLMneou-70eW1mNMd6CrsRB6dXw1HHONLr93dUQxhlb3SEA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgahPrfX87DkUy4llFbGwjdCdW9a6j2vh3vpQB5xOHJ9A&oe=692BE2D9)![Screenshot 2024-04-19 at 8.58.00 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652384_512510051286951_6288220246956715927_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=dYb01MbJEx0Q7kNvwGbZz4c&_nc_oc=AdnItOZj2PiUayIxqGjtIR2xcaaWVaKPG0F2W_aKWRmpqM2hdymjZv9QYWbkj2PifbI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afh-I_m-M7wOQ_wnd4HexKij-bLA1NgvrBs6gNgyALY2ow&oe=692C10C6)

Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

![Screenshot 2024-04-19 at 8.58.28 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413439_512510047953618_4137326271119080615_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=tfpDHKgQblQQ7kNvwHWmoAj&_nc_oc=AdkaWP52akSIJwoW584Zm1jkqUE1InAry9q88ILPDJbnBojIM_DvNW_kevMd7nQ8gpI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afjdy02oYDx-d-4W-JUYhBPV4KD7Zvy1BUNbnVl0KyhSIA&oe=692C04EC)![Screenshot 2024-04-19 at 8.58.42 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452929981_512510041286952_8941302965582273418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=fuRhLwDTdi4Q7kNvwGJep8x&_nc_oc=AdkOMjVRe9W-nDkNCxuIRMGZcLPtIV0IgoXKjAH3AWfHklFSdngJyJ-t0PU6pyth-5k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afjd1A7nexEsm4zGyFKnpbDiaRyaVkUXcG7CPHaUq4a97Q&oe=692BF253)

![Screenshot 2024-04-19 at 8.59.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452691797_512510037953619_5827144605064287682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=z22NabuKKCkQ7kNvwFgIH9D&_nc_oc=AdnwraCe1UjLGTYWWqmKUI2Fjl70QkreZohEpXIJZc0G80zMdcJkoxSLJZLzsDbHWFU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhDSRQvDCfegEDwezyYwWaUmr4ZuRJIw4fuF0E1FX8Q0A&oe=692C105A)

You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

![Screenshot 2024-04-19 at 9.17.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885117_512510034620286_9198152519515217659_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=n9VlrM_Uu6UQ7kNvwFgIItQ&_nc_oc=Adk5IqG8mD-jAJ35f17MO0CQwaNXBwIq7L67e1odUbb8ZzS9vFd2-Pz-JV8i5al0pOA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afhk-vZAFxws8A4ZErL7dGwyR-sSTSYuwA8brl11shqUAA&oe=692BE663)![Screenshot 2024-04-19 at 9.20.46 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653014_512510031286953_1113735815860416145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=2VL2ve3Pu34Q7kNvwGa4Mt3&_nc_oc=Adnb0Oo4s3RGB9VmawEpCokV_UViFplulap7xoNuVYemNIbIa_ogsPXmQQ78XpD_DCg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afip6I-In1IJk1b3I1MlhTD2pSHL6dixWSxJtTb9SVL2_A&oe=692BFCB8)

#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578204_512510027953620_7672824023604347554_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=_Pt_OZpxHnoQ7kNvwE-DjVC&_nc_oc=AdnX-KobBu7DkCBOZZoON1xuk8itmk_uMEVoIa1qkorA8czRkmjTEzwFWjv65rp_ZlM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiOyVUWB0NlMNo2kipG4zLYzDxOpX_Zn98q20rfC9Ei0A&oe=692BEE78)![Screenshot 2024-04-19 at 9.26.48 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512509964620293_5448085797043372349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=ec77S7ih9OwQ7kNvwFuxZft&_nc_oc=Adnt9MFGuKBl5jHqWG5CcdwUUMnuEgVSqC8o0e28aXU5gqp5jIcZIogpPPz48U0jMfM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgRxM0Snum5u7qcQ1uaFH9otIiceI2OEGE9w-gA_l3j8A&oe=692BE77A)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452518323_512509967953626_7006945869471042038_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ba5HHI5ZARUQ7kNvwF4xUav&_nc_oc=AdnP1wz1YXhLLsd_5zTlK2v_Sko9Ul6erzPPFYYL4w3zH3BU1eQ94A3anGhpdzyXpq4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgebNRJiIvf-AGOxbNLEvh0M4myOeXP5iNV2Nv8QxsXNw&oe=692BE93F)

You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933713_512509961286960_6507830893434825526_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ri-ibnpCDKEQ7kNvwEk9lh2&_nc_oc=AdlHBj6HDH5-_f2IcV07A4qsEAo5ar6zpqoLkV63kWlbKCIcBEj82HA5Q84YxjTz2BQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjTwm4pqRpFAT5MWtzWDg0gHAr3fFA61eCdV54vT31i2A&oe=692BF380)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652035_512509957953627_1509299483219844935_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=UAcN2nzoTycQ7kNvwFUvbxw&_nc_oc=Adnm543kNVsn6OJLO9P-0upByvFzRp93raEntheaUwrfGlIkwY27V-jQs3NzLmHO0mA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgtUxpkntbnVJCbvt9u5XEVlA6tvavDe8DNwwM5jXpN9Q&oe=692BDE3F)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934280_512509947953628_7533721349325358428_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rb-oDMKFmDUQ7kNvwGEO4mT&_nc_oc=AdlbEgPbO6GUAEPRDDx059fzNvH0Nuw3ILgezMD_8S1SN3h7FC_j2V5BHYFynlMawhM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhNWIjATVKVdv1-hP2uRCXuSxEdCp88iOGPn3ylmp3Gig&oe=692C03E7)

## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

![Screenshot 2024-04-19 at 11.06.55 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520063_512509951286961_8039903915903876142_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=IpUYNE3dOqMQ7kNvwGPmsla&_nc_oc=Adlzk9vD2ZoLTc5X2h0NwGD3KVumwZgN06YJVWfp7gBG0uUZAF7PcWIzUvpbxKOGgDE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfityYRKqRs1jZK7gZgYtnaNj4bcDfL7Dyvrh6zqFVE_qw&oe=692BE3CA)

For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

![Screenshot 2024-04-19 at 11.02.04 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932907_512509914620298_8416274368174123809_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=6OChGKF27qkQ7kNvwFcMxLt&_nc_oc=Adn-z3GmxWSUMwZVi0n56p4JqRdsOcWueKMQNvEh3Z0zuR4J03WNh04Ko37LrphSnjU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgTz9I98wpeYO-GY9AXiXh9_UoDLrlCcvpI0vHv-HLpEA&oe=692BE98E)![Screenshot 2024-04-19 at 11.01.05 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452716174_512509917953631_1260850758204712021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=1TxHHden7c8Q7kNvwFcyiv3&_nc_oc=AdlFMNefyZYwqzwYz7CBx-8Sg3RQXoHmPT08_SzsHl-bzBONFM4xtVPoCKvl0e0AtCI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjiAK_LZzugrSQcHAitWOjlOtmZoa5OGHuJpdSNZDk6kA&oe=692C0191)

You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

![23 Horizon - Add All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830425_512509941286962_2286961765036510195_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=SJgrszKXndEQ7kNvwFUfFJT&_nc_oc=AdkDbyImxv8QUUH5VpiKqLSgCKJDzHYj_1gFIBfuNw2ixKPL5ZAJI18jAV2C79YVgkw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afg4QzBeMNfFq4B_GZGll-PRq-fKq6KPAG2kwiuZJCfpOA&oe=692BF93F)

### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

![13 Horizon - Create New World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514554_512509937953629_3385446684682933545_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=rzo_9yr19tIQ7kNvwE3EXwg&_nc_oc=Adn8K_jacOzUuim3tday9tccW-i0Ju_T2Ic6sFr_bgkwv5mtP7mdH4fThUOaNYewy8k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfibEQcInHphEhJlomcc8mP3Gcf4xri4ybhxFq5aAAHUgA&oe=692BE736)

Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

![14 Horizon - Assets Add New 3D Model.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452698500_512509944620295_8761892053068618025_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ifc8bQxXm5sQ7kNvwEibktd&_nc_oc=AdmWjHGrVyrfzJYZjAlGVYFusgYZ9TRtoOvqB_BTjhP_Y-BeLVT4tgzX8cODHkKE4Tg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afjvgq7KVt4Y3I0sd2zYSgi4yxagwlsl_K8I_L8umbln6w&oe=692C0BE0)

**Pro Tip:** Create a folder first so that you can organize these files.

![21 Horizon - Create Folder.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452969006_512510024620287_7145889613842616136_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Oj8JN3ru6HwQ7kNvwFvJKET&_nc_oc=Adn_Fwmxm-Z0Hu45gx9Ih-7MyYrwReG9DmVn8GSGHSsvBSf8Y178twdplsA7q9NBoF4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afj7pUzmB1gMeGsBG4oQHnixb-_MxyVHz1YjFySb8duPLQ&oe=692BE837)

## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

![Model Examples.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520302_512509931286963_1392348710732713706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=tUUJ4gCIDY4Q7kNvwF1LC6v&_nc_oc=AdlQLjuAqF3mzueRkizrcarwbBUmdexlGV9W9O5vIMokOCBhhInrvbzD6_NXUZa2xHk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afj5SaJQ3uWcTvSWc_c-ghagYcifPAI_trdQOWAEx3ujQQ&oe=692BF79D)

**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

![16 Horizon - Drag Images Into World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698500_512509927953630_2391688165484220586_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=YVCjk435Ms0Q7kNvwFGfZCt&_nc_oc=Adlmb2mG2bYlO7ojfOY-Cucp9hTmRmmK53ZED90qEpP75xSN-spJsCsxp-ta-1p_rfM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjEN_g6nLJiEPnD0lDuhwKay1j3rmKvJrzPthRndtv_Ew&oe=692BE062)

## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452942546_512509921286964_7427347511941929464_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PAGCIq4JOxsQ7kNvwGbqWcx&_nc_oc=AdnUPoucQ9kjyFqi7SinPhD9MWvs3XrTQr1F_fEMIkb7kkItnSZEY-PwCu6wNlikYpc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhZiKFGIkPy2ZLimqC7EHnT6kc4cXTgRQkQ9C10GKjRCA&oe=692BE05C)![23 Horizon - Add All PNGs.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886177_512510021286954_7252073352601237353_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZnJAp7SA5-kQ7kNvwEPmEGe&_nc_oc=AdlL8cdztwljNN167qBvtQC58SKIJG2nxTQmk-QpY2gTjOzcK30YZdSdh_TWNDiXDfE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfimdLJigT_h13N1j-PxSPOLXZJS6sA6X36lI3cpZpm-Ow&oe=692C0A08)

**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512509934620296_9067343352172927240_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=KXbyOVRVP0IQ7kNvwGWUJqh&_nc_oc=AdlUm8C9nGQxzviOmI2KcZbBoH91-97PDa1uPnr7fqO4pK-_jzJeR9-R5zSjITOD9Rw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afh0SC-nl8ljne6CWp_VXGUpGuUm-xkkX0cUEkMUilTBBw&oe=692BEB9C)![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452813675_512510017953621_1399693691768195627_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=pCSrxmeGGJ8Q7kNvwExOSDg&_nc_oc=AdmC-8xvlKgOet32tK9tMwQcGHgSzwbZ2sS3W7zcQLedyRKn7DqeVMIH9eEg5AKD694&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgyQrOMQye5Hxm-tNxw6X5FHI89JpW_GHaIU_3HyqP8Fg&oe=692C0A8C)

### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968830_512510014620288_2686261352574634183_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=QDmx3eotJ7YQ7kNvwE6PkGo&_nc_oc=Admd7-KSym3BH9GbadQ0Jt7WYdXslt0JAmPjmX0rF-fvfKnjl766Gc91cPXyuFyzbbU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afg5DI3Ah_ylnIn3047l_AfPgEECiT71pEXelBU9CG6IjQ&oe=692BDD8A)

### AnimatedGIF.ts

You can copy and paste this code into a new script, or download the code as a file by clicking [here](https://drive.google.com/file/d/1L2RWLL8h75ezou6xoWUApNjr-aaH-2_Z/view?usp=sharing). Then drag the Typescript file into the scripts folder (Scripts > Three Dot Icon > Open Scripts Folder).

```vs
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

```vs
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

![18 Horizon - Create AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452908886_512510011286955_6071772640735723234_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=l4NTWsCkiHUQ7kNvwEH4zHh&_nc_oc=Adnul1YVTqAE35qXoKDRVtNa9C8PJcFRKhV-6x6tFSs746JevNwCY79HcmBhHbxrNtg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjjcIuV4hYwY_4n_1W-xqZc04r3Y8sD369m-dBlw_e8Vg&oe=692BE2DF)![19 Horizon - Open In External Editor.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934389_512509997953623_1096257128825943521_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9XVI-ZV_L_sQ7kNvwFadkxi&_nc_oc=AdngIqZcT8z_LXxj9o6j1YMwNavpDWTDbAvQHGcU0fGkS9Ci3GN_gbOBCQ7fS4Ik_4s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgQYZ7Ed_WfFLBL3woDyyH_LkSB4CAU4DMLHWm9Nl2k6g&oe=692BF80B)

From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

![20 VS Code - Delete Default Paste AnimatedGIF Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452952740_512509994620290_6613449436146433136_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=CzyJo-8OE1cQ7kNvwHUDHm3&_nc_oc=AdkxoxEk7Mos0DNKQQ5vjjGf9fWaPFQhSyoHPl3n3ogcRKWJA4ofDKfHKtr2E8PKhDE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgTCVSCJfV0mx1VscrkGK8lFTz3z-Dn0QGUbBrwvLf7MQ&oe=692BE8F4)![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512510004620289_3602977530773515663_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=AT8zelCwXFQQ7kNvwFYDYah&_nc_oc=AdlpLEI_Xpo4CXqou8AWS8cUuIGP9gq77pFfKhdKAo28HFIPuIl3i6o4977DLyPpLNA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgDiNaCp4e6NYGabdEif3KOUYeGORi6vT4kwLNratyMww&oe=692C00B4)

## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

![27 Horizon - Stop The World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512509971286959_3679470934818076750_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=x5qq1gekddIQ7kNvwEBPeAs&_nc_oc=Adm6FXj9EEIx3sMGf9JTW_DXgEQUGXopVXSu9ae9YJOGkQM4ig9oJ0tRBDbb6G8NwS0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afj9DyVVBYMD23TSpwvUtKiAI2TF0mh1VuM0pWPrT0q-4g&oe=692BE1EE)

Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452893310_512510007953622_6953964120795560456_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=wNwwd2zIbr0Q7kNvwGWZ8Qe&_nc_oc=Adm-kdXWfJhH5lCNLOYY0kCDMetdLg8Q_VHHwrgvLYB6AkzVJN69qATTZY0b-an73IM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afj_zJCJbqD7Etom1ITJ4Bd4YBdA9ZCcyh_OBO2Wl4inZA&oe=692BD969)

With the script attached, we can now drag the assets into the empty texture slots in the correct order.

![26 Horizon - Reference All Texture Assets To Correct Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597104_512509974620292_7381418665732884630_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=lF6hpbSQAdMQ7kNvwEkbCAk&_nc_oc=AdlnL9zKp3gQNG5Rta8sJT_6ICmLmdktuzECROoarjFx-mIelqbkYZCtHj1NG1cVoa0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgTdgXu54awzd6hDhfkhm8O18gEgeXx3De-REXTtOLO3Q&oe=692C0F9F)

![28 Horizon - Not All References Required Change Speed.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934376_512509991286957_335261093369493818_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hpwB6xVvIucQ7kNvwGRa9-f&_nc_oc=Adk_88ibhpFa4tb6S3wVbFoC8Y31NjhAmJzG9tjDJt0yOGEo3iRrjLHb7fypoJm7oTE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfhpkXIppVxJJm-NWVveljG_IjFm11iDNEOrYEVNmezezg&oe=692BFC89)

With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

![29 Horizon - Play World.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452532621_512509987953624_4411056457549309049_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=V5AwREp7tTwQ7kNvwHIxlai&_nc_oc=AdkZqYBUUbhvSuWLZZFW3OQCs5xWKbJmdneFvLDHbKRA5VbBRjKZl3UUHO96xd2raoc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afj1bhYhcLCpqLDjjEYsLn3A7xi2WNzILP21rvsBXPxHrg&oe=692C0A0B)

The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

![30 Horizon - Adjust Speed To Your Liking.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452933994_512509984620291_3491567733690113088_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=cHjdKhQd_hcQ7kNvwE28qaI&_nc_oc=AdnQLwrZe_0S7FgBwTCkWU903DsRe1GrK6cUH1spd1-qhqwo_5fysJwK5_Jb8VFhm5c&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afgv_gnFuhecdIIdcG2CEQ1rHFF0RTlXsWe42XLHe6po9A&oe=692C033B)![35 Horizon - Billboarded Nyan Cat.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452540279_512509977953625_2643885165784093538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=kY2QXImfIM0Q7kNvwF7LgJp&_nc_oc=AdkjEoCoJddgY3N6jpcEP21pW3S877NNIBbgSkbY-4OdvlzchdlToTkhOQjlE98w1oQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiPTTtlrc_9XS8ucsPgtOkKTY_cxxzO1YORl_tatqqvTQ&oe=692BE167)

## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

![31 Horizon - Group With Some Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452853527_512510001286956_2716518458353739131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=i2huj519Qg0Q7kNvwGZJPJ4&_nc_oc=Adn95Qbj8BESd1w-4-htcpVKFmYLbUO9lpwt-FQkwfw19NOaOnLMwA-uNlwNBUKMcH8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjulN9zfIEXV58IWM1DFJBSKlE0ptum7cuxYJkzim2NJg&oe=692BF659)

Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

![32 Horizon - Delete That Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415046_512509911286965_3425181708830011765_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=xR1uO1C-P_wQ7kNvwHhIr77&_nc_oc=AdmDY_HCNGnqwgTZ3gpgp6ulrEZBiZf1EKWGpTCV-9_ExE1RIcsb6SMcJocZXAKFbJY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afh46nvhsAZcndMIS_MshHWkScTY8ky_QYWzXqBpgUy8kQ&oe=692BDAA3)

To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

![33 Horizon - Select Group Set Motion To Animated.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915492_512509907953632_8557229846459868426_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5ZzyJiowc8sQ7kNvwFP2e5w&_nc_oc=AdkSgheVW4hOTBfNOFqHCAKhAlxGvKDPLNxeDC1BRRIyjq7W5I_cgYnlrx9aLrpxRzc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjY6ZTjfHj6aM3oGIkDHo0Jqqf6TXgvwadcUIXSQlnnCw&oe=692BFA6F)![34 Horizon - Billboard Freeform.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513071_512509904620299_6429956925647591739_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=2to6CxXlesEQ7kNvwHP21aT&_nc_oc=AdkAa9w2v-a8RTX6BTvHMMNfQzI6Z5tgS9izPuVXI-i2hD-W_Lhm74hdsV4vEXETLpM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfihY-CSErKcFLmJg7u60WkYWoPnCE6ogDW4G8GyYax_kg&oe=692C050B)

Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

![39 Horizon - Bring Out A Trigger Gizmo.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615830_512509897953633_5127349402886952232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6yqYlhO-yHkQ7kNvwGXJLQ9&_nc_oc=AdmgfMa4twTX-tWXWXHeKTFXqeeHKzKbHZ-2xj1CRrqEitkFiko9j8O1j27RN2Zn3BU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afh7Z19As9jwTBcRu7QQMvJs6YSVuoj6aNVOD2vSfoSxoQ&oe=692BEC33)![40 Horizon - Bring Out A Button Shape.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452752337_512509887953634_7522440812087672101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=bt9fKyH7Tw0Q7kNvwF5m6H3&_nc_oc=AdnajKo9W7rfvPVSbeD3zQqeWzs6dQK9xgN18NKbcAGzfy4oa6NqoLt0Epv44NOY-f0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfgpsTLQbl0lLZ43S240w3su_2fSqj3NTD0dtMktuK7B1A&oe=692BD927)![41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509894620300_8243052218315123329_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=RqdqoV5VhXkQ7kNvwHSXDD5&_nc_oc=AdlhFvATjuVChSJgkZ4wk7nmlNq_6U4D7t2qtaGRF72OBbCb9NfIkGFmwQzfMD5NQC0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjF-O0TNhhFzzqHhoLWl0mZAGeH5QRrlg4u2gF_OqjD2g&oe=692BD8CD)

![42 Horizon - Attach Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452628926_512509891286967_3053857877730824769_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=h24Q7wX0JGkQ7kNvwHclxbk&_nc_oc=AdmDXZ8O1bcXUZgk8S_1aQkIvwC-gNy2ov9X4evmNmXQSywGIfBM5Xdva3xseg3hlEY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afi31A0xxpyBfwiaKlkqHQurIEY1_K3U2z6gxgY56IX06w&oe=692BF942)

Select the UIO plane, and give it a good name so we can better identify it.

![43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888016_512509881286968_98449028924003563_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xgV3c4hMObwQ7kNvwFbI9fr&_nc_oc=Adk_KaNJXVa0r87mCPxbFHNVAtMMaxAot-26Ux0MOzUi06NcI-0NUENmFixX63ZKIdQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afg4p30Ovr7dJIpRoW9mX2eHCxbYiYy6S63FrbEpvi_-Fg&oe=692C0B33)

Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

![44 Horizon - Reference NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413127_512509874620302_6306166632729951456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=crEk2fe9QrAQ7kNvwHctT7m&_nc_oc=Adm_JFK1yBlsk5iXxNcCuhSbH5HlDbSSPz5HDVan4BXXIKOkX6VpLSh4usdZ5K1kFjk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afh14mLtOQeKMvSHfXuMM9fIIIZIWQH7qKXdNetIaXjrdQ&oe=692BF247)

After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

![45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415063_512509871286969_397156706064990581_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=0rUbuCY4aPoQ7kNvwG7NEHs&_nc_oc=AdmAdFKXHg8FCOSb9KZg8F1UprhiyN0zeQvAiALtgglxrN86ZT6h1ftC8iO3yBTL3Mo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfisUqfkDIjjkk2p0uMJn_g8fVMMBl0jP6noH_zH7jzhIQ&oe=692BEEFD)

Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

![46 Horizon - Jump On Button To Test.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452663326_512509884620301_5661988945403216671_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=oqBihJy-KLoQ7kNvwG_QgDA&_nc_oc=Admb-7-R2CRCAE_YEGXXWY67Vvzebou21s8-AZqFT7_O3gcqTycUPdGrrfV42Sm_bqw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjmGGPsv9jTv-4pTgKB3xUM2DLek6UUl8_RtNomT7Irpw&oe=692C09A5)

## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

![36 Horizon - Duplicate And Rename Props To Add More.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452587750_512509877953635_1060541854433685900_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=6RAh72PF6KoQ7kNvwHPZuft&_nc_oc=Adkyb6PahmP5v7zU4ZTXHuNvJP-b7WPDkaBBb9NVBdxuKh7yD5FHpUoPYyLPOkOq0eI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_Afir1vHM29vy_vJjiqj7-LJP7gHpV2vEdD9TIg94jRveug&oe=692BF8DD)

Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

![37 Horizon - Duplicate Add To Array And Rename.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916434_512509867953636_5718596235244147160_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=JSXktAcMSHgQ7kNvwEmgPmw&_nc_oc=AdkY0HTjNFrl11nARuer6gyHYa31yaOrKDRAl5AN20NMkNZXShe0qOG3cKUP1XjAle8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfjQbkpaoKdECm78YdT8DX8xzFlfJncerC0cHcyNnQ2jnA&oe=692C08C3)

A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915631_512509861286970_8320013039747796277_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=cpTBQKxYJu8Q7kNvwEp5BU1&_nc_oc=AdlW7yY6P4QpZyHzEzyTYDGOVBem2AfH78IhvD2DuzU5QRqo_vTJ5jHMTQ0MUTAC02s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=2UUBnczqpDYVzfDilRv-7A&oh=00_AfiVpduq3zRdZE2lnuy1WP3PX-sXxGsqSQxeq5dt3BX5rA&oe=692BF1B0)

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