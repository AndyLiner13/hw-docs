# DisposeOperation type

A callback used to perform a single registered dispose operation, either automatically at the dispose time of the [DisposableObject](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject) instance, or manually before the dispose operation.

## Signature

```typescript
export declare type DisposeOperation = () => void;
```