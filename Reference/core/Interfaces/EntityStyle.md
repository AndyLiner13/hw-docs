---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitystyle
---

# [EntityStyle Interface](#entitystyle-interface)

Represents a style for a Custom model entity that can change its style.

## [Signature](#signature)

```ts
export interface EntityStyle 
```

## [Properties](#properties)

### [brightness](#brightness)

Brightness in the range of 0 - 100; where 0 is black, 1 is no adjustment, and 100 is very bright; defaults to 1.

**Signature**

```ts
brightness: HorizonProperty<number>;
```

### [tintColor](#tintcolor)

Color in the RGB range of 0 - 1; defaults to 1, 1, 1 (no tint color).

**Signature**

```ts
tintColor: HorizonProperty<Color>;
```

### [tintStrength](#tintstrength)

Tint strength in the range of 0 - 1; where 0 is no tint and 1 is fully tinted; defaults to 0.

**Signature**

```ts
tintStrength: HorizonProperty<number>;
```

