Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_valuebindingbase

# ValueBindingBase Class

The base class for value-based bindings, including [Binding](/hw-mcp-tools/documentation/hw-docs/Reference/ui/Classes/Binding.md) and DerivedBinding. These bindings are represented as string keys in the data model, and their values are updated in the redux store. These bindings support both global values and player-specific values.

## Signature

```
export declare abstract class ValueBindingBase<T>
```

## Properties

|  |  |
| --- | --- |
| **\_isInitialized**  protected | Signature  ``` protected _isInitialized: boolean; ``` |