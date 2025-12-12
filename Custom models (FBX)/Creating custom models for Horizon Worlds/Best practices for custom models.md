Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/best-practices

# Best practices for custom models

## Performance information

Currently, custom model vertices increase the geometry complexity, but the limit might be tuned differently based on performance feedback. The amount of textures being used is currently not shown anywhere or capped. Visibility into this will come soon.

## Topology

Open edges are supported. Horizon doesn’t use double-sided shaders, so if you are creating objects with two sides, such as leaves, you will need to create polygons that face both directions.

### Modeling for vertex baked lighting

Horizon’s lighting solution (RTK) uses vertex colors to add lighting information to the scene. When modeling with this in mind, it becomes easy to visualize and control where light and shadow appear on the finished model once baked. The fidelity of the applied lighting is directly related to the density and placement of vertices.

It is important to plan your topology to support different lighting scenarios. Identify which parts are in shadow, and how that shadow transitions into light.

### Topology for GI artifact handling

| Topology creating GI artifacts | GI artifacts fixed with topology adjustment |
| --- | --- |
|  |  |
| Topology on custom models will sometimes produce artifacts when GI is calculated. This will cause extremely dark vertices when imported into Horizon. They will occur when a vertex is close to or snapped to another vertex or edge on a different contiguous mesh. | To remedy this when working with multiple contiguous meshes, place vertices toward the middle of intersecting faces. The image below shows an adjusted model, and no GI lighting artifacts. |

**Problem** The top example shows how vertices can define light and shadow:

* The Mesh on the top does not have enough vertices to define which areas are in light and which are affected by ambient occlusion.
* The cubes on the end lack the vertices in the middle of the faces to assign a shadow color to it.
* The center bar’s end vertices are inside the cubes, placing those in complete shadow. With no verts to interpolate into the light portion, the bar appears as if it is completely in shadow.

**Solution:** The meshes in the bottom example solves this problem by adding in a vertex in the center of the cube sides where it intersects the bar to define the shadow. It places support loops on the center bar to define which area is in the light.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/2d2002bd4ccbd98e53e3eb860db55d93c117b521b675885af9e1230f2e1122d1.md)

### Overview
The image displays a 3D wireframe model of a dumbbell against a solid background. The dumbbell consists of two identical weights connected by a central rod. The overall composition is simple and geometric.

### Key Elements
- **Visual description**: The dumbbell is composed of white wireframe lines forming the shape of two cube-like weights and a connecting rod.
- **Location**: The dumbbell is centered in the image.
- **Contents**: The weights are symmetrical, with each weight having a rectangular prism shape. The connecting rod is straight and connects the centers of the two weights.
- **Visual styling**: The lines are thin and white, creating a clean and minimalistic look.

### Visual Flow / Relationships
- **Most prominent visually**: The dumbbell as a whole.
- **Spatial relationships**: The weights are positioned symmetrically around the rod, with no additional elements or connections between them.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f55eda2a265518c016f236c6368622eae90cabee47ad7801f221e2904b5354ba.md)

### Overview
The image depicts a 3D-rendered scene featuring four cubes arranged around a central black rectangular prism. The cubes are light blue with white edges, and the background is a solid dark brown.

### Key Elements
- **Cubes**: There are four cubes, each with a light blue face and white edges. They are positioned at the corners of a larger cube-like structure formed by the arrangement of the cubes.
  - **Cube 1**: Located at the bottom right.
  - **Cube 2**: Positioned at the top left.
  - **Cube 3**: Situated at the top right.
  - **Cube 4**: Found at the bottom left.
- **Central Black Prism**: A black rectangular prism is centrally located, connecting the four cubes. It has a matte finish and is oriented horizontally.

### Visual Flow / Relationships
- **Most Prominent Element**: The central black prism.
- **Spatial Relationships**: The cubes are evenly spaced around the central prism, forming a symmetrical arrangement. The cubes connect to the prism via a blue cylindrical connector.

</details>

<p></p>



## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/41cca76ff505a7fb4f55a06150842e9946fde95dff90c1d70c5bf26f72ebd6c0.md)

### Overview
The image depicts a 3D-rendered scene featuring a desk lamp and a pair of headphones placed on a flat surface against a neutral gray background. The lamp is illuminated, and its dimensions are marked as 36 cm in height and 21 cm in width. The headphones are positioned to the left of the lamp and are marked with a dimension of 20 cm across.

### Key Elements
- **Desk Lamp**: 
  - **Visual description**: A classic desk lamp with a green shade, gold-colored base and arm, and a pull cord.
  - **Location**: Positioned on the right side of the image.
  - **Contents**: The lamp is lit, casting a glow that highlights the green shade.
  - **Visual styling**: The lamp has a metallic gold finish on the base and arm, with a glossy green shade. The pull cord is visible hanging down.
  
- **Headphones**: 
  - **Visual description**: Over-ear headphones with orange ear cups and black ear cushions.
  - **Location**: Positioned to the left of the lamp.
  - **Contents**: The headphones are laid flat, showing both ear cups and the connecting band.
  - **Visual styling**: The headphones have a matte finish with bright orange ear cups and black ear cushions.

- **Dimensions**: 
  - **Desk Lamp**: 36 cm height, 21 cm width.
  - **Headphones**: 20 cm width.

### Visual Flow / Relationships
- **Most prominent visually**: The illuminated desk lamp.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The lamp is to the right of the headphones, and both objects are clearly separated by space. The dimensions are marked with white lines extending from the objects.

</details>

<p></p>



## Pivots

When exporting a set of objects, we recommend setting their pivot correctly, centered at the bottom of each piece, or aligned in the same way that you would for a well-prepared game asset.

**Tip**: currently, pivots will all become centered in Horizon, but this is something we plan to change in the future, so setting up your pivots correctly now could make these assets more useful in the future.

See the [Fallout 4 Modular Level Design](https://youtu.be/QBAM27YbKZg?t=422) talk for pivots, standardizing, and more tips around this.

## Remixability

Consider breaking your asset into pieces if those pieces would be useful for remixing.  However, if you aren’t planning on remixing an asset, it’s better optimized as a single piece.

**Maya** - Prior to exporting from Maya, you should group your kit, then arrange it in a way that is convenient to see and access all of the items in your kit. We recommend that the history is deleted and the transform is frozen.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/93dbfd4959d36109c42b3d643e8cb47f9cd282d531fd0a64054dc9d5f64715dc.md)

### Overview
The image displays a 3D model of a wooden structure resembling a bed frame or a storage rack. The model is rendered with a checkered floor beneath it, indicating a virtual environment. The bottom left corner contains technical information about the model's geometry and materials.

### Key Elements
- **Visual Description**: The structure is composed of wooden planks and beams arranged in a grid-like pattern. It has a rectangular shape with a slanted top section that could represent a headboard or a backrest.
- **Location**: The structure is centrally placed against a plain gray background.
- **Contents**: The wooden planks are brown, and some are painted green, while others are left natural wood. There is a blue patterned fabric at the base, possibly representing bedding or a mattress.
- **Visual Styling**: The lighting is soft, casting subtle shadows on the checkered floor. The model has a matte finish, suggesting a non-reflective material.

### Visual Flow / Relationships
- **Most Prominent Visually**: The central wooden structure is the focal point.
- **Spatial Relationships**: The structure is positioned slightly off-center, with the checkered floor providing a contrast to the smooth gray background. There are no arrows or lines connecting elements, implying a static display.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/d60481d0fe3cabed70e48cf120048b6e9cdd1c29bdc5f08d40896ea2d8c0c8be.md)

### Overview
The image displays a collection of 3D models of wooden furniture and architectural elements arranged on a grid-like surface. The models appear to be part of a design or modeling software interface, as indicated by the floating controls and indicators at the bottom of the screen.

### Key Elements
- **Wooden Furniture Models**: 
  - Benches, tables, and chairs are scattered across the scene. They are made of wood and have a consistent brown color.
  - Some pieces are assembled, while others are disassembled into individual parts.
- **Architectural Elements**: 
  - Windows, doors, and other structural components are also present. These elements are simpler in design compared to the furniture.
- **Grid Surface**: 
  - The objects rest on a light gray grid, which suggests a workspace for 3D modeling.
- **Floating Controls**: 
  - At the bottom, there are circular controls with icons and text, likely for manipulating the objects in the scene.
- **Sphere and Phone Model**: 
  - A sphere with a patterned texture and a phone model are visible on the left side of the image. These might be additional elements being designed or referenced within the software.

### Visual Flow / Relationships
- **Most Prominent Element**: 
  - The wooden furniture models are the most prominent due to their quantity and variety.
- **Spatial Relationships**: 
  - The objects are spread out across the grid, suggesting a layout for organization or design planning.
  - The floating controls imply interactive manipulation of the models.

</details>

<p></p>



## UV padding

Because we use the lowest mip size for coloring the bounce lighting information, there is a possibility that closely-packed UVs with strong color differences could cause incorrect color bouncing. If you have UV islands with strong color differences, you should use extra UV padding between those islands.

Minimum padding you should use for **large color differences**:

* 512 textures use 8 pixels.
* 1024 textures use 16 pixels.
* 2048 textures use 32 pixels.

## Texture style

Because the Quest 2 screens are high resolution, you can get extremely close to object surfaces. This makes it challenging for textures with fine details to remain good-looking when you are very close to them or they are very large. We recommend creating textures with less high-frequency detail, a style which holds up well in VR.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f48da0a4ee84aad76e094b01cc87df1c2ac92b1db423724161d692aa82fa89c4.md)

### Overview
The image depicts a scene set in an ancient ruin, featuring stone columns and remnants of a structure. The environment includes scattered wooden barrels, a wheelbarrow, and a small stone pedestal. The sky above has a gradient of pink and blue hues, suggesting either dawn or dusk.

### Key Elements
- **Stone Columns**: Large, weathered columns dominate the left side and center of the image. They are light gray with darker grays and browns indicating wear and age.
- **Stone Structure**: A partially collapsed wall or structure is visible in the background, constructed from similar stone blocks as the columns.
- **Ground**: The ground is paved with large, irregularly shaped stones, some of which appear wet or reflective.
- **Wooden Barrels**: Two wooden barrels are placed near the left side of the image, leaning against the structure.
- **Wheelbarrow**: A wooden wheelbarrow lies on its side in the foreground on the right side of the image.
- **Stone Pedestal**: A small, square stone pedestal stands upright on the right side of the image.
- **Sky**: The sky occupies the upper portion of the image, transitioning from a soft pink near the horizon to a clear blue higher up.

### Visual Flow / Relationships
The most prominent visual elements are the stone columns and the scattered objects on the ground. The wheelbarrow and barrels are positioned towards the bottom right, while the columns extend upwards and to the left. The sky provides a backdrop that contrasts with the earthy tones of the ruins.

</details>

<p></p>

*High frequency detail.*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0f8a679d4e2b7ac6937f3441358cacd1bafaf0fabb7403e52e51bc551a090474.md)

### Overview
The image depicts a virtual scene resembling an ancient Roman or Greek-style courtyard. The setting includes stone columns, a paved ground, and various objects scattered around, suggesting a historical or archaeological site. The sky above is partly cloudy, indicating daytime.

### Key Elements
- **Columns**: Large, white, classical columns line the left side of the image. They are evenly spaced and appear weathered, with some showing signs of aging.
- **Ground**: The ground is paved with large, irregularly shaped stones arranged in a grid pattern.
- **Benches**: A wooden bench is positioned on the left side near the foreground.
- **Barrels**: Two wooden barrels are placed near the bench.
- **Wheelbarrow**: A wooden wheelbarrow lies on its side in the bottom right corner.
- **Watering Can**: A small watering can is visible in the background on the right side.
- **Sky**: The sky is light blue with scattered clouds, providing natural lighting to the scene.

### Visual Flow / Relationships
The most prominent visual element is the central pathway formed by the stone pavement. The columns create a sense of depth and perspective, drawing the viewer's eye towards the back of the scene. The scattered objects add interest and suggest human activity in this space.

</details>

<p></p>

*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/842f6dc6c7d33282a28fc3f8fe45642713a5aaeee7b988be7629ce9505aea209.md)

### Overview
This image presents four different views of a stone-paved surface at various stages of modeling and texturing. Each view is labeled with a description indicating the process or result being shown.

### Key Elements
1. **Hi-Res Model / Sculpt**
   - **Visual description**: A high-resolution model of a stone-paved surface.
   - **Location**: Leftmost panel.
   - **Contents**: The surface is highly detailed, showing individual stones and cracks.
   - **Visual styling**: Grayish tones, smooth texture, and intricate details.

2. **Low-Res Model**
   - **Visual description**: A low-resolution model of the same surface.
   - **Location**: Second panel from the left.
   - **Contents**: The surface is simplified into a triangular mesh with fewer polygons.
   - **Visual styling**: Light gray triangles forming the low-poly representation.

3. **Texture Baking**
   - **Visual description**: A close-up of the stone-paved surface after applying texture baking.
   - **Location**: Third panel from the left.
   - **Contents**: The surface now has more detail due to the baked textures, though less than the Hi-Res model.
   - **Visual styling**: Gray stones with some white highlights, showing improved detail over the low-res model.

4. **Silhouette + Texture**
   - **Visual description**: A final view combining the silhouette and textured details.
   - **Location**: Rightmost panel.
   - **Contents**: The surface is rendered with both the silhouette and detailed textures, showing a good alignment between the two.
   - **Visual styling**: Gray stones with white and light gray highlights, closely matching the Hi-Res model but with a simpler, more stylized look.

### Visual Flow / Relationships
- **Most prominent visually**: The Hi-Res Model / Sculpt is the most detailed and visually complex.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: Panels are arranged horizontally, with each representing a different stage of the modeling process.

</details>

<p></p>



## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bfb5b8f513b8f654bbecc3ce32a9969fa9c623d266b3515de4d0de49f131419f.md)

### Overview
This image depicts a 3D modeling software interface, specifically a UV editor window alongside a 3D view of a model. The UV editor window on the left displays a grid layout with various panels showing different textures and materials, while the right side shows a 3D model of a structure resembling a pavilion or gazebo.

### Key Elements
- **UV Editor Window (Left)**:
  - **Visual description**: A grid layout with multiple panels.
  - **Location**: Left side of the image.
  - **Contents**: Panels display different textures and materials, including wood patterns and geometric shapes.
  - **Visual styling**: Dark background with white grid lines and text, some panels have a light brown background with darker brown textures.
  
- **3D Model View (Right)**:
  - **Visual description**: A 3D model of a structure with a roof, supports, and a table.
  - **Location**: Right side of the image.
  - **Contents**: The model includes a canopy-like roof with a red and brown pattern, wooden supports, and a rectangular table with a similar patterned surface.
  - **Visual styling**: The model has a dark brown color scheme with green grid lines indicating UV mapping coordinates.

### Visual Flow / Relationships
- **Most prominent visually**: The UV editor window on the left.
- **Arrows/lines/connectors**: None explicitly shown.
- **Spatial relationships**: The UV editor window is adjacent to the 3D model view, with the UV editor providing material information that corresponds to the 3D model.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/065877fc9fb856df8f9c35c81fc3efe015e13b35410c4d06b111b02711c438b0.md)

### Overview
The image displays a collection of wooden furniture and structures arranged on a plain surface. The objects appear to be part of a set designed for a specific purpose, possibly related to crafting or market stalls, given the presence of looms and canopies.

### Key Elements
- **Large Loom (Top Left)**: A wooden frame with a blue and white patterned fabric stretched across it. It has a dark brown frame with lighter brown accents.
- **Canopy (Top Center and Right)**: Two identical canopies with red fabric tops and dark brown frames. They are positioned side by side.
- **Small Bench (Right Center)**: A simple wooden bench with a dark brown finish.
- **Decorative Panel (Right Center)**: A vertical wooden panel with intricate carvings, placed vertically next to the bench.
- **Small Chest (Far Right)**: A rectangular wooden chest with a dark brown finish.
- **Larger Chest (Far Left)**: A larger wooden chest with a darker finish and a small window-like opening at the front.
- **Wooden Planks (Bottom Left)**: Several pieces of wooden planks scattered on the ground, varying in length and width.
- **Small Bowl (Center Bottom)**: A small, dark brown bowl placed near the center bottom of the image.

### Visual Flow / Relationships
The objects are arranged loosely, with no clear hierarchical structure. The loom and canopies are grouped together on the left side, while the benches and chests are on the right. The wooden planks are scattered in the foreground, and the small bowl is placed centrally but slightly below the main group.

</details>

<p></p>



## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/dfb11bc6550702c1f6d2c9b41a50f6e6bf8d3729566df47d82367eb1ac8b38cb.md)

### Overview
The image displays a grid layout showcasing various 3D models rendered under different lighting conditions and material settings. The models include a spaceship, a refrigerator, a briefcase, a train car, a desk lamp, and a trash can. Each model has four variations shown side-by-side, labeled as Basecolor, Basecolor and Roughness, PBR without Normals, and PBR with Normals.

### Key Elements
1. **Spaceship**
   - **Visual description**: A sleek, futuristic spacecraft with angular wings and a central cockpit.
   - **Location**: Top row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the spaceship.
   - **Visual styling**: Dark gray with yellow accents, metallic sheen.

2. **Refrigerator**
   - **Visual description**: A standard white refrigerator with a freezer compartment on top.
   - **Location**: Second row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the refrigerator.
   - **Visual styling**: White with some reflective highlights.

3. **Briefcase**
   - **Visual description**: A brown leather briefcase with metal clasps.
   - **Location**: Third row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the briefcase.
   - **Visual styling**: Brown leather texture with metallic hardware.

4. **Train Car**
   - **Visual description**: A freight train car with a flatbed design, carrying a container.
   - **Location**: Fourth row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the train car.
   - **Visual styling**: Gray with red and white markings.

5. **Desk Lamp**
   - **Visual description**: A classic desk lamp with a green shade and a brass base.
   - **Location**: Fifth row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the desk lamp.
   - **Visual styling**: Green shade with brass accents.

6. **Trash Can**
   - **Visual description**: A simple cylindrical trash can with a lid.
   - **Location**: Sixth row, first column.
   - **Contents**: The label "Basecolor" is visible beneath the trash can.
   - **Visual styling**: Silver with a black interior.

### Visual Flow / Relationships
- **Most prominent visually**: The spaceship model due to its larger size and distinct shape.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: The models are arranged in a grid format, with each model having four variations displayed side-by-side. The labels are placed directly below each model.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c0f72fcc7a61c037d3a6a44c858dd78eaf3fc613c899bcae733e741cf42ae81d.md)

### Overview
The image displays a grid of three different objects rendered under various lighting conditions and material settings. Each object is shown four times, demonstrating the effect of different rendering parameters on the final appearance. The objects include a kettle, a flashlight, and a hanging sign.

### Key Elements
1. **Kettle**
   - **Visual description**: A turquoise-colored kettle with a wooden handle.
   - **Location**: Top row, first column.
   - **Contents**: Labelled as "Basecolor," "Basecolor and Roughness," "PBR without Normals," and "PBR with Normals."
   - **Visual styling**: The kettle has a glossy finish in the "Basecolor" and "Basecolor and Roughness" images, while the "PBR without Normals" and "PBR with Normals" images show more detailed reflections and highlights.

2. **Flashlight**
   - **Visual description**: A silver flashlight with a black grip.
   - **Location**: Top row, second column.
   - **Contents**: Same labels as the kettle.
   - **Visual styling**: The flashlight has a metallic sheen in the "Basecolor" and "Basecolor and Roughness" images, with more pronounced highlights and reflections in the "PBR without Normals" and "PBR with Normals" images.

3. **Hanging Sign**
   - **Visual description**: A green emergency exit sign with a white arrow pointing left.
   - **Location**: Bottom row, first column.
   - **Contents**: Same labels as the kettle and flashlight.
   - **Visual styling**: The sign has a matte finish in the "Basecolor" and "Basecolor and Roughness" images, with more defined edges and lighting effects in the "PBR without Normals" and "PBR with Normals" images.

### Visual Flow / Relationships
- **Most prominent visually**: The objects are arranged in a grid format, making them equally prominent.
- **Arrows, lines, connectors, or implied reading order**: There are no arrows, lines, or connectors; the layout is purely visual and symmetrical.
- **Spatial relationships**: Objects are evenly spaced within rows and columns, with clear labels indicating the different rendering parameters being demonstrated.

</details>

<p></p>



## World budgets

### Runtime world budgets

It’s important to consider the world limits when designing assets. This will enable you to effectively allocate the total number of assets required for creating your world, and develop a comprehensive asset plan.  These limits are view dependent however there is no occlusion culling meaning the world limit can often approach view limit.

|  | **Approximate limits for a gameplay heavy world** | **Maximums, when you have a more static world** |
| --- | --- | --- |
| **Total Vertices** | 600,000 | 1 Million |
| **Draw Calls** | 150 | 250 |

### Travel time world budgets

These limits are designed to keep world travel times in check, especially for visitors with lower internet speeds.

|  | **Download time** | **Download time** |
| --- | --- | --- |
| **Unique Vertices** | 200k | 400k |
| **Texture Megapixels** | 40 megapixels | 80 megapixels |

1 megapixel = 1024 x 1024. (example 4 Megapixels = 2048 x 2048)

More megapixels means more time to load the textures, which may impact world travel times or take the world longer to look fully loaded. 40 Megapixels = 25 MB (ASTC 6x6).

### Generic asset recommendation

|  | **Polygons** | **Vertices** | **Texture Size** |
| --- | --- | --- | --- |
| **5 m****3****Object** | 2000 | 1000 | 2048 x 2048 |
| **1 m****3****Object** | 1000 | 500 | 512 x 512 |

This is a very general recommendation, and artists should adjust as needed.

## Model specification

A 3D model is made up of Mesh + Textures + Materials.

**Note:** See [**Materials Specifications**](Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) section for channel packing.

### Mesh recommendations

|  | **Recommended** |
| --- | --- |
| **Formats** | FBX |
| **Naming** | **Avoid** using these characters in your node & file names - .,, /, \*, $, & |
| **Objects** | Multiple meshes per FBX file supported |
| **Polygon Count** | 12K recommended maximum, 400K maximum vertices. |
| **Hierarchy** | Flattened in Horizon\* |
| **Pivot Points** | Centered on import\* |
| **Animation** | Importing animation is not currently supported |
| **UV Channel** | Only UV channel 0 is used to map textures onto the mesh |
| **Normals** | Vertex normals are imported |

\*subject to change in the future.

### Texture recommendations

PNG - 8 -bit per channel

See Material spec below for channel packing.

Horizon will support any power of 2 textures up to 4096 x 4096