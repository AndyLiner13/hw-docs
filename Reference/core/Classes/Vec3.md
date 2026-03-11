---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3
---

# [Vec3 Class](#vec3-class)

Extends *[Comparable](../Interfaces/Comparable.md)<[Vec3](Vec3.md)>*

Represents a 3D vector. This is the main class for creating and updating 3D points and directions in Meta Horizon Worlds.

## [Signature](#signature)

```ts
export declare class Vec3 implements Comparable<Vec3> 
```

## [Examples](#examples)

In this example, an [entity](Entity.md) is moved to a new location in a world by updating the properties of a `Vec3` object.

```ts
entity.position.set(new Vec3(10, 20, 52));
```

## [Remarks](#remarks)

For information about rotating 3D vectors, see the [Quaternion](Quaternion.md) class.

## [Constructors](#constructors)

### [(constructor)(x, y, z)](#constructorx-y-z)

Creates a 3D vector.

**Signature**

```ts
constructor(x: number, y: number, z: number);
```

**Parameters**

x: number

The magnitude of the 3D vector along the X axis.

y: number

The magnitude of the 3D vector along the Y axis.

z: number

The magnitude of the 3D vector along the Z axis.

## [Properties](#properties)

### [backward static \[readonly\]](#backward-static-readonly)

A backward 3D vector: Vec3(0, 0, -1).

**Signature**

```ts
static get backward(): Vec3;
```

### [down static \[readonly\]](#down-static-readonly)

A down 3D vector: Vec3(0, -1, 0).

**Signature**

```ts
static get down(): Vec3;
```

### [forward static \[readonly\]](#forward-static-readonly)

A forward 3D vector: Vec3(0, 0, 1).

**Signature**

```ts
static get forward(): Vec3;
```

### [left static \[readonly\]](#left-static-readonly)

A left 3D vector: Vec3(-1, 0, 0).

**Signature**

```ts
static get left(): Vec3;
```

### [one static \[readonly\]](#one-static-readonly)

A one 3D vector: Vec3(1, 1, 1).

**Signature**

```ts
static get one(): Vec3;
```

### [right static \[readonly\]](#right-static-readonly)

A right 3D vector: Vec3(1, 0, 0).

**Signature**

```ts
static get right(): Vec3;
```

### [up static \[readonly\]](#up-static-readonly)

An up 3D vector: Vec3(0, 1, 0).

**Signature**

```ts
static get up(): Vec3;
```

### [x](#x)

The magnitude of the 3D vector along the X axis.

**Signature**

```ts
x: number;
```

### [y](#y)

The magnitude of the 3D vector along the Y axis.

**Signature**

```ts
y: number;
```

### [z](#z)

The magnitude of the 3D vector along the Z axis.

**Signature**

```ts
z: number;
```

### [zero static \[readonly\]](#zero-static-readonly)

A zero 3D vector: Vec3(0, 0, 0).

**Signature**

```ts
static get zero(): Vec3;
```

## [Methods](#methods)

### [add(vec)](#addvec)

Adds two 3D vectors and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static add(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to add.

vecB: [Vec3](Vec3.md)

The second 3D vector to add.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

The new 3D vector that is the sum, if `outVec` is not provided.

### [add(vecA, vecB, outVec) static](#addveca-vecb-outvec-static)

Adds two 3D vectors and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static add(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to add.

vecB: [Vec3](Vec3.md)

The second 3D vector to add.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

The new 3D vector that is the sum, if `outVec` is not provided.

### [addInPlace(vec)](#addinplacevec)

Adds a 3D vector to the current 3D vector, modifying the original 3D vector.

**Signature**

```ts
addInPlace(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to add.

**Returns**

this

### [clone()](#clone)

Clones a 3D vector's values into a mutable Vec3.

**Signature**

```ts
clone(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

A mutable Vec3 with the same x,y,z values.

### [componentDiv(vec)](#componentdivvec)

Divides the current 3D vector's components by another 3D vector's components and returns the results.

**Signature**

```ts
componentDiv(vec: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to use as the divisor.

**Returns**

[Vec3](Vec3.md)

A new 3D vector.

**Remarks**

The division is performed as follows (a.x/b.x, a.y/b.y, a.z/b.z).

### [componentDivInPlace(vec)](#componentdivinplacevec)

Divides the current 3D Vector by another 3D vector, modifying the original 3D vector.

**Signature**

```ts
componentDivInPlace(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to divide by.

**Returns**

this

### [componentMul(vec)](#componentmulvec)

Creates a 3D vector by multiplying the current 3D vector's components by another 3D vector's components.

**Signature**

```ts
componentMul(vec: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The additional 3D vector to multiply.

**Returns**

[Vec3](Vec3.md)

A new 3D vector.

**Remarks**

The vector components are multiplied as follows (a.x\\\*b.x, a.y\\\*b.y, a.z\\\*b.z).

### [componentMulInPlace(vec)](#componentmulinplacevec)

Muliplies the current 3D vector by another 3D vector, modifying the original 3D vector.

**Signature**

```ts
componentMulInPlace(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to multiply.

**Returns**

this

### [copy(vec)](#copyvec)

Creates a copy of the specified 3D vector with the same x, y, and z values.

**Signature**

```ts
copy(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to copy.

**Returns**

this

A new 3D vector.

### [cross(vec)](#crossvec)

Gets the cross product of two 3D vectors and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static cross(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The left side 3D vector of the cross product.

vecB: [Vec3](Vec3.md)

The right side 3D vector of the cross product.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [cross(vecA, vecB, outVec) static](#crossveca-vecb-outvec-static)

Gets the cross product of two 3D vectors and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static cross(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The left side 3D vector of the cross product.

vecB: [Vec3](Vec3.md)

The right side 3D vector of the cross product.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [crossInPlace(vec)](#crossinplacevec)

Gets the cross product of the current 3D vector and another 3D vector, and modifies the current vector with the result.

**Signature**

```ts
crossInPlace(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The additional 3D vector to compute the cross product with.

**Returns**

this

### [distance(vec)](#distancevec)

Gets the distance between the current 3D vector and another 3D vector.

**Signature**

```ts
distance(vec: Vec3): number;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to compare.

**Returns**

number

The distance between the 3D vectors.

### [distanceSquared(vec)](#distancesquaredvec)

Gets the squared distance between the current 3D vector and another 3D vector.

**Signature**

```ts
distanceSquared(vec: Vec3): number;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to compare.

**Returns**

number

The squared distance between the 3D vectors.

### [div(scalar)](#divscalar)

Performs a scalar division on a 3D vector and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static div(vec: Vec3, scalar: number, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to scale.

scalar: number

The value to scale the 3D vector by.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [div(vec, scalar, outVec) static](#divvec-scalar-outvec-static)

Performs a scalar division on a 3D vector and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static div(vec: Vec3, scalar: number, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to scale.

scalar: number

The value to scale the 3D vector by.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [divInPlace(scalar)](#divinplacescalar)

Divides the current 3D vector by a scalar value, modifying the original 3D vector.

**Signature**

```ts
divInPlace(scalar: number): this;
```

**Parameters**

scalar: number

The scalar value to divide by.

**Returns**

this

### [dot(vec)](#dotvec)

Gets the dot product of the two 3D vectors.

**Signature**

```ts
static dot(vecA: Vec3, vecB: Vec3): number;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector of the dot product.

vecB: [Vec3](Vec3.md)

The second 3D vector of the dot product.

**Returns**

number

The dot product of the 3D vectors.

### [dot(vecA, vecB) static](#dotveca-vecb-static)

Gets the dot product of the two 3D vectors.

**Signature**

```ts
static dot(vecA: Vec3, vecB: Vec3): number;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector of the dot product.

vecB: [Vec3](Vec3.md)

The second 3D vector of the dot product.

**Returns**

number

The dot product of the 3D vectors.

### [equals(vec)](#equalsvec)

Determines whether two 3D vectors are equal.

**Signature**

```ts
static equals(vecA: Vec3, vecB: Vec3): boolean;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to compare.

vecB: [Vec3](Vec3.md)

The second 3D vector to compare.

**Returns**

boolean

`true` if the 3D vectors are equal; `false` otherwise.

**Remarks**

3D vectors are equal if they have the same x, y, and z components.To determine whether the vectors are within a given range of each other, see the method.

### [equals(vecA, vecB) static](#equalsveca-vecb-static)

Determines whether two 3D vectors are equal.

**Signature**

```ts
static equals(vecA: Vec3, vecB: Vec3): boolean;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to compare.

vecB: [Vec3](Vec3.md)

The second 3D vector to compare.

**Returns**

boolean

`true` if the 3D vectors are equal; `false` otherwise.

**Remarks**

3D vectors are equal if they have the same x, y, and z components.To determine whether the vectors are within a given range of each other, see the method.

### [equalsApprox(vec, epsilon)](#equalsapproxvec-epsilon)

Determines whether two 3D vectors are relatively equal.

**Signature**

```ts
static equalsApprox(vecA: Vec3, vecB: Vec3, epsilon?: number): boolean;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to compare.

vecB: [Vec3](Vec3.md)

The second 3D vector to compare.

epsilon: number

*(Optional)* The maxium difference to consider equal.

**Returns**

boolean

`true` if the 3D vectors are relatively equal; `false` otherwise.

**Remarks**

The vectors are relatively equal if the difference between their x, y, and z components doesn't exceed the value provided in the epsilon parameter.To determine whether the vectors are equal, see .

### [equalsApprox(vecA, vecB, epsilon) static](#equalsapproxveca-vecb-epsilon-static)

Determines whether two 3D vectors are relatively equal.

**Signature**

```ts
static equalsApprox(vecA: Vec3, vecB: Vec3, epsilon?: number): boolean;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first 3D vector to compare.

vecB: [Vec3](Vec3.md)

The second 3D vector to compare.

epsilon: number

*(Optional)* The maxium difference to consider equal.

**Returns**

boolean

`true` if the 3D vectors are relatively equal; `false` otherwise.

**Remarks**

The vectors are relatively equal if the difference between their x, y, and z components doesn't exceed the value provided in the epsilon parameter.To determine whether the vectors are equal, see .

### [lerp(vecA, vecB, amount, outVec) static](#lerpveca-vecb-amount-outvec-static)

Performs a lerp (linear interpolation) between two 3D vectors.

**Signature**

```ts
static lerp(vecA: Vec3, vecB: Vec3, amount: number, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The first vec3 to lerp.

vecB: [Vec3](Vec3.md)

The second vec3 to lerp.

amount: number

The gradient to use for interpolation (clamped 0 to 1)

outVec: [Vec3](Vec3.md)

*(Optional)* The new 3D vector as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not supplied.

### [magnitude()](#magnitude)

Gets the magnitude of a 3D vector.

**Signature**

```ts
magnitude(): number;
```

**Returns**

number

The magnitude of the 3D vector.

**Remarks**

The magnitude of a 3D vector is its length.

### [magnitudeSquared()](#magnitudesquared)

Gets the squared magnitude of a 3D vector.

**Signature**

```ts
magnitudeSquared(): number;
```

**Returns**

number

### [mul(scalar)](#mulscalar)

Performs a scalar multiplication on a 3D vector and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static mul(vec: Vec3, scalar: number, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to scale.

scalar: number

The value to scale the 3D vector by.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [mul(vec, scalar, outVec) static](#mulvec-scalar-outvec-static)

Performs a scalar multiplication on a 3D vector and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static mul(vec: Vec3, scalar: number, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to scale.

scalar: number

The value to scale the 3D vector by.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [mulInPlace(scalar)](#mulinplacescalar)

Multiplies the current 3D vector by a scalar value, modifying the original 3D vector.

**Signature**

```ts
mulInPlace(scalar: number): this;
```

**Parameters**

scalar: number

The value to scale the 3D vector by.

**Returns**

this

### [normalize()](#normalize)

Normalizes a 3D vector (changes the magnitude to 1) and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static normalize(vec: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to normalize.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [normalize(vec, outVec) static](#normalizevec-outvec-static)

Normalizes a 3D vector (changes the magnitude to 1) and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static normalize(vec: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to normalize.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [normalizeInPlace()](#normalizeinplace)

Normalizes the 3D vector (changes its magnitude to 1).

**Signature**

```ts
normalizeInPlace(): this;
```

**Returns**

this

### [reflect(normal)](#reflectnormal)

Reflects the current 3D vector off a surface defined by a normal and returns the result.

**Signature**

```ts
reflect(normal: Vec3): Vec3;
```

**Parameters**

normal: [Vec3](Vec3.md)

The normal vector that defines the reflecting surface. This value should be normalized.

**Returns**

[Vec3](Vec3.md)

A new 3D vector that defines the reflection.

### [reflectInPlace(normal)](#reflectinplacenormal)

Reflects the current 3D vector off a surface defined by a normal and modifies the orginal vector with the result.

**Signature**

```ts
reflectInPlace(normal: Vec3): this;
```

**Parameters**

normal: [Vec3](Vec3.md)

The normal vector that defines the reflecting surface. This value should be normalized.

**Returns**

this

### [sub(vec)](#subvec)

Subtracts a 3D vector from another and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static sub(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The 3D vector to substract from.

vecB: [Vec3](Vec3.md)

The 3D vector to subtract.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [sub(vecA, vecB, outVec) static](#subveca-vecb-outvec-static)

Subtracts a 3D vector from another and returns the result in a new or an existing 3D vector.

**Signature**

```ts
static sub(vecA: Vec3, vecB: Vec3, outVec?: Vec3): Vec3;
```

**Parameters**

vecA: [Vec3](Vec3.md)

The 3D vector to substract from.

vecB: [Vec3](Vec3.md)

The 3D vector to subtract.

outVec: [Vec3](Vec3.md)

*(Optional)* The resulting 3D vector. If not provided, a new 3D vector is created and returned.

**Returns**

[Vec3](Vec3.md)

A new 3D vector, if `outVec` is not provided.

### [subInPlace(vec)](#subinplacevec)

Subtracts a 3D vector from the current 3D vector, modifying the original 3D vector.

**Signature**

```ts
subInPlace(vec: Vec3): this;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to subtract.

**Returns**

this

### [toString()](#tostring)

Gets a string representation of the x, y, and z values for the 3D vector.

**Signature**

```ts
toString(): string;
```

**Returns**

string

The x, y, and z values.

