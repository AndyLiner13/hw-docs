---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_transform
---

# [Transform Class](#transform-class)

A transform for an entity, which represents the position, rotation, and scale of the entity in a world.

## [Signature](#signature)

```ts
export declare class Transform 
```

## [Constructors](#constructors)

### [(constructor)(entity)](#constructorentity)

Constructs a new instance of the `Transform` class.

**Signature**

```ts
constructor(entity: Entity);
```

**Parameters**

entity: [Entity](Entity.md)

The entity to transform.

## [Properties](#properties)

### [localPosition](#localposition)

The local position of the entity relative to its parent.

**Signature**

```ts
localPosition: HorizonProperty<Vec3>;
```

### [localRotation](#localrotation)

Represents the rotation component of the entity relative to its parent.

**Signature**

```ts
localRotation: HorizonProperty<Quaternion>;
```

### [localScale](#localscale)

Represents the local scale of the entity relative to its parent.

**Signature**

```ts
localScale: HorizonProperty<Vec3>;
```

### [position](#position)

The position of the entity in the world.

**Signature**

```ts
position: HorizonProperty<Vec3>;
```

### [rotation](#rotation)

The rotation component of the entity.

**Signature**

```ts
rotation: HorizonProperty<Quaternion>;
```

### [scale](#scale)

The scale of the entity in the world in the world.

**Signature**

```ts
scale: ReadableHorizonProperty<Vec3>;
```

