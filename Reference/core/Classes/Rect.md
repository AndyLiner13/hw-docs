Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_rect

# Rect Class

Represents a 2D rectangle

## Signature

```
export declare class Rect
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(x, y, width, height)** | Creates a Rectangle.  ---  Signature  ``` constructor(x: number, y: number, width: number, height: number); ```  Parameters  x: number  The starting point of the rectangle along the X axis.  y: number  The starting point of the rectangle along the Y axis  width: number  The width of the rectangle.  height: number  The height of the rectangle. |

## Properties

|  |  |
| --- | --- |
| **height** | The height of the rectangle      Signature  ``` height: number; ``` |
| **width** | The width of the rectangle      Signature  ``` width: number; ``` |
| **x** | The starting point of the rectangle along the X axis.      Signature  ``` x: number; ``` |
| **y** | The starting point of the rectangle along the Y axis      Signature  ``` y: number; ``` |

## Methods

|  |  |
| --- | --- |
| **clone()** | Clones a Rectangle's values into a mutable Rect.      Signature  ``` clone(): Rect; ```  Returns  [Rect](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_rect)  A mutable Rect with the same x,y,width,height values. |
| **copy(rect)** | Copies the specified Rect (x, y, width, height) into this.      Signature  ``` copy(rect: Rect): this; ```  Parameters  rect: [Rect](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_rect)  The Rectangle to copy from.  Returns  this  A reference to this after the values have been copied. |
| **scaleBy(width, height)** | Scales the Rectangle by the provided dimensions.      Signature  ``` scaleBy(width: number, height: number): this; ```  Parameters  width: number  the width to scale this rectangular by  height: number  the height to scale this rectangular by  Returns  this |
| **toString()** | Gets a string representation of the x, y, width and height values for the Rectangle.      Signature  ``` toString(): string; ```  Returns  string  The string representation of the Rectangle. |