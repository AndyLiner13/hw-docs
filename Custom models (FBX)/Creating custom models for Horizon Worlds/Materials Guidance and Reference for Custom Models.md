Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models

# Materials Guidance and Reference for Custom Models

A [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) is a collection of vertices, edges, and faces that define the shape of a 3D object. In Meta Horizon Worlds, meshes are used to create objects such as buildings, terrain features, or decorative elements. Materials define the visual appearance of these 3D objects by specifying colors, textures, and other properties that are mapped onto them.

## Defining materials in the FBX file

A material is a set of properties that define how an object responds to light. A material specifies the way that the object reflects, absorbs, and transmits light. You can think of materials as the “paint” that you apply to the surface of an object. Materials can have various properties such as color, reflectivity, transparency, and roughness.

You can assign multiple materials per mesh in the FBX file, and multiple FBX meshes can share the same material. For more information, see [Multiple Materials per Mesh](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Multiple%20Materials%20per%20Mesh.md).

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

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746741_512510151286941_7543427180543090042_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=jZ91g9GGHyoQ7kNvwHRf92O&_nc_oc=AdnOzALzkUysXcEKBgi-mImCKnsc5n6QNCPWJQcge2mVPts8_p21F8IIM2X72h4twGc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_Afjjw6vbFqQ4iUsUNwq1ERGO3uYSXEBGYKVWqNLaDbvgKA&oe=692FB53B)

Materials that do not receive or cast lighting or shading are considered unlit. The material name in the FBX must end in “\_Unlit”. Any extra channels, such as the fourth channel, are discarded.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_B.png | BaseColor (sRGB) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Unlit Blend Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452955733_512510171286939_5181638036183860130_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=vCmOYam1V5UQ7kNvwERxVDu&_nc_oc=AdkYIa_1a3EKnYhw9Kajg6faWn0NqksP44v8Uba3If0gAcLQz8vN_H_NKLXu16P3PNw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_Afj-MUjT90uZzhfs6kEv561nF3YCG8Er_k3inFXtPmwDVw&oe=692FA5B7)

Blended materials that do not receive or cast lighting or shading are considered blended and unlit. The material name in the FBX must end in “\_Blend”. Unlit blended materials do not have any specular or reflection properties.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Transparent Materials

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522449_512510154620274_2357687186968881662_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=77Jd6WtaQmoQ7kNvwHpc4I_&_nc_oc=AdmKVT4Xi8P1yJdtx37VwPzUFJ8tfbyiDYmfQ39Q9vuM4iaPxDhn64dlgw8JvpOYQPw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_AfhAxgjJ2pCY6-fjBNH7GwT7xsXeVKxtgMV030M_TlhumQ&oe=692FAE38)

Transparent materials allow light to pass through. A specular channel is used, which modulates specular and reflection amounts. Using two textures gives control over more of the PBR properties. Material name in FBX must end in “\_Transparent”

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MESA.png | Metal, Emissive, Specular, Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Masked Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635163_512510161286940_8652445767142113425_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=r1x8FMdTkDEQ7kNvwGmGpR0&_nc_oc=AdmQ2iKthTW8OpYMt3E2-45UwQ8eRYr0hzrZYuCMis923-f7srFa_Z1iVeQ94GfGVn4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_AfgWGMuJx92kjMzr0sZJwUQPUfNZmZ62C8dpP1p30bN0Uw&oe=692FA002)

Masked materials are used for controlling the mixing of two textures. The material does respond to specular and roughness properties, but is considered fully rough; i.e., roughness = 1. The A channel of the texture drives the alpha, where white is opaque and black is clear. Alpha cutout happens at 0.5 (matching the default for GLTF 2.0 and Unity). Material names in FBX must end in “\_Masked”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

Also supported is a “masked vertex color” material. In this case, the **BaseColor** texture is multiplied with the mesh’s vertex color. Material names in FBX must end in “\_MaskedVXM”.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/539055655_798794379325182_7362778889624657389_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=n4c2ohIaaxEQ7kNvwGV4-rv&_nc_oc=AdnmUyMzlFygdzJVZ6YjEqpKi8J_gnc4tK1ermwhDlHKr03P_Tx1Iqxdfv5CNwDaLaA&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_Afj9oFSnX90zNMZKtNaYxQULrs25HSpygJNeM1qTKGXsfg&oe=692FC4AA)

### Vertex Color PBR

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452846268_512510174620272_2366064968037736374_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=cn4yr7I6yuIQ7kNvwE7Q3rw&_nc_oc=AdkqYBBMYBPBCFWK7FdabKyUVKt0uzdOGqvGvdnIGLZfwudSPhXEJhP56UQ8LQzq6nA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_AfhOjsEHdqVVqPg0l-6jFUcvBrX0pzs-EOqKYuf-9Y32dg&oe=692FC603)

Vertex colors are RGBA values that are applied directly to mesh vertices. They do not contain any textures. You can use vertex color for:

* Simple clean objects.
* Objects that just need simple gradients or colors.
* Simple landscapes

A material name in the FBX must end in “\_VXC”.

### Vertex Color Single-Texture PBR

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522576_512510164620273_7391129338506219413_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=EQ9nUaS4nyYQ7kNvwH5E-8E&_nc_oc=AdmmmMwQ8DIRyo5OSZkWX3MOlENZRGGX8n8mJQL4Q4zh4_9__WCwVPlNmzytHWwUjxE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_AfjJ9koB8xHAJALbax2DPNFtIbMSIc6iUw8PDr5s9SFISQ&oe=692FA362)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452541679_512510181286938_784385883995309106_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=GpH-iE5nNxwQ7kNvwFpzDly&_nc_oc=AdmHswgdOkGdWjKzBf-6E4H8mTdkI7zVrgdOd6GyvYEKgxMTFooxFyAK6qMJ-e3J_dE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=QLGhDr3NCyVMw5pj2aGRHg&oh=00_AfjfIYjH8Mn-aDeTmO_IL-8sKAdzHj6TSQE2P9uLy9Vw5g&oe=692F9A33)

UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.