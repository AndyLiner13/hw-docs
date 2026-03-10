---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_copyable
---

# [Copyable Interface](#copyable-interface)

The Copyable interface provides 'copy' and 'clone' methods for copying data from an existing reference.

## [Signature](#signature)

```
export
 
interface
 
Copyable
<
T
>
 
```

## [Methods](#methods)

|             |                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------- |
| **clone()** | Creates a new reference with the source reference data copied to the new reference.Signature\`\`\` |
| clone       |                                                                                                    |
| ():         |                                                                                                    |
| T           |                                                                                                    |
| ;           |                                                                                                    |

````ReturnsT |
| **copy(val)** | Copies data from another reference.Signature```
copy
(
val
:
 T
):
 
void
;
```Parametersval: TThe value to copy data from.Returnsvoid |
````

