---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_disposableobject
---

# [DisposableObject Interface](#disposableobject-interface)

An interface for objects that allow registration of additional dispose time operations.

## [Signature](#signature)

```
export
 
interface
 
DisposableObject
 
```

## [Remarks](#remarks)

Implemented by [Component](../Abstract%20Classes/Component.md), this inteface is typically used to tie the lifetime of API objects to the lifetime of the component that uses them. However, creators can register their own operations instead of implementing dispose, or implement their own disposable object for advanced scenarios requiring custom lifetime management.\
The implementation of `DisposableObject` on `Component` runs the dispose operations when the component is destroyed (such as at world teardown or asset despawn), or when ownership is transferred between clients. Other implementations of `DisposableObject` may have different semantics.\
For information about component lifecycles, see the [TypeScript component lifecyle](../../../Scripting/TypeScript%20Script%20Lifecycle.md#typescript-component-lifecycle) guide.

## [Methods](#methods)

|               |                                                                 |
| ------------- | --------------------------------------------------------------- |
| **dispose()** | Called when the disposable object is cleaned up.Signature\`\`\` |
| dispose       |                                                                 |
| ():           |                                                                 |

void
;

````Returnsvoid |
| **registerDisposeOperation(operation)** | Called to register a single dispose operation. The operation is run automatically at Object dispose time, unless it is manually run or canceled before the object is disposed.Signature```
registerDisposeOperation
(
operation
:
 
DisposeOperation
):
 
DisposeOperationRegistration
;
```Parametersoperation: [DisposeOperation](../Type%20Aliases/DisposeOperation.md)A function called to perform a single dispose operation.Returns[DisposeOperationRegistration](DisposeOperationRegistration.md)A registration object that can be used to manually run or cancel the operation before dispose. |
````

