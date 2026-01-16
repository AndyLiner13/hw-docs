Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshmanager

# NavMeshManager Class

Stores and retrieves references to [NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instances.

## Signature

```
export default class NavMeshManager
```

## Remarks

[NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instances are cached to ensure that retrieving their profile multiple times with a script only generates one class reference. This is useful for updating navigation mesh profiles at runtime.

## Properties

|  |  |
| --- | --- |
| **getByName** | Gets a reference to a instance based on a profile name.      Signature  ``` getByName: (name: string) => Promise<NavMesh | null>; ```  Remarks  If no matching profile is found, returns `null`. |
| **getNavMeshes** | Gets a set of instances from the cache.      Signature  ``` getNavMeshes: () => Promise<NavMesh[]>; ``` |
| **world** | Signature  ``` world: World; ``` |

## Methods

|  |  |
| --- | --- |
| **getInstance(world)** static | Gets a NavMeshManager directory that stores the references to [NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instances.      Signature  ``` static getInstance(world: World): NavMeshManager; ```  Parameters  world: World  Returns  [NavMeshManager](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshmanager) |