# NavMeshManager Class

Stores and retrieves references to [NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instances.

## Signature

```typescript
export default class NavMeshManager
```

## Remarks

[NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instances are cached to ensure that retrieving their profile multiple times with a script only generates one class reference. This is useful for updating navigation mesh profiles at runtime.

## Properties

| Property | Description |
| --- | --- |
| `getByName` | Gets a reference to a NavMesh instance based on a profile name.<br/>**Signature:** `getByName: (name: string) => Promise<NavMesh \| null>;`<br/>**Remarks:** If no matching profile is found, returns null. |
| `getNavMeshes` | Gets a set of NavMesh instances from the cache.<br/>**Signature:** `getNavMeshes: () => Promise<NavMesh[]>;` |
| `world` | **Signature:** `world: World;` |

## Methods

| Method | Description |
| --- | --- |
| `getInstance(world)` [static] | Gets a NavMeshManager directory that stores the references to NavMesh instances.<br/>**Signature:** `static getInstance(world: World): NavMeshManager;`<br/>**Parameters:** world: World<br/>**Returns:** NavMeshManager |