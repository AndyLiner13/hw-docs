# DynamicLightGizmo Class

Extends [Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity). Represents a dynamic lighting gizmo in the world, which provides lighting that's calculated in real-time.

## Signature

```typescript
export declare class DynamicLightGizmo extends Entity
```

## Properties

### enabled

Indicates whether the entity has a dynamic light effect on it. true to enable dynamic lighting; otherwise, false.

**Signature:**
```typescript
enabled: HorizonProperty<boolean>;
```

### falloffDistance

The light falloff distance. 0 for the least distance and 100 for the greatest distance.

**Signature:**
```typescript
falloffDistance: HorizonProperty<number>;
```

### intensity

The light intensity. 0 for least intense and 10 for most intense.

**Signature:**
```typescript
intensity: HorizonProperty<number>;
```

### spread

The light spread. 0 for the least light spread (none) and 100 for the greatest light spread.

**Signature:**
```typescript
spread: HorizonProperty<number>;
```

## Methods

### toString()

Creates a human-readable representation of the DynamicLightGizmo.

**Signature:**
```typescript
toString(): string;
```

**Returns:**
`string` - A string representation of the DynamicLightGizmo.