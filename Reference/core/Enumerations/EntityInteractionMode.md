Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entityinteractionmode

API reference

# EntityInteractionMode Enum

The options for interacting with an entity.

## Signature

```
export declare enum EntityInteractionMode
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Both | `"Both"` | The entity can be grabbed and supports physics. |
| Grabbable | `"Grabbable"` | The entity can be grabbed. |
| Invalid | `"Invalid"` | The entity cannot be grabbed, and does not support physics. |
| Physics | `"Physics"` | The entity supports physics and can be moved by script. |