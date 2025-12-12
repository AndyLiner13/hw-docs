Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models

# Materials Guidance and Reference for Custom Models

A [mesh](https://en.wikipedia.org/wiki/Polygon_mesh) is a collection of vertices, edges, and faces that define the shape of a 3D object. In Meta Horizon Worlds, meshes are used to create objects such as buildings, terrain features, or decorative elements. Materials define the visual appearance of these 3D objects by specifying colors, textures, and other properties that are mapped onto them.

## Defining materials in the FBX file

A material is a set of properties that define how an object responds to light. A material specifies the way that the object reflects, absorbs, and transmits light. You can think of materials as the “paint” that you apply to the surface of an object. Materials can have various properties such as color, reflectivity, transparency, and roughness.

You can assign multiple materials per mesh in the FBX file, and multiple FBX meshes can share the same material. For more information, see [Multiple Materials per Mesh](Multiple%20Materials%20per%20Mesh.md).

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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/fec4fd489891e15c44790c02bb5b366352daf19846d4ea19b52b76d8eab62c2a.md)

### Overview
This image displays a grid background with three distinct hexagonal icons arranged horizontally. Each icon contains a symbol or question mark within a gradient background.

### Key Elements
1. **Left Icon**
   - **Visual description**: A red hexagon with a black border.
   - **Location**: Leftmost position.
   - **Contents**: Contains a black exclamation mark (`!`).
   - **Visual styling**: Solid red fill, black border, and white exclamation mark.

2. **Middle Icon**
   - **Visual description**: A yellow hexagon with a black border.
   - **Location**: Centered between the left and right icons.
   - **Contents**: Contains a black exclamation mark (`!`).
   - **Visual styling**: Solid yellow fill, black border, and white exclamation mark.

3. **Right Icon**
   - **Visual description**: A hexagon with a gradient background transitioning from green at the top to purple at the bottom.
   - **Location**: Rightmost position.
   - **Contents**: Contains a black question mark (`?`).
   - **Visual styling**: Gradient background with green at the top, transitioning to purple at the bottom, and a black question mark.

### Visual Flow / Relationships
The icons are arranged in a horizontal line, with no connecting lines or arrows. The arrangement suggests a sequence or a set of options, but there is no implied reading order indicated by the layout itself.

</details>

<p></p>



Materials that do not receive or cast lighting or shading are considered unlit. The material name in the FBX must end in “\_Unlit”. Any extra channels, such as the fourth channel, are discarded.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_B.png | BaseColor (sRGB) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Unlit Blend Materials

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/a9cbc835ee4012098aec4203f966ab876832933a173f8a6537ea6003bc722ddb.md)

### Overview
The image depicts a 3D-rendered scene featuring a brick wall with a window and a white, curved object resembling a lampshade or a piece of furniture. The background consists of a tiled floor with a grid pattern.

### Key Elements
- **Brick Wall**: Located on the left side of the image, constructed from red bricks arranged in a staggered pattern. The wall has a window with a dark brown frame and a light beige interior divided into smaller panes.
- **Window**: Positioned centrally within the brick wall, with a dark brown frame and a light beige interior divided into smaller panes.
- **White Object**: A curved, white object resembling a lampshade or a piece of furniture is situated on the right side of the image. It has a smooth, glossy surface with subtle reflections.
- **Background**: The floor is tiled with large, light gray tiles forming a grid pattern.

### Visual Flow / Relationships
- The most prominent visual element is the brick wall with the window.
- There are no arrows, lines, or connectors indicating a specific reading order.
- Spatially, the white object is positioned to the right of the brick wall, creating a contrast in the composition.

</details>

<p></p>



Blended materials that do not receive or cast lighting or shading are considered blended and unlit. The material name in the FBX must end in “\_Blend”. Unlit blended materials do not have any specular or reflection properties.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Transparent Materials

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c460a7f7edd5aef7b71f0726281a94bafb4111e2ec67612fc9824ee8b10b8b66.md)

### Overview
The image displays a collection of colorful, faceted objects resembling crystals or gemstones arranged on a tiled floor. The objects vary in shape, size, and color, creating a visually striking display.

### Key Elements
- **Purple Crystal Cluster**: Located on the left side, composed of numerous purple, faceted crystals. They are densely packed and have a glossy finish.
- **Green Crystal Cluster**: Positioned centrally, featuring green, faceted crystals that are less dense than the purple cluster but still form a group.
- **Red Crystal Cluster**: Situated on the right, consisting of red, faceted crystals similar in style to the green ones but with a slightly different arrangement.
- **Small Blue Bottle**: A small, translucent blue bottle with an orange cap is placed near the purple crystal cluster.
- **Small Green Bottle**: A smaller, translucent green bottle with an orange cap is positioned near the green crystal cluster.
- **Small Red Bottle**: A small, translucent red bottle with an orange cap is located near the red crystal cluster.
- **Large White Crystal**: A large, white, faceted crystal is situated on the far right, separate from the clusters.

### Visual Flow / Relationships
The objects are arranged in a loose grid-like pattern across the tiled floor. The clusters of crystals are the most prominent elements, drawing the viewer's attention due to their vibrant colors and reflective surfaces. The bottles are smaller and less prominent, serving as supporting elements in the composition.

</details>

<p></p>



Transparent materials allow light to pass through. A specular channel is used, which modulates specular and reflection amounts. Using two textures gives control over more of the PBR properties. Material name in FBX must end in “\_Transparent”

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BR.png | BaseColor (sRGB) + Roughness (linear) |
| **Texture B** | MyMaterialName\_MESA.png | Metal, Emissive, Specular, Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

### Masked Materials

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452635163_512510161286940_8652445767142113425_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=FnRggIdiqhAQ7kNvwHJI84Q&_nc_oc=Adl0yGH2Tq2vkOEHcfUv5KZ3eI-b8fTT2e_QRjM16hadyimWiTjhBRWRS-0vYMPrO0T_b9BrvKlyvKJJzajtWdUn&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cbEHMgS33N1W-L46ImsaJg&oh=00_AfkUeyoK7ldwwMFG6MBEySNOrPXL7Rx9hnGOizkzc4KlvA&oe=69556B02)

Masked materials are used for controlling the mixing of two textures. The material does respond to specular and roughness properties, but is considered fully rough; i.e., roughness = 1. The A channel of the texture drives the alpha, where white is opaque and black is clear. Alpha cutout happens at 0.5 (matching the default for GLTF 2.0 and Unity). Material names in FBX must end in “\_Masked”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

Also supported is a “masked vertex color” material. In this case, the **BaseColor** texture is multiplied with the mesh’s vertex color. Material names in FBX must end in “\_MaskedVXM”.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/539055655_798794379325182_7362778889624657389_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=mEHjK9SWUbsQ7kNvwGUv1VZ&_nc_oc=Adl4JDhUgH3QJDTdse7_7vxIhuthyoQSsvSUP_RY0gUpMBPGrbEZE6WMw2QAyq2kTUGuGElWpfMXNsb2f2IHFRFJ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cbEHMgS33N1W-L46ImsaJg&oh=00_Afm6kZJMMulAFxETOJihX-7pcNdUZ9PbOie6scKiNK35Hg&oe=69558FAA)

### Vertex Color PBR

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452846268_512510174620272_2366064968037736374_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Jxo_OXkh_xkQ7kNvwF3vOJO&_nc_oc=AdneDU8g9-URKR3Q-tFiJVL4wtZbKzo6iIjJSoki3pLDa6ibhrwk6Ywm7LpnaLeFSBtnvdTvF6FiqnlXX6INpfsb&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=cbEHMgS33N1W-L46ImsaJg&oh=00_Afn0kEF1xFJHsfxw0aYNW5ufDYyjHUx4aFJtzYBbhCPGOw&oe=69559103)

Vertex colors are RGBA values that are applied directly to mesh vertices. They do not contain any textures. You can use vertex color for:

* Simple clean objects.
* Objects that just need simple gradients or colors.
* Simple landscapes

A material name in the FBX must end in “\_VXC”.

### Vertex Color Single-Texture PBR

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452522576_512510164620273_7391129338506219413_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=AlkLud3OAq4Q7kNvwFc2hPm&_nc_oc=AdlDZ4L6X6JrebuENeV8JV6r6uUkp7CLY1HvO_gITbhiXWK2GERpKfgeZy2M_vW7PxLqd20ZwNp1_jY43g5jEk_M&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cbEHMgS33N1W-L46ImsaJg&oh=00_Afl46E1Se_Su_rOmCIKIpI_p4fEpvk_lPPlW7Jq9MmwxGw&oe=69556E62)

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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452541679_512510181286938_784385883995309106_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=zD4F9Ie06gMQ7kNvwFiO5UJ&_nc_oc=AdmChM5HIJ-Ljci0mrqwYI1sx5UAztlBaSiC3UkiRgdkcjhL3D7kge1zWqkENQe6KUnbv-OTYuubPv0jDsAhEk4B&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=cbEHMgS33N1W-L46ImsaJg&oh=00_Afk3jwMPXL47VZIzTpubCTu1sHzV1CQ2E3sbvwI3YgJMSg&oe=69559D73)

UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.