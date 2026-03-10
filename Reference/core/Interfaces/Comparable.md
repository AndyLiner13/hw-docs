---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_comparable
---

# [Comparable Interface](#comparable-interface)

The Comparable interface defines a set of methods for comparing values of the same type, including [equals()](Comparable.md#equals) and [equalsApprox()](Comparable.md#equalsapprox) methods.

## [Signature](#signature)

```
export
 
interface
 
Comparable
<
T
>
 
```

## [Methods](#methods)

|                 |                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------- |
| **equals(val)** | Indicates whether the two values are equal. True if the values are equal; false otherwise.Signature\`\`\` |
| equals          |                                                                                                           |
| (               |                                                                                                           |
| val             |                                                                                                           |
| :               |                                                                                                           |
| T               |                                                                                                           |
| ):              |                                                                                                           |

boolean
;

````Parametersval: TThe value to compare to the current value.Returnsboolean                                                                                                                                       |
| **equalsApprox(val, epsilon)** | Indicates two values are within epsilon of each other. True if the values are within epsilon, false otherwise.Signature```
equalsApprox
(
val
:
 T
,
 epsilon
?:
 number
):
 
boolean
;
```Parametersval: TThe value to compare to the current value.epsilon: number*(Optional)* The difference between the two values when they are equal.Returnsboolean |
````

