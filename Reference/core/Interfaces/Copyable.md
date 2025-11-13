Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_copyable

# Copyable Interface

The Copyable interface provides 'copy' and 'clone' methods for copying data from an existing reference.

## Signature

```
export interface Copyable<T>
```

## Methods

|  |  |
| --- | --- |
| **clone()** | Creates a new reference with the source reference data copied to the new reference.      Signature  ``` clone(): T; ```  Returns  T |
| **copy(val)** | Copies data from another reference.      Signature  ``` copy(val: T): void; ```  Parameters  val: T  The value to copy data from.  Returns  void |