# Color class

Represents an RGB color.

## Signature

```typescript
export declare class Color implements Comparable<Color>
```

## Constructors

| Constructor | Description |
|------------|-------------|
| `constructor(r, g, b)` | Creates an RGB color object. **Parameters:** `r: number` - The red component (0-1), `g: number` - The green component (0-1), `b: number` - The blue component (0-1) |

## Properties

| Property | Description |
|----------|-------------|
| `r` | The red component of the RGB color. |
| `g` | The green component of the RGB color. |
| `b` | The blue component of the RGB color. |
| `black` (static, readonly) | Creates a black RGB color. |
| `blue` (static, readonly) | Creates a blue RGB color. |
| `green` (static, readonly) | Creates a green RGB color. |
| `red` (static, readonly) | Creates a red RGB color. |
| `white` (static, readonly) | Creates a white RGB color. |

## Key Methods

| Method | Description |
|--------|-------------|
| `add(colorA, colorB, outColor?)` (static) | Adds two RGB colors, returning a new RGB color. |
| `addInPlace(color)` | Adds an RGB color to the current RGB color, modifying the original. |
| `clone()` | Clones the current RGB color's values into a mutable RGB color object. |
| `componentMul(color)` | Creates an RGB color by multiplying each component. |
| `copy(color)` | Sets the current RGB color to the specified RGB color. |
| `div(color, scalar, outColor?)` (static) | Performs scalar division on an RGB color. |
| `equals(colorA, colorB)` (static) | Determines whether two RGB colors are equal. |
| `equalsApprox(colorA, colorB, epsilon?)` (static) | Determines whether two RGB colors are approximately equal. |
| `fromHex(hex)` (static) | Converts a hex code string to a Color. |
| `fromHSV(hsv)` (static) | Creates a new RGB color from an HSV value. |
| `mul(color, scalar, outColor?)` (static) | Performs scalar multiplication on an RGB color. |
| `sub(colorA, colorB, outColor?)` (static) | Subtracts an RGB color from another RGB color. |
| `toHex()` | Converts an RGB color to a Hex color code. |
| `toHSV()` | Converts an RGB color to an HSV 3D vector. |
| `toString()` | Gets a string listing the RGB color components. |
| `toVec3()` | Gets the values of the current RGB color object as a 3D vector. |

## References

[Comparable](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable), [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)

## Remarks

This class provides comprehensive color manipulation capabilities including RGB operations, HSV conversions, hex code support, and mathematical operations like addition, subtraction, multiplication, and division.