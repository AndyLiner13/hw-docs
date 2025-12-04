Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_horizonproperty

# HorizonProperty Class

Extends *BaseHorizonProperty<T>*

Represents a property in Meta Horizon Worlds.

## Signature

```
export declare class HorizonProperty<T> extends BaseHorizonProperty<T>
```

## Remarks

For properties of reference types that perform copy and clone operations ([Vec3](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Vec3.md), [Quaternion](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Quaternion.md), [Color](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Color.md)), use the [HorizonReferenceProperty](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/HorizonReferenceProperty.md) class.

## Constructors

|  |  |
| --- | --- |
| **(constructor)(getter, setter)** | Creates a HorizonProperty instance.  ---  Signature  ``` constructor(getter: () => T, setter: (value: T) => void); ```  Parameters  getter: () => T  The function that returns the property value.  setter: (value: T) => void  The function that sets the property value. |