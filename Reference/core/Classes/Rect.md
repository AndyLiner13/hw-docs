---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_rect
---

# [Rect Class](#rect-class)

Represents a 2D rectangle

## [Signature](#signature)

```ts
export declare class Rect 
```

## [Constructors](#constructors)

### [(constructor)(x, y, width, height)](#constructorx-y-width-height)

Creates a Rectangle.

**Signature**

```ts
constructor(x: number, y: number, width: number, height: number);
```

**Parameters**

x: number

The starting point of the rectangle along the X axis.

y: number

The starting point of the rectangle along the Y axis

width: number

The width of the rectangle.

height: number

The height of the rectangle.

## [Properties](#properties)

### [height](#height)

The height of the rectangle

**Signature**

```ts
height: number;
```

### [width](#width)

The width of the rectangle

**Signature**

```ts
width: number;
```

### [x](#x)

The starting point of the rectangle along the X axis.

**Signature**

```ts
x: number;
```

### [y](#y)

The starting point of the rectangle along the Y axis

**Signature**

```ts
y: number;
```

## [Methods](#methods)

### [clone()](#clone)

Clones a Rectangle's values into a mutable Rect.

**Signature**

```ts
clone(): Rect;
```

**Returns**

[Rect](Rect.md)

A mutable Rect with the same x,y,width,height values.

### [copy(rect)](#copyrect)

Copies the specified Rect (x, y, width, height) into this.

**Signature**

```ts
copy(rect: Rect): this;
```

**Parameters**

rect: [Rect](Rect.md)

The Rectangle to copy from.

**Returns**

this

A reference to this after the values have been copied.

### [scaleBy(width, height)](#scalebywidth-height)

Scales the Rectangle by the provided dimensions.

**Signature**

```ts
scaleBy(width: number, height: number): this;
```

**Parameters**

width: number

the width to scale this rectangular by

height: number

the height to scale this rectangular by

**Returns**

this

### [toString()](#tostring)

Gets a string representation of the x, y, width and height values for the Rectangle.

**Signature**

```ts
toString(): string;
```

**Returns**

string

The string representation of the Rectangle.

