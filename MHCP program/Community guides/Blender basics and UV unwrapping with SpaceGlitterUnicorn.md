Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/blender-basics-and-uv-unwrapping

# Blender basics and UV unwrapping with SpaceGlitterUnicorn

**Author**: SpaceGlitterUnicorn
**Date**: August 2024

## Introduction

This tutorial covers fundamental concepts in Blender, including 3D modeling, essential hotkeys, and UV unwrapping techniques. Following the steps outlined, you will learn how to create a simple book, table, and lamp, applying foundational skills in modeling and texturing.

🎥 Short videos are included throughout the written instructions to help you follow along.

**Creator Skill Level**
Beginner

**Recommended Background Knowledge**
Basic knowledge of the blender interface is good, but not required.

**Description**

This tutorial is focused on creating three simple objects: a book, a side table, and a lamp. Each object will be modeled step-by-step, followed by UV unwrapping to prepare the models for texturing. You will learn the essentials of Blender, including navigation, key hotkeys, and 3D modeling techniques. Throughout the tutorial, you will learn how to mark seams, unwrap meshes, and prepare for applying materials to the models. By the end, you will gain a solid understanding of basic 3D modeling and UV unwrapping in Blender, getting you started on future projects.

**Learning Objectives**

By reading and reviewing this written guide you will be able to:

* Understand Blender’s Interface:
  + Navigate the Blender workspace, including the 3D Viewport, Outliner, and Properties Panel.
* Master Basic 3D Navigation and Hotkeys:
  + Use essential Blender hotkeys (G, S, R, E) for moving, scaling, rotating, and extruding objects.
* Create Simple 3D Models:
  + Model a book, side table, and lamp using basic geometric shapes like cubes, cylinders, and cones.
* Apply UV Unwrapping Techniques:
  + Mark seams and unwrap 3D models for texturing purposes.
* Understand the Importance of UV Maps
  + Learn how UV maps work and why UV unwrapping is crucial for texturing in 3D modeling.

## Learning the Blender Interface

In this section, you will become more familiar with the basic interface, which includes:

* 3D Viewport
  + The 3D viewport in Blender is a 2D rectangle that allows users to visualize and interact with a 3D scene. It’s the main view that users see when they start Blender and is used for a variety of purposes, including modeling, animation, and texture painting.
* Outliner
  + The Outliner is the list of items in your blender file, such as mesh items, lights, materials, etc. This is where you will see your scene collections.
* Properties Panel
  + The Properties Panel in Blender is a user interface element that displays and allows editing of active data, such as the scene and object. The panel has several categories, or tabs, that group properties and settings by data type.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/bf270a3440a303f9f9394f6ea970219737cc7a2f84f0304ff94fb8462214e180.md)

### Overview
This image depicts a user interface of Blender 4.2.1 LTS, a 3D modeling software. The screen is divided into several panels, each serving a specific function within the software. The main focus is on the 3D Viewport, which displays a 3D scene with a cube and a pyramid. Surrounding the viewport are various panels for managing objects, transformations, and properties.

### Key Elements
- **3D Viewport**: Located centrally, displaying a 3D scene with a cube and a pyramid. The cube is highlighted with a red bounding box, indicating selection. The axes (red, green, blue) are visible, showing the orientation of the cube.
- **Properties Panel**: Positioned at the bottom right, labeled as "Properties Panel." This panel contains numerical data related to the selected object, such as location, rotation, and scale.
- **Outliner Panel**: Situated on the far right, labeled as "Outliner." This panel lists objects in the scene, including a "Cube" and a "Light," along with their respective icons and checkboxes.
- **Menu Bar**: At the top, containing options like File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Rendering, Compositing, and Scene. There are also tool icons and dropdown menus for quick access to functions.
- **Tool Panel**: On the left side, labeled as "Object Mode." It contains various tools for manipulating objects, such as select, add, and object modes.
- **Status Bar**: At the bottom, displaying playback controls, keyframe settings, view options, and timeline information.

### Visual Flow / Relationships
The most prominent visual element is the 3D Viewport, as it occupies the largest area of the screen and serves as the primary workspace. The Properties Panel and Outliner Panel provide supplementary information and management tools. The menu bar offers a wide range of functions accessible through dropdown menus and icons. The Tool Panel offers quick access to object manipulation tools. The status bar at the bottom provides playback and timeline controls.

</details>

<p></p>



**Mentor’s Note:**
The best thing to do is to get familiar with these main areas. Explore and toggle all of the functions and see what they do!

Understanding basic Blender navigation and hotkeys is crucial for efficient workflow, allowing you to quickly manipulate objects, change camera angles, and access tools without relying solely on the mouse, significantly speeding up your 3D modeling, animation, and editing process; essentially, memorizing these key commands lets you work intuitively and seamlessly within the Blender interface, maximizing your creative productivity.

The quick examples are:

**Basic Navigation:**

* **Zoom**: Scroll wheel.
* **Pan**: Shift + middle mouse button.
* **Orbit**: Middle mouse button.

**Hotkeys Essentials:** Quick access to frequently used functions.

* **Move**: G
* **Rotate**: R
* **Scale**: S
* **Extrude**: E
* **Duplicate**: Shift + D
* **Undo**: Ctrl + Z

Here’s a [PDF with a full list of Basic Navigation and Hotkey Essentials](Basic%20Hotkey%20Guide%20to%20the%20Blenderverse.md).

**Basic Navigation and Hotkeys video walkthrough:**

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/468092420_387742254328197_9061162084494682747_n.mp4?_nc_cat=108&ccb=1-7&_nc_sid=6500a6&_nc_ohc=j5Q0IFNYABkQ7kNvwEnq2Iv&_nc_oc=AdlBmDA9SCMTrxaq2qOEcLR2E8oeKNBek74uzsSDEfj3wqHYmcTb1vOYFNV2_Mfuw2kMYjA8BXfgNOelzyCegImZ&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=UKaktz0OJdOxCl80jhzY-g&oh=00_Afndr3uPjOguFVUYkL1QcrxnizPHDyo22B-OdTXLiwCdPQ&oe=69410F8B)

## Asset 1: Create a Book

Follow the steps below to create your first 3D asset:

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f1fbafa8f69754906e92c233547701858aca3670c4e8d302b1841159db64dd13.md)

### Overview
The image depicts a stylized illustration of a closed book with a colorful abstract cover design. The book is positioned centrally against a plain white background.

### Key Elements
- **Visual description**: The book has a rectangular shape with rounded edges.
- **Location**: The book is centered in the image.
- **Contents**: The cover features a vibrant, abstract pattern composed of various geometric shapes and colors such as red, blue, yellow, and green.
- **Visual styling**: The book has a simple, flat design with no gradients or shading. The spine of the book is dark blue, contrasting with the lighter blue of the cover.

### Visual Flow / Relationships
- **Most prominent visually**: The book itself is the focal point of the image.
- **Spatial relationships**: There are no arrows, lines, or connectors. The image is static with no implied reading order.

</details>

<p></p>



**Mentor’s Note:** Always use references when modeling. I have included my reference image of a book above.

### Book Asset Creation: A Step-by-Step Guide

- **Add a Cube**: Press **Shift + A** and select **Cube**.
- **Scale the Cube**: Use the **S** key to shape the cube into a rectangular book shape. Utilizing the **X** and **Y** axis to guide your scaling
- **Extruding:** In face select mode, Select where the book covers would be; front and back. Then select the spine. Press **E** to extrude.
- **Inset:** Staying in face select mode, now you will select where the pages will go. Press **I** to inset.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/c50fd66b07a5430dd5e2cbb22e33d96a27cbd7391242ea99c06a14405c6f3120.md)

### Overview
The image depicts a 3D model of a rectangular object resembling a drawer or cabinet. The model has a light gray exterior and a beige interior. The perspective is slightly angled, showing the front and one side of the object.

### Key Elements
- **Visual description**: The object is a rectangular prism with a flat top and bottom.
- **Location**: The object is centered in the image.
- **Contents**: 
    - **Exterior**: Light gray, smooth surface.
    - **Interior**: Beige, also smooth but with a slightly different texture compared to the exterior.
- **Visual styling**: The edges are sharp and well-defined, suggesting a clean, modern design. There are no additional elements or decorations on the object.

### Visual Flow / Relationships
- **Most prominent visually**: The rectangular shape of the object.
- **Spatial relationships**: The object is isolated against a neutral background with grid lines, indicating a 3D modeling environment. There are no arrows or lines connecting elements.

</details>

<p></p>



These guidelines will help you Model your book.

**Create a Book video walkthrough:**

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/467818278_543494048592517_1147038650273540791_n.mp4?_nc_cat=102&ccb=1-7&_nc_sid=6500a6&_nc_ohc=Ygibu1HdfQoQ7kNvwH-OC0D&_nc_oc=Adk-FLUP6p8KNhxVFwG5IvBIixGDsW6ZMx6RR-U4dQsDmWL408Bf99WQDDQi_cdHjVL_o1TonFboAyCztyBW2Mxj&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=UKaktz0OJdOxCl80jhzY-g&oh=00_AfkyVCVxtEsXp7Vi_DZ4TiLWaDis3unshcMgfu_7JWUBjg&oe=694116D0)

### Asset 2: Make That Table

This section will explore a more advanced technique to elevate your project.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/32b55aa49ddc0023a696b8431cb148d0e02c3cedf98dbd2a1b4386f663f2fbcb.md)

### Overview
This image depicts a stylized, colorful table with a drawer. The table has a geometric design with various shapes and colors, giving it a modern and artistic look.

### Key Elements
- **Table Base**: Located at the bottom, the base of the table features a rectangular shape with rounded edges. It has a mix of orange, blue, and green colors, with a pattern that includes squares and rectangles.
- **Table Top**: Positioned above the base, the tabletop is divided into several geometric shapes, including triangles and rectangles, in shades of green, yellow, and orange.
- **Drawer**: Situated on the left side of the table, the drawer has a simple handle and is colored in a gradient of blue and purple tones.
- **Legs**: Four legs support the table, each with a unique color and design. They are thin and elongated, with a mix of orange, blue, and green hues.

### Visual Flow / Relationships
The most prominent visual element is the table itself, as it occupies the majority of the space. The drawer is secondary but still noticeable due to its placement on the left side. The legs are distributed evenly around the base, providing structural balance. There are no arrows or lines connecting elements, so the visual flow is primarily spatial arrangement.

</details>

<p></p>



**Mentor’s Note:** Save a lot. Save Often. Make it a habit to constantly save your progress. If you like what you made, **Press Save**!

### Table Asset Creation: A Step-by-Step Guide

- **Start with a cube**: Press **Shift + A** and choose **Mesh > Cube**.
- **Scaling and Shaping**: Use the **S** key to resize the cube to the desired table size.
- **Extruding:** Pressing **TAB** to go into edit mode, choose the face select tool, and select the top face. Press **E** to extrude by the\*\* Z\*\* axis. That will be your tabletop. You will use these same steps to create a drawer in the front face, Including\*\* I\*\* for Inset.
- **Creating Table Legs and adding edge loops:** Pressing **CTRL-R** to create edge loops to create some geometry for legs.
  * Note: This is a good time to experiment with symmetry, this will help create a more symmetrical and even build. The symmetry gizmo is located on the upper right-hand side of the **3D Viewport** in **Edit mode**.

  The image below will show the symmetry turned on by the X-axis, indicating mirrored actions. Take the time to experiment with symmetry!

  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/efc3427fe392b0cc8587ab2eac829004e5eb3e48217887a01736260f6910834c.md)
  
  ### Overview
  This image depicts a user interface element, specifically a 3D modeling software tool showing a coordinate system with axes labeled X, Y, Z. The interface includes various icons and options at the top, and a grid-like workspace below.
  
  ### Key Elements
  - **Coordinate Axes**: Three axes (X, Y, Z) are represented by colored circles at the origin point (0,0,0). The X-axis is red, the Y-axis is green, and the Z-axis is blue.
  - **Origin Point**: Located at the center of the grid, marked by a small white cross.
  - **Grid Workspace**: A dark gray grid occupies the lower portion of the image, serving as the workspace for 3D modeling.
  - **Top Bar Icons**: Various icons are present at the top, likely representing different functions such as undo, redo, save, and preferences. These icons are small and circular, with some having additional symbols inside them.
  - **Options Menu**: A dropdown menu labeled "Options" is visible near the top right, suggesting additional settings or tools can be accessed here.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the coordinate axes and the origin point. The axes are arranged in a triangular formation around the origin, with the X-axis pointing right, the Y-axis pointing up, and the Z-axis pointing outwards. There are no arrows or lines connecting these elements, but their arrangement implies a spatial relationship indicating the directions of the axes. The grid workspace serves as the backdrop for the coordinate system, providing a reference for the 3D space being modeled.
  
  </details>
  
  <p></p>
  
  
- **Make a Drawer:** We’re going to go back to the face we left over specifically to build the drawer.
  * **Extrude Face:** Pressing **E** to extrude, Just enough to fill the space inside the table.
  * **Inset: \*\*Selecting the top face you’re going to press** I \*\*to inset.
  * \*\*Extrude Face: E \*\*Extruding that top face down to create the inside of the drawer.
- **Make a knob:** Let’s make a quick little knob for the drawer.
  * **Create a Cube: Shift + A** create cube. Here we are going to learn how to create a UV sphere.
  * **Add Modifier:** Here you are going to go to the right and look for the **Modifier tab**, Then select subdivision modifier. Then bring up 2 levels in the level viewport slider. Then Apply.
  * **Extrude and model:** Pressing **X** then the **Y** axix you’re going to squish in the sphere giving it a slight disk shape to form the knob. Selecting the 4 middle faces on one side of the sphere you’re going to **E** extrude outwards creating the stem of the knob.

**Mentor’s Note:** Be sure to make this Build your own and experiment with your own style!

Shown here are the different stages of the table being built! Sometimes it’s good to take a step back and look at the stages from a distance. If it looks close to this, you’re doing great!

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/4f5df0e97956c77de41dff6e012a9facd7d5d88ea3f5b902f9bf69ebfd965b15.md)

### Overview
This image displays a 3D modeling interface with various furniture models arranged around a central focus object. The interface includes keyboard shortcuts overlaid on the models, indicating actions that can be performed within the software.

### Key Elements
- **Central Focus Object**: A small table with a drawer, highlighted in the center of the image. It has a blue line extending from its center, suggesting interaction or selection.
- **Top Left Corner**: A smaller table model with a keyboard shortcut "Ctrl + R" displayed above it.
- **Top Right Corner**: Another table model with a keyboard shortcut "Shift" displayed above it.
- **Bottom Left Corner**: A smaller table model with no visible keyboard shortcuts.
- **Bottom Right Corner**: A larger table model with a keyboard shortcut "E" displayed above it.
- **Background**: The background is dark gray with grid lines, typical of a 3D modeling environment.

### Visual Flow / Relationships
The visual hierarchy is centered around the central focus object, which is the largest and most detailed model. The keyboard shortcuts are placed directly above the respective objects, indicating their association. There are no arrows or lines connecting the elements, but the arrangement suggests a logical flow from the central object outward.

</details>

<p></p>



**Make that Table video walkthrough:**

[](https://video-dfw5-3.xx.fbcdn.net/v/t42.1790-2/468230012_1122730475862007_6389819872229815162_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=6500a6&_nc_ohc=THgQOMObzw4Q7kNvwFIjo7m&_nc_oc=AdlIvGwMtfA7CtUgNXvrhJBcin5LbwrT9QqHlpqhzYi5vrD7z-oMe-69919xVSGxc7mZzRKHabF7CsQJZ3KdRCPn&_nc_zt=28&_nc_ht=video-dfw5-3.xx&_nc_gid=UKaktz0OJdOxCl80jhzY-g&oh=00_Afl4fvwNhSyyY346XCEzCiCJIkpNmxf3Wx4Uxo2oJh_MoA&oe=694128E0)

## Asset 3: Brighten Up the Room with a Lamp

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9fe478004ddfe2ed78d4b854ea9dbc363e9e946cce1de665ba92829b9d27aee6.md)

### Overview
The image depicts a single object, a lamp, presented against a plain white background. The lamp has a distinct shape and color scheme, with a focus on its design and form.

### Key Elements
- **Visual description**: The lamp has a rounded base that tapers into a narrower neck supporting a wide, conical lampshade. The lampshade features a gradient of orange and yellow hues.
- **Location**: The lamp is centered in the image.
- **Contents**: The lampshade is the primary feature, with a gradient of orange and yellow shades. The lamp base is blue with a green and yellow geometric pattern.
- **Visual styling**: The lamp has a smooth texture and a glossy finish, giving it a polished look.

### Visual Flow / Relationships
- **Most prominent visually**: The lamp itself is the sole focus of the image.
- **Spatial relationships**: There are no additional elements or connections within the image. The lamp is isolated against a plain white background.

</details>

<p></p>



**Mentor’s Note:** Don’t be afraid to experiment by adding additional shapes to form your model.

### Lamp Asset Creation: A Step-by-Step Guide

- **Base Shape:** Start with a Cylinder by Pressing **Shift + A** and choose **Mesh > Cylinder**.(Be sure to bring down the poly count, there will be a tab in the lower left corner.) Then press **TAB** to jump into edit mode.
- **Extrude Up:** In face select mode, you will then select the top faces of the cylinder then **E** to extrude up. Alternate pressing **S** for scale to guide the model to the desired shape.
- **Add More Shapes:** What will your lampshade look like? Following the reference I will then Pressing **Shift + A** and choose **Mesh > Cylinder**. To create the lampshade. Then lower poly count on the lower left of your 3D Viewport. To Taper the lampshade, you will select top faces, and Press **S** to size it down.

After you create your mesh cylinder, this menu pops up on the lower left of your screen. Here you can adjust the vertice count! Keep an eye for these menus that pop up on the lower left, they can be very handy.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/21eb9264875e4b6a691edf753acd4bf624b082c9f8d6185f886488e241250341.md)

### Overview
This image depicts a settings panel within a 3D modeling software interface. The panel is titled "Add Cylinder" and contains various parameters for creating a cylinder object. The layout is structured with labels and input fields for configuring the cylinder's dimensions and alignment.

### Key Elements
- **Panel Title**: "Add Cylinder" located at the top-left corner.
- **Vertices Input**: A field labeled "Vertices" with the value "32".
- **Radius Input**: A field labeled "Radius" with the value "1 m".
- **Depth Input**: A field labeled "Depth" with the value "2 m".
- **Cap Fill Type Dropdown**: A dropdown menu labeled "Cap Fill Type" set to "N-Gon".
- **Generate UVs Checkbox**: A checked checkbox labeled "Generate UVs".
- **Align Dropdown**: A dropdown menu labeled "Align" set to "World".
- **Location XYZ Inputs**: Three fields labeled "Location X", "Y", and "Z" all set to "0 m".
- **Rotation XYZ Inputs**: Three fields labeled "Rotation X", "Y", and "Z" all set to "0°".

### Visual Flow / Relationships
The panel is the most prominent visual element, taking up the central area of the image. The inputs and dropdown menus are arranged in a grid-like structure, with labels aligned to the left and input fields to the right. There are no arrows or lines connecting elements, suggesting a linear reading order from top to bottom and left to right.

</details>

<p></p>



- **Delete Faces and Extrude:** After the lampshade is modeled as desired, you will then delete the top faces on the cylinder and the bottom. Afterwards, Press **A** to select all. Press **E** to extrude.

**Brighten Up the Room With a Lamp Video Walkthrough:**

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/468399185_1345230203130323_8626381660905559130_n.mp4?_nc_cat=103&ccb=1-7&_nc_sid=6500a6&_nc_ohc=tc5zHxHeZgQQ7kNvwH2DlGB&_nc_oc=AdkBiX88yiUujZo53A-ZOmUBbj_URMMj7i_F8UMwtLD9Tmo0m_SUHVAMm27H4ksUkBXdNRAwCVrhBr7ZFLbTofEP&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=UKaktz0OJdOxCl80jhzY-g&oh=00_AflR9vPE3XbzDvcUR25xFusXb9wnerKwj3UudXjmhMZGWg&oe=694107F8)

Cheers! You’ve created your first set of 3D assets!

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/34534c023483889e337ca40398c159b73d94983173865f63ecf9e9e8944b0efa.md)

### Overview
The image depicts a 3D model of a small table with a lamp and some books placed on it. The scene is set against a dark gray grid background, suggesting a 3D modeling environment.

### Key Elements
- **Table**: A rectangular table with four legs and a single drawer. The table has a light gray color with subtle shading to give it depth. The drawer handle is a small, round, metallic knob.
- **Lamp**: Positioned on the left side of the table, the lamp has a conical shade with a gradient from light gray at the bottom to a slightly darker shade at the top. The base of the lamp is a smooth, rounded shape, also in light gray.
- **Books**: There are three stacked books on the right side of the table. They appear to be uniform in size and color, with a light gray cover.
- **Background**: The background is a dark gray grid, likely representing a 3D modeling workspace.

### Visual Flow / Relationships
The lamp is the most prominent object due to its central placement and larger size compared to the books. The books are secondary but still noticeable as they are stacked neatly on the table. The table itself serves as the base for both the lamp and the books, creating a stable arrangement.

</details>

<p></p>



**Mentor Note:** With these same steps you can easily create your very own set of assets remembering to gather references and start with simple shapes!

Here is what the UV unwrapping stage will look like. It’s very basic and it should get you prepared for texturing! Pretend you’re taking a pair of scissors and cut along seams.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/80054e09d8724b1f8554093593ae0fac37897d49ad8037dd3720f55936abf3bb.md)

### Overview
This image displays a screenshot of a 3D modeling software interface, specifically showing multiple views of a 3D model being manipulated. The interface includes various panels and tools typical of 3D modeling software.

### Key Elements
1. **Left Panel**
   - **Visual description**: A grid view panel.
   - **Location**: Left side of the screen.
   - **Contents**: A grid layout with a small 3D model preview in the bottom-left corner.
   - **Visual styling**: Dark background with light gray grid lines.

2. **Center Left Panel**
   - **Visual description**: A 3D model view panel.
   - **Location**: Center-left side of the screen.
   - **Contents**: A 3D model resembling a stack of books or a similar rectangular object.
   - **Visual styling**: The model is shaded with a neutral gray color, and the edges are highlighted in red.

3. **Center Right Panel**
   - **Visual description**: Another 3D model view panel.
   - **Location**: Center-right side of the screen.
   - **Contents**: A different perspective of the same or a similar 3D model as seen in the center-left panel.
   - **Visual styling**: The model is displayed in a wireframe mode, with red and white lines indicating edges and vertices.

4. **Right Panel**
   - **Visual description**: A 3D model view panel.
   - **Location**: Right side of the screen.
   - **Contents**: A complex 3D model with multiple interconnected parts, possibly representing a mechanical or architectural structure.
   - **Visual styling**: The model is colored in orange and brown tones, with some parts highlighted in lighter shades.

5. **Top Bar**
   - **Visual description**: A menu bar with various icons and options.
   - **Location**: Top of the screen.
   - **Contents**: Icons for file operations, view settings, and other tools.
   - **Visual styling**: Dark background with light-colored icons.

6. **Side Panels**
   - **Visual description**: Toolbars and property panels.
   - **Location**: Left and right sides of the screen.
   - **Contents**: Various tool icons and dropdown menus.
   - **Visual styling**: Dark background with light-colored text and icons.

### Visual Flow / Relationships
- **Most prominent visually**: The 3D models in the center and right panels.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The panels are arranged in a row, with each panel displaying a different view of the 3D model. The left panel shows a grid view, while the others show 3D views from different angles.

</details>

<p></p>



## Introduction to UV Unwrapping

Now that we’ve got our models, let’s talk about UV unwrapping. This process allows us to apply textures to our 3D models.

**Mentor Note:** UV editing in Blender is the process of mapping a 2D image onto a 3D object, which gives the model more realism and control over how textures appear. The UV Editor is used to create and edit UV maps, which are flat areas that show how each face of a 3D object should be textured with a part of the 2D image.

### Unwrapping the Book Asset: Step-by-Step Guide

- **UV Editing Mode:** Select the book in object mode and locate the UV editing mode at the top center of the Blender interface. Now that we have the UV tab selected the screens will split. The left side will be the UV viewport, the right will be the 3D viewport.
- **Mark Seam:** Start by going into edge select mode and selecting the upper corner seams of the book, following your way around that very line. After that has been done press Right Click> Mark Seam, afterward select the inner seam running parallel to the same set of edge loops, and repeat. Creating seams as if you were cutting a pattern on a piece of paper.
- **Project from View:** Now that all seams have been marked let’s start unwrapping. Press A to select all, This ensures the proper parts are selected to work on. Afterward, on the upper side or the 3D Viewport, Locate the UV drop-down menu and select Project from View.
- **Unwrap:** On the left-hand side in the UV viewport locate the projected model. Press A to select all. Afterward, Right Click>Unwrap and you will see the book unwrapped flat! In 2D form.

**UV Unwrapping Video Walkthrough:**

[](https://video-dfw5-2.xx.fbcdn.net/v/t42.1790-2/10000000_1500170830674070_8467381353476647092_n.mp4?_nc_cat=104&ccb=1-7&_nc_sid=6500a6&_nc_ohc=ZQwtEdtlov0Q7kNvwF83OrD&_nc_oc=AdlOHukSQZIl6M8VTqaAIV1Tybf5zRDnG0GoUsi-Ajdggvj3k_4W8bWuA7MneBsOcsx5MfGvH2mb-Qmwf52o3gci&_nc_zt=28&_nc_ht=video-dfw5-2.xx&_nc_gid=UKaktz0OJdOxCl80jhzY-g&oh=00_Afn_30PzLGvUUQpTTCjqjNeNVxTV9_8sI2whIGmiWGOOQQ&oe=69412667)

## Extended Learning

Below we have provided challenges for you to implement on your own. The advanced task may require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete any of these.

**Novice**

Create a House! In the tutorial link below, you will dive into learning how to make a structure that would pair nicely with your Book, Table, and Lamp.

https://youtu.be/qIf1je9OnMI?si=lkBmV4sMsJjLZUlZ

**Intermediate**

Make a Rocket! This item will explore more tools that will help you create things out of this world!

https://www.youtube.com/watch?v=04HFOAnCGfI&t=66s

**Advanced**

The Boss Round- but don’t be scared, the step-by-step tutorial linked below will guide you to create a bigger structure that is perfect for Horizon Living spaces. Make sure you give yourself time to complete this one. You won’t regret it!

https://www.youtube.com/watch?v=SzYgg6TeDfo&t=7s

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.