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

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_010412_20251211_010412.md)

### Overview
This image displays three hexagonal icons arranged horizontally against a grid background. Each icon contains a distinct symbol and color scheme.

### Key Elements
1. **Left Icon**
   - **Visual description**: A red hexagon with a black border.
   - **Location**: Leftmost position.
   - **Contents**: Contains a black exclamation mark (!).
   - **Visual styling**: Solid red fill, black outline, and a white inner border.

2. **Middle Icon**
   - **Visual description**: A yellow triangle with a black border.
   - **Location**: Centered between the first and third icons.
   - **Contents**: Contains a black exclamation mark (!).
   - **Visual styling**: Solid yellow fill, black outline, and a white inner border.

3. **Right Icon**
   - **Visual description**: A hexagon with a gradient fill transitioning from green to pink, with a black border.
   - **Location**: Rightmost position.
   - **Contents**: Contains a black question mark (?).
   - **Visual styling**: Gradient fill from green to pink, black outline, and a white inner border.

### Visual Flow / Relationships
The icons are evenly spaced horizontally across the grid. The exclamation mark and question mark symbols are clearly distinguishable within their respective shapes. There are no connecting lines or arrows, indicating that the icons are independent elements.

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

[All image details and metadata](../../../../images/output/img_20251211_010511_20251211_010511.md)

### Overview
The image depicts a 3D-rendered scene featuring a brick wall with a window and a white, curved object resembling a lampshade or light fixture. The floor is tiled with large, light gray tiles.

### Key Elements
- **Brick Wall**: Located on the left side of the image, constructed from red bricks arranged in a staggered pattern. The wall has a rectangular window with a dark brown frame. The window appears to be partially open, allowing light to enter.
- **Window**: Positioned centrally within the brick wall. It has a grid-like pattern inside, suggesting glass panes.
- **White Object**: On the right side of the image, there is a white, curved object that resembles a lampshade or light fixture. It has a smooth, glossy surface and is positioned on the floor.
- **Floor**: The entire scene is set on a tiled floor with large, light gray tiles. The tiles have a subtle texture and are bordered by darker grout lines.

### Visual Flow / Relationships
The most prominent visual element is the brick wall with the window. The white object on the right acts as a secondary focal point. There are no arrows or lines connecting the elements, but the arrangement suggests a simple, static scene without any implied interaction or movement.

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

[All image details and metadata](../../../../images/output/img_20251211_010610_20251211_010610.md)

### Overview
The image displays a collection of colorful, geometric shapes arranged on a tiled floor. The shapes appear to be crystals or gemstones, with varying sizes and orientations. There are also small spherical objects with orange caps placed near the crystals.

### Key Elements
- **Purple Crystals**: Located on the left side, these crystals are large and have a faceted, crystalline structure. They are purple in color.
- **Green Crystals**: Positioned in the center, these crystals are smaller than the purple ones and also have a faceted structure. They are green in color.
- **Red Crystals**: Situated on the right side, these crystals are similar in shape to the green ones but larger and red in color.
- **Small Spheres**: There are three small spheres with orange caps located near the crystals. One is blue, one is green, and one is red, corresponding to the colors of the crystals nearby.
- **White Sphere**: A white, faceted sphere is positioned towards the back right of the image.

### Visual Flow / Relationships
The arrangement of the crystals and spheres creates a symmetrical layout across the image. The crystals are grouped together in clusters, while the spheres are placed individually near the crystals. The overall composition suggests a display or arrangement of gemstones.

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

[All image details and metadata](../../../../images/output/img_20251211_010714_20251211_010714.md)

### Overview
The image depicts a vibrant outdoor scene featuring ancient stone ruins partially overgrown with lush greenery. The central focus is on two large, weathered stone pillars that form part of the ruins. A small, blue, spherical object resembling a potion bottle is placed near one of the pillars. The surrounding area is filled with dense grass, wildflowers, and scattered rocks, creating a serene and natural atmosphere. In the background, more trees and a clear sky with a few clouds are visible.

### Key Elements
- **Stone Pillars**: Two large, gray stone pillars with visible cracks and wear, situated centrally. They are part of an ancient ruin structure.
- **Blue Potion Bottle**: A small, blue, spherical object with a cork stopper, located near the right pillar. It has a glossy finish.
- **Green Grass and Wildflowers**: Dense patches of green grass cover the ground, interspersed with white daisies and other small flowers.
- **Background Trees**: Several trees with green leaves are visible in the distance, adding depth to the scene.
- **Sky**: A bright blue sky with light clouds occupies the upper portion of the image, with a geometric pattern overlaying the sky.

### Visual Flow / Relationships
The image is centered around the stone pillars, which draw the viewer's attention as the primary subject. The blue potion bottle adds a point of interest near the right pillar. The grass and wildflowers create a natural foreground, while the trees and sky provide a backdrop. There are no explicit arrows or lines connecting elements, but the arrangement suggests a natural progression from the foreground to the background.

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

[All image details and metadata](../../../../images/output/img_20251211_010808_20251211_010808.md)

### Overview
The image depicts a character standing in a field of tall grass and wildflowers. The character is viewed from behind, wearing a black hoodie and dark pants. The scene is vibrant with a mix of green and golden hues, suggesting a rural or natural setting.

### Key Elements
- **Character**: A figure with dark hair tied up, wearing a black hoodie and dark pants. The character is facing away from the viewer.
- **Grass**: Tall, golden grass dominates the foreground and middle ground, creating a textured landscape.
- **Wildflowers**: Scattered throughout the grass are various flowers, including yellow dandelions and purple blooms.
- **Background**: The background features more greenery and possibly some structures partially visible at the top right corner.

### Visual Flow / Relationships
The character is positioned centrally but slightly towards the bottom of the frame, drawing attention to the expansive field around them. The flowers and grass create a sense of depth, with the flowers appearing closer to the viewer than the grass. There are no arrows or lines connecting elements, and the reading order seems to follow a natural progression from the foreground to the background.

</details>

<p></p>



### Vertex Color PBR

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_010852_20251211_010852.md)

### Overview
The image depicts a simple scene with two swords standing upright against a clear blue sky backdrop. The foreground features a flat, sandy terrain with gentle hills. The overall composition is minimalistic, focusing on the two swords as the primary subjects.

### Key Elements
- **Left Sword**: A sword with a vibrant orange blade, a circular hilt with a red center and yellow dot, and a brown handle. The hilt has a star-like design with radiating lines.
- **Right Sword**: A simpler sword with a white blade and a dark green hilt. The hilt is plain without any additional designs.
- **Background**: A gradient blue sky that transitions from lighter at the horizon to darker at the top.
- **Foreground**: A flat, sandy landscape with light brown tones and small hills.

### Visual Flow / Relationships
The two swords are positioned symmetrically, one on the left and one on the right. The left sword is slightly taller than the right sword. There are no arrows, lines, or connectors, and the reading order is implied from left to right due to the placement of the swords.

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

[All image details and metadata](../../../../images/output/img_20251211_010939_20251211_010939.md)

### Overview
The image depicts a scene with numerous stacked rectangular structures resembling shipping containers or storage units scattered across a sandy terrain under a clear blue sky. The containers vary in height and color, with some appearing metallic and others painted in pastel shades. There are faint white lines in the sky suggesting a digital or virtual environment.

### Key Elements
- **Stacked Containers**: These are the primary elements in the image. They are rectangular, varying in height and width, and are arranged haphazardly. Some containers are metallic gray, while others are painted in pastel colors like pink and yellow.
- **Sky**: The background is a clear blue sky with no clouds, providing a stark contrast to the containers.
- **Ground**: The foreground consists of a flat, sandy surface that extends across the bottom of the image.

### Visual Flow / Relationships
The containers are distributed across the scene without any specific arrangement, creating a sense of randomness. There are no arrows or lines connecting the containers, and the reading order is not implied by the layout. The containers are the most prominent elements due to their size and number.

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

[All image details and metadata](../../../../images/output/img_20251211_011100_20251211_011100.md)

### Overview
The image displays a comparison between two versions of a user interface element, likely a dialog box or card, with one version labeled as "un-optimized." The interface includes text, icons, and a small 3D model of a sphere and cube. The background features a textured column resembling lava or fire.

### Key Elements
1. **Top Left Section**
   - **Visual description**: A rectangular card with rounded corners.
   - **Location**: Top-left area of the image.
   - **Contents**: Contains a title ("Text Title"), a paragraph of placeholder text ("Lorem ipsum dolor sit amet, consectetur adipiscing elit"), a smaller text saying "Hello," and a small icon labeled "Fog text fog."
   - **Visual styling**: White background, black text, pink "Hello" text, and a small red icon.

2. **Top Right Section**
   - **Visual description**: A similar rectangular card but with additional text indicating "un-optimized."
   - **Location**: Top-right area of the image.
   - **Contents**: Same as the top-left section plus the word "un-optimized" in red above the title.
   - **Visual styling**: Same as the top-left section but with the addition of red text for "un-optimized."

3. **Bottom Left Section**
   - **Visual description**: Another identical card to the top-left section.
   - **Location**: Bottom-left area of the image.
   - **Contents**: Identical to the top-left section.
   - **Visual styling**: Identical to the top-left section.

4. **Bottom Right Section**
   - **Visual description**: Another identical card to the top-right section.
   - **Location**: Bottom-right area of the image.
   - **Contents**: Identical to the top-right section.
   - **Visual styling**: Identical to the top-right section.

5. **Sphere and Cube Models**
   - **Visual description**: A small 3D model of a sphere and a cube.
   - **Location**: Next to the text in both the top-left and bottom-left sections.
   - **Contents**: The sphere is labeled "A round sphere," and the cube is a small red cube.
   - **Visual styling**: The sphere is dark purple, and the cube is red.

### Visual Flow / Relationships
- **Most prominent visually**: The cards with the "un-optimized" label.
- **Arrows/lines/connectors**: None.
- **Spatial relationships**: Cards are arranged in pairs, with the "un-optimized" label appearing only in the top-right and bottom-right sections. The cards are evenly spaced horizontally and vertically.

</details>

<p></p>



UI Optimized Materials are optimized to provide better quality UI elements (e.g. text, icon) when displayed. These textures are unlit and do not receive or cast lighting or shading.

Material names in FBX must end in “\_UIO”.

|  | **Naming** | **Channels** |
| --- | --- | --- |
| **Texture A** | MyMaterialName\_BA.png | BaseColor (sRGB) + Alpha (opacity) |

**Note:***MyMaterialName* is a placeholder for the name of the material the texture applies to.