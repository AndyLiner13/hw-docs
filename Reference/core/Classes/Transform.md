Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_transform

# Transform Class

A transform for an entity, which represents the position, rotation, and scale of the entity in a world.

## Signature

```
export declare class Transform
```

## Constructors

|  |  |
| --- | --- |
| **(constructor)(entity)** | Constructs a new instance of the `Transform` class.  ---  Signature  ``` constructor(entity: Entity); ```  Parameters  entity: [Entity](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md)  The entity to transform. |

## Properties

|  |  |
| --- | --- |
| **localPosition** | The local position of the entity relative to its parent.      Signature  ``` localPosition: HorizonProperty<Vec3>; ``` |
| **localRotation** | Represents the rotation component of the entity relative to its parent.      Signature  ``` localRotation: HorizonProperty<Quaternion>; ``` |
| **localScale** | Represents the local scale of the entity relative to its parent.      Signature  ``` localScale: HorizonProperty<Vec3>; ``` |
| **position** | The position of the entity in the world.      Signature  ``` position: HorizonProperty<Vec3>; ``` |
| **rotation** | The rotation component of the entity.      Signature  ``` rotation: HorizonProperty<Quaternion>; ``` |
| **scale** | The scale of the entity in the world in the world.      Signature  ``` scale: ReadableHorizonProperty<Vec3>; ``` |