# DisposeOperationRegistration interface

The object returned from a call to [DisposableObject.registerDisposeOperation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject#registerdisposeoperation). This object can be used to run the operation manually before dispose time, or to cancel the operation entirely.

## Signature

```typescript
export interface DisposeOperationRegistration
```

## Properties

| Property | Description |
|----------|-------------|
| `cancel` | Cancels the dispose operation so that it never runs. **Signature:** `cancel: () => void` |
| `run` | Manually run the dispose operation before the DisposableObject is disposed. Dispose operations are only run once--a call to run guarantees the operation will not run at dispose time. **Signature:** `run: () => void` |

## References

[DisposableObject.registerDisposeOperation()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject#registerdisposeoperation)

## Remarks

This interface provides control over registered dispose operations, allowing them to be executed early or cancelled entirely based on application needs.