---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_textgizmo
---

# [TextGizmo Class](#textgizmo-class)

Extends *[Entity](Entity.md)*

Represents a text label in the world.

## [Signature](#signature)

```
export
 declare 
class
 
TextGizmo
 
extends
 
Entity
 
```

## [Properties](#properties)

|          |                                                          |
| -------- | -------------------------------------------------------- |
| **text** | The content to display in the text label.Signature\`\`\` |
| text     |                                                          |
| :        |                                                          |

HorizonProperty <string></string>
;
\`\`\`RemarksIf the content was previously set with `localizableText`, the getter of this property will return the localized string in the language of the local player. Do not use the returned text in attributes shared with other players. Other players might use differnet languages, and only the `LocalizableText` object is localized. |

## [Methods](#methods)

|                |                                                                       |
| -------------- | --------------------------------------------------------------------- |
| **toString()** | Creates a human-readable representation of the entity.Signature\`\`\` |
| toString       |                                                                       |
| ():            |                                                                       |

string
;
\`\`\`ReturnsstringA string representation of the `TextGizmo`. |

