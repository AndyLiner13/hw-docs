Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/offset-pivots

# Use offset pivots

This topic describes when and how offset pivot is used, outlines the expected behavior of offset pivot in the desktop editor, and ends with a discussion on managing offset pivots and best practices.

By default, an entity’s pivot point is its center. This behavior works well for entities like planets, ice skaters, and spinning tops, but not for entities such as doors, drawbridges, and treasure chest lids. For the animation of these entities to look natural, [pivot](../Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#pivot) points need to be offset or moved.

When you create an asset using a [digital content creation tool](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements), you can configure the [3D model](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) to use an offset pivot instead of a center pivot. As you import [this type of asset](../../Reference/core/Classes/MeshEntity.md) to your personal asset library in Meta Horizon Worlds, you have the option to [**Preserve offset pivots**](../../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#part-2-import-custom-models-and-write-your-first-script). When you enable **Preserve offset pivot**, entities spawned from the asset will rotate and scale around the pivot defined in the FBX file, instead of the default center pivot.

<details>
<summary>Turn on Preserve Offset Pivot</summary>

<p></p>

[Turn on Preserve Offset Pivot](../../image_data/b907e014b4554cce7b3f982ec1ae843f151ee0a9517390782989963424ec7917.md)

### Overview
This image depicts a user interface element showing a toggle switch and accompanying text explaining its function. The overall composition is simple, with a focus on the toggle switch and descriptive text below it.

### Key Elements
- **Toggle Switch**: Located in the top-left corner. It is a blue rectangular button with a white square inside, indicating the current state of the toggle.
- **Text**: Positioned below the toggle switch. The text reads: 
    > "Preserve offset pivots\nPreserves pivot defined in original asset (if disabled, pivots will be centered)"
- **Background**: The background is a dark gray color, providing contrast to the lighter elements.

### Visual Flow / Relationships
The toggle switch is the most prominent visual element due to its placement and distinct color. The text below explains the function of the toggle switch, creating a clear relationship between the visual and the information provided.

</details>

<p></p>



Although you can use offset pivots in both the [desktop editor](../Desktop%20Editor.md) and the [VR editor](../../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the desktop experience. Additionally, you can also write [TypeScript code](../../Reference/core/Classes/Entity.md) that uses the offset pivot for rotating and scaling.

**Note**: You can import [single-mesh FBX files](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) that contain only one pivot offset. Offset pivots don’t support custom [colliders](../../VR%20tools/Getting%20started/Collider%20Visualization%20User%20Guide.md).

## Prerequisites

Before you begin, make sure you have the following:

* [Install and run the desktop editor](../../Get%20started/Install%20the%20desktop%20editor.md).

## How to use offset pivots

In this section, you import a 3D model that already contains an offset pivot to your [personal asset library](Introduction%20to%20the%20Desktop%20Editor%20Asset%20Library.md). You then manipulate the entity based on its offset pivot.

### Step 1: Import the 3D model

Follow these steps to use the asset file provided by Meta that contains an offset pivot.

- Download the [Demo asset](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974594_480602711643840_7021902764535901297_n.zip?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8ccTEdTjkqMQ7kNvwEt2eLx&_nc_oc=AdnWGggOArEgn2I4M4gDW6ruc2UEEkwORF4rtWp80Cj9M26yLiYvIagXyEbNKPI9FLNsUZQuYlQ0P0D_c5KXNZq0&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmZj791Igv8XbinsWpcco7ISHTXaa6YNjHkEmHKpNH5pw&oe=69557F0B)
  . This file is a zip archive that contains a single mesh 3D model that contains an offset pivot, and a texture file.

  <details>
  <summary>A single mesh 3D model provided by Meta</summary>
  
  <p></p>
  
  [A single mesh 3D model provided by Meta](../../image_data/2746e16515be6eb4a14dcb38dd88f8e425983a944e6f8aa4bf627f1f647118f9.md)
  
  ### Overview
  The image displays two file icons side by side, labeled with their respective filenames beneath them. The icons represent different file formats, one being a PNG image and the other a .fbx file.
  
  ### Key Elements
  1. **Left Icon**
     - **Visual description**: A pixelated, colorful icon resembling a bird's eye view of a landscape.
     - **Location**: Left side of the image.
     - **Contents**: Contains various shades of brown, beige, and red, suggesting a terrain or map-like design.
     - **Visual styling**: The icon has a grid-like pattern, possibly indicating a tile-based map. The colors are vibrant but somewhat muted.
  
  2. **Right Icon**
     - **Visual description**: A simple black cube icon enclosed within a white document folder icon.
     - **Location**: Right side of the image.
     - **Contents**: The cube is solid black, and the folder icon is white with a gray outline.
     - **Visual styling**: The cube is centered within the folder, which has a subtle shadow effect giving it a slight 3D appearance.
  
  3. **File Names**
     - **Left**: "Bird_BR.png"
     - **Right**: "SkateboardBird.fbx"
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The left icon due to its larger size and more complex design.
  - **Arrows/lines/connectors**: None.
  - **Spatial relationships**: The icons are evenly spaced horizontally, with the filenames directly below each icon.
  
  </details>
  
  <p></p>
  
  
- Unzip the archive to a local folder. Next, import the 3D model to **My Assets** either through the desktop editor or your [Meta Horizon portal account](https://horizon.meta.com/creator/assets/folder/). The following steps highlight the experience from the desktop editor.
- In the desktop editor, navigate to [Asset Library](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#assets-library) under the [Scene pane](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).
- Click on **My Assets** > **Add New** > **3D Model**.

  <details>
  <summary>Import a 3D model</summary>
  
  <p></p>
  
  [Import a 3D model](../../image_data/18dd2d0c8f2fae121dea2fe9a906c4ea80eb9faf845de47d864e9432d417a7c8.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a "Add New" button. The interface is part of an asset management system, as indicated by the "Asset Library" header at the top.
  
  ### Key Elements
  - **Visual description**: A dropdown menu with a dark background and light-colored text options.
  - **Location**: Positioned below the "Add New" button in the center of the screen.
  - **Contents**: The dropdown contains several menu items listed vertically:
      - Folder
      - 3D Model
      - Material
      - Skydome
      - Texture
      - Text
  - **Visual styling**: The dropdown has a dark gray background with white text. The selected item, "My Assets," is highlighted with a darker shade of gray.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The dropdown menu itself, as it is the focal point of the interaction.
  - **Arrows, lines, connectors, or implied reading order**: There are no arrows or lines connecting elements, but the vertical arrangement of the menu items suggests a sequential reading order.
  - **Spatial relationships**: The dropdown is directly beneath the "Add New" button, indicating its purpose as a dropdown menu for selecting new asset types.
  
  </details>
  
  <p></p>
  
  
- The **Import Model(s)** dialog appears. Click **choose files on your device**.
- Navigate to the folder that contains the unzipped asset files.
- Select the two asset files and then click **Open**.
- Leave **Preserve offset pivots** enabled.
- Click **Import**. The asset appears in the **My Assets** folder.

### Step 2: Manipulate entities with offset pivots

- [Create a new world](../Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) in the desktop editor.
- Spawn an instance of the asset by dragging the SkateboardBird asset from **My Assets** to the Scene pane. Notice that the pivot is grounded.

  **Note**: Once the mesh of the custom model is imported, changes to the pivot must be done in a [digital content creation tool](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements). While you cannot change the pivot’s position in the Meta Horizon Worlds desktop or VR editor, you can toggle between the entity’s offset pivot and the center pivot as shown in the image below. The setting persists across Meta Horizon Worlds sessions.

  <details>
  <summary>Comparing center pivot to offset pivot</summary>
  
  <p></p>
  
  [Comparing center pivot to offset pivot](../../image_data/3324be6b1b82df128c43898a397d72bddab9535d497a0ff7a8fd777c7811a26c.md)
  
  ### Overview
  The image displays a split-screen view of a 3D modeling software interface showing a character model on a skateboard. The left side shows the model without any transformation applied, while the right side shows the model after a transformation has been applied. The interface includes various toolbars at the top with options for local and center transformations, as well as a pivot point selection feature.
  
  ### Key Elements
  #### Left Side
  - **Visual description**: A 3D model of a cartoonish bird wearing sunglasses, standing on a skateboard.
  - **Location**: Center of the left panel.
  - **Contents**: The bird is orange with a round head, large feet, and a small beak. It is wearing dark sunglasses.
  - **Visual styling**: The background is a gradient blue sky with a light gray ground plane.
  
  #### Right Side
  - **Visual description**: The same 3D model of the bird on a skateboard, but with additional visual elements indicating transformations.
  - **Location**: Center of the right panel.
  - **Contents**: The bird is still orange with sunglasses, standing on a skateboard. There are green and red arrows indicating axes of rotation, and a red dot marking the pivot point.
  - **Visual styling**: The background remains a gradient blue sky with a light gray ground plane.
  
  #### Toolbars
  - **Visual description**: Toolbars at the top of both panels.
  - **Location**: Top of both panels.
  - **Contents**: Options for "Local," "Pivot," "Center," and "Relative" transformations.
  - **Visual styling**: Dark background with white text and icons.
  
  #### Transformation Axes
  - **Visual description**: Green and red arrows indicating axes of rotation.
  - **Location**: Below the bird on the right side.
  - **Contents**: Green arrow pointing upwards, red arrow pointing to the right, and a red dot marking the pivot point.
  - **Visual styling**: Green and red arrows with a white outline.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The 3D model of the bird on the skateboard.
  - **Arrows and dots**: Indicate the axes of rotation and the pivot point, guiding the viewer's attention to the transformation applied to the model.
  - **Spatial relationships**: The left side shows the original model, while the right side shows the model after applying transformations indicated by the axes and pivot point.
  
  </details>
  
  <p></p>
  
  

  You can also enable the offset pivot in [VR](../../VR%20tools/Getting%20started/Use%20the%20Creator%20Menu%20in%20Meta%20Horizon%20Worlds.md) as shown below.

  <details>
  <summary>Turn on offset pivot in VR</summary>
  
  <p></p>
  
  [Turn on offset pivot in VR](../../image_data/12b2696d615178841cc75ad780855710942ce2c00deccfd4e8173439b5cbb731.md)
  
  ### Overview
  The image depicts a 3D modeling interface with a character model being manipulated within a grid environment. The interface includes a settings panel and a build panel, both of which are interactive and provide various options for object manipulation and customization.
  
  ### Key Elements
  - **Character Model**: A cartoonish orange bird wearing sunglasses, standing on a skateboard. The model has a simple design with basic shapes and lacks detailed textures.
  - **Settings Panel**: Located on the left side, it contains a menu with options such as "Build," "Comfort," and "Settings." The "Build" option is highlighted.
  - **Build Panel**: Positioned on the right, it offers various parameters for building objects, including "Dominant Hand," "Snap to Point," "Grid Unit," "Object Rotation," "Angle," and "Object Manipulation."
  - **Grid Environment**: The background features a tiled floor with a grid overlay, indicating a virtual workspace for 3D modeling.
  - **Interaction Tools**: Below the build panel, there are icons representing different interaction tools, such as selection, rotation, scaling, and more.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The character model is the focal point, as it is the subject of the manipulation.
  - **Arrows and Lines**: Blue lines form a bounding box around the character model, suggesting that it is being selected or manipulated.
  - **Spatial Relationships**: The settings panel is adjacent to the build panel, providing contextual options for the model. The interaction tools are positioned below the build panel, ready for use.
  
  </details>
  
  <p></p>
  
  
- Manipulate the entity based on its offset pivot, including position, rotation, and scale. You can do this in the [desktop editor](../Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md) and in the [VR editor](../../VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md).

  **Note**: If you need to define custom pivots for entities created in the Meta Horizon Worlds desktop editor, see [Pivot around parent object](../Hierarchy%20window/Hierarchy%20panel%20overview.md#pivot-around-parent-objects) for a different approach.

## Manage offset pivots

When working with offset pivots, be aware of the following limitations and best practices.

### Preserve single-mesh uploads

You can preserve offset pivots only for [single-mesh FBX files](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

You can try to use a multi-mesh hierarchy, but your results will be undefined. If your entity has a hierarchy with offset pivots, then you must import the offset pivot meshes one at a time.

### Use non-custom box colliders

You should import meshes that have only non-custom box colliders, because using custom colliders produces undefined results.

## What’s next?

Try the following related topics:

* [Getting started with custom model import](../../Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md)
* [Materials guidance and reference for custom models](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md)
* [Collider ingestion user guide](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md)
* [Hierarchy panel overview](../Hierarchy%20window/Hierarchy%20panel%20overview.md)