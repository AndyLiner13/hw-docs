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

* [Import CMI](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#image-imports) images with or without transparency.
* [Use and or write typescript code](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-5--create-scripts) to create animated textures.
* [Billboard](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-7--billboarding) an animated texture to create a unique 3D-like effect.

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

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968581_512510194620270_3962294350470992074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pwYVSwL0MUEQ7kNvwFq3mQD&_nc_oc=AdkvRstEtI22_vBQ3gTxDHo1KvIrSyouUGkn6TosSlB44ri-sIFXjc4SR8e6MvLIDdLP4gfl2wHYt_aftcEeencg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnPUS3l76q-jpULz591XGYlj7EdgfKbHupx-y_gM3gaZw&oe=6955801C)

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512510044620285_6379585956399160296_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=2aCYRM-Z6W4Q7kNvwHtCBwh&_nc_oc=AdnR9Kc-1KF5iToDa2mm6i7NDoktx172dUVxKqZCRDfNDRnH12PAJxdzu0bpgCTsxdlR-t3M59JNFjGwKuWHiTmc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnOBcweWWpham_tp6_-te9l3VG60MCCGJNKZbKhLR8nFQ&oe=69559FCF)

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

![01 Blender - Delete Hierarchy.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509954620294_1064153443481861995_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=vuHYH2gHtvAQ7kNvwEPPrT_&_nc_oc=AdlMr_lfbG3HBDyZAgSRS4X8TFqfxRmyx8QC0fgADiJ12nuXMYUlzsE-whCnrO1Alo57uPtYJ-z81DRti086eYAA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkjjnCEU3LJRyRT0LQodPtErqyDlWa2tURmWtCjT9YsRA&oe=6955716E)

Then we’ll create a mesh plane via Add>Mesh>Plane.

![02 Blender - Add Mesh Plane.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452597170_512509924620297_9030051662676405660_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=6py0Kl5l5PEQ7kNvwG6CFX7&_nc_oc=AdniBgXU6-t2DCuftYA9wAH99WjdGT7ELDh6mnlDkRrR8AYGpMy1c7Cir-OcnAATDnV3qGsvOiQW8ZdiupvZPMGk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afmlzph-OqLt_hWKgUm9aXpkiHJCakdJhOqAn5RAl4OIMw&oe=695588E5)

Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

![03 Blender - Material New.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814563_512509981286958_8049382712676840349_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=_5xwuqsdVtsQ7kNvwG2fnrP&_nc_oc=Adl_KYS1fsW5Jr993F85BdTOCHPLLNIno52zQOTu4j7hCauvzRCvTlHM0XBB0LbseT2p3FGcDud5o4cUbYhSxqi2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afl5KbvoUTKhf54ovf4EF6VzNNMVOBEVKjilwOlYBvvZMg&oe=69559C6E)![04 Blender - Rename Image.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512509901286966_2206396220220413926_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=P7XiHyq1H_kQ7kNvwFyVBD_&_nc_oc=AdkqL1n4aB0DkGn2sr91iB0gliuqoW_ioAwRPjnlnkAdBQaNpIvtOLWHQyfI_B8dxCHW5QpyI7N-f9WzYZY6KGm_&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfliQQJUMnnh2iWp5BmYo0BD9rzceYOqVZ-u4z23qCInUA&oe=69558EE2)

This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

![05 Blender - File Export FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509864620303_2779347807224869433_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=ew5mA0k397gQ7kNvwFv5iz7&_nc_oc=AdlmDfQgf3qcPjMj2QuwlY0GY2fiXniq618KurkQ1_nkqqonWx0g5NkcwbB7GXokmHqd8R6y3Mj4W_rkHjARwmnp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfngyvKn-VIfbcu_a-vpKRFcerjAAaTFTLuruXyuaM5QxQ&oe=69556ED0)

Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. ![06 Blender - Save And Name FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512509771286979_6031989145017839875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=E4OZ7bGzaMIQ7kNvwF_Fi9t&_nc_oc=AdmB6DZAG5FG26UtazBvNRl1iGgsFd0kqNrbyZXuDCKL4893u6jLJIEcmMAtxyeW9xVFyDV1Zsy9NHB4Au08xfgm&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflbeRSl6pB2uzpnY71P5-1JS_WFcF7fxMYHXeM8rHIgqQ&oe=69556D6D)

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

![07 Blender - Name Masked.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863715_512509734620316_4491289245265288581_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=h3yZJOr2F7EQ7kNvwHURLN-&_nc_oc=Adkq93jG5Z5rJOCY4RYV-vixx8z1HhuIoFVhbEy6x1IOUu2WifkJI6S6chY6M7c45L_CbwbtH91cNf5FoBPiVTKE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afk01jJ2kBzkXRgtvHZYps_3gSNubgkTAvjPuDtiYkFaHg&oe=695592F8)![09 Blender - Name UIO.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452683821_512510081286948_2595619572129583607_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=gfDwOTlNrSQQ7kNvwG2aQdw&_nc_oc=AdkFhYbPtdoSK7AKVh7edSmJv0eoqN5NFqkIIUr7BV5GqUdOBVV8zJlku0L5ddWh0mugP2hpUzxm3JgwBq8dPKtR&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afk1vusTc2x5SgFMouRkyTY_n1KKcwgRtpF2yItWXSlsZw&oe=695588A5)

The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

![Screenshot 2024-04-19 at 11.11.10 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452898941_512510074620282_8089196613872825284_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hBTHyCSXeRQQ7kNvwGdw8gQ&_nc_oc=AdmnoLrffxFKVao9NOzwmo_YHg6ATsdfU-MXSZ-gmar4Qj2X9GUYyuTECph2U-NnCF5LGz0ZS3T5zs3QFPIn2qkM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afl4sw3jmycKomP8YN8e-AWX0V2k_JJIprWCU4W27X0DPw&oe=69558C51)![Screenshot 2024-04-19 at 11.11.21 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554819_512510067953616_4081317241237303944_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Piuzv0msEDYQ7kNvwEbEi5X&_nc_oc=Adm5d6sB1hhMGlSlarGtz2HkqnLsPVRb1z67Tsf407_DDcN0sLbF33njOm8TasnwN09werpkcjHy_0sfbitlwgHA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afmlsaq3aMp0Ha-dMrCcRgsGtgEqduFNsZB2v1U57euCaA&oe=69558993)

Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653333_512510071286949_6198600653867134572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=GQYHuaLNvIYQ7kNvwGJJUBO&_nc_oc=Adkreuw_U4eB8m93vcsEWK0WilCfdru_JuLHaioydePwsRPM3uJ42N_ZnLOjXxmYsY4sZaLWoM_As3BU7M-elb93&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkhFY3a0HIfWOYPxR6nKX6RlTenSbyLKCpm7Xqh9B1Sdg&oe=69557BDD)

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

![pasted-image.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512510077953615_83611763970977192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nD__jh5oZBsQ7kNvwG9-lPc&_nc_oc=Adlmkd-dvBvHAckl3Lk3TOLYrYhEmrvr5vGBbyZVpZXyhRDV7S7JAu8N9DM53gDHw6j3PaE3SiWx1MR75QhwsAJy&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afl-XS2GOc8R7097y0wzSiJOXWToZMMUYVcCT_vWh7VmWg&oe=69559D1E)

#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

![Screenshot 2024-04-19 at 8.53.37 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907674_512510061286950_115269541411199578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=We78Q9A7_okQ7kNvwEZGDWY&_nc_oc=AdlFAfbYA0q_vdoejbhGD61cH2676_g_KOrHya-E6SA50g5NGsi4ira6kUo1VRuVe2qEa0sNrLCb59gRLrNMPn9g&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afnfvvs0V9smiXCJmBDvwM386NUIM8VCxY8hq4G_3hFddg&oe=695586AE)

Then click “New” to create a new image, and from there select the Color property.

![Screenshot 2024-04-19 at 8.56.04 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452577881_512510057953617_5245386781112144432_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=P5iod1cHwTwQ7kNvwFzsLrd&_nc_oc=AdlsUcoBxqZinEFrXaZl3ofiUkR_e33_g6aX44P5cGc1ryq0i0QgX9Xvy3sABsfJHwIE4WizUahQLGbnEmJB7Fzt&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afn4KK21WxJNryBVibzdCKrxzV12aFJnd75rOTu4U9qP1A&oe=695593A8)![Screenshot 2024-04-19 at 8.56.47 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652809_512510064620283_8540244349186137340_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=MnOJu1LEpNYQ7kNvwE8-uqG&_nc_oc=AdnwmZJrw_M1dQi7kn6XWWbb4TFMEP5FveZP-GUmjxMk2wpMHqnG6jwJ1o_BLD0jl6iG7Oq_gsxBmBtg8qOcSVqa&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnPXyVAuWWAfI605amQ-H6Dzdeq1BOIjmKa0rpXr5w0eg&oe=69558B5C)

Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

![Screenshot 2024-04-19 at 8.57.03 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916207_512510054620284_1744802443120394456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Cv5E_V6NzoEQ7kNvwEUBUdf&_nc_oc=Adnhv6RhBWZS3VFjFiQVtaqV63bZl3XtmdD2p4xo8zuFB3FK9ydKcGXqZvqewWg-72krQIAvq9DLfM_Ev3gul30S&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkcJHmXIChdiUF2sbkpIiJD5ylVNfcq6tFpK8-P8QLgYQ&oe=6955A259)![Screenshot 2024-04-19 at 8.58.00 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652384_512510051286951_6288220246956715927_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=g2OlyvvLKvwQ7kNvwGAEOsb&_nc_oc=AdmfKqmypT6DHMVeJVc3Qyfgjfzd1_RoMy2rWuUTstJkrqkDfSifSzyRJQmqAD4ru1pDWN0Def0_i4vEXeI9PjtN&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmRnx_Ac81Vbi38HNHyl1K7Ff8SBUfr6NYm-P4VcZD_XQ&oe=69559806)

Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

![Screenshot 2024-04-19 at 8.58.28 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413439_512510047953618_4137326271119080615_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=zzOseeObxY4Q7kNvwH8hSra&_nc_oc=Adn6WWt7_QTn9IY-jDC-6zWILyxU-fdTGV9wUYDYzx34tKglPPKUS7owONfVuUsa0XowayvSBNtNJVVgV3zfUtmN&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afm7L54rTPpBoTUGM_y2ZjAB-fay-R6V-lQYDCcxoe_Pig&oe=69558C2C)![Screenshot 2024-04-19 at 8.58.42 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452929981_512510041286952_8941302965582273418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=q0W66LuUs3EQ7kNvwEExaBY&_nc_oc=Adlf8q0miDdWhlpmx31s2sFyJx4KtrPp3p_7sca4RoMoIEtS3o3nKhr_TLHKhGh46YzhWm43k07F-g4X1uFIhAjg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflOAO4I6mpeyeUZw2ThmVaDClT4UCuL_BqQvBfyVxpP9Q&oe=69557993)

![Screenshot 2024-04-19 at 8.59.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452691797_512510037953619_5827144605064287682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rItzE4mbFAIQ7kNvwGk73Eq&_nc_oc=AdmTCO5wicl0GNlUkgbnBIgS5qGFxFFYAPEFdssbwXp3a67hdb60IVS2S9hJDo2uofiucxwJL_8yL6dVtZZSQJrQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmCIScYzFbQKHuATOw5HLNQoXjPw3hYM4rge7i3EtjgYQ&oe=6955979A)

You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

![Screenshot 2024-04-19 at 9.17.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885117_512510034620286_9198152519515217659_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Pv__Rh1-KqYQ7kNvwG0mP8k&_nc_oc=AdlryADxYi5AjRy2lJ7QsnkZWUfFBEfNAnaQa3TAJ9CHd3yZthf3bVvGdxweSlLwmkKMY0Pqeq1qNXY8rSDlEeQ0&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmngcFAhpgx2qhw_iHUlcUecKMbyV15gpJkoPzPIsR7qA&oe=69556DA3)![Screenshot 2024-04-19 at 9.20.46 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653014_512510031286953_1113735815860416145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=vYTxcGGLL7kQ7kNvwEHVSrl&_nc_oc=Admo4NB6H3crBajJM9_Z9emn5OLs_kC3PL4hpJAmuQp5sdHB_UXzNF5WDEUhBoouLCJ5aIDmEqr9LS344cAYBIBj&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnRtTP-YaDCn_wErSilgCmPMDlHCChEgNL0MmeSneiN0w&oe=695583F8)

#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578204_512510027953620_7672824023604347554_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=YG7yz1sqKOkQ7kNvwG7ULJj&_nc_oc=AdmSXIUqJzeIQs2MWcn-hhfZ_RUqX3jckz9ADPLFMOqML1TD3ljjWi_sfIvfoF4R7xo5FYuPvY9g3wesB3eCiU_k&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmSa8Q_rHSKdKWoUz5h8VSadUOC8nN24cdDCS_pnansUg&oe=695575B8)![Screenshot 2024-04-19 at 9.26.48 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512509964620293_5448085797043372349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=KEu66qdxHLoQ7kNvwHEWUfB&_nc_oc=AdlhyWm7a8xIjULTCPgaZpQZ2DDeSu6f1TiO72E00VXU7GGNDKO7M4Bsf3wXlkB1Wp1k5Dm3n66j9vKVac5HqjcH&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmEFWPEf2D1GoZPy747vnUMHcWtdmFqD6a_Ko1gsZtgBA&oe=69556EBA)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452518323_512509967953626_7006945869471042038_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=c3sdkyj1srcQ7kNvwGE7r1R&_nc_oc=AdkwRrsuFpOXdOlBcr8gCtPprKmINtnH8yL79GDbjxTWY95OBeIoyZIZcaauU7ox1mw79d0GROEH-meqik6Uwn1_&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflottYNiYSNNozSqsfJ2kqzlTGuqpiTG_Wz4xfcwatsNg&oe=6955707F)

You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933713_512509961286960_6507830893434825526_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=0LZ9-BNAk9AQ7kNvwEypb7J&_nc_oc=AdlFkNVLNEmStB_iVRosCtGMVrxE_cRArBDuLo33_56hc7gKiFgS7nUSh9vfC5PQDtmZAT-NOLTwG4lIjzIvt2Gl&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflSqJgjrnnteonfOvS14-7BkxbmKG21Yn3PHwaLwr6s8A&oe=69557AC0)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652035_512509957953627_1509299483219844935_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=SiE2E1q2-rEQ7kNvwH0_lj3&_nc_oc=Adm0EX9eKowMdaFUBXnaEgY86KQJD7CoSIgzHzZmUjS2qOVLws4d2BKXfF_P_fRjIFJ075suW8t2AAkfKrdj4Tje&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnpwRKa-CgWtsFDMNDVjeh_AvqD6TBRRfoTgblmxJqy6A&oe=69559DBF)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934280_512509947953628_7533721349325358428_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HG6AEkLzlyMQ7kNvwF0jqRR&_nc_oc=Adlb15Bl4uWcJ3lTzgveXRu3ANpDDRSRdXby7CM-eqN65RYdxklNw2V6AhcOwNseHg5raftqWLK9goAHozqAZjni&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnRKmkUxt0MbkxB_fxvW2oy7PkLsCgsWICfI4c3nIjVGw&oe=69558B27)

## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

![Screenshot 2024-04-19 at 11.06.55 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520063_512509951286961_8039903915903876142_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=wtHCQyWGE_kQ7kNvwFOHdAv&_nc_oc=AdkD7dH2CNuruBQuR-avGZXi9LcHJUfU65wZLqmVo4XOlCIuc34ldG-c1KP_ToZO08QGmUQ98amxa4rKilkwjGUV&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afmuy_Oxt4c6b4g8wUi1KlI8NavSV8TxKiOP46gg6a_Nlw&oe=69556B0A)

For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

![Screenshot 2024-04-19 at 11.02.04 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932907_512509914620298_8416274368174123809_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=N-zF5FDL3eAQ7kNvwHrfcbZ&_nc_oc=AdlpsygyBnALCSDYKYJqbb299sL4WiAYz8t3QQdfR-wY5c_eWNEfV-0WamT7WsU0LJq0AKy1yW2guZ25tSvty-Rg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afmw8ikqkCmEN2XB1bTroukCumxGmKQNFgMs-YOJJaqW8A&oe=695570CE)![Screenshot 2024-04-19 at 11.01.05 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452716174_512509917953631_1260850758204712021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=NqPvpdvOP0gQ7kNvwE8EWjj&_nc_oc=AdlkrNUfjkesqDpv-RYKT_iiFnlZP1iIEeeq_blh_ejes9_tEdhcqWvzs07KzlOn9ga_LzMXKUTMRaCbXRo6_Axk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnB7Hj1RLHkqmyB2pW5wPL8srEsxVRhs-eHU9EgztVyIg&oe=695588D1)

You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

![23 Horizon - Add All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830425_512509941286962_2286961765036510195_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=JwBwZIHHSBYQ7kNvwFE7atY&_nc_oc=AdndjttX3_KFmBcrhcSyzlwCIwAkiy6xzkdctPUAPDfx0bB7quDLMCpCDzFirsDyBpGaFacvVbFkS05GZrcO6sSI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflEeiaOJyuNS33PBrD_VRELpqlNnefJXahTNdRrpxez2Q&oe=6955807F)

### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

![13 Horizon - Create New World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514554_512509937953629_3385446684682933545_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=AYSiKUPtVzgQ7kNvwHQX-7-&_nc_oc=Adm84WxlVDUZgwxdsQaCiiX6ZXixv9OlaYBjtDVtH8IWgxMRNLKVtIgxJxYjuq8tmBMOoEQJE5lyCyM1H9OiiAS8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflfOatJa5RarJ87ZsgombvwhE6ubvnFZ4CUZi6bUY4JVQ&oe=69556E76)

Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

![14 Horizon - Assets Add New 3D Model.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452698500_512509944620295_8761892053068618025_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=jp_PRnmLhu8Q7kNvwHrn2RW&_nc_oc=AdktiGmIjbRe8IHOAAzZEQHVxkGXxNDDF6MJjMzQQkO_km3VXJ7FGkcu9OHIqvfABj1tXPHxfkoBiVkJZY6tLylp&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkTDkBEzSxOm5uqwhmg_gjhwezjU1XJjbO1B43MNo1CTQ&oe=69559320)

**Pro Tip:** Create a folder first so that you can organize these files.

![21 Horizon - Create Folder.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452969006_512510024620287_7145889613842616136_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=mKgg98IXmvYQ7kNvwFoWF3H&_nc_oc=Adloajs17LviWWHJD2BVoTXOD8-5MfUMqrSwmtkJti2JzTS24ksIjG_R5RzAFZo-K-ryNMmUSu_84Kn7h8rVPgcA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkU2GU4Gt2JDdVnbUD25Dtw03Wzm6pejEyBNtW9SaHmcA&oe=69556F77)

## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

![Model Examples.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520302_512509931286963_1392348710732713706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=RWFNaPPdRD0Q7kNvwGDNKkj&_nc_oc=AdlUyvTxiL8DZshCuK-CZTsYiGWOqY3dp1swuCFdMkg73L8bYbeFt-CN8vYfFgRnNugFsYtNxhgCzJZtAZKCtbg_&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnOvsdBVJfHWl8dI3HFoVFGR17wglM2ZySOaQigVwZq-g&oe=69557EDD)

**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

![16 Horizon - Drag Images Into World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698500_512509927953630_2391688165484220586_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sUjnq6oX3fEQ7kNvwEGEBT1&_nc_oc=AdnhmvlsOdDR1WWXDgxIqi30zb_S3FIrj0DTgrzQuYPe-atSWNMpdNHukQWBJAFN4WElbtn8ataC9K4gyX64bQq-&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afm_bDRsHUjNTmNT30kuXPJRQl2juaaJBssKLmfXss7ngw&oe=69559FE2)

## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452942546_512509921286964_7427347511941929464_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=pE8_6hI-usYQ7kNvwE9AlOx&_nc_oc=Adm9uINv0HVGKvADVje_EHlhiZctVlIfU9__1nfYmBJXBVuM42efj6dje93QJCIE7McjvUHScv-a69o3RCUaXP65&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmcJizntHwu1jTcXYkT2gOJnC0dsWzHLULQBJPjEYjqUA&oe=69559FDC)![23 Horizon - Add All PNGs.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886177_512510021286954_7252073352601237353_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=I4hvqqvhK_MQ7kNvwHC7VP7&_nc_oc=AdmvUkncIBo1P-cJ0t2i70IxSDsrGQo8CdzbfWgs1BYv4smwaASgnEazvS3f2eacomt1ZcCEjKc3LwJNx8g2D4SB&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnP-LzNAhaG7nJH7zP9V6uV6zi91K8iLuZXNEE77amULA&oe=69559148)

**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512509934620296_9067343352172927240_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=MSIrJTtp5TAQ7kNvwGNZEM2&_nc_oc=AdlX52b0ERdUg9mF0vtN5Ui1xN-psvWIfhk6X6CRkh5YxXVGDgpNO4Ao-rM9leHyrw-m7wgISUheDxGKbEk_Yn7G&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflcOnAHVMpTzEkr_OkGDRwT74u_tKn6NYpM47J0uJ3ETg&oe=695572DC)![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452813675_512510017953621_1399693691768195627_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=VPSrOTOoNtUQ7kNvwF7l01w&_nc_oc=AdlH6PbgoY04n--RYET96F5EgZw9nKzLtzLKt5XpGPS-SDr9C8ewhITjLMivbzz-NJVPUKgeGHNkfNSpHYZ9EcE3&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflT0LfMDmCX0wHNYc84fHtTINygVVEaSfIMFzV3wqcMAw&oe=695591CC)

### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968830_512510014620288_2686261352574634183_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=eHzByAAVVpsQ7kNvwEICO_V&_nc_oc=Adn-gQtWXdsYs4O7NOIYETkUTUo6h1ahE3qvAghL-6BWi2PWWQyd0Pb6Ebe8xKhp74cEXxpzeyQWRZjGJ7tEi1jr&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afn-CGttaoc2bsR4tB4zDfCg59R0IKe7hKmQpYkS7RT7DA&oe=69559D0A)

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

![18 Horizon - Create AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452908886_512510011286955_6071772640735723234_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=lcXn4TgtSdsQ7kNvwERRDPT&_nc_oc=Adnw7u_bs6u9_XS60y2vpQafoTl4iyqkwPIF1OuYVDTJLp8OBQE3rTrbBNitBPM_oIOE1sBV1vENqqSynJKMlxsp&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afn6xx1hnBLCwv83duPIIvWbtszi7UaF1f4PjKnVxc0FBQ&oe=6955A25F)![19 Horizon - Open In External Editor.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934389_512509997953623_1096257128825943521_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=K55iRgRfxuIQ7kNvwGwy_Yj&_nc_oc=Adlx3ERLOmmUUhv2u_AT_fOrJpz6QwW0i-h1ujQ4DtB-AVzS2aqs83CCtzb2CgezZB-PCEFkwuQZPu_YDT6XFkNd&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkTLqqNg1HQAYeGRYbS2MvKEXUpO5HnHbtcMCD6RiCSdQ&oe=69557F4B)

From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

![20 VS Code - Delete Default Paste AnimatedGIF Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452952740_512509994620290_6613449436146433136_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=q_6j5FG3PhIQ7kNvwGs7A0j&_nc_oc=AdlSroSVpz4-DH6oLQBlD4FRBIYstf1CrKtdnNBno6s-z-okb1bBHOTkQs1NNaPrqbstp4fVjWwB8ZvXPMoFT92s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfljuN42B5Aen9N-dsCdF1-J0ojG17xPsafXgXapKwOg1A&oe=69557034)![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512510004620289_3602977530773515663_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=71DCRpUBJ9sQ7kNvwE0Aa6O&_nc_oc=AdlG6PvghWhgokN5-q817vh4VvKeU-ao9oxDqcWOVjyxAW_k4yrcuaJCsCgm1q9oplaqKbJ5zmcDzCzZIonvY-2Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmpCFiFv0TTVVjVhzXZ98gwrIAydtUsZUnIt_sKtx4b6g&oe=695587F4)

## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

![27 Horizon - Stop The World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512509971286959_3679470934818076750_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Ra4FES9zLgQ7kNvwGf4icI&_nc_oc=Adl29s_COX97M_xA_TP5BZUuFwLy82AX5zLzksB-dZkSmZuBojgtBII2_01jzmwO5arnueSbGD3wgqRFse4MQ2eQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflSednanOvmfsVR2aAO-KOygVhbM6htZZz97dn8QoXcZA&oe=6955A16E)

Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452893310_512510007953622_6953964120795560456_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=u3JGTXIMroEQ7kNvwHU9uJO&_nc_oc=AdntYdMu9UyfMpjDuYGSvxCC_kHBuXUYhVJX2QOahbnCNkoxJKSzsWrzc5U8orCEDGeQYxpf2yDHvx3xzHyr5oaC&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afkna2fPqxtafYTqCee3e9Q4TfhkHMH4FYu3EA7XLdHTEQ&oe=695598E9)

With the script attached, we can now drag the assets into the empty texture slots in the correct order.

![26 Horizon - Reference All Texture Assets To Correct Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597104_512509974620292_7381418665732884630_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=wP8snPyVnhkQ7kNvwEi05R-&_nc_oc=AdkTriDXia0umD6i_ToKhqq61BRBPCUGX7Npy-hu4EHsmA6X8knBMc7623w_l5XQPSwy-AePVEHRbcbj3ONpEvha&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkPtIzipNEwo0BDiImjW5fzVCbvor-OhmhTFlmkPrgCEw&oe=695596DF)

![28 Horizon - Not All References Required Change Speed.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934376_512509991286957_335261093369493818_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=O72c8iSI28EQ7kNvwFpb5Zs&_nc_oc=Adlf_VITEkLCv4KB3OghA6OkvIhxP78Y9IP-p7KTRfnWRo746sFAyUfBepXqInhMQC0TziJObhYflH8tX7bZpHJ5&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afm-aPdNVLiNljibox0vSY3Q922PzKQhZcsCLNXspyrWQw&oe=695583C9)

With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

![29 Horizon - Play World.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452532621_512509987953624_4411056457549309049_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=qMt2uK8vbY4Q7kNvwHMysjM&_nc_oc=AdnT6RMf44iAtfBcSZwYqOLmHCerMq8PAzreXW69Sx3NBHbzUstYqBbm-DPetMuYACERsED8KnUAYvKsjJNUIKX3&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflO_M869fXPFHrP0aGutc5_TIyvObHkDnhBi-xA0bxuTQ&oe=6955914B)

The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

![30 Horizon - Adjust Speed To Your Liking.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452933994_512509984620291_3491567733690113088_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=HiGztZ1vu5AQ7kNvwHH1Kid&_nc_oc=AdmXwip6eJUUh1lgXHgDAJIPILlGYjSRES8GWqdGPFpMCduiOqLj0ChRrNeoNO1RO7m9j2jTQEDd8W3BJm__aW5F&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflKBiEVQIQVgsh8_nzrYxc17Q6hW4MgyrqnXbU0ziiQ5g&oe=69558A7B)![35 Horizon - Billboarded Nyan Cat.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452540279_512509977953625_2643885165784093538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uT19TczrPbIQ7kNvwEQ2TAZ&_nc_oc=Adkl1cqbdO54xBKK5uTA4TIRTJ5BRxYipZkjqypQSvdEkASRKUESGAvWQ4xaLhJKiQCXIYeiuT6u1MgsEaQLUgpK&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfkIX85Krvy_lpxaRoSuoy7FsrqSEfVhunMBvlsVwdzTiQ&oe=6955A0E7)

## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

![31 Horizon - Group With Some Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452853527_512510001286956_2716518458353739131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=nsper_-gpUkQ7kNvwG3j1jK&_nc_oc=AdkCvqIuiSHOj3za3KO-u3E50ywbQKoVLH4p8lOw4EUsM8q49IKo_vRAQA20M71mZESAx5g_fB7wrx7oQMKOvRRz&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnkhrlZyUmYTrBeNsWMB0_zvQxeTGEOfZ3X_h3PoWBGng&oe=69557D99)

Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

![32 Horizon - Delete That Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415046_512509911286965_3425181708830011765_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tyvClA-7S_QQ7kNvwEk_-AQ&_nc_oc=Admc-fGOfnF1lvA9rwxzxjg7Z0WaiiazzmzQk8ihUXoL7o2AAoAfT8_bv759XsGH0-IFBSQN2lPR8PT3zKaKvhVM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflhvlZ538Pdt6bbeHigDNadQxouRrWPwxIdbtlssmFgcA&oe=69559A23)

To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

![33 Horizon - Select Group Set Motion To Animated.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915492_512509907953632_8557229846459868426_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=DG9IXiCYfUsQ7kNvwGvlhuq&_nc_oc=Adn1v8YWxw81pSs7npK_1_inJUfaH4rJbDplA3CDtDBtwqQugFvxz4Px9affvPYa-FMGQJgaJH0aGtfsbAX9cXZr&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afk_FlfaLs1_RDRGkKK-M19j5iNy4shT2cAsSiGs1p57DA&oe=695581AF)![34 Horizon - Billboard Freeform.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513071_512509904620299_6429956925647591739_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=JC0PI62tdwIQ7kNvwFzpBzO&_nc_oc=AdneL_F4FVGPS7CkO3fN0Ge2MzUI5kOXGURfoQslQAguFZHpMtH86M2ZcC-d62NBLZ1TLmeF7hrotAb16uoOj2iD&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnN5dMAL8zRyJORRqczkmClferKHa1BUv5aSrRnwrUeQw&oe=69558C4B)

Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

![39 Horizon - Bring Out A Trigger Gizmo.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615830_512509897953633_5127349402886952232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=7Iifn_RvtT8Q7kNvwFeSfKp&_nc_oc=AdnGd_w8G5aSproBDaN7-MoxeZImtr-Ak-xWtd8fQRhcqs9a-RiCYmLFoEdR2LV_I9ltTKEcIuE2jjqkt3USNPia&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afllj-ifT1r2lhumi0c1ZPopjCbR9uSECMLyFs0n7pHCYg&oe=69557373)![40 Horizon - Bring Out A Button Shape.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452752337_512509887953634_7522440812087672101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=C65CwWXytkoQ7kNvwHaIqZi&_nc_oc=Admj4BCEih2bgwduO7Lel0k1AiG-eADyAC7ZRrwIGxEgD8mPanGg9yGs4mkLa7uXz10365WQ_P0wG3e_Bi1VoPBL&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmahaiOYY8-4kX4ptIr3-ei4FKetKWZpv-Vl9wJ-Qfs7A&oe=695598A7)![41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509894620300_8243052218315123329_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=XKVvbgH34uwQ7kNvwGIS-tm&_nc_oc=Admn31Bu-tJRPt4GX2AFMQ_GYdJ-PP8JhS6XOQS0Z_LhWeS0GmHUPJKeCphBi4b_L-3v1rjNWmV2j8iwn4Ds_jYQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflMKnxfaNsSc1ZJhr10kUpRBv7h8rFeqGpjEgWRB7H-hQ&oe=6955984D)

![42 Horizon - Attach Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452628926_512509891286967_3053857877730824769_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=sbMmnzh2jEwQ7kNvwHu1KZs&_nc_oc=AdnVYCR-rEC1rLF3xHhq20Gw23KY3vME23mdShfvjOO17J68BrLeQ8fGfWcXuDu9L7JzCnlU4PnDMkfLPyO-9P6p&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_Afmk1DQm5uWRSOqOD_GAXHtInE_oufcMmcs0auP38TK96Q&oe=69558082)

Select the UIO plane, and give it a good name so we can better identify it.

![43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888016_512509881286968_98449028924003563_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=VeFH0TF04K4Q7kNvwHqek3r&_nc_oc=Adk2-qdJ24MVFW8lERgEXDxDdzS7c5i3PJjUvb_5n4jvJoT4dkQ7JMXGkh6eyhA2laHhU7YgvZApMNOc1ZQoZtut&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmFU2HoI1TRrk55d-fF21aJFPkr5k8oAVIPx-wPk-JqwQ&oe=69559273)

Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

![44 Horizon - Reference NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413127_512509874620302_6306166632729951456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=hhNkliZASJ4Q7kNvwGYAz1X&_nc_oc=AdnfnzUET0rMgDxhUyRB0kiSTPTvZnioq05BodUJCQEppUC7WtuzngKwz2bfaclBM-3eLNX5vOouWpBsOCIA6lqU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmGRXfquX9y9ToHbl0orXoREQGmJLPP_Adj5yGG-v9ndQ&oe=69557987)

After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

![45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415063_512509871286969_397156706064990581_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=BQ9T7vBXhUEQ7kNvwFHj80L&_nc_oc=Adm-BgkdNjEc9aD0AU9FJ5OPCzgWndfoZSYg0ybvYFZOSB4hiMle2lxi6JPnX2GIEHvx9rEMcUnshRPwOFYaYzPw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnezYLZlHUUY9nfuOuXgTh-Y1IdWFDa7Vh8UGrCBcy5pg&oe=6955763D)

Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

![46 Horizon - Jump On Button To Test.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452663326_512509884620301_5661988945403216671_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=2lH-1gYSTEgQ7kNvwHy5Fpq&_nc_oc=AdkIbparRlEiSm67QlH6WhyFqEQrGATAnm41VME3pT9gbN_16Ex-MRxYNLhk5KbunCZmP6dN_E9oObb8qe3Xb9OI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AflFqz-_Nl76hEV7hJ2c7kjyyjEarOZ93dbhTT3Z1-YagA&oe=695590E5)

## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

![36 Horizon - Duplicate And Rename Props To Add More.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452587750_512509877953635_1060541854433685900_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=bAbiixBBV2YQ7kNvwHL9Pbk&_nc_oc=Adk4KTdYwEqUldncMTWyRqnSAdHuv5ORQqDN1BdiR--Pf1Kw8QhIg1wDsp8l17TJIPtIYIuP7Qpijz-AxmZ2Dnu1&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnCU7i-u-jxx481X5cEtBN5SGzZ1bo8Bq9yJsbnPJU9sA&oe=6955801D)

Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

![37 Horizon - Duplicate Add To Array And Rename.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916434_512509867953636_5718596235244147160_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Lm3qd4PNUEAQ7kNvwGd3CmB&_nc_oc=AdnsFORa-CtFiC3ZkhGeUf7NrnZGo9Y-Ybi-Hl4y9aJdWQJ90Btp9KCqKTwsaVPb-IsvVRsoY72vCEbCAZtjzDtg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfnQqn8HqQBirO3qaDa4a-3lJgb4cYcS_AQPPVrRhcl3_g&oe=69559003)

A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915631_512509861286970_8320013039747796277_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=a7ux2sSRKYAQ7kNvwHtfWIn&_nc_oc=AdkyENekasiUk5CbK7MCgFXdvBtJis5Qxe4cRGFPhsX6499EgqGsVb4_zbtWx2u9K-_OLX321pzSApTPArBXRVc9&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=v4QuMuc9MUOf7QAk6CtBew&oh=00_AfmhaKujfaA7aHiLtD4xzl4uAaRHRhnmhLwmgBPf4YBLHQ&oe=695578F0)

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