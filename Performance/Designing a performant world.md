Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/unity-performance-designing-a-performant-world

# Designing a performant world

This document provides a guide for world creators to design a world that allows for the best possible performance. This document should be read by artists and designers before creating the look and layout of the world.

## Meshes

### Art style has tradeoffs

A modern art style will use much less vertices than a streamline moderne from 1933. This is not to say you can’t choose a curvy art style, however, if you choose one you may have to compromise in other areas, such as gameplay or avatar count.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/33b4e13d88d681c09570fa68216dc526821b079464e8703ad7bfadc97edb5d7a.md)

### Overview
The image depicts a modernist architectural building under a clear blue sky. The structure features clean lines, rounded edges, and a minimalist design. It has multiple levels with balconies and large windows, giving it a contemporary aesthetic.

### Key Elements
- **Building Structure**: A multi-level white building with rounded corners and a flat roof. The architecture includes balconies with railings and large glass windows.
- **Windows**: Multiple rectangular windows are distributed across the facade, some with black frames.
- **Balconies**: There are several balconies with metal railings, located at different levels of the building.
- **Chimney**: A chimney is visible on the upper part of the building.
- **Foreground**: The bottom of the image shows a grassy area with some greenery and a watermark that reads "decopix.com."

### Visual Flow / Relationships
The building is the central focus, with the foreground grass providing contrast. The balconies and windows create a sense of depth and symmetry. The clear blue sky enhances the brightness of the white building.

</details>

<p></p>



*Example of building style with an extreme amount of curves.*
*This kind of building will have a high vertex count.*

### Use Trimesh instead of SubD

Trimesh is the best solution for overall world performance as it provides more control over the geometry of your objects and the ability to use Cached GI to bake any static lighting. Determining the type of meshes used is a decision you should make early when creating the world. Trying to swap Trimesh into a SubD world would be a large undertaking.

### Do not mix Mesh types

Avoid mixing Trimesh and SubD because doing this will add an unwanted CPU performance penalty. This is because SubD forces an unwanted dynamic lighting calculation every frame.

### Merge meshes to reduce draw call count

For best performance, you will want to merge world meshes to reduce draw calls. Read the [GPU Best Practices](Performance%20best%20practices/GPU%20best%20practices.md) section before deciding which world meshes to merge. Please see the [Horizon World Creator: GPU Performance Best Practices](Performance%20best%20practices/GPU%20best%20practices.md) document for more information on merging meshes.

## Technical art choices

### Masked materials

We recommend modeling details rather than creating them using an alpha cutout texture and masked material for any larger objects that cause a lot of pixels to be drawn on screen.

See the example below. The green tree leaves take up a lot of pixels and should be modeled. The red flowers are too small to have a large effect and may be easier to create using masked materials.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/128aed599f8647a72d20eb80500d38110f6efca2eac63be1c8bd34b08005d7b2.md)

### Overview
The image depicts a simple, stylized drawing of a palm tree. It consists of a trunk, branches, and small red flowers at the bottom.

### Key Elements
- **Trunk**: A vertical black line forming the main body of the tree.
- **Branches**: Two green, irregular shapes extending from the top of the trunk, representing the palm fronds.
- **Flowers**: Three small red star-like shapes with white outlines, located at the base of the tree.

### Visual Flow / Relationships
The most prominent visual element is the trunk, which serves as the central axis. The branches extend outward symmetrically from the trunk. The flowers are positioned at the bottom, creating a balanced composition.

</details>

<p></p>



Decades ago, there was an art workflow for creating plants where the mesh is simple but a texture with an alpha mask combined with an alpha cutout shader is used to create the detailed shape of the leaves. At that time we were much more limited in bandwidth to process polygons. Screen resolutions are now higher than those times in the past, meaning there are many more pixels passing through the pixel shader.

Using this old workflow may actually hinder performance. This is because with an alpha cutout shader, it is impossible to know if a pixel will need to be drawn until the pixel shader is run. This breaks early depth test rejection and adds a performance penalty for every pixel drawn.

In the example below, the leaf was modeled using simple geometry and uses an alpha cutout texture and shader to create the detailed shape of the leaf. The areas in red still have to run the per pixel shader.

Every pixel on the rendered polygon has to run the shader first and determine if a pixel is to be discarded before the depth check can be run. This means all of the math of the shader will happen even for pixels that are covered by other objects.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/d1738565e718b79dae5b389062569803e6b33957495b5c5f248fcf0782997d7e.md)

### Overview
The image displays a geometric pattern composed of a hexagonal shape with a green leaf-like texture repeated across its faces. In the upper left corner, there is a smaller square containing the same green leaf texture labeled as "alpha cutout texture."

### Key Elements
1. **Hexagonal Shape**
   - **Visual description**: A red hexagon with black borders.
   - **Location**: Center of the image.
   - **Contents**: The hexagon is divided into six sections, each containing a green leaf texture.
   - **Visual styling**: Red fill, black borders, and a white background within the hexagon.

2. **Green Leaf Texture**
   - **Visual description**: A stylized green leaf with a jagged outline.
   - **Location**: Each face of the hexagon.
   - **Contents**: The green leaf texture is repeated identically across all six faces.
   - **Visual styling**: Green fill, no additional borders or shading.

3. **Alpha Cutout Texture**
   - **Visual description**: A smaller square containing the green leaf texture.
   - **Location**: Upper left corner of the image.
   - **Contents**: The green leaf texture is displayed against a white background.
   - **Visual styling**: Green fill, white background, black border.

### Visual Flow / Relationships
- **Most prominent visually**: The hexagonal shape with the green leaf texture.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The hexagon is centered, with the alpha cutout texture positioned to the upper left.

</details>

<p></p>



To avoid this performance penalty, it can make sense to model the details using actual geometry and an opaque shader for best performance and only on objects that take up a large amount of pixels on screen. We recommend keeping the mesh detail as low as possible when modeling and this can be enforced through an art style decision.

In the example below, the leaf details were modeled as part of the mesh. The texture and shader are opaque. If any portion of this leaf is covered by opaque objects, the pixels can be rejected early without processing the shader. There are no wasted pixels processed around the fringes.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/517c7440e6670bbb99f607c66b26976dd4b5c6d99696de2d1537b7ae50c3af18.md)

### Overview
The image displays two distinct visual representations of a leaf-like shape. One is a simple, flat texture representation labeled as "opaque texture," while the other is a more complex, three-dimensional model labeled as "Modeled details."

### Key Elements
1. **Opaque Texture (Top Left Corner):**
   - **Visual description:** A green rectangle divided into four smaller rectangles, each containing a red line pattern resembling veins.
   - **Location:** Top-left corner of the image.
   - **Contents:** The text "opaque texture" is written below the rectangle.
   - **Visual styling:** The rectangle has a solid green fill with no additional borders or shading. The red lines are thin and evenly spaced within each segment.

2. **Modeled Details (Center):**
   - **Visual description:** A green leaf shape with a central vein and multiple smaller veins branching out. The edges of the leaf are jagged, giving it a textured look.
   - **Location:** Center of the image.
   - **Contents:** The text "Modeled details" is written below the leaf.
   - **Visual styling:** The leaf is filled with a green color, and the central vein is marked with a red line. The edges of the leaf have a black outline, and the overall shape is slightly shaded to give a sense of depth.

### Visual Flow / Relationships
- **Most prominent visually:** The modeled details of the leaf are the most prominent due to their larger size and more intricate design.
- **Arrows, lines, connectors, or implied reading order:** There are no arrows or connectors; the image is static.
- **Spatial relationships:** The opaque texture is positioned to the top-left, while the modeled details occupy the center of the image. There is no overlap or adjacency between the two elements.

</details>

<p></p>



## World rendering limitations

Meta Horizon Worlds does not currently support occlusion culling to avoid drawing objects hidden behind other larger objects. This makes world layout, mesh merging, and visibility control the main tools available to us for keeping the number of vertices sent through the graphics pipeline as low as possible.

## Designing world layouts for performance

It is easy for a world to have its performance hindered by non-performant layouts. Designing from a “blue sky” perspective can be fun, but it may be detrimental to rendering times. This section will show you how to design your world layout for best performance.

### Avoid making large amounts of a world visible from one position

In this scenario the player can stand in one spot and the entire world is in view. This is something we absolutely want to avoid if possible. In this arrangement, every single object will pass through the render pipeline. Because everything is visible, view frustum culling simply does not happen.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/16118abcf2068ccb1e15595f460e3263f6e1227c816771341a061745eb06325f.md)

### Overview
The image is a geometric pattern featuring various shapes arranged within a larger geometric form. The overall composition includes a red hexagon as the outer boundary, with a green hexagon nested inside it. Within the green hexagon, there are multiple white shapes and smaller elements scattered throughout.

### Key Elements
- **Red Hexagon**: Located at the top and bottom edges of the image, forming the outer boundary.
- **Green Hexagon**: Positioned centrally, nested within the red hexagon.
- **White Shapes**: 
  - **Stars**: Multiple white stars are scattered across the green hexagon.
  - **Hexagons**: A large white hexagon is centered within the green hexagon.
  - **Irregular Shapes**: Several irregular white shapes are distributed around the central hexagon.
- **Small White Elements**: Tiny white shapes resembling small rocks or pebbles are located near the bottom of the green hexagon.

### Visual Flow / Relationships
- **Most Prominent Visually**: The red hexagon forms the outer frame, drawing attention to the green hexagon inside.
- **Arrows/Connectors**: None.
- **Spatial Relationships**: The white shapes and stars are dispersed randomly within the green hexagon, creating a sense of balance and randomness.

</details>

<p></p>



*Every object in the world is visible, using significant resources.*

### Add twists and turns

By adding twists and turns to your world, you can limit the amount of objects visible at once. This is because objects outside the view frustum will be culled out.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/1363d25cd394114cc34f7db5acde257f743641901fd04168e3ee529390c7690a.md)

### Overview
The image consists of two large geometric shapes divided into smaller sections, featuring various geometric shapes and symbols. The overall composition is vibrant and abstract.

### Key Elements
- **Visual description**: The image features two large triangles, one red and one green, divided into smaller sections.
- **Red Triangle**:
  - **Location**: Left side.
  - **Contents**: Contains white stars and a white pentagon.
  - **Visual styling**: Red background, black outlines for shapes.
- **Green Triangle**:
  - **Location**: Right side.
  - **Contents**: Contains white circles, stars, and pentagons.
  - **Visual styling**: Green background, black outlines for shapes.
- **Smaller Sections**:
  - **Red Triangle**:
    - Contains small white dots.
  - **Green Triangle**:
    - Contains white circles, stars, and pentagons.

### Visual Flow / Relationships
- **Most prominent visually**: The two large triangles.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The triangles are adjacent but do not connect directly. The smaller sections within each triangle are arranged in a scattered manner.

</details>

<p></p>



*With all objects unmerged, only some objects are visible while others*
*are frustum culled.*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/9826cf742c99f81397effe5b8d04435fa56d59c21470938f996c6a042e31a0ae.md)

### Overview
This image appears to be a geometric abstract design featuring various shapes and colors arranged in a seemingly random pattern. The overall composition includes a mix of solid and outlined shapes, with a strong contrast between the red and green areas.

### Key Elements
- **Visual description**: The image contains a variety of geometric shapes such as triangles, pentagons, and stars.
- **Location**: The shapes are scattered across the image, with some overlapping others.
- **Contents**: 
    - **Red area**: Solid red fills the majority of the right side of the image.
    - **Green area**: A large green triangle occupies the left side.
    - **White shapes**: These include stars, pentagons, and irregular polygons, some outlined in black.
- **Visual styling**: The shapes are outlined in black, creating a stark contrast against the colored backgrounds.

### Visual Flow / Relationships
- **Most prominent visually**: The red and green areas stand out due to their solid colors.
- **Arrows, lines, connectors**: There are no clear directional arrows or lines connecting the shapes.
- **Spatial relationships**: Shapes are placed randomly, with some shapes partially overlapping others.

</details>

<p></p>



*As you progress through the world, previously hidden objects appear*
*within the frustum and previously drawn objects are frustum culled.*

### Merging meshes

Each object when rendered will generate its own draw call which can be expensive. Merging meshes allows for a single draw call to render multiple objects and is a very common practice in Meta Horizon Worlds to increase performance.

It is important to merge meshes in such a way to take advantage of frustum culling which ensures that only objects the player is currently seeing are rendered. Please see the [Horizon World Creator: GPU Performance Best Practices](Performance%20best%20practices/GPU%20best%20practices.md) document for more information on merging meshes.

### Avoid creating overly large merged meshes

If you merge all objects in the world, then it will break view frustum culling. See the following image where all the objects have been merged into one mesh. All objects highlighted in green will render, despite the view frustum not touching many of them.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/2248c68d3c16131b3e34a4af150b5e651828491902b5682f4f858fad0b6a4856.md)

### Overview
The image consists of two main sections divided by a diagonal line, one red and one green. Each section contains various geometric shapes and symbols. The overall composition is abstract and playful.

### Key Elements
- **Red Section**:
  - **Visual description**: A large red area with a curved white outline.
  - **Location**: Top-left quadrant.
  - **Contents**: Contains small yellow star shapes and a larger yellow pentagon shape.
  - **Visual styling**: Red fills the area, stars and pentagon have black outlines and yellow fill.
  
- **Green Section**:
  - **Visual description**: A large green area with a curved white outline.
  - **Location**: Bottom-right quadrant.
  - **Contents**: Contains several yellow geometric shapes including pentagons, triangles, and a star.
  - **Visual styling**: Green fills the area, shapes have black outlines and yellow fill.

- **Diagonal Line**:
  - **Visual description**: A thick black line running diagonally across the image.
  - **Location**: Dividing the red and green sections.
  - **Contents**: None, just a solid black line.
  - **Visual styling**: Black, thick, and solid.

### Visual Flow / Relationships
- **Most prominent visually**: The red and green sections are equally prominent due to their large size and distinct colors.
- **Arrows, lines, connectors**: There are no arrows, lines, or connectors within the sections themselves.
- **Spatial relationships**: Shapes within each section are scattered randomly without any specific arrangement. The diagonal line acts as a clear boundary between the two sections.

</details>

<p></p>



*All mesh objects are grouped into one mesh causing frustum culling*
*to do nothing.*

### Create smaller localized clusters

See this next example where the objects have been merged into smaller localized clusters. The ones in Group A are drawn but the ones in Group B are not. By making use of typical views and the geometry of your world you can create groupings to maximize the impact of merging meshes on frustum culling.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/62832a76276c979f2be4d3de83c481aa68416207b48c1ba66ee9eaad28af0176.md)

### Overview
This image depicts a split-screen layout divided into two distinct sections, each labeled as "Group A" and "Group B". The left side is predominantly red, while the right side is green. Each group contains various geometric shapes and symbols, with some shapes overlapping across the groups.

### Key Elements
- **Left Section (Group B)**:
  - **Visual description**: A red polygonal area with rounded edges.
  - **Location**: Left side of the image.
  - **Contents**: Contains small white hexagons, a pink star, and a light pink pentagon.
  - **Visual styling**: Red background, white outlines, and varied sizes of shapes.

- **Right Section (Group A)**:
  - **Visual description**: A green polygonal area with rounded edges.
  - **Location**: Right side of the image.
  - **Contents**: Includes a white skull, a yellow star, a yellow pentagon, a yellow hexagon, and a light green pentagon.
  - **Visual styling**: Green background, white outlines, and varied sizes of shapes.

- **Shared Element**:
  - **Visual description**: A white curved line that encircles both Group A and Group B.
  - **Location**: Surrounding both sections.
  - **Contents**: The line itself.
  - **Visual styling**: White, thin, and continuous.

### Visual Flow / Relationships
- **Most prominent visually**: The white curved line that encircles both sections.
- **Arrows, lines, connectors**: None observed.
- **Spatial relationships**: Shapes within Group A are distinct from those in Group B, but the white curved line connects them visually.

</details>

<p></p>



*Group B is frustum culled but Group A is not.*

### Use verticality for more space with better frustum culling

By placing rooms on top of each other, you can add more space to a world while benefiting from improved view frustum culling. In the diagram below, green objects are in view while all the red objects in the room below or not. All the red objects are culled out and performance is improved.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/e247bba1006d8a9a81a7d019dcd2536f2b523533741432cd7dd09debc4e4ed22.md)

### Overview
This image depicts a simple diagram with geometric shapes and lines connecting them. The overall composition includes a rectangular frame with various shapes and lines within it, as well as a separate section below containing more geometric shapes.

### Key Elements
- **Rectangular Frame**: A large rectangle at the top contains smaller shapes and lines. It has a black outline and a white interior.
  - **Green Hexagon**: A green hexagon is located near the center of the rectangle.
  - **Small Green Hexagon**: A smaller green hexagon is positioned to the right of the larger one.
  - **Circle**: A small circle is situated above the green hexagons.
  - **Line**: A diagonal line connects the circle to the upper right corner of the rectangle.
  - **Ladder**: To the left of the rectangle, there is a ladder depicted with vertical rungs.
- **Lower Section**: Below the rectangle, there is another area containing geometric shapes.
  - **Red Triangle**: A red triangle is positioned on the left side.
  - **Red Pentagon**: A red pentagon is centrally located.
  - **Small Red Shape**: A small red shape resembling a star or a five-pointed figure is placed to the right of the pentagon.

### Visual Flow / Relationships
The most prominent visual element is the rectangular frame at the top. The green hexagons and the circle are connected by a diagonal line, suggesting a relationship between these elements. The lower section with the red shapes appears to be a separate area, possibly representing a different context or concept.

</details>

<p></p>



However, if the player looks down at an angle, all of the objects will still be drawn as they are all within the camera frustum. That is why you want to [set visibility](Designing%20a%20performant%20world.md#use-set-visibility-to-hide-objects) to hide objects in rooms that you cannot see.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/b2436bb743f3cc5d1cc7ab5644bc5d19ca2e264cc054668cc83db1bddd41ca09.md)

### Overview
This image depicts a simple diagram with geometric shapes and labeled elements. The diagram includes a staircase-like structure on the left side and various geometric shapes arranged within two rectangular areas.

### Key Elements
- **Staircase-like structure**: Located on the left side, resembling a staircase with vertical lines forming steps.
- **Rectangular area 1**: Positioned above the staircase, containing a circle with a star inside, a green hexagon, and another smaller green hexagon.
- **Rectangular area 2**: Below the staircase, containing a green triangle, a pentagon, and a small green hexagon.
- **Arrows**: Two arrows connect elements across the two rectangles, pointing from the staircase-like structure towards the shapes in the rectangles.

### Visual Flow / Relationships
The most prominent visual elements are the geometric shapes within the rectangles. Arrows indicate a connection or relationship between the staircase-like structure and the shapes in the rectangles. The shapes are arranged within their respective rectangles, and the arrows suggest a flow or interaction between them.

</details>

<p></p>



### Axis aligned bounding boxes

In reality, each group will be surrounded by a tight axis aligned bounding box (AABB). An AABB is a box with its shape lined up perfectly with the world X,Y and Z axes. The AABBs may overlap based on how you merge your mesh objects.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/4f7497f639ace3f3001b830882e61aef7ad31700df954101e5e3cdd1eed5909b.md)

### Overview
The image depicts a diagram divided into two sections labeled "Group A" and "Group B." Each group contains geometric shapes and a star-like figure. The overall layout suggests a categorization or classification of shapes.

### Key Elements
- **Group A**: Located in the upper right quadrant, enclosed in a blue rectangular border. Contains four shapes: two smaller squares and one larger square. The larger square is outlined in black with a white fill.
- **Group B**: Located in the lower left quadrant, enclosed in a green rectangular border. Contains five shapes: a star-like figure, a small diamond, and three pentagons. The star-like figure is outlined in black with a white fill.
- **Star-like figure**: Positioned centrally within Group B, surrounded by the other shapes.
- **Diamond shape**: A small, white-filled diamond located above the star-like figure in Group B.
- **Pentagons**: Three pentagons, each outlined in black, are positioned below the star-like figure in Group B.

### Visual Flow / Relationships
- **Most prominent visually**: The star-like figure in Group B.
- **Arrows/Connectors**: There are no arrows or connectors visible in the image.
- **Spatial relationships**: Shapes within each group are arranged loosely without a strict order. The star-like figure in Group B is the focal point, drawing attention due to its central placement and distinct shape compared to the other shapes.

</details>

<p></p>



*Two AABBs overlap due to mesh object grouping.*

If any AABB intersects with the view frustum, they will be drawn and go through the entire graphics pipeline. In the following example, all objects are drawn even though it looks like Group B should not be drawn. This is because the AABB for Group B intersects with the camera frustum.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/e7a8ebd4160f54e87b1de6bc01f3e5c0ffb3b8f7477281a1a7d39f0e2945c3f4.md)

### Overview
This image appears to be a diagram or layout showing two groups labeled as "Group A" and "Group B". The diagram includes various geometric shapes and lines connecting them.

### Key Elements
- **Group A**: Located in the upper right area of the image. Contains three green diamond shapes within a blue rectangular outline.
- **Group B**: Positioned in the lower left area of the image. Contains a large green star shape surrounded by smaller green pentagons within a green rectangular outline.
- **Connecting Line**: A black line extends diagonally across the image, connecting Group A and Group B.
- **Text Labels**: "Group A" and "Group B" are written in black text within their respective groups.

### Visual Flow / Relationships
- **Most Prominent Element**: The large green star in Group B.
- **Arrows/Connectors**: There is a small arrow near the bottom of the image pointing towards the connecting line.
- **Spatial Relationships**: The groups are clearly separated by color and outlined rectangles. The connecting line implies a relationship between the two groups.

</details>

<p></p>



*Looks like only Group A visible, but Group B is*
*rendered because AABB is within the frustum.*

## Use set visibility to hide objects

Long hallways are a design layout we have seen in some worlds. However, when at one side of a hallway and facing the other side, all objects are in the frustum. This is another version of the entire world visible all at once. However, there is something you can do to reduce the number of objects rendered. Use the [Entity API](https://horizon.meta.com/resources/scripting-api/core.entity.visible.md/?api_version=2.0.0) to set visibility on or off.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/e1383459b8a9ff268a73fe3bf2e9a2c34d04b650d7e4555451bc73cf033c46a6.md)

### Overview
This image depicts a geometric design with various shapes arranged within a larger green triangular shape. The background is divided into two main sections: a red triangle at the top and a green triangle at the bottom. The shapes are distributed across the green area, some overlapping others.

### Key Elements
- **Red Triangle**: Located at the top of the image, serving as the background for the green triangle below.
- **Green Triangle**: A large, solid green triangle occupies the lower portion of the image.
- **White Shapes**: Multiple white geometric shapes are scattered within the green triangle. These include:
  - **Hexagon**: A white hexagon located near the left side of the green triangle.
  - **Triangle**: A smaller white triangle situated near the center-left of the green triangle.
  - **Pentagon**: A white pentagon positioned centrally within the green triangle.
  - **Star**: Two white stars are present, one larger and one smaller, both located towards the bottom right of the green triangle.
  - **Irregular Shape**: An irregular white shape is placed near the bottom left of the green triangle.
- **Black Borders**: Thin black borders surround the white shapes, defining their boundaries.

### Visual Flow / Relationships
The white shapes are distributed across the green triangle without a clear hierarchical arrangement. There are no arrows or lines connecting the shapes, suggesting a random placement rather than a specific flow or relationship.

</details>

<p></p>



*Separate rooms but all objects are inside the frustum.*

Meta Horizon Worlds has the ability to set visibility on objects. You can design your world in a way that you can’t see the objects in the room you previously came from. As mentioned before, this can be done with [twists and turns](Designing%20a%20performant%20world.md#designing-world-layouts-for-performance) , but another method is to add doors that close behind you.

Using a trigger, you can determine the moment you can no longer see the previous room and set visibility off for those objects. That way, even if the user turns around, these objects will not go through the render pipeline. Similarly, you can avoid having objects visible that you can’t see yet because they are blocked. You can block the line of sight [vertically](Designing%20a%20performant%20world.md#technical-art-choices) by using elevators or shafts that go either up or down.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/c66e74618d5f485b24129e50eb3f5951300d69b1dc75c3da21f412e4643e989e.md)

### Overview
This image depicts a simple diagram illustrating the concept of visibility toggling between "On" and "Off." It uses geometric shapes and labels to represent the states.

### Key Elements
- **Top Panel ("Visibility On")**: Contains a green hexagon, a smaller green pentagon, and a larger green pentagon. The text "Visibility On" is written above them.
- **Bottom Panel ("Visibility Off")**: Contains a red hexagon and a red star with a small white star inside it. The text "Visibility Off" is written above the red star.
- **Door**: A yellow rectangle labeled "Door" is located between the two panels.
- **Red Star**: A red star with a small white star inside it is positioned near the bottom right of the "Visibility Off" panel.
- **Red Hexagon**: A red hexagon is located near the bottom left of the "Visibility Off" panel.
- **Line**: A diagonal line connects the top panel to the bottom panel, suggesting a transition or relationship between the two states.

### Visual Flow / Relationships
The most prominent visual elements are the two panels representing "Visibility On" and "Visibility Off." The diagonal line connecting the two suggests a transition or comparison between the two states. The door element is placed centrally between the two panels, possibly indicating a boundary or a point of interaction between the two states.

</details>

<p></p>



*Door blocks visibility to second room*

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../image_data/6c8be8d412fd0a1e2ce0178d7b7aa8fa892854e69052346539407e143e9a173d.md)

### Overview
This image is a floor plan or layout diagram showing a room with labeled areas and annotations indicating visibility conditions. The diagram includes shapes representing objects or areas within the room, with text annotations explaining visibility settings.

### Key Elements
- **Room Layout**: A rectangular room with walls marked by black lines forming a grid-like structure.
- **Green Pentagons**: These are placed within the room, likely representing objects or areas that are visible when "Visibility On."
- **Red Hexagon and Pentagon**: These are placed outside the room, likely representing objects or areas that are not visible ("Visibility Off").
- **Annotations**: Text labels such as "Visibility On" and "Visibility Off" are placed near the respective areas.
- **Arrows and Lines**: An orange arrow points from the green pentagons towards the red hexagon, indicating a line of sight issue.
- **Text Annotations**: "No line of sight to second room" is written above the orange arrow, explaining the visual relationship between the two areas.

### Visual Flow / Relationships
The most prominent visual elements are the green pentagons and the red hexagon. The orange arrow and accompanying text highlight the lack of visibility between the two areas. The spatial relationship is linear, with the green pentagons being visible and the red hexagon being invisible due to the obstruction indicated by the arrow.

</details>

<p></p>



*90 degree turn blocks line of sight to second room*

## Streaming content in worlds

Due to memory constraints, it is sometimes necessary to stream in parts of a world. Sometimes the world is large and spans a vast area, or sometimes the same part of the world is re-used for vastly different mini-games. There are some things to keep in mind when streaming your world to keep players feeling immersed.

### Hiding CPU spikes

Nothing reminds you that you are playing a VR game quite like experiencing a large CPU spike causing a drop in frame rate. Spikes can often occur when loading new parts of a world due to things like loading assets into memory, compiling shaders, or scripts initializing. As a world creator you can incorporate tactics into your design to hide the spikes.

### Create Transitions

The overall easiest way to hide the spikes is to create a moment where the player can’t see anything moving. The easiest way to do that is to fade to white or black, start the loading, then un-fade when the loading or at least the CPU spikes have likely stopped. Remember, if the player can look around and see any movement, they will see the spikes.

### Reducing CPU spikes

If you can’t hide the CPU spikes, they can be reduced  by controlling the amount of assets loading at once, trickling them in bit by bit.

#### Waiting room

The easiest way to do this is utilizing a waiting room with a progress display, that way there is not much limit to how slowly you can trickle. Ideally there is something interesting to do in the room while waiting. You can use the [SpawnController API](https://horizon.meta.com/resources/scripting-api/core.spawncontrollerbase.md/?api_version=2.0.0) to check “currentState” and see if the assets have completely loaded or not, but it does not provide a percentage complete.

If you want to show a countdown timer, it is necessary to fake it by using a stopwatch to see how long it takes to actually load the content. Keep in mind loading on Quest 3 may be faster than Quest 2, so you would want to time using Quest 2.

#### Twisting hallways

You can create a long hallway and load assets as you traverse it, ideally using some method to prevent backtracking such as adding a door. Make sure the hallway is long enough to load everything by the time the player reaches the end and consider making use of twists and turns to prolong the amount of time needed to traverse.

## Creating a world budget

Before beginning building a world it is important to determine key aspects which will impact the overall performance. As an example, multiplayer worlds will have greater limitations in terms of complexity as resources need to be conserved to account for the additional avatars.

Understanding what makes your world unique and the critical gameplay components will allow you to prioritize these aspects when it comes to making performance tradeoffs.

### Build a gameplay only MVP first

The gameplay of your world will impact the resources available for your world.  For instance, first person shooters often use a reticle that consumes considerable CPU time. This in turn will cut into your budget for rendering the environment and particle systems.

It is recommended to build your world as a gameplay only MVP first, avoiding detailed art and environmental effects in order to understand your base performance. Then you can see how much room you have left to layer in detailed graphics, particle effects, and other details.

### Capacity Settings

Meta Horizon Worlds has a built in way to view the complexity of your world. Check this to see where your current world may be using too many resources. See the [Capacity Settings](https://www.oculus.com/horizon-worlds/learn/tutorial/capacity-settings/) documentation on the Oculus website for info on how to see the capacity settings. See the [Creator capacity limits in Meta Horizon Worlds](../Save,%20optimize,%20and%20publish/Creator%20capacity%20limits.md) for how to interpret the various information presented on that screen.

### Consider avatar count

A world that supports 1 avatar and a world that supports 15 avatars have vastly different limitations. The world with 15 avatars may use up to 6 ms more per frame than the world with 1 avatar. This will eat into your world’s time budget (CPU and GPU). This means the more avatars your world supports the less detailed graphically your world will need to be to remain performant.

The [Performance Limits for a World](Performance%20limits%20for%20a%20World.md)

document will help you decide the parameters of your world budget. Even though the document says a more static world may be able to have 1 million polygons, it does not take into account the avatar count, world layout, or which meshes you merge which can impact this number dramatically.

## Spawning prefabs causes asset duplication

Some worlds spawn prefabs. For example, using gun prefabs to allow for many different skins for each gun. Spawning prefabs in Meta Horizon Worlds causes a new copy of each texture, material, and mesh to go into RAM for each object spawned.

This means if you have 16 players and they all use the same weapon with the same skin, there will be 16 copies of the same meshes, textures, and shaders they use in memory. This can add up, potentially causing your world to use too much RAM overall. This is not to say don’t do it, but more of a warning of what will happen if you do.

## Use the simplest materials possible

Choosing the simplest materials will yield the best performance. The [Materials Guidance and Reference for Custom Models](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) document has a list of materials to choose from. Generally, a material that samples less textures is more performant. Materials using vertex colors only or textures only will perform better than materials with advanced metalness calculations. The differences between materials becomes the most obvious on objects that either take up a large portion of the screen visually or have an extreme amount of vertices.

## Follow best practices

As you can see, there are many things that will use up the limited CPU and GPU time available to your world. Because of this, it is important to squeeze every ounce of performance from every feature of your world. To that end, you will want to read the [Horizon World Creator Performance Best Practices](../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Best%20practices%20for%20custom%20models.md) document which shows how to avoid all of those common performance issues we have found across many worlds that we have reviewed.