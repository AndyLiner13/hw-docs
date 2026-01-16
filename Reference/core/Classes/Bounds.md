Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_bounds

# Bounds Class

Represents an axis aligned bounding box with a center position, and extents which are the distance from the center to the corners

## Signature

```
export declare class Bounds
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(center, extents)** | Creates a bounds object.  ---  Signature  ``` constructor(center: Vec3, extents: Vec3); ```  Parameters  center: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  The center of the bounds.  extents: [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  1/2 the size of the bounds. |

## Properties

|  |  |
| --- | --- |
| **center** | The position of the bounds.      Signature  ``` center: Vec3; ``` |
| **extents** | The distance from center to min/max of the bounds.      Signature  ``` extents: Vec3; ``` |

## Methods

|  |  |
| --- | --- |
| **max()** | Get the position of the maximum corner of the bounds      Signature  ``` max(): Vec3; ```  Returns  [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  the maximum point of the bounds |
| **min()** | Get the position of the minimum corner of the bounds      Signature  ``` min(): Vec3; ```  Returns  [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  the minimum point of the bounds |
| **size()** | Get the size of the box, which is twice the extents      Signature  ``` size(): Vec3; ```  Returns  [Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3)  The size of the bounding box |