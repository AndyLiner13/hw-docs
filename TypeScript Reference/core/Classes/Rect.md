# Rect class

Represents a 2D rectangle.

## Signature

```typescript
export declare class Rect
```

## Constructor

```typescript
constructor(x: number, y: number, width: number, height: number)
```

Creates a Rectangle with the specified position and dimensions.

## Properties

| Property | Description |
|----------|-------------|
| `x` | The starting point of the rectangle along the X axis. |
| `y` | The starting point of the rectangle along the Y axis. |
| `width` | The width of the rectangle. |
| `height` | The height of the rectangle. |

## Methods

| Method | Description |
|--------|-------------|
| `clone()` | Clones a Rectangle's values into a mutable Rect. **Returns:** `Rect` - A mutable Rect with the same x, y, width, height values. |
| `copy(rect)` | Copies the specified Rect (x, y, width, height) into this. **Parameters:** `rect: Rect` - The Rectangle to copy from. **Returns:** `this` - A reference to this after the values have been copied. |
| `scaleBy(width, height)` | Scales the Rectangle by the provided dimensions. **Parameters:** `width: number` - The width to scale by, `height: number` - The height to scale by. **Returns:** `this` |
| `toString()` | Gets a string representation of the x, y, width and height values. **Returns:** `string` - The string representation of the Rectangle. |

## Examples

```typescript
// Create a rectangle
const rect = new Rect(10, 20, 100, 50);

// Scale the rectangle
rect.scaleBy(2, 1.5); // Doubles width, increases height by 50%

// Clone the rectangle
const copy = rect.clone();
```

## Remarks

The Rect class is used for 2D rectangular areas, commonly used in UI positioning, collision detection, and screen space calculations.