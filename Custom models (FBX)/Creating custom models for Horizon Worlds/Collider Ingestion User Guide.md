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

[All image details and metadata](../../../../images/output/img_20251211_005822_20251211_005822.md)

### Overview
This image depicts a hierarchical tree view interface, likely from a software application. It shows a nested structure with expandable nodes, indicated by triangle icons. The nodes contain text labels and small icons next to them.

### Key Elements
- **RingTarget**: Located at the top level, this node has a green triangle icon and contains a red circular icon next to its name.
- **UBX_RingTarget_6**: A child node under RingTarget, with a green triangle icon and a red circular icon.
- **UBX_RingTarget_7**: Another child node under UBX_RingTarget_6, with similar icons.
- **UCP_RingTarget_1**: A child node under UBX_RingTarget_7, with a green triangle icon and a red circular icon.
- **UCP_RingTarget_2**: A child node under UCP_RingTarget_1, with a green triangle icon and a red circular icon.
- **UCP_RingTarget_3**: A child node under UCP_RingTarget_2, with a green triangle icon and a red circular icon.
- **UCP_RingTarget_4**: A child node under UCP_RingTarget_3, with a green triangle icon and a red circular icon.
- **UCP_RingTarget_5**: A child node under UCP_RingTarget_4, with a green triangle icon and a red circular icon.

### Visual Flow / Relationships
The visual hierarchy is clear, with the RingTarget as the root node, followed by its children, which are further divided into sub-nodes. The triangle icons suggest that clicking on them would expand or collapse the nodes. The red circular icons appear to be indicators of some kind, possibly errors or warnings.

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

[Collider view option](../../../../images/output/img_20251211_005936_20251211_005936.md)

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
  - **Collision**: Toggle switch is checked, indicated by a blue highlight.
  - **Show object colliders**: Toggle switch is unchecked.
- **Checkbox**: A checkbox labeled "Show Gizmos" is located at the bottom right, which is checked.

### Visual Flow / Relationships
The elements are arranged vertically with a clear hierarchy. The toggles are aligned horizontally under each option. The checked state of the "Collision" toggle is emphasized by a blue highlight, drawing attention to it as the currently active setting. The "Show Gizmos" checkbox is positioned separately at the bottom right, indicating it might be a separate setting or a global preference.

</details>

<p></p>



*Collider view option*