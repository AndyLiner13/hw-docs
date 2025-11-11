Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models

# Materials Guidance and Reference for Custom Models

A [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) is a collection of vertices, edges, and faces that define the shape of a 3D object. In Meta Horizon Worlds, meshes are used to create objects such as buildings, terrain features, or decorative elements. Materials define the visual appearance of these 3D objects by specifying colors, textures, and other properties that are mapped onto them.

## Defining materials in the FBX file

A material is a set of properties that define how an object responds to light. A material specifies the way that the object reflects, absorbs, and transmits light. You can think of materials as the “paint” that you apply to the surface of an object. Materials can have various properties such as color, reflectivity, transparency, and roughness.

You can assign multiple materials per mesh in the FBX file, and multiple FBX meshes can share the same material. For more information, see [Multiple Materials per Mesh](/hw-docs/custom-model-import/creating-custom-models-for-horizon-worlds/multiple-materials-per-mesh).

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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746741_512510151286941_7543427180543090042_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=0XBAet59L3wQ7kNvwHh-DxF&_nc_oc=AdnuWXJk0vpTRuJzjCf7TpGfqfMsXRwQYKhwbeTC9247tH3ngGs_6w_rm27mqB3NzLM&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfgvaSD-DYB7pn2f7FYHM7lTeZHrajgU5ZvkLpYSPI75Ug&oe=692BF8FB)

Materials that do not receive or cast lighting or shading are considered unlit. The material name in the FBX must end in “\_Unlit”. Any extra channels, such as the fourth channel, are discarded.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_B.png | BaseColor (sRGB) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Unlit Blend Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452955733_512510171286939_5181638036183860130_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jd3TOQ_GHIAQ7kNvwHG_Ns0&_nc_oc=AdmhKSxR7Ef4SG6EgImFsJRAasTtmJvZCpglrku3YKA1k4HFLw5JfglNsJS3x5Q24-U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfhiUiCQHUwdvUmYQ0W7cxI9rM8Xrzzx34P8FUlnBA8Kmw&oe=692BE977)

Blended materials that do not receive or cast lighting or shading are considered blended and unlit. The material name in the FBX must end in “\_Blend”. Unlit blended materials do not have any specular or reflection properties.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Transparent Materials

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522449_512510154620274_2357687186968881662_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=2DWdCddTqKgQ7kNvwF1yGXg&_nc_oc=Adl_pNFo_GkblVYaqs-SDQmSs8fQjwSsXSnW9Ule_UqpGyepo4hbCo9evxUALAUw2_w&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfjGOyMeo2UU69laHSxEDjrH_Sgz_JE60lH0uNGu4A7jUA&oe=692BF1F8)

Transparent materials allow light to pass through. A specular channel is used, which modulates specular and reflection amounts. Using two textures gives control over more of the PBR properties. Material name in FBX must end in “\_Transparent”

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MESA.png | Metal, Emissive, Specular, Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Masked Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635163_512510161286940_8652445767142113425_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=IG0y2-lkc7YQ7kNvwHsYZC3&_nc_oc=Adkz6GjBYKWBWda71MnTVH8jPKvPm_tKLkgyXzJC8NCrCbDsU5G_XnQ2zWGJ1KWgEoE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfhbayE7_tXmlDaJYIi-_GiY4vDT4F8mwPbrtMZSINmEgg&oe=692BE3C2)

Masked materials are used for controlling the mixing of two textures. The material does respond to specular and roughness properties, but is considered fully rough; i.e., roughness = 1. The A channel of the texture drives the alpha, where white is opaque and black is clear. Alpha cutout happens at 0.5 (matching the default for GLTF 2.0 and Unity). Material names in FBX must end in “\_Masked”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

Also supported is a “masked vertex color” material. In this case, the **BaseColor** texture is multiplied with the mesh’s vertex color. Material names in FBX must end in “\_MaskedVXM”.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/539055655_798794379325182_7362778889624657389_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8Vz8ycapUtEQ7kNvwHJAm_2&_nc_oc=Adm6GrHauTsQmdI3gFTvLse5LmrjU8xcnWRKbrOajzif63syXkCG_caFhrgsDJfjBjU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfjMXOUf8uVF6BH5wgEKrYocZl51yQmfSmbDZJPUnPxwUg&oe=692C086A)

### Vertex Color PBR

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452846268_512510174620272_2366064968037736374_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=7x_2Gij0y_sQ7kNvwFgxvwt&_nc_oc=Adn5VLtPPL1_VTvR5Zz9qKL6pt2574Wyb4ehPiZRO4aVq7r9PzYFmVjlUETsFpNHjtc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfiKcC4FvUZ4vKH01UWQteXvRxdktvaTOdjqs9IcGi_jHQ&oe=692C09C3)

Vertex colors are RGBA values that are applied directly to mesh vertices. They do not contain any textures. You can use vertex color for:

* Simple clean objects.
* Objects that just need simple gradients or colors.
* Simple landscapes

A material name in the FBX must end in “\_VXC”.

### Vertex Color Single-Texture PBR

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522576_512510164620273_7391129338506219413_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=inzlca5VHAwQ7kNvwG7bRWH&_nc_oc=AdmoyVCBo4LDS1YCculc4q1cxcOmWjvSnks4lZIPm-_LTFvTLeP_cILc3cvXBBOvitQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfiCkDiCNOC1yWBWBfpjblK9CdhlAW1tqysco3m-xE4eKg&oe=692BE722)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452541679_512510181286938_784385883995309106_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=BGsr7Wp-vksQ7kNvwE86UC3&_nc_oc=AdlYatAenaJhcq1LzfnkLHfNFESz5y8VTqByKTLEkxTZdfmCwxM3UJQqyC9XMYfh750&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=dUPTjJlXqw5tPmZgjiz2gA&oh=00_AfgqrgulqTAZFZcazS41ZCyVedxSUoXkKFziQpkfFSdRKg&oe=692BDDF3)

UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.