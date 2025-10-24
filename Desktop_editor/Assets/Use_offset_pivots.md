# Use offset pivots

 This topic describes when and how offset pivot is used, outlines the expected
behavior of offset pivot in the desktop editor, and ends with a discussion on
managing offset pivots and best practices. By default, an entity’s pivot point is its center. This behavior works well for
entities like planets, ice skaters, and spinning tops, but not for entities such
as doors, drawbridges, and treasure chest lids. For the animation of these
entities to look natural, [pivot](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/object-tools#pivot) points need to be offset or moved. When you create an asset using a [digital content creation tool](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model#setup-requirements), you can configure the [3D model](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model) to use an offset pivot instead of a center pivot. As you import [this type of asset](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_meshentity) to your personal asset library in Meta Horizon Worlds, you have the option to [Preserve offset pivots](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/create-your-first-w...
in the FBX file, instead of the default center pivot. ![Turn on Preserve Offset Pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489545097_693923539812267_8172185265185112732_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=8cN-fvx1LTwQ7kNvwHv1a0N&_nc_oc=Adlxs862Q60G36Ar64kkJ5JcUz5Ki76Xe2GbUweKNU2zy0pOviEgYcAtIjL_Ugh6gTY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YklJAD--_pIAl49JN4d...
 Although you can use offset pivots in both the [desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/desktop-editor) and the [VR editor](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon), this topic focuses on the desktop experience. Additionally, you can also write
[TypeScript code](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) that uses the offset pivot for rotating and scaling. Note: You can import [single-mesh FBX files](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model) that contain only one pivot offset. Offset pivots don’t support custom [colliders](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/user-guides/collider-visualization-user-guide).  
## Prerequisites

 Before you begin, make sure you have the following:
• [Install and run the desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/get-started/install-desktop-editor).

  
## How to use offset pivots

 In this section, you import a 3D model that already contains an offset pivot to
your [personal asset library](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/assets/introduction-to-the-desktop-editor-asset-library). You then manipulate the entity based on its offset pivot.  
### Step 1: Import the 3D model

 Follow these steps to use the asset file provided by Meta that contains an
offset pivot.
1.  Download the [Demo asset](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974594_480602711643840_7021902764535901297_n.zip?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=Y7eo1eX8RUgQ7kNvwGf9lKR&_nc_oc=Adl7jiJO6jSjYypL3VwywbAEEWv7CX3c0SiMHWgS0LKd7B7UQYr0n44M5E5ggeBUR6w&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfdDGEaHtBswhela72be9LtejthVYj...
an offset pivot, and a texture file. ![A single mesh 3D model provided by Meta](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/461927797_559139473290675_4813403258144594456_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=T2rNkWfiwZgQ7kNvwGvZSza&_nc_oc=AdnN_E4EOq2nqLGWci-G9R_2gh66WUI8BBQTXsXP5L4x9xHUfZcVXPyABHn7KSKiAro&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YklJAD--_pIAl49JN4d...
2.  Unzip the archive to a local folder. Next, import the 3D model to My Assets either through the desktop editor or your [Meta Horizon portal account](https://horizon.meta.com/creator/assets/folder/). The following steps highlight the experience from the desktop editor.
3.  In the desktop editor, navigate to [Asset Library](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#assets-library) under the [Scene pane](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/UI-panels-and-tabs#scene-pane).
4.  Click on My Assets > Add New > 3D Model. ![Import a 3D model](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/490513036_693923536478934_4393520325363504919_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=kGzeQe9VO7EQ7kNvwFN5avM&_nc_oc=Adl5edFu31AG1jPEZQfHJuIvuSEVmR0SrQC--IPRwFDsCQR4lWY49cGFkQWhnNnoM84&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=YklJAD--_pIAl49JN4dO3w&o...
5.  The Import Model(s) dialog appears. Click choose files on your device.
6.  Navigate to the folder that contains the unzipped asset files.
7.  Select the two asset files and then click Open.
8.  Leave Preserve offset pivots enabled.
9.  Click Import. The asset appears in the My Assets folder.
  
### Step 2: Manipulate entities with offset pivots

1.  [Create a new world](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/creating-a-new-world) in the desktop editor.
2.  Spawn an instance of the asset by dragging the SkateboardBird asset from My Assets to the Scene pane. Notice that the pivot is grounded. Note: Once the mesh of the custom model is imported, changes to the pivot must be
done in a [digital content creation tool](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model). While you cannot change the pivot’s position in the Meta Horizon Worlds
desktop or VR editor, you can toggle between the entity’s offset pivot and the center
pivot as shown in the image below. The setting persists across Meta Horizon
Worlds sessions. ![Comparing center pivot to offset pivot](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489759643_693923543145600_2643000062555377148_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=sr2sOCSoLswQ7kNvwF42xKp&_nc_oc=AdnH8XuNXviwRH68iZmaWI0j3kqLHaOEJePKGaH9fDAPqxPS_LtnkXn2ozNk4TIhaRo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=YklJAD--_pIAl49JN4dO3w&oh=00_AfcEwKDB0R...
 You can also enable the offset pivot in [VR](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/using-the-creator-menu) as shown below. ![Turn on offset pivot in VR](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/489927670_693923533145601_7120568709072388555_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=_X4oYVe9nDMQ7kNvwHYPqG1&_nc_oc=AdkRulU4thvyIABf9959gBILLMueairUbLF1SGEnAG6c_QAaaQU3gYE9xWs7aZd8ySM&_nc_zt=14&_nc_ht=sconte...
3.  Manipulate the entity based on its offset pivot, including position, rotation,
and scale. You can do this in the [desktop editor](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/getting-started/user-interface/object-tools) and in the [VR editor](https://developers.meta.com/horizon-worlds/learn/documentation/vr-creation/getting-started/create-a-new-world-in-horizon). Note: If you need to define custom pivots for entities created in the Meta Horizon
Worlds desktop editor, see [Pivot around parent object](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/hierarchy-window-overview#pivot-around-parent-objects) for a different approach.
  
## Manage offset pivots

 When working with offset pivots, be aware of the following limitations and best
practices.  
### Preserve single-mesh uploads

 You can preserve offset pivots only for [single-mesh FBX files](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/creating-a-custom-model). You can try to use a multi-mesh hierarchy, but your results will be undefined.
If your entity has a hierarchy with offset pivots, then you must import the
offset pivot meshes one at a time.  
### Use non-custom box colliders

 You should import meshes that have only non-custom box colliders, because using
custom colliders produces undefined results.  
## What’s next?

 Try the following related topics:
• [Getting started with custom model import](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/getting-started-with-custom-model-import)
• [Materials guidance and reference for custom models](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models)
• [Collider ingestion user guide](https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/collider-ingestion-user-guide)
• [Hierarchy panel overview](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/hierarchy-window/hierarchy-window-overview)

    ![Nav Logo](https://static.xx.fbcdn.net/rsrc.php/yE/r/3SoBlk8EqOQ.svg)


[Facebook](https://www.facebook.com/MetaHorizon/)
[Threads](https://www.threads.com/@metahorizon)
[X](https://x.com/MetaHorizon)
[Instagram](https://www.instagram.com/metahorizon/)
[YouTube](https://www.youtube.com/@MetaQuestVR)

 Learn
[Documentation](https://developers.meta.com/horizon-worlds/learn/documentation/)
[Blog](https://developers.meta.com/horizon/blog/)
[Forum](https://communityforums.atmeta.com/t5/Creator-Forum/ct-p/Meta_Horizon_Creator_Forums)

 Programs
[Meta Horizon Creator Program](https://developers.meta.com/horizon-worlds/programs/)

 My Creations
[My Worlds](https://horizon.meta.com/creator/worlds_all/?utm_source=horizon_worlds_creator)
[My Assets](https://horizon.meta.com/creator/assets/?utm_source=horizon_worlds_creator)
[Performance](https://horizon.meta.com/creator/performance/traces/?utm_source=horizon_worlds_creator)

 Privacy & Legal
[Privacy Policy](https://www.meta.com/legal/privacy-policy/)
[Legal](https://www.meta.com/legal/supplemental-terms-of-service/)

 © 2025 Meta
