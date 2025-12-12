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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/6cbd03314f0678e9124134b4f9ed3ea6eb343e31804bf4bb64e91851b6997ed9.md)

### Overview
The image depicts a vibrant outdoor scene featuring ancient stone ruins partially overgrown with grass and wildflowers. The setting includes two large stone pillars, some broken stone steps, and a small blue object resembling a bowling pin near one pillar. The background showcases lush greenery, trees, and a clear sky with a geometric pattern overlaying the upper part of the image.

### Key Elements
- **Stone Pillars**: Two large, weathered stone pillars stand prominently in the center. They are light gray with darker gray cracks and bases. They are positioned slightly apart, forming a small archway.
- **Broken Stone Steps**: Between the pillars, there are several broken stone steps leading up to a higher platform.
- **Blue Object**: A small, round, blue object resembling a bowling pin is placed on the steps near one of the pillars.
- **Grass and Wildflowers**: The foreground is covered with green grass and scattered white daisies. The grass is depicted in various shades of green, with some areas appearing lighter and others darker.
- **Trees**: Large trees with bright green leaves are visible in the background, partially obscuring the sky.
- **Sky and Geometric Pattern**: The sky is a clear blue with a few clouds. Overlaid on the sky is a geometric pattern consisting of interconnected triangles in a light blue hue.

### Visual Flow / Relationships
The most prominent visual elements are the stone pillars and the blue object. The blue object is positioned near the base of one pillar, drawing attention to that area. The broken stone steps lead the viewer's eye towards the pillars, creating a sense of depth. The trees in the background provide a sense of scale and frame the scene. The grass and wildflowers add texture and color contrast to the image.

</details>

<p></p>



Masked materials are used for controlling the mixing of two textures. The material does respond to specular and roughness properties, but is considered fully rough; i.e., roughness = 1. The A channel of the texture drives the alpha, where white is opaque and black is clear. Alpha cutout happens at 0.5 (matching the default for GLTF 2.0 and Unity). Material names in FBX must end in “\_Masked”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (aka inverse of Transparency) (linear) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.

Also supported is a “masked vertex color” material. In this case, the **BaseColor** texture is multiplied with the mesh’s vertex color. Material names in FBX must end in “\_MaskedVXM”.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/3ad49554a44edde797194100924cf5e50bafa8e1f718b92e9559ec13656f31e9.md)

### Overview
The image depicts a third-person view of a character walking through a field of tall grass and wildflowers. The character is viewed from behind, wearing a black hoodie and dark pants with a knee brace on one leg. The environment is vibrant with various shades of green and yellow, and the scene has a natural, outdoor setting.

### Key Elements
- **Character**: A figure with short, dark hair, wearing a black hoodie and dark pants with a knee brace. The character is walking away from the viewer.
- **Grass**: Tall, golden-yellow grass dominates the foreground and background, creating a dense field.
- **Wildflowers**: Scattered throughout the grass are colorful flowers, including yellow dandelions and purple blooms.
- **Background**: The horizon line is visible in the distance, suggesting an open landscape beyond the field.

### Visual Flow / Relationships
The character is the focal point, positioned centrally in the frame. The grass and wildflowers surround the character, creating a sense of immersion in nature. There are no arrows or lines connecting elements, but the natural progression of the grass and flowers guides the viewer's eye through the scene.

</details>

<p></p>



### Vertex Color PBR

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e7a355d2e70bf051611937578bd9494ac66c2b481ade89a46a7e3b86bb9fee94.md)

### Overview
The image depicts a simple scene with two swords floating above a desert landscape under a clear blue sky. The composition is minimalistic, focusing on the two swords as the primary subjects.

### Key Elements
- **Left Sword**: A sword with a red blade and a brown hilt featuring a circular design with a yellow center and radiating lines. The hilt has a metallic sheen.
- **Right Sword**: A simpler sword with a white blade and a dark green hilt. It lacks any intricate designs compared to the left sword.
- **Background**: A gradient blue sky transitioning from light to darker blue at the horizon. Below the sky, there is a flat, sandy terrain with gentle undulations.

### Visual Flow / Relationships
The two swords are positioned symmetrically, one on the left and one on the right. There are no connecting lines or arrows, and the reading order is not implied by the layout.

</details>

<p></p>



Vertex colors are RGBA values that are applied directly to mesh vertices. They do not contain any textures. You can use vertex color for:

* Simple clean objects.
* Objects that just need simple gradients or colors.
* Simple landscapes

A material name in the FBX must end in “\_VXC”.

### Vertex Color Single-Texture PBR

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/85d1671be38c8461a0ad4100f95cbe4b3f3276f312eff13bba2879c60b879483.md)

### Overview
The image depicts a scene with a desert-like environment featuring a collection of large, blocky structures resembling futuristic or industrial buildings. The sky is clear blue, and the ground is sandy. There are faint white lines in the sky that could be interpreted as power lines or some form of communication infrastructure.

### Key Elements
- **Structures**: These are the central elements, appearing as large, rectangular blocks stacked together. They vary in height and width, with some having flat tops and others with more angular designs. The structures are primarily light gray with some darker gray accents, suggesting wear or shadowing.
- **Ground**: The foreground consists of a flat, sandy surface, light brown in color.
- **Sky**: The background is a clear blue sky with no clouds. Two faint white lines are visible in the sky, extending diagonally across the image.

### Visual Flow / Relationships
The structures are scattered across the landscape, with some appearing closer to the viewer than others. There is no clear path or direction suggested by the arrangement of the structures. The sky lines add a sense of depth but do not connect to any specific elements on the ground.

</details>

<p></p>



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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0eba16d338f0e208680e6f3313e5df10161658340701f9df94a4fa54a4a991e6.md)

### Overview
The image displays a scene with a blue sky background and a large, textured object resembling a pillar or column in the center. The object has a fiery, lava-like texture with dark and bright orange hues. There are two identical panels on either side of the central object, each containing text and graphical elements.

### Key Elements
1. **Left Panel**
   - **Visual description**: A rectangular panel with rounded corners.
   - **Location**: Left side of the image.
   - **Contents**: Contains a title labeled "Text Title," followed by placeholder text "Lorem ipsum dolor sit amet, consectetur adipiscing elit." Below that, there's another line stating "This example texture is 512x256." A pink "Hello" text is present, along with the phrase "Fog text fog" underneath.
   - **Visual styling**: White background, black text, pink accent for "Hello."

2. **Central Object**
   - **Visual description**: A large, vertical, textured object resembling a pillar or column.
   - **Location**: Center of the image.
   - **Contents**: The object itself is the focal point, featuring a lava-like texture with dark and bright orange tones.
   - **Visual styling**: No specific text or labels, just the texture.

3. **Right Panel**
   - **Visual description**: Identical to the left panel but with additional red text "un-optimized" above the title.
   - **Location**: Right side of the image.
   - **Contents**: Same as the left panel but includes the red text "un-optimized."
   - **Visual styling**: White background, black text, pink "Hello," and red "un-optimized."

4. **Additional Elements**
   - **Visual description**: A small red cube and a sphere are placed within the panels.
   - **Location**: Below the text in both panels.
   - **Contents**: The red cube is labeled "A round sphere."
   - **Visual styling**: Red cube, white background, black text.

### Visual Flow / Relationships
- **Most prominent visually**: The central object.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: Panels are symmetrical, with the central object separating them. The red cube and sphere are positioned below the text in each panel.

</details>

<p></p>



UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.