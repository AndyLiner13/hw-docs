# Bindable type

Represents a type that can bind to a UI element. Bound types are re-rendered when the bound properties change.

## Signature

```typescript
export declare type Bindable<T> = T | AnyBinding<T> | DistributeBindingForUnion<T>;
```