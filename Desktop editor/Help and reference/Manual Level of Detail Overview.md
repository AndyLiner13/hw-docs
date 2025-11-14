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

* A Windows PC with [Meta Horizon Worlds desktop editor configured](/hw-docs/Desktop%20editor/Get%20started%20with%20Desktop%20Editor/Introduction%20to%20the%20desktop%20editor.md).
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
- After installing Simplygon, close all instances of Horizon, Unity, Hubbub or NuDevTools, and relaunch them as needed. If you see an asset ingestion error after closing and relaunching, try restarting your PC. See [Troubleshooting](/hw-docs/Desktop%20editor/Help%20and%20reference/Manual%20Level%20of%20Detail%20Overview.md#troubleshooting) for more information.

## Create and use LOD assets

### Demo video

Here is a demo video on how to use LOD.

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453534749_1201716487733176_295925959581960111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=uaVctFoE9qgQ7kNvwEr3Ppp&_nc_oc=AdniTxSjWu6Qi4fpzGfaXck8vysP2y4pgD0LtNsmqdv8XhqqPxn-qxw8v7A1VNtETC0&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgztjCbpv21-jEM9a51BUIrEVeCaIaAH2DEHZSrjeqHlQ&oe=691CBBBB)

### Sample assets

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name | LOD assets | Recommended relative screen size setting | Vertex | Texture assets | Notes |
| --- | --- | --- | --- | --- | --- |
| DamagedHelmet | [DamagedHelmet\_LOD0](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974452_1110977567398498_3267634047256809730_n.fbx?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=LZ3d6bXbGDoQ7kNvwG0e815&_nc_oc=AdnRLPrqbLZouJYHO7d81cRMW6_ig7-694ZDLmP4oKdX_kYhKMmwIpIASTXK-GJ7jeY&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfjcdGYhYw1YK1YiPzgUG0RG-qCp14TXkvyXPbZUhJAd7Q&oe=69312849)  [DamagedHelmet\_LOD1](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75241698_1084209123102490_8721696503486453490_n.fbx?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=GA-qZk8f1fgQ7kNvwFj1ffc&_nc_oc=Adk7kmC13ebrRqaxo-YVCWizEnnEKkqBLUgALDU0RyPzOr5Yzs3YRg4oBwC_9l4kbUE&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfhKllIZwckIOm6TMCVPCGYUDqjdBtmA6ypLP5L_hUcJTw&oe=69312D08)  [DamagedHelmet\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39036644_543824368397921_749567675276430240_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=QnjaCOk2XP8Q7kNvwEtCRYf&_nc_oc=AdliuGAgGv0OTALi9Bp567RlcRfTM6USMz0ShEloSr1wENc8ZO_ruqyt_ff7viBlOxQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfgDYKETBAX-aLha3z1bUiqjx9VQRGVkgQ6pZPWuYgwnYA&oe=69313DC2) | .3    .1    .01 | 13341    5763    2208 | [DamagedHelmet\_BR.png](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/39031396_1211383596830479_1106960686933552311_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=eqZym-QHJVkQ7kNvwGHdqnV&_nc_oc=Adk-WOmDeAglhFzbG1dmXjT3vcU3dcW6MyqmJhsVZrRcJvSUDj_DSBWzxhz6k5cP-WA&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Afi7w0PJUN4zN7cdYZ12TSLapuentnQc-OndpRn_8jqehg&oe=69314A7F)  [DamagedHelmet\_MEO.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/39035471_460649110467753_1686906741871334990_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=DekupJopx-cQ7kNvwGXfd7v&_nc_oc=AdlwWfBtRDkDnZCl3cQ6bylLVd_gmRs6Beyur-IHHTM3yjLxvLTnQmu2B_HmgZEeRB0&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfjpUVNr73heG8AArbChMDuz-ax1Vo_jQ1UJ7WsqPX6HWw&oe=69313DDA) |  |
| Suzanne | [Suzanne\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/86620687_424732963772558_3603515224534172233_n.fbx?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=WeFC1jZbheQQ7kNvwG8-YGD&_nc_oc=AdmPrP8B3V-BwwW150-_XXO5nsUFXi1z0EXWfY5Pg-MOlrkUorZaDvzVZRwlAxSo_ds&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfgF1FfaKoMiAhFGMlqlSROLoGGHlRVr8yekEob4uir69Q&oe=69313422)  [Suzanne\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974679_1774312949997424_3774288506792177577_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4HlrZzRUQvMQ7kNvwHAIBdC&_nc_oc=Adni_OqJ4UdcUc1KgyxR5a6GGKMK1uQ1syYZZc-ke8mjmLpKs8T4iSN7-kuidvBB404&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afj_9PhtENwCKObU4BbGtWXX72ieCxk_bYggTe-5_voLWw&oe=69311FB4)  [Suzanne\_LOD2](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75404233_507077025666832_7688880730582757364_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=0PchbzjxFykQ7kNvwGSuLjP&_nc_oc=AdkbWPPwVQjh7ebPHip-MTDwti8g__JL-TWZXBjbfntXGHxpg_jj8RQ5QwCUQ3hYy9o&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfjUQQxKiQCCllZITIS1s4ECSP_7DJa89c1NTxdkBJcRww&oe=693127B7) | .3   .1    .01 | 7958    2573    909 | [Suzanne\_BR.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75210401_522547524089238_3818379784629030093_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qUuMzC5ehCgQ7kNvwFvv0mt&_nc_oc=AdkjAMszZZj-Z2uPTOREn4T5B1r0QjJzFy1rQm0N0bNCSKrx0ve2-Ggx2iCQgtV63cQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfiWYRw3ViPVh08lX-CpB8DKpqrr_FHYeuQP1100n5oCPQ&oe=693118CF)  [Suzanne\_MESA.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75334063_485564684498051_5902144713115885952_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=IAFcAcQfuY0Q7kNvwGOXVrH&_nc_oc=AdnjwvOqPkU9c30HXN5HSx61r5aWW11TlE93ZkY0cnpyV1w-xYvOKgfBf8yYW53mEVQ&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfiuAlH8Hq86hSx_Yy_GlPkd1_kVF_foI8sW3riMSiZ1BA&oe=6931363A) | Ignore import warnings. |
| StoneFloor | [StoneFloor\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974803_3611041129041311_2668313382660000807_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Sv16p-vCRQQ7kNvwH-6Uc4&_nc_oc=AdmD2lu_DmajUL_J8DoF1xOxhwhqfdsoaYxR7dZ88xSF6yHXC5eBvcK_RoHSzRpdbhw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfgbFXQ2YzM3NmTxrZ-h3mgspQJUWv9LMLWei3_qQp3MQQ&oe=693139FE)  [StoneFloor\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57575351_583790344173233_5836712915629891216_n.fbx?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=niAGyVZOi_wQ7kNvwGSyiby&_nc_oc=AdlKiF63gojd5AUXYSnzYql7M87_wTFq_jzJmFlvlULkTxzDeN3RqmuhzO7MEgO-7Yw&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afgfomqs-QdcKpisJer1rccERj371o-SMUlJl5xsS5Saug&oe=693144D2) | .3   .01 | 1502  266 | [StoneFloor\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982708_1041123087752366_8769918822486248358_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=HcYCtn3yy_QQ7kNvwFlFL35&_nc_oc=AdlNJHYiSfLwk9BMxkl5Z3tjqHnudcwHdTEWj0wLNtj4M7BOL_j-YGXEkFGrQfS4xqo&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afj60fzDBTC-4iBxFbWugQBEm36DbI0HBFc15HNjm3Z91w&oe=69311F78) |  |
| ColumnSetA | [ColumnSetA\_LOD0](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75207235_572656031963575_8134019312426795705_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=WjBLAgzvgtQQ7kNvwFbK3NG&_nc_oc=Adk2aE3NTbNbwpAdVm6l4Ge8W00TD5oAKtBgHTb75Xqp_nVJ97hi-2KH1NYKGUuI4-w&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfhkF-CvBNai-F_UxvenWKS2bz7BHVY0LwqJirGkpoJPkQ&oe=69312938)  [ColumnSetA\_LOD1](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75422379_1117471496715133_9153812592022689103_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=K5S5Suumt0gQ7kNvwHhX_q_&_nc_oc=Adl_jXplS3ehzT1YS-NcKP7h0d_GtzUSAPSU7sd7I2CJZVME_p7LKya0xN8TJE3HwVk&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfgNpCG8_AF7EfspMK3hgC2LP3dCeHiefFK9CpZEKzCk8g&oe=693142B3)  [ColumnSetA\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974723_1229165174971481_2089172905872648967_n.fbx?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=qyqMzFB-UoEQ7kNvwGYqhLz&_nc_oc=AdlQ2s38P8FZf23swly32HE5lCLsqXmGCoFElU5Jpl_yJzZ51Yn4VTnOQZtY0maZeuM&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfgFGQjghokTIFpg6EMN5hbF9ShozalOaWj0MT8ipijqgg&oe=6931251C) | .5  .3  .1 | 7657  4733  2515 | [ColumnSetA\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982480_1328835308493384_834914125048304768_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fyY0PzgXvZ4Q7kNvwEWlF3w&_nc_oc=Adk7fpX1Y1Euoi3u8yTsW71OxEKhJvg1XnsRLa4JWmu9mZUivhSDG2CGzEfVSlxsByE&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfjvxzEtx70kUPi9hLO95WGMcm6B8R_jwBJZDQVNXzwr3A&oe=6931228D) | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## Ingest LOD Assets

### Create a folder

First, create a folder to store your ingested assets.

- Click the **Assets** pane at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746635_512510217953601_3114243496821367227_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=WgR7UXKgjg0Q7kNvwEIJofh&_nc_oc=Adkb5Yjzx3L2bV2K9FlbsHkMymcah7tgwelgiVCnAcJO9HP-NeHrkptVOaRve20_jT8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgEvPURIaRM4sdgpauxNb5F9gkEjEHR2uQ6xpGefStDvA&oe=693124A2)
- Click **Add New > Folder** and give the folder a name.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510127953610_2127077901733027775_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=lutjQEosm30Q7kNvwGLYI44&_nc_oc=AdmYgYH6JGf0VwgrLLy7dBLgv0yHcOGKUrzI1_O_kbcRhPu31Y0zd08Q14FfijaDVRU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfhKWO1iKkW3g3SxmBrl7wOujlwKActj3hVGzRI5oWGZFA&oe=693134E2)

### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/476358530_650633064141315_6123901305812892096_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6vQpXcXdvvcQ7kNvwE-WxUa&_nc_oc=Adn43qyR2Vu1YGspqnzcyHQMGN17QWieB1XyZyX8xuTxaTsHMNcD_5Qnr-WlEClcFuU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfjUP0aElT3iHkP-F31r8tkLFutmMOMQNYeD2grnmMXn4w&oe=6931169F)
- The mesh ingestion window will appear.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672915_512510131286943_16962784959826029_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-Y3yNZXC5zAQ7kNvwE5RF5b&_nc_oc=AdnIKWzbDEAAjkBHsQqfp4z9W15XxEfuv2Df-rs8HcqNuTSanH8E-FxueUzvf0YKsH4&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfhZkmf77FF3YcXSt8-VXiyft4DCwShAF6W_Mq7SNrDcWg&oe=6931204F)
- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510087953614_3767056647331480894_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=em8DxOEWBkcQ7kNvwF3OLFq&_nc_oc=AdkhRwBMsyK08_RSBxu7hUNL5c8ZBDJN5xLAx8uNPtW2gi6Tn_fh6vZqvUvOVjRO1kQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfhxgB3sqrJnKs99vatkL2qX64j_wrtMKLfcAcIje3vc-w&oe=69311D57)
- The ingestion window should now show the files you selected.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908638_512510097953613_7636898147610062708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=jfVtIf6lE84Q7kNvwHEk7Bx&_nc_oc=AdnVkyYLpr5bKDIQ6kifNRI1Gd_lfqmM5P86k7UCPeBi39pIcVrqdWrfKGEX8tVBr9c&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_Afja0l2iZONbZFyM1ybDsepJa01yGeJU4rhoRRdhBECAiA&oe=69312992)

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512510114620278_3499214126645664613_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=0DOAu0Li7TkQ7kNvwFL4Szc&_nc_oc=Adk7YY-FY-1S0GUs1vU5VOpT2NIVSPRaeOADCGvXuh4wo6Dj-NP7CRdXXFenguz3e_Y&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgGixV-mjzUxnh-IuWWuKlVyKYe3yTq31hJi6sciueNJQ&oe=693135F3)
- Click **Add LOD(s)**![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587898_512510111286945_6432106008314023031_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=xjjBu6-MPmUQ7kNvwFmngxS&_nc_oc=AdlMePpOA5X206T58hLZKUXUN6juK0E7x9_MX7Mf89jx1xOqXisaieHAhiTZ38Yt78Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgUwyOoT6I3Tn3fvvYPlQhk2UGVr5YSX5bOTRhJWMhGRw&oe=693142EC)
- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452772355_512510091286947_7590734842067493140_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=oaGoF2MIGa8Q7kNvwEpAnIj&_nc_oc=Adnx4tKD-cCYnXcp4iuPslQCUQBI42og-VdSmGU2pmWfg428LvDXFqiF49TvgmlJAog&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgIGE7Dq0bV5wmk-pHt5vl5tau_EeDi1K3lBDJizG5XGQ&oe=69311417)
- The ingestion window should now also show the new LOD files.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452817871_512510214620268_3811525399855144317_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZHfEJkOKu0sQ7kNvwE7TEKX&_nc_oc=AdlK4M9ux5G7dungjVLt19UVVsqfoPJ4vvbXxhkV7OEt2KHomP2ZwcNG2rvV3OdL-1M&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfhSBwMaaCWvMgn9k4OXxg4BSCHXQ1ZPQftJFClhqNHBHQ&oe=69312A03)
- Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
  * **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
  * **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
  * **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
- Click **Import**.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520181_512510207953602_2188403874289102963_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=fFcl3TYboc4Q7kNvwHnxXoK&_nc_oc=AdnyDwsbr5ke7MqaozgdjZBIKm9FGS886x6i6Tke3PLpna66kk0GFKSRAz54M7Rg5wE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfhNjcSrZ_pajGxkiu7WCv5OrE_odjycsXtTOQTzw-aL8A&oe=69313E35)
- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520043_512510204620269_1030569126414916300_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ia-Wxq20wUcQ7kNvwFtgSIc&_nc_oc=AdmxTWd75bS4GrltxkZCu3fPWcAacpLQiR4uRoWPlFvmShUEGFZ2Fvi-LHC7dapsumQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgSMeFLqSvUB2MsNQOcFzDiFmNUm6n_e_25koKeYEp-pQ&oe=69311A65)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746741_512510201286936_7556625726474085776_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=sSgUx_SaHYwQ7kNvwEImPJd&_nc_oc=AdlMzEnONS7osUyglmuJiIJe0xtp_plnDylBdnOkqYSNwxxf8qly0AAhbVuwz6Ixx6U&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfiDM3AqSs95SN3R6kqMa_IY-BozKNRNcvKu4Kipf2eBAw&oe=693123AF)
- When the import finishes, a “Success” banner will appear.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653243_512510197953603_4225377072029174481_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=Rk-L6-6iTOUQ7kNvwH3KwRm&_nc_oc=AdnIJmT60Ze9Q2ZXYwtKG2vj1746Nnz_B2AbbaOAb9IJDsGT7lnsS0cxQct9tGYjreU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_Afi8unFtmwl4ZmaCMBo4k6xU7UO3OCrDW_IS-ReQ_kEkew&oe=693125F9)

> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578653_512510141286942_8187160058036161687_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=JuIBaCPn2WUQ7kNvwEkbzE_&_nc_oc=Adn1f540htOoNTpgEKwsIgFfdKOKKPHUFWuJ2nreaenu3fRKgdLnfJaoXzyYmOaoj3s&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_Afga2GYKKBU2XjVa4cT4eXqdK0he6kYDEleAOWsJuMbD8Q&oe=693135A3)

If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513309_512510124620277_672843571951153038_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=Wu4PdtB7LggQ7kNvwFXpuZy&_nc_oc=AdnkE1PQa7WDDqurPb9vHjxPppK4giLEaLCoRG2Y8d5Rwv8-jF0i3VPmLUv6v3IKiNQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_Afjpd0oTESnJHlKguPISlevNG2uuezUMSqkc_k0oIVWd6g&oe=69312112)

You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452587746_512510134620276_9189181265092177001_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=V1az0YXvi5YQ7kNvwGCzyzG&_nc_oc=AdnfqH8MG6SZXjUGGtRjCtA3dflFEu6yb8UfIy42mXLo7KX7LKqe8eUBxxyCopDp7O0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_Afg0eDTd5KuPUptI3oRLN8haKhs85AQatu7aN7OlCeoeIw&oe=69313D6A)

You can also see LOD behavior in Desktop Editor’s preview mode.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452590061_512510137953609_1190235246472948998_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=SUCoUTbdKuUQ7kNvwFwX995&_nc_oc=Adln_kANIuhGen-93tVFku1AYo83gtYLwqj-3kQX7da6F6PJKDBZJ1kzdZHl-GdtFAw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=kMxWe8938GptS38yCpXblA&oh=00_AfgMtLymSranQHog3NGVc34-SdoKM3wGc4j-T7_x3ZQkHA&oe=6931371F)

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