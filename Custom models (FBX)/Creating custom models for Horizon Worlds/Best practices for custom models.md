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

[All image details and metadata](../../../../images/output/img_20251211_004431_20251211_004431.md)

### Overview
The image depicts a 3D wireframe model of a dumbbell against a solid background. The dumbbell consists of two identical weights connected by a central bar. The overall composition is simple and geometric, with clean lines and no additional elements or text.

### Key Elements
- **Visual description**: The dumbbell is represented as a white wireframe with edges highlighted in black.
- **Location**: The dumbbell is centered in the image.
- **Contents**: The weights are symmetrical, with a hexagonal shape at one end and a rectangular shape at the other. The central bar connects the two weights.
- **Visual styling**: The dumbbell is rendered in a monochromatic scheme with white wireframes and black edges.

### Visual Flow / Relationships
- **Most prominent visually**: The dumbbell itself is the focal point of the image.
- **Spatial relationships**: The weights are positioned symmetrically around the central bar, creating a balanced and symmetrical layout.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_004523_20251211_004523.md)

### Overview
The image depicts a 3D-rendered dumbbell composed of four cubes arranged symmetrically around a central black rod. The overall composition is simple and geometric.

### Key Elements
- **Visual description**: The dumbbell consists of four white cubes connected by a central black rod.
- **Location**: The cubes are positioned at the ends of the rod, with one cube at the center of the rod.
- **Contents**: The cubes are solid white with a slight gradient, giving them a slightly reflective appearance.
- **Visual styling**: The cubes have soft edges and subtle lighting, suggesting a smooth material. The rod connecting the cubes is matte black.

### Visual Flow / Relationships
- **Most prominent visually**: The dumbbell shape is the focal point of the image.
- **Spatial relationships**: The cubes are evenly spaced around the rod, creating a balanced and symmetrical arrangement. There are no arrows or lines indicating a specific reading order.

</details>

<p></p>



## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_004623_20251211_004623.md)

### Overview
The image depicts a 3D-rendered scene featuring a desk lamp and a pair of headphones placed on a flat surface. The lamp is illuminated, and its dimensions are marked with measurements. The headphones are positioned next to the lamp, also with measurements indicated.

### Key Elements
- **Desk Lamp**: 
  - **Visual description**: A classic desk lamp with a green shade and a gold-colored base and arm.
  - **Location**: On the right side of the image.
  - **Contents**: The lamp is lit, showing a bright light source.
  - **Visual styling**: The lamp has a glossy finish, with the shade reflecting light. The base and arm are metallic and have a polished look.
- **Headphones**: 
  - **Visual description**: A pair of over-ear headphones with orange ear cups and black ear cushions.
  - **Location**: On the left side of the image, slightly below the lamp.
  - **Contents**: The headphones are laid flat, with the ear cups facing upwards.
  - **Visual styling**: The headphones have a matte finish, contrasting with the shiny lamp.
- **Measurements**: 
  - **Lamp**: 45 cm tall, 36 cm wide, and 21 cm deep.
  - **Headphones**: 20 cm long.

### Visual Flow / Relationships
- **Most prominent visually**: The illuminated lamp.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The lamp is larger than the headphones, and both objects are clearly separated in the image.

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

[All image details and metadata](../../../../images/output/img_20251211_004722_20251211_004722.md)

### Overview
The image displays a 3D model of a wooden structure resembling a small cart or rack, viewed from a slightly elevated angle. The model is set against a plain gray background with a checkered floor beneath it. The bottom left corner contains technical information about the model's geometry and materials.

### Key Elements
- **Visual Description**: The structure is made up of wooden planks and beams arranged in a grid-like pattern. It has a rectangular shape with a handle on top.
- **Location**: The structure is centrally positioned in the image.
- **Contents**: 
    - The top layer consists of horizontal wooden planks forming a flat surface.
    - Below that, there are vertical wooden beams creating a frame.
    - The lower part features a patterned fabric or mat with a blue and white design.
- **Visual Styling**: The wood is rendered with a light brown color, and the fabric has a teal and white pattern. The background is a solid gray, and the floor is a black-and-white checkered pattern.

### Visual Flow / Relationships
- **Most Prominent Visually**: The central wooden structure is the focal point.
- **Spatial Relationships**: The structure is surrounded by a neutral gray background, and the checkered floor provides a contrast to the model.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_004838_20251211_004838.md)

### Overview
The image displays a collection of wooden furniture and building components arranged on a grid-like surface. The objects appear to be part of a virtual environment, possibly a 3D modeling or design software interface. The scene includes various pieces of furniture such as tables, chairs, and benches, along with architectural elements like windows and doors.

### Key Elements
- **Wooden Benches**: Several wooden benches are scattered across the scene. They vary in design but share a similar material and color scheme.
- **Tables**: There are multiple tables, some with simple rectangular shapes and others with more complex designs, including a table with a slatted top.
- **Windows and Doors**: A variety of window frames and door frames are present, differing in shape and size.
- **Building Components**: Additional architectural elements like walls and structural supports are visible.
- **Grid Surface**: The objects rest on a light gray grid, suggesting a workspace for 3D modeling.
- **User Interface Elements**: At the bottom of the image, there are user interface elements indicating a virtual environment, including a phone interface with a clock and settings, a circular control pad, and a menu button.

### Visual Flow / Relationships
The objects are spread out across the grid, with no clear central focus. The arrangement seems random, likely for demonstration or selection purposes within the software. There are no arrows or lines connecting the elements, and the reading order is not implied.

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

[All image details and metadata](../../../../images/output/img_20251211_005001_20251211_005001.md)

### Overview
The image depicts a scene set in an ancient, partially ruined stone structure, possibly a temple or a large hall, situated outdoors under a twilight sky. The architecture features classical columns and remnants of walls, suggesting a historical or archaeological setting. The foreground includes a stone-paved area with scattered wooden barrels, a wheelbarrow, and a small wooden bench, adding to the rustic atmosphere. The background transitions into a natural landscape with rocks and sparse vegetation.

### Key Elements
- **Columns**: Large, weathered stone columns line the left side of the image, extending towards the back. They are evenly spaced and show signs of age and erosion.
- **Walls**: Stone walls form the backdrop, with some sections broken or missing, revealing the interior space.
- **Ground**: A stone-paved floor occupies the central and foreground areas, with visible cracks and wear.
- **Barrels**: Two wooden barrels are placed near the left side of the image, one leaning against a column.
- **Wheelbarrow**: A wooden wheelbarrow is positioned in the lower right corner, tilted slightly forward.
- **Bench**: A simple wooden bench is located on the left side, near the barrels.
- **Sky**: The sky is a gradient of pink and blue hues, indicating either sunrise or sunset.
- **Foreground**: Rocks and grass are visible in the background, blending into the horizon.

### Visual Flow / Relationships
The image is dominated by the vertical lines of the columns, which draw the eye towards the back of the structure. The wheelbarrow and bench in the foreground provide a sense of scale and human presence within the scene. The scattered barrels add to the narrative of abandonment or construction work. The transition from the man-made structure to the natural landscape in the background creates a contrast between human history and nature.

</details>

<p></p>

*High frequency detail.*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005115_20251211_005115.md)

### Overview
The image depicts a stone courtyard with classical architectural elements, likely part of an ancient or historical building. The scene includes columns, a stone bench, barrels, a wheelbarrow, and a partial view of a circular structure in the background. The setting appears to be outdoors under a cloudy sky.

### Key Elements
- **Columns**: Large, gray stone columns with fluted designs are evenly spaced along the left side of the courtyard. They are part of a larger structure that extends out of the frame.
- **Stone Bench**: A wooden bench with a worn surface is positioned near the left side of the image, partially in front of the columns.
- **Barrels**: Two wooden barrels are placed on the ground near the bench.
- **Wheelbarrow**: A wooden wheelbarrow with metal wheels is lying on its side in the foreground on the right side of the courtyard.
- **Circular Structure**: A partial view of a circular structure with a dark interior is visible on the far right side of the image.
- **Ground**: The courtyard floor is paved with large, irregularly shaped stones arranged in a grid pattern.
- **Background**: The background features a natural landscape with rocks and sparse vegetation under a cloudy sky.

### Visual Flow / Relationships
The most prominent visual elements are the columns and the stone bench, which draw attention to the left side of the image. The wheelbarrow in the foreground adds a sense of scale and suggests human activity. The circular structure in the background creates a focal point on the right side. The arrangement of elements follows a linear path from the left to the right, guiding the viewer's eye through the scene.

</details>

<p></p>

*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005230_20251211_005230.md)

### Overview
The image presents four different visual representations of a stone-paved surface, each labeled with a specific process or technique applied to it. The layout is arranged in a grid format, with each quadrant showcasing a distinct aspect of the model's development and rendering.

### Key Elements
1. **Hi-Res Model / Sculpt**
   - **Visual description**: A high-resolution model of a stone-paved surface.
   - **Location**: Top-left quadrant.
   - **Contents**: The surface is composed of numerous polygons, indicated by the white squares forming a grid-like pattern.
   - **Visual styling**: Gray background, white polygons, no additional elements.

2. **Low-Res Model**
   - **Visual description**: A low-resolution model of the same stone-paved surface.
   - **Location**: Top-center quadrant.
   - **Contents**: The surface is represented with fewer polygons, shown as a triangular mesh.
   - **Visual styling**: Gray background, black triangles forming a mesh pattern.

3. **Texture Baking**
   - **Visual description**: A rendered image showing the result of texture baking.
   - **Location**: Bottom-left quadrant.
   - **Contents**: The surface appears more detailed than the low-res model but less detailed than the hi-res model. It includes textures that simulate the look of stone with some wear and tear.
   - **Visual styling**: Black background, white and gray stones with some dark spots indicating wear.

4. **Silhouette + Texture**
   - **Visual description**: A rendered image combining a silhouette with textured detail.
   - **Location**: Bottom-right quadrant.
   - **Contents**: The surface is depicted with a clear silhouette of the stones against a light background, overlaid with detailed textures that enhance the realism of the stones.
   - **Visual styling**: Light background, white and gray stones with detailed textures.

### Visual Flow / Relationships
- **Most prominent visually**: The Hi-Res Model / Sculpt is the most detailed and complex, highlighting the highest level of polygon count.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: Each quadrant is distinct and clearly separated, with no overlapping or connecting elements.

</details>

<p></p>



## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005347_20251211_005347.md)

### Overview
This image depicts a 3D modeling software interface, specifically a UV editor window alongside a 3D view of a model. The UV editor window shows a texture map with various panels and elements, while the 3D view displays a wooden structure with intricate designs.

### Key Elements
- **UV Editor Window**:
  - **Visual description**: A grid-based UV mapping interface.
  - **Location**: Left side of the image.
  - **Contents**: Contains a texture map with multiple panels, some of which appear to be tiled or patterned. There are white lines indicating UV coordinates.
  - **Visual styling**: Dark background with light-colored panels, white lines for UV mapping, and a gray grid overlay.

- **3D View**:
  - **Visual description**: A 3D model of a wooden structure with a roof and decorative panels.
  - **Location**: Right side of the image.
  - **Contents**: Includes a roof with a red-tiled texture, a central pole, and two large arched panels with detailed wood grain patterns. There is also a smaller rectangular structure with green grid lines.
  - **Visual styling**: The model has a dark brown color scheme with lighter highlights on the wood grain. The green grid lines suggest a wireframe or selection mode.

- **Interface Elements**:
  - **Menu Bar**: Located at the top of the UV editor window.
  - **Tool Buttons**: Various buttons and options are present within the UV editor window, such as "Edit," "Create," "Select," etc.
  - **Options Panel**: On the right side of the UV editor window, showing settings like "Symmetry," "Selection Constraint," and "Transform Constraint."

### Visual Flow / Relationships
- **Most Prominent Element**: The UV editor window on the left.
- **Arrows/Connections**: No explicit arrows or connections are visible between the UV editor and the 3D view.
- **Spatial Relationships**: The UV editor window is positioned to the left of the 3D view, suggesting a relationship between the UV mapping and the final 3D model.

</details>

<p></p>



<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005439_20251211_005439.md)

### Overview
The image displays a collection of wooden furniture and structures arranged on a plain surface. The objects appear to be part of a set designed for a specific purpose, possibly related to traditional craftsmanship or a historical reenactment setting.

### Key Elements
- **Left Panel**: A small, rectangular structure resembling a miniature building facade with intricate carvings and a dark brown finish.
- **Central Structures**: Three large, open-frame structures with slanted roofs covered in fabric. These frames are made of dark wood and have a grid-like pattern on the upper surfaces.
- **Right Panel**: Two smaller, vertical wooden panels with decorative carvings, similar in design to the left panel but scaled down.
- **Below Central Structures**: A small, flat wooden object that could be a seat or a small table.
- **Below Right Panel**: A low, rectangular wooden bench with a simple design.
- **Foreground**: Several wooden planks and beams scattered around, suggesting materials used in constructing the larger pieces.

### Visual Flow / Relationships
The arrangement of the objects suggests a display or assembly process. The central structures are grouped together, while the smaller items are placed around them, possibly indicating their role as components or tools related to the larger structures.

</details>

<p></p>



## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005604_20251211_005604.md)

### Overview
The image displays a grid of 10 different 3D models, each presented in four variations labeled as Basecolor, Basecolor and Roughness, PBR without Normals, and PBR with Normals. The models include a door, a spaceship, a refrigerator, a briefcase, a train wagon, a desk lamp, and a trash can. Each model is shown in four different lighting conditions to demonstrate the effect of base color, roughness, normal mapping, and physically-based rendering (PBR).

### Key Elements
1. **Door**
   - **Visual description**: A dark door with yellow and black stripes.
   - **Location**: Top row, first column.
   - **Contents**: Text labels indicating "Basecolor," "Basecolor and Roughness," "PBR without Normals," and "PBR with Normals."
   - **Visual styling**: Dark gray background, white text for labels.

2. **Spaceship**
   - **Visual description**: A sleek, futuristic spaceship with yellow and black accents.
   - **Location**: Top row, second column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Dark gray background, white text for labels.

3. **Refrigerator**
   - **Visual description**: A metallic refrigerator with various stickers.
   - **Location**: Second row, first column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Light gray background, white text for labels.

4. **Briefcase**
   - **Visual description**: A brown leather briefcase with silver clasps.
   - **Location**: Second row, second column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Brown background, white text for labels.

5. **Train Wagon**
   - **Visual description**: A green and white train wagon with red and white markings.
   - **Location**: Third row, first column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Green background, white text for labels.

6. **Desk Lamp**
   - **Visual description**: A green desk lamp with a gold base.
   - **Location**: Fourth row, first column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Green background, white text for labels.

7. **Trash Can**
   - **Visual description**: A metallic trash can with a black interior and a clear lid.
   - **Location**: Fourth row, second column.
   - **Contents**: Same labels as the door.
   - **Visual styling**: Metallic gray background, white text for labels.

### Visual Flow / Relationships
- **Most prominent visually**: The variety of objects and their different renderings.
- **Arrows, lines, connectors, or implied reading order**: None.
- **Spatial relationships**: Each object is isolated and evenly spaced within its own column, with labels clearly placed beneath each set of images.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_005713_20251211_005713.md)

### Overview
The image displays a grid of four rows, each containing four 3D models of different objects rendered under various lighting conditions. The objects include a kettle, a flashlight, and a hanging emergency exit sign. Each row showcases the same object but with different rendering techniques labeled as Basecolor, Basecolor and Roughness, PBR without Normals, and PBR with Normals.

### Key Elements
1. **Kettle**
   - **Visual description**: A light blue kettle with a wooden handle.
   - **Location**: Top-left corner of the first row.
   - **Contents**: The kettle is shown in four different renderings.
   - **Visual styling**: The kettle has a smooth texture in the Basecolor and Basecolor and Roughness images, while the PBR without Normals and PBR with Normals images show more detailed textures and reflections.

2. **Flashlight**
   - **Visual description**: A cylindrical flashlight with a textured grip.
   - **Location**: Top-right corner of the second row.
   - **Contents**: The flashlight is displayed in four different renderings.
   - **Visual styling**: The flashlight has a metallic finish in the Basecolor and Basecolor and Roughness images, with more reflective and detailed textures in the PBR without Normals and PBR with Normals images.

3. **Emergency Exit Sign**
   - **Visual description**: A green rectangular sign with a white arrow pointing left and a silhouette of a person running.
   - **Location**: Bottom-left corner of the third row.
   - **Contents**: The sign is shown in four different renderings.
   - **Visual styling**: The sign has a matte finish in the Basecolor and Basecolor and Roughness images, with more reflective and detailed textures in the PBR without Normals and PBR with Normals images.

### Visual Flow / Relationships
- **Most prominent visually**: The objects are arranged in a grid format, making them easily distinguishable.
- **Arrows, lines, connectors, or implied reading order**: There are no arrows, lines, or connectors; the images are arranged in a clear, organized manner.
- **Spatial relationships**: Each object is placed in its own column, and the different renderings of each object are placed in their respective rows.

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

**Note:** See [**Materials Specifications**](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) section for channel packing.

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