---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetpoolgizmo
---

# [AssetPoolGizmo Class](#assetpoolgizmo-class)

Extends *[Entity](Entity.md)*

An Asset Pool gizmo

## [Signature](#signature)

```
export
 declare 
class
 
AssetPoolGizmo
 
extends
 
Entity
 
```

## [Properties](#properties)

|                    |                 |
| ------------------ | --------------- |
| **assetReference** | Signature\`\`\` |
| assetReference     |                 |
| :                  |                 |

HorizonProperty <string></string>
;

````|
| **autoAssignToPlayers** | Signature```
autoAssignToPlayers
:
 
HorizonProperty
<boolean>
;
``` |

## [Methods](#methods)

|                        |                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **getPooledEntity()**  | Get an entity from the Asset Pool. Will only return entities in Default (not Local) execution scripts.Signature```
getPooledEntity
():
 
Entity
 
|
 
undefined
;
```Returns[Entity](Entity.md) \| undefinedA pooled entity if the pool still has one available, or undefined if not.                                                                                                         |
| **poolEntity(entity)** | Put an entity back in the Asset Pool. Will fail to pool entity if the entity wasn't originally from this pool, or the entity has already been returned to the pool.Signature```
poolEntity
(
entity
:
 
Entity
):
 
boolean
;
```Parametersentity: [Entity](Entity.md)An entity that was previously retrieved from this pool.ReturnsbooleanTrue if the provided entity was able to be pooled. |
| **toString()**         | Creates a human-readable representation of the AssetPoolGizmo.Signature```
toString
():
 
string
;
```ReturnsstringA string representation of the `AssetPoolGizmo`.                                                                                                                                                                                                                           |
````

