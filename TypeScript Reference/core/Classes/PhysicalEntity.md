# PhysicalEntity Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) Represents an entity influenced by physical effects in the world, such as gravity.

## Signature

```typescript
export declare class PhysicalEntity extends Entity
```

## Remarks

For more information, see the [Spring Physics](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/spring-physics) guide.

## Properties

| Property | Description |
| --- | --- |
| angularVelocity | The angular velocity of an object in world space. Signature angularVelocity: ReadableHorizonProperty<Vec3>; |
| gravityEnabled | Indicates whether a gravity effect is applied to an entity. True if a gravity effect is applied to the entity, false otherwise. Signature gravityEnabled: WritableHorizonProperty<boolean>; |
| locked | true if the physics system is blocked from interacting with the entity; false otherwise. Signature locked: HorizonProperty<boolean>; |
| velocity | The velocity of an object in world space, in meters per second. Signature velocity: ReadableHorizonProperty<Vec3>; |

## Methods

| Method | Description |
| --- | --- |
| applyForce(vector, mode) | Applies a force at a world space point. Adds to the current velocity. Signature applyForce(vector: Vec3, mode: PhysicsForceMode): void; Parameters vector: Vec3 The force vector. mode: PhysicsForceMode The amount of force to apply. Returns void |
| applyForceAtPosition(vector, position, mode) | Applies a force at a world space point using a specified position as the center of force. Signature applyForceAtPosition(vector: Vec3, position: Vec3, mode: PhysicsForceMode): void; Parameters vector: Vec3 The force vector. position: Vec3 The position of the center of the force vector. mode: PhysicsForceMode The amount of force to apply. Returns void |
| applyLocalForce(vector, mode) | Applies a local force at a world space point. Adds to the current velocity. Signature applyLocalForce(vector: Vec3, mode: PhysicsForceMode): void; Parameters vector: Vec3 The force vector. mode: PhysicsForceMode The amount of force to apply. Returns void |
| applyLocalTorque(vector) | Applies a local torque to the entity. Signature applyLocalTorque(vector: Vec3): void; Parameters vector: Vec3 The force vector. Returns void |
| applyTorque(vector) | Applies torque to the entity. Signature applyTorque(vector: Vec3): void; Parameters vector: Vec3 The force vector. Returns void |
| springPushTowardPosition(position, options) | Pushes a physical entity toward a target position as if it's attached to a spring. This should be called every frame and requires the physical entity's motion type to be interactive. Signature springPushTowardPosition(position: Vec3, options?: Partial<SpringOptions>): void; Parameters position: Vec3 The target position, or 'origin' of the spring options: Partial< SpringOptions >(Optional) Additional optional arguments to control the spring's behavior. Returns void Examples var physEnt = this.props.obj1.as(hz.PhysicalEntity); this.connectLocalBroadcastEvent(hz.World.onUpdate, (data: { deltaTime: number }) => { physEnt. |
| springSpinTowardRotation(rotation, options) | Spins a physical entity toward a target rotation as if it's attached to a spring. This should be called every frame and requires the physical entity's motion type to be interactive. Signature springSpinTowardRotation(rotation: Quaternion, options?: Partial<SpringOptions>): void; Parameters rotation: Quaternion The target quaternion rotation. options: Partial< SpringOptions >(Optional) Additional optional arguments to control the spring's behavior. Returns void Examples var physEnt = this.props.obj1.as(hz.PhysicalEntity); this.connectLocalBroadcastEvent(hz.World.onUpdate, (data: { deltaTime: number }) => { physEnt. |
| toString() | Gets a string representation of the entity. Signature toString(): string; Returns stringThe human readable string representation of this entity. |
| zeroVelocity() | Sets the velocity of an entity to zero. Signature zeroVelocity(): void; Returns void |

## Additional Links
- [Meta home](https://developers.meta.com/horizon-worlds/)
- [Login](https://developers.meta.com/login/?redirect_uri=https%3A%2F%2Fdevelopers.meta.com%2Fhorizon-worlds%2Freference%2F2.0.0%2Fcore_physicalentity%2F)