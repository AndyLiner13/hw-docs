# PhysicsForceMode Enum

Indicates how physics is applied to an object in the world.

## Signature

```typescript
export declare enum PhysicsForceMode
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Force | 0 | Add a continuous force to an object, using its mass. The acceleration = Force * Time ^ 2 / Mass. |
| Impulse | 1 | Add an instant force impulse to an object, using its mass. The acceleration = Force * Time / Mass. |
| VelocityChange | 2 | Add an instant velocity change to an object, ignoring its mass. The acceleration = Force * Time. |

## Examples

### Using Different Physics Force Modes

```typescript
// Apply continuous force (affected by mass)
physicsObject.addForce(new Vec3(10, 0, 0), PhysicsForceMode.Force);

// Apply instant impulse (affected by mass)
physicsObject.addForce(new Vec3(0, 20, 0), PhysicsForceMode.Impulse);

// Apply instant velocity change (ignores mass)
physicsObject.addForce(new Vec3(5, 0, 0), PhysicsForceMode.VelocityChange);

// Function to apply appropriate force based on situation
function applyContextualForce(object: PhysicsObject, force: Vec3, instant: boolean, ignoreMass: boolean) {
    if (instant && ignoreMass) {
        object.addForce(force, PhysicsForceMode.VelocityChange);
    } else if (instant) {
        object.addForce(force, PhysicsForceMode.Impulse);
    } else {
        object.addForce(force, PhysicsForceMode.Force);
    }
}
```