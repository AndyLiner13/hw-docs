Source: https://developers.meta.com/horizon-worlds/learn/documentation/custom-model-import/creating-custom-models-for-horizon-worlds/collider-ingestion-user-guide

# Collider Ingestion User Guide

Collider ingestion allows asset creators to define custom collision shapes in the FBX file for a mesh asset. When these colliders are ingested into Horizon they become collider entities, these are a new type of entity in Horizon that is only used for collision.

Collider entities have collision, physics, and grabbable components but no renderable mesh component. Collider entities can be ingested with mesh assets or spawned directly from the Creator User Interface (CUI). By grouping collider entities with mesh entities, creators are able to create visually complex objects with performant collision. These collider entities are viewable with the collision debug view but otherwise be invisible.

## Types of collider entities

Collider entities can either be primitives (box, sphere, capsule) or meshes. Primitives have significant performance advantages, but mesh colliders allow for more precise collision.

| **Type** | **Source** | **Description** |
| --- | --- | --- |
| **Box** | CUI or Ingested | Primitive box collider. Uses Unity’s [BoxCollider](https://docs.unity3d.com/Manual/class-BoxCollider.html) component. |
| **Sphere** | CUI or Ingested | Primitive sphere collider. Uses Unity’s [SphereCollider](https://docs.unity3d.com/Manual/class-SphereCollider.html) component. |
| **Capsule** | CUI or Ingested | Primitive capsule collider. Uses Unity’s [CapsuleCollider](https://docs.unity3d.com/Manual/class-CapsuleCollider.html) component. |
| **Mesh** | Ingested Only | A mesh ingested from an asset. Uses Unity’s [MeshCollider](https://docs.unity3d.com/Manual/class-MeshCollider.html) component. Can represent a convex hull or a concave mesh. |

## Ingesting collider entities

When importing 3D models made in a DCC tool (Digital Content Creation) into horizon we provide a way for creators to designate a custom collider setup. Mesh names saved out from the DCC tool define which meshes represent colliders and what type of colliders they are.

The colliders should be attached to the visible geometry in the DCC tool, so they’re grouped together when spawned in Horizon.

This same mesh name-based custom collider approach is used by Unreal, Houdini, and Unity (via plugin).

| **Type** | **Mesh Prefix Naming** | **Requirements** |
| --- | --- | --- |
| **Box** | UBX\_[VisibleMesh]\_## | A Box must be created using a regular rectangular 3D object. You cannot move the vertices around or deform it in any way to make it something other than a rectangular prism, or else it will not work. |
| **Sphere** | USP\_[VisibleMesh]\_## | A Sphere does not need to have many segments (8 is a good number) at all because it is converted into a true sphere for collision. Like boxes, you should not move the individual vertices around. |
| **Capsule** | UCP\_[VisibleMesh]\_## | A Capsule must be a cylindrical object capped with hemispheres. The capsule is expected to be vertical in local space. It does not need to have many segments (8 is a good number) at all because it is converted into a true capsule for collision. Like boxes, you should not move the individual vertices around. |
| **Convex Hull** | UCX\_[VisibleMesh]\_## | A Convex object can be any completely closed convex 3D shape. |
| **Concave Mesh** | UCC\_[VisibleMesh]\_## | Any concave mesh. This is the most flexible type of collider but is also the least performant. Unity will generate a convex hull if it is marked as dynamic. |

The geometry for primitive colliders (box, sphere, capsule) is expected to have its pivot at the center. This restriction does not apply to convex or concave mesh colliders.

This screenshot from Blender shows a visible mesh (RingTarget) with a number of primitive colliders defined for it.

<details>
<summary>Image Content</summary>

<p></p>

[All image details and metadata](../../image_data/e9cc637c5b4603e65a55770c761703ddf35c7668cb1f37fecb5bca47ae0ca71d.md)

### Overview
This image depicts a hierarchical tree view interface, likely from a software application. It shows a nested structure with expandable nodes, indicated by triangle icons. The nodes contain text labels and small circular icons next to them.

### Key Elements
- **Tree Structure**: A vertical list of nodes, each representing a category or item within a larger structure.
  - **Nodes**: Each node has a triangle icon indicating whether it can be expanded or collapsed.
  - **Text Labels**: Inside each node, there is a label such as "RingTarget," "UBX_RingTarget_6," etc.
  - **Circular Icons**: Small icons next to the text labels, possibly indicating status or action options.
- **Background**: Dark gray background with lighter gray vertical lines separating the nodes.
- **Expand/Collapse Triangles**: Located at the beginning of each node, pointing right when closed and down when expanded.
- **Node Labels**: Text labels are in white, with some in green and others in orange, suggesting different categories or statuses.

### Visual Flow / Relationships
- **Most Prominent Element**: The expandable nodes are the most prominent due to their hierarchical nature.
- **Arrows/Connectors**: There are no explicit arrows or connectors between nodes, but the indentation suggests a parent-child relationship.
- **Spatial Relationships**: Nodes are arranged vertically, with each level indented further than the previous one. The expandable triangles indicate the direction of expansion/collapse.

</details>

<p></p>



## Spawning collider entities in the desktop editor

Collider entities are also available for World Creators in the desktop editor. Spawning them is similar to spawning a primitive shape, but there will be no visible geometry. Only primitive colliders (box, sphere, capsule) are available from the desktop editor. Collider entities can be grouped with visible meshes to define custom collision for those meshes, or used on their own to add collision volumes to the world.

To add a primitive collider to the world, select **Colliders** from the **Build** menu. This will open the **Colliders** panel. Select the type of collider you want to add to the world, then right-click and select **Place**.

|  |  |
| --- | --- |
| Collider option in the Build menu | Colliders panel |
| *Collider option in the Build menu* | *Colliders panel* |

We automatically enter Colliders view mode when you place a collider entity into the world. To enter collider view manually, select **Collisions** from the **View Mode** menu at the top right of the **Preview** window.

<details>
<summary>Collider view option</summary>

<p></p>

[Collider view option](../../image_data/9be631f88b6d570d97264e6adb30cfd3fefa71d1e4c3d87a1cbfc366770a3aa5.md)

### Overview
This image depicts a user interface element from a software application, specifically a settings or properties panel. It shows a list of options related to object visualization and collision detection. The layout is structured with a vertical arrangement of items, each accompanied by a toggle switch or checkbox indicator.

### Key Elements
- **Header**: "Properties" at the top, indicating the section of the interface.
- **Toggle Switches**: Each option has a toggle switch next to it, which can be in one of three states: unchecked, checked, or partially checked (indicated by a blue highlight).
- **Options List**: 
  - **Shaded**: Toggle switch is unchecked.
  - **Wireframe**: Toggle switch is unchecked.
  - **Solid wireframe**: Toggle switch is unchecked.
  - **Shaded wireframe**: Toggle switch is unchecked.
- **Collision Section**: 
  - **Collision**: Toggle switch is checked.
  - **Show object colliders**: Toggle switch is unchecked.
- **Show Gizmos**: A checkbox at the bottom right corner, which is checked.

### Visual Flow / Relationships
The visual hierarchy is clear with the toggles arranged vertically. The checked and unchecked states of the toggles are visually distinct, making them easy to identify. There are no arrows or lines connecting the elements, but the layout suggests a linear reading order from top to bottom.

</details>

<p></p>



*Collider view option*