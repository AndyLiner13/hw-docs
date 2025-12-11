Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshhit

# NavMeshHit type

The collision data returned when a raycast is performed on a [NavMesh](../Classes/NavMesh.md) object by the method.

## Signature

```
export declare type NavMeshHit = {
    position: Vec3;
    normal: Vec3;
    distance: number;
    hit: boolean;
    navMesh: INavMesh;
};
```

## References

[INavMesh](../Interfaces/INavMesh.md)

## Remarks

Variables:
position: The ending location where the raycast collided with the NavMesh.
normal: The normal vector at the point of impact for the raycast.
distance: The distance traveled when the raycast was performed.
hit: true if the raycast hit any obstructions or edges during the calculation; otherwise, false.
navMesh: The NavMesh the raycast was performed on.