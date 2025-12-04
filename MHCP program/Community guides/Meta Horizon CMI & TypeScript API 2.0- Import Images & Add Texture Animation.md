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

* [Import CMI](/hw-docs/MHCP%20program/Community%20guides/Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#image-imports) images with or without transparency.
* [Use and or write typescript code](/hw-docs/MHCP%20program/Community%20guides/Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-5--create-scripts) to create animated textures.
* [Billboard](/hw-docs/MHCP%20program/Community%20guides/Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-7--billboarding) an animated texture to create a unique 3D-like effect.

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

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968581_512510194620270_3962294350470992074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=rLBZh5U86WMQ7kNvwHgdHtG&_nc_oc=AdkFuPbf6c-GJy4yqb2LNqnyKeuG2q-U5KgL7XipvRfndRqnMDQjSZNSA2BYcmujv78&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkDCabZLRCf0FgVPB1fAMGJPCuq1s43frdm1sK9UowOqA&oe=694BD51C)

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512510044620285_6379585956399160296_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=oB3E8azgp3sQ7kNvwHlo0wU&_nc_oc=AdmjU1qBxtIjH7SZgNmiBMUeB6kVYLUkdssXMLjMZAZgTLCXB9yTtV1Cz4QQ5g6g5HM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflEwec8qWoqWXhfo1LYsVF1i8qokDL3A37mC7Cy0iK38g&oe=694BBC8F)

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

![01 Blender - Delete Hierarchy.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509954620294_1064153443481861995_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=3BZjxf--xDYQ7kNvwF45pV6&_nc_oc=AdnL1gJV8aa3n3U6QuzMhvuFrJlF0onm0qto9JjliTQ3smWRgay3hCzkjWERp3PdG0k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afn56lYgK2_JXWh-xCs-G0mt-jGM8RmcvDK3B2dxzEVHjw&oe=694BC66E)

Then we’ll create a mesh plane via Add>Mesh>Plane.

![02 Blender - Add Mesh Plane.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452597170_512509924620297_9030051662676405660_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CEIneJLEGwIQ7kNvwF5j9FX&_nc_oc=Adn7hHW0lrmoZ2ON9P5GrHfFUpewLZknAJioqCDm_xFlaTHhpW7yZzS56ufcSw6cQXQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnY7RjRjzHgGERtnn52hQkhqf4TYqOuyxNb2xo55Miz4g&oe=694BDDE5)

Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

![03 Blender - Material New.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814563_512509981286958_8049382712676840349_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=etfZteaK7WcQ7kNvwEsL2tj&_nc_oc=AdluRFrH4CG-Cb1SQBJsHHodbNeoFEgSRXsFlcdC0sm_1DD37sUaZEwTGUn6Hmo6pdQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmOnKpWD7PssZs0Mg6XhDCS-2l0f2_v2ldAALCqEvwqRw&oe=694BB92E)![04 Blender - Rename Image.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512509901286966_2206396220220413926_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=uJ1sWE01ns0Q7kNvwG_EbxG&_nc_oc=AdmGfKqOr5HwJ4VLj3suM0ILTEr8cZNqPcjNvw7qljoucy_YQO7F72vUp5ZHbhyKdAU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmONG1Cyjziqr3E3MPhOURDKvvu4vpaDHqw-o13RsFq9A&oe=694BE3E2)

This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

![05 Blender - File Export FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509864620303_2779347807224869433_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=L9pSlFpYPh8Q7kNvwHzUfyP&_nc_oc=Admecp5vlhRGb7fzZRqUVyZ69enp2g3I2H5qLz54ujHMs6j_lL4Nm0qdc-WcpBPeGmc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmN2Sdw1X_w1vdqagxWUPkLnxFM0CredXlusBhRhKl5vA&oe=694BC3D0)

Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. ![06 Blender - Save And Name FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512509771286979_6031989145017839875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=6TtHcmMikhoQ7kNvwHKtDMI&_nc_oc=AdlSAmGgGCU1fLvAjDBgdI1i_EdJVIHqiC4ZHCU02KUdRWwnLkFZ-Ic_jJMM62VWo9k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmgTgdUk4bln9t8XQePH89sNoYBsVHWBe-sOe6m7nDy1Q&oe=694BC26D)

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

![07 Blender - Name Masked.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863715_512509734620316_4491289245265288581_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=6CrzDZpnctQQ7kNvwEBfSnB&_nc_oc=AdkSjPXIiSjGiLi4R4FiqQt1bSqmvdOq0r6_qi4xCipQnfGYZNXCW1oKArprb_6Nztw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflUpV3d0k5VTA4-hrnBSBYHVMiNxxk2Ym0Cj2ACAoGmrA&oe=694BE7F8)![09 Blender - Name UIO.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452683821_512510081286948_2595619572129583607_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=mxGmi6cck3AQ7kNvwH0LKRA&_nc_oc=Adm34zhq_1nNheRsMBRPTqFWPMoLMTpRUfajb6veygtZ8M7MwyT5fULk6DM0kYbFwr4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmIZLKYPKENUHstEmDUDfvn4-qaG3-c6APKG96sFewGPw&oe=694BDDA5)

The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

![Screenshot 2024-04-19 at 11.11.10 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452898941_512510074620282_8089196613872825284_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=5bbhZ-8p3BoQ7kNvwE25c2H&_nc_oc=AdlBRQJOcHdwi7q2yJ1SHccp6rgirivYW1GT3d0BcFpOhITxIkyva8zJXAbCPlkcAl4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnzmCHiHxdt0FjoT6tmskeb75ci0eNE4cX3liZ3AqefFA&oe=694BE151)![Screenshot 2024-04-19 at 11.11.21 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554819_512510067953616_4081317241237303944_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=9C4UtSh8_nsQ7kNvwHFYFWn&_nc_oc=AdmfBjkUCq6BqbzMc5DeeL_KDAL2U30yhF3Dm9CrtyN5o_0jqi0hNTVq1nYj-Bu0yKE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnVXaMtSO5lFwTGYVcyenS3b8GmNzmHF-lKdgsn9HO0MA&oe=694BDE93)

Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653333_512510071286949_6198600653867134572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=cL6Zw_rEu7UQ7kNvwGv5w8D&_nc_oc=AdmJFAYTuwHXkoFR3XBIHRLnqsD0U4491gnP33JfuHMI1xH5l-mEta9Ql9r5vpHDav0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfniQvSsOR10TwAl275ctRKfTEVxiuhviolIOwB3uZD2lA&oe=694BD0DD)

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

![pasted-image.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512510077953615_83611763970977192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5oErT5W7aIEQ7kNvwGryHf7&_nc_oc=AdmPAvks9wQTeSN8lPXSNodClAMQDd969KAh8u7X6ndDkNOCF5jv1Jb6GMdOwDkb1cs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Aflwz6_zYnhG5Hh9hosdZIW4Tl9sgj4hZngahoJNYWgeHg&oe=694BB9DE)

#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

![Screenshot 2024-04-19 at 8.53.37 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907674_512510061286950_115269541411199578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=y-EEDbRSBDcQ7kNvwHloYGp&_nc_oc=AdnozlRmcpIWti-sOwIKyotMv3aobN0zepb1hxzR0n6rqcnbGSWED6hLG87NU97CIPs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflU_odNBXQ9UunoG3q-8gnOrnfttfzcaaxJ3_1vRqbF4g&oe=694BDBAE)

Then click “New” to create a new image, and from there select the Color property.

![Screenshot 2024-04-19 at 8.56.04 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452577881_512510057953617_5245386781112144432_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=96JsnCSoMBMQ7kNvwFo4mvy&_nc_oc=AdktXzGmKTQ0Bh9U8FEHi6Flyq9xaXAEx9NXAgH4kv4faLpedgfOiDVXW8-LMK90Mzg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmCJDwUL8vVLpyUmoEE9CwrFhI_YSd__npUaHKpHMtuMQ&oe=694BE8A8)![Screenshot 2024-04-19 at 8.56.47 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652809_512510064620283_8540244349186137340_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=6zRcc-NdU0cQ7kNvwEIPTw1&_nc_oc=AdlhhGf1TBfizoYkVvZX8bn-2CAMYkGEU1N3akIg0RgGvwTggqMi4GVchOQI_IoQ8sg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkpUmyhzi5JHKkbGvJGN7aBGA_qk04LhYVwZGm9n-0FDQ&oe=694BE05C)

Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

![Screenshot 2024-04-19 at 8.57.03 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916207_512510054620284_1744802443120394456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=pz0xdLmnhNkQ7kNvwGwyBM0&_nc_oc=AdlR1YzjvDecXHCgsevmXSiKzrdrMKAlJP0iGcyH1ZzOaQdjGifTJI2DMsaMWYeUu-w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afnb11Z9ibddNbXlYvD9ke1CLgIMQN4apCxP-eQ_HbAB5A&oe=694BBF19)![Screenshot 2024-04-19 at 8.58.00 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652384_512510051286951_6288220246956715927_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=ONEQQuGYKeUQ7kNvwF4mq7A&_nc_oc=AdlwRWzI3tpGo0JgqrUKW4_H41dipj8yZRxlqAkouovQL6WyAYQwtgWmSFn0GiXfjrg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkcreLh2pdQhuPHp20B3sEvQMRRwcVoPdC-3zgi8fJmYg&oe=694BB4C6)

Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

![Screenshot 2024-04-19 at 8.58.28 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413439_512510047953618_4137326271119080615_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=MVAOB1o0ndIQ7kNvwGGOoEa&_nc_oc=Adll4CglD6aa3j9mygi_DlJ0k0rsuFSk5lGecsQRzvJWtq5w_DsyrMA4rOUFX1L7oIg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflXgunfp6GeV3tTMO_v6U3nVeWIQB_lXEa3fHrYssmRDg&oe=694BE12C)![Screenshot 2024-04-19 at 8.58.42 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452929981_512510041286952_8941302965582273418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=EQmCBX_k3xoQ7kNvwHHjT0o&_nc_oc=AdkGZpwdCDTe4QGBAaAVUSFkBIVc697VCPZhYyMNKyhuRxTPuclACsss_lV6_Qm47xM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflUEYpQl0jfmM7epPUzmkcskR8l0ELjCI3c2X8F3C0kWw&oe=694BCE93)

![Screenshot 2024-04-19 at 8.59.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452691797_512510037953619_5827144605064287682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=VkAnxss48WYQ7kNvwFyHaci&_nc_oc=AdlCwH50QvxZrWI2rxbS5vC2wEerUPfSHZspBt4jk3kLr2ZVpIPOTyqYJH5yPmw0NV8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnJBVdqU_6RH_4w2ejIaxmelMoTytYe9C5SPZsauiDiCA&oe=694BB45A)

You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

![Screenshot 2024-04-19 at 9.17.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885117_512510034620286_9198152519515217659_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=sBy2oJgGStcQ7kNvwEcuE98&_nc_oc=Adm0PegrLNCiR0TW3r4H-t3bsVj7kRezEBq1FB9p5kctdLR78onG6bY5Efwib9vCQj0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afna-cz9YvedtLa1QJqtqrwlCtPjWUdCRk7j1IqmaJXKJQ&oe=694BC2A3)![Screenshot 2024-04-19 at 9.20.46 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653014_512510031286953_1113735815860416145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=KekTK5kLas4Q7kNvwEHlLBI&_nc_oc=AdmTCFVEqdNd3K9cOKen-jFjqFhR7A5rTzhUAeKJKX_VVOlC_VeTHBAhxwLfGpYTOhg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkeFKPlLH7RkE1vhD7sRv9KMMWOXWl787wmHexqKeL8VQ&oe=694BD8F8)

#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578204_512510027953620_7672824023604347554_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WYo8k9nB30gQ7kNvwHAQwca&_nc_oc=AdlQJV4z0_qKybw4csAS1O_DQCX6T5-VAzYsMiNnuW-gAVSlx19tFgYqeF6tIR4V46E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmJf1ShPgCW3T528lrxoFAuopbRP2N2K55mW28_Ug4wrA&oe=694BCAB8)![Screenshot 2024-04-19 at 9.26.48 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512509964620293_5448085797043372349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=faW6Fymy_HEQ7kNvwHOjaux&_nc_oc=Adn9flRc-2iWMCwTswEAKMXoQYDsIg49Yw0wrtfQ33_rbSK3Rw9AOqXFMhwTjpInzrk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmwCzfldE4yFe88qlD9hGEGdNZsODBrN6LnkJg4sHdT_A&oe=694BC3BA)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452518323_512509967953626_7006945869471042038_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=BiQoEYQhQEgQ7kNvwGmIpTg&_nc_oc=AdkO8irgn-MOeueO8O_SSdxvR3gpJkL-OKgadYxK0iF439vvZ1LypBCJMRkZq3gn6BU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnDFfia7YzH3ZYv7518JgYTHTy8DIMgcwf57C2kFNm0Hg&oe=694BC57F)

You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933713_512509961286960_6507830893434825526_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=EHddGLRorUUQ7kNvwEfS0Lv&_nc_oc=Adl9Ju6o0HiXuLbGqc6GugESajWmdCcBaBdCPSrjs3CPgaRDyccUddcmTmWcEsa6H0U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfldZeIGIL3AlIXU5BDh7xfOW96ShF3rMdE48SoOpOvVZw&oe=694BCFC0)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652035_512509957953627_1509299483219844935_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=wL5a3KJ-xh0Q7kNvwHWLS_r&_nc_oc=Adm_8nx_yvKJ5Blb3nXGg7-zXsRkl4M7pnabvu2TQMWPvHVw_iIM7P0IxuUyJVxPsfg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmvWkTc288Jriq9Pd26lQCXNXsIeCQ1KNd7P_ZGbzYsIw&oe=694BBA7F)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934280_512509947953628_7533721349325358428_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=yQJy3FroOQIQ7kNvwEy-4M6&_nc_oc=AdlF6kYt6Z5WO-CWIMIREKyfDBLNyUmNJqLisTq-A6DbQEFe0LFWEPHnyswA4ku5XpM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnZQecQPn936KyCX2YQuir5VfTBMq6FncgpH8VzUfp71Q&oe=694BE027)

## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

![Screenshot 2024-04-19 at 11.06.55 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520063_512509951286961_8039903915903876142_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=29Uoob7ZeA0Q7kNvwF048qv&_nc_oc=AdkZfvJmzzs4w-MryF8DVtNkCj4portzzk_8wpChmEeZlGBZDt1WC4jAk3kcKY18yJE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afl02UPkpDGU71Sk0vaJ8hNsEbGsUGDNFKGecWiiNaqdbw&oe=694BC00A)

For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

![Screenshot 2024-04-19 at 11.02.04 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932907_512509914620298_8416274368174123809_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=OzABbwj-4IsQ7kNvwFaOCV8&_nc_oc=AdnTRdSQycO3ZIfHqwTEhMnfSgm_6eGaK5lx1KHlJ3TEFrBUpHWe8fuqFf7P7fRKpWY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmpJQjFtjhn7rAxgJxMw5mFDYEJrZou6JJmHaLDHw29FA&oe=694BC5CE)![Screenshot 2024-04-19 at 11.01.05 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452716174_512509917953631_1260850758204712021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=_yoijHCi0XgQ7kNvwFPBJRp&_nc_oc=Adnx4F_vIskUDTuUB3iaXrXiKD4T_XCR9zERLIp8HzIF3K4MmpvUXnBKJdiNEkjUD9U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnWisMSdwJm_upQudAvYaq_1bU2BP_V08-z2fRLBllK1Q&oe=694BDDD1)

You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

![23 Horizon - Add All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830425_512509941286962_2286961765036510195_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=8OItY6fvQOcQ7kNvwEyb4Ad&_nc_oc=AdnQOJ5gXS3QwJx-9fvwR8dLewe1r9oBuYuMbZLs5UuIO86MAL3w8XdEuJKjzV4LYHM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkF5KeNeC7Man-_gXpofpEZvDjg7J1bkr-yFZgROWGXGQ&oe=694BD57F)

### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

![13 Horizon - Create New World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514554_512509937953629_3385446684682933545_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=wdEiQtsKMPIQ7kNvwH0Tm55&_nc_oc=AdnjISV2VXDnzberH5Ofl5tNeExEKAPPxWvQ_B0ffVyZpXxgRja0qPEg2-jdsTds--E&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfnMpcf6XdryefHkxp8phORsQORkF2qqwZW-OGMCjajLzA&oe=694BC376)

Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

![14 Horizon - Assets Add New 3D Model.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452698500_512509944620295_8761892053068618025_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=yxTfNau46ZkQ7kNvwH84zsn&_nc_oc=AdngmlXO5QRIOUBqGbmrUB_1T0jS_M6FiuZdDfM9Vhd_Ot7dDj7K1jqkeArzqgMZywk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflizmY85qLEE-2JK6CUcJm7txR6g8ohGsR9WwD2wnhRTw&oe=694BE820)

**Pro Tip:** Create a folder first so that you can organize these files.

![21 Horizon - Create Folder.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452969006_512510024620287_7145889613842616136_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=jKRf6hsWoBoQ7kNvwEv8Cdi&_nc_oc=Adk3DS8hBSmLeDxaxG0xaSORyvYDKfb5QFeTNQeoncwhe0TqZ-PNewrzKLX2YTVHJHc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflkEgo1QmUNhXbclGuz3inBJ07hT2d7gYrYCEuEtQpw9g&oe=694BC477)

## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

![Model Examples.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520302_512509931286963_1392348710732713706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=uIE_TE222VcQ7kNvwH70J8d&_nc_oc=Adm34RNeYayKOVEhg3UDYBoAd9P5O-J6tsTg0gN6dGrxK6AcYkWwIzOOCQ7l9ufjcok&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkAjKrLNemBnwrAOmMZIs4ZJh6rX6h-lItrkTyJT9DeXQ&oe=694BD3DD)

**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

![16 Horizon - Drag Images Into World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698500_512509927953630_2391688165484220586_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=nH0h-29o6soQ7kNvwF2-nxl&_nc_oc=AdmwM3BkHSBiJm08yhXF5TO5kvYBOnBMJNPu4qYHaj-Fel-NH3GH7ux8Ue_xEQtj9gs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmApXzo7lt6tH8gqXjZhK243eKg8VC-uEpwlIdQHiGMWA&oe=694BBCA2)

## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452942546_512509921286964_7427347511941929464_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Kq78rRV6ZEQ7kNvwEctOK4&_nc_oc=AdmKtJoDXhdsyyP1HzNxxA4qOmAm-JOFmrtpMf0X8mkjg0yK_0yA386g_l6b1d4sAAw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflhGi-eC_1NCStjfHfjuYhA8YIHlei2ScQ9eTU0VyC63Q&oe=694BBC9C)![23 Horizon - Add All PNGs.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886177_512510021286954_7252073352601237353_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=x0WEAWG9Di8Q7kNvwFmtL38&_nc_oc=AdmDPLf7VbcX_FkrzaD8ZEC-Z-KS_7PemeYSWxwHmnQ1znYu-PP6Pge-9wogUwgQU5s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afn9CoO-rnFuRQQ0vVWji0f4cIVmNsbYuPpHwAYJpgUIBQ&oe=694BE648)

**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512509934620296_9067343352172927240_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=f0XY_TB4Mh0Q7kNvwH-RpGr&_nc_oc=AdmqSviAU07vgB5HnsxdQ6BJlzzPZ-rxh0rOP52K1UFbZh3yCNIWeZrs8h4V28n_mWY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmiRN6Z1FJBx19_mrlIoDLaQnM4MGTeuwz7Ksmltid8rg&oe=694BC7DC)![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452813675_512510017953621_1399693691768195627_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=4-6LLI73JdEQ7kNvwFNkunJ&_nc_oc=AdkHvmJuHEerrk4yH6WMitlpDznWoo56a5NtLwLmLTHE93ZzG_vcOwR_qEGJ2dWR30w&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afm5klBlvJRNeo99QpneT1Stuwgb65xZ6ak216PxYGBNHg&oe=694BE6CC)

### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968830_512510014620288_2686261352574634183_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=NKt4QBHJFJgQ7kNvwHCB_CC&_nc_oc=AdlI-VUcn71_vb8-UoKS6GYXG_SIurugTW-AHBs0nqp7zKKOQ_0JMK98X0g7g74EUS8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfljSiXDYM6hmMRb5D3p3VOhcb0QO7x3TLR0hvhoXwoO4w&oe=694BB9CA)

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

![18 Horizon - Create AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452908886_512510011286955_6071772640735723234_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=I5Wu2sFwioIQ7kNvwFYyLLy&_nc_oc=AdndCMO8wyZT0dFWC-GtwROqPGhgNvrmTx2dnGsfxE_Sz0Z9MAneUfZ1t9pp5R4rWW4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflHu9yrPkAOfrILkO7DaF5Wa1tQbUVGzGs6eZ8lUK_sZg&oe=694BBF1F)![19 Horizon - Open In External Editor.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934389_512509997953623_1096257128825943521_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pbVsPFGd40EQ7kNvwH56nI_&_nc_oc=Adkng2wnx-cu1tf9WnuhxU61kmcJb7tXdyf22njYKk4dpkDvmJ3-CHxsW2-HyFzM3VA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afl2WPnweqZBYueHfsq_MbB537PqMnGmBrqigyQbyWS9kg&oe=694BD44B)

From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

![20 VS Code - Delete Default Paste AnimatedGIF Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452952740_512509994620290_6613449436146433136_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=o1SRGpF3BWkQ7kNvwERFaUJ&_nc_oc=Adkz347ph5qgchNcSntGxHjYXpJaccxH-S_Fuan-zMe4qBdnFOCv7GlcivyoVjrlxhk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkshyVMZJnLsmp1bT6vnsulierBQ6qFbIfpdibwzdMXAw&oe=694BC534)![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512510004620289_3602977530773515663_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=AuILOb2d2VgQ7kNvwGxMMra&_nc_oc=Adnurz-fU4I6d2HcDIQRvK2pOq0baN2_ay61Tl26jypNgTXqaJItqqpkPyoZtlVb6DE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afn9MpsBZghtNTO8hjN0A3J9wOnGF6kTthmMt4cZGPzxdw&oe=694BDCF4)

## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

![27 Horizon - Stop The World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512509971286959_3679470934818076750_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=WiOnbWgs4V4Q7kNvwGKrUEO&_nc_oc=AdnjsAiWrG_c3m-Gti1u6g5VRekP7gFUiHU0oIQb65IAPKJw0EwjvMIoexaLV8tgQAo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflsUxGIsmLdFyyu0sYLMrKhT7W-Usm67q_Rx6qbvtXLIg&oe=694BBE2E)

Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452893310_512510007953622_6953964120795560456_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=OW2pfMVoCEEQ7kNvwEmHxr9&_nc_oc=AdmfQKy_hjR4s2vq0yzjymqhqdgxcQMYxRexNtojWWBySJkkmKVwUIH4wRV8J1XabSM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkoreWt61zA_pKw162pPKn-Fu2Zm01RFYUdjnqhg2155w&oe=694BB5A9)

With the script attached, we can now drag the assets into the empty texture slots in the correct order.

![26 Horizon - Reference All Texture Assets To Correct Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597104_512509974620292_7381418665732884630_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=44OmjYLq-UEQ7kNvwEZWvnz&_nc_oc=AdnPMe-MrlAJ6nxoHv_pgF8dq39gZSNwEqNWvpXoB08uiQG9_bVoZGYXAanxcHEAfDw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afm6L1iNO-d5IleglkqWuLFpR__2GvwZEAzD88RnRobBSg&oe=694BEBDF)

![28 Horizon - Not All References Required Change Speed.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934376_512509991286957_335261093369493818_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=tNCjgY03iRIQ7kNvwFF54T_&_nc_oc=AdlYoqwCezwaRNCBmJHjv2U31BL4Dz_mTUvwc80FAUlgsPwHIMkR3pWmqtjei3cZ8JU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afk4fRyKoXSNqgMON4fgTMXxG7Ra35P5UCA5SzkhDo8R7Q&oe=694BD8C9)

With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

![29 Horizon - Play World.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452532621_512509987953624_4411056457549309049_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=XI7LoXWl1RwQ7kNvwEH0BqX&_nc_oc=Adk0jgJ15ysPSzBho2c7TLFqozJHyqPKKrNgA0SaC95upnTH0_6wLBJHeBMY8aZw6d0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkpMdK6dr6P4uuKVKmca_AQjWNcax7DjUn426lCWUUvOg&oe=694BE64B)

The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

![30 Horizon - Adjust Speed To Your Liking.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452933994_512509984620291_3491567733690113088_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=_q3gsTDeWMsQ7kNvwHCr6U0&_nc_oc=AdlykrecYIqY2oI_V85yN8hDTrohdwt_PSUNjIQdr6jgSssxhHxNvHKwxyvlw6SJE3A&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afm-96lL4o10S5BwJZraTN2t6cHyyTruLl_1VD4ZD5pMrw&oe=694BDF7B)![35 Horizon - Billboarded Nyan Cat.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452540279_512509977953625_2643885165784093538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PEKhMEdGZV0Q7kNvwEEChfK&_nc_oc=AdmrOHxNoVBMuYt9BL4VvDy78zcyYAnZzvQx1LpBwPW10hdib9SSGFdl8eU7BS4z3CM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfljQW7yN9rLu2dzMrWTgqztcBDhjHZwv3IKlEH5UG6evQ&oe=694BBDA7)

## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

![31 Horizon - Group With Some Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452853527_512510001286956_2716518458353739131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8nUt10yOTE4Q7kNvwEhI4a3&_nc_oc=AdlAGBqsiPDyaDvr396psTLc8qZEdFrfYnolXj3CxHo3r87Aa1q5SL1Xv4XDpMi4d9I&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkB_1PhtyWFuNJSzI3PwSOb-uTuYJmt1dj1otK2uDSU4A&oe=694BD299)

Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

![32 Horizon - Delete That Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415046_512509911286965_3425181708830011765_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Mw1sM8mB9AQ7kNvwE_dATj&_nc_oc=AdkdvPpB_Qh0ZKKri9X8OS1ONchEZobDWaD1_dg2Gfl4RI6SBQ1RZ56wjlFClrZ4J1Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afm4ci-Lk_j5wrMT1V8MRARo15ymVKe5Po51x8czudX1zQ&oe=694BB6E3)

To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

![33 Horizon - Select Group Set Motion To Animated.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915492_512509907953632_8557229846459868426_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=7ZJFWQwXtZgQ7kNvwHLLOEr&_nc_oc=AdmhxJDwydnFUMcGoEQbADY7gYELMeiTulf8hmns8qstbAJU7BFyJ9wtfY3x9oQBTMw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afk1H2K2BISEEjMytaqA5WukDWU2lZmLkblJ25G9Xc8Tww&oe=694BD6AF)![34 Horizon - Billboard Freeform.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513071_512509904620299_6429956925647591739_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=kQKO11c3bKQQ7kNvwF7iCab&_nc_oc=AdkCIw5oV4UF3USGWoiilh7u8kK-vCzQ_FVp-lqRJQaiAaLPFZONLuU1DYoHm8CllSM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afmba1GwWDJ14u5fUQ1MtJNKcO-4aeJ2zEVsBd712_CX1Q&oe=694BE14B)

Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

![39 Horizon - Bring Out A Trigger Gizmo.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615830_512509897953633_5127349402886952232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tDHTrn_ItAwQ7kNvwH9s6iR&_nc_oc=AdmKNebJJOT21FXxdfa15TMQek89OyCUDH_zI0vrNMucjV0_-OLdUaOQwb6y6zgFfr4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfljKu7ncDLTuvLEGNCNfyZgKJuYUEzvQQ9c1Y_UvRcjKQ&oe=694BC873)![40 Horizon - Bring Out A Button Shape.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452752337_512509887953634_7522440812087672101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=RRNn8ztDwloQ7kNvwGTMK_3&_nc_oc=Adkft_i8myKTBTFnq5g4FzqDoN6pkAnb3TeHFvXMCohqRijxlnVNo7U0vtYHD2X_mu8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkM80b7TOdyswVEX4kPHnGfJjLGm9U8504-5g9k-sZW2w&oe=694BB567)![41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509894620300_8243052218315123329_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=j3xH7dXU16wQ7kNvwF3qvgf&_nc_oc=Adkgpp_oi7C_sLEE97e6H2pcMIhi7VT2krjQB-IPgVvb7jMSnMfiLjDKKXVDyTNh5B0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afl9r4WRsIrmVEz7QMdFu-clK2xm3iAu_8Or6sDor_d4Fw&oe=694BB50D)

![42 Horizon - Attach Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452628926_512509891286967_3053857877730824769_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=e9lmDQEx4h0Q7kNvwHlbyor&_nc_oc=AdlS_g1lbe6t5Ndwt6SiqJeRJr5Oe82b4IFGhkCdFcjY-COYEfJlm0tB3w0db-AF3RI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmUnq0lY00eAGd6GQ77sy_zKkaanwu5T9qFILUxbRUlOQ&oe=694BD582)

Select the UIO plane, and give it a good name so we can better identify it.

![43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888016_512509881286968_98449028924003563_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=QfbhZud9IMsQ7kNvwFxkfVw&_nc_oc=AdnA8us35Lkl5CSLkD3dgeTbecLdmGn4UptWtrs6cJZvuVbc2n-YqkjJ7P7dqht3liQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_Afm4orbvTM1UwFk-vbv8QGxMsYOWe-cCvd-9yvJLePl10Q&oe=694BE773)

Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

![44 Horizon - Reference NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413127_512509874620302_6306166632729951456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=nphf84ELa6MQ7kNvwFK0nsn&_nc_oc=AdmqVKMdVrPlwf7gqxKPA-RMQRmNmFylzHnGFe0sNbXyTORP3HCZFJ1ldS4xusLvn1k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AflQmard04jJpZr2E8Wd6NH_lBCtanEahB2pKBwDW4WgUg&oe=694BCE87)

After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

![45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415063_512509871286969_397156706064990581_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ce-lXF-wJroQ7kNvwE6lEMv&_nc_oc=AdlSeQfQfXVMXMf9jZ_JD93AR66b0KWfRZgxW5IoWCctSsEOeoWt58AfILuaisRcBeA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmzSnTKZIPxyhC-jg4xoKF5G5qB58YgOnBIYCIzLn4GmA&oe=694BCB3D)

Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

![46 Horizon - Jump On Button To Test.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452663326_512509884620301_5661988945403216671_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=X535n0ghzp0Q7kNvwH5UcCH&_nc_oc=Adnw5MUVmZ5WvZ1pjLE-HA9TnBAomyGR6oCzWaWIVME2lRBzL488npeY58Kuqa9ZcsI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmDWMdhHGgrQkwTt-7YFEmiJXzdXx56G84ZmjfUwa5C3Q&oe=694BE5E5)

## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

![36 Horizon - Duplicate And Rename Props To Add More.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452587750_512509877953635_1060541854433685900_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=F2ReCmVlBIMQ7kNvwHsTFKY&_nc_oc=AdkY-1bRBekKB_FeGIjNgKp5emxRxCX6w9__FvjpFsuI6qJDYZ8GqBS-frHEtWDXxwc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfkjIGFJwyauyTSN4pRCO37zO8QkoZcigZSAvt_65BA-cQ&oe=694BD51D)

Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

![37 Horizon - Duplicate Add To Array And Rename.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916434_512509867953636_5718596235244147160_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=K-itzwmIWTgQ7kNvwEUR1E3&_nc_oc=AdnBj9Kwf-5tkuQ8NadO-7WWxlIN4D6bqoJsUFxI-v45wK0RyuJt9It3l6hs-aJ8icM&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmCHTLuO18q-lq2cC640laOY8PzWRVssLsuFyLRtcH3EA&oe=694BE503)

A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915631_512509861286970_8320013039747796277_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=YYh0SxUP1fkQ7kNvwF4-pqv&_nc_oc=Admrd1JMLAo5DnqjKNgt_WZsqi0EwrlbSfwr7md-bxgDZ_TaSWKZ7At5ENpFzEC8-a4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=ONPEHYsjIVaSa1Qor8mxNg&oh=00_AfmBZPS-Ogs9AbBZfFpHX1H2bkkdwwm9sU1ItIQMmFiI6w&oe=694BCDF0)

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