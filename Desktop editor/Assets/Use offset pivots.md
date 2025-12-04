Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/offset-pivots

# Use offset pivots

This topic describes when and how offset pivot is used, outlines the expected behavior of offset pivot in the desktop editor, and ends with a discussion on managing offset pivots and best practices.

By default, an entity’s pivot point is its center. This behavior works well for entities like planets, ice skaters, and spinning tops, but not for entities such as doors, drawbridges, and treasure chest lids. For the animation of these entities to look natural, [pivot](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md#pivot) points need to be offset or moved.

When you create an asset using a [digital content creation tool](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements), you can configure the [3D model](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) to use an offset pivot instead of a center pivot. As you import [this type of asset](/hw-docs/Reference/core/Classes/MeshEntity.md) to your personal asset library in Meta Horizon Worlds, you have the option to [**Preserve offset pivots**](/hw-docs/Get%20started/Create%20your%20first%20world%20tutorial,%20part%202.md#part-2-import-custom-models-and-write-your-first-script). When you enable **Preserve offset pivot**, entities spawned from the asset will rotate and scale around the pivot defined in the FBX file, instead of the default center pivot.

![Turn on Preserve Offset Pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489545097_693923539812267_8172185265185112732_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=2DcZ_d8ILpIQ7kNvwEV3qfQ&_nc_oc=AdkZGIDzqfU73M3EWfFWeRw25G5viG4nECf7wxSH_WlJDmHtzGwUHSQcoId1ZNvKn9U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rTN0O6JsgfEEdnb0CRZrzg&oh=00_AfmKg0L8bKgDKtzYtKnS-_rWxD1xHvHexobxtKJqkr1Lxg&oe=694BD4F2)

Although you can use offset pivots in both the [desktop editor](/hw-docs/Desktop%20editor/Desktop%20Editor.md) and the [VR editor](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md), this topic focuses on the desktop experience. Additionally, you can also write [TypeScript code](/hw-docs/Reference/core/Classes/Entity.md) that uses the offset pivot for rotating and scaling.

**Note**: You can import [single-mesh FBX files](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md) that contain only one pivot offset. Offset pivots don’t support custom [colliders](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/user-guides/collider-visualization-user-guide).

## Prerequisites

Before you begin, make sure you have the following:

* [Install and run the desktop editor](/hw-docs/Get%20started/Install%20the%20desktop%20editor.md).

## How to use offset pivots

In this section, you import a 3D model that already contains an offset pivot to your [personal asset library](/hw-docs/Desktop%20editor/Assets/Introduction%20to%20the%20Desktop%20Editor%20Asset%20Library.md). You then manipulate the entity based on its offset pivot.

### Step 1: Import the 3D model

Follow these steps to use the asset file provided by Meta that contains an offset pivot.

- Download the [Demo asset](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974594_480602711643840_7021902764535901297_n.zip?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=sng2GSBpOBkQ7kNvwELHJmq&_nc_oc=AdmZbI5s7WeYN3Bx7WJxpr2pMWJxVL6ioZVQx67lVZpFi5P62_cQsV673h2nS2rISq0&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkWoTFE8-Bwpt4fByvRsBhtMqHGwQtVtSYVsQGeLkoMmA&oe=694BD40B)
  . This file is a zip archive that contains a single mesh 3D model that contains an offset pivot, and a texture file.

  ![A single mesh 3D model provided by Meta](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461927797_559139473290675_4813403258144594456_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ho0XMUoJX3gQ7kNvwHrJsqt&_nc_oc=Admpo4IV-9JteqejYlrEyaBIhOqItNzXmvM3L8C_cffGfaaxY2AXEtoZBFDTAXR6eX4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rTN0O6JsgfEEdnb0CRZrzg&oh=00_Afn4aGfwPG1sFlRx3ttdeOb_7a-umPZkcKNKKyoqc7G_gw&oe=694BE357)
- Unzip the archive to a local folder. Next, import the 3D model to **My Assets** either through the desktop editor or your [Meta Horizon portal account](https://horizon.meta.com/creator/assets/folder/). The following steps highlight the experience from the desktop editor.
- In the desktop editor, navigate to [Asset Library](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#assets-library) under the [Scene pane](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Panels%20and%20Tabs%20in%20the%20desktop%20editor.md#scene-pane).
- Click on **My Assets** > **Add New** > **3D Model**.

  ![Import a 3D model](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490513036_693923536478934_4393520325363504919_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=CjLAtEUnRboQ7kNvwGgvHVV&_nc_oc=Admfu_9rFQszEKMDiCLV95UCENb-ksGuZLVOYYfy0RT5-jQOjaco2dcev8ycSv-pqV4&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=rTN0O6JsgfEEdnb0CRZrzg&oh=00_AfnZK8qxLh0H6PzYM-KZ_wGx19Ry9rQt9dK923VnBSCPJQ&oe=694BC3FB)
- The **Import Model(s)** dialog appears. Click **choose files on your device**.
- Navigate to the folder that contains the unzipped asset files.
- Select the two asset files and then click **Open**.
- Leave **Preserve offset pivots** enabled.
- Click **Import**. The asset appears in the **My Assets** folder.

### Step 2: Manipulate entities with offset pivots

- [Create a new world](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Create%20a%20New%20World.md) in the desktop editor.
- Spawn an instance of the asset by dragging the SkateboardBird asset from **My Assets** to the Scene pane. Notice that the pivot is grounded.

  **Note**: Once the mesh of the custom model is imported, changes to the pivot must be done in a [digital content creation tool](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md#setup-requirements). While you cannot change the pivot’s position in the Meta Horizon Worlds desktop or VR editor, you can toggle between the entity’s offset pivot and the center pivot as shown in the image below. The setting persists across Meta Horizon Worlds sessions.

  ![Comparing center pivot to offset pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489759643_693923543145600_2643000062555377148_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=IvlZ6-NI2gIQ7kNvwEC9zCd&_nc_oc=AdlLu6ELWQnDYQRgJ9-PWYfqojL4qOCWW7bQF2FHOsTtEt5RqwR9yO18ja_Ln60YIYo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rTN0O6JsgfEEdnb0CRZrzg&oh=00_Afl8h7PkuUTJoIN-sP7d5XeQ8oYIGy6SlFjaLkdiWCdNyg&oe=694BCA8E)

  You can also enable the offset pivot in [VR](/hw-docs/VR%20tools/Getting%20started/Use%20the%20Creator%20Menu%20in%20Meta%20Horizon%20Worlds.md) as shown below.

  ![Turn on offset pivot in VR](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489927670_693923533145601_7120568709072388555_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=5BqjXuyZtzkQ7kNvwGPyaxy&_nc_oc=Adnjy1ayblC4DagNOHKv6dJiBLcvwcz-Kb8uZp4RWEM4nee5s2RCNyv-HETCPkQY7CU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=rTN0O6JsgfEEdnb0CRZrzg&oh=00_AflCNLAgftXDKhG_aUi81L_jQ_MBwGiAuwRkYmgGIEOWXg&oe=694BC83D)
- Manipulate the entity based on its offset pivot, including position, rotation, and scale. You can do this in the [desktop editor](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/User%20interface/Object%20tools.md) and in the [VR editor](/hw-docs/VR%20tools/Getting%20started/Create%20a%20new%20world%20in%20Meta%20Horizon%20Worlds.md).

  **Note**: If you need to define custom pivots for entities created in the Meta Horizon Worlds desktop editor, see [Pivot around parent object](/hw-docs/Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md#pivot-around-parent-objects) for a different approach.

## Manage offset pivots

When working with offset pivots, be aware of the following limitations and best practices.

### Preserve single-mesh uploads

You can preserve offset pivots only for [single-mesh FBX files](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Creating%20a%20Custom%20Model.md).

You can try to use a multi-mesh hierarchy, but your results will be undefined. If your entity has a hierarchy with offset pivots, then you must import the offset pivot meshes one at a time.

### Use non-custom box colliders

You should import meshes that have only non-custom box colliders, because using custom colliders produces undefined results.

## What’s next?

Try the following related topics:

* [Getting started with custom model import](/hw-docs/Custom%20models%20(FBX)/Getting%20started%20with%203D%20model%20import.md)
* [Materials guidance and reference for custom models](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md)
* [Collider ingestion user guide](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Collider%20Ingestion%20User%20Guide.md)
* [Hierarchy panel overview](/hw-docs/Desktop%20editor/Hierarchy%20window/Hierarchy%20panel%20overview.md)