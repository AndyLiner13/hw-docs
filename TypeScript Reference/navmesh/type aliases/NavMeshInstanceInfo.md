# NavMeshInstanceInfo type

Data about the of a [NavMesh](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh) instance.

## Signature

```typescript
export declare type NavMeshInstanceInfo = {
    profile: NavMeshProfile;
    currentBake: Promise<boolean> | null;
    state: NavMeshState;
};
```

## References

- [NavMeshProfile](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshprofile)
- [NavMeshState](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshstate)

## Remarks

Variables:
- **profile**: The current navigation profile associated with the navigation mesh.
- **currentBake**: A promise that contains the result of the current rebuild operation of the navigation mesh; otherwise, null.
- **state**: The state of the navigation mesh instance, such as whether it is ready to use or being rebuilt.