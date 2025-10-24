# Bounds Class

Represents an axis aligned bounding box with a center position, and extents which are the distance from the center to the corners.

## Signature

```typescript
export declare class Bounds
```

## Constructors

| Constructor | Description |
| --- | --- |
| `(constructor)(center, extents)` | Creates a bounds object.<br/>**Signature:** `constructor(center: Vec3, extents: Vec3);`<br/>**Parameters:** center: Vec3 - The center of the bounds. extents: Vec3 - 1/2 the size of the bounds. |

## Properties

| Property | Description |
| --- | --- |
| `center` | The position of the bounds.<br/>**Signature:** `center: Vec3;` |
| `extents` | The distance from center to min/max of the bounds.<br/>**Signature:** `extents: Vec3;` |

## Methods

| Method | Description |
| --- | --- |
| `max()` | Get the position of the maximum corner of the bounds<br/>**Signature:** `max(): Vec3;`<br/>**Returns:** Vec3 - the maximum point of the bounds |
| `min()` | Get the position of the minimum corner of the bounds<br/>**Signature:** `min(): Vec3;`<br/>**Returns:** Vec3 - the minimum point of the bounds |
| `size()` | Get the size of the box, which is twice the extents<br/>**Signature:** `size(): Vec3;`<br/>**Returns:** Vec3 - The size of the bounding box |