Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/help-and-reference/manual-level-of-detail-overview

# Manual Level of Detail Overview

“Level of detail” describes the principle of having lower-detail versions of models in memory for an object and switching to those lower-detail models when the object is small or far away.

The manual level of detail (LOD) feature in Meta Horizon Worlds lets you use this principle to save GPU costs during rendering. With LOD you can create assets that contain multiple model files with different levels of detail and configure which model to render based on relative screen size. This allows you to create more complex worlds in Meta Horizon Worlds.

**Note:** LOD only works in visit mode in worlds with Custom Model Import (tri-mesh) and cached global illumination (GI). In all other situations, LOD won’t be enabled, even if the assets are set up for LOD.

## How LOD improves performance

The current version of LOD is focused on improving GPU performance in worlds.

With LOD, you avoid overshading sub-pixel triangles by switching to a lower-detail version of the model. The tradeoff is that storing multiple models increases memory usage and size on disk. These increases are moderate and configurable based on the size of the additional models stored and how much they’re decimated.

## Prerequisites

**Note:** The current LOD feature only works with Desktop Editor.

* A Windows PC with [Meta Horizon Worlds desktop editor configured](../Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
* [Simplygon](https://www.simplygon.com/) software installed.
  + This is required to import LOD assets and publish a world with LOD assets.
* A Custom Model Import world running in edit mode in Desktop Editor to import LOD assets into.

### How to install Simplygon

**Warning:** LOD asset import and GI lighting data generation require Simplygon. If Simplygon is not installed correctly, LOD import will fail and if a world has LOD objects, GI lighting data publishing will fail.

- [Download](https://www.simplygon.com/Downloads) the installation file and run the installer.
- Refer to the [Simplygon installation guide](https://documentation.simplygon.com/SimplygonSDK_10.0.1400.0/installation/default.html#download-installer) for installation details.
- You’ll be prompted to install a license key.

  * For 1P and 2P Studios, please reach out to [Alex Elsayad](mailto:alexelsayad@meta.com), [Deborah Guzman Barrios](mailto:debguzman@meta.com), or [Travis Hoffstetter](mailto:thoffstetter@meta.com) to get a Meta license key.
  * 1P and 2P studios/creators can use Meta’s license key to use Simplygon under the following terms:

  ***NOTICE OF LICENSE RESTRICTION***

  ***The license key for Simplygon provided is strictly limited to use for the Horizon World project only. Any use of the license key for purposes other than the Horizon World project is expressly prohibited and constitutes a material breach of this agreement.***

  ***The user acknowledges and agrees that the license key may not be used for any other projects, products, or services, and may not be shared, transferred, or sublicensed to any third party without the prior written consent of Simplygon.***

  ***By using the license key, the user confirms its acceptance of these terms and conditions, and acknowledges that any unauthorized use of the license key may result in legal action, including but not limited to, injunctions and damages.***
- After installing Simplygon, close all instances of Horizon, Unity, Hubbub or NuDevTools, and relaunch them as needed. If you see an asset ingestion error after closing and relaunching, try restarting your PC. See [Troubleshooting](Manual%20Level%20of%20Detail%20Overview.md#troubleshooting) for more information.

## Create and use LOD assets

### Demo video

Here is a demo video on how to use LOD.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453534749_1201716487733176_295925959581960111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=KT0cBY-rCjQQ7kNvwEkGi8v&_nc_oc=Adk_YVidR9Ifxe-x6-fPgHLScPEXiiIMraWVMtHVGsUke-uxLT7H4laWIEtkLGIFI36xdSTQ75XTsU8LeEHsFV3G&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfmT1pnS7v6yLxfYv8k8-gm41_nBqH2EqthqiQLYMKDGTw&oe=6940FCFB)

### Sample assets

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name | LOD assets | Recommended relative screen size setting | Vertex | Texture assets | Notes |
| --- | --- | --- | --- | --- | --- |
| DamagedHelmet | [DamagedHelmet\_LOD0](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974452_1110977567398498_3267634047256809730_n.fbx?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=B5OwK2pQNgcQ7kNvwG4_pKo&_nc_oc=AdmABHLmKcZdkagk9Hd0OS3yHqFiJiSgcDUlEAYxS9iFlqkcuhf5K0L-7tpkrLztMigouBYNKCQoL_gU5Be09me7&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afn0a4MEB5x93xt_6DcjXtIVqVl4UXyPO9qc36uWSdOohw&oe=6955A1C9)  [DamagedHelmet\_LOD1](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75241698_1084209123102490_8721696503486453490_n.fbx?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zJNbAMqZU_AQ7kNvwEsTMLB&_nc_oc=Adm2z3TTwqB8ovmnSoHTHmAr-y488vVZAjm2wGrk8sTIPwxbfvGvLHxglv5gdz3vbHb-24CZ-AfJBpp0Oq6k-ZfT&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfnPNu3FYEtsZ_4Rera8vjtwJPIbfZX_SonJhInlt8ts1A&oe=69556E48)  [DamagedHelmet\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39036644_543824368397921_749567675276430240_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=iLmrh8fUGnwQ7kNvwGWl0hv&_nc_oc=AdnaAR15WeRlQeo339Eo6kHYHs9D8Wv8-YfXKlsgH1hETc3sbd7CMGnTkGt5SxnO6YcPM2bHNniQ9ujWzkn-kV57&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AflryohIfmDrB-dz0AGr3pX9nfw9GFiHcPIYnnXGSxL__A&oe=69557F02) | .3    .1    .01 | 13341    5763    2208 | [DamagedHelmet\_BR.png](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/39031396_1211383596830479_1106960686933552311_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=U4IckqaLTQYQ7kNvwEyHrCR&_nc_oc=AdmGZh5O23IszrbLFwwONGam9BREtvrvCU7Oi5OJZ2R4lEpBMO2iniGoQRPXkYYgOC8_9hdLDdgg24Q_svsprkWm&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Afl7MjsNtOybYQ0NJCPh3YZQ7QePQ0e4chZKMAdJeQJXoQ&oe=69558BBF)  [DamagedHelmet\_MEO.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/39035471_460649110467753_1686906741871334990_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=QPcKZegUolYQ7kNvwFipiRU&_nc_oc=AdlhyuUc37zgjFYrh2c_0gKBnggGNTLEMqHPwfL9mZLfu0ByD9elE47kI-bxhgyVNigYnX_JiPE_k7xp9tlHNWOI&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkVl0W_o2y_wOkN34FEpv1YE0h7ME5QpdPS3X2jpeblRQ&oe=69557F1A) |  |
| Suzanne | [Suzanne\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/86620687_424732963772558_3603515224534172233_n.fbx?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VChu-uRbqgIQ7kNvwHSdQRA&_nc_oc=AdlLG326xSwNGCTvwabVMcpOgM7p6_RUKKIlS0phwoTbk5400UEWvEVB8uU0pk7V_b3v6G00MIqh_uyhy82464Tw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afndv2TqvR1--U1L7Oyk34y7qdl8TbnkjdgRZN4DCB5LYw&oe=69557562)  [Suzanne\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974679_1774312949997424_3774288506792177577_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=8AgSzUXQ6ZMQ7kNvwEPvcuw&_nc_oc=AdnIV_ASD4rjjuIFdgWczOGCxDMEPPolSQdg1ZVuzmCXi-9EdThFWRIM7oFiVaxk1XQqiTSlxRVPPxA_b3dFEctg&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfnWwRSuy_EcmgO93GH2rQta5XvGGMYZXW3Bae7XMkTQvw&oe=69559934)  [Suzanne\_LOD2](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75404233_507077025666832_7688880730582757364_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ho3ZlhPKAWMQ7kNvwF2DR9t&_nc_oc=Adkw5w_Iqrz_8IvE34ED2rI9wf1cdIX8Jia-tBKKgF8EjIF5Ry7UZ4ysPytDCR4Z9eYvEdF1KeEJi7o8qb7RV3Ii&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfmtjZvLcNrDJJorP8DR8ZVhmkBcLkU7Ed45pK_w6JN5Eg&oe=6955A137) | .3   .1    .01 | 7958    2573    909 | [Suzanne\_BR.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75210401_522547524089238_3818379784629030093_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=QRxtF7SkpgsQ7kNvwEO4jxE&_nc_oc=AdnTwT6EDAc1uq6Sd97UHqgENyb0TDIkKNHzNaBPz1_9Ls8thl-aMFR29AchQFDaSadKVIrJNFToNJIsedoWjykD&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afk2upVfKM4kx0ln6LfjFknGvNY7HeJG1a9a8Qe59VsDFA&oe=6955924F)  [Suzanne\_MESA.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75334063_485564684498051_5902144713115885952_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xC359yUl5-4Q7kNvwHi1CUl&_nc_oc=Adn8_f54qenFcNH1SA-mZHwO1eLFnfsx2ZIkDpkWGpI_rAVgbE5oNzw3Zo5n0aym3k35kOiOeyus6cWY3yurm57j&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afn-Ebl_n_onZPN_bTBJWKiJ00RsMh_4rdq17dRGksyXqQ&oe=6955777A) | Ignore import warnings. |
| StoneFloor | [StoneFloor\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974803_3611041129041311_2668313382660000807_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=dZykJCtwQL4Q7kNvwFU51Ub&_nc_oc=Admz4p1LJsrnmNyhRmA1pfAe3Msn3vl40PVfpijmfAxqhs9n4TTfqUbL4umR6u04Un0OaGb3VTVdFB6lmAb7W9GT&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfnRHtuBSRCIZKqWeTYGSsaUQUByB_v8a0axMBxRAgetzg&oe=69557B3E)  [StoneFloor\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57575351_583790344173233_5836712915629891216_n.fbx?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GcWUBrlSagEQ7kNvwEUHOeR&_nc_oc=Adk1fIPX_dwjTwKGxakYY2EcEKlzEKp6PeQ340XSYVC3-k0s_zMlazeclLqvLy47i-EXmYbEmErLrw7zqxA7Fq3F&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmaQ0zMGeU5ImyXlnZFkuIgPHsfKKEiLwWOdVBJNwu7fA&oe=69558612) | .3   .01 | 1502  266 | [StoneFloor\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982708_1041123087752366_8769918822486248358_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uIoKgDEya5QQ7kNvwFVTqH6&_nc_oc=Adm9JXhdF4X_i33jdFb_8L2iwqcbCT0iTP6r6BAbowZC_qQba8cUWj_UzVuAEWe-4eNa6yZ8HdD0hUI06OIOm8DG&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmfDxAR4KwIBNwP4QtK-k_1e_XU9p7VVSNwoCPEriZnwQ&oe=695598F8) |  |
| ColumnSetA | [ColumnSetA\_LOD0](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75207235_572656031963575_8134019312426795705_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=72s5dmMyiTsQ7kNvwGUlcdB&_nc_oc=Adnab3Z7RmIHiyqO_5v4T_rDmmRo3Rj8uwpPiYbBJJYJhqWHQ4StEbWeOyLlb4xgjT9CwtU66YU5JdPmCLJDR7eU&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Afn4lsmvQsgEs1Cj6u1cLVaXcUB6N_DqfHlcmy0nDFcZhQ&oe=69556A78)  [ColumnSetA\_LOD1](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75422379_1117471496715133_9153812592022689103_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=uu5ugxa_IHAQ7kNvwH8C02m&_nc_oc=AdmFr3QauedrD1BvMcEzDkROjlTNVdMU_Zhei5C4P32pYOXKL7Tzbftwu0bJVqiDix3IRBFyyebJRNqPlZhzlf0n&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfnXPELqOzqcB2caT0eeWvs7Qx82n-2J-cqmHOD3lu7MCw&oe=695583F3)  [ColumnSetA\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974723_1229165174971481_2089172905872648967_n.fbx?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fZvbpX47Tr4Q7kNvwGrau0g&_nc_oc=AdneddkNkMdJJlovR_qIkVOd5EP3NYAx8hymiWsQIRyZrc2IvEwSpuT2SEsO4De-rzfAogvA0GgGFOfW-YCSLLDv&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkAEO9urzqmt9xhn719VgGCTiUV4EMDQM0naaOAKM3Mhw&oe=69559E9C) | .5  .3  .1 | 7657  4733  2515 | [ColumnSetA\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982480_1328835308493384_834914125048304768_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=srBp8yiPvZYQ7kNvwF10Noj&_nc_oc=AdmXwm88kN1Q51eRXPyVz9fC1ulIVviospQWdLFHVecH9NejncLogZm18wkRYDPQ5MN0lIXmWljHvTO-RfXofX9A&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkScTSUnBN3e0pcvJMERxOIX9sELKeO03qFhxs3ye0UXg&oe=69559C0D) | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## Ingest LOD Assets

### Create a folder

First, create a folder to store your ingested assets.

- Click the **Assets** pane at the bottom of the editor.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/2400832749ad67f9e78f8353e7a2d4d8b1b82413d55ec4815d6584dd0906b625.md)
  
  ### Overview
  This image shows a screenshot of a computer interface, likely a desktop environment, with a focus on a taskbar at the bottom and a partially visible window above it. The taskbar contains various application icons and a notification area indicating some activity.
  
  ### Key Elements
  - **Taskbar**: Located at the bottom of the screen, spanning the width of the display.
    - **Assets Button**: A rectangular button labeled "Assets" with a dark background and white text.
    - **Other Buttons**: Adjacent to the Assets button are other buttons labeled "Console" and "Tests," also with dark backgrounds and white text.
    - **Application Icons**: Various application icons are present, such as Chrome, Discord, and others, located below the taskbar.
    - **Notification Area**: On the far right of the taskbar, there is a small icon indicating notifications, possibly for a specific application.
  
  ### Visual Flow / Relationships
  - **Most Prominent Element**: The "Assets" button is the most prominent due to its central placement and larger size compared to the other buttons.
  - **Arrows/Connectors**: There are no arrows or connectors visible in this image.
  - **Spatial Relationships**: The buttons are arranged horizontally, with the "Assets" button being the largest and most central. The other buttons are smaller and positioned to the right of the "Assets" button. The application icons are below the taskbar, and the notification area is on the far right.
  
  </details>
  
  <p></p>
  
  
- Click **Add New > Folder** and give the folder a name.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/d3ebecaca672ee2bfe42b718488e0cc792fa8cc7a222dfec9e2ba4dfcdb1655d.md)
  
  ### Overview
  This image depicts a user interface element within a software application, specifically a dropdown menu under the "Add New" option in the "Assets" section. The interface has a dark theme with white and orange accents. The main focus is on the dropdown menu options and the folder icons displayed below them.
  
  ### Key Elements
  - **Visual description**: Dropdown menu with a dark background and white text.
  - **Location**: Top-left corner of the screen.
  - **Contents**: 
      - "Add New" with a dropdown arrow indicating more options.
      - Options listed include "Folder," "3D Model," "Audio," "Skydome," "Texture," and "Text."
      - "Removed Assets" is visible at the bottom.
  - **Visual styling**: Dark background with white text and orange highlights.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The "Add New" dropdown menu.
  - Arrows and lines: The dropdown arrow points downward, indicating the direction of the expanded menu.
  - Spatial relationships: The dropdown menu is adjacent to the folder icons below it, which are part of the main interface area.
  
  </details>
  
  <p></p>
  
  

### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/36e5b22becbd02eaf5b3d08a2dafc39372795f138b5774df97dfdbd6e95a17e7.md)
  
  ### Overview
  This image depicts a 3D modeling software interface, specifically showing a viewport with a 3D character model placed on a grid plane. The interface includes various panels and tools for asset management and scene manipulation.
  
  ### Key Elements
  - **Viewport**: Central area displaying a 3D scene with a blue grid plane and a simple 3D character model. The character has a humanoid shape with a tail-like appendage extending from its back.
  - **Character Model**: Located near the center of the viewport, the model is a basic human figure with a distinct tail feature.
  - **Grid Plane**: A large, light gray grid covering the entire viewport, serving as a reference for positioning objects.
  - **Top Bar**: Contains various icons and options such as play, undo, redo, and settings.
  - **Left Panel**: Displays a hierarchical structure labeled "Hierarchy" and "SpawnPoint," suggesting object placement and organization.
  - **Bottom Panel**: Shows tabs labeled "Assets," "Console," and "Tests." The "Assets" tab is active, revealing a dropdown menu with options like "Folder," "3D Model," "Skydome," "Texture," and "Text."
  - **Properties Panel**: Located on the right side, currently empty, indicating no object is selected for properties editing.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the 3D character model in the viewport. The grid plane serves as a foundational layer for the scene. The left panel provides navigation and organization, while the bottom panel offers asset management options. The right panel is currently inactive, awaiting interaction.
  
  </details>
  
  <p></p>
  
  
- The mesh ingestion window will appear.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/b9aa1a11f1823c8765a0da661dc0c0f3f5d75ed4efd8c40d3c5fb71516472bea.md)
  
  ### Overview
  This is a screenshot of a dialog box titled "Import Model(s)" that provides instructions and options for importing a 3D model into a software application. The dialog box includes a warning message, file selection option, and a toggle switch for offset pivots.
  
  ### Key Elements
  - **Title**: "Import Model(s)" located at the top-left corner.
  - **Warning Message**: A light gray box with a light blue icon on the left side, containing a message explaining that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
  - **File Selection Button**: A blue button labeled "Choose files on your device" located below the warning message.
  - **Offset Pivots Section**: A yellow warning box with a red triangle icon on the left side, stating that the offset pivots feature is only supported on single mesh FBX files and may lead to unexpected behavior if the FBX file contains more than one mesh.
  - **Preserve Offset Pivots Toggle Switch**: A toggle switch with a blue circle indicating the current state of the switch, located below the warning box. It has a label "Preserve offset pivots" above it.
  - **Buttons**: Two buttons at the bottom of the dialog box, "Cancel" and "Import," both with rounded corners and blue backgrounds.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the warning messages and the file selection button. The warning messages are enclosed in boxes for emphasis, while the file selection button is centrally placed below the warning messages. The toggle switch is positioned below the warning box, and the buttons at the bottom are aligned horizontally.
  
  </details>
  
  <p></p>
  
  
- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    <details>
    <summary>Image Content</summary>
    
    <p></p>
    
    [All image details and metadata](../../image_data/098d68f49f1923b99a66c2dfcb2e91d91034a4bd19aa24fda397b177feece158.md)
    
    ### Overview
    This image depicts a file explorer window showing a directory tree on the left side and a list of files on the right side. The focus is on a selection of files highlighted within the file list area. There is also a preview pane on the right displaying a thumbnail image of one of the selected files.
    
    ### Key Elements
    - **File Explorer Tree**: Located on the left side, showing directories and files organized hierarchically.
      - **Visual description**: Folder icons and text labels.
      - **Location**: Left side of the window.
      - **Contents**: Directory names such as "horizon," "Captures," "LOD tests," etc.
      - **Visual styling**: Standard Windows folder icons and text.
    
    - **File List**: Located on the right side, showing a list of files with their names, dates modified, and icons.
      - **Visual description**: File icons and text labels.
      - **Location**: Right side of the window.
      - **Contents**: File names like "DamagedHelmet_BR.png," "DamagedHelmet_LOD0.fbx," etc.
      - **Visual styling**: Icons indicating file types (e.g., .png, .fbx).
    
    - **Highlighted Files**: Files "DamagedHelmet_MEO.png," "DamagedHelmet_BR.png," and "DamagedHelmet_LOD0.fbx" are circled in red.
      - **Visual description**: Highlighted files with a blue background.
      - **Location**: Center of the file list.
      - **Contents**: File names mentioned above.
      - **Visual styling**: Blue background highlighting.
    
    - **Preview Pane**: Located on the far right, showing a thumbnail image of the selected file "DamagedHelmet_MEO.png."
      - **Visual description**: A small image thumbnail.
      - **Location**: Far right side of the window.
      - **Contents**: A colorful image resembling a damaged helmet.
      - **Visual styling**: Standard Windows image preview style.
    
    - **Open Button**: Located at the bottom right of the window.
      - **Visual description**: A blue rectangular button labeled "Open."
      - **Location**: Bottom right corner.
      - **Contents**: Text "Open."
      - **Visual styling**: Standard Windows button design with a blue background and white text.
    
    ### Visual Flow / Relationships
    - **Most Prominent Visually**: The highlighted files in the file list.
    - **Arrows/Connectors**: None visible.
    - **Spatial Relationships**: Files are arranged in a vertical list, with the preview pane showing the selected file's thumbnail. The Open button is positioned to the right of the file list.
    
    </details>
    
    <p></p>
    
    
- The ingestion window should now show the files you selected.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/cb81581acc1c15cae3e8c9794e6e1b9d61f69247653a42e7d673d02e56c99812.md)
  
  ### Overview
  This is a screenshot of a file import interface for importing a 3D model into a software application. The interface includes a message about importing 3D models, a file selection area, and a list of selected files.
  
  ### Key Elements
  - **Message Box**: Located at the top, it contains a warning message about importing 3D models. The message states that hierarchies are flattened, pivot points are centered, and colors can't be modified.
  - **File Selection Button**: Positioned centrally, it has a blue plus sign and the text "Choose files on your device."
  - **Selected Files List**: Below the file selection button, there are three entries showing the names of the selected files:
    - **DamagedHelmet_BR.png**
    - **DamagedHelmet_LOD0.fbx**
    - **DamagedHelmet_MEO.png**
    Each entry has a green checkmark next to it indicating selection status.
  - **Cancel Button**: Located at the bottom left, it is gray with the word "Cancel" in white text.
  - **Import Button**: Positioned at the bottom right, it is blue with the word "Import" in white text.
  
  ### Visual Flow / Relationships
  The most prominent visual element is the message box at the top. The file selection button is central and draws attention due to its placement and contrasting color. The selected files list is below the button, providing a clear view of the current selections. The cancel and import buttons are at the bottom, offering options to either cancel the action or proceed with the import.
  
  </details>
  
  <p></p>
  
  

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/d49a4c94b05538a63702bbbaae68b84b53b6a7f7fc8cb5ff3f0bcb1d70655551.md)
  
  ### Overview
  This image depicts a user interface dialog box titled "Import Model(s)" which guides the user through the process of importing a 3D model into a software application. The dialog box includes instructions, file selection options, and confirmation of imported files.
  
  ### Key Elements
  - **Title Bar**: Located at the top, the title bar reads "Import Model(s)".
  - **Instructional Message**: A gray box with a light bulb icon explains that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
  - **File Selection Button**: A blue button labeled "Choose files on your device" is situated below the instructional message.
  - **File List**: Below the button, there is a list of files that have been selected for import. Each file has a green checkmark next to it indicating successful selection.
      - **DamagedHelmet_BR.png**: A PNG file named "DamagedHelmet_BR.png" is listed first.
      - **DamagedHelmet_L0D0.fbx**: A FBX file named "DamagedHelmet_L0D0.fbx" is listed second.
      - **DamagedHelmet_MEO.png**: Another PNG file named "DamagedHelmet_MEO.png" is listed third.
  - **Cancel and Import Buttons**: At the bottom of the dialog box, there are two buttons: "Cancel" and "Import". The "Import" button is highlighted in blue.
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the instructional message and the file list. The file list is arranged vertically under the file selection button. The "Import" button is the most visually emphasized element due to its blue color and placement at the bottom right.
  
  </details>
  
  <p></p>
  
  
- Click **Add LOD(s)**<details>
                      <summary>Image Content</summary>
                      
                      <p></p>
                      
                      [All image details and metadata](../../image_data/68c828d44dcb7a62eb5ba2a2d2268bc6c7b631524de0e274078d95ed45ec263d.md)
                      
                      ### Overview
                      This image depicts a user interface element from a software application, specifically a dialog box related to importing models. The interface includes options for adding LODs (Level of Detail) and managing pivot offsets for imported models.
                      
                      ### Key Elements
                      - **Header**: "Import Model(s)" at the top.
                      - **Model List**: 
                        - "DamagedHelmet_BR.png" with a green checkmark indicating successful import.
                        - "DamagedHelmet_LODO.fbx" with a green checkmark and a dropdown arrow indicating expandable content.
                        - "DamagedHelmet_MEO.png" with a green checkmark.
                      - **Add LODs Button**: A button labeled "Add LOD(s)" located within the expanded section under "DamagedHelmet_LODO.fbx".
                      - **Warning Box**: A yellow warning box stating that the offset pivots feature is only supported on single mesh FBX files.
                      - **Offset Pivots Section**: Contains a toggle switch labeled "Preserve offset pivots" with a description underneath.
                      - **Buttons**: Two buttons at the bottom labeled "Cancel" and "Import".
                      
                      ### Visual Flow / Relationships
                      The most prominent visual element is the "Add LOD(s)" button, as it is centrally located within the expanded section. The warning box is visually distinct due to its yellow background and exclamation mark icon. The buttons at the bottom are aligned horizontally, with the "Import" button being larger and more prominent than the "Cancel" button.
                      
                      </details>
                      
                      <p></p>
                      
                      
- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. <details>
                                                                                                  <summary>Image Content</summary>
                                                                                                  
                                                                                                  <p></p>
                                                                                                  
                                                                                                  [All image details and metadata](../../image_data/0ae86f52e81d4866fede604277a02e11af066371abb07d39036a0b1b89be89f8.md)
                                                                                                  
                                                                                                  ### Overview
                                                                                                  This image depicts a file explorer window showing a directory structure with a focus on selecting specific files. The interface includes a file list view with file names, dates modified, and a highlighted selection area.
                                                                                                  
                                                                                                  ### Key Elements
                                                                                                  - **File Explorer Window**: The main visual element is the file explorer window displaying a directory path.
                                                                                                  - **File List**: Located in the right pane, showing a list of files with their names, dates modified, and checkboxes next to them.
                                                                                                      - **Highlighted Files**: Two files (`DamagedHelmet_LOD0.fbx`, `DamagedHelmet_LOD1.fbx`) are highlighted with a red circle, indicating selection.
                                                                                                      - **File Names**: Examples include `ColumnSetA_LOD0.fbx`, `StoneFloor_LOD0.fbx`, `Suzanne_LOD0.fbx`.
                                                                                                      - **Date Modified**: Dates are displayed next to each file name, e.g., `4/16/2024 10:02 AM`.
                                                                                                  - **Navigation Pane**: On the left side, showing folders and drives such as `horizon`, `Captures`, `LOD tests`, `Videos`, `OneDrive - Personal`, `This PC`, `Desktop`, `Documents`, `Downloads`, `Music`, `Pictures`, `Videos`, and `Windows (C:)`.
                                                                                                  - **Search Bar**: At the top right, with placeholder text `Search lod`.
                                                                                                  - **Buttons**: At the bottom right, there are two buttons labeled `Open` and `Cancel`.
                                                                                                  
                                                                                                  ### Visual Flow / Relationships
                                                                                                  - **Most Prominent Element**: The highlighted files (`DamagedHelmet_LOD0.fbx`, `DamagedHelmet_LOD1.fbx`) are the most prominent due to the red circle highlighting.
                                                                                                  - **Arrows and Lines**: There are no arrows or lines connecting elements.
                                                                                                  - **Spatial Relationships**: The highlighted files are adjacent to each other within the file list. The navigation pane is on the left, and the search bar is at the top right. The buttons are at the bottom right.
                                                                                                  
                                                                                                  </details>
                                                                                                  
                                                                                                  <p></p>
                                                                                                  
                                                                                                  
- The ingestion window should now also show the new LOD files.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/761f1161729df9b15ea3535edb1cf0c71a85ad1d866b336bafb024cf64795117.md)
  
  ### Overview
  This image depicts a user interface element for importing models into a software application. It shows a list of imported model files with options to manage them, including adding more LODs (Level of Detail).
  
  ### Key Elements
  - **Header**: "Import Model(s)" at the top left corner.
  - **Model List**: 
    - **DamagedHelmet_BR.png**: A file with a green checkmark indicating it is imported successfully.
    - **DamagedHelmet_LOD0.fbx**: A folder with a green checkmark and a dropdown arrow, indicating multiple LODs are available. Below it, there are three entries labeled "LOD0," "LOD1," and "LOD2," each with a checkbox next to them.
    - **Add LOD(s)**: A button located below the LOD entries.
  - **Model List**: 
    - **DamagedHelmet_MEO.png**: Another file with a green checkmark indicating it is imported successfully.
  - **Buttons**: Two buttons at the bottom, one labeled "Cancel" and another labeled "Import."
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the model files and the "Add LOD(s)" button. The layout follows a vertical flow, with the model list expanding vertically as new items are added. The buttons at the bottom are aligned horizontally.
  
  </details>
  
  <p></p>
  
  
- Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
  * **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
  * **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
  * **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
- Click **Import**.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/810ac668bfb63bd835cd548d5edf335dfe56f9f2343134838912bcd240c587c7.md)
  
  ### Overview
  This image depicts a user interface element from a software application, specifically a dialog box for importing models. The interface includes a list of model files with their respective LODs (Level of Detail) settings.
  
  ### Key Elements
  - **Model List**: Located in the upper part of the dialog box. Contains a list of model files with checkboxes next to them.
    - **DamagedHelmet_BR.png**: A green checkmark indicates it is selected.
    - **DamagedHelmet_LOD0.fbx**: A green checkmark indicates it is selected.
    - **DamagedHelmet_LOD1.fbx**: A green checkmark indicates it is selected.
    - **DamagedHelmet_LOD2.fbx**: A green checkmark indicates it is selected.
  - **LOD Settings**: Below the model list, there are three entries labeled as LOD0, LOD1, and LOD2, each with a numerical value next to them.
    - **LOD0**: Displays the value `.3`.
    - **LOD1**: Displays the value `.1`.
    - **LOD2**: Displays the value `.01`.
  - **Add LOD(s)** Button: Positioned below the LOD settings, this button allows users to add more LODs.
  - **Import Button**: Located at the bottom right of the dialog box, this button is blue and labeled "Import".
  - **Cancel Button**: Located at the bottom left of the dialog box, this button is gray and labeled "Cancel".
  
  ### Visual Flow / Relationships
  The most prominent visual elements are the model list and the LOD settings. The Add LOD(s) button is secondary but important for adding new LODs. The Import and Cancel buttons are at the bottom, indicating the primary actions available in this dialog box.
  
  </details>
  
  <p></p>
  
  
- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/39dcd6b3e650a9f21112ed58c6d24a4cd17dd64ed92ef1658b2e514b526345f7.md)
  
  ### Overview
  This image depicts a notification or message box that appears to be part of a user interface, likely a dialog or alert indicating an ongoing process related to asset import.
  
  ### Key Elements
  - **Visual description**: The box has a simple rectangular shape with rounded corners.
  - **Location**: Positioned centrally at the bottom of the screen.
  - **Contents**: Contains the text "> Importing asset (allow the import to finish before leaving the world)".
  - **Visual styling**: The background is dark gray (#333333), and the text is white (#FFFFFF).
  
  ### Visual Flow / Relationships
  - Most prominent visually: The message box itself.
  - There are no arrows, lines, or connectors present.
  - The text is aligned horizontally within the box, and there is no implied reading order beyond the natural progression of reading from left to right.
  
  </details>
  
  <p></p>
  
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/c3cba35832d05e6c27788ea7b469ec4bb829aaaa2e09b9e616df274820a13537.md)
  
  ### Overview
  This image depicts a user interface element from a software application, likely related to asset management or file organization. The layout includes a sidebar with folders and a preview area on the right side.
  
  ### Key Elements
  - **Sidebar (Left Panel)**:
    - **Visual description**: A vertical menu with folder icons and names.
    - **Location**: Left side of the image.
    - **Contents**: 
      - "My Folders"
      - "My Assets"
      - "LOD Test" (highlighted)
      - "Charlie's test"
      - "Zane's test"
    - **Visual styling**: Dark gray background with white text and icons. The highlighted folder has a slightly darker background.
    
  - **Preview Area (Right Side)**:
    - **Visual description**: A small thumbnail preview with a circular icon indicating loading or status.
    - **Location**: Right side of the image.
    - **Contents**: 
      - A thumbnail image of a damaged helmet.
      - Text: "DamagedHelm..."
    - **Visual styling**: Light gray background with a darker gray border around the thumbnail. The thumbnail itself has a subtle gradient effect.
  
  ### Visual Flow / Relationships
  - **Most prominent visually**: The highlighted "LOD Test" folder in the sidebar.
  - **Arrows/Connectors**: None visible.
  - **Spatial relationships**: The sidebar is on the left, and the preview area is on the right. The highlighted folder in the sidebar corresponds to the previewed item on the right.
  
  </details>
  
  <p></p>
  
  
- When the import finishes, a “Success” banner will appear.
  <details>
  <summary>Image Content</summary>
  
  <p></p>
  
  [All image details and metadata](../../image_data/78b81861b004d5da994b1a282ff2a43cda3f8c01be2f2d76d252d6fb9b0c96ef.md)
  
  ### Overview
  This image depicts a notification or confirmation message box with a simple design, likely part of a user interface for asset management or import processes.
  
  ### Key Elements
  - **Visual description**: A rectangular box with rounded corners.
  - **Location**: Centered horizontally and vertically within the image.
  - **Contents**: Contains the text "> Success! All assets imported" and a green checkmark icon on the left side.
  - **Visual styling**: The background is white, the text is black, and the checkmark is green.
  
  ### Visual Flow / Relationships
  - Most prominent visually: The text and checkmark.
  - There are no arrows or lines connecting elements, but the checkmark icon is positioned to the left of the text, indicating success.
  
  </details>
  
  <p></p>
  
  

> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/4c092a8c8e9841fe58f6a93550e95d016dfd7e0ddf62a4299aa3f9fa0b0292e1.md)

### Overview
The image depicts a 3D-rendered scene featuring a futuristic helmet-like object and a small humanoid figure. The helmet is metallic with a reflective surface, and the figure appears to be a simplified, stylized human form with a blue body and a red hand gesture.

### Key Elements
- **Helmet**: Located towards the upper right of the image. It has a sleek, aerodynamic design with a large, curved visor that reflects light. The helmet is predominantly silver with some dark accents and a green eye-like feature near the bottom.
- **Humanoid Figure**: Positioned below and slightly to the left of the helmet. It is a simple, blue-colored figure with a humanoid shape. The figure's right hand is raised, showing a red symbol resembling a plus sign.
- **Background**: A grid pattern covers the entire background, suggesting a virtual environment or a 3D modeling workspace.

### Visual Flow / Relationships
The helmet is the most prominent visual element due to its size and reflective surface. The humanoid figure is secondary but draws attention due to its bright color and the red symbol on the hand. There are no arrows or lines connecting the elements, so the relationship is implied through their placement within the frame.

</details>

<p></p>



If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/f61c2ba8357330fba071dc85d99fb1b8a186565a84a6b6bc9d6aa85bd9cf7f38.md)

### Overview
The image depicts a 3D scene viewed from above, featuring a small humanoid figure and a larger, green, futuristic vehicle. The scene is set against a grid background, suggesting a virtual environment or a game interface.

### Key Elements
- **Humanoid Figure**: Located at the bottom center of the image, this character is small compared to the vehicle. It has a simple design with a blue body and white limbs. The figure appears to be interacting with the vehicle, as indicated by its raised arm.
- **Green Vehicle**: Positioned above and slightly to the right of the humanoid figure, this object resembles a futuristic vehicle or robot. It has a sleek, aerodynamic shape with a transparent green body and metallic accents.
- **Grid Background**: The entire scene is set on a light gray grid, which serves as the backdrop for the objects. The grid lines are faint but clearly defined, providing a sense of depth and space.

### Visual Flow / Relationships
The most prominent visual element is the green vehicle, which is situated higher up in the frame than the humanoid figure. The grid background creates a sense of depth, with the objects appearing to float above the grid lines. There are no arrows or lines connecting the elements, so the relationship is primarily spatial rather than directional.

</details>

<p></p>



You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/dc9c293ec6d37d648422b857fcb4574b46d08b7a76b8192c80a38e177d53f4f6.md)

### Overview
The image displays a simple interface with a gradient blue background. At the center, there is a semi-transparent white square shape. Below the square, there is a black rectangular button with text inside. The bottom right corner features a small icon.

### Key Elements
- **Gradient Background**: A light blue gradient that transitions to a darker blue at the bottom.
- **White Square**: Located centrally, it is semi-transparent and has a subtle shadow effect.
- **Black Button**: Positioned below the white square, it contains the text "> Preview from here". The button has a solid black background with white text.
- **Small Icon**: In the bottom right corner, there is a small, dark icon resembling a bee or similar symbol.

### Visual Flow / Relationships
The white square is the most prominent visual element due to its central placement and semi-transparency. The black button is secondary but draws attention due to its contrasting color. The small icon in the bottom right corner is the least prominent but still noticeable.

</details>

<p></p>



You can also see LOD behavior in Desktop Editor’s preview mode.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/55e3e48c82c9e29d94ea59dcb34b309d0e2b4af9c8a61cd6721660be13ffd847.md)

### Overview
The image depicts a 3D-rendered scene featuring a humanoid figure standing in a virtual environment. The figure is viewed from behind, wearing a hoodie and pants, with a futuristic helmet hovering above its head. The background consists of a simple grid floor and a gradient sky.

### Key Elements
- **Humanoid Figure**: Located centrally in the image, facing away from the viewer. The figure has a neutral expression and is wearing a black and gray hoodie, dark pants, and green sneakers. The hair is short and dark.
- **Helmet**: Positioned above the figure's head, floating in the air. It appears metallic and futuristic, with a reflective surface and intricate detailing.
- **Grid Floor**: Extends across the bottom of the image, serving as the ground plane. It is light gray with darker gray grid lines forming a checkered pattern.
- **Gradient Sky**: Forms the backdrop, transitioning from a lighter blue at the horizon to a slightly darker shade higher up, suggesting a clear day.

### Visual Flow / Relationships
The most prominent visual element is the humanoid figure, which is the focal point of the image. The floating helmet above the figure's head draws attention upward. There are no arrows or lines connecting elements, but the arrangement suggests a focus on the figure and its hovering helmet. The grid floor provides a sense of depth and scale, while the gradient sky adds a sense of openness to the scene.

</details>

<p></p>



### Publish the world

To publish a world with LOD assets, you must publish the world from the PC with Simplygon installed. The web or VR flow can’t generate GI data for the LOD assets, and LOD objects will be disabled if you publish your world from web or VR..

When publishing a world with LOD assets and objects, the publishing process may take longer, between 30 seconds to a few minutes.

Then wait for the publish process to finish. Depending on how many objects and LOD assets are in the world, this process could take anywhere from 30 sec to a few minutes.

## Current limitations

* The LOD asset has to be re-ingested to change LOD parameters.
* There’s no LOD property TUI, so after placing assets in a scene, there’s no direct way to tell whether the asset contains LOD meshes.
* If an FBX file has multiple nodes (thus multiple meshes), all of the nodes will use the same relative screen size value.

## Troubleshooting

**If you can’t ingest LOD models, but ingesting a single FBX file works:**

This seems to be related to the Simplygon installation. After installing Simplygon, close all instances of NDT, Unity, Hubbub, etc. and try restarting your PC.