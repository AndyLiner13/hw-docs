Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/gpu-best-practices

Learn

# GPU best practices

Currently, world performance is bound by CPU processing so the practices described here are not as critical as those in [CPU and TypeScript Best Practices](/hw-docs/Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md) and [Physics Best Practices](/hw-docs/Performance/Performance%20best%20practices/Physics%20best%20practices.md). These are, however, best practices and should be kept in mind. Creators using Custom Model Import worlds have more control of this than primitive based worlds. Future hardware may have faster CPUs and higher refresh rates - making them less CPU bound, planning for GPU performance now will future-proof your world.

## Model specification

A model consists of the Mesh + Materials + Textures.

## Mesh

|  | **Recommended** |
| --- | --- |
| **Formats** | FBX |
| **Objects** | Multiple meshes per FBX file supported |
| **Vertex Count** | 12k recommended max, 400k maximum vertices. |
| **Hierarchy** | Flattened in Horizon\* |
| **Pivot Points** | Centered on import\* |
| **Animation** | Importing animation is not currently supported |
| **UV Channel** | Only UV channel 0 is used to map textures onto the mesh |
| **Normals** | Vertex normals are imported |

\*subject to change in the future.

## Performance tips

### Turn off entity visibility

Dynamic objects are commonly individual draw calls for each object in Horizon Worlds. This means if your world has a lot of dynamic objects, whether they are behind walls or under floors, if they are in the camera’s view frustum you will pay the cost of each draw call individually.

Draw calls affect the cost on both the CPU and GPU. If there are a large number of dynamic objects in the world, consider creating a custom visibility system based on the player’s location that would [turn off visibility of meshes for individual players](/hw-docs/Scripting/API%20references%20and%20examples/Entity%20Visibility.md). This could be setting up triggers and/or creating logic where visibility of objects would be disabled in areas the player wouldn’t be able to see. Keep in mind where the players would be looking when you set up such a system to prevent meshes popping in and out on screen when the visibility is changed.

### Avoid expensive shaders

Rendering performance can vary greatly depending on which shader you use on your objects. For instance, a “color only” shader would do almost no calculations at all and be a very inexpensive option for objects that need to appear emissive or have lighting that doesn’t vary across the surface.The shader that supports metalness is the a very nice option to support many different material surfaces (and is very expensive) but is not necessary or desirable for surfaces that do not appear metallic. Take care to select the most inexpensive shaders that can accomplish the desired look for your materials. See [Materials Specifications](/hw-docs/Custom%20models%20(FBX)/Creating%20custom%20models%20for%20Horizon%20Worlds/Materials%20Guidance%20and%20Reference%20for%20Custom%20Models.md) and choose materials with the fewest amounts of textures with an appropriate feature set to the art that uses it.

### Combine smaller meshes

Some worlds have a large number of separate meshes to draw, causing the draw call count to be very high.This is especially important in Custom Model Import worlds where meshes are not batched dynamically.  To improve performance, meshes can be combined and their textures can be merged into a texture atlas. The mesh UVs will also have to be adjusted to align to their subtexture within the atlas. The tradeoff to combining meshes in this way is that it limits the app’s ability to cull offscreen elements as any mesh that is even partially onscreen will need to be rendered entirely, so it is recommended to merge objects that are relatively close together and likely to be onscreen together and not meshes that are far apart. Based on rendering times in previous reports, a good range to aim for is 150-250 draw calls.

### Break up large meshes

Occasionally worlds will have extremely large meshes that span a large area. These meshes should ideally be broken up into smaller localized chunks so we can maximize the benefits of view frustum culling. For instance, if you have a large complex circular shape, you could break it into 4 to 8 smaller pieces. Being mindful of not over-combining will avoid too many vertices from going through the graphics pipeline into the vertex shader.

### Highly detailed meshes

If possible, reduce the number of vertices in a mesh to an acceptable amount of detail. Renderers work by performing calculations on each and every vertex. Highly detailed objects require lots of GPU work. Back sides and other unseen parts should be reduced to a minimal amount of vertices. A maximum of 12000 polygons and 400000 vertices is recommended. A mesh with more than 65000 vertices forces the system to use 32 bit indexes which are a bit slower than 16 bit indexes.

### Physically large meshes

When combining objects to create large meshes to reduce draw calls, try to keep the objects physically close together. When any part of an object is in view, the whole object will be rendered by the GPU before being clipped to the viewable area. If meshes are physically large this happens even if the player is viewing a small corner, or edge. Keeping the objects in close proximity makes it more likely that the whole object will be in view and the GPU won’t have the unnecessary work.

|  |  |
| --- | --- |
|  |  |

*This mesh takes nearly one millisecond to render even when only a small portion is in view*

### Level design

Horizon does not have occlusion culling and will render everything within the camera’s field of view even if those objects are otherwise hidden behind walls.  To combat this, it can be helpful to design levels that encourage players to face away from the majority of the world or to turn off visibility on sections of the world that are hidden behind walls to reduce the time spent rendering the parts of the world that the player does not currently need to see.  Large, open spaces where the player is often in the center, or facing a large portion of the world, will have a harder time with reducing rendering costs.

### Visible unused assets

Many worlds pool objects outside of the visible play area when not in use, but leave the visibility on these assets toggled On.  Since Horizon does not cull occluded objects, these pooled assets will continue to add to rendering time as long as they are within the camera view even though the player cannot see them.  It is recommended to turn off visibility on anything that is stored outside of the playable area to avoid unexpected rendering costs.

### Transparency and TextMeshPro

Avoid using TextMeshPro for anything except necessary text display. An empty text object should not be used in place of a transparent object, as the shader to draw TextMeshPro is very expensive. An invisible cube renders in much less time.

### Avoid drawing large signs with TextMeshPro

Objects such as large signs are expensive to draw with TextMeshPro. Instead, prefer to create a mesh with a similar look using shaders/materials that already exist in the world.