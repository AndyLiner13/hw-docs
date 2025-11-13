Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color

API reference

# Color Class

Extends *[Comparable](/hw-docs/Reference/core/Interfaces/Comparable.md)<[Color](/hw-docs/Reference/core/Classes/Color.md)>*

Represents an RGB color.

## Signature

```
export declare class Color implements Comparable<Color>
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(r, g, b)** | Creates an RGB color object.  ---  Signature  ``` constructor(r: number, g: number, b: number); ```  Parameters  r: number  The red component of the RGB color as a float from 0 to 1.  g: number  The green component of the RGB color as a float from 0 to 1.  b: number  The blue component of the RGB color as a float from 0 to 1. |

## Properties

|  |  |
| --- | --- |
| **b** | The blue component of the RGB color.      Signature  ``` b: number; ``` |
| **black**  static  [readonly] | Creates a black RGB color.      Signature  ``` static get black(): Color; ``` |
| **blue**  static  [readonly] | Creates a blue RGB color.      Signature  ``` static get blue(): Color; ``` |
| **g** | The green component of the RGB color.      Signature  ``` g: number; ``` |
| **green**  static  [readonly] | Creates a green RGB color.      Signature  ``` static get green(): Color; ``` |
| **r** | The red component of the RGB color.      Signature  ``` r: number; ``` |
| **red**  static  [readonly] | Creates a red RGB color.      Signature  ``` static get red(): Color; ``` |
| **white**  static  [readonly] | Creates a white RGB color.      Signature  ``` static get white(): Color; ``` |

## Methods

|  |  |
| --- | --- |
| **add(color)** | Adds two RGB colors, returning a new RGB color.      Signature  ``` static add(colorA: Color, colorB: Color, outColor?: Color): Color; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to add.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second color to add.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The RGB color as a result of the operation. If not supplied, a new RGB color is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color, if `outColor` is not supplied. |
| **add(colorA, colorB, outColor)** static | Adds two RGB colors, returning a new RGB color.      Signature  ``` static add(colorA: Color, colorB: Color, outColor?: Color): Color; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to add.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second color to add.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The RGB color as a result of the operation. If not supplied, a new RGB color is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color, if `outColor` is not supplied. |
| **addInPlace(color)** | Adds an RGB color to the current RGB color, modifying the original color in place.      Signature  ``` addInPlace(color: Color): this; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to add.  Returns  this |
| **clone()** | Clones the current RGB color's values into a mutable RGB color object.      Signature  ``` clone(): Color; ```  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  a mutable RGB color with the same r, g, b values. |
| **componentMul(color)** | Creates an RGB color by multiplying each component of the current RGB color with the input RGB color's component.      Signature  ``` componentMul(color: Color): Color; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to multiply.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **componentMulInPlace(color)** | Multiplies the current RGB color's components by the specified RGB color's components, modifying the original RGB color in place.      Signature  ``` componentMulInPlace(color: Color): this; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to multiply by.  Returns  this |
| **copy(color)** | Sets the current RGB color to the specified RGB color.      Signature  ``` copy(color: Color): this; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The specified RGB color.  Returns  this |
| **div(scalar)** | Performs scalar division on an RGB color, returning a new RGB color.      Signature  ``` static div(color: Color, scalar: number, outColor?: Color): Color; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to scale.  scalar: number  The value to scale the RGB color by.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **div(color, scalar, outColor)** static | Performs scalar division on an RGB color, returning a new RGB color.      Signature  ``` static div(color: Color, scalar: number, outColor?: Color): Color; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to scale.  scalar: number  The value to scale the RGB color by.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **divInPlace(scalar)** | Divides an RGB color's components by a scalar value, modifying the original RGB color in place.      Signature  ``` divInPlace(scalar: number): this; ```  Parameters  scalar: number  The value to scale the color by.  Returns  this |
| **equals(color)** | Determines whether two RGB colors are equal.      Signature  ``` static equals(colorA: Color, colorB: Color): boolean; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to compare.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second RGB color to compare.  Returns  boolean  `true` if the RGB colors are equal, `false` otherwise. |
| **equals(colorA, colorB)** static | Determines whether two RGB colors are equal.      Signature  ``` static equals(colorA: Color, colorB: Color): boolean; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to compare.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second RGB color to compare.  Returns  boolean  `true` if the RGB colors are equal, `false` otherwise. |
| **equalsApprox(color, epsilon)** | Determines whether two RGB colors are approximately equal.      Signature  ``` static equalsApprox(colorA: Color, colorB: Color, epsilon?: number): boolean; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to compare.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second RGB color to compare.  epsilon: number  *(Optional)* The maximum difference in value to be considered equal.  Returns  boolean  `true` if the two RGB colors are approximatel equal, `false` otherwise. |
| **equalsApprox(colorA, colorB, epsilon)** static | Determines whether two RGB colors are approximately equal.      Signature  ``` static equalsApprox(colorA: Color, colorB: Color, epsilon?: number): boolean; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The first RGB color to compare.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The second RGB color to compare.  epsilon: number  *(Optional)* The maximum difference in value to be considered equal.  Returns  boolean  `true` if the two RGB colors are approximatel equal, `false` otherwise. |
| **fromHex(hex)** static | Converts a hex code string to a Color.      Signature  ``` static fromHex(hex: string): Color; ```  Parameters  hex: string  A six-character hex code string prefixed with #, ie: "#ff0000".  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A Color representing the hex value. |
| **fromHSV(hsv)** static | Creates a new RGB color from an HSV value.      Signature  ``` static fromHSV(hsv: Vec3): Color; ```  Parameters  hsv: [Vec3](/hw-docs/Reference/core/Classes/Vec3.md)  The HSV color value to convert to RGB.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **mul(scalar)** | Performs a scalar multiplication on an RGB color, returning a new RGB color.      Signature  ``` static mul(color: Color, scalar: number, outColor?: Color): Color; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to scale.  scalar: number  The value to scale the RGB color by.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **mul(color, scalar, outColor)** static | Performs a scalar multiplication on an RGB color, returning a new RGB color.      Signature  ``` static mul(color: Color, scalar: number, outColor?: Color): Color; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to scale.  scalar: number  The value to scale the RGB color by.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color. |
| **mulInPlace(scalar)** | Performs a scalar multiplication on the current RGB color, modifying the original RGB color in place.      Signature  ``` mulInPlace(scalar: number): this; ```  Parameters  scalar: number  The value to scale the color by.  Returns  this |
| **sub(color)** | Subtracts an RGB color from another RGB color, returning a new RGB color.      Signature  ``` static sub(colorA: Color, colorB: Color, outColor?: Color): Color; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to subtract from.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to subtract.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color, if `outColor` is not supplied. |
| **sub(colorA, colorB, outColor)** static | Subtracts an RGB color from another RGB color, returning a new RGB color.      Signature  ``` static sub(colorA: Color, colorB: Color, outColor?: Color): Color; ```  Parameters  colorA: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to subtract from.  colorB: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to subtract.  outColor: [Color](/hw-docs/Reference/core/Classes/Color.md)  *(Optional)* The new color as a result of the operation. If not supplied, a new 3D vector is created and returned.  Returns  [Color](/hw-docs/Reference/core/Classes/Color.md)  A new RGB color, if `outColor` is not supplied. |
| **subInPlace(color)** | Subtracts an RGB color from the current RGB color, modifying the original RGB color in place.      Signature  ``` subInPlace(color: Color): this; ```  Parameters  color: [Color](/hw-docs/Reference/core/Classes/Color.md)  The RGB color to subtract.  Returns  this |
| **toHex()** | Converts an RGB color to a Hex color code.      Signature  ``` toHex(): #${string}; ```  Returns  \`#${string}\`  The hex color code of the color. |
| **toHSV()** | Converts an RGB color to an HSV (hue, saturation, value) 3D vector.      Signature  ``` toHSV(): Vec3; ```  Returns  [Vec3](/hw-docs/Reference/core/Classes/Vec3.md)  A 3D vector, where x is the hue, y is the saturation, and z is the value of the color. |
| **toString()** | Gets a string listing the RGB color components.      Signature  ``` toString(): string; ```  Returns  string  A list of the components. |
| **toVec3()** | Gets the values of the current RGB color object as a 3D vector.      Signature  ``` toVec3(): Vec3; ```  Returns  [Vec3](/hw-docs/Reference/core/Classes/Vec3.md) |