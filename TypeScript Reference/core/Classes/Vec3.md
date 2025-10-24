# Vec3 class

Represents a 3D vector. This is the main class for creating and updating 3D points and directions in Meta Horizon Worlds.

## Signature

```typescript
export declare class Vec3 implements Comparable<Vec3>
```

## Constructor

```typescript
constructor(x: number, y: number, z: number)
```

Creates a 3D vector with the specified x, y, and z components.

## Properties

| Property | Description |
|----------|-------------|
| `x` | The magnitude of the 3D vector along the X axis. |
| `y` | The magnitude of the 3D vector along the Y axis. |
| `z` | The magnitude of the 3D vector along the Z axis. |

### Static Properties

| Property | Description |
|----------|-------------|
| `zero` | A zero 3D vector: Vec3(0, 0, 0) |
| `one` | A one 3D vector: Vec3(1, 1, 1) |
| `up` | An up 3D vector: Vec3(0, 1, 0) |
| `down` | A down 3D vector: Vec3(0, -1, 0) |
| `left` | A left 3D vector: Vec3(-1, 0, 0) |
| `right` | A right 3D vector: Vec3(1, 0, 0) |
| `forward` | A forward 3D vector: Vec3(0, 0, 1) |
| `backward` | A backward 3D vector: Vec3(0, 0, -1) |

## Key Methods

| Method | Description |
|--------|-------------|
| `add(vecA, vecB, outVec?)` (static) | Adds two 3D vectors and returns the result. |
| `addInPlace(vec)` | Adds a 3D vector to the current vector, modifying the original. |
| `sub(vecA, vecB, outVec?)` (static) | Subtracts one 3D vector from another. |
| `subInPlace(vec)` | Subtracts a vector from the current vector, modifying the original. |
| `mul(vec, scalar, outVec?)` (static) | Performs scalar multiplication on a 3D vector. |
| `mulInPlace(scalar)` | Multiplies the current vector by a scalar, modifying the original. |
| `div(vec, scalar, outVec?)` (static) | Performs scalar division on a 3D vector. |
| `divInPlace(scalar)` | Divides the current vector by a scalar, modifying the original. |
| `dot(vecA, vecB)` (static) | Gets the dot product of two 3D vectors. |
| `cross(vecA, vecB, outVec?)` (static) | Gets the cross product of two 3D vectors. |
| `crossInPlace(vec)` | Gets the cross product with another vector, modifying the original. |
| `distance(vec)` | Gets the distance between the current vector and another vector. |
| `distanceSquared(vec)` | Gets the squared distance between vectors. |
| `magnitude()` | Gets the magnitude (length) of the vector. |
| `magnitudeSquared()` | Gets the squared magnitude of the vector. |
| `normalize(vec, outVec?)` (static) | Normalizes a 3D vector (changes magnitude to 1). |
| `normalizeInPlace()` | Normalizes the current vector, modifying the original. |
| `lerp(vecA, vecB, amount, outVec?)` (static) | Performs linear interpolation between two vectors. |
| `reflect(normal)` | Reflects the vector off a surface defined by a normal. |
| `reflectInPlace(normal)` | Reflects the vector in place, modifying the original. |
| `componentMul(vec)` | Multiplies vector components individually. |
| `componentDiv(vec)` | Divides vector components individually. |
| `equals(vecA, vecB)` (static) | Determines whether two vectors are equal. |
| `equalsApprox(vecA, vecB, epsilon?)` (static) | Determines whether two vectors are approximately equal. |
| `clone()` | Clones the vector's values into a new mutable Vec3. |
| `copy(vec)` | Copies values from another vector. |
| `toString()` | Gets a string representation of the x, y, and z values. |

## Examples

```typescript
// Create and move an entity to a new location
entity.position.set(new Vec3(10, 20, 52));

// Vector addition
const result = Vec3.add(Vec3.up, Vec3.forward);

// Distance calculation
const distance = playerPosition.distance(targetPosition);
```

## References

[Comparable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable), [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion)

## Remarks

The Vec3 class provides comprehensive 3D vector mathematics essential for 3D world manipulation. For information about rotating 3D vectors, see the [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion) class.