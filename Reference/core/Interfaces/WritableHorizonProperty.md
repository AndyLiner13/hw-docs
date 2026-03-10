---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_writablehorizonproperty
---

# [WritableHorizonProperty Interface](#writablehorizonproperty-interface)

Represents a writable property.

## [Signature](#signature)

```
export
 
interface
 
WritableHorizonProperty
<
T
,
 U 
=
 never
>
 
```

## [Remarks](#remarks)

You cannot set the property value directly; you must use the `set` method. Using `set` typically results in a bridge call and might result in lower performance. Therefore, we recommend caching these values when possible. For more information, see [CPU and TypeScript optimization and best practices](../../../Performance/Performance%20best%20practices/CPU%20and%20TypeScript%20optimization%20and%20best%20practices.md).

## [Methods](#methods)

|                        |                                                  |
| ---------------------- | ------------------------------------------------ |
| **set(value, values)** | Sets the value(s) of the propertySignature\`\`\` |
| set                    |                                                  |
| (                      |                                                  |
| value                  |                                                  |
| :                      |                                                  |
| T                      |                                                  |
| ,                      |                                                  |

...
values
:

\[
U
?]):

void
;

```Parametersvalue: Tthe new property valuevalues: [U?]the new property valuesReturnsvoid |
```

