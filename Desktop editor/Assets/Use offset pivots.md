Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/offset-pivots

# Use offset pivots

This topic describes when and how offset pivot is used, outlines the expected behavior of offset pivot in the desktop editor, and ends with a discussion on managing offset pivots and best practices.

By default, an entity’s pivot point is its center. This behavior works well for entities like planets, ice skaters, and spinning tops, but not for entities such as doors, drawbridges, and treasure chest lids. For the animation of these entities to look natural, [pivot](../Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#pivot) points need to be offset or moved.

When you create an asset using a [digital content creation tool](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements), you can configure the [3D model](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) to use an offset pivot instead of a center pivot. As you import [this type of asset](../../Reference/core/Classes/MeshEntity.md) to your personal asset library in Meta Horizon Worlds, you have the option to [**Preserve offset pivots**](../../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#part-2-import-custom-models-and-write-your-first-script). When you enable **Preserve offset pivot**, entities spawned from the asset will rotate and scale around the pivot defined in the FBX file, instead of the default center pivot.

<details>
<summary>Turn on Preserve Offset Pivot</summary>

<p></p>

[Turn on Preserve Offset Pivot](../../../../images/output/img_20251211_024643_20251211_024643.md)

### Overview
This image depicts a toggle switch interface element with accompanying descriptive text explaining its functionality.

### Key Elements
- **Toggle Switch**: Located at the top-left corner, it is a blue rectangular button with a white square inside, indicating the current state as 'on'.
- **Text Label**: Positioned to the right of the toggle switch, reads: **"Preserve offset pivots"**.
- **Description Text**: Below the label, it states: **"Preserves pivot defined in original asset (if disabled, pivots will be centered)"**.

### Visual Flow / Relationships
The toggle switch is the most prominent visual element due to its central placement and distinct color contrast against the dark background. The text label and description follow logically beneath the switch, providing additional information about the toggle's function.

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

- Download the [Demo asset](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974594_480602711643840_7021902764535901297_n.zip?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=8ccTEdTjkqMQ7kNvwGWaBkv&_nc_oc=AdmdXWMR_u2a-ZEpjZMS6VUljourRX-tLsB4osxSgr_JFMFsSysIcGETNsBLR4YctQI&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afm-03m_Bnua_v2m6MBf7miO-kr-9TKBcqwoxyNNAanhPg&oe=695465CB)
  . This file is a zip archive that contains a single mesh 3D model that contains an offset pivot, and a texture file.

  <details>
<summary>A single mesh 3D model provided by Meta</summary>

<p></p>

[A single mesh 3D model provided by Meta](../../../../images/output/img_20251211_024732_20251211_024732.md)

### Overview
The image displays two file icons side by side against a white background. The icons represent files named "Bird_BR.png" and "SkateboardBird.fbx". Each icon has a distinct visual design and accompanying label.

### Key Elements
1. **File Icon 1 ("Bird_BR.png")**
   - **Visual description**: A rectangular icon with rounded corners.
   - **Location**: Left side of the image.
   - **Contents**: Contains a small, stylized bird illustration within a yellowish-brown rectangle.
   - **Visual styling**: The bird is black, and the background is a gradient of brown shades. There are no borders around the icon itself.
   
2. **File Icon 2 ("SkateboardBird.fbx")**
   - **Visual description**: A rectangular icon with rounded corners.
   - **Location**: Right side of the image.
   - **Contents**: Features a simple black cube icon inside a white rectangle, resembling a file extension icon.
   - **Visual styling**: The cube is solid black, and the rectangle is white. There are no borders around the icon itself.

### Visual Flow / Relationships
- **Most prominent visually**: Both icons are equally prominent as they are the focal points of the image.
- **Arrows, lines, connectors**: None present.
- **Spatial relationships**: The icons are placed next to each other horizontally, with clear separation between them.

</details>

<p></p>


- Unzip the archive to a local folder. Next, import the 3D model to **My Assets** either through the desktop editor or your [Meta Horizon portal account](https://horizon.meta.com/creator/assets/folder/). The following steps highlight the experience from the desktop editor.
- In the desktop editor, navigate to [Asset Library](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#assets-library) under the [Scene pane](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).
- Click on **My Assets** > **Add New** > **3D Model**.

  <details>
<summary>Import a 3D model</summary>

<p></p>

[Import a 3D model](../../../../images/output/img_20251211_024834_20251211_024834.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu that appears when interacting with a "Add New" button. The interface is part of a section labeled "Asset Library," suggesting a focus on managing digital assets.

### Key Elements
- **Visual description**: A dropdown menu with a dark background and light text.
- **Location**: Positioned below the "Add New" button in the "Asset Library" section.
- **Contents**: The dropdown contains options such as "Folder," "3D Model," "Material," "Skydome," "Texture," and "Text." Each option is listed in white text against a dark background.
- **Visual styling**: The dropdown has a dark gray background with white text for readability. There are no borders around the dropdown itself, but the button that triggers it has a subtle shadow effect.

### Visual Flow / Relationships
- **Most prominent visually**: The dropdown menu is the focal point due to its central placement and larger size compared to surrounding elements.
- **Arrows/lines/connectors**: There are no explicit arrows or lines connecting elements, but the dropdown suggests a hierarchical relationship with the "Add New" button above it.
- **Spatial relationships**: The dropdown is directly beneath the "Add New" button, indicating a direct interaction point. The options are arranged vertically, implying a sequential selection process.

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

[Comparing center pivot to offset pivot](../../../../images/output/img_20251211_024945_20251211_024945.md)

### Overview
The image displays a split-screen view of a 3D modeling software interface showing a character model on a skateboard. The left side shows the model with a local pivot point, while the right side shows the same model with a center pivot point. Both sides feature a blue sky background and a grid floor.

### Key Elements
- **Left Side**:
  - **Character Model**: A yellow, cartoonish bird wearing sunglasses, standing on a skateboard.
  - **Pivot Point**: A red sphere at the bottom center of the model, indicating the pivot point.
  - **Transform Axes**: Green arrow pointing up, blue arrow pointing right, and a red arrow pointing down, representing the transform axes.
  - **Skateboard**: A wooden skateboard with red wheels.
  - **Background**: A gradient blue sky and a light gray grid floor.

- **Right Side**:
  - **Character Model**: Same as the left side.
  - **Pivot Point**: A red sphere at the center of the model, indicating the center pivot point.
  - **Transform Axes**: Green arrow pointing up, blue arrow pointing right, and a red arrow pointing down, representing the transform axes.
  - **Skateboard**: Same as the left side.
  - **Background**: Same as the left side.

### Visual Flow / Relationships
- **Most Prominent Element**: The character model.
- **Arrows**: The transform axes are clearly marked with colored arrows.
- **Spatial Relationships**: The left side shows the model with a local pivot, while the right side shows the model with a center pivot. The right side has a tooltip above the model stating "Transform relative to object’s center or pivot."

</details>

<p></p>



  You can also enable the offset pivot in [VR](../../VR%20tools/Getting%20started/Use%20the%20Creator%20Menu%20in%20Meta%20Horizon%20Worlds.md) as shown below.

  <details>
<summary>Turn on offset pivot in VR</summary>

<p></p>

[Turn on offset pivot in VR](../../../../images/output/img_20251211_025046_20251211_025046.md)

### Overview
The image depicts a 3D modeling interface with a character model in the foreground and a settings panel overlaid on the screen. The character is an orange bird-like figure wearing sunglasses and standing on a skateboard. The settings panel is divided into two sections: "Settings" and "Build," with the "Build" tab currently active. The interface includes various controls and options related to object manipulation within the 3D environment.

### Key Elements
- **Character Model**: An orange bird-like figure with sunglasses, standing on a skateboard. The model is highlighted with a blue bounding box.
- **Settings Panel**: Located at the top right of the image.
    - **Left Column**: Contains the "Settings" menu with options like "Build" and "Comfort."
    - **Right Column**: Displays the "Build" tab with settings such as "Dominant Hand," "Snap to Point," "Grid Unit," "Object Rotation," "Angle," and "Object Manipulation." The "Snap to Angle" option is highlighted in purple.
- **Interface Controls**: Located at the bottom of the settings panel, showing various icons and options for manipulating objects in the 3D space.
- **Background**: A simple grid floor with a gradient sky in the background.

### Visual Flow / Relationships
- **Most Prominent Element**: The character model in the foreground.
- **Spatial Relationships**: The settings panel is positioned above the character model, indicating that the user can interact with these settings while viewing the model. The interface controls are arranged horizontally below the settings panel.

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