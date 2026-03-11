---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_valuebindingbase
---

# [ValueBindingBase Class](#valuebindingbase-class)

The base class for value-based bindings, including [Binding](../Classes/Binding.md) and DerivedBinding. These bindings are represented as string keys in the data model, and their values are updated in the redux store. These bindings support both global values and player-specific values.

## [Signature](#signature)

```ts
export declare abstract class ValueBindingBase<T> 
```

## [Properties](#properties)

### [\_isInitialized protected](#_isinitialized-protected)

**Signature**

```ts
protected _isInitialized: boolean;
```

