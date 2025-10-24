# NavMeshPath type

Defines the pathfinding calculation results retrieved by the [NavMesh.getPath](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmesh#getpath) property.

## Signature

```typescript
export declare type NavMeshPath = {
    waypoints: Vec3[];
    startPos: Vec3;
    endPos: Vec3;
    destinationPos: Vec3;
    pathReachesDestination: boolean;
};
```

## Remarks

Variables:
- **waypoints**: The list of waypoints for the generated path.
- **startPos**: The origin point for the generated path.
- **endPos**: The terminal point for the generated path. This might not be the same as the query destination.
- **destinationPos**: The requested terminal point for the generated path. This may not be reachable, and can differ from endPos.
- **pathReachesDestination**: true if the endPos reaches the destinationPos, false if an incomplete path is returned.