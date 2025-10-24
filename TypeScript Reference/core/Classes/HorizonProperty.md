# HorizonProperty Class

Extends BaseHorizonProperty<T>. Represents a property in Meta Horizon Worlds.

## Signature

```typescript
export declare class HorizonProperty<T> extends BaseHorizonProperty<T>
```

## Remarks

For properties of reference types that perform copy and clone operations ([Vec3](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_vec3), [Quaternion](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_quaternion), [Color](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_color)), use the [HorizonReferenceProperty](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonreferenceproperty) class.

## Constructors

### (constructor)(getter, setter)

Creates a HorizonProperty instance.

**Signature:**
```typescript
constructor(getter: () => T, setter: (value: T) => void);
```

**Parameters:**
- `getter: () => T` - The function that returns the property value.
- `setter: (value: T) => void` - The function that sets the property value.