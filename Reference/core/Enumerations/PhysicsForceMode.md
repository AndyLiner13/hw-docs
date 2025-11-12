Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_physicsforcemode

API reference

# PhysicsForceMode Enum

Indicates how physics is applied to an object in the world.

## Signature

```
export declare enum PhysicsForceMode
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Force | `0` | Add a continuous force to an object, using its mass. The acceleration = `Force * Time ^ 2 / Mass`. |
| Impulse | `1` | Add an instant force impulse to an object, using its mass. The acceleration = `Force * Time / Mass`. |
| VelocityChange | `2` | Add an instant velocity change to an object, ignoring its mass. The acceleration = `Force * Time`. |