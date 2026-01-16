Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposeoperationregistration

# DisposeOperationRegistration Interface

The object returned from a call to [DisposableObject.registerDisposeOperation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject#registerdisposeoperation). This object can be used to run the operation manually before dispose time, or to cancel the operation entirely.

## Signature

```
export interface DisposeOperationRegistration
```

## Properties

|  |  |
| --- | --- |
| **cancel** | Cancels the dispose operation so that it is never runs.      Signature  ``` cancel: () => void; ``` |
| **run** | Manually run the dispose operation before the [DisposableObject](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject) is disposed. Dispose operations are only run once--a call to run guarantees the operation will not run at dispose time.      Signature  ``` run: () => void; ``` |