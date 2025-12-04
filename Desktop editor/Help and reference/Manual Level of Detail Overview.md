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

[](https://video-dfw5-1.xx.fbcdn.net/v/t42.1790-2/453534749_1201716487733176_295925959581960111_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=6500a6&_nc_ohc=fuefYyrn7dMQ7kNvwFplZLH&_nc_oc=Adkb-RBzGMNObinpkAdVdm1wDFQGqI6cDG3fJzFfKvQPebJKOUjJJS3HVH-sPfLQT6A&_nc_zt=28&_nc_ht=video-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfkYW99sr_sFhNuKYWZbddYs8nU98SaCNYQvo_RLMdrBNw&oe=693751FB)

### Sample assets

You can download sample assets to test LOD import from the links at the bottom of the page or from the links in the following table.

| Asset Name | LOD assets | Recommended relative screen size setting | Vertex | Texture assets | Notes |
| --- | --- | --- | --- | --- | --- |
| DamagedHelmet | [DamagedHelmet\_LOD0](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974452_1110977567398498_3267634047256809730_n.fbx?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=-WeGBfqW8bEQ7kNvwFFzcWY&_nc_oc=AdlZ3xV04nlwQnVl-DHjkGE30TLDL1AUKBi1rroWnU6WzqcTqourqwwJO4lRAjRys1g&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkFUpZ1aTuYmVU1BvjXCvwwNOyKU1tBhPsiFSraY4Posg&oe=694BBE89)  [DamagedHelmet\_LOD1](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75241698_1084209123102490_8721696503486453490_n.fbx?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=iA_hht866DUQ7kNvwEK4BeE&_nc_oc=Adnn_N_hOo4i9K0FG0gDP2VJeX4L2nMMPhy78Mkf4PH6Vos7rZjXdh9CQy4_JEXek9Y&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AflVay9fSuSjHsRbk9TYB6bQSah9qPbE6vDfUdJpmvsVQw&oe=694BC348)  [DamagedHelmet\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/39036644_543824368397921_749567675276430240_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=dWE9hd9GebwQ7kNvwEkgtJF&_nc_oc=Admqx2zmDBqiF_ovXbgNveoXqg7GTJff7SnS1HluosuFY4KuD6O8O3LidOSbWLaVeg0&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AflcYcTVrcT9vWAaMPbiXnAnGsasiNKjF8Rc0ZgQwNHTYQ&oe=694BD402) | .3    .1    .01 | 13341    5763    2208 | [DamagedHelmet\_BR.png](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/39031396_1211383596830479_1106960686933552311_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=iidpPe28JaIQ7kNvwGHZJqj&_nc_oc=Adn7NGAFToz3egd3J-lfstFVNM20qils7v_BPtkdo3YhA45qkqJehXVIuVKC0gfQvUE&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AflF0u5IpTYiaI0iZ58csyXRv9mAustHP-Z1UaN77gDT3w&oe=694BE0BF)  [DamagedHelmet\_MEO.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/39035471_460649110467753_1686906741871334990_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=hdmeqZLguEgQ7kNvwF3pp0h&_nc_oc=AdlLMROV_2l4g-ftATQVUMXAuyrqslo8lRsCnTwda2yozscKjiHIHeTkjA4Z-YgvxsM&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmrUJ60yYIDrqJMfpLHmJsEtOLI8ENoTVCyNY_tm0QQpg&oe=694BD41A) |  |
| Suzanne | [Suzanne\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/86620687_424732963772558_3603515224534172233_n.fbx?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=gETTiz0gUoAQ7kNvwEZXROi&_nc_oc=AdmvRmQ9utsFuxbJDfzXBvkvtCggr-uByTjzxWpSgwndLg_VNP44CYv-DrePCnK03xQ&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmagyViv6Gbynpux9LzqdReDtNoMZu49IQe51_o_WE7nA&oe=694BCA62)  [Suzanne\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974679_1774312949997424_3774288506792177577_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=5AXms7zsZKkQ7kNvwGkSNxy&_nc_oc=Adl_z_8v-3iYra6TMUSVyHJBQPCi0NoS34rWi4gdULIUIYj8elOmdCKBb530-E1JZ1s&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfkghGp_GEi7HjJHcp55lf76IUAK-4JrvnMCxP6pkGy0ag&oe=694BB5F4)  [Suzanne\_LOD2](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75404233_507077025666832_7688880730582757364_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=moSRdOKzHfcQ7kNvwFHzn0x&_nc_oc=Adng-7J-Dd9LvNMNuXVqVSWSiZ4ebcozgO9RtQ1zN2Hziu3BZ0uQSlp9jhhQf0bsRFA&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_Aflv5joCkKQv8dWXsyAQ0kwXm4kqy6lOOSZKOfCIa3xmTg&oe=694BBDF7) | .3   .1    .01 | 7958    2573    909 | [Suzanne\_BR.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75210401_522547524089238_3818379784629030093_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=G8eu99TIxMsQ7kNvwEYv9DP&_nc_oc=Adl9REvb1Dixs_9lreDQaehiJ-X9u-WfBkFjJAI0-J0iCHNayiD9qnbpyUgFGsCaU-Q&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_Afkz3h7gWfJeTCdL5oBl81kT7bodzrcnrvtdgfm_xVBICA&oe=694BE74F)  [Suzanne\_MESA.png](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75334063_485564684498051_5902144713115885952_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=F6L6efN5GT0Q7kNvwHOVgih&_nc_oc=AdlRMiX94GkVBWIAsR9yKuB_l5VYbyipqqWHilH5swniOvMOBe5SFViUvL-oLSEkjw4&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfkATyBowwUa0RpS_XVAq1X2exyhdIT1gYjfks0tzaTntQ&oe=694BCC7A) | Ignore import warnings. |
| StoneFloor | [StoneFloor\_LOD0](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38974803_3611041129041311_2668313382660000807_n.fbx?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=A5AqHzJmgNEQ7kNvwECjeo_&_nc_oc=Adldc_vGhtW-LZOKFU16d_sZErmBTtpIdbTr4_7p1Js8BIokl_DnFnpLRTl5fnNUR00&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmZHIRKmuu0UowSS4h8PGM9qmhg7Cbwy1OdO_n6Qyo9IQ&oe=694BD03E)  [StoneFloor\_LOD1](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/57575351_583790344173233_5836712915629891216_n.fbx?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=MNpJ4P4m2SIQ7kNvwHMQqaL&_nc_oc=Adll-28U8s7Rhr1sHVGS9nfhjGxV8IxiilQ1Nu7BJ2QzM5IMU9mZzulI1gZWdAeMSNI&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AfmylmbvPcz3gmE5Lmu21ia8rc5Vxso1ke_3YtLh6TpXVg&oe=694BDB12) | .3   .01 | 1502  266 | [StoneFloor\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982708_1041123087752366_8769918822486248358_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=yzQnChiHU_QQ7kNvwEm7z9I&_nc_oc=AdkjfPMh5AAg3WigDMAlkmiDAvakMYhnUVs2EKLTiBRtFr36hDBTKqMCSomTP6kx14E&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_Afkvpu96GlYAtM_nqWCpLUHAs_0i8UpF44qLbaX2xKtLYA&oe=694BB5B8) |  |
| ColumnSetA | [ColumnSetA\_LOD0](https://scontent-dfw5-3.oculuscdn.com/v/t64.5771-25/75207235_572656031963575_8134019312426795705_n.fbx?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=v8DKZxBQMt8Q7kNvwGgHyhY&_nc_oc=AdmED_vosXj9IoIWSda2ik-YZ_QzJzRzvl9fbbCEC3ILy36es16sEOb_a8BbZZF7tGM&_nc_zt=3&_nc_ht=scontent-dfw5-3.oculuscdn.com&oh=00_AfnOv0W4kq0FKexOfHx4ArTP0a3nsop4xafgnDeWDCis7A&oe=694BBF78)  [ColumnSetA\_LOD1](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/75422379_1117471496715133_9153812592022689103_n.fbx?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=rhjy5z-_MuUQ7kNvwEXqABC&_nc_oc=Adk6QVCk6Y5e5WsxVisdsAxokWwFsJcxsVY1ibAUQwDnRNM1EM4XQrwRa5JChxFRXek&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfnbtS9KuLjw67ugVwUt5ql5eVUpZ7DR0fC1IYEO4upfzw&oe=694BD8F3)  [ColumnSetA\_LOD2](https://scontent-dfw5-1.oculuscdn.com/v/t64.5771-25/38974723_1229165174971481_2089172905872648967_n.fbx?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=-0Cx7VtxRTQQ7kNvwGQ2Kab&_nc_oc=Adm2HleEiIi-cG-h1G-AT-87Sl1rJAPDvNItZjrSnZQM_kZGtuBKIjvDQmJGaL2lYo0&_nc_zt=3&_nc_ht=scontent-dfw5-1.oculuscdn.com&oh=00_AfljdmW2c4aA5toHq3HQL6UC7VFPXvsMBjd4ixQRZpaTDg&oe=694BBB5C) | .5  .3  .1 | 7657  4733  2515 | [ColumnSetA\_BR.png](https://scontent-dfw5-2.oculuscdn.com/v/t64.5771-25/38982480_1328835308493384_834914125048304768_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=NQYlHmXhrDwQ7kNvwF6VZdc&_nc_oc=AdlKQVq-mDKpJUw4hJwZ4nEtiB887E9Cq4vh5hyfv54xBueEgjaSA90Is7gX8wD2Smc&_nc_zt=3&_nc_ht=scontent-dfw5-2.oculuscdn.com&oh=00_AflBhnpk41hc2xjkfMugH9Q3OqvxgY-mbJUaO-uUysEKsA&oe=694BB8CD) | Use this asset to clearly view LOD switching. Use the recommended values on the “Recommended relative screen size setting” column. This asset has visual issues on purpose to facilitate the LOD switch viewing. |

## Ingest LOD Assets

### Create a folder

First, create a folder to store your ingested assets.

- Click the **Assets** pane at the bottom of the editor.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452746635_512510217953601_3114243496821367227_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=AtSFPRRKq7MQ7kNvwG1Alnv&_nc_oc=AdmA1FiQtYNbp1FHqvX1bRTD2h40_vVUN4gefVQlXistHMEgQb6LNRl3JmwStw0Bdj0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_Afnli6Aaxm5PGL7F5Wr1k1PnQmcuDT6gOIyo-VTkRfRMbQ&oe=694BBAE2)
- Click **Add New > Folder** and give the folder a name.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510127953610_2127077901733027775_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=QP_KHIC5V4UQ7kNvwF6nyGC&_nc_oc=Adn2i9PGHJvEho4cWe_E3HkM1Zi7CgTESsnC2LvzCu9DyJQqVZv784K0eZWjLB5we_Q&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfnQ1v2UhGLF3PQPFT7-z16FssVaRcgtlo2pexWqC10oaQ&oe=694BCB22)

### Add your LOD 0 assets

> **Note:** The FBX file meshes for different LODs should reference the same textures.

Start by ingesting your most detailed model, called LOD 0, and textures.

- Click **Add New > 3D Model**.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/476358530_650633064141315_6123901305812892096_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=tQ_Y8v6ZtkQQ7kNvwGJ9feL&_nc_oc=AdnDho3fByn11q-4UBaJnSAgswKubIRUe9XtERxw8J8X94IOo1azkW0G-tUuMsN_qI8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfmvxAbH1GtOeCoQgdw0ipQSUqsHtcu0y-1B6oa9FS1-yQ&oe=694BE51F)
- The mesh ingestion window will appear.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452672915_512510131286943_16962784959826029_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=BYDYs63pzcIQ7kNvwFVtQKM&_nc_oc=Adm-5lH9Xfkx0HykWQ_Qu40PtsJnLavsRGHDX50d8rOfKz8WiHEkm9yudsB1XodiYaw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfngHomxhgo2dqXI4HbiQBg0pxOMxJQn7bxVGhWX_PU_0Q&oe=694BB68F)
- Click **Choose files on your device**, navigate to the folder with your assets, and select your LOD 0 model FBX file as well as your textures. Click **Open**.
  * To select multiple files, hold Ctrl while clicking the files.
  * If you’re using the test sample assets, select DamagedHelmet\_BR.png, DamagedHelmet\_MEO.png, and DamagedHelmet\_LOD0.fbx.
    ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452933706_512510087953614_3767056647331480894_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=8S0fPH8jByMQ7kNvwHMs4Kj&_nc_oc=Adk3ZKAwe_Juvh_Z8CDu3NnXUXfkahvQQGikB3cOILhOgCO_RihTrP2tWRq_NOg4rjs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfnYL4GsH9miH2WZrlKhos5L4caAfKle7DKBI1a2bH5g7A&oe=694BB397)
- The ingestion window should now show the files you selected.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452908638_512510097953613_7636898147610062708_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=6XGE2ay8jjMQ7kNvwGrgAx1&_nc_oc=AdmuDPcS_FMaZkeeIUS1Hm3pAzbURjTKveYFdNs8eXM3-w2vCxIuok9hMk0vikeuiFo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_Afkfh16C3ylLpoKag8C1nP3sOil5B--3r4pN5t_qa9xQkA&oe=694BBFD2)

At this point, you should have all the files you need to import a fully functional asset with only one level of detail. To add additional levels of detail, you must append more LOD assets to this 3D model.

When you import LOD meshes, they are appended to the MeshAsset containing the LOD 0 meshes. This means they will share the same materials used by the LOD 0 mesh asset.

### Append LOD assets

- To append more LOD assets, expand the LOD 0 FBX file by clicking the expander arrow.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452946039_512510114620278_3499214126645664613_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=smgUEoGGKbwQ7kNvwHKrQCQ&_nc_oc=AdkgDs7vgc0mrhpwgivaW5JODmxrqNM_C60lY47ojYnKhWZeHmDLMM2oepXyLMLC7Jo&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfkzL0Buk6ohMJUKEYPa0KsYcv8dU90ZRSJvlpak3m5WPQ&oe=694BCC33)
- Click **Add LOD(s)**![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452587898_512510111286945_6432106008314023031_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=eRpT8A1esmsQ7kNvwGO5xXU&_nc_oc=Adl2X1j2xYQtiUR4Wt8RkS65uM56CiS6mn7Vk7sipFkZzVeH2riIwa_rWWh0xIzYINw&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_Afm50dGE448NK1nObsdurMzuwHhQY_9sVbfBC9zPUOtsFw&oe=694BD92C)
- In the file selection window, multi-select your additional LOD FBX model files then click **Open**.
  * If you’re using the sample files, select DamagedHelmet\_LOD1.fbx and DamagedHelmet\_LOD2.fbx. ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452772355_512510091286947_7590734842067493140_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=mY9Tcr4oeocQ7kNvwE4MlvE&_nc_oc=AdmFjKjCUpIuQGp9OfVFi_fMSa_nuKpbvm_GzWmwy2eljo8G2A7eXtpzTHEmTrgppoU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfnUiQoIof0Ngkr_ey6Uj-AprpoTIEtg2ZY3SXeyD2Sgvg&oe=694BE297)
- The ingestion window should now also show the new LOD files.
  ![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452817871_512510214620268_3811525399855144317_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=TdNWHx1-L94Q7kNvwE4wmQp&_nc_oc=AdlwLyLkPFaXNVm24EfBIiUZJvdKl4QFPGvrUHD0cSeNZ1Uw1EhhMI1Knf_nItqB2pY&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfmRmUuFce7vcw1C0HTzG6p9drNjpEM15Ksx8647adihTA&oe=694BC043)
- Now, set the desired relative screen size for each LOD level. The relative screen size determines the threshold for each LOD level as a percentage of the full screen. When the object on the screen is smaller than this threshold percentage, the engine switches to the LOD mesh of the next LOD level.See the following example values for a more intuitive explanation:
  * **LOD 0: .3** - LOD 0 will be used when the object is larger than 30% of the full screen.
  * **LOD 1: .1** - LOD 1 will be used when the object is between 30% and 10% of the full screen.
  * **LOD 2: .01** - LOD 2 will be used when the object is between 10% and 1% of the full screen. - The object will be culled when smaller than 1% of the full screen.
- Click **Import**.
  ![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452520181_512510207953602_2188403874289102963_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=hgaAW__cXKQQ7kNvwHPLYqj&_nc_oc=Adl4TrfyLpHfb9TJDS9BLNZDdNuWIaVgjTucU0QL1HKm5SGmTMY93pDBJ7q2aan8dGo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfkCNDKpv6tuUTjsmeL-JpduiB5Ru_l1Ly3__wpWnmX9wg&oe=694BD475)
- Wait for the importing process to be finished. You may see a clock icon on the top right of the asset icon.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452520043_512510204620269_1030569126414916300_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=N--SRY1_aDkQ7kNvwHqVmBo&_nc_oc=AdnYJgLKMiDgcKUJS2JS900WIzuctd94hlKRWTCcLV0O0HCU_M1tTSvr989KkPzaqjI&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfnS8yHWSXEPwnOHmzflkVkcrgbKGGsbTS_NOj7k7_e1Bg&oe=694BE8E5)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452746741_512510201286936_7556625726474085776_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=AyXhmYN-cdEQ7kNvwGXCNJ7&_nc_oc=Adlo_YhGw-RoxzINTZHabgvs5H0zMrmHDm4avXD332liVmWkWCNma0G5BDq4k8RfkQE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_Afk8jP3DZVSnmyuUVPICoBVfsFvW8ykO0I3qI0kzqGUcnA&oe=694BB9EF)
- When the import finishes, a “Success” banner will appear.
  ![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452653243_512510197953603_4225377072029174481_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=JvYY24vZFMoQ7kNvwFidJOD&_nc_oc=AdmPo4Z4cd9o9iDTneucj3uBOvlDS1zoxZR8xY_R6smam9ufQlvZ006qaCYT9CCDz1M&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfnXmUrPCV8JZ1Y-fnzxvmoY8Z_Wre178jSLEs5Qwq5PRg&oe=694BBC39)

> **Note:** When importing FBX files containing multiple meshes, the system will try to match LOD meshes to the LOD 0 mesh by node name matching.

> **Note:** It’s possible to import different types of meshes to an LOD if you also add the dependent textures. This can be useful for testing LOD switching.

### Add an LOD asset to your world

To use an LOD asset, drag the asset to the world window.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452578653_512510141286942_8187160058036161687_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=S4B05VlplDkQ7kNvwFvoWzT&_nc_oc=AdmJ-6QK8JaeyQh8ken6DgiBcGGIgIzPG5mShGzdhUhn7PoPhMcBr6ayvdl4VWX7Hs0&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AflNIeRWIMRyaIlvJdTh2hjS-YFqoqfKioXUffT5t9jApQ&oe=694BCBE3)

If the object is too far from the view point, it may have a green color. This is because the additional LOD level GI is being computed in the background and isn’t ready yet. You can move the object around in the world before the GI data is computed.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452513309_512510124620277_672843571951153038_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=670MxizL0ckQ7kNvwGTmmw-&_nc_oc=AdmiQUO6c1YjYhRQzt_aFkpRsuqFTnTbi_UuT5_mtFrHLTVXzIC_h_QXMQ9KBfhxvZA&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfmAcdJaxumGysx03CjXhqaYX3S3TqEZ6Suek6gtQkqO6g&oe=694BB752)

You can verify that LOD is working by moving around in the world to make the object take up different amounts of space on your screen and watching as different LOD models populate.

It can be hard to notice this happening if the relative screen size values are small. If you move far away from the object, eventually it will be culled.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452587746_512510134620276_9189181265092177001_n.png?_nc_cat=101&ccb=1-7&_nc_sid=e280be&_nc_ohc=R2Qwe3AVH78Q7kNvwEvPZp4&_nc_oc=AdkPtObuij8UEiJNnGLPivFH9l7jtM3RYImVKuOZPtAZpQiKs7c02QmCqbrW3yhEYuk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AflqISes6lm8kNVQq7mJzKVy_wV6obM6M-o9L7qtCFHpHw&oe=694BD3AA)

You can also see LOD behavior in Desktop Editor’s preview mode.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452590061_512510137953609_1190235246472948998_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=zaYiZQ1-TnAQ7kNvwFI9vIp&_nc_oc=AdmLVpdSsgKA9GLWFVR3j9b7s0WHIQy96lVEDBakFyaq6ssU4EupznTYiSg5nwCQASI&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=3-D9sSnp53MJc32swroKZw&oh=00_AfmviisfkSip4MUJ3hpdhiwZsQNcKu9wclruZS4am8-N7A&oe=694BCD5F)

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