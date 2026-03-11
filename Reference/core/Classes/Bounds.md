---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_bounds
---

# [Bounds Class](#bounds-class)

Represents an axis aligned bounding box with a center position, and extents which are the distance from the center to the corners

## [Signature](#signature)

```ts
export declare class Bounds 
```

## [Constructors](#constructors)

### [(constructor)(center, extents)](#constructorcenter-extents)

Creates a bounds object.

**Signature**

```ts
constructor(center: Vec3, extents: Vec3);
```

**Parameters**

center: [Vec3](Vec3.md)

The center of the bounds.

extents: [Vec3](Vec3.md)

1/2 the size of the bounds.

## [Properties](#properties)

### [center](#center)

The position of the bounds.

**Signature**

```ts
center: Vec3;
```

### [extents](#extents)

The distance from center to min/max of the bounds.

**Signature**

```ts
extents: Vec3;
```

## [Methods](#methods)

### [max()](#max)

Get the position of the maximum corner of the bounds

**Signature**

```ts
max(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

the maximum point of the bounds

### [min()](#min)

Get the position of the minimum corner of the bounds

**Signature**

```ts
min(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

the minimum point of the bounds

### [size()](#size)

Get the size of the box, which is twice the extents

**Signature**

```ts
size(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

The size of the bounding box

