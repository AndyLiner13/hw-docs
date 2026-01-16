Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_dynamiclightgizmo

# DynamicLightGizmo Class

Extends *[Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)*

Represents a dynamic lighting gizmo in the world, which provides lighting that's calculated in real-time.

## Signature

```
export declare class DynamicLightGizmo extends Entity
```

## Properties

|  |  |
| --- | --- |
| **enabled** | Indicates whether the entity has a dynamic light effect on it. true to enable dynamic lighting; otherwise, false.      Signature  ``` enabled: HorizonProperty<boolean>; ``` |
| **falloffDistance** | The light falloff distance. 0 for the least distance and 100 for the greatest distance.      Signature  ``` falloffDistance: HorizonProperty<number>; ``` |
| **intensity** | The light intensity. 0 for least intense and 10 for most intense.      Signature  ``` intensity: HorizonProperty<number>; ``` |
| **spread** | The light spread. 0 for the least light spread (none) and 100 for the greatest light spread.      Signature  ``` spread: HorizonProperty<number>; ``` |

## Methods

|  |  |
| --- | --- |
| **toString()** | Creates a human-readable representation of the DynamicLightGizmo.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the DynamicLightGizmo. |