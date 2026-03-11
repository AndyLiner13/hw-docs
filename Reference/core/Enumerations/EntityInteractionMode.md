---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityinteractionmode
---

# [EntityInteractionMode Enum](#entityinteractionmode-enum)

The options for interacting with an entity.

## [Signature](#signature)

```ts
export declare enum EntityInteractionMode 
```

## [Enumeration Members](#enumeration-members)

| Member    | Value         | Description                                                 |
| --------- | ------------- | ----------------------------------------------------------- |
| Both      | `"Both"`      | The entity can be grabbed and supports physics.             |
| Grabbable | `"Grabbable"` | The entity can be grabbed.                                  |
| Invalid   | `"Invalid"`   | The entity cannot be grabbed, and does not support physics. |
| Physics   | `"Physics"`   | The entity supports physics and can be moved by script.     |

