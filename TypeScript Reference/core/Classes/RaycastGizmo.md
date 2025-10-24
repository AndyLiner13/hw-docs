# RaycastGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) Represents a Raycast gizmo in the world.

## Signature

```typescript
export declare class RaycastGizmo extends Entity
```

## Remarks

A Raycast gizmo projects an invisible beam into a world to return information about any objects it collides with.

## Methods

| Method | Description |
| --- | --- |
| raycast(origin, direction, options) | Casts a ray from the Raycast gizmo using the given origin and direction and then retrieves collision information. Signature raycast(origin: Vec3, direction: Vec3, options?: RaycastOptions): RaycastHit | null; Parameters origin: Vec3 The starting point of the ray. direction: Vec3 The direction for the ray to travel. options: RaycastOptions (Optional) The options for configuring the raycast operation. Returns RaycastHit | nullThe collision information. |
| toString() | Creates a human-readable representation of the RaycastGizmo. Signature toString(): string; Returns stringA string representation of the RaycastGizmo. |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_raycastgizmo%2F)