---
source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/help-and-reference/manual-level-of-detail-overview
---

# [Manual Level of Detail Overview](#manual-level-of-detail-overview)

“Level of detail” describes the principle of having lower-detail versions of models in memory for an object and switching to those lower-detail models when the object is small or far away.

The manual level of detail (LOD) feature in Meta Horizon Worlds lets you use this principle to save GPU costs during rendering. With LOD you can create assets that contain multiple model files with different levels of detail and configure which model to render based on relative screen size. This allows you to create more complex worlds in Meta Horizon Worlds.

**Note:** LOD only works in visit mode in worlds with Custom Model Import (tri-mesh) and cached global illumination (GI). In all other situations, LOD won’t be enabled, even if the assets are set up for LOD.

## [How LOD improves performance](#how-lod-improves-performance)

The current version of LOD is focused on improving GPU performance in worlds.

With LOD, you avoid overshading sub-pixel triangles by switching to a lower-detail version of the model. The tradeoff is that storing multiple models increases memory usage and size on disk. These increases are moderate and configurable based on the size of the additional models stored and how much they’re decimated.

## [Prerequisites](#prerequisites)

**Note:** The current LOD feature only works with Desktop Editor.

- A Windows PC with [Meta Horizon Worlds desktop editor configured](../Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
- [Simplygon](https://www.simplygon.com/) software installed.
  - This is required to import LOD assets and publish a world with LOD assets.
- A Custom Model Import world running in edit mode in Desktop Editor to import LOD assets into.

### [How to install Simplygon](#how-to-install-simplygon)

**Warning:** LOD asset import and GI lighting data generation require Simplygon. If Simplygon is not installed correctly, LOD import will fail and if a world has LOD objects, GI lighting data publishing will fail.

1. [Download](https://www.simplygon.com/Downloads) the installation file and run the installer.

2. Refer to the [Simplygon installation guide](https://documentation.simplygon.com/SimplygonSDK_10.0.1400.0/installation/default.html#download-installer) for installation details.

3. You’ll be prompted to install a license key.

   - For 1P and 2P Studios, please reach out to [Alex Elsayad](mailto:alexelsayad@meta.com), [Deborah Guzman Barrios](mailto:debguzman@meta.com), or [Travis Hoffstetter](mailto:thoffstetter@meta.com) to get a Meta license key.
   - 1P and 2P studios/creators can use Meta’s license key to use Simplygon under the following terms:

   ***NOTICE OF LICENSE RESTRICTION***

   ***The license key for Simplygon provided is strictly limited to use for the Horizon World project only. Any use of the license key for purposes other than the Horizon World project is expressly prohibited and constitutes a material breach of this agreement.***

   ***The user acknowledges and agrees that the license key may not be used for any other projects, products, or services, and may not be shared, transferred, or sublicensed to any third party without the prior written consent of Simplygon.***

   ***By using the license key, the user confirms its acceptance of these terms and conditions, and acknowledges that any unauthorized use of the license key may result in legal action, including but not limited to, injunctions and damages.***

4. After installing Simplygon, close all instances of Horizon, Unity, Hubbub or NuDevTools, and relaunch them as needed. If you see an asset ingestion error after closing and relaunching, try restarting your PC. See [Troubleshooting](Manual%20Level%20of%20Detail%20Overview.md#troubleshooting) for more information.

## [Create and use LOD assets](#create-and-use-lod-assets)

### [Demo video](#demo-video)

Here is a demo video on how to use LOD.

<video controls><source src="(BROKEN_REF)" type="video/mp4"></video>

### [Sample assets](#sample-assets)

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name    | LOD assets                                                                                                                                                                                                                                                                                                                                      | Recommended relative screen size setting | Vertex          | Texture assets                                                                                                                                                                                                                         | Notes                                                                                                                                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DamagedHelmet | [DamagedHelmet\_LOD0](../../.assets/misc/3ff2be4728c03563fc5c47b27351f335677b5ea0906700b241a945c8c8fbfc10.bin) [DamagedHelmet\_LOD1](../../.assets/misc/7a7d20ece9ce696ddd5a8a13ea4f89e1461369ed7a256fefd303b9950f1dc600.bin) [DamagedHelmet\_LOD2](../../.assets/misc/f2e7269832badf64b667ce4db89314fd51efbeccb68bfd77f51deca645d12c49.bin) | .3 .1 .01                                | 13341 5763 2208 | [DamagedHelmet\_BR.png](../../.assets/images/3f314b261ac2327044bfc879019a30b01a49b85834ca9058414ed427b7ba154f.png) [DamagedHelmet\_MEO.png](../../.assets/images/e83deb7d95dfc02fd72215a5540eecec924c69a6102cb2393416e1c0aa8cac47.png) |                                                                                                                                                                                                                  |
| Suzanne       | [Suzanne\_LOD0](../../.assets/misc/b19e7dc0eb80fd5ef2dc29ed7acb6a23e7f5e226165f5c47faac106427e68b60.bin) [Suzanne\_LOD1](../../.assets/misc/21752f40a588d4b810efd381bc1d381d9e8a0f5335726aa3416ebb3c03612819.bin) [Suzanne\_LOD2](../../.assets/misc/79d5cd8eade167f8d212998a19b794159e83f3e63ed0848a273c6a927b894f96.bin)                   | .3 .1 .01                                | 7958 2573 909   | [Suzanne\_BR.png](../../.assets/images/176ec186c791391892115c7347495514871ce184f9cc752125fe2477f1bc44b1.png) [Suzanne\_MESA.png](../../.assets/images/4309af15a32b2a3296d69d2fa7817976868b7fe952bca209c07a0e1453eccdd7.png)            | Ignore import warnings.                                                                                                                                                                                          |
| StoneFloor    | [StoneFloor\_LOD0](../../.assets/misc/264d0fa6a13fe7e7b04a9dd10ae5811c379c6782233766780a3cbfbab92feab0.bin) [StoneFloor\_LOD1](../../.assets/misc/ca1c156e1b95ccb5e712b9c3516eccd45ef3a8604e98bac69dd9b317e18bf653.bin)                                                                                                                       | .3 .01                                   | 1502 266        | [StoneFloor\_BR.png](../../.assets/images/7b3ceb6d6c12690c207eabee552f7d8e53ba1eb6d967349fca526cb1a6f19760.png)                                                                                                                        |                                                                                                                                                                                                                  |
| ColumnSetA    | [ColumnSetA\_LOD0](../../.assets/misc/c877b4d0234404dc318d04db171a417b378b6c39794f1936d1f7616a4bb055e7.bin) [ColumnSetA\_LOD1](../../.assets/misc/828c2402495bc7f1860a2436327c870e0ab82db9b597a8dcb8fdde3c2cebeda3.bin) [ColumnSetA\_LOD2](../../.assets/misc/fa63ea53b9ad64cd0d2dc4ca76b3cfa32146c4828fda198a571ca2000d1003eb.bin)          | .5 .3 .1                                 | 7657 4733 2515  | [ColumnSetA\_BR.png](../../.assets/images/558f4fb123401d88805663488176a3654c8827f803bdb5f392094cccd7e66b30.png)                                                                                                                        | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## [Ingest LOD Assets](#ingest-lod-assets)

### [Create a folder](#create-a-folder)

First, create a folder to store your ingested assets.

1. Click the **Assets** pane at the bottom of the editor. ![](../../.assets/images/502e5faca828053fc068cd808b81c02dff737da40cf88a90959616dfff71b653.png)
2. Click **Add New > Folder** and give the folder a name. ![](../../.assets/images/fbf71b3f5a76c4aefd215288d3117727b77361d84943fabb00b541e256f233cb.png)

### [Add your LOD 0 assets](#add-your-lod-0-assets)

> [!Note]
>
> The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

1. Click **Add New > 3D Model**. ![](../../.assets/images/25f45ecd2d02820eeb81e8c680f87f39634bee26647fae4016d096008cb5b0ec.png)
2. The mesh ingestion window will appear. ![](../../.assets/images/7e232fbead282bc83571abbb998b981b2dbb9941440af8f86d30c4b2f729daa8.png)
3. Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
   - To select multiple files, hold Ctrl while clicking the files.
   - If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx. ![](../../.assets/images/01efebaaf32c4e691b785974607f9bc7e39255408d17c439acb5bc4b60cb2b91.png)
4. The ingestion window should now show the files you selected. ![](../../.assets/images/2e9968beadf9d878e833f751352ae0852f9dc9ed0d247c40c7f5746865148ea9.png)

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### [Append LOD assets](#append-lod-assets)

1. To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow. ![](../../.assets/images/52f4efc06430abbfa0070dfc480bb263307fd95b4e611b8e1ed404f860dead0d.png)
2. Click **Add LOD(s)**![](../../.assets/images/ead0039fe17029ac8a56efb0923203cba4216ba04a159810392ae6d900256c01.png)
3. In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
   - If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. ![](../../.assets/images/5a9fe5b7222e347fa97543f4541fec8c8a3fa97dafa537b04718088b9a38cfb0.png)
4. The ingestion window should now also show the new LOD files. ![](../../.assets/images/781425febe79f05efb0e43133c3c42c1e6c9e47a0ae4ae761dc4460b953bca7c.png)
5. Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
   - **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
   - **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
   - **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
6. Click **Import**. ![](../../.assets/images/823460e9f1aeb9654f172ef7c935b9410b7cd3ffce865c164effa505f9761b3e.png)
7. Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon. ![](../../.assets/images/9cea067f8819e4a17dd30a72154eab71cc86bee9d180ff57ed38a0461be3eb0a.png)![](../../.assets/images/68e27df7af83e9f0c1586d4d00b9c2d056aa51195b3f4ab7c1314a9dc7d0b306.png)
8. When the import finishes, a “Success” banner will appear. ![](../../.assets/images/ce6e6bbc12db274137c73f85b9fdd76ee77f5d370871ef4f19d3519cbaf2f8c7.png)

> [!Note]
>
> When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> [!Note]
>
> It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### [Add an LOD asset to your world](#add-an-lod-asset-to-your-world)

To use an LOD asset, drag the asset to the world window.

![](../../.assets/images/c5821d9febfc45fed710e3ee2bc873deee6492160d18a85153017e583377b314.png)

If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

![](../../.assets/images/bea956205e45ca70160f267679df3a11022c176d25dd734c93892aa4fe4bbba2.png)

You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

![](../../.assets/images/0101e51a6e76a2d533dea62cdc421a93e5456d7b2ef52e842c1e311ee44bf10d.png)

You can also see LOD behavior in Desktop Editor’s preview mode.

![](../../.assets/images/aa599a89579f3d3d2976f042458e890bf4ede476d6f8b09b1db7093ed2fed7e8.png)

### [Publish the world](#publish-the-world)

To publish a world with LOD assets, you must publish the world from the PC with Simplygon installed. The web or VR flow can’t generate GI data for the LOD assets, and LOD objects will be disabled if you publish your world from web or VR..

When publishing a world with LOD assets and objects, the publishing process may take longer, between 30 seconds to a few minutes.

Then wait for the publish process to finish. Depending on how many objects and LOD assets are in the world, this process could take anywhere from 30 sec to a few minutes.

## [Current limitations](#current-limitations)

- The LOD asset has to be re-ingested to change LOD parameters.
- There’s no LOD property TUI, so after placing assets in a scene, there’s no direct way to tell whether the asset contains LOD meshes.
- If an FBX file has multiple nodes (thus multiple meshes), all of the nodes will use the same relative screen size value.

## [Troubleshooting](#troubleshooting)

**If you can’t ingest LOD models, but ingesting a single FBX file works:**

This seems to be related to the Simplygon installation. After installing Simplygon, close all instances of NDT, Unity, Hubbub, etc. and try restarting your PC.

