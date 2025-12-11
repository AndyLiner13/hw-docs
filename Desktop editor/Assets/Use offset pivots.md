Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/offset-pivots

# Use offset pivots

This topic describes when and how offset pivot is used, outlines the expected behavior of offset pivot in the desktop editor, and ends with a discussion on managing offset pivots and best practices.

By default, an entity’s pivot point is its center. This behavior works well for entities like planets, ice skaters, and spinning tops, but not for entities such as doors, drawbridges, and treasure chest lids. For the animation of these entities to look natural, [pivot](../Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#pivot) points need to be offset or moved.

When you create an asset using a [digital content creation tool](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements), you can configure the [3D model](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) to use an offset pivot instead of a center pivot. As you import [this type of asset](../../Reference/core/Classes/MeshEntity.md) to your personal asset library in Meta Horizon Worlds, you have the option to [**Preserve offset pivots**](../../Tutorials/Getting%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#part-2-import-custom-models-and-write-your-first-script). When you enable **Preserve offset pivot**, entities spawned from the asset will rotate and scale around the pivot defined in the FBX file, instead of the default center pivot.

![Turn on Preserve Offset Pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489545097_693923539812267_8172185265185112732_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=17znv4WbmF4Q7kNvwG_PXh2&_nc_oc=AdnafLH5EgdECZ4eptqQPIqbwcC65nTH9IT8VtRrY1LWLRqyHQcY5u7aBU7Xoel7c80&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hx3esu3P4C-vqAaCFMRURw&oh=00_Aflkg8BP6CPe_j1SZycs6YWsHx0jrvGrIFUuc4k2dO3Xkw&oe=695466B2)

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

  ![A single mesh 3D model provided by Meta](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461927797_559139473290675_4813403258144594456_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=ik8OYA4sSGgQ7kNvwFK4gjV&_nc_oc=AdnMtZKicUrJIoAmyfz3EyM3S6qzqPdE6kZudnDFzeCUUZ-LJ2zT4xXj6_2GdZnMPN8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hx3esu3P4C-vqAaCFMRURw&oh=00_AflmX_nP33pI_mPgE6iMiyWktAMCUVOoz8Px4Jq3SVXAew&oe=69543CD7)
- Unzip the archive to a local folder. Next, import the 3D model to **My Assets** either through the desktop editor or your [Meta Horizon portal account](https://horizon.meta.com/creator/assets/folder/). The following steps highlight the experience from the desktop editor.
- In the desktop editor, navigate to [Asset Library](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#assets-library) under the [Scene pane](../Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).
- Click on **My Assets** > **Add New** > **3D Model**.

  ![Import a 3D model](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490513036_693923536478934_4393520325363504919_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=afYxQbvaJb0Q7kNvwF62Fst&_nc_oc=Adm2ZgZe5tVzrrP6NDR6yNBjEpcW2gO64DTvgoiC2Ccd5yR4-uBjxU2VA0Krvl0TFzw&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=hx3esu3P4C-vqAaCFMRURw&oh=00_AfkAafwslYdapQgJuBcgElwCWaxICAYf_6CzD0WnSQOBOQ&oe=695455BB)
- The **Import Model(s)** dialog appears. Click **choose files on your device**.
- Navigate to the folder that contains the unzipped asset files.
- Select the two asset files and then click **Open**.
- Leave **Preserve offset pivots** enabled.
- Click **Import**. The asset appears in the **My Assets** folder.

### Step 2: Manipulate entities with offset pivots

- [Create a new world](../Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) in the desktop editor.
- Spawn an instance of the asset by dragging the SkateboardBird asset from **My Assets** to the Scene pane. Notice that the pivot is grounded.

  **Note**: Once the mesh of the custom model is imported, changes to the pivot must be done in a [digital content creation tool](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements). While you cannot change the pivot’s position in the Meta Horizon Worlds desktop or VR editor, you can toggle between the entity’s offset pivot and the center pivot as shown in the image below. The setting persists across Meta Horizon Worlds sessions.

  ![Comparing center pivot to offset pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489759643_693923543145600_2643000062555377148_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=T4zvnW58yHwQ7kNvwFvxvwB&_nc_oc=Adlwcl_Qy85ThuyAYQUZFcBRz4ZnOh4_oHDeofW9v3No6euldRmXj9IlJS39u9T8pto&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hx3esu3P4C-vqAaCFMRURw&oh=00_AfnEw1XXiE9AudovB4XsSZdukrNLMYead7TqJOzHyx39yg&oe=69545C4E)

  You can also enable the offset pivot in [VR](../../VR%20tools/Getting%20started/Use%20the%20Creator%20Menu%20in%20Meta%20Horizon%20Worlds.md) as shown below.

  ![Turn on offset pivot in VR](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489927670_693923533145601_7120568709072388555_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=_x1xQKrV9aUQ7kNvwHhIJbT&_nc_oc=Adn6hWZpA13sbs2kT-0BquDxAO_S31evoMc4J_euTKI9KsSXkUDqfAS_ycOBaAEfW2U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=hx3esu3P4C-vqAaCFMRURw&oh=00_AfmFq8QRYneK7_V0kK_2FdZbS0_fdD6dgDi9Oy7EKmYjJA&oe=695459FD)
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