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

* A Windows PC with [Meta Horizon Worlds desktop editor configured](/hw-docs/desktop-editor/getting-started/introduction-to-desktop-editor/).
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
- After installing Simplygon, close all instances of Horizon, Unity, Hubbub or NuDevTools, and relaunch them as needed. If you see an asset ingestion error after closing and relaunching, try restarting your PC. See [Troubleshooting](/hw-docs/desktop-editor/help-and-reference/manual-level-of-detail-overview#troubleshooting) for more information.

## Create and use LOD assets

### Demo video

Here is a demo video on how to use LOD.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453534749_1201716487733176_295925959581960111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=XeLw9lXDzvwQ7kNvwFTxJqc&_nc_oc=AdkTYtw1I0m-TV4LWqATpqGlYJ6t1oJqMptuy98oBOoH4BsfmxnNG0Qy-7QuXWFWcFY&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfjIbSYT7V4VnUUTjc7Fd7WR1hyRygZ0Vnc3SVRU00l_Mg&oe=691775BB)

### Sample assets

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name | LOD assets | Recommended relative screen size setting | Vertex | Texture assets | Notes |
| --- | --- | --- | --- | --- | --- |
| DamagedHelmet | [DamagedHelmet\_LOD0](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974452_1110977567398498_3267634047256809730_n.fbx?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=8eIuqjzirC4Q7kNvwFRJJQm&_nc_oc=AdksRS7Sv1eORAvLUTayCXMmU02OLfQ1OLrGY7GODYTjcDVP4t_bCQUch_z4qp5Z-rs&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfgKkvWxXA90EH9KcvzUjRvPv1ej1ZAP3GWm5GAWUSA4qg&oe=692BE249)  [DamagedHelmet\_LOD1](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75241698_1084209123102490_8721696503486453490_n.fbx?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=nhfZeXOl4gAQ7kNvwHPuLSg&_nc_oc=Adn3F8EpicBb-BvaeIDYKjxp2GMnMoqbnVyI-3Qn63WVvQZ1sRYroy1jw09WuijdHQk&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfghFUvGbjK3zfdBn-Kt5RaEEOq0K1ByoXNRNwQRmBQM2A&oe=692BE708)  [DamagedHelmet\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39036644_543824368397921_749567675276430240_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=dlVooqimTxsQ7kNvwEHP_iV&_nc_oc=AdnRk2j4AA2t_SvK1ofjVdQ_mgdFgA6JWW6n0zn-cL86lksOjvNESPUWXgE4XFBAjVU&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afj1PywQtSoW63HM3aR2rVrCPpq8krol7GtsotADHNOZQg&oe=692BF7C2) | .3    .1    .01 | 13341    5763    2208 | [DamagedHelmet\_BR.png](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/39031396_1211383596830479_1106960686933552311_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=-uGKjFy2lXAQ7kNvwF2hNDx&_nc_oc=AdndXVHQrvvH-NO6JQkw87-v0byrkJZCrybH0fNdJcYLOW7uDUAd3AbXE2TPU7SR3E8&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfhbhW5VYQpuc6Xr_hkqJqYGmecpzeOJBalinSXUuyrRGg&oe=692C047F)  [DamagedHelmet\_MEO.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/39035471_460649110467753_1686906741871334990_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WDrV757h1i8Q7kNvwGJqvBT&_nc_oc=AdnFPYpv-qnNgRHcZqRFErbJK81PZ70GqWogETQOUdIL2GfO0Ss6BzIWt3kJvmndatI&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afhhw5dupf9JY9mZPeNLQvsFpuiE0MIFVsL-dHX_KQexbg&oe=692BF7DA) |  |
| Suzanne | [Suzanne\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/86620687_424732963772558_3603515224534172233_n.fbx?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=rkGtUvkYauYQ7kNvwFEo0Hv&_nc_oc=Adn-wq47B7nHA5PbEtTd8n-w7RQ_izz35f7ExS9A4PsAENlTAnk-LTN2lgK9CxIe0lA&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfiZaTONOuIy-_l7sOH7j0gp-6iZkIyUqOPxyKRW4K3nfQ&oe=692BEE22)  [Suzanne\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974679_1774312949997424_3774288506792177577_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=pirF_bIt4-QQ7kNvwHUGP_g&_nc_oc=AdnZkhQLztmROWmwVfvD7rYKXhMQ0jb-y-_gqxUjKD3EsHJfV6Z1pzcQ1XGuUcBk_qs&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhYbKJdURSbw7D1uCpRrZ1Dei1AIRvqV2CNCipwHmGXeA&oe=692BD9B4)  [Suzanne\_LOD2](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75404233_507077025666832_7688880730582757364_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=gZKz462egjkQ7kNvwFWIvZF&_nc_oc=AdmjzaMADs7XpaF_9w8AKMlKdASA3URn9r5FrrZMMOHIbfyEkvZOiPicmg7SLHIiPLo&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfiyPRWhRtU1UM4ajaV4-LD2VbfrUMbBBujPN0Gsl0MlWA&oe=692BE1B7) | .3   .1    .01 | 7958    2573    909 | [Suzanne\_BR.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75210401_522547524089238_3818379784629030093_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=jgX8fHJCArMQ7kNvwEFW_NB&_nc_oc=AdmLIX7iQdlLXhIzRSqhDOfAw56N6INpFSJGsJOJjd_z-Q4IeDF5HSqOzzHgj9-TpMk&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfhcM1RcRo1nxpTp0E-HjLVazUsnnMxDUOphs3EiUW-3jw&oe=692C0B0F)  [Suzanne\_MESA.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75334063_485564684498051_5902144713115885952_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=xwbs-9jNqI0Q7kNvwHzMLrj&_nc_oc=Adkd7k0ZhKW8h-dlsb4uP_wG2ZCQb7INTpNLZypkbn_jAWT11v_nBdoOooKy0fYFodM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afi5xXJjCLoyoHXzIbBZB6sfyWF6PgwF1EHJ1w6b1wGgQQ&oe=692BF03A) | Ignore import warnings. |
| StoneFloor | [StoneFloor\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974803_3611041129041311_2668313382660000807_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=PsxUOT3Y9HUQ7kNvwEO2rNo&_nc_oc=AdndzO7hWYn_mp7eoSVVCc1iQHoXy1AZsNKupSdxhQ5CdER_yrLbSjxxosl55kq8FcA&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhaF5BrvBepPKqglhFhW0e0bxmi3drH_3zaS5tKo0e0nw&oe=692BF3FE)  [StoneFloor\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57575351_583790344173233_5836712915629891216_n.fbx?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=kr8su00-Y9EQ7kNvwHijuSg&_nc_oc=AdnsQS_SOQTJLYgAuWQJqPgMA07ZHAYdT2dxrxYacE9kr96zyX450tEgrAAQhC4SWyo&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfgMRGSZgc6CJ8-CaMAuB_23Snztq-qeakLaVRO4ll3OOw&oe=692BFED2) | .3   .01 | 1502  266 | [StoneFloor\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982708_1041123087752366_8769918822486248358_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=yrgepIYZS_YQ7kNvwGSTiQl&_nc_oc=AdnfGPsi_s35gcmD1pt1dPgSNCg_q6zkCES4Ayuk4yqx3aHt9ai_QGOs3xsMXMhoyEo&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afh0Z4yXLiAl81PtidgErQHCHRtL6803N9-q36Jmxkzjnw&oe=692BD978) |  |
| ColumnSetA | [ColumnSetA\_LOD0](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75207235_572656031963575_8134019312426795705_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=V4dhq2pomEEQ7kNvwHFVvrD&_nc_oc=Adm_ji6mByPs86opUMtxiL3kw_y6Pxd-yUfEpRxNs84Xg0k3ve6lbUO13rLswwENqAE&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfiBW6hnwIBg3gJAdsD9qsCxIVf-22lXhuu8GBKiLfhhmA&oe=692BE338)  [ColumnSetA\_LOD1](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75422379_1117471496715133_9153812592022689103_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=In1gsl8yxtAQ7kNvwFoNSA5&_nc_oc=AdmLNVnRI39DmjEZH_JjH2bFHgxfjZUVIhi11G56X0bf8l8UGX94W-h4XIwP-moQgww&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfinfxtB1fHxuM-ZPh4R8i_YLhVJKiGI12aMgUrY38kXVA&oe=692BFCB3)  [ColumnSetA\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974723_1229165174971481_2089172905872648967_n.fbx?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=V5CSmekQZXoQ7kNvwERNeO2&_nc_oc=AdmJrSmga7zNaGDC13MWm1NBFlFyxfzxkUKTl8IudTq0QYHhs8U_4zoTHVfGFIOt7w4&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfjdVx0rI5WbNl1lYnWxTlBda1kDvGuNwTP11XR7NchwrQ&oe=692BDF1C) | .5  .3  .1 | 7657  4733  2515 | [ColumnSetA\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982480_1328835308493384_834914125048304768_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=I5Miavx13fwQ7kNvwEcW6Bu&_nc_oc=AdlRtkEpTEfwDFldttpBcFZ3y-yFhwpHg7lMkAS338-yQuAakogRpbcwDc2YxwpdQjM&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfhOu29NeiB07ziT8FYmkN_H6QUqVjn04SoKrm3hriPpHQ&oe=692BDC8D) | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## Ingest LOD Assets

### Create a folder

First, create a folder to store your ingested assets.

- Click the **Assets** pane at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746635_512510217953601_3114243496821367227_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=XHYGpOTxo1gQ7kNvwG9S3E2&_nc_oc=Adm0wuXnXsdodRdASI-D0Q2kG5tHrf0zveB_dj69vJWkjpeokUOeY6ufrzrsEVFpjjw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_Afhv8KPypEfzCbpLbWMEewAw3q-1UIV5MH06EJOKqHfEqQ&oe=692BDEA2)
- Click **Add New > Folder** and give the folder a name.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510127953610_2127077901733027775_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=gpU4XERzp0YQ7kNvwGPJ_41&_nc_oc=AdlmhIFG_jBUtPWPFGP4GQadNKX_Ym-i-hBEenmq2dXJaDaOrk5Jf9Tpy-76IJqeK1s&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfiREeaOZ0RxHhYCxrkwns-yHxLtS5EAthos1DlgevNhjw&oe=692BEEE2)

### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/476358530_650633064141315_6123901305812892096_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=1QiPsC0PhEYQ7kNvwFiDk9W&_nc_oc=Adl3gt88hUPXzz2FWWmkt-t0Ud8q0CX67rRjHOnIjzIuFYjB3cxmoIx_YiI4kYFaO3Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfhD3EMlN63I7V6RpWkyi83fR6Cpl8tOxZbMn07nq9htzQ&oe=692C08DF)
- The mesh ingestion window will appear.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672915_512510131286943_16962784959826029_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ypzzaw0XI1cQ7kNvwGAzLi_&_nc_oc=AdlMAjVGavzupl6lexD_84vZXPh8xO1-VSpKalERJR43br4V4AP1et0UzGsJ-T9jeeE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfiWMjLFLUDuN8SW3rKZvNkfQ6mrS_4PGuZ82s7dS1ex5w&oe=692BDA4F)
- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510087953614_3767056647331480894_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=aolJB4I-pqcQ7kNvwGCNXWG&_nc_oc=Adm-XrqF0VKezxfw4siP7LT3LNVrAXbagqZz6MQq0P3xMCeCImFHLzeZlUFJxpZPrs8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfjREu38HvB9lQdA-CYeM9d3hV29DuOLsliXDf8irrjzDw&oe=692C0F97)
- The ingestion window should now show the files you selected.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908638_512510097953613_7636898147610062708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=b-65X1gPvbsQ7kNvwGkexO6&_nc_oc=Adm9gzdgNOiWS7koqF71CtbMR5ZIb9p2MOYciOV1dDBhNVQtMTLHTPk0MLDoU9gbbFg&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgjMjclhbIwUYH8kvasuIaC4pPkgO4oqUK0l42AwiuOYQ&oe=692BE392)

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512510114620278_3499214126645664613_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZhSEnWuEZLQQ7kNvwHtUv9L&_nc_oc=AdmAYO1waqqoHHFoi69VtGvhHJr1JqVz9qtCKEhPc4bULEYFwS5Dyilpp7GXpeGepr4&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_Afg2wKuchVOz3AcxuqGnHqB3Z9EbOb-cTlSZW0KoCd5Cww&oe=692BEFF3)
- Click **Add LOD(s)**![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587898_512510111286945_6432106008314023031_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=StFrSuYmi78Q7kNvwEbRlir&_nc_oc=AdkbXcG8a2YfRZ5zlV9F51jPYXvZKSd7NGbG6RdQZ4hmFzNDOQJklJcRD4NX4JyJC6U&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_Afg8Zw_ExUBpmo1RdQVEUJkGbH3HFWuCa_OIiLlLmr0OzA&oe=692BFCEC)
- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452772355_512510091286947_7590734842067493140_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=FBhmXTIYIowQ7kNvwEb5qCk&_nc_oc=AdkImVQpFJHDF5rGbtxohqgnIpuYB8T5berZb-3nenDC3p8e_R83msc-XEfkn9NFzKQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgA8lSZHZfnFeuKs1PgVQ4SSObawjLv3UvsVLlHFGXwow&oe=692C0657)
- The ingestion window should now also show the new LOD files.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452817871_512510214620268_3811525399855144317_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=iZqS_gCky0UQ7kNvwE0xRD8&_nc_oc=Adk1sAfwZHtaTUfVLgNwq4VQHM5IJ-2O9PRbsKjxCDgP_6zeYR0dR45c3RCnZBiiCRA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgxAPGgl0wI-UeTDBluMKVtB7c_d5OGZRzGu0Q9Gp2ROQ&oe=692BE403)
- Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
  * **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
  * **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
  * **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
- Click **Import**.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520181_512510207953602_2188403874289102963_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=iD2Or1OITw0Q7kNvwGikcow&_nc_oc=AdmKR_JM_O5_RoCLp-_B3iQTNITO7cZDJXBWT3mWy06ebioyCJv5HvLWtZxbbpYCNvQ&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgrgzwN-nmwph6tcolU67TybeBzcTFF33HNMhfX1J7JkQ&oe=692BF835)
- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520043_512510204620269_1030569126414916300_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=BiYPrfbZNA0Q7kNvwHpvHhO&_nc_oc=Adkwg8u_S9PEsQlr3Bfatk80Vp__TO2hNB1fdN2S1Rb4EGW4CSijE3RiDpNwquyLl7k&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfiKFBVdc0qImNW0rzW_VWQf1CWnaA6k7lE3zn93tA8UJQ&oe=692C0CA5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746741_512510201286936_7556625726474085776_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=JuZfticRsucQ7kNvwGzGSLI&_nc_oc=Adkg_jSzmWDX5omskJG1bnjgZocabfs49qtT3iMTyEbX6Y_yhZTTmn5DHPr_iCHAsc4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfjU-roxTAmhASmD8VKaGvYDd11Q93rvp83K8VycYTJYaw&oe=692BDDAF)
- When the import finishes, a “Success” banner will appear.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653243_512510197953603_4225377072029174481_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=y2B7WJFPRX4Q7kNvwFtDRjy&_nc_oc=Adk2ZEU5AY9DaMSF9NU2R7xt3aoLfMDJvGw-WoPb-efdQ5OB1VTecO77AA092DsrUSg&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgUqEMPcIXPUJaK3cd2B7USL2oU2gE8ns1pghLF_lAIOA&oe=692BDFF9)

> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578653_512510141286942_8187160058036161687_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=IEODJOlCPngQ7kNvwFD03WR&_nc_oc=AdmcHWfIT8iBRX6zh0gY2HzFUwQmIlx_NO2Nl7ZLSwW67JyLV4bLNy4P6ynFWYVlqcY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgMtBxxVAHVewHNzFXHxZLGIIEs18iHz-UhfcUjwJ485g&oe=692BEFA3)

If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513309_512510124620277_672843571951153038_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ygrRx4g1QA4Q7kNvwGqFkp3&_nc_oc=Adn1-WQzfPHZ5KcdZQjOabiElk81-M8ELbyzBaYXUzXFXxiTuFrSgLNJjcCs_Pj-Vto&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfgCqXMitk9fc5Z3YpHogq31goiTlTRBYWQROiGMvoEuuA&oe=692BDB12)

You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452587746_512510134620276_9189181265092177001_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=b7tGSUA_f0kQ7kNvwFCvNA5&_nc_oc=AdkCUykqrzTYqzjeUl5ZxZlB45KoCSbxyv6cxBVqFB8DhemQJ5ZLn2RwpWBqtcbC1JY&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfhfKHr8snDNvKeFYP8MIuem0k8Jy__VMe2rW3r7UAVERA&oe=692BF76A)

You can also see LOD behavior in Desktop Editor’s preview mode.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452590061_512510137953609_1190235246472948998_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=u9_mxJbEGeUQ7kNvwGV1GJC&_nc_oc=AdnGWPsGG5IFq1Ya8G315-xnhEEsR39R_TARf0Pmi4Q-Hc3WkLAeSHJHSf7SOAflqfc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=5ToGBDSOqFNsZcL0NTejjg&oh=00_AfhNTa5yuA4tn5BG4RXijqff8C2Q5xU0mlJSITJF5bxemQ&oe=692BF11F)

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