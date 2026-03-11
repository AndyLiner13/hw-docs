---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_dynamiclightgizmo
---

# [DynamicLightGizmo Class](#dynamiclightgizmo-class)

Extends *[Entity](Entity.md)*

Represents a dynamic lighting gizmo in the world, which provides lighting that's calculated in real-time.

## [Signature](#signature)

```ts
export declare class DynamicLightGizmo extends Entity 
```

## [Properties](#properties)

### [enabled](#enabled)

Indicates whether the entity has a dynamic light effect on it. true to enable dynamic lighting; otherwise, false.

**Signature**

```ts
enabled: HorizonProperty<boolean>;
```

### [falloffDistance](#falloffdistance)

The light falloff distance. 0 for the least distance and 100 for the greatest distance.

**Signature**

```ts
falloffDistance: HorizonProperty<number>;
```

### [intensity](#intensity)

The light intensity. 0 for least intense and 10 for most intense.

**Signature**

```ts
intensity: HorizonProperty<number>;
```

### [spread](#spread)

The light spread. 0 for the least light spread (none) and 100 for the greatest light spread.

**Signature**

```ts
spread: HorizonProperty<number>;
```

## [Methods](#methods)

### [toString()](#tostring)

Creates a human-readable representation of the DynamicLightGizmo.

**Signature**

```ts
toString(): string;
```

**Returns**

string

A string representation of the DynamicLightGizmo.

