---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshmanager
---

# [NavMeshManager Class](#navmeshmanager-class)

Stores and retrieves references to [NavMesh](NavMesh.md) instances.

## [Signature](#signature)

```ts
export default class NavMeshManager 
```

## [Remarks](#remarks)

[NavMesh](NavMesh.md) instances are cached to ensure that retrieving their profile multiple times with a script only generates one class reference. This is useful for updating navigation mesh profiles at runtime.

## [Properties](#properties)

### [getByName](#getbyname)

Gets a reference to a instance based on a profile name.

**Signature**

```ts
getByName: (name: string) => Promise<NavMesh | null>;
```

**Remarks**

If no matching profile is found, returns `null`.

### [getNavMeshes](#getnavmeshes)

Gets a set of instances from the cache.

**Signature**

```ts
getNavMeshes: () => Promise<NavMesh[]>;
```

### [world](#world)

**Signature**

```ts
world: World;
```

## [Methods](#methods)

### [getInstance(world) static](#getinstanceworld-static)

Gets a NavMeshManager directory that stores the references to [NavMesh](NavMesh.md) instances.

**Signature**

```ts
static getInstance(world: World): NavMeshManager;
```

**Parameters**

world: World

**Returns**

[NavMeshManager](NavMeshManager.md)

