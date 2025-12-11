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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452945192_512500654621224_1117938882276573410_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=sMd9Ay9GfNgQ7kNvwHsHqcl&_nc_oc=AdkZNn4dPH8147jaDekAGprMcpoKb8jNLYRBuIeZYrrf0DKYF5jiz8dcSPWE9GcMEZpM0PrjdEm-JNclF60ynmQN&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_Afll4JqGOnzUNiR-kcCUdWS1V3TGqWHrk54Q3LHAJsK__g&oe=69558171)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816787_512500667954556_7310310293534084824_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=plVgUzVuRQAQ7kNvwEbDT6E&_nc_oc=AdlgeS3e-JAtkgBOCCrH0MAyKX886SCCL3799CQ9iAjbOE9xf6NwnMiUR7Urb3eFvbfESbAInfzz1nE3U8ykXNbE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_Afl8rT7o5kpwn0iA7xKlE4lxu4vt-7Z7lCNGY--8Gj1sUQ&oe=6955A23E)

## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816154_512500651287891_9110139022826988635_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=sOltP0yoKSQQ7kNvwEToz2X&_nc_oc=AdmTl5QY1csGMss1EdLknSMjVVqqNn4dtuboMZrXo_39qLgewxfEcMp7JpFQEJegzKW5MMOdTgxzTABow24JdnU2&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfnD_R4MsHfrLAbW7CPXiRnb9GNi1K-ND4uSoK019KZ63g&oe=6955709F)

## Pivots

When exporting a set of objects, we recommend setting their pivot correctly, centered at the bottom of each piece, or aligned in the same way that you would for a well-prepared game asset.

**Tip**: currently, pivots will all become centered in Horizon, but this is something we plan to change in the future, so setting up your pivots correctly now could make these assets more useful in the future.

See the [Fallout 4 Modular Level Design](https://youtu.be/QBAM27YbKZg?t=422) talk for pivots, standardizing, and more tips around this.

## Remixability

Consider breaking your asset into pieces if those pieces would be useful for remixing.  However, if you aren’t planning on remixing an asset, it’s better optimized as a single piece.

**Maya** - Prior to exporting from Maya, you should group your kit, then arrange it in a way that is convenient to see and access all of the items in your kit. We recommend that the history is deleted and the transform is frozen.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500647954558_2366646221517633934_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=U9jYx901O6wQ7kNvwH6oSiJ&_nc_oc=AdmHlAUb8jNLlMyMNUcoZxPN_BBVXlC2XhCEF7MLbb6U1krEz0Vz1CvWJubaTTZ5Q_UPdwA5U50VTSZMHMCbiJqQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_Afn2HnWWZlbiS5EAS70U0hkfdMT7gO_aUPkxxYX5HE0gDA&oe=695571D6)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500607954562_5062833201515023605_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=_oZb0hvg1EsQ7kNvwEGrIjb&_nc_oc=Adm5O-pxuDkmxG85hGjSjYhGDPZGZFarBfMjUkmpgaGOYkrEqK-XblLEi--GuIeUyFPvGcqXVseyfZwFLJMqmIhT&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfklVxZUKZlzo1oe_zY971kfegeKXKuWIZPbSJTdidzfkA&oe=69559B38)

## UV padding

Because we use the lowest mip size for coloring the bounce lighting information, there is a possibility that closely-packed UVs with strong color differences could cause incorrect color bouncing. If you have UV islands with strong color differences, you should use extra UV padding between those islands.

Minimum padding you should use for **large color differences**:

* 512 textures use 8 pixels.
* 1024 textures use 16 pixels.
* 2048 textures use 32 pixels.

## Texture style

Because the Quest 2 screens are high resolution, you can get extremely close to object surfaces. This makes it challenging for textures with fine details to remain good-looking when you are very close to them or they are very large. We recommend creating textures with less high-frequency detail, a style which holds up well in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452704033_512500644621225_6271284546319336980_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=egY8-gTQjBYQ7kNvwE4MwIx&_nc_oc=Adl29fmfzroV3QHdsht9_oUtEafIslfB87KY8iRjlQJouXbwFcUZL06ah_jurfCN7I8Dhu9566ueVGQq0DWj27d7&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_Afmic_HO6DJ2Sd0JoHAQRS0ypiCqmcSwU7NmblHrIUMouQ&oe=69557AB7)*High frequency detail.*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500637954559_2669172308057156383_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Fp0suFjA_FcQ7kNvwHII6yx&_nc_oc=Adn_SpKXv3HpfIl88TvtNP0B9AUGzyZsKOTCa9I69_OnU3RSAy_ccivUO7XZrxrzEpsXJVljfVowi-rplII-nFgF&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfknyfAlM6JmUke3qDFY-Vhu6CbMQoOj3WnruJOJX8smIg&oe=69559F39)*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589309_512500544621235_5986002142499223076_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=AhTtes0mnKEQ7kNvwHE9z5H&_nc_oc=AdljJUK8EZF3tkoEdoi3xJ7dUcUWqA2l8eLwei5f6qsk3P8kW_swGBd6QGNz2qmLg9EHAwzRks2NS3ButVXxIAYt&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfmYh77cWz0o2io8o-qWPyYP58gIsInGCUf9uUhnmR5PhA&oe=69556EE1)

## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452414106_512500551287901_1941084852038364963_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=Bal8ehqvoD4Q7kNvwEtvZUN&_nc_oc=Adk-5hEeee3Bo2zwL39kzge2YnXiP-ViXBg7451INieUdpEP5AyMGFuZON2TnLTLD3PIerPK-FZkZtjP1Vv1G2B7&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfnsgG67o0bsQPJQtWbaD7OeR2ENC0T_S-8cAw0PoRA9Kg&oe=6955824B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452915713_512500664621223_893951861776114436_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=4Dow8go6GeUQ7kNvwHudzp9&_nc_oc=AdnrtTPBNpEmDnEV5fA13BlaawUp_1rhmhEcWfEqwabMaYkxlgPvCb1oztX3MOXSjXdEukH3SiommZ6QQQQErpFF&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfkTMC7RYGnsh_chYdvjoBBCfoWOhSUEhC_H3IZxISac0w&oe=695575E2)

## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452917873_512500657954557_8219246528713603699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=c2uV1XJuQDoQ7kNvwGgNhjA&_nc_oc=AdkRMioAOE2gWY5Ux9wM-6i91LMy9cHV4aE2RxwlRUZTKEb-1J2NqGDnCUjjvH5ETDSTKQJJ77Y4VO8L7XvW7JJN&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AflyY0aoAFONXchfyUKewnfGqM_ez5f-9FkLkAzjKZnVXw&oe=69557870)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452684750_512500661287890_5145557696178384622_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=RLhxTeRvnowQ7kNvwFeODsI&_nc_oc=AdmmBaTdlW14fkmIdXo_FGiv1BKr6fwikqkYy7tnzas_Ij-ccwqanuR8M5yElLrjd-rtWT8WP_GVFAFNWN6sfGV0&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=McULKt_Ah-mwuVWVA2eo8Q&oh=00_AfljyaqDkM_H4haFRJae5WRfBu6DU3PCOnDY-bq1aO62PQ&oe=69557B65)

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

**Note:** See [**Materials Specifications**](Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) section for channel packing.

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