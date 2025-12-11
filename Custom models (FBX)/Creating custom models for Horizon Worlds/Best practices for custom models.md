Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/best-practices

# Best practices for custom models

## Performance information

Currently, custom model vertices increase the geometry complexity, but the limit might be tuned differently based on performance feedback. The amount of textures being used is currently not shown anywhere or capped. Visibility into this will come soon.

## Topology

Open edges are supported. Horizon doesn’t use double-sided shaders, so if you are creating objects with two sides, such as leaves, you will need to create polygons that face both directions.

### Modeling for vertex baked lighting

Horizon’s lighting solution (RTK) uses vertex colors to add lighting information to the scene. When modeling with this in mind, it becomes easy to visualize and control where light and shadow appear on the finished model once baked. The fidelity of the applied lighting is directly related to the density and placement of vertices.

It is important to plan your topology to support different lighting scenarios. Identify which parts are in shadow, and how that shadow transitions into light.

### Topology for GI artifact handling

| Topology creating GI artifacts | GI artifacts fixed with topology adjustment |
| --- | --- |
|  |  |
| Topology on custom models will sometimes produce artifacts when GI is calculated. This will cause extremely dark vertices when imported into Horizon. They will occur when a vertex is close to or snapped to another vertex or edge on a different contiguous mesh. | To remedy this when working with multiple contiguous meshes, place vertices toward the middle of intersecting faces. The image below shows an adjusted model, and no GI lighting artifacts. |

**Problem** The top example shows how vertices can define light and shadow:

* The Mesh on the top does not have enough vertices to define which areas are in light and which are affected by ambient occlusion.
* The cubes on the end lack the vertices in the middle of the faces to assign a shadow color to it.
* The center bar’s end vertices are inside the cubes, placing those in complete shadow. With no verts to interpolate into the light portion, the bar appears as if it is completely in shadow.

**Solution:** The meshes in the bottom example solves this problem by adding in a vertex in the center of the cube sides where it intersects the bar to define the shadow. It places support loops on the center bar to define which area is in the light.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452945192_512500654621224_1117938882276573410_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sMd9Ay9GfNgQ7kNvwF-JAmV&_nc_oc=Adl1xS3mMud0wSkCguy1KPcQFGybz8oxgYLcQMR0mABmBtdQXVVf0WhCnG7EW17eXeo&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AfnqvWAtSZCRD4T4DyiHd6A9iQnsl2wpiOZwEyGqCOUyjg&oe=69546831)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816787_512500667954556_7310310293534084824_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=plVgUzVuRQAQ7kNvwG1cTyw&_nc_oc=AdkoF13Wy67w9rO2Uqgeb5gSi4JurdWglA1bTimlN73WDiwVNje5XW3mIbqhP68zs6o&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_Afnv-X0sE04FfVA5m2EN_Z7cOWGzBRJsabN15nErA62xHA&oe=695450BE)

## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816154_512500651287891_9110139022826988635_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sOltP0yoKSQQ7kNvwEnsQZB&_nc_oc=Adk5tDsNdrhihmXDeSFbs63qBjps0JdPUYqIqesCGjRXMkaC3BSywwqBQM2bw4sq0Hs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AflJ0CSKIdXyuWymCMtzkUmrxRlU98ke2gPhiHYfuD0L2g&oe=6954575F)

## Pivots

When exporting a set of objects, we recommend setting their pivot correctly, centered at the bottom of each piece, or aligned in the same way that you would for a well-prepared game asset.

**Tip**: currently, pivots will all become centered in Horizon, but this is something we plan to change in the future, so setting up your pivots correctly now could make these assets more useful in the future.

See the [Fallout 4 Modular Level Design](https://youtu.be/QBAM27YbKZg?t=422) talk for pivots, standardizing, and more tips around this.

## Remixability

Consider breaking your asset into pieces if those pieces would be useful for remixing.  However, if you aren’t planning on remixing an asset, it’s better optimized as a single piece.

**Maya** - Prior to exporting from Maya, you should group your kit, then arrange it in a way that is convenient to see and access all of the items in your kit. We recommend that the history is deleted and the transform is frozen.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500647954558_2366646221517633934_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=U9jYx901O6wQ7kNvwHbjYpL&_nc_oc=Adkq2HptyryQsF4PqDaYcW9xdl7ty0khFSmXKxn8C6vZ04S2SfxxhMhQymT-WseR4Pc&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_Afk0x0q1CyxCfxmsFLrnH0YVjzMZAc4lQBE7adPK0j4D_Q&oe=69545896)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500607954562_5062833201515023605_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=vkJaIwEJ9skQ7kNvwHRHhX_&_nc_oc=AdmJgB16mDz8v1v345Ka2o6qnlAYcUBr-JQMRtp8QgTVjLIzPXhHQoTZEjCIZAAzTWk&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AfmqjONyv0i3dLfcpDWkvuUyL9x7nUXVwUptXlI-4ZAcuw&oe=695449B8)

## UV padding

Because we use the lowest mip size for coloring the bounce lighting information, there is a possibility that closely-packed UVs with strong color differences could cause incorrect color bouncing. If you have UV islands with strong color differences, you should use extra UV padding between those islands.

Minimum padding you should use for **large color differences**:

* 512 textures use 8 pixels.
* 1024 textures use 16 pixels.
* 2048 textures use 32 pixels.

## Texture style

Because the Quest 2 screens are high resolution, you can get extremely close to object surfaces. This makes it challenging for textures with fine details to remain good-looking when you are very close to them or they are very large. We recommend creating textures with less high-frequency detail, a style which holds up well in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452704033_512500644621225_6271284546319336980_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=egY8-gTQjBYQ7kNvwE-RX7E&_nc_oc=AdnaS-M1juARHiJNGih5jzdpK6Cht4Qy5tH74ie8AAkaGuSdO3Qu6Obv1gFfUbtTQRU&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AfksJggEPrusJ9kib6Bvw0wBLH2ju0-1fyTNoxJSQMwWkA&oe=69546177)*High frequency detail.*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500637954559_2669172308057156383_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fp0suFjA_FcQ7kNvwEkgSwz&_nc_oc=AdkKufmNGgVFAj1mv0jDA6ddDMmR116sWwDr3vqpBXTDNmaBKThebX7Za4f4AZJ4u7k&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_Afnu2awseopXZPK8Kv3PZI-oXMJxhgcaMN4Qyu6JPXAG3Q&oe=69544DB9)*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589309_512500544621235_5986002142499223076_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=AhTtes0mnKEQ7kNvwEbvAWJ&_nc_oc=AdkLCY_Ghn2xoWDNSzBR1Ta2QlSpkfKsfiLZHLkoh1UYAh8IwGchch6DHojU50dbi3Y&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AflEg-xzbnjTG8L76vUjUFfuPMCUUul3SdJYRWWMj4uacw&oe=695455A1)

## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452414106_512500551287901_1941084852038364963_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bal8ehqvoD4Q7kNvwHZMhEI&_nc_oc=AdmaoylvulQrMLGQnmlEVeHLTsTQybIYIjeSNxte33h43u_H5lz0fArl_GI_jtOoMHs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AflPcynkwUM3075x_FuEmgSKrmtA5Qr7sSIQKfByiQo4Uw&oe=6954690B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452915713_512500664621223_893951861776114436_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=YXt5poovkvMQ7kNvwGdKJr4&_nc_oc=AdlbBGyNf-1EQSSkhGIlf4tA0HWQ8R-XvqQrBGYzKCl-XqeWFxEhJ6BJHyVCCb3G0kQ&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AflsN5hwliuPA_54QFwavFXO1h9TMnW_p6TbrkA0JZ2o-Q&oe=69545CA2)

## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452917873_512500657954557_8219246528713603699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=QtycxQJoinYQ7kNvwEXkiou&_nc_oc=AdlJ6JToxi1uTOnTtsWVVUZf6wHRni6_ThFXtg2ueCdTsSpTV6-ziTka8EXM2s-WWcY&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AfkPZaABnsAB_QNtmTpuSJiZvNUmxUMSXVK8FdpNzQhcog&oe=69545F30)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452684750_512500661287890_5145557696178384622_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=RLhxTeRvnowQ7kNvwElE4br&_nc_oc=AdmI-_4wq7TIywK1LpjyRh9vtr89KtIXC9dfciyr0Eouu8rC-dtijjmZrxNZ8t-liig&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=KJVmetStXel56rhp5y0bFQ&oh=00_AflsnyiVZEh3RMvSwcM8z7ZYsLgvfREQbRhs4Wx7CLymDw&oe=69546225)

## World budgets

### Runtime world budgets

It’s important to consider the world limits when designing assets. This will enable you to effectively allocate the total number of assets required for creating your world, and develop a comprehensive asset plan.  These limits are view dependent however there is no occlusion culling meaning the world limit can often approach view limit.

|  | **Approximate limits for a gameplay heavy world** | **Maximums, when you have a more static world** |
| --- | --- | --- |
| **Total Vertices** | 600,000 | 1 Million |
| **Draw Calls** | 150 | 250 |

### Travel time world budgets

These limits are designed to keep world travel times in check, especially for visitors with lower internet speeds.

|  | **Download time** | **Download time** |
| --- | --- | --- |
| **Unique Vertices** | 200k | 400k |
| **Texture Megapixels** | 40 megapixels | 80 megapixels |

1 megapixel = 1024 x 1024. (example 4 Megapixels = 2048 x 2048)

More megapixels means more time to load the textures, which may impact world travel times or take the world longer to look fully loaded. 40 Megapixels = 25 MB (ASTC 6x6).

### Generic asset recommendation

|  | **Polygons** | **Vertices** | **Texture Size** |
| --- | --- | --- | --- |
| **5 m****3****Object** | 2000 | 1000 | 2048 x 2048 |
| **1 m****3****Object** | 1000 | 500 | 512 x 512 |

This is a very general recommendation, and artists should adjust as needed.

## Model specification

A 3D model is made up of Mesh + Textures + Materials.

**Note:** See [**Materials Specifications**](../../Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) section for channel packing.

### Mesh recommendations

|  | **Recommended** |
| --- | --- |
| **Formats** | FBX |
| **Naming** | **Avoid** using these characters in your node & file names - .,, /, \*, $, & |
| **Objects** | Multiple meshes per FBX file supported |
| **Polygon Count** | 12K recommended maximum, 400K maximum vertices. |
| **Hierarchy** | Flattened in Horizon\* |
| **Pivot Points** | Centered on import\* |
| **Animation** | Importing animation is not currently supported |
| **UV Channel** | Only UV channel 0 is used to map textures onto the mesh |
| **Normals** | Vertex normals are imported |

\*subject to change in the future.

### Texture recommendations

PNG - 8 -bit per channel

See Material spec below for channel packing.

Horizon will support any power of 2 textures up to 4096 x 4096