---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposeoperationregistration
---

# [DisposeOperationRegistration Interface](#disposeoperationregistration-interface)

The object returned from a call to [DisposableObject.registerDisposeOperation()](DisposableObject.md#registerdisposeoperation). This object can be used to run the operation manually before dispose time, or to cancel the operation entirely.

## [Signature](#signature)

```ts
export interface DisposeOperationRegistration 
```

## [Properties](#properties)

### [cancel](#cancel)

Cancels the dispose operation so that it is never runs.

**Signature**

```ts
cancel: () => void;
```

### [run](#run)

Manually run the dispose operation before the [DisposableObject](DisposableObject.md) is disposed. Dispose operations are only run once--a call to run guarantees the operation will not run at dispose time.

**Signature**

```ts
run: () => void;
```

