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

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453534749_1201716487733176_295925959581960111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=KT0cBY-rCjQQ7kNvwEkGi8v&_nc_oc=Adk_YVidR9Ifxe-x6-fPgHLScPEXiiIMraWVMtHVGsUke-uxLT7H4laWIEtkLGIFI36xdSTQ75XTsU8LeEHsFV3G&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=MmshCpjCgPq_cYht9bscNw&oh=00_Afl6HlgSMcfMMwGh-ebSswqoEzLFddPa1QodEtJqfZhiSw&oe=6940FCFB)

### Sample assets

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name | LOD assets | Recommended relative screen size setting | Vertex | Texture assets | Notes |
| --- | --- | --- | --- | --- | --- |
| DamagedHelmet | [DamagedHelmet\_LOD0](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974452_1110977567398498_3267634047256809730_n.fbx?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=B5OwK2pQNgcQ7kNvwG4_pKo&_nc_oc=AdmABHLmKcZdkagk9Hd0OS3yHqFiJiSgcDUlEAYxS9iFlqkcuhf5K0L-7tpkrLztMigouBYNKCQoL_gU5Be09me7&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afnwmzxe965hU9-DehbSIN0iI_KaRandOMajqa3ADySd4w&oe=69556989)  [DamagedHelmet\_LOD1](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75241698_1084209123102490_8721696503486453490_n.fbx?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=zJNbAMqZU_AQ7kNvwEsTMLB&_nc_oc=Adm2z3TTwqB8ovmnSoHTHmAr-y488vVZAjm2wGrk8sTIPwxbfvGvLHxglv5gdz3vbHb-24CZ-AfJBpp0Oq6k-ZfT&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfnPNu3FYEtsZ_4Rera8vjtwJPIbfZX_SonJhInlt8ts1A&oe=69556E48)  [DamagedHelmet\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39036644_543824368397921_749567675276430240_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=h9X2wW8yvkoQ7kNvwFY3Vzx&_nc_oc=AdkaMNIxaVMp8gOEp1AcAth29gOahGerslTY7ozsGeHW-SwmnkCHZ9C3Nyux_zQn2jyQPD0OoC99p130LNQOwPhy&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afk4gz_YtyOw7pgEbj-EO5tRX4ispuQm8rkcQPHbsEWkLg&oe=695546C2) | .3    .1    .01 | 13341    5763    2208 | [DamagedHelmet\_BR.png](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/39031396_1211383596830479_1106960686933552311_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=U4IckqaLTQYQ7kNvwEyHrCR&_nc_oc=AdmGZh5O23IszrbLFwwONGam9BREtvrvCU7Oi5OJZ2R4lEpBMO2iniGoQRPXkYYgOC8_9hdLDdgg24Q_svsprkWm&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfmrFyGp7sDOBBBhzwFEkj8yYrQIov6yvrFfWuabcMd78A&oe=6955537F)  [DamagedHelmet\_MEO.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/39035471_460649110467753_1686906741871334990_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=r86rBggLFyYQ7kNvwFJl11Y&_nc_oc=Adk0b1Q9wXFD9M2iuwBsrIQUO5U4N0wjsPWPPnll1Bv6zQ7UZqj2hKcqpi_u6tFOrlupbnY1qBoe9ZAVRlPDI73H&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmpSi9GfLWKFckywecI0jd7V_p_vmXayPeGZclDW2T5cg&oe=695546DA) |  |
| Suzanne | [Suzanne\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/86620687_424732963772558_3603515224534172233_n.fbx?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=VChu-uRbqgIQ7kNvwHSdQRA&_nc_oc=AdlLG326xSwNGCTvwabVMcpOgM7p6_RUKKIlS0phwoTbk5400UEWvEVB8uU0pk7V_b3v6G00MIqh_uyhy82464Tw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afndv2TqvR1--U1L7Oyk34y7qdl8TbnkjdgRZN4DCB5LYw&oe=69557562)  [Suzanne\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974679_1774312949997424_3774288506792177577_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=8AgSzUXQ6ZMQ7kNvwEPvcuw&_nc_oc=AdnIV_ASD4rjjuIFdgWczOGCxDMEPPolSQdg1ZVuzmCXi-9EdThFWRIM7oFiVaxk1XQqiTSlxRVPPxA_b3dFEctg&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Aflrd5Zbn7UWgmyq_gcP0QNaGjebvjfe8f5h_HqYLOZrKQ&oe=695560F4)  [Suzanne\_LOD2](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75404233_507077025666832_7688880730582757364_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=ho3ZlhPKAWMQ7kNvwF2DR9t&_nc_oc=Adkw5w_Iqrz_8IvE34ED2rI9wf1cdIX8Jia-tBKKgF8EjIF5Ry7UZ4ysPytDCR4Z9eYvEdF1KeEJi7o8qb7RV3Ii&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfmXVVSETzOFhJ76jS1fKixE4oNcSN_Hbc3ofaL3SrJGgA&oe=695568F7) | .3   .1    .01 | 7958    2573    909 | [Suzanne\_BR.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75210401_522547524089238_3818379784629030093_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=QRxtF7SkpgsQ7kNvwEO4jxE&_nc_oc=AdnTwT6EDAc1uq6Sd97UHqgENyb0TDIkKNHzNaBPz1_9Ls8thl-aMFR29AchQFDaSadKVIrJNFToNJIsedoWjykD&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkjcJ8qqyxACax-VqZKosMayA0b9bFz5gPwHrKHdqa5Gw&oe=69555A0F)  [Suzanne\_MESA.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75334063_485564684498051_5902144713115885952_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xC359yUl5-4Q7kNvwHi1CUl&_nc_oc=Adn8_f54qenFcNH1SA-mZHwO1eLFnfsx2ZIkDpkWGpI_rAVgbE5oNzw3Zo5n0aym3k35kOiOeyus6cWY3yurm57j&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfmRTa232VK80-2uyUOqx7D-BZGz2N0aZIQcCs4YPbFEVw&oe=69553F3A) | Ignore import warnings. |
| StoneFloor | [StoneFloor\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974803_3611041129041311_2668313382660000807_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZSRkIYKT3IAQ7kNvwGI7SrL&_nc_oc=AdnGZfetStjt_tET5hrJArqa1Kev1gPOKWZLYcn5VgZqP1bTEtKhN8FCgutnpGvA2vVc1PVVwMypwyNMvKHCqfN8&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afkb9ZkhioYbuD3zYybtGiDFkeozh_uwGHZpU_e9DVsmOQ&oe=695542FE)  [StoneFloor\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57575351_583790344173233_5836712915629891216_n.fbx?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=GcWUBrlSagEQ7kNvwEUHOeR&_nc_oc=Adk1fIPX_dwjTwKGxakYY2EcEKlzEKp6PeQ340XSYVC3-k0s_zMlazeclLqvLy47i-EXmYbEmErLrw7zqxA7Fq3F&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfnlzPeNaCef9u4d1JzMm6mYjOOhKhVY0PvQSuPmg4IFyg&oe=69554DD2) | .3   .01 | 1502  266 | [StoneFloor\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982708_1041123087752366_8769918822486248358_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=uIoKgDEya5QQ7kNvwFVTqH6&_nc_oc=Adm9JXhdF4X_i33jdFb_8L2iwqcbCT0iTP6r6BAbowZC_qQba8cUWj_UzVuAEWe-4eNa6yZ8HdD0hUI06OIOm8DG&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkKPG3aja5EsJa3iFwPt-hdqz_2pPamAzpQB4QtTOPy9Q&oe=695560B8) |  |
| ColumnSetA | [ColumnSetA\_LOD0](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75207235_572656031963575_8134019312426795705_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=72s5dmMyiTsQ7kNvwGUlcdB&_nc_oc=Adnab3Z7RmIHiyqO_5v4T_rDmmRo3Rj8uwpPiYbBJJYJhqWHQ4StEbWeOyLlb4xgjT9CwtU66YU5JdPmCLJDR7eU&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Afn4lsmvQsgEs1Cj6u1cLVaXcUB6N_DqfHlcmy0nDFcZhQ&oe=69556A78)  [ColumnSetA\_LOD1](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75422379_1117471496715133_9153812592022689103_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=uu5ugxa_IHAQ7kNvwH8C02m&_nc_oc=AdmFr3QauedrD1BvMcEzDkROjlTNVdMU_Zhei5C4P32pYOXKL7Tzbftwu0bJVqiDix3IRBFyyebJRNqPlZhzlf0n&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfniuO6kij9wcUa4cCXyFkyx2iJxWzuQZpDKDZf5w1VNSA&oe=69554BB3)  [ColumnSetA\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974723_1229165174971481_2089172905872648967_n.fbx?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fZvbpX47Tr4Q7kNvwGrau0g&_nc_oc=AdneddkNkMdJJlovR_qIkVOd5EP3NYAx8hymiWsQIRyZrc2IvEwSpuT2SEsO4De-rzfAogvA0GgGFOfW-YCSLLDv&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afmg8Qoo8WfY75qtsRu-BEv1sYyZc4b97SJbN1ZUZbel6Q&oe=6955665C) | .5  .3  .1 | 7657  4733  2515 | [ColumnSetA\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982480_1328835308493384_834914125048304768_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6Ks78robm-cQ7kNvwGmC0JZ&_nc_oc=AdnjF_RM-4JcIbofbSDEX_Ad-lISFK5jDk3nQ_JjZ8-voDyfzNBd5ZUZNOnpl3WYzzsX7sIDMZnU4HDkNhpEUuwC&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkMz14bFeY34L4M5kekKNo8Z6-w6ZG_GtfshiPgsgO-Gw&oe=695563CD) | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## Ingest LOD Assets

### Create a folder

First, create a folder to store your ingested assets.

- Click the **Assets** pane at the bottom of the editor.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054257_20251211_054257.md)

### Overview
The image shows a screenshot of a computer desktop with a taskbar at the bottom. The taskbar contains various application icons and a notification area. There is also a window open in the background displaying a grid-like interface, possibly a design or development tool.

### Key Elements
- **Visual description**: A taskbar with application icons and a window in the background.
- **Location**: Bottom of the screen.
- **Contents**: Icons include Chrome, File Explorer, and others. The "Assets" tab is highlighted with an orange circle.
- **Visual styling**: Dark theme with white text and icons.

### Visual Flow / Relationships
- Most prominent visually: The "Assets" tab within the highlighted area.
- Arrows, lines, or connectors: None.
- Spatial relationships: The "Assets" tab is adjacent to "Console" and "Tests," which are part of the same interface.

</details>

<p></p>



- Click **Add New > Folder** and give the folder a name.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054345_20251211_054345.md)

### Overview
This image depicts a user interface element within a software application, specifically a dropdown menu under the "Assets" tab. The interface includes a selection of options for adding new assets, with a focus on folder creation.

### Key Elements
- **Visual description**: A dropdown menu with a dark background and light text.
- **Location**: Positioned to the right of the "Assets" tab.
- **Contents**: Contains a list of asset types: "Folder," "3D Model," "Audio," "Skydome," "Texture," and "Text." Each option has a corresponding icon next to it.
- **Visual styling**: The dropdown menu has a dark gray background with white text. The selected item ("Folder") is highlighted with an orange underline.

### Visual Flow / Relationships
- **Most prominent visually**: The "Folder" option, as it is highlighted.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The dropdown menu is nested under the "Assets" tab, and the folder icons are aligned horizontally below the dropdown menu.

</details>

<p></p>





### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054443_20251211_054443.md)

### Overview
This image depicts a 3D modeling software interface, specifically showing a viewport with a 3D scene, a sidebar with asset management options, and a properties panel on the right side.

### Key Elements
- **Viewport**: Central area displaying a 3D scene with a grid floor and a blue humanoid figure standing on it. The figure has a small icon above its head indicating some action or selection status.
- **Sidebar (Assets)**: Located on the left side, it contains a dropdown menu under "Add New" with options such as "Folder," "3D Model," "Skydome," "Texture," and "Text." The "3D Model" option is highlighted with an orange underline.
- **Properties Panel**: On the right side, it displays placeholder text stating "Select an object" and a search bar labeled "Search My Assets."
- **Top Bar**: Contains various icons and settings related to the software, such as play, pause, and settings icons, along with a timestamp indicating the last save time.

### Visual Flow / Relationships
The most prominent visual element is the viewport in the center. The 3D model is the focal point within the viewport. The sidebar on the left provides navigation and asset creation options, while the properties panel on the right offers additional functionalities and information about the selected object.

</details>

<p></p>



- The mesh ingestion window will appear.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054551_20251211_054551.md)

### Overview
This image depicts a user interface dialog box titled "Import Model(s)" with instructions and options related to importing 3D models into a software application. The layout includes informational messages, file selection options, and settings for pivot point handling.

### Key Elements
- **Title Bar**: Located at the top, the title bar reads "Import Model(s)" with a close button ("X") on the right side.
- **Informational Message**: Positioned centrally above the file selection area, it explains that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
- **File Selection Button**: Below the informational message, there's a button labeled "Choose files on your device," which allows users to select files for import.
- **Offset Pivots Section**: Below the file selection button, there’s a warning message stating that the offset pivots feature is only supported on single mesh FBX files and may cause unexpected behavior if the FBX file contains more than one mesh.
- **Preserve Offset Pivots Checkbox**: A toggle switch labeled "Preserve offset pivots" is present, allowing users to choose whether to preserve the pivot defined in the original asset.
- **Buttons**: At the bottom, there are two buttons labeled "Cancel" and "Import."

### Visual Flow / Relationships
The most prominent visual elements are the informational message and the file selection button. The warning message about offset pivots is highlighted with a yellow background to draw attention. The buttons at the bottom are aligned horizontally, with "Cancel" on the left and "Import" on the right.

</details>

<p></p>



- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054709_20251211_054709.md)

### Overview
This image depicts a file explorer window open to a directory containing various 3D model files and PNG images. The focus is on a selection of files highlighted within the directory tree, specifically those related to damaged helmets and stone floor models. There is also a preview pane showing a thumbnail of one of the selected files.

### Key Elements
- **Directory Tree**: Located on the left side of the window, showing nested folders and files.
    - **Visual description**: A standard folder structure with expandable/collapsible nodes.
    - **Location**: Left panel.
    - **Contents**: Lists file names and dates modified.
    - **Visual styling**: Light gray background with blue folder icons.
- **Highlighted Files**: Several files are circled in red, indicating selection.
    - **Visual description**: Blue background with white text.
    - **Location**: Center of the directory tree.
    - **Contents**: File names such as "DamagedHelmet_MEO.png," "DamagedHelmet_BR.png," and others.
    - **Visual styling**: Blue background, white text, and a small blue icon next to each file name.
- **Preview Pane**: Located on the right side of the window.
    - **Visual description**: A small rectangular area displaying a colorful thumbnail.
    - **Location**: Right side of the window.
    - **Contents**: A thumbnail image of a damaged helmet model.
    - **Visual styling**: Bright colors with a mix of pink, purple, and blue hues.
- **Selection Bar**: At the bottom of the directory tree.
    - **Visual description**: A horizontal bar showing the selected files.
    - **Location**: Bottom of the directory tree.
    - **Contents**: The selected files are listed here.
    - **Visual styling**: White background with black text.
- **Buttons**: Located at the bottom right of the window.
    - **Open Button**: A blue rectangular button labeled "Open."
    - **Cancel Button**: A gray rectangular button labeled "Cancel."
    - **Location**: Bottom right corner.
    - **Contents**: Text labels.
    - **Visual styling**: Blue background with white text for "Open," gray background with white text for "Cancel."

### Visual Flow / Relationships
The most prominent visual elements are the highlighted files in the directory tree. The selection bar at the bottom clearly indicates which files are currently selected. The preview pane provides a visual representation of the selected file. The Open and Cancel buttons are positioned at the bottom right, ready for interaction.

</details>

<p></p>



- The ingestion window should now show the files you selected.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054812_20251211_054812.md)

### Overview
This image depicts a user interface dialog box titled "Import Model(s)" which guides users through the process of importing a 3D model into a software application. The dialog box contains instructions, file selection options, and a list of imported files.

### Key Elements
- **Title**: "Import Model(s)" located at the top-left corner.
- **Instruction Box**: A rectangular area below the title containing information about importing 3D models. It states that hierarchies are flattened, pivot points are centered, and colors can't be modified.
- **File Selection Button**: A blue button labeled "Choose files on your device" situated below the instruction box.
- **List of Imported Files**: Three files are listed under the file selection button:
  - **DamagedHelmet_BR.png**
  - **DamagedHelmet_LOD0.fbx**
  - **DamagedHelmet_MEO.png**
  Each file has a green checkmark next to it indicating successful importation.
- **Cancel and Import Buttons**: Two buttons at the bottom of the dialog box:
  - **Cancel**: A gray button with white text.
  - **Import**: A blue button with white text.

### Visual Flow / Relationships
The most prominent visual element is the instruction box, as it provides crucial information about the import process. The file selection button is central to the functionality of the dialog box. The list of imported files is arranged vertically beneath the button, and the buttons at the bottom are aligned horizontally.

</details>

<p></p>





At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_054916_20251211_054916.md)

### Overview
This image depicts a user interface dialog box titled "Import Model(s)" which guides the user through the process of importing a 3D model into a software application. The dialog box includes instructions, file selection options, and a list of imported files.

### Key Elements
- **Title Bar**: "Import Model(s)" at the top.
- **Instructional Message**: A message box explaining that hierarchies are flattened when importing a 3D model, pivot points are centered, and colors can't be modified.
- **File Selection Button**: A blue button labeled "Choose files on your device" located centrally.
- **File List**: Three files listed under the file selection button:
  - **DamagedHelmet_BR.png**
  - **DamagedHelmet_LOD0.fbx**
  - **DamagedHelmet_MEO.png**
  Each file has a green checkmark indicating successful importation.
- **Close Button**: A small 'X' icon in the top-right corner of the dialog box.
- **Cancel and Import Buttons**: Two buttons at the bottom, one labeled "Cancel" and the other "Import".

### Visual Flow / Relationships
The most prominent visual elements are the instructional message box and the file list. The file selection button acts as a central control for selecting files. The files are arranged vertically beneath the button, and the "Import" button is positioned at the bottom right, suggesting it should be clicked after selecting the desired files.

</details>

<p></p>



- Click **Add LOD(s)**<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055035_20251211_055035.md)

### Overview
This image depicts a user interface element from a software application, specifically a dialog box related to importing models. The interface includes file selection options, a button to add LODs, and a warning message about offset pivots.

### Key Elements
- **File Selection**: 
  - **Visual description**: A list of files with checkboxes next to them.
  - **Location**: Top section of the dialog box.
  - **Contents**: Files listed include "DamagedHelmet_BR.png," "DamagedHelmet_LODO.fbx," and "DamagedHelmet_MEO.png."
  - **Visual styling**: Dark background with white text and green checkmarks indicating selections.
  
- **Add LOD(s)**:
  - **Visual description**: A button labeled "Add LOD(s)".
  - **Location**: Below the file selection area.
  - **Contents**: The button is gray with white text.
  - **Visual styling**: Standard button design with no additional highlighting.

- **Warning Message**:
  - **Visual description**: A yellow warning box with black text.
  - **Location**: Below the "Add LOD(s)" button.
  - **Contents**: The text warns that the offset pivots feature is only supported on single mesh FBX files and may lead to unexpected behavior if more than one mesh is present.
  - **Visual styling**: Yellow background with black text for high visibility.

- **Offset Pivots Section**:
  - **Visual description**: A toggle switch with a label "Preserve offset pivots."
  - **Location**: Below the warning message.
  - **Contents**: The toggle switch has a blue background with white text.
  - **Visual styling**: Standard toggle switch design.

- **Buttons**:
  - **Visual description**: Two buttons labeled "Cancel" and "Import."
  - **Location**: At the bottom of the dialog box.
  - **Contents**: "Cancel" is a gray button, and "Import" is a blue button.
  - **Visual styling**: Standard button designs with white text.

### Visual Flow / Relationships
- **Most Prominent Element**: The "Add LOD(s)" button is the most prominent due to its central placement and larger size compared to other elements.
- **Arrows/Connectors**: No arrows or connectors are present.
- **Spatial Relationships**: Elements are arranged in a linear fashion from top to bottom, with the warning message positioned between the file selection and the offset pivots section.

</details>

<p></p>



- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055144_20251211_055144.md)

### Overview
This image depicts a file explorer window showing a directory structure related to 3D modeling assets. The focus is on a list of .fbx files, specifically those named "DamagedHelmet_LOD0.fbx," "DamagedHelmet_LOD1.fbx," and "DamagedHelmet_LOD2.fbx." These files appear to be low-resolution versions of a damaged helmet model. The window includes navigation controls, a search bar, and a list of folders and files on the left side.

### Key Elements
- **File Explorer Window**: The main area displaying the file list.
    - **Left Panel**: Contains a tree view of directories, starting from "horizon" and expanding into subdirectories like "Captures," "LOD tests," "trimesh," etc.
    - **Right Panel**: Lists the contents of the selected directory, showing file names, sizes, and modification dates.
        - **Highlighted Files**: "DamagedHelmet_LOD0.fbx," "DamagedHelmet_LOD1.fbx," and "DamagedHelmet_LOD2.fbx" are highlighted with a red circle, indicating selection.
        - **Other Files**: Other .fbx files like "ColumnSetA_LOD0.fbx," "StoneFloor_LOD0.fbx," and "Suzanne_LOD0.fbx" are listed but not highlighted.
    - **Navigation Controls**: Located at the top left, showing the current path as "fbsource > arvr > projects > socialvr > data > models > enginetest > trimesh > lod."
    - **Search Bar**: Positioned at the top right, with the placeholder text "Search lod."
    - **Buttons**: At the bottom right, there are "Open" and "Cancel" buttons, both circled in red.

### Visual Flow / Relationships
- **Most Prominent Element**: The highlighted files in the right panel.
- **Arrows/Connections**: None explicitly shown, but the layout suggests a hierarchical structure typical of file explorers.
- **Spatial Relationships**: The highlighted files are grouped together, drawing attention to them within the list.

</details>

<p></p>



- The ingestion window should now also show the new LOD files.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055243_20251211_055243.md)

### Overview
This image depicts a user interface element from a software application that allows users to import models. The interface includes a list of imported model files, options to add more LODs (Level of Detail), and buttons for canceling or importing the models.

### Key Elements
- **Import Model(s)**: A title at the top indicating the purpose of the interface.
- **DamagedHelmet_BR.png**: A file listed as imported with a green checkmark next to it.
- **DamagedHelmet_LOD0.fbx**: A folder/file entry with a green checkmark, indicating it has been imported. It also shows "3 LODs" indicating multiple Level of Detail files within this entry.
    - **DamagedHelmet_LOD0.fbx**: A sub-item under the folder, labeled as LOD0 with a black square indicating it is selected.
    - **DamagedHelmet_LOD1.fbx**: Another sub-item under the folder, labeled as LOD1 with a black square indicating it is selected.
    - **DamagedHelmet_LOD2.fbx**: Another sub-item under the folder, labeled as LOD2 with a black square indicating it is selected.
- **Add LOD(s)**: A button to add more Level of Detail files.
- **DamagedHelmet_MEO.png**: Another file listed as imported with a green checkmark next to it.
- **Cancel**: A button to cancel the import process.
- **Import**: A blue button to confirm and import the selected models.

### Visual Flow / Relationships
The interface is organized hierarchically. The main focus is on the imported files and their Level of Detail entries. The "Add LOD(s)" button is positioned centrally below the imported files, suggesting it is intended for adding new LODs. The "Cancel" and "Import" buttons are placed at the bottom, providing options to either cancel the operation or proceed with the import.

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

[All image details and metadata](../../../../images/output/img_20251211_055342_20251211_055342.md)

### Overview
This image depicts a user interface element from a software application, specifically a dialog box related to importing models. The interface includes a list of imported model files, options for managing Level of Detail (LOD) settings, and buttons for canceling or importing the models.

### Key Elements
- **Import Model(s)**: A header indicating the purpose of the dialog box.
- **Model List**: 
  - **DamagedHelmet_BR.png**: A file listed with a green checkmark, indicating it has been successfully imported.
  - **DamagedHelmet_LOD0.fbx**: A folder/file entry with a green checkmark, indicating it contains multiple LODs (Level of Detail) files.
    - **DamagedHelmet_LOD0.fbx**: An LOD file listed under the folder.
    - **DamagedHelmet_LOD1.fbx**: Another LOD file listed under the folder.
    - **DamagedHelmet_LOD2.fbx**: Another LOD file listed under the folder.
- **LODs**: A section showing the individual LOD files within the folder.
- **Add LOD(s)**: A button to add more Level of Detail files.
- **Model List**: Another file listed with a green checkmark, indicating it has been successfully imported.
- **Buttons**: Two buttons at the bottom of the dialog box:
  - **Cancel**: A gray button with white text.
  - **Import**: A blue button with white text.

### Visual Flow / Relationships
The most prominent visual elements are the model files and the LODs listed under the folder. The visual flow follows a vertical arrangement, with the model files at the top, followed by the LODs, and then the buttons at the bottom. There are no arrows or lines connecting elements, but the layout suggests a linear progression from selecting models to adding LODs and finally importing them.

</details>

<p></p>



- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055424_20251211_055424.md)

### Overview
This image depicts a notification or message box that appears to be part of a user interface, likely within a software application. The box contains a message about importing an asset and prompts the user to ensure the import completes before proceeding.

### Key Elements
- **Visual description**: A rectangular box with rounded corners.
- **Location**: Centered horizontally and vertically in the image.
- **Contents**: The text reads: "Importing asset (allow the import to finish before leaving the world)".
- **Visual styling**: The background is dark gray (#333333), the text is white (#FFFFFF), and there is a small red 'X' icon at the top right corner.

### Visual Flow / Relationships
- Most prominent visually: The message box itself.
- There are no arrows, lines, or connectors present.
- The spatial relationship is straightforward, with the message box taking up the central area of the image.

</details>

<p></p>

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055540_20251211_055540.md)

### Overview
This image depicts a user interface section of a software application, likely related to asset management or file organization. The layout includes a sidebar with folders and a preview area on the right side.

### Key Elements
- **Sidebar (Left Panel)**:
  - **Visual description**: A vertical menu with folder icons and names.
  - **Location**: Left side of the screen.
  - **Contents**: 
    - "My Folders"
    - "My Assets"
    - "LOD Test" (highlighted)
    - "Charlie's test"
    - "Zane's test"
  - **Visual styling**: Dark background with white text and icons, light gray folder icons.
  
- **Preview Area (Right Side)**:
  - **Visual description**: A small preview window showing a thumbnail and a filename.
  - **Location**: Right side of the screen.
  - **Contents**: 
    - A thumbnail icon resembling a damaged helmet.
    - Filename: "DamagedHelm..."
  - **Visual styling**: Light gray background with a darker gray border around the thumbnail.

- **Header Bar**:
  - **Visual description**: A horizontal bar at the top with tabs labeled "Assets," "Console," and "Tests."
  - **Location**: Top of the screen.
  - **Contents**: Text labels for the tabs.
  - **Visual styling**: Dark background with white text.

- **Add New Button**:
  - **Visual description**: A button with a downward arrow indicating a dropdown menu.
  - **Location**: Below the header bar, left side.
  - **Contents**: Text "Add New" with a downward arrow.
  - **Visual styling**: Dark background with white text and a white downward arrow.

### Visual Flow / Relationships
- **Most prominent visually**: The highlighted "LOD Test" folder in the sidebar.
- **Arrows/lines/connectors**: None visible.
- **Spatial relationships**: The sidebar is on the left, the preview area is on the right, and the header bar is at the top. The "Add New" button is positioned below the header bar.

</details>

<p></p>



- When the import finishes, a “Success” banner will appear.
  <details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055618_20251211_055618.md)

### Overview
This image depicts a notification or confirmation message box with a simple design, likely part of a user interface for asset management or import processes.

### Key Elements
- **Visual description**: A rectangular box with rounded corners.
- **Location**: Centered horizontally and vertically within the image.
- **Contents**: Contains the text "> Success! All assets imported".
- **Visual styling**: The background is dark green (#00574B), the text is white, and there's a small checkmark icon on the left side.

### Visual Flow / Relationships
- Most prominent visually: The text message indicating success.
- There are no arrows, lines, or connectors, so the visual flow is linear, moving from the left (icon) to the right (text).

</details>

<p></p>





> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055712_20251211_055712.md)

### Overview
The image depicts a 3D-rendered scene featuring a futuristic helmet-like object and a small humanoid figure. The helmet is metallic with intricate designs and a reflective visor, while the figure appears to be a simplified, stylized human form with a blue body and a white head.

### Key Elements
- **Helmet**: Located at the top right of the image, it has a sleek, silver-gray design with dark accents and a glossy finish. The visor reflects light, giving it a shiny appearance.
- **Humanoid Figure**: Positioned below and slightly to the left of the helmet, this figure is a simple, stylized model with a blue body and a white head. It has a small tail-like appendage extending from its back.
- **Blue Circle**: A small blue circle with a white icon is located near the humanoid figure, possibly indicating some interaction point or selection marker.

### Visual Flow / Relationships
The helmet is the most prominent visual element due to its size and reflective surface. The humanoid figure is secondary but still noticeable due to its distinct shape and color contrast against the background. There are no arrows or lines connecting the elements, suggesting a static arrangement rather than a dynamic interaction.

</details>

<p></p>





If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055759_20251211_055759.md)

### Overview
The image depicts a 3D scene viewed from above, featuring a green motorcycle model and a small humanoid figure standing near it. The background consists of a grid floor and a plain sky.

### Key Elements
- **Motorcycle**: A green motorcycle model with a reflective surface, located slightly above the center of the image. It has a sleek design with visible wheels and handlebars.
- **Humanoid Figure**: A small blue humanoid figure with a white shirt and blue pants, positioned below and to the left of the motorcycle. The figure appears to be a simple 3D model, possibly representing a character or avatar.
- **Grid Floor**: A light gray grid covering the entire floor, extending into the distance.
- **Sky**: A plain light blue area at the top of the image, indicating the sky.

### Visual Flow / Relationships
The motorcycle is the most prominent visual element due to its size and central placement. The humanoid figure is secondary but still noticeable due to its distinct color against the grid. There are no arrows or lines connecting the elements, suggesting a static scene without interaction.

</details>

<p></p>





You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055849_20251211_055849.md)

### Overview
The image displays a simple interface with a gradient blue background. At the bottom center, there is a black rectangular button with white text. The overall composition is minimalistic, with no additional elements or complex layouts.

### Key Elements
- **Visual description**: A gradient blue background transitioning from light blue at the top to darker blue at the bottom.
- **Location**: The entire background area.
- **Contents**: The gradient effect itself.
- **Visual styling**: The gradient uses shades of blue (#007BFF to #3498DB).

- **Visual description**: A black rectangular button located near the bottom center of the image.
- **Location**: Centered horizontally and positioned slightly above the bottom edge.
- **Contents**: White text that reads "Preview from here."
- **Visual styling**: The button has a solid black background with white text, and there is a small icon (a circular arrow) to the left of the text.

### Visual Flow / Relationships
- **Most prominent visually**: The gradient background.
- **Arrows, lines, connectors**: None.
- **Spatial relationships**: The button is the only interactive element, and it is the focal point due to its placement and contrasting color.

</details>

<p></p>





You can also see LOD behavior in Desktop Editor’s preview mode.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../../../images/output/img_20251211_055938_20251211_055938.md)

### Overview
The image depicts a 3D-rendered scene featuring a humanoid figure standing in a virtual environment. Above the figure, there is a floating object resembling a helmet or a futuristic device. The background consists of a simple grid floor and a plain sky.

### Key Elements
- **Humanoid Figure**: Located centrally in the image, facing away from the viewer. The figure has a neutral posture with arms slightly bent at the elbows. It wears a dark hoodie with light gray accents and dark pants. The figure's hair is short and dark.
- **Floating Object**: Positioned above the figure's head, resembling a metallic helmet or a device with a complex design. It has a reflective surface with some intricate details.
- **Grid Floor**: A light gray grid pattern covers the ground, extending across the entire bottom half of the image.
- **Sky**: A gradient of light blue fills the upper portion of the image, representing the sky.

### Visual Flow / Relationships
The most prominent visual element is the humanoid figure, as it occupies the central area of the image. The floating object is secondary but draws attention due to its placement above the figure's head. There are no arrows or lines connecting the elements, suggesting a static scene without dynamic interaction.

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