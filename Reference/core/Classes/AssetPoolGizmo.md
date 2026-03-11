---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_assetpoolgizmo
---

# [AssetPoolGizmo Class](#assetpoolgizmo-class)

Extends *[Entity](Entity.md)*

An Asset Pool gizmo

## [Signature](#signature)

```ts
export declare class AssetPoolGizmo extends Entity 
```

## [Properties](#properties)

### [assetReference](#assetreference)

**Signature**

```ts
assetReference: HorizonProperty<string>;
```

### [autoAssignToPlayers](#autoassigntoplayers)

**Signature**

```ts
autoAssignToPlayers: HorizonProperty<boolean>;
```

## [Methods](#methods)

### [getPooledEntity()](#getpooledentity)

Get an entity from the Asset Pool. Will only return entities in Default (not Local) execution scripts.

**Signature**

```ts
getPooledEntity(): Entity | undefined;
```

**Returns**

[Entity](Entity.md) | undefined

A pooled entity if the pool still has one available, or undefined if not.

### [poolEntity(entity)](#poolentityentity)

Put an entity back in the Asset Pool. Will fail to pool entity if the entity wasn't originally from this pool, or the entity has already been returned to the pool.

**Signature**

```ts
poolEntity(entity: Entity): boolean;
```

**Parameters**

entity: [Entity](Entity.md)

An entity that was previously retrieved from this pool.

**Returns**

boolean

True if the provided entity was able to be pooled.

### [toString()](#tostring)

Creates a human-readable representation of the AssetPoolGizmo.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the `AssetPoolGizmo`.

