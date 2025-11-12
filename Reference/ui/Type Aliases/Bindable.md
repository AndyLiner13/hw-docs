Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_bindable

API reference

# Bindable type

Represents a type that can bind to a UI element. Bound types are re-rendered when the bound properties change.

## Signature

```
export declare type Bindable<T> = T | AnyBinding<T> | DistributeBindingForUnion<T>;
```