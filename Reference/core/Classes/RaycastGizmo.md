Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_raycastgizmo

# RaycastGizmo Class

Extends *[Entity](Entity.md)*

Represents a Raycast gizmo in the world.

## Signature

```
export declare class RaycastGizmo extends Entity
```

## Remarks

A Raycast gizmo projects an invisible beam into a world to return information about any objects it collides with.

## Methods

|  |  |
| --- | --- |
| **raycast(origin, direction, options)** | Casts a ray from the Raycast gizmo using the given origin and direction and then retrieves collision information.      Signature  ``` raycast(origin: Vec3, direction: Vec3, options?: RaycastOptions): RaycastHit | null; ```  Parameters  origin: [Vec3](Vec3.md)  The starting point of the ray.  direction: [Vec3](Vec3.md)  The direction for the ray to travel.  options: [RaycastOptions](../Type%20Aliases/RaycastOptions.md)  *(Optional)* The options for configuring the raycast operation.  Returns  [RaycastHit](../Type%20Aliases/RaycastHit.md) | null  The collision information. |
| **toString()** | Creates a human-readable representation of the RaycastGizmo.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the RaycastGizmo. |