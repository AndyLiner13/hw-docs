Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject

API reference

# DisposableObject Interface

An interface for objects that allow registration of additional dispose time operations.

## Signature

```
export interface DisposableObject
```

## Remarks

Implemented by [Component](/hw-docs/Reference/core/Abstract%20Classes/Component.md), this inteface is typically used to tie the lifetime of API objects to the lifetime of the component that uses them. However, creators can register their own operations instead of implementing dispose, or implement their own disposable object for advanced scenarios requiring custom lifetime management.
The implementation of `DisposableObject` on `Component` runs the dispose operations when the component is destroyed (such as at world teardown or asset despawn), or when ownership is transferred between clients. Other implementations of `DisposableObject` may have different semantics.
For information about component lifecycles, see the [TypeScript component lifecyle](/hw-docs/Scripting/TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle) guide.

## Methods

|  |  |
| --- | --- |
| **dispose()** | Called when the disposable object is cleaned up.      Signature  ``` dispose(): void; ```  Returns  void |
| **registerDisposeOperation(operation)** | Called to register a single dispose operation. The operation is run automatically at Object dispose time, unless it is manually run or canceled before the object is disposed.      Signature  ``` registerDisposeOperation(operation: DisposeOperation): DisposeOperationRegistration; ```  Parameters  operation: [DisposeOperation](/hw-docs/Reference/core/Type%20Aliases/DisposeOperation.md)  A function called to perform a single dispose operation.  Returns  [DisposeOperationRegistration](/hw-docs/Reference/core/Interfaces/DisposeOperationRegistration.md)  A registration object that can be used to manually run or cancel the operation before dispose. |