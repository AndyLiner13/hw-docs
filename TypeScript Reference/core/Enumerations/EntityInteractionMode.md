# EntityInteractionMode Enum

The options for interacting with an entity.

## Signature

```typescript
export declare enum EntityInteractionMode
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Both | "Both" | The entity can be grabbed and supports physics. |
| Grabbable | "Grabbable" | The entity can be grabbed. |
| Invalid | "Invalid" | The entity cannot be grabbed, and does not support physics. |
| Physics | "Physics" | The entity supports physics and can be moved by script. |

## Examples

### Setting Entity Interaction Modes

```typescript
// Entity that can be both grabbed and physics-enabled
entity.setInteractionMode(EntityInteractionMode.Both);

// Entity that can only be grabbed
entity.setInteractionMode(EntityInteractionMode.Grabbable);

// Entity with physics but not grabbable
entity.setInteractionMode(EntityInteractionMode.Physics);

// Disable all interactions
entity.setInteractionMode(EntityInteractionMode.Invalid);
```