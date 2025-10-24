# NavMeshDetailedPath type

Defines the pathfinding calculation results for the property. This contains slightly more information than the property.

## Signature

```typescript
export declare type NavMeshDetailedPath = Omit<NavMeshPath, 'waypoints'> & {
    waypoints: NavMeshWaypoint[];
};
```

## References

- [NavMeshPath](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshpath)
- [NavMeshWaypoint](https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshwaypoint)

## Remarks

Variables:
- **waypoints**: The list of waypoints for the generated path. Contains position and normal data.
- **startPos**: The origin point for the generated path.
- **endPos**: The terminal point for the generated path. This might not be the same as the query destination.
- **destinationPos**: The requested terminal point for the generated path. This may not be reachable, and can differ from endPos.
- **pathReachesDestination**: true if the endPos reaches the destinationPos, false if an incomplete path is returned.