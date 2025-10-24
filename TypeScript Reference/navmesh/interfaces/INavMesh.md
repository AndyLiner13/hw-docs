# INavMesh Interface

A reference to a navigation mesh instance, which scripts can use to query paths, raycasts, and nearest points. Each NavMesh instance represents a profile already defined in the editor; you can't define or modify profiles at runtime. As such, the NavMesh class is considered read-only.

## Signature

```typescript
export interface INavMesh
```

## Remarks

There can only be one instance of a given NavMesh for each profile. For example, if multiple scripts retrieve the same reference, their operations are performed on the same NavMesh instance. This ensures your NavMesh reference can be safely passed between elements such as classes and functions.

For information about usage, see the [NavMesh generation](https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/npcs/navigation-mesh-generation) guide.

## Properties

| Property | Description |
| --- | --- |
| `profile` | The attached profile for this NavMesh instance.<br/>**Signature:** `profile: NavMeshProfile;` |

## Methods

| Method | Description |
| --- | --- |
| `getNearestPoint(position, range)` | Gets the nearest point on the navigation mesh within the range of the target position, even if the target isn't on the navigation mesh.<br/>**Signature:** `getNearestPoint(position: Vec3, range: number): null \| Vec3;`<br/>**Parameters:** position: Vec3 - The target position to check for the nearest point. range: number - The maximum distance for the calculation.<br/>**Returns:** null \| Vec3 - The nearest Vec3 position within the range, or null if no point is available.<br/>**Remarks:** This is useful for filtering input parameters for other NavMesh queries. For example, if we want to navigate towards a player that is standing on a box (and therefore off the NavMesh), we can use this call to find the closest valid position for a NavMesh query. |
| `getPath(start, destination)` | Calculates any viable or partially-viable path between a start position and target destination.<br/>**Signature:** `getPath(start: Vec3, destination: Vec3): null \| NavMeshPath;`<br/>**Parameters:** start: Vec3 - The starting position of the desired path. destination: Vec3 - The target destination of the desired path.<br/>**Returns:** null \| NavMeshPath - A NavMeshPath object containing the path information. Otherwise, if there's no path available, returns null.<br/>**Remarks:** If either the start position or destination position don't lie on the given NavMesh, no path is returned. If both points lie on the mesh but don't have a viable path between them, a partial path is returned with waypoints from the start position to the closest possible point to the destination. We recommend using the getNearestPoint method to filter the parameters for this method, so the start and target paths are always valid. |
| `getPathAlongSurface(start, destination)` | Calculates any viable or partially-viable path between a start position and target destination, returning significant waypoints which are aligned with the underlying geometry surface.<br/>**Signature:** `getPathAlongSurface(start: Vec3, destination: Vec3): null \| NavMeshDetailedPath;`<br/>**Parameters:** start: Vec3, destination: Vec3<br/>**Returns:** null \| NavMeshDetailedPath<br/>**Remarks:** Output is similar to getPath, but returns more detailed waypoint information. This is slightly more computationally expensive than getPath. We recommend using getPath instead when the returned waypoint output is used in conjunction with other NavMesh APIs. |
| `getStatus()` | Gets information about the navmesh instance, such as its profile and current bake status.<br/>**Signature:** `getStatus(): NavMeshInstanceInfo;`<br/>**Returns:** NavMeshInstanceInfo |
| `raycast(origin, direction, range)` | Performs a raycast from an origin position that travels in the given direction along the navigation mesh. The ray travels until it has either hit something or reaches the max range.<br/>**Signature:** `raycast(origin: Vec3, direction: Vec3, range: number): NavMeshHit;`<br/>**Parameters:** origin: Vec3 - The starting position of the raycast. direction: Vec3 - The direction for the raycast to travel in 3D space. range: number - The maximum distance the raycast should travel.<br/>**Returns:** NavMeshHit - Data about the raycast calculation, such as if a collision occurred and the distance from the origin.<br/>**Remarks:** This raycast is different from a physics ray cast because it works in 2.5D on the navigation mesh. A NavMesh raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space. |
| `raycast(startPoint, endPoint)` | Performs a raycast between a start and end position on a navigation mesh.<br/>**Signature:** `raycast(startPoint: Vec3, endPoint: Vec3): NavMeshHit;`<br/>**Parameters:** startPoint: Vec3 - The start position of the raycast. endPoint: Vec3 - The destination of the raycast.<br/>**Returns:** NavMeshHit - Data about the raycast calculation, such as if a collision occurred and the distance from the origin.<br/>**Remarks:** This raycast is different from a physics ray cast because it works in 2.5D on the navigation mesh. A NavMesh raycast can detect all kinds of navigation obstructions, such as holes in the ground, and can also climb up slopes if the area is navigable. A physics raycast, in comparison, typically travels linearly through 3D space. |
| `rebake()` | Requests that the server rebuilds the navigation mesh.<br/>**Signature:** `rebake(): Promise<NavMeshBakeInfo>;`<br/>**Returns:** Promise<NavMeshBakeInfo> - A promise containing the result of the rebake request.<br/>**Remarks:** This allows you to rebuild a navigation profile's mesh at runtime in order to respond to loading and placing assets or as a result of an obstacle in the world moving. |