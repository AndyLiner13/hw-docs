Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonproperty

# HorizonProperty Class

Extends *BaseHorizonProperty<T>*

Represents a property in Meta Horizon Worlds.

## Signature

```
export declare class HorizonProperty<T> extends BaseHorizonProperty<T>
```

## Remarks

For properties of reference types that perform copy and clone operations ([Vec3](Vec3.md), [Quaternion](Quaternion.md), [Color](Color.md)), use the [HorizonReferenceProperty](HorizonReferenceProperty.md) class.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(getter, setter)** | Creates a HorizonProperty instance.  ---  Signature  ``` constructor(getter: () => T, setter: (value: T) => void); ```  Parameters  getter: () => T  The function that returns the property value.  setter: (value: T) => void  The function that sets the property value. |