Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonreferenceproperty

# HorizonReferenceProperty Class

Extends *BaseHorizonProperty<T>*

Represents a property of a reference type in Horizon Worlds, such as a ([Vec3](/hw-docs/Reference/core/Classes/Vec3.md), [Quaternion](/hw-docs/Reference/core/Classes/Quaternion.md), or [Color](/hw-docs/Reference/core/Classes/Color.md)) instance. Use this class for properties of reference types that implement `copy` or `clone` methods to ensure the methods snapshot the state of the copied or cloned object at the time of the method call.

## Signature

```
export declare class HorizonReferenceProperty<T extends Copyable<T>> extends BaseHorizonProperty<T>
```

## Remarks

For reads via , the read will return a clone of the object that may be mutated without mutating the cached value. For writes via , the write will snapshot the state of the copied or cloned object at the time of the method call. When using the class for reference types that implement `copy` or `clone` methods, if a copied or cloned object is modified after the set() call but before the setter() is invoked (with , due to method queueing), the target property is updated based on the modified value instead of a snapshot of the value taken at the time of the method call. This class solves this issue by snapshotting the value at method call time if is set.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(getter, setter)** | Creates a HorizonReferenceProperty instance.  ---  Signature  ``` constructor(getter: () => T, setter: (value: T) => void); ```  Parameters  getter: () => T  The function that returns the property value.  setter: (value: T) => void  The function that sets the property value. |