Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models

# Materials Guidance and Reference for Custom Models

A [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) is a collection of vertices, edges, and faces that define the shape of a 3D object. In Meta Horizon Worlds, meshes are used to create objects such as buildings, terrain features, or decorative elements. Materials define the visual appearance of these 3D objects by specifying colors, textures, and other properties that are mapped onto them.

## Defining materials in the FBX file

A material is a set of properties that define how an object responds to light. A material specifies the way that the object reflects, absorbs, and transmits light. You can think of materials as the “paint” that you apply to the surface of an object. Materials can have various properties such as color, reflectivity, transparency, and roughness.

You can assign multiple materials per mesh in the FBX file, and multiple FBX meshes can share the same material. For more information, see [Multiple Materials per Mesh](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

## Filename Criteria

* Avoid using these characters in your file names -, ., , /, \*, $, &
* Avoid using underscores “\_” in your material and texture names, except to designate special tags like \_Metal.
  + 👎 Dont\_Name\_Like\_This\_BR.png.
  + ✅ NameLikeThisInstead\_BR.png.

## Texture and materials reference

### Single-Texture PBR

The PBR (Physical Based Rendering) material for a single texture combines the base color and roughness. Metalness will be set to 0.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Single-Texture Metal PBR

Single-texture metal PBR material combines the base color and roughness. Material names must end in “\_Metal”. This part of the material name is not reflected in the texture matching. Metalness will be set to 1.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) + Metalness |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Double-Texture PBR

Using two textures gives control over more of the PBR properties.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MEO.png | Metalness + Emissive + AmbOcclusion (all linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Unlit Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746741_512510151286941_7543427180543090042_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uHzkdh7dC5wQ7kNvwFUGzEX&_nc_oc=AdmPfUlCbAk7D0UaMv8wNAxVfa01dLlWDWuK7PiPg4aBTziFxspuwvts9zyJzKkUX00&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_AflJgZAI5fYhvEspVFvIt8lOOmsEWlf4PnILG6vtK9-BSQ&oe=695466FB)

Materials that do not receive or cast lighting or shading are considered unlit. The material name in the FBX must end in “\_Unlit”. Any extra channels, such as the fourth channel, are discarded.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_B.png | BaseColor (sRGB) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Unlit Blend Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452955733_512510171286939_5181638036183860130_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=5GlwWTYSXWwQ7kNvwHmEGf8&_nc_oc=AdlS18vjjAr8DePkinJEm-gWbEQYCwGO-LnYojehzd41YTt2epX1gJbMabFtaZvkYBs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_AfmOBsF0_PLrGMlaG1H8QBs_9xWB1m4QM1_thAHKd6YZ4w&oe=69545777)

Blended materials that do not receive or cast lighting or shading are considered blended and unlit. The material name in the FBX must end in “\_Blend”. Unlit blended materials do not have any specular or reflection properties.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Transparent Materials

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522449_512510154620274_2357687186968881662_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=dfpNMHwTc6gQ7kNvwHjAZPg&_nc_oc=Adk_80a30B61CHPMFUSmXNWOgQwHxXSQzv0V_L1vM5leF2kxRO1xlMarGLT_lD25_yg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_Afk7QpoxRPoZy8O0XZs4sbEzf3DBi6XyhD-jVvbvkcaWtg&oe=69545FF8)

Transparent materials allow light to pass through. A specular channel is used, which modulates specular and reflection amounts. Using two textures gives control over more of the PBR properties. Material name in FBX must end in “\_Transparent”

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MESA.png | Metal, Emissive, Specular, Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Masked Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635163_512510161286940_8652445767142113425_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=FnRggIdiqhAQ7kNvwG8M1Y-&_nc_oc=AdkNcRdFTG996OcrA_YIERux3xdEZapG5-fRwZ15HKJdx4E0F14TPElCKWbkct_MclA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_AfklglWHhroBoQj8wpchiCGHNfmqRROgi0ZvPxj8UbGhZg&oe=695451C2)

Masked materials are used for controlling the mixing of two textures. The material does respond to specular and roughness properties, but is considered fully rough; i.e., roughness = 1. The A channel of the texture drives the alpha, where white is opaque and black is clear. Alpha cutout happens at 0.5 (matching the default for GLTF 2.0 and Unity). Material names in FBX must end in “\_Masked”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

Also supported is a “masked vertex color” material. In this case, the **BaseColor** texture is multiplied with the mesh’s vertex color. Material names in FBX must end in “\_MaskedVXM”.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/539055655_798794379325182_7362778889624657389_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=_4w_-X6dMgkQ7kNvwFTQYTa&_nc_oc=AdkWmyT0MztonYSC3_ihraBpcfeCCTuBvm0GwL_BziAPrVQr4EyhBEsCTCtSZbn9JA0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_Afmv21vARz1FWTJDOqicQkvHhID3KObyWFDpJXWxvtHQZw&oe=69543E2A)

### Vertex Color PBR

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452846268_512510174620272_2366064968037736374_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=tIIStJbI2HYQ7kNvwEghdB8&_nc_oc=AdmMiAgHvXe03MQmHA9Jgh2E-RoL4xA7LbadozBh67uMhJpk8jIQgjQHZZmtKm5HO_A&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_Afndr8k2pUQabFRAduYQ_BZmvqH-AbRGTj131FMzSCkUIA&oe=69543F83)

Vertex colors are RGBA values that are applied directly to mesh vertices. They do not contain any textures. You can use vertex color for:

* Simple clean objects.
* Objects that just need simple gradients or colors.
* Simple landscapes

A material name in the FBX must end in “\_VXC”.

### Vertex Color Single-Texture PBR

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522576_512510164620273_7391129338506219413_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=AlkLud3OAq4Q7kNvwFCr_fC&_nc_oc=AdnlROHV4C3CEaWr4G6ds6qdLSc6HP2ySK-0q2ok03MHRaf_zgZP6QD2GVtITAf13tg&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_Afkw6n84X96lhswJqhSZHSdVWRvly9BbSjmy2Wyvi_uG-A&oe=69545522)

Vertex colors are RGBA values that are applied directly to mesh vertices and then multiplied with a texture **BaseColor** as input to both GI and shading. You can use vertex color for:

* Allowing more texture reuse across similar surfaces with different colors.
* Layering broad color and value changes.

Metalness will be set to 0.

A material name in the FBX must end in “\_VXM”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Vertex Color Double-Texture PBR

The Vertex Color Double-Texture PBR material is the same as the single-texture version but uses two textures to give more control over the PBR properties, in the same way as the regular texture PBR, but applied to vertices. Vertex color is **multiplied** with texture BaseColor as input to both GI and shading. Using two textures gives control over more of the PBR properties

Material names in FBX must end in “\_VXM”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MEO.png | Metalness + Emissive + AmbOcclusion (all linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### UI Optimized Materials

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452541679_512510181286938_784385883995309106_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=VRxOUwbci_4Q7kNvwG12747&_nc_oc=AdnfzAJIVTHWO8QlOob8RtZC1V_q-tYSUZ7C7pq4GA7Xmgf9w0dpfxE3eIXbdRAgoxc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=1F3VVDPLD6T6cVAqMQwnEg&oh=00_AfmczHjOpeDbbH-9-7SVE1RgecnnHTL5aYTmRzSfmIy95A&oe=69544BF3)

UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.