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

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452945192_512500654621224_1117938882276573410_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=C7jz5PYsYo0Q7kNvwGPfkhL&_nc_oc=Adn_NnPlAYdsKubfqpqzLqSS07741Y5ZnYz1hFIRDyKqcUqkkh4uJ88FXhtY24KYfOE&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfgImC5-VX5xli_RcKgnufC3Us0rdUw7BuTm76aktbKlSA&oe=692BFA31)![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816787_512500667954556_7310310293534084824_n.png?_nc_cat=103&ccb=1-7&_nc_sid=e280be&_nc_ohc=Z7leGbVrOLAQ7kNvwEexLSC&_nc_oc=Adnme5D086mNNsc6UIQsIlRBW1pwjDBgUx0zXqOCxZGxzGCvzBymHuv0Vje4nYxh80g&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_Afj8tE--zlJZZgyioHcUw5TdimJZD9EgVc37QhnAMojuAg&oe=692BE2BE)

## Scale

Build objects on real-world scales. Make sure that when you export your FBX, the units are set appropriately.

**Houdini** - Check “Convert Units” on the FBX export ROP.

**Maya** - There is a known scale issue where models will come in at the correct size but will have their transforms set to 0.01 scale.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452816154_512500651287891_9110139022826988635_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e280be&_nc_ohc=VopaVMgFwV0Q7kNvwGwkgxb&_nc_oc=AdlOpmGHjKvpflD99gmqy0KF8Hu8qJIwrGPZHvqtSCV63JhuDCglJnX8YRNMszMivTk&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfjkOdllkZ8Y0o3iFZsrIF_zt28LMqFH0IQ7UChsfVzdJQ&oe=692BE95F)

## Pivots

When exporting a set of objects, we recommend setting their pivot correctly, centered at the bottom of each piece, or aligned in the same way that you would for a well-prepared game asset.

**Tip**: currently, pivots will all become centered in Horizon, but this is something we plan to change in the future, so setting up your pivots correctly now could make these assets more useful in the future.

See the [Fallout 4 Modular Level Design](https://youtu.be/QBAM27YbKZg?t=422) talk for pivots, standardizing, and more tips around this.

## Remixability

Consider breaking your asset into pieces if those pieces would be useful for remixing.  However, if you aren’t planning on remixing an asset, it’s better optimized as a single piece.

**Maya** - Prior to exporting from Maya, you should group your kit, then arrange it in a way that is convenient to see and access all of the items in your kit. We recommend that the history is deleted and the transform is frozen.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500647954558_2366646221517633934_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e280be&_nc_ohc=fNXIXvvmuJAQ7kNvwGh-EWi&_nc_oc=AdnR91uM4GSHC44rtSPhRA8RIw42c30aHno7AiqJtspoRC7VmH9z3Iq9Tw0kQFcCcGs&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfiM2hkppAhLLgbIB0gHm1uBd9xKG52V4Z930l5x8goIVg&oe=692BEA96)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452555349_512500607954562_5062833201515023605_n.png?_nc_cat=104&ccb=1-7&_nc_sid=e280be&_nc_ohc=ZBNDjv2H9wsQ7kNvwEVe-lz&_nc_oc=AdmSy46j5podLVeK52T8y2FDTOTcFqZg9vX9RVjtQFf6NzIokI82n8GWxdFEzqihtEE&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_Afj1OuoIkLjCYf6vXYAkVzsfeJ1nQkRpEHSxV6fSEk34Qw&oe=692BDBB8)

## UV padding

Because we use the lowest mip size for coloring the bounce lighting information, there is a possibility that closely-packed UVs with strong color differences could cause incorrect color bouncing. If you have UV islands with strong color differences, you should use extra UV padding between those islands.

Minimum padding you should use for **large color differences**:

* 512 textures use 8 pixels.
* 1024 textures use 16 pixels.
* 2048 textures use 32 pixels.

## Texture style

Because the Quest 2 screens are high resolution, you can get extremely close to object surfaces. This makes it challenging for textures with fine details to remain good-looking when you are very close to them or they are very large. We recommend creating textures with less high-frequency detail, a style which holds up well in VR.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452704033_512500644621225_6271284546319336980_n.png?_nc_cat=111&ccb=1-7&_nc_sid=e280be&_nc_ohc=sqABeGCqYGAQ7kNvwFXRYCj&_nc_oc=AdmTPkc0KvETSJkUUD-RrY4MKE6E506L1gfv7eKQ8LpTu35LFk5fVCUJtnjWZsYhogc&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfhbINb8aHFFXmvjYBIGPtaR8V1HyINjxuvSJeO1AxMOVA&oe=692BF377)*High frequency detail.*

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452915469_512500637954559_2669172308057156383_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e280be&_nc_ohc=Zrc2DgJJCJ4Q7kNvwFTVHer&_nc_oc=AdmFNPJ362qhgkXq2EbF5NY-itawzjRZcpkjq4SO6b2DvLCWLnwZfmbBgkrfZPz40ro&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfgZ98OYk6JKgGLg0i7UO5QOGFuP7AIzir7lRXnO-5c04w&oe=692BDFB9)*Lower frequency details look better close up in VR.*

## Model baking

Model baking is a common technique. Keep in mind that we currently do not support normal maps, so use geometry to convey information you typically might put into a normal map.  Using geometry instead of normals works very well in VR and gives you nicer kitbash piece intersections when laying out worlds.

![](https://scontent-dfw5-1.xx.fbcdn.net/v/t39.2365-6/452589309_512500544621235_5986002142499223076_n.png?_nc_cat=110&ccb=1-7&_nc_sid=e280be&_nc_ohc=6ERulIewTCIQ7kNvwHNH_d-&_nc_oc=Adl6usBgeFxhWoVmy0FS-vxkvzldAwRui7LAJayfjGr8-9Efj6Cx_ALeKGBNzSpq2ZI&_nc_zt=14&_nc_ht=scontent-dfw5-1.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_Afj5WAtr283R3kRGwjyDijgJnaulkDT_8VZ3h7o34YQP0g&oe=692BE7A1)

## Trim sheets

One of the best ways to optimize your textures is to use what are called trim-sheets, also known as artist-authored texture atlases. These are tiled strips of re-usable texture information that is assigned with UV coordinates onto different parts of the model.

![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452414106_512500551287901_1941084852038364963_n.png?_nc_cat=107&ccb=1-7&_nc_sid=e280be&_nc_ohc=VKNBWz6zpm0Q7kNvwEkFKhn&_nc_oc=AdndSm1Zg9yPBRwwabUcIqPVX5O9Ul2FB977ABL1Hp_aNFIBrEqB0YbuvJaXl67z0eQ&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_Afi_jS9ifj4obkA4Wp7t0jZFl14kYi2ajDJTVazUGsMT3A&oe=692BFB0B)

![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452915713_512500664621223_893951861776114436_n.png?_nc_cat=109&ccb=1-7&_nc_sid=e280be&_nc_ohc=GoExRj5O89cQ7kNvwF5kxPN&_nc_oc=AdlFXUbpjABOtHpk2MdNhxN7K8hQgTPmHhW0O8WcKN_HF_upofw40y48MNCAsaGSVPE&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfhfaKaFt39F1DHVSTDXyEPYI3Ie08WhGQsXiiF4BzmIuQ&oe=692BEEA2)

## When to use the Metalness Channel

Examples showing basecolor + roughness compared to basecolor + roughness + metalness.
![](https://scontent-dfw5-3.xx.fbcdn.net/v/t39.2365-6/452917873_512500657954557_8219246528713603699_n.png?_nc_cat=108&ccb=1-7&_nc_sid=e280be&_nc_ohc=eCJh_X5oSEcQ7kNvwERjixD&_nc_oc=Adl6JkjRQF3_v2UoGx81Mxf5Cb-s0xZVf8aV_By_2MOFeesaVcJjtLsg5OFjldtnJPA&_nc_zt=14&_nc_ht=scontent-dfw5-3.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfiBmT4okQspzXaA-sHj9V10eRFNgza7P4negywlOYXMXQ&oe=692BF130)![](https://scontent-dfw5-2.xx.fbcdn.net/v/t39.2365-6/452684750_512500661287890_5145557696178384622_n.png?_nc_cat=106&ccb=1-7&_nc_sid=e280be&_nc_ohc=L3uDH3c45SwQ7kNvwHh-6zP&_nc_oc=Adm3LLb0RVoqX1rsVLxQWrqz-dstEHEsO6KY3k1XzL8WV0GVLsFyHc0e3w_VcN4WEn8&_nc_zt=14&_nc_ht=scontent-dfw5-2.xx&_nc_gid=uVhW1-L85PDE35colZqkag&oh=00_AfhSDJ1jLmjzpl9TWNxhGmISuAipzNdmXSzXNpFrWFRBcw&oe=692BF425)

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

**Note:** See [**Materials Specifications**](/hw-docs/custom-model-import/creating-custom-models-for-horizon-worlds/materials-guidance-and-reference-for-custom-models/) section for channel packing.

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