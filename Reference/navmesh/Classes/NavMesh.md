Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh

API reference

# NavMesh Class

Extends *[INavMesh](/hw-docs/Reference/navmesh/Interfaces/INavMesh.md)*

A reference to a navigation mesh instance, which scripts can use to query paths, raycasts, and nearest points. Each NavMesh instance represents a profile already defined in the editor; you can't define or modify profiles at runtime. As such, the NavMesh class is considered read-only.

## Signature

```
export declare class NavMesh implements INavMesh
```

## Remarks

There can only be one instance of a given NavMesh for each profile. For example, if multiple scripts retrieve the same reference, their operations are performed on the same NavMesh instance. This ensures your NavMesh reference can be safely passed between elements such as classes and functions.
For information about usage, see the [NavMesh generation](/hw-docs/Desktop%20editor/NPCs/Navigation%20mesh%20generation.md) guide.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(profileData)** | Constructs a new instance of the `NavMesh` class  ---  Signature  ``` constructor(profileData: Partial<NavMeshProfile>); ```  Parameters  profileData: Partial<[NavMeshProfile](/hw-docs/Reference/navmesh/Type%20Aliases/NavMeshProfile.md)> |

## Properties

|  |  |
| --- | --- |
| **getNearestPoint** | Gets the nearest point on the navigation mesh within the range of the target position, even if the target isn't on the navigation mesh.      Signature  ``` getNearestPoint: (position: Vec3, range: number) => Vec3 | null; ```  Remarks  This is useful for filtering input parameters for other NavMesh queries. For example, if we want to navigate towards a player that is standing on a box (and therefore off the NavMesh), we can use this call to find the closest valid position for a NavMesh query. |
| **getPath** | Calculates any viable or partially-viable path between a start position and target destination.      Signature  ``` getPath: (start: Vec3, end: Vec3) => NavMeshPath | null; ```  Remarks  If either the start position or destination position don't lie on the given NavMesh, no path is returned. If both points lie on the mesh but don't have a viable path between them, a partial path is returned with waypoints from the start position to the closest possible point to the destination. We recommend using the method to filter the parameters for this method, so the start and target paths are always valid. |
| **getPathAlongSurface** | Calculates any viable or partially-viable path between a start position and target destination, returning significant waypoints which are aligned with the underlying geometry surface.      Signature  ``` getPathAlongSurface: (start: Vec3, end: Vec3) => NavMeshDetailedPath | null; ```  Remarks  Output is similar to , but returns more detailed waypoint information. This is slightly more computationally expensive than . We recommend using instead when the returned waypoint output is used in conjunction with other NavMesh APIs such as . |
| **getStatus** | Gets information about the navmesh instance, such as its profile and current bake status.      Signature  ``` getStatus: () => NavMeshInstanceInfo; ``` |
| **profile** | The attached profile for this NavMesh instance.      Signature  ``` profile: NavMeshProfile; ``` |
| **rebake** | Requests that the server rebuilds the navigation mesh. This allows you to rebuild a navigation profile's mesh at runtime in order to respond to loading and placing assets or as a result of an obstacle in the world moving.      Signature  ``` rebake: () => Promise<{         success: boolean;     }>; ``` |

## Methods

|  |  |
| --- | --- |
| **raycast(startPoint, endPoint)** | Performs a raycast between a start and end position on a navigation mesh.      Signature  ``` raycast(startPoint: Vec3, endPoint: Vec3): NavMeshHit; ```  Parameters  startPoint: Vec3  The start position of the raycast.  endPoint: Vec3  The destination of the raycast.  Returns  [NavMeshHit](/hw-docs/Reference/navmesh/Type%20Aliases/NavMeshHit.md)  Data about the raycast calculation, such as if a collision occurred and the distance from the origin.  Remarks  This raycast is different from a physics ray cast because it works in 2.5D on the navigation mesh. A NavMesh raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space. |
| **raycast(origin, direction, range)** | Performs a raycast from an origin position that travels in the given direction along the navigation mesh. The ray travels until it has either hit something or reaches the max range.      Signature  ``` raycast(origin: Vec3, direction: Vec3, range: number): NavMeshHit; ```  Parameters  origin: Vec3  The starting position of the raycast.  direction: Vec3  The direction for the raycast to travel in 3D space.  range: number  The maximum distance the raycast should travel.  Returns  [NavMeshHit](/hw-docs/Reference/navmesh/Type%20Aliases/NavMeshHit.md)  Data about the raycast calculation, such as if a collision occurred and the distance from the origin.  Remarks  This raycast is different from a physics ray cast because it works in 2.5D on the navigation mesh. A NavMesh raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space. You can use this function to check if an agent can walk unobstructed between two points on the NavMesh. |