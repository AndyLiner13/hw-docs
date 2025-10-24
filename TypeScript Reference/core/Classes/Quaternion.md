# Quaternion class

Represents a quaternion (a four-element vector defining the orientation of a 3D point in space).

## Signature

```typescript
export declare class Quaternion implements Comparable<Quaternion>
```

## Constructor

```typescript
constructor(x: number, y: number, z: number, w: number)
```

Creates a quaternion with the specified x, y, z, and w components.

## Properties

| Property | Description |
|----------|-------------|
| `x` | The x component of the quaternion. |
| `y` | The y component of the quaternion. |
| `z` | The z component of the quaternion. |
| `w` | The w component of the quaternion. |

### Static Properties

| Property | Description |
|----------|-------------|
| `zero` | Creates a zero element quaternion. |
| `one` | Creates a unit quaternion [0,0,0,1]. |
| `i` | Creates a quaternion representing rotation around the X-axis. |
| `j` | Creates a quaternion representing rotation around the Y-axis. |
| `k` | Creates a quaternion representing rotation around the Z-axis. |
| `fromAxisAngle` | Creates a quaternion from an axis and angle. |
| `mulVec3` | Rotates a 3D vector by a quaternion. |
| `toEuler` | Converts the quaternion to Euler angles in degrees. |

## Key Methods

| Method | Description |
|--------|-------------|
| `angle()` | Gets the angle, in radians, of rotation represented by the quaternion. |
| `axis()` | Gets the axis of the rotation represented by the quaternion. |
| `clone()` | Creates a copy of the quaternion. |
| `conjugate(quat, outQuat?)` (static) | Creates the conjugation of a quaternion. |
| `conjugateInPlace()` | Updates the current quaternion with its conjugated values. |
| `copy(quat)` | Updates the values with those of another quaternion. |
| `equals(quatA, quatB)` (static) | Determines whether two quaternions are equal. |
| `equalsApprox(quatA, quatB, epsilon?)` (static) | Compares approximate equality between two quaternions. |
| `fromEuler(euler, order?)` (static) | Creates a quaternion from Euler angles. |
| `fromVec3(vec)` (static) | Creates a quaternion from a 3D vector, where w is 0. |
| `inverse(quat)` (static) | Gets the inverse of the specified quaternion. |
| `inverseInPlace()` | Updates the current quaternion with its inverse values. |
| `lookRotation(forward, up?, outQuat?)` (static) | Creates a quaternion using forward and up vectors. |
| `mul(quatA, quatB, outQuat?)` (static) | Gets the product of two quaternions. |
| `mulInPlace(quat)` | Updates the current quaternion by multiplying with another. |
| `normalize(quat, outQuat?)` (static) | Gets the normalized version of a quaternion. |
| `normalizeInPlace()` | Updates the current quaternion with its normalized values. |
| `slerp(left, right, amount, outQuat?)` (static) | Performs spherical linear interpolation between quaternions. |
| `toString()` | Gets a human-readable representation of the quaternion. |

## Examples

```typescript
// Create rotation from Euler angles
const rotation = Quaternion.fromEuler(new Vec3(45, 90, 0));

// Rotate a vector
const rotatedVector = Quaternion.mulVec3(rotation, Vec3.forward);

// Look at target
const lookRotation = Quaternion.lookRotation(targetDirection, Vec3.up);
```

## References

[Comparable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable), [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3), [EulerOrder](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_eulerorder)

## Remarks

Quaternions are used for representing rotations in 3D space. They provide advantages over Euler angles including no gimbal lock and smooth interpolation. Use this class for all rotation operations in Meta Horizon Worlds.