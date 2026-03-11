---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion
---

# [Quaternion Class](#quaternion-class)

Extends *[Comparable](../Interfaces/Comparable.md)<[Quaternion](Quaternion.md)>*

Represents a quaternion (a four-element vector defining the orientation of a 3D point in space).

## [Signature](#signature)

```ts
export declare class Quaternion implements Comparable<Quaternion> 
```

## [Constructors](#constructors)

### [(constructor)(x, y, z, w)](#constructorx-y-z-w)

Creates a quaternion.

**Signature**

```ts
constructor(x: number, y: number, z: number, w: number);
```

**Parameters**

x: number

The x component of the quaternion.

y: number

The y component of the quaternion.

z: number

The z component of the quaternion.

w: number

The w component of the quaternion.

## [Properties](#properties)

### [fromAxisAngle static](#fromaxisangle-static)

Creates a quaternion from an axis angle.

**Signature**

```ts
static fromAxisAngle: (axis: Vec3, angle: number) => Quaternion;
```

### [i static \[readonly\]](#i-static-readonly)

Creates a quaternion representing a rotation around the X-axis. Axis is not normalized.

**Signature**

```ts
static get i(): Quaternion;
```

### [j static \[readonly\]](#j-static-readonly)

Creates a quaternion representing a rotation around the Y-axis. The axis is not normalized.

**Signature**

```ts
static get j(): Quaternion;
```

### [k static \[readonly\]](#k-static-readonly)

Creates a quaternion representing a rotation around the Z-axis. The axis is not normalized.

**Signature**

```ts
static get k(): Quaternion;
```

### [mulVec3 static](#mulvec3-static)

Creates a copy of a 3D vector and then rotates the copy by a quaternion.

**Signature**

```ts
static mulVec3: (quat: Quaternion, vec: Vec3) => Vec3;
```

### [one static \[readonly\]](#one-static-readonly)

Creates a unit quaternion \[0,0,0,1].

**Signature**

```ts
static get one(): Quaternion;
```

### [toEuler](#toeuler)

Converts the quaternion to an Euler angle in degrees.

**Signature**

```ts
toEuler: (order?: EulerOrder) => Vec3;
```

### [w](#w)

The w component of the quaternion.

**Signature**

```ts
w: number;
```

### [x](#x)

The x component of the quaternion.

**Signature**

```ts
x: number;
```

### [y](#y)

The y component of the quaternion.

**Signature**

```ts
y: number;
```

### [z](#z)

The z component of the quaternion.

**Signature**

```ts
z: number;
```

### [zero static \[readonly\]](#zero-static-readonly)

Creates a zero element quaternion.

**Signature**

```ts
static get zero(): Quaternion;
```

## [Methods](#methods)

### [angle()](#angle)

Gets the angle, in radians, of rotation represented by the quaternion.

**Signature**

```ts
angle(): number;
```

**Returns**

number

The angle in radians.

### [axis()](#axis)

Gets the axis of the rotation represented by the quaternion.

**Signature**

```ts
axis(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

The vector that represents the axis.

### [clone()](#clone)

Creates a copy of the quaternion.

**Signature**

```ts
clone(): Quaternion;
```

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [conjugate()](#conjugate)

Creates a quaternion that is the conjugation of a quaternion.

**Signature**

```ts
static conjugate(quat: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The quaternion to conjugate.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [conjugate(quat, outQuat) static](#conjugatequat-outquat-static)

Creates a quaternion that is the conjugation of a quaternion.

**Signature**

```ts
static conjugate(quat: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The quaternion to conjugate.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [conjugateInPlace()](#conjugateinplace)

Updates the current quaternion with its conjugated values.

**Signature**

```ts
conjugateInPlace(): this;
```

**Returns**

this

The updated quaterion.

### [copy(quat)](#copyquat)

Updates the values of the quaternion with the values of another quaterium.

**Signature**

```ts
copy(quat: Quaternion): this;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The quaternion to copy.

**Returns**

this

The updated quaternion.

### [equals(quat)](#equalsquat)

Determines whether two quaternions are equal. A quaternion is equal to another quaternion if its components are equal or if the negation of its components are equal.

**Signature**

```ts
static equals(quatA: Quaternion, quatB: Quaternion): boolean;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to compare.

quatB: [Quaternion](Quaternion.md)

The second quaternion to compare.

**Returns**

boolean

true if the quaternions are equal; otherwise, false.

### [equals(quatA, quatB) static](#equalsquata-quatb-static)

Determines whether two quaternions are equal. A quaternion is equal to another quaternion if its components are equal or if the negation of its components are equal.

**Signature**

```ts
static equals(quatA: Quaternion, quatB: Quaternion): boolean;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to compare.

quatB: [Quaternion](Quaternion.md)

The second quaternion to compare.

**Returns**

boolean

true if the quaternions are equal; otherwise, false.

### [equalsApprox(quat, epsilon)](#equalsapproxquat-epsilon)

Compares the approximate equality between two quaternions. A quaternion is equal to another quaternion if its components are equal or if the negation of its components are equal.

**Signature**

```ts
static equalsApprox(quatA: Quaternion, quatB: Quaternion, epsilon?: number): boolean;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to compare.

quatB: [Quaternion](Quaternion.md)

The second quaternion to compare.

epsilon: number

*(Optional)* The maxium difference in values to consider approximately equal.

**Returns**

boolean

true if the quaternions are approximately equal; otherwise, false.

### [equalsApprox(quatA, quatB, epsilon) static](#equalsapproxquata-quatb-epsilon-static)

Compares the approximate equality between two quaternions. A quaternion is equal to another quaternion if its components are equal or if the negation of its components are equal.

**Signature**

```ts
static equalsApprox(quatA: Quaternion, quatB: Quaternion, epsilon?: number): boolean;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to compare.

quatB: [Quaternion](Quaternion.md)

The second quaternion to compare.

epsilon: number

*(Optional)* The maxium difference in values to consider approximately equal.

**Returns**

boolean

true if the quaternions are approximately equal; otherwise, false.

### [fromEuler(euler, order) static](#fromeulereuler-order-static)

Creates a quaternion from a Euler angle.

**Signature**

```ts
static fromEuler(euler: Vec3, order?: EulerOrder): Quaternion;
```

**Parameters**

euler: [Vec3](Vec3.md)

The Euler angle in degrees.

order: [EulerOrder](../Enumerations/EulerOrder.md)

*(Optional)* The order of the Euler angle. The default order is XYZ.

**Returns**

[Quaternion](Quaternion.md)

### [fromVec3(vec) static](#fromvec3vec-static)

Creates a quaternion from a 3D vector, where w is 0.

**Signature**

```ts
static fromVec3(vec: Vec3): Quaternion;
```

**Parameters**

vec: [Vec3](Vec3.md)

The 3D vector to create the quaternion from.

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [inverse()](#inverse)

Gets a new quaternion that is the inverse of the specified quaternion.

**Signature**

```ts
static inverse(quat: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The specified quaternion.

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [inverse(quat) static](#inversequat-static)

Gets a new quaternion that is the inverse of the specified quaternion.

**Signature**

```ts
static inverse(quat: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The specified quaternion.

**Returns**

[Quaternion](Quaternion.md)

The new quaternion.

### [inverseInPlace()](#inverseinplace)

Updates the current quaternion with its inverse values.

**Signature**

```ts
inverseInPlace(): this;
```

**Returns**

this

The updated quaternion.

### [lookRotation(forward, up, outQuat) static](#lookrotationforward-up-outquat-static)

Creates a quaternion using forward and up 3D vectors.

**Signature**

```ts
static lookRotation(forward: Vec3, up?: Vec3, outQuat?: Quaternion): Quaternion;
```

**Parameters**

forward: [Vec3](Vec3.md)

The forward direction of rotation; must be orthogonal to up.

up: [Vec3](Vec3.md)

*(Optional)* The up direction of rotation; must be orthogonal to forward. The default value is Vec3.up.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If not supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

The quaternion aimed at the provided 3D vectors.

### [mul(quat)](#mulquat)

Gets a quaternion that is the product of two quaternions.

**Signature**

```ts
static mul(quatA: Quaternion, quatB: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to multiply.

quatB: [Quaternion](Quaternion.md)

The second uaternion to multiply.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

A new quaternion.

### [mul(quatA, quatB, outQuat) static](#mulquata-quatb-outquat-static)

Gets a quaternion that is the product of two quaternions.

**Signature**

```ts
static mul(quatA: Quaternion, quatB: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quatA: [Quaternion](Quaternion.md)

The first quaternion to multiply.

quatB: [Quaternion](Quaternion.md)

The second uaternion to multiply.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

A new quaternion.

### [mulInPlace(quat)](#mulinplacequat)

Updates the current quaternion by multiplying it by another quaternion.

**Signature**

```ts
mulInPlace(quat: Quaternion): this;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The quaternion to use as the multiplier.

**Returns**

this

The current quaternion.

### [normalize()](#normalize)

Gets a new quaternion that is the normalized version of the specified quaternion.

**Signature**

```ts
static normalize(quat: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The specified quaternion.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

The new normalized quaternion.

### [normalize(quat, outQuat) static](#normalizequat-outquat-static)

Gets a new quaternion that is the normalized version of the specified quaternion.

**Signature**

```ts
static normalize(quat: Quaternion, outQuat?: Quaternion): Quaternion;
```

**Parameters**

quat: [Quaternion](Quaternion.md)

The specified quaternion.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

The new normalized quaternion.

### [normalizeInPlace()](#normalizeinplace)

Updates the current quaterion with its normalized values.

**Signature**

```ts
normalizeInPlace(): this;
```

**Returns**

this

The updated quaternion

### [slerp(left, right, amount, outQuat) static](#slerpleft-right-amount-outquat-static)

Peforms slerp (spherical linear interpolation) between two quaternions.

**Signature**

```ts
static slerp(left: Quaternion, right: Quaternion, amount: number, outQuat?: Quaternion): Quaternion;
```

**Parameters**

left: [Quaternion](Quaternion.md)

The leftmost quaternion.

right: [Quaternion](Quaternion.md)

The rightmost quaternion.

amount: number

Defines the gradient to use for interpolation, clamped 0 to 1.

outQuat: [Quaternion](Quaternion.md)

*(Optional)* The quaternion to perform the operation on. If this isn't supplied, a new quaternion is created and returned.

**Returns**

[Quaternion](Quaternion.md)

A new interpolated quaternion.

### [toString()](#tostring)

Gets a human-readable represention of the quaternion.

**Signature**

```ts
toString(): string;
```

**Returns**

string

a string representation of the quaternion.

