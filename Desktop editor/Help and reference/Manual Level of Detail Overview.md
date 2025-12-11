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
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746635_512510217953601_3114243496821367227_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=kQKYAtVJuawQ7kNvwHvkQDh&_nc_oc=AdnQcFgbKuQLQxPbNA_U6uPF9wiBoyDf4uurtjT-Bgw_zm0m1kSZEZeeIqL7sZGze2TjGfiXI8T7pB3vUGFwIRCl&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_Aflb8LOi3rRMRBJMGoA6vdo9nbxzq7INZzTLywrD7rs23g&oe=69559E22)
- Click **Add New > Folder** and give the folder a name.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510127953610_2127077901733027775_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=sAorOcTjEFkQ7kNvwEN4Nm_&_nc_oc=Adn__MknaRfEIGmakJLyvwlt_7fKg5spE2OTqw-bYhcloN6NperoH4Aih-D20LF0SlSGOQqk7ZqPWp72eYvq64C1&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_Afn-CrdX_oUri9RXDthSzLf-7t6Dr5xLc0eE1jGMi7GIAQ&oe=69557622)

### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/476358530_650633064141315_6123901305812892096_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Q0ryBi2zI1MQ7kNvwH5KunQ&_nc_oc=AdkvWeygSIyN-sATx63xYCAtsOH07L9dEhBIKx274kfuxfeIbQXVgYwlSvbZPTijcUq74Up3850evM2K6Fqn6Bjg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_Afk_9CtG578i3feEoM62wcG80Nj-iMpJAYsf5BY9jQ3-hg&oe=6955901F)
- The mesh ingestion window will appear.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672915_512510131286943_16962784959826029_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zsdd2C-jWOoQ7kNvwGSMYnD&_nc_oc=Adks5I9D1oGSuR6lEaR_sHjejcqmAYP-H5yTyJljdHQZEqCCnHdG4GF4JtO3eY2JiIDCYCBwGvkyLjwB68Ekp2uI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfkFH3jyAxqTcz8-PJbPHA0sAtyvv3DuxXLE_z1gQH_uiw&oe=695599CF)
- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510087953614_3767056647331480894_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=r-qsIvPWEQoQ7kNvwFqIJgz&_nc_oc=Adn6mfZWNxQayXnRQrae5Fn-CCqmj3ycgQ1V6Z6XlDVSvryhpNhGH25jWg9kw7ddo1u9-FI8rStfFe3LDEUEE6Xv&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AflgL3vrh5i_foB8NkO6CO_jTTNSnnSVXPgygXgUJOGUmA&oe=695596D7)
- The ingestion window should now show the files you selected.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908638_512510097953613_7636898147610062708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=gTWw3m2LBnEQ7kNvwH8E0Sh&_nc_oc=AdkwJ975ht3nVS2kbZSUjxA48M3UQspppvWtJuyoNB2CAhfE9onkTGhclcJuk4vPcBvQsgMfR6EYi9YyKxCBSVTI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AflHh2pHAQRzuGVj3Q7SXs2EbWVTyVEOvxwOSTgsLBnoKA&oe=69556AD2)

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512510114620278_3499214126645664613_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=cfQyMIagZbwQ7kNvwENFQDp&_nc_oc=Adn5NLuT0_Iml8aYiGZdcY2X6xJElq4QRSatWq_ZVfFwhqnMDbtXUnk8ihtzBJJWaKVktNtlkAVkKNlMw02NBIBi&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AflZq8vGQ45g2-BfUMzNW8F04KaKtK0XzgvgyXqXTTcwnw&oe=69557733)
- Click **Add LOD(s)**![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587898_512510111286945_6432106008314023031_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fi1XUupgPEoQ7kNvwH7Ex9z&_nc_oc=Adnz4TM6VUT4LzGlDd-0n0JEviaj-2JHaf40B2fTXcosOzs5ZAYhATpz6GjzdnNP75OyEZG0zlZuX1FlL5SDV7b5&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfmdaK2-ugWban9ICWMaDA9g-uLHqY9twWBGL44hovBZKA&oe=6955842C)
- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452772355_512510091286947_7590734842067493140_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=X812tn20vaQQ7kNvwEjoY49&_nc_oc=Adlf3NeKZL08gHebitrKaRwRVDjATuARzXaqxzRW24FYuiFRhSMUR8aX-I4poH4-480hvh8sU9cvAdKeGBI7qxka&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfkYol29NzqtgUWhwT7UJoOcvJ52GdXPGUnhfmMHqnEZxQ&oe=69558D97)
- The ingestion window should now also show the new LOD files.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452817871_512510214620268_3811525399855144317_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=6IlW9jqEcyEQ7kNvwEXgxS8&_nc_oc=AdlufcX8B-p6ynrxl7eUmVTcyV9expOW1glufbbCUzuEQchb0vv4xXNbWk7m8gMMsiLM1GPNndgF_xu4ec_-43e2&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfkC-dKvmxsqh_XkRkU2fsfEoP2EhRbpUJtj4_zOikkn0A&oe=69556B43)
- Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
  * **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
  * **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
  * **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
- Click **Import**.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520181_512510207953602_2188403874289102963_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-xRH6JhCUS0Q7kNvwGjsK6c&_nc_oc=Admb1D2Hzdt5_y2hLah7xj2YznlKhFun5Eb6ykHbYVjAG8rVYUvsru7vVRyZU3tdT93fdGVSEn_RMjWk45FCNsZm&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfktrocgvNLweOBQSO2ST2B5VlUZA-IfliKVpoGqr1cGwQ&oe=69557F75)
- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520043_512510204620269_1030569126414916300_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=LGojhVVezBYQ7kNvwGxTfFp&_nc_oc=AdlYbRb0WItbDxTrMoaReAipTztzHllHTuJoGaYRZ4iUHFZmfR-J6XUu4p8CkODWBf1QTuFSHnNj-F4awvMngewD&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_Afneet2CC3znLeerwGv99TJAKeBtE0A106mSMQ-E5pGjcw&oe=695593E5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746741_512510201286936_7556625726474085776_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=5ruoUZEr6-IQ7kNvwEnUvC8&_nc_oc=AdkFX_RBNoADIQmOG59uhxJFsphLZTUv9ZCY6J01QKIZ8fU3j5SXjX-zq8Jg1Y-3AThkrGRdRol3s2Vtp8sEpFO8&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_Afn54khQbBPOdyv3ihgLs5dSMYARMHabPS-prOurnmMSIQ&oe=69559D2F)
- When the import finishes, a “Success” banner will appear.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653243_512510197953603_4225377072029174481_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=jnc_LRbPPMMQ7kNvwFtwCUH&_nc_oc=AdkLZWy5xSSPvHNeLl2Ge-I1LbynwjlluChEIO-i1vKo375UX5AxgaTfZMdihCO3iHe0LUtjD5ztksrALp-XvrN-&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfmcROvqFzWwa8Xwaa5uZjmiAJAjRepwFE110j9GIYGyTA&oe=69559F79)

> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578653_512510141286942_8187160058036161687_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=qvAFEWYfn20Q7kNvwFSC0KD&_nc_oc=AdlLC5OKa8tYA-LIj9dyJnp3T0AaH1jmcXFoaBcACs2MgA6euTvKIkKy2SpnE1uEHmzc8yfQaARSDVkEekpwFCEz&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AflYDnqC53QKrgC7bBOFPgzj68OeQ4T_52-uQnlx0Tqh8w&oe=695576E3)

If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513309_512510124620277_672843571951153038_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=e1VAe0AS-3YQ7kNvwHmAxfC&_nc_oc=Adk05q9GkG86PQwq71cqrsGyXG6rxfB6LgCOWGVbvW4rdJfXHIjtS08P_QCqwxFfmYXQQlbprfWVVbRCewmqV6kf&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfmdQTkumV-UF02swYLYfD2NL4xEAPS-m4tIaR_-4NRc2w&oe=69559A92)

You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452587746_512510134620276_9189181265092177001_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=CNHB91jkBzoQ7kNvwEV79kg&_nc_oc=AdnXmq1jvkM3mdanGtL2Q6gbT6iXeipWKurqWUIPIskFAqWqnOuzrmjgxybxYh6jGrjO_-FSxmzpdpyQazwdf78C&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfkjUpno5Fnal76ltJMPNf6V0g5Y4mWptVbNBUJk6jJODg&oe=69557EAA)

You can also see LOD behavior in Desktop Editor’s preview mode.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452590061_512510137953609_1190235246472948998_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=pCoWKEHatecQ7kNvwHnKIp-&_nc_oc=AdkRDgCVF4Bc2zHPawJ6ERdloPIJKGGC9nVqmIZQjVPq83G85z0sVdoyKoiyIWO0tcS8BmZSSEMlGHSc8pt-Tfnz&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=JuL9snl1UQvJal55KwUa9Q&oh=00_AfnLKsAkPrWs5qf8ppabcfGlZSs8wduDBHnJaIsTAjHSsQ&oe=6955785F)

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