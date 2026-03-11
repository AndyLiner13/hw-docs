---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color
---

# [Color Class](#color-class)

Extends *[Comparable](../Interfaces/Comparable.md)<[Color](Color.md)>*

Represents an RGB color.

## [Signature](#signature)

```ts
export declare class Color implements Comparable<Color> 
```

## [Constructors](#constructors)

### [(constructor)(r, g, b)](#constructorr-g-b)

Creates an RGB color object.

**Signature**

```ts
constructor(r: number, g: number, b: number);
```

**Parameters**

r: number

The red component of the RGB color as a float from 0 to 1.

g: number

The green component of the RGB color as a float from 0 to 1.

b: number

The blue component of the RGB color as a float from 0 to 1.

## [Properties](#properties)

### [b](#b)

The blue component of the RGB color.

**Signature**

```ts
b: number;
```

### [black static \[readonly\]](#black-static-readonly)

Creates a black RGB color.

**Signature**

```ts
static get black(): Color;
```

### [blue static \[readonly\]](#blue-static-readonly)

Creates a blue RGB color.

**Signature**

```ts
static get blue(): Color;
```

### [g](#g)

The green component of the RGB color.

**Signature**

```ts
g: number;
```

### [green static \[readonly\]](#green-static-readonly)

Creates a green RGB color.

**Signature**

```ts
static get green(): Color;
```

### [r](#r)

The red component of the RGB color.

**Signature**

```ts
r: number;
```

### [red static \[readonly\]](#red-static-readonly)

Creates a red RGB color.

**Signature**

```ts
static get red(): Color;
```

### [white static \[readonly\]](#white-static-readonly)

Creates a white RGB color.

**Signature**

```ts
static get white(): Color;
```

## [Methods](#methods)

### [add(color)](#addcolor)

Adds two RGB colors, returning a new RGB color.

**Signature**

```ts
static add(colorA: Color, colorB: Color, outColor?: Color): Color;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to add.

colorB: [Color](Color.md)

The second color to add.

outColor: [Color](Color.md)

*(Optional)* The RGB color as a result of the operation. If not supplied, a new RGB color is created and returned.

**Returns**

[Color](Color.md)

A new RGB color, if `outColor` is not supplied.

### [add(colorA, colorB, outColor) static](#addcolora-colorb-outcolor-static)

Adds two RGB colors, returning a new RGB color.

**Signature**

```ts
static add(colorA: Color, colorB: Color, outColor?: Color): Color;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to add.

colorB: [Color](Color.md)

The second color to add.

outColor: [Color](Color.md)

*(Optional)* The RGB color as a result of the operation. If not supplied, a new RGB color is created and returned.

**Returns**

[Color](Color.md)

A new RGB color, if `outColor` is not supplied.

### [addInPlace(color)](#addinplacecolor)

Adds an RGB color to the current RGB color, modifying the original color in place.

**Signature**

```ts
addInPlace(color: Color): this;
```

**Parameters**

color: [Color](Color.md)

The RGB color to add.

**Returns**

this

### [clone()](#clone)

Clones the current RGB color's values into a mutable RGB color object.

**Signature**

```ts
clone(): Color;
```

**Returns**

[Color](Color.md)

a mutable RGB color with the same r, g, b values.

### [componentMul(color)](#componentmulcolor)

Creates an RGB color by multiplying each component of the current RGB color with the input RGB color's component.

**Signature**

```ts
componentMul(color: Color): Color;
```

**Parameters**

color: [Color](Color.md)

The RGB color to multiply.

**Returns**

[Color](Color.md)

A new RGB color.

### [componentMulInPlace(color)](#componentmulinplacecolor)

Multiplies the current RGB color's components by the specified RGB color's components, modifying the original RGB color in place.

**Signature**

```ts
componentMulInPlace(color: Color): this;
```

**Parameters**

color: [Color](Color.md)

The RGB color to multiply by.

**Returns**

this

### [copy(color)](#copycolor)

Sets the current RGB color to the specified RGB color.

**Signature**

```ts
copy(color: Color): this;
```

**Parameters**

color: [Color](Color.md)

The specified RGB color.

**Returns**

this

### [div(scalar)](#divscalar)

Performs scalar division on an RGB color, returning a new RGB color.

**Signature**

```ts
static div(color: Color, scalar: number, outColor?: Color): Color;
```

**Parameters**

color: [Color](Color.md)

The RGB color to scale.

scalar: number

The value to scale the RGB color by.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color.

### [div(color, scalar, outColor) static](#divcolor-scalar-outcolor-static)

Performs scalar division on an RGB color, returning a new RGB color.

**Signature**

```ts
static div(color: Color, scalar: number, outColor?: Color): Color;
```

**Parameters**

color: [Color](Color.md)

The RGB color to scale.

scalar: number

The value to scale the RGB color by.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color.

### [divInPlace(scalar)](#divinplacescalar)

Divides an RGB color's components by a scalar value, modifying the original RGB color in place.

**Signature**

```ts
divInPlace(scalar: number): this;
```

**Parameters**

scalar: number

The value to scale the color by.

**Returns**

this

### [equals(color)](#equalscolor)

Determines whether two RGB colors are equal.

**Signature**

```ts
static equals(colorA: Color, colorB: Color): boolean;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to compare.

colorB: [Color](Color.md)

The second RGB color to compare.

**Returns**

boolean

`true` if the RGB colors are equal, `false` otherwise.

### [equals(colorA, colorB) static](#equalscolora-colorb-static)

Determines whether two RGB colors are equal.

**Signature**

```ts
static equals(colorA: Color, colorB: Color): boolean;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to compare.

colorB: [Color](Color.md)

The second RGB color to compare.

**Returns**

boolean

`true` if the RGB colors are equal, `false` otherwise.

### [equalsApprox(color, epsilon)](#equalsapproxcolor-epsilon)

Determines whether two RGB colors are approximately equal.

**Signature**

```ts
static equalsApprox(colorA: Color, colorB: Color, epsilon?: number): boolean;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to compare.

colorB: [Color](Color.md)

The second RGB color to compare.

epsilon: number

*(Optional)* The maximum difference in value to be considered equal.

**Returns**

boolean

`true` if the two RGB colors are approximatel equal, `false` otherwise.

### [equalsApprox(colorA, colorB, epsilon) static](#equalsapproxcolora-colorb-epsilon-static)

Determines whether two RGB colors are approximately equal.

**Signature**

```ts
static equalsApprox(colorA: Color, colorB: Color, epsilon?: number): boolean;
```

**Parameters**

colorA: [Color](Color.md)

The first RGB color to compare.

colorB: [Color](Color.md)

The second RGB color to compare.

epsilon: number

*(Optional)* The maximum difference in value to be considered equal.

**Returns**

boolean

`true` if the two RGB colors are approximatel equal, `false` otherwise.

### [fromHex(hex) static](#fromhexhex-static)

Converts a hex code string to a Color.

**Signature**

```ts
static fromHex(hex: string): Color;
```

**Parameters**

hex: string

A six-character hex code string prefixed with #, ie: "#ff0000".

**Returns**

[Color](Color.md)

A Color representing the hex value.

### [fromHSV(hsv) static](#fromhsvhsv-static)

Creates a new RGB color from an HSV value.

**Signature**

```ts
static fromHSV(hsv: Vec3): Color;
```

**Parameters**

hsv: [Vec3](Vec3.md)

The HSV color value to convert to RGB.

**Returns**

[Color](Color.md)

A new RGB color.

### [mul(scalar)](#mulscalar)

Performs a scalar multiplication on an RGB color, returning a new RGB color.

**Signature**

```ts
static mul(color: Color, scalar: number, outColor?: Color): Color;
```

**Parameters**

color: [Color](Color.md)

The RGB color to scale.

scalar: number

The value to scale the RGB color by.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color.

### [mul(color, scalar, outColor) static](#mulcolor-scalar-outcolor-static)

Performs a scalar multiplication on an RGB color, returning a new RGB color.

**Signature**

```ts
static mul(color: Color, scalar: number, outColor?: Color): Color;
```

**Parameters**

color: [Color](Color.md)

The RGB color to scale.

scalar: number

The value to scale the RGB color by.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color.

### [mulInPlace(scalar)](#mulinplacescalar)

Performs a scalar multiplication on the current RGB color, modifying the original RGB color in place.

**Signature**

```ts
mulInPlace(scalar: number): this;
```

**Parameters**

scalar: number

The value to scale the color by.

**Returns**

this

### [sub(color)](#subcolor)

Subtracts an RGB color from another RGB color, returning a new RGB color.

**Signature**

```ts
static sub(colorA: Color, colorB: Color, outColor?: Color): Color;
```

**Parameters**

colorA: [Color](Color.md)

The RGB color to subtract from.

colorB: [Color](Color.md)

The RGB color to subtract.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color, if `outColor` is not supplied.

### [sub(colorA, colorB, outColor) static](#subcolora-colorb-outcolor-static)

Subtracts an RGB color from another RGB color, returning a new RGB color.

**Signature**

```ts
static sub(colorA: Color, colorB: Color, outColor?: Color): Color;
```

**Parameters**

colorA: [Color](Color.md)

The RGB color to subtract from.

colorB: [Color](Color.md)

The RGB color to subtract.

outColor: [Color](Color.md)

*(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.

**Returns**

[Color](Color.md)

A new RGB color, if `outColor` is not supplied.

### [subInPlace(color)](#subinplacecolor)

Subtracts an RGB color from the current RGB color, modifying the original RGB color in place.

**Signature**

```ts
subInPlace(color: Color): this;
```

**Parameters**

color: [Color](Color.md)

The RGB color to subtract.

**Returns**

this

### [toHex()](#tohex)

Converts an RGB color to a Hex color code.

**Signature**

```ts
toHex(): #${string};
```

**Returns**

\\`#${string}\`

The hex color code of the color.

### [toHSV()](#tohsv)

Converts an RGB color to an HSV (hue, saturation, value) 3D vector.

**Signature**

```ts
toHSV(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

A 3D vector, where x is the hue, y is the saturation, and z is the value of the color.

### [toString()](#tostring)

Gets a string listing the RGB color components.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A list of the components.

### [toVec3()](#tovec3)

Gets the values of the current RGB color object as a 3D vector.

**Signature**

```ts
toVec3(): Vec3;
```

**Returns**

[Vec3](Vec3.md)

