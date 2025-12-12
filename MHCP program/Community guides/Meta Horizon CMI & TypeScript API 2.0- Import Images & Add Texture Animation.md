Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/meta-horizon-cmi--typescript-api-20-import-images--add-texture-animation

# Meta Horizon CMI & TypeScript API 2.0: Import Images & Add Texture Animation

## Introduction

#### Creator Skill Level

All levels

#### Recommended Prerequisite Background Knowledge

No prior skills are necessary, but knowing a little about Blender and TypeScript will be helpful.

#### Description

Learn how to bring your virtual worlds to life using custom animations and visual effects. You’ll discover how to create animated instruction boards, add custom VFX, and even make an animated fireplace! Your creativity is the only limit.

We will start with the basics, such as importing Custom Model Import (CMI) planes with image textures. Then, we will explore various texture options, including transparency methods and importing UIO textures for animation.

You’ll also learn how to use two prewritten scripts to add animation and interactivity, even if you have no prior experience with Typescript.

#### Learning Objectives

By reading and reviewing this written guide you will be able to:

* [Import CMI](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#image-imports) images with or without transparency.
* [Use and or write typescript code](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-5--create-scripts) to create animated textures.
* [Billboard](Meta%20Horizon%20CMI%20&%20TypeScript%20API%202.0-%20Import%20Images%20&%20Add%20Texture%20Animation.md#step-7--billboarding) an animated texture to create a unique 3D-like effect.

## Image Imports

When bringing in materials you are unfamiliar with, the cheat sheet below is a quick way to look up the naming conventions used for importing the most common material types.

If you are new to Custom Model Imports (CMI), don’t worry, we cover how these work in the next couple of sections. The long and short of it is that in Blender, the material must have a name that parallels the name of the texture PNG you upload with. A simple example would be a mesh, with a material named “MyTexture” in Blender, and uploaded with a PNG named “MyTexture\_BR.png”

### Image Importing Cheat Sheet

* **Image.fbx** (Standard Image)
  + Upload with file named “Image\_BR.png”
  + Named “Image” in Blender
* **Image.fbx** (Metal Image)
  + Upload with files named:
    - “Image\_BR.png”
    - “Image\_MEO.png”
  + Named “Image” in Blender
* **UnlitImage.fbx**
  + Upload with file named “Image\_B.png”
  + Named “Image\_Unlit” in Blender
* **UnlitBlendImage.fbx**
  + Upload with file named “Image\_BA.png”
  + Named “Image\_Blend” in Blender
* **TransparentImage.fbx**
  + Upload with files named:
    - “Image\_BR.png”
    - “Image\_MESA.png”
  + Named “Image\_Transparent” in Blender
* **MaskedImage.fbx**
  + Upload with file named “Image\_BA.png”
  + Named “Image\_Masked” in Blender
* **UIOImage.fbx** (Animated Image)
  + Upload with file named “Image\_BA.png”
  + Named “Image\_UIO” in Blend

## Texture Swapping

If you are already familiar with CMI and Typescript, this brief summary shows you how to upload texture assets, which can be referenced from your Typescript “props” as PropTypes.Asset, and cast .as(TextureAsset).

Don’t worry if this is your first time, we will be diving deep into both of these topics throughout.

### How to Upload PNG Textures

At the time of writing (June 2024), uploading PNG textures can only be done through the Horizon Desktop Editor. The name of the image does not matter, but the image must be a PNG.

In the images below you can see screenshots of the Meta Horizon Worlds desktop editor. From the “Assets” tab you can click “Texture” and then in the right image, you can see that you are able to upload multiple PNG images. We recommend first creating a folder to upload and store these images, it is much harder to move them after they have been imported.

<details>
<summary>22 Horizon - Select Folder Add New Texture.png</summary>

<p></p>

[22 Horizon - Select Folder Add New Texture.png](../../image_data/1c2dd53a3ee86252a4d93dec450680b4c7626f31da520579c49fc826b10d0445.md)

### Overview
This image depicts a user interface element showing a dropdown menu under the "Add New" button within an "Assets" section of a software application. The dropdown contains options for creating new assets such as a folder, a 3D model, or a texture.

### Key Elements
- **Visual description**: A dropdown menu with rounded corners.
- **Location**: Below the "Add New" button in the "Assets" section.
- **Contents**: 
  - "Folder"
  - "3D Model"
  - "Texture"
- **Visual styling**: Dark gray background with white text. The selected option ("Texture") has a slightly lighter gray background compared to the others.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu itself. The options are arranged vertically, with no arrows or lines connecting them. The dropdown is the focal point, and the "Add New" button is adjacent to it, indicating that clicking the button triggers the dropdown.

</details>

<p></p>



<details>
<summary>24 Horizon - Import All PNGs.png</summary>

<p></p>

[24 Horizon - Import All PNGs.png](../../image_data/667d45cbccfba9a0ee0d1e505998ce4147c763556b7b3d7dbe685a731f1d5136.md)

### Overview
This is a screenshot of a file import dialog box for textures. The interface allows users to choose PNG files to import into a project. The dialog includes a list of selected files, a button to choose more files, and options to cancel or import the selected files.

### Key Elements
- **Header**: "Import Texture(s)" at the top.
- **Instruction Text**: Below the header, it states that texture files must be in PNG (.png) format and specifies a maximum file size of 50MB.
- **Choose Files Button**: A button labeled "+ Choose files on your device" for selecting files.
- **File List**: A list of selected files with checkboxes next to them indicating selection status.
    - **00.png**: Checked, green checkmark.
    - **01.png**: Checked, green checkmark.
    - **02.png**: Checked, green checkmark.
    - **03.png**: Checked, green checkmark.
    - **04.png**: Checked, green checkmark.
- **Cancel Button**: A gray button labeled "Cancel" at the bottom left.
- **Import Button**: A blue button labeled "Import" at the bottom right.

### Visual Flow / Relationships
The most prominent visual elements are the list of selected files and the "Import" button. The list items are arranged vertically, and the "Import" button is positioned at the bottom right. There are no arrows or lines connecting elements, but the layout suggests a sequential process starting with file selection and ending with the import action.

</details>

<p></p>



### How to Swap Textures

Here is a short example of how to swap textures, noting that this only works on CMI meshes uploaded with a UIO material/texture.

```
const texture = this.props.texture.as(TextureAsset);

if (texture) {
this.entity.as(MeshEntity)?.setTexture(texture);
```

## Step 1: Creating FBX Files

In the first step, we will show how to create FBX files for standard, \_Masked, and \_UIO material types. The process is similar for \_Unlit, \_Blend, and \_Transparent.

Once you have opened Blender, select and delete all items.

<details>
<summary>01 Blender - Delete Hierarchy.png</summary>

<p></p>

[01 Blender - Delete Hierarchy.png](../../image_data/999d3e048e5d0727e65656394a6689713a45b4034fa51d04b744ee4d13ede6b9.md)

### Overview
This image depicts a 3D modeling interface within Blender 4.0, specifically showing a 3D viewport with a cube and a triangular mesh object. The interface includes various toolbars, menus, and panels typical of a 3D modeling software.

### Key Elements
- **Viewport**: The central area displays a 3D scene with a cube highlighted in orange and a triangular mesh object. The grid background is gray with red, green, and blue axes indicating the X, Y, and Z axes respectively.
- **Cube**: A simple cube is centered in the viewport, outlined in orange, suggesting it is selected.
- **Triangular Mesh**: A triangular mesh object is located to the left of the cube, also outlined in orange.
- **Menu Bar**: Located at the top, the menu bar contains options such as File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Compositing, and Scene. The "Object" menu is expanded, showing options like Copy, Paste, Delete, Select, Unlink, New Collection, ID Data, Mark as Asset, Clear Asset, Library Override, View, Area, and others.
- **Properties Panel**: On the right side, the Properties panel is open, displaying information about the selected objects, including transformations and collections.
- **Tool Buttons**: On the left side, there are various tool buttons for manipulating the 3D scene, such as Transform, Rotate, Scale, and others.
- **Timeline**: At the bottom, there is a timeline with playback controls and keyframe markers.

### Visual Flow / Relationships
The most prominent visual elements are the cube and the triangular mesh in the viewport. The menu bar and properties panel provide contextual information about the objects. The layout follows a standard workflow where tools are accessed through the menu bar and properties are adjusted in the panel on the right.

</details>

<p></p>



Then we’ll create a mesh plane via Add>Mesh>Plane.

<details>
<summary>02 Blender - Add Mesh Plane.png</summary>

<p></p>

[02 Blender - Add Mesh Plane.png](../../image_data/61d0a2d8ed89a087a904394eb15d999d56915a65f95c85df935a4d089ae9e3a2.md)

### Overview
This image depicts a screenshot of Blender 4.0, a 3D modeling software interface. The main focus is on the workspace area showing a 3D grid and a menu dropdown for adding objects. The interface includes various panels and toolbars typical of a 3D modeling environment.

### Key Elements
- **Menu Dropdown**: Located in the upper left, it is a black dropdown menu with white text listing object types under the "Add" tab. The menu items include "Mesh," "Curve," "Surface," among others.
- **3D Workspace**: The central area displays a 3D grid with axes (X, Y, Z) indicated by colored circles at the top right. There are red and green lines forming a diagonal line across the workspace.
- **Toolbars**: At the top, there are standard toolbars with options like File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, Animation, Compositing, and Scene.
- **Scene Panel**: On the right side, there is a panel labeled "Scene Collection" with options like Camera, Background, Active Clip, Gravity, Simulation, Keying Sets, Audio, Rigid Body World, and Custom Properties.
- **View Layer Panel**: At the top right, there is a "ViewLayer" panel showing options related to scene collection and camera settings.

### Visual Flow / Relationships
The most prominent visual elements are the 3D workspace and the menu dropdown. The dropdown menu is the focal point as it is open, indicating interaction. The workspace shows a grid and lines, suggesting a 3D modeling environment. The toolbars provide access to various functions within Blender, while the Scene panel offers scene-specific settings. The ViewLayer panel is less prominent but provides additional scene-related options.

</details>

<p></p>



Next, with the plane selected, click the ‘red beach-ball-like’ material icon on the left. Then, click new.

After creating “Material.001,” we can rename it “Image.”

<details>
<summary>03 Blender - Material New.png</summary>

<p></p>

[03 Blender - Material New.png](../../image_data/a92bf695c64ac007c9a4530c3d7608267769fa9ba4bb4747c36e92bb70730fdb.md)

### Overview
This image depicts a user interface element within a software application, likely a design or modeling tool given the presence of icons resembling tools and a workspace area. The interface has a dark theme with various interactive elements and a central workspace area.

### Key Elements
- **Left Panel**: Contains a vertical toolbar with multiple icons, each representing different functions or tools. The icons include a wrench (settings), a camera (view), a globe (world), a folder (project), a magnifying glass (search), a circle with a dot (object selection), a share icon (collaboration), a gear (preferences), a triangle (export), and a checkered square (grid).
- **Workspace Area**: Located centrally, this area is currently empty but has a placeholder labeled "Plane" indicating a default object or layer.
- **Top Bar**: Contains a search bar and some toggle icons, possibly for settings or modes.
- **Right Panel**: Includes a plus sign (+) and a minus sign (-) for adding or removing elements, as well as a dropdown arrow for expanding or collapsing sections.
- **Red Arrows**: Two large red arrows are overlaid on the image, pointing towards specific areas of interest in the left panel.

### Visual Flow / Relationships
The most prominent visual elements are the red arrows, which draw attention to the icons in the left panel. The layout suggests a hierarchical structure where the left panel contains tools and the workspace area is the main working space. The red arrows imply that the user might be highlighting or directing attention to certain tools or functions.

</details>

<p></p>

<details>
<summary>04 Blender - Rename Image.png</summary>

<p></p>

[04 Blender - Rename Image.png](../../image_data/3142180ed7f35b7a0954781d293ea803cc7cad29eaf747f2234952c213e25055.md)

### Overview
This image depicts a user interface from a material editor, likely within a 3D modeling software. The interface includes a sidebar with various icons representing different tools and settings, and a central area displaying material properties and node settings.

### Key Elements
- **Sidebar Icons**: Located on the left side, these icons represent different functions such as layers, materials, and other editing tools. They are small, square, and have distinct symbols.
- **Material Name**: "Material.001" is displayed prominently at the top of the interface.
- **Material Editor Panel**: This panel is divided into sections. The top part shows the material name and a plus sign for adding new materials. Below that, there are expandable sections labeled "Image," "Surface," and others.
- **Surface Section**: Contains parameters like "Base Color," "Metallic," "Roughness," "IOR," "Alpha," and "Normal." Each parameter has a corresponding slider or input field.
- **Use Nodes Button**: A blue button labeled "Use Nodes" is located below the surface parameters.
- **Expandable Sections**: These include "Subsurface," "Specular," "Transmission," "Coat," "Sheen," and "Emission," which can be expanded to reveal more settings.

### Visual Flow / Relationships
The interface follows a vertical layout with the sidebar on the left and the main content area on the right. The expandable sections are nested under the "Surface" heading. The "Use Nodes" button is positioned below the surface parameters, making it a secondary focus after the surface settings.

</details>

<p></p>



This is a simple name, with no “\_” underscore, used for CMI FBX objects being imported into Horizon. Note that most any name can be used, but the PNG texture uploaded with the model must use that name plus “\_BR.” For instance, ours would be “Image\_BR.png.” If your name in Blender has underscores, everything after the first underscore will be ignored by Horizon unless the underscore corresponds to a specific material type, ie. \_UIO, which we will see later in this step.

Next, we will export as FBX, via File>Export>FBX. Make sure to give it a good name, we will use “Image.fbx.”

<details>
<summary>05 Blender - File Export FBX.png</summary>

<p></p>

[05 Blender - File Export FBX.png](../../image_data/ccf08b624ea57201fd0912d45f8e4c3939ed5f499ffd18ce7f95a5a56634bdd4.md)

### Overview
This image depicts a screenshot of Blender 4.0, a 3D modeling software interface. The main focus is on the export options menu that has been opened from the 'File' menu. The interface includes various panels and tools typical of a 3D modeling environment.

### Key Elements
- **Menu Bar**: Located at the top, showing the 'File', 'Edit', 'Render', 'Window', and 'Help' menus. The 'File' menu is expanded to show its contents.
- **Export Submenu**: Within the 'File' menu, the 'Export' option is highlighted, revealing a dropdown menu listing various file formats such as Collada (.dae), Alembic (.abc), Universal Scene Description (.usd*), and others.
- **3D Viewport**: The central area of the screen displays a 3D workspace with a grid and axes indicators (X, Y, Z) in red, green, and blue respectively.
- **Properties Panel**: On the right side, there is a panel titled 'Image' under which 'Surface' settings are visible. This includes options like 'Use Nodes', 'Base Color', 'Metallic', 'Roughness', and 'IOR'.
- **Scene Collection**: At the bottom right, there is a 'Scene Collection' panel showing a 'Plane' object selected within the scene.

### Visual Flow / Relationships
The most prominent visual element is the 'Export' submenu, as it is actively expanded. The viewport serves as the central canvas for 3D modeling activities. The properties panel on the right provides material settings for the selected object ('Plane'). The layout follows a standard workflow where the user interacts with the 'File' menu to choose export options, and the viewport and properties panel provide the necessary tools for 3D creation and manipulation.

</details>

<p></p>



Now that we have created this simple plane, we can upload it as many times as we want to Horizon with individual PNG images named “Image\_BR.” I recommend saving this in a folder to use whenever you want to import an image into Horizon. <details>
                                                                                                                                                                                                                                             <summary>06 Blender - Save And Name FBX.png</summary>
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             <p></p>
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             [06 Blender - Save And Name FBX.png](../../image_data/ce54a09da904030a4e650c77af773fd666685b86fe5b36f6d4c3a3b559787c2a.md)
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             ### Overview
                                                                                                                                                                                                                                             This image depicts a file management interface within a software application, likely Blender, given the title "Blender File View." The interface includes a sidebar with bookmarks and system folders, a central area for viewing files, and a right panel with settings and options related to file operations.
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             ### Key Elements
                                                                                                                                                                                                                                             - **Left Sidebar**:
                                                                                                                                                                                                                                               - **Bookmarks**: Contains a '+' button labeled "Add Bookmark."
                                                                                                                                                                                                                                               - **System Folders**: Lists "Home," "Desktop," "Documents," "Downloads," "Music," "Pictures," "Videos," "Fonts," "OneDrive," and "Fire Series.zip."
                                                                                                                                                                                                                                               - **Volumes**: Displays "Local Disk (C:)" with a downward arrow indicating expandable content.
                                                                                                                                                                                                                                               - **Recent**: Shows folders named "MM Terrain," "frame_1," "frame_0," and "Downloads."
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             - **Central Area**:
                                                                                                                                                                                                                                               - A large empty space, presumably for displaying file contents when a folder is selected.
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             - **Right Panel**:
                                                                                                                                                                                                                                               - **Operator Presets**: Includes "Path Mode" set to "Auto" and "Batch Mode" set to "Off."
                                                                                                                                                                                                                                               - **Include Section**: Contains checkboxes for "Selected Objects," "Visible Objects," and "Active Collection."
                                                                                                                                                                                                                                               - **Object Types**: Lists "Empty," "Camera," "Lamp," "Armature," "Mesh," and "Other."
                                                                                                                                                                                                                                               - **Transform Section**: Displays "Scale" set to "1.00," "Apply Scalings" set to "All Local," and "Forward" set to "-Z Forward."
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             - **Bottom Right**:
                                                                                                                                                                                                                                               - A dropdown menu showing "Execute selected file. Shortcut: Return."
                                                                                                                                                                                                                                               - Buttons labeled "Export FBX" and "Cancel."
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             ### Visual Flow / Relationships
                                                                                                                                                                                                                                             The most prominent visual elements are the sidebar and the central area, which are adjacent and serve as the primary interaction areas. The right panel provides additional options and settings related to file operations. The dropdown menu at the bottom right suggests interactive functionality, likely related to file export.
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             </details>
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             <p></p>
                                                                                                                                                                                                                                             
                                                                                                                                                                                                                                             

Back on the properties panel of our Plane, we are going to rename and export it two more times, one named “Image\_Masked,” and another named “Image\_UIO.”

Masked is used for images with solid areas of transparency (e.g., logos, icons, etc). UIO also uses masking, but allows the mesh to have the texture swapped in Horizon.

<details>
<summary>07 Blender - Name Masked.png</summary>

<p></p>

[07 Blender - Name Masked.png](../../image_data/9d992b7657196ab312658fb829fe21970e87efaf92fae895aa7bb925a816e5b3.md)

### Overview
This image depicts a user interface element, specifically a file explorer or asset manager window, likely from a 3D modeling software such as Blender. The interface includes a hierarchical tree view on the left, a search bar at the top, and various toolbars and panels below.

### Key Elements
- **Tree View**: Located on the left side, showing a nested directory structure labeled "Scene Collection" and "Collection." The "Plane" folder is expanded, revealing its contents.
  - **Visual description**: Tree nodes with icons and labels.
  - **Location**: Left panel.
  - **Contents**: "Scene Collection," "Collection," "Plane."
  - **Visual styling**: Dark background with light text, icons in orange and green.
  
- **Search Bar**: Positioned at the top-center of the interface.
  - **Visual description**: A rectangular input field with a magnifying glass icon.
  - **Location**: Top-center.
  - **Contents**: Placeholder text suggesting "Search."
  - **Visual styling**: Light background with dark text, bordered by a thin line.

- **Toolbars**: Located at the top right, containing icons for filtering, searching, and other actions.
  - **Visual description**: Icons with tooltips or labels.
  - **Location**: Top-right corner.
  - **Contents**: Filter icon, search icon, eye icon, camera icon.
  - **Visual styling**: Small icons with white backgrounds and black icons.

- **Panel Below Tree View**: Contains a smaller tree view and a search bar.
  - **Visual description**: Nested folders and a search bar.
  - **Location**: Below the tree view on the left.
  - **Contents**: "Plane" folder expanded, showing "Image_Masked."
  - **Visual styling**: Dark background with light text, icons in orange and green.

- **Panel Below Search Bar**: Contains a search bar and a plus/minus icon.
  - **Visual description**: A search bar with a magnifying glass icon and a plus/minus icon.
  - **Location**: Below the search bar.
  - **Contents**: "Image_Masked" folder expanded, showing a plus/minus icon.
  - **Visual styling**: Dark background with light text, icons in orange and green.

- **Bottom Panel**: Contains a folder named "Image_Masked" with a shield icon and a plus/minus icon.
  - **Visual description**: Folder icon, folder name, shield icon, plus/minus icon.
  - **Location**: Bottom of the interface.
  - **Contents**: "Image_Masked," shield icon, plus/minus icon.
  - **Visual styling**: Dark background with light text, icons in orange and green.

### Visual Flow / Relationships
- **Most Prominent Element**: The tree view on the left.
- **Arrows/Connectors**: None explicitly shown.
- **Reading Order**: The interface follows a typical left-to-right, top-to-bottom flow, starting with the tree view, then moving to the search bar, and finally to the panels below.

</details>

<p></p>

<details>
<summary>09 Blender - Name UIO.png</summary>

<p></p>

[09 Blender - Name UIO.png](../../image_data/a6a8a64db12b615709db98cbac43d4dfe893c70c19612c5adfb6e29b2c6ccfee.md)

### Overview
This image depicts a user interface (UI) element, specifically a file explorer or asset manager window. The layout includes a sidebar with expandable folders, a search bar, and various icons and buttons for managing assets or collections.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Folder Structure**: Contains nested folders labeled "Scene Collection" and "Collection". The "Plane" folder is expanded, revealing its contents.
  - **Folder Icons**: Each folder has a small icon next to its name, such as a plane icon for "Plane".
  - **Search Bar**: Located at the top of the sidebar, with a magnifying glass icon indicating a search functionality.
  - **Expand/Collapse Buttons**: Small arrow icons next to folder names allow expanding or collapsing the folder contents.
  - **Asset List**: Below the search bar, a list of assets is displayed. The first item is "Image_UIO", highlighted in blue, suggesting it is currently selected or active.
  - **Asset Icons**: Each asset entry has a small icon next to the asset name, such as a camera icon for "Image_UIO".
  - **Asset Actions**: To the right of each asset entry, there are icons for actions like adding (+), deleting (-), and more options (...).

- **Main Area (Center)**:
  - **Asset Details**: Displays information about the selected asset "Image_UIO", including a thumbnail preview (a small circle with a white dot), the asset name, and a series of icons representing different actions or properties related to the asset.

- **Footer (Bottom)**:
  - **Asset List**: Another instance of the asset "Image_UIO" is shown, but this time without a thumbnail, indicating a different view or state of the asset.

### Visual Flow / Relationships
- **Most Prominent Element**: The expanded "Plane" folder and the highlighted "Image_UIO" asset.
- **Arrows and Lines**: Arrows indicate the expand/collapse functionality of the folders.
- **Reading Order**: The UI follows a typical left-to-right, top-to-bottom reading order, starting with the sidebar and moving to the main area and footer.

</details>

<p></p>



The exported names of these FBXs are not required to match, but I found that these names made a lot of sense for our use case. For \_Masked, I named the file “MaskedImage.fbx,” and for the UIO image I used “UIOImage.fbx.”

<details>
<summary>Screenshot 2024-04-19 at 11.11.10 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 11.11.10 AM.png](../../image_data/679d407ff1829ff3b333f44b636c80f7c68e4a92d2c9e7d172842f272aece403.md)

### Overview
This image depicts a user interface snippet showing file management options for a file named "MaskedImage.fbx". There are three interactive elements: a file name field, a cancel button, and an export button.

### Key Elements
- **File Name Field**: Located at the leftmost part of the interface. Contains the text "MaskedImage.fbx". The background is dark gray, and the text is white.
- **Cancel Button**: Positioned centrally. It has a dark gray background with the word "Cancel" written in white.
- **Export FBX Button**: Situated on the far right. It has a blue background with the text "Export FBX" in white.

### Visual Flow / Relationships
The most prominent visual element is the file name field as it occupies the largest area. The cancel button is centrally located, and the export button is positioned to the right. There are no arrows or lines connecting these elements, suggesting a linear reading order moving from left to right.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 11.11.21 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 11.11.21 AM.png](../../image_data/ede2d1b00fca8471059d111db46523db2f7088f43ba7662b03355117b54bb9f8.md)

### Overview
This image depicts a user interface element showing file export options. It includes a file name field, a cancel button, and an export button.

### Key Elements
- **File Name Field**: Located at the left side, contains the text `UIOImage.fbx`. The background is dark gray, and the text is white.
- **Minus Button**: Positioned next to the file name field, with a minus sign (`−`) indicating a decrement action.
- **Plus Button**: Situated next to the minus button, with a plus sign (`+`) indicating an increment action.
- **Cancel Button**: Centrally located, with a light gray background and white text that reads `Cancel`.
- **Export FBX Button**: Positioned on the right, with a blue background and white text that reads `Export FBX`.

### Visual Flow / Relationships
The most prominent visual elements are the file name field and the `Export FBX` button. There are no arrows or lines connecting elements, but the layout suggests a linear reading order moving from left to right.

</details>

<p></p>



Similar to “Image.fbx” and its corresponding “Image\_BR.png,” these can be used for any 2D image. If the image is not perfectly square, you will need to adjust by scaling the plane in Horizon.

Repeat this process for \_Unlit, \_Blend, and \_Transparent. I named my files “UnlitImage.fbx,” “UnlitBlendImage.fbx,” and “TransparentImage.fbx.”

### Various Material Types

In the image below you can see the various material types being applied to the same PNG fire image. For MEO and Transparent they need to be uploaded with a secondary file which will be seen and discussed in depth in Step 2.

What we can see from these images is that four material types support transparency and three do not.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0f9744585819669461ea8acba6b726b65c4f95d748fedcb7cb9693173b60876d.md)

### Overview
This image displays a grid layout showcasing various types of images with different lighting and transparency effects. Each cell contains a small rectangular image with a flame-like shape, labeled with its corresponding RGBA value.

### Key Elements
1. **Standard Image**
   - **Visual description**: A rectangular green background with a flame-like shape in the center.
   - **Location**: Top-left corner.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

2. **MEO Image (Metal)**
   - **Visual description**: A black rectangle with a flame-like shape in the center.
   - **Location**: Second column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Black background, white border around the flame shape.

3. **Unlit Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Third column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

4. **Unlit Blend Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Fourth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

5. **Transparent**
   - **Visual description**: A gray rectangle with a flame-like shape in the center.
   - **Location**: Fifth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Gray background, white border around the flame shape.

6. **Masked Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Sixth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

7. **UIO Image**
   - **Visual description**: A gray rectangle with a flame-like shape in the center.
   - **Location**: Seventh column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Gray background, white border around the flame shape.

8. **RGBA Values**
   - **Standard Image**: RGBA: `(0.5, 0, 0, 1)`
   - **MEO Image (Metal)**: RGBA: `(0.5, 0.5, 0.5, 1)`
   - **Transparent**: RGBA: `(0, 0, 0, 0.5)`
   - **Masked Image**: RGBA: `(0.5, 0.5, 0.5, 0.5)`

### Visual Flow / Relationships
The images are arranged in a grid format with a clear distinction between the standard image and the images with different effects. The flame shapes are consistently placed in the center of each rectangle, and the RGBA values are displayed below each respective image.

</details>

<p></p>



Here is a brief description of each material type:

#### Standard Image

* Basic texture, nothing special, and is easy to use.

#### MEO Image

* Using a secondary PNG, the RGB channels correspond to Metal, Emission, and Occlusion (MEO). Notice that if E & O are set to 0 the texture is not visible. Try playing with these values to get the exact look you are going for.

#### Unlit Image

* Light and shadows are not applied.

#### Unlit Blend Image

* Unlit, but supports transparency using the alpha channel of the PNG.

#### Transparent Image

* Using a secondary PNG the RGBA channels correspond to Metal, Emission, Specular, Alpha (MESA). This means you can get a metallic that is also partially transparent! It also means that you have to make sure the alpha channel correctly masks out your texture, in this case, it does not, hence the partially transparent square.

#### Masked Image

* Uses the alpha channel of the PNG to mask out the image. Note that this is masking, not transparency, partially transparent pixels will be dithered, meaning every other pixel will be opaque or clear. For real transparency use Unlit Blend or Transparent material types.

This is an example of dithering.

<details>
<summary>pasted-image.png</summary>

<p></p>

[pasted-image.png](../../image_data/202c05e75dbd659b61f31e7ac67df0dbc9da955158e0c92fafa052c860502950.md)

### Overview
The image displays a gradient background with a central area that appears to be a textured or pixelated square. The overall composition suggests a digital or abstract design.

### Key Elements
- **Visual Description**: The image features a gradient background transitioning from light blue at the top to a darker blue at the bottom. The central area has a textured appearance resembling a grid or dots, giving it a pixelated look.
- **Location**: The gradient background occupies the entire frame, while the textured square is centrally located.
- **Contents**: There are no discernible texts or icons within the image itself. The texture is uniform across the square but varies slightly in intensity across the gradient background.
- **Visual Styling**: The gradient uses shades of blue, transitioning smoothly from light to dark. The central square has a lighter tone compared to the surrounding gradient, and its texture is composed of small, evenly spaced dots.

### Visual Flow / Relationships
- **Most Prominent Visually**: The gradient background serves as the primary visual element, with the textured square drawing attention due to its distinct texture and lighter color.
- **Arrows, Lines, Connectors**: There are no arrows, lines, or connectors present in the image.
- **Spatial Relationships**: The textured square is centered, creating a focal point against the gradient backdrop. The gradient itself fades into the darker blue at the bottom, suggesting a sense of depth or dimensionality.

</details>

<p></p>



#### UIO Image:

* User Interface Optimized (UIO) images can be animated, meaning to have their textures swapped out. They are also rendered in more detail than the other texture types to perform better as user interfaces, ie. for use in high touch point areas.

#### Creating Secondary PNGs

Transparent and MEO images will need to be uploaded with a secondary PNG, named Image\_MESA.png, or Image\_MEO.png respectively. You can use a variety of tools to make these PNGs, we won’t be going deep on that subject in this Written Guide, but we will look at a simple example using Blender.

Start by opening the “Texture Paint” workspace:

<details>
<summary>Screenshot 2024-04-19 at 8.53.37 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.53.37 AM.png](../../image_data/a57f2b40ca13d009e5b82e0c61e9d8de47b03e203a73e9de7ca8ee980f0203c1.md)

### Overview
This image depicts a user interface element showing a tooltip or information box within a software application. The main content area is a rectangular box with rounded corners, containing text that describes the active workspace being displayed in the window.

### Key Elements
- **Visual description**: A rectangular box with rounded edges.
- **Location**: Positioned centrally below the navigation bar.
- **Contents**: Contains the text "> Active workspace showing in the window.".
- **Visual styling**: The background is dark gray, and the text is white, providing good contrast.

### Visual Flow / Relationships
- Most prominent visually: The information box.
- There are no arrows or lines connecting elements, but the box is likely part of a larger interface where users can interact with the workspace shown.

</details>

<p></p>



Then click “New” to create a new image, and from there select the Color property.

<details>
<summary>Screenshot 2024-04-19 at 8.56.04 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.56.04 AM.png](../../image_data/27a54ffe32c9c45f62f98cf9766b08c1ed8f4313fd93aecda97b78141309551b.md)

### Overview
This image depicts a user interface of a digital painting software. The main area shows a canvas with a grid overlay, and various tool icons are visible on the left side. The top menu bar contains several options such as File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, and UV Editing. There are also buttons for creating new images and opening existing ones.

### Key Elements
- **Top Menu Bar**: Located at the very top, spans the width of the interface. Contains menu items like File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, and UV Editing.
- **Canvas Area**: Positioned centrally, showing a dark gray background with a lighter gray grid overlay.
- **Tool Icons**: On the left side, there are several icons representing different tools, each with a small icon next to them. These include a paintbrush, dropper, eraser, and others.
- **New Image Button**: Located near the top right, with a tooltip indicating "Create a new image."
- **Radius Slider**: Positioned on the far right, labeled "Radius" with a value of 50.
- **Pan View Button**: At the bottom right, labeled "Pan View."

### Visual Flow / Relationships
The most prominent visual element is the central canvas area. The tool icons are arranged vertically on the left side, and the menu bar spans the entire width at the top. The tooltips provide additional information about specific elements, such as the "New Image" button.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 8.56.47 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.56.47 AM.png](../../image_data/8e2febb9b829fd99cb8b9f695402d007d86d646d6f6fc2df86760d80958386fa.md)

### Overview
This image depicts a user interface element within a software application, specifically a dialog box for creating a new image. The dialog box is modal, overlaying the main workspace of the application, which appears to be a digital painting or modeling tool given the presence of various tools and panels around the dialog.

### Key Elements
- **Dialog Box**: A rectangular window with rounded corners, positioned centrally over the main workspace.
  - **Title**: "New Image"
  - **Fields**: Contains input fields for "Name," "Width," "Height," and "Color."
    - **Name Field**: Displays "Untitled."
    - **Width Field**: Shows "1024 px."
    - **Height Field**: Also shows "1024 px."
    - **Color Field**: Empty, indicating no color has been selected yet.
  - **Checkboxes**: Two checkboxes labeled "Alpha" and "Generated Type."
    - **Alpha Checkbox**: Checked, with a blue checkmark.
    - **Generated Type Options**: "Blank," "32-bit Float," and "Tiled." The "Blank" option is highlighted, suggesting it is the current selection.
  - **Buttons**: A large blue button labeled "OK" at the bottom of the dialog box.
  - **Tooltip**: A small tooltip appears next to the "Color" field, explaining that it is the "Default fill color."

### Visual Flow / Relationships
The dialog box is the most prominent visual element due to its central placement and modal nature. The "OK" button is the primary action element, likely intended for confirming the creation of the new image. The tooltips provide additional information about the "Color" field, enhancing usability. The layout follows a standard form-based design, with fields grouped together and interactive elements clearly defined.

</details>

<p></p>



Then select RGB at the bottom, you can then type in the exact values you want for the MEO or MESA channels. In this case, I have set all channels to 50%.

<details>
<summary>Screenshot 2024-04-19 at 8.57.03 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.57.03 AM.png](../../image_data/69eaba71d565d357ad81110e0f2cc78ba941ab82095d94ffde70b931c679e19a.md)

### Overview
This image depicts a user interface of a software application, specifically a window for creating a new image. The main focus is a dialog box titled "New Image," which includes fields for entering the name, width, height, and color of the image. There is also a color picker widget on the right side of the dialog box.

### Key Elements
- **Dialog Box**: Located centrally, with a black background and white text. Contains fields labeled "Name," "Width," "Height," and "Color." The "Name" field has the placeholder text "Untitled."
- **Fields**: 
  - **Name Field**: Positioned above the "Width" field, with a placeholder text "Untitled."
  - **Width Field**: Below the "Name" field, with the value "1024 px."
  - **Height Field**: Below the "Width" field, with the value "1024 px."
  - **Color Field**: Below the "Height" field, with a color picker widget showing a black circle with a small white dot in the center, indicating the current color selection.
- **Color Picker Widget**: Positioned to the right of the dialog box, with a black background and a white vertical slider bar on the right side. The color wheel is partially visible at the bottom left of the color picker.
- **Tabs**: Below the color picker, there are tabs labeled "RGB," "HSV," and "Hex," with "RGB" currently active.
- **Color Values**: Below the tabs, there are four fields displaying color values: Red, Green, Blue, and Alpha, all set to "0.000" except for Alpha, which is set to "1.000."

### Visual Flow / Relationships
The most prominent visual element is the dialog box, as it occupies the central area of the screen. The color picker widget is secondary but important for interaction. The layout follows a standard form-based structure, with fields arranged vertically and the color picker horizontally aligned to the right. The color values are displayed in a grid below the color picker tabs.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 8.58.00 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.58.00 AM.png](../../image_data/c1d82442013f32456232133141812bd752a961202e75c9b2e2ec9c7912487413.md)

### Overview
This image depicts a color picker interface with a circular color wheel and corresponding RGB values displayed below. The layout suggests a user can adjust the color by interacting with the wheel and viewing the resulting RGB values.

### Key Elements
- **Circular Color Wheel**: A gradient circle with a spectrum of colors ranging from green to purple. It has a white dot at its center, likely representing the currently selected color.
- **RGB Values**: Located below the color wheel, showing the current RGB values as `Red: 0.500`, `Green: 0.500`, `Blue: 0.500`, and `Alpha: 0.500`. These values are displayed in a blue and gray alternating background.
- **Tabs**: Three tabs labeled `RGB`, `HSV`, and `Hex` are positioned above the RGB values. The `RGB` tab is highlighted, indicating it is the active tab.
- **Slider**: A vertical slider on the right side of the image, partially filled with a gradient from light gray to dark gray, likely used to adjust the alpha value.
- **Pen Icon**: A small pen icon is located next to the Alpha value, possibly indicating a tool for adjusting the color.

### Visual Flow / Relationships
The most prominent visual element is the color wheel, which is centrally located. The RGB values are arranged directly beneath the wheel, providing immediate feedback on the selected color. The slider on the right is vertically aligned with the RGB values, suggesting a connection between the color selection and the slider's function. The tabs provide alternative ways to view the color data.

</details>

<p></p>



Remember that RGB correlates to MEO. For example, red is how metallic, green is emission, and blue is occlusion, and the same is true for MESA.

| **RGBA** | **MEO** | **MESA** |
| --- | --- | --- |
| Red | Metal | Metal |
| Green | Emission | Emission |
| Blue | Occlusion | Specular |
| Alpha |  | Alpha |

Next, to finish creating the image, we can click “OK” (in some versions of Blender the OK button has a different name). Then click Image>Save As> and save the image as either Image\_MEO.png or Image\_MESA.png depending on your intended use case. For practice, consider trying both.

<details>
<summary>Screenshot 2024-04-19 at 8.58.28 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.58.28 AM.png](../../image_data/814b22bb7a215164d5444d74f9d333fcc35442980ef450fb25963412767716fa.md)

### Overview
This image depicts a user interface element within a software application, specifically a dialog box for creating a new image. The dialog box is centered over the main workspace area, which appears to be a painting or drawing tool interface.

### Key Elements
- **Dialog Box**: A rectangular pop-up window titled "New Image." It contains several fields and options for configuring the new image.
  - **Name**: A text field labeled "Name" with the placeholder text "Untitled."
  - **Width**: A text field labeled "Width" set to "1024 px."
  - **Height**: A text field labeled "Height" also set to "1024 px."
  - **Color**: A color selection field with a default gray color swatch.
  - **Alpha Checkbox**: A checkbox labeled "Alpha" that is checked.
  - **Generated Type Dropdown**: A dropdown menu labeled "Generated Type" currently set to "Blank."
  - **Options Buttons**: Two additional buttons labeled "32-bit Float" and "Tiled," both unchecked.
  - **OK Button**: A large blue button labeled "OK."

- **Workspace Area**: Below the dialog box, there is a grid-like area representing the canvas or workspace where the new image will be created. The grid is light gray with darker gray lines forming a grid pattern.

- **Menu Bar**: At the top of the screen, there is a menu bar with various options such as File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, and UV Editor.

- **Tool Icons**: On the left side of the screen, there are several tool icons, likely representing different painting tools or functions within the software.

### Visual Flow / Relationships
The most prominent visual element is the dialog box itself, which is the focal point of the image. The OK button is the primary interactive element, suggesting that clicking it would confirm the creation of the new image. The workspace area serves as the backdrop for the dialog box, indicating where the new image will be displayed once created. The menu bar at the top provides navigation options for the user.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 8.58.42 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.58.42 AM.png](../../image_data/f4ba198ae7de7ea16fe16201db8796513221e19b9ab65740a71023c0581d3c1b.md)

### Overview
This image depicts a screenshot of a software interface, specifically a menu dropdown under the "Image" tab within a tool palette. The interface has a dark theme with a grid background visible in the workspace area. The menu items are listed vertically, with some options having keyboard shortcuts indicated next to them.

### Key Elements
- **Menu Header**: "Image" tab at the top, highlighted in blue.
- **Menu Items**: Listed vertically under the "Image" tab, including options like "New," "Open...," "Save As...," "Invert," "Resize," "Flip," "Pack," "Extract Palette," and "Generate Grease Pencil." Some items have keyboard shortcuts next to them.
- **Workspace Area**: A large gray area with a checkered pattern, indicating transparency or a blank canvas.
- **Tool Palette**: On the left side, various tools are represented by icons, such as brushes and erasers.
- **Status Bar**: At the bottom, there are labels "Image Paint" and "Pan View."

### Visual Flow / Relationships
The most prominent visual element is the open menu under the "Image" tab. The menu items are arranged vertically, and the "Save As..." option is highlighted, suggesting it is currently selected. The workspace area is empty and serves as the backdrop for the menu. The tool palette on the left provides additional context that this is a digital painting or editing software.

</details>

<p></p>



<details>
<summary>Screenshot 2024-04-19 at 8.59.39 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 8.59.39 AM.png](../../image_data/c0109b9603ecc4b6c39139f5cceaa279283197072f3f32106e606492ee6b5901.md)

### Overview
This image depicts a file explorer window within Blender, a 3D modeling software. The interface includes a sidebar with file system navigation, a central area displaying folders and files, and a right panel with file settings and options.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Visual description**: A vertical menu with expandable sections.
  - **Location**: Left side of the screen.
  - **Contents**: Contains folders like "Macintosh HD," "System," "Bookmarks," and "Recent."
  - **Visual styling**: Dark background with light text, icons for folder and bookmark entries.

- **Central Area (Main Content)**:
  - **Visual description**: Displays folders and files with small icons and names.
  - **Location**: Center of the screen.
  - **Contents**: Folders named "MEO," "MESA," and files named "image_B.png," "Image_BA.png," "Image_BR.png," and "Image_MESA.png."
  - **Visual styling**: Light brown folders and orange flame icons for files.

- **Right Panel (Settings)**:
  - **Visual description**: Contains file format settings and options.
  - **Location**: Right side of the screen.
  - **Contents**: Includes file format dropdown ("PNG"), color depth ("8"), compression percentage ("15%"), and color space ("sRGB").
  - **Visual styling**: Dark background with light text and blue accents for interactive elements.

- **Bottom Panel (Footer)**:
  - **Visual description**: Shows file path and a "Save As Image" button.
  - **Location**: Bottom of the screen.
  - **Contents**: Path bar showing "/Users/alexchandler/Desktop... Texture Animation/Models/" and a "Save As Image" button.
  - **Visual styling**: Light text on a dark background.

### Visual Flow / Relationships
- **Most prominent visually**: The central content area displaying folders and files.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: Elements are arranged in a grid-like layout with the sidebar on the left, the main content in the center, and settings on the right. The footer at the bottom provides additional information and actions.

</details>

<p></p>



You have now created a secondary PNG, great work!

Sometimes when creating transparent images you don’t want them to be evenly transparent across the entire texture. In that case, you will want to consider using the “Erase Alpha” or “Add Alpha” brush tools.

You can adjust the radius and strength to determine how wide and how much of the alpha you want to erase. I erased three lines in the secondary image, using 100%, 50%, and 25% strength from left to right. Because the image was already half transparent, 100% and 50% had the same effect.

<details>
<summary>Screenshot 2024-04-19 at 9.17.39 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 9.17.39 AM.png](../../image_data/41e00b1e93f4a8fd3da82edfb2ca2c44a4736222b36e0a5033f5684e6d966e6c.md)

### Overview
This image depicts a user interface element within a software application, specifically a blending mode dropdown menu in a painting tool. The menu is open, revealing various blending modes, and a tooltip is displayed beneath the "Erase Alpha" option.

### Key Elements
- **Blending Mode Dropdown Menu**: Located centrally, with a dark background and light-colored text. The menu items include "Mix," "Darken," "Multiply," among others, listed vertically.
- **Selected Option**: "Erase Alpha" is highlighted in blue, indicating it is currently selected.
- **Tooltip**: Positioned below the "Erase Alpha" option, providing a brief description: "Erase alpha while painting."
- **Menu Header**: "Mix" is shown at the top of the dropdown menu as the current selection.
- **Radius Slider**: To the right of the dropdown menu, there is a slider labeled "Radius" set to "50 px."
- **Strength Slider**: Further to the right, another slider labeled "Strength" is set to "1.000."
- **Tool Icons**: On the left side, there are several icons representing different tools, such as a paintbrush, dropper, eraser, and others.
- **Canvas**: Below the tool icons, there is a canvas area with a checkerboard pattern, indicating transparency.

### Visual Flow / Relationships
The most prominent visual element is the open blending mode dropdown menu. The tooltip is secondary but provides additional information related to the selected option. The layout follows a vertical arrangement for the menu options, with the Radius and Strength sliders positioned to the right, and the tool icons on the far left. The canvas area occupies the bottom portion of the interface.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 9.20.46 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 9.20.46 AM.png](../../image_data/b07d355575a821852f13c8a024b5a5c09cd4778abc0a1e58068a95dad68e7ab0.md)

### Overview
This image depicts a user interface of a digital painting software, specifically in the "Texture Paint" mode. The interface includes various tool options, a workspace area, and settings for brush radius and strength.

### Key Elements
- **Top Menu Bar**: Contains standard menu options like File, Edit, Render, Window, Help, Layout, Modeling, Sculpting, UV Editing, Texture Paint, Shading, and others.
- **Tool Palette**: Located on the left side, showing various painting tools such as a brush, dropper, eraser, and more.
- **Workspace Area**: Central part of the interface displaying a checkerboard pattern, indicating transparency or a blank canvas.
- **Brush Settings**: Located at the top right, showing options for Radius (50 px) and Strength (0.256).
- **Tool Icons**: Small icons representing different tools appear vertically on the left side.
- **Menu Dropdowns**: Options like "Paint," "View," and "Image" are shown with dropdown menus next to them.
- **Status Bar**: At the bottom, there is a status bar that likely displays information about the current operation or selection.

### Visual Flow / Relationships
The most prominent visual element is the workspace area in the center. The tool palette on the left and the brush settings on the right provide contextual information and control over the painting process. The menu bar at the top offers navigation and functionality across different modes and operations within the software.

</details>

<p></p>



#### Mentor’s Note:

There are a large number of software options to choose from, but if you want to use Blender, consider opening the texture, painting over it, and then saving it as a new PNG. Here’s a brief example of one way you might do this while preserving transparency.

Start by opening the texture, then select the saturation brush effect tool. Then paint over your texture to make it all the same color without affecting the alpha channel.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/264024a25bac2a2343ebbe0e11a78830696fc28aace12255f4a23bcd73f7a969.md)

### Overview
This image depicts a digital drawing application interface, specifically a tool for creating and manipulating vector graphics. The main area of focus is a workspace where a white, abstract shape resembling a stylized flame or smoke is drawn against a transparent background indicated by a checkerboard pattern.

### Key Elements
- **Left Panel**: Contains a vertical toolbar with various drawing tools represented by icons. The selected tool is labeled as "TexDraw," which appears to be a pen or brush tool.
- **Workspace**: Located centrally, displaying a white, abstract shape on a transparent background. The shape has a flowing, irregular form with a slight upward curve at the top.
- **Top Menu Bar**: Includes options such as "Paint," "View," and "Image." There is also a dropdown menu labeled "Saturation" with a radius setting of 294 px and a strength setting of 1.000.
- **Right Panel**: Features additional controls and settings, including a magnifying glass icon for zooming and a hand icon for panning the canvas.

### Visual Flow / Relationships
The most prominent visual element is the central workspace where the abstract shape is displayed. The left panel provides access to drawing tools, while the top menu bar offers various editing options. The right panel contains tools for adjusting the view and settings related to the drawing process.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 9.26.48 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 9.26.48 AM.png](../../image_data/d2079fe9957796750b013cba2852da8d245d700efe10bca66b51548509183999.md)

### Overview
The image displays a software interface, specifically a menu dropdown under the "Image" tab within a file management section. The main focus is on the dropdown menu items, which include options such as "New," "Open," "Save," and others. Below the menu, there is a transparent checkerboard background with a flame-like graphic in the center.

### Key Elements
- **Menu Dropdown**: Located in the upper left area, the dropdown contains several menu items listed vertically. Each item has a corresponding keyboard shortcut next to it.
  - **Visual description**: Dark gray background with white text.
  - **Location**: Top-left corner of the screen.
  - **Contents**: "New," "Open...," "Open Cached Render," "Replace...," "Reload," "Edit Externally," "Save," "Save As...," "Save a Copy...," "Save All Images," "Invert," "Resize," "Flip," "Pack," "Extract Palette," "Generate Grease Pencil."
  - **Visual styling**: White text on a dark gray background, with a lighter gray arrow indicating the dropdown direction.

- **Flame Graphic**: Positioned centrally at the bottom of the screen, against a transparent checkerboard background.
  - **Visual description**: A flame-like shape with orange and yellow hues, outlined in black.
  - **Location**: Center of the screen, below the menu.
  - **Contents**: A stylized flame design.
  - **Visual styling**: Orange and yellow gradient with a black outline.

### Visual Flow / Relationships
- **Most Prominent Element**: The menu dropdown is the most prominent feature due to its size and central placement.
- **Arrows and Lines**: The dropdown arrow indicates the direction of the menu.
- **Spatial Relationships**: The flame graphic is positioned below the menu, creating a clear separation between the two elements.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9c65c367e0950c75fa8f51d55b05a1db44e2de6338cc126affb062969afe4830.md)

### Overview
This image depicts a digital painting software interface, specifically showing a blending mode selection menu within the software. The interface includes various tools and options related to image editing.

### Key Elements
- **Left Panel**: Contains a series of tool icons, such as brushes, erasers, and other editing tools, arranged vertically.
- **Main Workspace**: A central area displaying a transparent background with a flame-like shape in the foreground.
- **Blending Mode Menu**: Located in the upper right section, it is a dropdown menu with a dark background and light text. The menu lists various blending modes including 'Mix', 'Darken', 'Multiply', among others.
- **Radius Slider**: Positioned above the blending mode menu, indicating a radius setting of 50 px.
- **Strength Slider**: Located at the top right, showing a strength value of 1.000.
- **Menu Header**: 'Mix' is highlighted in blue, suggesting it is the currently selected blending mode.
- **Status Bar**: At the very top, it displays 'Frame0_BA.png', likely indicating the current file being edited.

### Visual Flow / Relationships
The most prominent visual element is the blending mode menu, which is the focal point of interaction. The workspace below shows the effect of the selected blending mode on the flame shape. The layout follows a typical software design with tools on the left, workspace in the middle, and controls at the top.

</details>

<p></p>



You can then select the dump bucket tool, and adjust the color RGB values to the MEO or MESA values you want to use. And change the color, and thus the MEO/MESA properties of the image. Then just save the image as before, ie. “Image\_MEO.png” or “Image\_MESA.png”

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/0aa9a0d4245a9e9fab320e9ab119c8460609002fd5b07f0a82f626237e2ae75c.md)

### Overview
This image depicts a digital painting software interface, specifically showing a color picker and a canvas area. The color picker is open, displaying a spectrum wheel, and the canvas below contains a white, abstract shape against a checkerboard background indicating transparency.

### Key Elements
- **Color Picker**: Located centrally, occupying a significant portion of the screen. It features a circular spectrum wheel with a dot indicating the current color selection. Below the wheel are RGB, HSV, and Hex color modes, with specific values displayed for Red (0.500), Green (1.000), and Blue (1.000).
- **Canvas**: Positioned at the bottom of the interface, showing a white, abstract shape on a transparent background (checkerboard pattern).
- **Tool Palette**: On the left side, there are various tool icons, including brushes, erasers, and other painting tools.
- **Menu Bar**: At the top, there are menu options labeled "Paint," "View," and "Image."
- **Control Panel**: On the right side, there are sliders for "Radius" set to 294 px and "Strength" set to 1.000.

### Visual Flow / Relationships
The most prominent visual element is the color picker, as it is the largest and most central feature. The canvas is secondary but equally important as it displays the result of the color selection. The tools on the left provide functionality, while the menu bar offers navigation options. The control panel on the right adjusts settings related to the current tool or effect being used.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f65a6954abb586d3596d4691109f2b599bccb6d8893bd3e3fbbfa2b2ad2903cb.md)

### Overview
This image depicts a digital painting software interface, specifically showing a canvas area with a partially filled shape. The interface includes various tool options and settings for adjusting the fill radius and strength.

### Key Elements
- **Canvas Area**: Located centrally, displaying a checkered background indicating transparency. A light blue, irregularly shaped object is being filled.
- **Tool Palette**: On the left side, a vertical toolbar contains several icons representing different painting tools.
- **Fill Tool**: Highlighted as the active tool, indicated by its blue background and icon resembling a paint bucket.
- **Radius and Strength Controls**: At the top right, sliders labeled "Radius" set at 294 px and "Strength" set at 1.000.
- **Menu Bar**: At the very top, a menu bar with options like "Paint," "View," and "Image."

### Visual Flow / Relationships
The most prominent visual element is the central canvas area. The tool palette on the left provides access to different painting tools, while the controls at the top right allow adjustments to the fill process. The layout suggests a user-friendly interface designed for digital painting tasks.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/9782638ced7676cc96fc7784a6d1112cc9e852e8c7c7e8e9115072728ee6e386.md)

### Overview
This image depicts a screenshot of a digital painting software interface, specifically showing the "Image" menu options. The main focus is on the "Save As..." option within the menu, which is highlighted. Below the menu, there is a canvas area displaying a blue, abstract shape against a checkerboard background.

### Key Elements
- **Menu Bar**: Located at the top, it includes options like "New," "Open," "Open Cached Render," "Replace," "Reload," "Edit Externally," "Save," and "Save As...". The "Save As..." option is highlighted in blue.
- **Canvas Area**: Positioned at the bottom, it displays a blue, abstract shape on a checkerboard background. The shape appears to be a stylized, irregular form.
- **Tool Palette**: On the left side, there are various tool icons, including brushes and a fill tool labeled "Fill."

### Visual Flow / Relationships
The most prominent visual element is the "Save As..." option in the menu. The menu items are arranged vertically, and the "Save As..." option is emphasized by being highlighted. The canvas area is located at the bottom of the interface, providing a workspace for the user to work on the blue shape.

</details>

<p></p>



## Step 2: Prepare PNGs

In this Written Guide, we only need the \_UIO FBX, which we exported as UIOImage.fbx. UIO textures need to be uploaded with a \_BA PNG, which we will need to name “Image\_BA.png.”

<details>
<summary>Screenshot 2024-04-19 at 11.06.55 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 11.06.55 AM.png](../../image_data/3fa709a96d79301dd42910422105800ae0469df06c7101cab289e603cd514032.md)

### Overview
This image depicts a file explorer window showing a directory with various files and folders. The files are listed vertically, and some have icons next to them indicating their type. Two specific files are highlighted with blue backgrounds, suggesting selection or focus.

### Key Elements
- **File Explorer Window**: The overall structure of the window, including the vertical list of items.
- **Highlighted Files**: Two files (`Image_BA.png` and `UIOImage.fbx`) are highlighted with blue backgrounds.
- **Unhighlighted Files**: Other files listed without any special highlighting.
- **Folder Icons**: Icons next to some entries indicate folder structures.
- **File Extensions**: File extensions such as `.png`, `.fbx`, and `.fbx` are visible.

### Visual Flow / Relationships
- **Most Prominent**: The highlighted files (`Image_BA.png` and `UIOImage.fbx`) stand out due to the blue background.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: Files are arranged in a vertical list, with folders indicated by folder icons.

</details>

<p></p>



For other texture types, refer to the “Image Imports” section. Try uploading one of each of these to your asset library to familiarize yourself with the process and various texture types.

Then upload the UIOImage.fbx & Image\_BA.png files together using either the Horizon desktop editor or from the web portal. From the web portal, press import, and then select the two files.

<details>
<summary>Screenshot 2024-04-19 at 11.02.04 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 11.02.04 AM.png](../../image_data/c074939a75c4dded0415d6f4a46b789fc6ccb335c81a93714435cbb88915c86d.md)

### Overview
This is a screenshot of a file import interface titled "Import model." It includes instructions, a file upload area, a list of selected files, and import options.

### Key Elements
- **Title**: "Import model" at the top-left corner.
- **Instruction Box**: A light gray box with a light bulb icon explaining that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
- **File Upload Area**: A dashed rectangle with a play button icon, a text box, and a folder icon. The text reads "Drag and drop to upload Or choose files on your device."
- **Selected Files**: Below the upload area, a list shows "Selected 2 files" with two filenames: "Image_BA.png" and "UIOImage.fbx."
- **Folder Selection**: A dropdown menu labeled "Folder" showing "Nyan Frames."
- **Buttons**: Two buttons at the bottom right: "Cancel" and "Import."

### Visual Flow / Relationships
The most prominent visual is the file upload area. The instruction box is above the upload area, providing guidance. The selected files are listed below the upload area, and the folder selection dropdown is beneath them. The buttons are at the very bottom, with "Import" being the primary action button.

</details>

<p></p>

<details>
<summary>Screenshot 2024-04-19 at 11.01.05 AM.png</summary>

<p></p>

[Screenshot 2024-04-19 at 11.01.05 AM.png](../../image_data/bed9a4a9ae7cc21a59bfc3c7e4f5f11bbbf23fd05c7da3bc6e0c0c81310d962d.md)

### Overview
The image depicts a web interface from Meta Horizon, specifically a page for managing assets within a user's account. The layout includes a sidebar with navigation options and a main content area displaying asset thumbnails and interaction buttons.

### Key Elements
- **Sidebar (Left Panel)**:
  - **My Worlds**: A section header with a downward arrow indicating expandable content.
  - **My Assets**: Another section header with a downward arrow, suggesting more options underneath.
  - **Create New Folder**: A blue button with a plus sign and text inviting users to create a new folder.
  - **View All**: A clickable option under My Assets, likely leading to a full list of assets.
  - **My Assets**: A repeated section header, possibly indicating a nested menu or a specific view of assets.

- **Main Content Area (Center)**:
  - **Title**: "Nyan Frames" displayed prominently at the top.
  - **Import Button**: A blue button labeled "+ Import" with a plus sign.
  - **Share Button**: A button with a person icon and the word "Share."
  - **Three Asset Thumbnails**: Each thumbnail has a gradient background with a white cube-like shape in the center.
  - **Search Bar**: A white search bar with a magnifying glass icon and placeholder text "Search assets."

- **Top Bar**:
  - **Meta Horizon Logo**: Located at the top-left corner.
  - **User Avatar**: Positioned at the top-right corner.
  - **Notifications**: A badge showing "15" next to a speech bubble icon.
  - **Search Icon**: A magnifying glass icon near the top-right.
  - **Star Icon**: Likely for bookmarking or saving items.
  - **Download Icon**: A green downward arrow.
  - **Menu Icon**: Three vertical dots indicating additional options.

### Visual Flow / Relationships
- **Most Prominent Element**: The title "Nyan Frames" is the focal point of the main content area.
- **Reading Order**: The flow starts from the top-left sidebar, moving horizontally across the page, then vertically down the main content area, and finally to the interactive elements at the top-right.

</details>

<p></p>



You will also want to have a series of PNGs to animate. We will upload them in Step 3 using the Desktop Editor. Please note that at the time of writing (June 2024) PNG texture assets can only be uploaded using the Desktop Editor.

<details>
<summary>23 Horizon - Add All PNGs.png</summary>

<p></p>

[23 Horizon - Add All PNGs.png](../../image_data/ae79aaca1847bc4b9ec86e01349a9eabe82a382e53b7ee4e6123e09591fd8c00.md)

### Overview
This image shows a file selection interface overlaid on a larger window titled "Import Texture(s)." The smaller window is a file explorer dialog box displaying a folder named "Nyan Frames" under "Image Sequences." The larger window in the background is a dialog box prompting the user to choose texture files for import.

### Key Elements
- **Top Dialog Box ("Import Texture(s)")**:
  - **Visual description**: A dark gray dialog box with rounded corners.
  - **Location**: Top portion of the image.
  - **Contents**: Contains instructions stating that texture files must be in PNG (.png) format and the maximum file size is 50MB. There is a button labeled "Choose files on your device."
  - **Visual styling**: Dark gray background, white text, blue button for file selection.

- **File Explorer Dialog Box ("Select asset files")**:
  - **Visual description**: A light gray dialog box with a grid layout showing thumbnail previews of files.
  - **Location**: Bottom portion of the image.
  - **Contents**: Displays a folder named "Nyan Frames" under "Image Sequences," with a list of PNG files numbered from 00 to 11. Each thumbnail preview shows a pixelated cat character with a rainbow effect.
  - **Visual styling**: Light gray background, blue thumbnails, white text for file names, and a search bar at the top right.

- **Buttons**:
  - **"Choose files on your device" Button**: Located within the top dialog box.
    - **Visual description**: Blue button with white text.
    - **Location**: Centered within the top dialog box.
    - **Contents**: Text indicating the action to perform.
    - **Visual styling**: Blue background, white text, no additional icons.

- **"Cancel" and "Import" Buttons**:
  - **"Cancel" Button**: Located within the top dialog box.
    - **Visual description**: Gray button with white text.
    - **Location**: Left side of the "Import" button within the top dialog box.
    - **Contents**: Text indicating the cancel action.
    - **Visual styling**: Gray background, white text, no additional icons.
  - **"Import" Button**: Located within the top dialog box.
    - **Visual description**: Dark blue button with white text.
    - **Location**: Right side of the "Cancel" button within the top dialog box.
    - **Contents**: Text indicating the import action.
    - **Visual styling**: Dark blue background, white text, no additional icons.

- **Search Bar**:
  - **Visual description**: A white search bar with a magnifying glass icon.
  - **Location**: Top right of the file explorer dialog box.
  - **Contents**: Placeholder text "Search PNGs."
  - **Visual styling**: White background, black text, blue magnifying glass icon.

- **Folder Navigation**:
  - **Visual description**: Navigation controls for browsing folders.
  - **Location**: Left side of the file explorer dialog box.
  - **Contents**: Arrows for navigating up, down, and back.
  - **Visual styling**: Gray icons with white fill.

- **File List**:
  - **Visual description**: A grid layout showing thumbnail previews of files.
  - **Location**: Main area of the file explorer dialog box.
  - **Contents**: Thumbnails of PNG files numbered from 00 to 11, each showing a pixelated cat character with a rainbow effect.
  - **Visual styling**: Light blue background for thumbnails, white text for file numbers, and small white dots around the thumbnails.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Choose files on your device" button in the top dialog box.
- **Arrows and Navigation**: Arrows on the left side of the file explorer dialog box indicate navigation directions.
- **Reading Order**: The file explorer dialog box follows a standard grid layout, with thumbnails arranged in rows and columns.
- **Spatial Relationships**: The file explorer dialog box is positioned below the top dialog box, and both are centered horizontally in the image.

</details>

<p></p>



### Desktop Editor Setup

For the best experience, we recommend creating a new world in the Desktop Editor as you follow along with this tutorial. Select “Custom Model Import,” and then click “Create.”

<details>
<summary>13 Horizon - Create New World.png</summary>

<p></p>

[13 Horizon - Create New World.png](../../image_data/631d991290f897f8dbb668d291766b2ce4d580c84a907862106a3b826f24c61d.md)

### Overview
This image depicts a modal window titled "Create a custom model world" within a user interface. The modal is centered over a darker background that appears to be a dashboard or home screen of a software application called "Horizon Worlds." The modal contains fields and options for creating a new world, with a focus on importing custom models.

### Key Elements
- **Modal Title**: "Create a custom model world"
- **Name Input Field**: Located at the top of the modal, containing the text "Images & Animation Workshop" with a counter indicating "27/60" characters remaining.
- **Choose Creation Method Section**: Contains two radio button options:
  - **Primitive Assets**: Described as using shapes, templates, and a library of assets in Horizon Worlds.
  - **Custom Model Import**: Selected option, described as importing assets from a 3D creation tool.
- **Buttons**: Two buttons labeled "Cancel" and "Create," both located at the bottom of the modal.
- **Background Overlay**: A semi-transparent dark layer covering the underlying dashboard, which includes various images and text snippets related to the "Horizon Worlds" platform.

### Visual Flow / Relationships
The most prominent visual element is the modal itself, which is centrally positioned over the dashboard. The radio button selection indicates a choice between two methods for creating a world. The "Create" button is likely intended to finalize the creation process once the name has been entered and the method chosen. The "Cancel" button allows the user to exit without saving changes.

</details>

<p></p>



Once you have loaded in, at the bottom, select the “Assets” tab. Then click Add New>3D Model>. You can then select the two files, presuming you didn’t already use the web portal to import.

<details>
<summary>14 Horizon - Assets Add New 3D Model.png</summary>

<p></p>

[14 Horizon - Assets Add New 3D Model.png](../../image_data/dc7950b6c745e79c1b70358b2276e55786d1998aa7d770c0f40ced669a0cacc3.md)

### Overview
This image depicts a user interface of a 3D modeling or game development software named "Horizon Worlds - Images & Animation Workshop." The interface includes a central viewport displaying a simple 3D scene with a flat ground plane and a gradient sky. Surrounding the viewport are panels for asset management, hierarchy, and properties.

### Key Elements
- **Viewport**: Located centrally, showing a 3D scene with a flat ground plane and a gradient sky transitioning from light blue at the horizon to a lighter shade above.
- **Hierarchy Panel**: On the left side, labeled "Hierarchy," it contains a single node labeled "SpawnPoint."
- **Assets Panel**: Below the viewport, labeled "Assets," offering options such as "Add New" with choices like "Folder," "3D Model," and "Texture." There are also thumbnail previews of assets like "UIImage," "TransparentImage," "Image," and "FireUIO."
- **Properties Panel**: On the right side, labeled "Properties," currently empty with a placeholder message stating "Select an object to view its properties."
- **Top Bar**: Contains various icons and buttons for navigation, playback, and settings, along with a timestamp indicating the last save time ("All changes saved • 3:54:10 PM").
- **Menu Bar**: At the very top, with options for file operations, view settings, and publishing.

### Visual Flow / Relationships
The layout is structured with the viewport as the focal point, flanked by the hierarchy and assets panels on the left and the properties panel on the right. Navigation and playback controls are positioned at the top bar, providing quick access to essential functions.

</details>

<p></p>



**Pro Tip:** Create a folder first so that you can organize these files.

<details>
<summary>21 Horizon - Create Folder.png</summary>

<p></p>

[21 Horizon - Create Folder.png](../../image_data/ff4f4560cb4bdb5576b53890ba42bf3cdd29f452488143befd95a776b040123d.md)

### Overview
This image depicts a dropdown menu interface element, likely part of a software application or web interface. The menu is triggered by a button labeled "Add New" located at the top-left corner of the screen. The dropdown contains three options: "Folder," "3D Model," and "Texture."

### Key Elements
- **Visual description**: The dropdown menu has a rectangular shape with rounded corners.
- **Location**: The dropdown menu is positioned directly below the "Add New" button.
- **Contents**: 
    - "Folder" option: Located in the first row of the dropdown menu.
    - "3D Model" option: Located in the second row of the dropdown menu.
    - "Texture" option: Located in the third row of the dropdown menu.
- **Visual styling**: The dropdown menu has a dark gray background with white text. The selected item ("Folder") is highlighted with a lighter shade of gray.

### Visual Flow / Relationships
- **Most prominent visually**: The "Folder" option is highlighted, indicating it is currently selected.
- **Arrows, lines, connectors, or implied reading order**: There are no arrows or lines connecting the elements. The reading order is implied by the vertical arrangement of the options.
- **Spatial relationships**: The options are arranged vertically, with each option occupying its own row. The "Add New" button is positioned above the dropdown menu.

</details>

<p></p>



## Step 3: Review Assets

Bring out all uploaded assets into your world to review that they look correct. Make sure to set the UIO Image in a notable spot as we will be using it for animation.

<details>
<summary>Model Examples.png</summary>

<p></p>

[Model Examples.png](../../image_data/0f9744585819669461ea8acba6b726b65c4f95d748fedcb7cb9693173b60876d.md)

### Overview
This image displays a grid layout showcasing various types of images with different lighting and transparency effects. Each cell contains a small rectangular image with a flame-like shape, labeled with its corresponding RGBA value.

### Key Elements
1. **Standard Image**
   - **Visual description**: A rectangular green background with a flame-like shape in the center.
   - **Location**: Top-left corner.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

2. **MEO Image (Metal)**
   - **Visual description**: A black rectangle with a flame-like shape in the center.
   - **Location**: Second column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Black background, white border around the flame shape.

3. **Unlit Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Third column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

4. **Unlit Blend Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Fourth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

5. **Transparent**
   - **Visual description**: A gray rectangle with a flame-like shape in the center.
   - **Location**: Fifth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Gray background, white border around the flame shape.

6. **Masked Image**
   - **Visual description**: A green rectangle with a flame-like shape in the center.
   - **Location**: Sixth column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Green background, no additional borders or highlights.

7. **UIO Image**
   - **Visual description**: A gray rectangle with a flame-like shape in the center.
   - **Location**: Seventh column, first row.
   - **Contents**: The flame shape is orange with a yellow outline.
   - **Visual styling**: Gray background, white border around the flame shape.

8. **RGBA Values**
   - **Standard Image**: RGBA: `(0.5, 0, 0, 1)`
   - **MEO Image (Metal)**: RGBA: `(0.5, 0.5, 0.5, 1)`
   - **Transparent**: RGBA: `(0, 0, 0, 0.5)`
   - **Masked Image**: RGBA: `(0.5, 0.5, 0.5, 0.5)`

### Visual Flow / Relationships
The images are arranged in a grid format with a clear distinction between the standard image and the images with different effects. The flame shapes are consistently placed in the center of each rectangle, and the RGBA values are displayed below each respective image.

</details>

<p></p>



**Note:** You don’t need to do all of them, just the UIO is required, but you might find it helpful to test the other texture options.

From left to right in the image below: \_BR, \_Masked, \_UIO.

<details>
<summary>16 Horizon - Drag Images Into World.png</summary>

<p></p>

[16 Horizon - Drag Images Into World.png](../../image_data/8fcaf90dcf22c674a8d7bc13f2a6822c49f77935bbf30aeac914ad28744e6c4b.md)

### Overview
This image depicts a 3D scene with a grid background, likely representing a virtual environment. There are several objects scattered across the scene, including a humanoid figure and rectangular blocks with colorful gradients.

### Key Elements
- **Humanoid Figure**: Located in the bottom-left area, this figure has a simple blue body with wings and a white triangular tail. It appears to be pointing towards one of the blocks.
- **Blocks**: There are three rectangular blocks with a gradient of colors ranging from pink to yellow and green. Each block has a small gray object on top that resembles a cat.
- **Blue Circle**: Positioned near the top-left of the image, this circle contains a white silhouette of a running person.
- **Grid Background**: The entire scene is set against a light gray grid, suggesting a digital or game-like environment.

### Visual Flow / Relationships
The most prominent visual element is the humanoid figure, which draws attention due to its central position and the direction of its arm. The blocks are distributed around the figure, creating a sense of interaction or exploration within the scene. The blue circle is less prominent but adds to the overall composition.

</details>

<p></p>



## Step 4: Animation PNGs

Similar to how we uploaded assets via the desktop editor on the previous page, we can also upload PNG texture assets.

Select “Texture” from the “Add New” drop-down, then select all of the PNG animation frames you wish to upload.

<details>
<summary>22 Horizon - Select Folder Add New Texture.png</summary>

<p></p>

[22 Horizon - Select Folder Add New Texture.png](../../image_data/1c2dd53a3ee86252a4d93dec450680b4c7626f31da520579c49fc826b10d0445.md)

### Overview
This image depicts a user interface element showing a dropdown menu under the "Add New" button within an "Assets" section of a software application. The dropdown contains options for creating new assets such as a folder, a 3D model, or a texture.

### Key Elements
- **Visual description**: A dropdown menu with rounded corners.
- **Location**: Below the "Add New" button in the "Assets" section.
- **Contents**: 
  - "Folder"
  - "3D Model"
  - "Texture"
- **Visual styling**: Dark gray background with white text. The selected option ("Texture") has a slightly lighter gray background compared to the others.

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu itself. The options are arranged vertically, with no arrows or lines connecting them. The dropdown is the focal point, and the "Add New" button is adjacent to it, indicating that clicking the button triggers the dropdown.

</details>

<p></p>

<details>
<summary>23 Horizon - Add All PNGs.png</summary>

<p></p>

[23 Horizon - Add All PNGs.png](../../image_data/ae79aaca1847bc4b9ec86e01349a9eabe82a382e53b7ee4e6123e09591fd8c00.md)

### Overview
This image shows a file selection interface overlaid on a larger window titled "Import Texture(s)." The smaller window is a file explorer dialog box displaying a folder named "Nyan Frames" under "Image Sequences." The larger window in the background is a dialog box prompting the user to choose texture files for import.

### Key Elements
- **Top Dialog Box ("Import Texture(s)")**:
  - **Visual description**: A dark gray dialog box with rounded corners.
  - **Location**: Top portion of the image.
  - **Contents**: Contains instructions stating that texture files must be in PNG (.png) format and the maximum file size is 50MB. There is a button labeled "Choose files on your device."
  - **Visual styling**: Dark gray background, white text, blue button for file selection.

- **File Explorer Dialog Box ("Select asset files")**:
  - **Visual description**: A light gray dialog box with a grid layout showing thumbnail previews of files.
  - **Location**: Bottom portion of the image.
  - **Contents**: Displays a folder named "Nyan Frames" under "Image Sequences," with a list of PNG files numbered from 00 to 11. Each thumbnail preview shows a pixelated cat character with a rainbow effect.
  - **Visual styling**: Light gray background, blue thumbnails, white text for file names, and a search bar at the top right.

- **Buttons**:
  - **"Choose files on your device" Button**: Located within the top dialog box.
    - **Visual description**: Blue button with white text.
    - **Location**: Centered within the top dialog box.
    - **Contents**: Text indicating the action to perform.
    - **Visual styling**: Blue background, white text, no additional icons.

- **"Cancel" and "Import" Buttons**:
  - **"Cancel" Button**: Located within the top dialog box.
    - **Visual description**: Gray button with white text.
    - **Location**: Left side of the "Import" button within the top dialog box.
    - **Contents**: Text indicating the cancel action.
    - **Visual styling**: Gray background, white text, no additional icons.
  - **"Import" Button**: Located within the top dialog box.
    - **Visual description**: Dark blue button with white text.
    - **Location**: Right side of the "Cancel" button within the top dialog box.
    - **Contents**: Text indicating the import action.
    - **Visual styling**: Dark blue background, white text, no additional icons.

- **Search Bar**:
  - **Visual description**: A white search bar with a magnifying glass icon.
  - **Location**: Top right of the file explorer dialog box.
  - **Contents**: Placeholder text "Search PNGs."
  - **Visual styling**: White background, black text, blue magnifying glass icon.

- **Folder Navigation**:
  - **Visual description**: Navigation controls for browsing folders.
  - **Location**: Left side of the file explorer dialog box.
  - **Contents**: Arrows for navigating up, down, and back.
  - **Visual styling**: Gray icons with white fill.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Choose files on your device" button in the top dialog box.
- **Arrows and Lines**: Navigation arrows for folder browsing are present but not interactive elements.
- **Reading Order**: The sequence starts with the top dialog box, then moves to the file explorer dialog box, and finally to the buttons and search bar.

</details>

<p></p>



**Note:** The names of these images are not required, but it is recommended to name them in a way that makes it easy for you to identify the order in Horizon later.

Next, click Import. This will upload them into your selected folder. Unfortunately, they are not ordered when you upload in bulk like this, which is why naming is so important.

<details>
<summary>24 Horizon - Import All PNGs.png</summary>

<p></p>

[24 Horizon - Import All PNGs.png](../../image_data/667d45cbccfba9a0ee0d1e505998ce4147c763556b7b3d7dbe685a731f1d5136.md)

### Overview
This image depicts a modal dialog box titled "Import Texture(s)" with options for selecting and importing texture files. The interface includes a file selection area, a list of uploaded files, and buttons for canceling or importing the selected textures.

### Key Elements
- **Title**: "Import Texture(s)" located at the top of the dialog box.
- **Instruction Text**: "Texture files must be in PNG (.png) format. The maximum file size is 50MB." situated just below the title.
- **File Selection Button**: A button labeled "+ Choose files on your device" with a plus sign icon, positioned centrally below the instruction text.
- **Uploaded Files List**: A vertical list of uploaded files named "00.png," "01.png," "02.png," "03.png," and "04.png." Each file entry has a green checkmark icon to the left and a red 'X' icon to the right.
- **Cancel Button**: A gray button labeled "Cancel" located at the bottom left.
- **Import Button**: A blue button labeled "Import" located at the bottom right.

### Visual Flow / Relationships
The most prominent visual element is the list of uploaded files. The file selection button is central and serves as the primary action trigger. The cancel and import buttons are placed at the bottom, providing clear options for user interaction. The spatial relationship is linear, guiding the user from the file selection step through the list of files to the final decision point of canceling or importing.

</details>

<p></p>

<details>
<summary>25 Horizon - Select UIO Object Attach AnimatedGIF Script.png</summary>

<p></p>

[25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](../../image_data/a3d6fdc4bb984fe8ea7018e10e3d44e42c257186eaaa3c1fc4fdd2778b94887b.md)

### Overview
This image depicts a user interface from a 3D modeling or animation software, specifically showing a workspace with a 3D view, asset management, and properties panel. The layout includes a sidebar, a central 3D view area, and a properties panel on the right side.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Hierarchy Section**: Displays a tree-like structure with nodes labeled "SpawnPoint," "Plane," and "AnimatedGIF." The "Plane" node is highlighted in blue.
  - **Search Bar**: Located above the hierarchy, with a magnifying glass icon next to it.
  - **Asset Management Section**: Below the hierarchy, it shows folders named "My Folders" and "My Assets," with a specific folder named "Nyan Frames" expanded to reveal sub-assets numbered 08 through 11.

- **Central 3D View Area**:
  - **Grid Background**: A light gray grid serves as the backdrop for the 3D scene.
  - **3D Object**: A pixelated, colorful object resembling a cat with a rainbow-colored tail is centered in the view. It is surrounded by a bounding box with handles indicating transform controls.
  - **Transform Controls**: Small white plus signs appear around the object, suggesting interactive manipulation tools.

- **Properties Panel (Right Panel)**:
  - **Attributes Section**: Contains fields for Position (X: 0.67, Y: 0.47, Z: 2.80), Rotation (X: 270.0, Y: 0, Z: 0), and Scale (X: 1, Y: 1, Z: 1).
  - **Gameplay Tags**: Indicates that the object has no tags attached.
  - **Physics Section**: Includes options for Physics Audio Material set to "None" and settings for Who Can Grab, Avatar Attachable, and Keep Ownership On Collision.
  - **More Section**: Contains additional settings related to the object's interaction properties.

- **Top Bar**:
  - **Navigation Icons**: Includes icons for undo, redo, save, and publish actions.
  - **User Interface Elements**: Displays a clock showing the time as 4:49:47 PM and a notification that all changes have been saved.

### Visual Flow / Relationships
The layout follows a typical workflow-oriented design, with the left sidebar for navigation and asset management, the central area for viewing and manipulating 3D objects, and the right panel for adjusting properties. The 3D object is the focal point within the central view, with transform controls enabling direct interaction. The properties panel provides real-time feedback on the object's attributes, facilitating a user-centric editing experience.

</details>

<p></p>



### Typescript 2.0 Script Setup

We are using the Horizon Typescript 2.0 API, at the time of writing (June 2024), this is the default.

If your world is currently set to 1.0, or another version, you can change this from the script tab by clicking the gear icon and then Script Settings. There you will see the API Version drop-down and can select 2.0.0, then click Apply.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/1a80bbec8e82587a96510d6135bb77fd9421bbb9e9b4aabde296c90d68a437dc.md)

### Overview
The image displays a user interface from a software application, specifically a settings dialog titled "Script Settings." The dialog is modal, overlaying the main workspace of the application. The workspace shows a 3D grid and some UI elements related to asset management and scripting.

### Key Elements
- **Dialog Box**: A rectangular window labeled "Script Settings" at the top. It contains several fields and buttons.
  - **Fields**: 
    - "External Editor": Displays "Default (VS Code)".
    - "External Editor Directory": Shows a path to a directory.
    - "API Version": Displays "1.0.0" with a dropdown menu open showing options "1.0.0" and "2.0.0".
  - **Buttons**: 
    - "Select" and "Reset" next to the "External Editor" field.
    - "Cancel" and "Apply" buttons within the dialog.
  - **Dropdown Menu**: An open dropdown menu under the "API Version" field, showing version options.
- **Background Workspace**: The main area of the application shows a 3D grid with a small icon resembling a plane or object in the center. There are also UI elements like "Hierarchy," "My Assets," and "Scripts" panels on the left side.
- **Status Bar**: At the top right, there is a status bar indicating that changes have been saved and the current time.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Script Settings" dialog box.
- **Spatial Relationships**: The dialog is centered over the workspace, with the workspace elements appearing dimmed behind it. The dropdown menu is partially obscuring part of the workspace.

</details>

<p></p>



### AnimatedGIF.ts

You can copy and paste this code into a new script, or download the code as a file by clicking [here](https://drive.google.com/file/d/1L2RWLL8h75ezou6xoWUApNjr-aaH-2_Z/view?usp=sharing). Then drag the Typescript file into the scripts folder (Scripts > Three Dot Icon > Open Scripts Folder).

```
import { Asset, Component, MeshEntity, PropTypes, TextureAsset } from "horizon/core";

class AnimatedGIF extends Component<typeof AnimatedGIF> {

  static propsDefinition = {
    //Adjust the speedSeconds default here, or for each animation individually from the properties panel
    speedSeconds: { type: PropTypes.Number, default: 1 },
    texture0: { type: PropTypes.Asset },
    texture1: { type: PropTypes.Asset },
    texture2: { type: PropTypes.Asset },
    texture3: { type: PropTypes.Asset },
    texture4: { type: PropTypes.Asset },
    texture5: { type: PropTypes.Asset },
    texture6: { type: PropTypes.Asset },
    texture7: { type: PropTypes.Asset },
    texture8: { type: PropTypes.Asset },
    texture9: { type: PropTypes.Asset },
    texture10: { type: PropTypes.Asset },
    texture11: { type: PropTypes.Asset },
    texture12: { type: PropTypes.Asset },
    texture13: { type: PropTypes.Asset },
    texture14: { type: PropTypes.Asset },
    texture15: { type: PropTypes.Asset },
  };

  //create texture array, starting index of 0
  textures: TextureAsset[] = [];
  index = 0;

  //This value is set in start using this.props.speedSeconds
  delaySpeedMs = 0;

  start() {
    //Add Textures To Array In Correct Order (Skips Unassigned Values)
    this.addTextureToArray(this.props.texture0);
    this.addTextureToArray(this.props.texture1);
    this.addTextureToArray(this.props.texture2);
    this.addTextureToArray(this.props.texture3);
    this.addTextureToArray(this.props.texture4);
    this.addTextureToArray(this.props.texture5);
    this.addTextureToArray(this.props.texture6);
    this.addTextureToArray(this.props.texture7);
    this.addTextureToArray(this.props.texture8);
    this.addTextureToArray(this.props.texture9);
    this.addTextureToArray(this.props.texture10);
    this.addTextureToArray(this.props.texture11);
    this.addTextureToArray(this.props.texture12);
    this.addTextureToArray(this.props.texture13);
    this.addTextureToArray(this.props.texture14);
    this.addTextureToArray(this.props.texture15);

    //Value can be changed from the properties panel, maximum speed of 100x per second
    this.delaySpeedMs = Math.max(Math.floor(this.props.speedSeconds * 1000), 10);

    //Create meshEntity variable to make sure the script is attached to a MeshEntity
    const meshEntity = this.entity.as(MeshEntity);
if (meshEntity) {
      //Create looping event with setInterval
      this.async.setInterval(() => { this.loop(meshEntity); }, this.delaySpeedMs);
    }

    else {
      console.log('AnimatedGIF: meshEntity returned undefined (is the script attached to a UIO CMI MeshEntity?)');
    }
  }

  loop(meshEntity: MeshEntity) {
    meshEntity.setTexture(this.textures[this.index]);

    //update the index and loop back to 0 when reaching the length of the array
    this.index = (this.index + 1) % this.textures.length;

  }

  addTextureToArray(prop: Asset \| undefined) {
    if (prop) {
      this.textures.push(prop.as(TextureAsset));
    }
  }
}

Component.register(AnimatedGIF);
```

### TextureSwappingTrigger.ts

You can copy and paste this code into a new script, or download the code as a file by clicking [here](https://drive.google.com/file/d/1ZCo3ZCAAEOzGzJRaCRmtJ4lxLyoxSk8y/view?usp=sharing). Then drag the Typescript file into the scripts folder (Scripts > Three Dot Icon > Open Scripts Folder).

```
import { Asset, CodeBlockEvents, Component, MeshEntity, Player, PropTypes, TextureAsset } from "horizon/core";

//This script is attached to a trigger gizmo
class TextureSwappingTrigger extends Component<typeof TextureSwappingTrigger> {

  static propsDefinition = {
    //Make sure to reference the UIO MeshEntity on the trigger's property panel
    uioEntity: { type: PropTypes.Entity },
    startingIndex: { type: PropTypes.Number, default: 0 },
    texture0: { type: PropTypes.Asset },
    texture1: { type: PropTypes.Asset },
    texture2: { type: PropTypes.Asset },
    texture3: { type: PropTypes.Asset },
    texture4: { type: PropTypes.Asset },
    texture5: { type: PropTypes.Asset },
    texture6: { type: PropTypes.Asset },
    texture7: { type: PropTypes.Asset },
    texture8: { type: PropTypes.Asset },
    texture9: { type: PropTypes.Asset },
    texture10: { type: PropTypes.Asset },
    texture11: { type: PropTypes.Asset },
    texture12: { type: PropTypes.Asset },
    texture13: { type: PropTypes.Asset },
    texture14: { type: PropTypes.Asset },
    texture15: { type: PropTypes.Asset },
  };

  //create texture array, starting index of 0 is assigned using this.props.startingIndex (adjust from props or on trigger property panel)
  textures: TextureAsset[] = [];
  index = 0;

  preStart() {
    this.connectCodeBlockEvent(this.entity, CodeBlockEvents.OnPlayerEnterTrigger, this.triggerEnter.bind(this));
  }

  start() {
    //Add Textures To Array In Correct Order (Skips Unassigned Values)
    this.addTextureToArray(this.props.texture0);
    this.addTextureToArray(this.props.texture1);
    this.addTextureToArray(this.props.texture2);
    this.addTextureToArray(this.props.texture3);
    this.addTextureToArray(this.props.texture4);
    this.addTextureToArray(this.props.texture5);
    this.addTextureToArray(this.props.texture6);
    this.addTextureToArray(this.props.texture7);
    this.addTextureToArray(this.props.texture8);
    this.addTextureToArray(this.props.texture9);
    this.addTextureToArray(this.props.texture10);
    this.addTextureToArray(this.props.texture11);
    this.addTextureToArray(this.props.texture12);
    this.addTextureToArray(this.props.texture13);
    this.addTextureToArray(this.props.texture14);
    this.addTextureToArray(this.props.texture15);

    //Update to default texture on world start (checks for out of index starting value, adjusting if necessary)
    this.index = this.props.startingIndex % this.textures.length;
    this.updateTexture();
  }

  triggerEnter(player: Player) {
    this.updateTexture();
  }

  updateTexture() {
    //Create meshEntity variable to make sure the script is referencing a MeshEntity
    const meshEntity = this.props.uioEntity?.as(MeshEntity);

    if (meshEntity) {
      meshEntity.setTexture(this.textures[this.index]);
    }
    else {
      console.log('TextureSwappingTrigger: meshEntity returned undefined (is the script referencing a UIO CMI MeshEntity?)');
    }

    //update the index and loop back to 0 when reaching the length of the array
    this.index = (this.index + 1) % this.textures.length;
  }

  addTextureToArray(prop: Asset \| undefined) {
    if (prop) {
      this.textures.push(prop.as(TextureAsset));
    }
  }
}

Component.register(TextureSwappingTrigger);
```

## Step 5: Create Scripts

If you have downloaded the files, you can open the scripts folder by clicking the three-dot icon next to the gear icon, and selecting “Open Scripts Folder.” You can then drag the download files into that folder. Alternatively, if you’d like to write the code, you can create two new scripts, one named “AnimatedGIF” and the other “TextureSwappingTrigger.”

You’ll then hover over the newly created script and on the right side click the three-dot icon to see the drop-down, allowing you to select “Open in External Editor.”

<details>
<summary>18 Horizon - Create AnimatedGIF Script.png</summary>

<p></p>

[18 Horizon - Create AnimatedGIF Script.png](../../image_data/963376083921b6d458f58556767ca3eba09cf59c6325630d0171afafa87bcaf0.md)

### Overview
This image depicts a user interface element within a software application, specifically a section for managing scripts. The interface includes a search bar, a button to create new scripts, and a placeholder text field for entering script names.

### Key Elements
- **Search Bar**: Located at the top-left, it has a magnifying glass icon and a black input field.
- **Create New Script Button**: Positioned next to the search bar, it is a small rectangular button with a plus sign.
- **Placeholder Text Field**: Below the search bar, it contains the text "AnimatedOn" and a placeholder icon resembling a play button.
- **Close Button**: A small 'X' icon located at the top-right corner of the interface.
- **Menu Toggle**: At the very top-left, there is a dropdown menu toggle with a caret symbol.

### Visual Flow / Relationships
The most prominent visual element is the "Create new script" button, as it is centrally located and highlighted by a blue outline. The search bar and the close button are secondary elements, providing functionality and closure options. The placeholder text field is the active area where the user can input script names.

</details>

<p></p>

<details>
<summary>19 Horizon - Open In External Editor.png</summary>

<p></p>

[19 Horizon - Open In External Editor.png](../../image_data/5b4f5e7879b9ea7318ba752b93f1ac20c4df111dbc1dd980f7089dce0a27cd2a.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a script file named "AnimatedGIF". The dropdown contains three options: "Recompile", "Open in External Editor", and "Execution Mode".

### Key Elements
- **Visual description**: The dropdown menu has a dark background with white text.
- **Location**: Positioned at the bottom right of the screen, slightly overlapping another interface element.
- **Contents**: 
  - "Recompile"
  - "Open in External Editor"
  - "Execution Mode"
- **Visual styling**: The text is in a sans-serif font, and the dropdown has a subtle shadow effect, giving it a slight elevation.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu itself.
- **Arrows, lines, connectors**: None visible.
- **Spatial relationships**: The dropdown is nested within a larger interface element labeled "Scripts". The "Recompile" option is the first item listed, followed by "Open in External Editor", and then "Execution Mode". There is a right arrow next to "Execution Mode", indicating a dropdown or expandable feature.

</details>

<p></p>



From the external editor, you’ll be able to paste the scripts seen on the previous pages or write it out by hand for practice writing Typescript code. You will want to make sure to click “Ctrl + S” to save, then the files will compile. Please note that this tutorial doesn’t cover writing Typescript, so if this is your first time, we recommend copying and pasting, or using the downloaded files.

<details>
<summary>20 VS Code - Delete Default Paste AnimatedGIF Script.png</summary>

<p></p>

[20 VS Code - Delete Default Paste AnimatedGIF Script.png](../../image_data/6bf66b46fc97eea7d20356d14bfe1caf17012e93327dc8944278493779f7bbba.md)

### Overview
This image displays a code snippet written in TypeScript, specifically within a file named `AnimatedGIF.ts`. The code defines a class `AnimatedGIF` that extends `Component`, which is part of a larger framework or library. The class is designed to handle animated GIF functionality, likely for use in a game engine or similar application.

### Key Elements
- **Class Definition**: `AnimatedGIF extends Component<typeof AnimatedGIF>`
- **Static Props Definition**: Contains properties such as `speedSeconds`, `texture0` through `texture15`, and `delaySpeedMs`.
- **Texture Array Initialization**: `textures: TextureAsset[] = [];`
- **Index Variable**: `index = 0;`
- **Delay Speed Calculation**: `delaySpeedMs = Math.max(Math.floor(this.props.speedSeconds * 1000), 10);`
- **Start Method**: Initializes textures array and sets up a loop event with interval.
- **Mesh Entity Check**: Checks if `meshEntity` is defined and sets up an interval to call the `loop` method.
- **Loop Method**: Sets texture of `meshEntity` based on `index` and updates index to cycle through textures.
- **Add Texture Method**: Adds a texture asset to the `textures` array.

### Visual Flow / Relationships
The code is structured in a linear fashion, with methods and properties defined sequentially. There are no arrows or connectors indicating relationships between elements, but the flow is clear due to the method definitions and variable assignments.

</details>

<p></p>

<details>
<summary>38 Horizon - Create TextureSwappingTriggerScript.png</summary>

<p></p>

[38 Horizon - Create TextureSwappingTriggerScript.png](../../image_data/9342c6fc058f448e5c23a6e9dce9438d33b34b292d0a70227688ef8e3374ebdd.md)

### Overview
This image displays a code editor window open to a TypeScript file named `TextureSwappingTrigger.ts`. The content is a class definition for a component that handles texture swapping within a game engine environment.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: Code written in TypeScript.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, strings, and variables.

### Visual Flow / Relationships
- Most prominent visually: The code editor window.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>



## Step 6: Animated GIF

Before we get started, make sure to click the square stop world icon, this is a good practice when working on scripted objects as it reduces the chances of bugs and errors.

<details>
<summary>27 Horizon - Stop The World.png</summary>

<p></p>

[27 Horizon - Stop The World.png](../../image_data/49fb5603749dee3d1f3599090b354dd2118cb6a757588054abba417c67767833.md)

### Overview
This image depicts a user interface toolbar with several interactive buttons and a text label below them. The layout suggests a control panel for managing a simulation or game environment.

### Key Elements
- **Play Button**: Located at the far left, it is a blue square with a white play icon.
- **Pause Button**: Positioned next to the play button, it is a gray square with a white pause icon.
- **Rewind Button**: Situated to the right of the pause button, it features a backward arrow within a gray square.
- **Settings Button**: A blue square with a wrench icon, placed to the right of the rewind button.
- **Character Select Button**: A gray square with a human figure icon, positioned to the right of the settings button.
- **Text Label**: Below the buttons, there is a black rectangular label with white text that reads "Stop world simulation."

### Visual Flow / Relationships
The most prominent visual element is the play button due to its central placement and distinct color. The buttons are arranged horizontally, with the text label positioned directly beneath them. There are no arrows or lines connecting the elements, suggesting a linear reading order from left to right.

</details>

<p></p>



Selecting the UIO Plane will open the properties panel on the right side. At the bottom of the properties panel, you can attach a script. We will attach the AnimatedGIF script.

<details>
<summary>25 Horizon - Select UIO Object Attach AnimatedGIF Script.png</summary>

<p></p>

[25 Horizon - Select UIO Object Attach AnimatedGIF Script.png](../../image_data/a3d6fdc4bb984fe8ea7018e10e3d44e42c257186eaaa3c1fc4fdd2778b94887b.md)

### Overview
This image depicts a user interface from a 3D modeling or animation software application. The central area shows a 3D workspace with a grid layout, featuring a pixelated character model and a plane object. The left side displays a hierarchical structure of objects, while the right side contains various properties and settings related to the selected object. The bottom section shows asset management with folders and frames.

### Key Elements
- **Left Panel (Hierarchy)**: Displays a tree-like structure with nodes labeled "SpawnPoint," "Plane," and "AnimatedGIF." The "Plane" node is highlighted in blue.
- **Central Workspace**: Shows a 3D view with a grid background. A pixelated character model is centered, surrounded by a bounding box. Above the character, there is a purple cube labeled "AnimatedGIF."
- **Right Panel (Properties)**: Contains attributes such as Position, Rotation, Scale, and Gameplay Tags. There are also sections for Physics and More settings.
- **Bottom Section (Assets)**: Lists assets under "My Folders" and "My Assets," with a specific folder named "Nyan Frames" expanded. Below this, there are thumbnail previews of frames labeled "08," "10," "11," and "09."

### Visual Flow / Relationships
The most prominent visual elements are the 3D workspace and the hierarchical structure on the left. The workspace is the central focus, with the character model and plane being the primary objects of interest. The properties panel on the right provides detailed information about the selected object, while the bottom section manages assets. The layout follows a typical workflow where users interact with objects in the workspace, view their properties, and manage assets.

</details>

<p></p>



With the script attached, we can now drag the assets into the empty texture slots in the correct order.

<details>
<summary>26 Horizon - Reference All Texture Assets To Correct Index.png</summary>

<p></p>

[26 Horizon - Reference All Texture Assets To Correct Index.png](../../image_data/808ff574aceef3e0ac311f23b15cf52078d7f8bcee9601f8a0bdedaa65033276.md)

### Overview
The image displays a user interface (UI) with a grid layout in the background, likely representing a 3D modeling environment. There are several panels and interactive elements, including a dropdown menu, input fields, and icons. The UI has a dark theme with light-colored text and icons.

### Key Elements
- **Background**: A large grid with light gray squares forming a 3D perspective view.
- **Top Panel**: A dropdown menu labeled "Script" with options such as "Attached S..." and "speedSeconds". The dropdown contains a list of "texture" fields, each with a "None (Object)" label and a circular icon next to them.
- **Left Panel**: Contains two icons labeled "01" and "03", both featuring a wavy line icon.
- **Right Panel**: Displays a smaller version of the grid similar to the background, with a highlighted icon labeled "01".
- **Bottom Panel**: A search bar labeled "Search Nyan Frames" and a button labeled "Asset".

### Visual Flow / Relationships
- The most prominent visual element is the grid in the background.
- Arrows or lines are not present, but the layout suggests a hierarchical relationship between the panels.
- Elements are arranged in a stacked manner, with the top panel containing the dropdown menu, the left panel showing icons, and the right panel displaying a smaller grid.

</details>

<p></p>



<details>
<summary>28 Horizon - Not All References Required Change Speed.png</summary>

<p></p>

[28 Horizon - Not All References Required Change Speed.png](../../image_data/0f8dc9c0ac14860ba271669c8b86a98390a959d4ff90cca302e259d4a052ca14.md)

### Overview
This image depicts a user interface element, specifically a settings panel within a software application. The panel is titled "Script" and contains various configuration options related to textures and animation speed.

### Key Elements
- **Speed Seconds Input**: Located at the top, this is a text input field labeled "speedSeconds" with a value of ".2" entered into it.
- **Texture List**: Below the speed input, there is a vertical list of texture names (`texture0` through `texture15`). Each texture name has a corresponding number input field next to it, ranging from `00` to `15`.
- **Attached Scripts Dropdown**: At the very top, there is a dropdown menu labeled "Attached S..." which currently displays "AnimatedGIF:AnimatedGIF".

### Visual Flow / Relationships
The layout is structured vertically with the speed input at the top followed by the texture list below. The dropdown menu is positioned above the speed input. The texture numbers are aligned to the right of their respective names, and all elements are arranged in a single column.

</details>

<p></p>



With the texture assets referenced, we are almost ready to test the script. Notice that not all texture slots need to be filled out, the script we wrote and are using is intelligent enough to ignore these.

Before we test though, we should adjust the speed parameter to better match our desired animation style, in this case, I used 0.2 seconds.

Now let’s click play world!

<details>
<summary>29 Horizon - Play World.png</summary>

<p></p>

[29 Horizon - Play World.png](../../image_data/62fa7a4bcef0fa6b8f5e907085ec8c20c0e37c0d14389f123339a00d67f9d7d0.md)

### Overview
This image depicts a user interface from a 3D modeling or animation software, specifically showing a scene with a pixelated cat character in a 3D environment. The interface includes various panels such as Hierarchy, Assets, and Properties, indicating a focus on asset management and scene creation.

### Key Elements
- **Scene View**: Located centrally, displaying a 3D model of a pixelated cat with a rainbow-colored tail. The cat is positioned on a grid floor.
- **Hierarchy Panel**: On the left side, showing a tree structure with nodes labeled "SpawnPoint," "Plane," and "AnimatedGIF."
- **Assets Panel**: Below the Scene View, showing a folder named "Nyan Frames" with numbered assets (08, 10, 11, 09) displayed as icons.
- **Properties Panel**: On the right side, currently empty, with a prompt to "Select an object to view its properties."
- **Menu Bar**: At the top, featuring options like "Start world simulation," "Switch to VR," and "Publish."

### Visual Flow / Relationships
The most prominent visual element is the central Scene View, which draws attention due to its colorful and distinct pixelated cat. The Hierarchy and Assets panels provide contextual information about the scene and assets, while the Properties panel is designed to display specific details once an object is selected. The menu bar at the top offers quick access to simulation and publishing functionalities.

</details>

<p></p>



The speed was a little slow, so we’ll adjust to 0.1 seconds. You might have also noticed that the first play through the loop had some hiccups due to needing to download the images, but after it played once, it was smooth.

<details>
<summary>30 Horizon - Adjust Speed To Your Liking.png</summary>

<p></p>

[30 Horizon - Adjust Speed To Your Liking.png](../../image_data/a45bc6b4777fa225130993e648b33dab7846de80d0a7943773e03afa1edf9fa8.md)

### Overview
This image depicts a user interface element within a software application, specifically a settings or configuration panel. The panel includes a dropdown menu and a slider control.

### Key Elements
- **Dropdown Menu**: Located in the upper right area of the panel. It has a dark gray background with white text that reads "AnimatedGIF:AnimatedGIF". There is a downward-pointing arrow indicating that the dropdown can be expanded.
- **Slider Control**: Positioned below the dropdown menu. It has a dark gray background with white text that reads "speedSeconds". To the right of the label, there is a black rectangular slider with a white value indicator showing "0.1".

### Visual Flow / Relationships
The most prominent visual element is the dropdown menu due to its larger size and central placement. The slider control is secondary but still noticeable due to its distinct shape and label. There are no arrows or lines connecting these elements, suggesting they are independent controls within the same panel.

</details>

<p></p>

<details>
<summary>35 Horizon - Billboarded Nyan Cat.gif</summary>

<p></p>

[35 Horizon - Billboarded Nyan Cat.gif](../../image_data/3ccdb9e1616a0600a789139e6c081ce29df2960af81882f6098cb2b1baaacecc.md)

### Overview
The image depicts a scene with a character facing away from the viewer, looking at a pixelated cat and a rainbow. The background is a light blue gradient, and there are small white pixelated dots scattered around, suggesting a digital or virtual environment.

### Key Elements
- **Character**: A person with brown hair, wearing a tie-dye shirt, is positioned on the left side of the image. The back of the character is visible.
- **Rainbow**: A pixelated rainbow is located to the left of the cat. It has distinct bands of red, orange, yellow, green, blue, and purple.
- **Cat**: A pixelated cat with a pink donut on its head is positioned to the right of the rainbow. The cat has a gray body with pink ears and nose, and its eyes are closed.
- **Background**: The background is a light blue gradient, giving a digital or virtual feel.
- **Pixelated Dots**: Small white pixelated dots are scattered across the background, adding to the digital aesthetic.

### Visual Flow / Relationships
The most prominent visual elements are the character and the cat. The character is facing the cat, which is the focal point of the image. The rainbow is positioned to the left of the cat, creating a visual balance. The pixelated dots are distributed randomly throughout the background, adding texture without drawing attention away from the main subjects.

</details>

<p></p>



## Step 7: Billboarding

This looks good, but only from one side, it would work great on a wall, but what if you want it to float freely? In that case, we should billboard our GIF!

As of the time of writing (June 2024), billboarding can only be applied to grouped objects, not singular planes like this, so we will need to duplicate (Ctrl + D), and then group the two GIFs. After grouping we will delete the extra GIF.

Note: You can select two objects in the hierarchy on the left side by holding shift or ctrl, and when you right-click the selection will have an option to “Group selection.”

<details>
<summary>31 Horizon - Group With Some Object.png</summary>

<p></p>

[31 Horizon - Group With Some Object.png](../../image_data/a6676366e21f190f219b0a21322a588f036abb96ba6cf0c3d9e942eed94e5fe7.md)

### Overview
This image depicts a contextual menu with a dark theme, likely from a software application interface. The menu contains several options related to asset management and selection manipulation.

### Key Elements
- **Visual description**: The menu has a dark background with white text and light gray separators.
- **Location**: The menu is positioned centrally, appearing as a dropdown from a highlighted area above.
- **Contents**: 
    - "Create Asset"
    - "Delete selection" with a shortcut key "Del" next to it.
    - "Group selection" with a shortcut key "Ctrl + G" next to it.
    - "Focus on selection" with a shortcut key "F" next to it.
    - "Create parent object"
- **Visual styling**: The text is in a sans-serif font, and the menu items are evenly spaced with light gray vertical separators between them.

### Visual Flow / Relationships
The most prominent visual element is the menu itself, which is the focal point. The items are arranged vertically, with no arrows or lines connecting them. The menu items are read from top to bottom, indicating a linear sequence of actions.

</details>

<p></p>



Afterwards, we can drop down into the group from the hierarchy, and then right-click to delete the extra plane.

<details>
<summary>32 Horizon - Delete That Object.png</summary>

<p></p>

[32 Horizon - Delete That Object.png](../../image_data/69c5d1f1928812674f6d7d928f5a39959634bed9782370ee181987e32a14726f.md)

### Overview
This image depicts a right-click contextual menu within a software interface, likely a game development or asset management tool. The menu is displayed over a dark-themed workspace with a sidebar on the left showing entity groups and assets.

### Key Elements
- **Menu Background**: Dark gray with a subtle gradient, located centrally.
- **Menu Items**: Text entries listed vertically.
  - **Rename**: Located at the top, white text.
  - **Duplicate**: Followed by a shortcut key (Ctrl + D) to the right.
  - **Create Asset**: White text.
  - **Delete selection**: Highlighted in a lighter shade of gray, indicating selection.
  - **Unparent selection**: White text.
  - **Focus on selection**: White text.
  - **Create parent object**: White text at the bottom.
- **Highlighted Item**: "Delete selection" is highlighted in a lighter gray, suggesting user interaction.
- **Sidebar**: On the left, a dark sidebar displays entity groups and assets, with "Plane" being highlighted in blue, indicating selection.

### Visual Flow / Relationships
The menu items are arranged vertically, with no arrows or lines connecting them. The highlighted item draws attention due to its lighter background. The sidebar on the left provides context for the menu items, showing that the user has selected "Plane."

</details>

<p></p>



To apply billboarding we will select the [EntityGroup] from the hierarchy. On the right side properties panel, set Motion to Animated, which will reveal the Billboard property. You can then select Lock-Y or Freeform from the drop-down.

<details>
<summary>33 Horizon - Select Group Set Motion To Animated.png</summary>

<p></p>

[33 Horizon - Select Group Set Motion To Animated.png](../../image_data/7cf4b76ef3c7577ef95b1500395ce2343698b86b7a0c298bf41982ce1dd27b70.md)

### Overview
This image depicts a dropdown menu interface element within a user interface (UI). The menu is open, showing options related to motion settings. The menu items are labeled "None," "Animated," and "Interactive."

### Key Elements
- **Visual description**: The dropdown menu has a dark background with light text for readability.
- **Location**: The dropdown menu is located in the center of the image, slightly below the top bar which contains the word "Motion."
- **Contents**: 
  - "None" is highlighted with a checkmark next to it.
  - "Animated" and "Interactive" are listed below.
- **Visual styling**: The menu has a simple design with a black background and white/light gray text. There are no additional decorative elements.

### Visual Flow / Relationships
- **Most prominent visually**: The "None" option is the most prominent due to its highlighting.
- **Arrows, lines, connectors**: There are no arrows or lines connecting the elements.
- **Spatial relationships**: The elements are arranged vertically, with "None" at the top, followed by "Animated," and then "Interactive."

</details>

<p></p>

<details>
<summary>34 Horizon - Billboard Freeform.png</summary>

<p></p>

[34 Horizon - Billboard Freeform.png](../../image_data/cabf021d52c06b8de8c9a3f11f36da28e4aac231b5422bf1bbc2f609123efcfa.md)

### Overview
This image depicts a dropdown menu within a user interface, likely part of a settings or configuration screen. The menu is open, revealing options that can be selected. The overall design suggests a modern, clean aesthetic with a dark theme.

### Key Elements
- **Dropdown Menu**: A rectangular dropdown menu with rounded corners, located centrally in the image.
  - **Visual description**: Dark gray background with white text.
  - **Location**: Centered horizontally and vertically within the image.
  - **Contents**: Contains three options listed vertically:
    > "None"
    > "Lock-Y"
    > "Freeform"
  - **Visual styling**: White text on a dark gray background, with a subtle shadow effect underneath the menu to give depth.

- **Background**: The background outside the dropdown menu is a darker shade of gray, indicating a secondary background layer.

- **Toggle Button**: Located at the top right of the dropdown menu, with a white background and a downward-pointing arrow.
  - **Visual description**: White background with black text and a black arrow.
  - **Location**: Top-right corner of the dropdown menu.
  - **Contents**: Displays the word "None" followed by a downward-pointing arrow.
  - **Visual styling**: Black text on a white background, with a thin black border around the toggle button.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu itself, as it is the focal point of the image.
- **Arrows/lines/connectors**: The downward-pointing arrow on the toggle button indicates the direction of the dropdown.
- **Spatial relationships**: The dropdown menu is positioned below the toggle button, and the options within the dropdown are stacked vertically.

</details>

<p></p>



Now start the world and run around in preview mode!

## Step 8: Texture Trigger

This script will allow visitors to change the texture of your UIO mesh, one texture at a time. It will run on a trigger gizmo, so let’s start by pulling one out. We’ll also need to be able to see the trigger in preview mode, so let’s grab a cylinder to use as a placeholder for a button. You will also want to bring out a new UIO asset. We can then position everything in our world.

Select the trigger, then attach the script to the trigger gizmo from the bottom of the right-hand side properties panel.

<details>
<summary>39 Horizon - Bring Out A Trigger Gizmo.png</summary>

<p></p>

[39 Horizon - Bring Out A Trigger Gizmo.png](../../image_data/291654fbf7464a87a7b285c315b897a86dcb8b50641dd4b04658904aec6fecbb.md)

### Overview
This image depicts a user interface element, specifically a menu or panel titled "Gizmos." It contains various icons representing different functionalities or objects within a software environment, likely related to game development or 3D modeling.

### Key Elements
- **Trigger Zone**: A green hexagon icon with a white symbol inside, labeled "Trigger Zone."
- **Script**: A purple square with a white code snippet icon, labeled "Script."
- **Text**: A purple square with a white "Aa" icon, labeled "Text."
- **Spawn Point**: A blue square with a white human figure icon pointing downwards, labeled "Spawn Point."
- **Door**: A pink square with a white door icon, labeled "Door."
- **Environment**: A light blue square with a white sun and cloud icon, labeled "Environment."
- **Dynamic Light**: A yellow square with a white light bulb icon, labeled "Dynamic Light."
- **Static Light**: A light blue square with a white cube icon, labeled "Static Light."
- **TrailFx**: An orange square with a white trail icon, labeled "TrailFx."
- **ParticleFx**: An orange square with a white particle icon, labeled "ParticleFx."
- **Sound Recorder**: A teal square with a white microphone icon, labeled "Sound Recorder."
- **Quests**: An orange square with a white star icon, labeled "Quests."
- **World**: A gold square with a white trophy icon, labeled "World."
- **Projectile**: A blue square with a white wrench icon, labeled "Projectile."
- **Snap**: A blue square with a white arrow icon, labeled "Snap."
- **Raycast**: A dark blue square with a white target icon, labeled "Raycast."

### Visual Flow / Relationships
The elements are arranged in a grid layout with four rows and three columns. Each icon has a corresponding label beneath it. The icons are evenly spaced, and there are no arrows or lines connecting them, indicating that they are independent elements within the interface. The layout suggests a hierarchical organization where users can select different tools or objects for their projects.

</details>

<p></p>

<details>
<summary>40 Horizon - Bring Out A Button Shape.png</summary>

<p></p>

[40 Horizon - Bring Out A Button Shape.png](../../image_data/7212efee4d6c952a32ce52541777aa4079b684d28a9dde9bfd03f094650dc76d.md)

### Overview
This image depicts a user interface element showing a selection of geometric shapes. The interface includes a search bar at the top, followed by a grid layout displaying various 3D models of shapes. Each shape has a corresponding label underneath it.

### Key Elements
- **Search Bar**: Located at the very top, spanning the width of the interface. It has a magnifying glass icon on the left side.
- **Shape Labels**: Positioned directly below each shape preview, providing names such as "SmoothCylinder," "HalfTube," "Cone," etc.
- **Shape Previews**: Square tiles containing 3D models of shapes. Each tile has a gradient background transitioning from light blue to white.
- **Shape Labels**: Positioned directly below each shape preview, providing names such as "SmoothCylinder," "HalfTube," "Cone," etc.

### Visual Flow / Relationships
The most prominent visual element is the search bar at the top. Below it, the shapes are arranged in a grid layout, with each shape having its own tile. The tiles are arranged in rows and columns, creating a clear and organized visual flow. There are no arrows or lines connecting the elements, but the arrangement suggests a logical reading order from left to right and then down to the next row.

</details>

<p></p>

<details>
<summary>41 Horizon - Adjust Scene To Your Liking And Select Trigger.png</summary>

<p></p>

[41 Horizon - Adjust Scene To Your Liking And Select Trigger.png](../../image_data/604d6ba555bc7364fd7e3fc7dd02d4624a42d9f08cf1fe82bae60b11d1b5b77e.md)

### Overview
The image depicts a pixelated scene featuring a cat character and a colorful rectangular object resembling a rainbow. The background is a simple grid floor with a gradient sky above. There are small white plus signs scattered around the image, likely indicating interactive elements or markers.

### Key Elements
- **Cat Character**: Located centrally, the cat has a pixelated design with a black body, pink cheeks, and a smiling face. It is positioned as if lying down.
- **Rainbow Object**: To the left of the cat, there is a rectangular object composed of stacked pixels in the colors of a rainbow (red, orange, yellow, green, blue, purple).
- **Grid Floor**: The entire scene is set on a light gray grid, suggesting a virtual environment or a game interface.
- **Sky**: The background features a gradient sky transitioning from light blue at the horizon to a lighter shade higher up, with small white plus signs distributed across it.

### Visual Flow / Relationships
The cat is the most prominent visual element due to its central placement and distinct coloration. The rainbow object is secondary but still noticeable due to its bright colors. The grid floor and sky provide a neutral backdrop that helps the cat and rainbow stand out. The white plus signs appear to be floating and could indicate points of interest or interaction within the scene.

</details>

<p></p>



<details>
<summary>42 Horizon - Attach Script.png</summary>

<p></p>

[42 Horizon - Attach Script.png](../../image_data/0b2b2a236fa428efa564738b379ccc6bfb62e1e2cd192d792aa0ca7654776712.md)

### Overview
This image depicts a user interface element showing a dropdown menu within a script settings panel. The panel is part of a larger application interface, likely related to game development or animation tools given the terminology used.

### Key Elements
- **Dropdown Menu**: Located in the center-right area of the image. It is a vertical dropdown menu with options listed.
  - **Visual description**: The dropdown has a dark background with white text and a light gray border.
  - **Location**: Positioned centrally, slightly to the right of the screen.
  - **Contents**: Contains two visible options:
    > "None"
    > "AnimatedGIF:AnimatedGIF"
    > "TextureSwappingTrigger:TextureSwappingTrigger"
  - **Visual styling**: The dropdown has a subtle shadow effect, giving it a slight elevation from the parent panel.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu is the focal point due to its central placement and distinct color contrast against the darker background.
- **Spatial relationships**: The dropdown is nested within a larger panel labeled "Script," which is located at the top-left corner of the image. There are no arrows or lines connecting elements, suggesting a simple, direct interaction flow where users select from the dropdown.

</details>

<p></p>



Select the UIO plane, and give it a good name so we can better identify it.

<details>
<summary>43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png</summary>

<p></p>

[43 Horizon - Rename New UIO Object As NyanCatFrameByFrame.png](../../image_data/a2ca1aec807d7f982523345bd6857d5ce51cc2fec934507cf6fb01f603a36fb8.md)

### Overview
The image depicts a 3D modeling environment interface, likely from a game development tool such as Unity. It shows a pixelated character model named "NyanCatFrameByFrame" placed within a 3D scene. The interface includes a properties panel on the right side displaying various attributes and settings related to the object.

### Key Elements
- **Pixelated Character Model**: A small, colorful, pixelated cat character with a rainbow-colored body and a pink bow on its head. It is positioned within a bounding box.
- **Bounding Box**: A translucent blue cube surrounding the character model, indicating its spatial dimensions.
- **Grid Background**: A light gray grid background representing the 3D space.
- **Properties Panel**: Located on the right side, containing multiple sections such as Behavior, Attributes, GameplayTags, Physics, and More. Each section has checkboxes, dropdown menus, and text fields.
- **Scene Background**: A gradient sky with a light blue hue, transitioning to white at the horizon line.

### Visual Flow / Relationships
- **Most Prominent Element**: The pixelated cat character model.
- **Arrows/Connectors**: None visible.
- **Spatial Relationships**: The character model is centered within the scene, with the bounding box highlighting its dimensions. The properties panel is adjacent to the scene, providing information about the object.

</details>

<p></p>



Select the trigger gizmo again, and now we are going to fill out the uioEntity reference. Clicking the empty pill slot will give us a drop-down, and we can even type to search for our UIO plane.

<details>
<summary>44 Horizon - Reference NyanCatFrameByFrame.png</summary>

<p></p>

[44 Horizon - Reference NyanCatFrameByFrame.png](../../image_data/27fe36facbdbb0311f4545e9dc2e345543f9d8e7382e7922119c8962d74dcbb8.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a script parameter. The dropdown contains a list of options related to entity groups and specific entities.

### Key Elements
- **Dropdown Menu**: A rectangular dropdown menu with a dark background and light blue border. It is located centrally in the image.
  - **Contents**: Contains a list of items such as "None," "SpawnPoint," "[EntityGroup]," "NyanCatGIF," "NyanCatFrameByFrame," "Trigger," and "SmoothCylinder." Each item has a small icon next to it.
  - **Visual styling**: The items are listed vertically, with the currently selected option highlighted in a lighter shade of gray.

- **Search Bar**: Located at the top of the dropdown menu, it is a rectangular input field with a magnifying glass icon on the left side. It is outlined in light blue and has a placeholder text "None" inside it.

- **Selected Option**: "NyanCatFrameByFrame" is highlighted in the dropdown menu, indicating it is the current selection.

- **Background**: The background of the application interface is partially visible behind the dropdown menu, showing various parameters and settings related to scripting.

### Visual Flow / Relationships
- **Most Prominent Element**: The dropdown menu is the most prominent visual element due to its central placement and the fact that it is open.
- **Arrows/Connectors**: There are no arrows or connectors in this image.
- **Spatial Relationships**: The dropdown menu is positioned above the search bar and below the "Script" header. The items in the dropdown are arranged vertically, with the selected option highlighted.

</details>

<p></p>



After filling that out, we still need to reference the texture entities. We can do that the same way we did before for our GIF animation.

Once it is all filled out we can test. Note that there is an optional startingIndex property. You can use this to set the texture you want the UIO plane to start with. But, it only works if you have no gaps in your references up until that index (otherwise the values will be off by 1-2 or so).

<details>
<summary>45 Horizon - Reference Desired Frames Optionally Change Starting Index.png</summary>

<p></p>

[45 Horizon - Reference Desired Frames Optionally Change Starting Index.png](../../image_data/fb85b1b30402e46dd7c441ffa6a1a94dac0945fe6bde21c34ca18a36c7fbe09a.md)

### Overview
This image depicts a user interface element within a script editor or configuration tool. It shows a list of textures being assigned to a starting index in a sequence. The interface includes a dropdown menu for selecting an entity and a starting index field, followed by a series of texture slots labeled `texture0` through `texture12`.

### Key Elements
- **Dropdown Menu**: Located at the top-left, labeled `uioEntity`. Contains a placeholder text `NyanCatFrameByF...` indicating a specific entity selection.
- **Starting Index Field**: Positioned next to the dropdown, with the value `0` currently entered.
- **Texture Slots**: A vertical list of 13 slots, each labeled `textureX` where X ranges from 0 to 12. Each slot contains a small icon resembling a cube and a number indicating the texture index (`00` to `11`). The last slot (`texture12`) is marked as `None (Object)` with a radio button next to it.
- **Radio Buttons**: Small circles next to each texture slot, likely for selecting a default texture.

### Visual Flow / Relationships
The layout is linear, with the dropdown menu and starting index field at the top, followed by the texture slots arranged vertically. The radio buttons are aligned to the right of each texture slot. The visual hierarchy is clear, with the starting index field being the most prominent due to its central placement and active input field.

</details>

<p></p>



Going into preview mode, you can now jump up and down in the trigger to test that it changes the texture, moving forward one frame of the animation at a time. This would be great for an instruction board, or anywhere you want users to be able to customize their experience (ie. a skybox, wall art, etc).

<details>
<summary>46 Horizon - Jump On Button To Test.png</summary>

<p></p>

[46 Horizon - Jump On Button To Test.png](../../image_data/44ad82ca576354040564f76bca97d389b5695990a98e01f92bb9e48fa772544d.md)

### Overview
This image depicts a 3D-rendered scene featuring a character and a pixelated cat. The character is standing on a grid-like floor, facing away from the viewer, while the cat is positioned above and slightly behind them. The scene has a playful, digital art style.

### Key Elements
- **Character**: A 3D-rendered figure with short brown hair, wearing a pastel-colored shirt and dark pants. The character is standing with arms slightly raised, as if interacting with the cat.
- **Pixelated Cat**: Positioned above the character, the cat has a pixelated design with a pink face, black ears, and a rainbow-colored body. The cat appears to be looking towards the character.
- **Grid Floor**: The background consists of a light gray grid pattern, suggesting a virtual environment or a game setting.

### Visual Flow / Relationships
The most prominent visual element is the character, as they are the focal point of the image. The pixelated cat is secondary but draws attention due to its bright colors and distinct shape. There are no arrows or lines connecting elements, and the reading order is naturally from the character to the cat.

</details>

<p></p>



## Step 9: Add More Textures

If you need more animation frames than the default 15, it is relatively easy to add more to the script.

You’ll first want to create more texture asset references on the properties panel. In Typescript we often refer to these as “props.” An easy way to duplicate is to click on the far right of the texture15 line of code, then Copy and Paste (Ctrl + C and Ctrl + V). You can paste as many copies as you would like. Then rename them, incrementing the number upwards.

<details>
<summary>36 Horizon - Duplicate And Rename Props To Add More.png</summary>

<p></p>

[36 Horizon - Duplicate And Rename Props To Add More.png](../../image_data/f812fc3b42577ded6de934a38fa46e46f903376b43dfa53fe472e841c56f4d51.md)

### Overview
This image displays a code snippet from a JavaScript file, specifically defining a class named `AnimatedGIF`. The class extends `Component` and includes a static `propsDefinition` object that defines various properties for the component.

### Key Elements
- **Class Definition**: `class AnimatedGIF extends Component<typeof AnimatedGIF>`
- **Static Props Definition**: `static propsDefinition = { ... }`
- **Properties**: Each property is defined as `{ type: PropTypes.Asset }`, indicating that these properties are assets.
- **Property Names**: `speedSeconds`, `texture0` through `texture15`.
- **Type Information**: Each property has a `type` field set to `PropTypes.Asset`.

### Visual Flow / Relationships
The code is structured in a single column, with each line representing a part of the class definition and its properties. There are no arrows, lines, or connectors, and the reading order follows the standard left-to-right, top-to-bottom flow typical of code snippets.

</details>

<p></p>



Next, we’ll need to add these to the “textures” array. Note that in Typescript an array is similar to a list in Codeblocks. While learning Typescript you’ll find a lot of terms from Codeblocks have similar but different names. For instance, you’ll often hear objects referred to as Entities, this is because Object is a type of data in Typescript.

Next, we’ll duplicate the addTextureToArray line for each new prop added, also renaming to match all the new props.

<details>
<summary>37 Horizon - Duplicate Add To Array And Rename.png</summary>

<p></p>

[37 Horizon - Duplicate Add To Array And Rename.png](../../image_data/cbdb1ded6624e24fbfe12d3c35b07b11e83b09882472aae832710d624511a1bc.md)

### Overview
This image displays a code snippet written in JavaScript, specifically within a method named `start()`. The code involves adding textures to an array in a specific order, skipping any unassigned values. The syntax highlights are visible, indicating that the code is part of a larger program, likely related to asset management or rendering in a game engine or similar application.

### Key Elements
- **Visual description**: Code editor interface with syntax highlighting.
- **Location**: Top-left corner of the image.
- **Contents**: `start()` method containing multiple calls to `addTextureToArray`.
- **Visual styling**: Dark theme with syntax highlighting in green, blue, and white.

### Visual Flow / Relationships
- Most prominent visually: The `start()` method and its nested calls.
- Arrows, lines, or connectors: None.
- Spatial relationships: The code is structured linearly, moving from the start of the method to the end.

</details>

<p></p>



A couple of quick things about this “addTextureToArray” function: we call a method or function, these are similar to events in Horizon Codeblocks, but different because they happen instantly. They also require parentheses “( )” to be called, otherwise it is just a reference and nothing happens.

Inside the parentheses is where we put parameters. Below you can see we receive the parameter “prop” which is either an Asset or undefined. It might be undefined because we don’t have to fill out the texture on the properties panel. We account for this using an if statement to check the truthiness of the prop.

<details>
<summary>38 Horizon - Create TextureSwappingTriggerScript.png</summary>

<p></p>

[38 Horizon - Create TextureSwappingTriggerScript.png](../../image_data/9342c6fc058f448e5c23a6e9dce9438d33b34b292d0a70227688ef8e3374ebdd.md)

### Overview
This image displays a code editor window open to a TypeScript file named `TextureSwappingTrigger.ts`. The content is a class definition for a component that handles texture swapping within a game engine environment.

### Key Elements
- **Visual description**: A code editor interface with syntax highlighting.
- **Location**: Top-left corner.
- **Contents**: Code written in TypeScript.
- **Visual styling**: Dark theme with syntax highlighting for keywords, comments, strings, and variables.

### Visual Flow / Relationships
- Most prominent visually: The code editor window.
- No arrows or lines connecting elements.
- Reading order follows the standard left-to-right, top-to-bottom flow typical of code editors.

</details>

<p></p>



A lot of this will feel like magic early on, and that is totally okay! Over time it will begin to make more and more sense.

There is a lot to learn in TypeScript, so if you have any questions about the code or want to dive deeper into how it works, be sure to ask in Discord, or check out some of the other Typescript resources!

## Extended Learning

Below we have provided some CMI and Scripting challenges for you to try implementing on your own. These require some outside knowledge, and we encourage you to ask questions in Discord if you get stuck or are unsure how to complete these or book a 1:1 mentor session.

### CMI Extended Learning:

#### Novice

Using the “TextureSwappingTrigger” script allows visitors to customize their experience in your world (ie. custom textures, pictures on walls, etc).

#### Intermediate

Create a fire. Either using a 3D model with an animated texture, or a 2D plane plus billboarding.

Tip: Some fire animations only look good on a billboarded 2D plane. For a 3D model, consider having intersecting planes floating above for the wispy elements of the fire.

#### Advanced

Try anything with a 3D model rather than a 2D plane. If you accomplish this, share your success in Discord!

## Scripting Extended Learning

#### Novice

Build a button using the “TextureSwappingTrigger” script so your visitors can adjust a skybox or some other texture, allowing users to customize their experience in your world.

#### Intermediate

Create a grabbable object that when you press the A or B button swaps the texture. This could be as simple as a colorful bouncy ball with various texture options.

Tip: Our trigger script uses “onPlayerEnterTrigger,” you’ll want to use a different codeblock event, when you backspace the current event name and the period and retype the period, you will see a drop down list for all codeblock event options!

#### Advanced

Add custom VFX. Think muzzle flashes, sparkles, smoke, or if you put the animation on a 3D object (ie. a cylinder), you can attach it to a player and make custom player effects like leveling up, taking damage, healing, etc.

Tip: You’ll want to have a way to run the animation X# of times. And either an off texture (ie. 100% transparent/masked), or set the visibility to false when not being used.

## Further Assistance

For any questions or further assistance, creators are encouraged to join the discussion on the Discord server or to schedule a mentor session for personalized guidance.