Source: https://developers.meta.com/horizon-worlds/learn/documentation/performance-best-practices-and-tooling/performance-best-practices/network-best-practices

# Network best practices

All moving (dynamic) objects in the world have their positions synchronized between clients, where updates are sent to every player in the world. If you have many animated objects, especially if they react to physics in the scene (collidable), the network data transfer could take a significant amount of time.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/49be3f656fca8c6500cf0e1773f98911b146b951898bb1b8ec6c1e831357557b.md)

### Overview
This image depicts an underwater scene featuring a small, circular structure resembling a futuristic or alien base. The environment includes sandy ocean floor, scattered rocks, and a few small fish swimming around. The structure has a curved roof and appears to be made of a metallic material. The background consists of large rock formations and a deep blue ocean.

### Key Elements
- **Circular Structure**: Located centrally in the image, it has a curved roof and a flat platform. It appears to be constructed from a metallic material. The structure has a small entrance or opening at the bottom.
- **Fish**: Several small fish are swimming near the sandy bottom. They are colorful, with green, yellow, and pink hues.
- **Rocks**: Scattered across the sandy floor are various sizes of rocks, some larger and more prominent than others.
- **Ocean Floor**: The ground is sandy with a light beige color, and the water above is a deep blue.
- **Background Rocks**: Large rock formations are visible in the distance, extending into the water.

### Visual Flow / Relationships
The most prominent visual element is the circular structure, which draws the viewer's attention due to its central placement and distinct shape. The fish and rocks provide additional points of interest but are secondary to the structure. There are no arrows or lines connecting elements, so the visual flow is primarily guided by the natural arrangement of the scene.

</details>

<p></p>



*Animated and interactive fish driven by server updates*

## Potential solution

To improve the time it takes to transfer data, consider keeping animated objects to a minimum, reducing the total overhead needed to sync between multiple users in your world.