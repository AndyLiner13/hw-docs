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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452945192_512500654621224_1117938882276573410_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=Ot2Sa_jH1S0Q7kNvwFqpEyP&_nc_oc=AdlVFJlnZ1CBIoC1NkdKUcgEsLsU05Jw0SBnzwf-GlafUsYgvit5BiS_KzbNQ24IWgM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfidBL6FsxhwLQL_Zb4aGzEs5oZlDyxZPok7F0tboWHnEw&oe=69314031)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816787_512500667954556_7310310293534084824_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=zCQewEowALMQ7kNvwGOfIGY&_nc_oc=Adks2CeDb6WUrlbhnNiX3PecPHewQoau5ZcNG_tDDnTQKEGwHzWz5BcjukBW1u_u5HM&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_Afihtin-ke1Cc3R1e_pfRjydT6TXUQ6ppzYqUbRGNyLIYQ&oe=693128BE)

## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816154_512500651287891_9110139022826988635_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=X3i1JJ5sGskQ7kNvwHqpRkI&_nc_oc=AdmR0GDGHvSxvuCRATfD5CJMH0BFi-H7WLk9Bk2G1yIOx_fHoBMQCF8BVddz0QcpK5A&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfixDh5cwa79fXIT2v3G5hn6vqFuC46DRxugigoP2CWZfQ&oe=69312F5F)

## Pivots

When exporting a set of objects, we recommend setting their pivot correctly, centered at the bottom of each piece, or aligned in the same way that you would for a well-prepared game asset.

**Tip**: currently, pivots will all become centered in Horizon, but this is something we plan to change in the future, so setting up your pivots correctly now could make these assets more useful in the future.

See the [Fallout 4 Modular Level Design](https://youtu.be/QBAM27YbKZg?t=422) talk for pivots, standardizing, and more tips around this.

## Remixability

Consider breaking your asset into pieces if those pieces would be useful for remixing.  However, if you aren’t planning on remixing an asset, it’s better optimized as a single piece.

**Maya** - Prior to exporting from Maya, you should group your kit, then arrange it in a way that is convenient to see and access all of the items in your kit. We recommend that the history is deleted and the transform is frozen.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500647954558_2366646221517633934_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=lKLuRbg9_PsQ7kNvwH2yrwH&_nc_oc=AdkyOJMQu5ePFIrwOlx-lTLFph7Y_PbGFgoBCfGu441dAtT8D9POT2HjfY_LgQstYBU&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfjPGFI5SQhO201XVZ74bk6fsnFVnhH-LWEONn6VRHUAug&oe=69313096)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500607954562_5062833201515023605_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=XFz945Owud8Q7kNvwGc9n9c&_nc_oc=AdkSdx-v2_Buiz5AqpCxglSBEHH2_5P8yWEZjd-PQ9cQYDjf8WJxwcoK0iEHBesmP88&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfiIzfPNP1OKBQvwViZvmtklOZHmbR6-zdpxR0e7tdQumQ&oe=693121B8)

## UV padding

Because we use the lowest mip size for coloring the bounce lighting information, there is a possibility that closely-packed UVs with strong color differences could cause incorrect color bouncing. If you have UV islands with strong color differences, you should use extra UV padding between those islands.

Minimum padding you should use for **large color differences**:

* 512 textures use 8 pixels.
* 1024 textures use 16 pixels.
* 2048 textures use 32 pixels.

## Texture style

Because the Quest 2 screens are high resolution, you can get extremely close to object surfaces. This makes it challenging for textures with fine details to remain good-looking when you are very close to them or they are very large. We recommend creating textures with less high-frequency detail, a style which holds up well in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452704033_512500644621225_6271284546319336980_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=BgZVFM8Pwa0Q7kNvwG8VQcG&_nc_oc=AdnEnzTwE_eSuPA3duJ-BmLZpKIlAPU5EsVcBMgkKBTvEypQK9LgPtje03mxUC89LPw&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfiqVi6hVCUHP9LIf31STlFS8ctOR63jnxnUJd-4FdbXzw&oe=69313977)*High frequency detail.*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500637954559_2669172308057156383_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=KUBuxU60N1cQ7kNvwE4pbwT&_nc_oc=AdnPgYdUkixSgRjtRitgLkXwoedNsj2OKzz0s84E6RN5eGGFMjUYtV7bw1BjIJxuqS8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_Afg9aRxTQoai8XEfpTJS10t7wb9bglFsXf1d7521UZoB5A&oe=693125B9)*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589309_512500544621235_5986002142499223076_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=nQctLFXXIvsQ7kNvwHIf7-X&_nc_oc=AdnWNjTW5rXU7RKWb8rrBXzz9viM9o_pfp54g57FcGQlgaGag0_S78-diPaETC3BrPs&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfjBfefCNxA_Y7_t2k_TlRYd1vLdbrtlrKC3FHnP5PMCFg&oe=69312DA1)

## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452414106_512500551287901_1941084852038364963_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fn7Lx0FrU-cQ7kNvwHROm6X&_nc_oc=AdkI-FDjJBihAv9PNhetrpq90yFiCK9EXgJp_ysfYDqq9lcoJoUlXmr_gdFjUig3yvs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfhvBjtuNX7cnLJ8nj4y8ncdtmVo9Mx19YGgIQ8mjEwnhw&oe=6931410B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452915713_512500664621223_893951861776114436_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=KZVJfR21HqIQ7kNvwGhp0_J&_nc_oc=AdlDsJHRIihVl_YDXb3e9yppApKIV5BYcQ8Hvz-mWfalLrgo21h7qpUj0pqte5m1fBU&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_AfgyVcz0UTIWJmloPEKF6GKagrkxnQJn25XAEJm4-1Xqcg&oe=693134A2)

## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452917873_512500657954557_8219246528713603699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=dBToV8BfFz4Q7kNvwH4xtdg&_nc_oc=Adm-eWmHUj3SXovawgiG_-doB1dSQCbMMqSWd4mCrT79KeJ65BtD8qAhyWstpvMdX_g&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_Afg7LK7wpf6L46_CrNStV-TCiREy6_wk-Njpr0pSFHEDQg&oe=69313730)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452684750_512500661287890_5145557696178384622_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=iJHNgFhty7YQ7kNvwHJ_kBV&_nc_oc=AdlimajCJatV81Wew_QZn0yWVRGl_akIZcq79eaNx41e4oI0vDjVFzFXDFqal5aoLs0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=AEOS0ptJ0vc7Q_Msl_UFcA&oh=00_Afh4V3viNpuauzG2r5jPuE60xFTO2AKsD2fMAVD2_vdcNQ&oe=69313A25)

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

**Note:** See [**Materials Specifications**](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) section for channel packing.

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