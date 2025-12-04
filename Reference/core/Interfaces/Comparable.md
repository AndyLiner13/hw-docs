Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable

# Comparable Interface

The Comparable interface defines a set of methods for comparing values of the same type, including [equals()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Interfaces/Comparable.md#equals) and [equalsApprox()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Interfaces/Comparable.md#equalsapprox) methods.

## Signature

```
export interface Comparable<T>
```

## Methods

|  |  |
| --- | --- |
| **equals(val)** | Indicates whether the two values are equal. True if the values are equal; false otherwise.      Signature  ``` equals(val: T): boolean; ```  Parameters  val: T  The value to compare to the current value.  Returns  boolean |
| **equalsApprox(val, epsilon)** | Indicates two values are within epsilon of each other. True if the values are within epsilon, false otherwise.      Signature  ``` equalsApprox(val: T, epsilon?: number): boolean; ```  Parameters  val: T  The value to compare to the current value.  epsilon: number  *(Optional)* The difference between the two values when they are equal.  Returns  boolean |