Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation

Learn

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

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452968581_512510194620270_3962294350470992074_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=4nCkpywBMMsQ7kNvwEU5tdb&_nc_oc=AdlUKUv7L1iKDDdOVXbkcN-ptKQhctS60AtX93xG--8fntIyE6HX7MPELtk8eSR06dk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjjXrPzFUjJAlCYacRi1zO6Tj_4oVVCOpT67v3R7kcpbg&oe=692FB51C)

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512510044620285_6379585956399160296_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=4kBpDVvur0sQ7kNvwFkXug5&_nc_oc=AdmpLQRWgGZcZKGfCNp8L87C0KG8JcO8J1HOfIrgebAEI5uVsaJdkhrZIXu841tdmk0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afj86PEwyvkq3KA0TjslLUpFGFmcg0bO9YekwCOwxr2nFA&oe=692F9C8F)

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

![01 Blender - Delete Hierarchy.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452673104_512509954620294_1064153443481861995_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=66Nst56XpvkQ7kNvwEQ12K3&_nc_oc=AdlnASl9HKHP-BtI0aXIsAfc86SBMjToZe249z8Lp1IRT8LGqjqM0HhbFg_hpPpU2ac&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgLHoUA--be0yzknu2IRORGScFkRtY0faK4vWz0F-uiIw&oe=692FA66E)

Then we’ll create a mesh plane via Add>Mesh>Plane.

![02 Blender - Add Mesh Plane.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452597170_512509924620297_9030051662676405660_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=qcReaX2qLs0Q7kNvwHIniMG&_nc_oc=AdnEVtGm5zRU6k8gHm6aWds9CKIYG33PfsU0Akf0u-Lqov3NYLz_qfLoDoaEE6AGip8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjVJhwEZyhpG-WRn5k4tTnT4kG0PTUoTGXOsmk09g8wFA&oe=692FBDE5)

Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

![03 Blender - Material New.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452814563_512509981286958_8049382712676840349_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=WDeufJVjUIoQ7kNvwHPZWhI&_nc_oc=Adn3v01ijTa5tl3CgG2qvbjIMIpf_bu5-S7EMi1rOOQyvWNhfrNPUhSVXXbrWOuTDeQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfixjcDvuQf20fK7xUwzEHRGPiryB1v8JsT5bz3zow-9sA&oe=692F992E)![04 Blender - Rename Image.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452819243_512509901286966_2206396220220413926_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=8u51Vu4He68Q7kNvwFdwyFv&_nc_oc=Adm0THEctt6xS4FZIvEnQcCS0rv_U8iPcaMjDHFhkdCYs0rOC5g40tGdhI4Ao69QxLE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afi9A0X3pJYNlU14sHR-GeLIgpyw_DZLau-8rINegp64xQ&oe=692FC3E2)

This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

![05 Blender - File Export FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509864620303_2779347807224869433_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=_s9xqCvSt1QQ7kNvwFwWMxw&_nc_oc=AdnGYzcqCdxAeORVmhRs6fdq9XLehvMDgWuGEO586TnC0HhHvRKKVlN_EfRKreVkUjA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afhx5kV5NdD8ZVbU4cPgFa-A6pGWjU-UuHZ1lrk1G7IjgQ&oe=692FA3D0)

Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. ![06 Blender - Save And Name FBX.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652224_512509771286979_6031989145017839875_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=VZutMHP8iUQQ7kNvwGvsuzE&_nc_oc=AdmOyhloYQEFGeWJsKvWJ3zROfpH9PW-yOS3VYHyxlbYxtcQYMfoCrrxBJBwzevpr1o&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjzNQdB5iTnBIVPIlnMJhStlqhT7J-Pw_CkbC91KVGCUA&oe=692FA26D)

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

![07 Blender - Name Masked.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452863715_512509734620316_4491289245265288581_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=KBMlNLPWk2AQ7kNvwFvcZmZ&_nc_oc=AdmqVydB8zd6a2mxFe1mhujTTHEcQ_5VN7qvSYHKSM1YgOe6ZL5tqnUYllzGUcgvBAM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgX5JzWTYBXlDMgAbQ5Z5Vy6BB37dpYptLXlWe1-jk1rg&oe=692FC7F8)![09 Blender - Name UIO.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452683821_512510081286948_2595619572129583607_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=2bsEkiiA4V8Q7kNvwHT8Lwy&_nc_oc=Adk-3D3pkSFFnvvNmJNFj-Y1lIO1M0AMqJwH0TXPTdUTmd-yM6CgjsEM9-UYTbhSLj0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiJp6g-NezOL2ZruX4SFLpb5NBz5LZA_IyB1ifTg3d7aA&oe=692FBDA5)

The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

![Screenshot 2024-04-19 at 11.11.10 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452898941_512510074620282_8089196613872825284_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DWrCDoi8gzcQ7kNvwFt9XVD&_nc_oc=Adl_wSWAK4fngV-MemYvf8uHy115WBM6JYFcWXKp82dVF4lWGu5KXRUH-TeMdPFPs9A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjlZ65VM8qnjrpYSwvE2QZvc0VZgvKwVrIWb-hB_05YIA&oe=692FC151)![Screenshot 2024-04-19 at 11.11.21 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452554819_512510067953616_4081317241237303944_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=KOicHrjpwKwQ7kNvwHtaKo3&_nc_oc=AdmCoakZ2WhkhRxJZMs0K0wTm1PIdVQBnImaAKcXPF7Ekkk5q62ZNGlNPPrS_I-SjoQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhBeShDJTnEo-Ql6KLkdBx06PKvGhajI-uWVQ4zvO60_A&oe=692FBE93)

Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452653333_512510071286949_6198600653867134572_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Su7FWzDYN3MQ7kNvwEEsEql&_nc_oc=AdlKn-wyxW8oXU0vcQepB43gSFwp7N31gIrm7htFlMWNuhFhZxBMA_uDNIBmGLqWSP0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhidIF3wi4aw36CbX-9kcBjq_6HnnU8hL2SPJ0PSiu-LA&oe=692FB0DD)

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

![pasted-image.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452704315_512510077953615_83611763970977192_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Qr0IwIi8h1AQ7kNvwG4bkMX&_nc_oc=AdkKA5XThe2FI4mPdTrSXIRVPDj--QNP4yNFW86cgmtibhJMXRAX7nX80F6wKeqq5VY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiAxp9vEtelisZAKDF-m90rTYeRgbYvneS49ceh5uuU9w&oe=692F99DE)

#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

![Screenshot 2024-04-19 at 8.53.37 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452907674_512510061286950_115269541411199578_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=d96WpIupT8IQ7kNvwEEIlbS&_nc_oc=AdmSTNtHAFK_tJWPikTzuBv64btP9LKW2nsEOtRO0K1_GfRvhsjplBBuosLJZwFqvhM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhkCvIsZT-AEtusKC_ElzaBkOxx7JSPmUL7wN_s33FUdA&oe=692FBBAE)

Then click “New” to create a new image, and from there select the Color property.

![Screenshot 2024-04-19 at 8.56.04 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452577881_512510057953617_5245386781112144432_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=BwTJHxSCTNYQ7kNvwENvDPZ&_nc_oc=Adm0AwGVpF5J8FplW5zVhCTEpdFiB1FvLGsV9GjlZTZVWaneVBv6X139MzOQaHhiG80&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiVEWMTvF627Y5k8CgD9Y0aAFS2sayJCMlxMOV5Y-MlGQ&oe=692FC8A8)![Screenshot 2024-04-19 at 8.56.47 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652809_512510064620283_8540244349186137340_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=s2fnComOmrwQ7kNvwGVwDUM&_nc_oc=AdlINC3tWvTP4tuEdCNkYnu5bZySBZxwmV-tE8Xxha5HQqyOcbRGTo-C9IAOKHnzHvA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjpluFLcucN7el4Uh15IvebSNNDv1qbP2Xq-_xl9jNqCA&oe=692FC05C)

Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

![Screenshot 2024-04-19 at 8.57.03 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452916207_512510054620284_1744802443120394456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=9H7zGrfoz-0Q7kNvwGpfmQk&_nc_oc=AdlENQUM_kPDL_1N2O2FMita8_TE3Radg2OyKGioCVxf163lXGGKCfLqx1i1q1cQcd0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afjc7GyrYEF9t-uQBpfMqAkXfUdjWQkqhEVaswJQOqqD-Q&oe=692F9F19)![Screenshot 2024-04-19 at 8.58.00 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452652384_512510051286951_6288220246956715927_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=R3DYeqUrW5IQ7kNvwHFw_SB&_nc_oc=AdkE_ZUy9fRe087XX6LFQwUjz6Il7xYV8ap9r-wfZ76_1j_nzsKjBLJs40O0JrV6p50&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiJSpSKU9aM2rufKt2MpOEHTDh6QJm8-nbKK9cUfLwzDQ&oe=692FCD06)

Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

![Screenshot 2024-04-19 at 8.58.28 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413439_512510047953618_4137326271119080615_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=6yQqpXOKHTcQ7kNvwG22zB9&_nc_oc=Adm1oP0_0uUIKURSKYK7mScAJQj1Tt5Ls9SVoY3vqxappgadXXp-mINhxpixXEklXXU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afjvx8byyaje0wWcaQALkBh0OjYbZvQnduPoFnO-mCE0qw&oe=692FC12C)![Screenshot 2024-04-19 at 8.58.42 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452929981_512510041286952_8941302965582273418_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=K62LE_ZdlQMQ7kNvwGcfoUC&_nc_oc=AdmEaT1UUkt_0yNUbDYxut1_JIWW8-GdEq-UE3utK9WmTwmv2qYuhdjlhYWqIQSDuPU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afimh3x-UUNycBUS3AkMvdoJUNrKHcpqCXjlCLp5sPtYLQ&oe=692FAE93)

![Screenshot 2024-04-19 at 8.59.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452691797_512510037953619_5827144605064287682_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=uU1JHZHL8mgQ7kNvwHQgxlc&_nc_oc=AdnGYUKsvEdVUmjWsvkuL6ywOiwtn2Z_SF86fEsn4Pz5X1CY2TEMJZvmlpKozePo_cE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfghmyIYl-KhGKiMemIrGCWxpo9UIL4mtEY0Obpi0EpHOA&oe=692FCC9A)

You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

![Screenshot 2024-04-19 at 9.17.39 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452885117_512510034620286_9198152519515217659_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=fNhjgHMPFwAQ7kNvwH9Say7&_nc_oc=AdnAoheT2fjA4maIy_USXHEjgIRipmo4yx0-FaSP3h9ZxBGHpb5ccBQkx_QzNSDCnxg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiSAX4IyPBy-U4Ehf9uQtrG68V5bZd_bybRro_cuCjxHw&oe=692FA2A3)![Screenshot 2024-04-19 at 9.20.46 AM.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653014_512510031286953_1113735815860416145_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=_oLMyiux3zsQ7kNvwEDtdF6&_nc_oc=Adks4xApwNJhN6X2lNNtRZAqVoQ25t68O8QLUykUs39xNLdTmZHVOyYfZv1YMKGyFbs&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjMvi9cMUyR4SoHW_RDgd3kM9Dwu5LOyWeESAEL06sJTQ&oe=692FB8F8)

#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578204_512510027953620_7672824023604347554_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=zeDOnxGG8xsQ7kNvwH8ghDw&_nc_oc=AdkiTLqxQpi-psQ7ZKosNcGXOSgD5nV-0n9nb3LXRAJFry5Hfu3usR7olJ5_R2w-6PE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiJpCPyNWY8gZt1G44TM2oPjGSdo8KAHyTpstw3574YsA&oe=692FAAB8)![Screenshot 2024-04-19 at 9.26.48 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452653578_512509964620293_5448085797043372349_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=KhiZp6HW2RoQ7kNvwEoLEq6&_nc_oc=AdnPbBAiS8I-5XDOeQWM5Xd903sJ4jIAIFZzSugjeSZaYqILgKjemz6zfVBFmUstj0Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjosI_45ET7M3fmnzmXGJKmJfpu8ealoXUAyNOPwded8Q&oe=692FA3BA)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452518323_512509967953626_7006945869471042038_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=1bWuqmvQqnUQ7kNvwFAmUjI&_nc_oc=AdnrnhmmDDs9NQ7b0NkZjB8-pRuJ-2rSxKXUrdb7FBrJX1yMROKMg4r5vpakYsMmJdc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhN7UC46T3EBcGImrOtwezOobohsb5uiqf1QMQrUzNz5Q&oe=692FA57F)

You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452933713_512509961286960_6507830893434825526_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=7BpITl5n8fUQ7kNvwHSbOFs&_nc_oc=AdlVAIESy_chtfudeJrF3RdYjgyvS6nTXT5oIyy2HdD91sGYgrLmt75eFI4wzPV-N0I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhSNxclFfXK0ZC_lOFqH-SLGGKVdnYvQinVNN8Ew43ANg&oe=692FAFC0)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452652035_512509957953627_1509299483219844935_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6d7savjOx4sQ7kNvwG33UhK&_nc_oc=Adkx0ABqJE11yH1Fq0XLZqQpuPBVOzWGWGwOyKPrLh_SLpH-iqOsJDxtZBPT_679LEI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afhe-bfEIoKHtnHRASLaPnUCwcXWeHYVn3f2GPzGVxKY0Q&oe=692F9A7F)![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452934280_512509947953628_7533721349325358428_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=r8mumQCF_I8Q7kNvwHB2Mwu&_nc_oc=AdlnZoMFaKk6pZ1yJyN0ou2zF-dz6wrwf0SwYIa9JPttpgIPe46qpTHbVlDXnS-D1bo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgOgZLCS3YT1OxUsg7uqd_Nm32ajHj8l886LA9i1HHuWA&oe=692FC027)

## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

![Screenshot 2024-04-19 at 11.06.55 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520063_512509951286961_8039903915903876142_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=wcnDd9tjLfAQ7kNvwH-pl_X&_nc_oc=AdnLgNEsifI8ov7nvvawJwu0pgqiheK08d578OyC2hentE7Ira1l9caIQktgKlpOdnM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhvtmOnP-sr7KM-LfKe9I2EU1shfCukG_RKeAJ6dMSBvQ&oe=692FA00A)

For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

![Screenshot 2024-04-19 at 11.02.04 AM.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452932907_512509914620298_8416274368174123809_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=5AlGWNFFQn0Q7kNvwGVqtFY&_nc_oc=Admh4PIhD8kKqck1MV3AhP2-4OoT856E1JMk98QPluE7fmakSMOO8gqQS8dmd87f8Jg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgzCUsYTndGyMztmUQoiv7_dFC_8NmK6QesbTn0dYaoKQ&oe=692FA5CE)![Screenshot 2024-04-19 at 11.01.05 AM.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452716174_512509917953631_1260850758204712021_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=lFMpp8kdJYMQ7kNvwGt-Tpp&_nc_oc=AdkDkMss0VUL7xYbPkrE-6MV6zyvM9By0YLICDOYL3SqY3nLq5UEJKsnawMIJs2KTZc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfihMhG3FDXy4JT1A3XraGbiPAJrUe7bIWxWsFqfHGgWIw&oe=692FBDD1)

You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

![23 Horizon - Add All PNGs.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452830425_512509941286962_2286961765036510195_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=3-8T_vJuQoEQ7kNvwHGch4G&_nc_oc=AdkcKntzl183KIpnuS_r4sr0D0rMIbobkTrBrhBEbcoq5gTp361n7q7UK02uAV9mz8M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afhp-NLkkCeTd7rGQqD7UA-Wx63mYrx96-TTcLJORrtK-w&oe=692FB57F)

### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

![13 Horizon - Create New World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452514554_512509937953629_3385446684682933545_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=pwCrDeuQVZkQ7kNvwH2OceK&_nc_oc=Adnt0YMRn2Bgnndq7vHFnd0tdyehu7VQwnqYHpNGGYC5r-uiWk4GWUtqkwc2SFQQ7go&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjRsUc5UN3VlCVROgcNOoqtTUkRSwbBVSmRlrffACil9g&oe=692FA376)

Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

![14 Horizon - Assets Add New 3D Model.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452698500_512509944620295_8761892053068618025_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ucx77mvN8-IQ7kNvwG2yJaN&_nc_oc=Adka5Z05dq49BTSSB51pUbEJsIe092fPycsnL0lGlyU91uObCoteGaDdphyUQmEzg30&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgMUAfpH59LyF_1F1qum-wE_hE5tsbmplJjqWeIH5sHdA&oe=692FC820)

**Pro Tip:** Create a folder first so that you can organize these files.

![21 Horizon - Create Folder.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452969006_512510024620287_7145889613842616136_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wo2awq_JpSkQ7kNvwGB9PLV&_nc_oc=Adm9t0KMPF3YYAxLrV9HMEH9ovteCnu25tBrpot26_nAL74yOZpClbg12IRiTqIcEOo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgGhzXqso-heaQWVGHukdX1pxwG__aesOrOg-NfpkhCpA&oe=692FA477)

## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

![Model Examples.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520302_512509931286963_1392348710732713706_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jx5bOkwbET8Q7kNvwE9amp9&_nc_oc=AdmGJRM4g7gKzdOnlXJs7m9aBD83knZAS-WdAsuhw7Vaay_ge5lSc9w9wXn0AxLITZc&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgLCyOLyRaQpFflFMcTuuKg2MCPoVZj56YBN2XgZBwQtA&oe=692FB3DD)

**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

![16 Horizon - Drag Images Into World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452698500_512509927953630_2391688165484220586_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=OFbgO8cwzzYQ7kNvwE3-pgD&_nc_oc=AdncPWt18cQGTR0Ocdfcd-SNnW6gzg4FECnCrmIU7RHk9k31_YBYUaHGCKDf5INOAo4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afi46zIgb3xNaVn94l2pzNzGCVRzFzX1Y-6qiS66Sgermw&oe=692F9CA2)

## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

![22 Horizon - Select Folder Add New Texture.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452942546_512509921286964_7427347511941929464_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=11GMFcnrMCIQ7kNvwHlcwhK&_nc_oc=AdlS2m4wS-uNKAprFGeokUd0gmvjSShIdJnAkL_kJ_rkhPzCnV6lBhqlnAwquG3aba8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjBRiOsSwGjsQpbniRnzY09pq2bBcd6FjCdOcbG0rlKWg&oe=692F9C9C)![23 Horizon - Add All PNGs.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452886177_512510021286954_7252073352601237353_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=gdh1SxpGEtMQ7kNvwHQRQhf&_nc_oc=AdmA0UgnMWFICQzYNnFUF98FverXvhWNWAvAp1pTRl-Qwbm88Pa7IV8Zq-KHCOn5GLE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhhesHUczxrTVN1gi_bouHXDqEnD40f3AWFQPemHNzkOw&oe=692FC648)

**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

![24 Horizon - Import All PNGs.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452578170_512509934620296_9067343352172927240_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=lr_XRQMh0J0Q7kNvwHqQgsJ&_nc_oc=AdnsgeF_HoWvYhJ3YfAOCkDGWljQRT_ctC11i4y9d0xRyJ3I_uFwCxEDAaQwg6iUfPI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgjWBG9LT7f2hfdpdZlBYs1wE6Og6KGtqSKRDNbNS-pKA&oe=692FA7DC)![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452813675_512510017953621_1399693691768195627_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=9_7nYUJkaSAQ7kNvwHOnr4i&_nc_oc=Adk7CnbyBHjKimr_B9bns4SJEzanUCOQeRIlzfqVfK3lAdL1Z7g-TaWGwiZy7YBb_bk&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afg2f6Sf8V4tqLLyCeQuffRHbwMMLhJ2dE8Giqw6oHW9kg&oe=692FC6CC)

### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452968830_512510014620288_2686261352574634183_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=4pBd3c9CQoEQ7kNvwEWwjN-&_nc_oc=AdkjuTQ_FFMmxbrC2U7Jm5MLP9E4Pri9P41bwXQOQZqRPAoh6oV2sb_85EEEqqieeb8&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afih3_mwKA3cECSkVFFy79PXraSfU4CHSy7Uy0WCHCmXaQ&oe=692F99CA)

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

![18 Horizon - Create AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452908886_512510011286955_6071772640735723234_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=zTyYtyv7wZsQ7kNvwEqsEkJ&_nc_oc=AdnKuDMm0IJcALxVcJ0xsJV65y2lYXw6WbbO0NMnEGvAYt60Vey8i2odd_0vIiBT8nY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afh7vSm8ocJFnhyypfDW6WFNFq61vImd7iyNXExg8Rb-oA&oe=692F9F1F)![19 Horizon - Open In External Editor.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934389_512509997953623_1096257128825943521_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=pLHv-uC3W4cQ7kNvwEi81oG&_nc_oc=AdlU20BHMigG4YDg3oqXl92v4Srk6pReETo7dRqGBx7ow8sPV6xCFQwcAPy_j9ZPT6I&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhKwyrhE8wBBSZ-2HCOqzTB7PCfqZdvxzryhKFN2ky5jw&oe=692FB44B)

From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

![20 VS Code - Delete Default Paste AnimatedGIF Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452952740_512509994620290_6613449436146433136_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=0S_l54UpiTUQ7kNvwHy4GxT&_nc_oc=AdncRFOuCMMZmMVLxL0UP7rcEilSgu5ehFNuIy4s4RbQKSWK3EChow5NXJ7tLU9gmk4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhAX0iH1Zm5vFtIGIDuPrz37aUDuRg5g9f1-Z4Sue4eqg&oe=692FA534)![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452683821_512510004620289_3602977530773515663_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=DgaaQPTRcPUQ7kNvwEjx_m1&_nc_oc=AdnPqKpKrG8LLP6I-pqA4DxXR_N04VvBv7qcnkkjD4czNQKhdaOBHXLp8WKBmdD5P-4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afin2sCgQtJg0kyn_x6sjvwPhCmjlSAdHaJdoR1UlMovPw&oe=692FBCF4)

## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

![27 Horizon - Stop The World.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452615549_512509971286959_3679470934818076750_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=xMNtoFz2AAAQ7kNvwERYIyS&_nc_oc=AdljYNiQRhTO_lCNXyE0eHybfzhzG7HEtXoknqyJmOr_K87D745JoYJQKfI4Um6TtyI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjKuTK8As5Sb56pwgW7Hl7sMxR-o2rifaX7_oVXh5tRWg&oe=692F9E2E)

Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

![25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452893310_512510007953622_6953964120795560456_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=i3FXzcGhM2kQ7kNvwGGSm2w&_nc_oc=AdnrB8UvSkUdaDU1UWJccRky4K1rdWcIhyS5prE8AFo3fxy5aqrFV0XH3b_7VvQMYPM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjGCiTKrLqEu6xwJnggqC7bKwXwoaTukNPaFCxa7pK-pg&oe=692F95A9)

With the script attached, we can now drag the assets into the empty texture slots in the correct order.

![26 Horizon - Reference All Texture Assets To Correct Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452597104_512509974620292_7381418665732884630_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Q3taVgpeh8Q7kNvwEWK5jJ&_nc_oc=AdnSWc67e62xgKzDXm3xgwUZRxPCIQlcRMrmBT4q3EO59aZT_6-hDZwBbLydQ-eMKUk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgMmTy2nWLYolV4C5eO_RT0FjU95yDIxL1ot-L-ugGLOQ&oe=692FCBDF)

![28 Horizon - Not All References Required Change Speed.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452934376_512509991286957_335261093369493818_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=60Tp6MOMdwYQ7kNvwFS9Szr&_nc_oc=AdkfsLQ-uZ2vt2sm_FTz66oYR3IsQj5anRu185oKdWn4Epm5hoSLhtyIx2-FnfEkovQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgrGN1FROeBEnLeFj6wJby_v1cVSYy0RdEWk9Q9oCs8Iw&oe=692FB8C9)

With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

![29 Horizon - Play World.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452532621_512509987953624_4411056457549309049_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=rZZRitIfuaYQ7kNvwFhnwmL&_nc_oc=AdnU7CRuHj0WiP0P4MwZhOtsMpSyWgSs54y6c93nM8HnRhYaBZcNdBZx40HS8WIKxBo&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfixxnT-YnXLAueae4-MiUBclZnB9Ezx9KZd-5wR6Sf07w&oe=692FC64B)

The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

![30 Horizon - Adjust Speed To Your Liking.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452933994_512509984620291_3491567733690113088_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=MXhG4AWsmHoQ7kNvwFsYOvW&_nc_oc=AdmqdriKSkcTc5yevuWgez7f-D90c-1mttct6XlVcS1Mg4dZKSytjIx1ue62N9z2ECQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgbUcp163Y_a432aJo9HylBF9gE3mZTkn8UKQ9bNCKWww&oe=692FBF7B)![35 Horizon - Billboarded Nyan Cat.gif](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452540279_512509977953625_2643885165784093538_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=nkP5k9Zkw3sQ7kNvwFTPmJ2&_nc_oc=AdkFHpHF1_cOH3vmnBI2ZthNuSdb3lOEPvxEKCDen2jhEJ6884bUM3QsOvTj37MNLIM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjwlcYshXXMl2W3hi6YC0ivFYYj579rGaOQuDRcCGryrw&oe=692F9DA7)

## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

![31 Horizon - Group With Some Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452853527_512510001286956_2716518458353739131_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=aJxJQATG55UQ7kNvwFEzIZ4&_nc_oc=Adkp9zt6UsKyM5bXfxqk8R6e3GdyJQsD6a_WMG948xzojtsERExgXDsW7pKcKJw6Ri0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhMcBaU026qqwSpc-FOcJdGzGZtu2uMZZWX0vpJ1xAaHQ&oe=692FB299)

Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

![32 Horizon - Delete That Object.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452415046_512509911286965_3425181708830011765_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ctWZjyjta4AQ7kNvwFLMGWt&_nc_oc=AdkWiw3o_FqvOh0bQK-qhOYfkF2uw7stdGLzmuvgHuP8hKCIP4iETNpKOn3A_WBupx8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiWfSZEI8iq1pcMJpMxYxxZITXRXuKVSNikfzxLjPyxBQ&oe=692F96E3)

To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

![33 Horizon - Select Group Set Motion To Animated.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915492_512509907953632_8557229846459868426_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=QlyXyt0GLfYQ7kNvwFlsOYW&_nc_oc=Adkkf9vyVWz5qfOoylSxLhWbIl9oKYK6bc9KipHpUYrzpOhfEsJ4IxOVkQLQR2EVPgI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjQDmYEMex7067jIz-02d4KHMBYI-PbEsifjbbpFZ__dg&oe=692FB6AF)![34 Horizon - Billboard Freeform.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513071_512509904620299_6429956925647591739_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=htEbvS872BwQ7kNvwH0NM_t&_nc_oc=Adn0EKjSUyYvJh3OnVcLQo7ruOu9FM-Hz6eLQ6fy8S9BDyt5XbikJLoeAxzizO5MLe8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afj07Ya1UNwMWnSeXOUHFXxyjs0b9VcpgfmwMpKSn2Ggqw&oe=692FC14B)

Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

![39 Horizon - Bring Out A Trigger Gizmo.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452615830_512509897953633_5127349402886952232_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=oYJMVAx1JAUQ7kNvwFHjpsy&_nc_oc=AdnQRgT_HlDM-l7T2os3JvDoHVipLABW_PrXNogVNZs0mXG9SnJtPhK3K36-KMIrlTc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjW37HAkpSckR0Nzz0P3IL0q0Gdrwytzz-e2QXB7iAjzw&oe=692FA873)![40 Horizon - Bring Out A Button Shape.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452752337_512509887953634_7522440812087672101_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=142RwumCbQkQ7kNvwHilfMl&_nc_oc=AdmlrCERyyLzPnhuhHVzCNeRcm3ugjtsgzlA4TmmdiOi3jx9gsO11gErvj3tYlOYl28&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfhTlj3tBJ5oN4RfRzCpn2qygBBnTiY6YC3MVvtyPQnYIg&oe=692F9567)![41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452916233_512509894620300_8243052218315123329_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Mbj3DzPFt2oQ7kNvwGiKC9T&_nc_oc=AdkGlot6qXQsfaPS7ifuZHjRbg7MzHwZ3uZ7z_hM7x0f7Hs0SBK13gE2yK_gThF9xqM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afh6aVHKHCCPbZqm7XlfM7ULeBc68FvD2Mpmfry8x8j3zA&oe=692FCD4D)

![42 Horizon - Attach Script.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452628926_512509891286967_3053857877730824769_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=NWESgv1oodUQ7kNvwFDxlIW&_nc_oc=Adk-3GNCe2y2AYMqzMJQn1bGUH7GFvgyrCPn-_EOX7xbwymac8SiOTqac0OE7ITW3BY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfiptKLJVjEuX2dN6C5NUBmzeCArnjrJZp5I1AgEaFD9PA&oe=692FB582)

Select the UIO plane, and give it a good name so we can better identify it.

![43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452888016_512509881286968_98449028924003563_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=lQmw5z6DgjgQ7kNvwE99y8Q&_nc_oc=AdmSA-i0ny-9qAUAr_GxPnauiorsNhlwWWmB5excMvLWTOE0PznJ9BZ9FZJV87tMM9c&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgMPxht11tkXgxYWwAHp5nOVohPiszbI1euGg1yoTyJSQ&oe=692FC773)

Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

![44 Horizon - Reference NyanCatFrameByFrame.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452413127_512509874620302_6306166632729951456_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=z3Yfras_SDUQ7kNvwEmNhdJ&_nc_oc=AdlNY512U6edVcmb0ImvmNQSYKKKfsb8j0uhHGFdhmomTGvHdeocaLbppEVFoSYQ2AI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afj6yLZd2-CYGvMb5WaWKYLN2waOIounngbLqkSZLhx1Yg&oe=692FAE87)

After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

![45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452415063_512509871286969_397156706064990581_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=1jM-wkZ5aH4Q7kNvwGEZHCd&_nc_oc=AdmbRF9k9yzJzBg5KQFxWLdCVO0c5Wrw5po3W6XI_58rH6rnj3RBn8f4gotg97Ds7gc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afg0sMKOVVnaaPSsbWWwV5J0tDgptHVF7cPVwwO5TYmgaA&oe=692FAB3D)

Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

![46 Horizon - Jump On Button To Test.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452663326_512509884620301_5661988945403216671_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=oqBihJy-KLoQ7kNvwG_QgDA&_nc_oc=Admb-7-R2CRCAE_YEGXXWY67Vvzebou21s8-AZqFT7_O3gcqTycUPdGrrfV42Sm_bqw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_Afhe-1dFuSdS_M33xtR4ma-rzOPoiW5tzUqidQKjHM_R8A&oe=692FC5E5)

## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

![36 Horizon - Duplicate And Rename Props To Add More.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452587750_512509877953635_1060541854433685900_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=xthhNkuwmN8Q7kNvwHVxlvj&_nc_oc=Adk8IUyH35X6VbiaE3doltIvXGJ4MCq4SxNSzbIXh2r9dA-01BSD98vlm4TtkUdneCE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfigpBCuR7Oc2_k7jV5OgFRr_kouRS3feCVrfpCpkNoKAw&oe=692FB51D)

Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

![37 Horizon - Duplicate Add To Array And Rename.png](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452916434_512509867953636_5718596235244147160_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=gptf-h2Z_pYQ7kNvwHF53je&_nc_oc=AdmSRoRG7Qnm58ZNXJ7Y77SVsNForbDTgE5OqxMZDPctfN5rxxyBo-8ogB6hy3KkCWA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfjBprxNN1BUtJrqxBhg3_rKkLyugakMbb78WsSDNgk9Uw&oe=692FC503)

A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

![38 Horizon - Create TextureSwappingTriggerScript.png](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915631_512509861286970_8320013039747796277_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=hK28fLxtDQkQ7kNvwEcsGZt&_nc_oc=AdktLh3pukG1e1ZstflvBIT4Pe_eNqmSvtJ4NAt1UwgcshxIzofkecwjjz8OjY5FwQE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=y-gKDbqzU8X0y6lAJma6TQ&oh=00_AfgBEdwKWm_MvX45D-r77eUsc84rXOQNSe9V5bLIcohtQg&oe=692FADF0)

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