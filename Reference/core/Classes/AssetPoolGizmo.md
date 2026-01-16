Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetpoolgizmo

# AssetPoolGizmo Class

Extends *[Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)*

An Asset Pool gizmo

## Signature

```
export declare class AssetPoolGizmo extends Entity
```

## Properties

|  |  |
| --- | --- |
| **assetReference** | Signature  ``` assetReference: HorizonProperty<string>; ``` |
| **autoAssignToPlayers** | Signature  ``` autoAssignToPlayers: HorizonProperty<boolean>; ``` |

## Methods

|  |  |
| --- | --- |
| **getPooledEntity()** | Get an entity from the Asset Pool. Will only return entities in Default (not Local) execution scripts.      Signature  ``` getPooledEntity(): Entity | undefined; ```  Returns  [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity) | undefined  A pooled entity if the pool still has one available, or undefined if not. |
| **poolEntity(entity)** | Put an entity back in the Asset Pool. Will fail to pool entity if the entity wasn't originally from this pool, or the entity has already been returned to the pool.      Signature  ``` poolEntity(entity: Entity): boolean; ```  Parameters  entity: [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity)  An entity that was previously retrieved from this pool.  Returns  boolean  True if the provided entity was able to be pooled. |
| **toString()** | Creates a human-readable representation of the AssetPoolGizmo.      Signature  ``` toString(): string; ```  Returns  string  A string representation of the `AssetPoolGizmo`. |